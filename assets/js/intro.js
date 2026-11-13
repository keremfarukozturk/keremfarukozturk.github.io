// Giriş animasyonu — canvas, dış bağımlılık yok.
// Geniş ekranda kaydırmaya bağlı ilerler; mobilde ve dar ekranda 14 sn'lik döngüde oynar.
// sinyal (sinüs) → bitler → çip + kod → sinir ağı → future.
(() => {
  const cv = document.getElementById('intro');
  if (!cv) return;
  const ctx = cv.getContext('2d');
  const W = 400, H = 500, T = 14;
  const C = { bg: '#F3EEE5', dot: '#E3DBCD', ink: '#24211E', soft: '#6B655D', tan: '#C2AA8C', tanSoft: '#D9C8AE', white: '#FFFFFF', line: '#E0D8CC' };
  const MONO = '"IBM Plex Mono", ui-monospace, monospace';
  const clamp = v => Math.max(0, Math.min(1, v));
  const seg = (t, a, b) => clamp((t - a) / (b - a));
  const ease = x => x < .5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
  const win = (t, a, b, f = .5) => Math.min(seg(t, a, a + f), 1 - seg(t, b - f, b)); // içeri-dışarı
  const lerp = (a, b, p) => a + (b - a) * p;

  // Animasyonun altındaki tek satırlık açıklama: o an oynayan sahneyi gösterir
  const bounds = [0, 2.7, 5.3, 8.5, 11.0];
  const caps = [...document.querySelectorAll('.cap-step')];
  let curStep = -1;
  function setStep(t) {
    let i = 0; for (let k = 0; k < bounds.length; k++) if (t >= bounds[k]) i = k;
    if (i !== curStep) { curStep = i; caps.forEach((c, j) => c.classList.toggle('on', j === i)); }
  }

  function fit() {
    const r = cv.getBoundingClientRect(), d = window.devicePixelRatio || 1;
    cv.width = r.width * d; cv.height = r.height * d;
    ctx.setTransform(cv.width / W, 0, 0, cv.height / H, 0, 0);
  }
  let last = 0;
  fit(); addEventListener('resize', () => { fit(); frame(last); });

  const Y0 = 250, X0 = 48, X1 = 352, A = 46;
  const sine = x => Y0 - A * Math.sin(2 * Math.PI * 2 * (x - X0) / (X1 - X0));
  const N = 16, xs = Array.from({ length: N }, (_, i) => X0 + (i + .5) * (X1 - X0) / N);
  const bits = xs.map(x => sine(x) < Y0 ? 1 : 0);
  const qy = b => b ? Y0 - 30 : Y0 + 30;
  const code = ['if (signal) {', '  learn();', '}'];
  const layers = [[215, 265, 315].map(y => [240, y]), [195, 238, 282, 325].map(y => [295, y]), [235, 295].map(y => [350, y])];
  const scenes = [[0, 3.6], [2.9, 5.6], [5.0, 8.6], [8.2, 11.2], [10.8, 14]];

  function grid() {
    ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = C.dot;
    for (let x = 20; x < W; x += 20) for (let y = 20; y < H; y += 20) ctx.fillRect(x - .6, y - .6, 1.2, 1.2);
  }
  function rrect(x, y, w, h, r) { ctx.beginPath(); ctx.roundRect(x, y, w, h, r); }

  function chrome(t) {
    // alt ilerleme çizgileri (sitenin imza çizgisi)
    let cur = scenes.findIndex(([a, b]) => t >= a && t < b); if (cur < 0) cur = 4;
    for (let i = 0, x = 24; i < 5; i++) {
      const w = i === cur ? 28 : 12;
      ctx.globalAlpha = 1; ctx.fillStyle = i === cur ? C.tan : C.line;
      rrect(x, H - 30, w, 4, 2); ctx.fill(); x += w + 6;
    }
  }

  function frame(ms) {
    last = ms;
    const t = (ms / 1000) % T;
    setStep(t);
    ctx.globalAlpha = 1; grid();

    // 1 — elektrik: sinüs çizilir
    const wa = 1 - seg(t, 3.3, 3.9);
    if (wa > 0) {
      const p = ease(seg(t, .3, 2.4));
      ctx.globalAlpha = wa * .9; ctx.strokeStyle = C.ink; ctx.lineWidth = 1.6; ctx.beginPath();
      for (let x = X0; x <= X0 + (X1 - X0) * p; x += 2) x === X0 ? ctx.moveTo(x, sine(x)) : ctx.lineTo(x, sine(x));
      ctx.stroke();
    }

    // 2 — elektronik: örnekleme → nicemleme → kare dalga + bitler
    const s2 = win(t, 2.6, 5.6, .5);
    if (s2 > 0) {
      const q = ease(seg(t, 3.7, 4.4));
      xs.forEach((x, i) => {
        const ap = seg(t, 2.6 + i * .05, 2.9 + i * .05);
        const y = lerp(sine(x), qy(bits[i]), q);
        ctx.globalAlpha = s2 * ap; ctx.fillStyle = C.tan; ctx.beginPath(); ctx.arc(x, y, 3.2, 0, 7); ctx.fill();
        ctx.globalAlpha = s2 * q; ctx.fillStyle = C.soft; ctx.font = `10px ${MONO}`; ctx.textAlign = 'center';
        ctx.fillText(bits[i], x, Y0 + 62);
      });
      ctx.textAlign = 'left';
      const sp = ease(seg(t, 4.3, 5.0));
      if (sp > 0) {
        ctx.globalAlpha = s2; ctx.strokeStyle = C.ink; ctx.lineWidth = 1.4; ctx.beginPath();
        const step = (X1 - X0) / N, end = X0 + (X1 - X0) * sp;
        ctx.moveTo(X0, qy(bits[0]));
        for (let i = 0; i < N; i++) {
          const xa = X0 + i * step, xb = Math.min(xa + step, end);
          if (xa > end) break;
          ctx.lineTo(xa, qy(bits[i])); ctx.lineTo(xb, qy(bits[i]));
        }
        ctx.stroke();
      }
    }

    // 3 — yazılım: çip, izler, akan bitler, kod
    const s3 = win(t, 5.2, 11.2, .6);
    if (s3 > 0) {
      const mv = ease(seg(t, 8.2, 8.9));                 // 4. sahnede sola kayar
      const cx = lerp(200, 128, mv), cw = lerp(132, 100, mv);
      const x = cx - cw / 2, y = Y0 - cw / 2;
      // izler + akan darbeler
      [-32, 0, 32].forEach((dy, k) => {
        const tp = ease(seg(t, 5.3 + k * .1, 6.0 + k * .1));
        ctx.globalAlpha = s3 * .9; ctx.strokeStyle = C.line; ctx.lineWidth = 1.4;
        ctx.beginPath(); ctx.moveTo(24, Y0 + dy); ctx.lineTo(lerp(24, x, tp), Y0 + dy); ctx.stroke();
        for (let j = 0; j < 3; j++) {
          const ph = ((t * .55 + j / 3 + k * .17) % 1);
          ctx.globalAlpha = s3 * seg(t, 6.0, 6.4) * (1 - mv * .4); ctx.fillStyle = C.tan;
          ctx.beginPath(); ctx.arc(lerp(24, x, ph), Y0 + dy, 2.4, 0, 7); ctx.fill();
        }
      });
      // pimler
      ctx.globalAlpha = s3; ctx.strokeStyle = C.line; ctx.lineWidth = 2;
      for (let i = 1; i <= 4; i++) {
        const o = cw * i / 5;
        [[x + o, y, x + o, y - 7], [x + o, y + cw, x + o, y + cw + 7], [x + cw, y + o, x + cw + 7, y + o]].forEach(([a, b, c, d]) => { ctx.beginPath(); ctx.moveTo(a, b); ctx.lineTo(c, d); ctx.stroke(); });
      }
      // gövde (yumuşak köşe + alt kenar — klavyeden gelen detay)
      const sc = .92 + .08 * ease(seg(t, 5.2, 5.9));
      ctx.save(); ctx.translate(cx, Y0); ctx.scale(sc, sc); ctx.translate(-cx, -Y0);
      ctx.fillStyle = C.line; rrect(x, y + 2, cw, cw, 16); ctx.fill();
      ctx.fillStyle = C.white; rrect(x, y, cw, cw, 16); ctx.fill();
      // kod yazılır (4. sahnede sadeleşir)
      const ty = seg(t, 6.2, 7.8), fade = 1 - seg(t, 8.2, 8.6);
      ctx.font = `10.5px ${MONO}`; ctx.fillStyle = C.ink;
      let chars = Math.floor(ty * code.join('').length);
      code.forEach((ln, i) => {
        const s = ln.slice(0, Math.max(0, chars)); chars -= ln.length;
        ctx.globalAlpha = s3 * fade; ctx.fillText(s, x + 14, y + 34 + i * 18);
      });
      ctx.globalAlpha = s3 * mv; ctx.fillStyle = C.tan; rrect(cx - 14, Y0 - 3, 28, 6, 3); ctx.fill();
      ctx.restore();
    }

    // 4 — yapay zekâ: sinir ağı büyür, sinyal yayılır
    const s4 = win(t, 8.6, 11.4, .5);
    if (s4 > 0) {
      const ex = 128 + 50 + 7;
      const conns = [];
      layers[0].forEach(n => conns.push([[ex, Y0], n, 0]));
      for (let l = 0; l < layers.length - 1; l++) layers[l].forEach(a => layers[l + 1].forEach(b => conns.push([a, b, l + 1])));
      conns.forEach(([a, b, l]) => {
        const p = ease(seg(t, 8.8 + l * .35, 9.4 + l * .35));
        if (p <= 0) return;
        ctx.globalAlpha = s4 * .8; ctx.strokeStyle = C.line; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(lerp(a[0], b[0], p), lerp(a[1], b[1], p)); ctx.stroke();
        const ph = (t * .7 + (a[1] + b[1]) * .003) % 1;
        if (t > 9.9) { ctx.globalAlpha = s4 * .9; ctx.fillStyle = C.tan; ctx.beginPath(); ctx.arc(lerp(a[0], b[0], ph), lerp(a[1], b[1], ph), 1.8, 0, 7); ctx.fill(); }
      });
      layers.forEach((L, l) => L.forEach(([nx, ny], i) => {
        const ap = seg(t, 9.0 + l * .35 + i * .05, 9.3 + l * .35 + i * .05);
        const lit = seg(t, 9.8 + l * .3, 10.2 + l * .3);
        ctx.globalAlpha = s4 * ap;
        ctx.fillStyle = C.white; ctx.beginPath(); ctx.arc(nx, ny, 9, 0, 7); ctx.fill();
        ctx.strokeStyle = C.line; ctx.lineWidth = 1.2; ctx.stroke();
        ctx.globalAlpha = s4 * ap * lit; ctx.fillStyle = C.tan; ctx.beginPath(); ctx.arc(nx, ny, 5, 0, 7); ctx.fill();
      }));
    }

    // 5 — gelecek: tek çizgi + yazılan kelime + yanıp sönen imleç
    const s5 = win(t, 11.0, 14, .6);
    if (s5 > 0) {
      const lp = ease(seg(t, 11.2, 11.9));
      ctx.globalAlpha = s5; ctx.fillStyle = C.tan; rrect(200 - 70 * lp, Y0 + 26, 140 * lp, 4, 2); ctx.fill();
      const word = 'future.', n = Math.floor(seg(t, 11.8, 12.7) * word.length);
      ctx.font = `400 34px ${MONO}`; ctx.fillStyle = C.ink; ctx.textAlign = 'left';
      const full = ctx.measureText(word).width, sx = 200 - full / 2;
      ctx.fillText(word.slice(0, n), sx, Y0 + 8);
      if (Math.floor(t * 2) % 2 === 0 || t < 12.7) { const cw2 = ctx.measureText(word.slice(0, n)).width; ctx.fillRect(sx + cw2 + 3, Y0 - 22, 2, 32); }
    }

    ctx.globalAlpha = 1; chrome(t);
  }

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) { document.fonts.ready.then(() => frame(12800)); return; }      // hareket istemeyenlere son kare

  const wrap = document.querySelector('.hero-wrap');
  const wide = matchMedia('(min-width: 861px)');
  const T0 = 2.4, T1 = 13.4;          // kaydırma başlangıcında sinüs zaten çizili olsun
  let mode = null, visible = true, ticking = false, raf, start = performance.now();

  // Döngü modu: ekranda görünürken tek bir rAF zinciri çalışır
  const loop = now => {
    if (mode !== 'loop' || !visible) { ticking = false; return; }
    frame(now - start); raf = requestAnimationFrame(loop);
  };
  const kick = () => { if (!ticking && mode === 'loop' && visible) { ticking = true; raf = requestAnimationFrame(loop); } };

  // Kaydırma modu: giriş bölümündeki ilerleme (0–1) animasyon zamanına çevrilir
  const scrub = () => {
    const r = wrap.getBoundingClientRect();
    const p = clamp(-r.top / Math.max(1, r.height - innerHeight));
    frame((T0 + p * (T1 - T0)) * 1000);
  };

  new IntersectionObserver(([e]) => { visible = e.isIntersecting; kick(); }).observe(cv);
  const setMode = () => {
    const m = (wrap && wide.matches) ? 'scrub' : 'loop';
    if (m === mode) return;
    mode = m;
    if (m === 'scrub') { cancelAnimationFrame(raf); ticking = false; scrub(); document.fonts.ready.then(scrub); }
    else { start = performance.now(); kick(); }
  };
  addEventListener('scroll', () => { if (mode === 'scrub') scrub(); }, { passive: true });
  addEventListener('resize', () => { if (mode === 'scrub') scrub(); });
  wide.addEventListener('change', setMode);
  setMode();
})();
