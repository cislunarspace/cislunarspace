---
title: Invariant Manifold (Invariant Manifold)
description: Detailed analysis of invariant manifold definition, stable and unstable manifold concepts, and their applications in libration point orbit design and low-energy transfers
keywords: Invariant Manifold, Stable Manifold, Unstable Manifold, Libration Point, Low-energy Transfer, Manifold Theory
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Invariant Manifold (Invariant Manifold)
  desc: Cislunar space research frontiers, terminology definitions, and tool resources in one-stop learning.
  image: /logo.png
og:
  title: Invariant Manifold Explained | Fundamentals of Libration Point Orbit Dynamics
  description: Detailed analysis of invariant manifold definition, stable and unstable manifold concepts, and their applications in libration point orbit design and low-energy transfers
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Invariant Manifold Explained | Fundamentals of Libration Point Orbit Dynamics
  description: Detailed analysis of invariant manifold definition, stable and unstable manifold concepts, and their applications in libration point orbit design and low-energy transfers
  image: /logo.png
permalink: /en/glossary/dynamics/invariant-manifold/
---

# Invariant Manifold (Invariant Manifold)

> Author: 天疆说
>
> Reference: 钱霙婧(2014)《地月空间拟周期轨道上航天器自主导航与轨道保持研究》
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An invariant manifold is a core concept in dynamical systems theory, referring to sets that remain unchanged during system evolution. For Hamiltonian systems, invariant manifolds are geometric structures in phase space that preserve system properties.

In the restricted three-body problem, invariant manifolds describe the manifold structure around periodic and quasi-periodic orbits near libration points, serving as key tools for understanding libration point dynamics and designing low-energy transfer orbits.

## Stable and Unstable Manifolds

### Stable Manifold

The stable manifold $W^s$ refers to trajectories that, starting from any point on this manifold, asymptotically converge to the target periodic orbit or equilibrium point as $t \to +\infty$:

$$W^s(x_0) = \{ x \in \mathcal{M} : \lim_{t \to +\infty} \phi^t(x) = x_0 \}$$

For collinear libration points (L₁, L₂, L₃), stable manifolds correspond to trajectories converging to the libration point along the unstable characteristic direction.

### Unstable Manifold

The unstable manifold $W^u$ refers to trajectories that, starting from any point on this manifold, asymptotically converge to the target periodic orbit or equilibrium point as $t \to -\infty$:

$$W^u(x_0) = \{ x \in \mathcal{M} : \lim_{t \to -\infty} \phi^t(x) = x_0 \}$$

For collinear libration points, unstable manifolds correspond to trajectories diverging from the libration point along the unstable characteristic direction.

## Dynamic Characteristics

### Manifold Structure of Libration Points

Collinear libration points (L₁, L₂, L₃) have a **saddle×center×center** dynamical structure:

| Direction | Stability | Corresponding Manifold |
|:---|:---|:---|
| Crossing direction | Saddle (unstable) | One-dimensional unstable manifold |
| In-plane perpendicular to line | Center (stable) | Two-dimensional stable/unstable manifold |
| Perpendicular to orbital plane | Center (stable) | Two-dimensional stable/unstable manifold |

### Geometric Form of Manifolds

Stable and unstable manifolds form "tube-like" structures in phase space:

- Stable manifold tubes: Starting near periodic orbit, spiraling inward to periodic orbit
- Unstable manifold tubes: Starting near periodic orbit, diverging outward

These tube structures constitute the main body of the **Interplanetary Superhighway**.

## Application in Orbit Design

### Low-Energy Transfer Orbit Design

Invariant manifolds can be used to design low-energy transfer orbits:

1. **Stable manifold transfer**: Starting from target orbit, propagate outward along stable manifold to find intersection with departure orbit
2. **Unstable manifold transfer**: Starting from departure orbit, converge inward along unstable manifold to target orbit

### Libration Point Orbit Generation

When designing periodic orbits near libration points:
1. Calculate initial estimate of periodic orbit in CR3BP model
2. Use stable/unstable manifolds to verify orbit stability
3. Use invariant manifolds as convergence directions for orbit design

### Weak Stability Boundary (WSB) Transfer

Belbruno's Weak Stability Boundary theory is built on invariant manifolds: WSB transfer utilizes the natural diffusion effect of unstable manifolds to achieve orbital transfer with extremely small energy cost.

## Application in Orbit Keeping

### Manifold Stability Analysis

By analyzing the relative positions of stable and unstable manifolds around periodic orbits, long-term orbital stability can be determined:

- Non-intersecting manifold tubes: Orbit may be stable
- Intersecting manifold tubes: Orbit exhibits chaotic behavior

### Control-Point Method

The control-point method for orbit keeping is essentially controlling spacecraft to return to periodic orbit along stable manifolds.

## Related Concepts

- [Libration Point](/en/glossary/dynamics/libration-point/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)
- [Weak Stability Boundary (WSB)](/en/glossary/other/weak-stability-boundary/)
- [Halo Orbit](/en/glossary/orbits/halo-orbit/)
- [Low Energy Transfer Orbit](/en/glossary/orbits/low-energy-transfer/)

## References

- Koon W S, Lo M W, Marsden J E, et al. Dynamical systems, the three-body problem and space mission design[M]. 2011.
- 钱霙婧. 地月空间拟周期轨道上航天器自主导航与轨道保持研究[D]. 哈尔滨工业大学, 2014.
