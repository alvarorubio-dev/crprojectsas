"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/use-in-view";

const services = [
  {
    title: "Venta de Repuestos",
    description:
      "Amplio catálogo de repuestos genuinos y alternativos de alta calidad para garantizar el máximo rendimiento de su equipo.",
    href: "/repuestos",
    image: "/repuestos.jpg",
  },
  {
    title: "Reparación de Maquinaria Pesada",
    description:
      "Servicio especializado en la restauración y reparación integral de todo tipo de maquinaria amarilla y equipos industriales.",
    href: "/servicio-tecnico",
    image: "/repair-maquina.jpg",
    highlight: true,
  },
  {
    title: "Herramientas de Diagnóstico",
    description:
      "Tecnología de punta para identificar fallas con precisión, utilizando equipos de diagnóstico computarizado de última generación.",
    href: "/diagnostico",
    image: "/herramientas_de_diagnostico.png",
  },
  {
    title: "Mantenimiento Eléctrico",
    description:
      "Soluciones completas para sistemas eléctricos, desde la reparación de alternadores y motores de arranque hasta la revisión de cableado.",
    href: "/mantenimiento-electrico",
    image: "/mante-electrico.jpg",
  },
  {
    title: "Mantenimiento Preventivo y Correctivo",
    description:
      "Programas a medida para extender la vida útil de su flota, minimizando tiempos de inactividad y costos operativos.",
    href: "/mantenimiento-flotas",
    image: "/mantenimiento-correctivo.jpg",
  },
  {
    title: "Alquiler de Maquinaria y Equipos",
    description:
      "Flota disponible para alquiler con opciones flexibles, equipos certificados y listos para operar en cualquier proyecto.",
    href: "/alquiler-maquinaria",
    image: "/alquiler-maquinaria.jpg",
  },
  {
    title: "Reparación de Motores",
    description:
      "Overhaul y reparación completa de motores diésel, cumpliendo rigurosamente con las especificaciones y estándares del fabricante.",
    href: "/reparacion-motores",
    image: "/repair-motores.jpg",
  },
  {
    title: "Venta de Maquinaria",
    description:
      "Comercialización de maquinaria pesada nueva y usada, importada directamente y con garantía de funcionamiento verificada.",
    href: "/venta-maquinaria",
    image: "/venta-maquinaria.jpg",
    highlight: true,
  },
];

export function ServicesGrid() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="servicios"
      aria-labelledby="servicios-title"
      className="py-20 lg:py-28 bg-gray-50"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-yellow text-sm font-bold uppercase tracking-widest">
            Nuestros Servicios
          </span>
          <h2
            id="servicios-title"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl text-gray-900 mt-4"
          >
            Repuestos y Servicio Técnico Especializado en
            <br className="hidden sm:block" /> Maquinaria Pesada
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Una sola empresa para repuestos, diagnóstico, reparación,
            importación y cumplimiento normativo. No necesita múltiples
            proveedores.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            return (
              <Link
                key={service.href + i}
                href={service.href}
                className={`group relative bg-white border border-gray-200 rounded-sm overflow-hidden transition-all duration-300 hover:border-brand-yellow hover:shadow-lg hover:shadow-brand-yellow/10 hover:-translate-y-1 ${
                  isInView ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="h-48 w-full overflow-hidden relative">
                  <Image
                    src={service.image}
                    alt={`${service.title} especializado en maquinaria pesada — CR Project S.A.S Colombia`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  {service.highlight && (
                    <div className="absolute top-3 right-3 bg-brand-yellow text-carbon text-xs font-bold px-2 py-1 rounded-sm shadow-md">
                      Destacado
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-lg text-gray-900 group-hover:text-gray-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-yellow scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-gray-900 font-bold hover:text-gray-600 border-b-2 border-brand-yellow pb-0.5 transition-colors"
          >
            Ver todos los servicios en detalle
          </Link>
        </div>
      </div>
    </section>
  );
}
