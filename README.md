> Estado actual: sitio solo en español, tema oscuro fijo y escala visual compartida. Se retiraron las rutas inglesas y los controles de idioma y tema. Esta decisión sustituye las referencias bilingües históricas de este documento.

# Signum & Co. — Sitio Web Corporativo

Sitio web corporativo bilingüe (`/es/` y `/en/`) para **Signum & Co.**, consultora costarricense de datos, marketing digital, tecnología e inteligencia artificial.

## 1. Stack tecnológico

| Capa | Tecnología | Propósito |
| --- | --- | --- |
| Lenguaje | TypeScript (estricto) | Tipado de contenido bilingüe, configuración y scripts de interacción |
| Generador | Astro 5 | Generación de HTML estático sin runtime innecesario en el navegador |
| Estilos | Tailwind CSS v4 + CSS propio (`tokens.css`, `global.css`) | Sistema de diseño editorial azul marino (`#0f1f3d`) y dorado (`#c9a227`), modo claro/oscuro |
| Fuentes | `@fontsource` (Libre Caslon Text, Schibsted Grotesk, IBM Plex Mono) | Tipografía alojada localmente sin peticiones externas a Google Fonts |
| Islas interactivas | `@astrojs/react` | Integración lista para futuros componentes con estado (p. ej. cotizador interactivo) |
| Hosting | Vercel | Despliegue estático, redirección raíz (`/` → `/es/`) y encabezados de caché |

## 2. Estructura del proyecto

```text
public/
  favicon.svg                  # Isototipo vectorial S&
  robots.txt                   # Directivas de rastreo y enlace al sitemap
  fonts/                       # Licencias de las fuentes autoalojadas
  images/                      # Activos gráficos estáticos
src/
  components/
    layout/
      Header.astro             # Encabezado fijo, navegación activa y selector de idioma por ruta
      Footer.astro             # Pie de página corporativo
    sections/
      Hero.astro               # Hero con gráfico SVG pre-renderizado en servidor e interactivo
      Questions.astro          # Preguntas frecuentes de negocio
      Services.astro           # Qué hacemos (Datos, Marketing, Web, IA)
      Enterprise.astro         # Soluciones para empresas
      Funnel.astro             # Embudo de conversión en escala logarítmica
      Process.astro            # Proceso de trabajo en 4 etapas
      Pricing.astro            # Modalidades de trabajo
      About.astro              # Trayectoria, cifras clave y stack de herramientas
      Contact.astro            # Contacto directo + generador de mensajes para WhatsApp y correo
    interactive/               # Directorio reservado para futuras islas React
  data/
    site.ts                    # Configuración centralizada (teléfono, WhatsApp, correo, dominio) y tipos
    content.es.ts              # Textos completos en español
    content.en.ts              # Textos completos en inglés
  layouts/
    BaseLayout.astro           # Metadatos SEO, canonical, hreflang, Open Graph y JSON-LD
  pages/
    index.astro                # Redirección explícita de respaldo (/ → /es/)
    404.astro                  # Página 404 bilingüe con navegación útil
    es/index.astro             # Página corporativa en español (/es/)
    en/index.astro             # Página corporativa en inglés (/en/)
  scripts/
    hero-chart.ts              # Interacción del gráfico SVG limitada a 1 ciclo por frame (rAF)
    navigation.ts              # Estado de scroll, sección activa y menú móvil accesible
    contact.ts                 # Vista previa en vivo, enlaces codificados y botón de copia
  styles/
    tokens.css                 # Variables de color, escala tipográfica y movimiento (claro/oscuro)
    global.css                 # Estilos base, componentes y soporte para prefers-reduced-motion
Signum & Co.html               # Prototipo original preservado como referencia fuera de public/
vercel.json                    # Redirecciones y encabezados HTTP para Vercel
```

## 3. Requisitos y ejecución local

- **Node.js:** `>= 20.3.0` (recomendado Node 22 LTS, especificado en `.nvmrc`).
- **Instalación de dependencias:**
  ```bash
  npm install
  ```
- **Servidor de desarrollo:**
  ```bash
  npm run dev
  ```
- **Comprobación de tipos (Astro + TypeScript):**
  ```bash
  npm run check
  npm run typecheck
  ```
- **Compilación de producción:**
  ```bash
  npm run build
  ```
- **Previsualización local de la compilación:**
  ```bash
  npm run preview
  ```

> **Nota para Windows:** Los scripts en `package.json` invocan directamente los binarios de Node (`node ./node_modules/...`) para garantizar que el carácter `&` en el nombre de la carpeta `Signum & Co` no interfiera con `cmd.exe`.

## 4. Despliegue en Vercel y configuración de dominio

### Configuración del proyecto en Vercel
1. Importar el repositorio Git en la cuenta de Vercel del cliente.
2. **Framework Preset:** `Astro`
3. **Build Command:** `npm run build`
4. **Output Directory:** `dist`
5. **Variables de entorno:** En la primera entrega estática no se requieren variables de entorno privadas. Cuando se incorpore un endpoint de contacto o integración CRM, definir las claves únicamente en las variables de entorno del servidor en Vercel.

### Conexión del dominio personalizado (`signumandco.com`)
1. En **Project Settings → Domains**, agregar `signumandco.com` y `www.signumandco.com`.
2. Establecer `signumandco.com` como dominio canónico y configurar `www.signumandco.com` como redirección permanente (`308`) hacia el dominio raíz.
3. En el proveedor DNS del dominio:
   - Configurar únicamente el registro `A` (para `@`) y el registro `CNAME` (para `www`) indicados por Vercel.
   - **Importante:** Conservar intactos todos los registros existentes de correo electrónico (`MX`, `TXT` de SPF, `DKIM`, `DMARC`) y de verificación de dominio.
4. Verificar tras la propagación DNS:
   - Certificado HTTPS activo en `https://signumandco.com/es/` y `https://signumandco.com/en/`.
   - Redirección de `/` hacia `/es/`.
   - Funcionamiento de enlaces a WhatsApp (`+506 8971-2137`) y correo (`kevin.arroyo@signumandco.com`).

### Procedimiento de reversión (Rollback)
- Desde el panel de **Deployments** en Vercel, seleccionar el último despliegue estable verificado y ejecutar **Instant Rollback** (o **Promote to Production**), o bien revertir el commit en Git (`git revert <commit>`) y hacer push a la rama principal.

