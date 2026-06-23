import { Metadata } from "next";
import Link from "next/link";
import {
  Wrench,
  Cog,
  Truck,
  Cpu,
  Factory,
  Zap,
  Package,
  ArrowRight,
  Phone,
  Clock,
  Award,
  MapPin,
  Users,
  ShieldCheck,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Servicios de Maquinaria Pesada | Repuestos, Reparación y Mantenimiento | C.R. Project S.A.S.",
  description:
    "Servicios especializados para maquinaria pesada en Colombia: venta de repuestos OEM y aftermarket CAT, CNH, John Deere; reparación de motores diésel, diagnóstico con escáner, mantenimiento preventivo y alquiler de maquinaria amarilla. Cobertura nacional.",
  keywords:
    "servicios maquinaria pesada, repuestos maquinaria amarilla, reparación motores diésel, mantenimiento flotas Colombia, alquiler maquinaria pesada, diagnóstico escáner CAT, servicio técnico John Deere, repuestos CAT Colombia",
  openGraph: {
    title: "Servicios Integrales de Maquinaria Pesada | C.R. Project S.A.S.",
    description:
      "Venta de repuestos, reparación de motores diésel, diagnóstico computarizado, mantenimiento de flotas y alquiler de maquinaria pesada con cobertura nacional en Colombia.",
    url: "https://www.crprojectsas.com/servicios",
    type: "website",
    images: [
      {
        url: "https://www.crprojectsas.com/cs-servicios.png",
        width: 1200,
        height: 630,
        alt: "Servicios de Maquinaria Pesada C.R. Project S.A.S.",
      },
    ],
  },
  alternates: {
    canonical: "https://www.crprojectsas.com/servicios",
  },
};

const services = [
  {
    title: "Venta de Repuestos para Maquinaria Pesada",
    h2: "Venta de Repuestos Genuinos OEM y Aftermarket para Maquinaria Amarilla",
    description:
      "Partes genuinas OEM y aftermarket de alta calidad para excavadoras, retroexcavadoras, cargadores, motoniveladoras y bulldozers de las marcas más reconocidas del mercado.",
    parrafos: [
      "Trabajamos directamente con proveedores certificados en Estados Unidos y Colombia para garantizar la disponibilidad inmediata de repuestos originales y aftermarket premium. Nuestro inventario incluye componentes para marcas como Caterpillar (CAT), Case New Holland (CNH), John Deere, Komatsu, Volvo, Hyundai y más.",
      "Suministramos turbos Garrett y BorgWarner, inyectores common rail, bombas hidráulicas, filtros de alto rendimiento, kits de sellos, componentes de tren de rodaje, elementos de dirección y transmisión, así como partes de motor diésel completas.",
    ],
    beneficios: [
      "Repuestos OEM y aftermarket certificados",
      "Disponibilidad inmediata en sede Mosquera",
      "Envíos a todo Colombia en 24-72 horas",
      "Garantía escrita en todos los productos",
      "Asesoría técnica previa a la compra",
    ],
    href: "/repuestos",
    icon: Package,
    tag: "Disponibilidad inmediata",
  },
  {
    title: "Reparación de Maquinaria Pesada",
    h2: "Servicio Técnico y Reparación de Maquinaria Pesada a Nivel Nacional",
    description:
      "Diagnóstico profesional y solución de fallas mecánicas, hidráulicas y eléctricas siguiendo las especificaciones técnicas de cada fabricante.",
    parrafos: [
      "Nuestro equipo de técnicos certificados cuenta con más de 10 años de experiencia en el diagnóstico y reparación de maquinaria amarilla y equipos de construcción. Realizamos evaluaciones técnicas formales con informes detallados que permiten tomar decisiones informadas sobre las intervenciones necesarias.",
      "Ofrecemos cobertura nacional con desplazamiento a obra, mina o sede del cliente. Atendemos emergencias mecánicas, reconstrucciones mayores, overhauls de componentes y puesta en marcha de equipos detenidos. Cada reparación se documenta con fotografías, partes reemplazadas y pruebas de funcionamiento.",
    ],
    beneficios: [
      "Técnicos certificados con experiencia comprobada",
      "Cobertura nacional con atención en sitio",
      "Informes técnicos detallados post-servicio",
      "Garantía sobre mano de obra y repuestos",
      "Atención de emergencias 24/7",
    ],
    href: "/servicio-tecnico",
    icon: Wrench,
    tag: "Más solicitado",
  },
  {
    title: "Escáner y Diagnóstico Computarizado",
    h2: "Diagnóstico Computarizado con Escáner Profesional y Reconstrucción de Harness",
    description:
      "Diagnóstico electrónico avanzado con escáner profesional, reconstrucción de arneses eléctricos (harness) y programación de módulos REMAN con la más alta capacidad técnica del sector.",
    parrafos: [
      "Contamos con equipos de diagnóstico de última generación compatibles con los protocolos CAN J1939, SAE J1708 y sistemas propietarios CAT ET, Cummins Insite, Detroit Diesel Diagnostic Link y John Deere Service Advisor. Esta capacidad nos permite identificar fallas electrónicas que otros talleres no detectan.",
      "Somos especialistas en reconstrucción de arneses eléctricos (harness) dañados por vibración, calor o roedores, y en la programación de módulos electrónicos REMAN (ECM, ECM de transmisión, módulos REM, BCM). Este servicio es único en la región y nos diferencia como referente técnico.",
    ],
    beneficios: [
      "Escáner multimarca de última generación",
      "Reconstrucción de harness eléctricos",
      "Programación de módulos ECM y REMAN",
      "Diagnóstico de protocolos CAN y J1939",
      "Soluciones que otros talleres no ofrecen",
    ],
    href: "/diagnostico",
    icon: Cpu,
    tag: "Especialidad única",
  },
  {
    title: "Mantenimiento Eléctrico",
    h2: "Reparación y Mantenimiento del Sistema Eléctrico de Maquinaria Pesada",
    description:
      "Reparación profesional de alternadores, motores de arranque, sistemas de carga y revisión integral del cableado eléctrico para maquinaria pesada y vehículos de trabajo.",
    parrafos: [
      "El sistema eléctrico es el corazón operativo de la maquinaria moderna. Realizamos diagnóstico completo con multímetro, osciloscopio y pruebas de caída de voltaje para identificar fallas intermitentes que generan paradas no programadas y costos elevados.",
      "Reparamos y rebobinamos alternadores y motores de arranque de alto amperaje, reemplazamos cableado deteriorado con materiales de grado automotriz, instalamos sistemas de iluminación LED de alta eficiencia y corregimos conexiones deficientes que generan sobrecalentamiento.",
    ],
    beneficios: [
      "Diagnóstico eléctrico con osciloscopio",
      "Rebobinado de alternadores y arranques",
      "Reemplazo de cableado con materiales premium",
      "Instalación de sistemas LED de alta eficiencia",
      "Pruebas de carga y caída de voltaje",
    ],
    href: "/mantenimiento-electrico",
    icon: Zap,
  },
  {
    title: "Mantenimiento Preventivo y Correctivo de Flotas",
    h2: "Planes de Mantenimiento Preventivo y Correctivo para Flotas de Maquinaria",
    description:
      "Contratos recurrentes de mantenimiento diseñados para flotas de carga, pasajeros y maquinaria de construcción que buscan minimizar paradas no programadas y maximizar la disponibilidad operativa.",
    parrafos: [
      "Diseñamos planes de mantenimiento personalizados según las horas de operación, tipo de equipo y condiciones de trabajo de cada cliente. Nuestros contratos incluyen visitas programadas, chequeos de niveles, cambio de filtros y fluidos, inspección de componentes críticos y reportes mensuales de condición.",
      "Este modelo de servicio reduce hasta en un 40% las fallas inesperadas, extiende la vida útil de los equipos y permite planificar presupuestariamente los costos de mantenimiento. Ideal para empresas mineras, constructoras, transportadoras y operadores de canteras.",
    ],
    beneficios: [
      "Planes personalizados según operación",
      "Reducción del 40% en fallas inesperadas",
      "Reportes mensuales de condición de flota",
      "Técnicos asignados a su cuenta",
      "Descuentos en repuestos para contratistas",
    ],
    href: "/mantenimiento-flotas",
    icon: Truck,
    tag: "Contratos recurrentes",
  },
  {
    title: "Alquiler de Maquinaria y Equipos Pesados",
    h2: "Alquiler de Maquinaria Pesada y Equipos de Construcción con Flota Certificada",
    description:
      "Flota disponible para alquiler con opciones flexibles de corto, mediano y largo plazo. Equipos certificados, con mantenimiento al día y listos para operar en cualquier proyecto.",
    parrafos: [
      "Ofrecemos alquiler de excavadoras, retroexcavadoras, cargadores frontales, motoniveladoras, rodillos compactadores y plantas eléctricas. Todos nuestros equipos cuentan con revisión técnico-legal vigente, seguro todo riesgo y soporte técnico durante el periodo de alquiler.",
      "Atendemos proyectos de construcción civil, obras viales, minería, agricultura y eventos. Los contratos pueden ser por días, semanas o meses, con opción de compra al final del periodo (renting). Incluye transporte hasta el sitio de operación si se requiere.",
    ],
    beneficios: [
      "Flota certificada y asegurada",
      "Contratos flexibles por horas, días o meses",
      "Soporte técnico durante el alquiler",
      "Transporte incluido a sitio de obra",
      "Opción de renting con compra final",
    ],
    href: "/alquiler-maquinaria",
    icon: Factory,
  },
  {
    title: "Reparación de Motores Diésel",
    h2: "Reparación Integral de Motores Diésel para Maquinaria Amarilla y Vehículos Pesados",
    description:
      "Diagnóstico y reparación completa de motores diésel mecánicos y electrónicos, con mano de obra especializada, banco de pruebas y repuestos originales.",
    parrafos: [
      "Reparamos motores diésel Caterpillar, Cummins, Detroit Diesel, John Deere, Volvo, Perkins e Isuzu. Nuestros servicios incluyen overhaul completo, rectificación de block y culata, calibración de inyectores, ajuste de válvulas, reemplazo de turbo, bomba de inyección y sistemas common rail.",
      "Contamos con banco de pruebas para inyectores y bombas, lo que nos permite garantizar el rendimiento del motor después de cada intervención. Todos los motores reparados pasan por un protocolo de rodaje controlado antes de ser entregados al cliente.",
    ],
    beneficios: [
      "Overhaul completo de motores diésel",
      "Banco de pruebas para inyectores y bombas",
      "Repuestos OEM garantizados",
      "Protocolo de rodaje post-reparación",
      "Garantía escrita de 6 meses",
    ],
    href: "/reparacion-motores",
    icon: Cog,
  },
  {
    title: "Venta de Maquinaria Pesada Importada",
    h2: "Importación y Venta de Maquinaria Pesada Usada desde Subastas de EE.UU.",
    description:
      "Importamos directamente desde las subastas más grandes de Estados Unidos (Ritchie Bros., IronPlanet, Auction Time). Equipos verificados con historial completo y trazabilidad legal.",
    parrafos: [
      "Gestionamos la compra, inspección, transporte internacional, nacionalización y entrega de maquinaria pesada usada proveniente de las principales casas de subastas de Estados Unidos. Cada equipo es evaluado antes de la compra con reporte de horas de operación, historial de mantenimiento y estado estructural.",
      "Hemos importado con éxito equipos como CAT 730, CAT 320, John Deere 310G, Case 580 Super N, Komatsu PC200 y más. El cliente recibe el equipo listo para operar en Colombia, con todos los trámites de DIAN y registro nacional completados.",
    ],
    beneficios: [
      "Acceso a subastas de EE.UU. (Ritchie Bros., IronPlanet)",
      "Inspección técnica previa a la compra",
      "Gestión completa de importación y nacionalización",
      "Historial verificado del equipo",
      "Entrega en sede o sitio del cliente",
    ],
    href: "/venta-maquinaria",
    icon: Factory,
    tag: "Alto ticket",
  },
];

export default function ServiciosPage() {
  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/venta-maquinaria.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon/50 to-carbon/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-bone/40 mb-8">
            <Link
              href="/"
              className="hover:text-brand-yellow transition-colors"
            >
              Inicio
            </Link>
            <span>/</span>
            <span className="text-bone/60">Servicios</span>
          </nav>

          <div className="max-w-4xl">
            <span className="text-brand-yellow text-sm font-bold uppercase tracking-widest">
              Soluciones Integrales
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-bone mt-4 leading-tight">
              Servicios Especializados para{" "}
              <span className="text-brand-yellow">Maquinaria Pesada</span> en
              Colombia
            </h1>
            <p className="text-bone/90 mt-6 text-lg leading-relaxed max-w-3xl">
              En <strong>C.R. Project S.A.S.</strong> somos una empresa
              comercializadora de partes para{" "}
              <strong>maquinaria amarilla</strong>, camiones y{" "}
              <strong>motores diésel</strong>. Ofrecemos servicio técnico
              especializado con cobertura nacional y operación binacional
              EE.UU.–Colombia, garantizando repuestos originales, mano de obra
              certificada y soluciones integrales para mantener su flota
              operativa.
            </p>

            {/* Stats de autoridad */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {[
                { icon: Clock, label: "Respuesta en", value: "< 2 horas" },
                { icon: MapPin, label: "Cobertura", value: "Nacional" },
                { icon: Award, label: "Experiencia", value: "+10 años" },
                { icon: Users, label: "Clientes activos", value: "+200" },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="bg-carbon/60 backdrop-blur border border-brand-yellow/20 rounded-sm p-4"
                  >
                    <Icon className="w-6 h-6 text-brand-yellow mb-2" />
                    <p className="text-bone/60 text-xs uppercase tracking-wider">
                      {stat.label}
                    </p>
                    <p className="text-bone font-heading text-xl font-bold">
                      {stat.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* GRID DE SERVICIOS */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-brand-yellow text-sm font-bold uppercase tracking-widest">
              Nuestros Servicios
            </span>
            {/* H2 ELIMINADO → convertido a texto visual para mantener jerarquía correcta */}
            <p className="font-heading text-3xl sm:text-4xl text-gray-900 mt-3 font-bold leading-tight">
              Soluciones Completas para Cada Necesidad Operativa
            </p>
            <p className="mt-4 text-gray-600 text-lg">
              Desde la venta de un repuesto hasta la importación de un equipo
              completo, cubrimos todo el ciclo de vida de su maquinaria pesada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group relative bg-white border border-gray-200 rounded-sm p-8 transition-all duration-300 hover:border-brand-yellow hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-yellow/10"
                >
                  {service.tag && (
                    <span className="absolute top-4 right-4 text-xs font-bold text-carbon bg-brand-yellow px-3 py-1 rounded-sm">
                      {service.tag}
                    </span>
                  )}
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-brand-yellow/10 border border-brand-yellow/20 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-brand-yellow/20 transition-colors">
                      <Icon className="w-7 h-7 text-brand-yellow" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-heading text-xl text-gray-900 group-hover:text-gray-600 transition-colors leading-tight">
                        {service.h2 || service.title}
                      </h2>
                      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Beneficios */}
                      {service.beneficios && (
                        <ul className="mt-4 space-y-1">
                          {service.beneficios.slice(0, 3).map((b, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-xs text-gray-700"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-brand-yellow flex-shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <span className="inline-flex items-center gap-1 text-gray-700 text-sm font-bold mt-4 group-hover:gap-2 transition-all border-b border-brand-yellow pb-0.5">
                        Ver servicio <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="py-16 lg:py-20 bg-carbon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-brand-yellow text-sm font-bold uppercase tracking-widest">
              ¿Por qué C.R. Project S.A.S.?
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-bone mt-3">
              Razones que nos convierten en su aliado estratégico
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                titulo: "Experiencia comprobada",
                texto:
                  "Más de 10 años atendiendo flotas de minería, construcción y transporte en Colombia.",
              },
              {
                icon: MapPin,
                titulo: "Cobertura nacional",
                texto:
                  "Atendemos en sitio desde La Guajira hasta Nariño. Servicio técnico donde usted nos necesite.",
              },
              {
                icon: ShieldCheck,
                titulo: "Garantía escrita",
                texto:
                  "Todos nuestros servicios y repuestos incluyen garantía documentada por escrito.",
              },
              {
                icon: Clock,
                titulo: "Respuesta rápida",
                texto:
                  "Cotizaciones en menos de 2 horas hábiles. Atención de emergencias 24/7.",
              },
              {
                icon: Users,
                titulo: "Operación binacional",
                texto:
                  "Importamos directamente desde EE.UU., lo que nos da acceso a repuestos y equipos difíciles de conseguir.",
              },
              {
                icon: Cpu,
                titulo: "Tecnología avanzada",
                texto:
                  "Escáner multimarca, banco de pruebas y capacidad de programación de módulos únicos en la región.",
              },
            ].map((razon, i) => {
              const Icon = razon.icon;
              return (
                <div
                  key={i}
                  className="bg-graphite/60 border border-steel/20 rounded-sm p-6 hover:border-brand-yellow/30 transition-colors"
                >
                  <Icon className="w-8 h-8 text-brand-yellow mb-4" />
                  <h3 className="font-heading text-xl text-bone mb-2">
                    {razon.titulo}
                  </h3>
                  <p className="text-bone/60 text-sm leading-relaxed">
                    {razon.texto}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESO DE TRABAJO */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-brand-yellow text-sm font-bold uppercase tracking-widest">
              Cómo trabajamos
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-gray-900 mt-3">
              Proceso simple, resultados profesionales
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                numero: "01",
                titulo: "Contacto inicial",
                texto:
                  "Escríbanos por WhatsApp o formulario. Describa su equipo, falla o necesidad.",
              },
              {
                numero: "02",
                titulo: "Diagnóstico",
                texto:
                  "Evaluamos técnicamente su caso y emitimos un informe con opciones de solución.",
              },
              {
                numero: "03",
                titulo: "Cotización formal",
                texto:
                  "Recibe una propuesta detallada con tiempos, costos y garantías por escrito.",
              },
              {
                numero: "04",
                titulo: "Ejecución y entrega",
                texto:
                  "Realizamos el trabajo con reportes de avance y entregamos con garantía documentada.",
              },
            ].map((paso, i) => (
              <div key={i} className="relative">
                <div className="bg-white border border-gray-200 rounded-sm p-6 h-full">
                  <span className="font-heading text-5xl text-brand-yellow/30 font-bold">
                    {paso.numero}
                  </span>
                  <h3 className="font-heading text-xl text-gray-900 mt-2 mb-2">
                    {paso.titulo}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {paso.texto}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — DISEÑO OSCURO IGUAL AL DE CONTACTO */}
      <section className="py-16 lg:py-20 bg-carbon">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl text-bone text-center mb-10">
            Preguntas Frecuentes sobre Servicios de Maquinaria Pesada
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "¿Qué marcas de maquinaria pesada atienden?",
                a: "Atendemos todas las marcas líderes del mercado: Caterpillar (CAT), Case New Holland (CNH), John Deere, Komatsu, Volvo, Hyundai, Hitachi, Cummins, Detroit Diesel, Perkins e Isuzu. Si su marca no está en esta lista, consúltenos igual: tenemos acceso a partes y conocimiento técnico de prácticamente cualquier equipo.",
              },
              {
                q: "¿Los repuestos son originales o alternativos?",
                a: "Trabajamos con ambas opciones. Ofrecemos repuestos OEM (originales del fabricante) y aftermarket premium de marcas certificadas como Garrett, BorgWarner, Bosch, Delphi y más. Le asesoramos según su presupuesto y necesidades operativas para que tome la mejor decisión.",
              },
              {
                q: "¿Atienden fuera de Bogotá y Cundinamarca?",
                a: "Sí. Tenemos cobertura nacional. Enviamos repuestos por transportadora a cualquier ciudad de Colombia en 24-72 horas, y nuestro equipo técnico se desplaza a obra, mina o sede del cliente cuando el servicio lo requiere.",
              },
              {
                q: "¿Ofrecen contratos de mantenimiento recurrente?",
                a: "Sí. Diseñamos planes de mantenimiento preventivo y correctivo para flotas, con visitas programadas, reportes mensuales y descuentos en repuestos. Es el modelo preferido por empresas mineras, constructoras y transportadoras que buscan reducir costos y paradas inesperadas.",
              },
              {
                q: "¿Cómo funciona la importación de maquinaria desde EE.UU.?",
                a: "Usted nos indica qué equipo necesita. Nosotros lo buscamos en las principales subastas de EE.UU. (Ritchie Bros., IronPlanet, Auction Time), lo inspeccionamos, gestionamos la compra, transporte internacional, nacionalización aduanera y se lo entregamos listo para operar en Colombia.",
              },
              {
                q: "¿Qué garantía ofrecen sobre los servicios?",
                a: "Todos nuestros servicios incluyen garantía escrita. Los repuestos tienen garantía del fabricante (entre 3 y 12 meses), la mano de obra tiene garantía de 3 a 6 meses según el tipo de intervención, y las reparaciones de motores diésel incluyen garantía de 6 meses con protocolo de rodaje documentado.",
              },
              {
                q: "¿Pueden reparar equipos con fallas electrónicas complejas?",
                a: "Sí, es nuestra especialidad. Contamos con escáner multimarca, capacidad de lectura de protocolos CAN J1939, reconstrucción de arneses eléctricos (harness) y programación de módulos ECM y REMAN. Muchos talleres no pueden resolver este tipo de fallas; nosotros sí.",
              },
              {
                q: "¿Cuánto demora una cotización?",
                a: "Las cotizaciones estándar se entregan en menos de 2 horas hábiles por WhatsApp o correo. Para casos que requieren evaluación técnica en sitio o importación especial, el tiempo puede extenderse a 24-48 horas, pero siempre le informamos el tiempo estimado desde el primer contacto.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-graphite/60 border border-steel/20 rounded-sm"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer text-bone font-medium hover:text-brand-yellow transition-colors">
                  {faq.q}
                  <span className="text-brand-yellow group-open:rotate-45 transition-transform text-xl">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-bone/60 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 bg-brand-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl text-carbon">
            ¿No encuentra lo que busca?
          </h2>
          <p className="text-carbon/70 mt-4 text-lg">
            Pregunta lo que buscas. Tenemos acceso a partes genuinas y
            aftermarket de todas las marcas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="https://wa.me/573133799992?text=Hola%2C%20necesito%20cotizar%20un%20servicio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-carbon hover:bg-graphite text-bone font-bold text-base px-8 py-4 rounded-sm transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Consultar por WhatsApp
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-carbon font-bold text-base px-8 py-4 rounded-sm transition-all border-2 border-carbon"
            >
              Ir al formulario de contacto
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SCHEMA BREADCRUMBS */}
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
              {
                "@type": "ListItem",
                position: 2,
                name: "Servicios",
                item: "https://www.crprojectsas.com/servicios",
              },
            ],
          }),
        }}
      />

      {/* SCHEMA FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué marcas de maquinaria pesada atienden?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Atendemos Caterpillar (CAT), Case New Holland (CNH), John Deere, Komatsu, Volvo, Hyundai, Hitachi, Cummins, Detroit Diesel, Perkins e Isuzu, entre otras.",
                },
              },
              {
                "@type": "Question",
                name: "¿Los repuestos son originales o alternativos?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Trabajamos con repuestos OEM originales y aftermarket premium de marcas certificadas como Garrett, BorgWarner, Bosch y Delphi.",
                },
              },
              {
                "@type": "Question",
                name: "¿Atienden fuera de Bogotá y Cundinamarca?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, tenemos cobertura nacional. Enviamos repuestos a cualquier ciudad en 24-72 horas y nuestro equipo técnico se desplaza a obra, mina o sede del cliente.",
                },
              },
              {
                "@type": "Question",
                name: "¿Ofrecen contratos de mantenimiento recurrente?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, diseñamos planes de mantenimiento preventivo y correctivo para flotas con visitas programadas, reportes mensuales y descuentos en repuestos.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cómo funciona la importación de maquinaria desde EE.UU.?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Buscamos el equipo en subastas de EE.UU., lo inspeccionamos, gestionamos compra, transporte internacional, nacionalización aduanera y lo entregamos listo para operar en Colombia.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué garantía ofrecen sobre los servicios?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Todos los servicios incluyen garantía escrita: repuestos de 3 a 12 meses, mano de obra de 3 a 6 meses, y reparaciones de motores diésel con garantía de 6 meses.",
                },
              },
              {
                "@type": "Question",
                name: "¿Pueden reparar equipos con fallas electrónicas complejas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, es nuestra especialidad. Contamos con escáner multimarca, lectura de protocolos CAN J1939, reconstrucción de harness y programación de módulos ECM y REMAN.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto demora una cotización?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Las cotizaciones estándar se entregan en menos de 2 horas hábiles. Para casos especiales, entre 24 y 48 horas.",
                },
              },
            ],
          }),
        }}
      />

      {/* SCHEMA SERVICE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Servicios para maquinaria pesada",
            provider: {
              "@type": "LocalBusiness",
              name: "C.R. Project S.A.S.",
              telephone: "+573133799992",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mosquera",
                addressRegion: "Cundinamarca",
                addressCountry: "CO",
              },
            },
            areaServed: {
              "@type": "Country",
              name: "Colombia",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Servicios de Maquinaria Pesada",
              itemListElement: services.map((s) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: s.title,
                  description: s.description,
                },
              })),
            },
          }),
        }}
      />
    </div>
  );
}
