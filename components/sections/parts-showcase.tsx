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
    image: "/turbo.jpg",
    slug: "turbos-motores-diesel",
  },
  {
    name: "Inyectores de Combustible",
    category: "Sistema de Inyección",
    brands: "Bosch, Delphi, Denso",
    image: "/repair-inyector.jpg",
    slug: "inyectores-combustible",
  },
  {
    name: "Filtros Industriales",
    category: "Filtración",
    brands: "Fleetguard, Donaldson, Baldwin",
    image: "/filtros.jpg",
    slug: "filtros-industriales",
  },
  {
    name: "Componentes Hidráulicos",
    category: "Hidráulica",
    brands: "Parker, Rexroth, Kawasaki",
    image: "/hidraulico.jpg",
    slug: "componentes-hidraulicos",
  },
  {
    name: "Transmisiones y Cajas",
    category: "Transmisión",
    brands: "Allison, ZF, Eaton",
    image: "/cambio.jpg",
    slug: "transmisiones-cajas",
  },
  {
    name: "Sistemas de Frenos",
    category: "Frenos",
    brands: "Meritor, Bendix, WABCO",
    image: "/frenos.jpg",
    slug: "sistemas-frenos",
  },
];

export function PartsShowcase() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="repuestos"
      aria-labelledby="repuestos-title"
      className="py-20 lg:py-28 bg-graphite"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-yellow text-sm font-bold uppercase tracking-widest">
            Repuestos para Maquinaria Pesada
          </span>
          <h2
            id="repuestos-title"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl text-bone mt-4"
          >
            Expertos en Repuestos para Maquinaria Pesada
            <br className="hidden sm:block" /> en Colombia
          </h2>
          <p className="text-bone/60 mt-4 max-w-2xl mx-auto">
            Distribuimos componentes genuinos y de alta calidad para las
            principales maquinaria amarilla marcas: CAT, Komatsu, John Deere,
            Cummins y CNH. Disponibilidad inmediata en nuestra bodega de
            Mosquera, ideal si buscas repuestos maquinaria pesada Bogotá y sus
            alrededores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex items-start gap-4 bg-carbon/50 border border-steel/30 rounded-sm p-4">
            <div className="w-12 h-12 bg-brand-yellow/10 border border-brand-yellow/20 rounded-sm flex items-center justify-center flex-shrink-0">
              <Package
                className="w-6 h-6 text-brand-yellow"
                aria-hidden="true"
              />
            </div>
            <div>
              <h3 className="font-heading text-bone font-bold">
                Disponibilidad Inmediata
              </h3>
              <p className="text-sm text-bone/50 mt-1">Stock permanente</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-carbon/50 border border-steel/30 rounded-sm p-4">
            <div className="w-12 h-12 bg-brand-yellow/10 border border-brand-yellow/20 rounded-sm flex items-center justify-center flex-shrink-0">
              <Shield
                className="w-6 h-6 text-brand-yellow"
                aria-hidden="true"
              />
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
              <Wrench
                className="w-6 h-6 text-brand-yellow"
                aria-hidden="true"
              />
            </div>
            <div>
              <h3 className="font-heading text-bone font-bold">
                Asesoría Técnica
              </h3>
              <p className="text-sm text-bone/50 mt-1">
                Un especialista te ayuda a elegir la pieza exacta.
              </p>
            </div>
          </div>
        </div>

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
                  alt={`${part.name} — Repuestos para maquinaria pesada en Colombia`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
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
                  href="https://wa.me/573133799992?text=Hola%2C%20quisiera%20cotizar%20repuestos%2Fservicio%20t%C3%A9cnico%20para%20maquinaria%20pesada"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Cotizar por WhatsApp repuesto ${part.name} — Servicio técnico maquinaria pesada Colombia`}
                  className="inline-flex items-center gap-2 mt-4 text-brand-yellow text-sm font-bold hover:underline"
                >
                  Consultar disponibilidad
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-bone/60 mb-4">
            ¿No encuentras los repuestos para maquinaria amarilla que necesitas?
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 text-brand-yellow font-bold hover:underline"
          >
            Contáctanos y lo conseguimos por ti
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
