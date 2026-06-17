"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.jpg"
          alt="Taller especializado en maquinaria pesada y motores diésel en Mosquera, Cundinamarca"
          fill
          className="object-cover"
          priority
          loading="eager"
        />
      </div>

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 to-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-4xl">
          <h1
            id="hero-title"
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
          >
            Soluciones Integrales para{" "}
            <span className="text-brand-yellow">Maquinaria Pesada</span> en
            Colombia
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
            El aliado número uno en repuestos para maquinaria pesada,
            diagnóstico avanzado y servicio técnico especializado en Mosquera,
            Bogotá y a nivel nacional. Importación directa desde EE.UU. y
            soluciones para motores diésel. ¡Minimizamos el tiempo de
            inactividad de tu flota!
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/573133799992?text=Hola%2C%20quisiera%20cotizar%20repuestos%2Fservicio%20t%C3%A9cnico%20para%20maquinaria%20pesada"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Cotizar por WhatsApp con CR Project S.A.S — Servicio técnico maquinaria pesada Colombia"
              className="inline-flex items-center justify-center gap-2 bg-brand-yellow hover:bg-brand-amber text-carbon font-bold text-base px-8 py-4 rounded-sm transition-all hover:shadow-lg hover:shadow-brand-yellow/20 hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Cotizar por WhatsApp
            </a>
            <Link
              href="/venta-maquinaria"
              className="inline-flex items-center justify-center gap-2 border-2 border-bone/20 hover:border-brand-yellow/50 text-bone font-bold text-base px-8 py-4 rounded-sm transition-all hover:bg-brand-yellow/5"
            >
              Ver Maquinaria en Venta
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/20 pt-8">
            <div>
              <p className="font-heading text-2xl sm:text-3xl text-brand-yellow">
                10+
              </p>
              <p className="text-sm text-white/60 mt-1">Años de experiencia</p>
            </div>
            <div>
              <p className="font-heading text-2xl sm:text-3xl text-brand-yellow">
                100%
              </p>
              <p className="text-sm text-white/60 mt-1">Cobertura nacional</p>
            </div>
            <div>
              <p className="font-heading text-2xl sm:text-3xl text-brand-yellow">
                2 (🇨🇴 y 🇺🇸)
              </p>
              <p className="text-sm text-white/60 mt-1">Países de operación</p>
            </div>
            <div>
              <p className="font-heading text-2xl sm:text-3xl text-brand-yellow">
                24h
              </p>
              <p className="text-sm text-white/60 mt-1">
                Respuesta técnica rápida
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/40 to-transparent" />
    </section>
  );
}
