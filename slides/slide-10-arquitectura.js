/* Diapositiva 10 — Avances de la propuesta: arquitectura */
DECK.register({
  section: 'Arquitectura',
  html: `
  <div class="kicker"><span class="num">06</span> Avances de la propuesta · Arquitectura</div>
  <h2 class="title">5 capas desacopladas</h2>

  <div class="layers mt" style="max-width:min(900px,84cqw)">
    <div class="layer l1" data-anim style="--i:0"><span class="iconbox">${icon('sensor')}</span><div><h4>Adquisición — Hardware IoT</h4><p>Nodos (Raspberry Pi 5) con sensores de aire, clima y suelo · identificados por MAC.</p></div></div>
    <div class="flowarrow">▼ &nbsp; POST /api/guardarMuestras (JWT)</div>
    <div class="layer l2" data-anim style="--i:1"><span class="iconbox">${icon('gear')}</span><div><h4>API / Lógica de negocio — Laravel 10</h4><p>Autenticación JWT · ingesta · CRUD · estadísticas y comparativas.</p></div></div>
    <div class="flowarrow">▼</div>
    <div class="layer l3" data-anim style="--i:2"><span class="iconbox">${icon('database')}</span><div><h4>Datos — MySQL 8</h4><p>Áreas, nodos IoT, sensores, armados, muestras, usuarios y roles.</p></div></div>
    <div class="flowarrow">▲ REST /api (Axios + JWT)</div>
    <div class="layer l4" data-anim style="--i:3"><span class="iconbox">${icon('screen')}</span><div><h4>Presentación — SPA Vue 3</h4><p>Monitoreo en tiempo real · estadísticas · administración · reportes PDF.</p></div></div>
    <div class="flowarrow">◀ ▶ widget de chat</div>
    <div class="layer l5" data-anim style="--i:4"><span class="iconbox">${icon('robot')}</span><div><h4>Inteligencia conversacional — EcoFlow</h4><p>n8n orquesta · servidor <b>MCP</b> (solo lectura) · LLM en la nube.</p></div></div>
  </div>

  <div class="char-float">
    ${character('eco', '¡Yo vivo en la capa 5! Traduzco tus preguntas y consulto los datos por <b>MCP</b>.', { side: 'right', i: 5 })}
  </div>
  `
});
