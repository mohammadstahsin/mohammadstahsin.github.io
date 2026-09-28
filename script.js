document.addEventListener("DOMContentLoaded", function () {
  const root = document.documentElement;
  const themeButton = document.querySelector(".theme-button");
  const menuButton = document.querySelector(".menu-button");
  const navLinks = document.querySelector(".nav-links");

  function getSavedTheme() {
    try {
      return localStorage.getItem("theme");
    } catch (e) {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      // Dark mode will still work even if localStorage is blocked.
    }
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);

    if (themeButton) {
      const dark = theme === "dark";

      themeButton.textContent = dark ? "☀" : "☾";

      themeButton.setAttribute(
        "aria-label",
        dark ? "Switch to light mode" : "Switch to dark mode"
      );

      themeButton.setAttribute(
        "title",
        dark ? "Switch to light mode" : "Switch to dark mode"
      );
    }
  }

  const savedTheme = getSavedTheme();

  const systemPrefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  setTheme(savedTheme || (systemPrefersDark ? "dark" : "light"));

  if (themeButton) {
    themeButton.addEventListener("click", function () {
      const current = root.getAttribute("data-theme") || "light";

      const next = current === "dark" ? "light" : "dark";

      setTheme(next);
      saveTheme(next);
    });
  }

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("open");

      menuButton.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
