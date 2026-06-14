import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "Venta de Maquinaria Pesada Nueva y Usada — Importación Directa desde EE.UU.",
  description: "Comercialización de maquinaria pesada nueva y usada importada directamente desde EE.UU. CAT, John Deere, New Holland. Equipos verificados con historial de mantenimiento.",
  alternates: { canonical: "https://www.crprojectsas.com/venta-maquinaria" },
};

export default function VentaMaquinariaPage() {
  return (
    <ServicePageTemplate
      title="Venta de Maquinaria Pesada"
      subtitle="Importación directa desde EE.UU."
      description="Comercializamos maquinaria pesada nueva y usada importada directamente desde subastas y dealers en Estados Unidos. Equipos verificados con historial de mantenimiento, listos para operar en Colombia. Sin intermediarios, mejor precio."
      heroImage="https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=1920"
      features={[
        "Importación directa desde subastas y dealers en EE.UU.",
        "Equipos con historial de mantenimiento verificado",
        "Asesoría completa en selección del equipo",
        "Gestión integral de importación y nacionalización",
        "Inspección técnica pre-compra incluida",
        "Servicio post-venta: repuestos y mantenimiento disponibles",
      ]}
      problems={[
        "Necesita maquinaria a buen precio sin intermediarios",
        "No tiene acceso a subastas internacionales",
        "Busca equipos en buen estado con historial real",
        "Requiere asesoría para elegir el equipo correcto",
        "Necesita gestión completa de importación",
      ]}
      whyUs={[
        "Operación directa en Miami, FL — compramos sin intermediarios en las subastas más grandes del mundo.",
        "Historial verificado: cada equipo viene con documentación de mantenimiento y horas reales.",
        "Asesoría técnica: le ayudamos a elegir el equipo correcto según su operación y presupuesto.",
        "Gestión integral: desde la subasta hasta la entrega en Colombia.",
        "Precios competitivos al eliminar cadenas de intermediarios.",
        "Servicio post-venta: ofrecemos repuestos y servicio técnico para los equipos que vendemos.",
      ]}
      brands={["CAT", "JOHN DEERE", "NEW HOLLAND", "CASE", "KOMATSU", "VOLVO"]}
      faqs={[
        { question: "¿Qué tipo de maquinaria venden?", answer: "Importamos toda la línea amarilla: retroexcavadoras, cargadores, excavadoras, articulados, vibrocompactadores, motoniveladoras y más. Marcas como CAT, John Deere, New Holland, Case y Komatsu." },
        { question: "¿Cuánto tarda el proceso de importación?", answer: "Desde la compra en subasta hasta la entrega en Colombia, el proceso toma aproximadamente 45-60 días dependiendo de la logística marítima y la nacionalización." },
        { question: "¿Los equipos vienen con garantía?", answer: "Los equipos se venden con historial de mantenimiento verificado. Ofrecemos inspección técnica y servicio post-venta para cualquier necesidad." },
        { question: "¿Qué precios manejan?", answer: "Los precios varían según el equipo. Por ejemplo: CAT 730 desde $95,000 USD, John Deere 310G desde $25,000 USD. Contáctenos para cotizaciones actualizadas." },
      ]}
      breadcrumbName="Venta de Maquinaria"
      breadcrumbUrl="/venta-maquinaria"
      ctaText="Consultar Equipos Disponibles"
    />
  );
}
