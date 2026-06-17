/* =============================================================
   main.js — Motor de la presentación
   Navegación · pantalla completa (doble clic) · tema · animaciones
   ============================================================= */
(function () {
  const deck     = document.getElementById('deck');
  const dotsWrap = document.getElementById('dots');
  const counter  = document.getElementById('counter');
  const progress = document.querySelector('#progress span');
  const hint     = document.getElementById('hint');
  const root     = document.documentElement;

  const slides = DECK.slides;
  let index = 0;

  /* ---------- Construir el DOM de cada diapositiva ---------- */
  slides.forEach((s, i) => {
    const sec = document.createElement('section');
    sec.className = 'slide' + (s.bg ? ' bg' : '');
    sec.id = 'slide-' + i;
    sec.setAttribute('aria-roledescription', 'slide');
    sec.innerHTML = s.html;
    deck.appendChild(sec);
    s._el = sec;

    const dot = document.createElement('button');
    dot.title = s.section || ('Diapositiva ' + (i + 1));
    dot.addEventListener('click', () => go(i));
    dotsWrap.appendChild(dot);
    s._dot = dot;
  });

  /* ---------- Ir a una diapositiva ---------- */
  function go(n) {
    n = Math.max(0, Math.min(slides.length - 1, n));
    if (n === index && slides[n]._el.classList.contains('active')) return;

    const prev = slides[index];
    const next = slides[n];

    slides.forEach(s => {
      s._el.classList.remove('active');
      s._dot.classList.remove('active');
    });

    next._el.classList.add('active');
    next._dot.classList.add('active');
    index = n;

    counter.textContent = (n + 1) + ' / ' + slides.length;
    progress.style.width = ((n + 1) / slides.length * 100) + '%';
    document.body.classList.toggle('on-bg', next._el.classList.contains('bg'));

    // reiniciar scroll y disparar animaciones de entrada
    next._el.scrollTop = 0;
    if (typeof next.onEnter === 'function') {
      // pequeño retardo para que el navegador aplique .active primero
      requestAnimationFrame(() => requestAnimationFrame(() => {
        try { next.onEnter(next._el); } catch (e) { console.warn(e); }
      }));
    }
    location.hash = '#' + (n + 1);
  }

  function next() { go(index + 1); }
  function prev() { go(index - 1); }

  /* ---------- Pantalla completa ---------- */
  function toggleFull() {
    if (!document.fullscreenElement) {
      (root.requestFullscreen || root.webkitRequestFullscreen).call(root);
    } else {
      (document.exitFullscreen || document.webkitExitFullscreen).call(document);
    }
  }

  /* ---------- Tema claro/oscuro ---------- */
  function applyTheme(t) {
    root.setAttribute('data-theme', t);
    try { localStorage.setItem('deck-theme', t); } catch (e) {}
  }
  function toggleTheme() {
    applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  }
  (function initTheme() {
    let t = null;
    try { t = localStorage.getItem('deck-theme'); } catch (e) {}
    if (!t && window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches) t = 'dark';
    applyTheme(t || 'light');
  })();

  /* ---------- Eventos ---------- */
  document.getElementById('btnNext').addEventListener('click', next);
  document.getElementById('btnPrev').addEventListener('click', prev);
  document.getElementById('btnFull').addEventListener('click', toggleFull);
  document.getElementById('btnTheme').addEventListener('click', toggleTheme);

  // Doble clic en cualquier parte = pantalla completa
  document.addEventListener('dblclick', function (e) {
    if (e.target.closest('.controls') || e.target.closest('.dots')) return;
    toggleFull();
  });

  document.addEventListener('keydown', function (e) {
    switch (e.key) {
      case 'ArrowRight': case 'PageDown': case ' ': next(); e.preventDefault(); break;
      case 'ArrowLeft':  case 'PageUp': prev(); e.preventDefault(); break;
      case 'Home': go(0); break;
      case 'End': go(slides.length - 1); break;
      case 'f': case 'F': toggleFull(); break;
      case 't': case 'T': toggleTheme(); break;
    }
  });

  // Navegación táctil (swipe)
  let tx = 0;
  deck.addEventListener('touchstart', e => { tx = e.changedTouches[0].clientX; }, { passive: true });
  deck.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 60) { dx < 0 ? next() : prev(); }
  }, { passive: true });

  // Desvanecer la pista de ayuda
  setTimeout(() => hint && hint.classList.add('gone'), 5200);

  /* ---------- Escenario escalado (se ve igual en cualquier resolución) ----------
     El lienzo mide 1920×1080 (definido en CSS) y aquí lo escalamos con
     transform para que llene la pantalla manteniendo el 16:9, centrado.
     Así se ve idéntico en laptop, proyector 1080p o monitor 4K. */
  function fitStage() {
    const s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    const x = (window.innerWidth  - 1920 * s) / 2;
    const y = (window.innerHeight - 1080 * s) / 2;
    deck.style.transform = 'translate(' + x + 'px,' + y + 'px) scale(' + s + ')';
  }
  window.addEventListener('resize', fitStage);
  window.addEventListener('orientationchange', fitStage);
  fitStage();

  /* ---------- Arranque ---------- */
  const start = Math.max(0, (parseInt(location.hash.replace('#', ''), 10) || 1) - 1);
  index = -1;
  go(start);
})();
