import { readFile, writeFile } from "node:fs/promises";

const [inputPath, outputPath] = process.argv.slice(2);
if (!inputPath || !outputPath) throw new Error("Usage: node faststart-mp4.mjs <input> <output>");

const source = await readFile(inputPath);

function boxes(buffer) {
  const result = [];
  let offset = 0;
  while (offset + 8 <= buffer.length) {
    let size = buffer.readUInt32BE(offset);
    const type = buffer.toString("ascii", offset + 4, offset + 8);
    let header = 8;
    if (size === 1) {
      size = Number(buffer.readBigUInt64BE(offset + 8));
      header = 16;
    } else if (size === 0) {
      size = buffer.length - offset;
    }
    if (size < header || offset + size > buffer.length) throw new Error(`Invalid ${type} box`);
    result.push({ type, offset, size, header });
    offset += size;
  }
  return result;
}

function patchChunkOffsets(moov, delta) {
  for (let index = 4; index < moov.length - 16; index += 1) {
    const type = moov.toString("ascii", index, index + 4);
    if (type !== "stco" && type !== "co64") continue;
    const start = index - 4;
    const size = moov.readUInt32BE(start);
    const count = moov.readUInt32BE(index + 8);
    const stride = type === "stco" ? 4 : 8;
    const entries = index + 12;
    if (size < 16 || entries + count * stride > start + size || start + size > moov.length) continue;
    for (let item = 0; item < count; item += 1) {
      const position = entries + item * stride;
      if (type === "stco") {
        moov.writeUInt32BE(moov.readUInt32BE(position) + delta, position);
      } else {
        moov.writeBigUInt64BE(moov.readBigUInt64BE(position) + BigInt(delta), position);
      }
    }
    index = start + size - 1;
  }
}

const topLevel = boxes(source);
const moovBox = topLevel.find((box) => box.type === "moov");
const mdatBox = topLevel.find((box) => box.type === "mdat");
if (!moovBox || !mdatBox) throw new Error("MP4 must contain moov and mdat boxes");

if (moovBox.offset < mdatBox.offset) {
  await writeFile(outputPath, source);
  process.exit(0);
}

const ordered = [
  ...topLevel.filter((box) => box.type === "ftyp"),
  moovBox,
  ...topLevel.filter((box) => box.type !== "ftyp" && box.type !== "moov"),
];

let nextOffset = 0;
let newMdatOffset = 0;
for (const box of ordered) {
  if (box.type === "mdat") newMdatOffset = nextOffset;
  nextOffset += box.size;
}

const delta = newMdatOffset - mdatBox.offset;
const moov = Buffer.from(source.subarray(moovBox.offset, moovBox.offset + moovBox.size));
patchChunkOffsets(moov, delta);

const output = Buffer.concat(
  ordered.map((box) =>
    box.type === "moov"
      ? moov
      : source.subarray(box.offset, box.offset + box.size),
  ),
);

if (output.length !== source.length) throw new Error("Faststart output size mismatch");
await writeFile(outputPath, output);
