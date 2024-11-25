// You can add interactivity here if needed.
// Example: Simple scroll animation control
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.animate-fade-in-left, .animate-fade-in-right');
    elements.forEach(function(el) {
        const position = el.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            el.classList.add('animated');
        }
    });
});

document.getElementById('groupToggleBtn').addEventListener('click', function() {
    const allSkills = document.querySelector('.all-skills');
    const groupedSkills = document.getElementById('groupedSkills');
    
    if (groupedSkills.classList.contains('hidden')) {
        allSkills.classList.add('hidden');
        groupedSkills.classList.remove('hidden');
    } else {
        allSkills.classList.remove('hidden');
        groupedSkills.classList.add('hidden');
    }
});