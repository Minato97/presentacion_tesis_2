/* Diapositiva 1 — Portada */
DECK.register({
  section: 'Portada',
  bg: true,
  html: `
  <div class="bgimg gate"></div>
  <div class="veil"></div>

  <div class="center" style="gap:0">
    <div class="row center" data-anim="zoom" style="--i:0;gap:40px;align-items:center">
      <img class="udg-escudo" style="height:clamp(104px,14cqh,180px)" src="assets/LogoUdG.png" alt="Universidad de Guadalajara" />
      <span class="logo-pill" style="padding:12px 26px" title="Secretaría de Ciencia, Humanidades, Tecnología e Innovación">
        <img src="assets/secihti.svg" alt="SECIHTI" style="height:clamp(68px,9cqh,116px)" />
      </span>
    </div>

    <p class="subtitle center" data-anim style="--i:1;color:#e7ece3;margin-top:12px">
      Universidad de Guadalajara · Centro Universitario de los Valles
    </p>

    <h1 class="title center" data-anim="zoom" style="--i:2;color:#fff;max-width:30ch;margin:8px auto 0;font-size:clamp(24px,3.3cqw,44px)">
      Sistema de Monitoreo Medioambiental y Edafológico con integración de un agente inteligente para la interpretación de datos
    </h1>

    <p class="subtitle center" data-anim style="--i:3;color:#fff;margin-top:12px">
      Maestría en Ingeniería de Software · <span style="color:var(--sage);font-weight:700">Avances de Tesis — 2.º semestre</span>
    </p>

    <div class="row center mt" data-anim style="--i:4;margin-top:16px">
      <span class="chip solid">Presenta: Lic. Ignacio Andrade Salazar</span>
      <span class="chip" style="background:rgba(255,255,255,.16);color:#fff;border-color:rgba(255,255,255,.3)">Director: Dr. Rodolfo Omar Domínguez García</span>
      <span class="chip" style="background:rgba(255,255,255,.16);color:#fff;border-color:rgba(255,255,255,.3)">Codirector: Dr. Salvador Cervantes Álvarez</span>
    </div>

    <div class="row center" style="gap:18px;align-items:flex-end;margin-top:16px">
      ${character('leo', 'Oye <b>EcoFlow</b>, ¿qué vamos a ver hoy en estos avances?', { side: 'left', i: 5 })}
      ${character('eco', '¡El problema, los objetivos, el estado del arte y la propuesta del sistema! Te explico cada parte. 🌎', { side: 'right', i: 6 })}
    </div>
  </div>
  `
});
