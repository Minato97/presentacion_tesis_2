# Ficha 11 — Elementos de software y hardware  ⏱️ ~50 s

## Qué decir
> "En cuanto a los elementos de software, el backend es PHP 8.2 con Laravel y autenticación JWT; la base de datos, MySQL; el frontend, Vue 3 con Vite, Pinia y Chart.js; la inteligencia conversacional, n8n más el servidor MCP y el LLM; y todo se despliega con Docker y Nginx. Del lado del hardware, cada nodo es un microcontrolador clase ESP32 que integra **doce sensores** en cuatro dominios: aire, radiación, clima y suelo. Lo importante es que cada sensor define umbrales bajo, medio y alto, que el sistema usa para clasificar las lecturas y para interpretarlas en los reportes."

## Software (stack)
| Capa | Tecnología |
|---|---|
| Backend / API | PHP 8.2 · Laravel 10 · tymon/jwt-auth · yajra/datatables |
| Base de datos | MySQL 8 |
| Frontend / SPA | Vue 3 · Vue Router · Pinia · Vite · Axios · Chart.js · pdfmake · Tailwind |
| IA conversacional | n8n · servidor MCP · LLM (Gemini/Groq) |
| Infraestructura | Docker · Docker Compose · Nginx · PHP-FPM |

## Hardware — 12 sensores en 4 dominios
- **Aire/clima:** DHT11 (temp/humedad), BMP280 (temp/presión), PMS5003 (partículas), MH-Z16 (CO₂).
- **Radiación:** GUVA (UV), GY-30/BH1750 (luz).
- **Clima:** pluviómetro WH-SP-RG, anemómetro WH-SP-WS01, veleta.
- **Edafológico (suelo):** JXBS-3001 **N**, **P**, **K** (RS485/Modbus).

> Cada sensor tiene umbrales `valor_bajo / valor_medio / valor_alto` → clasificación bajo/normal/elevado.

## Modelo de datos (resumen)
`areas_geograficas → estaciones → estaciones_sensores (armados) → muestras`; más `sensores`, `users`, `roles`, `estatus`. Cada **muestra** se asocia a un armado y a su `created_at` (permite agregaciones por semana/mes/año).

## Posible pregunta
- *¿Qué es un "armado"?* → La relación estación–sensor (`estaciones_sensores`): qué sensores están instalados en cada nodo.
