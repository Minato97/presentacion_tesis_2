/* Diapositiva 5 — Objetivos, alcance y limitaciones */
DECK.register({
  section: 'Objetivos',
  html: `
  <div class="kicker"><span class="num">02</span> Objetivos · alcance · límites</div>

  <div class="card accent" data-anim style="--i:0">
    <h3 class="h3ic">${icon('target')} Objetivo general</h3>
    <p style="font-size:clamp(14px,1.35cqw,18px);color:var(--text)">
      Desarrollar y evaluar una <b>plataforma web</b> que integra un <b>Agente Inteligente</b> (MCP + LLM)
      para facilitar el acceso, gestión y comprensión de los datos de los nodos IoT del SMMyE
      a usuarios con distintos niveles de conocimiento.
    </p>
  </div>

  <div class="grid cols-3 mt">
    <div class="card brand" data-anim="pop" style="--i:1"><span class="iconbox">${icon('clipboard')}</span><h3>OE1 · Requerimientos</h3><p>ERS funcional y no funcional.</p></div>
    <div class="card brand" data-anim="pop" style="--i:2"><span class="iconbox">${icon('chip')}</span><h3>OE2 · Arquitectura</h3><p>Componentes, datos e interfaces.</p></div>
    <div class="card brand" data-anim="pop" style="--i:3"><span class="iconbox">${icon('screen')}</span><h3>OE3 · Plataforma + API</h3><p>Ingesta, visualización y administración.</p></div>
    <div class="card brand" data-anim="pop" style="--i:4"><span class="iconbox">${icon('robot')}</span><h3>OE4 · MCP + chat</h3><p>Agente conversacional (≥85% consultas).</p></div>
    <div class="card brand" data-anim="pop" style="--i:5"><span class="iconbox">${icon('check')}</span><h3>OE5 · Evaluación</h3><p>SUS ≥ 70 · 80% interpreta bien.</p></div>
    <div class="card slate" data-anim="pop" style="--i:6">
      <span class="iconbox">${icon('ruler')}</span><h3>Alcance / límites</h3>
      <p><b>Sí:</b> recibir, visualizar e interpretar.<br><b>No:</b> controlar hardware, predecir ni notificar.</p>
    </div>
  </div>
  `
});
