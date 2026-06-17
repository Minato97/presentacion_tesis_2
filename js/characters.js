/* =============================================================
   characters.js — Mascotas con diálogos (imágenes del sistema)
   · Leo     → león de la UDG (guía de la presentación)
   · EcoFlow → asistente ambiental del SMMyE
   Uso:  ${character('eco', 'Hola, soy EcoFlow', {side:'right', i:2})}
   Pose: ${character('eco', '...', {pose:'idle'})}  // eco: wave|idle|data
         ${character('leo', '...', {pose:'lupa'})}  // leo: saludo|lupa
   Las imágenes viven en assets/ (copiadas del sistema SMMyE).
   ============================================================= */
(function () {

  /* Mapa de poses → archivo de imagen */
  const IMG = {
    eco: {
      wave: 'assets/ecoflow_wave.png',   // saludando (por defecto)
      idle: 'assets/ecoflow_idle.png',   // en reposo
      data: 'assets/ecoflow_data.png'    // mostrando datos / pensando
    },
    leo: {
      saludo: 'assets/leo_saludo.webp',  // saludando (por defecto)
      lupa:   'assets/lupa.webp'         // curioso / investigando
    }
  };

  /* ---------- Render: figura (imagen) + globo de diálogo ---------- */
  window.character = function (who, text, opts) {
    opts = opts || {};
    const side = opts.side || 'left';
    const isLeo = who === 'leo';
    const name = isLeo ? 'Leo' : 'EcoFlow';
    const tone = isLeo ? 'leo' : 'eco';
    const set = isLeo ? IMG.leo : IMG.eco;
    const pose = opts.pose && set[opts.pose] ? opts.pose : (isLeo ? 'saludo' : 'wave');
    const src = set[pose];
    return `
    <div class="charwrap ${side} ${tone}" data-anim="pop" style="--i:${opts.i || 0}">
      <div class="charfig"><img class="charimg" src="${src}" alt="${name}" /></div>
      <div class="bubble"><span class="bname">${name}</span>${text}</div>
    </div>`;
  };
})();
