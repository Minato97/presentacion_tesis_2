/* Diapositiva 14 — Cronograma de actividades (real, basado en el protocolo).
   Simplificado: sin columnas de responsable/prioridad. Sin créditos de movilidad. */
DECK.register({
  section: 'Cronograma',
  html: `
  <div class="kicker"><span class="num">09</span> Cronograma de actividades</div>
  <h2 class="title">Plan de trabajo · cuatro semestres</h2>
  <p class="subtitle" style="margin-top:4px">De septiembre 2025 a septiembre 2027.</p>

  <table class="gantt mt" data-anim style="--i:0">
    <thead>
      <tr>
        <th style="text-align:left;width:30%">Actividad</th>
        <th>1.º sem<br><small>Sep 25 – Feb 26</small></th>
        <th>2.º sem (actual)<br><small>Mar – Ago 26</small></th>
        <th>3.º sem<br><small>Sep 26 – Feb 27</small></th>
        <th>4.º sem<br><small>Mar – Sep 27</small></th>
      </tr>
    </thead>
    <tbody>
      <tr><td class="task">Protocolo, anteproyecto y RSL</td>            <td colspan="4"><div class="gcell"><div class="gbar"     data-l="0"    data-w="20.8"></div></div></td></tr>
      <tr><td class="task">1.ª presentación de avances</td>             <td colspan="4"><div class="gcell"><div class="gbar"     data-l="12.5" data-w="4.2"></div></div></td></tr>
      <tr><td class="task">Redacción de tesis · parte 1</td>            <td colspan="4"><div class="gcell"><div class="gbar"     data-l="20.8" data-w="4.2"></div></div></td></tr>
      <tr><td class="task">Capacitación MCP y elicitación de req.</td>  <td colspan="4"><div class="gcell"><div class="gbar"     data-l="25"   data-w="8.3"></div></div></td></tr>
      <tr><td class="task">Análisis y diseño del software</td>         <td colspan="4"><div class="gcell"><div class="gbar now" data-l="33.3" data-w="8.3"></div></div></td></tr>
      <tr><td class="task">2.ª presentación de avances</td>            <td colspan="4"><div class="gcell"><div class="gbar fut" data-l="41.7" data-w="4.2"></div></div></td></tr>
      <tr><td class="task">Desarrollo de software (back y front)</td>  <td colspan="4"><div class="gcell"><div class="gbar fut" data-l="41.7" data-w="8.3"></div></div></td></tr>
      <tr><td class="task">Servidor MCP y redacción · parte 2</td>     <td colspan="4"><div class="gcell"><div class="gbar fut" data-l="50"   data-w="12.5"></div></div></td></tr>
      <tr><td class="task">3.ª presentación y despliegue</td>          <td colspan="4"><div class="gcell"><div class="gbar fut" data-l="62.5" data-w="12.5"></div></div></td></tr>
      <tr><td class="task">Pruebas y validaciones</td>                 <td colspan="4"><div class="gcell"><div class="gbar fut" data-l="75"   data-w="8.3"></div></div></td></tr>
      <tr><td class="task">Revisión final y 4.ª presentación</td>      <td colspan="4"><div class="gcell"><div class="gbar fut" data-l="83.3" data-w="12.5"></div></div></td></tr>
      <tr><td class="task">Corrección, defensa y titulación</td>       <td colspan="4"><div class="gcell"><div class="gbar fut" data-l="91.7" data-w="8.3"></div></div></td></tr>
    </tbody>
  </table>

  <div class="row mt-sm" style="gap:22px;font-size:clamp(12px,1.05cqw,15px);color:var(--text-soft);align-items:center">
    <span class="glegend"><i class="sw done"></i> Completado</span>
    <span class="glegend"><i class="sw cur"></i> En curso (este semestre)</span>
    <span class="glegend"><i class="sw fut"></i> Planeado</span>
    <span style="margin-left:auto">+ retribución social cada semestre</span>
  </div>
  `,
  onEnter(el) {
    el.querySelectorAll('.gbar').forEach((b, i) => {
      b.style.left = b.getAttribute('data-l') + '%';
      b.style.width = '0';
      setTimeout(() => {
        b.style.transition = 'width 700ms cubic-bezier(.22,.61,.36,1)';
        b.style.width = b.getAttribute('data-w') + '%';
      }, 200 + i * 90);
    });
  }
});
