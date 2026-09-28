document.addEventListener("DOMContentLoaded", function () {
  const themeButton = document.querySelector(".theme-button");
  const root = document.documentElement;

  function updateButton() {
    const currentTheme = root.getAttribute("data-theme");

    if (currentTheme === "dark") {
      themeButton.textContent = "☀";
      themeButton.title = "Switch to light mode";
    } else {
      themeButton.textContent = "☾";
      themeButton.title = "Switch to dark mode";
    }
  }

  if (themeButton) {
    updateButton();

    themeButton.addEventListener("click", function () {
      const currentTheme = root.getAttribute("data-theme");

      if (currentTheme === "dark") {
        root.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      } else {
        root.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      }

      updateButton();
    });
  }

  const menuButton = document.querySelector(".menu-button");
  const navLinks = document.querySelector(".nav-links");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
  }

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
