// Function to add fade-in animation on scroll (if needed in future for other sections)
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.animate-fade-in-left, .animate-fade-in-right');

    // Add fade-in effect on scroll
    window.addEventListener('scroll', function () {
        let scrollPos = window.scrollY + window.innerHeight;
        sections.forEach(function (section) {
            if (scrollPos > section.offsetTop) {
                section.classList.add('fade-in');
            }
        });
    });
});

// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 80,  // Adjust for header height
            behavior: 'smooth'
        });
    });
});
