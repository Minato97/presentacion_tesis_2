/* Diapositiva 6b — Estado del arte: preguntas de investigación + cadena de búsqueda
   (va ANTES de la slide PRISMA: primero el qué buscar, luego el cómo filtrar) */
DECK.register({
  section: 'Preguntas y búsqueda',
  html: `
  <div class="kicker"><span class="num">04</span> Estado del arte · Preguntas de investigación y cadena de búsqueda</div>
  <h2 class="title">Primero las preguntas… luego la búsqueda</h2>

  <div class="grid cols-2 mt" style="align-items:start;gap:26px">
    <div>
      <ol class="rqlist">
        <li data-anim style="--i:0"><span class="rqn">RQ1</span> <span><b>Agentes + LLM</b> para interpretar datos medioambientales y edafológicos <i>vs.</i> interfaces tradicionales.</span></li>
        <li data-anim style="--i:1"><span class="rqn">RQ2</span> <span>Ventajas del <b>MCP</b> para integrar datos <b>IoT heterogéneos</b>.</span></li>
        <li data-anim style="--i:2"><span class="rqn">RQ3</span> <span><b>Diseño centrado en el usuario</b> (UCD) y experiencia de usuario.</span></li>
        <li data-anim style="--i:3"><span class="rqn">RQ4</span> <span><b>Context-awareness</b> para personalizar servicios.</span></li>
        <li data-anim style="--i:4"><span class="rqn">RQ5</span> <span>Técnicas <b>RAG</b> para precisión en datos científicos.</span></li>
      </ol>
    </div>

    <div class="card brand" data-anim style="--i:5">
      <h3 class="h3ic">${icon('search')} Cadena de búsqueda</h3>
      <p style="margin-bottom:10px">Scopus · IEEE Xplore · Web of Science (mayo 2026). <b>AND</b> entre grupos PICO, <b>OR</b> entre sinónimos.</p>
      <div class="chain">
        <div class="cgroup" data-anim style="--i:6"><span class="ctag">Dominio</span> "environmental monitoring" OR "soil monitoring" OR "IoT" OR "sensor network*"</div>
        <div class="cand">AND</div>
        <div class="cgroup hot" data-anim style="--i:7"><span class="ctag">Tecnología</span> <b>"Model Context Protocol" OR "MCP"</b> OR "AI agent*" OR "LLM" OR "RAG" OR "conversational AI"</div>
        <div class="cand">AND</div>
        <div class="cgroup" data-anim style="--i:8"><span class="ctag">Usuario</span> "user experience" OR "usability" OR "user-centered design" OR "context-aware*" OR "non-expert user*"</div>
      </div>
    </div>
  </div>

  <div class="foot"><span class="badge">MCP</span> término emergente (Anthropic, 2024): central para RQ2 y diferenciador de esta revisión</div>
  `
});
