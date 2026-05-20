// Typewriter
const roles = [
  'Data Analyst',
  'ML Engineer',
  'AI Integration Specialist',
  'Python Developer',
];
let ri = 0, ci = 0, deleting = false;
const el = document.getElementById('typewriter-text');

function type() {
  const word = roles[ri];
  if (!deleting) {
    el.textContent = word.slice(0, ++ci);
    if (ci === word.length) { deleting = true; setTimeout(type, 1800); return; }
  } else {
    el.textContent = word.slice(0, --ci);
    if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
  }
  setTimeout(type, deleting ? 60 : 90);
}

type();

// Scroll fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Active nav link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) cur = s.id; });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--accent)' : '';
  });
});

// Stagger fade-up delays
document.querySelectorAll('.fade-up').forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 0.08 + 's';
});