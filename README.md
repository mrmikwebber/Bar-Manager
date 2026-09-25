# Bar Manager

A cocktail R&D workbench: own a bottle catalog, track your home bar, version drinks, record tasting notes, and get deterministic flavor-direction suggestions from bottles you already own.

## Stack
Next.js · TypeScript · Tailwind · Supabase/Postgres

## Setup
1. Copy `.env.example` to `.env.local` and add your Supabase values.
2. `npm install`
3. Apply `supabase/migrations/202609250001_initial_bar_manager.sql` to your project and run `supabase/seed.sql`.
4. `npm run dev`

The `bm_` prefix keeps this MVP isolated from tables already in your Supabase project.

## Architecture
Catalog data is canonical in Postgres. Ingredient archetypes and flavor tags power runtime recommendations. AI is reserved for asynchronous catalog enrichment; factual source metadata and inferred flavor metadata remain separate.
