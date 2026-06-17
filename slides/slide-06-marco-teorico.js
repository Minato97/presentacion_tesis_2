/* Diapositiva 6 — Marco teórico */
DECK.register({
  section: 'Marco teórico',
  html: `
  <div class="kicker"><span class="num">03</span> Marco teórico</div>
  <h2 class="title">Los conceptos que sostienen la propuesta</h2>

  <div class="grid cols-3 mt">
    <div class="card teal" data-anim="pop" style="--i:0"><span class="iconbox">${icon('sensor')}</span><h3>IoT y redes de sensores</h3><p>Nodos que miden aire, clima y suelo y publican lecturas.</p></div>
    <div class="card teal" data-anim="pop" style="--i:1"><span class="iconbox">${icon('brain')}</span><h3>LLM</h3><p>Modelos de lenguaje que interpretan y responden.</p></div>
    <div class="card teal" data-anim="pop" style="--i:2"><span class="iconbox">${icon('robot')}</span><h3>Agentes inteligentes</h3><p>Deciden qué herramienta usar para resolver la consulta.</p></div>
    <div class="card accent" data-anim="pop" style="--i:3"><span class="iconbox">${icon('chip')}</span><h3>MCP <span style="font-size:.7em;color:var(--text-soft)">(Anthropic, 2024)</span></h3><p>Protocolo que estandariza el acceso del LLM a los datos.</p></div>
    <div class="card teal" data-anim="pop" style="--i:4"><span class="iconbox">${icon('search')}</span><h3>RAG</h3><p>Respuestas basadas en datos reales recuperados.</p></div>
    <div class="card brand" data-anim="pop" style="--i:5"><span class="iconbox">${icon('user')}</span><h3>DCU · ISO 9241-210</h3><p>Diseño centrado en el usuario, interfaces accesibles.</p></div>
  </div>

  <div class="row mt" style="align-items:center;gap:20px">
    <span class="subtitle" style="margin:0">Base tecnológica:</span>
    <div class="chips">
      <span class="chip">Laravel</span><span class="chip">Vue.js</span>
      <span class="chip">MySQL</span><span class="chip">n8n</span><span class="chip">Docker</span>
    </div>
  </div>
  `
});
