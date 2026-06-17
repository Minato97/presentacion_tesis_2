# Ficha 12 — Análisis de requerimientos  ⏱️ ~50 s

## Qué decir
> "Como parte del análisis identifiqué **14 requerimientos funcionales y 9 no funcionales**, organizados en siete módulos. Entre los funcionales: recibir y almacenar las muestras de los nodos, el monitoreo en tiempo real con clasificación por umbrales, las estadísticas y comparativas entre nodos, y la consulta en lenguaje natural con el agente. Entre los no funcionales: la API protegida con JWT, el control de acceso por roles —administrador, normal e invitado—, la interfaz responsiva de móvil hasta 4K, y que la IA acceda a los datos solo vía MCP en modo lectura. Cada requerimiento está trazado a su componente en una matriz de trazabilidad que va en anexos."

## Funcionales (14) — los que más se preguntan
- RF-01/02 Autenticar usuarios y **estaciones** (JWT).
- RF-03 Recibir y almacenar muestras.
- RF-04…07 CRUD de áreas, sensores, estaciones y **armados**.
- RF-08 Monitoreo en tiempo real con umbrales.
- RF-09 Estadísticas históricas (semana/mes/año).
- RF-10 Comparativa entre nodos de un área.
- RF-11 Reportes PDF con interpretación.
- RF-12 Administrar usuarios y roles.
- RF-13 Portal de **invitado** (solo lectura).
- RF-14 Consulta en lenguaje natural (LLM + MCP).

## No funcionales (9)
- RNF-01 JWT · RNF-02 roles (Admin/Normal/Invitado) · RNF-03 responsiva (móvil→4K) · RNF-04 paginación server-side · RNF-05 despliegue con Docker · RNF-06 carga optimizada (lazy load) · RNF-07 disponibilidad para ingesta · RNF-08 mantenibilidad (por capas) · RNF-09 IA solo lectura vía MCP.

## Trazabilidad (idea)
Matriz requerimiento ↔ componente (Nodo IoT / API / MySQL / SPA / n8n-MCP-LLM). Detalle completo en **Anexos A y B**.

## Posible pregunta
- *¿Cómo verificas que se cumplen?* → RF: con cobertura del 100 % (OE3). El agente: ≥85 % de aciertos (OE4). RNF: pruebas técnicas y de usabilidad (OE5).
