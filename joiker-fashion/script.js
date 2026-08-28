// Sustituye únicamente estos tres valores por los datos reales de Joiker.
const CONTACT = {
  instagram: "https://www.instagram.com/joiker_fashion_oficial/",
  tiktok: "https://www.tiktok.com/@joiker.fashion.sa",
  facebook: "https://www.facebook.com/share/1BKr5Jvkee/",
  email: "mailto:joikerrivero@gmail.com?subject=Consulta%20desde%20el%20portfolio%20de%20Joiker%20Fashion"
};

const toast = document.querySelector(".toast");
function configure(selector, value, prefix = "") {
  document.querySelectorAll(selector).forEach(link => {
    if (value) link.href = prefix + value;
    else link.addEventListener("click", event => {
      event.preventDefault();
      toast.classList.add("show");
      clearTimeout(window.toastTimer);
      window.toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
    });
  });
}
configure(".js-instagram", CONTACT.instagram);
configure(".js-tiktok", CONTACT.tiktok);
configure(".js-facebook", CONTACT.facebook);
configure(".js-email", CONTACT.email);

document.getElementById("year").textContent = new Date().getFullYear();
const menu = document.querySelector(".nav");
const menuButton = document.querySelector(".menu-btn");
menuButton.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", open);
});
document.querySelectorAll(".nav nav a").forEach(link => link.addEventListener("click", () => {
  menu.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false");
}));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
}), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
