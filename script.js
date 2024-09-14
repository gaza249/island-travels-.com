   // Smooth scrolling for navigation links
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

       // Video background
       document.addEventListener('DOMContentLoaded', function() {
        const video = document.querySelector('.hero video');
        video.play();
    });