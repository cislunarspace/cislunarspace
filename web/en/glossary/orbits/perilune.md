---
title: Perilune
description: Detailed explanation of perilune definition, geometric significance, influence on lunar gravity assist, and role in orbital design
keywords: Perilune, lunar gravity assist, orbital design, perilune altitude, lunar orbit, cislunar transfer
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Perilune
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Perilune Explained | Cislunar Space
  description: Detailed explanation of perilune definition, geometric significance, influence on lunar gravity assist, and role in orbital design
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Perilune Explained | Cislunar Space
  description: Detailed explanation of perilune definition, geometric significance, influence on lunar gravity assist, and role in orbital design
  image: /logo.png
permalink: /en/glossary/orbits/perilune/
---

# Perilune

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Perilune is the **closest point** on a spacecraft's lunar orbit to the Moon's center of mass. In the geometric description of a lunar orbit, perilune and apolune together define the basic shape of the orbit. Perilune altitude is the distance from the Moon's surface to the perilune, and is a critical parameter in orbital design.

## Key Elements

### Geometric Significance of Perilune

In the two-body problem framework, a lunar orbit is a conic section (ellipse, parabola, or hyperbola). For elliptical orbits, the perilune lies at the end of the semi-major axis closest to the Moon, with the distance from the Moon's center of mass given by:

$$r_{\text{perilune}} = a(1 - e)$$

where $a$ is the semi-major axis and $e$ is the orbital eccentricity. For complex orbits like DRO and NRHO in the restricted three-body problem framework, the perilune definition still applies, but the orbits are no longer standard conic sections.

### Influence of Perilune Altitude on Gravity Assist

During a lunar gravity assist, perilune altitude is the key factor determining the magnitude of energy change:

- **Lower perilune** (e.g., 100-200 km): Lunar gravity has a stronger effect, producing larger energy change $\Delta E$, but the trajectory is significantly perturbed by the Moon's non-spherical gravity field ($J_2$ term, etc.), with collision risk
- **Higher perilune** (e.g., 1000-10000 km): Weaker gravitational effect with smaller energy change, but better orbital safety, suitable for long-duration missions

The velocity deflection angle $\delta$ during the gravity assist relates to perilune distance $r_p$ as:

$$\sin\frac{\delta}{2} = \frac{1}{1 + \dfrac{r_p \cdot v_\infty^2}{\mu_M}}$$

where $v_\infty$ is the spacecraft's hyperbolic excess velocity relative to the Moon, and $\mu_M$ is the Moon's gravitational parameter. Lower perilune produces greater deflection.

### Perilune Precision Control

In actual missions, perilune precision control faces several challenges:

- **Lunar non-spherical gravity**: Non-uniform mass distribution causes significant perturbations near perilune
- **Orbit determination errors**: Deep-space ranging and velocity measurement accuracy directly affect perilune position prediction
- **Maneuver timing selection**: Perilune maneuver timing and magnitude must be precisely planned to avoid orbit deviation accumulation

## Application Value

Perilune parameters have core application value in cislunar missions:

- **Lunar gravity assist orbit design**: Precisely controlling energy and orbital direction changes during gravity assist by adjusting perilune altitude
- **DRO transfer injection**: Wei et al. (2026) showed that when transferring from LEO to DRO via lunar gravity assist, perilune altitude is the core parameter determining transfer efficiency
- **Safety constraints**: Perilune altitude must meet minimum safe distance requirements to avoid collision with lunar terrain
- **Scientific observation**: Low-perilune orbits are suitable for high-resolution lunar surface observation

## Related Concepts

- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/dro/)
- [Apolune](/en/glossary/orbits/apolune/)
- [Lunar Gravity Assist](/en/glossary/other/lunar-gravity-assist/)

## References

- Wei Z et al. Research on lunar gravity-assist injection into cislunar distant retrograde orbit families[J]. 2026.
- Vallado D A. Fundamentals of Astrodynamics and Applications[M]. 4th ed. 2013.
- Broucke R. Periodic orbits in the restricted three-body problem with Earth-Moon masses[R]. 1968.
