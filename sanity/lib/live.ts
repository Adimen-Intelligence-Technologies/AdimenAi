import { defineLive } from "next-sanity/live"
import { client } from "./client"

const token = process.env.SANITY_API_READ_TOKEN

// When Sanity is not configured, export no-op stubs so the build succeeds
let sanityFetch: (options: { query: string; params?: Record<string, unknown> }) => Promise<{ data: unknown }>
let SanityLive: (props?: Record<string, unknown>) => null

if (client && token) {
  const live = defineLive({ client, serverToken: token, browserToken: token })
  sanityFetch = live.sanityFetch as typeof sanityFetch
  SanityLive = live.SanityLive as unknown as () => null
} else {
  sanityFetch = async () => ({ data: null })
  SanityLive = (_props?: Record<string, unknown>) => null
}

export { sanityFetch, SanityLive }
