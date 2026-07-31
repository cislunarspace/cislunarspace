---
title: Polyhedral Representation
description: "A method representing state components on invariant manifolds as piecewise linear functions of two parameters: the injection point time and the manifold time of"
keywords: Polyhedral Representation
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Polyhedral Representation
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Polyhedral Representation Explained | Term Definition"
  description: "A method representing state components on invariant manifolds as piecewise linear functions of two parameters: the injection point time and the manifold time of"
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Polyhedral Representation Explained | Term Definition"
  description: "A method representing state components on invariant manifolds as piecewise linear functions of two parameters: the injection point time and the manifold time of"
  image: /logo.png
permalink: /en/glossary/dynamics/polyhedral-representation/
---

# Polyhedral Representation

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A method representing state components on invariant manifolds as piecewise linear functions of two parameters: the injection point time and the manifold time of flight. By dividing the parameter plane into a rectangular grid and using four triangles for linear interpolation within each rectangle, rapid computation of state quantities is achieved. This representation is geometrically intuitive, simple to implement, and achieves engineering-adequate accuracy (92%~93% of regions with error less than 5m/s), applicable to trajectory optimization and rendezvous problems.

## Application Value

In orbit design and optimization, this concept is used to analyze spacecraft motion characteristics in the cislunar multi-body gravitational field, providing a theoretical basis for low-energy transfer trajectory design.

## Related Concepts

- [Lorillo Stability Criterion](/en/glossary/dynamics/lorillo-stability-criterion/)
- [Stable Eigenvector](/en/glossary/dynamics/stable-eigenvector/)
- [Lunar Fly-by Method](/en/glossary/dynamics/lunar-fly-by-method/)
- [Reachability Set](/en/glossary/dynamics/reachability-set/)

## References

- Pontani和Teofilatto - 2016 - Polyhedral representation of invariant manifolds applied to orbit transfers in the Earth–moon system
