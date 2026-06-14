import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "Alquiler de Maquinaria y Equipos Pesados — Flota Certificada",
  description:
    "Alquiler de maquinaria pesada y equipos certificados para proyectos de construcción, minería y obra civil. Flota disponible con opciones flexibles. Cobertura nacional.",
  alternates: { canonical: "https://www.crprojectsas.com/alquiler-maquinaria" },
};

export default function AlquilerMaquinariaPage() {
  return (
    <ServicePageTemplate
      title="Alquiler y Venta de Maquinaria y Equipos Pesados"
      subtitle="Flota disponible y certificada"
      description="Flota disponible para alquiler con opciones flexibles. Equipos certificados y listos para operar en cualquier proyecto de construcción, obra civil o minería. Atención rápida y cobertura nacional."
      heroImage="/venta-maquinaria.jpg"
      features={[
        "Equipos certificados y listos para operar",
        "Opciones flexibles: por hora, día, semana o mes",
        "Operador incluido según requerimiento del cliente",
        "Mantenimiento preventivo garantizado en todos los equipos",
        "Cobertura nacional con transporte al sitio del proyecto",
        "Soporte técnico disponible durante la operación",
      ]}
      problems={[
        "Proyecto que requiere maquinaria puntual sin inversión propia",
        "Equipo propio en mantenimiento o fuera de servicio",
        "Necesita maquinaria especializada para una obra específica",
        "Presupuesto ajustado que no justifica compra de equipo",
        "Proyecto en ubicación remota que requiere logística integral",
      ]}
      whyUs={[
        "Equipos en óptimas condiciones: mantenimiento preventivo garantizado antes de cada alquiler.",
        "Flexibilidad total: alquile por el tiempo que necesite, sin compromisos a largo plazo.",
        "Soporte técnico incluido: si el equipo presenta alguna falla, respondemos de inmediato.",
        "Operadores disponibles: si lo necesita, suministramos operador certificado con el equipo.",
        "Cobertura nacional: transportamos el equipo hasta su obra.",
        "Un solo proveedor: si necesita repuestos o servicio técnico para sus propios equipos, también lo tenemos.",
      ]}
      brands={["CAT", "JOHN DEERE", "NEW HOLLAND", "CASE", "KOMATSU", "VOLVO"]}
      faqs={[
        {
          question: "¿Qué tipo de maquinaria tienen disponible para alquiler?",
          answer:
            "Contamos con retroexcavadoras, cargadores, compactadores, minicargadores y otros equipos de la línea amarilla. Contáctenos para confirmar disponibilidad según sus necesidades.",
        },
        {
          question: "¿Incluye operador?",
          answer:
            "Depende del contrato. Ofrecemos alquiler de equipo solo (cliente aporta operador) o con operador certificado incluido según disponibilidad.",
        },
        {
          question: "¿Cuál es el plazo mínimo de alquiler?",
          answer:
            "El plazo mínimo es de un día. Ofrecemos tarifas especiales para contratos semanales o mensuales. Contáctenos para cotización según su proyecto.",
        },
        {
          question: "¿Atienden proyectos fuera de Cundinamarca?",
          answer:
            "Sí. Realizamos logística de transporte para proyectos a nivel nacional. El costo de transporte se cotiza según la distancia y el equipo requerido.",
        },
      ]}
      breadcrumbName="Alquiler de Maquinaria"
      breadcrumbUrl="/alquiler-maquinaria"
      ctaText="Consultar Disponibilidad"
    />
  );
}
