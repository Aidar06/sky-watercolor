const API_BASE = "https://x8ki-letl-twmt.n7.xano.io/api:X8-e2j1w/priglosi";

const copy = {
  ru: {
    loading: "Готовим ваше приглашение…", errorTitle: "Не удалось открыть приглашение", loadError: "Данные приглашения сейчас недоступны. Попробуйте немного позже.", retry: "Попробовать снова", invitationLabel: "Приглашение на свадьбу", saveTheDate: "Сохраните дату", ourDay: "Наш особенный день", untilWedding: "До нашей свадьбы", countingMoments: "Считаем счастливые мгновения", dayPlan: "Всё самое важное", programTitle: "Программа дня", noCeremonies: "Программа будет объявлена позже.", weWaitForYou: "Ждём вас", venueTitle: "Место проведения", replyKicker: "Ваш ответ поможет нам", rsvpTitle: "Анкета гостя", rsvpText: "Пожалуйста, подтвердите своё присутствие.", guestName: "Ваше имя", attendanceQuestion: "Вы сможете присутствовать?", attendingYes: "Да, с радостью приду", attendingNo: "К сожалению, не смогу", guestCount: "Количество гостей", wishLabel: "Пожелание молодожёнам", sendReply: "Отправить ответ", sending: "Сохраняем ответ…", saveSuccess: "Спасибо! Ваш ответ сохранён.", saveError: "Не удалось сохранить ответ. Попробуйте ещё раз.", withLove: "С любовью ждём вас!", days: "дней", hours: "часов", minutes: "минут", seconds: "секунд",
    months: ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"], monthsGenitive: ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"], weekdays: ["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"], weekdaysShort: ["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],
  },
  ky: {
    loading: "Чакыруу даярдалып жатат…", errorTitle: "Чакырууну ачуу мүмкүн болгон жок", loadError: "Чакыруу маалыматы азыр жеткиликсиз. Кийинчерээк аракет кылыңыз.", retry: "Кайра аракет кылуу", invitationLabel: "Үйлөнүү тоюна чакыруу", saveTheDate: "Бул күндү белгилеп коюңуз", ourDay: "Биздин өзгөчө күнүбүз", untilWedding: "Үйлөнүү тоюбузга чейин", countingMoments: "Бактылуу көз ирмемдерди санайбыз", dayPlan: "Эң маанилүү учурлар", programTitle: "Тойдун программасы", noCeremonies: "Тойдун программасы кийинчерээк жарыяланат.", weWaitForYou: "Сиздерди күтөбүз", venueTitle: "Өтүүчү жай", replyKicker: "Жообуңуз бизге жардам берет", rsvpTitle: "Коноктун анкетасы", rsvpText: "Сураныч, келериңизди ырастап коюңуз.", guestName: "Атыңыз", attendanceQuestion: "Тойго келе аласызбы?", attendingYes: "Ооба, кубаныч менен келем", attendingNo: "Тилекке каршы, келе албайм", guestCount: "Коноктордун саны", wishLabel: "Жаш жубайларга каалоо", sendReply: "Жоопту жөнөтүү", sending: "Жооп сакталууда…", saveSuccess: "Рахмат! Жообуңуз сакталды.", saveError: "Жооп сакталган жок. Кайра аракет кылыңыз.", withLove: "Сиздерди сүйүү менен күтөбүз!", days: "күн", hours: "саат", minutes: "мүнөт", seconds: "секунд",
    months: ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"], monthsGenitive: ["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"], weekdays: ["жекшемби","дүйшөмбү","шейшемби","шаршемби","бейшемби","жума","ишемби"], weekdaysShort: ["Дш","Шш","Шр","Бш","Жм","Иш","Жк"],
  },
  kk: {
    loading: "Шақыру дайындалуда…", errorTitle: "Шақыруды ашу мүмкін болмады", loadError: "Шақыру деректері әзірше қолжетімсіз. Кейінірек қайталап көріңіз.", retry: "Қайта көру", invitationLabel: "Үйлену тойына шақыру", saveTheDate: "Күнді белгілеп қойыңыз", ourDay: "Біздің ерекше күніміз", untilWedding: "Тойымызға дейін", countingMoments: "Бақытты сәттерді санаймыз", dayPlan: "Ең маңызды сәттер", programTitle: "Күн бағдарламасы", noCeremonies: "Бағдарлама кейінірек жарияланады.", weWaitForYou: "Сіздерді күтеміз", venueTitle: "Өтетін орны", replyKicker: "Жауабыңыз бізге көмектеседі", rsvpTitle: "Қонақ сауалнамасы", rsvpText: "Қатысатыныңызды растауыңызды сұраймыз.", guestName: "Атыңыз", attendanceQuestion: "Тойға қатыса аласыз ба?", attendingYes: "Иә, қуана келемін", attendingNo: "Өкінішке қарай, келе алмаймын", guestCount: "Қонақтар саны", wishLabel: "Жас жұбайларға тілек", sendReply: "Жауап жіберу", sending: "Жауап сақталуда…", saveSuccess: "Рақмет! Жауабыңыз сақталды.", saveError: "Жауап сақталмады. Қайта көріңіз.", withLove: "Сіздерді асыға күтеміз!", days: "күн", hours: "сағат", minutes: "минут", seconds: "секунд",
    months: ["Қаңтар","Ақпан","Наурыз","Сәуір","Мамыр","Маусым","Шілде","Тамыз","Қыркүйек","Қазан","Қараша","Желтоқсан"], monthsGenitive: ["қаңтар","ақпан","наурыз","сәуір","мамыр","маусым","шілде","тамыз","қыркүйек","қазан","қараша","желтоқсан"], weekdays: ["жексенбі","дүйсенбі","сейсенбі","сәрсенбі","бейсенбі","жұма","сенбі"], weekdaysShort: ["Дс","Сс","Ср","Бс","Жм","Сб","Жс"],
  },
};

let language = localStorage.getItem("wedding-language") || "ru";
let invitation, weddingDate, countdownTimer, toastTimer;
const $ = (selector) => document.querySelector(selector);
const elements = {
  loading: $("#loadingState"), error: $("#errorState"), errorMessage: $("#errorMessage"), invitation: $("#invitation"), retry: $("#retryButton"), groom: $("#groomName"), bride: $("#brideName"), heroDate: $("#heroDate"), signature: $("#coupleSignature"), weekday: $("#weddingWeekday"), longDate: $("#weddingLongDate"), time: $("#weddingTime"), calendar: $("#calendar"), program: $("#programList"), venueType: $("#venueType"), venueName: $("#venueName"), venueAddress: $("#venueAddress"), googleMaps: $("#googleMapsLink"), twoGis: $("#twoGisLink"), form: $("#rsvpForm"), rsvpSection: $(".section--rsvp"), guestCount: $("#guestCount"), guestWish: $("#guestWish"), submit: $("#submitButton"), formStatus: $("#formStatus"), footerNames: $("#footerNames"), invitationTitle: $("#invitationTitle"), invitationText: $("#invitationText"), wishBlock: $("#wishBlock"), wishTitle: $("#wishTitle"), wishText: $("#wishText"), toast: $("#toast"),
};

const text = (key) => copy[language]?.[key] ?? copy.ru[key] ?? key;
const escapeHtml = (value) => String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
const invitationId = () => location.pathname.split("/").filter(Boolean)[0] || "1";
const localized = (value) => {
  const fallbackLanguage = invitation?.languages?.default;
  return value?.[language] || value?.[fallbackLanguage] || value?.ru || {};
};
const validMapUrl = (value) => { try { const url = new URL(String(value || "")); return ["http:", "https:"].includes(url.protocol) ? url.href : ""; } catch { return ""; } };

async function requestInvitation(id) {
  const response = await fetch(`${API_BASE}/${encodeURIComponent(id)}`, { headers: { Accept: "application/json" }, cache: "no-store" });
  if (!response.ok) throw new Error(`GET ${response.status}`);
  const json = await response.json();
  const data = Array.isArray(json) ? json[0] : json;
  if (!data) throw new Error("Empty invitation");
  return data;
}

function configureLanguages() {
  const configured = Array.isArray(invitation?.languages?.enabled) ? invitation.languages.enabled : [];
  const enabled = [...new Set(configured.filter((code) => copy[code]))];
  if (!enabled.length) enabled.push("ru");
  const defaultLanguage = enabled.includes(invitation?.languages?.default) ? invitation.languages.default : enabled[0];
  if (!enabled.includes(language)) language = defaultLanguage;
  document.querySelectorAll("[data-language]").forEach((button) => { button.hidden = !enabled.includes(button.dataset.language); });
  $(".language-menu").hidden = enabled.length < 2;
  localStorage.setItem("wedding-language", language);
}

function applyLanguage() {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((node) => { node.textContent = text(node.dataset.i18n); });
  document.querySelectorAll("[data-language]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.language === language)));
  $(".language-menu__current").textContent = language.toUpperCase();
  if (invitation) renderInvitation();
}

function renderInvitation() {
  const groom = invitation?.names?.groom || "", bride = invitation?.names?.bride || "", intro = localized(invitation.invitation);
  elements.groom.textContent = groom; elements.bride.textContent = bride;
  elements.signature.textContent = elements.footerNames.textContent = [groom, bride].filter(Boolean).join(" & ");
  elements.invitationTitle.textContent = intro.title || ""; elements.invitationText.textContent = intro.text || "";
  document.title = groom && bride ? `${groom} & ${bride}` : text("invitationLabel");
  renderDate(); renderCalendar(); renderCountdown(); renderProgram(); renderVenue(); renderWish(); configureRsvp();
}

function renderDate() {
  const day = weddingDate.getDate(), month = weddingDate.getMonth(), year = weddingDate.getFullYear();
  elements.heroDate.textContent = `${String(day).padStart(2,"0")}.${String(month + 1).padStart(2,"0")}.${year}`;
  elements.weekday.textContent = copy[language].weekdays[weddingDate.getDay()]; elements.longDate.textContent = `${day} ${copy[language].monthsGenitive[month]} ${year}`;
  elements.time.textContent = `${String(weddingDate.getHours()).padStart(2,"0")}:${String(weddingDate.getMinutes()).padStart(2,"0")}`;
}

function renderCalendar() {
  const year = weddingDate.getFullYear(), month = weddingDate.getMonth(), selected = weddingDate.getDate(), first = (new Date(year, month, 1).getDay() + 6) % 7, total = new Date(year, month + 1, 0).getDate();
  const cells = copy[language].weekdaysShort.map((day) => `<span class="calendar__weekday">${day}</span>`);
  for (let i = 0; i < first; i += 1) cells.push('<span class="calendar__day calendar__day--empty"></span>');
  for (let day = 1; day <= total; day += 1) cells.push(`<span class="calendar__day${day === selected ? " calendar__day--wedding" : ""}">${day}</span>`);
  elements.calendar.innerHTML = `<div class="calendar__month">${copy[language].months[month]} ${year}</div><div class="calendar__grid">${cells.join("")}</div>`;
}

function renderCountdown() {
  clearInterval(countdownTimer);
  const update = () => {
    const seconds = Math.floor(Math.max(0, weddingDate - Date.now()) / 1000);
    const values = { days: Math.floor(seconds / 86400), hours: Math.floor(seconds % 86400 / 3600), minutes: Math.floor(seconds % 3600 / 60), seconds: seconds % 60 };
    Object.entries(values).forEach(([unit, value]) => { $(`[data-count="${unit}"]`).textContent = String(value).padStart(2,"0"); $(`[data-unit="${unit}"]`).textContent = text(unit); });
  };
  update(); countdownTimer = setInterval(update, 1000);
}

function renderProgram() {
  const ceremonies = [...(invitation.ceremonies || [])].sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));
  elements.program.innerHTML = ceremonies.length ? ceremonies.map((item) => { const value = localized(item.content); return `<article class="timeline__item"><span class="timeline__flower" aria-hidden="true"></span><time class="timeline__time">${escapeHtml(item.time)}</time><div class="timeline__content"><h3>${escapeHtml(value.title)}</h3>${value.text ? `<p>${escapeHtml(value.text)}</p>` : ""}</div></article>`; }).join("") : `<p class="empty-copy">${text("noCeremonies")}</p>`;
}

function renderVenue() {
  const venue = localized(invitation?.venue?.content), map = invitation?.venue?.map || {}, query = [venue.name, venue.address].filter(Boolean).join(", ");
  elements.venueType.textContent = venue.type || ""; elements.venueName.textContent = venue.name || ""; elements.venueAddress.textContent = venue.address || "";
  const google = validMapUrl(map.google_url) || (query ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}` : "");
  const gis = validMapUrl(map.two_gis_url) || (query ? `https://2gis.kg/search/${encodeURIComponent(query)}` : "");
  elements.googleMaps.hidden = !google; elements.twoGis.hidden = !gis;
  if (google) elements.googleMaps.href = google; if (gis) elements.twoGis.href = gis;
}

function renderWish() {
  const block = invitation.wish_block || {}, value = localized(block.content);
  elements.wishBlock.hidden = !block.enabled; elements.wishTitle.textContent = value.title || ""; elements.wishText.textContent = value.text || "";
}

function configureRsvp() {
  const config = invitation.rsvp || {};
  elements.rsvpSection.hidden = config.enabled === false; elements.guestWish.closest("label").hidden = config.allow_guest_wish === false;
  const maxGuests = Math.max(1, Number(config.max_guests) || 10);
  elements.guestCount.max = String(maxGuests);
  elements.guestCount.value = String(Math.min(maxGuests, Math.max(1, Number(elements.guestCount.value) || 1)));
}

function syncGuestCount() {
  const attending = elements.form.elements.attendance.value === "yes";
  elements.guestCount.disabled = !attending; elements.guestCount.required = attending; elements.guestCount.min = attending ? "1" : "0"; elements.guestCount.value = attending ? Math.max(1, Number(elements.guestCount.value) || 1) : 0;
}

async function submitRsvp(event) {
  event.preventDefault(); if (!elements.form.reportValidity()) return;
  const id = invitationId(), attending = elements.form.elements.attendance.value === "yes";
  const maxGuests = Math.max(1, Number(invitation.rsvp?.max_guests) || 10);
  const guest = { name: elements.form.elements.name.value.trim(), wish: invitation.rsvp?.allow_guest_wish === false ? "" : elements.form.elements.wish.value.trim(), guests_count: attending ? Math.min(maxGuests, Math.max(1, Number(elements.guestCount.value) || 1)) : 0, is_attending: attending };
  elements.submit.disabled = true; elements.formStatus.textContent = text("sending"); elements.formStatus.classList.remove("is-error");
  try {
    const latest = await requestInvitation(id);
    if (!Array.isArray(latest.guests)) console.warn("Backend response has no guests array; previous RSVP answers cannot be preserved unless GET returns guests.");
    const updated = { id: latest.id, languages: latest.languages, names: latest.names, date: latest.date, invitation: latest.invitation, wish_block: latest.wish_block, ceremonies: latest.ceremonies, venue: latest.venue, rsvp: latest.rsvp, guests: [...(Array.isArray(latest.guests) ? latest.guests : []), guest] };
    const response = await fetch(`${API_BASE}/${encodeURIComponent(id)}/full`, { method: "PATCH", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(updated) });
    if (!response.ok) throw new Error(`PATCH ${response.status}`);
    invitation = updated; elements.form.reset(); elements.form.elements.attendance.value = "yes"; syncGuestCount(); elements.formStatus.textContent = text("saveSuccess"); showToast(text("saveSuccess"));
  } catch (error) { console.error(error); elements.formStatus.classList.add("is-error"); elements.formStatus.textContent = text("saveError"); showToast(text("saveError")); }
  finally { elements.submit.disabled = false; }
}

function showToast(message) { clearTimeout(toastTimer); elements.toast.textContent = message; elements.toast.classList.add("is-visible"); toastTimer = setTimeout(() => elements.toast.classList.remove("is-visible"), 3200); }
function observeReveals() { const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: 0.12 }); document.querySelectorAll(".reveal").forEach((node) => observer.observe(node)); }

async function loadInvitation() {
  elements.loading.hidden = false; elements.error.hidden = true; elements.invitation.hidden = true;
  try {
    invitation = await requestInvitation(invitationId()); configureLanguages(); weddingDate = new Date(invitation.date);
    if (Number.isNaN(weddingDate.getTime())) throw new Error("Invalid date");
    applyLanguage(); elements.loading.hidden = true; elements.invitation.hidden = false; requestAnimationFrame(observeReveals);
  } catch (error) { console.error(error); elements.loading.hidden = true; elements.error.hidden = false; elements.errorMessage.textContent = text("loadError"); }
}

const languageMenu=$(".language-menu"),languageMenuToggle=$(".language-menu__toggle");
languageMenuToggle.addEventListener("click",()=>{const open=languageMenu.classList.toggle("is-open");languageMenuToggle.setAttribute("aria-expanded",String(open))});
document.addEventListener("click",event=>{if(!languageMenu.contains(event.target)){languageMenu.classList.remove("is-open");languageMenuToggle.setAttribute("aria-expanded","false")}});
document.querySelectorAll("[data-language]").forEach((button) => button.addEventListener("click", () => { language = button.dataset.language; localStorage.setItem("wedding-language", language); applyLanguage(); languageMenu.classList.remove("is-open"); languageMenuToggle.setAttribute("aria-expanded","false"); }));
elements.retry.addEventListener("click", loadInvitation); elements.form.addEventListener("submit", submitRsvp);
elements.form.querySelectorAll('[name="attendance"]').forEach((radio) => radio.addEventListener("change", syncGuestCount));
syncGuestCount(); loadInvitation();
