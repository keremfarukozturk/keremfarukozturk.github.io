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

  // "Şimdi ve sıradaki": çizgi kaydırdıkça dolar, ulaşılan maddenin noktası yanar
  const tl = document.querySelector('.tl'), fill = tl && tl.querySelector('.tl-fill');
  if (tl && fill && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const items = [...tl.querySelectorAll('li')];
    const g = () => {
      const r = tl.getBoundingClientRect(), line = innerHeight * 0.7;
      const p = Math.min(1, Math.max(0, (line - r.top) / r.height));
      fill.style.height = (p * (r.height - 20)) + 'px';
      items.forEach(li => li.classList.toggle('lit', li.getBoundingClientRect().top + 20 < line));
    };
    addEventListener('scroll', g, { passive: true }); addEventListener('resize', g); g();
  }
})();
