"use client";

import { MapPin, Phone } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

export function CoverageSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 lg:py-28 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={isInView ? "animate-fade-in-up" : "opacity-0"}>
            <span className="text-brand-yellow text-sm font-bold uppercase tracking-widest">Cobertura</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-gray-900 mt-4">
              Servicio en Toda Colombia
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Sede principal en Mosquera, Cundinamarca. Atendemos solicitudes a nivel nacional
              con reparaciones profesionales en campo. Vamos donde está la máquina.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900 font-medium">Sede Principal</p>
                  <p className="text-gray-600 text-sm">Carrocerías Capri, El Cerrito, Mosquera, Cundinamarca</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900 font-medium">Operación Internacional</p>
                  <p className="text-gray-600 text-sm">Miami, Florida, EE.UU. — Importación y subastas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900 font-medium">Contacto Directo</p>
                  <p className="text-gray-600 text-sm">+57 313 379 9992 — Cristian (WhatsApp)</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white border border-gray-200 rounded-sm">
              <p className="text-sm text-gray-600">
                <span className="text-gray-900 font-bold">Zonas prioritarias:</span>{" "}
                Mosquera, Funza, Madrid, Facatativá, Bogotá y toda la sabana de Cundinamarca.
                Servicio técnico a nivel nacional.
              </p>
            </div>
          </div>

          <div
            className={`relative h-80 lg:h-[500px] rounded-sm overflow-hidden border border-gray-200 ${
              isInView ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5!2d-74.2325!3d4.7086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMosquera%2C+Cundinamarca!5e0!3m2!1ses!2sco!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación CR Project S.A.S - Mosquera, Cundinamarca"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
