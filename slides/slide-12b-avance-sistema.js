/* Diapositiva 12b — Avance del sistema (primeras pantallas)
   Va DESPUÉS de Requerimientos. Muestra 4 capturas del prototipo funcional:
   landing, modo invitado, panel admin y monitoreo en tiempo real.
   Capturas reales del sistema (localhost:8000) en assets/sys-0*.png */
DECK.register({
  section: 'Avance del sistema',
  html: `
  <div class="kicker"><span class="num">07</span> Avance del sistema</div>
  <h2 class="title">Primeras pantallas del prototipo funcional</h2>
  <p class="subtitle" style="margin-top:6px;max-width:90ch">
    Como primer avance de la fase de diseño y desarrollo, ya se cuenta con un prototipo
    navegable de <b>SMMyE</b> que integra los <b>tres perfiles de acceso</b>, los
    <b>módulos principales</b> y el asistente <b>EcoFlow</b>. Estas son algunas vistas iniciales.
  </p>

  <div class="shotgrid" style="display:grid;grid-template-columns:1fr 1fr;gap:clamp(12px,1.5cqw,24px);margin-top:clamp(10px,1.6cqh,22px)">

    <figure class="shot" data-anim="pop" style="--i:1">
      <div class="shot-img"><img src="assets/sys-01-landing.png" alt="Landing pública del sistema SMMyE" />
        <span class="shot-badge">1</span></div>
      <figcaption><b>Página de inicio (landing)</b><span>Portal público de acceso e información del sistema</span></figcaption>
    </figure>

    <figure class="shot" data-anim="pop" style="--i:2">
      <div class="shot-img"><img src="assets/sys-02-invitado.png" alt="Modo invitado · monitoreo público" />
        <span class="shot-badge">2</span></div>
      <figcaption><b>Modo invitado</b><span>Consulta de monitoreo público, sin necesidad de cuenta</span></figcaption>
    </figure>

    <figure class="shot" data-anim="pop" style="--i:3">
      <div class="shot-img"><img src="assets/sys-03-admin.png" alt="Panel de administración" />
        <span class="shot-badge">3</span></div>
      <figcaption><b>Panel de administrador</b><span>Resumen de la red: nodos, sensores, áreas y usuarios</span></figcaption>
    </figure>

    <figure class="shot" data-anim="pop" style="--i:4">
      <div class="shot-img"><img src="assets/sys-04-monitoreo.png" alt="Monitoreo en tiempo real" />
        <span class="shot-badge">4</span></div>
      <figcaption><b>Monitoreo en tiempo real</b><span>Lecturas actuales de cada sensor por nodo IoT</span></figcaption>
    </figure>

  </div>

  <div class="row" data-anim style="--i:5;gap:8px;margin-top:clamp(8px,1.4cqh,20px);flex-wrap:wrap">
    <span class="chip solid">Avance en desarrollo</span>
    <span class="chip">Laravel + Vue 3</span>
    <span class="chip">MySQL</span>
    <span class="chip">Nodos IoT</span>
    <span class="chip">EcoFlow · n8n + MCP</span>
    <span class="chip">3 roles de usuario</span>
  </div>

  <style>
    .shot{margin:0;background:#ffffff;border:1px solid rgba(15,23,42,.08);border-radius:16px;
      overflow:hidden;box-shadow:0 12px 30px rgba(15,23,42,.16)}
    .shot-img{position:relative;line-height:0}
    .shot-img img{display:block;width:100%;height:clamp(150px,20cqh,236px);
      object-fit:cover;object-position:top center}
    .shot-badge{position:absolute;left:12px;top:12px;width:clamp(26px,2.6cqw,34px);
      height:clamp(26px,2.6cqw,34px);display:grid;place-items:center;border-radius:50%;
      background:#10b981;color:#fff;font-weight:800;font-size:clamp(13px,1.4cqw,18px);
      box-shadow:0 4px 12px rgba(16,185,129,.5)}
    .shot figcaption{padding:clamp(8px,1cqh,13px) clamp(13px,1.3cqw,19px)}
    .shot figcaption b{display:block;color:#0f172a;font-size:clamp(14px,1.5cqw,20px);font-weight:800}
    .shot figcaption span{display:block;color:#475569;font-size:clamp(11px,1.15cqw,15px);margin-top:2px}
  </style>
  `
});
