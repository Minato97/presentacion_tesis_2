# Ficha 08 — Estado del arte: hallazgos y brecha  ⏱️ ~50 s

## Qué decir
> "De los 21 estudios formulé cinco preguntas de investigación. El análisis arrojó tres hallazgos: primero, el **RAG es condición necesaria** para que las respuestas sean factualmente precisas; segundo, el **MCP** estandariza el acceso a datos IoT heterogéneos; y tercero, la **experiencia de usuario sigue siendo la asignatura pendiente** —es el área menos trabajada. De ahí la **brecha**: ningún trabajo combina simultáneamente un agente LLM, acceso a datos **edafológicos** vía MCP y un proceso de diseño centrado en el usuario. Esa convergencia, aplicada a la Región Valles, es mi contribución original."

## Preguntas de investigación (RQ) y estudios que las abordan
| RQ | Tema | n |
|---|---|---|
| RQ1 | LLM/agentes para interpretar datos ambientales | 17 |
| RQ2 | Integración de datos IoT heterogéneos vía MCP | 9 |
| RQ3 | **UCD** en monitoreo con IA conversacional | 14 |
| RQ4 | *Context-awareness* / personalización | 15 |
| RQ5 | Técnicas RAG para datos científicos | 13 |

> (algunos estudios responden más de una RQ; total = 21)

## Hallazgos (4 ejes de la síntesis)
1. **RAG = precisión.** LLM sin acceso estructurado a datos → respuestas fluidas pero imprecisas.
2. **MCP = integración.** Pan & Nipu (2025) y WeatherInfo_MCP demuestran su viabilidad.
3. **UX pendiente.** Pocos estudios prueban con usuarios reales (excepciones: co-diseño, MeteoChat).
4. **Conciencia del contexto.** Adaptar la respuesta a condiciones, hora y perfil del usuario.

## Brecha (memorizar)
**Nadie integra a la vez: agente LLM + datos edafológicos vía MCP + diseño centrado en el usuario.** → Hueco que llena este proyecto en la Región Valles.

## Posible pregunta
- *¿Cuál es tu aporte vs. Pan & Nipu?* → Ellos trabajan calidad del aire sin variables de **suelo** ni metodología de UX; yo sumo lo edafológico y el DCU.
