---
title: True Anomaly
description: A detailed analysis of true anomaly — its definition, relationship with eccentric and mean anomalies, velocity characteristics, and role in orbit description
keywords: true anomaly, eccentric anomaly, mean anomaly, perigee, argument of latitude, orbital position
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: True Anomaly
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "True Anomaly | Terminology Definition"
  description: A detailed analysis of true anomaly — its definition and role in orbit description
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "True Anomaly | Terminology Definition"
  description: A detailed analysis of true anomaly — its definition and role in orbit description
  image: /logo.png
permalink: /en/glossary/fundamentals/true-anomaly/
---

# True Anomaly

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The true anomaly ($f$) is the angle between the eccentricity vector $\boldsymbol{e}$ (pointing toward perigee) and the spacecraft's position vector $\boldsymbol{r}$ within the orbital plane. It describes the instantaneous position of the spacecraft on the orbit. $f = 0°$ corresponds to perigee, $f = 180°$ corresponds to apogee, and $f$ varies from $0°$ to $360°$ over one orbital period.

## Core Elements

### Relationship with Orbital Position

The true anomaly directly determines the radial distance through the orbit equation:

$$r = \frac{a(1-e^2)}{1 + e\cos f}$$

| True Anomaly | Position | Radial Distance |
|:---|:---|:---|
| $f = 0°$ | Perigee | $r_p = a(1-e)$ |
| $f = 90°$ | End of semi-latus rectum | $r = p = a(1-e^2)$ |
| $f = 180°$ | Apogee | $r_a = a(1+e)$ |

### Relationship with Argument of Latitude

The argument of latitude $u$ is the angle between the position vector and the ascending node vector:

$$f = u - \omega$$

where $\omega$ is the argument of perigee. $u \in [-90°, 90°]$ corresponds to the ascending pass, and $u \in (90°, 270°)$ corresponds to the descending pass.

### Relationship with Eccentric Anomaly and Mean Anomaly

The half-angle relationship between true anomaly and eccentric anomaly $E$:

$$\tan\frac{f}{2} = \sqrt{\frac{1+e}{1-e}}\tan\frac{E}{2}$$

The true anomaly varies non-uniformly (faster near perigee, slower near apogee), whereas the mean anomaly $M = n(t-\tau)$ varies uniformly.

### Velocity Characteristics

The true anomaly determines the flight-path angle $\Theta$:

$$\tan\Theta = \frac{e\sin f}{1 + e\cos f}$$

When $f = 0°$ or $180°$, $\Theta = 0°$ (velocity is horizontal). When $\cos f = -e$, $|\Theta|$ reaches its maximum value of $\sin^{-1}e$.

## Application Value

The true anomaly is the most fundamental parameter for describing a spacecraft's position on its orbit. Through the orbit equation, the true anomaly maps directly to the radial distance. Through Kepler's equation, the true anomaly is linked to flight time. In orbit prediction, computing the true anomaly is the core step. In orbit design, the true anomaly at a maneuver point determines the direction and magnitude of the velocity increment.

## Related Concepts

- [Kepler's Equation](/en/glossary/fundamentals/kepler-equation/)
- [Orbital Elements](/en/glossary/fundamentals/orbital-elements/)
- [Vis-Viva Equation](/en/glossary/fundamentals/vis-viva-equation/)
- [Two-Body Problem](/en/glossary/fundamentals/two-body-problem/)

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
