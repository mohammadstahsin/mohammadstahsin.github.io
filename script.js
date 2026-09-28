const menuButton = document.querySelector(".menu-button");
const links = document.querySelector(".nav-links");
const themeButton = document.querySelector(".theme-button");

if (menuButton && links) {
  menuButton.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => links?.classList.remove("open"));
});

function updateThemeButton() {
  if (!themeButton) return;
  const dark = document.documentElement.dataset.theme === "dark";
  themeButton.textContent = dark ? "☀" : "☾";
  themeButton.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  themeButton.setAttribute("title", dark ? "Switch to light mode" : "Switch to dark mode");
}

if (themeButton) {
  updateThemeButton();
  themeButton.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme;
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    updateThemeButton();
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
