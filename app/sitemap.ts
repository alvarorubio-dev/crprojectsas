import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.crprojectsas.com";

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/servicios", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/repuestos", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/servicio-tecnico", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/diagnostico", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/mantenimiento-electrico", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/mantenimiento-flotas", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/alquiler-maquinaria", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/reparacion-motores", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/venta-maquinaria", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/reparacion-sistemas-hidraulicos", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/nosotros", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contacto", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
