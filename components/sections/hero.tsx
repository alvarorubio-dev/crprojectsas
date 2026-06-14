"use client";

import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 to-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-brand-yellow/30 rounded-sm px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse" />
            <span className="text-white/80 text-sm font-medium">Operación EE.UU. 🇺🇸 — Colombia 🇨🇴</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
            Soluciones Integrales y{" "}
            <span className="text-brand-yellow">Servicio Técnico</span>{" "}
            para Maquinaria Pesada
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
            Repuestos genuinos, servicio técnico especializado e importación directa desde EE.UU. Una sola empresa para todo lo que su operación necesita.
            Diagnóstico y reparación con cobertura nacional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/573133799992?text=Hola%2C%20quiero%20cotizar%20un%20repuesto%20o%20servicio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-yellow hover:bg-brand-amber text-carbon font-bold text-base px-8 py-4 rounded-sm transition-all hover:shadow-lg hover:shadow-brand-yellow/20 hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              Cotizar por WhatsApp
            </a>
            <Link
              href="/maquinaria-usada"
              className="inline-flex items-center justify-center gap-2 border-2 border-bone/20 hover:border-brand-yellow/50 text-bone font-bold text-base px-8 py-4 rounded-sm transition-all hover:bg-brand-yellow/5"
            >
              Ver Maquinaria en Venta
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/20 pt-8">
            <div>
              <p className="font-heading text-2xl sm:text-3xl text-brand-yellow">10+</p>
              <p className="text-sm text-white/60 mt-1">Años de experiencia</p>
            </div>
            <div>
              <p className="font-heading text-2xl sm:text-3xl text-brand-yellow">100%</p>
              <p className="text-sm text-white/60 mt-1">Cobertura nacional</p>
            </div>
            <div>
              <p className="font-heading text-2xl sm:text-3xl text-brand-yellow">2</p>
              <p className="text-sm text-white/60 mt-1">Países de operación</p>
            </div>
            <div>
              <p className="font-heading text-2xl sm:text-3xl text-brand-yellow">24h</p>
              <p className="text-sm text-white/60 mt-1">Respuesta rápida</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/40 to-transparent" />
    </section>
  );
}
