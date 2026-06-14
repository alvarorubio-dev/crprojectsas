import Link from "next/link";
import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const serviceLinks = [
  { name: "Venta de Repuestos", href: "/repuestos" },
  { name: "Reparación de Maquinaria Pesada", href: "/servicio-tecnico" },
  { name: "Escáner y Diagnóstico", href: "/diagnostico" },
  { name: "Mantenimiento Eléctrico", href: "/mantenimiento-electrico" },
  { name: "Mantenimiento Preventivo y Correctivo", href: "/mantenimiento-flotas" },
  { name: "Alquiler de Maquinaria", href: "/alquiler-maquinaria" },
  { name: "Reparación de Motores", href: "/reparacion-motores" },
  { name: "Venta de Maquinaria", href: "/venta-maquinaria" },
];

export function Footer() {
  return (
    <footer className="bg-carbon border-t border-steel/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo-csprojects.svg"
                alt="CR Project S.A.S"
                className="w-10 h-10 object-contain"
              />
              <div>
                <span className="font-heading text-lg font-bold text-bone">CR Project</span>
                <span className="text-brand-yellow font-heading text-lg font-bold">&nbsp;S.A.S</span>
              </div>
            </div>
            <p className="text-bone/60 text-sm leading-relaxed mb-6">
              Comercializadora de partes para maquinaria amarilla, camiones y motores diésel. Servicio técnico especializado con cobertura nacional.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/crprojectsas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-steel/50 rounded-sm flex items-center justify-center text-bone/60 hover:text-brand-yellow hover:bg-steel transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1Dj61LMP2r/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-steel/50 rounded-sm flex items-center justify-center text-bone/60 hover:text-brand-yellow hover:bg-steel transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-bone mb-4 text-sm uppercase tracking-wider">Servicios</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-bone/60 hover:text-brand-yellow transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-bone mb-4 text-sm uppercase tracking-wider">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/nosotros" className="text-sm text-bone/60 hover:text-brand-yellow transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-bone/60 hover:text-brand-yellow transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-sm text-bone/60 hover:text-brand-yellow transition-colors">
                  Todos los servicios
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-bone mb-4 text-sm uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-yellow mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+573133799992" className="text-sm text-bone/80 hover:text-brand-yellow transition-colors">
                    +57 313 379 9992
                  </a>
                  <p className="text-xs text-bone/40">Cristian — WhatsApp</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-yellow mt-0.5 flex-shrink-0" />
                <p className="text-sm text-bone/60">
                  Carrocerías Capri, El Cerrito,<br />Mosquera, Cundinamarca, Colombia
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brand-yellow mt-0.5 flex-shrink-0" />
                <p className="text-sm text-bone/60">
                  Lunes a Sábado<br />7:00 AM — 6:00 PM
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-steel/30 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-bone/40">
            &copy; {new Date().getFullYear()} CR Project S.A.S. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-xs text-bone/40">
            <span>Operación</span>
            <span className="text-base">🇨🇴</span>
            <span className="text-base">🇺🇸</span>
            <span className="text-base">🇻🇪</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
