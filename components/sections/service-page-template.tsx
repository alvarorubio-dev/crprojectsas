import Link from "next/link";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  features: string[];
  problems: string[];
  whyUs: string[];
  brands?: string[];
  faqs: FAQ[];
  breadcrumbName: string;
  breadcrumbUrl: string;
  ctaText?: string;
}

export function ServicePageTemplate({
  title,
  subtitle,
  description,
  heroImage,
  features,
  problems,
  whyUs,
  brands,
  faqs,
  breadcrumbName,
  breadcrumbUrl,
  ctaText = "Solicitar Cotización",
}: ServicePageProps) {
  return (
    <div className="pt-20">
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 industrial-gradient" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-carbon/10 to-carbon/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-bone/40 mb-8">
              <Link
                href="/"
                className="hover:text-brand-yellow transition-colors"
              >
                Inicio
              </Link>
              <span>/</span>
              <Link
                href="/servicios"
                className="hover:text-brand-yellow transition-colors"
              >
                Servicios
              </Link>
              <span>/</span>
              <span className="text-bone/60">{breadcrumbName}</span>
            </nav>
            <span className="text-brand-yellow text-sm font-bold uppercase tracking-widest">
              {subtitle}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-bone mt-4 leading-tight">
              {title}
            </h1>
            <p className="text-bone/60 mt-6 text-lg leading-relaxed max-w-2xl">
              {description}
            </p>
            <a
              href="https://wa.me/573133799992?text=Hola%2C%20necesito%20cotizar%20un%20servicio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-amber text-carbon font-bold text-base px-8 py-4 rounded-sm transition-all mt-8 hover:shadow-lg hover:shadow-brand-yellow/20"
            >
              <Phone className="w-5 h-5" />
              {ctaText}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl text-gray-900">
                Qué Incluye
              </h2>
              <ul className="mt-6 space-y-4">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl text-gray-900">
                Problemas que Resolvemos
              </h2>
              <ul className="mt-6 space-y-4">
                {problems.map((problem, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-carbon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl text-bone text-center mb-12">
            ¿Por Qué CR Project?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((reason, i) => (
              <div
                key={i}
                className="p-6 bg-graphite/60 border border-steel/20 rounded-sm"
              >
                <span className="font-heading text-3xl text-brand-yellow/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-bone/70 mt-3">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {brands && brands.length > 0 && (
        <section className="py-10 bg-white border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-8">
              <span className="text-xs text-gray-500 uppercase tracking-widest">
                Marcas:
              </span>
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="text-gray-500 font-heading text-sm hover:text-gray-900 transition-colors"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 lg:py-20 bg-carbon">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl text-bone text-center mb-10">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-graphite/60 border border-steel/20 rounded-sm"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer text-bone font-medium hover:text-brand-yellow transition-colors">
                  {faq.question}
                  <span className="text-brand-yellow group-open:rotate-45 transition-transform text-xl">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-bone/60 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl text-carbon">
            ¿Listo para Cotizar?
          </h2>
          <p className="text-carbon/70 mt-3">
            Respuesta rápida. Disponibilidad inmediata. Cobertura nacional.
          </p>
          <a
            href="https://wa.me/573133799992?text=Hola%2C%20necesito%20cotizar%20un%20servicio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-carbon hover:bg-graphite text-bone font-bold px-8 py-4 rounded-sm transition-all mt-8"
          >
            <Phone className="w-5 h-5" />
            Cotizar por WhatsApp
          </a>
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
                name: "Servicios",
                item: "https://www.crprojectsas.com/servicios",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: breadcrumbName,
                item: `https://www.crprojectsas.com${breadcrumbUrl}`,
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
            "@type": "Service",
            name: title,
            description: description,
            provider: {
              "@type": "Organization",
              name: "CR Project S.A.S",
              url: "https://www.crprojectsas.com",
            },
            areaServed: { "@type": "Country", name: "Colombia" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />
    </div>
  );
}
