# Signum & Co. — Componentes y recomendaciones de uso

Investigación: 10 de noviembre de 2026.  
Alcance: selección técnica y visual; no se instalaron dependencias ni se modificó la web.  
Complementa `PLAN_IMPLEMENTACION.md` y `PLAN_ESCALABILIDAD_UX.md`.

> **Actualización del 11 de noviembre de 2026:** la sección 10 documenta los dos packs de imágenes, su estado local y la implementación propuesta sobre la estructura multipágina actual. Las secciones 1–9 conservan la investigación original; para ubicaciones de imágenes y componentes existentes prevalece la sección 10.

## 1. Decisión recomendada

Construir una experiencia editorial propia sobre Astro, usando bibliotecas para resolver interacciones concretas. La selección inicial es **Lucide para iconos**, **shadcn/ui para futuras islas React complejas** y **un único recurso visual de Magic UI si mejora la explicación de un servicio**. Embla y Motion quedan condicionados a una necesidad real. Starwind es una alternativa nativa de Astro que merece una prueba aislada antes de adoptarla.

El nivel profesional debe percibirse en la claridad comercial, la calidad de las transiciones, la accesibilidad y la velocidad. No en la cantidad de efectos instalados. El gráfico SVG propio del hero ya puede funcionar como firma visual de Signum.

### Base local observada

El proyecto ya contiene componentes Astro de layout y secciones. `package.json` declara Astro `^5.4.0`, React `^19.0.0`, `@astrojs/react` `^4.2.0`, Tailwind `^4.0.0` y TypeScript `^5.7.3`. Son rangos declarados, no una certificación de las versiones resueltas en el lockfile. `Hero.astro` precalcula la geometría del gráfico para mostrarla en el HTML inicial.

La investigación revisó documentación, repositorios y datos de licencia publicados. No se ejecutaron demos de las bibliotecas ni se midió su peso dentro de este proyecto. Las prioridades y costes relativos siguientes son recomendaciones de integración, no benchmarks.

## 2. Catálogo comparativo

| Recurso | Encaje técnico | Valor para Signum | Licencia/condición observada | Decisión |
| --- | --- | --- | --- | --- |
| [Lucide](https://lucide.dev/guide/astro) · [repositorio](https://github.com/lucide-icons/lucide) | Componentes SVG para Astro y React | Iconos consistentes de servicios, navegación y acciones | ISC; el archivo también conserva MIT para iconos derivados de Feather | **Adoptar primero**, con imports individuales |
| [shadcn/ui](https://ui.shadcn.com/docs/installation/astro) · [repositorio](https://github.com/shadcn-ui/ui) | Fuente de componentes React adaptable; guía oficial para Astro | Dialog, Sheet, Tabs, campos y controles para diagnóstico | MIT en el repositorio | **Base preferida para islas React**, no para envolver toda la página |
| [Magic UI](https://magicui.design/docs) · [repositorio](https://github.com/magicuidesign/magicui) | Componentes React; algunos ejemplos incluyen dependencias de Next.js | Diagrama de integraciones, métricas y fondos SVG discretos | MIT en repositorio público; productos Pro separados | **Elegir uno o dos componentes**, no una colección completa |
| [Embla Carousel](https://www.embla-carousel.com/) · [repositorio](https://github.com/davidjerleke/embla-carousel) | Núcleo independiente de framework y wrapper React | Casos o testimonios navegables en móvil | MIT | **Condicional** a tener contenido suficiente |
| [Motion](https://motion.dev/) · [repositorio](https://github.com/motiondivision/motion) | Animación para JavaScript y React | Transiciones entre pasos o estados de una isla | MIT para la biblioteca; no implica acceso a Motion+ | **Condicional**; CSS primero |
| [Starwind UI](https://starwind.dev/docs/components/) · [repositorio](https://github.com/starwind-ui/starwind-ui) | Componentes para Astro y React con runtime compartido | Formularios, acordeones y diálogos sin convertir la página a React | Repositorio actual declara MIT; existe discrepancia con una página Pro que menciona GPL-3.0 para componentes gratuitos | **Piloto**, fijando versión y licencia exactas |
| [Accessible Astro Components](https://accessible-astro.incluud.dev/components/overview/) · [repositorio](https://github.com/incluud/accessible-astro-components) | Componentes propios de Astro | Referencia de acordeones e interacciones con teclado/ARIA | Licencia exacta pendiente de comprobar en la versión seleccionada | **Referencia y alternativa**, no aprobada todavía como dependencia |
| [React Bits](https://reactbits.dev/) · [repositorio](https://github.com/DavidHDev/react-bits) | Componentes React, variantes TypeScript/CSS/Tailwind | Un acento visual puntual, como entrada de texto | MIT + Commons Clause; no es MIT sin restricciones ni open source permisivo equivalente | **Opcional**, fuera de la selección OSS principal |

No instalar shadcn, Starwind y Accessible Astro simultáneamente para resolver los mismos controles. Elegir una implementación por responsabilidad.

## 3. Componentes concretos y dónde aportan

### 3.1 Lucide — vocabulario visual consistente

Usar iconos SVG para acciones, categorías de servicio y pequeñas leyendas. En Astro se renderizan como SVG inline; no hace falta hidratar React para mostrar un icono. La documentación actual distingue nombres de paquetes entre generaciones: consultar el paquete Astro vigente y su compatibilidad antes de instalarlo; no mezclar recetas antiguas y nuevas.

**Aplicación propuesta:** flecha en CTA, iconos de datos/medición/automatización y controles de tema. Tamaños de 18–24 px en UI, grosor uniforme y color heredado de los tokens. Iconos decorativos ocultos a tecnologías asistivas; botones con nombre accesible. Los logotipos comerciales no pertenecen a este catálogo.

Fuentes: [guía Astro](https://lucide.dev/guide/astro), [licencia completa](https://github.com/lucide-icons/lucide/blob/main/LICENSE).

### 3.2 shadcn/ui — controles robustos para el autodiagnóstico

**Seleccionar:** Field/Input/Label, Radio Group, Checkbox, Progress y, solo si el flujo lo requiere, Dialog o Sheet. Tabs tiene sentido cuando cambia una vista de una herramienta; para enlaces a servicios o públicos diferentes convienen enlaces HTML.

**Aplicación propuesta:** `DiagnosticWizard.tsx`, una isla que pregunta tipo de negocio, situación actual y objetivo; muestra una recomendación orientativa y prepara un mensaje de contacto. Mantener el estado del flujo dentro de una misma isla.

No instalar componentes de dashboard, calendarios o tablas avanzadas solo por tener un catálogo disponible. Para el contacto actual, Astro y controles nativos siguen siendo suficientes. El código copiado pasa a ser responsabilidad del proyecto: revisar cambios y accesibilidad al personalizarlo.

Fuente: [instalación en Astro](https://ui.shadcn.com/docs/installation/astro), [repositorio y licencia](https://github.com/shadcn-ui/ui).

### 3.3 Magic UI — una explicación visual memorable

| Componente | Uso propuesto | Adaptación necesaria |
| --- | --- | --- |
| [Animated Beam](https://magicui.design/docs/components/animated-beam) | Explicar cómo fuentes de datos alimentan una plataforma y un reporte | Texto y estructura disponibles sin animación; líneas doradas discretas; alternativa estática en móvil/movimiento reducido |
| [Number Ticker](https://magicui.design/docs/components/number-ticker) | Animar una cifra real de un caso al entrar en pantalla | Valor final visible en HTML; no anunciar cada frame al lector de pantalla; una sola ejecución |
| Grid Pattern / Dot Pattern | Añadir textura mínima a una sección técnica | Si es solo SVG estático, adaptarlo a Astro sin runtime React y preservando licencia |

**Elección preferida:** un diagrama de integraciones para Enterprise. No sumarlo a todos los efectos del hero. El catálogo público contiene componentes con dependencias como `next-themes`; revisar el código y sustituir esas dependencias por el tema del proyecto cuando corresponda. Un ejemplo para Next.js no es automáticamente listo para Astro.

Fuente adicional: [registro de componentes y dependencias](https://github.com/magicuidesign/magicui/blob/main/registry.json). El MIT del repositorio público no cubre por extensión los bloques Pro.

### 3.4 Embla — casos y testimonios, si hay material

Usarlo para una colección real de casos o testimonios, preferentemente con controles manuales. Con uno o dos casos, mantener una composición estática. Su núcleo puede integrarse con un script Astro; no requiere React si el resto del bloque no tiene estado React.

Dar botones anterior/siguiente con etiquetas, estado de posición comprensible y tarjetas con altura estable. Probar teclado, foco, swipe y movimiento reducido. No asumir que una biblioteca de carrusel resuelve por sí sola toda la accesibilidad del resultado. Evitar autoplay; mostrar el contenido como lista útil sin JavaScript.

Fuente: [repositorio](https://github.com/davidjerleke/embla-carousel).

### 3.5 Motion — animación de estados, no decoración permanente

Reservarlo para cambios de paso del autodiagnóstico, expansión coordinada o transiciones de layout que se vuelvan difíciles con CSS. Elegir su API JavaScript si no hay React en ese bloque. En React, evaluar `LazyMotion` y cargar únicamente las capacidades necesarias.

No importar a la vez Motion y otra biblioteca para resolver el mismo efecto. Al desmontar una isla o cambiar de página, limpiar listeners y animaciones. La ausencia de JavaScript o la preferencia de movimiento reducido debe dejar contenido visible y funcional.

Fuentes: [repositorio MIT](https://github.com/motiondivision/motion), [reducción del bundle](https://motion.dev/docs/react-reduce-bundle-size).

### 3.6 Starwind y Accessible Astro — alternativas nativas

Starwind ofrece componentes copiables para Astro y otros frameworks; no equivale a cero JavaScript, porque tiene comportamiento mediante runtime. Probar un Accordion o Dialog aislado, comprobando Tailwind 4, tema, foco y rutas bilingües antes de adoptarlo.

**Discrepancia de licencia detectada:** el [repositorio actual](https://github.com/starwind-ui/starwind-ui) identifica MIT, mientras [la licencia Pro](https://pro.starwind.dev/license/) afirma GPL-3.0 para componentes gratuitos. No generalizar una etiqueta a todos los paquetes, versiones o bloques. Registrar la licencia incluida en el archivo/versión realmente incorporado y aclarar cualquier contradicción aplicable antes de distribuirlo.

Accessible Astro es útil para revisar patrones de teclado y semántica; su [Accordion](https://accessible-astro.incluud.dev/components/accordion/) es una referencia concreta. La licencia no quedó confirmada en esta revisión: verificarla antes de copiar código o instalarlo. Una FAQ sencilla puede resolverse con `details`/`summary` propios.

### 3.7 React Bits — uso selectivo y condiciones diferentes

[Split Text](https://reactbits.dev/text-animations/split-text) puede dar una entrada elegante a un título. Para Signum preferir una aparición breve por palabras, sin ocultar el H1 inicial ni duplicar su lectura accesible. Antes de incorporarlo, inspeccionar las dependencias de la variante elegida; el tamaño del efecto no puede deducirse de su apariencia.

El [archivo de licencia](https://github.com/DavidHDev/react-bits/blob/main/LICENSE.md) permite uso dentro de sitios/productos, incluido comercial, pero restringe venta, sublicencia o redistribución de los componentes como tales. Es una opción de código disponible con condiciones, separada de la selección permisiva. React Bits Pro requiere su licencia propia: no asumir que el repositorio gratuito concede acceso a bloques Pro.

Para esta primera mejora, CSS propio ofrece una alternativa suficiente al efecto de texto. Evitar fondos WebGL, cursores personalizados y animaciones permanentes que compitan con el mensaje comercial.

## 4. Mapa de aplicación a la web actual

P0 = valor inmediato; P1 = siguiente iteración; P2 = requiere contenido o alcance adicional. Los archivos nuevos son propuestas, no implementaciones existentes.

| Área / archivo | Componente propuesto | Tecnología recomendada | Prioridad | Resultado esperado |
| --- | --- | --- | --- | --- |
| `layout/Header.astro` | Navegación móvil y controles ES/EN/tema refinados | Astro + TS; Lucide | P0 | Orientación clara sin una isla global |
| `sections/Hero.astro` | Conservar el gráfico señal/ruido y mejorar su respuesta táctil | SVG precalculado + TS + CSS | P0 | Identidad propia y primera carga útil |
| `AudienceLinks.astro` nuevo | Enlaces «Negocios» / «Empresas» | Astro | P0 | Dirigir cada público a su contenido sin ocultar servicios |
| `sections/Services.astro` | Filas editoriales con CTA contextual e iconos | Astro + Lucide | P0 | Convertir interés por un servicio en contacto específico |
| `sections/Enterprise.astro` | Diagrama de integraciones | SVG propio; Animated Beam como alternativa | P1 | Explicar el servicio técnico de forma concreta |
| `sections/Process.astro` | Secuencia y entregables de cada etapa | Astro + CSS | P0 | Hacer comprensible cómo se trabaja |
| `sections/Pricing.astro` | Comparación de modalidades y alcance | Tabla HTML / layout responsive propio | P0 | Facilitar elección sin ocultar condiciones en tooltips |
| `FAQ.astro` nuevo | Preguntas sobre alcance, tiempos y contratación | `details`/`summary`; alternativa Astro evaluada | P1 | Resolver objeciones sin sumar React |
| `CaseStudies.astro` nuevo | Evidencia: problema, intervención, resultado | Astro; Embla solo si se necesita carrusel | P2 | Demostrar capacidad con casos reales |
| `DiagnosticWizard.tsx` nuevo | Autodiagnóstico orientativo | React + shadcn; Motion opcional | P2 | Mostrar capacidad interactiva y cualificar consultas |
| `sections/Contact.astro` | Tema preseleccionado, etiquetas y estados claros | Astro + TS | P0 | Reducir esfuerzo para iniciar conversación |

No convertir todas las secciones en tarjetas bento: el plan UX existente prioriza filas editoriales. Un módulo visual aislado puede contrastar con esa estructura, pero no debe reemplazarla indiscriminadamente.

## 5. Cómo integrarlos sin perder las ventajas de Astro

### Reglas de hidratación

| Forma | Uso | Evitar |
| --- | --- | --- |
| Astro sin isla | Contenido, SVG, iconos, enlaces y FAQ nativa | Hidratar por costumbre |
| React sin directiva `client:*` | Renderizado estático de un componente compatible | Esperar que hooks o eventos funcionen en el navegador |
| `client:load` | Interacción prioritaria visible desde el inicio | Aplicarlo a cada sección |
| `client:visible` | Herramienta situada más abajo en la página | Controles que deben responder antes de entrar en viewport |
| `client:idle` | Interacción secundaria no urgente | Menús o controles críticos que podrían quedar temporalmente inactivos |
| `client:only="react"` | Excepción para código incompatible con renderizado de servidor | Contenido comercial o SEO que desaparecería del HTML inicial |

Ejemplo conceptual para una herramienta debajo del contenido principal:

```astro
---
import DiagnosticWizard from '../components/interactive/DiagnosticWizard';
import type { Locale } from '../data/site'; // adaptar al tipo real del proyecto
const locale = Astro.currentLocale as Locale;
---

<section aria-labelledby="diagnostic-title">
  <h2 id="diagnostic-title">Encuentre su siguiente paso</h2>
  <DiagnosticWizard client:visible locale={locale} />
  <a href="#contacto">Prefiero conversar con el equipo</a>
</section>
```

El ejemplo ilustra la frontera de hidratación; no es código listo para copiar: resolver idioma y textos con la API real de `src/data/site.ts` y traducir también el encabezado/enlace. El componente debe producir HTML inicial coherente, recibir props serializables y evitar acceso a `window` durante el render de servidor.

Fuente: [directivas de Astro](https://docs.astro.build/en/reference/directives-reference/).

### Código compartido y estilo

- Mantener tokens de color, espacio, radio, tipografía y movimiento comunes a Astro y React.
- Adaptar las clases copiadas a la marca; no importar una hoja global que cambie todos los botones o encabezados.
- Conservar fuente y licencia del componente copiado y registrar modificaciones locales.
- Guardar componentes React interactivos en `src/components/interactive/`; primitivas compartidas en `src/components/ui/` si llegan a ser necesarias.
- Evitar IDs duplicados, valores aleatorios durante render e importaciones completas de catálogos de iconos.
- Si un componente presupone `next/link`, `next/image` o un proveedor de tema de Next.js, adaptar explícitamente esas piezas. No añadir Next.js al proyecto para resolver un ejemplo.
- Mantener la lógica de diagnóstico separada de la UI, con tipos de entradas y salidas y pruebas para las reglas relevantes.

## 6. Dirección visual recomendada

**Concepto: consultoría editorial con demostraciones técnicas comprensibles.** Mantener azul marino, dorado medido y las tres familias tipográficas existentes. Los efectos deben ayudar a entender datos, decisiones o resultados.

Propuesta de recorrido:

1. Hero: propuesta de valor y gráfica propia.
2. Accesos por público: negocio/comercio y empresa/dirección.
3. Servicios: filas editoriales, ejemplos de entregables y CTA contextual.
4. Evidencia: embudo actual y, cuando existan, casos verificables.
5. Empresa: una visualización de integración de datos, con alternativa textual.
6. Proceso y modalidades: contenido legible, sin interacción obligatoria.
7. FAQ y contacto: resolver dudas y facilitar el mensaje.

Las métricas animadas deben proceder de evidencia aprobada. Los diagramas ilustrativos se identificarán como ejemplos. No inventar clientes, testimonios, logos ni porcentajes para llenar componentes atractivos.

## 7. Ruta de implementación y evaluación

### Iteración A — mejoras de alto retorno

1. Revisar el diseño actual en escritorio y móvil como línea base.
2. Unificar botones, foco, iconografía y espaciado.
3. Agregar accesos por público, CTA contextual y FAQ si el contenido está aprobado.
4. Validar ES/EN, tema, teclado y enlaces sin JavaScript.

### Iteración B — una pieza visual distintiva

1. Probar un diagrama SVG propio frente a una adaptación de Animated Beam.
2. Comparar claridad, comportamiento móvil y JavaScript adicional generado.
3. Elegir una sola implementación y eliminar dependencias de la descartada.
4. Mantener texto/diagrama estático como alternativa al movimiento.

### Iteración C — herramienta comercial

1. Definir preguntas y recomendaciones del diagnóstico con el cliente.
2. Construir la isla React usando solo las primitivas necesarias.
3. Probar atrás/adelante, selección incompleta, cambio de idioma y generación del mensaje.
4. Introducir backend solo si se requiere almacenar o enviar datos desde el sitio.

### Criterios de aceptación

- Build y chequeo de tipos sin errores; consola sin errores de hidratación.
- Sin scroll horizontal accidental a 360, 768 y 1440 px; revisar también zoom al 200 %.
- Todos los controles accesibles por teclado; diálogos con gestión de foco, Escape y devolución de foco al disparador.
- Lectura principal y enlaces de contacto útiles sin JavaScript.
- Movimiento reducido sin contenido oculto y sin animaciones permanentes innecesarias.
- Comparar JS transferido, LCP y CLS antes/después con el mismo entorno; registrar resultados, no solo una puntuación.
- Como presupuesto inicial del proyecto: no añadir más de 30 KB gzip de JS a la ruta principal por efectos decorativos sin justificarlo. Es una meta propuesta, no un tamaño atribuido a ninguna biblioteca.
- Medir INP con datos reales cuando haya tráfico; usar pruebas de interacción en laboratorio como control previo.
- Antes de adoptar una versión: revisar compatibilidad con Astro/React/Tailwind, cambios recientes, problemas conocidos y licencia incluida. No actualizar todo el stack solo porque un ejemplo use una versión más nueva.

## 8. Qué no incorporaría en esta fase

- WebGL/Three.js para fondos decorativos, globos giratorios sin información útil o múltiples capas de partículas.
- Cursor personalizado, scroll secuestrado o texto comercial que aparece únicamente después de una animación.
- Carruseles automáticos que escondan servicios importantes.
- Un kit completo de dashboard para una web de presentación.
- Bloques Pro sin licencia o snippets cuya procedencia no esté clara.
- Dependencias para efectos que ya resuelve el SVG o CSS existente.

## 9. Selección final para ejecutar

**Ahora:** componentes Astro propios + iconos Lucide + mejoras de navegación, CTA y FAQ.  
**Siguiente mejora visual:** diagrama de integración propio o Animated Beam adaptado, elegido mediante comparación.  
**Cuando exista autodiagnóstico:** React + primitivas shadcn/ui; Motion únicamente si simplifica las transiciones.  
**Cuando existan casos suficientes:** evaluar Embla.  
**Alternativas bajo evaluación:** Starwind y Accessible Astro. React Bits queda como opción puntual con condiciones de licencia diferenciadas.

Esta combinación concentra el esfuerzo en una web con personalidad, demostraciones relevantes y comportamiento consistente, conservando el stack y la dirección editorial ya acordados.

## 10. Implementación de los dos packs de imágenes

Actualización: 11 de noviembre de 2026. Alcance de esta actualización: documentación; no modifica componentes, imágenes ni rutas.

### 10.1 Estado comprobado y dirección visual

Los ocho PNG originales ya están en `public/images/`. No hace falta volver a generarlos. También existen `data-640.webp`, `data-1200.webp`, `systems-640.webp` y `systems-1200.webp`. El componente `src/components/ui/BrandImage.astro` admite actualmente solo `data` y `systems`, con dimensiones declaradas 1200 × 800, carga diferida por defecto y prioridad alta cuando recibe `eager`.

`src/components/SitePage.astro` utiliza `systems` en inicio y en las cabeceras de servicios/desarrollo; utiliza `data` en empresas. Las demás seis piezas todavía no están conectadas a ese componente. La asociación visual de los WebP existentes con sus originales debe comprobarse antes de regenerarlos; sus nombres y referencias están confirmados, no se ha hecho una comparación de píxeles.

La estructura actual se resuelve mediante `SitePage.astro`, `src/pages/[locale]/[page].astro` y las rutas de `src/data/experience.ts`. No implementar este plan como si todo siguiera siendo una sola página ni usar `Hero.astro` como punto de entrada principal: el hero activo se construye en `SitePage.astro`.

Dirección: azul marino, dorado selectivo, fondo claro y volúmenes mate. Las imágenes son ilustraciones conceptuales de servicios; no son capturas de soluciones entregadas, resultados de clientes ni fotografías del equipo.

### 10.2 Inventario y nombres de publicación

Conservar los originales existentes. Generar derivados con nombres estables ASCII, sin espacios ni sufijos de descarga. La columna «base» es el nombre propuesto para variantes WebP, no un archivo que ya exista salvo las variantes data/systems indicadas arriba.

| Pack | Original en public/images | Base de publicación | Función |
| --- | --- | --- | --- |
| Marca / datos | `Del ruido a la señal-3.png` | `signal` | Identidad y claridad: del ruido a la señal |
| Marca / datos | `Datos que guían-1.png` | `data` | Datos, analítica y tableros |
| Marca / datos | `Conexiones que funcionan-2.png` | `systems` | Visión conjunta de herramientas y servicios |
| Marca / datos | `Sig, cinta azul con destello dorado-4.png` | `sig` | Mascota secundaria de acompañamiento |
| Enrique | `Automatización del flujo documental-2.png` | `automation` | Solicitudes, aprobaciones, plazos y excepciones |
| Enrique | `Ventana modular de aplicaciones empresariales-4.png` | `applications` | Desarrollo de aplicaciones y módulos operativos |
| Enrique | `Puente entre sistemas, modernización gradual-3.png` | `integrations` | Integración y modernización por etapas |
| Enrique | `Revisión técnica y evidencia trazable-1.png` | `technical-review` | Validaciones, hallazgos y evidencia |

Las siete ilustraciones de escenas se prepararán en 640 y 1200 px de ancho, conservando proporción. Verificar dimensiones reales antes de exportar: el encuadre previsto es 3:2. Sig necesita variantes propias de 256 y 512 px con canal alfa conservado y proporción original; no reutilizar las dimensiones 1200 × 800 para la mascota.

No renombrar ni sobrescribir originales sin necesidad. Si más adelante se sacan de `public` para evitar que entren al despliegue, tratarlos como fuentes de diseño en una tarea separada y conservar copia. Los PNG actuales pesan aproximadamente entre 0,69 y 2,57 MB: no usarlos directamente como recursos habituales de las páginas.

### 10.3 Ubicación concreta por página

Las rutas siguientes están tomadas de `routes` en `src/data/experience.ts`. Reutilizar esa constante para enlaces; los IDs de servicio son comunes a ES/EN.

| Página ES / EN | Pieza | Lugar y cambio propuesto |
| --- | --- | --- |
| `/es/` / `/en/` | signal | Hero de inicio en `SitePage.astro`: sustituir la imagen systems actual por la señal de marca. Mantener el H1 y CTA como HTML, fuera de la imagen. |
| `/es/servicios/` / `/en/services/` | systems | Mantener como única imagen de cabecera de la vista general. Representa el trabajo conectado de Kevin y Enrique. |
| `/es/empresas/` / `/en/enterprise/` | data | Mantener en la cabecera empresarial. No repetir la misma ilustración en cada fila de `Enterprise.astro`. |
| `/es/desarrollo/` / `/en/development/` | applications | Sustituir systems en la cabecera de desarrollo. Es la imagen principal de la línea de Enrique. |
| Desarrollo, `#automation` | automation | En `Development.astro`, asociar a la tarjeta del servicio con ID automation. |
| Desarrollo, `#integrations` | integrations | En `Development.astro`, asociar al servicio integrations. |
| Desarrollo, `#technical-review` | technical-review | En `Development.astro`, asociar al servicio technical-review. |
| Desarrollo, `#applications` | applications | Ya aparece en el hero: conservar el icono y contenido del servicio sin repetir la imagen grande. |
| `/es/contacto/` / `/en/contact/` | sig | En `Contact.astro`, junto al encabezado o texto introductorio, a unos 96–144 px de ancho. No ocupar espacio de campos ni CTA. |
| `/es/metodologia/` / `/en/approach/` | technical-review, opcional | En `Validation.astro`, solo si mejora el equilibrio visual. No es necesaria para completar el despliegue de las ocho piezas. |
| `/es/nosotros/` / `/en/about/` | Sin retratos generados | Mantener los perfiles de `Team.astro` y sus iniciales hasta disponer de fotografías reales. Sig no representa a Kevin ni a Enrique. |

`Development.astro` ya recibe los cuatro servicios desde `src/data/services.ts`. Si se incorporan las tres escenas de apoyo, usar filas editoriales con texto e imagen y alternancia moderada en escritorio; en móvil, una columna. La fila applications puede funcionar como resumen textual porque su imagen ya está en la cabecera. Evitar una cuadrícula rígida que deje un hueco de imagen en esa fila.

Conservar `DataFlow.astro` para explicar relaciones concretas con texto y estructura. La escena systems no sustituye ese contenido informativo. Si la página queda demasiado cargada, reducir decoración antes de ocultar explicaciones.

### 10.4 Implementación compartida

1. Generar y verificar los derivados que faltan. Reutilizar data/systems si su revisión visual confirma que están bien.
2. Crear un catálogo propuesto en `src/data/brand-images.ts` con las ocho claves, rutas de variantes, dimensiones, proporción, transparencia y textos alternativos ES/EN.
3. Ampliar `BrandImage.astro` para resolver ese catálogo. Mantenerlo como componente Astro estático; estas imágenes no justifican una isla React.
4. Reemplazar la selección binaria `detailImage` de `SitePage.astro` por un mapa explícito de página a imagen: home → signal, services → systems, enterprise → data, development → applications.
5. Añadir una referencia opcional de imagen a los servicios de `src/data/services.ts`, reutilizando los IDs existentes: automation, applications, integrations y technical-review. Decidir en la presentación que applications ya está representada en el hero, sin duplicar datos de servicios.
6. Integrar Sig en contacto. Evitar que todas las llamadas a la acción del sitio repitan la mascota.
7. Adaptar estilos en `src/styles/global.css` y verificar las dos traducciones.

La API propuesta del componente debe separar `kind`, `alt`, `sizes` y prioridad de carga. Las dimensiones deben salir del catálogo, no quedar fijas para todos los recursos. Mantener `eager` para una imagen principal visible al cargar; las imágenes inferiores usarán carga diferida y prioridad normal.

Los archivos de `public/images` se referencian en HTML como `/images/archivo.webp`, nunca como `/public/images/archivo.webp`. Los derivados deben existir antes de referenciarlos. No asumir optimización automática de un PNG servido por una URL de public.

El `sizes` actual supone media pantalla en escritorio. Ajustarlo al ancho real de cada colocación: hero de dos columnas, fila editorial y mascota necesitan tamaños diferentes. Mantener `srcset` coherente con los anchos reales de los archivos.

### 10.5 Textos alternativos y bilingüismo

Las imágenes no contienen texto comercial: sirven para ambos idiomas. Los títulos, descripciones, botones y pies se traducen en HTML. No crear una segunda descarga del mismo recurso solo por cambiar ES/EN.

Si la imagen acompaña un encabezado y párrafo que explican íntegramente lo mismo, usar `alt=""` para evitar repetición. Cuando aporte información propia o se muestre sola, utilizar una descripción breve. Sugerencias:

| Clave | Alt ES | Alt EN |
| --- | --- | --- |
| signal | Elementos dispersos se ordenan en una señal. | Scattered elements align into a clear signal. |
| data | Módulos de información conectados para orientar decisiones. | Connected information modules support decisions. |
| systems | Herramientas conectadas mediante un recorrido común. | Tools connected through a shared path. |
| sig | Sig, mascota de Signum, señala un punto dorado. | Sig, the Signum mascot, points to a golden dot. |
| automation | Documentos pasan por aprobación, plazos y revisión de excepciones. | Documents pass through approval, timing and exception review. |
| applications | Módulos de formularios, expedientes y calendario componen una aplicación. | Form, record and calendar modules form an application. |
| integrations | Dos sistemas intercambian información a través de un puente. | Two systems exchange information across a bridge. |
| technical-review | Una revisión identifica una diferencia y la vincula a un informe. | A review identifies a discrepancy and links it to a report. |

No poner palabras clave repetidas, nombres de archivos ni supuestos resultados comerciales en los alt. Las imágenes decorativas no necesitan foco de teclado.

### 10.6 Carga, tema oscuro y movimiento

- Reservar el espacio antes de cargar con dimensiones reales y proporción estable. El texto y los CTA deben estar disponibles desde el HTML inicial.
- Un placeholder del mismo tamaño puede acompañar la descarga real. No añadir esperas artificiales, skeletons para texto estático ni una animación de carga permanente.
- Revisar el script actual de `BrandImage.astro`: `image.complete` también puede ser verdadero tras un fallo. Distinguir éxito mediante `naturalWidth > 0` y definir un estado de error que cierre el skeleton sin ocultar contenido ni dejar la página bloqueada.
- La experiencia sin JavaScript debe mostrar la imagen. No depender de `data-loaded` para hacer visible el contenido básico.
- Si la navegación utiliza transiciones cliente, asegurar que el estado de carga se inicialice también en cada navegación, sin acumular listeners.
- En tema oscuro, mantener las escenas sobre su superficie clara deliberada, con borde/radio coherentes. No invertir colores, aplicar filtros a toda la imagen ni intentar quitar sus fondos automáticamente.
- Para Sig, comprobar transparencia real y contraste del cuerpo marino. En fondos oscuros puede necesitar una pequeña superficie clara; no inventar un borde brillante para compensarlo.
- No aplicar parallax, flotación continua ni zoom al hacer scroll. Cualquier entrada debe ser breve, opcional y respetar movimiento reducido.
- Sig es por ahora una imagen estática. Animarla o convertir el símbolo en favicon/SVG es una fase aparte: requiere simplificar y unificar geometría. No usar el PNG como un logo vectorial definitivo.

### 10.7 Orden de trabajo y aceptación

**P0 — Diferenciar páginas:** preparar signal y applications, ampliar el catálogo/componente y asignar las cuatro cabeceras. Mantener data y systems ya disponibles.

**P1 — Explicar la oferta de Enrique:** incorporar automation, integrations y technical-review junto a sus servicios; mantener alcance y entregables legibles.

**P2 — Humanizar con discreción:** incorporar Sig en contacto y decidir si metodología necesita el apoyo de revisión técnica. Fotografías reales del equipo cuando estén disponibles.

Verificación al ejecutar la implementación:

- Ocho originales identificados y derivados asociados correctamente; revisar visualmente cada exportación y la transparencia de Sig.
- Ninguna referencia rota ni error 404; no enlazar PNG de varios MB desde los componentes públicos.
- Como presupuesto orientativo, buscar escenas WebP de hasta 150 KB a 1200 px y 70 KB a 640 px, ajustando según calidad visual. Son metas, no resultados medidos ni motivo para degradar la imagen.
- Sin deformaciones, recortes de elementos centrales o saltos de layout a 360, 768 y 1440 px.
- Misma asignación de imágenes en ES/EN, con alt contextual correcto.
- Contraste y superficies revisados en claro/oscuro; contenido útil sin JavaScript y con movimiento reducido.
- Solo la imagen principal elegible para carga prioritaria; las inferiores no compiten por esa prioridad.
- Ejecutar `npm run build` y `npm run verify:build`, además de revisar las rutas en navegador. Ampliar el verificador de recursos si no cubre las nuevas imágenes.
- Comparar carga y estabilidad visual antes/después en el mismo entorno; no afirmar mejoras de rendimiento sin medición.

Este plan especifica cómo usar los ocho recursos sin convertir cada sección en una galería. La identidad acompaña la oferta; los textos, el método y la evidencia siguen explicando el servicio.

