"use client";

import Image from "next/image";

const brands = [
  { name: "Caterpillar", short: "CAT" },
  { name: "CNH Industrial", short: "CNH" },
  { name: "John Deere", short: "DEERE" },
  { name: "New Holland", short: "N.HOLLAND" },
  { name: "Nexiq", short: "NEXIQ" },
  { name: "Garrett", short: "GARRETT" },
  { name: "BorgWarner", short: "BORGWARNER" },
  { name: "3M", short: "3M" },
];

export function TrustBar() {
  return (
    <section className="relative bg-brand-yellow py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 overflow-x-auto scrollbar-hide">
          <p className="text-xs text-carbon/60 uppercase tracking-widest whitespace-nowrap flex-shrink-0">
            Marcas que manejamos
          </p>
          <div className="flex items-center gap-8 sm:gap-12">
            {brands.map((brand) => (
              <span
                key={brand.short}
                className="text-carbon/70 font-heading text-sm sm:text-base whitespace-nowrap hover:text-carbon transition-colors"
              >
                {brand.short}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
