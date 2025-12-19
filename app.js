const themeSelector = document.querySelector(".theme-selector");
const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");
const theme = savedTheme ?? "light"; // default

root.dataset.theme = theme;
themeSelector.textContent = theme === "dark" ? "🌙" : "🔆";

const toggleTheme = (event) => {
  const currentTheme = root.dataset.theme;
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
  event.target.textContent = nextTheme === "dark" ? "🌙" : "🔆";
};