"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useState } from "react";

const technicalServices = [
  {
    title: "Diagnóstico y Solución de Fallas",
    description:
      "Evaluación técnica según especificaciones del fabricante. Identificamos el problema exacto con equipos de última generación.",
    image: "/herramientas_de_diagnostico.png",
  },
  {
    title: "Servicio Técnico de Maquinaria Pesada",
    description:
      "Atención especializada para toda la línea amarilla. Excavadoras, cargadores, bulldozers y más.",
    image: "/venta-maquinaria.jpg",
  },
  {
    title: "Reparación de Motores",
    description:
      "Overhaul completo de motores diésel. Rectificación, calibración de inyectores y pruebas de banco.",
    image: "/repair-motores.jpg",
  },
  {
    title: "Venta de Repuestos",
    description:
      "Partes genuinas OEM y aftermarket de alta calidad. Turbos, inyectores, filtros y componentes hidráulicos.",
    image: "/repuestos.jpg",
  },
  {
    title: "Servicio Técnico para Vehículos Pesados",
    description:
      "Mantenimiento y reparación de camiones, tractomulas y flotas de transporte. Cobertura nacional.",
    image: "/repair-maquina.jpg",
  },
  {
    title: "Servicio a Nivel Nacional",
    description:
      "Unidades móviles equipadas para atender emergencias en cualquier punto de Colombia. Vamos donde está su máquina.",
    image: "/tarjeta.jpg",
  },
  {
    title: "Diagnóstico de Maquinaria Amarilla",
    description:
      "Escáner computarizado para CAT, Komatsu, John Deere y todas las marcas líderes del mercado.",
    image: "/herramientas_de_diagnostico.png",
  },
  {
    title: "Reparación y Pintura General",
    description:
      "Restauración completa de carrocería y pintura profesional para maquinaria y vehículos pesados. Acabado de fábrica.",
    image: "/pintura.jpg",
  },
];

export function Differentiators() {
  const { ref, isInView } = useInView();
  const [activeService, setActiveService] = useState(0);

  return (
    <section
      id="motores-diesel"
      aria-labelledby="motores-diesel-title"
      className="py-20 lg:py-28 bg-gray-50"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-yellow text-sm font-bold uppercase tracking-widest">
            Servicio Técnico
          </span>
          <h2
            id="motores-diesel-title"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl text-gray-900 mt-4"
          >
            Diagnóstico y Solución de Fallas
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
            <span className="font-bold text-gray-900">CR Project S.A.S</span> —
            Evaluación técnica según especificaciones del fabricante. Servicio
            técnico especializado con cobertura nacional para maquinaria pesada,
            vehículos de transporte y motores diésel.
          </p>
        </div>

        {/* Layout: Imagen Izquierda + Lista Derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Columna Izquierda: Imagen Grande (Sticky en desktop) */}
          <div className="lg:sticky lg:top-24">
            <div
              className={`relative h-[500px] lg:h-[600px] rounded-sm overflow-hidden shadow-2xl ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              <Image
                src={technicalServices[activeService].image}
                alt={technicalServices[activeService].title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-all duration-500"
              />
              {/* Overlay con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-carbon/60 via-transparent to-transparent" />

              {/* Badge del servicio activo */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-sm p-4 shadow-lg">
                  <h3 className="font-heading text-xl text-gray-900 mb-1">
                    {technicalServices[activeService].title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {technicalServices[activeService].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Lista de Servicios */}
          <div className="space-y-3">
            {technicalServices.map((service, i) => (
              <button
                key={service.title}
                onClick={() => setActiveService(i)}
                className={`w-full text-left p-5 rounded-sm border-2 transition-all duration-300 ${
                  isInView ? "animate-fade-in-up" : "opacity-0"
                } ${
                  activeService === i
                    ? "bg-white border-brand-yellow shadow-lg"
                    : "bg-white/50 border-gray-200 hover:border-brand-yellow/50 hover:bg-white"
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-4">
                  {/* Icono/Check */}
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      activeService === i
                        ? "bg-brand-yellow text-carbon"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    <CheckCircle className="w-5 h-5" />
                  </div>

                  {/* Contenido */}
                  <div className="flex-1">
                    <h3
                      className={`font-heading text-lg font-bold mb-1 transition-colors ${
                        activeService === i ? "text-gray-900" : "text-gray-700"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed transition-colors ${
                        activeService === i ? "text-gray-600" : "text-gray-500"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Indicador de activo */}
                  {activeService === i && (
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse" />
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/573133799992?text=Hola%2C%20necesito%20servicio%20t%C3%A9cnico%20para%20mi%20maquinaria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-amber text-carbon font-bold px-8 py-4 rounded-sm transition-all hover:shadow-lg"
          >
            Solicitar Servicio Técnico
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-gray-500 text-sm mt-4">
            Respuesta rápida por WhatsApp — Cobertura nacional
          </p>
        </div>
      </div>
    </section>
  );
}
