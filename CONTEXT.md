# CONTEXT — Cislunar Space Beginner's Guide

A bilingual (zh/en) knowledge base about cislunar space. This file captures domain vocabulary that should be used consistently across issues, ADRs, tests, code, and PRs. If a concept you need isn't here, that's a signal — either reconsider the term or extend this file via `/grill-with-docs`.

## Glossary

### Taxonomy

The structured catalogue of every knowledge-base section, page, glossary category, news category, and navbar entry on the site, together with their identity, ordering, and bilingual paths. See [ADR-0001](docs/adr/0001-unified-taxonomy-module.md) for the unified taxonomy module.

### TaxonomyNode

One entry in the taxonomy. Carries a stable locale-independent `id`, a `kind` (open enum: section, group, page, index, glossary-category, news-category, navbar-link, external-link, …), bilingual `label`, locale-resolved `path`, sibling `order`, and `parentId`. Defined in `web/.vuepress/taxonomy/types.ts` (target shape).

### Identity (NodeId)

A `TaxonomyNode`'s stable, locale-independent string id (e.g. `research-frontiers/directions/orbit-design`). Derived from the canonical zh slug chain. Renames of a slug create a new id plus a redirect — ids are never silently reused. Renames of a **label** do not change the id.

### LocalePath

The pair `{ zh, en }` of resolved URL paths for a `TaxonomyNode`. `null` on a locale means the node is intentionally absent there (see Locale gating). Adapters select by locale; they never concatenate `'/en' + zhPath`.

### Locale gating

The convention that a `TaxonomyNode` declares its locale presence via an optional `locales: ('zh'|'en')[]` field. Undefined = both locales. `['zh']` = zh-only (and conversely). Used for content that is deliberately not translated (e.g. domestic institution pages like NUDT, NPU, SEU under `research-frontiers/institutions`).

### Translation gap

A glossary page that exists in zh but not en. Tracked separately from locale gating — gaps are **unintentional** absences surfaced by `TranslationGapIntake` and the AI-chat adapter's "(needs translation)" placeholders. Locale gating is **intentional** absence. The taxonomy module does not conflate them.

### Adapter

A pure function that derives a site-surface-specific output shape from the taxonomy module. Each existing output (navbar, sidebar, glossary-categories, news-categories, wayfinding, ai-chat-index) becomes an adapter rather than a source of truth. See ADR-0001 for the inventory.

### Intake

The existing pipeline stage name (under `web/.vuepress/intakes/`) for build-time data collection. Intakes consume the filesystem scan and produce typed intermediates (e.g. `GlossaryScan`, `ChatIndexIntake`, `TranslationGapIntake`). In the unified-taxonomy world, intakes read from adapters rather than from `glossary-meta.ts` or `sidebar-data.ts` directly.

### NodeKind

The discriminator on a `TaxonomyNode`. An **open enum** — new kinds may be added without amending ADR-0001, provided the `TaxonomyNode` interface shape, locale-gating rule, identity rule, and path-convention rule are unchanged. Adapters tolerate unknown kinds by ignoring them.

### Section / group / page / index

The four structural kinds inside the sidebar tree.

- **Section** — top-level entry of a sidebar (e.g. `cislunar-orbits`, `research-frontiers`).
- **Group** — collapsible cluster inside a section (e.g. `nrho`, `dro`).
- **Page** — leaf content page.
- **Index** — the README at a section/group root; shares its parent's path (`slug === ''` in the current `sidebar-data.ts`).

### Sidebar source of truth

`web/.vuepress/taxonomy/data.ts` (target). Today this responsibility is split across `sidebar-data.ts`, `navbar.ts`, `navbar-en.ts`, `glossary-meta.ts`, `category-meta.json`, and inline arrays in `wayfinding-intake.ts`. Migration plan in ADR-0001.

### Space News article

A markdown file under `web/space-news/YYYY/MM/` (zh) or `web/en/space-news/YYYY/MM/` (en), named `YYYY-MM-DD-slug.md`, frontmatter `layout: SpaceNewsArticle`, with figures in `figures/YYYY-MM-DD-slug/`. Categories on articles refer to **news-category** taxonomy nodes (today: `category-meta.json` keys).

### Glossary category

A `TaxonomyNode` of kind `glossary-category` (today: entries in `glossaryCategories` in `glossary-meta.ts`). Defines the buckets under `/glossary/` and `/en/glossary/` (fundamentals, dynamics, orbits, …).

## Terminology to avoid

- "Sidebar config" as a synonym for taxonomy — taxonomy is the **concept**, sidebar configs are one **adapter output**.
- "i18n key" for `NodeId` — ids are not i18n keys; they are stable identities.
- "Category" without a qualifier — say **glossary-category** or **news-category**. They are different `NodeKind`s.
- "Translation missing" used interchangeably with "locale gated" — see Translation gap vs Locale gating.

## See also

- [ADR-0001 — Unified Taxonomy Module](docs/adr/0001-unified-taxonomy-module.md)
- [docs/agents/domain.md](docs/agents/domain.md) — how agents should consume this file
- [docs/agents/issue-tracker.md](docs/agents/issue-tracker.md)
- [docs/agents/triage-labels.md](docs/agents/triage-labels.md)
