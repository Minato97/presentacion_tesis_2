/* Diapositiva 9 — Metodología de investigación */
DECK.register({
  section: 'Metodología',
  html: `
  <div class="kicker"><span class="num">05</span> Metodología de investigación</div>
  <h2 class="title">Design Science Research como marco general</h2>

  <div class="stepper mt" data-anim style="--i:0">
    <div class="step"><span class="sn">FASE 1</span><h4>Problema y motivación</h4></div>
    <div class="step"><span class="sn">FASE 2</span><h4>Objetivos de la solución</h4></div>
    <div class="step"><span class="sn">FASE 3</span><h4>Diseño y desarrollo</h4></div>
    <div class="step"><span class="sn">FASE 4</span><h4>Demostración</h4></div>
    <div class="step"><span class="sn">FASE 5</span><h4>Evaluación</h4></div>
    <div class="step"><span class="sn">FASE 6</span><h4>Comunicación</h4></div>
  </div>

  <p class="subtitle">Tres metodologías anidadas dentro del DSR (Peffers et al., 2007):</p>

  <div class="grid cols-3 mt">
    <div class="card teal" data-anim="pop" style="--i:1"><span class="iconbox">${icon('microscope')}</span><h3>RSL · PICO + PRISMA</h3><p>Fases 1–2: fundamenta el problema y los objetivos.</p></div>
    <div class="card accent" data-anim="pop" style="--i:2"><span class="iconbox">${icon('cycle')}</span><h3>Prototipado evolutivo</h3><p>Fase 3: baja fidelidad → funcional → sistema final.</p></div>
    <div class="card brand" data-anim="pop" style="--i:3"><span class="iconbox">${icon('user')}</span><h3>DCU · ISO 9241-210</h3><p>Fases 4–5: evaluación iterativa con usuarios reales.</p></div>
  </div>
  `
});
