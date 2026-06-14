"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const services = [
  { name: "Venta de Repuestos", href: "/repuestos" },
  { name: "Reparación de Maquinaria Pesada", href: "/servicio-tecnico" },
  { name: "Escáner y Diagnóstico", href: "/diagnostico" },
  { name: "Mantenimiento Eléctrico", href: "/mantenimiento-electrico" },
  {
    name: "Mantenimiento Preventivo y Correctivo",
    href: "/mantenimiento-flotas",
  },
  { name: "Alquiler de Maquinaria y Equipos", href: "/alquiler-maquinaria" },
  { name: "Reparación de Motores", href: "/reparacion-motores" },
  { name: "Venta de Maquinaria", href: "/venta-maquinaria" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-carbon/95 backdrop-blur-md border-b border-brand-yellow/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo-csprojects.svg"
              alt="CR Project S.A.S"
              width={40}
              height={40}
              className="w-10 h-10 object-contain transition-transform group-hover:scale-105"
            />
            <div className="block">
              <span className="font-heading text-lg font-bold text-bone">
                CR Project
              </span>
              <span className="text-brand-yellow font-heading text-lg font-bold">
                &nbsp;S.A.S
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-bone/80 hover:text-brand-yellow transition-colors"
            >
              Inicio
            </Link>
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-bone/80 hover:text-brand-yellow transition-colors">
                Servicios
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-80">
                  <div className="bg-graphite/95 backdrop-blur-md border border-steel/50 rounded-lg shadow-xl p-2">
                    <Link
                      href="/servicios"
                      className="block px-4 py-2 text-sm font-medium text-brand-yellow hover:bg-steel/50 rounded-md transition-colors"
                    >
                      Ver todos los servicios
                    </Link>
                    <div className="border-t border-steel/50 my-1" />
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-bone/70 hover:text-bone hover:bg-steel/50 rounded-md transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/nosotros"
              className="text-sm font-medium text-bone/80 hover:text-brand-yellow transition-colors"
            >
              Nosotros
            </Link>
            <Link
              href="/contacto"
              className="text-sm font-medium text-bone/80 hover:text-brand-yellow transition-colors"
            >
              Contacto
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/573133799992?text=Hola%2C%20quiero%20cotizar%20un%20servicio"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-amber text-carbon font-bold text-sm px-5 py-2.5 rounded-sm transition-all hover:shadow-lg hover:shadow-brand-yellow/20"
            >
              <Phone className="w-4 h-4" />
              Cotizar Ahora
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-bone p-2"
              aria-label="Menú"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-carbon/98 backdrop-blur-md border-t border-steel/50">
          <div className="px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-medium text-bone hover:text-brand-yellow transition-colors"
            >
              Inicio
            </Link>
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 text-base font-medium text-bone hover:text-brand-yellow transition-colors w-full text-left"
              >
                Servicios
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isServicesOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  <Link
                    href="/servicios"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-medium text-brand-yellow"
                  >
                    Ver todos
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-sm text-bone/70 hover:text-bone transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/nosotros"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-medium text-bone hover:text-brand-yellow transition-colors"
            >
              Nosotros
            </Link>
            <Link
              href="/contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-medium text-bone hover:text-brand-yellow transition-colors"
            >
              Contacto
            </Link>
            <a
              href="https://wa.me/573133799992?text=Hola%2C%20quiero%20cotizar%20un%20servicio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-yellow text-carbon font-bold text-sm px-5 py-2.5 rounded-sm w-full justify-center mt-4"
            >
              <Phone className="w-4 h-4" />
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
