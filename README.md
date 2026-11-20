# zaywebiste

FORGIVN storefront hero — an interactive clothing rail built with Next.js, TypeScript, Tailwind CSS v4 and the shadcn project structure.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Where things live

- `components/ui/product-rail-gallery.tsx` — the clothing rail component
- `components/ui/demo.tsx` — the five pieces on the rail (names, prices, descriptions, photos)
- `public/garments/` — transparent front / back / side cut-outs (400 × 620, same scale per piece)
- `components/ui/menu-hover-effects.tsx` — the top menu (Home, About, Contact)
- `app/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx` — the pages
- `lib/site.ts` — the email / Instagram shown on the Contact page

## Editing the pieces

Open `components/ui/demo.tsx`. Each entry has `name`, `tag` (the hang-tag, e.g. a price), `description`, `details`,
and `image` / `backImage` / `sideImage`. To add a piece, drop three cut-outs into `public/garments/` and add an entry.

## Publishing (GitHub Pages)

Every push to `main` builds the site and deploys it with `.github/workflows/deploy-pages.yml`.
One-time setup: repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
