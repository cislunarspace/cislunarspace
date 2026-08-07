# CONTEXT — Cislunar Space Beginner's Guide

A bilingual (zh/en) knowledge base about cislunar space. This file captures domain vocabulary that should be used consistently across issues, ADRs, tests, code, and PRs. If a concept you need isn't here, that's a signal — either reconsider the term or extend this file via `/grill-with-docs`.

## Glossary

### Taxonomy

The structured catalogue of every knowledge-base section, page, glossary category, news category, navbar entry, special surface, and wayfinding entry on the site, together with their identity, ordering, and bilingual paths. See [ADR-0001](docs/adr/0001-unified-taxonomy-module.md) for the unified taxonomy module.

### TaxonomyNode

One entry in the taxonomy. Carries a stable locale-independent `id`, a `kind` (open enum: section, group, page, index, glossary-category, news-category, navbar-link, external-link, …), bilingual `label`, locale-resolved `path`, sibling `order`, and `parentId`. Defined in `web/.vuepress/taxonomy/types.ts` (target shape).

### Identity (NodeId)

A `TaxonomyNode`'s stable, locale-independent string id (e.g. `research-frontiers/directions/orbit-design`). Derived from the canonical zh slug chain. Renames of a slug create a new id plus a redirect — ids are never silently reused. Renames of a **label** do not change the id.

### VuePress locale root/config

The framework-level locale routing and theme configuration. The site currently uses `/` for zh-CN and `/en/` for en-US. This is not a taxonomy identity, not a `LocalePath`, and not a user preference; it is the route-root convention VuePress uses to select locale-specific title, description, navbar, sidebar, and language-selector labels.

### LocalePath

The pair `{ zh, en }` of resolved URL paths for a `TaxonomyNode`. `null` on a locale means the node is intentionally absent there (see Locale gating), or that the node is an intentionally pathless metadata/group/category kind. `LocalePath` is routing data after locale roots, path conventions, and gating have already been applied; consumers select `path[locale]`, they do not construct it ad hoc and never concatenate `'/en' + zhPath`.

### Locale gating

The convention that a `TaxonomyNode` declares its locale presence via an optional `locales: ('zh'|'en')[]` field. Undefined = both locales. `['zh']` = zh-only (and conversely). Used for content that is deliberately not translated (e.g. the dialectic surface under `navbar/dialectic`).

### Runtime locale detection

The runtime decision of which locale branch should render for the current page. For current-page rendering, the route wins: pages under `/en/` render en UI/data, and other pages render zh UI/data. Runtime locale detection answers "where is the user now?"; it is separate from stored locale preference and from taxonomy locale presence.

### Locale preference (`cislunar-lang-chosen`)

A persisted browser-local preference/sentinel used to bias landing redirects and remember that the visitor has crossed locale roots. It stores short `zh`/`en` values. It is not the current locale itself and must not override the current route, unavailable `LocalePath`, locale gating, or a missing bilingual counterpart.

### Bilingual counterpart

The corresponding zh/en content item that shares a stable identity across locales. For taxonomy pages, the counterpart relation is anchored by the same `NodeId` plus the node's `LocalePath`. For Space News articles, counterparts share the same date and article slug. Counterpart existence is about locale availability; it does not guarantee identical text, translation completeness, or publication timing.

### Translation gap

An unintentional missing bilingual counterpart in a locale where the concept should exist. Today this is tracked for glossary pages that exist in zh but not en, surfaced by `TranslationGapIntake` and the AI route index's "(needs translation)" placeholders. Locale gating is intentional absence; a locale-gated page is not a translation gap. The taxonomy module does not conflate them.

### Locale-partitioned generated artifact

A generated build output whose records are grouped or filtered by locale, often shaped like `{ zh: ..., en: ... }`. Examples include the AI route index, AI context corpus, Space News article metadata, and Space News sidebar data. Locale partitions are derived outputs from source content, taxonomy, intakes, and adapters; they are not the source of locale policy.

### Locale selection order

For rendering the current page, the current route/runtime locale wins. Stored locale preference may bias landing redirects or explicit locale switching only when a valid target exists. `LocalePath` and bilingual counterpart availability decide whether a target route/content item can exist. Locale gating and Translation gap define why an expected locale is absent: intentional absence vs unintentional missing counterpart.

### Adapter

A pure function that derives a site-surface-specific output shape from the taxonomy module. Each existing output (navbar, sidebar, glossary-categories, news-categories, wayfinding, ai-chat-index) becomes an adapter rather than a source of truth. See ADR-0001 for the inventory.

### Intake

The existing pipeline stage name (under `web/.vuepress/intakes/`) for build-time data collection. Intakes consume the filesystem scan and produce typed intermediates (e.g. `GlossaryScan`, `ChatIndexIntake`, `TranslationGapIntake`). In the unified-taxonomy world, intakes read from adapters rather than from `glossary-meta.ts` or `sidebar/data.ts` directly.

### NodeKind

The discriminator on a `TaxonomyNode`. An **open enum** — new kinds may be added without amending ADR-0001, provided the `TaxonomyNode` interface shape, locale-gating rule, identity rule, and path-convention rule are unchanged. Adapters tolerate unknown kinds by ignoring them.

### Section / group / page / index

The four structural kinds inside the sidebar tree.

- **Section** — top-level entry of a sidebar (e.g. `cislunar-orbits`, `research-frontiers`).
- **Group** — collapsible cluster inside a section (e.g. `nrho`, `dro`).
- **Page** — leaf content page.
- **Index** — the README at a section/group root; shares its parent's path (`slug === ''` in the current `sidebar/data.ts`).

### Sidebar source of truth

`web/.vuepress/taxonomy/data.ts` (target). Today this responsibility is split across `sidebar/data.ts`, `navbar.ts`, `navbar-en.ts`, `glossary-meta.ts`, `category-meta.json`, and inline arrays in `wayfinding-intake.ts`. Migration plan in ADR-0001.

### Space News article

A source markdown file under `web/space-news/YYYY/MM/` (zh) or `web/en/space-news/YYYY/MM/` (en), named `YYYY-MM-DD-slug.md` and published with `layout: SpaceNewsArticle`. A Space News article is the content source from which build/runtime views derive `Article`, `SidebarLatestItem`, `SpaceNewsArticleView`, AI index rows, and AI context blobs; those derived shapes are not the article itself. The zh and en bilingual counterparts share the same date and article slug (no `-en` suffix).

`category` may hold multiple news-category keys. UI surfaces choose the first key as `primaryCategory` for badges, labels, and card colour, while category sections and filters may still consult all news-category keys. `ChatIndexCategory.category` is a separate concept: it is the top-level grouping key of the AI route index, not a per-article attribute.

`path` is the runtime join key between generated article data, routes, sidebars, and AI context. `relativePath` is build-time only. The `permalink` frontmatter, when present, sets the generated article path; when absent, the path is derived from the article's locale root and relative file path.

`draft: true` excludes the source file from generated news lists and AI context during scan/generation time. The markdown file remains on disk.

Frontmatter `image` is the article hero/card image. It is distinct from the colocated figure set in `figures/YYYY-MM-DD-slug/`, which contains inline body images copied to `dist/` by `sync-figures.js`, and from `wechatShare.image`, which may override share metadata only.

### AI route index

The generated AI-chat route-planning artifact served as `/ai-chat-index.json`. Its canonical shape is grouped by locale and by `ChatIndexCategory`: `{ zh: ChatIndexCategory[], en: ChatIndexCategory[] }`. Each `ChatIndexCategory` contains a grouping key plus `IndexRow` entries; each `IndexRow` carries an AI retrieval path and title. The AI route index is for route selection and valid-link constraints only — it is not the full answer corpus and is not the sidebar-tree **Index** kind.

### AI context corpus

The generated AI-chat answer-context artifact served as `/ai-chat-context.json`. It is a per-locale corpus keyed by AI retrieval path: `{ zh: Record<path, { title, text }>, en: Record<path, { title, text }> }`. The Answer phase reads from the AI context corpus only after the Router has selected AI retrieval paths from the AI route index. Missing rows here are AI context gaps, not Translation gaps unless the missing content is specifically a zh-only glossary page.

### AI retrieval path

The runtime URL path selected by the Router and used to join an `IndexRow` in the AI route index to a `{ title, text }` record in the AI context corpus. It is a retrieval/join key, not a taxonomy identity: do not confuse it with `NodeId`, `LocalePath`, `relativePath`, article slug, or article filename.

### ChatIndexCategory

An AI-specific grouping key inside the grouped AI route index. It clusters `IndexRow` entries for routing/prompt structure, but it is not a `news-category`, not a `glossary-category`, not a Space News article `category`, and not a `TaxonomyNode` category kind.

### Two-phase retrieval

The AI Chat flow that first runs a Router phase against the AI route index, then runs an Answer phase using excerpts joined from the AI context corpus by AI retrieval path. Disabling two-phase retrieval means answer-only mode: the Answer phase still sees the route index as a valid-link list, but it does not load the AI context corpus.

### Layout

The VuePress page shell selected by page frontmatter or VuePress route configuration (for example `SpaceNewsArticle`, `AiChatLayout`, `DialecticLayout`, or `OrbitSimLab`). A layout controls page chrome and rendering structure; it is not the page's domain identity, not a `TaxonomyNode.kind`, not a route identity, and not the feature or surface itself.

### LayoutTypes

The shell-hook classifier used by the custom default `Layout.vue` to decide which global shell classes and chrome rules apply. `LayoutTypes` is not the complete registry of VuePress layout components: some real layouts bypass the default shell entirely, and some special surfaces may use the default `Layout` plus a component in markdown.

### Special surface

A non-standard site experience that is not just a normal markdown content page in the knowledge-base tree. A special surface may have a layout, taxonomy node, navbar entry, generated artifacts, runtime state, or shell class hooks, but none of those is the surface's identity by itself. Examples include AI Chat, OrbitSimLab, Forum, Dialectic, SpaceNewsHome, and SpaceNewsArchive.

### Interactive surface

A special surface whose primary value comes from user interaction or runtime behaviour rather than reading static markdown content. AI Chat, OrbitSimLab, Forum, and Dialectic are interactive surfaces. SpaceNewsHome and SpaceNewsArchive are special surfaces but not necessarily interactive surfaces.

### VuePress sidebar config

The native VuePress theme sidebar route-prefix map consumed by the VuePress default theme for left navigation. It is an adapter output derived from taxonomy and build inputs; it is not the taxonomy source of truth and not the Space News custom rail data.

### Section sidebar

The per-section `VueSidebarItem` tree for knowledge-base sections such as `what-is-cislunarspace`, `cislunar-orbits`, `research-frontiers`, and `resources-tools`. Section sidebars are derived from taxonomy `section`, `group`, `page`, and `index` nodes, then inserted into the VuePress sidebar config for matching route prefixes.

### Wayfinding disclosure

The global site-map disclosure prepended to normal section sidebars. It helps users jump across top-level areas of the site. Wayfinding is not a sidebar by itself, not a sidebar index, and not an AI route index.

### Space News sidebar

The custom Space News navigation rail rendered by `SpaceNewsSidebar`. It is derived from Space News article metadata and `space-news-sidebar-data.json`, showing latest articles, topic tags, archive months, and stats. It is not the native VuePress sidebar config, not `sidebar.auto.json`, and not the taxonomy sidebar tree.

### Glossary category

A `TaxonomyNode` of kind `glossary-category` (today: entries in `glossaryCategories` in `glossary-meta.ts`). Defines the buckets under `/glossary/` and `/en/glossary/` (fundamentals, dynamics, orbits, …). A category may nest **one level of subcategories**: a subcategory node parents at its category node (e.g. `glossary/orbits`), its `meta.slug` is the full path form (`orbits/halo`), and entries live in `glossary/<cat>/<sub>/<slug>.md`. Entries may also sit directly in the category root (unsorted).

## Terminology to avoid

- "Sidebar config" as a synonym for taxonomy — taxonomy is the **concept**, sidebar configs are one **adapter output**.
- "Layout" as a catch-all for AI Chat, OrbitSimLab, Forum, Dialectic, or any non-article custom experience — use **Layout** only for the VuePress page shell, and use **special surface** or **interactive surface** for the user-facing experience.
- "Sidebar" without qualification — say **VuePress sidebar config**, **section sidebar**, **wayfinding disclosure**, or **Space News sidebar**.
- "Wayfinding" called an index or sidebar — wayfinding is a global site-map disclosure, not the sidebar-tree **Index** kind and not the AI route index.
- "Surface" without qualification when precision matters — say **special surface**, **interactive surface**, content page, or site-surface-specific adapter output.
- "i18n key" for `NodeId` — ids are not i18n keys; they are stable identities.
- "Locale root", "VuePress root", "LocalePath", and "route prefix" used interchangeably — **VuePress locale root/config** is framework configuration; **LocalePath** is taxonomy-resolved routing data.
- `'/en' + zhPath` as a path construction rule — consumers select from `LocalePath`; they do not manually prefix the Chinese path.
- "Current language" without saying whether it means **runtime locale detection**, **locale preference**, or explicit user switching.
- `cislunar-lang-chosen` treated as the site locale — it is only a persisted preference/sentinel, not the current route locale.
- "Same page" for zh/en content unless stable taxonomy identity is the point — say **bilingual counterpart** for paired locale content, and **LocalePath entries** for their routes.
- "Bilingual" for generated artifacts without naming the partition model — say **locale-partitioned generated artifact** for shapes like `{ zh: ..., en: ... }`.
- "Category" without a qualifier — say **glossary-category** or **news-category**. They are different `NodeKind`s.
- "Article category" without specifying **news-category** — Space News categories are taxonomy-facing news buckets, not generic editorial tags or glossary categories.
- "Same article" when comparing zh/en files — say **bilingual counterpart** when two Space News files share the same date and article slug; say **duplicate article** only for unintentionally repeated content within one locale.
- "Image" or "image path" without specifying **hero/card image**, **figure set**, **source figure path**, **built dist asset path**, or **share image**.
- "Slug" when referring to the full filename — say **article slug** for the identifier after `YYYY-MM-DD-`, and **article filename** for `YYYY-MM-DD-slug.md`.
- "AI index" or bare "index" for `/ai-chat-index.json` — say **AI route index**. **Index** already means a README at a section/group root in the sidebar tree.
- "Context index", "AI context index", or "site index" for `/ai-chat-context.json` — say **AI context corpus**.
- "Path" without qualification when discussing AI retrieval — say **AI retrieval path** when you mean the Router-selected key used to join route rows to context records.
- "ChatIndexCategory" as a normal category — it is an AI-specific grouping key, not a **news-category**, **glossary-category**, editorial tag, or article attribute.
- AI generated artifacts described as **Adapters** or **Intakes** — adapters derive site-surface outputs from taxonomy; intakes collect build-time data. `/ai-chat-index.json` and `/ai-chat-context.json` are generated AI-chat artifacts.
- "Translation missing" used interchangeably with "locale gated" — see Translation gap vs Locale gating.

## See also

- [ADR-0001 — Unified Taxonomy Module](docs/adr/0001-unified-taxonomy-module.md)
- [docs/agents/domain.md](docs/agents/domain.md) — how agents should consume this file
- [docs/agents/issue-tracker.md](docs/agents/issue-tracker.md)
- [docs/agents/triage-labels.md](docs/agents/triage-labels.md)
