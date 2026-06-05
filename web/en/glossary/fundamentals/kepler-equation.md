---
title: Kepler's Equation
description: A detailed analysis of Kepler's equation — the relationship between eccentric anomaly and mean anomaly, solution algorithms, and application in orbit prediction
keywords: Kepler equation, eccentric anomaly, mean anomaly, Newton iteration, orbit prediction, orbital period
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Kepler's Equation
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "Kepler's Equation | Terminology Definition"
  description: A detailed analysis of Kepler's equation — its definition, solution algorithms, and application in orbit prediction
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Kepler's Equation | Terminology Definition"
  description: A detailed analysis of Kepler's equation — its definition, solution algorithms, and application in orbit prediction
  image: /logo.png
permalink: /en/glossary/fundamentals/kepler-equation/
---

# Kepler's Equation

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Kepler's equation is the transcendental equation that relates flight time on an elliptical orbit to the eccentric anomaly:

$$M = E - e\sin E$$

where $M = n(t - \tau)$ is the mean anomaly, $E$ is the eccentric anomaly, $e$ is the eccentricity, $n = \sqrt{\mu_E/a^3}$ is the mean motion, and $\tau$ is the time of perigee passage. This equation is the key tool for determining the sixth integration constant needed to fully solve the two-body equations of motion.

## Core Elements

### Three Anomalies

| Anomaly | Symbol | Definition | Characteristics |
|:---|:---|:---|:---|
| True anomaly | $f$ | Central angle between the spacecraft and perigee | Directly describes position; varies non-uniformly |
| Eccentric anomaly | $E$ | Central angle of the corresponding point on the auxiliary circle | Related to $f$ through the half-angle formula |
| Mean anomaly | $M$ | $n(t-\tau)$; a fictitious angle that varies uniformly | Proportional to time |

Relationships among the three: when $f = 0°$ or $180°$, $M = E = f$; when $f \in (0°, 180°)$, $M < E < f$; when $f \in (180°, 360°)$, $M > E > f$. The larger the eccentricity, the greater the discrepancy.

### Solution Algorithms

Common methods for finding the eccentric anomaly $E$ from the elapsed time (inverse solution of Kepler's equation):

| Method | Iteration Formula | Applicable Scenario |
|:---|:---|:---|
| Simple iteration | $E_{k+1} = M + e\sin E_k$ | Low-eccentricity orbits |
| Newton-Raphson | $E_{k+1} = E_k - \frac{E_k - e\sin E_k - M}{1 - e\cos E_k}$ | General purpose; fast convergence |
| Series expansion | $E = M + e\sin M + \frac{e^2}{2}\sin 2M + \cdots$ | Low-eccentricity; analytical expression |

### Orbital Period

From Kepler's equation, the orbital period is:

$$T = \frac{2\pi}{n} = 2\pi\sqrt{\frac{a^3}{\mu_E}}$$

This is Kepler's third law: the orbital period depends solely on the semi-major axis. The minimum orbital period for an artificial Earth satellite is approximately 84.3 minutes.

## Application Value

Kepler's equation is the central equation for orbit prediction. Given the time of perigee passage and the orbital elements, it allows computation of the eccentric anomaly at any time, from which the true anomaly and position can be derived. In element-based orbit prediction, solving Kepler's equation is the critical step. Analogous time equations exist for parabolic orbits (Barker's equation) and hyperbolic orbits (hyperbolic time equation).

## Related Concepts

- [True Anomaly](/en/glossary/fundamentals/true-anomaly/)
- [Orbital Elements](/en/glossary/fundamentals/orbital-elements/)
- [Two-Body Problem](/en/glossary/fundamentals/two-body-problem/)
- [Vis-Viva Equation](/en/glossary/fundamentals/vis-viva-equation/)

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
