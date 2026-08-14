# Análisis GEO — crprojectsas.com

**Sitio:** https://www.crprojectsas.com/
**Fecha del análisis:** 2026-08-13
**Stack:** Next.js (App Router), renderizado en servidor, desplegado en Vercel/Netlify

## 1. GEO Readiness Score: 58/100

| Criterio (peso) | Puntaje | Contribución |
|---|---|---|
| Citabilidad de pasajes (25%) | 45/100 | 11.3 |
| Estructura y legibilidad (20%) | 85/100 | 17.0 |
| Contenido multimodal (15%) | 30/100 | 4.5 |
| Autoridad y señales de marca (20%) | 40/100 | 8.0 |
| Accesibilidad técnica (20%) | 85/100 | 17.0 |
| **Total** | | **57.75 ≈ 58/100** |

**Lectura rápida:** la base técnica (SSR, robots.txt, sitemap, schema) está entre lo mejor que se ve en un sitio de este tamaño — mejor que la mayoría de PyMEs colombianas. Lo que frena el puntaje es puramente de contenido: los bloques de texto son demasiado cortos para que un motor de IA los cite tal cual, y la marca no tiene presencia fuera del propio dominio (sin YouTube, LinkedIn, Wikipedia, Reddit reseñas verificables).

---

## 2. Desglose por plataforma

| Plataforma | Score | Por qué |
|---|---|---|
| **Google AI Overviews** | 65/100 | Fuertemente correlacionado con el ranking clásico; el SEO técnico y el schema ya están bien resueltos, así que hereda esa fuerza. |
| **Google AI Mode** (Gemini 3.5 Flash) | 48/100 | Extrae de un pool más amplio (~9 dominios/consulta) y pondera frescura + autoridad de entidad por encima de la posición — ambas son débiles aquí (última actualización real: hace ~7 semanas; cero presencia de entidad externa). |
| **ChatGPT** | 25/100 | 47.9% de sus citas vienen de Wikipedia, 11.3% de Reddit. CR Project no tiene página de Wikipedia ni menciones en Reddit — no hay superficie de cita disponible en las fuentes que ChatGPT prioriza. |
| **Perplexity** | 25/100 | 46.7% de sus citas vienen de Reddit. Mismo problema: no hay hilos, reseñas ni discusión de marca fuera del propio sitio. |
| **Bing Copilot** | 55/100 | Depende del índice de Bing y de sitios autoritativos generales; el SEO técnico limpio ayuda, pero sin backlinks/menciones fuertes el techo es medio. |

**Nota:** solo el 11% de los dominios son citados simultáneamente por ChatGPT y Google AI Overviews para la misma consulta — el hueco de ChatGPT/Perplexity no se resuelve optimizando lo que ya existe en el sitio, requiere presencia en plataformas externas (ver sección 5).

---

## 3. Acceso de crawlers de IA

`robots.txt` (verificado en vivo y en `app/robots.ts:1-13`):

```
User-Agent: *
Allow: /

Sitemap: https://www.crprojectsas.com/sitemap.xml
```

Regla `Allow: /` para `User-Agent: *` sin excepciones — **todos los crawlers de IA están permitidos implícitamente**, incluyendo:

| Crawler | Dueño | Estado |
|---|---|---|
| GPTBot | OpenAI | ✅ Permitido |
| OAI-SearchBot | OpenAI | ✅ Permitido |
| ChatGPT-User | OpenAI | ✅ Permitido |
| ClaudeBot | Anthropic | ✅ Permitido |
| PerplexityBot | Perplexity | ✅ Permitido |
| Bytespider | ByteDance | ✅ Permitido (sin restricción) |
| CCBot | Common Crawl | ✅ Permitido (sin restricción) |

No hay bloqueos que corregir. Si en algún momento se quiere excluir crawlers de *entrenamiento* (no de búsqueda) como `CCBot` o `Bytespider` sin afectar visibilidad en búsqueda de IA, se pueden añadir reglas específicas en `app/robots.ts`, pero no es necesario para GEO.

---

## 4. Estado de llms.txt

**No existe.** `https://www.crprojectsas.com/llms.txt` devuelve 404, y no hay archivo `public/llms.txt` en el repo.

Según la guía primaria de Google (ver `references/google-ai-optimization-guide.md`), `llms.txt` **no es un factor de citación** para los principales motores de búsqueda con IA — Mueller, Illyes y el estudio de SE Ranking sobre 300k dominios coinciden en que no mueve la aguja. Por eso esto se reporta como informativo, sin peso en el score.

Aun así, es de bajo costo y no hace daño. Plantilla lista para usar en `public/llms.txt`:

```markdown
# CR Project S.A.S
> Repuestos, servicio técnico e importación de maquinaria pesada en Colombia. Sede en Mosquera, Cundinamarca, con operación binacional Colombia–Miami (EE.UU.).

## Páginas principales
- [Servicios](https://www.crprojectsas.com/servicios): Catálogo completo de servicios técnicos para maquinaria pesada.
- [Repuestos](https://www.crprojectsas.com/repuestos): Venta de repuestos genuinos y aftermarket para CAT, Komatsu, John Deere, Cummins.
- [Servicio Técnico](https://www.crprojectsas.com/servicio-tecnico): Diagnóstico y mantenimiento con cobertura nacional.
- [Reparación de Motores](https://www.crprojectsas.com/reparacion-motores): Overhaul y reparación de motores diésel.
- [Reparación de Sistemas Hidráulicos](https://www.crprojectsas.com/reparacion-sistemas-hidraulicos): Servicio especializado en sistemas hidráulicos.
- [Diagnóstico Computarizado](https://www.crprojectsas.com/diagnostico): Diagnóstico con escáner NEXIQ y software OEM.
- [Venta de Maquinaria](https://www.crprojectsas.com/venta-maquinaria): Maquinaria pesada usada importada desde EE.UU.
- [Alquiler de Maquinaria](https://www.crprojectsas.com/alquiler-maquinaria): Renta de equipos pesados.
- [Mantenimiento de Flotas](https://www.crprojectsas.com/mantenimiento-flotas): Planes de mantenimiento preventivo y correctivo.
- [Nosotros](https://www.crprojectsas.com/nosotros): Historia, capacidades y operación binacional USA-Colombia.
- [Contacto](https://www.crprojectsas.com/contacto): Cotización por WhatsApp, +57 313 379 9992.

## Datos clave
- Fundada en 2014, +10 años de experiencia.
- Cobertura técnica en toda Colombia, con foco en Mosquera, Funza, Madrid, Facatativá, Bogotá y la Sabana de Cundinamarca.
- Marcas atendidas: CAT, Komatsu, CNH, John Deere, New Holland, Cummins, Detroit Diesel, Garrett, BorgWarner, Bosch, Delphi, Denso, NEXIQ, 3M.
- Contacto: +57 313 379 9992 (WhatsApp) · crprojectsas@gmail.com
```

---

## 5. Análisis de menciones de marca

| Señal | Estado | Impacto |
|---|---|---|
| Wikipedia / Wikidata | ❌ Ausente | Alto — bloquea ~48% de la superficie de citación de ChatGPT |
| Reddit | ❌ Sin menciones detectables | Alto — bloquea ~47% de Perplexity y buena parte de ChatGPT |
| YouTube | ❌ Sin canal | Alto — la señal individual más fuerte de correlación con visibilidad en IA (~0.737, estudio Ahrefs), y este negocio es visualmente ideal para video (reparaciones, diagnósticos, importación) |
| LinkedIn | ❌ No enlazado en `sameAs` | Moderado |
| Facebook / Instagram | ✅ Enlazados en `sameAs` (layout.tsx:127-130, nosotros/page.tsx:548-551) | Señal débil por sí sola, pero ya está bien implementada |
| Google Business Profile | No verificado en el análisis (fuera de alcance de este crawl) | Recomendado verificar/enlazar |
| Reseñas / Reviews schema | ❌ No implementado pese a `priceRange` en el schema | Bajo-moderado |

**Diagnóstico:** toda la autoridad de marca actual vive dentro del propio dominio (schema.org bien hecho, pero autorreferenciado). El dominio no tiene ninguna huella de terceros verificable, que es precisamente lo que ChatGPT y Perplexity ponderan más que backlinks o incluso que el propio contenido on-page.

---

## 6. Citabilidad a nivel de pasaje

Longitud óptima para citación: **134-167 palabras** por bloque autocontenido. Muestreo de bloques reales del sitio:

| Ubicación | Contenido | Palabras | Veredicto |
|---|---|---|---|
| `components/sections/hero.tsx:38-44` | Párrafo de apertura del H1 | ~35 | Muy corto |
| `components/sections/importacion.tsx:24-29` | Respuesta a "¿Cómo importar maquinaria pesada a Colombia?" | ~38 | Pregunta perfecta para AI Overviews, respuesta demasiado corta para ser citada como bloque independiente |
| `components/sections/faq.tsx:6-24` (cada FAQ) | Respuestas FAQ individuales | 15-30 c/u | Correctas para featured snippets clásicos, insuficientes para citación extensa en IA |
| `app/reparacion-motores/page.tsx:17` | Descripción del servicio (`description` prop) | ~62 | Se acerca, pero sigue por debajo del rango óptimo |
| `app/nosotros/page.tsx:151-159` | Párrafo "Nuestra Historia" | ~45 | Corto |

**Ningún bloque del sitio cae dentro del rango 134-167 palabras.** Esto es la brecha #1 del sitio: el contenido está optimizado para conversión rápida (llamadas a la acción, listas de viñetas cortas) pero no para extracción de IA, que prefiere un párrafo denso y autocontenido antes de la lista.

**Recomendación concreta:** bajo cada H2 con formato de pregunta (`¿Cómo importar maquinaria pesada a Colombia?`, `¿Qué marcas de maquinaria pesada atiende CR Project?`) añadir un párrafo de 134-167 palabras que responda completo antes de mostrar los bullets o el CTA. Ejemplo de estructura para el bloque de importación:

> "Importar maquinaria pesada a Colombia implica [proceso en 3-4 pasos: subasta/compra en EE.UU. → logística → nacionalización aduanera → entrega], con un tiempo estimado de [X semanas] y documentación que incluye [lista]. CR Project gestiona el proceso completo desde su oficina en Miami, Florida, participando en subastas de Ritchie Bros, IronPlanet y Copart, y coordinando la importación con [detalle de aranceles/trámites DIAN si aplica]..."

(Rellenar con datos reales del proceso — el objetivo es que el párrafo responda la pregunta del H2 sin necesitar el resto de la página.)

---

## 7. Verificación de renderizado server-side

**Resultado: sólido.** El sitio usa Next.js App Router; `app/page.tsx`, `app/nosotros/page.tsx` y las páginas de servicio son Server Components por defecto (sin directiva `"use client"` en los archivos `page.tsx`), lo que significa que el HTML de contenido, headings y JSON-LD llega completo en la respuesta inicial del servidor — sin depender de hidratación de JavaScript para que un crawler de IA lo vea.

Nota menor: algunas secciones interactivas (`components/sections/faq.tsx:1`, `hero.tsx:1`, `coverage.tsx:1`) llevan `"use client"`, pero eso solo afecta interactividad (acordeones, animaciones); el marcado y texto ya vienen renderizados en el HTML servido porque Next.js prerenderiza los client components también en el server durante el build/SSR. No se detectó contenido crítico dependiente exclusivamente de fetch en cliente.

`next.config.js` no tiene `output: "export"` ni configuración que fuerce CSR — confirma renderizado híbrido SSR/SSG estándar de Next.js, óptimo para crawlers de IA que no ejecutan JavaScript.

---

## 8. Top 5 cambios de mayor impacto

1. **Añadir un párrafo de 134-167 palabras bajo cada H2 en formato pregunta**, empezando por "¿Cómo importar maquinaria pesada a Colombia?" (`importacion.tsx`) y las preguntas FAQ de más volumen. Es el cambio de mayor apalancamiento porque toda la infraestructura (schema, headings, robots) ya está lista para que ese texto sea citado — solo falta el texto.
2. **Construir presencia de marca fuera del dominio**, en orden de impacto: canal de YouTube con 3-5 videos cortos (diagnóstico, overhaul de motor, proceso de importación), perfil de LinkedIn de la empresa enlazado en `sameAs`, y una entrada de Wikidata/Wikipedia si la empresa cumple criterios de notoriedad. Esto es lo único que mueve el score de ChatGPT/Perplexity, que hoy está en 25/100.
3. **Diferenciar el contenido FAQ entre páginas.** Actualmente `faq.tsx` (home) y las FAQ de cada `service-page-template.tsx` repiten casi las mismas 5 preguntas genéricas de marca en vez de preguntas específicas del servicio. Cada página debería tener su propio set de preguntas únicas y profundas para maximizar la superficie de citación distinta por URL.
4. **Fechar el contenido de forma visible y real.** El sitemap (`app/sitemap.ts:54`) usa `new Date()` en cada build, por lo que el `lastmod` no refleja cambios reales de contenido — hoy marca `2026-06-26` para las 12 URLs por igual pese a que el último commit real de contenido es de esa misma fecha (`git log`). Añadir un campo `dateModified` real en el schema `Service`/`Organization` y considerar una fecha visible tipo "Actualizado en [mes/año]" en páginas clave. Los estudios de SE Ranking muestran ~3x más probabilidad de citación en contenido de menos de 3 meses; el sitio ya lleva ~7 semanas sin actualización de contenido.
5. **Incorporar contenido multimodal.** Hoy el sitio es 100% texto + fotos estáticas (`hero.tsx`, `nosotros/page.tsx`) sin video, tablas comparativas ni herramientas interactivas. Dado que el contenido con elementos multimodales tiene 156% más tasa de selección, y este negocio se presta naturalmente a video de proceso (reparación, diagnóstico con escáner NEXIQ, importación), es la inversión de contenido con mejor retorno esperado.

---

## 9. Recomendaciones de Schema

**Lo que ya está bien implementado** (no tocar):
- `Organization` tipo `["AutoRepair", "AutoPartsStore"]` en `app/layout.tsx:99-147` con `@id` estable, geo, horarios, `sameAs`.
- `FAQPage` en home (`app/page.tsx:26-76`) y en cada página de servicio (`service-page-template.tsx:256-269`).
- `Service` por página de servicio (`service-page-template.tsx:239-255`).
- `BreadcrumbList` en home, servicios y nosotros.
- `LocalBusiness` en `nosotros/page.tsx:468-554` con `foundingDate`, `serviceArea`, `hasOfferCatalog`.
- `ItemList` de servicios en home.

**Gaps a cerrar:**

1. **`dateModified` / `datePublished`** — ninguno de los schemas actuales declara fecha. Añadir a `Organization` y a cada `Service`:
```json
"dateModified": "2026-08-13"
```
2. **`AggregateRating` / `Review`** — el schema `LocalBusiness` declara `priceRange` pero no hay reseñas estructuradas, pese a que la copy menciona "500+ Máquinas Reparadas" (`nosotros/page.tsx:419`). Si existen reseñas reales en Google Business Profile o Facebook, agregar `AggregateRating` con el conteo real (nunca inventar cifras — esto es lo primero que Google penaliza si no coincide con la fuente pública).
3. **`sameAs` incompleto** — hoy solo lista Instagram y Facebook (dos veces, con URLs ligeramente distintas entre `layout.tsx:127-130` y `nosotros/page.tsx:548-551`: unificar). Añadir LinkedIn y YouTube en cuanto existan.
4. **`BreadcrumbList` duplicado con distinta profundidad** — el de `layout.tsx` no existe (está en `page.tsx:143-159` para home con un solo nivel), mientras que las páginas de servicio usan 3 niveles vía `service-page-template.tsx:210-238`. Es consistente, sin acción requerida, solo verificar que la página `/servicios` en sí (índice) tenga su propio `BreadcrumbList` — no se detectó al no leer ese archivo completo; validar.
5. **`Person` schema para el fundador o ingenieros certificados** — actualmente la copy dice "ingenieros certificados" en genérico (`nosotros/page.tsx:65-68`) sin nombres. Si hay una persona identificable (ej. "Cristian", ya usado como contacto de WhatsApp en `coverage.tsx:69`), un `Person` con `worksFor` vinculado al `@id` de la organización refuerza E-E-A-T sin gran esfuerzo.

---

## 10. Sugerencias de reformateo de contenido

| Página / bloque | Problema | Reformateo sugerido |
|---|---|---|
| `importacion.tsx` (home) | H2 en formato pregunta perfecto, respuesta de 38 palabras | Expandir a 134-167 palabras con pasos concretos del proceso de importación (subasta → logística → nacionalización) |
| `faq.tsx` + FAQ por servicio | Preguntas casi idénticas repetidas en 8+ páginas | Reescribir FAQ de cada página de servicio para que sean específicas de ese servicio (ej. en `/diagnostico`: "¿Qué detecta el escáner NEXIQ que un mecánico no detecta a simple vista?") en vez de repetir "¿Qué marcas atienden?" |
| `nosotros/page.tsx:151-159` ("Nuestra Historia") | Narrativa de marca sin datos verificables | Añadir un hito con fecha real: año de fundación (2014, ya está en schema pero no en el texto visible), hito de crecimiento, certificación obtenida |
| Todas las páginas de servicio | Sin tabla comparativa | Añadir una tabla simple "Servicio incluye / No incluye" o "Overhaul parcial vs. completo — diferencias y tiempos" en páginas como `reparacion-motores` — las tablas son un formato de alta citabilidad para IA |
| Home hero (`hero.tsx:38-44`) | Estadísticas sueltas (10+, 100%, 24h) sin fuente ni contexto | Mantener como está para UX, pero repetir las mismas cifras con contexto y fuente dentro de un párrafo citable en `/nosotros` (ej. "CR Project ha reparado más de 500 máquinas desde 2014...") |
| Todo el sitio | Cero contenido en video | Insertar al menos un video embebido en `/reparacion-motores` o `/diagnostico` mostrando el proceso — incluso un video corto de 60-90s sube significativamente la tasa de selección |

---

## Resumen para priorizar

**Quick wins (1-2 días):**
- Párrafos de 134-167 palabras bajo los H2 pregunta existentes (sección 6).
- `dateModified` en schemas (sección 9.1).
- Unificar `sameAs` entre `layout.tsx` y `nosotros/page.tsx`.
- Crear `public/llms.txt` con la plantilla de la sección 4.

**Esfuerzo medio (1-2 semanas):**
- Diferenciar FAQ por página de servicio.
- Tabla comparativa en 2-3 páginas de servicio clave.
- Perfil de LinkedIn + enlace en schema.

**Alto impacto (mes+):**
- Canal de YouTube con contenido de proceso (diagnóstico, reparación, importación).
- Evaluar elegibilidad para Wikidata.
- Programa de reseñas verificadas → `AggregateRating` real.
