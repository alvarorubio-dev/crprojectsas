import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "Escáner y Diagnóstico Diésel — Electrónica, Harness y Módulos REMAN",
  description: "Diagnóstico computarizado con escáner profesional, reconstrucción de arneses eléctricos y módulos REMAN programados para maquinaria pesada. Capacidad técnica avanzada.",
  alternates: { canonical: "https://www.crprojectsas.com/diagnostico" },
};

export default function DiagnosticoPage() {
  return (
    <ServicePageTemplate
      title="Escáner y Diagnóstico Diésel"
      subtitle="Capacidad técnica avanzada"
      description="Reconstruimos arneses eléctricos (harness) y suministramos módulos electrónicos REMAN programados. Esta es una capacidad técnica avanzada que muy pocos talleres en Colombia ofrecen: hacemos electrónica y programación, no solo mecánica."
      heroImage="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1920"
      features={[
        "Diagnóstico computarizado con escáner profesional",
        "Reconstrucción completa de arneses eléctricos (harness)",
        "Módulos electrónicos REMAN programados y listos para instalar",
        "Programación de ECU y módulos de control",
        "Reparación de conectores y cableado",
        "Herramientas: CAT COM ADAPTER 3, Nexiq y equipos especializados",
      ]}
      problems={[
        "Máquina parada por falla electrónica que nadie resuelve",
        "Harness dañado o con corrosión que genera códigos de falla",
        "Módulo electrónico quemado o sin comunicación",
        "Fallas intermitentes difíciles de diagnosticar",
        "Costos elevados de módulos nuevos originales",
        "No encuentra quién programe el módulo para su equipo",
      ]}
      whyUs={[
        "Capacidad que muy pocos tienen: electrónica avanzada y programación de módulos, no solo mecánica básica.",
        "Módulos REMAN programados: alternativa profesional al módulo nuevo, a fracción del costo.",
        "Diagnóstico con equipos profesionales (CAT COM ADAPTER 3, Nexiq) para identificar la falla exacta.",
        "Reconstrucción de harness que otros talleres simplemente reemplazan por uno nuevo (mucho más costoso).",
        "Programación y configuración del módulo específica para su máquina y aplicación.",
        "Soporte post-instalación para verificar funcionamiento correcto.",
      ]}
      brands={["CAT", "JOHN DEERE", "NEXIQ", "CUMMINS", "CNH"]}
      faqs={[
        { question: "¿Qué es un módulo REMAN?", answer: "Un módulo REMAN (remanufacturado) es un módulo electrónico que ha sido reconstruido profesionalmente, probado y programado para funcionar como nuevo. Es una alternativa confiable y más económica que un módulo original nuevo." },
        { question: "¿Pueden reconstruir cualquier harness?", answer: "Trabajamos con la mayoría de harness para maquinaria amarilla y motores diésel. Evaluamos el estado del arnés y determinamos si es viable la reconstrucción o si requiere fabricación de un tramo nuevo." },
        { question: "¿Cómo sé si mi falla es electrónica?", answer: "Códigos de falla activos, pérdida de comunicación con el ECU, fallas intermitentes, o comportamientos erráticos del equipo suelen indicar problemas electrónicos. Realizamos un diagnóstico profesional para confirmar." },
        { question: "¿Tienen módulos REMAN en stock?", answer: "Mantenemos stock de los módulos más solicitados. Para referencias específicas, consulte disponibilidad por WhatsApp. Si no está en stock, gestionamos la importación." },
      ]}
      breadcrumbName="Escáner y Diagnóstico"
      breadcrumbUrl="/diagnostico"
      ctaText="Consultar Disponibilidad"
    />
  );
}
