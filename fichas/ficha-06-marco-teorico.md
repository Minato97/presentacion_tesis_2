# Ficha 06 — Marco teórico  ⏱️ ~50 s

## Qué decir
> "El marco teórico cubre los conceptos que sostienen la propuesta. Del **dominio**: monitoreo medioambiental y edafológico, e IoT con redes de sensores. De **inteligencia artificial**: los LLM o modelos de lenguaje de gran escala; los agentes inteligentes, que deciden qué herramienta usar; el **MCP**, protocolo introducido por Anthropic en 2024 que estandariza cómo el modelo accede a los datos; y RAG, la generación aumentada por recuperación, que hace que las respuestas se basen en datos reales. Finalmente, el diseño centrado en el usuario bajo la norma ISO 9241-210. Como base tecnológica: Laravel, Vue, MySQL, n8n y Docker."

## Conceptos clave (definición de bolsillo)
- **Monitoreo medioambiental y edafológico:** medición de variables de aire, clima y suelo.
- **IoT / redes de sensores:** dispositivos conectados que capturan y envían lecturas.
- **LLM (Large Language Model):** modelo de IA que entiende y genera lenguaje natural.
- **Agente inteligente:** sistema que percibe, razona y **decide acciones/herramientas** para cumplir un objetivo.
- **MCP (Model Context Protocol):** estándar **abierto de Anthropic (2024)** que conecta un LLM con fuentes de datos/herramientas de forma uniforme. Evita integraciones a medida por cada fuente.
- **RAG (Retrieval-Augmented Generation):** recupera información real y se la da al LLM antes de responder → menos "alucinaciones", más precisión factual.
- **DCU (Diseño Centrado en el Usuario) / ISO 9241-210:** proceso iterativo para que la interfaz sea comprensible y útil.

## Base tecnológica
Laravel (backend/API), Vue.js (SPA), MySQL (datos), n8n (orquestador del chat), Docker (despliegue).

## Posible pregunta
- *¿Diferencia entre RAG y MCP?* → RAG es la **técnica** (recuperar y aumentar el contexto); MCP es el **protocolo/estándar** que conecta el modelo con las herramientas que entregan esos datos.
