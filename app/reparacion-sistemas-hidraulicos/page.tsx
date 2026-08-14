import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";

export const metadata: Metadata = {
  title:
    "Reparación de Sistemas Hidráulicos, Bombas y Cilindros — Bogotá y Colombia",
  description:
    "Reparación y mantenimiento de sistemas hidráulicos, bombas y cilindros hidráulicos para retroexcavadoras, excavadoras, cargadores y toda la línea de maquinaria amarilla, en Bogotá y toda Colombia.",
  alternates: { canonical: "https://www.crprojectsas.com/reparacion-sistemas-hidraulicos" },
};

export default function SistemasHidraulicosPage() {
  return (
    <ServicePageTemplate
      title="Reparación de Sistemas Hidráulicos"
      subtitle="Mantenimiento especializado"
      description="Reparación y mantenimiento profesional de sistemas hidráulicos para toda la línea de maquinaria amarilla. Diagnóstico de fugas, pérdida de presión, cilindros, bombas, válvulas y mangueras. Servicio en taller o en campo."
      heroImage="/hidraulico.jpg"
      features={[
        "Diagnóstico de presión y caudal del sistema hidráulico",
        "Reparación y reconstrucción de cilindros hidráulicos",
        "Reparación y cambio de bombas hidráulicas",
        "Mantenimiento de válvulas de control",
        "Cambio de mangueras y acoples",
        "Cambio y análisis de aceite hidráulico",
        "Detección y reparación de fugas",
      ]}
      problems={[
        "Pérdida de fuerza en los brazos o implementos",
        "Fugas de aceite hidráulico",
        "Movimientos lentos o erráticos",
        "Ruidos anormales en la bomba hidráulica",
        "Sobrecalentamiento del sistema",
        "Cilindros que no mantienen posición",
      ]}
      whyUs={[
        "Diagnóstico técnico preciso: medimos presión y caudal antes de desmontar componentes.",
        "Experiencia con toda la línea amarilla: retroexcavadoras, excavadoras, cargadores, motoniveladoras.",
        "Servicio en campo: llevamos equipos y herramientas donde está la máquina.",
        "Partes hidráulicas genuinas y aftermarket disponibles.",
        "Reducimos tiempos muertos con diagnóstico rápido y solución eficiente.",
        "Pruebas post-reparación para garantizar el correcto funcionamiento.",
      ]}
      brands={["CAT", "JOHN DEERE", "NEW HOLLAND", "CASE", "KOMATSU"]}
      comparisonTable={{
        heading: "Servicio en Campo vs. en Taller — Qué Incluye y Cuánto Tarda",
        columnALabel: "En campo",
        columnBLabel: "En taller",
        rows: [
          {
            aspecto: "Qué incluye",
            columnA:
              "Diagnóstico de presión y caudal, cambio de mangueras y acoples, reparación de fugas.",
            columnB:
              "Reconstrucción de cilindros y bombas hidráulicas, mantenimiento de válvulas de control.",
          },
          {
            aspecto: "Cuándo se recomienda",
            columnA:
              "Fallas identificadas que no requieren desmontar el componente — mangueras, acoples, fugas puntuales.",
            columnB:
              "Reconstrucción de bombas o cilindros, que requiere banco de trabajo especializado.",
          },
          {
            aspecto: "Tiempo estimado",
            columnA: "Horas — mismo día en la mayoría de los casos",
            columnB: "3-5 días, según disponibilidad de sellos y partes",
          },
          {
            aspecto: "Dónde se realiza",
            columnA:
              "En la ubicación de la máquina: obra, mina o sede del cliente.",
            columnB:
              "En el taller de CR Project, con pruebas post-reparación de presión y caudal.",
          },
        ],
      }}
      faqs={[
        { question: "¿Qué equipos atienden?", answer: "Retroexcavadoras, excavadoras, cargadores, motoniveladoras, vibrocompactadores, mini cargadores y toda la línea de maquinaria amarilla que use sistema hidráulico." },
        { question: "¿Pueden reparar el sistema hidráulico en campo?", answer: "Sí. Diagnósticos, cambio de mangueras, reparación de fugas y muchas intervenciones se pueden realizar en campo. Para reconstrucciones de bombas o cilindros, se recomienda llevar el componente al taller." },
        { question: "¿Cuánto tarda una reparación hidráulica?", answer: "Depende del trabajo. Un cambio de manguera puede tomar horas, mientras que la reconstrucción de una bomba o cilindro puede tomar 3-5 días según disponibilidad de sellos y partes." },
        { question: "¿Manejan sellos y partes hidráulicas?", answer: "Sí. Contamos con kits de sellos, empaques, mangueras y componentes hidráulicos para las principales marcas. Partes genuinas y aftermarket disponibles." },
      ]}
      breadcrumbName="Sistemas Hidráulicos"
      breadcrumbUrl="/reparacion-sistemas-hidraulicos"
    />
  );
}
