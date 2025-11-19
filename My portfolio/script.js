// Basic JS: nav toggle, year fill, simple contact form success message
document.addEventListener('DOMContentLoaded', function () {
    // year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  
    // nav toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  
    // Close nav when link clicked (mobile)
    navLinks.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') navLinks.classList.remove('open');
    });
  
    // contact form simple demo behavior (no backend)
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        formMessage.textContent = 'Thanks — your message has been received (demo).';
        contactForm.reset();
        setTimeout(() => (formMessage.textContent = ''), 5000);
      });
    }
  });