---
title: Indirect Methods
description: A class of trajectory optimization methods that derives first-order necessary conditions (co-state equations, Hamiltonian, etc.) via variational calculus and Po
keywords: Indirect Methods
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Indirect Methods
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Indirect Methods Explained | Term Definition"
  description: A class of trajectory optimization methods that derives first-order necessary conditions (co-state equations, Hamiltonian, etc.) via variational calculus and Po
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Indirect Methods Explained | Term Definition"
  description: A class of trajectory optimization methods that derives first-order necessary conditions (co-state equations, Hamiltonian, etc.) via variational calculus and Po
  image: /logo.png
permalink: /en/glossary/dynamics/indirect-methods/
---

# Indirect Methods

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A class of trajectory optimization methods that derives first-order necessary conditions (co-state equations, Hamiltonian, etc.) via variational calculus and Pontryagin's maximum principle, then solves the resulting two-point boundary value problem via shooting methods. Indirect methods offer high accuracy and convergence order but are sensitive to initial guesses, with co-state initial values difficult to select.

## Application Value

This concept plays a key role in trajectory transfer design, helping evaluate transfer costs and flight time to provide quantitative basis for mission trade studies. Combined with global search algorithms, multiple solution families and Pareto frontiers can be identified to guide orbital design decisions.

## Related Concepts

- [Differential Correction](/glossary/fundamentals/differential-correction/)
- [Indirect Methods](/glossary/dynamics/indirect-methods/)
- [Resonance Condition](/glossary/dynamics/resonance-condition/)
- [Low Thrust Equilibrium Point](/glossary/dynamics/low-thrust-equilibrium-point/)

## References

- Vellutini & Avanzini, 2014, Shape-based design of low-thrust trajectories to cislunar lagrangian point
