const playersContainer = document.querySelector("#players");
const pitch = document.querySelector("#pitch");
const ball = document.querySelector("#ball");
const goalkeeper = document.querySelector("#goalkeeper");
const projectBackdrop = document.querySelector("#project-backdrop");
const profileBackdrop = document.querySelector("#profile-backdrop");
let currentLanguage = "fr";
let lastFocusedElement = null;

const translations = {
  fr: {
    season: "PORTFOLIO · SAISON 2026/27", playerCard: "Ma fiche joueur (CV)", contact: "Contact", welcome: "BIENVENUE AU STADE",
    headline: "Mes projets.<br><em>Mon terrain de jeu.</em>", instruction: "Choisis un projet. Depuis les pieds du gardien, le ballon part vers le joueur sélectionné et ouvre sa fiche.",
    projectsLabel: "PROJETS SÉLECTIONNÉS", confirmed: "4 PROJETS À DÉCOUVRIR", futureLabel: "D'AUTRES PROJETS ARRIVENT…", keeper: "GARDIEN · MOI",
    hint: "Clique sur un maillot pour recevoir la passe du gardien.", playerFile: "FICHE JOUEUR · RAPPORT DE MATCH", skillsTitle: "COMPÉTENCES MOBILISÉES", screensTitle: "CAPTURES DU PROJET",
    openProject: "Voir le projet ↗", linkSoon: "Lien à ajouter après vérification", return: "Retour au terrain", playerCardKicker: "CARTE JOUEUR · PROFIL",
    profileRole: "Data & IA · Étudiant ingénieur à l'ESILV", cvNote: "La version CV téléchargeable sera ajoutée ici quand le fichier final sera prêt.",
    linkedin: "Voir mon LinkedIn ↗", footer: "Un portfolio qui se construit projet après projet.", shot: "Capture à ajouter", future: "À venir", futureDescription: "Un nouveau projet est en préparation. Ce maillot sera activé quand le projet sera prêt à être présenté.",
    futureNote: "Les projets ne sont ajoutés ici qu'une fois leurs informations vérifiées.", noShots: "Les captures d'écran seront ajoutées après sélection des visuels du projet."
  },
  en: {
    season: "PORTFOLIO · 2026/27 SEASON", playerCard: "My player card (CV)", contact: "Contact", welcome: "WELCOME TO THE STADIUM",
    headline: "My projects.<br><em>My field of play.</em>", instruction: "Choose a project. The goalkeeper passes the ball to the selected player and opens their player card.",
    projectsLabel: "SELECTED PROJECTS", confirmed: "4 PROJECTS TO DISCOVER", futureLabel: "MORE PROJECTS COMING…", keeper: "GOALKEEPER · ME",
    hint: "Click a jersey to receive a pass from the goalkeeper.", playerFile: "PLAYER CARD · MATCH REPORT", skillsTitle: "SKILLS USED", screensTitle: "PROJECT SCREENSHOTS",
    openProject: "View project ↗", linkSoon: "Link to be added after verification", return: "Back to the pitch", playerCardKicker: "PLAYER CARD · PROFILE",
    profileRole: "Data & AI · Engineering student at ESILV", cvNote: "A downloadable CV will be added here when the final file is ready.",
    linkedin: "View my LinkedIn ↗", footer: "A portfolio built one project at a time.", shot: "Screenshot to add", future: "Coming soon", futureDescription: "A new project is in preparation. This jersey will be activated when the project is ready to present.",
    futureNote: "Projects are only added once their information has been verified.", noShots: "Screenshots will be added after selecting project visuals."
  }
};

function createPlayer(project) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `player player--${project.id}`;
  button.setAttribute("aria-label", `Découvrir le projet ${project.name}`);
  button.innerHTML = `<span class="jersey" aria-hidden="true"><span class="jersey__number">${project.jersey}</span></span><span class="player__name">${project.name}</span><span class="player__type">${project.type}</span>`;
  button.addEventListener("click", () => openProject(project, button));
  return button;
}

function createFuturePlayer(index) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `player player--future player--future-${index}`;
  button.setAttribute("aria-label", translations[currentLanguage].future);
  button.innerHTML = `<span class="jersey" aria-hidden="true"><span class="jersey__number">?</span></span><span class="player__name">${translations[currentLanguage].future}</span><span class="player__type">${currentLanguage === "fr" ? "EN PRÉPARATION" : "IN PREPARATION"}</span>`;
  button.addEventListener("click", () => openFutureProject(button));
  return button;
}

function runPass(target) {
  const pitchRect = pitch.getBoundingClientRect();
  const keeperRect = goalkeeper.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  const startX = keeperRect.left + keeperRect.width / 2 - pitchRect.left;
  const startY = keeperRect.top + keeperRect.height * .48 - pitchRect.top;
  const endX = targetRect.left + targetRect.width / 2 - pitchRect.left;
  const endY = targetRect.top + targetRect.height * .35 - pitchRect.top;
  ball.style.left = `${startX}px`;
  ball.style.top = `${startY}px`;
  ball.style.setProperty("--delta-x", `${endX - startX}px`);
  ball.style.setProperty("--delta-y", `${endY - startY}px`);
  ball.classList.remove("is-moving");
  void ball.offsetWidth;
  ball.classList.add("is-moving");
}

function openProject(project, player) {
  lastFocusedElement = player;
  runPass(player);
  const t = translations[currentLanguage];
  document.querySelector("#panel-number").textContent = project.jersey;
  document.querySelector("#panel-rating").textContent = project.rating;
  document.querySelector("#panel-category").textContent = project.category;
  document.querySelector("#panel-type").textContent = project.type.toUpperCase();
  document.querySelector("#panel-title").textContent = project.name;
  document.querySelector("#panel-description").textContent = currentLanguage === "fr" ? project.description : project.descriptionEn;
  document.querySelector("#panel-note").textContent = currentLanguage === "fr" ? project.note : project.noteEn;
  const tags = document.querySelector("#panel-tags");
  tags.replaceChildren();
  project.technologies.forEach(technology => {
    const tag = document.createElement("span"); tag.className = "tag"; tag.textContent = technology; tags.append(tag);
  });
  const screenshots = document.querySelector("#panel-screenshots");
  screenshots.replaceChildren();
  if (project.screenshots.length) {
    project.screenshots.forEach(src => {
      const img = document.createElement("img"); img.src = src; img.alt = `${project.name} — ${t.screensTitle.toLowerCase()}`; screenshots.append(img);
    });
  } else {
    const placeholder = document.createElement("div"); placeholder.className = "screenshot-placeholder";
    placeholder.innerHTML = `<span class="screenshot-placeholder__icon" aria-hidden="true">▧</span><span>${t.noShots}</span><small>${t.shot}</small>`;
    screenshots.append(placeholder);
  }
  const link = document.querySelector("#panel-link");
  const linkPlaceholder = document.querySelector("#panel-link-placeholder");
  if (project.link) { link.href = project.link; link.hidden = false; linkPlaceholder.hidden = true; }
  else { link.hidden = true; linkPlaceholder.hidden = false; }
  projectBackdrop.hidden = true;
  document.body.classList.remove("modal-open");
  window.setTimeout(() => {
    projectBackdrop.hidden = false;
    document.body.classList.add("modal-open");
    document.querySelector("#close-project").focus();
  }, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 650);
}

function openFutureProject(button) {
  lastFocusedElement = button;
  const t = translations[currentLanguage];
  document.querySelector("#panel-number").textContent = "?";
  document.querySelector("#panel-rating").textContent = "NEXT";
  document.querySelector("#panel-category").textContent = t.future.toUpperCase();
  document.querySelector("#panel-type").textContent = t.future.toUpperCase();
  document.querySelector("#panel-title").textContent = t.future;
  document.querySelector("#panel-description").textContent = t.futureDescription;
  document.querySelector("#panel-note").textContent = t.futureNote;
  document.querySelector("#panel-tags").replaceChildren();
  document.querySelector("#panel-screenshots").innerHTML = `<div class="screenshot-placeholder"><span class="screenshot-placeholder__icon">?</span><span>${t.futureDescription}</span></div>`;
  document.querySelector("#panel-link").hidden = true;
  document.querySelector("#panel-link-placeholder").hidden = true;
  projectBackdrop.hidden = false;
  document.body.classList.add("modal-open");
  document.querySelector("#close-project").focus();
}

function closeProject() {
  projectBackdrop.hidden = true;
  document.body.classList.remove("modal-open");
  ball.classList.remove("is-moving");
  if (lastFocusedElement) lastFocusedElement.focus();
}
function openProfile() {
  lastFocusedElement = document.activeElement;
  profileBackdrop.hidden = false;
  document.body.classList.add("modal-open");
  document.querySelector("#close-profile").focus();
}
function closeProfile() {
  profileBackdrop.hidden = true;
  document.body.classList.remove("modal-open");
  if (lastFocusedElement) lastFocusedElement.focus();
}
function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (translations[language][key]) element.innerHTML = translations[language][key];
  });
  document.querySelector("#language-button").textContent = language === "fr" ? "EN" : "FR";
  document.querySelector("#goalkeeper").setAttribute("aria-label", language === "fr" ? "Gardien : Faizan, passe le ballon aux projets" : "Goalkeeper: Faizan passes the ball to projects");
  const selected = document.querySelector(".player.is-selected");
  if (selected) {
    const projectId = [...selected.classList].find(name => name.startsWith("player--") && name !== "player--future").replace("player--", "");
    const project = projects.find(item => item.id === projectId);
    if (project && !projectBackdrop.hidden) openProject(project, selected);
  }
  const futureButtons = document.querySelectorAll(".player--future");
  futureButtons.forEach((button, index) => {
    button.querySelector(".player__name").textContent = translations[language].future;
    button.querySelector(".player__type").textContent = language === "fr" ? "EN PRÉPARATION" : "IN PREPARATION";
  });
}

projects.forEach(project => playersContainer.append(createPlayer(project)));
playersContainer.append(createFuturePlayer(1), createFuturePlayer(2));
document.querySelectorAll(".player").forEach(player => player.addEventListener("click", () => {
  document.querySelectorAll(".player").forEach(item => item.classList.remove("is-selected"));
  player.classList.add("is-selected");
}));
document.querySelector("#close-project").addEventListener("click", closeProject);
document.querySelector("#close-project-bottom").addEventListener("click", closeProject);
projectBackdrop.addEventListener("click", event => { if (event.target === projectBackdrop) closeProject(); });
document.querySelector("#profile-button").addEventListener("click", openProfile);
document.querySelector("#close-profile").addEventListener("click", closeProfile);
document.querySelector("#close-profile-bottom").addEventListener("click", closeProfile);
profileBackdrop.addEventListener("click", event => { if (event.target === profileBackdrop) closeProfile(); });
document.querySelector("#language-button").addEventListener("click", () => setLanguage(currentLanguage === "fr" ? "en" : "fr"));
document.addEventListener("keydown", event => {
  if (event.key === "Escape") { if (!projectBackdrop.hidden) closeProject(); if (!profileBackdrop.hidden) closeProfile(); }
});
