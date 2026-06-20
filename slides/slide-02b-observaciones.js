/* Diapositiva 2b — Atención a observaciones del seminario anterior (rubro 6) */
DECK.register({
  section: 'Observaciones atendidas',
  html: `
  <div class="kicker"><span class="num">★</span> Seguimiento · seminario 1.<sup>er</sup> semestre</div>
  <h2 class="title">Atención a las observaciones del seminario anterior</h2>
  <p class="subtitle" style="margin-top:8px">
    Cada observación recibida en el seminario anterior fue atendida en el manuscrito de este semestre.
  </p>

  <table class="mini obs mt" data-anim style="--i:0">
    <thead>
      <tr><th style="width:42%">Observación</th><th>Cómo se atendió</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>Frases muy largas y redacción que mezcla lo hecho con lo planeado.</td>
        <td><span class="ok">✓</span> Frases divididas a <b>máx. 2–3 renglones</b> y descripción reescrita <b>en futuro</b>, distinguiendo lo realizado de lo que se abordará.</td>
      </tr>
      <tr>
        <td>Objetivo general extenso; objetivos específicos parecían requerimientos.</td>
        <td><span class="ok">✓</span> Objetivo general <b>más compacto</b> y objetivos específicos reformulados con criterios <b>SMART</b>, separados de los requerimientos.</td>
      </tr>
      <tr>
        <td>Abreviaturas repetidas (LLM, RAG…) y traducción de RAG inconsistente.</td>
        <td><span class="ok">✓</span> Abreviaturas definidas <b>solo en su primera aparición</b> y traducción de RAG <b>homogeneizada</b>.</td>
      </tr>
      <tr>
        <td>En PRISMA, la cadena de búsqueda se generaba antes que las preguntas.</td>
        <td><span class="ok">✓</span> Las <b>preguntas de investigación</b> se definen <b>antes</b> de construir la cadena de búsqueda.</td>
      </tr>
      <tr>
        <td>Sobra la definición en alcances/limitaciones; y columnas repetidas en el cronograma.</td>
        <td><span class="ok">✓</span> Se <b>quitaron las definiciones</b> de alcances y limitaciones y se <b>simplificó el cronograma</b> (sin columnas de responsable/prioridad).</td>
      </tr>
    </tbody>
  </table>
  `
});
