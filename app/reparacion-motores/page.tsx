import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "Reparación de Motores Diésel — Maquinaria Amarilla y Vehículos Pesados",
  description: "Diagnóstico y reparación completa de motores diésel para maquinaria amarilla y vehículos pesados. Servicio especializado según especificaciones del fabricante. Cobertura nacional.",
  alternates: { canonical: "https://www.crprojectsas.com/reparacion-motores" },
};

export default function ReparacionMotoresPage() {
  return (
    <ServicePageTemplate
      title="Reparación de Motores Diésel"
      subtitle="Servicio especializado"
      description="Diagnóstico y reparación completa de motores diésel para maquinaria amarilla y vehículos pesados. Trabajamos según especificaciones del fabricante con herramientas profesionales y partes genuinas o aftermarket de calidad."
      heroImage="https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=1920"
      features={[
        "Diagnóstico computarizado del motor",
        "Reparación parcial o overhaul completo",
        "Rectificación y ajuste de componentes",
        "Cambio de empaques y sellos",
        "Reparación de sistema de inyección",
        "Pruebas de compresión y fugas",
        "Partes genuinas y aftermarket disponibles",
      ]}
      problems={[
        "Motor con pérdida de potencia o humo excesivo",
        "Consumo elevado de aceite o combustible",
        "Golpeteo interno o ruidos anormales",
        "Sobrecalentamiento del motor",
        "Fallas en sistema de inyección",
        "Motor no arranca o arranca con dificultad",
      ]}
      whyUs={[
        "Diagnóstico preciso según especificaciones del fabricante — no 'a ojo'.",
        "Herramientas profesionales de diagnóstico para identificar la falla exacta antes de desarmar.",
        "Acceso a partes genuinas y aftermarket: usted elige precio o durabilidad.",
        "Experiencia con motores CAT, Cummins, John Deere, y más.",
        "Servicio en taller o en campo según su necesidad.",
        "Garantía sobre mano de obra y repuestos instalados.",
      ]}
      brands={["CAT", "CUMMINS", "JOHN DEERE", "DETROIT", "PERKINS"]}
      faqs={[
        { question: "¿Qué marcas de motores diésel reparan?", answer: "Trabajamos con motores CAT, Cummins, John Deere, Detroit, Perkins y otras marcas presentes en maquinaria amarilla y vehículos pesados." },
        { question: "¿Hacen overhaul completo?", answer: "Sí. Realizamos desde reparaciones menores hasta overhaul completo del motor, incluyendo rectificación, cambio de anillos, camisas, bielas y cigüeñal según sea necesario." },
        { question: "¿Pueden reparar el motor en campo?", answer: "Dependiendo de la reparación, sí. Diagnósticos y reparaciones menores se realizan en campo. Para overhaul completo se recomienda traer el motor o la máquina a nuestro taller." },
        { question: "¿Cuánto tiempo toma una reparación de motor?", answer: "Depende del alcance. Una reparación menor puede tomar 2-3 días, mientras que un overhaul completo puede tomar 1-3 semanas según disponibilidad de partes." },
      ]}
      breadcrumbName="Reparación de Motores"
      breadcrumbUrl="/reparacion-motores"
      ctaText="Solicitar Diagnóstico"
    />
  );
}
