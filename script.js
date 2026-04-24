document.addEventListener('DOMContentLoaded', () => {

  /* ═══════ Scroll Reveal ═══════ */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObs = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('active'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => revealObs.observe(el));

  /* ═══════ Nav scroll effect ═══════ */
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  /* ═══════ Smooth scroll links ═══════ */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const t = document.querySelector(a.getAttribute('href'));
      if (t) {
        t.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile menu if open
        document.querySelector('.nav-links')?.classList.remove('open');
        document.querySelector('.hamburger')?.classList.remove('active');
      }
    });
  });

  /* ═══════ Hamburger menu ═══════ */
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.nav-links');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('open');
    });
  }

  /* ═══════ Typing effect ═══════ */
  const typed = document.getElementById('typed-name');
  if (typed) {
    const text = typed.dataset.text;
    typed.textContent = '';
    let i = 0;
    function typeChar() {
      if (i < text.length) {
        typed.textContent += text.charAt(i);
        i++;
        setTimeout(typeChar, 70);
      }
    }
    setTimeout(typeChar, 600);
  }

  /* ═══════ Skill hover glow ═══════ */
  document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.boxShadow = '0 0 20px rgba(99,102,241,0.1)';
    });
    item.addEventListener('mouseleave', () => {
      item.style.boxShadow = 'none';
    });
  });

});
