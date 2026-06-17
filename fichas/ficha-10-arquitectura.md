# Ficha 10 — Avances de la propuesta: arquitectura  ⏱️ ~55 s

## Qué decir
> "El avance concreto de la propuesta es la arquitectura, organizada en **cinco capas desacopladas**. La capa de **adquisición** son los nodos IoT tipo ESP32, identificados por su MAC, que envían sus muestras con un POST autenticado por JWT. La capa de **lógica de negocio** es la API en Laravel, que autentica, ingiere los datos, hace el CRUD y calcula estadísticas. La capa de **datos** es MySQL. La capa de **presentación** es la SPA en Vue, con monitoreo en tiempo real, estadísticas, administración y reportes PDF. Y la capa de **inteligencia conversacional**, EcoFlow, donde n8n orquesta el LLM y el servidor MCP, que accede a la API **solo en modo lectura**. El desacople favorece mantenimiento, escalabilidad y separación de responsabilidades."

## Las 5 capas
1. **Adquisición (HW IoT):** nodos ESP32 con sensores de aire/clima/suelo; identificados por MAC.
2. **API / Lógica de negocio:** Laravel 10 (PHP 8.2), JWT, controllers + services.
3. **Datos:** MySQL 8.
4. **Presentación (SPA):** Vue 3 + Pinia + Vite. Monitoreo, estadísticas, administración, reportes.
5. **Inteligencia conversacional (EcoFlow):** n8n + servidor MCP + LLM en la nube.

## Flujo general
Nodo → `POST /api/guardarMuestras` (JWT) → Laravel → MySQL.
SPA → `REST /api` (Axios + JWT) → Laravel.
Chat: SPA → n8n → LLM → MCP → API (lectura) → respuesta en lenguaje natural.

## Herramientas MCP expuestas (solo lectura)
`get_sensores`, `get_estaciones`, `get_roles`, `get_muestras_actuales`.

## Posible pregunta
- *¿Por qué MCP solo lectura?* → Seguridad: el agente nunca modifica datos ni hardware; solo consulta (RNF-09).
- *¿Qué LLM?* → En la nube vía n8n (Gemini de Google en la versión actual del proyecto).
