import type { Metadata } from "next";
import ContactoClient from "./ContactoClient";

export const metadata: Metadata = {
  title: "Contacto | Repuestos para Maquinaria Pesada - C.R. Project S.A.S.",
  description:
    "Comuníquese con C.R. Project S.A.S. en Mosquera. Cotice repuestos para maquinaria pesada, motores diésel y solicite servicio técnico con cobertura nacional.",
  keywords:
    "contacto, repuestos maquinaria pesada, servicio técnico, motores diésel, C.R. Project S.A.S, Mosquera, Colombia",
  openGraph: {
    title: "Contacto | C.R. Project S.A.S.",
    description:
      "Cotice repuestos para maquinaria pesada y solicite servicio técnico con cobertura nacional.",
    url: "https://www.crprojectsas.com/contacto",
    type: "website",
    images: [
      {
        url: "https://www.crprojectsas.com/cs-contacto.png",
        width: 1200,
        height: 630,
        alt: "Contacto C.R. Project S.A.S.",
      },
    ],
  },
  alternates: {
    canonical: "https://www.crprojectsas.com/contacto",
  },
};

export default function ContactoPage() {
  return <ContactoClient />;
}
