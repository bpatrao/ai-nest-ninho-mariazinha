# O Ninho da Mariazinha

Website for **O Ninho da Mariazinha**, a Portuguese solidarity association based
in Coimbra that has spent over 20 years providing food, social and community
support to homeless people, struggling families and the elderly.

This is a *Vibe for Good* project — a website built pro bono for the NGO.

## Tech stack

- **[TanStack Start](https://tanstack.com/start)** — full-stack React framework with file-based routing and SSR
- **[React 19](https://react.dev/)** + **TypeScript**
- **[Vite](https://vite.dev/)** — build tooling (via `@lovable.dev/vite-tanstack-config`)
- **[Tailwind CSS v4](https://tailwindcss.com/)** — styling
- **[shadcn/ui](https://ui.shadcn.com/)** + **[Radix UI](https://www.radix-ui.com/)** — component library (see `src/components/ui/`)
- **[Nitro](https://nitro.build/)** — server build (Cloudflare as the default deploy target)
- **[Bun](https://bun.sh/)** — package manager and runtime

## Project structure

```
src/
├── routes/          # File-based routes — each .tsx is a page (see src/routes/README.md)
│   ├── __root.tsx       # App shell / root layout (wraps every page)
│   ├── index.tsx        # Home (/)
│   ├── quem-somos.tsx       # About us
│   ├── missao.tsx           # Mission, vision & values
│   ├── como-contribuir.tsx  # How to contribute
│   ├── voluntariado.tsx     # Volunteering
│   ├── precisa-de-ajuda.tsx # Need help?
│   ├── noticias.tsx         # News & stories
│   └── contactos.tsx        # Contacts
├── components/      # Shared components (SiteHeader, SiteFooter, Reveal, ui/)
├── hooks/           # React hooks
├── lib/             # Utilities, server config, error reporting
├── assets/          # Images
├── router.tsx       # Router setup
├── server.ts        # SSR server entry (error wrapper)
└── routeTree.gen.ts # Auto-generated route tree — do not edit by hand
```

> Routing follows TanStack Start conventions. See `src/routes/README.md` for the
> full file → URL mapping. `routeTree.gen.ts` is generated automatically.

## Prerequisites

- **[Bun](https://bun.sh/)** (the project ships a `bun.lock` and `bunfig.toml`)

  ```bash
  curl -fsSL https://bun.sh/install | bash
  ```

## Getting started

Install dependencies:

```bash
bun install
```

Start the development server:

```bash
bun run dev
```

The app will be available at the URL printed in the terminal (typically
http://localhost:5173).

## Building

Create a production build:

```bash
bun run build
```

Build in development mode:

```bash
bun run build:dev
```

Preview the production build locally:

```bash
bun run preview
```

## Available scripts

| Script | Description |
| --- | --- |
| `bun run dev` | Start the Vite dev server |
| `bun run build` | Production build |
| `bun run build:dev` | Build using development mode |
| `bun run preview` | Preview the production build locally |
| `bun run lint` | Run ESLint |
| `bun run format` | Format the codebase with Prettier |

## Notes

- `bunfig.toml` enforces a 24h supply-chain guard (`minimumReleaseAge`) that
  skips package versions published less than a day ago. A short allow-list
  bypasses this for trusted internal packages — confirm with the team before
  adding to it.
- Vite config lives in `vite.config.ts`. Most plugins (TanStack Start, React,
  Tailwind, Nitro, path aliases, etc.) are bundled by
  `@lovable.dev/vite-tanstack-config` — do **not** add them manually or the
  build will break with duplicate plugins.
