---
title: Small Denominator
description: A situation in numerical computation where a denominator approaches zero. In the perturbation equations of unified orbital elements, as inclination i approaches 180°, the denominator of the 1/cos(i/2) factor approaches zero, causing the right-hand side of the equations to spike, forcing the integrator to dramatically reduce step size, and greatly increasing computation. This is the fundamental cause of computational efficiency degradation at i = 180°.
keywords: Small Denominator
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Small Denominator
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Small Denominator Explained | Term Definition"
  description: A situation in numerical computation where a denominator approaches zero. In the perturbation equations of unified orbital elements, as inclination i approaches 180°, the denominator of the 1/cos(i/2) factor approaches zero, causing the right-hand side of the equations to spike, forcing the integrator to dramatically reduce step size, and greatly increasing computation. This is the fundamental cause of computational efficiency degradation at i = 180°.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Small Denominator Explained | Term Definition"
  description: A situation in numerical computation where a denominator approaches zero. In the perturbation equations of unified orbital elements, as inclination i approaches 180°, the denominator of the 1/cos(i/2) factor approaches zero, causing the right-hand side of the equations to spike, forcing the integrator to dramatically reduce step size, and greatly increasing computation. This is the fundamental cause of computational efficiency degradation at i = 180°.
  image: /logo.png
permalink: /en/glossary/fundamentals/small-denominator/
---

# Small Denominator
> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A situation in numerical computation where a denominator approaches zero. In the perturbation equations of unified orbital elements, as inclination i approaches 180°, the denominator of the 1/cos(i/2) factor approaches zero, causing the right-hand side of the equations to spike, forcing the integrator to dramatically reduce step size, and greatly increasing computation. This is the fundamental cause of computational efficiency degradation at i = 180°.

## Application Value

The Small Denominator plays a significant role in cislunar space mission design, analysis, and control. In orbital design, it can be leveraged for transfer trajectory optimization; in navigation and control, it improves mission execution precision and reliability; in system analysis, it facilitates deeper understanding of complex multi-body dynamical behavior, guiding mission planning and risk assessment.


## Related Concepts

- [Lindstedt-Poincaré Series Expansion](/en/glossary/fundamentals/lindstedt-poincar-series-expansion/)
- [Prograde Orbit](/en/glossary/fundamentals/prograde-orbit/)
- [Strong Legendre Condition](/en/glossary/fundamentals/strong-legendre-condition/)
- [Unified Orbital Elements](/en/glossary/fundamentals/unified-orbital-elements/)


## References

- 适用于圆锥曲线的统一根数在地月空间目标轨道预报的应用