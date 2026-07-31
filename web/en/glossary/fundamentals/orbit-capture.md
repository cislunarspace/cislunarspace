---
title: Orbit Capture
description: A detailed analysis of the definition, Gauss perturbation equations, and adjustment methods of orbit capture
keywords: Orbit Capture, Orbit Adjustment, Insertion Error, Gauss Perturbation Equations
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Orbit Capture
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "Orbit Capture | Terminology Definition"
  description: A detailed analysis of the definition and adjustment methods of orbit capture
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Orbit Capture | Terminology Definition"
  description: A detailed analysis of the definition and adjustment methods of orbit capture
  image: /logo.png
permalink: /en/glossary/fundamentals/orbit-capture/
---

# Orbit Capture

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Orbit capture is the orbit adjustment maneuver performed to eliminate insertion errors and enable the satellite to achieve its nominal orbital elements. By applying small impulses to correct the deviation between the actual orbit and the nominal orbit, it is a form of orbit adjustment maneuver.

## Core Elements

### Basic Principle

Orbit capture treats the thrust acceleration as a perturbing force and analyzes the changes in orbital elements caused by a given impulse under the impulsive assumption. In the orbital coordinate system, the velocity increment can be decomposed into three components: radial $\Delta v_r$, tangential $\Delta v_t$, and normal $\Delta v_h$.

### Gauss Perturbation Equations

The relationships between orbital element changes and velocity impulses:

$$\begin{cases} \Delta a = \frac{2}{n\sqrt{1-e^2}}[e\sin f \cdot \Delta v_r + (1+e\cos f)\Delta v_t] \\ \Delta e = \frac{\sqrt{1-e^2}}{na}[\sin f \cdot \Delta v_r + (\cos f + \cos E)\Delta v_t] \\ \Delta i = \frac{r\cos u}{na^2\sqrt{1-e^2}}\Delta v_h \\ \Delta\Omega = \frac{r\sin u}{na^2\sqrt{1-e^2}\sin i}\Delta v_h \end{cases}$$

### Adjustment Strategy

| Orbital Element | Required Impulse Component | Optimal Application Point |
| :--- | :--- | :--- |
| Semi-major axis $a$ | $\Delta v_r$, $\Delta v_t$ | Tangential at perigee |
| Eccentricity $e$ | $\Delta v_r$, $\Delta v_t$ | Determined by specific deviation |
| Inclination $i$ | $\Delta v_h$ | $u = 0°$ or $180°$ |
| RAAN $\Omega$ | $\Delta v_h$ | $u = 90°$ or $270°$ |

### Correction Calculation

If the deviation between the actual orbit and the nominal orbit is $da$, $de$, $di$, $d\Omega$, $d\omega$, $dM$, then the corrections are $\Delta a = -da$, $\Delta e = -de$, and so on.

## Application Value

Orbit capture is a critical operational step after satellite insertion. Due to the limited insertion accuracy of launch vehicles, satellites typically require orbit capture maneuvers to correct the actual orbit to the nominal orbit. Proper selection of impulse application point and direction can minimize fuel consumption.

## Related Concepts

- [Orbital Maneuver](/en/glossary/fundamentals/orbital-maneuver/)
- [Characteristic Velocity](/en/glossary/fundamentals/characteristic-velocity/)
- [Orbit Insertion Conditions](/en/glossary/fundamentals/orbit-insertion-conditions/)

## References

- Zheng W, An X Y, Zhou X, He R Z. Aerospace Flight Mechanics[M]. National University of Defense Technology, 2026.
- Jia P R, Chen K J, et al. Long-Range Rocket Ballistics[M]. National University of Defense Technology Press.
