---
title: Stability Index
description: Detailed analysis of the definition, calculation methods, and applications of stability indices in periodic orbit analysis
keywords: Stability Index, nu, L, Monodromy Matrix, Orbital Stability, Periodic Orbit
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Stability Index
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Stability Index Details | Quantitative Measure of Orbital Stability
  description: Detailed analysis of the definition, calculation methods, and applications of stability indices in periodic orbit analysis
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Stability Index Details | Quantitative Measure of Orbital Stability
  description: Detailed analysis of the definition, calculation methods, and applications of stability indices in periodic orbit analysis
  image: /logo.png
permalink: /en/glossary/dynamics/stability-index/
---

# Stability Index

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The stability index is a quantitative measure of the stability of a periodic orbit, derived from the eigenvalues of the monodromy matrix. Two common stability indices are used:

### $\nu$ Stability Index

For eigenvalues on the unit circle ($\lambda = e^{i\theta}$):

$$\nu = |\cos \theta| = \frac{1}{2}|\lambda + 1/\lambda|$$

- $\nu < 1$: orbit is linearly stable
- $\nu = 1$: marginal stability (bifurcation point)
- $\nu > 1$: orbit is unstable

### $L$ Stability Index

$$L = \frac{1}{2}\left(|\lambda_{max}| + \frac{1}{|\lambda_{max}|}\right)$$

where $\lambda_{max}$ is the eigenvalue with the largest magnitude.

- $L = 1$: orbit is stable
- $L > 1$: orbit is unstable; larger $L$ means more unstable

## Applications

Stability indices are used throughout periodic orbit analysis:

| Application | How Stability Index is Used |
|:---|:---|
| Orbit family characterization | Plotting $\nu$ or $L$ vs. orbit parameter reveals stable/unstable regions |
| Bifurcation detection | $\nu = 1$ or $L = 1$ indicates bifurcation points |
| Station-keeping planning | Higher instability requires more frequent or larger corrections |
| Orbit selection | Prefer orbits with lower stability indices for long-duration missions |

## Related Concepts

- [Monodromy Matrix](/en/glossary/dynamics/monodromy-matrix/)
- [Floquet Mode Method](/en/glossary/other/floquet-mode/)
- [Period-Doubling Bifurcation](/en/glossary/other/period-doubling-bifurcation/)
- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/dro/)

## References

- Chen Yuju. DRO Orbit Design and Control Research for Cislunar Space Situation Awareness[D]. 2024.
