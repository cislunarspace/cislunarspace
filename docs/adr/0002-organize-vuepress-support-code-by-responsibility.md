# ADR 0002 — Organize VuePress support code by responsibility

- **Status:** Accepted
- **Date:** 2026-06-03
- **Supersedes:** —
- **Superseded by:** —

## Context

The `web/.vuepress/` root directory accumulated support files across multiple development phases, reaching ~25 source files with mixed responsibilities:

- **Build tooling** (sync-figures, sharded-build, measure-build, verify-dist) — infrastructure scripts with no content knowledge
- **Theme display data** (extraSideBar, footer) — consumed only by theme components, but living in the config directory
- **Sidebar support code** (sidebar-data, sidebar-types, sidebar-transforms) — types and definitions for the knowledge-base sidebar tree
- **Content generators** (gen-sidebar, gen-ai-chat-context) — build-time JSON artifact producers mixing seven distinct output families in a single 255-line orchestrator
- **Deprecated compatibility files** (build-sidebar) — re-exports with no runtime importers

This layout made it hard for maintainers and agents to answer "where does X live?" without reading multiple files. Adding or modifying any content family required navigating a flat directory that mixed unrelated concerns.

## Decision

Organize VuePress support code into responsibility-scoped directories:

| Directory | Responsibility | Examples |
|-----------|---------------|---------|
| `.vuepress/sidebar/` | Sidebar data definitions, types, and runtime config construction | `data.ts`, `types.ts`, `config.ts`, `intake.ts`, `runtime.ts` |
| `.vuepress/generators/` | Build-time JSON artifact generators (one per output family) | `space-news.ts`, `ai-chat.ts`, `glossary.ts` |
| `.vuepress/build/` | Build infrastructure scripts (no content knowledge) | `sync-figures.js`, `sharded-build.ts`, `measure-build.ts`, `verify-dist.ts` |
| `.vuepress/theme2/data/` | Theme display data consumed by theme components only | `wechat-widget.ts`, `footer.ts` |
| `.vuepress/taxonomy/` | Unified taxonomy module (unchanged) | `types.ts`, `data.ts`, `define.ts`, `adapters/` |
| `.vuepress/intakes/` | Build-time data collection (unchanged) | `glossary-intake.ts`, `chat-index-intake.ts` |

The VuePress config root (`.vuepress/config.ts`, `navbar.ts`, `navbar-en.ts`, `og-meta-plugin.ts`, `page-metadata.ts`) remains at the top level because these files are directly consumed by `config.ts` and there are few enough of them that a dedicated directory is not justified.

The build-time orchestrator (`generate.ts`) is a thin CLI entry point that delegates to the three generators; it no longer inlines any generation logic.

## Non-goals

1. **No change to route URLs or page content.** All markdown files, page paths, and locale roots (`/` for zh, `/en/` for en) are unchanged.
2. **No change to ADR-0001 taxonomy rules.** `TaxonomyNode`, `NodeId`, `LocalePath`, locale gating, and the adapter pattern remain as specified.
3. **No change to content data sources.** `sidebar/data.ts` remains the manual definition source for knowledge-base sections; glossary and Space News remain filesystem-scanned.
4. **No plugin directory.** With only two VuePress plugins (`og-meta-plugin.ts`, `page-metadata.ts`) and direct `config.ts` imports, a `plugins/` directory is not yet justified.
5. **No reorganization of `gen-ai-chat-context.ts`.** It remains at the root because it is consumed by `generators/ai-chat.ts` at its current path and has no other dependents.

## Consequences

### Positive

- Each responsibility area has a single directory; "where does X go?" is answered by the directory name.
- `generate.test.ts` exercises the new generator structure, confirming artifact equivalence.
- Deprecated `build-sidebar.ts` is removed; no stale re-exports remain.
- The WeChat signature service example is moved to `scripts/`, correctly identified as a project-level utility rather than VuePress build code.

### Negative

- Import paths for moved files changed; any out-of-tree forks referencing these paths will need updating.
- The `pagePatterns` config must continue to exclude `.vuepress/**/*.md` to avoid treating new `.ts` sibling files as pages (already satisfied by the existing pattern).
- `web/.vuepress/sidebar/types.ts` is a thin re-export hub (`intake.ts` + `runtime.ts`) to preserve backward compatibility; it can be removed once all direct namespace imports are migrated.

## Verification

- `npm run gen-sidebar` produces all six JSON artifacts with identical content to pre-refactor.
- `npm run test` passes all tests except `navbar.test.ts` dialectic route (pre-existing failure unrelated to this change).
- `npm run docs:build` has not been run in this issue to avoid build cost; it should be validated in CI.
