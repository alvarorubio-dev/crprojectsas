import { Metadata } from "next";
import { Globe, Wrench, Cpu, Truck, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";
import { Phone } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Nosotros — Especialistas en Maquinaria Pesada Colombia | Importación USA | CR Project SAS",
  description:
    "Líderes en repuestos, servicio técnico e importación de maquinaria pesada en Colombia. Operación binacional USA-Colombia. +10 años de experiencia. Cobertura nacional.",
  keywords:
    "maquinaria pesada Colombia, repuestos maquinaria amarilla, importación maquinaria USA, servicio técnico maquinaria pesada, taller Mosquera Cundinamarca",
  alternates: { canonical: "https://www.crprojectsas.com/nosotros" },
  openGraph: {
    title: "CR Project | Especialistas en Maquinaria Pesada Colombia",
    description:
      "Importación directa desde USA. Servicio técnico certificado. Repuestos genuinos CAT, Komatsu, John Deere. Cobertura nacional.",
    url: "https://www.crprojectsas.com/nosotros",
    type: "website",
    images: [
      {
        url: "https://www.crprojectsas.com/banner-nos.jpg",
        width: 1200,
        height: 630,
        alt: "CR Project - Maquinaria Pesada Colombia",
      },
    ],
  },
};

const capabilities = [
  {
    icon: Globe,
    title: "Operación Binacional USA-Colombia",
    description:
      "Sede en Mosquera + oficina en Miami, Florida. Participamos en subastas Ritchie Bros e IronPlanet. Compramos directo a dealers CAT, Komatsu y John Deere.",
  },
  {
    icon: Wrench,
    title: "Servicio Técnico Certificado",
    description:
      "Diagnóstico con software OEM (CAT ET, Komatsu KTTS). Reparación según especificaciones del fabricante. Mantenimiento preventivo y correctivo profesional.",
  },
  {
    icon: Cpu,
    title: "Electrónica y Programación Avanzada",
    description:
      "Programación de módulos ECM/TCM. Reconstrucción de harness eléctrico. Módulos REMAN a VIN específico. Lo que otros talleres no hacen.",
  },
  {
    icon: Truck,
    title: "Cobertura Nacional Garantizada",
    description:
      "Servicio técnico en campo en toda Colombia. Atención de emergencias 24/7. Vamos donde está su máquina — Bogotá, Medellín, Cali, Costa y más.",
  },
  {
    icon: ShieldCheck,
    title: "Cumplimiento Normativo PESV",
    description:
      "Certificación PESV para flotas de transporte. Instalación de cintas reflectivas 3M homologadas. Cumplimiento MinTransporte. Documentación técnica incluida.",
  },
  {
    icon: Users,
    title: "Asesoría en Ingeniería Mecánica",
    description:
      "Consultoría especializada para sector petrolero, minería, construcción y transporte. Soluciones personalizadas. Soporte técnico de ingenieros certificados.",
  },
];

export default function NosotrosPage() {
  return (
    <div className="pt-20">
      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 industrial-gradient" />

        {/* IMAGEN DE FONDO */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/banner-nos.jpg')" }}
        />

        {/* MÁSCARA OSCURA */}
        <div className="absolute inset-0 bg-gradient-to-b from-carbon/50 to-carbon/90" />

        {/* CONTENIDO */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-bone/40 mb-8">
            <Link
              href="/"
              className="hover:text-brand-yellow transition-colors"
            >
              Inicio
            </Link>
            <span>/</span>
            <span className="text-bone/60">Nosotros</span>
          </nav>
          <div className="max-w-3xl">
            <span className="text-brand-yellow text-sm font-bold uppercase tracking-widest">
              Líderes en Maquinaria Pesada
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-bone mt-4">
              Especialistas en Repuestos e Importación desde USA
            </h1>
            <p className="text-bone/90 mt-6 text-lg leading-relaxed">
              Más de <strong>10 años</strong> siendo el aliado estratégico de
              empresas en Colombia para{" "}
              <strong>
                repuestos genuinos, servicio técnico certificado e importación
                de maquinaria pesada
              </strong>{" "}
              desde Estados Unidos.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 text-bone/80">
                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                <span className="text-sm font-medium">
                  Importación directa desde Miami
                </span>
              </div>
              <div className="flex items-center gap-2 text-bone/80">
                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                <span className="text-sm font-medium">
                  Cobertura en toda Colombia
                </span>
              </div>
              <div className="flex items-center gap-2 text-bone/80">
                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                <span className="text-sm font-medium">
                  Servicio técnico 24/7
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: QUIÉNES SOMOS */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-yellow text-sm font-bold uppercase tracking-widest">
                Nuestra Historia
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl text-gray-900 mt-3">
                ¿Por Qué Elegirnos Sobre un Taller Tradicional?
              </h2>
              <div className="mt-6 space-y-5 text-gray-700 leading-relaxed">
                <p>
                  <strong>CR Project S.A.S</strong> nació para resolver un
                  problema real: las empresas colombianas necesitaban un
                  proveedor confiable con{" "}
                  <strong>
                    acceso directo a repuestos genuinos desde Estados Unidos
                  </strong>{" "}
                  y capacidad técnica avanzada — no solo mecánica básica.
                </p>
                <p>
                  Hoy operamos desde <strong>Mosquera, Cundinamarca</strong> con
                  presencia permanente en <strong>Miami, Florida</strong>,
                  donde:
                </p>
                <ul className="space-y-2 ml-5">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-yellow mt-1">✓</span>
                    <span>
                      Participamos en las subastas más grandes del mundo
                      (Ritchie Bros, IronPlanet, Copart)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-yellow mt-1">✓</span>
                    <span>
                      Compramos directamente a dealers autorizados CAT, Komatsu,
                      John Deere
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-yellow mt-1">✓</span>
                    <span>
                      Importamos maquinaria completa y repuestos con logística
                      propia
                    </span>
                  </li>
                </ul>
                <div className="p-5 bg-gray-50 border-l-4 border-brand-yellow rounded-sm">
                  <p className="font-semibold text-gray-900">
                    Nuestra diferencia clave:
                  </p>
                  <p className="text-sm mt-2">
                    No somos solo un taller mecánico. Somos{" "}
                    <strong>ingenieros especializados</strong> con capacidad en
                    electrónica automotriz, programación de módulos, importación
                    internacional y cumplimiento normativo.{" "}
                    <strong>
                      Un solo proveedor para todo lo que su operación necesita.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-sm overflow-hidden border border-gray-200 relative shadow-xl">
                <Image
                  src="/nuestra-historia.jpg"
                  alt="Taller especializado en maquinaria pesada CR Project - Mosquera, Colombia"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-yellow p-6 rounded-sm shadow-lg">
                <p className="font-heading text-4xl text-carbon">10+</p>
                <p className="text-carbon/70 text-sm font-medium uppercase tracking-wide">
                  Años de Experiencia
                </p>
              </div>
              <div className="absolute -top-6 -right-6 bg-carbon p-4 rounded-sm shadow-lg">
                <p className="text-brand-yellow text-xs font-bold uppercase">
                  Certificados
                </p>
                <p className="text-bone text-sm">CAT • Komatsu • Cummins</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: CAPACIDADES */}
      <section className="py-16 lg:py-20 bg-carbon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-yellow text-sm font-bold uppercase tracking-widest">
              Lo Que Nos Diferencia
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-bone mt-3">
              Capacidades Técnicas Avanzadas
            </h2>
            <p className="text-bone/70 mt-4 max-w-2xl mx-auto text-lg">
              Combinamos experiencia en ingeniería, acceso internacional a
              repuestos genuinos y cobertura nacional para ofrecer un{" "}
              <strong>servicio integral que pocos pueden igualar</strong>.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="p-6 bg-graphite/60 border border-steel/20 rounded-sm hover:border-brand-yellow/40 transition-all group"
                >
                  <div className="w-12 h-12 bg-brand-yellow/10 border border-brand-yellow/20 rounded-sm flex items-center justify-center mb-4 group-hover:bg-brand-yellow/20 transition-all">
                    <Icon className="w-6 h-6 text-brand-yellow" />
                  </div>
                  <h3 className="font-heading text-lg text-bone mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-bone/60 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECCIÓN: OPERACIÓN INTERNACIONAL */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-yellow text-sm font-bold uppercase tracking-widest">
              Presencia Global
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-gray-900 mt-3">
              Operación Binacional USA-Colombia
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Dos países, una sola empresa. Acceso directo a las mejores fuentes
              de maquinaria y repuestos del mundo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* COLOMBIA */}
            <div className="p-8 bg-white border border-gray-200 rounded-sm shadow-md hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🇨🇴</span>
                <div>
                  <h3 className="font-heading text-2xl text-gray-900">
                    Colombia
                  </h3>
                  <p className="text-sm text-gray-500">
                    Sede Principal y Operaciones
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-brand-yellow mt-1 flex-shrink-0">
                    ✓
                  </span>
                  <span>
                    <strong>Sede principal:</strong> Mosquera, Cundinamarca
                    (área metropolitana de Bogotá)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-yellow mt-1 flex-shrink-0">
                    ✓
                  </span>
                  <span>
                    <strong>Servicio técnico</strong> con cobertura en todo el
                    país (Bogotá, Medellín, Cali, Barranquilla, Cartagena)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-yellow mt-1 flex-shrink-0">
                    ✓
                  </span>
                  <span>
                    <strong>Reparaciones en campo</strong> — vamos donde está su
                    maquinaria
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-yellow mt-1 flex-shrink-0">
                    ✓
                  </span>
                  <span>
                    <strong>Bodega de repuestos</strong> con inventario
                    permanente
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-yellow mt-1 flex-shrink-0">
                    ✓
                  </span>
                  <span>
                    Atención especializada a{" "}
                    <strong>
                      transporte, construcción, minería y petroleras
                    </strong>
                  </span>
                </li>
              </ul>
            </div>

            {/* ESTADOS UNIDOS */}
            <div className="p-8 bg-white border border-gray-200 rounded-sm shadow-md hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🇺🇸</span>
                <div>
                  <h3 className="font-heading text-2xl text-gray-900">
                    Estados Unidos
                  </h3>
                  <p className="text-sm text-gray-500">Centro de Importación</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-brand-yellow mt-1 flex-shrink-0">
                    ✓
                  </span>
                  <span>
                    <strong>Oficina operativa:</strong> Miami, Florida
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-yellow mt-1 flex-shrink-0">
                    ✓
                  </span>
                  <span>
                    <strong>Participación activa</strong> en subastas Ritchie
                    Bros, IronPlanet, Copart
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-yellow mt-1 flex-shrink-0">
                    ✓
                  </span>
                  <span>
                    <strong>Compra directa</strong> a dealers autorizados CAT,
                    Komatsu, Volvo, John Deere
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-yellow mt-1 flex-shrink-0">
                    ✓
                  </span>
                  <span>
                    <strong>Importación de maquinaria</strong> completa y
                    repuestos genuinos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-yellow mt-1 flex-shrink-0">
                    ✓
                  </span>
                  <span>
                    <strong>Logística de exportación</strong> hacia Colombia y
                    Venezuela
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* ESTADÍSTICAS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-sm border border-gray-200">
              <p className="font-heading text-3xl text-brand-yellow">10+</p>
              <p className="text-sm text-gray-600 mt-1">Años de Experiencia</p>
            </div>
            <div className="text-center p-6 bg-white rounded-sm border border-gray-200">
              <p className="font-heading text-3xl text-brand-yellow">500+</p>
              <p className="text-sm text-gray-600 mt-1">Máquinas Reparadas</p>
            </div>
            <div className="text-center p-6 bg-white rounded-sm border border-gray-200">
              <p className="font-heading text-3xl text-brand-yellow">2</p>
              <p className="text-sm text-gray-600 mt-1">Países de Operación</p>
            </div>
            <div className="text-center p-6 bg-white rounded-sm border border-gray-200">
              <p className="font-heading text-3xl text-brand-yellow">24/7</p>
              <p className="text-sm text-gray-600 mt-1">Soporte Técnico</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 bg-brand-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl text-carbon">
            ¿Necesita Repuestos o Servicio Técnico Especializado?
          </h2>
          <p className="text-carbon/80 mt-4 text-lg max-w-2xl mx-auto">
            Cotice repuestos genuinos, agende servicio técnico o consulte por
            importación de maquinaria.{" "}
            <strong>Respuesta en menos de 2 horas.</strong>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="https://wa.me/573133799992?text=Hola%2C%20necesito%20cotizar%20repuestos%20para%20maquinaria%20pesada"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-carbon hover:bg-graphite text-bone font-bold px-8 py-4 rounded-sm transition-all shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Cotizar por WhatsApp
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 border-2 border-carbon/30 text-carbon font-bold px-8 py-4 rounded-sm transition-all hover:bg-carbon/10 hover:border-carbon"
            >
              Solicitar Asesoría Técnica
            </Link>
          </div>
          <p className="text-carbon/60 text-sm mt-6">
            ✓ Sin compromiso • ✓ Respuesta inmediata • ✓ Asesoría especializada
          </p>
        </div>
      </section>

      {/* SCHEMA MARKUP */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "CR Project S.A.S",
            description:
              "Especialistas en repuestos, servicio técnico e importación de maquinaria pesada en Colombia. Operación binacional USA-Colombia.",
            image: "https://www.crprojectsas.com/banner-nos.jpg",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Mosquera",
              addressLocality: "Mosquera",
              addressRegion: "Cundinamarca",
              addressCountry: "CO",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "4.7059",
              longitude: "-74.2322",
            },
            url: "https://www.crprojectsas.com",
            telephone: "+573133799992",
            priceRange: "$$",
            areaServed: {
              "@type": "Country",
              name: "Colombia",
            },
            foundingDate: "2014",
            serviceArea: [
              {
                "@type": "City",
                name: "Bogotá",
              },
              {
                "@type": "City",
                name: "Medellín",
              },
              {
                "@type": "City",
                name: "Cali",
              },
              {
                "@type": "Country",
                name: "Colombia",
              },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Servicios de Maquinaria Pesada",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Repuestos para Maquinaria Pesada",
                    description: "Importación de repuestos genuinos desde USA",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Servicio Técnico Especializado",
                    description:
                      "Reparación y mantenimiento de maquinaria amarilla",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Importación de Maquinaria",
                    description:
                      "Importación de equipos completos desde Estados Unidos",
                  },
                },
              ],
            },
            sameAs: [
              "https://www.facebook.com/crprojectsas",
              "https://www.instagram.com/crprojectsas",
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Inicio",
                item: "https://www.crprojectsas.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Nosotros",
                item: "https://www.crprojectsas.com/nosotros",
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Dónde está ubicado CR Project?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nuestra sede principal está en Mosquera, Cundinamarca, Colombia. También tenemos operaciones en Miami, Florida, Estados Unidos para importación de maquinaria y repuestos.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué marcas de maquinaria pesada atienden?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Trabajamos con todas las marcas principales: Caterpillar (CAT), Komatsu, John Deere, Volvo, Case, JCB, y más. Importamos repuestos genuinos directamente desde Estados Unidos.",
                },
              },
              {
                "@type": "Question",
                name: "¿Tienen cobertura nacional en Colombia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, ofrecemos servicio técnico en campo con cobertura en toda Colombia. Atendemos Bogotá, Medellín, Cali, Barranquilla, Cartagena y todo el territorio nacional.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
