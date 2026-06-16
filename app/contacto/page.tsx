"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Instagram,
  Facebook,
} from "lucide-react";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola, soy ${formData.nombre}${formData.empresa ? ` de ${formData.empresa}` : ""}. ${formData.servicio ? `Me interesa: ${formData.servicio}. ` : ""}${formData.mensaje}`;
    window.open(
      `https://wa.me/573133799992?text=${encodeURIComponent(message)}`,
      "_blank",
    );
    setIsSubmitted(true);
  };

  return (
    <div className="pt-20">
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 industrial-gradient" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{ backgroundImage: "url('/cs-contacto.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon/20 to-carbon/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-bone/40 mb-8">
            <Link
              href="/"
              className="hover:text-brand-yellow transition-colors"
            >
              Inicio
            </Link>
            <span>/</span>
            <span className="text-bone/60">Contacto</span>
          </nav>
          <div className="max-w-3xl">
            <span className="text-brand-yellow text-sm font-bold uppercase tracking-widest">
              Contacto
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-bone mt-4">
              Hablemos de su Proyecto
            </h1>
            <p className="text-bone/60 mt-6 text-lg leading-relaxed">
              Cotice repuestos, solicite servicio técnico o consulte por
              maquinaria. Respuesta rápida por WhatsApp o formulario de
              contacto.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl text-gray-900 mb-6">
                Envíenos su Consulta
              </h2>
              {isSubmitted ? (
                <div className="p-8 bg-white border border-brand-yellow/30 rounded-sm text-center">
                  <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-brand-yellow" />
                  </div>
                  <h3 className="font-heading text-xl text-gray-900">
                    Mensaje Enviado
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Se abrió WhatsApp con su mensaje. Nos comunicaremos pronto.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-gray-900 font-bold text-sm hover:underline"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="nombre"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Nombre *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        required
                        value={formData.nombre}
                        onChange={(e) =>
                          setFormData({ ...formData, nombre: e.target.value })
                        }
                        className="w-full bg-white border border-gray-300 rounded-sm px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-yellow/70 transition-colors"
                        placeholder="Su nombre"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="empresa"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        value={formData.empresa}
                        onChange={(e) =>
                          setFormData({ ...formData, empresa: e.target.value })
                        }
                        className="w-full bg-white border border-gray-300 rounded-sm px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-yellow/70 transition-colors"
                        placeholder="Nombre de su empresa"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="telefono"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        required
                        value={formData.telefono}
                        onChange={(e) =>
                          setFormData({ ...formData, telefono: e.target.value })
                        }
                        className="w-full bg-white border border-gray-300 rounded-sm px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-yellow/70 transition-colors"
                        placeholder="+57 300 000 0000"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="servicio"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Servicio de Interés
                      </label>
                      <select
                        id="servicio"
                        value={formData.servicio}
                        onChange={(e) =>
                          setFormData({ ...formData, servicio: e.target.value })
                        }
                        className="w-full bg-white border border-gray-300 rounded-sm px-4 py-3 text-gray-900 focus:outline-none focus:border-brand-yellow/70 transition-colors"
                      >
                        <option value="">Seleccionar...</option>
                        <option value="Repuestos">Repuestos</option>
                        <option value="Servicio Técnico">
                          Servicio Técnico
                        </option>
                        <option value="Maquinaria Usada">
                          Maquinaria Usada
                        </option>
                        <option value="Motores Diésel">
                          Reparación Motores Diésel
                        </option>
                        <option value="Electrónica/Harness">
                          Electrónica / Harness / Módulos
                        </option>
                        <option value="Sistemas Hidráulicos">
                          Sistemas Hidráulicos
                        </option>
                        <option value="Mantenimiento Flotas">
                          Mantenimiento de Flotas
                        </option>
                        <option value="PESV">PESV</option>
                        <option value="Cintas Reflectivas">
                          Cintas Reflectivas 3M
                        </option>
                        <option value="Pintura">Reparación y Pintura</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      required
                      rows={5}
                      value={formData.mensaje}
                      onChange={(e) =>
                        setFormData({ ...formData, mensaje: e.target.value })
                      }
                      className="w-full bg-white border border-gray-300 rounded-sm px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-yellow/70 transition-colors resize-none"
                      placeholder="Describa su necesidad: qué equipo tiene, qué repuesto busca, qué falla presenta..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-amber text-carbon font-bold px-8 py-4 rounded-sm transition-all hover:shadow-lg hover:shadow-brand-yellow/20"
                  >
                    <Send className="w-5 h-5" />
                    Enviar por WhatsApp
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="p-6 bg-white border border-gray-200 rounded-sm">
                <h3 className="font-heading text-lg text-gray-900 mb-4">
                  Contacto Directo
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/573133799992"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">
                        +57 313 379 9992
                      </p>
                      <p className="text-xs text-gray-500">
                        Cristian — WhatsApp
                      </p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">
                        Sede Principal
                      </p>
                      <p className="text-sm">
                        Carrocerías Capri, El Cerrito, Mosquera, Cundinamarca,
                        Colombia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-gray-600">
                    <Clock className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Horario</p>
                      <p className="text-sm">
                        Lunes a Sábado: 7:00 AM — 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border border-gray-200 rounded-sm">
                <h3 className="font-heading text-lg text-gray-900 mb-4">
                  Redes Sociales
                </h3>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.instagram.com/crprojectsas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="text-sm">@crprojectsas</span>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1Dj61LMP2r/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                    <span className="text-sm">Facebook</span>
                  </a>
                </div>
              </div>

              <div className="p-6 bg-brand-yellow/10 border border-brand-yellow/20 rounded-sm">
                <h3 className="font-heading text-lg text-gray-900 mb-2">
                  Respuesta Rápida
                </h3>
                <p className="text-sm text-gray-600">
                  Para cotizaciones urgentes o disponibilidad inmediata,
                  escríbanos directamente por WhatsApp. Respondemos en minutos
                  durante horario laboral.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-80 lg:h-96 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.407067134999!2d-74.1831868!3d4.699130200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9d6da26e4b99%3A0xcb7bde902bb9fd1e!2sCR%20PROJECT%20S.A.S!5e0!3m2!1ses!2sco!4v1781651686180!5m2!1ses!2sco"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación CR Project S.A.S - Mosquera, Cundinamarca"
        />
      </section>

      <section className="py-16 lg:py-20 bg-carbon">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl text-bone text-center mb-10">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "¿En qué horario atienden?",
                a: "Nuestro horario de atención es de lunes a sábado, de 7:00 AM a 6:00 PM. Para urgencias fuera de horario, puede escribirnos por WhatsApp y responderemos lo antes posible.",
              },
              {
                q: "¿Atienden en toda Colombia?",
                a: "Sí. Nuestra sede está en Mosquera, Cundinamarca, pero ofrecemos cobertura a nivel nacional con servicio técnico, repuestos y reparaciones en campo.",
              },
              {
                q: "¿Cómo puedo cotizar un repuesto?",
                a: "La forma más rápida es por WhatsApp al +57 313 379 9992. Indíquenos la referencia, marca y modelo de su equipo, y le respondemos con disponibilidad y precio.",
              },
              {
                q: "¿Manejan crédito?",
                a: "Para clientes recurrentes y empresas con contrato, ofrecemos condiciones de pago a convenir. Consulte directamente.",
              },
              {
                q: "¿Hacen envíos a otras ciudades?",
                a: "Sí. Realizamos envíos de repuestos a nivel nacional a través de transportadoras confiables. Los tiempos y costos dependen del destino y peso del producto.",
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
                name: "Contacto",
                item: "https://www.crprojectsas.com/contacto",
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
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿En qué horario atienden?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Lunes a sábado, de 7:00 AM a 6:00 PM.",
                },
              },
              {
                "@type": "Question",
                name: "¿Atienden en toda Colombia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Cobertura nacional con sede en Mosquera, Cundinamarca.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cómo puedo cotizar un repuesto?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Por WhatsApp al +57 313 379 9992 con referencia, marca y modelo.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
