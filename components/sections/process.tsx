"use client";

import { Search, Wrench, FileText, PackageCheck } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico y Proceso Evaluativo",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Reparación y Ejecución",
  },
  {
    number: "03",
    icon: FileText,
    title: "Informe Técnico",
  },
  {
    number: "04",
    icon: PackageCheck,
    title: "Entrega y Seguimiento",
  },
];

export function ProcessSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 lg:py-28 bg-carbon" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className={isInView ? "animate-fade-in-up" : "opacity-0"}>
            <span className="text-brand-yellow text-sm font-bold uppercase tracking-widest">
              Nuestro Trabajo
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-bone mt-4 leading-tight">
              Calidad, Innovación<br className="hidden sm:block" /> y Compromiso
            </h2>
          </div>
          <div
            className={`${isInView ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "100ms" }}
          >
            <p className="text-bone/60 leading-relaxed">
              Innovamos con el profesionalismo de nuestros colaboradores, utilizando las mejores
              marcas del mercado para así garantizar una calidad en nuestros servicios. Brindamos
              asesoramiento técnico y de ingeniería enfocados en la optimización y confiabilidad.
              Comprometidos con el desarrollo industrial de nuestro país.
            </p>
          </div>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-steel/30 rounded-sm overflow-hidden mb-16">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`relative p-8 bg-graphite/80 text-center group hover:bg-graphite transition-colors duration-300 ${
                  isInView ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <span className="font-heading text-6xl font-bold text-brand-yellow/8 absolute top-4 right-5 select-none leading-none">
                  {step.number}
                </span>
                <div className="w-16 h-16 bg-brand-yellow/10 border border-brand-yellow/20 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-yellow/15 transition-colors">
                  <Icon className="w-7 h-7 text-brand-yellow" />
                </div>
                <h3 className="font-heading text-base text-bone leading-snug uppercase tracking-wide">
                  {step.title}
                </h3>
                <div className="mt-4 w-8 h-0.5 bg-brand-yellow/40 mx-auto group-hover:bg-brand-yellow transition-colors duration-300" />
              </div>
            );
          })}
        </div>

        {/* Closing paragraph */}
        <div
          className={`max-w-4xl mx-auto p-8 bg-graphite/60 border border-steel/30 rounded-sm border-l-4 border-l-brand-yellow ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "600ms" }}
        >
          <p className="text-bone/70 leading-relaxed text-center">
            Los métodos operativos y de ejecución que utilizamos en{" "}
            <span className="text-bone font-bold">CR PROJECT SAS</span> cuentan con parámetros
            que dan seguridad y confiabilidad para nuestros clientes. Garantizamos un trabajo de
            calidad gracias al compromiso de nuestros colaboradores, técnicos, ingenieros y en su
            totalidad de todo el personal. Proporcionamos una{" "}
            <span className="text-brand-yellow font-bold">efectividad al 100%</span> y un
            completo seguimiento a los tiempos de entrega.
          </p>
        </div>

      </div>
    </section>
  );
}
