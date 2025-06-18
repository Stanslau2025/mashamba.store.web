// Toggle sidebar with animated content
function toggleMenu() {
    var sidebar = document.getElementById("mySidebar");
    var overlay = document.getElementById("overlay");

    if (sidebar.style.width === "400px") {
        closeNav();
    } else {
        openNav();
    }
}




// Function to open the sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "280px";
    document.getElementById("overlay").style.display = "block";

    // Start the laser beam animations
    startLaserBeams();
}

// Function to close the sidebar
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("overlay").style.display = "none";

    // Stop the laser beam animations
    stopLaserBeams();
}

// Function to start laser beams
function startLaserBeams() {
    const lasers = document.querySelectorAll('.laser-beam');
    lasers.forEach(laser => {
        laser.style.animationPlayState = 'running';
    });
}

// Function to stop laser beams
function stopLaserBeams() {
    const lasers = document.querySelectorAll('.laser-beam');
    lasers.forEach(laser => {
        laser.style.animationPlayState = 'paused';
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const seeMoreBooksButton = document.getElementById('seeMoreBooks');
    const seeLessBooksButton = document.getElementById('seeLessBooks');
    const contactFormButton = document.getElementById('contactFormButton');
    const bookCards = document.querySelectorAll('.book-card');
    const contactForm = document.querySelector('.contact-form');

    // Show more books when "See More Books" is clicked
    seeMoreBooksButton.addEventListener('click', function () {
        bookCards.forEach(card => {
            card.style.display = 'block';
        });
        seeMoreBooksButton.style.display = 'none'; // Hide button after click
        seeLessBooksButton.style.display = 'block'; // Show "View Less" button
    });

    // Hide extra books when "View Less Books" is clicked
    seeLessBooksButton.addEventListener('click', function () {
        bookCards.forEach((card, index) => {
            if (index >= 1) { // Only show the first book, hide others
                card.style.display = 'none';
            }
        });
        seeMoreBooksButton.style.display = 'block'; // Show "See More Books" button again
        seeLessBooksButton.style.display = 'none'; // Hide "View Less Books" button
    });

    // Show contact form when button is clicked
    contactFormButton.addEventListener('click', function () {
        contactForm.style.display = 'block';
        contactFormButton.style.display = 'none'; // Hide button after click
    });

    // Close contact form when 'X' button is clicked
    document.getElementById('closeContactForm').addEventListener('click', function () {
        contactForm.style.display = 'none';
        contactFormButton.style.display = 'block'; // Show button again
    });

    // Smooth scrolling and active link functionality
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));

            // Handle scrolling behavior based on the section
            if (targetSection.id === "categories" || targetSection.id === "about") {
                // Scroll to the top of the Featured Books or About Us section
                window.scrollTo({
                    top: targetSection.offsetTop, // Scroll to the top
                    behavior: 'smooth'
                });
            } else if (targetSection.id === "contact") {
                // Scroll Contact Us section to the middle of the page
                const sectionHeight = targetSection.offsetHeight;
                const viewportHeight = window.innerHeight;
                const offsetTop = targetSection.offsetTop - (viewportHeight / 2) + (sectionHeight / 2);

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            } else {
                // Default smooth scrolling
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY;
        sections.forEach(section => {
            if (scrollPos >= section.offsetTop - 50 && scrollPos < section.offsetTop + section.offsetHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${section.id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});
