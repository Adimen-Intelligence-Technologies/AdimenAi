import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import type { Components } from "react-markdown";

const components: Components = {
  h1: ({ children }) => (
    <h1 className="mt-10 mb-4 text-3xl font-semibold tracking-tight">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-10 mb-4 text-2xl font-semibold tracking-tight">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-3 text-xl font-semibold tracking-tight">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-6 mb-2 text-lg font-semibold tracking-tight">{children}</h4>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-[#6C47FF] pl-4 my-6 italic text-zinc-600">
      {children}
    </blockquote>
  ),
  p: ({ children }) => (
    <p className="mb-4 text-base text-zinc-700 leading-relaxed">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-6 mb-4 text-zinc-700 space-y-1">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 mb-4 text-zinc-700 space-y-1">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-[#6C47FF] underline underline-offset-2 hover:opacity-80 transition-opacity"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  img: ({ src, alt }) =>
    typeof src === "string" ? (
      <span className="relative my-8 block aspect-video overflow-hidden rounded-[28px]">
        <Image src={src} alt={alt ?? ""} fill className="object-cover" />
      </span>
    ) : null,
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="border-b border-zinc-300">{children}</thead>,
  th: ({ children }) => (
    <th className="px-3 py-2 text-left font-semibold text-zinc-900">{children}</th>
  ),
  td: ({ children }) => (
    <td className="border-b border-zinc-200 px-3 py-2 align-top text-zinc-700">{children}</td>
  ),
};

export function MarkdownPostBody({ content }: { content: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  );
}
