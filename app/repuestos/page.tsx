import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title: "Repuestos para Maquinaria Amarilla y Motores Diésel — Genuinos y Aftermarket",
  description: "Venta de repuestos genuinos OEM y aftermarket para maquinaria amarilla, camiones y motores diésel. Turbos Garrett y BorgWarner, inyectores, módulos. Disponibilidad inmediata.",
  alternates: { canonical: "https://www.crprojectsas.com/repuestos" },
};

export default function RepuestosPage() {
  return (
    <ServicePageTemplate
      title="Repuestos para Maquinaria Amarilla y Motores Diésel"
      subtitle="Partes genuinas y aftermarket"
      description="Pregunta lo que buscas. Comercializamos partes genuinas OEM y aftermarket para toda la línea de maquinaria amarilla, camiones y motores diésel. Turbos, inyectores, filtros, módulos y más. Disponibilidad inmediata en referencias críticas."
      heroImage="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1920"
      features={[
        "Partes genuinas OEM de fábrica",
        "Alternativas aftermarket de alta calidad",
        "Turbos Garrett y BorgWarner originales",
        "Inyectores diésel y kits de reparación",
        "Módulos electrónicos REMAN programados",
        "Herramientas de diagnóstico: CAT COM ADAPTER 3 (ref. 478-0235) con disponibilidad inmediata",
        "Filtros, empaques, sellos y componentes hidráulicos",
      ]}
      problems={[
        "No encuentra repuestos genuinos en el mercado local",
        "Necesita alternativas aftermarket confiables",
        "Máquina parada esperando una pieza crítica",
        "Turbos o inyectores defectuosos que otros no consiguen",
        "Necesita herramientas de diagnóstico profesionales",
      ]}
      whyUs={[
        "Operación en EE.UU.: acceso directo a partes genuinas difíciles de conseguir en el mercado local.",
        "Dos opciones: genuino para máxima durabilidad o aftermarket de calidad para mejor precio. Usted elige.",
        "Disponibilidad inmediata en referencias críticas como CAT COM ADAPTER 3 (478-0235).",
        "Asesoría técnica: le orientamos sobre la parte correcta según su equipo y aplicación.",
        "Entrega a nivel nacional.",
        "Soporte técnico post-venta: no solo vendemos la pieza, la instalamos si lo necesita.",
      ]}
      brands={["CAT", "JOHN DEERE", "NEW HOLLAND", "CNH", "GARRETT", "BORGWARNER", "NEXIQ", "3M"]}
      faqs={[
        { question: "¿Manejan partes genuinas u aftermarket?", answer: "Ambas. Ofrecemos partes genuinas OEM de fábrica y alternativas aftermarket de alta calidad. Le asesoramos para que elija la mejor opción según su presupuesto y necesidad: genuino para máxima durabilidad o aftermarket para mejor relación precio-rendimiento." },
        { question: "¿Tienen disponibilidad inmediata?", answer: "Sí en muchas referencias críticas. Por ejemplo, tenemos el CAT COM ADAPTER 3 (ref. 478-0235) con disponibilidad inmediata. Para otras referencias, consulte por WhatsApp y le confirmamos stock o tiempo de importación." },
        { question: "¿Envían a toda Colombia?", answer: "Sí. Realizamos envíos a nivel nacional. Las piezas más solicitadas están disponibles para despacho inmediato desde nuestra sede en Mosquera, Cundinamarca." },
        { question: "¿Para qué marcas tienen repuestos?", answer: "Manejamos repuestos para CAT, CNH, John Deere, New Holland, Case, y más. Turbos Garrett y BorgWarner, herramientas Nexiq y accesorios de diagnóstico CAT." },
      ]}
      breadcrumbName="Repuestos"
      breadcrumbUrl="/repuestos"
      ctaText="Pide tu Repuesto"
    />
  );
}
