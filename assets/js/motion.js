// Kaydırınca beliren öğeler + yazı sayfasında okuma ilerlemesi.
(() => {
  const els = document.querySelectorAll('.reveal, .sec');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: .15 });
    els.forEach(el => io.observe(el));
  } else els.forEach(el => el.classList.add('in'));

  const bar = document.querySelector('.progress');
  if (bar) {
    const f = () => { const h = document.documentElement; bar.style.transform = `scaleX(${h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)})`; };
    addEventListener('scroll', f, { passive: true }); f();
  }
})();
