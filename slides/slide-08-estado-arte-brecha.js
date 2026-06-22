/* Diapositiva 8 — Estado del arte: hallazgos y brecha */
DECK.register({
  section: 'Estado del arte · Brecha',
  html: `
  <div class="kicker"><span class="num">04</span> Estado del arte · Hallazgos y brecha</div>
  <h2 class="title">5 preguntas de investigación → 1 brecha</h2>

  <div class="grid cols-2 mt" style="align-items:center">
    <div class="barset" id="rqBars">
      <div class="barrow"><span class="blab">RQ1</span><div class="bartrack"><div class="barfill" data-v="17"></div></div><span class="bval" data-count="17">0</span></div>
      <div class="barrow"><span class="blab">RQ2</span><div class="bartrack"><div class="barfill" data-v="9"></div></div><span class="bval" data-count="9">0</span></div>
      <div class="barrow"><span class="blab">RQ3</span><div class="bartrack"><div class="barfill" data-v="14"></div></div><span class="bval" data-count="14">0</span></div>
      <div class="barrow"><span class="blab">RQ4</span><div class="bartrack"><div class="barfill" data-v="15"></div></div><span class="bval" data-count="15">0</span></div>
      <div class="barrow"><span class="blab">RQ5</span><div class="bartrack"><div class="barfill" data-v="13"></div></div><span class="bval" data-count="13">0</span></div>
      <p class="fmeta">Estudios que aportan a cada pregunta (n=21). RQ3 = <b>DCU</b>: aunque aparece en 14 estudios, casi siempre de forma <b>tangencial</b> (sin evaluación con usuarios reales); es la dimensión <b>menos desarrollada en profundidad</b>.</p>
    </div>

    <div>
      <ul class="ticks">
        <li data-anim style="--i:0"><b>RAG</b> es condición necesaria para precisión factual.</li>
        <li data-anim style="--i:1"><b>MCP</b> estandariza el acceso a datos IoT heterogéneos.</li>
        <li data-anim style="--i:2">La <b>experiencia de usuario</b> es la asignatura pendiente.</li>
      </ul>

      <div class="card accent mt" data-anim style="--i:3">
        <h3 class="h3ic" style="color:var(--accent)">${icon('compass')} Brecha identificada</h3>
        <p style="color:var(--text);font-size:clamp(13px,1.2cqw,16px)">
          Ningún estudio combina <b>agente LLM + datos edafológicos vía MCP + diseño centrado en el usuario</b>.
          Esa convergencia, en la Región Valles, es la <span class="hl">contribución original</span>.
        </p>
      </div>
    </div>
  </div>
  `,
  onEnter(el) {
    const max = 17;
    el.querySelectorAll('.barfill').forEach((f, i) => {
      const v = +f.getAttribute('data-v');
      f.style.width = '0';
      setTimeout(() => f.style.width = (v / max * 100) + '%', 200 + i * 130);
    });
    el.querySelectorAll('[data-count]').forEach((n, i) => {
      setTimeout(() => animateCount(n, +n.getAttribute('data-count'), 800), 250 + i * 130);
    });
  }
});
