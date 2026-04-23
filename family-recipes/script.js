// Category tab filtering
const tabs = document.querySelectorAll('.nav-tab');
const cards = document.querySelectorAll('.recipe-card');
const featuredSection = document.getElementById('featuredSection');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const category = tab.dataset.category;

    // Update active tab
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Show/hide featured section (only on "All")
    if (featuredSection) {
      featuredSection.style.display = category === 'all' ? '' : 'none';
    }

    // Filter cards
    cards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// Sticky nav shadow on scroll
const nav = document.getElementById('categoryNav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    nav.style.boxShadow = '0 2px 12px rgba(0,0,0,0.07)';
  } else {
    nav.style.boxShadow = 'none';
  }
}, { passive: true });
