import { Metadata } from "next";
import { Globe, Wrench, Cpu, Truck, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";
import { Phone } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nosotros — Operación Binacional EE.UU.–Colombia en Maquinaria Pesada",
  description:
    "CR Project S.A.S: empresa especializada en repuestos, servicio técnico e importación de maquinaria pesada. Operación binacional con sede en Mosquera, Cundinamarca y presencia en Miami, Florida.",
  alternates: { canonical: "https://www.crprojectsas.com/nosotros" },
};

const capabilities = [
  {
    icon: Globe,
    title: "Operación Binacional",
    description: "Presencia en Colombia y Estados Unidos. Participamos en las subastas de maquinaria más grandes del mundo y compramos a dealers directos.",
  },
  {
    icon: Wrench,
    title: "Servicio Técnico Integral",
    description: "Diagnóstico, reparación y mantenimiento según especificaciones del fabricante. No trabajamos a ojo — evaluación técnica formal.",
  },
  {
    icon: Cpu,
    title: "Electrónica Avanzada",
    description: "Reconstrucción de harness, módulos REMAN programados y diagnóstico con herramientas profesionales. Electrónica y programación, no solo mecánica.",
  },
  {
    icon: Truck,
    title: "Cobertura Nacional",
    description: "Reparaciones profesionales en campo. Atendemos solicitudes a nivel nacional — vamos donde está la máquina.",
  },
  {
    icon: ShieldCheck,
    title: "Cumplimiento Normativo",
    description: "PESV, cintas reflectivas 3M y seguridad vial. Ayudamos a empresas de transporte a cumplir con la normativa del MinTransporte.",
  },
  {
    icon: Users,
    title: "Asesoría Especializada",
    description: "Consultoría de ingeniería mecánica para sector petrolero, industrial y de transporte. Soluciones a medida.",
  },
];

export default function NosotrosPage() {
  return (
    <div className="pt-20">
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 industrial-gradient" />
        
        {/* IMAGEN DE FONDO: sin opacity para que se vea nítida */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/banner-nos.jpg')" }}
        />
        
        {/* MÁSCARA OSCURA: equilibrio medio (50% arriba, 90% abajo) */}
        <div className="absolute inset-0 bg-gradient-to-b from-carbon/50 to-carbon/90" />
        
        {/* CONTENIDO */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-bone/40 mb-8">
            <Link href="/" className="hover:text-brand-yellow transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-bone/60">Nosotros</span>
          </nav>
          <div className="max-w-3xl">
            <span className="text-brand-yellow text-sm font-bold uppercase tracking-widest">Quiénes Somos</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-bone mt-4">
              Especialistas en Maquinaria Pesada con Operación Internacional
            </h1>
            <p className="text-bone/80 mt-6 text-lg leading-relaxed">
              Somos una empresa comercializadora de partes para maquinaria amarilla, camiones y motores diésel.
              Con operación en Estados Unidos y Colombia, ofrecemos servicio técnico especializado, importación de maquinaria
              y soluciones integrales con cobertura nacional.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl text-gray-900">Nuestra Historia</h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  CR Project S.A.S nació de la necesidad de ofrecer soluciones reales al sector de maquinaria pesada
                  en Colombia. Con una visión clara: ser el aliado técnico que las empresas necesitan, con acceso
                  directo a partes genuinas y equipos importados desde Estados Unidos.
                </p>
                <p>
                  Hoy operamos desde nuestra sede en Mosquera, Cundinamarca y tenemos presencia en Miami, Florida,
                  donde participamos en las subastas de maquinaria más grandes del mundo y compramos directamente
                  a dealers autorizados.
                </p>
                <p>
                  Nuestra diferencia: no somos solo un taller mecánico. Somos una empresa con capacidad técnica
                  avanzada en electrónica, programación de módulos, importación y cumplimiento normativo.
                  Un solo proveedor para todo lo que su operación necesita.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-sm overflow-hidden border border-gray-200 relative">
                <Image
                  src="/nuestra-historia.jpg"
                  alt="Taller de maquinaria pesada CR Project S.A.S"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-yellow p-6 rounded-sm">
                <p className="font-heading text-3xl text-carbon">10+</p>
                <p className="text-carbon/70 text-sm font-medium">Años de experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-carbon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl text-bone">Nuestras Capacidades</h2>
            <p className="text-bone/60 mt-4 max-w-2xl mx-auto">
              Combinamos experiencia técnica, acceso internacional a partes y cobertura nacional
              para ofrecer un servicio que pocos pueden igualar.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.title} className="p-6 bg-graphite/60 border border-steel/20 rounded-sm">
                  <div className="w-12 h-12 bg-brand-yellow/10 border border-brand-yellow/20 rounded-sm flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-yellow" />
                  </div>
                  <h3 className="font-heading text-lg text-bone">{cap.title}</h3>
                  <p className="text-sm text-bone/50 mt-2 leading-relaxed">{cap.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl text-gray-900">Operación Internacional</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white border border-gray-200 rounded-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🇨🇴</span>
                <h3 className="font-heading text-xl text-gray-900">Colombia</h3>
              </div>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>Sede principal: Mosquera, Cundinamarca</li>
                <li>Servicio técnico con cobertura nacional</li>
                <li>Reparaciones profesionales en campo</li>
                <li>Bodega de repuestos con disponibilidad inmediata</li>
                <li>Atención a sector transporte, construcción y petrolero</li>
              </ul>
            </div>
            <div className="p-8 bg-white border border-gray-200 rounded-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🇺🇸</span>
                <h3 className="font-heading text-xl text-gray-900">Estados Unidos</h3>
              </div>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>Operación en Miami, Florida</li>
                <li>Participación en subastas internacionales</li>
                <li>Compra directa a dealers autorizados</li>
                <li>Importación de maquinaria y repuestos genuinos</li>
                <li>Logística de exportación hacia Colombia y Venezuela</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl text-carbon">
            ¿Listo para Trabajar con Nosotros?
          </h2>
          <p className="text-carbon/70 mt-4 text-lg">
            Una sola empresa para repuestos, servicio técnico, importación y cumplimiento normativo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="https://wa.me/573133799992?text=Hola%2C%20quiero%20información%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-carbon hover:bg-graphite text-bone font-bold px-8 py-4 rounded-sm transition-all"
            >
              <Phone className="w-5 h-5" />
              Contactar por WhatsApp
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 border-2 border-carbon/30 text-carbon font-bold px-8 py-4 rounded-sm transition-all hover:bg-carbon/10"
            >
              Formulario de Contacto
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.crprojectsas.com" },
              { "@type": "ListItem", position: 2, name: "Nosotros", item: "https://www.crprojectsas.com/nosotros" },
            ],
          }),
        }}
      />
    </div>
  );
}