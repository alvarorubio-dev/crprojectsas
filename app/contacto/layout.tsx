import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto — Cotice Repuestos y Servicio Técnico",
  description:
    "Contáctenos por WhatsApp o formulario. Cotice repuestos para maquinaria amarilla, solicite servicio técnico o consulte por maquinaria usada. Respuesta rápida. +57 313 379 9992.",
  alternates: { canonical: "https://www.crprojectsas.com/contacto" },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
