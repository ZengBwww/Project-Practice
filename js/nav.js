
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.pageYOffset > 0) {
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        navbar.style.width = '1366px';
    } else {
        navbar.style.position = 'relative';
        navbar.style.top = 'auto';
        navbar.style.width = 'auto';
    }
});