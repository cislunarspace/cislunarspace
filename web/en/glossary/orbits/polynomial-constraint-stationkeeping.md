---
title: Polynomial Constraint Station-Keeping
description: Detailed explanation of the polynomial constraint station-keeping method — principles, comparison with traditional methods, and applications in libration point orbit maintenance
keywords: Polynomial Constraint, Station-keeping, real-time, flexibility, libration point, Halo orbit, Lissajous orbit
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Polynomial Constraint Station-Keeping
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Polynomial Constraint Station-Keeping | Libration Point Orbit Control Method
  description: Detailed explanation of the polynomial constraint station-keeping method — principles, comparison with traditional methods, and applications in libration point orbit maintenance
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Polynomial Constraint Station-Keeping | Libration Point Orbit Control Method
  description: Detailed explanation of the polynomial constraint station-keeping method — principles, comparison with traditional methods, and applications in libration point orbit maintenance
  image: /logo.png
permalink: /en/glossary/orbits/polynomial-constraint-stationkeeping/
---

# Polynomial Constraint Station-Keeping

> Source: Guo Jianyu (2020) "Research on libration point orbit design and station-keeping strategies based on the two-dominant invariant manifold method"
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

**Polynomial Constraint Station-Keeping** is an orbit maintenance technique based on the two-dominant invariant manifold method. This method establishes nonlinear polynomial relationships among the three-directional motions of a periodic orbit near a libration point and uses these relationships as constraints for orbit correction and control, without requiring a pre-designed nominal orbit.

## Core Principles

### Comparison with Traditional Methods

Orbit maintenance methods are generally divided into two categories:

| Method Type | Description | Characteristics |
| :--- | :--- | :--- |
| **"Tight" control** | Design a target orbit; the spacecraft must return to within a certain range of the target orbit after deviation | High control accuracy, but depends on pre-designed nominal orbit |
| **"Loose" control** | No target orbit is specified; the spacecraft only needs to remain near the libration point | Higher computational cost, but more flexible |

### Polynomial Constraint Method

The innovation of the polynomial constraint station-keeping method lies in:

1. **No pre-designed nominal orbit required**: Corrections are based on the current orbital state of the spacecraft
2. **Real-time capability**: Uses real-time measured orbital states compared against polynomial constraints
3. **Flexibility**: Allows deviations within a certain range, better adapting to complex dynamical environments

### Mathematical Formulation

Let the three-directional states of a periodic orbit be $(x, y, z)$; then the polynomial constraint relationship is:

$$z = f(x, y) = \sum_{i,j} c_{ij} x^i y^j$$

When the actual orbital state deviates from the polynomial constraint, control corrections are applied to bring the orbit back to the constraint surface.

## Application Scenarios

The polynomial constraint station-keeping method is applicable to:

- **Halo orbit maintenance**: Long-term maintenance of Halo orbits at Earth-Moon L1/L2 points
- **Lissajous orbit maintenance**: Orbit control of quasi-periodic orbits
- **Complex dynamical environments**: Accounting for solar gravitational perturbations, lunar disturbances, and other influencing factors

## Simulation Verification

Guo Jianyu (2020) conducted simulation verification using the following models:

- Earth-Moon system nondimensional model
- Sun-Earth system dimensional model
- Dimensional model with lunar disturbances

Simulation results demonstrate that the polynomial constraint method exhibits good performance in both orbit maintenance accuracy and computational efficiency.

## Core Elements

### Mathematical Definition

Polynomial constraint station-keeping establishes nonlinear polynomial relationships among three-directional periodic orbit motions through the two-dominant invariant manifold method, using these as constraint conditions for real-time orbit correction without requiring a pre-designed nominal orbit.

### Key Properties

Compared to traditional "tight" and "loose" control methods, the polynomial constraint method offers better real-time capability and flexibility, better adapting to station-keeping requirements in complex dynamical environments.

### Numerical Methods

The polynomial relationships are used to compute target state values, and thruster corrections are applied based on measured state deviations, with typical correction periods ranging from several days to several weeks.

## Application Value

The polynomial constraint station-keeping method provides a new orbit control strategy for libration point missions with the following advantages:

- **Reduced computational complexity**: No need to solve complex trajectory optimization problems
- **Improved real-time performance**: Rapid correction based on current state
- **Enhanced robustness**: Better adaptability to model errors and measurement deviations

## Related Concepts

- [Two-Dominant Invariant Manifold Method](/en/glossary/dynamics/two-dominant-invariant-manifold/)
- [Reduced-Order Dynamics](/en/glossary/dynamics/reduced-order-dynamics/)
- [Halo Orbit](/en/glossary/orbits/halo-orbit/)
- [Lissajous Orbit](/en/glossary/orbits/lissajous-orbit/)
- [Libration Point Orbit Keeping](/en/glossary/orbits/orbit-keeping/)
- [Targeting Method](/en/glossary/dynamics/targeting-method/)

## References

- Guo J Y. Research on libration point orbit design and station-keeping strategies based on the two-dominant invariant manifold method[D]. Beijing University of Technology, 2020. (in Chinese)
- Breakwell J V, et al. A "broken-rails" steering law for stationkeeping of libration point orbits[R]. 1974.
- Simo C, Gomez G. Station keeping of a quasi-periodic halo orbit using invariant manifolds[C]. 1986.
