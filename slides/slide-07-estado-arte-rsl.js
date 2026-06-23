/* Diapositiva 7 — Estado del arte: metodología RSL (PICO + PRISMA) */
DECK.register({
  section: 'Estado del arte · RSL',
  html: `
  <div class="kicker"><span class="num">04</span> Estado del arte · Revisión Sistemática de Literatura</div>
  <h2 class="title">Búsqueda con método: PICO + PRISMA</h2>

  <div class="grid cols-2 mt" style="align-items:center">
    <div>
      <ul class="ticks">
        <li data-anim style="--i:0"><b>PICO</b> definió <i>qué</i> buscar; <b>PRISMA</b> el <i>cómo</i> filtrar.</li>
        <li data-anim style="--i:1">Fuentes: <b>Scopus · IEEE Xplore · Web of Science</b> (mayo 2026).</li>
        <li data-anim style="--i:2">El <b>cribado</b> se hizo por título y resumen; el texto completo solo se leyó en los estudios elegibles.</li>
        <li data-anim style="--i:3">4 fases: identificación → cribado → elegibilidad → inclusión.</li>
      </ul>
    </div>

    <div class="funnel" id="prismaFunnel">
      <div class="fbar s1" data-w="100">Identificados <span class="fn" data-count="483">0</span></div>
      <div class="fmeta" style="margin-left:6px">− 66 duplicados</div>
      <div class="fbar s2" data-w="86">Cribados · título y resumen <span class="fn" data-count="417">0</span></div>
      <div class="fmeta" style="margin-left:6px">− 381 excluidos por título y resumen</div>
      <div class="fbar s3" data-w="72">Leídos a texto completo <span class="fn" data-count="36">0</span></div>
      <div class="fmeta" style="margin-left:6px">− 15 excluidos tras la lectura</div>
      <div class="fbar s4" data-w="56">Incluidos ✓ <span class="fn" data-count="21">0</span></div>
    </div>
  </div>
  <div class="foot"><span class="badge">21 estudios</span> base empírica de las decisiones de diseño</div>
  `,
  onEnter(el) {
    el.querySelectorAll('.fbar').forEach((b, i) => {
      const w = b.getAttribute('data-w');
      b.style.width = '0';
      setTimeout(() => { b.style.transition = 'width 800ms cubic-bezier(.22,.61,.36,1)'; b.style.width = w + '%'; }, 200 + i * 260);
    });
    el.querySelectorAll('[data-count]').forEach((n, i) => {
      const end = +n.getAttribute('data-count');
      setTimeout(() => animateCount(n, end, 900), 400 + i * 260);
    });
  }
});

/* utilitario de conteo (global, reutilizable) */
window.animateCount = window.animateCount || function (node, end, dur) {
  const start = performance.now();
  function tick(t) {
    const p = Math.min(1, (t - start) / dur);
    node.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
};
