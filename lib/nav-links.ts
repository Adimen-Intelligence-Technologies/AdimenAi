import { toLocalePath } from "@/lib/locale-path";

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

/**
 * Lista única de secciones del sitio. La usan el header y el footer para que
 * ambos menús se mantengan sincronizados.
 *
 * `includeBlog` añade el blog al final. El header lo incluye; el footer lo
 * muestra en el bloque "Otras páginas".
 */
export function buildNavLinks(
  locale: string,
  t: (key: string) => string,
  includeBlog = false,
): NavLink[] {
  const links: NavLink[] = [
    {
      id: "aiAutomation",
      label: t("pillars.aiAutomation"),
      href: toLocalePath(locale, "/#servicios"),
    },
    {
      id: "digitalization",
      label: t("pillars.digitalization"),
      href: toLocalePath(locale, "/#servicios"),
    },
    {
      id: "apps",
      label: t("pillars.apps"),
      href: toLocalePath(locale, "/diseno-web"),
    },
  ];

  if (includeBlog) {
    links.push({
      id: "blog",
      label: t("blog"),
      href: toLocalePath(locale, "/blog"),
    });
  }

  return links;
}
