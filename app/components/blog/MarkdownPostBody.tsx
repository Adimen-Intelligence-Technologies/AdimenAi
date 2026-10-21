import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import type { Components } from "react-markdown";

const components: Components = {
  h1: ({ children }) => (
    <h1 className="mt-14 mb-5 text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950 text-balance">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-14 mb-5 scroll-mt-8 text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950 text-balance">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-10 mb-4 text-xl sm:text-2xl font-semibold tracking-tight text-zinc-950">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-8 mb-3 text-lg sm:text-xl font-semibold tracking-tight text-zinc-950">{children}</h4>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-10 rounded-r-[20px] border-l-4 border-[#6C47FF] bg-[#6C47FF]/5 py-4 pl-6 pr-4 text-xl sm:text-2xl italic leading-relaxed text-zinc-700 [&_p]:mb-0 [&_p]:text-inherit">
      {children}
    </blockquote>
  ),
  p: ({ children }) => (
    <p className="mb-6 text-lg sm:text-xl leading-[1.75] text-zinc-700">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mb-6 list-disc space-y-2 pl-6 text-lg sm:text-xl text-zinc-700 marker:text-[#6C47FF]">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-6 list-decimal space-y-2 pl-6 text-lg sm:text-xl text-zinc-700 marker:font-semibold marker:text-[#6C47FF]">{children}</ol>
  ),
  hr: () => <hr className="my-12 border-zinc-200" />,
  code: ({ children }) => (
    <code className="rounded-md bg-zinc-100 px-1.5 py-0.5 text-[0.9em] text-zinc-800">{children}</code>
  ),
  pre: ({ children }) => (
    <pre className="my-8 overflow-x-auto rounded-[20px] bg-[#1C1135] p-5 text-sm leading-relaxed text-zinc-100 [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-inherit">
      {children}
    </pre>
  ),
  li: ({ children }) => <li className="pl-1 leading-[1.75] [&>p]:mb-2">{children}</li>,
  strong: ({ children }) => <strong className="font-semibold text-zinc-950">{children}</strong>,
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
      <span className="relative my-10 block aspect-video overflow-hidden rounded-[28px]">
        <Image src={src} alt={alt ?? ""} fill className="object-cover" />
      </span>
    ) : null,
  table: ({ children }) => (
    <div className="my-8 overflow-x-auto rounded-[20px] border border-zinc-200 bg-white">
      <table className="w-full border-collapse text-base">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="border-b border-zinc-200 bg-zinc-50">{children}</thead>,
  th: ({ children }) => (
    <th className="px-4 py-3 text-left font-semibold text-zinc-900">{children}</th>
  ),
  td: ({ children }) => (
    <td className="border-b border-zinc-100 px-4 py-3 align-top text-zinc-700">{children}</td>
  ),
};

export function MarkdownPostBody({ content }: { content: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  );
}
