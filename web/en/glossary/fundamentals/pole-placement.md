---
title: Pole Placement
description: "A classical control design method in linear systems theory: by choosing state feedback gain matrix K, eigenvalues (poles) of closed-loop system A+BK are placed at desired locations in the complex plane."
keywords: Pole Placement, state feedback, eigenvalue, linear control, discrete system
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Pole Placement
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Pole Placement Explained | Term Definition
  description: "A classical control design method: by choosing state feedback gain matrix K, eigenvalues of closed-loop system A+BK are placed at desired locations in the complex plane."
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Pole Placement Explained | Term Definition
  description: "A classical control design method: by choosing state feedback gain matrix K, eigenvalues of closed-loop system A+BK are placed at desired locations in the complex plane."
  image: /logo.png
permalink: /en/glossary/fundamentals/pole-placement/
---

# Pole Placement

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A classical control design method in linear systems theory: by choosing a state feedback gain matrix K, the eigenvalues (poles) of the closed-loop system A+BK are placed at desired locations in the complex plane. For discrete systems, the necessary and sufficient condition for convergence is that all closed-loop poles lie inside the unit circle. The paper applies this to the time-invariant transformed system, placing poles at 1/20 and i/20, achieving error convergence to a mean of 0.062 km within 2-3 Halo orbit periods.

## Application Value

Pole placement is the core method for orbit maintenance control. During long-term operation of halo orbits, spacecraft are affected by various perturbation factors and orbits gradually deviate from nominal trajectories. Through state feedback control, placing closed-loop poles at specific locations in the complex plane ensures exponential error convergence. In discrete systems, placing poles inside the unit circle and near its center balances noise amplification suppression and convergence speed. This method has wide applications in lunar satellite navigation, communications satellite attitude control, and artificial satellite orbit maintenance, representing a fundamental technique control engineers must master.


## Related Concepts

- [State Feedback](/en/glossary/fundamentals/state-feedback/)
- [Eigenvalue](/en/glossary/fundamentals/eigenvalue/)
- [Halo Orbit](/en/glossary/orbits/halo-orbit/)
- [Linear Periodic System](/en/glossary/fundamentals/linear-periodic-system/)


## References

- Xu Ming and Xu Shijie - 2008 - Linear Periodic Control Strategy for Halo Orbit Maintenance
