/* Diapositiva 14 — Cronograma de actividades (genérico, editable) */
DECK.register({
  section: 'Cronograma',
  html: `
  <div class="kicker"><span class="num">09</span> Cronograma de actividades</div>
  <h2 class="title">Plan del 2.º al 4.º semestre</h2>
  <p class="subtitle">Propuesta genérica — se ajustará con tu director.</p>

  <table class="gantt mt" data-anim style="--i:0">
    <thead>
      <tr><th style="text-align:left;width:34%">Actividad</th><th>2.º sem (actual)</th><th>3.er sem</th><th>4.º sem</th></tr>
    </thead>
    <tbody>
      <tr><td class="task">Marco teórico y estado del arte (RSL)</td><td colspan="3"><div class="gcell"><div class="gbar now" data-l="0"  data-w="22"></div></div></td></tr>
      <tr><td class="task">Análisis de requerimientos (ERS)</td>      <td colspan="3"><div class="gcell"><div class="gbar now" data-l="14" data-w="20"></div></div></td></tr>
      <tr><td class="task">Diseño de arquitectura y base de datos</td><td colspan="3"><div class="gcell"><div class="gbar"     data-l="28" data-w="22"></div></div></td></tr>
      <tr><td class="task">Prototipo funcional (API · SPA · MCP)</td>  <td colspan="3"><div class="gcell"><div class="gbar fut" data-l="40" data-w="26"></div></div></td></tr>
      <tr><td class="task">Integración LLM · chat EcoFlow</td>        <td colspan="3"><div class="gcell"><div class="gbar fut" data-l="55" data-w="20"></div></div></td></tr>
      <tr><td class="task">Pruebas de usabilidad (SUS)</td>           <td colspan="3"><div class="gcell"><div class="gbar fut" data-l="70" data-w="18"></div></div></td></tr>
      <tr><td class="task">Documentación y escritura final</td>       <td colspan="3"><div class="gcell"><div class="gbar fut" data-l="78" data-w="22"></div></div></td></tr>
    </tbody>
  </table>

  <div class="row mt-sm" style="gap:18px;font-size:13px;color:var(--text-soft)">
    <span class="status">En curso</span>
    <span class="status pend">Planeado</span>
    <span>+ créditos de movilidad y retribución social del próximo semestre</span>
  </div>
  `,
  onEnter(el) {
    el.querySelectorAll('.gbar').forEach((b, i) => {
      b.style.left = b.getAttribute('data-l') + '%';
      b.style.width = '0';
      setTimeout(() => {
        b.style.transition = 'width 700ms cubic-bezier(.22,.61,.36,1)';
        b.style.width = b.getAttribute('data-w') + '%';
      }, 200 + i * 110);
    });
  }
});
