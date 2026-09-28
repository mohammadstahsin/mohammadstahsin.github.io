document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const themeButton = document.querySelector(".theme-button");
  const menuButton = document.querySelector(".menu-button");
  const navLinks = document.querySelector(".nav-links");

  const updateThemeButton = () => {
    if (!themeButton) return;
    const dark = root.dataset.theme === "dark";
    themeButton.textContent = dark ? "☀" : "☾";
    themeButton.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    themeButton.title = dark ? "Switch to light mode" : "Switch to dark mode";
  };

  updateThemeButton();

  themeButton?.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
    updateThemeButton();
  });

  const closeMenu = () => {
    if (!menuButton || !navLinks) return;
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  };

  menuButton?.addEventListener("click", () => {
    if (!navLinks) return;
    const open = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  const currentFile = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentFile) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
});
