"use client";

import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTAFinal() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-brand-yellow" />
      <div className="absolute inset-0 diagonal-stripes opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-carbon">
          ¿Necesita Repuestos o Servicio Técnico?
        </h2>
        <p className="text-carbon/70 mt-4 text-lg max-w-2xl mx-auto">
          Pregunta lo que buscas. Partes genuinas con disponibilidad inmediata.
          Respuesta rápida por WhatsApp.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="https://wa.me/573133799992?text=Hola%2C%20necesito%20cotizar%20un%20servicio%20o%20repuesto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-carbon hover:bg-graphite text-bone font-bold text-base px-8 py-4 rounded-sm transition-all hover:shadow-xl"
          >
            <Phone className="w-5 h-5" />
            Cotizar por WhatsApp
          </a>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 border-2 border-carbon/30 text-carbon font-bold text-base px-8 py-4 rounded-sm transition-all hover:bg-carbon/10"
          >
            Formulario de Contacto
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
