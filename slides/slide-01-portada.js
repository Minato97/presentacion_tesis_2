/* Diapositiva 1 — Portada */
DECK.register({
  section: 'Portada',
  bg: true,
  html: `
  <div class="bgimg gate"></div>
  <div class="veil"></div>

  <!-- Escudos en esquinas superiores opuestas -->
  <img class="udg-escudo" src="assets/LogoUdG.png" alt="Universidad de Guadalajara"
    style="position:absolute;top:clamp(20px,3cqh,46px);left:clamp(24px,3cqw,60px);height:clamp(112px,15cqh,200px);z-index:5" />
  <span class="logo-pill" title="Secretaría de Ciencia, Humanidades, Tecnología e Innovación"
    style="position:absolute;top:clamp(20px,3cqh,46px);right:clamp(24px,3cqw,60px);padding:10px 22px;z-index:5">
    <img src="assets/secihti.svg" alt="SECIHTI" style="height:clamp(64px,8cqh,112px)" />
  </span>

  <div class="center" style="gap:0">
    <p class="subtitle center" data-anim style="--i:1;color:#e7ece3;margin-top:12px">
      Universidad de Guadalajara · Centro Universitario de los Valles
    </p>

    <h1 class="title center" data-anim="zoom" style="--i:2;color:#fff;max-width:30ch;margin:8px auto 0;font-size:clamp(24px,3.3cqw,44px)">
      Sistema de Monitoreo Medioambiental y Edafológico con Integración de un Agente Inteligente para la Interpretación de Datos
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
