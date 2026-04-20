# ICIA - Institut Collectif de l'IA

## Organization
- **Entity**: Mentivis SAS (cabinet de conseil en transformation stratégique)
- **Location**: Campus Cyber.AI, Marseille
- **Positioning**: "Nous ne vendons pas de l'IA. Nous aidons à en faire un avantage pour tous."
- **3 Pillars**: Indépendance technologique | Conseil stratégique pur | Tiers de confiance

## 5 Target Segments
1. PME / ETI (diagnostic + transformation)
2. Pouvoirs publics & Collectivités (AMO IA, PRIAM)
3. Ecoles, CFA, Universités (ingénierie pédagogique)
4. Industries créatives (ateliers, labo expérimentation)
5. Grand public & Demandeurs d'emploi (CPF, France Travail)

## Key Dates
- AI Act in force: **August 2026** (regulatory urgency = purchase trigger)

## Tech Stack
- Next.js 14 (App Router)
- TypeScript, Tailwind CSS
- Three.js (`@react-three/fiber`, `@react-three/drei`) for 3D
- Notion API for content/images
- Static site deployed to Vercel + o2switch

## Commands
| Command | Purpose |
|---------|---------|
| `npm run dev` | Local dev server |
| `npm run build` | Production build (runs prebuild first) |
| `npm run build:export` | Static export to `out/` |
| `npm run start` | Production server (port 3002) |
| `npm run lint` | ESLint |

## Build Pipeline
1. `prebuild` → `scripts/download-images.js` fetches images from Notion
2. Requires: `NOTION_KEY`, `NOTION_DB`, `NOTION_PARTNERS_DB`
3. Skips gracefully if vars not set
4. Generates `public/partners.json`

## Deployment
- **Vercel**: Primary hosting (https://icia.vercel.app)
- **o2switch**: sc1bovu7233.universe.wf (FTP upload from `out/` folder)
- CI triggers on push to `main`

## Key Paths
| Path | Purpose |
|------|---------|
| `app/` | Next.js pages |
| `components/` | React components |
| `public/articles/`, `public/partners/` | Downloaded from Notion |
| `public/partners.json` | Generated at build |

## Custom Tailwind Colors
- `navy` (#00255D) - primary
- `cream` (#FAFAF7) - background
- `rouge` (#D92A1C) - accent
