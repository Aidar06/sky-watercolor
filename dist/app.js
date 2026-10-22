const API_BASE = "https://x8ki-letl-twmt.n7.xano.io/api:X8-e2j1w/priglosi";

const copy = {
  ru: {
    loading: "Готовим ваше приглашение…",
    errorTitle: "Не удалось открыть приглашение",
    missingId: "В адресе не указан ID приглашения. Откройте ссылку в формате site.com/3.",
    loadError: "Данные приглашения сейчас недоступны. Пожалуйста, попробуйте ещё раз немного позже.",
    retry: "Попробовать снова",
    invitationLabel: "Приглашение на свадьбу",
    dearGuests: "Дорогие родные и близкие!",
    welcomeText:
      "С большой радостью приглашаем вас разделить с нами один из самых важных и счастливых дней нашей жизни — день нашей свадьбы.",
    saveTheDate: "Сохраните дату",
    ourDay: "Наш особенный день",
    untilWedding: "До нашей свадьбы",
    countingMoments: "Считаем счастливые мгновения",
    dayPlan: "Всё самое важное",
    programTitle: "Программа дня",
    noCeremonies: "Программа будет объявлена позже.",
    weWaitForYou: "Ждём вас",
    venueTitle: "Место проведения",
    replyKicker: "Ваш ответ поможет нам",
    rsvpTitle: "Анкета гостя",
    rsvpText:
      "Пожалуйста, подтвердите своё присутствие. Это поможет нам всё подготовить с заботой о каждом госте.",
    guestName: "Ваше имя",
    attendanceQuestion: "Вы сможете присутствовать?",
    attendingYes: "Да, с радостью приду",
    attendingNo: "К сожалению, не смогу",
    guestCount: "Количество гостей",
    wishLabel: "Пожелание молодожёнам",
    sendReply: "Отправить ответ",
    sending: "Сохраняем ответ…",
    saveSuccess: "Спасибо! Ваш ответ сохранён.",
    saveError: "Не удалось сохранить ответ. Проверьте соединение и попробуйте ещё раз.",
    guestList: "Список гостей",
    ourGuests: "Наши гости",
    noGuests: "Пока никто не оставил ответ.",
    willAttend: "Придёт",
    willNotAttend: "Не придёт",
    guestsWord: "Количество гостей",
    withLove: "С любовью ждём вас!",
    close: "Закрыть",
    days: "дней",
    hours: "часов",
    minutes: "минут",
    seconds: "секунд",
    months: [
      "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
      "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",
    ],
    monthsGenitive: [
      "января", "февраля", "марта", "апреля", "мая", "июня",
      "июля", "августа", "сентября", "октября", "ноября", "декабря",
    ],
    weekdays: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
    weekdaysShort: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
  },
  kg: {
    loading: "Чакыруу даярдалып жатат…",
    errorTitle: "Чакырууну ачуу мүмкүн болгон жок",
    missingId: "Даректе чакыруунун ID номери жок. Шилтемени site.com/3 форматында ачыңыз.",
    loadError: "Чакыруу маалыматы азыр жеткиликсиз. Бир аздан кийин кайра аракет кылыңыз.",
    retry: "Кайра аракет кылуу",
    invitationLabel: "Үйлөнүү тоюна чакыруу",
    dearGuests: "Урматтуу туугандар жана жакындарыбыз!",
    welcomeText:
      "Сиздерди жашообуздагы эң маанилүү жана бактылуу күндөрдүн бири — үйлөнүү тоюбузду — биз менен бирге белгилөөгө чакырабыз.",
    saveTheDate: "Бул күндү белгилеп коюңуз",
    ourDay: "Биздин өзгөчө күнүбүз",
    untilWedding: "Үйлөнүү тоюбузга чейин",
    countingMoments: "Бактылуу көз ирмемдерди санайбыз",
    dayPlan: "Эң маанилүү учурлар",
    programTitle: "Тойдун программасы",
    noCeremonies: "Тойдун программасы кийинчерээк жарыяланат.",
    weWaitForYou: "Сиздерди күтөбүз",
    venueTitle: "Өтүүчү жай",
    replyKicker: "Жообуңуз бизге жардам берет",
    rsvpTitle: "Коноктун анкетасы",
    rsvpText:
      "Сураныч, келериңизди ырастап коюңуз. Бул ар бир конокко кам көрүп, баарын мыкты даярдоого жардам берет.",
    guestName: "Атыңыз",
    attendanceQuestion: "Тойго келе аласызбы?",
    attendingYes: "Ооба, кубаныч менен келем",
    attendingNo: "Тилекке каршы, келе албайм",
    guestCount: "Коноктордун саны",
    wishLabel: "Жаш жубайларга каалоо",
    sendReply: "Жоопту жөнөтүү",
    sending: "Жооп сакталууда…",
    saveSuccess: "Рахмат! Жообуңуз сакталды.",
    saveError: "Жооп сакталган жок. Интернет байланышын текшерип, кайра аракет кылыңыз.",
    guestList: "Коноктордун тизмеси",
    ourGuests: "Биздин коноктор",
    noGuests: "Азырынча эч ким жооп калтыра элек.",
    willAttend: "Келет",
    willNotAttend: "Келбейт",
    guestsWord: "Коноктордун саны",
    withLove: "Сиздерди сүйүү менен күтөбүз!",
    close: "Жабуу",
    days: "күн",
    hours: "саат",
    minutes: "мүнөт",
    seconds: "секунд",
    months: [
      "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
      "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",
    ],
    monthsGenitive: [
      "январь", "февраль", "март", "апрель", "май", "июнь",
      "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь",
    ],
    weekdays: ["жекшемби", "дүйшөмбү", "шейшемби", "шаршемби", "бейшемби", "жума", "ишемби"],
    weekdaysShort: ["Дш", "Шш", "Шр", "Бш", "Жм", "Иш", "Жк"],
  },
};

let language = localStorage.getItem("wedding-language") === "kg" ? "kg" : "ru";
let invitation = null;
let weddingDate = null;
let countdownTimer = null;
let toastTimer = null;
let introStarted = false;
let introVideoFinished = false;
let invitationReady = false;
let introFallbackTimer = null;

const elements = {
  introStage: document.querySelector("#introStage"),
  introVideo: document.querySelector("#introVideo"),
  loading: document.querySelector("#loadingState"),
  error: document.querySelector("#errorState"),
  errorMessage: document.querySelector("#errorMessage"),
  invitation: document.querySelector("#invitation"),
  retry: document.querySelector("#retryButton"),
  groom: document.querySelector("#groomName"),
  bride: document.querySelector("#brideName"),
  heroDate: document.querySelector("#heroDate"),
  signature: document.querySelector("#coupleSignature"),
  weekday: document.querySelector("#weddingWeekday"),
  longDate: document.querySelector("#weddingLongDate"),
  time: document.querySelector("#weddingTime"),
  calendar: document.querySelector("#calendar"),
  program: document.querySelector("#programList"),
  venueType: document.querySelector("#venueType"),
  venueName: document.querySelector("#venueName"),
  venueAddress: document.querySelector("#venueAddress"),
  googleMaps: document.querySelector("#googleMapsLink"),
  twoGis: document.querySelector("#twoGisLink"),
  form: document.querySelector("#rsvpForm"),
  guestCount: document.querySelector("#guestCount"),
  submit: document.querySelector("#submitButton"),
  formStatus: document.querySelector("#formStatus"),
  guestBadge: document.querySelector("#guestBadge"),
  guestSheet: document.querySelector("#guestSheet"),
  guestList: document.querySelector("#guestListContent"),
  openGuests: document.querySelector("#openGuestsButton"),
  closeGuests: document.querySelector("#closeGuestsButton"),
  footerNames: document.querySelector("#footerNames"),
  toast: document.querySelector("#toast"),
};

function text(key) {
  return copy[language][key] ?? key;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function invitationId() {
  const firstSegment = window.location.pathname.split("/").filter(Boolean)[0];
  return firstSegment || new URLSearchParams(window.location.search).get("id") || "";
}

function normalizePayload(payload) {
  if (Array.isArray(payload)) return payload[0] ?? null;
  return payload && typeof payload === "object" ? payload : null;
}

function parseDate(value) {
  if (value instanceof Date) return value;
  if (typeof value === "number" || /^\d+$/.test(String(value ?? "").trim())) {
    const numeric = Number(value);
    const date = new Date(numeric < 1e12 ? numeric * 1000 : numeric);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  const source = String(value ?? "").trim();
  const normalized = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}/.test(source)
    ? source.replace(" ", "T")
    : source;
  const date = new Date(normalized);
  return Number.isNaN(date.getTime()) ? null : date;
}

async function requestInvitation(id) {
  const response = await fetch(`${API_BASE}/${encodeURIComponent(id)}`, {
    headers: { Accept: "application/json" },
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`GET ${response.status}`);
  const data = normalizePayload(await response.json());
  if (!data) throw new Error("Empty invitation response");
  return data;
}

async function loadInvitation() {
  const id = invitationId();
  elements.loading.hidden = false;
  elements.error.hidden = true;
  elements.invitation.hidden = true;

  if (!id) {
    showError(text("missingId"));
    return;
  }

  try {
    invitation = await requestInvitation(id);
    weddingDate = parseDate(invitation.date);
    if (!weddingDate) throw new Error("Invalid wedding date");
    renderInvitation();
    elements.loading.hidden = true;
    elements.invitation.hidden = false;
    invitationReady = true;
    completeIntroIfReady();
    requestAnimationFrame(observeReveals);
  } catch (error) {
    console.error(error);
    showError(text("loadError"));
  }
}

function showError(message) {
  window.clearTimeout(introFallbackTimer);
  elements.introStage.hidden = true;
  document.body.classList.remove("intro-pending");
  document.body.classList.add("intro-complete");
  elements.loading.hidden = true;
  elements.invitation.hidden = true;
  elements.error.hidden = false;
  elements.errorMessage.textContent = message;
}

function applyLanguage() {
  document.documentElement.lang = language === "kg" ? "ky" : "ru";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = text(node.dataset.i18n);
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });
  elements.closeGuests.setAttribute("aria-label", text("close"));
  elements.introStage.setAttribute(
    "aria-label",
    language === "kg" ? "Чакырууну ачуу" : "Открыть приглашение",
  );
  if (invitation && weddingDate) renderInvitation();
}

function finishIntroPlayback() {
  if (introVideoFinished) return;
  introVideoFinished = true;
  window.clearTimeout(introFallbackTimer);
  completeIntroIfReady();
}

function completeIntroIfReady() {
  if (!introVideoFinished || !invitationReady) return;
  elements.introStage.classList.add("is-complete");
  document.body.classList.remove("intro-pending");
  document.body.classList.add("intro-complete");
  window.setTimeout(() => {
    elements.introStage.hidden = true;
  }, 1100);
}

function startIntro() {
  if (introStarted) return;
  introStarted = true;
  elements.introStage.classList.add("is-playing");
  elements.introStage.setAttribute("aria-busy", "true");
  elements.introVideo.currentTime = 0;
  elements.introVideo.play().catch(() => finishIntroPlayback());
  introFallbackTimer = window.setTimeout(finishIntroPlayback, 6500);
}

function renderInvitation() {
  applyLanguageOnly();

  const groom = invitation?.names?.has ?? "";
  const bride = invitation?.names?.wife ?? "";
  elements.groom.textContent = groom;
  elements.bride.textContent = bride;
  elements.signature.textContent = [groom, bride].filter(Boolean).join(" & ");
  elements.footerNames.textContent = [groom, bride].filter(Boolean).join(" & ");
  document.title = groom && bride ? `${groom} & ${bride}` : text("invitationLabel");

  renderDate();
  renderCalendar();
  renderCountdown();
  renderProgram();
  renderVenue();
  renderGuests();
}

function applyLanguageOnly() {
  document.documentElement.lang = language === "kg" ? "ky" : "ru";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = text(node.dataset.i18n);
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });
  elements.closeGuests.setAttribute("aria-label", text("close"));
}

function renderDate() {
  const day = weddingDate.getDate();
  const month = weddingDate.getMonth();
  const year = weddingDate.getFullYear();
  const timeValue = `${String(weddingDate.getHours()).padStart(2, "0")}:${String(
    weddingDate.getMinutes(),
  ).padStart(2, "0")}`;

  elements.heroDate.textContent = `${String(day).padStart(2, "0")}.${String(month + 1).padStart(2, "0")}.${year}`;
  elements.weekday.textContent = copy[language].weekdays[weddingDate.getDay()];
  elements.longDate.textContent = `${day} ${copy[language].monthsGenitive[month]} ${year}`;
  elements.time.textContent = timeValue;
}

function renderCalendar() {
  const year = weddingDate.getFullYear();
  const month = weddingDate.getMonth();
  const selectedDay = weddingDate.getDate();
  const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];

  copy[language].weekdaysShort.forEach((weekday) => {
    cells.push(`<span class="calendar__weekday">${escapeHtml(weekday)}</span>`);
  });
  for (let index = 0; index < firstWeekday; index += 1) {
    cells.push('<span class="calendar__day calendar__day--empty"></span>');
  }
  for (let day = 1; day <= daysInMonth; day += 1) {
    const selected = day === selectedDay ? " calendar__day--wedding" : "";
    cells.push(`<span class="calendar__day${selected}">${day}</span>`);
  }

  elements.calendar.innerHTML = `
    <div class="calendar__month">${escapeHtml(copy[language].months[month])} ${year}</div>
    <div class="calendar__grid">${cells.join("")}</div>
  `;
}

function renderCountdown() {
  if (countdownTimer) clearInterval(countdownTimer);

  const update = () => {
    const remaining = Math.max(0, weddingDate.getTime() - Date.now());
    const totalSeconds = Math.floor(remaining / 1000);
    const values = {
      days: Math.floor(totalSeconds / 86400),
      hours: Math.floor((totalSeconds % 86400) / 3600),
      minutes: Math.floor((totalSeconds % 3600) / 60),
      seconds: totalSeconds % 60,
    };

    Object.entries(values).forEach(([unit, value]) => {
      document.querySelector(`[data-count="${unit}"]`).textContent = String(value).padStart(2, "0");
      document.querySelector(`[data-unit="${unit}"]`).textContent = text(unit);
    });
  };

  update();
  countdownTimer = window.setInterval(update, 1000);
}

function renderProgram() {
  const ceremonies = Array.isArray(invitation.ceremonies) ? invitation.ceremonies : [];
  if (!ceremonies.length) {
    elements.program.innerHTML = `<p class="empty-copy">${escapeHtml(text("noCeremonies"))}</p>`;
    return;
  }

  elements.program.innerHTML = ceremonies
    .map((ceremony) => {
      const title = language === "kg" ? ceremony.ceremony_kg : ceremony.ceremony_ru;
      const description = language === "kg" ? ceremony.text_kg : ceremony.text_ru;
      return `
        <article class="timeline__item">
          <span class="timeline__flower" aria-hidden="true"></span>
          <time class="timeline__time">${escapeHtml(ceremony.time ?? "")}</time>
          <div class="timeline__content">
            <h3>${escapeHtml(title ?? "")}</h3>
            ${description ? `<p>${escapeHtml(description)}</p>` : ""}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderVenue() {
  const address = invitation.adress ?? {};
  const type = address.pl ?? "";
  const name = address.name ?? "";
  const street = address.adrr ?? "";
  const query = [name, street].filter(Boolean).join(", ");

  elements.venueType.textContent = type;
  elements.venueName.textContent = name;
  elements.venueAddress.textContent = street;
  elements.googleMaps.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  elements.twoGis.href = `https://2gis.kg/search/${encodeURIComponent(query)}`;
}

function renderGuests() {
  const guests = Array.isArray(invitation.guests) ? invitation.guests : [];
  elements.guestBadge.textContent = String(guests.length);

  if (!guests.length) {
    elements.guestList.innerHTML = `<p class="empty-copy">${escapeHtml(text("noGuests"))}</p>`;
    return;
  }

  elements.guestList.innerHTML = guests
    .map((guest) => {
      const attending = Boolean(guest.is_attending);
      return `
        <article class="guest-card">
          <div class="guest-card__top">
            <h3>${escapeHtml(guest.name ?? "")}</h3>
            <span class="guest-card__status${attending ? "" : " is-declined"}">
              ${escapeHtml(attending ? text("willAttend") : text("willNotAttend"))}
            </span>
          </div>
          ${guest.wish ? `<p>${escapeHtml(guest.wish)}</p>` : ""}
          <p class="guest-card__count">${escapeHtml(text("guestsWord"))}: ${Number(guest.guests_count) || 0}</p>
        </article>
      `;
    })
    .join("");
}

function syncGuestCount() {
  const attending = elements.form.elements.attendance.value === "yes";
  elements.guestCount.disabled = !attending;
  elements.guestCount.required = attending;
  elements.guestCount.min = attending ? "1" : "0";
  elements.guestCount.value = attending ? Math.max(1, Number(elements.guestCount.value) || 1) : 0;
}

async function submitRsvp(event) {
  event.preventDefault();
  if (!elements.form.reportValidity()) return;

  const id = invitationId();
  const attending = elements.form.elements.attendance.value === "yes";
  const newGuest = {
    name: elements.form.elements.name.value.trim(),
    wish: elements.form.elements.wish.value.trim(),
    guests_count: attending ? Math.max(1, Number(elements.form.elements.guests_count.value) || 1) : 0,
    is_attending: attending,
  };

  elements.submit.disabled = true;
  elements.formStatus.classList.remove("is-error");
  elements.formStatus.textContent = text("sending");

  try {
    const latest = await requestInvitation(id);
    const guests = Array.isArray(latest.guests) ? latest.guests : [];
    const updated = { ...latest, guests: [...guests, newGuest] };
    const response = await fetch(`${API_BASE}/${encodeURIComponent(id)}/full`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updated),
    });
    if (!response.ok) throw new Error(`PATCH ${response.status}`);

    let result = null;
    const responseText = await response.text();
    if (responseText) {
      try {
        result = normalizePayload(JSON.parse(responseText));
      } catch {
        result = null;
      }
    }

    invitation = result?.guests ? result : updated;
    renderGuests();
    elements.form.reset();
    elements.form.elements.attendance.value = "yes";
    elements.guestCount.value = 1;
    syncGuestCount();
    elements.formStatus.textContent = text("saveSuccess");
    showToast(text("saveSuccess"));
  } catch (error) {
    console.error(error);
    elements.formStatus.classList.add("is-error");
    elements.formStatus.textContent = text("saveError");
    showToast(text("saveError"));
  } finally {
    elements.submit.disabled = false;
  }
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => elements.toast.classList.remove("is-visible"), 3200);
}

function observeReveals() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    language = button.dataset.language;
    localStorage.setItem("wedding-language", language);
    applyLanguage();
  });
});

elements.introStage.addEventListener("click", startIntro);
elements.introVideo.addEventListener("ended", finishIntroPlayback);
elements.introVideo.addEventListener("error", finishIntroPlayback);

elements.retry.addEventListener("click", loadInvitation);
elements.form.addEventListener("submit", submitRsvp);
elements.form.querySelectorAll('[name="attendance"]').forEach((radio) => {
  radio.addEventListener("change", syncGuestCount);
});
elements.openGuests.addEventListener("click", () => elements.guestSheet.showModal());
elements.closeGuests.addEventListener("click", () => elements.guestSheet.close());
elements.guestSheet.addEventListener("click", (event) => {
  if (event.target === elements.guestSheet) elements.guestSheet.close();
});

applyLanguageOnly();
syncGuestCount();
loadInvitation();
