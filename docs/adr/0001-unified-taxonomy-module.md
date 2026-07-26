# ADR 0001 — Unified Taxonomy Module for zh/en Sites

- **Status:** Accepted
- **Date:** 2026-05-15
- **Issue:** [#30](https://github.com/cislunarspace/cislunarspace/issues/30)
- **Supersedes:** —
- **Superseded by:** —

## Context

The site currently expresses its taxonomy — the identity, locale paths, ordering, navigation labels, sidebar structure, glossary categories, news categories, and AI-chat index inputs of every knowledge-base section — across **at least seven separate files**, with overlapping but not identical shapes:

| File | What it owns | Locale handling |
|---|---|---|
| `web/.vuepress/navbar.ts` | Top-nav entries (zh) | zh only |
| `web/.vuepress/navbar-en.ts` | Top-nav entries (en) | en only |
| `web/.vuepress/sidebar-data.ts` | Section + entry tree for non-glossary sidebars | bilingual node with `label.{zh,en}` and optional `locales`, plus `childrenByLocale` escape hatch |
| `web/.vuepress/glossary-meta.ts` | Glossary category identity + order | bilingual `label.{zh,en}` + `order` |
| `web/.vuepress/category-meta.json` | Space-news category identity + colour | bilingual `label.{zh,en}` + `color` |
| `web/.vuepress/intakes/wayfinding-intake.ts` | Hard-coded "site map" sidebar tree | duplicated zh/en arrays |
| `web/.vuepress/intakes/chat-index-intake.ts` | AI-chat index inputs | derived from `glossary-meta.ts` + filesystem |

Adding or renaming a section today requires touching **three to five** of these files in lock-step, and the rules for "what happens when zh exists but en doesn't" differ between modules:

- `sidebar-data.ts` uses explicit `locales: ['zh']` gating.
- `chat-index-intake.ts` synthesises an English-locale "needs translation" placeholder.
- `navbar-en.ts` is a hand-maintained copy with no relationship to its zh sibling.
- `wayfinding-intake.ts` duplicates everything inline.

This drift is a known source of bugs (orphaned sidebar entries, broken `/en/` links, mismatched ordering between locales). It also blocks AFK agents from confidently adding new sections, because there is no single concept model that says "this is what a taxonomy node is."

This ADR fixes the **architectural shape** of a unified taxonomy module so follow-up issues can implement, migrate, and adapt without re-litigating the interface. It does **not** write the module — that is deferred to follow-up AFK issues.

## Decision

We will introduce a single **Taxonomy Module** at `web/.vuepress/taxonomy/` that owns one concept — the `TaxonomyNode` — and exposes typed views consumed by every site surface (navbar, sidebar, glossary, news, AI-chat, wayfinding). Every existing output listed above becomes an **adapter** that derives its shape from the taxonomy module rather than carrying its own truth.

### TaxonomyNode interface (shape only)

```ts
// web/.vuepress/taxonomy/types.ts (target shape — not yet implemented)

/** Stable, locale-independent identity for a taxonomy node. */
export type NodeId = string  // e.g. 'research-frontiers/directions/orbit-design'

/** Open enum — new kinds may be added without an ADR amendment. */
export type NodeKind =
  | 'section'           // top-level sidebar section (e.g. cislunar-orbits)
  | 'group'             // collapsible group inside a section
  | 'page'              // leaf page
  | 'index'             // section/group index page (slug === '')
  | 'glossary-category' // glossary bucket (fundamentals, dynamics, …)
  | 'news-category'     // space-news category (artemis, spacex, …)
  | 'navbar-link'       // top-nav entry (may be external)
  | 'external-link'     // off-site link (forum, gitee, github)

export interface LocalePath {
  /** Path under the zh root, e.g. '/cislunar-orbits/nrho/' */
  zh: string | null
  /** Path under the en root, e.g. '/en/cislunar-orbits/nrho/'.
   *  `null` means this node is intentionally zh-only (see "Missing translations"). */
  en: string | null
}

export interface TaxonomyNode {
  /** Stable identity. Never reused after rename — renames mean new id + redirect. */
  id: NodeId

  /** Open-enum classification. Adapters filter by kind. */
  kind: NodeKind

  /** Bilingual display label. Both locales required unless `locales` gates it out. */
  label: { zh: string; en: string }

  /** Resolved URL paths per locale. `null` = not present in that locale. */
  path: LocalePath

  /** Explicit locale gating. Undefined = present in both. */
  locales?: Array<'zh' | 'en'>

  /** Sibling sort order. Lower = earlier. Stable within parent. */
  order: number

  /** Parent node id, or null for roots. */
  parentId: NodeId | null

  /** Optional adapter-specific metadata (colour for news categories, collapsible
   *  for sidebar groups, external href for navbar links). Adapters narrow on `kind`. */
  meta?: Record<string, unknown>
}

export interface TaxonomyModule {
  /** All nodes, in deterministic order. */
  all(): readonly TaxonomyNode[]

  /** Get one node by id. Throws if absent (caller's bug). */
  get(id: NodeId): TaxonomyNode

  /** Children of a node, already sorted by `order` and filtered by locale. */
  children(parentId: NodeId | null, locale: 'zh' | 'en'): readonly TaxonomyNode[]

  /** Filter by kind, optionally within a parent. */
  byKind(kind: NodeKind, parentId?: NodeId): readonly TaxonomyNode[]
}
```

### Rules

#### Identity

- `id` is **stable** and locale-independent. It is derived from the canonical zh path's slug chain but is **not** the path — rename of the slug requires a new id and a redirect entry.
- Renaming the zh **label** does not change the id.
- Renaming the slug at any level changes the id of every descendant; this is a migration, not an in-place edit.

#### Locale paths

- `path.zh` is canonical. `path.en` is derived by prefixing `/en` and substituting any en-specific slugs (e.g. `blue-team-research`'s `childrenByLocale` cases).
- An adapter that needs a single string MUST select by locale, never concatenate `'/en' + zhPath`.
- A node may have `path.en === null` if and only if `locales === ['zh']` (or symmetrically for en-only).

#### Missing translations

We adopt **explicit locale gating** (matches the existing `sidebar-data.ts` convention):

- Each node carries optional `locales?: ('zh'|'en')[]`. Undefined means present in both.
- A node gated out of a locale is **invisible** in that locale's navbar, sidebar, and wayfinding adapters.
- The glossary adapter additionally produces a `TranslationGapIntake` listing zh-only glossary pages, and the AI-chat adapter surfaces them as "(needs translation)" placeholders. This behaviour is **adapter-local** and does not change the node's `locales` field.
- Rationale: explicit gating keeps maintainer intent visible (`locales: ['zh']` reads as "this is on purpose"), and prevents accidental publication of half-translated content. The current `sidebar-data.ts` already follows this rule, so adoption is a rename, not a behaviour change.

#### Ordering

- `order` is a number; lower comes first; ties broken by `id` lexicographically.
- Order is **sibling-scoped** — there is no global ordering.
- Adapters that need a different presentation order (e.g. news categories sorted alphabetically) sort their own view; they do not mutate `order`.

#### Path conventions

- zh root: `/`. en root: `/en/`.
- Section paths end with `/`. Page paths end with `/`. Index pages share the section/group path (`path.zh === parent.path.zh`).
- External links use the full URL in `meta.href` and leave `path.{zh,en}` as `null`.

### Adapters (existing outputs that become consumers, not sources)

| Current file | Becomes | Reads via |
|---|---|---|
| `navbar.ts` | `adapters/navbar-zh.ts` | `taxonomy.byKind('navbar-link')` + `taxonomy.children(navbarId, 'zh')` |
| `navbar-en.ts` | `adapters/navbar-en.ts` | same, locale `'en'` |
| `sidebar-data.ts` (export `sidebarSections`) | `adapters/sidebar-sections.ts` | `taxonomy.byKind('section')` + recursive `taxonomy.children` |
| `glossary-meta.ts` (export `glossaryCategories`) | `adapters/glossary-categories.ts` | `taxonomy.byKind('glossary-category')` |
| `category-meta.json` | `adapters/news-categories.ts` (TypeScript) | `taxonomy.byKind('news-category')` with `meta.color` |
| `intakes/wayfinding-intake.ts` | `adapters/wayfinding.ts` | `taxonomy.byKind('section')` filtered to top-level |
| `intakes/chat-index-intake.ts` | unchanged consumer | reads `glossary-categories` and `sidebar-sections` adapters (no longer imports `glossary-meta.ts` or `sidebar-data.ts` directly) |
| `intakes/translation-gap-intake.ts` | unchanged consumer | reads taxonomy + filesystem scan |
| `gen-sidebar.ts` | unchanged orchestrator | composes adapters |

Adapters are **pure functions** from `TaxonomyModule` (+ optional filesystem scan) to their existing output shape. The pipeline (`gen-sidebar.ts`) keeps the same entry points and output files; adapters change where the data comes from, not what gets produced.

### Source of truth

The taxonomy module's data lives in **one declarative file**, `web/.vuepress/taxonomy/data.ts` (or `.json`), structured as a flat array of `TaxonomyNode`. Editor-friendliness is preserved by:

- a `defineTaxonomy()` helper that accepts a nested literal and flattens at module load,
- a build-time validator (run from `gen-sidebar.ts`) that checks: unique ids, parents exist, no cycles, locale gating consistent with `path`, `order` is a number.

The flat representation is what adapters consume; the nested literal is what humans edit.

### Extensibility

`NodeKind` is an **open enum** (TypeScript string-literal union, but adapters tolerate unknown kinds by ignoring them). Adding a new kind — e.g. `'forum-thread'`, `'tool-page'` — does **not** require amending this ADR. It requires:

1. Adding the literal to `NodeKind`.
2. Writing or extending the adapter that consumes it.
3. No changes to existing adapters (they filter by the kinds they know).

Amending this ADR is required only for changes to: the `TaxonomyNode` interface shape, the locale-gating rule, the identity rule, or the path-convention rule.

## Consequences

### Positive

- Adding a new section becomes a **single-file change** to `taxonomy/data.ts`. The build pipeline updates navbar, sidebar, wayfinding, and AI-chat together.
- zh/en drift becomes a validation error, not a runtime 404.
- AFK agents have one concept (`TaxonomyNode`) and one file to edit, with a typed validator that catches mistakes at build time.
- Existing outputs (`sidebar.auto.json`, `space-news-articles-zh.json`, `space-news-articles-en.json`, navbar arrays) are unchanged in shape — downstream consumers (VuePress, theme components) are untouched.

### Negative

- One-time migration cost: re-expressing the seven existing files as taxonomy + adapters. Estimated 4–6 follow-up issues.
- The flat-with-helper representation adds a small layer of indirection over today's nested literals.
- `childrenByLocale` (used today only by `blue-team-research`) loses its escape-hatch nature — en-specific subtrees become normal nodes with `locales: ['en']`. This is a deliberate simplification. Where today's `childrenByLocale` encodes **different slugs per locale at the same tree position** (e.g. `blue-team-research/doctrine-strategy/us-doctrine-system` zh-only vs `…/us-strategy-doctrine` en-only), the migration produces **two sibling nodes** with disjoint `locales`, not one node with a locale switch — each gets its own stable `id`.

### Neutral

- Performance: taxonomy is built once at build time, cached for the build. No runtime cost.
- Test surface: the validator and each adapter are pure functions, trivially unit-testable. Existing `gen-sidebar.test.ts`, `glossary-meta.test.ts`, `page-metadata.test.ts` continue to work.

## Follow-up AFK issues (unblocked by this ADR)

Each can be picked up independently:

1. **`taxonomy/types.ts` + `data.ts` scaffold** — define the interface, seed with current `sidebar-data.ts` content, add the build-time validator. No adapters yet.
2. **Glossary categories adapter** — migrate `glossary-meta.ts` consumers to read from taxonomy. Delete `glossaryCategories` export.
3. **Sidebar sections adapter** — migrate `sidebar-data.ts` consumers. Delete `sidebarSections` export.
4. **Navbar adapter (zh + en)** — replace `navbar.ts` and `navbar-en.ts` with derived arrays.
5. **News categories adapter** — migrate `category-meta.json` into taxonomy (kind `'news-category'`, `meta.color`).
6. **Wayfinding adapter** — replace the hard-coded arrays in `wayfinding-intake.ts`.

Each follow-up issue is a TDD-shaped vertical slice (one adapter, one test file, one cut-over). None of them needs to re-decide the interface.

## Alternatives considered

- **Status quo with stricter conventions** — rejected. Conventions have not prevented drift; a structural fix is needed.
- **Auto-generate everything from the filesystem** — rejected. Ordering and labels need explicit human curation; the filesystem cannot express bilingual labels or sibling order.
- **Required-both-locales with a TranslationGap report** — rejected. Forces fake en labels for zh-only content (e.g. NUDT, NPU), which then leak into navbar/sidebar. Explicit gating keeps intent legible.
- **Closed `NodeKind` enum requiring ADR amendments per new kind** — rejected. Site surfaces evolve (forum, dialectic, tools) faster than ADR cadence; open enum with adapter-local knowledge is the lower-friction equilibrium.
