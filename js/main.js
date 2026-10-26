const playersContainer = document.querySelector("#players");
const panel = document.querySelector("#project-panel");
const ball = document.querySelector("#ball");

function createPlayer(project) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `player player--${project.id}`;
  button.setAttribute("aria-label", `Découvrir le projet ${project.name}`);
  button.innerHTML = `<span class="jersey" aria-hidden="true">${project.jersey}</span><span class="player__name">${project.name}</span><span class="player__type">${project.type}</span>`;
  button.addEventListener("click", () => openProject(project, button));
  return button;
}

function createFuturePlayer(index) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "player player--future";
  button.setAttribute("aria-label", "Emplacement réservé à un futur projet");
  button.innerHTML = '<span class="jersey" aria-hidden="true">?</span><span class="player__name">À venir</span><span class="player__type">En préparation</span>';
  button.addEventListener("click", () => {
    document.querySelector("#panel-number").textContent = "?";
    document.querySelector("#panel-type").textContent = "EMPLACEMENT RÉSERVÉ";
    document.querySelector("#panel-title").textContent = "Un nouveau projet se prépare";
    document.querySelector("#panel-description").textContent = "Ce maillot attend un projet qui mérite sa place dans l'équipe.";
    document.querySelector("#panel-tags").replaceChildren();
    document.querySelector("#panel-note").textContent = "Reviens bientôt découvrir la suite.";
    showPanel();
  });
  return button;
}

function openProject(project, player) {
  ball.classList.remove("is-moving");
  // Redémarre l'animation si le même maillot est sélectionné plusieurs fois.
  void ball.offsetWidth;
  ball.classList.add("is-moving");
  document.querySelector("#panel-number").textContent = project.jersey;
  document.querySelector("#panel-type").textContent = project.type.toUpperCase();
  document.querySelector("#panel-title").textContent = project.name;
  document.querySelector("#panel-description").textContent = project.description;
  const tags = document.querySelector("#panel-tags");
  tags.replaceChildren();
  project.technologies.forEach(technology => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = technology;
    tags.append(tag);
  });
  document.querySelector("#panel-note").textContent = project.note;
  showPanel();
  panel.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
}

function showPanel() { panel.hidden = false; }
function closePanel() {
  panel.hidden = true;
  document.querySelector("#terrain").scrollIntoView({ behavior: "smooth", block: "start" });
}

projects.forEach(project => playersContainer.append(createPlayer(project)));
playersContainer.append(createFuturePlayer(1), createFuturePlayer(2));
document.querySelector("#close-panel").addEventListener("click", closePanel);
