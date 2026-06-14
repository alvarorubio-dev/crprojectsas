import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "Mantenimiento Preventivo y Correctivo para Flotas",
  description: "Planes de mantenimiento preventivo y correctivo para flotas de transporte de carga y pasajeros. Contratos recurrentes, reducción de paradas y cumplimiento normativo.",
  alternates: { canonical: "https://www.crprojectsas.com/mantenimiento-flotas" },
};

export default function MantenimientoFlotasPage() {
  return (
    <ServicePageTemplate
      title="Mantenimiento Preventivo y Correctivo para Flotas"
      subtitle="Contratos a medida"
      description="Planes de mantenimiento diseñados para flotas de transporte de carga y pasajeros. Reducimos tiempos muertos, garantizamos cumplimiento normativo y mantenemos su flota productiva con contratos recurrentes y atención prioritaria."
      heroImage="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1920"
      features={[
        "Planes de mantenimiento preventivo programado",
        "Mantenimiento correctivo con tiempos de respuesta garantizados",
        "Monitoreo de horas y kilometrajes para intervenciones oportunas",
        "Suministro de repuestos incluido en el plan",
        "Informes técnicos periódicos del estado de la flota",
        "Asesoría en cumplimiento normativo (MinTransporte)",
        "Atención prioritaria y repuestos con disponibilidad inmediata",
      ]}
      problems={[
        "Paradas no programadas que generan pérdidas operativas",
        "Sin control de mantenimiento preventivo de la flota",
        "Costos de reparación elevados por falta de prevención",
        "Incumplimiento de normativas del Ministerio de Transporte",
        "Múltiples proveedores sin servicio integrado",
        "Sin historial técnico organizado de cada vehículo",
      ]}
      whyUs={[
        "Plan integral: mantenimiento + repuestos + diagnóstico en un solo proveedor.",
        "Contratos flexibles adaptados al tamaño de su flota y presupuesto.",
        "Reducción comprobada de paradas no programadas con mantenimiento preventivo.",
        "Cumplimiento normativo: le ayudamos con los requisitos del MinTransporte.",
        "Historial técnico organizado de cada vehículo de su flota.",
        "Respuesta rápida y atención prioritaria para clientes con contrato.",
      ]}
      brands={["CAT", "KENWORTH", "FREIGHTLINER", "INTERNATIONAL", "HINO", "CHEVROLET"]}
      faqs={[
        { question: "¿Qué tipos de flota atienden?", answer: "Flotas de transporte de carga pesada, transporte de pasajeros, maquinaria de construcción y flotas mixtas. Desde 5 vehículos en adelante." },
        { question: "¿Cómo funcionan los contratos?", answer: "Diseñamos un plan a medida según su flota: número de vehículos, tipo de operación, kilometraje promedio y presupuesto. Puede ser mensual, trimestral o anual con pagos fijos y predecibles." },
        { question: "¿Incluye repuestos?", answer: "Sí. Los planes incluyen suministro de repuestos con disponibilidad prioritaria y precios preferenciales para clientes con contrato." },
        { question: "¿Atienden en toda Colombia?", answer: "Sí. Tenemos cobertura a nivel nacional con servicio técnico en campo para flotas que operan en ruta." },
      ]}
      breadcrumbName="Mantenimiento de Flotas"
      breadcrumbUrl="/mantenimiento-flotas"
      ctaText="Solicitar Plan de Mantenimiento"
    />
  );
}
