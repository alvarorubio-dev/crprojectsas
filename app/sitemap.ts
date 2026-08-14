import { MetadataRoute } from "next";

// Fecha real del último cambio de contenido del sitio. Actualizar manualmente
// cada vez que se publique contenido nuevo — no usar new Date() (falsea el
// lastmod en cada build sin que el contenido haya cambiado).
const LAST_CONTENT_UPDATE = new Date("2026-08-14");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.crprojectsas.com";

  // Agregamos la barra diagonal explícita a la home
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/servicios", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/repuestos", priority: 0.9, changeFrequency: "monthly" as const },
    {
      path: "/servicio-tecnico",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/diagnostico",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/venta-maquinaria",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/reparacion-motores",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/mantenimiento-flotas",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/alquiler-maquinaria",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/reparacion-sistemas-hidraulicos",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    { path: "/nosotros", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contacto", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    // Evita doble barra si el path ya la tiene
    url: route.path === "/" ? baseUrl : `${baseUrl}${route.path}`,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
