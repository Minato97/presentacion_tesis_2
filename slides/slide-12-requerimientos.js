/* Diapositiva 12 — Requerimientos funcionales y no funcionales */
DECK.register({
  section: 'Requerimientos',
  html: `
  <div class="kicker"><span class="num">07</span> Análisis de requerimientos</div>
  <h2 class="title">27 funcionales · 16 no funcionales</h2>

  <div class="row mt" style="justify-content:center;gap:34px">
    <div class="stat" data-anim="pop" style="--i:0"><div class="big" data-count="27">0</div><div class="lbl">Funcionales (RF)</div></div>
    <div class="stat" data-anim="pop" style="--i:1"><div class="big" data-count="16">0</div><div class="lbl">No funcionales (RNF)</div></div>
    <div class="stat" data-anim="pop" style="--i:2"><div class="big" data-count="5">0</div><div class="lbl">Módulos</div></div>
  </div>

  <div class="grid cols-2 mt">
    <div class="card brand" data-anim style="--i:3">
      <h3 class="h3ic">${icon('gear')} Funcionales (muestra)</h3>
      <ul class="ticks" style="gap:8px">
        <li><b>RF-03</b> Recibir y almacenar la información enviada por los nodos.</li>
        <li><b>RF-08</b> Monitoreo en tiempo real con umbrales.</li>
        <li><b>RF-09/10</b> Estadísticas y comparativas entre nodos.</li>
        <li><b>RF-14</b> Consulta en lenguaje natural (LLM + MCP).</li>
      </ul>
    </div>
    <div class="card accent" data-anim style="--i:4">
      <h3 class="h3ic" style="color:var(--accent)">${icon('shield')} No funcionales (muestra)</h3>
      <ul class="ticks" style="gap:8px">
        <li><b>RNF-01</b> API protegida con JWT.</li>
        <li><b>RNF-02</b> Roles: Admin · Normal · Invitado.</li>
        <li><b>RNF-03</b> Interfaz responsiva (móvil → 4K).</li>
        <li><b>RNF-09</b> IA accede solo vía MCP (solo lectura).</li>
      </ul>
    </div>
  </div>
  <div class="foot"><span class="badge">Trazabilidad</span> cada requerimiento ↔ componente (matriz en anexos)</div>
  `,
  onEnter(el) {
    el.querySelectorAll('[data-count]').forEach((n, i) =>
      setTimeout(() => animateCount(n, +n.getAttribute('data-count'), 800), 250 + i * 120));
  }
});
