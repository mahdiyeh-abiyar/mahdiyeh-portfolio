import "./style.css";

document.documentElement.classList.add('dark');

const ELE = document.documentElement;
const mobileNav = document.getElementById("mobile-nav");
const mobileNavItem = document.querySelectorAll("#mobile-nav li");
const backDrop = document.getElementById("backdrop");
const menuBar = document.querySelector("#menubar");
const menuBarIcon = document.querySelector("#menubar i");

document.querySelectorAll(".theme-switch").forEach((item) =>
  item.addEventListener("click", () => {
    ELE.classList.toggle("dark");
    ELE.classList.contains("dark")
      ? localStorage.setItem("theme", "dark")
      : localStorage.setItem("theme", "light");
  })
);

const options = [backDrop, menuBar, ...mobileNavItem];

options.forEach((item) =>
  item.addEventListener("click", () => {
    mobileNav.classList.toggle("h-0");
    mobileNav.classList.toggle("h-96");
    menuBarIcon.classList.toggle("fa-xmark");
    menuBarIcon.classList.toggle("fa-bars");
    backDrop.classList.toggle("hidden");
    document.documentElement.classList.toggle("overflow-hidden");
  })
);

ELE.classList.add(localStorage.getItem("theme"));


function downloadResume() {
  const link = document.createElement('a');
  link.style.display = 'none';
  link.href = './public/CV.pdf';
  link.setAttribute('download', 'Mahdiyeh_Abyiar_Resume.pdf'); 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


window.downloadResume = downloadResume;



document.addEventListener("DOMContentLoaded", function () {
  const text = "Front-End Developer";
  let index = 0;
  const speed = 100; 
  
  function typeEffect() {
    if (index < text.length) {
      document.getElementById("typed-text").textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, speed);
    }
  }
  
  typeEffect();
});
