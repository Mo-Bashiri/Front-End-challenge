
const skillsButton = document.getElementById("toggle-skills-btn");
const contactButton = document.getElementById("toggle-contact-btn");
const workButton = document.getElementById("toggle-work-btn");
const educationButton = document.getElementById("toggle-education-btn");
const skillsSection = document.getElementById("skills-section");
const contactSection = document.getElementById("contact-section");
const worksection = document.getElementById("work-section");
const educationsection = document.getElementById("education-section");

skillsButton.addEventListener("click", () => {
  if (skillsSection.classList.contains("hidden")) {
    skillsSection.classList.remove("hidden");
  } else {
    skillsSection.classList.add("hidden");
  }
});

contactButton.addEventListener("click", () => {
  if (contactSection.classList.contains("hidden")) {
    contactSection.classList.remove("hidden");
  } else {
    contactSection.classList.add("hidden");
  }
});

workButton.addEventListener("click", () => {
  if (worksection.classList.contains("hidden")) {
    worksection.classList.remove("hidden");
  } else {
    worksection.classList.add("hidden");
  }
});

educationButton.addEventListener("click", () => {
  if (educationsection.classList.contains("hidden")) {
    educationsection.classList.remove("hidden");
  } else {
    educationsection.classList.add("hidden");
  }
});


let angle = 0;
function rotateIcon() {
  angle += 180;
  document.querySelector("#toggle-contact-btn").style.transform = `rotate(${angle}deg)`;
  document.querySelector("#toggle-skills-btn").style.transform = `rotate(${angle}deg)`;
  document.querySelector("#toggle-work-btn").style.transform = `rotate(${angle}deg)`;
  document.querySelector("#toggle-education-btn").style.transform = `rotate(${angle}deg)`;
}
