const animate_text = document.querySelectorAll('.animate_text')
window.addEventListener('wheel',function(){
    animate_text.forEach(element => {
        if(element.getBoundingClientRect().top < 700){
            element.classList.add('active')
        }else{
            element.classList.remove('active')
        }
    });
})
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.pageYOffset > 0) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')
    }
});