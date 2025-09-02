// Mobilní menu
const toggle = document.querySelector(".nav-toggle");
const menu = document.getElementById("nav-menu");
if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
}
// Rok v patičce
document.getElementById("y").textContent = new Date().getFullYear();
