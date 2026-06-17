import { HeroSection } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesGrid } from "@/components/sections/services-grid";
import { PartsShowcase } from "@/components/sections/parts-showcase";
import { Differentiators } from "@/components/sections/differentiators";
import { ProcessSection } from "@/components/sections/process";
import { CoverageSection } from "@/components/sections/coverage";
import { ImportacionSection } from "@/components/sections/importacion";
import { FAQSection } from "@/components/sections/faq";
import { CTAFinal } from "@/components/sections/cta-final";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <PartsShowcase />
      <Differentiators />
      <ProcessSection />
      <CoverageSection />
      <ImportacionSection />
      <FAQSection />
      <CTAFinal />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué marcas de maquinaria pesada atiende CR Project?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Atendemos marcas líderes como CAT, Komatsu, CNH, John Deere, New Holland, Cummins, Detroit Diesel, Garrett, BorgWarner, Bosch, Delphi, Denso, NEXIQ y 3M.",
                },
              },
              {
                "@type": "Question",
                name: "¿Hacen servicio técnico a nivel nacional en Colombia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Ofrecemos servicio técnico de maquinaria pesada y diagnóstico computarizado con cobertura nacional, con foco en Mosquera, Funza, Madrid, Facatativá, Bogotá y la Sabana de Cundinamarca.",
                },
              },
              {
                "@type": "Question",
                name: "¿Venden repuestos genuinos para Caterpillar (CAT) y Komatsu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Distribuimos repuestos genuinos y aftermarket para CAT, Komatsu, John Deere, Cummins, New Holland y CNH, con disponibilidad inmediata en bodega Mosquera.",
                },
              },
              {
                "@type": "Question",
                name: "¿Importan maquinaria usada desde Estados Unidos?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Operamos en Colombia y Miami, Florida, para la importación directa de maquinaria usada y repuestos desde Estados Unidos.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cómo solicito una cotización de repuestos o servicio técnico?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Solicite cotización por WhatsApp al +57 313 379 9992 indicando marca, modelo, referencia y servicio requerido.",
                },
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            provider: {
              "@id": "https://www.crprojectsas.com/#organization",
            },
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@type": "Service",
                  name: "Venta de repuestos para maquinaria pesada Cundinamarca y Colombia",
                  description:
                    "Venta de repuestos genuinos OEM y aftermarket para maquinaria pesada en Colombia.",
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@type": "Service",
                  name: "Reparación de motores equipos pesados",
                  description:
                    "Reparación de motores diésel con overhaul, rectificación y calibración de inyectores.",
                },
              },
              {
                "@type": "ListItem",
                position: 3,
                item: {
                  "@type": "Service",
                  name: "Diagnóstico computarizado",
                  description:
                    "Diagnóstico computarizado con escáner NEXIQ para maquinaria pesada en Colombia.",
                },
              },
              {
                "@type": "ListItem",
                position: 4,
                item: {
                  "@type": "Service",
                  name: "Mantenimiento preventivo",
                  description:
                    "Mantenimiento preventivo para maquinaria amarilla con planes enfocados en reducir tiempos de inactividad.",
                },
              },
              {
                "@type": "ListItem",
                position: 5,
                item: {
                  "@type": "Service",
                  name: "Importación de maquinaria desde EE.UU a Colombia.",
                  description:
                    "Importación directa de maquinaria usada y repuestos desde Estados Unidos a Colombia con logística y nacionalización.",
                },
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Inicio",
                item: "https://www.crprojectsas.com",
              },
            ],
          }),
        }}
      />
    </>
  );
}
