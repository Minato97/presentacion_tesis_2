/* Diapositiva 11 — Elementos de software y hardware */
DECK.register({
  section: 'Software / Hardware',
  html: `
  <div class="kicker"><span class="num">06</span> Elementos de software y hardware</div>
  <h2 class="title">El stack y los sensores</h2>

  <div class="grid cols-2 mt">
    <div class="card brand" data-anim style="--i:0">
      <h3 class="h3ic">${icon('server')} Software</h3>
      <table class="mini">
        <tr><th>Capa</th><th>Tecnología</th></tr>
        <tr><td><b>Backend</b></td><td>PHP 8.2 · Laravel 10 · JWT</td></tr>
        <tr><td><b>Datos</b></td><td>MySQL 8</td></tr>
        <tr><td><b>Frontend</b></td><td>Vue 3 · Vite · Pinia · Chart.js</td></tr>
        <tr><td><b>IA</b></td><td>n8n · servidor MCP · LLM</td></tr>
        <tr><td><b>Infra</b></td><td>Docker · Nginx</td></tr>
      </table>
    </div>

    <div class="card teal" data-anim style="--i:1">
      <h3 class="h3ic" style="color:var(--teal)">${icon('sensor')} Hardware — nodos IoT (ESP32)</h3>
      <p style="margin-bottom:10px">12 sensores en 4 dominios. Cada uno con umbrales bajo / medio / alto.</p>
      <div class="chips">
        <span class="chip">${icon('wind')} Aire: DHT11 · BMP280 · PMS5003 · MH-Z16</span>
        <span class="chip">${icon('sun')} Radiación: GUVA · BH1750</span>
        <span class="chip">${icon('rain')} Clima: pluviómetro · anemómetro · veleta</span>
        <span class="chip orange">${icon('sprout')} Suelo (NPK): JXBS-3001 N·P·K</span>
      </div>
    </div>
  </div>

  <div class="row mt" style="justify-content:space-around">
    <div class="stat" data-anim="pop" style="--i:2"><div class="big" data-count="12">0</div><div class="lbl">sensores</div></div>
    <div class="stat" data-anim="pop" style="--i:3"><div class="big" data-count="4">0</div><div class="lbl">dominios</div></div>
    <div class="stat" data-anim="pop" style="--i:4"><div class="big" data-count="5">0</div><div class="lbl">capas</div></div>
    <div class="stat" data-anim="pop" style="--i:5"><div class="big" data-count="4">0</div><div class="lbl">herramientas MCP</div></div>
  </div>
  `,
  onEnter(el) {
    el.querySelectorAll('[data-count]').forEach((n, i) =>
      setTimeout(() => animateCount(n, +n.getAttribute('data-count'), 800), 300 + i * 90));
  }
});
