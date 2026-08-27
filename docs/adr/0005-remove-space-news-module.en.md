[English](0005-remove-space-news-module.md) | 简体中文

# ADR 0005: Remove the Space News Module

- **Status:** Accepted
- **Date:** 2026-08-20
- **Supersedes:** —
- **Superseded by:** —

## Context

Space News was once the site's largest content module: 675 articles (~240MB) on the zh side plus a 29MB en mirror, produced by an hourly pipeline (search → filter → AI drafting → commit → deploy), with an admin panel, SpaceNewsHome/Archive/Article/Sidebar components, a taxonomy news-category system (15 category nodes), news entries in the AI route index & context corpus, monthly sharded builds (sharded-build), and double-copied figures (sync-figures).

The site content cleanup review of 2026-08-20 (issue #216, decision record in [docs/audits/content-cleanup-decisions.md](../audits/content-cleanup-decisions.en.md)) concluded:

1. **No reader value**: ~300-character AI boilerplate articles are archives, not interpretation — worthless to general readers.
2. **Largest maintenance cost**: 240MB+ storage, hourly pipeline, admin integration, dedicated build toolchain — investment inverted against value.
3. The site's positioning narrows to a knowledge base (guide long-reads + orbit tutorials + dictionary) plus an AI chat assist; news has no place in that shape.

## Decision

Remove the entire Space News module, down to a state as if it never existed:

- Content: delete `web/space-news/` and `web/en/space-news/` entirely; no redirects for indexed URLs — they 404 (news pages draw no search traffic).
- Pipeline: remove all space-news scripts and skills under `scripts/`.
- Code: SpaceNews components & layouts, taxonomy's news-category kind and nodes, content module's space-news family and `create`, sidebar news routes, home/footer/navbar entries.
- AI: route-index and context-corpus generation logic stays; its inputs shrink; the two-phase retrieval chain is unchanged.
- Associated tools retired: sharded-build (born to shard-render monthly news), sync-figures and dev-figures-fallback (born for news figures' absolute-path convention).
- admin: news panel and backend integration removed; only glossary and kb families remain.
- Historical record: this ADR + the existing 5 pipeline docs under docs/adr/ stay in place, recording this history.

## Consequences

- Positive: storage & maintenance cost drop sharply; the site's name matches reality; no sharded builds, no double-copied figures — build toolchain notably simpler.
- Negative: AI chat loses news corpus and hot-topic entrances; live news URLs 404.
- `NodeKind` drops `news-category` (open enum shrinks); content module's `ContentFamily` shrinks to `glossary | kb`: should news-like content ever return, redesign it in a new form rather than reviving the old pipeline.
