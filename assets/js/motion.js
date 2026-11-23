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

  // Ana sayfa proje kartları: 3'ten fazla kart varsa imleç şeridin üzerinde sağa-sola gittikçe
  // sıra yumuşakça kayar (imlecin konumu → kayma miktarı). İmleç çıkınca sıra hizasına döner.
  // Klavyeyle odaklanan kart görünür alana getirilir; yatay tekerlek/trackpad da kaydırır.
  const pan = document.querySelector('.cards-pan');
  if (pan && matchMedia('(hover: hover) and (pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const row = pan.querySelector('.cards'), cards = [...row.children], GAP = 20;
    const wide = matchMedia('(min-width: 861px)');
    let on = false, cw = 0, ext = 0, cardw = 0, max = 0, cur = 0, tgt = 0, raf = 0;
    const clamp = v => Math.min(max, Math.max(0, v));
    const tick = () => {
      cur += (tgt - cur) * .08;
      if (Math.abs(tgt - cur) < .1) cur = tgt;
      row.style.transform = `translate3d(${-cur.toFixed(2)}px,0,0)`;
      raf = cur === tgt ? 0 : requestAnimationFrame(tick);
    };
    const go = v => { tgt = clamp(v); if (!raf) raf = requestAnimationFrame(tick); };
    const layout = () => {
      on = wide.matches && cards.length > 3;
      pan.classList.toggle('on', on);
      if (!on) { row.style.transform = ''; cur = tgt = 0; return; }
      const host = pan.parentElement, r = host.getBoundingClientRect();
      cw = host.clientWidth; ext = Math.max(0, r.left);
      cardw = (cw - 2 * GAP) / 3;
      pan.style.setProperty('--ext', `${ext}px`);
      pan.style.setProperty('--cardw', `${cardw}px`);
      max = cards.length * cardw + (cards.length - 1) * GAP - cw;
      cur = tgt = clamp(tgt); row.style.transform = `translate3d(${-cur}px,0,0)`;
    };
    pan.addEventListener('pointermove', e => {
      if (!on || e.pointerType !== 'mouse') return;
      const x = (e.clientX - ext) / cw;                 // içerik alanındaki konum (0–1)
      go(Math.min(1, Math.max(0, (x - .15) / .7)) * max); // kenarlarda %15'lik ölü bölge
    });
    pan.addEventListener('pointerleave', () => on && go(0));
    pan.addEventListener('wheel', e => {
      if (!on || Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault(); go(tgt + e.deltaX);
    }, { passive: false });
    pan.addEventListener('focusin', e => {
      const i = cards.indexOf(e.target.closest('.card'));
      if (!on || i < 0) return;
      const left = i * (cardw + GAP);
      if (left < tgt) go(left); else if (left + cardw > tgt + cw) go(left + cardw - cw);
    });
    addEventListener('resize', layout);
    layout();
  }

  const bar = document.querySelector('.progress');
  if (bar) {
    const f = () => { const h = document.documentElement; bar.style.transform = `scaleX(${h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)})`; };
    addEventListener('scroll', f, { passive: true }); f();
  }
})();
