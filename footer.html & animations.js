<footer style="text-align:center; padding:20px; border-top:1px solid rgba(255,255,255,0.1); background:rgba(10,14,39,0.9); color:var(--text);">
  &copy; 2026 Sushanta Pal. Built with Modular JS.
</footer>
// Animate sections every time a module loads
function animateSections() {
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(20px)";

    setTimeout(() => {
      sec.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }, 50);
  });
}

// Load a module dynamically (ASCII & Unicode safe)
function loadModule(name) {
  fetch(`./modules/${name}.html`) // plain fetch, NO btoa
    .then(res => res.text())
    .then(html => {
      document.getElementById("content").innerHTML = html;

      // ✅ Run animations
      animateSections();
    })
    .catch(() => {
      document.getElementById("content").innerHTML =
        "<h2 style='padding:40px;color:red;'>404 – Module not found</h2>";
    });
}

// Simple hash-based router
function router() {
  const hash = location.hash.replace("#", "") || "home";
  loadModule(hash);
}

// Trigger router on page load and hash changes
window.addEventListener("hashchange", router);
window.addEventListener("load", router);
