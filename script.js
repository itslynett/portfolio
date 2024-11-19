document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling for navigation links
    const navigationLinks = document.querySelectorAll('nav ul li a');
    navigationLinks.forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Project Slideshow Functionality (Ensure you have appropriate HTML structure for this)
    const projectSlides = document.querySelectorAll(".project-slide");  // Ensure each project has the 'project-slide' class
    let currentProjectSlide = 0;

    // Show the current project slide
    function showProjectSlides() {
        projectSlides.forEach((slide, index) => {
            slide.classList.toggle("active", index === currentProjectSlide);
        });
        currentProjectSlide = (currentProjectSlide + 1) % projectSlides.length;
    }

    // Start project slideshow loop every 3 seconds
    setInterval(showProjectSlides, 3000);

    // Manual slideshow controls (previous/next buttons)
    const prevButton = document.querySelector(".prev-slide");
    const nextButton = document.querySelector(".next-slide");

    if (prevButton && nextButton) {
        prevButton.addEventListener("click", function () {
            currentProjectSlide = (currentProjectSlide - 1 + projectSlides.length) % projectSlides.length;
            showProjectSlides();
        });

        nextButton.addEventListener("click", function () {
            currentProjectSlide = (currentProjectSlide + 1) % projectSlides.length;
            showProjectSlides();
        });
    }

    // Contact Form Validation and Submission
    const contactForm = document.querySelector(".contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Form fields
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Clear previous error styles
        document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

        // Validate fields
        let isValid = true;

        // Validate name
        if (!name) {
            document.getElementById("name").classList.add("error");
            isValid = false;
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailPattern.test(email)) {
            document.getElementById("email").classList.add("error");
            isValid = false;
        }

        // Validate subject
        if (!subject) {
            document.getElementById("subject").classList.add("error");
            isValid = false;
        }

        // Validate message
        if (!message) {
            document.getElementById("message").classList.add("error");
            isValid = false;
        }

        if (!isValid) {
            alert("Please fill in all fields correctly.");
            return;
        }

        // Successful submission
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        contactForm.reset(); // Reset form after successful submission
    });

    // Highlight active section during scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY + 200; // Adjust for better precision
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            // Highlight link corresponding to the visible section
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLinks[index].classList.add('active');
            }
        });
    });
});
