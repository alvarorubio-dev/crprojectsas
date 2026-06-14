import { Metadata } from "next";
import Link from "next/link";
import {
  Wrench,
  Cog,
  Truck,
  Cpu,
  Droplets,
  Factory,
  Zap,
  Package,
  ArrowRight,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios — Repuestos, Reparación y Maquinaria Pesada",
  description:
    "Todos nuestros servicios: repuestos genuinos, reparación de maquinaria pesada, escáner y diagnóstico, mantenimiento eléctrico, mantenimiento de flotas, alquiler y venta de maquinaria.",
  alternates: { canonical: "https://www.crprojectsas.com/servicios" },
};

const services = [
  {
    title: "Venta de Repuestos",
    description:
      "Partes genuinas OEM y aftermarket para CAT, CNH, John Deere, New Holland. Turbos Garrett/BorgWarner, inyectores, filtros. Disponibilidad inmediata.",
    href: "/repuestos",
    icon: Package,
    tag: "Disponibilidad inmediata",
  },
  {
    title: "Reparación de Maquinaria Pesada",
    description:
      "Diagnóstico y solución de fallas según especificaciones del fabricante. Evaluación técnica formal con cobertura a nivel nacional.",
    href: "/servicio-tecnico",
    icon: Wrench,
    tag: "Más solicitado",
  },
  {
    title: "Escáner y Diagnóstico",
    description:
      "Diagnóstico computarizado con escáner profesional, reconstrucción de harness eléctricos y módulos REMAN programados. Capacidad técnica avanzada.",
    href: "/diagnostico",
    icon: Cpu,
    tag: "Especialidad única",
  },
  {
    title: "Mantenimiento Eléctrico",
    description:
      "Reparación de alternadores, motores de arranque y revisión de cableado para maquinaria pesada. Diagnóstico eléctrico profesional.",
    href: "/mantenimiento-electrico",
    icon: Zap,
  },
  {
    title: "Mantenimiento Preventivo y Correctivo",
    description:
      "Planes de mantenimiento para flotas de carga y pasajeros. Contratos recurrentes que minimizan paradas y aseguran cumplimiento.",
    href: "/mantenimiento-flotas",
    icon: Truck,
    tag: "Contratos recurrentes",
  },
  {
    title: "Alquiler de Maquinaria y Equipos",
    description:
      "Flota disponible para alquiler con opciones flexibles. Equipos certificados y listos para operar en cualquier proyecto.",
    href: "/alquiler-maquinaria",
    icon: Factory,
  },
  {
    title: "Reparación de Motores Diésel",
    description:
      "Diagnóstico y reparación completa de motores diésel para maquinaria amarilla y vehículos pesados. Mano de obra especializada.",
    href: "/reparacion-motores",
    icon: Cog,
  },
  {
    title: "Venta de Maquinaria",
    description:
      "Importamos directamente desde las subastas más grandes del mundo en EE.UU. Equipos verificados con historial: CAT 730, John Deere 310G y más.",
    href: "/venta-maquinaria",
    icon: Droplets,
    tag: "Alto ticket",
  },
];

export default function ServiciosPage() {
  return (
    <div className="pt-20">
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* IMAGEN DE FONDO: sin opacity para que se vea nítida */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/venta-maquinaria.jpg')" }}
        />

        {/* MÁSCARA OSCURA: equilibrio medio (50% arriba, 90% abajo) */}
        <div className="absolute inset-0 bg-gradient-to-b from-carbon/50 to-carbon/90" />

        {/* CONTENIDO */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-brand-yellow text-sm font-bold uppercase tracking-widest">
              Servicios
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-bone mt-4">
              Soluciones Integrales para Maquinaria Pesada
            </h1>
            <p className="text-bone/80 mt-6 text-lg leading-relaxed">
              Somos una empresa comercializadora de partes para maquinaria
              amarilla, camiones y motores diésel. Servicio técnico
              especializado con cobertura nacional y operación binacional
              EE.UU.–Colombia.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group relative bg-white border border-gray-200 rounded-sm p-8 transition-all duration-300 hover:border-brand-yellow hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-yellow/10"
                >
                  {service.tag && (
                    <span className="absolute top-4 right-4 text-xs font-bold text-carbon bg-brand-yellow px-3 py-1 rounded-sm">
                      {service.tag}
                    </span>
                  )}
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-brand-yellow/10 border border-brand-yellow/20 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-brand-yellow/20 transition-colors">
                      <Icon className="w-7 h-7 text-brand-yellow" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-heading text-xl text-gray-900 group-hover:text-gray-600 transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-gray-700 text-sm font-bold mt-4 group-hover:gap-2 transition-all border-b border-brand-yellow pb-0.5">
                        Ver servicio <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl text-carbon">
            ¿No encuentra lo que busca?
          </h2>
          <p className="text-carbon/70 mt-4 text-lg">
            Pregunta lo que buscas. Tenemos acceso a partes genuinas y
            aftermarket de todas las marcas.
          </p>
          <a
            href="https://wa.me/573133799992?text=Hola%2C%20necesito%20cotizar%20un%20servicio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-carbon hover:bg-graphite text-bone font-bold text-base px-8 py-4 rounded-sm transition-all mt-8"
          >
            <Phone className="w-5 h-5" />
            Consultar por WhatsApp
          </a>
        </div>
      </section>

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
                name: "Servicios",
                item: "https://www.crprojectsas.com/servicios",
              },
            ],
          }),
        }}
      />
    </div>
  );
}
