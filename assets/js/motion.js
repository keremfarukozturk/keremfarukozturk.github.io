// Kaydırınca beliren öğeler + yazı sayfasında okuma ilerlemesi.
(() => {
  const els = document.querySelectorAll('.reveal, .sec');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: .15 });
    els.forEach(el => io.observe(el));
  } else els.forEach(el => el.classList.add('in'));

  // Saat darbesi: çizgiler sayfadaki sıralarına göre zincirlenir. Darbe bir çizgiyi
  // 2,45 sn'de geçer (7 sn'lik döngünün %35'i); bir alttaki çizgi tam o anda, ters yönde
  // başlar. Böylece tek bir akım yukarıdan aşağıya yılan gibi dolaşır.
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const PERIOD = 7, PASS = PERIOD * .35;
    document.querySelectorAll('.site-top, .sec-head, .lede, .pindex-head, .status, .bg, .contact, .spec, .ds-rev, .site-footer')
      .forEach((el, i) => {
        el.style.setProperty('--wd', `${((i * PASS) % PERIOD).toFixed(2)}s`);
        el.style.setProperty('--wn', i % 2 ? 'wire-l' : 'wire-r');
      });
  }

  const bar = document.querySelector('.progress');
  if (bar) {
    const f = () => { const h = document.documentElement; bar.style.transform = `scaleX(${h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)})`; };
    addEventListener('scroll', f, { passive: true }); f();
  }
})();
