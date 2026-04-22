/* ============================================================
   Arjan Vlaanderen — Portfolio JS
   ============================================================ */

// ----- Nav: add scrolled class -----
const nav = document.getElementById('nav');

const handleNavScroll = () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
};

window.addEventListener('scroll', handleNavScroll, { passive: true });
handleNavScroll();

// ----- Mobile nav toggle -----
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.classList.toggle('open');
    navLinks.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

// ----- Scroll-triggered fade-in -----
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -60px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(
  '.work-item, .about-grid, .process-step, #intro blockquote'
).forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});

// ----- Contact form (basic client-side handling) -----
const form = document.querySelector('.contact-form');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = form.querySelector('.btn-submit');
    const originalText = btn.textContent;

    btn.textContent = 'Sent!';
    btn.disabled = true;
    btn.style.borderColor = '#C8A96E';
    btn.style.color = '#C8A96E';

    // Reset after 3s
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
      btn.style.borderColor = '';
      btn.style.color = '';
      form.reset();
    }, 3000);
  });
}
