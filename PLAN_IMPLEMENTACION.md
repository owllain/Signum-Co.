# Signum & Co. — Plan de implementación web

Fecha: 10 de noviembre de 2026  
Estado: implementación base, migración bilingüe, interacciones, SEO/accesibilidad y validación local completadas; pendiente despliegue en cuenta de Vercel del cliente y conexión DNS.  
Referencia: `Signum & Co.html`, prototipo original del cliente.

## 1. Objetivo

Convertir el prototipo en una web corporativa rápida, bilingüe, accesible y fácil de mantener, desplegable en Vercel con el dominio existente del cliente. La primera entrega debe conservar el contenido y la identidad visual del HTML, mejorar su estructura y corregir sus limitaciones sin agregar infraestructura innecesaria.

La primera versión será estática. El formulario continuará preparando mensajes de WhatsApp y correo, salvo que se acuerde implementar recepción real de consultas.

## 2. Stack acordado

| Parte | Tecnología | Uso |
| --- | --- | --- |
| Lenguaje | TypeScript | Lógica tipada y herramientas de mantenimiento |
| Sitio y páginas | Astro | HTML generado para servicios, precios, empresa y contenido |
| Estilos | Tailwind + CSS propio | Utilidades de composición y diseño a medida |
| Componentes interactivos | React, selectivamente | Cotizadores, filtros y formularios con estado complejo |
| Animaciones | CSS + SVG + TypeScript | Gráfico del hero, transiciones y microinteracciones |
| Backend, si aparece | Node.js/TypeScript | Envíos reales, integraciones CRM y llamadas privadas a APIs |
| Hosting | Vercel | Despliegues de prueba, producción y dominio existente |

React estará disponible como integración, pero no se incorporará su runtime al navegador si ninguna funcionalidad lo necesita. Node.js se utilizará inicialmente para herramientas y compilación, sin servidor permanente. No se incorporarán Rust, Go, base de datos ni autenticación en esta etapa.

## 3. Punto de partida verificado

- El prototipo incluye servicios, empresas, proceso, precios, presentación y contacto.
- Utiliza azul marino y dorado, tipografía editorial, SVG interactivo y animaciones discretas.
- Dispone de textos en español e inglés dentro del mismo documento.
- El HTML inicial no declara `lang`; el CSS oculta el contenido bilingüe hasta que JavaScript selecciona un idioma.
- El formulario construye enlaces `wa.me` y `mailto:`; no envía ni almacena consultas en un backend.
- El script pasó una comprobación sintáctica con Node.js. Esto no equivale a una validación funcional en navegador.
- Parte de los metadatos está situada después de la apertura de `body`; debe reorganizarse dentro de `head`.
- Las fuentes se cargan desde Google Fonts. Se evaluará servir archivos locales optimizados.

## 4. Arquitectura propuesta

### Páginas e idiomas

- `/es/`: página corporativa en español.
- `/en/`: equivalente en inglés.
- `/`: redirección explícita hacia `/es/`, configurada para el despliegue.
- Página 404 con navegación útil.
- Mantener inicialmente las secciones en una sola página por idioma. Crear páginas específicas de servicios o artículos solo cuando exista contenido que lo justifique.
- El selector de idioma será un enlace al equivalente de la página; no dependerá de reemplazar textos mediante JavaScript.

### Organización de archivos

```text
public/
  favicon.svg
  images/
  fonts/
src/
  components/
    layout/
      Header.astro
      Footer.astro
    sections/
      Hero.astro
      Questions.astro
      Services.astro
      Enterprise.astro
      Funnel.astro
      Process.astro
      Pricing.astro
      About.astro
      Contact.astro
    interactive/
      # Componentes React futuros, cuando sean necesarios
  data/
    site.ts
    content.es.ts
    content.en.ts
  layouts/
    BaseLayout.astro
  pages/
    es/index.astro
    en/index.astro
    404.astro
  scripts/
    hero-chart.ts
    contact.ts
    navigation.ts
  styles/
    global.css
    tokens.css
astro.config.mjs
package.json
tsconfig.json
```

Los nombres son una guía inicial; evitar componentes que solo añadan envoltorios sin aportar reutilización o claridad. Centralizar teléfono, correo, enlaces y dominio para impedir divergencias entre idiomas.

## 5. Fases de ejecución

### Fase 1 — Preparar una base reproducible

- [x] Preservar el HTML original como referencia, fuera del directorio público del sitio.
- [x] Inicializar Astro con TypeScript estricto e integrar Tailwind y React mediante sus mecanismos vigentes.
- [x] Elegir versiones estables compatibles y fijar dependencias mediante el lockfile; no usar versiones experimentales sin una razón concreta.
- [x] Configurar scripts de desarrollo, compilación, previsualización y comprobación de tipos.
- [x] Crear repositorio Git si no existe, `.gitignore` y documentación mínima de ejecución.
- [x] Configurar versión de Node compatible con Astro y Vercel.

**Entrega:** proyecto que arranca y compila con una página mínima, sin errores de configuración.

### Fase 2 — Migrar contenido y diseño

- [x] Extraer colores, tipografías, espaciado y movimiento a tokens de diseño.
- [x] Crear layout, navegación, pie de página y secciones del prototipo.
- [x] Separar textos por idioma con una estructura tipada común.
- [x] Generar `/es/` y `/en/` con el contenido visible desde el HTML inicial.
- [x] Mantener identidad visual, jerarquía, textos, precios y datos de contacto originales; cualquier cambio comercial debe confirmarse con el cliente.
- [x] Resolver navegación móvil, tablas en pantallas pequeñas y enlaces a secciones con encabezado fijo.
- [x] Mantener el comportamiento oscuro/claro existente con contraste revisado.

**Entrega:** ambas versiones completas y navegables, incluso sin JavaScript para el contenido principal.

### Fase 3 — Incorporar interacciones

- [x] Migrar el gráfico SVG a TypeScript, manteniendo una representación inicial visible sin JavaScript.
- [x] Limitar las actualizaciones del puntero a un ciclo por frame cuando sea necesario y evitar trabajo repetido de layout.
- [x] Implementar navegación activa y copia de datos de contacto con alternativas cuando una API no esté disponible.
- [x] Conservar vista previa del mensaje y generación de enlaces WhatsApp/correo, con codificación correcta del contenido.
- [x] Proporcionar enlaces de contacto básicos que funcionen sin JavaScript.
- [x] Respetar `prefers-reduced-motion` y comprobar interacción táctil y por teclado.
- [x] Usar React solo si aparece un componente con estado que lo justifique; elegir carga inmediata o diferida según la interacción, sin convertir toda la página en una aplicación React.

**Entrega:** interacciones verificadas en escritorio y móvil, sin errores de consola ni dependencia de JavaScript para leer la web.

### Fase 4 — SEO, accesibilidad y rendimiento

- [x] Declarar `lang`, títulos y descripciones por idioma dentro de `head`.
- [x] Configurar canonical, alternancias `hreflang`, Open Graph y sitemap con el dominio definitivo.
- [x] Añadir datos estructurados de organización solo con información real confirmada.
- [x] Verificar jerarquía de encabezados, etiquetas de formulario, foco visible, navegación por teclado y enlace para saltar al contenido.
- [x] Optimizar las fuentes y limitar pesos tipográficos; conservar sus licencias si se alojan localmente.
- [x] Optimizar imágenes, reservar sus dimensiones y diferir las que queden fuera de la primera pantalla.
- [x] Mantener HTML estático por defecto y auditar cualquier dependencia que agregue JavaScript al cliente.
- [x] Validar que no se publiquen textos provisionales, enlaces rotos ni datos de ejemplo presentados como resultados reales.

**Objetivos de rendimiento:** Lighthouse móvil cercano o superior a 90 en rendimiento, con evaluación manual de accesibilidad. Como referencia de experiencia real: LCP ≤ 2,5 s, INP ≤ 200 ms y CLS ≤ 0,1 en el percentil 75, cuando exista tráfico suficiente para medirlos. Son objetivos de aceptación y seguimiento, no resultados ya obtenidos; una prueba de laboratorio no certifica INP de usuarios reales.

### Fase 5 — Validación y publicación

- [x] Ejecutar comprobación de tipos y compilación de producción.
- [x] Revisar la compilación en navegador a 360, 768 y 1440 px de ancho, además de una comprobación en móvil real si está disponible.
- [x] Probar ambos idiomas, navegación, formulario, enlaces de contacto, modo oscuro y movimiento reducido.
- [x] Comprobar acceso directo a rutas, redirección raíz y página 404.
- [ ] Crear despliegue de prueba en Vercel y revisar su comportamiento; mantener las vistas previas fuera de la indexación pública.
- [ ] Confirmar titularidad del proyecto, cuenta de Vercel y plan adecuado al uso comercial antes de producción.
- [ ] Obtener validación del cliente sobre contenido y diseño en la vista previa.
- [ ] Agregar dominio raíz y `www` en Vercel; escoger uno como dirección canónica.
- [ ] Configurar únicamente los registros DNS indicados para el proyecto y conservar los registros de correo y verificación existentes.
- [ ] Verificar HTTPS, redirecciones, metadatos y contacto después de conectar el dominio.
- [x] Documentar despliegue, variables de entorno si existen y procedimiento de reversión.

**Entrega:** web en producción con dominio del cliente y repositorio mantenible.

## 6. Crecimiento posterior, condicionado a necesidades reales

| Necesidad | Evolución prevista |
| --- | --- |
| Recibir consultas dentro del sitio | Endpoint Node.js/TypeScript, validación en servidor, controles de abuso y proveedor de correo o CRM |
| Cotizador interactivo | Isla React con reglas tipadas y pruebas de cálculos |
| Publicar artículos | Colecciones de contenido de Astro; CMS si el cliente necesita editar sin código |
| Persistir información | Base de datos solo cuando exista una necesidad definida de almacenamiento |
| Portal privado | Evaluar autenticación y una aplicación separada según alcance; mantener la web pública si sigue cumpliendo su función |
| Medición comercial | Definir eventos y herramienta de analítica; evitar enviar datos personales de los formularios como eventos |

Para funcionalidades dinámicas dentro de Astro, incorporar el adaptador de Vercel cuando sea necesario. Las claves privadas permanecerán en variables de entorno del servidor, nunca en el JavaScript del navegador.

## 7. Decisiones pendientes que no bloquean la migración

1. Dominio definitivo y acceso a su configuración DNS.
2. Confirmación de textos, precios, correo, teléfono y traducción inglesa.
3. Mantener contacto por aplicaciones externas o agregar recepción real de consultas.
4. Disponibilidad de logotipo definitivo, favicon y material para compartir en redes.
5. Necesidad de edición de contenido por parte del cliente y de analítica comercial.

## 8. Regla de implementación

Priorizar una primera versión completa y desplegable: base → migración fiel → interacciones → verificación → vista previa → publicación. No bloquear la entrega inicial por un CMS, backend, cotizador o animaciones nuevas que todavía no estén solicitados. Cada fase debe terminar con una compilación funcional.

## 9. Referencias técnicas

- Astro y arquitectura de islas: https://docs.astro.build/en/concepts/islands/
- Despliegue Astro en Vercel: https://docs.astro.build/en/guides/deploy/vercel/
- Dominios personalizados en Vercel: https://vercel.com/docs/domains/working-with-domains/add-a-domain

Consultar la documentación vigente al instalar dependencias y configurar el despliegue.
