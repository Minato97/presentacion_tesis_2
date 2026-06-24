/* Genera un respaldo en PowerPoint de la presentación HTML de avances. */
const pptxgen = require("pptxgenjs");
const path = require("path");

const ASSETS = path.resolve(__dirname, "..", "assets");
const A = (f) => path.join(ASSETS, f);

// ---------- Paleta (de theme.css) ----------
const C = {
  sage: "AAC27F", sageDk: "7D9A4E", sageDkr: "5A7233",
  slate: "3F4F59", slate2: "5D7180", orange: "F26B1D", accent: "E85D0C",
  teal: "1FAFBF", green: "2D8C31", yellow: "F2C037", red: "DC4A3F",
  bg: "EEF2E6", bg2: "F6F8F0", surface: "FFFFFF",
  text: "2A323A", textSoft: "5D7180", heading: "3F4F59", brand: "5A7233",
  cardLine: "DDE3D0", chip: "EAF0DD",
};
const FONT = "Segoe UI";

const pptx = new pptxgen();
pptx.defineLayout({ name: "W", width: 13.333, height: 7.5 });
pptx.layout = "W";
pptx.theme = { headFontFace: FONT, bodyFontFace: FONT };
const W = 13.333, H = 7.5, MX = 0.55;

// Variante de color de tarjeta -> color de acento
const VAR = {
  brand: C.sageDkr, teal: C.teal, accent: C.accent, slate: C.slate, green: C.green,
};

// ---------- helpers de texto enriquecido ----------
function R(str) {
  // **negrita**  ·  __resaltado__
  const out = [];
  const re = /(\*\*[^*]+\*\*|__[^_]+__)/g;
  let last = 0, m;
  while ((m = re.exec(str))) {
    if (m.index > last) out.push({ text: str.slice(last, m.index) });
    const t = m[0];
    if (t.startsWith("**")) out.push({ text: t.slice(2, -2), options: { bold: true } });
    else out.push({ text: t.slice(2, -2), options: { bold: true, color: C.accent } });
    last = re.lastIndex;
  }
  if (last < str.length) out.push({ text: str.slice(last) });
  return out.length ? out : [{ text: str }];
}

function bgSlide(bgImg) {
  const s = pptx.addSlide();
  s.background = { color: C.bg };
  if (bgImg) {
    s.addImage({ path: bgImg, x: 0, y: 0, w: W, h: H, sizing: { type: "cover", w: W, h: H } });
    s.addShape("rect", { x: 0, y: 0, w: W, h: H, fill: { color: "1E2A1E", transparency: 38 } });
  }
  return s;
}
function contentSlide() {
  const s = pptx.addSlide();
  s.background = { color: C.bg };
  // sutil bloque de superficie superior izquierda (radial del original) — omitido por simplicidad
  return s;
}

function kicker(s, num, text) {
  s.addShape("roundRect", { x: MX, y: 0.42, w: 0.46, h: 0.36, rectRadius: 0.06, fill: { color: C.sageDkr } });
  s.addText(String(num), { x: MX, y: 0.42, w: 0.46, h: 0.36, align: "center", valign: "middle", color: "FFFFFF", bold: true, fontSize: 13, fontFace: FONT });
  s.addText(text.toUpperCase(), { x: MX + 0.58, y: 0.42, w: 11.6, h: 0.36, valign: "middle", color: C.textSoft, bold: true, fontSize: 11.5, charSpacing: 1, fontFace: FONT });
}
function title(s, text, opts = {}) {
  s.addText(R(text), { x: MX, y: opts.y ?? 0.9, w: opts.w ?? 12.2, h: opts.h ?? 0.85, color: C.heading, bold: true, fontSize: opts.size ?? 26, fontFace: FONT, valign: "top", lineSpacingMultiple: 1.0 });
}
function subtitle(s, text, y) {
  s.addText(R(text), { x: MX, y, w: 12.2, h: 0.4, color: C.textSoft, fontSize: 13, italic: false, fontFace: FONT });
}
function foot(s, badge, text) {
  const y = 6.92;
  s.addShape("roundRect", { x: MX, y, w: 1.5, h: 0.4, rectRadius: 0.2, fill: { color: C.sageDkr } });
  s.addText(badge, { x: MX, y, w: 1.5, h: 0.4, align: "center", valign: "middle", color: "FFFFFF", bold: true, fontSize: 11, fontFace: FONT });
  s.addText(R(text), { x: MX + 1.65, y, w: 10.6, h: 0.4, valign: "middle", color: C.textSoft, fontSize: 12, fontFace: FONT });
}

// Tarjeta con caja de ícono (emoji), título y cuerpo
function card(s, o) {
  const accent = o.accent || C.sageDkr;
  s.addShape("roundRect", { x: o.x, y: o.y, w: o.w, h: o.h, rectRadius: 0.09, fill: { color: o.fill || C.surface }, line: { color: C.cardLine, width: 1 }, shadow: { type: "outer", color: "B9C3A8", blur: 6, offset: 2, angle: 90, opacity: 0.35 } });
  const ib = o.ib ?? 0.5;
  if (o.icon !== null) {
    s.addShape("roundRect", { x: o.x + 0.18, y: o.y + 0.18, w: ib, h: ib, rectRadius: 0.08, fill: { color: accent } });
    if (o.icon) s.addText(o.icon, { x: o.x + 0.18, y: o.y + 0.18, w: ib, h: ib, align: "center", valign: "middle", fontSize: ib > 0.55 ? 20 : 16, color: "FFFFFF", fontFace: FONT });
  }
  const hx = o.icon === null ? o.x + 0.22 : o.x + 0.18 + ib + 0.14;
  if (o.title) s.addText(R(o.title), { x: hx, y: o.y + 0.16, w: o.x + o.w - hx - 0.15, h: ib + 0.04, valign: "middle", color: o.headColor || C.heading, bold: true, fontSize: o.titleSize || 13, fontFace: FONT });
  if (o.body) s.addText(typeof o.body === "string" ? R(o.body) : o.body, { x: o.x + 0.22, y: o.y + 0.18 + ib + 0.12, w: o.w - 0.44, h: o.h - (0.18 + ib + 0.2), valign: "top", color: C.text, fontSize: o.bodySize || 10.5, fontFace: FONT, lineSpacingMultiple: 1.04 });
}

// Lista de viñetas tipo "ticks"
function ticks(s, items, o) {
  const runs = [];
  items.forEach((it, i) => {
    R(it).forEach((r, j) => runs.push(Object.assign({ text: r.text }, { options: Object.assign({ bullet: j === 0 ? { code: "2713", indent: 18 } : false, color: r.options?.color || C.text, bold: r.options?.bold || false, paraSpaceBefore: j === 0 && i > 0 ? 7 : 0 }, {}) })));
  });
  s.addText(runs, { x: o.x, y: o.y, w: o.w, h: o.h, fontSize: o.size || 13, color: C.text, fontFace: FONT, valign: "top", lineSpacingMultiple: 1.05 });
}

// Burbuja de personaje (con avatar real)
const AV = { leo: A("leo_saludo.png"), eco: A("ecoflow_idle.png") };
function bubble(s, who, text, o) {
  const isEco = who === "eco";
  const accent = isEco ? C.teal : C.orange;
  const av = 0.72;
  s.addShape("roundRect", { x: o.x, y: o.y, w: o.w, h: o.h, rectRadius: 0.12, fill: { color: C.surface }, line: { color: accent, width: 1.25 } });
  s.addShape("ellipse", { x: o.x + 0.12, y: o.y + o.h / 2 - av / 2, w: av, h: av, fill: { color: isEco ? "E7F6F8" : "FCEDE1" }, line: { color: accent, width: 1 } });
  s.addImage({ path: AV[who], x: o.x + 0.14, y: o.y + o.h / 2 - av / 2 + 0.02, w: av - 0.04, h: av - 0.04, sizing: { type: "contain", w: av - 0.04, h: av - 0.04 } });
  s.addText([{ text: (isEco ? "EcoFlow" : "Leo") + "  ", options: { bold: true, color: accent } }, ...R(text)], { x: o.x + 0.12 + av + 0.14, y: o.y + 0.1, w: o.w - (0.12 + av + 0.26), h: o.h - 0.2, valign: "middle", fontSize: o.size || 11, color: C.text, fontFace: FONT, lineSpacingMultiple: 1.03 });
}

function stat(s, x, y, w, num, label, color) {
  s.addText(String(num), { x, y, w, h: 0.7, align: "center", color: color || C.accent, bold: true, fontSize: 42, fontFace: FONT });
  s.addText(label, { x, y: y + 0.68, w, h: 0.4, align: "center", color: C.textSoft, fontSize: 12, bold: true, fontFace: FONT });
}

// =====================================================================
// SLIDE 1 — Portada
// =====================================================================
(function () {
  const s = bgSlide(A("Fondo.jpg"));
  s.addImage({ path: A("LogoUdG.png"), x: 4.85, y: 0.5, w: 1.5, h: 1.5, sizing: { type: "contain", w: 1.5, h: 1.5 } });
  s.addShape("roundRect", { x: 6.7, y: 0.66, w: 3.05, h: 1.18, rectRadius: 0.12, fill: { color: "FFFFFF" } });
  s.addText("SECIHTI", { x: 6.7, y: 0.76, w: 3.05, h: 0.5, align: "center", valign: "middle", color: "9D2449", bold: true, fontSize: 27, charSpacing: 2, fontFace: "Georgia" });
  s.addText("SECRETARÍA DE CIENCIA, HUMANIDADES,\nTECNOLOGÍA E INNOVACIÓN", { x: 6.7, y: 1.26, w: 3.05, h: 0.5, align: "center", valign: "top", color: "B0883B", bold: true, fontSize: 7.5, charSpacing: 0.5, fontFace: "Georgia", lineSpacingMultiple: 1.0 });
  s.addText("Universidad de Guadalajara · Centro Universitario de los Valles", { x: 1, y: 2.25, w: 11.33, h: 0.4, align: "center", color: "E7ECE3", fontSize: 14, fontFace: FONT });
  s.addText("Sistema de Monitoreo Medioambiental y Edafológico con integración de un agente inteligente para la interpretación de datos", { x: 1.4, y: 2.7, w: 10.53, h: 1.5, align: "center", color: "FFFFFF", bold: true, fontSize: 28, fontFace: FONT, lineSpacingMultiple: 1.02 });
  s.addText([{ text: "Maestría en Ingeniería de Software · " }, { text: "Avances de Tesis — 2.º semestre", options: { color: C.sage, bold: true } }], { x: 1, y: 4.35, w: 11.33, h: 0.4, align: "center", color: "FFFFFF", fontSize: 14, fontFace: FONT });
  // chips
  const chips = [
    { t: "Presenta: Lic. Ignacio Andrade Salazar", solid: true },
    { t: "Director: Dr. Rodolfo Omar Domínguez García" },
    { t: "Codirector: Dr. Salvador Cervantes Álvarez" },
  ];
  let cx = 1.55;
  const cy = 5.0;
  chips.forEach((c) => {
    const w = 0.18 + c.t.length * 0.082;
    s.addShape("roundRect", { x: cx, y: cy, w, h: 0.46, rectRadius: 0.23, fill: { color: c.solid ? C.sageDkr : "FFFFFF", transparency: c.solid ? 0 : 80 }, line: c.solid ? null : { color: "FFFFFF", width: 1 } });
    s.addText(c.t, { x: cx, y: cy, w, h: 0.46, align: "center", valign: "middle", color: "FFFFFF", bold: c.solid, fontSize: 11, fontFace: FONT });
    cx += w + 0.2;
  });
  bubble(s, "leo", "Oye **EcoFlow**, ¿qué vamos a ver hoy en estos avances?", { x: 2.0, y: 5.75, w: 4.4, h: 1.0 });
  bubble(s, "eco", "¡El problema, los objetivos, el estado del arte y la propuesta del sistema! 🌎", { x: 6.9, y: 5.75, w: 4.4, h: 1.0 });
})();

// =====================================================================
// SLIDE 2 — Agenda
// =====================================================================
(function () {
  const s = contentSlide();
  kicker(s, "00", "Guía de avances · 2.º semestre");
  title(s, "Lo que voy a presentar hoy");
  const items = [
    ["1 · Problema y justificación", "🎯", C.sageDkr], ["2 · Objetivos y alcance", "🧭", C.sageDkr],
    ["3 · Marco teórico", "📖", C.teal], ["4 · Estado del arte (RSL)", "🔬", C.teal],
    ["5 · Metodología", "⚙️", C.teal], ["6 · Avances de la propuesta", "🏢", C.accent],
    ["7 · Atención a observaciones", "✓", C.accent], ["8 · Retribución social", "🤝", C.slate],
    ["9 · Cronograma", "📅", C.slate],
  ];
  const cols = 3, gap = 0.3, x0 = MX, y0 = 1.9, cw = (W - 2 * MX - gap * (cols - 1)) / cols, ch = 1.15;
  items.forEach((it, i) => {
    const cxx = x0 + (i % cols) * (cw + gap), cyy = y0 + Math.floor(i / cols) * (ch + gap);
    card(s, { x: cxx, y: cyy, w: cw, h: ch, accent: it[2], icon: it[1], title: it[0], titleSize: 14 });
  });
  bubble(s, "leo", "Soy **Leo**, el león de la UDG. Te guío por cada punto en ~10 minutos.", { x: 7.0, y: 6.55, w: 5.7, h: 0.8 });
})();

// =====================================================================
// SLIDE 3 — Problema
// =====================================================================
(function () {
  const s = contentSlide();
  kicker(s, "01", "Planteamiento del problema");
  title(s, "Hay datos ambientales… pero son difíciles de entender");
  ticks(s, [
    "Los **nodos IoT** generan datos técnicos: valores, unidades, umbrales y series temporales.",
    "Interpretarlos exige **conocimiento especializado**.",
    "Resultado: __inaccesibles__ para usuarios no expertos de la Región Valles.",
    "Además, los datos están **dispersos** y en formatos poco aprovechables.",
  ], { x: MX, y: 2.0, w: 6.5, h: 3.0, size: 14 });
  bubble(s, "leo", "Oye **EcoFlow**, ¿por qué es un problema un dato como **“420 ppm de CO₂”**?", { x: 7.35, y: 2.0, w: 5.4, h: 1.1 });
  bubble(s, "eco", "Porque ese número no le dice nada a la mayoría… **traducirlo a algo claro es justo lo que resuelvo**.", { x: 7.35, y: 3.25, w: 5.4, h: 1.25 });
  s.addShape("roundRect", { x: MX, y: 5.5, w: W - 2 * MX, h: 1.0, rectRadius: 0.1, fill: { color: C.bg2 }, line: { color: C.cardLine, width: 1 } });
  s.addText([{ text: "Brecha:  ", options: { bold: true, color: C.accent } }, ...R("falta una capa que traduzca el dato técnico a __lenguaje natural comprensible__.")], { x: MX + 0.3, y: 5.5, w: W - 2 * MX - 0.6, h: 1.0, valign: "middle", fontSize: 15, color: C.text, fontFace: FONT });
})();

// =====================================================================
// SLIDE 4 — Justificación
// =====================================================================
(function () {
  const s = contentSlide();
  kicker(s, "01", "Justificación");
  title(s, "Democratizar el acceso a la información ambiental");
  const items = [
    ["Acceso", "💬", "Consultar e interpretar datos en lenguaje natural (LLM + MCP)."],
    ["Visualización", "📊", "Tablas, tarjetas y gráficos dinámicos para el análisis científico."],
    ["Gestión", "🛠️", "Administrar nodos IoT, sensores y usuarios en un solo lugar."],
    ["Impacto", "🌐", "Solución escalable y replicable en otras regiones."],
  ];
  const cols = 4, gap = 0.3, cw = (W - 2 * MX - gap * (cols - 1)) / cols, ch = 2.5, y0 = 2.0;
  items.forEach((it, i) => {
    card(s, { x: MX + i * (cw + gap), y: y0, w: cw, h: ch, accent: C.sageDkr, icon: it[1], title: it[0], body: it[2] });
  });
  s.addShape("roundRect", { x: MX, y: 4.9, w: W - 2 * MX, h: 1.5, rectRadius: 0.1, fill: { color: C.bg2 }, line: { color: C.cardLine, width: 1 } });
  s.addText(R("Fortalece la __investigación, docencia y planeación ambiental__ de CUValles y la Región Valles, impulsando la **transformación digital** de la gestión medioambiental."), { x: MX + 0.3, y: 4.9, w: W - 2 * MX - 0.6, h: 1.5, valign: "middle", fontSize: 15, color: C.text, fontFace: FONT, lineSpacingMultiple: 1.1 });
})();

// =====================================================================
// SLIDE 5 — Objetivos
// =====================================================================
(function () {
  const s = contentSlide();
  kicker(s, "02", "Objetivos · alcance · límites");
  // objetivo general (tarjeta accent)
  s.addShape("roundRect", { x: MX, y: 1.0, w: W - 2 * MX, h: 1.5, rectRadius: 0.1, fill: { color: C.surface }, line: { color: C.accent, width: 1.5 } });
  s.addText([{ text: "🎯  Objetivo general", options: { bold: true, color: C.accent, fontSize: 15 } }], { x: MX + 0.25, y: 1.12, w: 11, h: 0.4, fontFace: FONT });
  s.addText(R("Desarrollar y evaluar una **plataforma web** que integra un **Agente Inteligente** (MCP + LLM) para facilitar el acceso, gestión y comprensión de los datos de los nodos IoT del SMMyE a usuarios con distintos niveles de conocimiento."), { x: MX + 0.25, y: 1.52, w: W - 2 * MX - 0.5, h: 0.9, fontSize: 12.5, color: C.text, fontFace: FONT, lineSpacingMultiple: 1.04 });
  const items = [
    ["OE1 · Requerimientos", "📋", "ERS funcional y no funcional.", C.sageDkr],
    ["OE2 · Arquitectura", "🧩", "Componentes, datos e interfaces.", C.sageDkr],
    ["OE3 · Plataforma + API", "🖥️", "Ingesta, visualización y administración.", C.sageDkr],
    ["OE4 · MCP + chat", "🤖", "Agente conversacional (≥85% consultas).", C.sageDkr],
    ["OE5 · Evaluación", "✓", "SUS ≥ 70 · 80% interpreta bien.", C.sageDkr],
    ["Alcance / límites", "📐", "**Sí:** recibir, visualizar e interpretar.  **No:** controlar hardware, predecir ni notificar.", C.slate],
  ];
  const cols = 3, gap = 0.3, cw = (W - 2 * MX - gap * (cols - 1)) / cols, ch = 1.75, y0 = 2.75;
  items.forEach((it, i) => {
    const cxx = MX + (i % cols) * (cw + gap), cyy = y0 + Math.floor(i / cols) * (ch + gap);
    card(s, { x: cxx, y: cyy, w: cw, h: ch, accent: it[3], icon: it[1], title: it[0], body: it[2], titleSize: 12.5 });
  });
})();

// =====================================================================
// SLIDE 6 — Marco teórico
// =====================================================================
(function () {
  const s = contentSlide();
  kicker(s, "03", "Marco teórico");
  title(s, "Los conceptos que sostienen la propuesta");
  const items = [
    ["IoT y redes de sensores", "📡", "Nodos que miden aire, clima y suelo y publican lecturas.", C.teal],
    ["LLM", "🧠", "Modelos de lenguaje que interpretan y responden.", C.teal],
    ["Agentes inteligentes", "🤖", "Deciden qué herramienta usar para resolver la consulta.", C.teal],
    ["MCP", "🧩", "Protocolo que estandariza el acceso del LLM a los datos.", C.accent],
    ["RAG", "🔍", "Respuestas basadas en datos reales recuperados.", C.teal],
    ["DCU · ISO 9241-210", "🧑", "Diseño centrado en el usuario, interfaces accesibles.", C.sageDkr],
  ];
  const cols = 3, gap = 0.3, cw = (W - 2 * MX - gap * (cols - 1)) / cols, ch = 1.5, y0 = 1.9;
  items.forEach((it, i) => {
    const cxx = MX + (i % cols) * (cw + gap), cyy = y0 + Math.floor(i / cols) * (ch + gap);
    card(s, { x: cxx, y: cyy, w: cw, h: ch, accent: it[3], icon: it[1], title: it[0], body: it[2], titleSize: 12.5 });
  });
  // base tecnológica chips
  s.addText("Base tecnológica:", { x: MX, y: 5.45, w: 2.2, h: 0.5, valign: "middle", color: C.textSoft, bold: true, fontSize: 13, fontFace: FONT });
  let cx = MX + 2.2;
  ["Laravel", "Vue.js", "MySQL", "n8n", "Docker"].forEach((t) => {
    const w = 0.4 + t.length * 0.11;
    s.addShape("roundRect", { x: cx, y: 5.5, w, h: 0.42, rectRadius: 0.21, fill: { color: C.chip } });
    s.addText(t, { x: cx, y: 5.5, w, h: 0.42, align: "center", valign: "middle", color: C.brand, bold: true, fontSize: 12, fontFace: FONT });
    cx += w + 0.2;
  });
})();

// =====================================================================
// SLIDE 7 (06b) — Preguntas + cadena de búsqueda
// =====================================================================
(function () {
  const s = contentSlide();
  kicker(s, "04", "Estado del arte · Preguntas de investigación y cadena de búsqueda");
  title(s, "Primero las preguntas… luego la búsqueda");
  const rqs = [
    ["RQ1", "**Agentes + LLM** para interpretar datos medioambientales y edafológicos vs. interfaces tradicionales."],
    ["RQ2", "Ventajas del **MCP** para integrar datos **IoT heterogéneos**."],
    ["RQ3", "**Diseño centrado en el usuario** (UCD) y experiencia de usuario."],
    ["RQ4", "**Context-awareness** para personalizar servicios."],
    ["RQ5", "Técnicas **RAG** para precisión en datos científicos."],
  ];
  let y = 2.0;
  rqs.forEach((q) => {
    s.addShape("roundRect", { x: MX, y, w: 0.85, h: 0.62, rectRadius: 0.08, fill: { color: C.sageDkr } });
    s.addText(q[0], { x: MX, y, w: 0.85, h: 0.62, align: "center", valign: "middle", color: "FFFFFF", bold: true, fontSize: 13, fontFace: FONT });
    s.addText(R(q[1]), { x: MX + 1.0, y, w: 5.0, h: 0.62, valign: "middle", fontSize: 12, color: C.text, fontFace: FONT, lineSpacingMultiple: 1.0 });
    y += 0.74;
  });
  // cadena de búsqueda card
  const cx = 7.0, cw = W - MX - cx, cy = 2.0;
  s.addShape("roundRect", { x: cx, y: cy, w: cw, h: 4.3, rectRadius: 0.1, fill: { color: C.surface }, line: { color: C.sageDkr, width: 1.4 } });
  s.addText([{ text: "🔍  Cadena de búsqueda", options: { bold: true, color: C.heading } }], { x: cx + 0.25, y: cy + 0.15, w: cw - 0.5, h: 0.4, fontSize: 14, fontFace: FONT });
  s.addText(R("Scopus · IEEE Xplore · Web of Science (mayo 2026). **AND** entre grupos PICO, **OR** entre sinónimos."), { x: cx + 0.25, y: cy + 0.55, w: cw - 0.5, h: 0.55, fontSize: 11, color: C.text, fontFace: FONT });
  const groups = [
    ["Dominio", '"environmental monitoring" OR "soil monitoring" OR "IoT" OR "sensor network*"', false],
    ["Tecnología", '"Model Context Protocol" OR "MCP" OR "AI agent*" OR "LLM" OR "RAG" OR "conversational AI"', true],
    ["Usuario", '"user experience" OR "usability" OR "user-centered design" OR "context-aware*" OR "non-expert user*"', false],
  ];
  let gy = cy + 1.2;
  groups.forEach((g, i) => {
    s.addShape("roundRect", { x: cx + 0.25, y: gy, w: cw - 0.5, h: 0.78, rectRadius: 0.07, fill: { color: g[2] ? "FCEDE1" : C.bg2 }, line: { color: g[2] ? C.accent : C.cardLine, width: 1 } });
    s.addText([{ text: g[0] + "  ", options: { bold: true, color: g[2] ? C.accent : C.brand } }, { text: g[1] }], { x: cx + 0.4, y: gy, w: cw - 0.8, h: 0.78, valign: "middle", fontSize: 9.5, color: C.text, fontFace: FONT, lineSpacingMultiple: 1.0 });
    gy += 0.78;
    if (i < 2) { s.addText("AND", { x: cx + 0.25, y: gy - 0.02, w: cw - 0.5, h: 0.22, align: "center", color: C.textSoft, bold: true, fontSize: 9, fontFace: FONT }); gy += 0.22; }
  });
  foot(s, "MCP", "término emergente: central para RQ2 y diferenciador de esta revisión");
})();

// =====================================================================
// SLIDE 8 (07) — RSL PRISMA
// =====================================================================
(function () {
  const s = contentSlide();
  kicker(s, "04", "Estado del arte · Revisión Sistemática de Literatura");
  title(s, "Búsqueda con método: PICO + PRISMA");
  ticks(s, [
    "**PICO** definió qué buscar; **PRISMA** el cómo filtrar.",
    "Fuentes: **Scopus · IEEE Xplore · Web of Science** (mayo 2026).",
    "El **cribado** se hizo por título y resumen; el texto completo solo se leyó en los estudios elegibles.",
    "4 fases: identificación → cribado → elegibilidad → inclusión.",
  ], { x: MX, y: 2.0, w: 6.2, h: 3.5, size: 13.5 });
  // embudo
  const fx = 7.1, fw0 = 5.7, fy = 2.0;
  const bars = [
    ["Identificados", 483, 1.0, C.sage],
    ["Cribados · título y resumen", 417, 0.86, C.sageDk],
    ["Leídos a texto completo", 36, 0.72, C.teal],
    ["Incluidos ✓", 21, 0.58, C.sageDkr],
  ];
  const excl = ["− 66 duplicados", "− 381 excluidos por título y resumen", "− 15 excluidos tras la lectura"];
  let y = fy;
  bars.forEach((b, i) => {
    const w = fw0 * b[2];
    s.addShape("roundRect", { x: fx, y, w, h: 0.6, rectRadius: 0.06, fill: { color: b[3] } });
    s.addText([{ text: b[0] + "   ", options: { color: "FFFFFF" } }, { text: String(b[1]), options: { bold: true, color: "FFFFFF" } }], { x: fx + 0.15, y, w: w - 0.2, h: 0.6, valign: "middle", fontSize: 11.5, fontFace: FONT });
    y += 0.66;
    if (i < excl.length) { s.addText(excl[i], { x: fx + 0.1, y, w: fw0, h: 0.34, valign: "middle", color: C.textSoft, italic: true, fontSize: 10.5, fontFace: FONT }); y += 0.36; }
  });
  foot(s, "21 estudios", "base empírica de las decisiones de diseño");
})();

// =====================================================================
// SLIDE 9 (08) — Brecha (barras RQ)
// =====================================================================
(function () {
  const s = contentSlide();
  kicker(s, "04", "Estado del arte · Hallazgos y brecha");
  title(s, "5 preguntas de investigación → 1 brecha");
  const rq = [["RQ1", 17], ["RQ2", 9], ["RQ3", 14], ["RQ4", 15], ["RQ5", 13]];
  const bx = MX + 0.9, bw = 4.4, max = 17;
  let y = 2.05;
  rq.forEach((r) => {
    s.addText(r[0], { x: MX, y, w: 0.8, h: 0.42, valign: "middle", color: C.heading, bold: true, fontSize: 12, fontFace: FONT });
    s.addShape("roundRect", { x: bx, y: y + 0.04, w: bw, h: 0.34, rectRadius: 0.05, fill: { color: C.track || "E3E8DA" } });
    s.addShape("roundRect", { x: bx, y: y + 0.04, w: bw * (r[1] / max), h: 0.34, rectRadius: 0.05, fill: { color: C.sageDk } });
    s.addText(String(r[1]), { x: bx + bw + 0.1, y, w: 0.5, h: 0.42, valign: "middle", color: C.heading, bold: true, fontSize: 12, fontFace: FONT });
    y += 0.56;
  });
  s.addText(R("Estudios que aportan a cada pregunta (n=21). RQ3 = **DCU**: aunque aparece en 14 estudios, casi siempre de forma **tangencial** (sin evaluación con usuarios reales); es la dimensión **menos desarrollada en profundidad**."), { x: MX, y: y + 0.1, w: 6.2, h: 1.4, fontSize: 11, color: C.textSoft, fontFace: FONT, lineSpacingMultiple: 1.05 });
  // derecha: ticks + brecha
  ticks(s, [
    "**RAG** es condición necesaria para precisión factual.",
    "**MCP** estandariza el acceso a datos IoT heterogéneos.",
    "La **experiencia de usuario** es la asignatura pendiente.",
  ], { x: 7.2, y: 2.0, w: 5.5, h: 1.7, size: 13 });
  s.addShape("roundRect", { x: 7.2, y: 3.85, w: 5.55, h: 2.5, rectRadius: 0.1, fill: { color: C.surface }, line: { color: C.accent, width: 1.5 } });
  s.addText([{ text: "🧭  Brecha identificada", options: { bold: true, color: C.accent } }], { x: 7.42, y: 4.0, w: 5.1, h: 0.4, fontSize: 14, fontFace: FONT });
  s.addText(R("Ningún estudio combina **agente LLM + datos edafológicos vía MCP + diseño centrado en el usuario**. Esa convergencia, en la Región Valles, es la __contribución original__."), { x: 7.42, y: 4.45, w: 5.1, h: 1.8, fontSize: 12.5, color: C.text, fontFace: FONT, lineSpacingMultiple: 1.1 });
})();

// =====================================================================
// SLIDE 10 (09) — Metodología
// =====================================================================
(function () {
  const s = contentSlide();
  kicker(s, "05", "Metodología de investigación");
  title(s, "Design Science Research **(Investigación en Ciencias del Diseño)** como marco general", { size: 22, h: 0.7 });
  // stepper de 6 fases
  const fases = [
    ["FASE 1", "Problema y motivación"], ["FASE 2", "Objetivos de la solución"], ["FASE 3", "Diseño y desarrollo"],
    ["FASE 4", "Demostración"], ["FASE 5", "Evaluación"], ["FASE 6", "Comunicación"],
  ];
  const gap = 0.2, sw = (W - 2 * MX - gap * 5) / 6, sy = 1.75;
  fases.forEach((f, i) => {
    const x = MX + i * (sw + gap);
    s.addShape("roundRect", { x, y: sy, w: sw, h: 1.0, rectRadius: 0.08, fill: { color: C.bg2 }, line: { color: C.cardLine, width: 1 } });
    s.addText(f[0], { x, y: sy + 0.1, w: sw, h: 0.3, align: "center", color: C.accent, bold: true, fontSize: 11, fontFace: FONT });
    s.addText(f[1], { x: x + 0.06, y: sy + 0.36, w: sw - 0.12, h: 0.58, align: "center", valign: "top", color: C.heading, bold: true, fontSize: 10, fontFace: FONT, lineSpacingMultiple: 0.98 });
  });
  s.addText(R("Tres metodologías anidadas dentro del DSR:"), { x: MX, y: 2.95, w: 12, h: 0.4, color: C.textSoft, fontSize: 13, fontFace: FONT });
  const cards = [
    ["RSL · PICO + PRISMA", "🔬", "Fases 1–2: fundamenta el problema y los objetivos.", C.teal],
    ["Prototipado evolutivo", "🔄", "Fase 3: baja fidelidad → funcional → sistema final.", C.accent],
    ["DCU · ISO 9241-210", "🧑", "Fases 4–5: evaluación iterativa con usuarios reales.", C.sageDkr],
  ];
  const cw = (W - 2 * MX - 0.3 * 2) / 3, cy = 3.45, ch = 1.5;
  cards.forEach((c, i) => card(s, { x: MX + i * (cw + 0.3), y: cy, w: cw, h: ch, accent: c[3], icon: c[1], title: c[0], body: c[2], titleSize: 12 }));
  s.addShape("roundRect", { x: MX, y: 5.15, w: W - 2 * MX, h: 1.45, rectRadius: 0.1, fill: { color: C.bg2 }, line: { color: C.cardLine, width: 1 } });
  s.addText([{ text: "¿Por qué prototipado evolutivo?  ", options: { bold: true, color: C.accent } }, ...R("Los requerimientos no se conocen por completo al inicio y el sistema debe servir a usuarios de perfiles muy distintos —desde productores y ciudadanos sin formación técnica hasta investigadores y especialistas—: construir sobre un prototipo que se refina con la retroalimentación de todos ellos reduce el riesgo y valida cada incremento antes de invertir en el sistema final, frente a un modelo en cascada de requisitos cerrados.")], { x: MX + 0.3, y: 5.15, w: W - 2 * MX - 0.6, h: 1.45, valign: "middle", fontSize: 12, color: C.text, fontFace: FONT, lineSpacingMultiple: 1.06 });
})();

// =====================================================================
// SLIDE 11 (10) — Arquitectura (5 capas)
// =====================================================================
(function () {
  const s = contentSlide();
  kicker(s, "06", "Avances de la propuesta · Arquitectura");
  title(s, "5 capas desacopladas");
  const layers = [
    ["Adquisición — Hardware IoT", "Nodos (ESP32) con sensores de aire, clima y suelo · identificados por MAC.", C.teal, "POST /api/guardarMuestras (JWT)  ▼"],
    ["API / Lógica de negocio — Laravel 10", "Autenticación JWT · ingesta · CRUD · estadísticas y comparativas.", C.sageDk, "▼"],
    ["Datos — MySQL 8", "Áreas, nodos IoT, sensores, armados, muestras, usuarios y roles.", C.sageDkr, "▲ REST /api (Axios + JWT)"],
    ["Presentación — SPA Vue 3", "Monitoreo en tiempo real · estadísticas · administración · reportes PDF.", C.slate, "◀ ▶ widget de chat"],
    ["Inteligencia conversacional — EcoFlow", "n8n orquesta · servidor MCP (solo lectura) · LLM en la nube.", C.accent, null],
  ];
  let y = 1.85;
  const lx = MX, lw = 9.0, lh = 0.78;
  layers.forEach((l) => {
    s.addShape("roundRect", { x: lx, y, w: lw, h: lh, rectRadius: 0.08, fill: { color: C.surface }, line: { color: l[2], width: 1.4 } });
    s.addShape("roundRect", { x: lx, y, w: 0.12, h: lh, rectRadius: 0, fill: { color: l[2] } });
    s.addText([{ text: l[0], options: { bold: true, color: C.heading, fontSize: 12.5 } }, { text: "\n" + l[1], options: { color: C.text, fontSize: 10 } }], { x: lx + 0.3, y, w: lw - 0.5, h: lh, valign: "middle", fontFace: FONT, lineSpacingMultiple: 1.0 });
    y += lh;
    if (l[3]) { s.addText(l[3], { x: lx, y: y - 0.02, w: lw, h: 0.26, align: "center", color: C.textSoft, fontSize: 9, italic: true, fontFace: FONT }); y += 0.26; }
  });
  bubble(s, "eco", "¡Yo vivo en la capa 5! Traduzco tus preguntas y consulto los datos por **MCP**.", { x: 9.5, y: 4.3, w: 3.3, h: 1.6, size: 11 });
})();

// =====================================================================
// SLIDE 12 (11) — Software / Hardware
// =====================================================================
(function () {
  const s = contentSlide();
  kicker(s, "06", "Elementos de software y hardware");
  title(s, "El stack y los sensores");
  // software card con tabla
  const cx = MX, cw = 6.0, cy = 1.9, ch = 3.2;
  s.addShape("roundRect", { x: cx, y: cy, w: cw, h: ch, rectRadius: 0.1, fill: { color: C.surface }, line: { color: C.sageDkr, width: 1.3 } });
  s.addText([{ text: "🗄️  Software", options: { bold: true, color: C.heading } }], { x: cx + 0.25, y: cy + 0.15, w: cw - 0.5, h: 0.4, fontSize: 14, fontFace: FONT });
  const rows = [["Capa", "Tecnología"], ["Backend", "PHP 8.2 · Laravel 10 · JWT"], ["Datos", "MySQL 8"], ["Frontend", "Vue 3 · Vite · Pinia · Chart.js"], ["IA", "n8n · servidor MCP · LLM"], ["Infra", "Docker · Nginx"]];
  const tbl = rows.map((r, i) => [
    { text: r[0], options: { bold: true, color: i === 0 ? "FFFFFF" : C.heading, fill: i === 0 ? C.sageDkr : (i % 2 ? "FFFFFF" : C.bg2), fontSize: 11, valign: "middle", margin: [2, 4, 2, 6] } },
    { text: r[1], options: { color: i === 0 ? "FFFFFF" : C.text, fill: i === 0 ? C.sageDkr : (i % 2 ? "FFFFFF" : C.bg2), fontSize: 11, valign: "middle", margin: [2, 4, 2, 6] } },
  ]);
  s.addTable(tbl, { x: cx + 0.25, y: cy + 0.62, w: cw - 0.5, colW: [1.6, 3.65], rowH: 0.4, border: { type: "solid", color: C.cardLine, pt: 0.5 }, fontFace: FONT });
  // hardware card
  const hx = 6.85, hw = W - MX - hx;
  s.addShape("roundRect", { x: hx, y: cy, w: hw, h: ch, rectRadius: 0.1, fill: { color: C.surface }, line: { color: C.teal, width: 1.3 } });
  s.addText([{ text: "📡  Hardware — nodos IoT (ESP32)", options: { bold: true, color: C.teal } }], { x: hx + 0.25, y: cy + 0.15, w: hw - 0.5, h: 0.4, fontSize: 13.5, fontFace: FONT });
  s.addText("16 variables en 4 dominios. Cada una con umbrales bajo / medio / alto.", { x: hx + 0.25, y: cy + 0.6, w: hw - 0.5, h: 0.4, fontSize: 11, color: C.text, fontFace: FONT });
  const chips = [
    ["Aire: DHT11 · BMP280 · PMS5003 · MH-Z16", C.chip],
    ["Radiación: GUVA · BH1750", C.chip],
    ["Clima: pluviómetro · anemómetro · veleta", C.chip],
    ["Suelo: JXBS-3001 — N·P·K · conductividad · humedad · temperatura · pH", "FCEDE1"],
  ];
  let chy = cy + 1.15;
  chips.forEach((c) => {
    s.addShape("roundRect", { x: hx + 0.25, y: chy, w: hw - 0.5, h: 0.44, rectRadius: 0.1, fill: { color: c[1] } });
    s.addText(c[0], { x: hx + 0.42, y: chy, w: hw - 0.8, h: 0.44, valign: "middle", color: C.text, fontSize: 10.5, fontFace: FONT });
    chy += 0.5;
  });
  // stats
  const stats = [[16, "variables"], [4, "dominios"], [5, "capas"], [4, "herramientas MCP"]];
  const sw = 2.8, sy = 5.35;
  stats.forEach((st, i) => stat(s, MX + 0.4 + i * 3.05, sy, sw, st[0], st[1], C.accent));
})();

// =====================================================================
// SLIDE 13 (12) — Requerimientos
// =====================================================================
(function () {
  const s = contentSlide();
  kicker(s, "07", "Análisis de requerimientos");
  title(s, "14 funcionales · 9 no funcionales");
  const stats = [[14, "Funcionales (RF)"], [9, "No funcionales (RNF)"], [7, "Módulos"]];
  stats.forEach((st, i) => stat(s, 2.2 + i * 3.1, 1.85, 2.6, st[0], st[1], C.accent));
  const cy = 3.3, ch = 2.9, cw = (W - 2 * MX - 0.3) / 2;
  // RF
  s.addShape("roundRect", { x: MX, y: cy, w: cw, h: ch, rectRadius: 0.1, fill: { color: C.surface }, line: { color: C.sageDkr, width: 1.3 } });
  s.addText([{ text: "⚙️  Funcionales (muestra)", options: { bold: true, color: C.heading } }], { x: MX + 0.25, y: cy + 0.15, w: cw - 0.5, h: 0.4, fontSize: 13.5, fontFace: FONT });
  ticks(s, [
    "**RF-03** Recibir y almacenar muestras de los nodos.",
    "**RF-08** Monitoreo en tiempo real con umbrales.",
    "**RF-09/10** Estadísticas y comparativas entre nodos.",
    "**RF-14** Consulta en lenguaje natural (LLM + MCP).",
  ], { x: MX + 0.3, y: cy + 0.65, w: cw - 0.6, h: 2.1, size: 12 });
  // RNF
  const x2 = MX + cw + 0.3;
  s.addShape("roundRect", { x: x2, y: cy, w: cw, h: ch, rectRadius: 0.1, fill: { color: C.surface }, line: { color: C.accent, width: 1.3 } });
  s.addText([{ text: "🛡️  No funcionales (muestra)", options: { bold: true, color: C.accent } }], { x: x2 + 0.25, y: cy + 0.15, w: cw - 0.5, h: 0.4, fontSize: 13.5, fontFace: FONT });
  ticks(s, [
    "**RNF-01** API protegida con JWT.",
    "**RNF-02** Roles: Admin · Normal · Invitado.",
    "**RNF-03** Interfaz responsiva (móvil → 4K).",
    "**RNF-09** IA accede solo vía MCP (solo lectura).",
  ], { x: x2 + 0.3, y: cy + 0.65, w: cw - 0.6, h: 2.1, size: 12 });
  foot(s, "Trazabilidad", "cada requerimiento ↔ componente (matriz en anexos)");
})();

// =====================================================================
// SLIDE 13b (12b) — Avance del sistema (4 capturas)
// =====================================================================
(function () {
  const s = contentSlide();
  kicker(s, "07", "Avance del sistema · diseño y desarrollo");
  title(s, "Primeras pantallas del prototipo funcional", { size: 24 });
  subtitle(s, "Prototipo navegable de **SMMyE** con los tres perfiles de acceso, los módulos principales y el asistente **EcoFlow**.", 1.6);

  function shotCard(x, y, w, h, img, n, ttl, sub) {
    s.addShape("roundRect", { x, y, w, h, rectRadius: 0.09, fill: { color: C.surface }, line: { color: C.cardLine, width: 1 }, shadow: { type: "outer", color: "B9C3A8", blur: 6, offset: 2, angle: 90, opacity: 0.35 } });
    const pad = 0.1, imgH = h - 0.72;
    s.addImage({ path: img, x: x + pad, y: y + pad, w: w - 2 * pad, h: imgH, sizing: { type: "cover", w: w - 2 * pad, h: imgH } });
    s.addShape("ellipse", { x: x + pad + 0.1, y: y + pad + 0.1, w: 0.36, h: 0.36, fill: { color: "10B981" }, line: { color: "FFFFFF", width: 1 } });
    s.addText(String(n), { x: x + pad + 0.1, y: y + pad + 0.1, w: 0.36, h: 0.36, align: "center", valign: "middle", color: "FFFFFF", bold: true, fontSize: 13, fontFace: FONT });
    s.addText([{ text: ttl, options: { bold: true, color: C.heading, fontSize: 12.5 } }, { text: "\n" + sub, options: { color: C.textSoft, fontSize: 9.5 } }], { x: x + pad + 0.05, y: y + imgH + 0.15, w: w - 2 * pad - 0.1, h: 0.52, valign: "top", fontFace: FONT, lineSpacingMultiple: 1.0 });
  }

  const cw = (W - 2 * MX - 0.3) / 2, ch = 2.3, gap = 0.3, y1 = 2.05, y2 = y1 + ch + 0.16;
  const xL = MX, xR = MX + cw + gap;
  shotCard(xL, y1, cw, ch, A("sys-01-landing.png"), 1, "Página de inicio (landing)", "Portal público de acceso e información.");
  shotCard(xR, y1, cw, ch, A("sys-02-invitado.png"), 2, "Modo invitado", "Monitoreo público, sin necesidad de cuenta.");
  shotCard(xL, y2, cw, ch, A("sys-03-admin.png"), 3, "Panel de administrador", "Resumen: nodos, sensores, áreas y usuarios.");
  shotCard(xR, y2, cw, ch, A("sys-04-monitoreo.png"), 4, "Monitoreo en tiempo real", "Lecturas actuales de cada sensor por nodo IoT.");

  foot(s, "En desarrollo", "Laravel + Vue 3 · MySQL · Nodos IoT · EcoFlow (n8n + MCP) · 3 roles de usuario");
})();

// =====================================================================
// SLIDE 14 (02c) — Observaciones del protocolo
// =====================================================================
function obsSlide(num, kick, ttl, sub, pairs) {
  const s = contentSlide();
  kicker(s, num, kick);
  title(s, ttl, { size: 24 });
  subtitle(s, sub, 1.65);
  const head = [
    { text: "Observación", options: { bold: true, color: "FFFFFF", fill: C.slate, valign: "middle", margin: [3, 6, 3, 6], fontSize: 11.5 } },
    { text: "Cómo se atendió", options: { bold: true, color: "FFFFFF", fill: C.slate, valign: "middle", margin: [3, 6, 3, 6], fontSize: 11.5 } },
  ];
  const body = pairs.map((p, i) => [
    { text: p[0], options: { color: C.text, fill: i % 2 ? "FFFFFF" : C.bg2, valign: "middle", margin: [3, 6, 3, 6], fontSize: 10.5 } },
    { text: [{ text: "✓ ", options: { color: C.green, bold: true } }, ...R(p[1])], options: { color: C.text, fill: i % 2 ? "FFFFFF" : C.bg2, valign: "middle", margin: [3, 6, 3, 6], fontSize: 10.5 } },
  ]);
  s.addTable([head, ...body], { x: MX, y: 2.15, w: W - 2 * MX, colW: [4.9, 7.33], border: { type: "solid", color: C.cardLine, pt: 0.5 }, fontFace: FONT, autoPage: false, valign: "middle" });
  return s;
}
obsSlide("★", "Seguimiento · revisión del protocolo", "Atención a las observaciones del protocolo",
  "Correcciones al documento de protocolo, incorporadas en el manuscrito de este semestre.", [
  ["El título era demasiado extenso.", "Se **reformuló el título** para precisar el alcance: monitoreo medioambiental y edafológico + agente inteligente para la interpretación de datos."],
  ["Faltaba contextualizar qué sistemas similares existen y el punto de partida del proyecto.", "Se amplió la justificación: se exponen **sistemas existentes** y su oferta, y se aclara que el proyecto parte de un **nodo prototipo en CUValles** para escalar a la Región Valles."],
  ["No se definían los beneficiarios ni con ejemplos del lenguaje técnico.", "Se especificaron los **usuarios objetivo** (agricultores, ganaderos, biólogos, ecologistas, gobierno, protección civil) y se añadieron **ejemplos** del dato técnico y su interpretación."],
  ["Redacción contradictoria sobre el público (¿sin o con formación técnica?).", "Se corrigió: el sistema apoya a usuarios **sin formación** técnica y **también** a especialistas."],
  ["En la RSL convenía apegarse mejor al estándar PRISMA.", "Se siguió el **checklist PRISMA 2020** y se integraron las **referencias metodológicas** recomendadas."],
]);

// =====================================================================
// SLIDE 15 (02b) — Observaciones del seminario
// =====================================================================
obsSlide("★", "Seguimiento · seminario 1.er semestre", "Atención a las observaciones del seminario anterior",
  "Cada observación recibida en el seminario anterior fue atendida en el manuscrito de este semestre.", [
  ["Frases muy largas y redacción que mezcla lo hecho con lo planeado.", "Frases divididas a **máx. 2–3 renglones** y descripción reescrita **en futuro**, distinguiendo lo realizado de lo planeado."],
  ["Objetivo general extenso; objetivos específicos parecían requerimientos.", "Objetivo general **más compacto** y objetivos específicos reformulados con criterios **SMART**, separados de los requerimientos."],
  ["Abreviaturas repetidas (LLM, RAG…) y traducción de RAG inconsistente.", "Abreviaturas definidas **solo en su primera aparición** y traducción de RAG **homogeneizada**."],
  ["En PRISMA, la cadena de búsqueda se generaba antes que las preguntas.", "Las **preguntas de investigación** se definen **antes** de construir la cadena de búsqueda."],
  ["Sobra la definición en alcances/limitaciones; y columnas repetidas en el cronograma.", "Se **quitaron las definiciones** de alcances y limitaciones y se **simplificó el cronograma**."],
]);

// =====================================================================
// SLIDE 16 (13) — Retribución social
// =====================================================================
(function () {
  const s = contentSlide();
  kicker(s, "08", "Retribución social");
  title(s, "Retribución social del semestre");
  // tarjeta SGPI
  const cx = MX, cw = 5.2, cy = 2.0, ch = 3.6;
  s.addShape("roundRect", { x: cx, y: cy, w: cw, h: ch, rectRadius: 0.1, fill: { color: C.surface }, line: { color: C.sageDkr, width: 1.4 } });
  s.addShape("roundRect", { x: cx + cw / 2 - 0.45, y: cy + 0.35, w: 0.9, h: 0.9, rectRadius: 0.14, fill: { color: C.sageDkr } });
  s.addText("🤝", { x: cx + cw / 2 - 0.45, y: cy + 0.35, w: 0.9, h: 0.9, align: "center", valign: "middle", fontSize: 32, color: "FFFFFF", fontFace: FONT });
  s.addText("Proyecto SGPI · periodo 2026A", { x: cx + 0.3, y: cy + 1.4, w: cw - 0.6, h: 0.5, align: "center", color: C.heading, bold: true, fontSize: 15, fontFace: FONT });
  s.addShape("roundRect", { x: cx + cw / 2 - 0.85, y: cy + 2.05, w: 1.7, h: 0.45, rectRadius: 0.22, fill: { color: C.green } });
  s.addText("Cumplida", { x: cx + cw / 2 - 0.85, y: cy + 2.05, w: 1.7, h: 0.45, align: "center", valign: "middle", color: "FFFFFF", bold: true, fontSize: 12, fontFace: FONT });
  s.addText("Sistema para la Gestión de Proyectos de Investigación", { x: cx + 0.3, y: cy + 2.65, w: cw - 0.6, h: 0.7, align: "center", color: C.textSoft, fontSize: 11.5, fontFace: FONT });
  ticks(s, [
    "Colaboración en el proyecto **Sistema para la Gestión de Proyectos de Investigación (SGPI)** durante el **periodo 2026A**.",
    "Aporte en ingeniería de software al desarrollo del SGPI, aplicando los conocimientos de la maestría.",
    "Para 3.er semestre: planeación de **créditos de movilidad** y carta de invitación.",
  ], { x: 6.4, y: 2.2, w: 6.3, h: 3.2, size: 14 });
})();

// =====================================================================
// SLIDE 17 (14) — Cronograma (Gantt)
// =====================================================================
(function () {
  const s = contentSlide();
  kicker(s, "09", "Cronograma de actividades");
  title(s, "Plan de trabajo · cuatro semestres");
  subtitle(s, "De septiembre 2025 a septiembre 2027.", 1.6);
  const acts = [
    ["Protocolo, anteproyecto y RSL", 0, 20.8, "done"],
    ["1.ª presentación de avances", 12.5, 4.2, "done"],
    ["Redacción de tesis · parte 1", 20.8, 4.2, "done"],
    ["Capacitación MCP y elicitación de req.", 25, 8.3, "done"],
    ["Análisis y diseño del software", 33.3, 8.3, "cur"],
    ["2.ª presentación de avances", 41.7, 4.2, "fut"],
    ["Desarrollo de software (back y front)", 41.7, 8.3, "fut"],
    ["Servidor MCP y redacción · parte 2", 50, 12.5, "fut"],
    ["3.ª presentación y despliegue", 62.5, 12.5, "fut"],
    ["Pruebas y validaciones", 75, 8.3, "fut"],
    ["Revisión final y 4.ª presentación", 83.3, 12.5, "fut"],
    ["Corrección, defensa y titulación", 91.7, 8.3, "fut"],
  ];
  const COL = { done: C.sageDk, cur: C.orange, fut: C.slate2 };
  const labW = 3.6, trackX = MX + labW, trackW = W - MX - trackX, top = 2.45;
  const sems = ["1.º sem", "2.º sem (actual)", "3.º sem", "4.º sem"];
  // encabezados de semestre
  for (let i = 0; i < 4; i++) {
    const x = trackX + (i / 4) * trackW;
    s.addShape("rect", { x, y: top - 0.32, w: trackW / 4, h: 0.3, fill: { color: i === 1 ? "E8E0CF" : C.bg2 }, line: { color: C.cardLine, width: 0.5 } });
    s.addText(sems[i], { x, y: top - 0.32, w: trackW / 4, h: 0.3, align: "center", valign: "middle", color: C.heading, bold: i === 1, fontSize: 9.5, fontFace: FONT });
  }
  const rh = 0.33;
  acts.forEach((a, i) => {
    const y = top + i * rh;
    if (i % 2 === 0) s.addShape("rect", { x: MX, y, w: W - 2 * MX, h: rh, fill: { color: "F2F5EA" } });
    s.addText(a[0], { x: MX, y, w: labW - 0.1, h: rh, valign: "middle", color: C.text, fontSize: 9.5, fontFace: FONT });
    const bx = trackX + (a[1] / 100) * trackW, bw = Math.max((a[2] / 100) * trackW, 0.12);
    s.addShape("roundRect", { x: bx, y: y + 0.06, w: bw, h: rh - 0.12, rectRadius: 0.04, fill: { color: COL[a[3]] } });
  });
  // separadores de semestre
  for (let i = 1; i < 4; i++) {
    const x = trackX + (i / 4) * trackW;
    s.addShape("line", { x, y: top, w: 0, h: rh * acts.length, line: { color: "C9D2BB", width: 0.75, dashType: "dash" } });
  }
  // leyenda
  const ly = top + rh * acts.length + 0.15;
  const leg = [["Completado", C.sageDk], ["En curso (este semestre)", C.orange], ["Planeado", C.slate2]];
  let lx = MX;
  leg.forEach((l) => {
    s.addShape("roundRect", { x: lx, y: ly + 0.04, w: 0.28, h: 0.18, rectRadius: 0.03, fill: { color: l[1] } });
    s.addText(l[0], { x: lx + 0.34, y: ly, w: 2.6, h: 0.26, valign: "middle", color: C.textSoft, fontSize: 10.5, fontFace: FONT });
    lx += 0.42 + l[0].length * 0.085 + 0.3;
  });
  s.addText("+ retribución social cada semestre", { x: 9.5, y: ly, w: 3.3, h: 0.26, align: "right", valign: "middle", color: C.textSoft, fontSize: 10.5, italic: true, fontFace: FONT });
})();

// =====================================================================
// SLIDE 18 (14b) — Bibliografía
// =====================================================================
(function () {
  const s = contentSlide();
  kicker(s, "10", "Bibliografía general");
  title(s, "Referencias principales");
  subtitle(s, "Fuentes que sustentan el marco teórico y el estado del arte. La lista completa (83 referencias) está en el documento de tesis.", 1.6);
  const refs1 = [
    "Anthropic (2024). Introducing the Model Context Protocol (MCP).",
    "Hou, X., Zhao, Y., Wang, S. & Wang, H. (2025). Model Context Protocol (MCP): Landscape, security threats, and future research directions.",
    "Ray, P. P. (2025). A survey on Model Context Protocol: Architecture, state-of-the-art, challenges and future directions.",
    "Lewis, P. et al. (2020). Retrieval-Augmented Generation for knowledge-intensive NLP tasks. NeurIPS.",
    "Sui, Y. et al. (2024). Table meets LLM: Can large language models understand structured table data? ACM WSDM.",
    "Zhao, F. et al. (2025). Hybrid Querying over Relational Databases and Large Language Models. CIDR '25.",
    "Page, M. J. et al. (2021). The PRISMA 2020 statement: an updated guideline for reporting systematic reviews.",
  ];
  const refs2 = [
    "Kitchenham, B. & Charters, S. (2007). Guidelines for performing systematic literature reviews in software engineering.",
    "ISO (2019). ISO 9241-210: Human-centred design for interactive systems.",
    "Carrera-Rivera, A., Larrinaga, F. & Lasa, G. (2022). Context-awareness for the design of Smart product-service systems.",
    "Domínguez-García, R. O. et al. (2020). Sistema de monitoreo de temperatura y humedad en el Data Center de CUValles mediante IoT.",
    "Vallejo-Sánchez, D. et al. (2024). Desarrollo de una arquitectura IoT para monitoreo ambiental.",
    "Quiroz-Valdez, J. A. et al. (2024). Sistema de monitoreo IoT para la gestión inteligente de cultivos.",
    "Flores Quisbert, E. (2008). Agentes inteligentes: el siguiente paso en la inteligencia artificial.",
  ];
  function refRuns(list, start) {
    const runs = [];
    list.forEach((r, i) => {
      runs.push({ text: (start + i) + ".  ", options: { bold: true, color: C.brand, paraSpaceBefore: i ? 6 : 0 } });
      runs.push({ text: r + "", options: { color: C.text } });
      if (i < list.length - 1) runs.push({ text: "\n", options: {} });
    });
    return runs;
  }
  s.addText(refRuns(refs1, 1), { x: MX, y: 2.25, w: 6.1, h: 4.6, fontSize: 10, fontFace: FONT, valign: "top", lineSpacingMultiple: 1.04 });
  s.addText(refRuns(refs2, 8), { x: 6.95, y: 2.25, w: 5.85, h: 4.6, fontSize: 10, fontFace: FONT, valign: "top", lineSpacingMultiple: 1.04 });
})();

// =====================================================================
// SLIDE 19 (15) — Cierre
// =====================================================================
(function () {
  const s = bgSlide(A("Fondo2.jpg"));
  s.addImage({ path: A("LogoUdG.png"), x: 6.07, y: 0.7, w: 1.2, h: 1.2, sizing: { type: "contain", w: 1.2, h: 1.2 } });
  s.addText([{ text: "De dato técnico a " }, { text: "lenguaje que todos entienden", options: { color: C.sage } }], { x: 1.5, y: 2.1, w: 10.33, h: 1.3, align: "center", color: "FFFFFF", bold: true, fontSize: 34, fontFace: FONT, lineSpacingMultiple: 1.0 });
  s.addText("Una plataforma web + agente inteligente para la información ambiental de la Región Valles.", { x: 2, y: 3.5, w: 9.33, h: 0.6, align: "center", color: "FFFFFF", fontSize: 15, fontFace: FONT });
  // chips
  const chips = [["Avances 2.º semestre completos", true], ["Siguiente: arquitectura y prototipo funcional", false]];
  let cx = 3.0; const cy = 4.3;
  chips.forEach((c) => {
    const w = 0.3 + c[0].length * 0.092;
    s.addShape("roundRect", { x: cx, y: cy, w, h: 0.5, rectRadius: 0.25, fill: { color: c[1] ? C.sageDkr : "FFFFFF", transparency: c[1] ? 0 : 80 }, line: c[1] ? null : { color: "FFFFFF", width: 1 } });
    s.addText(c[0], { x: cx, y: cy, w, h: 0.5, align: "center", valign: "middle", color: "FFFFFF", bold: c[1], fontSize: 12, fontFace: FONT });
    cx += w + 0.25;
  });
  bubble(s, "leo", "¡Gracias por su atención!", { x: 2.6, y: 5.15, w: 3.6, h: 0.85 });
  bubble(s, "eco", "¿Tienen preguntas? Con gusto las respondo.", { x: 6.9, y: 5.15, w: 3.9, h: 0.85 });
  s.addText("Lic. Ignacio Andrade Salazar · Maestría en Ingeniería de Software · CUValles, UDG", { x: 1, y: 6.5, w: 11.33, h: 0.4, align: "center", color: "DFE6DA", fontSize: 12, fontFace: FONT });
})();

const OUT = path.resolve(__dirname, "..", "Avances_Tesis_2do_Semestre_RESPALDO.pptx");
pptx.writeFile({ fileName: OUT }).then(() => console.log("OK ->", OUT));
