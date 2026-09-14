
# Implementation Roadmap: Cislunar Space Content Audit Remediation

> Generated from `docs/audits/site-content-audit-2026-06-04.md` and GitHub issues #61–#81.
>
> **计划已执行完毕。** 本文件作为历史归档保留，不再作为活跃执行计划。

## Issue Index

| Issue | Title | Type | Phase | Status |
|-------|-------|------|-------|--------|
| #61 | Establish strict bilingual mirror gap checker | AFK | 1 | Open |
| #62 | Establish VuePress internal link and image resolver | AFK | 1 | Open |
| #63 | Decide mirror policy for special pages | HITL | 0 | Open |
| #64 | Decide canonical glossary slug rules | HITL | 0 | Open |
| #65 | Decide English author/Chinese text style | HITL | 0 | Open |
| #66 | Update resources/tools URLs and versions | AFK | 4 | Open |
| #67 | Human-review high-risk factual claims | HITL | 0 | Open |
| #68 | Decide image filename/related-link rules | HITL | 0 | Open |
| #69 | Fill fundamentals glossary English mirrors | AFK | 2 | Open |
| #71 | Fill non-fundamentals glossary mirrors | AFK | 2 | Open |
| #74 | Fix background prerequisite relative links | AFK | 4 | Open |
| #75 | Correct environment image directory spelling | AFK | 4 | Open |
| #76 | Clean English Chinese remnants + scanner | AFK | 1+4 | Open |
| #77 | Fill research-frontiers/NRHO/special mirrors | AFK | 5 | Open |
| #78 | Fix glossary absolute route broken links | AFK | 2 | Open |
| #79 | Restore DRO/Lyapunov technical parity | AFK | 5 | Open |
| #80 | Apply factual-review decisions to pages | AFK | 6 | Open |
| #81 | Fix English orbits image/link parity | AFK | 5 | Open |

## Dependency Graph

```
Phase 0 (HITL, parallel) ─────────────────────────────────────────────┐
│  #63  #64  #65  #67  #68                                           │
└──┬──┬──┬──┬─────────────────────────────────────────────────────────┘
   │  │  │  │
   │  │  │  └─→ #62 link resolver needs image rule config hook (light)
   │  │  └────→ #76 scanner can build tooling now, content cleanup waits for #65 output
   │  └───────→ #69, #71, #78 depend on canonical slug rules
   └──────────→ #69, #77 depend on mirror policy

Phase 1 (AFK, parallel) ────────────────────────────────────────────
│  #61 mirror checker    #62 link resolver    #76 scanner (tool only)
│
Phase 2 (AFK, parallel by subdirectory) ────────────────────────────
│  #69 fundamentals      #71 non-fundamentals      #78 broken routes (after #69+#71)
│
Phase 4 (AFK, parallel) ────────────────────────────────────────────
│  #66 resources URLs    #74 background links    #75 envrionment    #76 cleanup (after #65)
│
Phase 5 (AFK, parallel) ────────────────────────────────────────────
│  #77 research-frontiers mirrors    #79 DRO/Lyapunov parity    #81 orbits image/link parity
│
Phase 6 (AFK, single-threaded) ─────────────────────────────────────
│  #80 apply factual decisions (after #67 + #66)
│
Phase 7 (integration verification) ─────────────────────────────────
│  npm run gen-sidebar → npm run docs:build → run all checkers
```

## Execution Plan

### Phase 0: HITL Decisions (48h SLA, all parallel)

Assign to maintainers / domain experts. These are **blocking** for all downstream work.

| Assignee role | Issue | Output deliverable |
|---|---|---|
| Content architect | #63 | Exception list for special pages: dialectic, references, ai-chat, templates, EN-only indexes. Post as checklist in #63. |
| Glossary curator | #64 | Canonical route mapping for orbit-identification and true-anomaly. Post as decision document in #64. |
| Bilingual editor | #65 | Author rendering rules, Chinese-text allowlist, wechatShare.desc template. Post as rules in #65. |
| Domain expert | #67 | Per-claim decisions (accepted/rewrite/remove/needs-source) for He-3, lunar data platform, HIT stats. Post as table in #67. |
| Content standard owner | #68 | Image filename rules, figures directory convention, related-link format rules. Post as rules in #68. |

**Action on completion**: Add `unblocked` comment on downstream issues (#69, #71, #76, #77, #78, #80, #81).

### Phase 1: Automation Tools (parallel)

| Agent type | Issue | Work |
|---|---|---|
| Tool builder | #61 | Implement `npm run check-mirrors` in `web/.vuepress/build/`. Config-driven exceptions from #63. |
| Tool builder | #62 | Implement `npm run check-links` in `web/.vuepress/build/`. Config hook for #68 image rules. |
| Tool builder | #76 (first half) | Implement English Chinese-character scanner with allowlist config. Report-only mode. |

**Agent scope constraint**: Only touch `web/.vuepress/build/`, `web/package.json`, and `web/.vuepress/intakes/`. Do not modify any content `.md` files.

**Verification**: `npm test` passes; each tool runs independently and produces JSON output.

### Phase 2: Glossary Mirror Translation (parallel by subdirectory)

Each agent owns a distinct subdirectory to avoid file conflicts.

| Agent | Subdirectory | Issue | Count |
|---|---|---|---|
| Agent A | `glossary/fundamentals/` (batch 1: core orbital mechanics) | #69 | ~20 |
| Agent B | `glossary/fundamentals/` (batch 2: coordinate frames/time) | #69 | ~20 |
| Agent C | `glossary/fundamentals/` (batch 3: maneuvers/transfers) | #69 | ~20 |
| Agent D | `glossary/fundamentals/` (batch 4: satellite classes) | #69 | ~20 |
| Agent E | `glossary/fundamentals/` (batch 5: remaining) | #69 | ~10 |
| Agent F | `glossary/dynamics/` | #71 | 17 |
| Agent G | `glossary/navigation/` | #71 | 8 |
| Agent H | `glossary/doctrine/` | #71 | 7 |
| Agent I | `glossary/orbits/` | #71 | 9 |
| Agent J | `glossary/organizations/` + `other/` + `observation/` | #71 | 12 |
| Agent K | Glossary README index consolidation | #69+#71 | last |

**Agent instructions**:
1. For each missing page: translate frontmatter (title, description, keywords) + body + references to English.
2. Follow #64 slug/canonical rules.
3. Follow #65 author rendering rules.
4. English internal links use `/en/glossary/...` prefix.
5. Run `npm run check-mirrors` after finishing assigned batch.
6. Do NOT modify `glossary/README.md` or `en/glossary/README.md` (Agent K handles those).

**Agent K** (index consolidation): runs last. Updates both README indexes. Runs `npm run gen-sidebar` to verify `sidebar-glossary.auto.json`.

**#78 broken routes**: Run after #69 + #71 complete. Each subdirectory agent repairs broken `/glossary/...` links in their directory using `npm run check-links` output.

### Phase 4: Knowledge Base Local Fixes (parallel)

| Agent | Issue | Work |
|---|---|---|
| Domain-aware agent or human | #66 | Update Basilisk URLs, GMAT version, JPL ephemerides. Sync EN mirrors. |
| Agent | #74 | Fix background relative links. Decide create-or-retarget per missing page. |
| Agent | #75 | Rename `envrionment/` to `environment/` in public dir; update 3 image refs in `environment.md`. |
| Agent | #76 | Apply Chinese-character cleanup using scanner output + #65 allowlist. Sample 10% for manual QA. |

**#66 special note**: Basilisk/GMAT/JPL URL/version verification requires network access and domain knowledge. Recommend assigning to a human-reviewed agent.

**Verification**: `npm run docs:build` → images render; `npm run check-links` → zero new errors.

### Phase 5: Specialty Mirrors and Parity (parallel)

| Agent | Subdirectory | Issue |
|---|---|---|
| Agent A | `research-frontiers/` + `en/research-frontiers/` | #77 |
| Agent B | `en/glossary/orbits/dro.md` + `lyapunov-orbit.md` | #79 |
| Agent C | `en/cislunar-orbits/` + `en/glossary/orbits/` image/link parity | #81 |

**Scope constraint**: Phase 5 agents must NOT modify `glossary/` source Chinese files. Report glossary issues as comments on #78.

**Verification**: `npm run check-mirrors` → no new gaps; `npm run check-links` → no new broken links.

### Phase 6: Factual Decision Landing (single-threaded)

| Agent | Issue | Work |
|---|---|---|
| Domain agent | #80 | Apply #67 decisions to CN pages first, then EN mirrors. Add source citations. Remove/soften unverified superlatives. |

**Prerequisite**: #67 decisions posted as checklist; #66 completed (so resource URLs are already correct).

**Verification**: Each modified page has source link or explicit `[citation needed]` marker.

### Phase 7: Integration Verification (single-threaded)

Run in `web/` directory, in this order:

```bash
npm run gen-sidebar          # regenerate all JSON artifacts
npm run docs:build           # full VuePress build + sync-figures
npm run check-mirrors        # #61: zero unexplained gaps
npm run check-links          # #62: zero unexplained broken links
npm run check-en-chinese     # #76: only allowlisted Chinese text remains
```

Then human review: sample 5 entries per glossary subdirectory, all orbit pages, all special pages, all resources-tools pages.

**On success**: Close all open issues. Document remaining intentional exceptions in allowlist config files.

## Agent Assignment Quick Reference

| Phase | # of agents | Concurrent | Estimated effort |
|---|---|---|---|
| 0 HITL | 5 (human) | Parallel | 1–2 days each |
| 1 Tools | 3 | Parallel | 2–3 days each |
| 2 Glossary | 11 | 5–8 concurrent | 1–2 days each batch |
| 4 KB Fixes | 4 | 3–4 | 0.5–1 day each |
| 5 Specialty | 3 | 3 | 1–2 days each |
| 6 Facts | 1 | 1 | 1 day |
| 7 Verify | 1 | 1 | 0.5 day |

## Rules for All Agents

1. **Never edit auto-generated JSON** (`sidebar.auto.json`, `sidebar-glossary.auto.json`, `ai-chat-context.json`, `ai-chat-index.json`).
2. **PR scope = assigned subdirectory only**. Out-of-scope changes require a new PR.
3. **Deliver artifacts**: (a) absolute paths of all modified files, (b) commands run (`gen-sidebar`, `check-links`, etc.), (c) unresolved issues list, (d) items needing human review.
4. **After modifying any source `.md` file**: run `npm run gen-sidebar` to regenerate JSON artifacts before committing.
5. **Before final PR merge**: run `npm run docs:build` to confirm full build succeeds.
