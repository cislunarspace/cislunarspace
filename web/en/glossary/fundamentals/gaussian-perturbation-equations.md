---
title: Gaussian Perturbation Equations
description: A detailed analysis of the two forms of Gaussian perturbation equations (Type I and Type II), applicable scenarios, and physical characteristics
keywords: Gaussian Perturbation Equations, Gaussian Type I, Gaussian Type II, Perturbation Acceleration Decomposition
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Gaussian Perturbation Equations
  desc: "One-stop learning for cislunar space research frontiers, terminology, and tool resources."
  image: /logo.png
og:
  title: "Gaussian Perturbation Equations | Terminology Definition"
  description: A detailed analysis of the two forms of Gaussian perturbation equations and their applicable scenarios
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Gaussian Perturbation Equations | Terminology Definition"
  description: A detailed analysis of the two forms of Gaussian perturbation equations and their applicable scenarios
  image: /logo.png
permalink: /en/glossary/fundamentals/gaussian-perturbation-equations/
---

# Gaussian Perturbation Equations

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Gaussian perturbation equations are disturbed equations of motion expressed in terms of orbital elements. They represent the rate of change of each orbital element as a function of the six orbital elements and three orthogonal components of the perturbation acceleration. These equations were first established by Gauss during his study of the perturbation motion of the asteroid Pallas under Jupiter's gravitational influence. They are applicable to any conservative or non-conservative perturbation force, including thrust acceleration.

## Core Elements

### Gaussian Type I Equations

The perturbation acceleration is decomposed into a radial component $f_r$, a transverse component $f_u$, and an out-of-plane normal component $f_h$:

$$\left\{\begin{array}{l} \dot{a} = \frac{2}{n\sqrt{1-e^2}}[e\sin f \cdot f_r + (1+e\cos f)f_u] \\ \dot{e} = \frac{\sqrt{1-e^2}}{na}[\sin f \cdot f_r + (\cos f + \cos E)f_u] \\ \dot{i} = \frac{r\cos u}{na^2\sqrt{1-e^2}}f_h \\ \dot{\Omega} = \frac{r\sin u}{na^2\sqrt{1-e^2}\sin i}f_h \\ \dot{\omega} = \frac{\sqrt{1-e^2}}{nae}[-\cos f \cdot f_r + (1+\frac{r}{p})\sin f \cdot f_u] - \cos i \cdot \dot{\Omega} \\ \dot{M} = n - \frac{1-e^2}{nae}[(2e\frac{r}{p}-\cos f)f_r + (1+\frac{r}{p})\sin f \cdot f_u] \end{array}\right.$$

### Gaussian Type I Physical Characteristics

| Characteristic | Description |
|:---|:---|
| Orbit size and shape | Determined jointly by $f_r$ and $f_u$, independent of $f_h$ |
| Orbital plane orientation change | Determined solely by $f_h$, independent of $f_r$ and $f_u$ |
| $f_h$ at the node | Most significant effect on $i$, no effect on $\Omega$ |
| $f_h$ at $u=\pm90°$ | Most significant effect on $\Omega$, no effect on $i$ |

### Gaussian Type II Equations

The perturbation acceleration is decomposed into a tangential component $f_t$, a principal normal component $f_n$, and a binormal component $f_h$. This form is suitable for atmospheric drag analysis:

| Characteristic | Description |
|:---|:---|
| Orbit size change | Determined solely by the tangential component $f_t$ |
| Orbit shape and mean position | Determined jointly by $f_t$ and $f_n$ |
| Orbital plane orientation change | Determined solely by the binormal component $f_h$ |

### Usage Constraints

For near-circular orbits, the rates of change of $\omega$ and $M$ are typically very large. For near-equatorial orbits, the rates of change of $\Omega$ and $\omega$ are typically very large. The cause is that poor choice of variation parameters leads to denominators containing eccentricity and the sine of orbital inclination.

## Application Value

The Gaussian perturbation equations are the fundamental tool for analyzing the effects of arbitrary perturbation forces on orbits. Since they directly use perturbation acceleration components as input, they are suitable for analyzing non-conservative forces (such as atmospheric drag and thrust). During orbit capture and orbit maintenance, engine thrust acceleration can be approximately described using the Gaussian equations, and orbital element deviations can be eliminated through properly designed orbit control schemes.

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 刘林. 航天器轨道理论[M]. 国防工业出版社.
