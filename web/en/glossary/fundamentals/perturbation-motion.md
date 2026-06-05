---
title: Perturbation Motion
description: A detailed analysis of perturbation motion definition, classification (secular and periodic perturbations), and its relationship with unperturbed motion
keywords: Perturbation Motion, Secular Perturbation, Periodic Perturbation, Perturbation Force, Unperturbed Motion
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Perturbation Motion
  desc: "One-stop learning for cislunar space research frontiers, terminology, and tool resources."
  image: /logo.png
og:
  title: "Perturbation Motion | Terminology Definition"
  description: A detailed analysis of perturbation motion definition and classification
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Perturbation Motion | Terminology Definition"
  description: A detailed analysis of perturbation motion definition and classification
  image: /logo.png
permalink: /en/glossary/fundamentals/perturbation-motion/
---

# Perturbation Motion

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Under the action of perturbation forces, the trajectory of an aerospace vehicle deviates from the ideal Keplerian orbit. The small additional motion of a satellite caused by perturbation forces is called perturbation motion. In contrast, the two-body motion is called unperturbed motion. Perturbation forces include non-spherical Earth gravity, lunar and solar gravitational attraction, atmospheric drag, and solar radiation pressure, all of which are small quantities relative to the Earth's central gravitational force.

## Core Elements

### Fundamental Forms of Perturbation

| Perturbation Type | Description | Characteristics |
|:---|:---|:---|
| Secular perturbation | Causes orbital elements to increase or decrease monotonically | Cumulative effect, irreversible |
| Long-period perturbation | Periodic perturbation with a period longer than the orbital period | Long cycle, sometimes treatable as secular |
| Short-period perturbation | Periodic perturbation with a period shorter than the orbital period | Returns to zero after one orbital period, non-cumulative |

### Classification of Perturbation Analysis Methods

| Category | Methods | Characteristics |
|:---|:---|:---|
| Special perturbation | Cowell's method, Encke's method, variation of parameters | Numerical integration, suitable for short-term precision prediction |
| General perturbation | Series expansion, mean element method, semi-analytical methods | Analytical or semi-analytical solutions, reveals physical mechanisms |

### Typical Perturbation Force Magnitudes (Low Earth Orbit)

| Perturbation Force | Magnitude | Nature |
|:---|:---|:---|
| $J_2$ (Earth oblateness) | $10^{-3}$ | Conservative |
| Atmospheric drag | $10^{-5}$ | Dissipative |
| Lunar-solar perturbation | $10^{-5}$~$10^{-7}$ | Conservative |
| Solar radiation pressure | $10^{-8}$ | Dissipative |

### Relationship with Unperturbed Motion

In unperturbed motion (the two-body problem), the size, shape, and orientation of the orbit all remain constant, following Kepler's laws. In reality, the Earth's shape and mass distribution are complex, causing gravitational deviation from the homogeneous sphere assumption. Additionally, the orbit is subject to lunar and solar gravitational attraction, atmospheric drag, and solar radiation pressure. These perturbation forces cause orbital elements to change over time, making the motion far more complex than the two-body problem.

## Application Value

Perturbation motion is the core research subject of orbital mechanics. By establishing perturbation motion equations, the effects of various perturbation forces on orbits can be analyzed, providing the theoretical foundation for orbit prediction, orbit control, and mission design. Perturbation analysis methods (special perturbation and general perturbation) are fundamental tools for spacecraft orbit determination and prediction.

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 刘林. 航天器轨道理论[M]. 国防工业出版社.
