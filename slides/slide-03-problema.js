/* Diapositiva 3 — Planteamiento del problema */
DECK.register({
  section: 'Problema',
  html: `
  <div class="kicker"><span class="num">01</span> Planteamiento del problema</div>
  <h2 class="title">Hay datos ambientales… pero son difíciles de entender</h2>

  <div class="grid cols-2 mt" style="align-items:center">
    <ul class="ticks" style="max-width:none">
      <li data-anim style="--i:0">Los <b>nodos IoT</b> generan datos técnicos: valores, unidades, umbrales y series temporales.</li>
      <li data-anim style="--i:1">Interpretarlos exige <b>conocimiento especializado</b>.</li>
      <li data-anim style="--i:2">Resultado: <span class="hl">inaccesibles</span> para usuarios no expertos de la Región Valles.</li>
      <li data-anim style="--i:3">Además, los datos están <b>dispersos</b> y en formatos poco aprovechables.</li>
    </ul>

    <div style="display:flex;flex-direction:column;gap:14px">
      ${character('leo', 'Oye <b>EcoFlow</b>, ¿y por qué es un problema un dato como <b>“420 ppm de CO₂”</b>?', { side: 'right', i: 2 })}
      ${character('eco', 'Porque ese número no le dice nada a la mayoría de las personas… <b>traducirlo a algo claro es justo lo que resuelvo</b>.', { side: 'left', i: 3 })}
    </div>
  </div>

  <p class="lead mt" data-anim style="--i:4">
    <strong>Brecha:</strong> falta una capa que traduzca el dato técnico a <span class="hl">lenguaje natural comprensible</span>.
  </p>
  `
});
