# Orbit Characterization Content Enhancement Design

**Date:** 2026-04-27

## Goal

Flesh out the orbit-design research direction pages with detailed content derived from two Qiao et al. (2025) papers, and add standardized navigation links between related pages.

## Scope

- `web/research-frontiers/directions/orbit-design/orbit-characterization.md` — major expansion
- `web/research-frontiers/directions/orbit-design/low-energy-transfer.md` — add structured sections
- `web/research-frontiers/directions/orbit-design/README.md` — expand background and navigation table
- English mirrors under `web/en/research-frontiers/directions/orbit-design/`

## Content Structure

### orbit-characterization.md

```
# 地月空间轨道参数表征

## 研究背景
- Orbit characterization importance for cislunar operations
- CRTBP vs real ephemeris model gap
- Need for standardized libration point orbit parameterization

## 关键技术

### 基于正则变换的轨道参数化
- Canonical transformation approach (Paper 1)
- 6 characteristic parameters: q1, p1, I2, θ2, I3, θ3
- Action-angle variables for orbit family classification

### 动力学替代模型
- Hamiltonian analysis of ephemeris model (Paper 2)
- Separating forced/free motions via canonical transformation
- Iterative frequency-analysis method
- 360-year dynamical substitutes for all 5 libration points

### 轨道编目与识别
- Poincaré section distribution maps
- Bayesian optimization for orbit identification
- Sensitivity analysis (robust to 100km/1m/s errors)

## 主要贡献
- Key contributions summary

## 参考文献
- Existing 3 references (unchanged)

## 相关链接
- ↑ 轨道设计与优化 (direction README)
- ↔ 低能转移轨道 (sibling subtopic)
```

### low-energy-transfer.md

Add structured sections (lighter content, no new papers):
- 研究背景
- 关键技术 (Halo/Lissajous orbits, invariant manifolds)
- 参考文献 (existing 2 references)
- 相关链接

### orbit-design/README.md

- Expand 研究背景 with more cislunar context
- Expand subtopic descriptions in navigation table
- Add DRO/NRHO as a placeholder subtopic entry

## Navigation Pattern

Standardized footer for all subtopic pages:

```markdown
---

**相关链接**
- ↑ [轨道设计与优化](./README.md) — 返回方向首页
- ↔ [低能转移轨道](./low-energy-transfer.md) — 相关子方向
```

English pages use same pattern with English labels.

## English Mirrors

- Create `web/en/research-frontiers/directions/orbit-design/orbit-characterization.md`
- Create `web/en/research-frontiers/directions/orbit-design/low-energy-transfer.md`
- Update `web/en/research-frontiers/directions/orbit-design/README.md`
- Update English sidebar to include subtopic children

## Implementation Order

1. Expand `orbit-characterization.md` (Chinese)
2. Expand `low-energy-transfer.md` (Chinese)
3. Update `orbit-design/README.md` (Chinese)
4. Create English mirror files
5. Update English sidebar-en.ts
6. Build verification
