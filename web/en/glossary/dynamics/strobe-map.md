---
title: Strobe Map
description: A time-fixed map used to simplify the computation of quasi-periodic orbits by reducing the problem to finding invariant curves under a discrete map.
keywords: strobe map, quasi-periodic orbits, Lissajous orbits, invariant curves, numerical continuation
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Strobe Map
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Strobe Map Details | Orbital Dynamics
  description: A time-fixed map used to simplify the computation of quasi-periodic orbits by reducing the problem to finding invariant curves under a discrete map.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Strobe Map Details | Orbital Dynamics
  description: A time-fixed map used to simplify the computation of quasi-periodic orbits by reducing the problem to finding invariant curves under a discrete map.
  image: /logo.png
permalink: /en/glossary/dynamics/strobe-map/
---

# Strobe Map

> Author: [CislunarSpace](https://cislunarspace.cn)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The strobe map is a time-fixed map used to simplify the computation of quasi-periodic orbits, such as Lissajous orbits near libration points. By sampling the state at fixed time intervals equal to the orbital period T, the strobe map φ_T maps an initial state to its state after one period. The problem of finding quasi-periodic orbits then reduces to finding invariant curves under this discrete map. Combined with Fourier series representation and Newton-like iteration, the strobe map enables efficient numerical computation and continuation of quasi-periodic orbit families.

## Key Properties

- Samples the flow at fixed time intervals, converting continuous dynamics to a discrete map.
- Periodic orbits correspond to fixed points of the map; quasi-periodic orbits correspond to invariant curves.
- Fourier series representation of invariant curves enables systematic numerical computation.
- Facilitates continuation of orbit families by tracking invariant curves as parameters vary.

## Related Concepts

- [Poincaré Map](/en/glossary/dynamics/poincare-map/)
- [Poincaré Section](/en/glossary/dynamics/poincare-section/)

## References

- Gómez, G., Mondelo, J. M., and Simó, C. "A Collocation Method for the Numerical Computation of Orbits in the Restricted Three Body Problem." *Physica D*, 157:283–322, 2001.
