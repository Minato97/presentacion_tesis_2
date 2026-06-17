/* Diapositiva 15 — Cierre */
DECK.register({
  section: 'Cierre',
  bg: true,
  html: `
  <div class="bgimg campus"></div>
  <div class="veil"></div>

  <div class="center">
    <img class="udg-escudo" data-anim="zoom" style="--i:0" src="assets/LogoUdG.png" alt="Universidad de Guadalajara" />

    <h1 class="title center" data-anim style="--i:1;color:#fff;max-width:22ch;margin-top:14px">
      De dato técnico a <span style="color:var(--sage)">lenguaje que todos entienden</span>
    </h1>
    <p class="subtitle center" data-anim style="--i:2;color:#fff">
      Una plataforma web + agente inteligente para la información ambiental de la Región Valles.
    </p>

    <div class="row center mt" data-anim style="--i:3">
      <span class="chip solid">Avances 2.º semestre completos</span>
      <span class="chip" style="background:rgba(255,255,255,.16);color:#fff;border-color:rgba(255,255,255,.3)">Siguiente: arquitectura y prototipo funcional</span>
    </div>

    <div class="row center mt" style="gap:30px;align-items:flex-end">
      ${character('leo', '¡Gracias por su atención!', { side: 'left', i: 4 })}
      ${character('eco', '¿Tienen preguntas? Con gusto las respondo.', { side: 'right', i: 5 })}
    </div>

    <p class="fmeta" data-anim style="--i:6;color:#dfe6da;margin-top:18px">Lic. Ignacio Andrade Salazar · Maestría en Ingeniería de Software · CUValles, UDG</p>
  </div>
  `
});
