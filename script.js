// Navigation fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
                });
            }
        });
    });

// Navigation sticky
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

// Animation au scroll (simple)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

// Observer tous les éléments avec la classe 'animate-on-scroll'
document.querySelectorAll('.component-card, .strength-card, .stat-card, .problem-card').forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
});