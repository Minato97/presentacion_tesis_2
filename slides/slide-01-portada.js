/* Diapositiva 1 — Portada */
DECK.register({
  section: 'Portada',
  bg: true,
  html: `
  <div class="bgimg gate"></div>
  <div class="veil"></div>

  <div class="center" style="gap:0">
    <img class="udg-escudo" data-anim="zoom" style="--i:0" src="assets/LogoUdG.png" alt="Universidad de Guadalajara" />

    <p class="subtitle center" data-anim style="--i:1;color:#e7ece3;margin-top:14px">
      Universidad de Guadalajara · Centro Universitario de los Valles
    </p>

    <h1 class="title center" data-anim="zoom" style="--i:2;color:#fff;max-width:26ch;margin:10px auto 0">
      Sistema de Monitoreo Medioambiental y Edafológico con un Agente Inteligente
    </h1>

    <p class="subtitle center" data-anim style="--i:3;color:#fff;margin-top:18px">
      Maestría en Ingeniería de Software · <span style="color:var(--sage);font-weight:700">Avances de Tesis — 2.º semestre</span>
    </p>

    <div class="row center mt" data-anim style="--i:4">
      <span class="chip solid">Presenta: Lic. Ignacio Andrade Salazar</span>
      <span class="chip" style="background:rgba(255,255,255,.16);color:#fff;border-color:rgba(255,255,255,.3)">Director: Dr. Rodolfo Omar Domínguez García</span>
    </div>

    <div class="mt" style="margin-top:26px">
      ${character('eco', 'Hola, soy <b>EcoFlow</b>. Te acompaño a presentar los avances de esta tesis.', { side: 'left', i: 5 })}
    </div>
  </div>
  `
});
