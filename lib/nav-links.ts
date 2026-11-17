import { toLocalePath } from "@/lib/locale-path";

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

/**
 * Lista única de páginas del sitio. La usan el header y el footer para que
 * ambos menús se mantengan sincronizados.
 */
export function buildNavLinks(
  locale: string,
  t: (key: string) => string,
): NavLink[] {
  return [
    { id: "home", label: t("pages.home"), href: toLocalePath(locale, "/") },
    {
      id: "services",
      label: t("pages.services"),
      href: toLocalePath(locale, "/#servicios"),
    },
    {
      id: "webDesign",
      label: t("pages.webDesign"),
      href: toLocalePath(locale, "/diseno-web"),
    },
    {
      id: "commerce",
      label: t("pages.commerce"),
      href: toLocalePath(locale, "/#comercios"),
    },
    {
      id: "useCases",
      label: t("pages.useCases"),
      href: toLocalePath(locale, "/#casos-de-uso"),
    },
  ];
}
