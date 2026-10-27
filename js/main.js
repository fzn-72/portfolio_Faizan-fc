const playersContainer = document.querySelector("#players");
const pitch = document.querySelector("#pitch");
const ball = document.querySelector("#ball");
const goalkeeper = document.querySelector("#goalkeeper");
const projectBackdrop = document.querySelector("#project-backdrop");
const profileBackdrop = document.querySelector("#profile-backdrop");
const coachBackdrop = document.querySelector("#coach-backdrop");
const infoBackdrop = document.querySelector("#info-backdrop");
const arena = document.querySelector("#arena");
let currentLanguage = "fr";
let lastFocusedElement = null;
let currentProject = null;
let galleryIndex = 0;
let ballPoint = null;
let ballFrame = 0;
let modalOpenTimer = 0;
let activeModal = null;
const contactBackdrop = document.querySelector("#contact-backdrop");

const translations = {
  fr: {
    playerCard: "Ma fiche d’entraîneur (CV)", contact: "Contact", contactTitle: "Envoyer un message", contactIntro: "Pour une opportunité, une question ou un projet à discuter, vous pouvez me contacter ici.", firstName: "Prénom", lastName: "Nom", emailAddress: "Adresse e-mail", messageLabel: "Message", sendMessage: "Envoyer le message ↗", contactSetup: "Le service d'envoi devra être configuré avant la mise en ligne.", bench: "BANC DE TOUCHE", formation: "Formation", skills: "Skills", palmares: "Palmarès", substitutes: "Remplaçants",
    welcome: "", headline: "Bienvenue au stade, <em>mes projets, mon terrain de jeu.</em>",
    instruction: "Sélectionnez un maillot : le ballon fait la passe et la fiche du projet s’ouvre.", keeper: "", projectsLabel: "",
    futureLabel: "", hint: "", legend: "",
    coachRole: "Étudiant en Data & IA", coachQuote: "« Apprendre aujourd'hui, construire demain. »", contextTitle: "CONTEXTE & OBJECTIF", workTitle: "TRAVAIL RÉALISÉ",
    skillsTitle: "TECHNOLOGIES & COMPÉTENCES", screensTitle: "GALERIE DU PROJET", playerCardKicker: "LE COACH · PROFIL",
    profileRole: "Data & IA · Étudiant ingénieur à l'ESILV", coachIntroShort: "Je construis mon parcours entre data, outils numériques et compréhension des besoins métiers.",
    cvNote: "Le CV PDF sera ajouté ici lorsqu'il sera prêt.", linkedin: "Voir mon LinkedIn ↗", return: "Retour au terrain", footer: "Des projets qui avancent, pas seulement des idées.",
    openProject: "Voir le dépôt GitHub", linkSoon: "Lien à ajouter après vérification", motto: "Plus qu'un projet, une nouvelle façon de voir les données.",
    coachKicker: "LE COACH · À PROPOS", coachJourney: "Ma carrière", coachJourneyText: "Ma formation en Data & IA s'appuie sur deux expériences chez RTE, où j'ai travaillé sur des tableaux de bord Power BI pour répondre à des besoins métiers.",
    coachGoals: "Mes objectifs", coachGoalsText: "Explorer davantage l'intelligence artificielle, consolider mes compétences data et trouver un stage à partir d'avril 2027 pour contribuer à des projets concrets.",
    coachPhilosophy: "Ma philosophie", coachPhilosophyText: "Comprendre le besoin, rendre l'information lisible et concevoir des outils utiles à ceux qui les utilisent. Je m'intéresse aussi à l'ergonomie et à la façon dont les personnes interagissent avec les produits numériques.",
    clubSheet: "FAIZAN FC · FICHE ÉQUIPE", future: "À venir", futureTitle: "Projet à venir", futureDescription: "Ce maillot réserve une place à un futur projet. Il sera activé lorsque son contenu sera prêt à être présenté.",
    futureNote: "Cette fiche est volontairement vide : aucun projet fictif n'est ajouté au portfolio.", addScreenshot: "Capture à ajouter", screenshotNote: "L'aperçu ci-dessous est un emplacement de travail. Il sera remplacé par une capture réelle du projet.",
    slide: "Capture", galleryExpand: "Agrandir la galerie", galleryShrink: "Réduire la galerie", benchSwitchToBottom: "Tester le banc horizontal ↔", benchSwitchToLeft: "Remettre le banc à gauche ↔",
    palmaresBody: "<p><strong>IBM — AI Fundamentals</strong><br>AI Fundamentals: Foundations for Understanding AI.</p><p class='info-highlight'><strong>IBM — Data Fundamentals</strong><br>Certification autour des fondamentaux de la donnée.</p><p>Les autres certifications seront ajoutées avec leurs intitulés et dates vérifiés.</p>",
    substitutesBody: "<p><strong>En réserve : AI Learning Coach</strong><br>Projet UX / IA réalisé dans le cadre d'un travail lié à Dassault Systèmes, à intégrer lorsque les captures et la présentation seront prêtes.</p><p class='info-highlight'>Cette rubrique évoluera avec les projets sélectionnés. Aucun projet fictif ne sera affiché.</p>",
    skillsBody: "<p><strong>Data & visualisation</strong><br>Power BI, DAX, conception de KPI et amélioration de la lisibilité des tableaux de bord.</p><p><strong>Programmation & données</strong><br>C#, Python et SQL/MySQL dans le cadre de projets académiques et de formation.</p><p class='info-highlight'><strong>Ergonomie & conception</strong><br>Intérêt pour l'UX/UI et découverte de Figma : un axe que je souhaite continuer à explorer.</p>"
  },
  en: {
    playerCard: "My coach profile (CV)", contact: "Contact", contactTitle: "Send a message", contactIntro: "For an opportunity, a question or a project to discuss, please contact me here.", firstName: "First name", lastName: "Last name", emailAddress: "Email address", messageLabel: "Message", sendMessage: "Send message ↗", contactSetup: "The email service must be configured before launch.", bench: "SUBSTITUTES", formation: "Education", skills: "Skills", palmares: "Honours", substitutes: "Substitutes",
    welcome: "", headline: "Welcome to the stadium, <em>my projects, my field of play.</em>",
    instruction: "Select a jersey: the ball makes the pass and the project card opens.", keeper: "", projectsLabel: "",
    futureLabel: "", hint: "", legend: "",
    coachRole: "Data & AI student", coachQuote: "“Learn today, build tomorrow.”", contextTitle: "CONTEXT & OBJECTIVE", workTitle: "WORK COMPLETED",
    skillsTitle: "TECHNOLOGIES & SKILLS", screensTitle: "PROJECT GALLERY", playerCardKicker: "THE COACH · PROFILE",
    profileRole: "Data & AI · Engineering student at ESILV", coachIntroShort: "I am building my path around data, digital tools and understanding business needs.",
    cvNote: "The PDF resume will be added here when it is ready.", linkedin: "View my LinkedIn ↗", return: "Back to the pitch", footer: "Projects in motion, not just ideas.",
    openProject: "View GitHub repository", linkSoon: "Link to be added after verification", motto: "More than a project: a new way to see data.",
    coachKicker: "THE COACH · ABOUT ME", coachJourney: "My career", coachJourneyText: "My Data & AI degree is complemented by two experiences at RTE, where I worked on Power BI dashboards to meet business needs.",
    coachGoals: "My goals", coachGoalsText: "Explore artificial intelligence further, strengthen my data skills and find an internship starting in April 2027 to contribute to practical projects.",
    coachPhilosophy: "My philosophy", coachPhilosophyText: "Understand the need, make information easy to read, and design useful tools for the people who use them. I am also interested in usability and the way people interact with digital products.",
    clubSheet: "FAIZAN FC · TEAM CARD", future: "Coming soon", futureTitle: "Future project", futureDescription: "This jersey reserves a place for a future project. It will be activated once the content is ready to present.",
    futureNote: "This card is intentionally empty: no fictional project is added to the portfolio.", addScreenshot: "Screenshot to add", screenshotNote: "This preview is a placeholder. It will be replaced with a real project screenshot.",
    slide: "Screenshot", galleryExpand: "Expand gallery", galleryShrink: "Reduce gallery", benchSwitchToBottom: "Test horizontal bench ↔", benchSwitchToLeft: "Move bench back to the left ↔",
    palmaresBody: "<p><strong>IBM — AI Fundamentals</strong><br>AI Fundamentals: Foundations for Understanding AI.</p><p class='info-highlight'><strong>IBM — Data Fundamentals</strong><br>Certification focused on data fundamentals.</p><p>Other certifications will be added with verified titles and dates.</p>",
    substitutesBody: "<p><strong>In reserve: AI Learning Coach</strong><br>A UX / AI project developed as part of work connected with Dassault Systèmes, to be added when screenshots and presentation are ready.</p><p class='info-highlight'>This section will evolve as projects are selected. No fictional projects will be displayed.</p>",
    skillsBody: "<p><strong>Data & visualisation</strong><br>Power BI, DAX, KPI design and dashboard readability improvements.</p><p><strong>Programming & data</strong><br>C#, Python and SQL/MySQL through academic projects and coursework.</p><p class='info-highlight'><strong>Usability & design</strong><br>Interest in UX/UI and an introduction to Figma — an area I plan to keep exploring.</p>"
  }
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}

function createJerseySvg(kit, uniqueId = "kit") {
  const palettes = {
    grey: { light: "#777b77", mid: "#454a46", dark: "#252a26", trim: "#85877f", ink: "#f0ebdd" },
    cream: { light: "#fff9e9", mid: "#e7dcc4", dark: "#bdb199", trim: "#c5a04c", ink: "#163d2b" },
    gold: { light: "#f6dfa0", mid: "#d4ad51", dark: "#96702c", trim: "#f7e2a1", ink: "#173b29" },
    green: { light: "#356b4b", mid: "#17412c", dark: "#092719", trim: "#d7a84a", ink: "#f0ebdd" }
  };
  const p = palettes[kit] || palettes.cream;
  const id = `shirt-${uniqueId.replace(/[^a-z0-9-]/gi, "")}`;
  const silhouette = "M45 12 L57 18 Q70 25 83 18 L95 12 L129 31 L113 53 L99 44 L99 140 Q70 147 41 140 L41 44 L27 53 L11 31 Z";
  const stripePattern = kit === "green"
    ? `<path d="M48 40 L48 136 M58 37 L58 140 M68 35 L68 142 M78 37 L78 140 M88 40 L88 136" stroke="#f0ebdd" stroke-opacity=".075" stroke-width="2"/>`
    : `<path d="M49 39 L49 137 M58 37 L58 140 M82 37 L82 140 M91 39 L91 137" stroke="#ffffff" stroke-opacity=".23" stroke-width="2"/>`;
  return `<svg viewBox="0 0 140 154" aria-hidden="true" focusable="false"><defs><linearGradient id="${id}-fabric" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${p.light}"/><stop offset=".38" stop-color="${p.mid}"/><stop offset=".7" stop-color="${p.light}"/><stop offset="1" stop-color="${p.dark}"/></linearGradient><linearGradient id="${id}-sleeve" x1="0" y1="0" x2=".9" y2="1"><stop offset="0" stop-color="${p.light}"/><stop offset="1" stop-color="${p.dark}"/></linearGradient><linearGradient id="${id}-shade" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#000" stop-opacity=".15"/><stop offset=".25" stop-color="#fff" stop-opacity=".11"/><stop offset=".65" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".17"/></linearGradient><clipPath id="${id}-clip"><path d="${silhouette}"/></clipPath></defs><path d="${silhouette}" fill="url(#${id}-fabric)" stroke="${p.trim}" stroke-width="2.1" stroke-linejoin="round"/><g clip-path="url(#${id}-clip)"><rect x="8" y="10" width="124" height="135" fill="url(#${id}-shade)"/>${stripePattern}<path d="M16 33 L28 49 M124 33 L112 49" fill="none" stroke="#fff" stroke-opacity=".28" stroke-width="3"/><path d="M43 52 L47 132 M97 52 L93 132" stroke="#fff" stroke-opacity=".17" stroke-width="2"/><path d="M47 80 Q51 93 48 111 M93 76 Q88 96 93 116" fill="none" stroke="#000" stroke-opacity=".12" stroke-width="3"/><path d="M41 44 L99 44" stroke="${p.trim}" stroke-opacity=".45" stroke-width="1.5"/><path d="M41 138 Q70 145 99 138" fill="none" stroke="#fff" stroke-opacity=".33" stroke-width="1.5"/></g><path d="M53 17 Q70 30 87 17 L82 10 Q70 18 58 10 Z" fill="${kit === "green" ? "#081e13" : "#203c2a"}" stroke="${p.trim}" stroke-width="1.5"/><path d="M16 40 L25 48 M124 40 L115 48" stroke="${p.trim}" stroke-width="4" stroke-linecap="round"/><path d="M45 12 L57 18 Q70 25 83 18 L95 12" fill="none" stroke="#fff" stroke-opacity=".46" stroke-width="1.5"/><path d="M43 142 Q70 149 97 142" fill="none" stroke="${p.trim}" stroke-width="1.6"/></svg>`;
}

function makePrintMarkup(project, isFuture = false) {
  const name = isFuture ? "REMPLAÇANT" : (project.shirtLabel || project.name).toUpperCase();
  const number = isFuture ? "?" : project.jersey;
  return `<span class="jersey__print"><span class="jersey__name">${escapeHtml(name)}</span><span class="jersey__number">${escapeHtml(number)}</span></span>`;
}

function createPlayer(project) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `player player--${project.id}`;
  button.style.setProperty("--x", `${project.position.x}%`);
  button.style.setProperty("--y", `${project.position.y}%`);
  button.style.setProperty("--shirt-ink", project.kit === "green" ? "#f0ebdd" : "#163d2b");
  button.setAttribute("aria-label", `Découvrir le projet ${project.name}`);
  button.dataset.projectId = project.id;
  button.innerHTML = `<span class="jersey" aria-hidden="true">${createJerseySvg(project.kit, project.id)}${makePrintMarkup(project)}</span><span class="player__name">${escapeHtml(project.name)}</span><span class="player__type">${escapeHtml(project.type)}</span>`;
  button.addEventListener("click", () => openProject(project, button));
  return button;
}

const futurePlayers = [
  { id: "future-1", position: { x: 72, y: 38 }, kit: "grey" }
];

function createFuturePlayer(future) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `player player--future player--${future.id}`;
  button.style.setProperty("--x", `${future.position.x}%`);
  button.style.setProperty("--y", `${future.position.y}%`);
  button.style.setProperty("--shirt-ink", future.kit === "green" ? "#f0ebdd" : "#163d2b");
  button.setAttribute("aria-label", translations[currentLanguage].futureTitle);
  button.dataset.futureId = future.id;
  button.innerHTML = `<span class="jersey" aria-hidden="true">${createJerseySvg(future.kit, future.id)}${makePrintMarkup({}, true)}</span><span class="player__name">${translations[currentLanguage].future}</span><span class="player__type">${currentLanguage === "fr" ? "EN PRÉPARATION" : "IN PREPARATION"}</span>`;
  button.addEventListener("click", () => openFutureProject(button));
  return button;
}

function renderPlayers() {
  playersContainer.replaceChildren();
  projects.forEach(project => playersContainer.append(createPlayer(project)));
  futurePlayers.forEach(future => playersContainer.append(createFuturePlayer(future)));
  if (currentProject) {
    const selected = playersContainer.querySelector(`[data-project-id="${CSS.escape(currentProject.id)}"]`);
    if (selected) selected.classList.add("is-selected");
  }
}

function getKeeperBallPoint() {
  const pitchRect = pitch.getBoundingClientRect();
  const anchorRect = goalkeeper.getBoundingClientRect();
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
  if (modalOpenTimer) window.clearTimeout(modalOpenTimer);
  if (ballFrame) cancelAnimationFrame(ballFrame);
  const start = ballPoint || getKeeperBallPoint();
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
    const t = 1 - Math.pow(1 - raw, 2.7);
    const inv = 1 - t;
    const point = {
      x: inv * inv * inv * start.x + 3 * inv * inv * t * c1.x + 3 * inv * t * t * c2.x + t * t * t * end.x,
      y: inv * inv * inv * start.y + 3 * inv * inv * t * c1.y + 3 * inv * t * t * c2.y + t * t * t * end.y
    };
    const rotation = 900 * t;
    const scale = 0.82 + Math.sin(Math.PI * t) * .26;
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

function setActiveModal(backdrop) {
  [projectBackdrop, profileBackdrop, coachBackdrop, infoBackdrop, contactBackdrop].forEach(item => { if (item !== backdrop) item.hidden = true; });
  backdrop.hidden = false;
  document.body.classList.add("modal-open");
  activeModal = backdrop;
}

function fillProject(project, isFuture = false) {
  const t = translations[currentLanguage];
  document.querySelector("#panel-shirt").innerHTML = createJerseySvg(isFuture ? "grey" : project.kit, `panel-${isFuture ? "future" : project.id}`);
  document.querySelector("#panel-type").textContent = isFuture ? t.futureTitle.toUpperCase() : project.type.toUpperCase();
  document.querySelector("#panel-title").textContent = isFuture ? t.futureTitle : project.name;
  document.querySelector("#panel-subtitle").textContent = isFuture ? t.future : project.type;
  document.querySelector("#panel-description").textContent = isFuture ? t.futureDescription : (currentLanguage === "fr" ? project.description : project.descriptionEn);
  const work = document.querySelector("#panel-work");
  work.replaceChildren();
  const workItems = isFuture ? [t.futureNote] : (currentLanguage === "fr" ? project.work : project.workEn);
  workItems.forEach(item => { const li = document.createElement("li"); li.textContent = item; work.append(li); });
  const tags = document.querySelector("#panel-tags");
  tags.replaceChildren();
  (isFuture ? [] : project.technologies).forEach(item => { const span = document.createElement("span"); span.className = "tag"; span.textContent = item; tags.append(span); });
  document.querySelector("#panel-note").textContent = isFuture ? t.futureNote : (currentLanguage === "fr" ? project.note : project.noteEn);
  const link = document.querySelector("#panel-link");
  const linkPlaceholder = document.querySelector("#panel-link-placeholder");
  if (!isFuture && project.link) { link.href = project.link; link.hidden = false; linkPlaceholder.hidden = true; }
  else { link.hidden = true; linkPlaceholder.hidden = isFuture; }
  galleryIndex = 0;
  renderGallery(isFuture ? { screenshots: [] } : project);
}

function openProject(project, player) {
  currentProject = project;
  lastFocusedElement = player;
  document.querySelectorAll(".player").forEach(item => item.classList.toggle("is-selected", item === player));
  fillProject(project);
  projectBackdrop.hidden = true;
  document.body.classList.remove("modal-open");
  runPass(player, () => {
    setActiveModal(projectBackdrop);
    document.querySelector("#close-project").focus();
  });
}

function openFutureProject(button) {
  lastFocusedElement = button;
  currentProject = null;
  document.querySelectorAll(".player").forEach(item => item.classList.toggle("is-selected", item === button));
  fillProject({}, true);
  projectBackdrop.hidden = true;
  document.body.classList.remove("modal-open");
  runPass(button, () => {
    setActiveModal(projectBackdrop);
    document.querySelector("#close-project").focus();
  });
}

function closeProject() {
  projectBackdrop.hidden = true;
  document.body.classList.remove("modal-open");
  activeModal = null;
  if (document.querySelector(".gallery.is-expanded")) document.querySelector(".gallery.is-expanded").classList.remove("is-expanded");
  if (lastFocusedElement && lastFocusedElement.isConnected) lastFocusedElement.focus();
}

function openProfile() {
  lastFocusedElement = document.activeElement;
  setActiveModal(profileBackdrop);
  document.querySelector("#close-profile").focus();
}
function closeProfile() {
  profileBackdrop.hidden = true;
  document.body.classList.remove("modal-open");
  activeModal = null;
  if (lastFocusedElement && lastFocusedElement.isConnected) lastFocusedElement.focus();
}
function openCoach() {
  lastFocusedElement = document.activeElement;
  setActiveModal(coachBackdrop);
  document.querySelector("#close-coach").focus();
}
function closeCoach() {
  coachBackdrop.hidden = true;
  document.body.classList.remove("modal-open");
  activeModal = null;
  if (lastFocusedElement && lastFocusedElement.isConnected) lastFocusedElement.focus();
}

function openContact() {
  lastFocusedElement = document.activeElement;
  setActiveModal(contactBackdrop);
  document.querySelector("#close-contact").focus();
}
function closeContact() {
  contactBackdrop.hidden = true;
  document.body.classList.remove("modal-open");
  activeModal = null;
  if (lastFocusedElement && lastFocusedElement.isConnected) lastFocusedElement.focus();
}
function openInfo(which) {
  const t = translations[currentLanguage];
  const titles = { skills: t.skills, palmares: t.palmares, substitutes: t.substitutes };
  const bodies = { skills: t.skillsBody, palmares: t.palmaresBody, substitutes: t.substitutesBody };
  document.querySelector("#info-title").textContent = titles[which] || t.skills;
  document.querySelector("#info-body").innerHTML = bodies[which] || t.skillsBody;
  lastFocusedElement = document.activeElement;
  setActiveModal(infoBackdrop);
  document.querySelector("#close-info").focus();
}
function closeInfo() {
  infoBackdrop.hidden = true;
  document.body.classList.remove("modal-open");
  activeModal = null;
  if (lastFocusedElement && lastFocusedElement.isConnected) lastFocusedElement.focus();
}

function slideCount(project) {
  return project && project.screenshots && project.screenshots.length ? project.screenshots.length : 3;
}
function renderGallery(project) {
  const stage = document.querySelector("#gallery-stage");
  const thumbs = document.querySelector("#gallery-thumbs");
  const count = slideCount(project);
  galleryIndex = Math.max(0, Math.min(galleryIndex, count - 1));
  stage.querySelectorAll("img,.gallery-placeholder").forEach(element => element.remove());
  const images = project && project.screenshots ? project.screenshots : [];
  if (images.length) {
    const image = document.createElement("img");
    image.src = images[galleryIndex];
    image.alt = `${project.name} — ${translations[currentLanguage].slide} ${galleryIndex + 1}`;
    stage.prepend(image);
  } else {
    const t = translations[currentLanguage];
    const placeholder = document.createElement("div");
    placeholder.className = `gallery-placeholder gallery-placeholder--${galleryIndex + 1}`;
    placeholder.innerHTML = `<div class="gallery-placeholder__art"><span class="art-node art-node--one"></span><span class="art-node art-node--two"></span><span class="art-node art-node--three"></span><span class="art-lines"></span><span class="art-bars"><i></i><i></i><i></i><i></i><i></i></span></div><strong>${escapeHtml(t.addScreenshot.toUpperCase())} · ${galleryIndex + 1}/3</strong><small>${escapeHtml(t.screenshotNote)}</small>`;
    stage.prepend(placeholder);
  }
  thumbs.replaceChildren();
  for (let index = 0; index < count; index++) {
    const thumb = document.createElement("button");
    thumb.type = "button";
    thumb.className = `gallery-thumb${index === galleryIndex ? " is-active" : ""}`;
    thumb.setAttribute("aria-label", `${translations[currentLanguage].slide} ${index + 1}`);
    if (images[index]) {
      const image = document.createElement("img"); image.src = images[index]; image.alt = ""; thumb.append(image);
    } else {
      const mini = document.createElement("span"); mini.setAttribute("aria-hidden", "true"); thumb.append(mini);
    }
    thumb.addEventListener("click", () => { galleryIndex = index; renderGallery(currentProject); });
    thumbs.append(thumb);
  }
  document.querySelector("#gallery-count").textContent = `${galleryIndex + 1} / ${count}`;
  document.querySelector("#gallery-prev").disabled = count < 2;
  document.querySelector("#gallery-next").disabled = count < 2;
}
function moveGallery(direction) {
  const count = slideCount(currentProject);
  galleryIndex = (galleryIndex + direction + count) % count;
  renderGallery(currentProject);
}

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  const t = translations[language];
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (!t[key]) return;
    if (key === "headline") element.innerHTML = t[key];
    else element.textContent = t[key];
  });
  document.querySelector("#language-button").innerHTML = language === "fr" ? "FR <span>/</span> EN" : "EN <span>/</span> FR";
  
  document.querySelector("#layout-switch").textContent = arena.classList.contains("bench--bottom") ? t.benchSwitchToLeft : t.benchSwitchToBottom;
  renderPlayers();
  if (currentProject && !projectBackdrop.hidden) fillProject(currentProject);
  if (!infoBackdrop.hidden) {
    const active = document.querySelector("#info-title").textContent;
    const previous = translations[language === "fr" ? "en" : "fr"];
    openInfo(active === previous.palmares ? "palmares" : active === previous.substitutes ? "substitutes" : "skills");
  }
}

function setBenchLayout(mode) {
  arena.classList.toggle("bench--bottom", mode === "bottom");
  const t = translations[currentLanguage];
  document.querySelector("#layout-switch").textContent = mode === "bottom" ? t.benchSwitchToLeft : t.benchSwitchToBottom;
  window.setTimeout(() => {
    const target = document.querySelector(".player.is-selected") || goalkeeper;
    ballPoint = getTargetBallPoint(target === goalkeeper ? goalkeeper : target);
    setBallPoint(ballPoint, 900, 1);
  }, 180);
}

renderPlayers();
ballPoint = getKeeperBallPoint();
setBallPoint(ballPoint, 0, .88);
const benchFromUrl = new URLSearchParams(window.location.search).get("bench");
if (benchFromUrl === "bottom") setBenchLayout("bottom");
else document.querySelector("#layout-switch").textContent = translations.fr.benchSwitchToBottom;

// Le bouton CV est un lien de téléchargement direct. Le widget du coach ouvre le profil.
document.querySelector("#contact-button").addEventListener("click", openContact);
document.querySelector("#coach-button").addEventListener("click", openCoach);

document.querySelectorAll("[data-panel]").forEach(button => button.addEventListener("click", () => openInfo(button.dataset.panel)));
document.querySelector("#close-project").addEventListener("click", closeProject);
document.querySelector("#close-project-bottom").addEventListener("click", closeProject);
projectBackdrop.addEventListener("click", event => { if (event.target === projectBackdrop) closeProject(); });
document.querySelector("#close-profile").addEventListener("click", closeProfile);
document.querySelector("#close-profile-bottom").addEventListener("click", closeProfile);
profileBackdrop.addEventListener("click", event => { if (event.target === profileBackdrop) closeProfile(); });
document.querySelector("#close-coach").addEventListener("click", closeCoach);
document.querySelector("#close-coach-bottom").addEventListener("click", closeCoach);
coachBackdrop.addEventListener("click", event => { if (event.target === coachBackdrop) closeCoach(); });
document.querySelector("#close-info").addEventListener("click", closeInfo);
document.querySelector("#close-info-bottom").addEventListener("click", closeInfo);
document.querySelector("#close-contact").addEventListener("click", closeContact);
document.querySelector("#close-contact-bottom").addEventListener("click", closeContact);
contactBackdrop.addEventListener("click", event => { if (event.target === contactBackdrop) closeContact(); });
document.querySelector("#contact-form").addEventListener("submit", async event => {
  event.preventDefault();
  const form = event.currentTarget; const status = document.querySelector("#contact-status"); const submit = document.querySelector("#contact-submit");
  if (form.action.includes("YOUR_FORM_ID")) { status.textContent = currentLanguage === "fr" ? "Le formulaire est prêt visuellement, mais le service Formspree doit être configuré avant de recevoir les messages." : "The form is ready visually, but Formspree must be configured before messages can be received."; status.classList.add("is-warning"); return; }
  submit.disabled = true; status.textContent = currentLanguage === "fr" ? "Envoi en cours…" : "Sending…";
  try { const response = await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } }); if (response.ok) { form.reset(); status.textContent = currentLanguage === "fr" ? "Message envoyé, merci !" : "Message sent, thank you!"; status.classList.remove("is-warning"); } else { throw new Error("send failed"); } } catch { status.textContent = currentLanguage === "fr" ? "L'envoi a échoué. Veuillez réessayer plus tard." : "Sending failed. Please try again later."; status.classList.add("is-warning"); } finally { submit.disabled = false; }
});
infoBackdrop.addEventListener("click", event => { if (event.target === infoBackdrop) closeInfo(); });
document.querySelector("#language-button").addEventListener("click", () => setLanguage(currentLanguage === "fr" ? "en" : "fr"));
document.querySelector("#gallery-prev").addEventListener("click", () => moveGallery(-1));
document.querySelector("#gallery-next").addEventListener("click", () => moveGallery(1));
document.querySelector("#gallery-open").addEventListener("click", () => {
  const gallery = document.querySelector(".gallery");
  const expanded = gallery.classList.toggle("is-expanded");
  document.querySelector("#gallery-open").textContent = expanded ? "×" : "▧";
  document.querySelector("#gallery-open").setAttribute("aria-label", expanded ? translations[currentLanguage].galleryShrink : translations[currentLanguage].galleryExpand);
});
document.querySelector("#layout-switch").addEventListener("click", () => setBenchLayout(arena.classList.contains("bench--bottom") ? "left" : "bottom"));
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    const expandedGallery = document.querySelector(".gallery.is-expanded");
    if (expandedGallery) { expandedGallery.classList.remove("is-expanded"); document.querySelector("#gallery-open").textContent = "▧"; return; }
    if (activeModal === projectBackdrop) closeProject();
    else if (activeModal === profileBackdrop) closeProfile();
    else if (activeModal === coachBackdrop) closeCoach();
    else if (activeModal === infoBackdrop) closeInfo();
    else if (activeModal === contactBackdrop) closeContact();
  }
});
window.addEventListener("resize", () => {
  if (ballFrame) return;
  const selected = document.querySelector(".player.is-selected");
  const point = selected ? getTargetBallPoint(selected) : getKeeperBallPoint();
  setBallPoint(point, 900, 1);
});
