# Fix Permalink Conflict Between Chinese and English Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove conflicting and asymmetric `permalink` frontmatter fields so VuePress 2 uses default file-based routing for bilingual pages.

**Architecture:** Simple frontmatter edits — delete the `permalink:` line from each affected file using `sed -i '/^permalink:/d'`. No code changes, no tests needed — VuePress build success is the verification.

**Tech Stack:** VuePress 2, markdown frontmatter

---

## File Map

| File | Change |
|---|---|
| `web/en/research-frontiers/directions/orbit-design/orbit-characterization.md` | Remove `permalink:` line |
| `web/en/research-frontiers/directions/orbit-design/low-energy-transfer.md` | Remove `permalink:` line |
| `web/space-news/2026/03/2026-03-28-artemis-2-crew-arrive-ksc.md` | Remove `permalink:` line |
| `web/space-news/2026/04/2026-04-17-commercial-space-safety-meeting.md` | Remove `permalink:` line |
| `web/space-news/2026/README.md` | Remove `permalink:` line |

**Leave untouched:**
- `web/README.md` — `permalink: /` stays (VuePress default-language homepage convention)
- `web/en/space-news/2026/04/2026-04-23-space-art-culture-forum.md` — English has correct `/en/...` permalink, does not conflict
- `web/en/space-news/2026/03/2026-03-28-artemis-2-crew-arrive-ksc.md` — no permalink, nothing to change
- `web/en/space-news/2026/README.md` — no permalink, nothing to change

---

## Task 1: Remove permalink from orbit-characterization.md (English)

**File:** `web/en/research-frontiers/directions/orbit-design/orbit-characterization.md`

- [ ] **Step 1: Read the frontmatter to confirm current state**

Run:
```bash
head -12 /home/ouyangjiahong/codes/cislunarspace/web/en/research-frontiers/directions/orbit-design/orbit-characterization.md
```
Expected output:
```
---
title: Orbit Parameter Characterization for Cislunar Space
description: Representative works on orbit parameterization, object cataloging, and dynamical substitute models for cislunar libration points
keywords: cislunar orbit parameterization, libration point orbits, object cataloging, dynamical substitute, Hamiltonian analysis
author: 天疆说
date: 2026-03-07
lastUpdated: 2026-04-27
permalink: /research-frontiers/directions/orbit-characterization/
---
```
Confirm line 8 is `permalink: /research-frontiers/directions/orbit-characterization/`

- [ ] **Step 2: Remove the permalink line**

Run:
```bash
sed -i '/^permalink:/d' /home/ouyangjiahong/codes/cislunarspace/web/en/research-frontiers/directions/orbit-design/orbit-characterization.md
```

- [ ] **Step 3: Verify the line was removed**

Run:
```bash
head -12 /home/ouyangjiahong/codes/cislunarspace/web/en/research-frontiers/directions/orbit-design/orbit-characterization.md
```
Expected: 11 lines (no `permalink`), frontmatter closes at line 9.

- [ ] **Step 4: Stage and commit**

```bash
git add web/en/research-frontiers/directions/orbit-design/orbit-characterization.md
git commit -m "fix(permalink): remove conflicting permalink from orbit-characterization en"
```

---

## Task 2: Remove permalink from low-energy-transfer.md (English)

**File:** `web/en/research-frontiers/directions/orbit-design/low-energy-transfer.md`

- [ ] **Step 1: Read the frontmatter to confirm current state**

Run:
```bash
head -12 /home/ouyangjiahong/codes/cislunarspace/web/en/research-frontiers/directions/orbit-design/low-energy-transfer.md
```
Expected: `permalink: /research-frontiers/directions/low-energy-transfer/` at line 8.

- [ ] **Step 2: Remove the permalink line**

```bash
sed -i '/^permalink:/d' /home/ouyangjiahong/codes/cislunarspace/web/en/research-frontiers/directions/orbit-design/low-energy-transfer.md
```

- [ ] **Step 3: Verify**

```bash
head -12 /home/ouyangjiahong/codes/cislunarspace/web/en/research-frontiers/directions/orbit-design/low-energy-transfer.md
```
Expected: 11 lines (no `permalink`), frontmatter closes at line 9.

- [ ] **Step 4: Stage and commit**

```bash
git add web/en/research-frontiers/directions/orbit-design/low-energy-transfer.md
git commit -m "fix(permalink): remove conflicting permalink from low-energy-transfer en"
```

---

## Task 3: Remove permalink from artemis-2-crew-arrive-ksc.md (Chinese Space News)

**File:** `web/space-news/2026/03/2026-03-28-artemis-2-crew-arrive-ksc.md`

- [ ] **Step 1: Read the frontmatter**

Run:
```bash
head -15 /home/ouyangjiahong/codes/cislunarspace/web/space-news/2026/03/2026-03-28-artemis-2-crew-arrive-ksc.md
```
Expected: `permalink: /space-news/2026/03/2026-03-28-artemis-2-crew-arrive-ksc/` at line 4.

- [ ] **Step 2: Remove the permalink line**

```bash
sed -i '/^permalink:/d' /home/ouyangjiahong/codes/cislunarspace/web/space-news/2026/03/2026-03-28-artemis-2-crew-arrive-ksc.md
```

- [ ] **Step 3: Verify**

```bash
head -15 /home/ouyangjiahong/codes/cislunarspace/web/space-news/2026/03/2026-03-28-artemis-2-crew-arrive-ksc.md
```
Expected: no `permalink` line.

- [ ] **Step 4: Stage and commit**

```bash
git add web/space-news/2026/03/2026-03-28-artemis-2-crew-arrive-ksc.md
git commit -m "fix(permalink): remove asymmetric permalink from artemis-2-crew-arrive-ksc"
```

---

## Task 4: Remove permalink from commercial-space-safety-meeting.md (Chinese Space News)

**File:** `web/space-news/2026/04/2026-04-17-commercial-space-safety-meeting.md`

- [ ] **Step 1: Read the frontmatter**

```bash
head -15 /home/ouyangjiahong/codes/cislunarspace/web/space-news/2026/04/2026-04-17-commercial-space-safety-meeting.md
```
Expected: `permalink:` at line 5.

- [ ] **Step 2: Remove the permalink line**

```bash
sed -i '/^permalink:/d' /home/ouyangjiahong/codes/cislunarspace/web/space-news/2026/04/2026-04-17-commercial-space-safety-meeting.md
```

- [ ] **Step 3: Verify**

```bash
head -15 /home/ouyangjiahong/codes/cislunarspace/web/space-news/2026/04/2026-04-17-commercial-space-safety-meeting.md
```
Expected: no `permalink` line.

- [ ] **Step 4: Stage and commit**

```bash
git add web/space-news/2026/04/2026-04-17-commercial-space-safety-meeting.md
git commit -m "fix(permalink): remove asymmetric permalink from commercial-space-safety-meeting"
```

---

## Task 5: Remove permalink from space-news 2026 README.md (Chinese)

**File:** `web/space-news/2026/README.md`

- [ ] **Step 1: Read the frontmatter**

```bash
head -15 /home/ouyangjiahong/codes/cislunarspace/web/space-news/2026/README.md
```
Expected: `permalink: /space-news/2026/` at line 4.

- [ ] **Step 2: Remove the permalink line**

```bash
sed -i '/^permalink:/d' /home/ouyangjiahong/codes/cislunarspace/web/space-news/2026/README.md
```

- [ ] **Step 3: Verify**

```bash
head -15 /home/ouyangjiahong/codes/cislunarspace/web/space-news/2026/README.md
```
Expected: no `permalink` line.

- [ ] **Step 4: Stage and commit**

```bash
git add web/space-news/2026/README.md
git commit -m "fix(permalink): remove asymmetric permalink from space-news 2026 archive index"
```

---

## Task 6: Build Verification

- [ ] **Step 1: Run the VuePress build**

Run:
```bash
cd /home/ouyangjiahong/codes/cislunarspace/web && npm run docs:build 2>&1
```
Expected: Build completes with **zero errors**. Exit code 0.

- [ ] **Step 2: Confirm no permalink conflicts remain**

After build, inspect the git diff to confirm all 5 files had `permalink` removed and no other changes were made:
```bash
git diff HEAD
```
Expected: Only the 5 target files modified, only the `permalink:` lines removed.

---

## Verification Checklist

After all tasks:
- [ ] `npm run docs:build` succeeds with zero errors
- [ ] `git log --oneline -6` shows 5 new commits (one per task + build verification if committed together)
- [ ] No `permalink` line exists in any of the 5 target files
- [ ] No other files were modified
