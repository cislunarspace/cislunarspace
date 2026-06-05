---
title: Solar Exposure Factor
description: Detailed analysis of the definition, calculation methods, and relationship with orbital parameters of the solar exposure factor
keywords: Solar Exposure Factor, eclipse, solar panel, orbit design
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Solar Exposure Factor
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Solar Exposure Factor | Terminology Definition
  description: Detailed analysis of the solar exposure factor definition and calculation methods
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Solar Exposure Factor | Terminology Definition
  description: Detailed analysis of the solar exposure factor definition and calculation methods
  image: /logo.png
permalink: /en/glossary/fundamentals/solar-exposure-factor/
---

# Solar Exposure Factor

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The solar exposure factor $K_S$ is the ratio of the time a satellite is illuminated by sunlight $T_S$ to the orbital period $T_0$, describing the satellite's sunlit conditions. The complementary quantity is the eclipse ratio $R_S = 1 - K_S$, which describes the proportion of time the satellite spends in Earth's shadow.

## Core Elements

### Basic Definition

$$K_S = \frac{T_S}{T_0} \leq 1$$

| Condition | $K_S$ | $R_S$ |
|:---|:---|:---|
| Full orbit in sunlight | 1 | 0 |
| Full orbit in eclipse (theoretically impossible) | 0 | 1 |
| General case | $0 < K_S < 1$ | $0 < R_S < 1$ |

### Angle Between Sunlight and Orbital Plane

$$\cos\gamma = \hat{h} \cdot \hat{r}_S$$

where $\hat{h}$ is the unit normal vector of the orbital plane and $\hat{r}_S$ is the unit vector in the Sun direction.

### Solar Exposure Factor for Special Cases

| Angle $\gamma$ | Solar Exposure Factor $K_S$ | Description |
|:---|:---|:---|
| $0°$ or $180°$ | 1 | Sunlight perpendicular to orbital plane, full orbit illuminated |
| $90°$ | $\frac{1}{2} + \frac{\alpha}{180°}$ | Sunlight in the orbital plane |

where $\alpha = \arcsin\frac{\sqrt{2a_Eh + h^2}}{a_E + h}$.

### Solar Exposure Factor for General Cases

When $\gamma \leq \alpha$ or $\gamma \geq 180° - \alpha$, $K_S = 1$ (full orbit illuminated). Otherwise:

$$K_S = \frac{1}{2} + \frac{1}{180°}\arcsin\frac{\sin\alpha}{\sin\gamma}$$

The solar exposure factor depends on the orbital elements $i$, $\Omega$, $h$, as well as the solar ecliptic longitude $\lambda_S$ and the obliquity of the ecliptic $\varepsilon_S$.

### Solar Panel Efficiency

$$C = K_S \cos\zeta$$

where $\zeta$ is the angle between the solar panel normal and the sunlight direction.

## Application Value

The solar exposure factor directly affects the power supply capability of onboard solar cells and the design of the satellite thermal control system. In orbit design, it is necessary to ensure that the satellite has sufficient sunlit time to maintain normal power system operation. For orbits with prolonged eclipse periods (such as the Earth shadow phase of low-orbit satellites), batteries must be equipped to sustain power during eclipse.

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
