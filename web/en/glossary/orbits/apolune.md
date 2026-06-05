---
title: Apolune
description: Detailed explanation of apolune definition, geometric significance, orbital parameter relationships, and applications in lunar orbit design
keywords: Apolune, lunar orbit, orbital design, apolune altitude, orbital eccentricity, DRO, NRHO
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Apolune
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Apolune Explained | Cislunar Space
  description: Detailed explanation of apolune definition, geometric significance, orbital parameter relationships, and applications in lunar orbit design
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Apolune Explained | Cislunar Space
  description: Detailed explanation of apolune definition, geometric significance, orbital parameter relationships, and applications in lunar orbit design
  image: /logo.png
permalink: /en/glossary/orbits/apolune/
---

# Apolune

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Apolune is the **farthest point** on a spacecraft's lunar orbit from the Moon's center of mass. Together with perilune (the closest point), it describes the basic geometric characteristics of a lunar orbit. Apolune and perilune correspond to the two endpoints of the semi-major axis of an elliptical orbit.

## Key Elements

### Geometric Significance of Apolune

In the two-body problem framework, the distance from apolune to the Moon's center of mass for an elliptical lunar orbit is:

$$r_{\text{apolune}} = a(1 + e)$$

where $a$ is the semi-major axis and $e$ is the orbital eccentricity. Apolune altitude $h_a$ is the distance from apolune to the Moon's surface:

$$h_a = r_{\text{apolune}} - R_M$$

where $R_M$ is the Moon's radius (approximately 1737.4 km).

The relationship between apolune and perilune can be expressed through orbital eccentricity:

$$e = \frac{r_{\text{apolune}} - r_{\text{perilune}}}{r_{\text{apolune}} + r_{\text{perilune}}}$$

### Apolune in Different Orbit Types

- **Near-circular orbits**: Apolune and perilune altitudes are similar, with eccentricity $e \approx 0$
- **Highly elliptical orbits**: Apolune is much higher than perilune, with eccentricity $e$ approaching 1, suitable for high lunar orbit observation
- **DRO orbits**: In the synodic reference frame, the apolune of a DRO lies on the Earth-Moon line on the side away from the Moon, with its position varying with resonance ratio
- **NRHO orbits**: The apolune altitude of a near-rectilinear halo orbit is much greater than the perilune altitude, forming an extremely elongated elliptical shape, with perilune near the lunar north polar region

### Influence of Apolune Altitude on Orbital Period

According to Kepler's third law, the relationship between orbital period $T$ and semi-major axis $a$ is:

$$T = 2\pi\sqrt{\frac{a^3}{\mu_M}}$$

where $\mu_M$ is the Moon's gravitational parameter. Higher apolune altitude means larger semi-major axis and longer orbital period. This relationship is particularly important in DRO resonance design -- by adjusting the apolune position, specific resonance ratios with the Moon's orbital period can be achieved.

## Application Value

Apolune parameters have important applications in orbital design:

- **Orbital configuration design**: Apolune altitude together with perilune altitude determines orbit shape, serving as the basic parameter for describing target orbits like DRO and NRHO
- **Communication relay planning**: When apolune is on the lunar far side, it can provide communication coverage for regions not visible from Earth
- **Orbit transfer design**: During transfers from highly elliptical orbits to DRO, the apolune evolution trajectory directly affects transfer efficiency
- **Orbital stability analysis**: Changes in apolune position are an important indicator for assessing long-term orbital stability

## Related Concepts
- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/dro/)
- [Perilune](/en/glossary/orbits/perilune/)
- [Near-Rectilinear Halo Orbit (NRHO)](/en/glossary/orbits/nrho/)

## References
- Vallado D A. Fundamentals of Astrodynamics and Applications[M]. 4th ed. 2013.
- Wei Z et al. Research on lunar gravity-assist injection into cislunar distant retrograde orbit families[J]. 2026.
- Broucke R. Periodic orbits in the restricted three-body problem with Earth-Moon masses[R]. 1968.
