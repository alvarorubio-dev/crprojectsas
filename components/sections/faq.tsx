"use client";

export function FAQSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="py-20 lg:py-28 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-yellow text-sm font-bold uppercase tracking-widest">
            Preguntas Frecuentes
          </span>
          <h2
            id="faq-title"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl text-gray-900 mt-4"
          >
            Preguntas Frecuentes
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
            Respuestas claras sobre servicio técnico, repuestos, importación y
            diagnóstico computarizado para maquinaria pesada.
          </p>
        </div>

        <div className="space-y-6">
          <article className="bg-white border border-gray-200 rounded-sm p-6">
            <h3 className="font-heading text-xl text-gray-900">
              ¿Qué marcas de maquinaria pesada atiende CR Project?
            </h3>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Atendemos CAT, Komatsu, CNH, John Deere, New Holland, Cummins,
              Detroit Diesel, Garrett, BorgWarner, Bosch, Delphi, Denso, NEXIQ y
              3M.
            </p>
          </article>

          <article className="bg-white border border-gray-200 rounded-sm p-6">
            <h3 className="font-heading text-xl text-gray-900">
              ¿Hacen servicio técnico a nivel nacional en Colombia?
            </h3>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Sí. Ofrecemos servicio técnico de maquinaria pesada con cobertura
              nacional, especialmente en Mosquera, Funza, Madrid, Facatativá,
              Bogotá y la Sabana de Cundinamarca.
            </p>
          </article>

          <article className="bg-white border border-gray-200 rounded-sm p-6">
            <h3 className="font-heading text-xl text-gray-900">
              ¿Venden repuestos genuinos para Caterpillar (CAT) y Komatsu?
            </h3>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Sí. Distribuimos repuestos genuinos y aftermarket para CAT,
              Komatsu, John Deere, Cummins, New Holland y CNH.
            </p>
          </article>

          <article className="bg-white border border-gray-200 rounded-sm p-6">
            <h3 className="font-heading text-xl text-gray-900">
              ¿Importan maquinaria usada desde Estados Unidos?
            </h3>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Sí. Operamos Colombia – Miami para importar maquinaria usada y
              repuestos, incluyendo gestión de subastas y nacionalización.
            </p>
          </article>

          <article className="bg-white border border-gray-200 rounded-sm p-6">
            <h3 className="font-heading text-xl text-gray-900">
              ¿Cómo solicito una cotización de repuestos o servicio técnico?
            </h3>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Solicite cotización por WhatsApp al +57 313 379 9992 indicando
              marca, modelo, referencia y servicio requerido.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
