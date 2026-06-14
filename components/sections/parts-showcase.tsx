"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wrench, Package, Shield } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const parts = [
  {
    name: "Turbos para Motores Diésel",
    category: "Motor",
    brands: "CAT, Komatsu, Cummins",
    image: "turbo.jpg",
    slug: "turbos-motores-diesel",
  },
  {
    name: "Inyectores de Combustible",
    category: "Sistema de Inyección",
    brands: "Bosch, Delphi, Denso",
    image: "repair-inyector.jpg",
    slug: "inyectores-combustible",
  },
  {
    name: "Filtros Industriales",
    category: "Filtración",
    brands: "Fleetguard, Donaldson, Baldwin",
    image: "filtros.jpg",
    slug: "filtros-industriales",
  },
  {
    name: "Componentes Hidráulicos",
    category: "Hidráulica",
    brands: "Parker, Rexroth, Kawasaki",
    image: "hidraulico.jpg",
    slug: "componentes-hidraulicos",
  },
  {
    name: "Transmisiones y Cajas",
    category: "Transmisión",
    brands: "Allison, ZF, Eaton",
    image: "cambio.jpg",
    slug: "transmisiones-cajas",
  },
  {
    name: "Sistemas de Frenos",
    category: "Frenos",
    brands: "Meritor, Bendix, WABCO",
    image: "frenos.jpg",
    slug: "sistemas-frenos",
  },
];

export function PartsShowcase() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 lg:py-28 bg-graphite" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-yellow text-sm font-bold uppercase tracking-widest">
            Repuestos para Maquinaria Pesada
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-bone mt-4">
            Expertos en Repuestos
            <br className="hidden sm:block" /> de Alta Calidad
          </h2>
          <p className="text-bone/60 mt-4 max-w-2xl mx-auto">
            Somos especialistas en repuestos genuinos y alternativos de primera
            línea. Disponibilidad inmediata para las principales marcas de
            maquinaria pesada. Garantía de calidad y compatibilidad asegurada.
          </p>
        </div>

        {/* Features/Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex items-start gap-4 bg-carbon/50 border border-steel/30 rounded-sm p-4">
            <div className="w-12 h-12 bg-brand-yellow/10 border border-brand-yellow/20 rounded-sm flex items-center justify-center flex-shrink-0">
              <Package className="w-6 h-6 text-brand-yellow" />
            </div>
            <div>
              <h3 className="font-heading text-bone font-bold">
                Disponibilidad Inmediata
              </h3>
              <p className="text-sm text-bone/50 mt-1">
                Stock permanente en bodega
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-carbon/50 border border-steel/30 rounded-sm p-4">
            <div className="w-12 h-12 bg-brand-yellow/10 border border-brand-yellow/20 rounded-sm flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-brand-yellow" />
            </div>
            <div>
              <h3 className="font-heading text-bone font-bold">
                Garantía Asegurada
              </h3>
              <p className="text-sm text-bone/50 mt-1">
                Todos nuestros repuestos con garantía
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-carbon/50 border border-steel/30 rounded-sm p-4">
            <div className="w-12 h-12 bg-brand-yellow/10 border border-brand-yellow/20 rounded-sm flex items-center justify-center flex-shrink-0">
              <Wrench className="w-6 h-6 text-brand-yellow" />
            </div>
            <div>
              <h3 className="font-heading text-bone font-bold">
                Asesoría Técnica
              </h3>
              <p className="text-sm text-bone/50 mt-1">
                Expertos te ayudan a elegir
              </p>
            </div>
          </div>
        </div>

        {/* Grid de Repuestos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {parts.map((part, i) => (
            <div
              key={part.slug}
              className={`group bg-carbon border border-steel/30 rounded-sm overflow-hidden transition-all duration-300 hover:border-brand-yellow/30 hover:-translate-y-1 hover:shadow-xl ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={part.image}
                  alt={part.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-xs text-brand-yellow font-bold uppercase tracking-wider mb-1">
                  {part.category}
                </div>
                <h3 className="font-heading text-xl text-bone group-hover:text-brand-yellow transition-colors">
                  {part.name}
                </h3>
                <p className="text-sm text-bone/50 mt-2">{part.brands}</p>
                <a
                  href={`https://wa.me/573133799992?text=Hola%2C%20me%20interesa%20el%20repuesto%20${encodeURIComponent(part.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-brand-yellow text-sm font-bold hover:underline"
                >
                  Consultar disponibilidad
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="text-center mt-12">
          <p className="text-bone/60 mb-4">
            ¿No encuentras el repuesto que necesitas?
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 text-brand-yellow font-bold hover:underline"
          >
            Contáctanos y lo conseguimos por ti
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
