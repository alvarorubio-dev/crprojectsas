import "./globals.css";
/// <reference types="next/dist/client/image-omission-warnings" />
import type { Metadata } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const archivo = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    // 56 caracteres: Limpio, directo y con las palabras clave exactas.
    default: "Repuestos y Maquinaria Pesada en Colombia | CR Project",
    // Template corto: Deja espacio para que el nombre de la página no desborde los 70 caracteres.
    template: "%s | CR Project S.A.S",
  },
  // 153 caracteres: La opción ganadora que definimos, perfecta para Bing y Google.
  description:
    "Encuentra repuestos para maquinaria pesada, camiones y motores diésel. Importación desde EE.UU. y servicio técnico especializado con cobertura nacional.",
  creator: "CR Project S.A.S",
  keywords: [
    "repuestos maquinaria amarilla",
    "servicio técnico maquinaria pesada Colombia",
    "repuestos motores diésel",
    "venta de maquinaria usada Colombia",
    "importación de maquinaria usada",
    "reparación motores diésel",
    "turbos Garrett BorgWarner",
    "módulos REMAN programados",
    "maquinaria pesada Mosquera Cundinamarca",
  ],
  metadataBase: new URL("https://www.crprojectsas.com"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://www.crprojectsas.com",
    siteName: "CR Project S.A.S",
    title: "Repuestos y Servicio Técnico para Maquinaria Pesada — CR Project",
    description:
      "Encuentra repuestos para maquinaria pesada, camiones y motores diésel. Importación desde EE.UU. y servicio técnico especializado con cobertura nacional.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "CR Project S.A.S — Maquinaria Pesada y Repuestos originales en Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CR Project S.A.S — Repuestos y Maquinaria Pesada",
    description:
      "Partes genuinas, servicio técnico especializado e importación de equipos pesados usados y nuevos. Cobertura nacional.",
    images: ["/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.crprojectsas.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${archivo.variable}`}>
      <head>
        {/* Los datos estructurados ahora están en el head y cubren tanto reparación como venta de repuestos */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@id": "https://www.crprojectsas.com/#organization",
              "@type": ["AutoRepair", "AutoPartsStore"],
              name: "CR Project S.A.S",
              description:
                "Comercializadora de repuestos para maquinaria amarilla Colombia, camiones y motores diésel. Servicio técnico especializado.",
              url: "https://www.crprojectsas.com",
              telephone: "+573133799992",
              address: {
                "@type": "PostalAddress",
                streetAddress: "El Cerrito",
                addressLocality: "Mosquera",
                addressRegion: "Cundinamarca",
                addressCountry: "CO",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 4.7086,
                longitude: -74.2325,
              },
              areaServed: {
                "@type": "Country",
                name: "Colombia",
              },
              sameAs: [
                "https://www.instagram.com/crprojectsas",
                "https://www.facebook.com/share/1Dj61LMP2r/",
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "08:00",
                closes: "17:00",
              },
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
