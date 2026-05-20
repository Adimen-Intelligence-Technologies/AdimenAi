import { Wrapper } from "../components/Wrapper";
import { BlogCard } from "../components/ui/BlogCard";

const blogPosts = [
  {
    title: "Cómo construir un asistente de IA para finanzas en tu empresa",
    excerpt:
      "Descubre el proceso paso a paso para diseñar un asistente inteligente capaz de automatizar consultas financieras y mejorar la productividad de tu equipo.",
    tag: "Conversational AI",
    imageSrc: "/background-03.jpg",
    href: "/blog/fintech-ai-assistant",
  },
  {
    title: "Aumenta tu eficiencia con agentes de automatización específicos",
    excerpt:
      "Exploramos cómo los agentes de IA personalizados detectan tareas repetitivas y liberan a tu equipo para trabajar en lo que realmente importa.",
    tag: "Automatización",
    imageSrc: "/background-04.jpg",
    href: "/blog/automation-agents",
  },
  {
    title: "Integración de IA con ERP y CRM: casos de éxito",
    excerpt:
      "Conoce ejemplos reales de integración de IA con sistemas internos que mejoran la coordinación entre ventas, operaciones y atención al cliente.",
    tag: "Integración",
    imageSrc: "/background-05.jpg",
    href: "/blog/ia-erp-crm",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-zinc-50 text-zinc-900">
      <Wrapper className="px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6C47FF]">
            Blog
          </p>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl tracking-tight">
            Ideas y casos prácticos de IA para empresas.
          </h1>
          <p className="mt-4 text-base text-zinc-600 sm:text-lg tracking-tight">
            Descubre contenido pensado para líderes que quieren impulsar su negocio con agentes inteligentes y automatización.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3 items-stretch">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.href} index={index} {...post} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
