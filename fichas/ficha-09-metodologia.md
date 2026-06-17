# Ficha 09 — Metodología de investigación  ⏱️ ~55 s

## Qué decir
> "Como el producto final es un **artefacto de software**, adopté **Design Science Research (DSR)** como marco de investigación, en el modelo de seis fases de Peffers: identificar el problema, definir objetivos, diseño y desarrollo, demostración, evaluación y comunicación. Dentro del DSR anido tres metodologías: la **revisión sistemática con PICO y PRISMA** cubre las fases 1 y 2 —fundamenta problema y objetivos—; el **prototipado evolutivo** cubre la fase 3 —construyo en versiones: baja fidelidad, prototipo funcional y sistema final—; y el **diseño centrado en el usuario bajo ISO 9241-210** estructura la evaluación con usuarios reales en las fases 4 y 5. Así garantizo que el sistema no solo funcione, sino que sea útil y comprensible."

## DSR — 6 fases (Peffers et al., 2007)
1. Identificación del problema y motivación.
2. Definición de los objetivos de la solución.
3. Diseño y desarrollo.
4. Demostración.
5. Evaluación.
6. Comunicación.

## Tres metodologías anidadas
- **RSL (PICO + PRISMA)** → fases 1–2 (evidencia que justifica problema y objetivos).
- **Prototipado evolutivo** → fase 3. Tres etapas:
  1. Prototipo de **baja fidelidad** (bocetos, diagramas, flujos).
  2. Prototipo **funcional** (integración IoT–MCP–LLM operativa, primeras pruebas con usuarios).
  3. **Sistema final** (funciones completas + ajustes + documentación).
- **DCU / ISO 9241-210** → fases 4–5. Ciclo iterativo: comprender contexto → especificar requisitos → producir diseño → evaluar.

## Por qué prototipado evolutivo
Tecnologías nuevas (MCP/LLM) con comportamiento difícil de anticipar; usuarios de perfiles distintos; desarrollo por una sola persona → ciclos cortos de retroalimentación.

## Posible pregunta
- *¿Enfoque cuanti o cuali?* → Mixto: métricas técnicas (cobertura de RF, % de aciertos del agente) + evaluación de usabilidad (SUS) y comprensión con usuarios.
