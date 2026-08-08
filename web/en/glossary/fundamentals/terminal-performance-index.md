---
title: Terminal Performance Index
description: A weighted objective function measuring the quality of the terminal soft landing state. The paper defines Omega as the weighted sum of absolute terminal velo...
keywords: Terminal Performance Index
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Terminal Performance Index
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Terminal Performance Index Explained | Term Definition"
  description: A weighted objective function measuring the quality of the terminal soft landing state. The paper defines Omega as the weighted sum of absolute terminal velo...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Terminal Performance Index Explained | Term Definition"
  description: A weighted objective function measuring the quality of the terminal soft landing state. The paper defines Omega as the weighted sum of absolute terminal velo...
  image: /logo.png
permalink: /en/glossary/fundamentals/terminal-performance-index/
---

# Terminal Performance Index

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A weighted objective function measuring the quality of the terminal soft landing state. The paper defines Omega as the weighted sum of absolute terminal velocity components and absolute position deviations (k1|VxL(tf)|+k2|VyL(tf)|+k3|VzL(tf)|+k4|xL(tf)-xLr|+k5|yL(tf)-yLr|+k6|zL(tf)-zLr|). During the shooting method solution process, this function is minimized with conjugate variable initial values as parameters to obtain the optimal solution satisfying terminal constraints. Weighting coefficients ki reflect the relative importance of each terminal error component.

## Application Value

This concept is fundamental to cislunar orbital mechanics and mission analysis, providing essential theoretical support for trajectory design and operational planning.

## Related Concepts

- Analytic Hierarchy Process
- [Costate Equations](/en/glossary/fundamentals/costate-equations/)
- Delta-v, Δv
- Continued Fraction

## References

- 周净扬和周荻 - 2007 - 月球探测器软着陆精确建模及最优轨道设计
