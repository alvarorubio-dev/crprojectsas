"use client";

export function FAQSection() {
  const faqs = [
    {
      q: "¿Qué marcas de maquinaria pesada atiende CR Project?",
      a: "Atendemos CAT, Komatsu, CNH, John Deere, New Holland, Cummins, Detroit Diesel, Garrett, BorgWarner, Bosch, Delphi, Denso, NEXIQ y 3M.",
    },
    {
      q: "¿Hacen servicio técnico a nivel nacional en Colombia?",
      a: "Sí. Ofrecemos servicio técnico de maquinaria pesada con cobertura nacional, especialmente en Mosquera, Funza, Madrid, Facatativá, Bogotá y la Sabana de Cundinamarca.",
    },
    {
      q: "¿Venden repuestos genuinos para Caterpillar (CAT) y Komatsu?",
      a: "Sí. Distribuimos repuestos genuinos y aftermarket para CAT, Komatsu, John Deere, Cummins, New Holland y CNH.",
    },
    {
      q: "¿Importan maquinaria usada desde Estados Unidos?",
      a: "Sí. Operamos Colombia – Miami para importar maquinaria usada y repuestos, incluyendo gestión de subastas y nacionalización.",
    },
    {
      q: "¿Cómo solicito una cotización de repuestos o servicio técnico?",
      a: "Solicite cotización por WhatsApp al +57 313 379 9992 indicando marca, modelo, referencia y servicio requerido.",
    },
  ];

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="py-20 lg:py-28 bg-carbon"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-yellow text-sm font-bold uppercase tracking-widest">
            FAQ
          </span>
          <h2
            id="faq-title"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl text-bone mt-4"
          >
            Preguntas Frecuentes sobre Maquinaria Amarilla Colombia
          </h2>
          <p className="text-bone/60 mt-4 max-w-3xl mx-auto leading-relaxed">
            Sobre servicio técnico, repuestos, importación y diagnóstico
            computarizado para maquinaria pesada.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
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
  );
}
