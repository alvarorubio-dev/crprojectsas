# 🏗️ CR Project S.A.S - Sitio Web Corporativo

Sitio web corporativo desarrollado con **Next.js** para **CR Project S.A.S**, empresa líder en la comercialización de repuestos, servicio técnico especializado e importación directa de maquinaria pesada, con operación binacional en **Estados Unidos 🇺🇸** y **Colombia 🇨🇴**.

> **Objetivo:** Proporcionar una plataforma digital rápida, optimizada para SEO y con una experiencia de usuario moderna, que permita a los clientes cotizar repuestos, conocer los servicios técnicos y contactar directamente a través de WhatsApp.

---

## ✨ Características Principales

- 🚀 **Alto Rendimiento:** Construido con Next.js (App Router) para una carga ultrarrápida y renderizado optimizado.
- 📱 **Diseño 100% Responsivo:** Adaptable a móviles, tablets y escritorio utilizando Tailwind CSS.
- 🔍 **SEO Optimizado:** Metadatos dinámicos, sitemap y robots.txt configurados para mejorar el posicionamiento en buscadores.
- 💬 **Integración con WhatsApp:** Botón flotante y llamadas a la acción (CTA) directas para cotizaciones rápidas.
- 🧩 **Arquitectura de Componentes:** Código modular y reutilizable (ej. `ServicePageTemplate`) para un fácil mantenimiento y escalabilidad.
- 🎨 **UI Moderna:** Implementación de componentes accesibles y estéticos con `shadcn/ui`.

---

## 🛠️ Tecnologías Utilizadas

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI:** [shadcn/ui](https://ui.shadcn.com/)
- **Iconos:** [Lucide React](https://lucide.dev/)
- **Formateo:** ESLint & Prettier

---

## 📂 Estructura del Proyecto

```text
├── app/                      # Rutas y páginas de Next.js (App Router)
│   ├── alquiler-maquinaria/  # Página específica de alquiler
│   ├── venta-maquinaria/     # Página específica de venta
│   ├── servicios/            # Páginas de servicios técnicos
│   ├── layout.tsx            # Layout principal (Header, Footer, Metadata)
│   └── page.tsx              # Página de inicio (Home)
├── components/               # Componentes reutilizables
│   ├── layout/               # Header, Footer, FloatingWhatsApp
│   ├── sections/             # Hero, ServicesGrid, Coverage, CTA, etc.
│   └── ui/                   # Componentes base de shadcn/ui
├── public/                   # Archivos estáticos (imágenes, favicon, etc.)
├── lib/                      # Utilidades y funciones auxiliares
└── hooks/                    # Custom React hooks


🚀 Cómo ejecutar el proyecto localmente
Sigue estos pasos para configurar el entorno de desarrollo:
🚀 Cómo ejecutar el proyecto localmente
Sigue estos pasos para configurar el entorno de desarrollo:
1. Clona el repositorio:
git clone https://github.com/alvarorubio-dev/crprojectsas.git
cd crprojectsas
2. Instala las dependencias:npm install
# o yarn install / pnpm install / bun install
3. Ejecuta el servidor de desarrollo:
npm run dev
4. Abre el navegador:
Visita http://localhost:3000 para ver el resultado.
🏢 Información del Cliente
Nombre: CR Project S.A.S
Giro: Comercializadora de partes para maquinaria amarilla, camiones y motores diésel.
Cobertura: Nacional (Colombia) e Internacional (Miami, FL, EE.UU.).
Sede Principal: Carrocerías Capri, El Cerrito, Mosquera, Cundinamarca, Colombia.
Horario de Atención: Lunes a Sábado, 7:00 AM — 6:00 PM.
Contacto Directo: +57 313 379 9992 (Cristian - WhatsApp).
🤝 Marcas Aliadas
CAT, CNH, John Deere, New Holland, Nexiq, Garrett, BorgWarner, 3M, entre otras.
📝 Servicios Destacados
Venta de Repuestos: Genuinos y alternativos de alta calidad (Turbos, inyectores, filtros, hidráulica).
Reparación de Maquinaria Pesada: Restauración integral de equipos amarilla.
Diagnóstico Computarizado: Escáner de última generación para CAT, Komatsu, John Deere, etc.
Mantenimiento Eléctrico y Preventivo: Programas a medida para flotas.
Alquiler y Venta de Maquinaria: Equipos certificados con operador opcional.
📄 Licencia
Este proyecto es propiedad de CR Project S.A.S y fue desarrollado por [Tu Nombre / alvarorubio-dev]. Todos los derechos reservados.
💡 Nota para desarrolladores: Asegúrate de que todas las imágenes utilizadas en el sitio estén optimizadas y ubicadas correctamente en la carpeta public/ para garantizar los mejores tiempos de carga.


### 💡 Pasos para agregarlo a GitHub:

1. Crea el archivo `README.md` en la carpeta raíz de tu proyecto (`C:\dev\cs-project-sas\README.md`).
2. Pega el contenido de arriba.
3. Guarda el archivo.
4. Ejecuta estos comandos en tu terminal para subirlo:

```bash
git add README.md
git commit -m "docs: agregar README.md profesional con información del proyecto"
git push origin main
