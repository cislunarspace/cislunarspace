[English](0004-asset-layering.en.md) | [简体中文](0004-asset-layering.md)

# ADR 0004: Asset layering & repository shape

- **Status:** Proposed
- **Date:** 2026-08-19
- **Supersedes:** —
- **Superseded by:** —

## Context

Three kinds of data actually live in this repo, with blurred boundaries: **content sources** (markdown, taxonomy data, figures — what git should manage), **derived data** (JSON computed from content sources by `generate.ts` — the build's business), and **build output** (`dist/`). The evidence below shows the three layers interleaved today.

### Derived data committed to git, in the same directories as source

- At `web/.vuepress/` root level: generated JSON such as `sidebar.auto.json`, `sidebar-glossary.auto.json` (1.1MB, 39,009 lines) sits beside `config.ts`.
- A full-repo search confirms: no remote or CI consumer of these JSONs. The only reference is habit — the auto-update pipeline's phase 3 `git add` list sweeps them into commits; the real release channel is phase 4's `rsync dist`. Committing artifacts is pure historical inertia.
- Same data written twice: `generators/space-news.ts` writes three space-news JSONs to both `.vuepress/` root and `.vuepress/public/`. Nothing at build time reads the root copies (theme2 runtime components fetch the `public/` ones).
- Dead artifact: `public/space-news-articles.json` (901KB, old schema) — no longer produced by the generator, referenced nowhere.
- `web/public/`: an accidental output residue hidden only by gitignore (its `.gitignore` comment says as much).

### Three coexisting figure conventions; ~230MB of byte-level redundancy

- space-news monthly figures directories: per `scripts/space-news-publish/IMAGES.md`, the English side does a whole-directory `cp -r` — ~237MB zh vs ~229MB en; sampled md5s identical.
- Key fact: `./figures/...` in markdown is just a URL convention; `build/sync-figures.js` is the only channel that puts figures into `dist/`. So keeping one physical copy and copying it to both dist locations at build time deduplicates without touching a single md line.
- Two more conventions coexist: absolute-path images in `.vuepress/public/`, and glossary same-directory figures. Plus orphan images (10 unreferenced strays under `space-news/2026/04/figures/` root).
- Inconsistent figure directory naming: 3 dirs with `-zh`/`-en` suffixes on the zh side, 9 on en, rest unsuffixed.

### glossary: name and reality diverged

- `config.ts`'s `pagePatterns` excludes `glossary/**` and `en/glossary/**` (build speedup 4500 → 1489 pages); entry pages are no longer SSR'd.
- theme2 has no client-side rendering component consuming glossary pages; `dist/glossary/` doesn't exist — **no dictionary pages exist online**.
- Yet the whole maintenance machinery keeps running: navbar carries a glossary entry, `sidebar/config.ts` still builds the glossary tree, the 1.1MB `sidebar-glossary.auto.json` regenerates and gets committed every build (with no build-time consumer), and translation-gap placeholders still inject into sidebars.
- Where glossary md genuinely lives on: `generators/ai-chat-context.ts` scans them site-wide as AI chat corpus, and `chat-index-intake` weaves them into the AI route index.

### Directory responsibilities muddled

- Repo-root `scripts/` holds six kinds of things at once: pipeline runners (space-news-update-\*), one-off scripts, a 4.2MB data file (`terms-classification.json`), `__pycache__`, agent skill docs, nginx configs.
- `.vuepress/theme2/` is legacy naming; `.vuepress/internal-docs/` stuffs docs into a config dir; `.vuepress/scripts/` (WeChat signature mjs) shares a name with root `scripts/`; deployment configs sit in `web/deploy/`; the 5.4MB `ref.bib` sits at `web/` root.
- `patch-vuepress-concurrent.js` patches `node_modules` directly, appears in no npm script, breaks on dependency reinstall, and relies on someone remembering to run it.

### Bilingual mirrors actually misaligned

The same article has zh in `2026/04/` but en in `2026/03/` (lijian-2 maiden flight); 4 entries exist only in zh, 1 only in en. No build-time guard catches these.

## Decision

### 1. Three-layer model & placement rules

| Layer | Contents | Location | Git |
|---|---|---|---|
| Content sources | md, `taxonomy/`, `sidebar/data.ts`, figures (single copy, §2), `ref.bib`, hand-made public assets | current | tracked |
| Derived data | everything `generate.ts` produces (`*.auto.json`, articles / ai-chat / bibliography JSON) | `.vuepress/public/` only (where runtime fetch happens) | untracked |
| Build output | `dist/` | `.vuepress/dist/` | untracked |

Companion changes:

- `generators/space-news.ts` stops writing those 4 files to `.vuepress/` root (no build-time consumer; theme2 fetches the `public/` copies); `generate.test.ts` assertions updated accordingly.
- `git rm --cached` tracked artifacts and complete `.gitignore` (`sidebar.auto.json` was committed before being ignored — explicit rm required).
- Pipeline phase 3's `git add` list drops artifacts, adding content-source directories only. Before implementing, re-check whether any gitee-side build script consumes repo artifacts (none found, but that server is outside this repo's jurisdiction).
- Delete dead artifacts and residue: `public/space-news-articles.json`, the whole `web/public/` directory.

### 2. Single source for figures

- Figures stored once, zh side; en md's `./figures/...` URL convention unchanged.
- `sync-figures.js` changes to copy zh figures into both `dist/space-news/...` and `dist/en/space-news/...`.
- Precondition for deleting en physical copies: full md5 comparison of zh/en same-name directories — delete only when all match; the 12 `-zh`/`-en` suffixed directories (contents may differ from counterparts) get manual confirmation one by one, then unify to unsuffixed names.
- Orphan images deleted after reference-integrity checking (§5).
- `IMAGES.md` drops its `cp -r` clause.
- Public images (logo, diagrams) go to `.vuepress/public/`; entry/article figures stay same-directory: each convention governs its own kind, no crossover.

### 3. glossary: clean up, then dual purpose (confirmed)

The status quo must end: pages don't exist, entry points remain, machinery runs. The site owner confirmed the direction (see [content strategy](../content-strategy.md) §5): **delete template-like short entries and low-value entries; kept entries serve both as AI corpus and as a dictionary.**

- **Cleanup**: delete templated short entries (criteria in the content strategy), batch-deleted through ADR-0003's content module `delete` (with recycle bin) — no bare scripts.
- **Corpus**: kept entries continue feeding AI chat corpus and the route index.
- **Dictionary**: post-cleanup scale (a few hundred expected) gets a client-rendered dictionary page (category browsing + search + zh/en pairs), one page plus one generated JSON (`public/`).
- **Transition**: before the dictionary page ships, remove the home-page card and navbar dictionary entry points (currently pointing at unbuilt pages).
- Sidebar stops producing the glossary tree and `sidebar-glossary.auto.json` (no build-time consumer; stopping costs nothing); translation-gap demotes to a pure build report, no longer injecting sidebar placeholders. These two don't depend on cleanup progress and go first.
- Glossary md's operation interface in the Content Module (ADR-0003) is unchanged.

### 4. Directory placement

| Current | Destination | Why |
|---|---|---|
| `.vuepress/theme2/` | `.vuepress/theme/` | rename away legacy naming; touches aliases & imports |
| `scripts/` one-off scripts | `scripts/archive/` | merges with existing `archive/verify-2026-03-figures.js` |
| `scripts/terms-classification.json` (4.2MB) | decide at implementation after reference check: `docs/data/` if still referenced, else out of git | data is not scripts |
| skill docs inside `scripts/` | `docs/` or `.claude/` | docs are not scripts |
| `.vuepress/internal-docs/` | `docs/` | docs don't live in config dirs |
| `.vuepress/scripts/` | merge into `.vuepress/build/` | name-collides with root `scripts/` |
| `web/deploy/` | repo-root `deploy/` | deployment config isn't site content |
| `web/ref.bib` | `web/.vuepress/` (bibliography generator's source data) | away from page directories |
| `patch-vuepress-concurrent.js` | fold into npm scripts (pre-`docs:build` or postinstall auto-apply) | no more relying on memory |
| `__pycache__/` | delete + gitignore | junk |

### 5. Tighter bilingual-mirror & asset-integrity checks

- `check-bilingual-mirror` gains rules: archive-month consistency for same-slug articles; figure-directory naming conventions (`-zh`/`-en` suffix mixing banned).
- New `check-figures-references`: scans the diff between figures and md references (orphans and missing images, both directions); joins the check family and pre-commit checks.
- Under option A, glossary misalignment remains covered by the translation-gap report.

## Non-goals

1. No changes to live content URLs (the glossary decision itself excepted).
2. No image host or CDN; figures keep shipping with the repo and dist.
3. No rebuild of the toolchain (VuePress 2 stays; the concurrent patch merely gets scripted handling).
4. No history rewrite: existing large blobs stay in history; this change only keeps increments clean.

## Consequences

### Positive

- Working tree shrinks ~230MB (en-side images) plus eliminates MB-scale JSON churn on every content commit — diffs return to pure content.
- Source / derived / output layers become directly visible at both directory and git levels.
- glossary's name matches reality again.
- Mirror misalignment and orphan assets gain build-time guards; cleanup results stop rotting.

### Negative

- With artifacts out of git, fresh clones must run `gen-sidebar` before building (`docs:dev`/`docs:build` already chain it) — imperceptible in practice; only direct vuepress invocations need care.
- Deleting en-side images is a large one-time change (~229MB, thousands of files): scripted execution plus verification report required.
- `sync-figures` double-copy slightly increases dist build time (file-level copy, negligible).
- Renaming `theme2` touches all aliases and import paths.

## Follow-ups (suggested order; each can be its own issue; parallelizable with ADR-0003 follow-ups)

1. **Phase 0 (quick wins: pure deletions & config)**: remove dead artifacts and `web/public/`; `git rm --cached` artifacts and complete `.gitignore`; adjust pipeline `git add` list; stop `generators/space-news.ts` writing `.vuepress/` root. Complete the gitee-consumer re-check first.
2. **Phase 1 (single figure source)**: full-md5 verification script → delete en copies → `sync-figures` double-copy → unify `-zh`/`-en` suffixed dirs → update `IMAGES.md` → orphan cleanup.
3. **Phase 2 (glossary)**: remove dead entry points → stop sidebar outputs & placeholder injection → entry cleanup (once the content module is ready) → client-rendered dictionary page (content strategy §5).
4. **Phase 3 (directory placement)**: execute per §4's table; rename `theme2` as its own issue (largest blast radius).
5. **Phase 4 (tighter checks)**: extend `check-bilingual-mirror`, add `check-figures-references`, wire into CI.

## Implementation notes

Phases 0–2 landed 2026-08-19/20. Deviations during phase 3 (directory placement) on 2026-08-20:

1. **`patch-vuepress-concurrent.js` archived instead of wired into the build chain**. Testing showed the patch incompatible with current `@vuepress/bundler-vite`: parallel rendering produced cross-page content bleed after patching (page A's title rendering into page B's path), caught by verify-dist's key page content check. Patch and restore script moved to `scripts/archive/`; `node_modules` restored; builds returned to official serial rendering (4m51s baseline). Any future revival must rewrite the patch against the current bundler source and pass key page content validation first.
2. Skill docs under `scripts/` (`space-news-publish/`, `research-frontiers-publish/`, `skills/`) not yet migrated due to complex reference chains; still under `scripts/`.
3. `terms-classification.json` (4.2MB) has no active references (only the archived `prune-glossary.py` uses it) and left git together with the archived scripts.

## Alternatives considered

- **Keep committing artifacts in exchange for remote/CI builds**: rejected. The release channel today is local build + rsync dist; artifacts in git have no consumers — keeping them is just MB-scale noise on every content commit.
- **Move images to an image host or external links**: rejected (this phase). Physical single-copy already removes redundancy; new external dependencies and migration cost aren't proportionate.
- **Restore full SSR for glossary**: rejected. Exclusion was a deliberate build-speed decision (4500 → 1489 pages); restoring contradicts it. Client rendering (option B) or corpus-only (option A) are the only two self-consistent directions.
