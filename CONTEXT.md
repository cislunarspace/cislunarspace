# CONTEXT: Cislunar Space Beginner's Guide

A bilingual (zh/en) knowledge base about cislunar space. This file captures domain vocabulary that should be used consistently across issues, ADRs, tests, code, and PRs. If a concept you need isn't here, that's a signal: either reconsider the term or extend this file via `/grill-with-docs`.

## Glossary

### Taxonomy

The structured catalogue of every knowledge-base section, page, glossary category, news category, navbar entry, special surface, and wayfinding entry on the site, together with their identity, ordering, and bilingual paths. See [ADR-0001](docs/adr/0001-unified-taxonomy-module.md) for the unified taxonomy module.

### TaxonomyNode

One entry in the taxonomy. Carries a stable locale-independent `id`, a `kind` (open enum: section, group, page, index, glossary-category, navbar-link, external-link, …), bilingual `label`, locale-resolved `path`, sibling `order`, and `parentId`. Defined in `web/.vuepress/taxonomy/types.ts` (target shape).

### Identity (NodeId)

A `TaxonomyNode`'s stable, locale-independent string id (e.g. `research-frontiers/directions/orbit-design`). Derived from the canonical zh slug chain. Renames of a slug create a new id plus a redirect (ids are never silently reused). Renames of a **label** do not change the id.

### VuePress locale root/config

The framework-level locale routing and theme configuration. The site currently uses `/` for zh-CN and `/en/` for en-US. This is not a taxonomy identity, not a `LocalePath`, and not a user preference; it is the route-root convention VuePress uses to select locale-specific title, description, navbar, sidebar, and language-selector labels.

### LocalePath

The pair `{ zh, en }` of resolved URL paths for a `TaxonomyNode`. `null` on a locale means the node is intentionally absent there (see Locale gating), or that the node is an intentionally pathless metadata/group/category kind. `LocalePath` is routing data after locale roots, path conventions, and gating have already been applied; consumers select `path[locale]`, they do not construct it ad hoc and never concatenate `'/en' + zhPath`.

### Locale gating

The convention that a `TaxonomyNode` declares its locale presence via an optional `locales: ('zh'|'en')[]` field. Undefined = both locales. `['zh']` = zh-only (and conversely). Used for content that is deliberately not translated (e.g. the dialectic surface under `navbar/dialectic`).

### Runtime locale detection

The runtime decision of which locale branch should render for the current page. For current-page rendering, the route wins: pages under `/en/` render en UI/data, and other pages render zh UI/data. Runtime locale detection answers **where is the user now?**; it is separate from stored locale preference and from taxonomy locale presence.

### Locale preference (`cislunar-lang-chosen`)

A persisted browser-local preference/sentinel used to bias landing redirects and remember that the visitor has crossed locale roots. It stores short `zh`/`en` values. It is not the current locale itself and must not override the current route, unavailable `LocalePath`, locale gating, or a missing bilingual counterpart.

### Bilingual counterpart

The corresponding zh/en content item that shares a stable identity across locales. For taxonomy pages, the counterpart relation is anchored by the same `NodeId` plus the node's `LocalePath`. Counterpart existence is about locale availability; it does not guarantee identical text, translation completeness, or publication timing.

### Translation gap

An unintentional missing bilingual counterpart in a locale where the concept should exist. Today this is tracked for glossary pages that exist in zh but not en, surfaced by `TranslationGapIntake` and the AI route index's **(needs translation)** placeholders. Locale gating is intentional absence; a locale-gated page is not a translation gap. The taxonomy module does not conflate them.

### Locale-partitioned generated artifact

A generated build output whose records are grouped or filtered by locale, often shaped like `{ zh: ..., en: ... }`. Examples include the AI route index and the AI context corpus. Locale partitions are derived outputs from source content, taxonomy, intakes, and adapters; they are not the source of locale policy.

### Locale selection order

For rendering the current page, the current route/runtime locale wins. Stored locale preference may bias landing redirects or explicit locale switching only when a valid target exists. `LocalePath` and bilingual counterpart availability decide whether a target route/content item can exist. Locale gating and Translation gap define why an expected locale is absent: intentional absence vs unintentional missing counterpart.

### Adapter

A pure function that derives a site-surface-specific output shape from the taxonomy module. Each existing output (navbar, sidebar, glossary-categories, news-categories, wayfinding, ai-chat-index) becomes an adapter rather than a source of truth. See ADR-0001 for the inventory.

### Intake

The existing pipeline stage name (under `web/.vuepress/intakes/`) for build-time data collection. Intakes consume the filesystem scan and produce typed intermediates (e.g. `GlossaryScan`, `ChatIndexIntake`, `TranslationGapIntake`). In the unified-taxonomy world, intakes read from adapters rather than from `glossary-meta.ts` or `sidebar/data.ts` directly.

### NodeKind

The discriminator on a `TaxonomyNode`. An **open enum**: new kinds may be added without amending ADR-0001, provided the `TaxonomyNode` interface shape, locale-gating rule, identity rule, and path-convention rule are unchanged. Adapters tolerate unknown kinds by ignoring them.

### Section / group / page / index

The four structural kinds inside the sidebar tree.

- **Section**: top-level entry of a sidebar (e.g. `cislunar-orbits`, `research-frontiers`).
- **Group**: collapsible cluster inside a section (e.g. `nrho`, `dro`).
- **Page**: leaf content page.
- **Index**: the README at a section/group root; shares its parent's path (`slug === ''` in the current `sidebar/data.ts`).

### Sidebar source of truth

`web/.vuepress/taxonomy/data.ts` (target). Today this responsibility is split across `sidebar/data.ts`, `navbar.ts`, `navbar-en.ts`, `glossary-meta.ts`, `category-meta.json`, and inline arrays in `wayfinding-intake.ts`. Migration plan in ADR-0001.

### AI route index

The generated AI-chat route-planning artifact served as `/ai-chat-index.json`. Its canonical shape is grouped by locale and by `ChatIndexCategory`: `{ zh: ChatIndexCategory[], en: ChatIndexCategory[] }`. Each `ChatIndexCategory` contains a grouping key plus `IndexRow` entries; each `IndexRow` carries an AI retrieval path and title. The AI route index is for route selection and valid-link constraints only (it is not the full answer corpus and is not the sidebar-tree **Index** kind).

### AI context corpus

The generated AI-chat answer-context artifact served as `/ai-chat-context.json`. It is a per-locale corpus keyed by AI retrieval path: `{ zh: Record<path, { title, text }>, en: Record<path, { title, text }> }`. The Answer phase reads from the AI context corpus only after the Router has selected AI retrieval paths from the AI route index. Missing rows here are AI context gaps, not Translation gaps unless the missing content is specifically a zh-only glossary page.

### AI retrieval path

The runtime URL path selected by the Router and used to join an `IndexRow` in the AI route index to a `{ title, text }` record in the AI context corpus. It is a retrieval/join key, not a taxonomy identity: do not confuse it with `NodeId`, `LocalePath`, `relativePath`, article slug, or article filename.

### ChatIndexCategory

An AI-specific grouping key inside the grouped AI route index. It clusters `IndexRow` entries for routing/prompt structure, but it is not a `glossary-category`, not an editorial tag, and not a `TaxonomyNode` category kind.

### Two-phase retrieval

The AI Chat flow that first runs a Router phase against the AI route index, then runs an Answer phase using excerpts joined from the AI context corpus by AI retrieval path. Disabling two-phase retrieval means answer-only mode: the Answer phase still sees the route index as a valid-link list, but it does not load the AI context corpus.

### Layout

The VuePress page shell selected by page frontmatter or VuePress route configuration (for example `AiChatLayout`). A layout controls page chrome and rendering structure; it is not the page's domain identity, not a `TaxonomyNode.kind`, not a route identity, and not the feature or surface itself.

### LayoutTypes

The shell-hook classifier used by the custom default `Layout.vue` to decide which global shell classes and chrome rules apply. `LayoutTypes` is not the complete registry of VuePress layout components: some real layouts bypass the default shell entirely, and some special surfaces may use the default `Layout` plus a component in markdown.

### Special surface

A non-standard site experience that is not just a normal markdown content page in the knowledge-base tree. A special surface may have a layout, taxonomy node, navbar entry, generated artifacts, runtime state, or shell class hooks, but none of those is the surface's identity by itself. Examples today include AI Chat.

### Interactive surface

A special surface whose primary value comes from user interaction or runtime behaviour rather than reading static markdown content. AI Chat is the interactive surface today.

### VuePress sidebar config

The native VuePress theme sidebar route-prefix map consumed by the VuePress default theme for left navigation. It is an adapter output derived from taxonomy and build inputs; it is not the taxonomy source of truth.

### Section sidebar

The per-section `VueSidebarItem` tree for knowledge-base sections such as `what-is-cislunarspace`, `cislunar-orbits`, `research-frontiers`, and `resources-tools`. Section sidebars are derived from taxonomy `section`, `group`, `page`, and `index` nodes, then inserted into the VuePress sidebar config for matching route prefixes.

### Wayfinding disclosure

The global site-map disclosure prepended to normal section sidebars. It helps users jump across top-level areas of the site. Wayfinding is not a sidebar by itself, not a sidebar index, and not an AI route index.

### Glossary category

A `TaxonomyNode` of kind `glossary-category` (today: entries in `glossaryCategories` in `glossary-meta.ts`). Defines the buckets under `/glossary/` and `/en/glossary/` (fundamentals, dynamics, orbits, …). A category may nest **one level of subcategories**: a subcategory node parents at its category node (e.g. `glossary/orbits`), its `meta.slug` is the full path form (`orbits/halo`), and entries live in `glossary/<cat>/<sub>/<slug>.md`. Entries may also sit directly in the category root (unsorted).

### Content module

The module at `web/.vuepress/content/` (see ADR-0003; skeleton landed 2026-08-19: list/read/write/refreshIndex, with create/delete/categories to follow) that owns all content operations behind one domain interface. The content writers (admin GUI, agents/humans) all go through it. The content module is to content operations what the taxonomy module is to structure data; it is not a database, not a server process, and not part of the build pipeline. Its frontmatter round-trip uses the `yaml` package (`parseMarkdownDoc`/`renderMarkdown`), not `utils/frontmatter-parser.ts`, whose simplified parsing cannot round-trip nested frontmatter.

### Content family

One of the two content kinds the content module operates on: `glossary`, `kb-section`. Path conventions, frontmatter rules, and bilingual pairing are defined per family in the content router, never re-expressed by callers. A content family is not a `NodeKind` and not a layout.

### Content source / Derived artifact / Build output

The three asset layers of the repository (see ADR-0004):

- **Content source**: markdown, `taxonomy/`, `sidebar/data.ts`, figures (single zh-side copy), `ref.bib`, hand-maintained public assets. Tracked in git.
- **Derived artifact**: everything `generate.ts` produces (`*.auto.json`, articles/AI-chat/bibliography JSON). Written only to `.vuepress/public/`, never tracked in git. **Derived artifact** names the layer; the existing term generated artifact continues to name individual JSON files.
- **Build output**: `dist/`. Never tracked in git.

Rules: derived artifacts are rebuildable from content source at any time (no consumer may rely on their git presence); sync-figures is the only channel that places figures into build output; en-locale md figure references are URL conventions resolved at build time, not physical file requirements.

## Terminology to avoid

- **Sidebar config** as a synonym for taxonomy: taxonomy is the **concept**, sidebar configs are one **adapter output**.
- **Layout** as a catch-all for AI Chat or any non-article custom experience: use **Layout** only for the VuePress page shell, and use **special surface** or **interactive surface** for the user-facing experience.
- **Sidebar** without qualification: say **VuePress sidebar config**, **section sidebar**, or **wayfinding disclosure**.
- **Wayfinding** called an index or sidebar: wayfinding is a global site-map disclosure, not the sidebar-tree **Index** kind and not the AI route index.
- **Surface** without qualification when precision matters: say **special surface**, **interactive surface**, content page, or site-surface-specific adapter output.
- **i18n key** for `NodeId`: ids are not i18n keys; they are stable identities.
- **Locale root**, **VuePress root**, **LocalePath**, and **route prefix** used interchangeably: **VuePress locale root/config** is framework configuration; **LocalePath** is taxonomy-resolved routing data.
- `'/en' + zhPath` as a path construction rule: consumers select from `LocalePath`; they do not manually prefix the Chinese path.
- **Current language** without saying whether it means **runtime locale detection**, **locale preference**, or explicit user switching.
- `cislunar-lang-chosen` treated as the site locale: it is only a persisted preference/sentinel, not the current route locale.
- **Same page** for zh/en content unless stable taxonomy identity is the point: say **bilingual counterpart** for paired locale content, and **LocalePath entries** for their routes.
- **Bilingual** for generated artifacts without naming the partition model: say **locale-partitioned generated artifact** for shapes like `{ zh: ..., en: ... }`.
- **Category** without a qualifier: say **glossary-category**. (The `news-category` kind was removed with the Space News module, see ADR-0005.)
- **Image** or **image path** without specifying **hero/card image**, **figure set**, **source figure path**, **built dist asset path**, or **share image**.
- **Slug** when referring to the full filename: say **article slug** for the identifier after `YYYY-MM-DD-`, and **article filename** for `YYYY-MM-DD-slug.md`.
- **AI index** or bare **index** for `/ai-chat-index.json`: say **AI route index**. **Index** already means a README at a section/group root in the sidebar tree.
- **Context index**, **AI context index**, or **site index** for `/ai-chat-context.json`: say **AI context corpus**.
- **Path** without qualification when discussing AI retrieval: say **AI retrieval path** when you mean the Router-selected key used to join route rows to context records.
- **ChatIndexCategory** as a normal category: it is an AI-specific grouping key, not a **glossary-category**, editorial tag, or article attribute.
- AI generated artifacts described as **Adapters** or **Intakes**: adapters derive site-surface outputs from taxonomy; intakes collect build-time data. `/ai-chat-index.json` and `/ai-chat-context.json` are generated AI-chat artifacts.
- **Translation missing** used interchangeably with **locale gated**: see Translation gap vs Locale gating.

## See also

- [ADR-0001: Unified Taxonomy Module](docs/adr/0001-unified-taxonomy-module.md)
- [ADR-0003: Content Module](docs/adr/0003-content-module.md)
- [ADR-0004: Asset Layering](docs/adr/0004-asset-layering.md)
- [ADR-0005: Remove Space News Module](docs/adr/0005-remove-space-news-module.md)
- [docs/agents/domain.md](docs/agents/domain.md): how agents should consume this file
- [docs/agents/issue-tracker.md](docs/agents/issue-tracker.md)
- [docs/agents/triage-labels.md](docs/agents/triage-labels.md)
