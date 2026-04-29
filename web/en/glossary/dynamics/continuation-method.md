---
title: Continuation Method (Parameter Continuation)
description: Detailed analysis of the continuation method for computing orbit families in orbital mechanics
keywords: Continuation Method, Parameter Continuation, Orbit Family, Orbit Continuation, Bifurcation
author: Tianjiang Says
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Continuation Method (Parameter Continuation)
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Continuation Method Details | Tracing Orbit Families
  description: Detailed analysis of the continuation method for computing orbit families in orbital mechanics
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Continuation Method Details | Tracing Orbit Families
  description: Detailed analysis of the continuation method for computing orbit families in orbital mechanics
  image: /logo.png
permalink: /en/glossary/dynamics/continuation-method/
---

# Continuation Method

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The continuation method (parameter continuation) is a numerical technique for computing families of orbits by gradually varying a parameter (such as Jacobi constant, orbital amplitude, or period) and using each converged solution as the initial guess for the next computation. It is the primary tool for systematically exploring the orbit design space.

## Process

1. **Start** with a known orbit solution (e.g., a converged periodic orbit)
2. **Perturb** the parameter slightly (e.g., increase the Jacobi constant by a small amount)
3. **Compute** a new orbit using differential correction with the previous solution as initial guess
4. **Store** the converged solution
5. **Repeat** until the desired parameter range is covered or a bifurcation is detected

## Types

| Type | Description |
|:---|:---|
| Natural continuation | Vary one parameter along an orbit family |
| Pseudo-arclength continuation | Parameterize by arc length along the solution curve, allowing turning points |
| Branch switching | At bifurcation points, switch to a different orbit family |

## Applications

Continuation methods are essential for:

- **Orbit family mapping**: Computing DRO, Halo, Lissajous, and Lyapunov orbit families
- **Bifurcation analysis**: Identifying where orbit families branch or terminate
- **Design space exploration**: Systematically surveying available orbits for mission design
- **Stability characterization**: Tracking how stability indices change along an orbit family

## Related Concepts

- [Differential Correction Method](/en/glossary/dynamics/differential-correction/)
- [Shooting Method](/en/glossary/dynamics/shooting-method/)
- [Stability Index](/en/glossary/dynamics/stability-index/)
- [Period-Doubling Bifurcation](/en/glossary/other/period-doubling-bifurcation/)

## References

- Chen Yuju. DRO Orbit Design and Control Research for Cislunar Space Situation Awareness[D]. 2024.
