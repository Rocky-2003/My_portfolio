"use strict";
// import LazyLoading from "./lazyLoadingImg.js";
import ScrollSmoot from "./scroolSmooth.js";

const menuOpen = document.querySelector(".menu-icon");
const menuClose = document.querySelector(".close-menu");
const menu = document.querySelector(".menu");




// Appling Smooth Scrooling
ScrollSmoot();


// Header naviton funtion
menuOpen.addEventListener("click", (e) => {
  menu.classList.add("menu-hide");
  menuOpen.style.display = "none";
});

menuClose.addEventListener("click", (e) => {
  console.log("clicked");
  menu.classList.remove("menu-hide");

  menuOpen.style.display = "";
});

// Downlaod CV Functionality
document.getElementById("downloadBtn").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "../public/resume/Resume (2).pdf"; // Replace with the actual path to your resume file
  link.download = "RockyMor.pdf"; // The name the file will be downloaded as
  link.click();
});
