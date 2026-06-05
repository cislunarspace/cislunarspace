---
title: Bi-Elliptic Transfer
description: A detailed analysis of the bi-elliptic transfer principle, three-impulse scheme, and optimal conditions
keywords: Bi-Elliptic Transfer, Three-Impulse Transfer, Orbit Transfer, Infinite Bi-Elliptic Transfer
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Bi-Elliptic Transfer
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Bi-Elliptic Transfer | Terminology Definition
  description: A detailed analysis of the bi-elliptic transfer principle and optimal conditions
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Bi-Elliptic Transfer | Terminology Definition
  description: A detailed analysis of the bi-elliptic transfer principle and optimal conditions
  image: /logo.png
permalink: /en/glossary/fundamentals/bi-elliptic-transfer/
---

# Bi-Elliptic Transfer

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A bi-elliptic transfer is a three-impulse orbit transfer scheme in which the spacecraft transfers from an initial circular orbit to a final circular orbit via two elliptical transfer orbits. The first impulse is applied on the initial orbit to enter the first elliptical orbit, the second impulse is applied at its apoapsis to transfer to the second elliptical orbit, and the third impulse is applied at the periapsis of the second elliptical orbit to enter the final orbit.

## Core Elements

### Transfer Process

1. Apply a tangential impulse $\Delta v_1$ at point $P_1$ on the initial circular orbit $C_1$ to enter elliptical orbit $E_1$
2. Apply a second tangential impulse $\Delta v_2$ at the apoapsis $A$ of $E_1$ to enter elliptical orbit $E_2$
3. Apply a retro-tangential impulse $\Delta v_3$ at the periapsis $P_2$ of $E_2$ to enter the final circular orbit $C_2$

### Three-Impulse Calculation

Let $r_a$ be the apoapsis geocentric distance of the elliptical transfer orbit:

$$\begin{cases} \Delta v_1 = \sqrt{\frac{\mu}{r_1}}\left(\sqrt{\frac{2r_a}{r_1 + r_a}} - 1\right) \\ \Delta v_2 = \sqrt{\frac{\mu}{r_a}}\left(\sqrt{\frac{2r_2}{r_2 + r_a}} - \sqrt{\frac{2r_1}{r_1 + r_a}}\right) \\ \Delta v_3 = \sqrt{\frac{\mu}{r_2}}\left(\sqrt{\frac{2r_a}{r_2 + r_a}} - 1\right) \end{cases}$$

### Infinite Bi-Elliptic Transfer

As $r_a \to \infty$, the transfer orbit approaches a parabola, $\Delta v_2 \to 0$, and the total characteristic velocity becomes:

$$\Delta v = (\sqrt{2} - 1)\left(\sqrt{\frac{\mu}{r_1}} + \sqrt{\frac{\mu}{r_2}}\right)$$

### Optimal Conditions

When $r_2/r_1 > 11.94$, the infinite bi-elliptic transfer is more energy-efficient than the Hohmann transfer; when $r_2/r_1 < 11.94$, the Hohmann transfer is more efficient. For a general bi-elliptic transfer, the apoapsis geocentric distance $r_a$ must be determined through optimization.

## Application Value

The bi-elliptic transfer has an energy advantage for orbit transfers with large radius ratios. Although the transfer time is much longer than that of a Hohmann transfer, it can effectively save fuel for time-insensitive, large-scale orbit transfer missions (e.g., long-duration deployment from low orbit to high orbit).

## Related Concepts

- [Characteristic Velocity](/en/glossary/fundamentals/characteristic-velocity/)
- [Phasing Orbit](/en/glossary/fundamentals/phasing-orbit/)
- [Orbital Maneuver](/en/glossary/fundamentals/orbital-maneuver/)

## References

- Zheng W, An X Y, Zhou X, He R Z. Aerospace Flight Mechanics[M]. National University of Defense Technology, 2026.
- Jia P R, Chen K J, et al. Long-Range Rocket Ballistics[M]. National University of Defense Technology Press.
