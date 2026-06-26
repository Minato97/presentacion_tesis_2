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

  <p class="subtitle mt" data-anim style="--i:1;margin-top:14px">Objetivos específicos:</p>

  <div class="grid cols-3" style="margin-top:10px">
    <div class="card fancy brand" data-anim="pop" style="--i:1"><span class="iconbox">${icon('clipboard')}</span><h3>OE1 · Requerimientos</h3><p>Elaborar la ERS funcional y no funcional.</p></div>
    <div class="card fancy brand" data-anim="pop" style="--i:2"><span class="iconbox">${icon('chip')}</span><h3>OE2 · Arquitectura</h3><p>Diseñar componentes, datos e interfaces.</p></div>
    <div class="card fancy brand" data-anim="pop" style="--i:3"><span class="iconbox">${icon('screen')}</span><h3>OE3 · Plataforma web + API</h3><p>Construir la API que <b>recibe</b> los datos de los nodos, los <b>visualiza</b> (monitoreo y estadísticas) y permite <b>administrar</b> el catálogo.</p></div>
    <div class="card fancy brand" data-anim="pop" style="--i:4"><span class="iconbox">${icon('robot')}</span><h3>OE4 · Agente MCP + chat</h3><p>Integrar el asistente conversacional (≥85% de consultas).</p></div>
    <div class="card fancy brand" data-anim="pop" style="--i:5"><span class="iconbox">${icon('check')}</span><h3>OE5 · Evaluación</h3><p>Validar con usuarios (SUS ≥ 70 · 80% interpreta bien).</p></div>
  </div>

  <div class="card slate mt" data-anim style="--i:6;display:flex;align-items:center;gap:18px;padding:14px 20px">
    <span class="iconbox" style="flex:none">${icon('ruler')}</span>
    <div>
      <h3 style="margin:0">Alcance y limitaciones <span style="font-weight:600;color:var(--text-soft);font-size:.72em">— delimitan el proyecto; no son objetivos</span></h3>
      <p style="margin-top:4px"><b>Sí:</b> recibir, visualizar e interpretar datos. &nbsp;·&nbsp; <b>No:</b> controlar hardware, predecir ni enviar notificaciones.</p>
    </div>
  </div>
  `
});
