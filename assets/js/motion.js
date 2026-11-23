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

  // Ana sayfa proje kartları: 3'ten fazla kart varsa imleç şeridin üzerinde sağa-sola gittikçe sıra
  // yumuşakça kayar (imlecin içerik alanındaki konumu → kayma miktarı). Takip zamana bağlı üstel
  // yumuşatmadır; ekran tazeleme hızından (60/120 Hz) bağımsız aynı hissi verir. İmleç çıkınca sıra
  // daha yavaş biçimde hizasına döner. Klavye odağı kartı görünür alana getirir; yatay tekerlek de kaydırır.
  const pan = document.querySelector('.cards-pan');
  if (pan && matchMedia('(hover: hover) and (pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const row = pan.querySelector('.cards'), cards = [...row.children], GAP = 20, FADE = 40;
    const wide = matchMedia('(min-width: 861px)');
    const meter = document.createElement('div');
    meter.className = 'pan-meter'; meter.setAttribute('aria-hidden', 'true'); meter.hidden = true;
    meter.innerHTML = '<i></i>'; pan.after(meter);
    const thumb = meter.firstChild;
    let on = false, cw = 0, left = 0, cardw = 0, max = 0, cur = 0, tgt = 0, tau = .16, raf = 0, last = 0;
    const clamp = v => Math.min(max, Math.max(0, v));
    const paint = () => {
      row.style.transform = `translate3d(${-cur.toFixed(2)}px,0,0)`;
      const f = Math.min(FADE, cur, max - cur).toFixed(1);   // kenar solması yalnız kesik varken
      pan.style.setProperty('--fl', `${f}px`); pan.style.setProperty('--fr', `${f}px`);
      const mw = 96 * cw / (cw + max);
      thumb.style.transform = `translateX(${(max ? cur / max : 0) * (96 - mw)}px)`;
    };
    const tick = now => {
      const dt = Math.min(.05, (now - (last || now)) / 1000); last = now;
      cur += (tgt - cur) * (1 - Math.exp(-dt / tau));
      if (Math.abs(tgt - cur) < .3) cur = tgt;
      paint();
      raf = cur === tgt ? (last = 0) : requestAnimationFrame(tick);
    };
    const go = (v, t = .16) => { tgt = clamp(v); tau = t; if (!raf) raf = requestAnimationFrame(tick); };
    const layout = () => {
      on = wide.matches && cards.length > 3;
      pan.classList.toggle('on', on); meter.hidden = !on;
      if (!on) { row.style.transform = ''; cur = tgt = 0; return; }
      cw = pan.clientWidth; left = pan.getBoundingClientRect().left;
      cardw = (cw - 2 * GAP) / 3;
      pan.style.setProperty('--cardw', `${cardw}px`);
      max = cards.length * cardw + (cards.length - 1) * GAP - cw;
      meter.style.setProperty('--mw', `${96 * cw / (cw + max)}px`);
      cur = tgt = clamp(tgt); paint();
    };
    pan.addEventListener('pointermove', e => {
      if (!on || e.pointerType !== 'mouse') return;
      const x = (e.clientX - left) / cw;                     // içerik alanındaki konum (0–1)
      go(Math.min(1, Math.max(0, (x - .2) / .6)) * max);     // kenarlarda %20'lik ölü bölge
    });
    pan.addEventListener('pointerleave', () => on && go(0, .32));
    pan.addEventListener('wheel', e => {
      if (!on || Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault(); go(tgt + e.deltaX, .1);
    }, { passive: false });
    pan.addEventListener('focusin', e => {
      const i = cards.indexOf(e.target.closest('.card'));
      if (!on || i < 0) return;
      const x = i * (cardw + GAP);
      if (x < tgt) go(x, .3); else if (x + cardw > tgt + cw) go(x + cardw - cw, .3);
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
