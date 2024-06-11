"use strict";

const menuOpen = document.querySelector(".menu-icon");
const menuClose = document.querySelector(".close-menu");
const menu = document.querySelector(".menu");

menuOpen.addEventListener("click", (e) => {
  menu.classList.add("menu-hide");
  menuOpen.style.display = "none";
});

menuClose.addEventListener('click', (e) => {
  console.log('clicked');
  menu.classList.remove('menu-hide');
  
  menuOpen.style.display = '';
})