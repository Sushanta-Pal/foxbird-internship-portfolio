const routes = {
  "": "home",
  "#home": "home",
  "#about": "about",
  "#skills": "skills",
  "#projects": "projects",
  "#contact": "contact"
};

function router() {
  const hash = window.location.hash;
  const page = routes[hash] || "home"; // Default to home
  loadModule(page);
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);