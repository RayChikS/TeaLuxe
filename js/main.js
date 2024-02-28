const menuOpen = document.querySelector(".burger-btn");
const menuClose = document.querySelector(".mobile-menu-close");
const menuList = document.querySelector(".nav-list");
const menuBack = document.querySelector(".menu--close");

menuOpen.addEventListener("click", () => {
  menuList.classList.toggle("nav-list-open");
  menuBack.classList.toggle("menu--open");
});
menuClose.addEventListener("click", () => {
  menuList.classList.remove("nav-list-open");
  menuBack.classList.remove("menu--open");
});
