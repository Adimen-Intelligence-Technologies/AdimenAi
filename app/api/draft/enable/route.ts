import { type NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  if (!projectId) {
    return new Response(JSON.stringify({ error: "Sanity not configured" }), {
      status: 503,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { defineEnableDraftMode } = await import("next-sanity/draft-mode");
  const { createClient } = await import("next-sanity");
  const { dataset, apiVersion } = await import("@/sanity/env");

  const { GET: handler } = defineEnableDraftMode({
    client: createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token: process.env.SANITY_API_READ_TOKEN,
    }),
  });

  return handler(request);
}
