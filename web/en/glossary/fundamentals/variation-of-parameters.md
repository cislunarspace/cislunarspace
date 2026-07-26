---
title: Variation of Parameters
description: A detailed analysis of the variation of parameters method, its definition, historical development, and central role in orbital perturbation analysis
keywords: Variation of Parameters, Variation of Constants, Osculating Orbit, Orbital Element Variation Equations
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Variation of Parameters
  desc: "One-stop learning for cislunar space research frontiers, terminology, and tool resources."
  image: /logo.png
og:
  title: "Variation of Parameters | Terminology Definition"
  description: A detailed analysis of the variation of parameters method and its application in orbital perturbation analysis
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Variation of Parameters | Terminology Definition"
  description: A detailed analysis of the variation of parameters method and its application in orbital perturbation analysis
  image: /logo.png
permalink: /en/glossary/fundamentals/variation-of-parameters/
---

# Variation of Parameters

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The variation of parameters (also known as the variation of constants) is an orbital perturbation analysis method first proposed by Euler in 1748 and later refined and published by Lagrange in 1808. This method uses orbital elements (or canonical parameters) as variables, treating the osculating orbit as continuously changing. The osculating orbit is tangent to the actual orbit at any instant with identical velocity. By numerically integrating the variation equations, the osculating orbit at any given instant can be obtained, thereby determining the actual trajectory. The fundamental equation is:

$$\dot{\boldsymbol{\sigma}} = \mathrm{f}(\boldsymbol{\sigma}, t, \varepsilon)$$

where $\boldsymbol{\sigma}$ is the vector of six orbital elements or canonical parameters, and $\varepsilon$ is a small parameter of the same order of magnitude as the perturbation acceleration.

## Core Elements

### Comparison with Other Special Perturbation Methods

| Method | Variables | Characteristics |
| :--- | :--- | :--- |
| Cowell's method | Position and velocity | Direct integration, simplest principle, wide applicability |
| Encke's method | Position and velocity deviations | Uses osculating orbit as reference, deviations are small quantities |
| Variation of parameters | Orbital elements | Osculating orbit changes continuously, larger step sizes permissible |

### Core Principles

- The osculating orbit is tangent to the actual orbit at any instant, with identical velocity
- Orbital elements or canonical parameters change much more slowly than position and velocity, allowing larger integration step sizes
- The choice of variation parameters should avoid singularities in the equations of motion as much as possible

### Typical Variation Equations

| Equation Type | Applicable Scenario | Characteristics |
| :--- | :--- | :--- |
| Gaussian Type I | Arbitrary perturbation forces | Perturbation force decomposed into radial, transverse, and normal components |
| Gaussian Type II | Atmospheric drag analysis | Perturbation force decomposed into tangential, principal normal, and binormal components |
| Lagrangian type | Conservative perturbation forces | Expressed via partial derivatives of the disturbing function |

### Historical Significance

The variation of parameters was the only successful method for handling orbital perturbation problems before the Cowell and Encke methods appeared. It occupies a central position in celestial mechanics perturbation theory and remains one of the most important methods for studying spacecraft orbital perturbations to this day.

## Application Value

The variation of parameters is the foundational method for orbital perturbation analysis. Through this method, Gaussian-type and Lagrangian-type perturbation equations can be established to analyze the effects of various perturbation forces on orbits, including Earth's oblateness, atmospheric drag, solar radiation pressure, and three-body gravitational attraction. In general perturbation methods, both the series expansion method and the mean element method perform analytical solutions based on the variation of parameters equations.

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 刘林. 航天器轨道理论[M]. 国防工业出版社.
