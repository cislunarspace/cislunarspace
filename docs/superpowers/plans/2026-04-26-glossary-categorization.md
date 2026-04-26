# Glossary Categorization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reorganize `web/glossary/` from a flat structure into 6 topic-based subdirectories, update sidebar navigation, and verify the build.

**Architecture:** Move 31 Chinese + 12 English glossary files into `dynamics/`, `orbits/`, `navigation/`, `minerals/`, `programs/`, `other/` subdirectories. Keep existing `permalink` frontmatter unchanged so URLs don't break. Update sidebar file paths to match new locations. Cross-references use permalink format (`/glossary/slug/`) so they need no changes.

**Tech Stack:** VuePress 2, git mv, TypeScript sidebar config

---

## File Map

**Directories to create:**
- `web/glossary/dynamics/`
- `web/glossary/orbits/`
- `web/glossary/navigation/`
- `web/glossary/minerals/`
- `web/glossary/programs/`
- `web/glossary/other/`
- `web/en/glossary/dynamics/`
- `web/en/glossary/orbits/`
- `web/en/glossary/navigation/`
- `web/en/glossary/minerals/`

**Files to modify:**
- `web/.vuepress/sidebar.ts` — update glossarySidebar children paths
- `web/.vuepress/sidebar-en.ts` — update glossarySidebar children paths
- `web/glossary/README.md` — update internal links to new subdirectory paths
- `web/en/glossary/README.md` — update internal links to new subdirectory paths

**Files to move (git mv):**
- 31 Chinese `.md` files from `web/glossary/` → subdirectories
- 12 English `.md` files from `web/en/glossary/` → subdirectories

**Key constraint:** All glossary files have `permalink: /glossary/slug/` frontmatter. Do NOT change these — they ensure existing URLs keep working. Cross-references between files also use `/glossary/slug/` format and need no changes.

---

### Task 1: Create subdirectories and move Chinese glossary files

**Files:**
- Create: `web/glossary/{dynamics,orbits,navigation,minerals,programs,other}/`
- Move: 31 `.md` files

- [ ] **Step 1: Create the 6 subdirectories**

```bash
mkdir -p web/glossary/{dynamics,orbits,navigation,minerals,programs,other}
```

- [ ] **Step 2: Move dynamics files**

```bash
cd /home/ouyangjiahong/codes/cislunarspace
git mv web/glossary/cr3bp.md web/glossary/dynamics/
git mv web/glossary/qbcp.md web/glossary/dynamics/
git mv web/glossary/ephemeris-model.md web/glossary/dynamics/
git mv web/glossary/action-angle.md web/glossary/dynamics/
git mv web/glossary/birkhoff-gustavson.md web/glossary/dynamics/
git mv web/glossary/central-manifold.md web/glossary/dynamics/
git mv web/glossary/poincare-section.md web/glossary/dynamics/
```

- [ ] **Step 3: Move orbits files**

```bash
git mv web/glossary/dro.md web/glossary/orbits/
git mv web/glossary/nrho.md web/glossary/orbits/
git mv web/glossary/eml-halo.md web/glossary/orbits/
git mv web/glossary/dro-constellation.md web/glossary/orbits/
```

- [ ] **Step 4: Move navigation files**

```bash
git mv web/glossary/xray-pulsar-navigation.md web/glossary/navigation/
git mv web/glossary/gnss-weak-signal-navigation.md web/glossary/navigation/
git mv web/glossary/inter-satellite-link-navigation.md web/glossary/navigation/
git mv web/glossary/earth-moon-hybrid-navigation.md web/glossary/navigation/
git mv web/glossary/orbit-identification.md web/glossary/navigation/
git mv web/glossary/cislunar-spatiotemporal-reference.md web/glossary/navigation/
git mv web/glossary/lunanet.md web/glossary/navigation/
git mv web/glossary/moonlight.md web/glossary/navigation/
git mv web/glossary/lunar-navigation-constellation.md web/glossary/navigation/
git mv web/glossary/tiandu-1.md web/glossary/navigation/
```

- [ ] **Step 5: Move minerals files**

```bash
git mv web/glossary/mg-changeite.md web/glossary/minerals/
git mv web/glossary/ce-changeite.md web/glossary/minerals/
```

- [ ] **Step 6: Move programs files**

```bash
git mv web/glossary/artemis.md web/glossary/programs/
git mv web/glossary/lugre.md web/glossary/programs/
```

- [ ] **Step 7: Move other files**

```bash
git mv web/glossary/pogo.md web/glossary/other/
git mv web/glossary/exosims.md web/glossary/other/
git mv web/glossary/space-traffic-management.md web/glossary/other/
git mv web/glossary/starshade.md web/glossary/other/
git mv web/glossary/nuclear-thermal-propulsion.md web/glossary/other/
git mv web/glossary/cislunar-navigation-prospects.md web/glossary/other/
```

- [ ] **Step 8: Verify no .md files remain at glossary root (except README.md)**

Run: `ls web/glossary/*.md`
Expected: only `web/glossary/README.md`

- [ ] **Step 9: Commit**

```bash
git add web/glossary/
git commit -m "refactor: move Chinese glossary files into 6 subdirectories"
```

---

### Task 2: Move English glossary files

**Files:**
- Create: `web/en/glossary/{dynamics,orbits,navigation,minerals}/`
- Move: 12 English `.md` files

- [ ] **Step 1: Create subdirectories for English glossary**

```bash
mkdir -p web/en/glossary/{dynamics,orbits,navigation,minerals}
```

- [ ] **Step 2: Move English dynamics files**

```bash
git mv web/en/glossary/cr3bp.md web/en/glossary/dynamics/
git mv web/en/glossary/birkhoff-gustavson.md web/en/glossary/dynamics/
git mv web/en/glossary/central-manifold.md web/en/glossary/dynamics/
git mv web/en/glossary/action-angle.md web/en/glossary/dynamics/
git mv web/en/glossary/poincare-section.md web/en/glossary/dynamics/
```

- [ ] **Step 3: Move English orbits files**

```bash
git mv web/en/glossary/eml-halo.md web/en/glossary/orbits/
git mv web/en/glossary/orbit-identification.md web/en/glossary/orbits/
```

- [ ] **Step 4: Move English navigation files**

```bash
git mv web/en/glossary/xray-pulsar-navigation.md web/en/glossary/navigation/
```

- [ ] **Step 5: Move English minerals files**

```bash
git mv web/en/glossary/mg-changeite.md web/en/glossary/minerals/
git mv web/en/glossary/ce-changeite.md web/en/glossary/minerals/
```

- [ ] **Step 6: Move English other files**

```bash
git mv web/en/glossary/starshade.md web/en/glossary/other/
```

Wait — `web/en/glossary/other/` doesn't exist yet. Create it:
```bash
mkdir -p web/en/glossary/other
git mv web/en/glossary/starshade.md web/en/glossary/other/
```

- [ ] **Step 7: Verify no .md files remain at English glossary root (except README.md)**

Run: `ls web/en/glossary/*.md`
Expected: only `web/en/glossary/README.md`

- [ ] **Step 8: Commit**

```bash
git add web/en/glossary/
git commit -m "refactor: move English glossary files into subdirectories"
```

---

### Task 3: Update sidebar.ts (Chinese)

**Files:**
- Modify: `web/.vuepress/sidebar.ts:70-103`

- [ ] **Step 1: Replace glossarySidebar definition**

Replace the existing `glossarySidebar` (lines 70-103) with:

```typescript
const glossarySidebar = [
  wayfindingZhGroup,
  {
    text: '地月空间术语词典（定义与概念检索）',
    collapsible: false,
    children: [
      '/glossary/',
      {
        text: '动力学与数学基础',
        collapsible: true,
        children: [
          '/glossary/dynamics/cr3bp',
          '/glossary/dynamics/qbcp',
          '/glossary/dynamics/ephemeris-model',
          '/glossary/dynamics/action-angle',
          '/glossary/dynamics/birkhoff-gustavson',
          '/glossary/dynamics/central-manifold',
          '/glossary/dynamics/poincare-section',
        ],
      },
      {
        text: '任务轨道',
        collapsible: true,
        children: [
          '/glossary/orbits/dro',
          '/glossary/orbits/nrho',
          '/glossary/orbits/eml-halo',
          '/glossary/orbits/dro-constellation',
        ],
      },
      {
        text: '导航技术与系统',
        collapsible: true,
        children: [
          '/glossary/navigation/xray-pulsar-navigation',
          '/glossary/navigation/gnss-weak-signal-navigation',
          '/glossary/navigation/inter-satellite-link-navigation',
          '/glossary/navigation/earth-moon-hybrid-navigation',
          '/glossary/navigation/orbit-identification',
          '/glossary/navigation/cislunar-spatiotemporal-reference',
          '/glossary/navigation/lunanet',
          '/glossary/navigation/moonlight',
          '/glossary/navigation/lunar-navigation-constellation',
          '/glossary/navigation/tiandu-1',
        ],
      },
      {
        text: '月球矿物',
        collapsible: true,
        children: [
          '/glossary/minerals/mg-changeite',
          '/glossary/minerals/ce-changeite',
        ],
      },
      {
        text: '项目与任务',
        collapsible: true,
        children: [
          '/glossary/programs/artemis',
          '/glossary/programs/lugre',
        ],
      },
      {
        text: '其他技术',
        collapsible: true,
        children: [
          '/glossary/other/pogo',
          '/glossary/other/exosims',
          '/glossary/other/space-traffic-management',
          '/glossary/other/starshade',
          '/glossary/other/nuclear-thermal-propulsion',
          '/glossary/other/cislunar-navigation-prospects',
        ],
      },
    ],
  },
]
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `cd web && npx tsc --noEmit .vuepress/sidebar.ts 2>&1 || true`
Expected: no errors (or only unrelated type issues)

- [ ] **Step 3: Commit**

```bash
git add web/.vuepress/sidebar.ts
git commit -m "refactor: update Chinese glossary sidebar to use subdirectory paths"
```

---

### Task 4: Update sidebar-en.ts (English)

**Files:**
- Modify: `web/.vuepress/sidebar-en.ts:47-71`

- [ ] **Step 1: Replace glossarySidebar definition**

Replace the existing `glossarySidebar` (lines 47-71) with:

```typescript
const glossarySidebar = [
  wayfindingEnGroup,
  {
    text: 'Cislunar glossary (terms & definitions)',
    collapsible: false,
    children: [
      '/en/glossary/',
      {
        text: 'Dynamics models',
        collapsible: true,
        children: [
          '/en/glossary/dynamics/cr3bp',
          '/en/glossary/dynamics/birkhoff-gustavson',
          '/en/glossary/dynamics/central-manifold',
          '/en/glossary/dynamics/action-angle',
          '/en/glossary/dynamics/poincare-section',
        ],
      },
      {
        text: 'Mission orbits',
        collapsible: true,
        children: [
          '/en/glossary/orbits/eml-halo',
          '/en/glossary/orbits/orbit-identification',
        ],
      },
      {
        text: 'Navigation',
        collapsible: true,
        children: [
          '/en/glossary/navigation/xray-pulsar-navigation',
        ],
      },
      {
        text: 'Lunar minerals',
        collapsible: true,
        children: [
          '/en/glossary/minerals/mg-changeite',
          '/en/glossary/minerals/ce-changeite',
        ],
      },
      {
        text: 'Other',
        collapsible: true,
        children: [
          '/en/glossary/other/starshade',
        ],
      },
    ],
  },
]
```

- [ ] **Step 2: Commit**

```bash
git add web/.vuepress/sidebar-en.ts
git commit -m "refactor: update English glossary sidebar to use subdirectory paths"
```

---

### Task 5: Update Chinese glossary README.md

**Files:**
- Modify: `web/glossary/README.md`

**Important:** Do NOT change markdown links like `/glossary/cr3bp/` — VuePress resolves these via `permalink` frontmatter, which stays unchanged. Only restructure the section headings to match the new 6 categories.

- [ ] **Step 1: Restructure "提纲" section headings**

The current README has sections: 动力学模型, 任务轨道, 仿真工具与航天技术, 导航技术, 月球矿物, 时空基准, 推进技术, 空间运行. Restructure to match the 6 sidebar categories:

1. **动力学与数学基础** — cr3bp, qbcp, ephemeris-model, birkhoff-gustavson, central-manifold, action-angle, poincare-section
2. **任务轨道** — dro, nrho, eml-halo, orbit-identification
3. **导航技术与系统** — xray-pulsar-navigation, cislunar-spatiotemporal-reference
4. **月球矿物** — mg-changeite, ce-changeite
5. **项目与任务** — artemis, lugre
6. **其他技术** — starshade, exosims, pogo, nuclear-thermal-propulsion, space-traffic-management

Keep all existing links unchanged (e.g., `[CR3BP](/glossary/cr3bp/)` stays as-is).

- [ ] **Step 2: Commit**

```bash
git add web/glossary/README.md
git commit -m "refactor: restructure Chinese glossary README sections to match new categories"
```

---

### Task 6: Update English glossary README.md

**Files:**
- Modify: `web/en/glossary/README.md`

**Important:** Do NOT change markdown links like `/en/glossary/cr3bp/` — VuePress resolves these via `permalink` frontmatter, which stays unchanged.

- [ ] **Step 1: Restructure "Outline" section headings**

Restructure to match new categories:
1. **Dynamical Models** — cr3bp, birkhoff-gustavson, central-manifold, action-angle, poincare-section
2. **Mission Orbits** — eml-halo, orbit-identification
3. **Navigation** — xray-pulsar-navigation
4. **Lunar Minerals** — mg-changeite, ce-changeite
5. **Other** — starshade

Keep all existing links unchanged.

- [ ] **Step 2: Commit**

```bash
git add web/en/glossary/README.md
git commit -m "refactor: restructure English glossary README sections to match new categories"
```

---

### Task 7: Build verification

**Files:**
- No file changes — verification only

- [ ] **Step 1: Run gen-sidebar to regenerate auto-generated files**

Run: `cd web && npm run gen-sidebar`
Expected: success, no errors

- [ ] **Step 2: Run full build**

Run: `cd web && npm run docs:build`
Expected: success, no broken links or missing pages

- [ ] **Step 3: Verify sidebar renders correctly**

Run: `cd web && npm run docs:dev` then check in browser:
- `/glossary/` — 6 categories visible in sidebar
- Click into each category — all pages load
- `/en/glossary/` — English sidebar with categories

- [ ] **Step 4: Spot-check cross-references**

Pick 2-3 glossary files with cross-references (e.g., `artemis.md`, `birkhoff-gustavson.md`) and verify the "相关术语" links still work. They use `/glossary/slug/` format which relies on permalink, so they should work without changes.

- [ ] **Step 5: Commit any fixes if needed**

```bash
git add -A
git commit -m "fix: resolve build issues from glossary reorganization"
```
