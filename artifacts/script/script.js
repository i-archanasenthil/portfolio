document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    // Ensure the home section is always visible
    const homeSection = document.querySelector('#home');
    homeSection.classList.remove('opacity-0'); // Remove the fade-in effect on the home section

    // Add fade-in effect for other sections as user scrolls
    sections.forEach(section => {
        if (section !== homeSection) { // Skip home section
            section.classList.add('transition-opacity', 'duration-1000');
            section.classList.add('opacity-0');
        }
    });

    window.addEventListener('scroll', function () {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                section.classList.remove('opacity-0');
                section.classList.add('opacity-100');
            }
        });
    });
});
