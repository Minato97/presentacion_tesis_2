/* Diapositiva — Atención a las observaciones del PROTOCOLO (revisión del documento, 1.er semestre).
   Va junto con la slide de observaciones del seminario, tras los avances. Sin nombrar al revisor. */
DECK.register({
  section: 'Observaciones del protocolo',
  html: `
  <div class="kicker"><span class="num">★</span> Seguimiento · revisión del protocolo</div>
  <h2 class="title">Atención a las observaciones del protocolo</h2>
  <p class="subtitle" style="margin-top:8px">
    Correcciones al documento de protocolo, incorporadas en el manuscrito de este semestre.
  </p>

  <table class="mini obs mt" data-anim style="--i:0">
    <thead>
      <tr><th style="width:42%">Observación</th><th>Cómo se atendió</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>El título era demasiado extenso.</td>
        <td><span class="ok">✓</span> Se <b>reformuló el título</b> para precisar el alcance: monitoreo medioambiental y edafológico + agente inteligente para la interpretación de datos.</td>
      </tr>
      <tr>
        <td>Faltaba contextualizar qué sistemas similares existen y el punto de partida del proyecto.</td>
        <td><span class="ok">✓</span> Se amplió la justificación: se exponen <b>sistemas existentes</b> y su oferta, y se aclara que el proyecto parte de un <b>nodo prototipo en CUValles</b> para escalar a la Región Valles (que carece de estaciones meteorológicas y datos de suelo).</td>
      </tr>
      <tr>
        <td>No se definían los beneficiarios ni con ejemplos del lenguaje técnico.</td>
        <td><span class="ok">✓</span> Se especificaron los <b>usuarios objetivo</b> (agricultores, ganaderos, biólogos, ecologistas, sector gobierno, protección civil) y se añadieron <b>ejemplos</b> del dato técnico y su interpretación en lenguaje natural.</td>
      </tr>
      <tr>
        <td>Redacción contradictoria sobre el público (¿sin o con formación técnica?).</td>
        <td><span class="ok">✓</span> Se corrigió: el sistema apoya a usuarios <b>sin formación</b> técnica y <b>también</b> a especialistas.</td>
      </tr>
      <tr>
        <td>En la RSL convenía apegarse mejor al estándar PRISMA.</td>
        <td><span class="ok">✓</span> Se siguió el <b>checklist PRISMA 2020</b> y se integraron las <b>referencias metodológicas</b> recomendadas.</td>
      </tr>
    </tbody>
  </table>
  `
});
