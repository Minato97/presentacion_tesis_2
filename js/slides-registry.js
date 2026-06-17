/* =============================================================
   slides-registry.js — Registro global de diapositivas
   Cada archivo slides/slide-XX.js llama a DECK.register({...}).
   Se usa registro por JS (en vez de fetch) para que la
   presentación funcione abriendo index.html con doble clic
   (file://) sin necesidad de un servidor local.
   ============================================================= */
window.DECK = (function () {
  const slides = [];
  return {
    slides,
    register(slide) { slides.push(slide); }
  };
})();
