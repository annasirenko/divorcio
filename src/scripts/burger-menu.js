//burger nav

const nav = document.querySelector(".nav__list");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");
const close = document.querySelector(".close-btn");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav__list--open"); 
  close.classList.toggle("close-btn--close");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav__list--open");    
    close.classList.toggle("close-btn--close");
  });
});

close.addEventListener("click", () => {
    nav.classList.toggle("nav__list--open");   
    close.classList.toggle("close-btn--close");
  });

  new WOW().init();

