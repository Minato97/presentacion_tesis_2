/* Diapositiva 3 — Planteamiento del problema */
DECK.register({
  section: 'Problema',
  html: `
  <div class="kicker"><span class="num">01</span> Planteamiento del problema</div>
  <h2 class="title">Hay datos medioambientales y edafológicos… pero son difíciles de entender</h2>

  <ul class="ticks mt" style="max-width:none">
    <li data-anim style="--i:0">Los <b>nodos IoT</b> generan datos técnicos del aire, el clima y el suelo: valores, unidades, umbrales y series temporales.</li>
    <li data-anim style="--i:1">Interpretarlos exige <b>conocimiento especializado</b>.</li>
    <li data-anim style="--i:2">Resultado: <span class="hl">inaccesibles</span> para usuarios no expertos de la Región Valles.</li>
    <li data-anim style="--i:3">Además, los datos están <b>dispersos</b> y en formatos poco aprovechables.</li>
  </ul>

  <div class="grid cols-2 mt" style="align-items:stretch">
    ${character('leo', 'Oye <b>EcoFlow</b>, ¿y por qué es un problema un dato como <b>“420 ppm de CO₂”</b>?', { side: 'left', i: 4 })}
    ${character('eco', 'Porque ese número no le dice nada a la mayoría de las personas… <b>traducirlo a algo claro es justo lo que resuelvo</b>.', { side: 'right', i: 5 })}
  </div>

  <p class="lead mt" data-anim style="--i:6">
    <strong>Brecha:</strong> falta una capa que traduzca el dato técnico a <span class="hl">lenguaje natural comprensible</span>.
  </p>
  `
});
