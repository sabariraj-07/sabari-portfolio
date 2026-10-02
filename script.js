// ================================
// PAGE LOAD
// ================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Sabari Raj Portfolio Loaded 🚀");

});


// ================================
// CONTACT FORM
// ================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you for contacting me! 😊");

    contactForm.reset();

});


// ================================
// NAVBAR ACTIVE LINK
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.style.color = "";

        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "#12b8ff";
        }

    });

});