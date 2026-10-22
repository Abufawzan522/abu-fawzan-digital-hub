
"use strict";

// ============================================
// Abu Fawzan Digital Hub
// Main JavaScript file
// ============================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Welcome to Abu Fawzan Digital Hub!");
    console.log("JavaScript is working successfully.");

    // ------------------------------------------
    // 1. Welcome Button
    // ------------------------------------------

    const welcomeButton = document.getElementById("welcomBtn");

    if (welcomeButton) {
        welcomeButton.addEventListener("click", function () {
            welcomeButton.textContent =
                "Welcome to Abu Fawzan Digital Hub!";
        });
    }

    // ------------------------------------------
    // 2. Mobile Navigation
    // ------------------------------------------

    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");

    if (navbar && navLinks) {

        let menuButton = document.getElementById("menuToggle");

        if (!menuButton) {
            menuButton = document.createElement("button");
            menuButton.id = "menuToggle";
            menuButton.type = "button";
            menuButton.className = "menu-toggle";
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-label", "Open navigation menu");
            menuButton.setAttribute("aria-expanded", "false");

            navbar.insertBefore(menuButton, navLinks);
        }

        menuButton.addEventListener("click", function () {
            const isOpen = navLinks.classList.toggle("active");

            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

            menuButton.textContent = isOpen ? "✕" : "☰";
        });

        // Close the mobile menu after selecting a link.
        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.setAttribute("aria-label", "Open navigation menu");
                menuButton.textContent = "☰";
            });
        });

    }

    // ------------------------------------------
    // 3. Contact Form Validation
    // ------------------------------------------

    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {

            if (!contactForm.checkValidity()) {
                event.preventDefault();
                contactForm.reportValidity();
                return;
            }

            // This validates the form but does not send the message.
            console.log("Contact form validation passed.");
        });
    }

    // ------------------------------------------
    // 4. Current Year in the Footer
    // ------------------------------------------

    const footerYear = document.getElementById("currentYear");

    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }

});
