---
title: SNOPT
description: A large-scale constrained optimization solver based on the Sequential Quadratic Programming (SQP) method, developed at UC San Diego. At each iteration it approximates the nonlinear programming problem
keywords: SNOPT, cislunar space, orbital mechanics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: SNOPT
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: SNOPT Explained | Term Definition
  description: A large-scale constrained optimization solver based on the Sequential Quadratic Programming (SQP) method, developed at UC San Diego. At each iteration it approximates the nonlinear programming problem
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: SNOPT Explained | Term Definition
  description: A large-scale constrained optimization solver based on the Sequential Quadratic Programming (SQP) method, developed at UC San Diego. At each iteration it approximates the nonlinear programming problem
  image: /logo.png
permalink: /en/glossary/other/snopt/
---

# SNOPT

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A large-scale constrained optimization solver based on the Sequential Quadratic Programming (SQP) method, developed at UC San Diego. At each iteration it approximates the nonlinear programming problem as a quadratic programming subproblem. Suitable for problems with equality and inequality constraints.

## Application Value

SNOPT based on序列二次planningmethod, 适合solve含等式和不等式constraint of 大规模optimizeproblem. In spacecraft轨迹optimize中, SNOPT 可有效process多constraint of 复杂optimizemission.

## Related Concepts

- [Asteroid Defense Constellation](/en/glossary/other/asteroid-defense-constellation/)
- [Dynamic Control Analysis Package](/en/glossary/other/dynamic-control-analysis-package/)
- [A search strategy that automatically halves the velocity correction and backtracks when differential correction iteration enters an erroneous region (integration reaches the fixed time limit without satisfying the flight path angle constraint). In the strongly nonlinear phase space around Halo orbits, standard differential correction tends to diverge or converge to large-impulse trajectories. Backstepping search progressively reduces the correction step size until the iteration escapes the erroneous region and finds a solution satisfying the termination condition, improving convergence robustness.](/en/glossary/other/in/)
- [Earth-to-Orbit Round-Trip System](/en/glossary/other/earthtoorbit-roundtrip-system/)

## References

- Gill, Murray & Saunders, 1997