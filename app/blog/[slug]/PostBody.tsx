import { PortableText } from "next-sanity"
import type { PortableTextComponents } from "next-sanity"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 mb-4 text-2xl font-semibold tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-3 text-xl font-semibold tracking-tight">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-6 mb-2 text-lg font-semibold tracking-tight">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#6C47FF] pl-4 my-6 italic text-zinc-600">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mb-4 text-base text-zinc-700 leading-relaxed">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-4 text-zinc-700 space-y-1">
        {children}
      </ul>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const href = value?.href
      return (
        <a
          href={href}
          className="text-[#6C47FF] underline underline-offset-2 hover:opacity-80 transition-opacity"
          target={href?.startsWith("http") ? "_blank" : undefined}
          rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      )
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      return (
        <div className="relative aspect-video my-8 overflow-hidden rounded-[28px]">
          <Image
            src={urlFor(value).url()}
            alt={value.alt ?? ""}
            fill
            className="object-cover"
          />
        </div>
      )
    },
  },
}

export function PostBody({ value }: { value: unknown }) {
  return <PortableText value={value} components={components} />
}
