import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "Reparación de Maquinaria Pesada — Servicio Técnico Especializado",
  description: "Servicio técnico especializado para maquinaria pesada y vehículos pesados. Diagnóstico según especificaciones del fabricante. Reparaciones en campo. Cobertura en toda Colombia.",
  alternates: { canonical: "https://www.crprojectsas.com/servicio-tecnico" },
};

export default function ServicioTecnicoPage() {
  return (
    <ServicePageTemplate
      title="Reparación de Maquinaria Pesada"
      subtitle="Diagnóstico y reparación"
      description="Evaluación técnica según especificaciones del fabricante. No trabajamos 'a ojo' — realizamos diagnósticos formales para identificar la falla con precisión. Cobertura a nivel nacional con reparaciones profesionales en campo."
      heroImage="https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1920"
      features={[
        "Diagnóstico según especificaciones del fabricante",
        "Herramientas profesionales: Nexiq, CAT COM ADAPTER 3",
        "Reparación de motores diésel, hidráulicos y electrónica",
        "Reparaciones profesionales en campo (a nivel nacional)",
        "Servicio para maquinaria amarilla y vehículos pesados",
        "Soporte post-reparación y garantía de servicio",
      ]}
      problems={[
        "Máquina parada por falla desconocida",
        "Diagnóstico incorrecto de otro taller",
        "Necesita reparación urgente sin mover la máquina",
        "Fallas electrónicas complejas que otros no resuelven",
        "Requiere evaluación técnica formal para seguro o garantía",
      ]}
      whyUs={[
        "Diagnóstico formal — evaluación técnica según especificaciones del fabricante, no improvisación.",
        "Herramientas profesionales: equipos Nexiq y CAT COM ADAPTER 3 para diagnóstico preciso.",
        "Capacidad técnica avanzada: mecánica, hidráulica, electrónica y programación de módulos.",
        "Cobertura nacional — vamos donde está la máquina con reparaciones en campo.",
        "Servicio integral: un solo proveedor para diagnóstico, repuestos y reparación.",
        "Respuesta rápida para minimizar tiempos de parada.",
      ]}
      brands={["CAT", "JOHN DEERE", "NEW HOLLAND", "CNH", "CASE", "NEXIQ"]}
      faqs={[
        { question: "¿En qué zonas ofrecen servicio técnico?", answer: "Ofrecemos cobertura en toda Colombia. Nuestra sede está en Mosquera, Cundinamarca, pero atendemos solicitudes a nivel nacional con reparaciones profesionales en campo." },
        { question: "¿Qué marcas de maquinaria atienden?", answer: "Trabajamos con CAT, John Deere, New Holland, CNH, Case, Komatsu y otras marcas de maquinaria amarilla y vehículos pesados diésel." },
        { question: "¿Pueden hacer diagnóstico en campo?", answer: "Sí. Contamos con herramientas portátiles de diagnóstico profesional (Nexiq, CAT COM ADAPTER 3) que nos permiten realizar evaluaciones técnicas directamente donde está la máquina." },
        { question: "¿Cuánto tarda un diagnóstico?", answer: "Un diagnóstico estándar toma entre 2-4 horas dependiendo de la complejidad de la falla. Le entregamos un informe técnico con hallazgos y cotización de reparación." },
      ]}
      breadcrumbName="Servicio Técnico"
      breadcrumbUrl="/servicio-tecnico"
    />
  );
}
