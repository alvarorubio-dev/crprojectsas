import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title:
    "Mantenimiento Eléctrico para Maquinaria Pesada — Alternadores y Arranque",
  description:
    "Soluciones completas para sistemas eléctricos de maquinaria pesada. Reparación de alternadores, motores de arranque, revisión de cableado y diagnóstico eléctrico profesional.",
  alternates: {
    canonical: "https://www.crprojectsas.com/mantenimiento-electrico",
  },
};

export default function MantenimientoElectricoPage() {
  return (
    <ServicePageTemplate
      title="Mantenimiento Eléctrico para Maquinaria Pesada"
      subtitle="Sistemas eléctricos completos"
      description="Soluciones completas para sistemas eléctricos de maquinaria amarilla y vehículos pesados. Desde la reparación de alternadores y motores de arranque hasta la revisión de cableado y diagnóstico eléctrico profesional con equipos de última generación."
      heroImage="electrico.webp"
      features={[
        "Diagnóstico eléctrico computarizado completo",
        "Reparación y reconstrucción de alternadores",
        "Reparación de motores de arranque",
        "Revisión y reparación de cableado eléctrico",
        "Detección y corrección de cortos circuitos",
        "Reparación de tableros de instrumentos",
        "Mantenimiento de sistema de carga y batería",
      ]}
      problems={[
        "Máquina que no enciende o tiene problemas de arranque",
        "Alternador que no carga correctamente",
        "Luces, sensores o instrumentos que fallan",
        "Cortos circuitos o fusibles que se queman repetidamente",
        "Batería que se descarga rápidamente",
        "Códigos de falla eléctricos sin solución aparente",
      ]}
      whyUs={[
        "Diagnóstico profesional con escáner para identificar fallas eléctricas con precisión.",
        "Reparación in situ: en muchos casos realizamos el trabajo donde está el equipo.",
        "Repuestos eléctricos disponibles: alternadores, arranques y componentes de repuesto.",
        "Experiencia con sistemas eléctricos de CAT, John Deere, CNH y más marcas.",
        "Servicio integral: eléctrico + electrónico + mecánico en un solo proveedor.",
        "Garantía sobre trabajos de reparación eléctrica realizados.",
      ]}
      brands={["CAT", "JOHN DEERE", "NEW HOLLAND", "CNH", "CASE", "NEXIQ"]}
      faqs={[
        {
          question: "¿Reparan alternadores y arranques en campo?",
          answer:
            "Sí, en muchos casos podemos diagnosticar y reparar en campo. Para reconstrucciones completas de alternadores o arranques, se recomienda llevar el componente al taller.",
        },
        {
          question: "¿Trabajan con todas las marcas de maquinaria?",
          answer:
            "Sí. Atendemos maquinaria CAT, John Deere, New Holland, CNH, Case, Komatsu y otras marcas de maquinaria amarilla y vehículos pesados.",
        },
        {
          question: "¿Pueden detectar cortos circuitos intermitentes?",
          answer:
            "Sí. Contamos con equipos de diagnóstico eléctrico profesional que permiten identificar fallas intermitentes y cortos difíciles de localizar con métodos convencionales.",
        },
        {
          question: "¿Cuánto tarda un diagnóstico eléctrico?",
          answer:
            "Un diagnóstico eléctrico básico toma entre 1-2 horas. Si la falla es compleja o intermitente, puede requerir más tiempo para una evaluación completa.",
        },
      ]}
      breadcrumbName="Mantenimiento Eléctrico"
      breadcrumbUrl="/mantenimiento-electrico"
      ctaText="Solicitar Diagnóstico Eléctrico"
    />
  );
}
