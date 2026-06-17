"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ImportacionSection() {
  return (
    <section
      id="importacion"
      aria-labelledby="importacion-title"
      className="py-20 lg:py-28 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-yellow text-sm font-bold uppercase tracking-widest">
            Importación
          </span>
          <h2
            id="importacion-title"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl text-carbon mt-4"
          >
            ¿Cómo importar maquinaria pesada a Colombia?
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
            Nosotros lo hacemos fácil. Gracias a nuestra operación binacional
            (Colombia – Miami, EE.UU.), gestionamos subastas, logística y
            nacionalización aduanera para traer tus equipos desde el exterior
            sin complicaciones.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="https://wa.me/573133799992?text=Hola%2C%20quisiera%20cotizar%20repuestos%2Fservicio%20t%C3%A9cnico%20para%20maquinaria%20pesada"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Cotizar por WhatsApp con CR Project S.A.S — Servicio técnico maquinaria pesada Colombia"
            className="inline-flex items-center gap-2 bg-carbon hover:bg-graphite text-bone font-bold text-base px-8 py-4 rounded-sm transition-all hover:shadow-xl"
          >
            Cotizar por WhatsApp
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 border-2 border-carbon/30 text-carbon font-bold text-base px-8 py-4 rounded-sm transition-all hover:bg-carbon/10"
          >
            Ver opciones de importación
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
