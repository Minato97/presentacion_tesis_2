# Ficha 05 — Objetivos, alcance y limitaciones  ⏱️ ~55 s

## Qué decir
> "El objetivo general es **desarrollar y evaluar una plataforma web que integra un agente inteligente, mediante MCP y un LLM**, para facilitar el acceso, gestión y comprensión de los datos de los nodos IoT del SMMyE a usuarios con distintos niveles de conocimiento. De ahí se desprenden cinco objetivos específicos: documentar los requerimientos en una ERS; diseñar la arquitectura; implementar la plataforma y la API; implementar el servidor MCP con el chat conversacional; y evaluar la usabilidad. En cuanto al alcance, el sistema **recibe, almacena, visualiza e interpreta** datos; **no** controla hardware, **no** hace predicciones y **no** envía notificaciones externas."

## Objetivo general (completo)
Desarrollar y evaluar una plataforma web que integra un Agente Inteligente mediante el **Protocolo de Contexto para Modelos (MCP)** y un **Modelo de Lenguaje de Gran Escala (LLM)**, para facilitar el acceso, gestión y comprensión de los datos técnicos de los nodos IoT del SMMyE, verificando su efectividad con pruebas de usabilidad y comprensibilidad con usuarios de la Región Valles.

## Objetivos específicos
1. **OE1 – Requerimientos:** producir una ERS (funcionales y no funcionales) verificable.
2. **OE2 – Arquitectura:** componentes, modelo de datos, flujos con los nodos e interfaces (criterios: escalabilidad, seguridad, usabilidad).
3. **OE3 – Plataforma + API REST:** ingesta, almacenamiento y exposición de datos; visualización (tablas/tarjetas/gráficos) y módulo de administración. Meta: **100 % de los RF**.
4. **OE4 – Servidor MCP + chat:** conectar MCP a la API y a n8n/LLM. Meta: responder bien **≥ 85 %** de consultas predefinidas.
5. **OE5 – Evaluación:** SUS (Cuestionario de Usabilidad del Sistema) + comprensión. Metas: **SUS ≥ 70** y **≥ 80 %** de usuarios no técnicos interpreta bien la información.

## Alcance (sí incluye)
Recepción/almacenamiento, visualización, administración, consulta en lenguaje natural; cobertura inicial CUValles; único punto externo = la web.

## Limitaciones (no incluye)
Control/actuación sobre dispositivos; configuración/calibración remota de hardware; predicciones con ML (trabajo futuro); notificaciones por correo/SMS (solo alertas visuales); alta disponibilidad/redundancia (un solo servidor).

## Supuestos
Nodos operando y enviando datos; servidor con recursos para los contenedores Docker; acceso estable a la API de **Gemini**; conectividad suficiente; usuarios con navegador; datos previamente validados por el equipo técnico.

## Posible pregunta
- *¿Por qué SUS ≥ 70?* → Un puntaje SUS de 68 es el promedio; ≥ 70 indica usabilidad por encima de la media (aceptable/bueno).
