// /* When the user clicks on the button,
// toggle between hiding and showing the dropdown content */
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

// JavaScript to toggle sections
const skillsButton = document.getElementById("toggle-skills-btn");
const contactButton = document.getElementById("toggle-contact-btn");
const skillsSection = document.getElementById("skills-section");
const contactSection = document.getElementById("contact-section");

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


let angle = 0;
function rotateIcon(id) {
  angle += 180;
  document.querySelector("#toggle-contact-btn").style.transform = `rotate(${angle}deg)`;
  document.querySelector("#toggle-skills-btn").style.transform = `rotate(${angle}deg)`;
}
