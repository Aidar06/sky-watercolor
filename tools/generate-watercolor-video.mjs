import { readFile, writeFile } from "node:fs/promises";
import { extname } from "node:path";

const [envPath, startPath, endPath, outputPath] = process.argv.slice(2);

if (!envPath || !startPath || !endPath || !outputPath) {
  throw new Error("Usage: node generate-watercolor-video.mjs <env> <start> <end> <output>");
}

const envText = await readFile(envPath, "utf8");
const keyLine = envText
  .split(/\r?\n/)
  .find((line) => /^\s*HIGGSFIELD_API_KEY\s*=/.test(line));

if (!keyLine) throw new Error("HIGGSFIELD_API_KEY is missing");

const apiKey = keyLine.split("=").slice(1).join("=").trim().replace(/^['"]|['"]$/g, "");
if (!apiKey) throw new Error("HIGGSFIELD_API_KEY is empty");

const apiBase = "https://api.higgsfield.ai";
const authHeaders = {
  Authorization: `Key ${apiKey}`,
  "Content-Type": "application/json",
};

function contentType(filePath) {
  const extension = extname(filePath).toLowerCase();
  if (extension === ".webp") return "image/webp";
  if (extension === ".jpg" || extension === ".jpeg") return "image/jpeg";
  return "image/png";
}

async function responseJson(response, label) {
  const body = await response.text();
  if (!response.ok) throw new Error(`${label} failed (${response.status}): ${body.slice(0, 500)}`);
  return body ? JSON.parse(body) : {};
}

async function uploadImage(filePath) {
  const type = contentType(filePath);
  const signResponse = await fetch(`${apiBase}/files/generate-upload-url`, {
    method: "POST",
    headers: authHeaders,
    body: JSON.stringify({ content_type: type }),
  });
  const signed = await responseJson(signResponse, "Upload signing");
  const uploadHeaders = { ...(signed.upload_headers ?? {}), "Content-Type": type };
  const uploadResponse = await fetch(signed.upload_url, {
    method: "PUT",
    headers: uploadHeaders,
    body: await readFile(filePath),
  });
  if (!uploadResponse.ok) throw new Error(`Image upload failed (${uploadResponse.status})`);
  return signed.public_url;
}

console.log("Uploading the start and end frames…");
const [imageUrl, endImageUrl] = await Promise.all([uploadImage(startPath), uploadImage(endPath)]);

console.log("Submitting the 5-second watercolor animation…");
const generationResponse = await fetch(`${apiBase}/bytedance/seedance-2.5/image-to-video`, {
  method: "POST",
  headers: authHeaders,
  body: JSON.stringify({
    prompt:
      "A locked-off vertical shot of pristine warm white watercolor paper. Pale powder-blue watercolor pigment touches the paper and spreads organically through the fibers in real time, blooming from several soft points with delicate wet edges, capillary feathering, translucent layers and a few tiny natural splashes. The paint gradually fills the composition and finishes by matching the supplied final frame exactly. No camera movement, no zoom, no objects, no text, no hands, no flowers, no dark colors, no cuts.",
    duration: 5,
    image_url: imageUrl,
    end_image_url: endImageUrl,
    resolution: "720p",
    bitrate_mode: "high",
    output_format: "mp4",
    generate_audio: false,
  }),
});
const generation = await responseJson(generationResponse, "Generation submission");
const requestId = generation.request_id;
if (!requestId) throw new Error("Generation response did not include request_id");

const statusUrl = generation.status_url || `${apiBase}/requests/${requestId}/status`;
const terminal = new Set(["completed", "failed", "nsfw", "canceled"]);
let result = generation;

while (!terminal.has(result.status)) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const statusResponse = await fetch(statusUrl, { headers: { Authorization: `Key ${apiKey}` } });
  result = await responseJson(statusResponse, "Generation status");
  console.log(`Generation status: ${result.status ?? "unknown"}`);
}

if (result.status !== "completed" || !result.video?.url) {
  throw new Error(`Generation ended with status: ${result.status}`);
}

console.log("Downloading the generated video…");
const videoResponse = await fetch(result.video.url);
if (!videoResponse.ok) throw new Error(`Video download failed (${videoResponse.status})`);
await writeFile(outputPath, Buffer.from(await videoResponse.arrayBuffer()));
console.log(`Saved: ${outputPath}`);
