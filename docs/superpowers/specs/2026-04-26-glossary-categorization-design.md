# Glossary Categorization Design

## Problem

`web/glossary/` contains 31 markdown files stored flat, but only 4 are in the sidebar. The sidebar has 4 categories (动力学模型、任务轨道、导航技术、月球矿物), which is insufficient for the growing number of terms. New untracked files (artemis, lunanet, moonlight, tiandu-1, etc.) have no home.

## Solution

Reorganize glossary into 6 subdirectories by topic, update sidebar to match.

## Directory Structure

```
web/glossary/
├── README.md
├── dynamics/              (动力学与数学基础)
│   ├── cr3bp.md
│   ├── qbcp.md
│   ├── ephemeris-model.md
│   ├── action-angle.md
│   ├── birkhoff-gustavson.md
│   ├── central-manifold.md
│   └── poincare-section.md
├── orbits/                (任务轨道)
│   ├── dro.md
│   ├── nrho.md
│   ├── eml-halo.md
│   └── dro-constellation.md
├── navigation/            (导航技术与系统)
│   ├── xray-pulsar-navigation.md
│   ├── gnss-weak-signal-navigation.md
│   ├── inter-satellite-link-navigation.md
│   ├── earth-moon-hybrid-navigation.md
│   ├── orbit-identification.md
│   ├── cislunar-spatiotemporal-reference.md
│   ├── lunanet.md
│   ├── moonlight.md
│   ├── lunar-navigation-constellation.md
│   └── tiandu-1.md
├── minerals/              (月球矿物)
│   ├── mg-changeite.md
│   └── ce-changeite.md
├── programs/              (项目与任务)
│   ├── artemis.md
│   └── lugre.md
└── other/                 (其他技术)
    ├── pogo.md
    ├── exosims.md
    ├── space-traffic-management.md
    ├── starshade.md
    ├── nuclear-thermal-propulsion.md
    └── cislunar-navigation-prospects.md
```

`Figures/` stays at `web/glossary/Figures/` — no move needed.

## Sidebar Changes

### `sidebar.ts` (Chinese)

Replace `glossarySidebar` children with 6 collapsible groups:

| Group | Label | Files |
|-------|-------|-------|
| dynamics | 动力学与数学基础 | cr3bp, qbcp, ephemeris-model, action-angle, birkhoff-gustavson, central-manifold, poincare-section |
| orbits | 任务轨道 | dro, nrho, eml-halo, dro-constellation |
| navigation | 导航技术与系统 | xray-pulsar, gnss-weak-signal, inter-satellite-link, earth-moon-hybrid, orbit-id, spatiotemporal-ref, lunanet, moonlight, lunar-nav-constellation, tiandu-1 |
| minerals | 月球矿物 | mg-changeite, ce-changeite |
| programs | 项目与任务 | artemis, lugre |
| other | 其他技术 | pogo, exosims, stm, starshade, ntp, cislunar-navigation-prospects |

### `sidebar-en.ts` (English)

Same 6 groups, but only include English files that exist. Migrate existing English glossary files to matching subdirectories.

## File Migration

- Use `git mv` to preserve history
- Update image references in `.md` files: `./figures/` → `../figures/` (one level up)
- Update cross-references between glossary files if any exist
- Mirror the same structure in `web/en/glossary/`

## Build Pipeline

- Verify `gen-sidebar.js` handles nested glossary subdirectories
- Run `npm run docs:build` and confirm sidebar renders correctly
- Verify all pages route correctly after path changes

## Scope

In scope:
- Moving 31 Chinese + 12 English glossary files into subdirectories
- Updating sidebar.ts and sidebar-en.ts
- Fixing image and cross-file references
- Build verification

Out of scope:
- Adding new glossary content
- Changing sidebar-shared.ts wayfinding logic
- Modifying gen-sidebar.js (unless it breaks)
