# Presentación — Avances de Tesis (2.º semestre) · SMMyE

Presentación en HTML para los avances de tesis de **Ignacio Andrade Salazar** —
Maestría en Ingeniería de Software, CUValles (UDG).

## ▶️ Cómo abrirla
**Doble clic en `index.html`** (se abre en tu navegador). No necesita internet ni instalar nada.

## 🎮 Controles
| Acción | Cómo |
|---|---|
| **Pantalla completa** | **Doble clic** en cualquier parte (o tecla `F`, o el botón ⛶) |
| Siguiente / anterior | `→` `Espacio` / `←` (o flechas táctiles / swipe) |
| Ir al inicio / final | `Inicio` / `Fin` |
| **Modo claro / oscuro** | Tecla `T` o el botón ◐ (se recuerda tu preferencia) |
| Saltar a una diapositiva | Clic en los puntos de la derecha |

> Consejo para presentar: pon pantalla completa (doble clic) **antes** de empezar.

## 🗂️ Estructura
```
Presentacion_Avances/
├── index.html              ← archivo principal (abre este)
├── css/
│   ├── theme.css           ← colores, modo claro/oscuro (paleta del sistema)
│   ├── slides.css          ← maquetación y componentes
│   ├── components.css      ← íconos, mascotas, globos, fondos, logos
│   └── animations.css      ← animaciones y transiciones
├── js/
│   ├── slides-registry.js  ← registro de diapositivas
│   ├── icons.js            ← set de íconos SVG (en vez de emojis)
│   ├── characters.js       ← mascotas Leo (león UDG) y EcoFlow + diálogos
│   └── main.js             ← navegación, pantalla completa, tema
├── assets/                 ← logos y fondos del sistema (UDG / CUValles)
│   ├── LogoUdG.png · udg.png
│   └── Fondo.jpg · Fondo2.jpg
├── slides/                 ← UNA diapositiva por archivo (15)
├── fichas/                 ← UNA ficha de estudio por diapositiva (guion + datos)
└── README.md
```

## 🦁🤖 Mascotas (Leo y EcoFlow)
- **Leo** — el león de la UDG (con birrete), guía la presentación.
- **EcoFlow** — el asistente ambiental del SMMyE, explica el agente inteligente.
- Aparecen con globos de diálogo en portada, agenda, problema, arquitectura y cierre.
- Para cambiar un diálogo: edita el texto dentro de `character('eco'|'leo', 'TEXTO', {...})` en el archivo de la diapositiva.
- Son **SVG dibujados por código** (`js/characters.js`); puedes ajustar colores ahí.

## ✏️ Cómo editar
- **Texto de una diapositiva:** abre su archivo en `slides/` y edita el HTML dentro de `html: \`...\``.
- **Colores / tema:** `css/theme.css` (paleta tomada de `quasar.variables.scss`: verde `#aac27f`, slate `#3f4f59`, naranja `#f26b1d`).
- **Agregar una diapositiva:** crea `slides/slide-16-....js` con `DECK.register({...})` y enlázala en `index.html`.

## ⚠️ Pendientes de personalizar
- **Diapositiva 13 (Retribución social):** sustituir el estatus por el real / adjuntar constancia.
- **Diapositiva 14 (Cronograma):** es **genérico**; ajústalo con fechas reales junto a tu director.

## 📚 Fichas de estudio
En `fichas/` hay una ficha por diapositiva con: **lo que decir** (guion ~tiempo), **datos clave** y **posibles preguntas** del jurado. Úsalas para repasar; no se proyectan.

## ⏱️ Tiempo objetivo
15 diapositivas en **10 minutos** (~40 s c/u). Las de tarjetas se pasan rápido.
