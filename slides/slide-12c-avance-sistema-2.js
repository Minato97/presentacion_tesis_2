/* Diapositiva 12c — Avance del sistema (2/2): área autenticada
   Dos capturas grandes a proporción nativa 16:9: panel de administrador y
   monitoreo en tiempo real. Reusa las clases .shotgrid2/.shot de la slide 12b. */
DECK.register({
  section: 'Avance del sistema',
  html: `
  <div class="kicker"><span class="num">07</span> Avance del sistema · diseño y desarrollo</div>
  <h2 class="title">El prototipo en uso: administración y monitoreo</h2>
  <p class="subtitle" style="margin-top:6px;max-width:94ch">
    En el <b>área autenticada</b>, el administrador gestiona la red y consulta el
    <b>monitoreo en tiempo real</b> de cada nodo IoT con clasificación por umbrales.
  </p>

  <div class="shotgrid2">
    <figure class="shot" data-anim="pop" style="--i:1">
      <div class="shot-img"><img src="assets/sys-03-admin.png" alt="Panel de administración" />
        <span class="shot-badge">3</span></div>
      <figcaption><b>Panel de administrador</b><span>Resumen de la red: nodos, sensores, áreas y usuarios</span></figcaption>
    </figure>
    <figure class="shot" data-anim="pop" style="--i:2">
      <div class="shot-img"><img src="assets/sys-04-monitoreo.png" alt="Monitoreo en tiempo real" />
        <span class="shot-badge">4</span></div>
      <figcaption><b>Monitoreo en tiempo real</b><span>Lecturas actuales de cada sensor por nodo IoT</span></figcaption>
    </figure>
  </div>

  <div class="row" data-anim style="--i:3;gap:8px;margin-top:clamp(8px,1.4cqh,18px);flex-wrap:wrap">
    <span class="chip solid">Avance en desarrollo</span>
    <span class="chip">7 módulos principales</span>
    <span class="chip">MySQL · Nodos IoT</span>
    <span class="chip">Asistente EcoFlow</span>
  </div>

  <style>
    .shotgrid2{display:grid;grid-template-columns:1fr 1fr;gap:clamp(18px,2.4cqw,42px);
      max-width:1620px;margin:clamp(12px,1.8cqh,26px) auto 0;align-items:start}
    .shot{margin:0;background:#ffffff;border:1px solid rgba(15,23,42,.08);border-radius:18px;
      overflow:hidden;box-shadow:0 14px 34px rgba(15,23,42,.18)}
    .shot-img{position:relative;line-height:0}
    .shot-img img{display:block;width:100%;height:auto}
    .shot-badge{position:absolute;left:14px;top:14px;width:clamp(30px,2.8cqw,42px);
      height:clamp(30px,2.8cqw,42px);display:grid;place-items:center;border-radius:50%;
      background:#10b981;color:#fff;font-weight:800;font-size:clamp(15px,1.7cqw,23px);
      box-shadow:0 4px 14px rgba(16,185,129,.55)}
    .shot figcaption{padding:clamp(10px,1.2cqh,16px) clamp(14px,1.4cqw,22px)}
    .shot figcaption b{display:block;color:#0f172a;font-size:clamp(15px,1.7cqw,24px);font-weight:800}
    .shot figcaption span{display:block;color:#475569;font-size:clamp(12px,1.2cqw,17px);margin-top:3px}
  </style>
  `
});
