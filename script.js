// Activate Lucide icons
lucide.createIcons();


// =========================
// MOBILE MENU
// =========================

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// =========================
// RESERVATION FORM
// =========================

const reservationForm =
    document.getElementById("reservationForm");

reservationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert(
        "Thank you! Your reservation request has been received."
    );

    reservationForm.reset();

});