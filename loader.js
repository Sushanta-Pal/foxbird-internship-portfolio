function loadModule(name) {
  fetch(`${name}.html`)
    .then(res => res.text())
    .then(html => {
      const content = document.getElementById("content");
      content.innerHTML = html;
      // Trigger animations if they exist
      if(typeof animateSections === 'function') animateSections();
    })
    .catch(err => console.error("Error loading module:", err));
}

// Load Navigation immediately
fetch("nav.html")
  .then(res => res.text())
  .then(html => document.getElementById("navbar").innerHTML = html);