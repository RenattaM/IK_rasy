// Mobile menu toggle
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const yearSpan = document.getElementById("y");

if (yearSpan) yearSpan.textContent = new Date().getFullYear();

if (burger && menu) {
  burger.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("show");
    burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

// Zavření menu po kliknutí na odkaz
menu?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
      burger?.setAttribute("aria-expanded", "false");
    }
  });
});
