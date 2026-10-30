const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

const pitch = $("#pitch");
const ball = $("#ball");
const projectBackdrop = $("#project-backdrop");
const coachBackdrop = $("#coach-backdrop");
const infoBackdrop = $("#info-backdrop");
const contactBackdrop = $("#contact-backdrop");
const form = $("#contact-form");

let lang = "fr";
let currentProject = null;
let currentInfo = null;
let activeModal = null;
let returnFocus = null;
let galleryIndex = 0;
let ballPoint = null;
let ballFrame = 0;
let statusKey = "";
let statusKind = "";
let toastTimer = 0;
const errorKeys = {};

const t = key => ui[lang][key];
const L = value => (typeof value === "string" || Array.isArray(value)) ? value : value[lang];

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function createPlayer(player) {
  const button = el("button", `player player--${player.id}${player.reserve ? " player--reserve" : ""}`);
  const land = fieldPct(player.pos, false);
  const port = fieldPct(player.posV, true);
  button.type = "button";
  button.style.setProperty("--x", `${land.left}%`);
  button.style.setProperty("--y", `${land.top}%`);
  button.style.setProperty("--xv", `${port.left}%`);
  button.style.setProperty("--yv", `${port.top}%`);
  button.dataset.id = player.id;
  button.dataset.kit = player.kit;
  const playerName = typeof player.name === "string" ? player.name : L(player.name);
  button.setAttribute("aria-label", `${t("discover")} ${player.reserve ? t("reserveTitle") : playerName}`);
  button.dataset.label = player.reserve ? t("reserveTitle") : playerName;
  button.innerHTML = `<span class="jersey" aria-hidden="true">${jerseySvg(player.kit, player.id)}<span class="jersey__print"><span class="jersey__name">${t("shirtName")}</span><span class="jersey__number">${player.number}</span></span></span>`;
  button.addEventListener("click", () => openProject(player, button));
  return button;
}

function renderPlayers() {
  const box = $("#players");
  box.replaceChildren();
  [...projects, ...upcoming].forEach(player => box.append(createPlayer(player)));
  if (currentProject) {
    const selected = box.querySelector(`[data-id="${currentProject.id}"]`);
    if (selected) selected.classList.add("is-selected");
  }
}

function renderReserveBench() {
  const group = $("#reserve-bench");
  group.innerHTML = benchSvg("reserve");
  reserve.forEach((item, index) => {
    const name = typeof item.name === "string" ? item.name : L(item.name);
    const seat = group.querySelector(`.seat-${index}`);
    const button = el("button", "bench-seat", item.number);
    button.type = "button";
    button.style.setProperty("--top", `${(20 + index * 52) / 184 * 100}%`);
    button.dataset.label = name;
    button.setAttribute("aria-label", `${t("openReserveProject")} ${name}`);
    button.addEventListener("click", () => openReserveProject(item, button));
    ["mouseenter", "focus"].forEach(type => button.addEventListener(type, () => seat.classList.add("is-hot")));
    ["mouseleave", "blur"].forEach(type => button.addEventListener(type, () => seat.classList.remove("is-hot")));
    group.append(button);
  });
}

function getOriginPoint() {
  const pitchRect = pitch.getBoundingClientRect();
  const keeper = $('.player[data-id="jeu21"]').getBoundingClientRect();
  return {
    x: keeper.left + keeper.width * .72 - pitchRect.left,
    y: keeper.bottom - pitchRect.top + 6
  };
}

function getTargetBallPoint(target) {
  const pitchRect = pitch.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  return {
    x: targetRect.left + targetRect.width * .78 - pitchRect.left,
    y: targetRect.top + targetRect.height * .48 - pitchRect.top + 13
  };
}

function setBallPoint(point, rotation = 0, scale = 1) {
  ballPoint = { x: point.x, y: point.y };
  ball.style.transform = `translate3d(${point.x - ball.offsetWidth / 2}px, ${point.y - ball.offsetHeight / 2}px, 0) rotate(${rotation}deg) scale(${scale})`;
}

function runPass(target, callback) {
  if (ballFrame) cancelAnimationFrame(ballFrame);
  const start = ballPoint || getOriginPoint();
  const end = getTargetBallPoint(target);
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const distance = Math.hypot(dx, dy);
  const arc = Math.min(88, Math.max(24, distance * .13));
  const length = Math.max(1, distance);
  const normalX = -dy / length;
  const normalY = dx / length;
  const direction = dy < 0 ? -1 : 1;
  const bend = arc * direction;
  const c1 = { x: start.x + dx * .28 + normalX * bend, y: start.y + dy * .28 + normalY * bend - arc * .5 };
  const c2 = { x: start.x + dx * .72 + normalX * bend, y: start.y + dy * .72 + normalY * bend - arc * .5 };
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const duration = reduceMotion ? 80 : 780;
  const startedAt = performance.now();
  ball.style.opacity = "1";

  function frame(now) {
    const raw = Math.min(1, (now - startedAt) / duration);
    const progress = 1 - Math.pow(1 - raw, 2.7);
    const inv = 1 - progress;
    const point = {
      x: inv * inv * inv * start.x + 3 * inv * inv * progress * c1.x + 3 * inv * progress * progress * c2.x + progress * progress * progress * end.x,
      y: inv * inv * inv * start.y + 3 * inv * inv * progress * c1.y + 3 * inv * progress * progress * c2.y + progress * progress * progress * end.y
    };
    const rotation = 900 * progress;
    const scale = 0.82 + Math.sin(Math.PI * progress) * .26;
    setBallPoint(point, rotation, scale);
    if (raw < 1) {
      ballFrame = requestAnimationFrame(frame);
    } else {
      ballFrame = 0;
      setBallPoint(end, 900, 1);
      if (typeof callback === "function") callback();
    }
  }
  ballFrame = requestAnimationFrame(frame);
}

function syncBall() {
  if (ballFrame) return;
  const selected = $(".player.is-selected");
  setBallPoint(selected ? getTargetBallPoint(selected) : getOriginPoint(), 900, 1);
}

function showModal(backdrop) {
  $$(".modal-backdrop").forEach(item => { item.hidden = item !== backdrop; });
  document.body.classList.add("modal-open");
  activeModal = backdrop;
  backdrop.querySelector(".modal-close").focus();
}

function hideModal() {
  if (!activeModal) return;
  activeModal.hidden = true;
  activeModal = null;
  document.body.classList.remove("modal-open");
  if (returnFocus && returnFocus.isConnected) returnFocus.focus();
}

function openProject(player, button) {
  currentProject = player;
  returnFocus = button;
  $$(".player").forEach(item => item.classList.toggle("is-selected", item === button));
  fillProject(player);
  projectBackdrop.hidden = true;
  document.body.classList.remove("modal-open");
  activeModal = null;
  runPass(button, () => showModal(projectBackdrop));
}

function openReserveProject(player, button) {
  currentProject = player;
  returnFocus = button;
  $$(".player").forEach(item => item.classList.remove("is-selected"));
  fillProject(player);
  showModal(projectBackdrop);
}

function projectView(player) {
  const subtitle = `${t("jerseyNo")} ${player.number} · ${L(player.role)}`;
  if (player.reserve) {
    return {
      type: L(player.type || { fr: "Projet en réserve", en: "Project on the bench" }),
      name: typeof player.name === "string" ? player.name : L(player.name || { fr: t("reserveTitle"), en: t("reserveTitle") }),
      subtitle: `${t("reserveSeat")} · ${t("jerseyNo")} ${player.number} · ${L(player.role || { fr: "Place réservée", en: "Reserved spot" })}`,
      description: L(player.description || { fr: "Présentation à venir.", en: "Presentation coming soon." }),
      work: L(player.work || { fr: ["Contenu à définir"], en: ["Content to be defined"] }),
      technologies: player.technologies || [],
      note: L(player.note || { fr: "Contenu en préparation.", en: "Content in preparation." }),
      link: player.link || "",
      screenshots: player.screenshots || []
    };
  }
  return { type: L(player.type), name: typeof player.name === "string" ? player.name : L(player.name), subtitle, description: L(player.description), work: L(player.work), technologies: player.technologies.map(L), note: L(player.note), link: player.link, screenshots: player.screenshots };
}

function fillProject(player) {
  const view = projectView(player);
  $("#panel-shirt").innerHTML = jerseySvg(player.kit, `panel-${player.id}`);
  $("#project-panel").classList.toggle("is-empty", false);
  $("#panel-type").textContent = view.type.toUpperCase();
  $("#panel-type").hidden = !view.type;
  $("#panel-title").textContent = view.name;
  $("#panel-subtitle").textContent = view.subtitle;
  $("#panel-description").textContent = view.description;
  const work = $("#panel-work");
  work.replaceChildren(...view.work.map(item => el("li", "", item)));
  $("#panel-tech").textContent = view.technologies.length ? view.technologies.join(" · ") : t("toComplete");
  $("#panel-note").textContent = view.note;
  const link = $("#panel-link");
  link.hidden = !view.link;
  if (view.link) link.href = view.link;
  galleryIndex = 0;
  renderGallery(view);
}

function renderGallery(view) {
  const shots = view.screenshots;
  const hasShots = shots.length > 0;
  const image = $("#gallery-image");
  $("#gallery-placeholder").hidden = hasShots;
  $("#gallery-zoom").hidden = !hasShots;
  $("#gallery-footer").hidden = shots.length < 2;
  $("#gallery-prev").hidden = shots.length < 2;
  $("#gallery-next").hidden = shots.length < 2;
  if (!hasShots) return;
  image.src = shots[galleryIndex];
  image.alt = `${view.name} — ${t("screenshot")} ${galleryIndex + 1}`;
  const thumbs = $("#gallery-thumbs");
  thumbs.replaceChildren(...shots.map((src, index) => {
    const thumb = el("button", `gallery-thumb${index === galleryIndex ? " is-active" : ""}`);
    thumb.type = "button";
    thumb.setAttribute("aria-label", `${t("screenshot")} ${index + 1}`);
    const preview = el("img");
    preview.src = src;
    preview.alt = "";
    thumb.append(preview);
    thumb.addEventListener("click", () => { galleryIndex = index; renderGallery(view); });
    return thumb;
  }));
  $("#gallery-count").textContent = `${galleryIndex + 1} / ${shots.length}`;
}

function moveGallery(direction) {
  const view = projectView(currentProject);
  const count = view.screenshots.length;
  galleryIndex = (galleryIndex + direction + count) % count;
  renderGallery(view);
}

function infoRow(label, title, text) {
  const row = el("div", "info-row");
  const body = el("div", "info-row__body");
  if (title) body.append(el("strong", "", title));
  if (text) body.append(el("p", "", text));
  row.append(el("span", "info-row__label", label), body);
  return row;
}

function updateTacticsDetails(index, panel, markers) {
  const group = skills[index];
  markers.forEach((marker, markerIndex) => {
    const active = markerIndex === index;
    marker.classList.toggle("is-active", active);
    marker.setAttribute("aria-pressed", String(active));
  });
  panel.replaceChildren();
  panel.append(el("p", "tactics-detail__eyebrow", t("selectedSector")));
  panel.append(el("h3", "tactics-detail__title", L(group.title)));
  const chips = el("div", "skill-chips");
  group.items.forEach(item => chips.append(el("span", "skill-chip", L(item))));
  panel.append(chips);
}

function renderTacticsBoard(body) {
  body.append(el("p", "info-intro", t("tacticsIntro")));
  const board = el("div", "coach-board");
  board.setAttribute("role", "group");
  board.setAttribute("aria-label", t("tacticsBoardLabel"));
  board.innerHTML = `<div class="coach-board__top"><span class="coach-board__clip"></span><span>${t("tacticsBoardHeading")}</span><span class="coach-board__status">${t("coachBoardStatus")}</span></div><div class="coach-board__surface"><svg class="coach-board__drawing" viewBox="0 0 760 300" aria-hidden="true"><g class="coach-board__pitch-lines"><path d="M38 24 Q38 22 41 23 L719 24 Q722 24 722 27 L721 273 Q721 276 718 276 L40 275 Q37 275 38 272 Z"/><path d="M380 24 Q378 90 380 150 Q382 216 380 275"/><path d="M380 104 C405 104 425 124 425 150 C425 176 405 196 380 196 C355 196 335 176 335 150 C335 124 355 104 380 104 Z"/><path d="M38 72 Q88 71 143 73 L143 227 Q88 229 38 227"/><path d="M38 112 Q62 111 89 112 L89 188 Q62 189 38 188"/><path d="M143 111 Q177 150 143 189"/><path d="M722 72 Q672 71 617 73 L617 227 Q672 229 722 227"/><path d="M722 112 Q698 111 671 112 L671 188 Q698 189 722 188"/><path d="M617 111 Q583 150 617 189"/><path d="M128 150 C130 147 134 147 136 150 C134 153 130 153 128 150 Z"/><path d="M624 150 C626 147 630 147 632 150 C630 153 626 153 624 150 Z"/><path d="M29 132 Q22 132 22 139 L22 161 Q22 168 29 168"/><path d="M731 132 Q738 132 738 139 L738 161 Q738 168 731 168"/></g></svg><span class="coach-board__ghost-magnet coach-board__ghost-magnet--one" aria-hidden="true"></span><span class="coach-board__ghost-magnet coach-board__ghost-magnet--two" aria-hidden="true"></span><span class="coach-board__ghost-magnet coach-board__ghost-magnet--three" aria-hidden="true"></span><span class="coach-board__ghost-magnet coach-board__ghost-magnet--four" aria-hidden="true"></span><span class="coach-board__ghost-magnet coach-board__ghost-magnet--five" aria-hidden="true"></span><span class="coach-board__ghost-magnet coach-board__ghost-magnet--six" aria-hidden="true"></span><button class="coach-board__magnet coach-board__magnet--one"><b>06</b><small>DATA</small></button><button class="coach-board__magnet coach-board__magnet--two"><b>08</b><small>CODE</small></button><button class="coach-board__magnet coach-board__magnet--three"><b>10</b><small>CONCEPTION</small></button><button class="coach-board__magnet coach-board__magnet--four"><b>11</b><small>3D</small></button><span class="coach-board__eraser" aria-hidden="true"></span><span class="coach-board__marker" aria-hidden="true"></span></div><div class="coach-board__footer"><span>FAIZAN FC · STAFF TECHNIQUE</span><span>${t("tapMagnets")}</span></div>`;
  const markers = [...board.querySelectorAll(".coach-board__magnet")];
  const detail = el("section", "tactics-detail");
  detail.setAttribute("aria-live", "polite");
  skills.forEach((group, index) => {
    const marker = markers[index];
    marker.type = "button";
    marker.setAttribute("aria-label", `${t("selectSkillArea")}: ${L(group.title)}`);
    marker.setAttribute("aria-pressed", "false");
    marker.addEventListener("click", () => updateTacticsDetails(index, detail, markers));
  });
  body.append(board, detail);
  updateTacticsDetails(0, detail, markers);
}
function renderTrophyCabinet(body) {
  body.append(el("p", "info-intro", t("trophyIntro")));
  const scene = el("div", "trophy-scene");
  scene.setAttribute("role", "group");
  scene.setAttribute("aria-label", t("trophyCabinetLabel"));
  const cabinet = el("div", "trophy-cabinet");
  const back = el("div", "trophy-cabinet__back");
  cabinet.append(back);

  [honours.slice(0, 2), honours.slice(2, 4)].forEach((shelfHonours, index) => {
    const shelf = el("div", `trophy-shelf trophy-shelf--${index === 0 ? "upper" : "lower"}`);
    shelf.append(el("span", "trophy-shelf__label", t(index === 0 ? "trophyShelfOne" : "trophyShelfTwo")));
    const medals = el("div", "trophy-shelf__medals");
    shelfHonours.forEach(honour => {
      const medal = el("article", "medal-display");
      const icon = el("span", "medal-display__icon");
      icon.setAttribute("aria-hidden", "true");
      icon.innerHTML = `<span class="medal-ribbon medal-ribbon--left"></span><span class="medal-ribbon medal-ribbon--right"></span><span class="medal-disc"><svg viewBox="0 0 24 24"><path d="m12 2.7 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z" fill="currentColor" stroke="#7a531b" stroke-width=".7" stroke-linejoin="round"/></svg></span>`;
      const copy = el("span", "medal-display__copy");
      copy.append(el("strong", "medal-display__title", honour.name));
      copy.append(el("small", "medal-display__date", L(honour.date)));
      copy.append(el("small", "medal-display__detail", L(honour.detail)));
      medal.append(icon, copy);
      medals.append(medal);
    });
    shelf.append(medals);
    cabinet.append(shelf);
  });

  const door = el("div", "trophy-cabinet__door");
  door.setAttribute("aria-hidden", "true");
  door.append(el("span", "trophy-cabinet__door-handle"));
  cabinet.append(door);
  scene.append(cabinet);
  body.append(scene);
}
function renderInfo(which) {
  const card = $("#info-card");
  const keepCabinetOpen = currentInfo === which && !infoBackdrop.hidden && card.classList.contains("is-open") && which === "palmares";
  currentInfo = which;
  card.className = `card info-card info-card--${which}${keepCabinetOpen ? " is-open" : ""}`;
  $("#info-title").textContent = t(which);
  const body = $("#info-body");
  body.replaceChildren();
  if (which === "skills") renderTacticsBoard(body);
  if (which === "palmares") renderTrophyCabinet(body);
}

function currentCvPath() {
  if (typeof siteConfig.cv === "string") return siteConfig.cv;
  return siteConfig.cv?.[lang] || "";
}

function applyConfig() {
  $("#linkedin-link").href = siteConfig.linkedin;
  if (siteConfig.coachPhoto) {
    $$(".coach-photo").forEach(img => { img.src = siteConfig.coachPhoto; img.hidden = false; });
    $$(".avatar").forEach(item => item.classList.add("has-photo"));
  }
  const cv = $("#cv-button");
  const cvPath = currentCvPath();
  if (cvPath) {
    cv.href = cvPath;
    cv.setAttribute("download", lang === "en" ? "Faizan-Norat-CV-EN.pdf" : "Faizan-Norat-CV-FR.pdf");
    cv.removeAttribute("aria-disabled");
    cv.classList.remove("is-disabled");
    cv.removeAttribute("title");
  } else {
    cv.href = "#";
    cv.removeAttribute("download");
    cv.setAttribute("aria-disabled", "true");
    cv.classList.add("is-disabled");
    cv.title = t("cvSoon");
  }
}

function openLightbox() {
  const image = $("#gallery-image");
  $("#lightbox-image").src = image.src;
  $("#lightbox-image").alt = image.alt;
  $("#lightbox").hidden = false;
}

function closeLightbox() {
  $("#lightbox").hidden = true;
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.hidden = false;
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => { toast.hidden = true; }, 3200);
}

function setStatus(key, kind) {
  statusKey = key;
  statusKind = kind;
  const status = $("#contact-status");
  status.textContent = key ? t(key) : "";
  status.dataset.kind = kind;
}

function renderErrors() {
  $$("[data-error-for]").forEach(node => {
    const key = errorKeys[node.dataset.errorFor];
    node.textContent = key ? t(key) : "";
    node.previousElementSibling.setAttribute("aria-invalid", key ? "true" : "false");
  });
}

function validateForm() {
  const data = new FormData(form);
  const value = name => String(data.get(name) || "").trim();
  errorKeys.first_name = value("first_name") ? "" : "errRequired";
  errorKeys.last_name = value("last_name") ? "" : "errRequired";
  errorKeys.email = !value("email") ? "errRequired" : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value("email")) ? "" : "errEmail";
  errorKeys.message = !value("message") ? "errRequired" : value("message").length < 10 ? "errMessage" : "";
  renderErrors();
  const firstInvalid = form.querySelector('[aria-invalid="true"]');
  if (firstInvalid) firstInvalid.focus();
  return !firstInvalid;
}

async function submitForm(event) {
  event.preventDefault();
  if (!validateForm()) return;
  if (!siteConfig.formspreeId) {
    setStatus("formNotConfigured", "warn");
    return;
  }
  const submit = $("#contact-submit");
  submit.disabled = true;
  setStatus("sending", "");
  try {
    const response = await fetch(`https://formspree.io/f/${siteConfig.formspreeId}`, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    });
    if (!response.ok) throw new Error("send failed");
    form.reset();
    setStatus("sent", "ok");
  } catch {
    setStatus("sendFailed", "warn");
  }
  submit.disabled = false;
}

function setLanguage(language) {
  lang = language;
  document.documentElement.lang = language;
  $$("[data-i18n]").forEach(node => { node.innerHTML = t(node.dataset.i18n); });
  $$("[data-i18n-label]").forEach(node => node.setAttribute("aria-label", t(node.dataset.i18nLabel)));
  $("#language-button").innerHTML = language === "fr" ? "FR <span>/</span> EN" : "EN <span>/</span> FR";
  applyConfig();
  renderPlayers();
  renderReserveBench();
  renderErrors();
  setStatus(statusKey, statusKind);
  if (currentProject && !projectBackdrop.hidden) fillProject(currentProject);
  if (currentInfo && !infoBackdrop.hidden) renderInfo(currentInfo);
}

function openSimple(backdrop, trigger) {
  returnFocus = trigger;
  showModal(backdrop);
}

$("#contact-button").addEventListener("click", event => openSimple(contactBackdrop, event.currentTarget));
$("#coach-button").addEventListener("click", event => openSimple(coachBackdrop, event.currentTarget));
$("#cv-button").addEventListener("click", event => {
  if (!currentCvPath()) {
    event.preventDefault();
    showToast(t("cvSoon"));
  }
});
$("#language-button").addEventListener("click", () => setLanguage(lang === "fr" ? "en" : "fr"));
$("#gallery-zoom").addEventListener("click", openLightbox);
$("#lightbox").addEventListener("click", closeLightbox);
$("#gallery-prev").addEventListener("click", () => moveGallery(-1));
$("#gallery-next").addEventListener("click", () => moveGallery(1));
form.addEventListener("submit", submitForm);

$$("[data-close]").forEach(button => button.addEventListener("click", hideModal));
$$(".modal-backdrop").forEach(backdrop => backdrop.addEventListener("click", event => {
  if (event.target === backdrop) hideModal();
}));

document.addEventListener("keydown", event => {
  if (!$("#lightbox").hidden) {
    if (event.key === "Escape") closeLightbox();
    return;
  }
  if (!activeModal) return;
  if (event.key === "Escape") hideModal();
  if (event.key !== "Tab") return;
  const items = [...activeModal.querySelectorAll("button, a[href], input, textarea")].filter(item => !item.hidden && !item.disabled && item.offsetParent !== null);
  if (!items.length) return;
  const first = items[0];
  const last = items[items.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
});

window.addEventListener("resize", syncBall);
window.addEventListener("load", syncBall);

pitch.prepend(...[pitchSvg(true), pitchSvg(false)].map(markup => {
  const holder = document.createElement("div");
  holder.innerHTML = markup;
  return holder.firstElementChild;
}));
renderReserveBench();
$("#skills-button").addEventListener("click", event => {
  returnFocus = event.currentTarget;
  renderInfo("skills");
  showModal(infoBackdrop);
});
$("#palmares-button").addEventListener("click", event => {
  returnFocus = event.currentTarget;
  renderInfo("palmares");
  showModal(infoBackdrop);
  requestAnimationFrame(() => $("#info-card").classList.add("is-open"));
});
setLanguage("fr");
setBallPoint(getOriginPoint(), 0, .88);
