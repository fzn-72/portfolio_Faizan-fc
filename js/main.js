const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

const pitch = $("#pitch");
const ball = $("#ball");
const ballOrigin = $("#ball-origin");
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
  button.setAttribute("aria-label", `${t("discover")} ${player.reserve ? t("reserveTitle") : player.name}`);
  button.dataset.label = player.reserve ? t("reserveTitle") : player.name;
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

function renderBench() {
  const nav = $("#bench");
  ["skills", "palmares", "upcoming"].forEach(key => {
    const button = el("button", "bench-item");
    button.type = "button";
    button.innerHTML = `<span class="bench-item__seats" aria-hidden="true">${benchSvg(key)}</span><span class="bench-item__label" data-i18n="${key}"></span>`;
    button.addEventListener("click", () => {
      returnFocus = button;
      renderInfo(key);
      showModal(infoBackdrop);
    });
    nav.append(button);
  });
}

function getOriginPoint() {
  const pitchRect = pitch.getBoundingClientRect();
  const anchorRect = ballOrigin.getBoundingClientRect();
  return { x: anchorRect.left - pitchRect.left, y: anchorRect.top - pitchRect.top };
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

function projectView(player) {
  const subtitle = `${t("jerseyNo")} ${player.number} · ${L(player.role)}`;
  if (player.reserve) {
    return { type: "", name: t("reserveTitle"), subtitle, description: "", work: [], technologies: [], note: "", link: "", screenshots: [] };
  }
  return { type: L(player.type), name: player.name, subtitle, description: L(player.description), work: L(player.work), technologies: player.technologies, note: L(player.note), link: player.link, screenshots: player.screenshots };
}

function fillProject(player) {
  const view = projectView(player);
  $("#panel-shirt").innerHTML = jerseySvg(player.kit, `panel-${player.id}`);
  $("#project-panel").classList.toggle("is-empty", Boolean(player.reserve));
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

function renderInfo(which) {
  currentInfo = which;
  $("#info-title").textContent = t(which);
  const body = $("#info-body");
  body.replaceChildren();
  if (which === "skills") {
    skills.forEach(group => body.append(infoRow(L(group.title), "", group.items.map(L).join(", ") + ".")));
  }
  if (which === "palmares") {
    honours.forEach(honour => body.append(infoRow("IBM", honour.name.replace("IBM — ", ""), L(honour.detail))));
  }
  if (which === "upcoming") {
    body.append(el("p", "info-intro", t("upcomingIntro")));
    reserve.forEach(item => body.append(infoRow(L(item.status), item.name, L(item.context))));
  }
}

function applyConfig() {
  $("#linkedin-link").href = siteConfig.linkedin;
  if (siteConfig.coachPhoto) {
    $$(".coach-photo").forEach(img => { img.src = siteConfig.coachPhoto; img.hidden = false; });
    $$(".avatar").forEach(item => item.classList.add("has-photo"));
  }
  const cv = $("#cv-button");
  if (siteConfig.cv) {
    cv.href = siteConfig.cv;
    cv.setAttribute("download", "");
    cv.removeAttribute("aria-disabled");
    cv.classList.remove("is-disabled");
    cv.removeAttribute("title");
  } else {
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
  if (!siteConfig.cv) {
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
renderBench();
setLanguage("fr");
setBallPoint(getOriginPoint(), 0, .88);
