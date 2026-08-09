---
title: Nondimensionalization (Normalized Units)
description: Scaling physical equations of motion by characteristic quantities of mass, length, and time so that they become dimensionless and the CR3BP depends on a single parameter — the mass ratio μ. Covers the Earth–Moon choice (unit length = semi-major axis; unit time makes n = 1; unit mass = m₁ + m₂) and the resulting normalised distance, time, and velocity.
keywords: nondimensionalization, normalized units, characteristic quantities, mass parameter, CR3BP, Earth–Moon system, scaling, canonical units
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Nondimensionalization (Normalized Units)
  desc: Scaling by characteristic mass, length, and time collapses the CR3BP to a single parameter μ; Earth–Moon canonical units.
  image: /logo.png
og:
  title: Nondimensionalization (Normalized Units) | Glossary
  description: Scaling physical equations of motion by characteristic quantities of mass, length, and time so that they become dimensionless and the CR3BP depends on a single parameter — the mass ratio μ.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Nondimensionalization (Normalized Units) | Glossary
  description: Scaling physical equations of motion by characteristic quantities of mass, length, and time so that they become dimensionless and the CR3BP depends on a single parameter — the mass ratio μ.
  image: /logo.png
permalink: /en/glossary/fundamentals/nondimensionalization/
---

# Nondimensionalization (Normalized Units)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

**Nondimensionalization** rescales the variables of a physical equation of motion by characteristic quantities of the same dimension so that the new variables carry no units. In the restricted three-body problem this procedure strips the equations of all dimensional constants and leaves a single dimensionless parameter — the **mass ratio** $\mu = m_2/(m_1 + m_2)$. The scaled quantities are referred to as **normalized** (or canonical, dimensionless) units.

## Choosing the characteristic quantities

The CR3BP convention (Szebehely 1967, §1.5) is:

- **Characteristic mass**: $m^* = m_1 + m_2$ (the sum of the two primaries' masses), so $\mu = m_2/m^*$.

- **Characteristic length**: $l^* = $ the (mean) distance between the two primaries.

- **Characteristic time**: chosen so that the mean motion of the secondary about the primary equals one, i.e. $t^* = 1/n$, where $n = \sqrt{G(m_1 + m_2)/(l^*)^3}$ is the dimensional mean motion. Kepler's third law then gives $G(m_1 + m_2) t^{*2}/l^{*3} = 1$, and the gravitational constant becomes unity in the new system.

With these choices the primaries sit at $(-\mu, 0, 0)$ and $(1-\mu, 0, 0)$, the angular rate of the synodic frame is unity, and the equations of motion collapse to the canonical CR3BP form containing only $\mu$ (see [Equation of Motion](/en/glossary/fundamentals/eom/)).

## Normalized units for the Earth–Moon system

Using the mean Earth–Moon distance $l^* \approx 384{,}400$ km and $\mu \approx 0.0121506$:

- unit length $l^* \approx 3.844 \times 10^5$ km;

- unit time $t^* = 1/n \approx 3.752 \times 10^5$ s $\approx 4.342$ d (so one full revolution of the primaries takes $2\pi$ time units);

- unit velocity $v^* = l^*/t^* \approx 1.025$ km/s.

Values vary slightly between references depending on whether the semi-major axis or the instantaneous distance is used for $l^*$, and on the adopted Earth–Moon mass ratio; modern DE440-based values of $\mu$ are around 0.012150585.

## Why it matters

Nondimensionalization serves three purposes. (i) **Generality**: a single dimensionless parameter $\mu$ describes every Earth–Moon-like, Sun–Earth-like, or Sun–Jupiter-like system — results carry over by scaling. (ii) **Numerical conditioning**: with $l^*$, $t^*$ as the working units, position, velocity, and time are all $O(1)$, which limits floating-point cancellation in long integrations. (iii) **Conceptual clarity**: the relative importance of terms in the equations (Coriolis vs. gravity vs. centrifugal) is read off directly from the dimensionless form.

A practical caveat: the dimensionless equations do **not** assume the actual inter-primary distance is one physical unit (Szebehely 1967, §1.5). They hold for any physical system after scaling; recovering dimensional outputs requires multiplying by $l^*$, $t^*$, $v^*$ appropriately.

## Related entries

- [Equation of Motion and State Equation](/en/glossary/fundamentals/eom/)

- [Synodic Frame (Rotating Frame)](/en/glossary/fundamentals/synodic-frame/)

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

- [Jacobi Constant](/en/glossary/dynamics/jacobi-integral/)

## References

- Szebehely, 1967, *Theory of Orbits*, §§1.2–1.5 — dimensional-to-dimensionless derivation and the warning against reading dimensionless units as physical units.

- Vallado, 2022, *Fundamentals of Astrodynamics and Applications*, §12.3 — non-dimensional CR3BP equations and the mass parameter.

- 李星明 等, 2024, 地月周期轨道对地月 L1 与 L2 附近 Halo 轨道的可见性分析——典型 Earth–Moon canonical-unit numerical setup.

- 张晨, 2024, 北京航空航天大学学报——PBCR4BP normalization using Earth–Moon total mass, mean distance, and mean angular rate.
