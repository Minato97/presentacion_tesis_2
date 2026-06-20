/* Diapositiva 2 — Agenda (puntos de la guía) */
DECK.register({
  section: 'Agenda',
  html: `
  <div class="kicker"><span class="num">00</span> Guía de avances · 2.º semestre</div>
  <h2 class="title">Lo que voy a presentar hoy</h2>

  <div class="grid cols-3 mt agenda">
    <div class="card fancy brand" data-anim="pop" style="--i:0"><span class="iconbox">${icon('target')}</span><h3>1 · Problema y justificación</h3></div>
    <div class="card fancy brand" data-anim="pop" style="--i:1"><span class="iconbox">${icon('compass')}</span><h3>2 · Objetivos y alcance</h3></div>
    <div class="card fancy teal" data-anim="pop" style="--i:2"><span class="iconbox">${icon('book')}</span><h3>3 · Marco teórico</h3></div>
    <div class="card fancy teal" data-anim="pop" style="--i:3"><span class="iconbox">${icon('microscope')}</span><h3>4 · Estado del arte (RSL)</h3></div>
    <div class="card fancy teal" data-anim="pop" style="--i:4"><span class="iconbox">${icon('gear')}</span><h3>5 · Metodología</h3></div>
    <div class="card fancy accent" data-anim="pop" style="--i:5"><span class="iconbox">${icon('building')}</span><h3>6 · Avances de la propuesta</h3></div>
    <div class="card fancy accent star" data-anim="pop" style="--i:6"><span class="iconbox">${icon('check')}</span><h3>7 · Atención a observaciones</h3></div>
    <div class="card fancy slate" data-anim="pop" style="--i:7"><span class="iconbox">${icon('handshake')}</span><h3>8 · Retribución social</h3></div>
    <div class="card fancy slate" data-anim="pop" style="--i:8"><span class="iconbox">${icon('calendar')}</span><h3>9 · Cronograma</h3></div>
  </div>

  <div class="mt">
    ${character('leo', 'Soy <b>Leo</b>, el león de la UDG. Te guío por cada punto en ~10 minutos.', { side: 'right', i: 9 })}
  </div>
  `
});
