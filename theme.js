function toggleTheme() {
  document.body.classList.toggle("light");
  // Optional: Save to local storage
  const isLight = document.body.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
}