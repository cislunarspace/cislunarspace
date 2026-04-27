# Design: Fix Permalink Conflict Between Chinese and English Pages

## Problem

Multiple bilingual page pairs have conflicting or asymmetric `permalink` frontmatter, causing the Chinese version to display English content (route collision in VuePress 2).

## Root Cause

VuePress 2 registers routes by `permalink`. When two files (Chinese and English) declare the same permalink value, the last one processed overwrites the first. In this case, the English files were added after the Chinese files, so the English content now renders at the Chinese URLs.

## Affected Files

### P0 — Route Collision (Critical)

| Chinese File | English File | Conflicting Permalink |
|---|---|---|
| `web/research-frontiers/directions/orbit-design/orbit-characterization.md` | `web/en/research-frontiers/directions/orbit-design/orbit-characterization.md` | `/research-frontiers/directions/orbit-characterization/` |
| `web/research-frontiers/directions/orbit-design/low-energy-transfer.md` | `web/en/research-frontiers/directions/orbit-design/low-energy-transfer.md` | `/research-frontiers/directions/low-energy-transfer/` |

### P1 — Asymmetric Permalink Strategy

These pairs exist in both languages but only one side has a `permalink`:

| Chinese File | English File | Status |
|---|---|---|
| `web/space-news/2026/04/2026-04-23-space-art-culture-forum.md` | `web/en/space-news/2026/04/2026-04-23-space-art-culture-forum.md` | EN has permalink, ZH does not |
| `web/space-news/2026/03/2026-03-28-artemis-2-crew-arrive-ksc.md` | `web/en/space-news/2026/03/2026-03-28-artemis-2-crew-arrive-ksc.md` | ZH has permalink, EN does not |
| `web/space-news/2026/04/2026-04-17-commercial-space-safety-meeting.md` | `web/en/space-news/2026/04/2026-04-17-commercial-space-safety-meeting.md` | ZH has permalink, EN does not |
| `web/space-news/2026/README.md` | `web/en/space-news/2026/README.md` | ZH has permalink, EN does not |
| `web/README.md` | `web/en/README.md` | ZH has `permalink: /`, EN does not |

## Solution

### P0 Fix

Remove the `permalink` field entirely from the 2 English files. VuePress will then use file-based routing, which correctly maps `web/en/...` to `/en/...` routes.

### P1 Fix

Remove `permalink` from the Chinese Space News files so both sides rely on default file-based routing. This aligns with the majority of Space News articles that do not use permalinks.

Leave `web/README.md` with `permalink: /` untouched — this is the standard VuePress convention for the default-language homepage.

## Verification

1. Run `npm run docs:build` and confirm no build errors.
2. Confirm the Chinese pages at `/research-frontiers/directions/orbit-characterization/` and `/research-frontiers/directions/low-energy-transfer/` render Chinese content.
3. Confirm the English pages at `/en/research-frontiers/directions/orbit-characterization/` and `/en/research-frontiers/directions/low-energy-transfer/` render English content.
4. Confirm sidebar links to all affected pages remain valid.
