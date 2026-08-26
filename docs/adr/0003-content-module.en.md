[English](0003-content-module.en.md) | [简体中文](0003-content-module.md)

# ADR 0003: Content Module

- **Status:** Proposed
- **Date:** 2026-08-19
- **Supersedes:** —
- **Superseded by:** —

## Context

The site's markdown content currently has three writers that share nothing:

| Writer | Form | Frequency |
|---|---|---|
| Space News auto pipeline | Python writes md + bash commits (`scripts/space-news-update-local.sh`) | hourly |
| admin local manager | Express server reads/writes files directly (`admin/`, ~4000 lines) | manual |
| agents / humans | editors changing files + git workflow | daily |

Each writer implements the same body of low-level knowledge on its own:

1. **Path conventions** (which content goes where, how zh/en pair): the pipeline encodes them in Python; admin has regexes in `lib/scan.js` plus a hand-maintained `KB_SECTIONS` array; `build/check-bilingual-mirror.ts` holds another copy.
2. **Frontmatter rules**: the pipeline assembles it in Python; admin has one in `lib/validate.js`; `build/check-space-news-frontmatter.ts` another.
3. **Index refresh** (after content changes, `gen-sidebar` must rerun for sidebar, article lists, and AI indexes to update): the pipeline does an unconditional full build in phase 2, naturally covered; admin only reruns after delete and category operations — **a normal save doesn't**, which is exactly why the list shows stale content after saving.
4. **README index-line maintenance** (monthly READMEs, glossary README): one copy in `admin/lib/delete.js`, one in `scripts/build-glossary-index.py`.
5. **Category data writes**: `admin/lib/categories.js` uses `indexOf`/string concatenation to patch the TS source of `web/.vuepress/taxonomy/data.ts`, its own comments noting not to use the file's last `];` or it corrupts the array. Consequence already materialized: in `taxonomy/data.ts`, two nodes — `commercial` and `commercial-space` — carry the same Chinese label 商业航天 and the same color `#059669`; duplicate categories with no mechanism to catch it.

ADR-0001 unified **structure data** (the taxonomy module: navigation, sidebar, category definitions). But **content operations** (create, edit, pairing, delete, categorization, index refresh) have no corresponding module. admin is positioned as the content-management GUI, yet it has no data layer of its own: every feature talks straight to the filesystem and source text. It cannot create content (`saveMdFile` requires the file to exist), doesn't sync indexes after saving, and bilingual editing means manually opening two panes. These aren't UI problems; they're the absence of a domain-interface layer. Agents and pipelines doing the same operations each have their own side doors.

## Decision

Introduce a **Content Module** at `web/.vuepress/content/`, sibling to `taxonomy/`: taxonomy answers what the site's structure is; content answers how content is safely created, modified, queried, and removed. All three writers operate content through it.

### Interface (target shape)

```ts
// web/.vuepress/content/types.ts (to implement after review; details may shift during implementation)

export type ContentFamily = 'space-news' | 'glossary' | 'kb-section';

export interface ContentEntry {
  /** md path relative to web/, e.g. 'space-news/2026/04/2026-04-01-x.md' */
  relPath: string;
  family: ContentFamily;
  locale: 'zh' | 'en';
  /** bilingual counterpart path, derived by directory convention; null = missing on that side */
  counterpartPath: string | null;
  frontmatter: Frontmatter;
}

export interface ContentModule {
  /** List entries of a content family (with pairing status, draft flag, category, frontmatter errors). */
  list(family: ContentFamily, filter?: { keyword?: string; category?: string }): ContentEntry[];
  /** Read one: frontmatter + body. */
  read(relPath: string): { frontmatter: Frontmatter; body: string };
  /** Update one (must exist). Refreshes derived indexes automatically after writing. */
  write(relPath: string, next: { frontmatter?: Frontmatter; body?: string }): void;
  /** Create one: resolve path, create figures dir, insert README index line, refresh index; returns relPath. */
  create(family: ContentFamily, input: CreateInput): string;
  /** Delete one (optionally with bilingual counterpart and figures): to recycle bin, clear README index line, refresh index. */
  delete(relPath: string, opts: { withCounterpart: boolean }): DeleteReport;
  /** Category add/remove (modifies category data files; never touches articles). */
  addCategory(family: 'space-news' | 'glossary', label: { zh: string; en: string }, meta?: { color?: string }): void;
  removeCategory(family: 'space-news' | 'glossary', id: string, opts: { deleteEntries: boolean }): RemoveCategoryReport;
  /** Rerun derived-index generation (idempotent; write/create/delete call it internally). */
  refreshIndex(): void;
}
```

### Rules

#### The interface is the entire knowledge

Callers (admin server, CLI, agents) need to know nothing about directory conventions, required frontmatter fields, README index-line formats, or recycle-bin location — all implemented inside content/. Adding a new content kind means implementing that family's path routing and validation rules; the interface stays put.

#### Path conventions expressed exactly once

`content/router.ts` is the single expression of path conventions (both directions: `family + locale + identifier → relPath`, and `relPath → family + locale + counterpart path`). admin's regexes, `check-bilingual-mirror`'s rules, and the Python pipeline's path logic all switch to consuming it. The Python side gets it via an exported JSON manifest or the CLI (this phase only requires no new copies of the conventions; rewriting inside Python can wait).

#### One uniform write pipeline

Every write operation follows the same sequence: parameter validation → frontmatter validation (reusing `build/check-*` rules, extracted into shared functions) → persist → housekeeping (README index lines, figures dir, recycle bin) → `refreshIndex()`. The stale-index-after-save problem ends at this layer instead of relying on every call site remembering.

#### Category data split into files; write-back regenerates the whole file

- Move `newsCategoryNodes` out of `taxonomy/data.ts` into `taxonomy/news-categories.ts` (a standalone declarative data file merged via `defineTaxonomy` as usual; glossary categories treated the same if still needed).
- `addCategory`/`removeCategory` write back by mutating the in-memory array → serializing the whole file → formatting → persisting. Text splicing and regex surgery are banned. Generative write-back is naturally idempotent and cannot corrupt file structure.
- Pre-write validation: duplicate labels within a family (`commercial`/`commercial-space` style duplicates get caught from now on), invalid color format, order conflicts.

#### admin's role

admin stays and is refactored into the GUI shell of this module:

- admin's `lib/` scan/validate/categories/delete logic migrates into `content/` (in TS); the admin server runs under tsx and imports the module.
- Two gaps filled: creating content (via `create`) and post-save index refresh (built into `write`).
- The admin frontend and HTTP API shape stay roughly unchanged.

#### CLI entry

Under `web/`, `npm run content -- <op>`. Agents, humans, and the Python pipeline use it for domain operations — same validation and index refresh as the GUI.

## Non-goals

1. No changes to the taxonomy module itself (ADR-0001's interface and data untouched; `news-categories.ts` is only a data-file split — `defineTaxonomy` merge logic unchanged).
2. No database or resident service: the filesystem remains the sole storage; recycle bin and operation log keep admin's existing forms.
3. No rewrite of the Python pipeline in TS; its direct md writes stay this phase — it just consumes shared rules and index refresh.
4. No redesign of the admin frontend.

## Consequences

### Positive

- Creating content becomes a single `create` call instead of hand-writing files and memorizing directory conventions, identical from GUI and CLI.
- Derived indexes are always fresh after saves (refresh built into write operations).
- Path, frontmatter, and pairing rules go from three copies to one; the `check-*` validators share the same rule source as content operations.
- Category management can no longer corrupt taxonomy source files; duplicate categories get caught.
- Most logic in admin's nine `lib/` files moves into the shared module; admin shrinks significantly.

### Negative

- admin moves from pure JS to running under tsx (one-time cost).
- content/ needs interface-level test infrastructure (fixture-directory driven, no filesystem mocking).
- During the transition, the Python pipeline remains a half-side-door writer (until follow-up 6 completes).

## Follow-ups (suggested order; each can be its own issue)

1. **content/ skeleton**: `types.ts` + `router.ts` + `read`/`write` + fixture-driven interface tests.
2. **Split category data**: `news-categories.ts` + serialized write-back + duplicate validation; switch admin's category APIs, delete the string-surgery code.
3. **admin migration**: move scan/validate/delete logic in; add `create` and post-save refresh; update `admin/README.md`.
4. **CLI entry**: `npm run content`; update agent skill docs referencing old path conventions (e.g. `scripts/research-frontiers-publish/SKILL.md`).
5. **Validator adoption**: point `check-bilingual-mirror` and `check-space-news-frontmatter` at content/'s shared rules, deleting the last rule copies.
6. **Pipeline alignment** (may be deferred): Python phase 1 output passes CLI validation; path logic aligns to the router.

## Alternatives considered

- **Keep improving inside admin; no shared module**: rejected. admin's problem is precisely that it hoards logic meant to be shared; adding features only deepens coupling with the site data model, and agents/pipelines gain nothing.
- **VuePress plugin or build hooks**: rejected. Content operations happen outside builds (writing source files); plugins are build-time concepts — wrong moment.
- **Database + API service (headless CMS)**: rejected. For a maintainer-plus-AFK-agent mode, filesystem plus git *is* storage and version control; a database buys nothing comparable while adding something to operate.

## Implementation notes

**Follow-up 1 (skeleton) landed 2026-08-19**: `content/` with `types.ts`, `router.ts`, `frontmatter-writer.ts`, `module.ts`, `index.ts`, and 17 interface tests (fixture-driven). Deviations & findings during landing:

1. **Frontmatter read/write switched to the `yaml` package**, not reusing `utils/frontmatter-parser.ts`. That simplified parser's read side misses nested objects (wechatShare etc. parse to empty strings) and multi-line arrays; as a write-side round-trip it would corrupt real entries' frontmatter. The content module's `parseMarkdownDoc`/`renderMarkdown` use full YAML parsing and serialization; generators' read paths are unaffected.
2. **kb-section section lists derive dynamically** from taxonomy nodes with `kind:'section'` (`index.ts`); no second hand-maintained list introduced.
3. **write's merge semantics**: key-level merge (given keys overwrite, others preserved); serialization drops comments and blank lines — existing content uses none.
4. create/delete and category operations wait for follow-ups 2/3; the interface joins then per this ADR.
