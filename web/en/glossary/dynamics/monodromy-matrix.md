---
title: Monodromy Matrix
description: Detailed analysis of the definition, eigenvalue structure, and applications of the Monodromy Matrix in periodic orbit analysis
keywords: Monodromy Matrix, Periodic Orbit, Stability Analysis, Eigenvalue, Floquet Theory
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Monodromy Matrix
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: "Monodromy Matrix Details | Stability Analysis of Periodic Orbits"
  description: Detailed analysis of the definition, eigenvalue structure, and applications of the Monodromy Matrix in periodic orbit analysis
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Monodromy Matrix Details | Stability Analysis of Periodic Orbits"
  description: Detailed analysis of the definition, eigenvalue structure, and applications of the Monodromy Matrix in periodic orbit analysis
  image: /logo.png
permalink: /en/glossary/dynamics/monodromy-matrix/
---

# Monodromy Matrix

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The monodromy matrix is the state transition matrix evaluated over one complete orbital period of a periodic orbit:

$$M = \Phi(t_0 + T, t_0)$$

where $T$ is the orbital period. It describes how small perturbations evolve after one full revolution and is the fundamental tool for analyzing periodic orbit stability.

## Eigenvalue Structure

For a Hamiltonian system like the CR3BP, the monodromy matrix has special eigenvalue structure:

- Eigenvalues come in reciprocal pairs: $(\lambda, 1/\lambda)$
- For a 6-dimensional system, there are 6 eigenvalues
- Two eigenvalues are always +1 (corresponding to the direction along the orbit and the energy integral)
- The remaining four eigenvalues determine orbital stability

| Eigenvalue Configuration | Stability |
| :--- | :--- |
| All on unit circle ($ | \lambda | = 1$) | Linearly stable |
| Real pair off unit circle | Unstable (hyperbolic) |
| Complex pair off unit circle | Unstable (complex hyperbolic) |

## Applications

The monodromy matrix is used for:

- **Stability classification**: Determining whether a periodic orbit is stable, unstable, or conditionally stable
- **Floquet analysis**: Decomposing perturbations into stable and unstable modal components
- **Orbit continuation**: Identifying bifurcation points where orbit families change character
- **Station-keeping design**: Floquet mode-based control strategies target unstable components

## Related Concepts

- [State Transition Matrix (STM)](/en/glossary/dynamics/state-transition-matrix/)
- [Stability Index](/en/glossary/dynamics/stability-index/)
- [Floquet Mode Method](/en/glossary/other/floquet-mode/)
- [Period-Doubling Bifurcation](/en/glossary/other/period-doubling-bifurcation/)

## References

- Chen Yuju. DRO Orbit Design and Control Research for Cislunar Space Situation Awareness[D]. 2024.
