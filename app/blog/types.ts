export interface Post {
  _id: string
  title: string
  excerpt: string
  slug: string
  mainImage?: string
  tags?: string[]
  publishedAt?: string
  language?: string
}

export interface PostPayload extends Post {
  body?: unknown
}
