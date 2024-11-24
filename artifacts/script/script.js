// Initialize Materialize components
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    
    // Initialize ScrollSpy
    var scrollElems = document.querySelectorAll('.scrollspy');
    var scrollInstances = M.ScrollSpy.init(scrollElems, { scrollOffset: 50 });

    // Initialize AOS for animations
    AOS.init();
});
