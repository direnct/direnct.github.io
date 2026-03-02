// Scroll Reveal Logic
const revealElements = document.querySelectorAll('.reveal');

const scrollReveal = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;
        if (elTop < triggerBottom) {
            el.classList.add('active');
        }
    });
};

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
const handleNavScroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Initialize
window.addEventListener('scroll', () => {
    scrollReveal();
    handleNavScroll();
});

// Initial call
window.addEventListener('DOMContentLoaded', () => {
    scrollReveal();
    handleNavScroll();

    // Add active class to hero elements immediately
    document.querySelectorAll('#hero .reveal').forEach(el => {
        el.classList.add('active');
    });
});

// Form Submission (Visual Feedback)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.textContent;

        btn.textContent = 'Message Sent!';
        btn.style.background = '#3f9b0b';
        btn.style.borderColor = '#3f9b0b';
        btn.style.color = '#000';

        contactForm.reset();

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.style.borderColor = '';
            btn.style.color = '';
        }, 3000);
    });
}
