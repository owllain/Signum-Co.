# Evolución de la arquitectura de Signum & Co.

Implementación local — 11 de noviembre de 2026.

## Corrección vigente: especialidad de Kevin y tarjetas

La línea de Kevin se presenta como **Datos y analítica**, basada en la oferta original de `content.es.ts` y `content.en.ts`: inteligencia de ingresos, ingeniería de datos, tableros ejecutivos y medición comercial. Se conserva el catálogo original de servicios dentro de esa página.

**Soluciones empresariales** describe la oferta conjunta de Signum en la vista general de Servicios; no identifica exclusivamente a Kevin. Las dos especialidades visibles son Datos y analítica y Desarrollo y automatización.

La página de datos utiliza `/es/datos/` y `/en/data-analytics/`. Las rutas anteriores `/es/empresas/` y `/en/enterprise/` redirigen a sus equivalentes. Los títulos, pestañas, tarjetas, metadatos y enlaces de pie de página usan la denominación corregida.

Las tarjetas con imágenes incorporan elevación de 4 px, borde dorado y ampliación de imagen del 3,5 % para dispositivos con hover. El foco de teclado recibe borde y sombra visibles; `prefers-reduced-motion` desactiva desplazamiento, zoom y transiciones. Las dimensiones permanecen reservadas para evitar cambios en la distribución.

Esta corrección prevalece sobre los nombres de la primera actualización registrados a continuación.

## Actualización: correcciones de navegación y ampliación autorizada

Esta actualización sustituye el alcance inicial descrito más abajo. Enrique autorizó incorporar su línea de servicios y su perfil.

- Navegación principal: Servicios, Metodología, Sobre nosotros y Conversemos.
- Servicios tiene una vista general y dos páginas de especialidad: Soluciones empresariales (Kevin) y Desarrollo y automatización (Enrique).
- Nuevas rutas: `/es/servicios/`, `/es/desarrollo/`, `/es/nosotros/`, `/es/contacto/` y sus equivalentes en inglés. La ruta anterior `/es/consultora/` redirige a Sobre nosotros.
- El inicio resume la oferta. El formulario vive en Contacto; los enlaces de servicio conservan su tema al llegar.
- Sobre nosotros presenta a Kevin como fundador y a Enrique en desarrollo y automatización, con los LinkedIn proporcionados. No se agrega un perfil de la hermana ni se inventa un cargo societario.
- La oferta de Enrique comprende automatización, aplicaciones, integración/modernización y revisión técnica con alcance delimitado, según `PROPUESTA_SERVICIOS_Y_EQUIPO.md`.
- El menú principal marca la página y la navegación secundaria indica la sección visible durante el desplazamiento.
- Se mantienen documentos completos por idioma, rutas equivalentes y HTML estático. No se introduce una animación de sustitución de texto ni una transición global de página.
- Fuentes locales con precarga de las dos fuentes principales y `font-display: optional` para evitar sustituciones tardías. El menú móvil se configura antes del primer dibujo.
- Imágenes existentes optimizadas a WebP en dos tamaños, dimensiones reservadas y placeholder mientras cargan. Indicador de navegación después de 180 ms si sigue pendiente; no bloquea la página ni simula progreso completado.
- Componentes nuevos: ServiceTracks, Development, Team, ServiceIcon y BrandImage. No se añaden dependencias.

Las secciones siguientes registran la primera fase; las decisiones anteriores prevalecen donde difieran.

### Validación de esta actualización

- Compilación final: 41 archivos comprobados; cero errores, advertencias o sugerencias. Se generan 14 páginas localizadas, además de raíz, 404 y redirección heredada.
- `npm run verify:build`: 14 páginas y 384 enlaces internos correctos.
- Navegador real en `http://localhost:4321`: inicio, servicios, desarrollo, equipo y contacto revisados; cambio a la página equivalente en inglés comprobado.
- Vista móvil de 390 × 844: menú desplegable y formulario revisados. En Contacto, ancho del documento igual al ancho disponible, sin desbordamiento horizontal.
- Selección activa comprobada al desplazar con mouse entre Equipo y Trayectoria de Kevin, y al utilizar el enlace de Alcance. Se corrigió la suma duplicada de espacio reservado sobre las anclas.
- Cambio ES → EN conserva nombre de prueba y tema seleccionado, traduciendo el mensaje generado. Los datos de prueba se limpiaron; no se envió ningún mensaje.
- Temas claro/oscuro comprobados y tema original restaurado; sin errores de consola observados en la sesión.
- URL heredada `/es/consultora/#contacto` comprobada: termina en `/es/contacto/#contacto`.

No se ha medido Lighthouse, CLS bajo red limitada ni una auditoría completa de accesibilidad. Los placeholders y el indicador de navegación no introducen esperas artificiales. La vista previa en `127.0.0.1:4322` no fue accesible; la validación se completó sobre la instancia indicada por Enrique en `localhost:4321`.

## Base y alcance

Se aplican `ANALISIS_COMPETENCIA_Y_POSICIONAMIENTO.md` y `COMPONENTES_Y_RECOMENDACIONES.md`. La prioridad es facilitar la comprensión de la oferta, explicar cómo se entrega y convertir una visita en una conversación concreta.

`PROPUESTA_SERVICIOS_Y_EQUIPO.md` permanece pendiente: no se incorporan nuevas líneas de automatización, desarrollo o auditoría, ni perfiles adicionales. Se conserva la oferta existente asociada a Kevin.

## Arquitectura de información

| Página | Español | Inglés | Función |
| --- | --- | --- | --- |
| Inicio | `/es/` | `/en/` | Orientar por necesidad, resumir oferta y facilitar contacto |
| Empresas | `/es/empresas/` | `/en/enterprise/` | Desarrollar la oferta empresarial y explicar el recorrido de los datos |
| Metodología | `/es/metodologia/` | `/en/approach/` | Explicar etapas, entregables, validación y modalidades |
| Consultora | `/es/consultora/` | `/en/about/` | Presentar a Kevin y distinguir su trayectoria de la antigüedad de Signum |

## Aplicación de los documentos

| Criterio | Implementación |
| --- | --- |
| Oferta comprensible por tipo de necesidad | Dos accesos desde el inicio y página empresarial propia |
| Credibilidad verificable | Atribución explícita de trayectoria a Kevin; ejemplos identificados como ilustrativos |
| Claridad de ejecución | Entender, acordar, construir, validar y transferir, con entregables por etapa |
| Entrada comercial concreta | Contacto contextual por servicio y modalidad, con tema preseleccionado |
| Reducir dudas antes del contacto | FAQ y explicación de alcance, licencias y siguientes pasos |
| Componentes proporcionados al problema | Astro, HTML semántico, CSS, SVG propio y TypeScript; sin nuevas dependencias |
| Mantenimiento bilingüe | Tipos compartidos, mapa de rutas y composición común de páginas |

## Organización del código

- `src/data/experience.ts`: textos de esta evolución, rutas, identificadores de página y temas de contacto. Los textos originales permanecen en `content.es.ts` y `content.en.ts`.
- `src/components/SitePage.astro`: composición de cada tipo de página; evita duplicar estructuras entre idiomas.
- `src/pages/[locale]/[page].astro`: genera únicamente las seis rutas de detalle previstas.
- Nuevas secciones: `AudienceLinks`, `Method`, `Validation`, `FAQ`, `DataFlow` y `EditorialPreview`.
- `src/components/ui/Arrow.astro`: icono SVG propio reutilizable.
- `src/styles/experience.css`: presentación editorial y reglas adaptables de las nuevas secciones.
- `src/scripts/contact.ts`: mensaje contextual, selección de servicio y borrador temporal en la sesión del navegador.

Las preguntas usan `details`/`summary`. No hay islas React hidratadas en estas páginas. React queda disponible para una futura herramienta que realmente necesite estado complejo. Los diagramas son ilustrativos y no requieren una biblioteca gráfica.

## Contacto y navegación

Los enlaces de servicios utilizan `?topic=identificador#contacto`. El visitante puede cambiar el tema, conservar su borrador durante la sesión y continuar por WhatsApp o correo. El sitio prepara el mensaje; no lo envía ni lo almacena en un servidor. Sin JavaScript se conservan los canales directos, pero los campos no se adjuntan automáticamente.

Cada página tiene canonical propio y enlaces a su equivalente traducido. El selector de idioma conserva el tema de contacto. La navegación incluye estado activo, menú móvil y selector de tema claro/oscuro.

## Validación y límites

Ejecutar desde la raíz:

```sh
npm run build
npm run verify:build
```

El verificador revisa el HTML final de las ocho páginas localizadas: un H1 por página, IDs únicos, canonical, destino traducido, enlaces internos y anclas, temas de contacto, asociación de etiquetas y presencia en sitemap. También comprueba que no se hayan introducido islas hidratadas innecesarias.

La primera compilación terminó con cero errores, advertencias o sugerencias de Astro. La revisión estructural verificó ocho páginas y 220 enlaces internos. Estos controles no sustituyen una prueba visual ni una prueba de interacciones en navegador.

La vista previa local no respondió desde el navegador de revisión. Queda pendiente comprobar visualmente escritorio y móvil, navegación con teclado, contraste en ambos temas, cambio de idioma con borrador y apertura de mensajes de WhatsApp/correo. No se afirma conformidad de accesibilidad ni puntuación Lighthouse sin medirlas.

## Siguiente paso

Revisar la versión local con el equipo, confirmar las promesas comerciales y completar la comprobación visual antes de publicar. La ampliación de servicios y perfiles debe implementarse en una fase independiente, tomando como base el documento pendiente y las credenciales confirmadas.
