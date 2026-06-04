<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This is **Next.js 16.2.6** with breaking changes — APIs, conventions, and file structure may all differ from training data. **Read the relevant guide in `node_modules/next/dist/docs/` before writing any code.** Heed deprecation notices.

Critical Next.js 16 specifics confirmed in this repo:
- `proxy.ts` (root) replaces `middleware.ts`. It uses `next-intl/middleware`.
- `getRequestConfig` in `i18n.ts` uses `requestLocale` (NOT `locale`).
- Turbopack is the default bundler (`next dev`/`next build`).
<!-- END:nextjs-agent-rules -->

## Quick start

```bash
pnpm install            # or npm/yarn/bun — but pnpm is canonical (pnpm-workspace.yaml + pnpm-lock.yaml present)
pnpm dev                # http://localhost:3000  (default locale: es, no /es prefix)
pnpm build              # production build
pnpm start              # serve production build
pnpm lint               # eslint (no Next lint — uses eslint-config-next 16)
```

There is **no `test` script and no test framework installed** (`package.json` has zero dev test deps). Don't invent one — ask before adding.
There is **no `typecheck` script** either. Run `npx tsc --noEmit` (uses `tsconfig.json` which has `"strict": true`).

## Architecture at a glance

```
app/                       # Next.js App Router
  globals.css              # Tailwind v4 source of truth (NO tailwind.config.*)
  [locale]/                # Localized routes (es/en/eu). Root redirect lives in app/page.tsx
  components/              # Page/feature components
    ui/                    # Feature/UI components (Card, BlogCard, Hero, About*, …)
    blog/                  # Blog list + post
    Wrapper.tsx, ChromeLayout.tsx
  admin/[[...tool]]/       # Sanity Studio mounted at /admin (basePath in sanity.config.ts)
  api/draft/enable/        # Sanity draft mode API
components/                # Generic primitives (animated-beam, orbiting-circles, IntlProvider)
registry/magicui/          # Re-exports for shadcn registry (@magicui)
i18n.ts, i18n/routing.ts   # next-intl config; routing.locales = ['es','en','eu']
messages/{es,en,eu}.json   # 3 message files — keep in sync
sanity/                    # Sanity client, image, schema (post + blockContent)
lib/utils.ts               # cn() = twMerge + clsx
proxy.ts                   # next-intl middleware (NOT middleware.ts)
next.config.ts             # next-intl plugin wrapper; turbopack.root configured
postcss.config.mjs         # @tailwindcss/postcss only
```

**Two `ui` folders that look identical but are not:**
- `@/components/ui` — generic primitives (currently only `animated-beam.tsx`, `orbiting-circles.tsx`).
- `@/app/components/ui` — feature/page components (`Card`, `Hero`, `BlogCard`, `Button`, `Header`, etc.). This is where most UI work lives.

Path alias: `@/*` → project root (`tsconfig.json`).

## i18n (strict)

- Locales: `es` (default), `en`, `eu`. `localePrefix: 'as-needed'` → Spanish has no `/es` prefix.
- Server components: `getTranslations('namespace')` from `next-intl/server`.
- Client components: `useTranslations('namespace')` from `next-intl`.
- **`messages/{es,en,eu}.json` must be updated together.** New top-level namespaces: add to all three files or the build/runtime breaks in non-default locales.
- `localeDetection: false` — no browser-based locale redirect; routing is URL-only via `proxy.ts`.
- Use `toLocalePath(locale, path)` from `@/lib/locale-path` to build locale-aware internal links; never hardcode `/es/...` or `/en/...`.
- Locale param type: `AppLocale` from `@/i18n/routing`.

## Styling — Tailwind v4 (no config file)

- **No `tailwind.config.*` exists.** Configuration lives in `app/globals.css` under `@theme inline` and `:root`/`.dark` blocks. To change design tokens, edit CSS, not a JS config.
- Brand colors are **NOT in CSS variables** — they're inlined as hex in components: `#6C47FF` (primary purple), `#7252FF` (button/CTA), `#42FCFF` / `#fc42ff` (accents), `#DDECFF` (light bg), `#1C1135` (dark purple). If you add a brand color, add it to `@theme inline` *and* keep using the hex inline.
- Body font: `var(--font-lato)` (Lato) — Lato is loaded in `app/layout.tsx`. Don't change without checking existing components.
- Custom text scale: `--text-xs`..`--text-9xl` mobile-first in `:root`, overridden at `min-width: 640px`.
- Custom utilities in `globals.css`: `animate-hero-fade`, `animate-spin-slow/-slower/-reverse/-reverse-slow`, `animate-pulse-glow` (purple ring), `animate-orbit-dot*`.

## Component conventions

- "use client" on every component using hooks, IntersectionObserver, motion, or browser APIs. Section wrappers without state are server components.
- Named exports only: `export function Card(...)`. Props interface named `XxxProps` or inline.
- Entrance animation pattern (used everywhere — see `Card.tsx`, `AboutValues.tsx`):
  ```tsx
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const o = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setIsVisible(true); o.disconnect(); }
    }, { threshold: 0.2 });
    o.observe(el); return () => o.disconnect();
  }, []);
  // className={`... ${isVisible ? "animate-hero-fade" : "opacity-0"}`}
  // style={{ animationDelay: isVisible ? `${index * 0.08}s` : undefined }}
  ```
- Glassmorphism is the visual language: `bg-white/20 backdrop-blur-xl border border-white/20 rounded-[28px]`. See `BlogCard.tsx`, `TeamCard.tsx`.
- `lucide-react` is pinned to **`^1.16.0`** (very old). Icon API works (`import { Icon } from 'lucide-react'`) but newer icon names from current docs may not exist — verify before importing.
- `framer-motion` AND `motion` are both installed at `^12.39`. Prefer `motion/react` for new code; older code uses `framer-motion` directly.
- `shadcn` CLI is installed (`^4.7.0`) but **no shadcn primitives are used**. UI is hand-rolled in shadcn spirit. Adding a shadcn primitive to `components/ui/` will not collide with `app/components/ui/Card.tsx` (different paths), but think twice before adding — the house style is hand-rolled.
- The `.agents/skills/emil-design` skill is available — follow its motion/feedback philosophy (100–250ms, ease-out, scale 0.97 on press, never `scale(0)` from nothing, animate only `transform`/`opacity`).

## Sanity

- Studio at `/admin` (see `sanity.config.ts:basePath`). `basePath` must stay `/admin` or the studio route collides with localized content routes.
- `documentInternationalization` plugin — schema type `post` has `language` field. Keep new translatable schema types in the plugin's `schemaTypes` list.
- Draft mode: `/api/draft/enable` (presentationTool uses it for previews).
- Content lives in `sanity/schemaTypes/` — add new types there, not in `app/`.

## Deploy

- Vercel target. `CNAME` at repo root = `adimenai.com` (custom domain). Don't delete.
- `.env*` is gitignored. Sanity env vars go in `sanity/env.ts` (read-only API version etc.) and the actual values come from project env. Never commit real env values.

## Common gotchas

- **Glassmorphism + `backdrop-blur` requires content behind it to actually blur.** Don't wrap with it over a flat solid background expecting effects — needs the textured backgrounds (`/background.avif`, `/background-02.avif`, etc.) in the parent.
- **`useTranslations` key paths** use dot notation; arrays use `items.0`, nested objects use `members.asier.name`. See `messages/es.json` for exact shape.
- **Adding a new section to a page**: also add the corresponding translation namespace to all 3 `messages/*.json` files, otherwise the page errors in non-default locales.
- **Turbopack root** is locked to project root in `next.config.ts`. If you add a monorepo structure, update `turbopack.root`.
- **Lucide icons** — verify the icon exists in v1.16 before importing; many newer icons (`Wand2`, `Sparkle`, etc.) may need fallback.
- **Custom CSS animations** all respect `prefers-reduced-motion: reduce` via a single media query in `globals.css` — don't add JS-based motion gating.
- **Don't add a `middleware.ts`** — `proxy.ts` is the Next 16 equivalent and is already wired to next-intl.
- **Don't add `tailwind.config.{js,ts}`** — Tailwind v4 uses CSS-only config in `globals.css`.
