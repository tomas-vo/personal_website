# Portafolio de Tomás Venegas — Contexto del proyecto

Sitio web de portafolio personal, hecho en HTML, CSS y JavaScript puro (sin frameworks, sin build step). Se abre directamente abriendo `index.html` en el navegador.

## Sobre mí (fuente de verdad para el contenido)

- Tomás Gabriel Venegas Osses, 23 años (cumpleaños 23 de noviembre).
- Estudia Bachelor of Science in Software Development en BYU–Idaho (nov. 2024 – jun. 2028, en curso).
- Habla español, inglés (C2) y portugués (C2).
- Certificación Social Media Marketing de HubSpot Academy.
- Trabajo actual: Mentor / Onboarding Specialist remoto en MTC Utah (ago. 2025–presente).
- Experiencia previa: Ropería en Clínica Universidad de Los Andes (may.–ago. 2025); Asistente Regional en The Church of Jesus Christ of Latter-day Saints (may. 2023–abr. 2024).
- Fundador de Repuestolandia SpA (repuestolandia.cl): tienda Shopify de repuestos automotrices importados desde Brasil a Chile, con automatización 100% en n8n.
- Tesis: "Análisis Dinámico Computacional y Modelamiento Predictivo del Tiempo de Parada en la Secuencia de Collatz mediante Técnicas de Machine Learning" — dataset de 100.000 secuencias, modelo Random Forest, R² ≈ 0.25, MAE ≈ 30 pasos.

**No inventar datos nuevos sobre experiencia o proyectos sin preguntar primero.**

## Estructura de archivos

- `index.html` → estructura y contenido (con atributos `data-i18n`)
- `style.css` → todos los estilos
- `script.js` → traducciones, animaciones, lógica del sitio
- `profile.jpg` → foto de perfil (circular, en el hero)
- `repuestolandia-logo.png` → logo del proyecto Repuestolandia

No hay backend ni build step. Todo es estático.

## Sistema de idiomas (i18n)

El sitio soporta español, inglés, portugués y francés, seleccionables desde el header.

- Cada texto traducible en `index.html` tiene un atributo `data-i18n="clave"`.
- Las traducciones viven en el objeto `translations` al inicio de `script.js`, con una clave por idioma (`es`, `en`, `pt`, `fr`).
- **Regla importante:** si agregas o cambias un texto visible en el sitio, tiene que:
  1. Tener su `data-i18n="clave_nueva"` en el HTML.
  2. Tener esa misma clave con su traducción en los 4 idiomas dentro de `translations` en `script.js`.
- El idioma se guarda en `localStorage` bajo la clave `portfolio-lang` y se detecta automáticamente el idioma del navegador la primera vez.

## Guía de diseño

- **Estilo:** oscuro y minimalista, con animaciones sutiles tipo Apple (una sola animación protagonista, no efectos repetidos por todos lados).
- **Colores:**
  - Fondo: `#07070a` (secciones alternas usan `#101014`)
  - Texto principal: `#f2f1ed`
  - Texto secundario: `#98979c`
  - Acento (único, usar con moderación): violeta `#7c6ff2`
- **Tipografía:**
  - Titulares: Space Grotesk
  - Cuerpo: Inter
  - Ambas se cargan desde Google Fonts en el `<head>`
- **Animaciones:**
  - El hero tiene una animación protagonista: dibuja en vivo la trayectoria real del número 27 en la conjetura de Collatz (tema de la tesis), en un `<canvas>`. No duplicar este tipo de efecto en otras secciones.
  - El resto de las secciones usan un solo fade-in sutil al hacer scroll (`IntersectionObserver` + clase `.reveal` / `.is-visible`), aplicado a la sección completa, no a cada elemento individual.
  - Los contadores de estadísticas del proyecto de tesis (100.000 / 25% / MAE 30) animan con un conteo ascendente al entrar en pantalla.
  - Respetar `prefers-reduced-motion` (ya implementado en `style.css`).
  - Principio general: evitar el "kit genérico de IA" — nada de tarjetas SaaS idénticas con sombra gris, nada de fade-slide en cada tarjeta, nada de eyebrows en mayúsculas por defecto. Cualquier elemento nuevo debe sentirse deliberado, no un template.

## Convenciones de código

- HTML semántico, sin frameworks ni dependencias externas salvo Google Fonts.
- CSS con variables (`:root { --bg, --text, --accent, ... }`) definidas al inicio de `style.css` — reutilizar esas variables, no hardcodear colores nuevos.
- JavaScript vanilla (sin jQuery, sin librerías). Mantener las funciones organizadas por bloque (i18n, header/scroll, menú móvil, reveal, contador, canvas de Collatz), tal como están comentadas en `script.js`.
- Mobile-first no es literal, pero el sitio debe verse bien desde 360px de ancho — revisar los `@media` existentes en `style.css` antes de agregar nuevos breakpoints.

## Pendientes conocidos

- `profile.jpg` y `repuestolandia-logo.png` son placeholders temporales — deben reemplazarse por las imágenes reales manteniendo el mismo nombre de archivo.
- El logo y el nombre "Repuestolandia" en la sección de proyectos enlazan a https://repuestolandia.cl.

## Cómo pedir cambios (para Tomás, al usar Claude Code)

Al pedir agregar una sección, un proyecto nuevo o cambiar contenido, recordar:

- Actualizar los 4 idiomas en `script.js`, no solo español.
- Mantener la paleta de colores y tipografías definidas arriba.
- No agregar animaciones nuevas por defecto — preguntar primero si el cambio lo amerita, siguiendo el principio de "una animación protagonista, el resto discreto".
