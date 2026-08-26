[简体中文](content-cleanup-decisions.md) | English

# Site content cleanup decision record

- **Status:** In progress (module-by-module discussion)
- **Date:** 2026-08-20
- **Nature:** this is a decision record, not an execution plan. Once every module is settled, the decisions roll up into an executable cleanup plan. This discussion discarded the review conclusions of the old `docs/content-strategy.md` while keeping its audience foundation.

## Settled premises

- **Audience**: general readers first, students second (per the site owner's confirmed positioning — not reopened).
- **Action menu**: delete, shrink, repair. Unified criterion: name matches reality + genuine value to the audience.
- **glossary**: the AI-chat corpus logic is core and stays (details in the glossary agenda).
- **Execution**: this session decides only; nothing executes here. Glossary entry-level deletion goes through the content module `delete`; whole-module deletion may use git directly (git is the recycle bin).

## Module decisions

### web/ knowledge-content modules

| Module | Decision | Rationale / notes |
|---|---|---|
| what-is-cislunarspace (2 pages) | **Keep; no deletion or shrinking** | Audience entrance. But 2 pages cannot carry the "beginner's guide" name — expansion goes on the roadmap; that's expansion, not cleanup. |
| cislunar-orbits (18 pages) | **Keep, untouched** | The site's model section; needs no cleanup. |
| research-frontiers (32 pages) | **Shrink** | Mostly template fill-in-the-blanks; a net negative for readers. Reduce to a handful of genuinely substantive pages plus one index page. The 9 family documents in `docs/research/` can feed whichever pages survive. |
| resources-tools (16 pages) | **Shrink** | External-link lists cost more to maintain than they're worth, with dangling "to be added" placeholders. Merge into one page or a few. |
| background (8 entries + README) | **Shrink (withdraw from nav; fold into main tutorials)** | Half placeholder pages today (mpc, pseudospectral, hill-three-body at ~35–45 words), half real content (ported blog posts with real derivations). Real content serves students as a secondary audience but can't hold a top-level nav slot. Decision: delete placeholders; fold real pages into cislunar-orbits / glossary as further reading; withdraw the background entry from navigation. |
| satellite-simulation (1 page) | **Delete entirely** | Owner's call. Scope: md, `OrbitSimLab` component, navbar/taxonomy entries, AI-index outputs — all removed, no dead entrances left. (Reason pending from owner.) |

### web/glossary

Option C (category shrink) was confirmed long ago (see glossary-cleanup-report.md), but execution didn't reconcile (2026-08-20 audit):

- Scan found 1538 entries; option C should keep ~132 and delete ~1406; only 714 actually remain.
- **631 deletables left undeleted; 63 keepers missing (including deep-grade entries — suspected mistaken deletion); 14 out-of-plan survivors.**

Decisions:

1. First inspect git history: what rule drove that deletion round, where did the 63 deep entries go (misdeleted or renamed)?
2. Then reconcile accounts against option C + graded.json: delete what should go, restore what was mistakenly deleted.
3. **AI chat logic untouched**: surviving entries keep flowing into the AI route index and context corpus; retrieval/answer chains unchanged by cleanup; the coverage loss was accepted in option C. A dictionary presentation page is optional and unrelated to AI.
4. Delete the empty `glossary/figures/` directory in passing.

Entry-level deletion goes through the content module `delete` (with recycle bin).

### web/space-news: delete entirely

The site owner decided to **remove the whole Space News module**. Motivation: pipeline-generated boilerplate articles occupy the largest storage and maintenance footprint while offering readers nothing.

Scope (down to a state as if Space News never existed):

- Content: `web/space-news/` (zh, 240MB), `web/en/space-news/` (en mirror).
- Pipeline: space-news scripts under `scripts/` (update, publish, config, fix), the writing skill in `scripts/skills/`.
- Code: admin integration, SpaceNewsArticle/Sidebar/Home/Archive components & layouts, taxonomy news-category system, home-page news cards.
- AI: news items inside route index & context corpus generation (generation logic stays; inputs shrink).
- Docs: the 5 pipeline docs in `docs/adr/` are archived, not deleted — they record this history.
- SEO: no redirects; news URLs 404 after deletion (news pages draw no traffic).

### web/ functional surfaces

| Surface | Decision | Rationale / notes |
|---|---|---|
| AI chat | **Keep as-is** | Chat logic is what the owner explicitly keeps; entrances (home page, navbar, AiChatLayout) untouched. |
| Forum (forum.md) | **Delete entirely** | A localStorage-only guestbook visitors can't see each other's posts in — fails its own name, no reader value; feedback is handled by footer contacts. md, component, entrances all removed. |
| Dialectic (dialectic.md) | **Delete entirely** | Owner's call. Chinese-only, experimental, no longer evolving. md, DialecticLayout, entrances (incl. navbar/dialectic group) all removed. |
| Home page | **To roadmap (repair)** | Removing news & simulation cards is a cleanup side-effect; overall reconstruction (first-screen hierarchy, reading path) is the first repair batch after cleanup, taking post-cleanup layout as input: knowledge-first + AI assist + optional dictionary. |
| references.md / ref.bib | **Keep, untouched** | Supports citations of retained tutorials (cislunar-orbits etc.) and the references page. |

### Maintenance layer (admin / deploy / scripts / docs)

| Item | Decision | Rationale / notes |
|---|---|---|
| admin | **Keep; remove news panels/code** | After Space News goes, glossary and kb remain to manage; glossary entry-level deletion will use its recycle bin mechanism. |
| deploy/nginx-ai-proxy.conf | **Keep, untouched** | Live proxy config for AI chat; AI stays so it stays. |
| scripts/archive/ | **Delete** | Git is the archive; double archiving is meaningless. |
| scripts/wechat-signature-server.example.js | **Keep** | Used by live WeChat sharing; deleting loses the reference for next environment setup. |
| scripts/research-frontiers-publish/ | **Delete** | Batch publishing loses its subject once research-frontiers shrinks to an index page; future page-filling will be redone in the new shape. |
| docs/adr 5 space-news docs | **Stay in place** | ADRs are append-only; this cleanup adds a new ADR recording the Space News removal decision. |
| Stale reports in docs/audits | **Judge each at execution time: delete or mark deprecated** | Most are based on already-deleted content (bilingual-gap, site-content-audit, etc.). |
| docs/internal | **Keep** | Living conventions (contributors, page-title, seo-frontmatter). |
| docs/research | **Keep; used during shrinking; decide afterwards** | Source material for the research-frontiers shrink. |
| Inside web/.vuepress | **No separate agenda; clean via side-effects** | ADR-0002 already organized responsibilities; just remove dependent items: news generation pipeline, SpaceNews components, Dialectic, OrbitSimLab, taxonomy news nodes, etc. |
| web/deploy/ | **Keep** | Actually a gitignore note about live deployment confs (real confs stay out of git); deployment-related, so it stays. |

### Glossary reconciliation conclusion (git investigation, 2026-08-20)

Option C was fully executed; nothing was wrongly deleted:

- 2026-08-09 manual merge & slimming: orbits 377→143 merged & rewritten by orbit family; fundamentals/dynamics 16 families merged into 70 main entries; coordinate-system families 21→1; etc.
- 2026-08-20 commit `d324ecc6` executed option C, deleting 1406 zh entries (2809 files including en mirrors).
- The earlier "63 missing keepers" was a false alarm from an old pre-merge scan snapshot: those entries had been merged into main entries, not misdeleted; the "631 deletables left" were new main entries born of the merges.

**Closing decision**: rescan the surviving 714 entries + spot-check 10–20 merge results to confirm main entries carry no template shells; skip full manual review.

## Execution plan (order fixed)

1. **Delete Space News entirely** (largest, independent, dependency-free).
2. **Delete satellite simulation, forum, dialectic entirely** (independent dead surfaces).
3. **Remove admin's news panel** (depends on 1).
4. **Shrink research-frontiers, resources-tools, background**.
5. **Glossary closing rescan**.
6. **docs/audits cleanup + new ADR (Space News module removal)**.
7. **Home-page reconstruction (repair)**: last, taking the final post-cleanup layout as input: knowledge-first + AI assist + optional dictionary.

After each step run `npm run build` + check-links.

## Document disposition (executed)

- This file is promoted to the current content strategy, replacing the deleted old `docs/content-strategy.md` (whose review conclusions were discarded here; its audience foundation carries over and is recorded above).
- See also [ADR-0005](../adr/0005-remove-space-news-module.en.md) for the Space News removal decision.
- For the glossary closing rescan see [glossary-rescan-2026-08-20.md](glossary-rescan-2026-08-20.en.md): main-entry merge quality passes; **595 shallow-grade entries (deep=0, batch-generated short definitions) remain in the library — whether to cut them further is the owner's call**.
- **Status: decisions complete, executed (2026-08-20, issue #216, branch cleanup/issue-216-content-cleanup).**

## Post-cleanup expansion roadmap (outside this cleanup)

1. **Home-page reconstruction (repair)**: post-cleanup layout is knowledge-first (guide long-reads + orbit tutorials + dictionary) + AI chat assist. The home page awaits restructuring of first-screen hierarchy and reading path per this layout; currently it has only shed the news and simulation cards.
2. **Expand what-is-cislunarspace**: 2 pages can't carry the "beginner's guide" name; top expansion priority.
3. **Fill research-frontiers**: the 9 orbit-family documents in `docs/research/` provide material to flesh out retained direction pages.
4. **Glossary dictionary page** (optional, undecided) and the fate of shallow-grade entries.
