const button = document.querySelector(".menu-button");
const links = document.querySelector(".nav-links");

if (button && links) {
  button.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    button.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => links?.classList.remove("open"));
});

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
