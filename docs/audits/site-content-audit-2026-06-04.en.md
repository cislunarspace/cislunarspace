[简体中文](site-content-audit-2026-06-04.md) | English

# Site Content Audit: 2026-06-04

> Generated from parallel sub-agent audit of `web/` content site. Covers bilingual mirror gaps, broken links, translation quality, factual risks, and automation follow-ups.

## Audit Scope and Rules

- **Scope**: `web/` content site (Chinese pages, English mirrors, glossary, resource/tool pages, special pages).
- **English mirror policy**: strict mirror. Chinese content pages must have corresponding `web/en/` pages unless documented as intentionally Chinese-only or component-handled.
- **Link policy**: internal links and image paths treated as confirmed issues when statically resolvable as missing/malformed. External links were not mass-fetched.
- **Translation quality**: page-level issues preferred.
- **Factual policy**: obvious stale/wrong claims confirmed; high-risk claims needing domain judgment listed under Needs Review.

## Priority Legend

- **P0**: severe site quality failure, core user-visible breakage, clearly wrong high-impact attribution/URL.
- **P1**: strict English mirror gaps, core broken links, serious translation/content parity problems.
- **P2**: local broken links, metadata/frontmatter inconsistencies, ordinary page-level translation issues.
- **P3**: polish, wording, metadata, SEO, formatting, low-risk cleanup.

## Confirmed Issues

### ISSUE-001: Large glossary/fundamentals English mirror gap

**Priority**: P0 | **Type**: coverage-gap | **Area**: glossary/fundamentals | **Mode**: batch

90 Chinese fundamentals glossary pages missing English mirrors. Representative:
- `web/glossary/fundamentals/vis-viva-equation.md:2`: `title: 活力公式（Vis-Viva Equation）`
- `web/glossary/fundamentals/kepler-equation.md:2`: `title: 开普勒方程（Kepler's Equation）`
- `web/glossary/fundamentals/two-body-problem.md:2`: `title: 二体问题（Two-Body Problem）`
- `web/glossary/fundamentals/orbital-elements.md:2`: `title: 轨道根数（Orbital Elements）`
- `web/glossary/fundamentals/hohmann-transfer.md:2`: `title: 霍曼转移（Hohmann Transfer）`
- `web/glossary/fundamentals/sun-synchronous-orbit.md:2`: `title: 太阳同步轨道（Sun-Synchronous Orbit）`

→ **GitHub Issue**: #69

---

### ISSUE-002: Non-fundamentals glossary English mirror gaps

**Priority**: P0 | **Type**: coverage-gap | **Area**: glossary | **Mode**: batch

- `glossary/dynamics`: 17 missing (e.g., `pursuit-evasion-game.md:2`, `pontryagin-principle.md:2`, `reachable-set.md:2`)
- `glossary/navigation`: 8 missing (e.g., `autonomous-navigation.md:2`, `extended-kalman-filter.md:2`)
- `glossary/doctrine`: 7 missing (e.g., `asat.md:2`, `directed-energy-weapon.md:2`)
- `glossary/orbits`: 9 missing (e.g., `axial-orbit.md:2`, `butterfly-orbit.md:2`, `horseshoe-orbit.md:2`)
- `glossary/organizations`: 5 missing (`isro.md`, `kasa.md`, `true-anomaly-company.md`, etc.)
- `glossary/other`: 5 missing (`gslv.md`, `pslv.md`, etc.)
- `glossary/observation`: 2 missing
- Path mismatch: `orbit-identification.md` in navigation (CN) vs orbits (EN)
- Naming mismatch: `true-anomaly-company.md` (CN) vs `true-anomaly.md` (EN)

→ **GitHub Issues**: #71, #64

---

### ISSUE-003: Research-frontiers and special pages missing English mirrors

**Priority**: P1 | **Type**: coverage-gap | **Area**: research-frontiers, cislunar-orbits, root pages | **Mode**: batch

- 14 research-frontiers Chinese pages missing English mirrors (institutions: npu, thu, dfhscl, nudt, seu; security-governance: strategy, orbital-game; simulation; templates)
- `web/cislunar-orbits/nrho/ephemeris-computation.md:2`: `title: 多圈 NRHO 星历模型计算`
- `web/references.md` and `web/dialectic.md`: component wrappers needing policy decision
- EN-only orphan pages: `en/research-frontiers/directions.md`, `en/research-frontiers/institutions.md`

→ **GitHub Issues**: #77, #63

---

### ISSUE-004: Broken absolute glossary links

**Priority**: P1 | **Type**: broken-link | **Area**: glossary | **Mode**: batch

- Chinese: 92 broken links across 54 unique missing targets
- English: 49 broken links across ~27 missing targets
- High-traffic: `/glossary/orbits/short-period-orbit/` (horseshoe-orbit.md:92), `/glossary/programs/lunar-base/` (lunar-lander.md:133), `/en/glossary/dynamics/q-law` (5 refs)

→ **GitHub Issue**: #78

---

### ISSUE-005: Broken relative link in contributors page

**Priority**: P2 | **Type**: broken-link | **Area**: docs | **Mode**: single-page

- `docs/contributors.md:21` → `./README.md` (wrong relative path)

---

### ISSUE-008: English pages contain Chinese text, metadata, inconsistent author rendering

**Priority**: P1 | **Type**: translation-quality, untranslated-chinese | **Area**: web/en | **Mode**: batch

- Chinese parentheticals in EN titles: `lyapunov-orbit.md:2`, `free-return-trajectory.md:2`, `parking-orbit.md:2`, `cislunar-space.md:2`, `leo.md:2`
- Redundant EN parentheticals: `co-state-normalization.md:2` (Co-state Normalization (Co-state Normalization))
- Author inconsistency: `天疆说` vs `Tianjiang Says` vs `Tianjiang说` across ~115 files
- Chinese `wechatShare.desc` in EN pages: `force-design.md:10`, `lockheed-martin.md:10`, `spacex.md:10`, etc.
- Chinese fragments in EN body: `altitude-regulation.md:50` (Altitude囊), `regional-station-keeping.md:52` (Low-drag外形), `co-state-normalization.md:85` (赵海涵), `heteroclinic-orbit-transfer.md:27,53` (郭建宇), `differential-games.md:29` (张乘铭)
- Chinese references in EN pages: `barycentric-synodic.md:97`, `j2000-coordinate.md:96`, `grc.md:94`, `differential-games.md:77`, `heteroclinic-orbit-transfer.md:113`, `co-state-normalization.md:102`, `bang-bang-control.md:100`

→ **GitHub Issues**: #76, #65

---

### ISSUE-009: English DRO and Lyapunov pages substantially shorter

**Priority**: P1 | **Type**: content-mismatch | **Area**: glossary/orbits | **Mode**: batch

Chinese `dro.md` includes orbital parameter characteristics (lines 65–75), operational cost analysis (lines 81–98), A2PPO low-thrust transfer (lines 118–127). English omits all three. Chinese `lyapunov-orbit.md` includes Ly1/Ly2/Ly3 classification (lines 48–57) and Jacobi constant ranges (lines 58–68). English omits both.

→ **GitHub Issue**: #79

---

### ISSUE-010: Background section relative links broken

**Priority**: P1 | **Type**: broken-link | **Area**: background | **Mode**: single-page

- `background/control/optimal-control.md:64` → `../math/pseudospectral/` (missing)
- `background/control/optimal-control.md:66` → `./mpc/` (missing)
- `background/mechanics/perturbation.md:62` → `./hill-three-body/` (missing)
- `background/math/shooting-method.md:51` → `../continuation/` (wrong dir, should be `./continuation/`)
- EN versions have identical broken links

→ **GitHub Issue**: #74

---

### ISSUE-011: Resource/tool pages with stale or incorrect URLs/versions

**Priority**: P1 | **Type**: outdated-tool-description, incorrect-url | **Area**: resources-tools | **Mode**: batch

- `basilisk.md:20`: official site `https://bsk-lair.com/` (should be `https://avslab.github.io/basilisk/`)
- `basilisk.md:22`: GitHub `https://github.com/AstroYuvPA/basilisk` (should be `https://github.com/AVSLab/basilisk`)
- `gmat.md:39`: `最新版本：R2024a` (should be R2026a)
- `datasets.md:60`: DE430 labeled latest; DE440/DE441 absent

→ **GitHub Issue**: #66

---

### ISSUE-012: Typo in public image directory `envrionment`

**Priority**: P2 | **Type**: url-format | **Area**: what-is-cislunarspace | **Mode**: single-page

`environment.md:37,110,120` references `/envrionment/...`. Works because `.vuepress/public/envrionment/` has same typo. Should be `environment/`.

→ **GitHub Issue**: #75

---

## Needs Review Candidates

### ISSUE-013: Helium-3 energy equivalence claim

**Priority**: P1 | **Type**: factual-review | **Area**: what-is-cislunarspace | **Mode**: manual-review

`what-is-cislunarspace/README.md:41`: `30t氦-3产生的能量就可满足美国1年的能源需求`. Widely cited alternative: `100吨氦-3便能提供全世界使用一年的能源总量`. At US share ~15–17% of global energy, 30 tons appears inconsistent. Needs primary-source verification.

→ **GitHub Issue**: #67

---

### ISSUE-014: Claim of most complete lunar data platform

**Priority**: P2 | **Type**: factual-review | **Area**: resources-tools | **Mode**: manual-review

`digital-lunar.md:14`: `目前国际上月球探测数据最齐全的云平台`. Unverifiable without comparing all international platforms. Both `digital-lunar.md` and `naoc-data.md` reference `moon.bao.ac.cn`.

→ **GitHub Issue**: #67

---

### ISSUE-015: HIT satellite count and world-first claims

**Priority**: P3 | **Type**: factual-review | **Area**: research-frontiers/institutions | **Mode**: manual-review

`hit.md:33`: 36 satellites as of 2025-05 (may have changed). `hit.md:43`: world's first microsatellite independently completing lunar transfer (well-supported by Xinhua/CNKI). The broader claim of first university to send spacecraft to lunar orbit is harder to verify globally.

→ **GitHub Issue**: #67

---

### ISSUE-016: Chinese-named image files in English pages

**Priority**: P3 | **Type**: translation-quality | **Area**: glossary/orbits | **Mode**: batch

`dro.md:36,40` and `nrho.md:35` reference Chinese-named image files. Cross-references dropped in EN Lyapunov and DRO pages.

→ **GitHub Issues**: #81, #68

---

## Engineering Follow-up Issues

### ISSUE-017: Bilingual mirror gap checker

→ **GitHub Issue**: #61

### ISSUE-018: Internal link/image resolver

→ **GitHub Issue**: #62

### ISSUE-020: English-locale Chinese-character scanner

→ **GitHub Issue**: #76

### ISSUE-021: Resources/tools stale-version review workflow

→ **GitHub Issue**: #66

---

## Out-of-scope

One sub-agent output contained issues for `src/analysis/base.py`, `src/utils/github.py`, and `src/tasks/robot.py`. These were excluded as they do not belong to the VuePress content repository.

## Implementation Roadmap

See `docs/audits/implementation-roadmap.md` for phase-by-phase execution plan and agent assignment strategy.
