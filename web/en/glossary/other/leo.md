---
title: Low Earth Orbit / LEO
description: Detailed explanation of Low Earth Orbit definition, altitude range, dynamical characteristics, and its role as parking orbit in lunar transfer missions
keywords: Low Earth Orbit, LEO, parking orbit, Earth-Moon transfer, space launch, orbital mechanics
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Low Earth Orbit (LEO)
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "Low Earth Orbit (LEO) Explained | Cislunar Space"
  description: Detailed explanation of Low Earth Orbit definition, altitude range, and its role in lunar transfer missions
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Low Earth Orbit (LEO) Explained | Cislunar Space"
  description: Detailed explanation of Low Earth Orbit definition, altitude range, and its role in lunar transfer missions
  image: /logo.png
permalink: /en/glossary/other/leo/
---

# Low Earth Orbit (LEO)

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Low Earth Orbit (LEO) refers to orbits around the Earth at altitudes between approximately 200 km and 2000 km above the Earth's surface. LEO is the most commonly used orbit type in human spaceflight activities, hosting the vast majority of crewed spacecraft, Earth observation satellites, and space stations.

The orbital period of LEO is approximately 90–120 minutes, depending on the specific altitude. For example, the International Space Station (ISS) operates in a near-circular orbit at approximately 400 km altitude with an orbital period of about 92 minutes. The LEO orbital velocity is approximately $v \approx 7.7 \text{ km/s}$ (at 400 km altitude).

## Core Elements

### Orbital Mechanics Parameters

The key mechanical parameters of LEO can be calculated using Kepler's laws. For a circular orbit of radius $r$, the orbital velocity is:

$$v = \sqrt{\frac{\mu_E}{r}}$$

where $\mu_E = 3.986 \times 10^{5} \text{ km}^3/\text{s}^2$ is Earth's gravitational parameter. The characteristic velocity $\Delta v$ requirement for LEO is relatively low, making it the most economical orbit to reach from the ground.

### LEO as Parking Orbit

In Earth-Moon transfer missions, LEO typically serves as the spacecraft's **parking orbit**. The launch vehicle first delivers the spacecraft to LEO, and then at the appropriate phase and timing, an Earth-Moon transfer impulse is applied to enter the transfer trajectory.

This LEO parking and Earth-Moon transfer mission architecture offers several advantages:

1. **Mission flexibility**: The spacecraft can wait in LEO for the optimal launch window, rather than being strictly constrained by ground-based launch windows.
2. **System verification**: During the LEO parking phase, all spacecraft systems can be thoroughly checked before executing the deep space transfer.
3. **On-orbit assembly**: Large missions can be assembled and resupplied in LEO, relaxing the mass constraints of a single launch.

### LEO De-orbit Impulse for Lunar Transfer

The Earth-Moon transfer from LEO typically requires a de-orbit impulse $\Delta v_1$. For direct transfer to the lunar vicinity, this impulse magnitude depends on the transfer trajectory design. In powered lunar flyby (PLF) transfer schemes, the LEO de-orbit impulse is the first impulse of the three-burn transfer, and its magnitude directly affects the shape of the subsequent transfer trajectory and the state upon reaching the Moon.

Typically, the $\Delta v_1$ required for direct transfer from a 200 km LEO to the lunar vicinity is approximately 3.1–3.2 km/s, slightly less than the theoretical Hohmann transfer value. By optimizing the transfer trajectory design (such as selecting the appropriate C3 energy), trade-offs can be made between $\Delta v_1$ and subsequent impulses.

### Atmospheric Drag and Orbital Decay

The primary perturbation factor for LEO is atmospheric drag. Although atmospheric density is extremely thin above 400 km, spacecraft in long-term operation still require periodic orbit maintenance. The orbital decay rate due to atmospheric drag is closely related to the spacecraft's ballistic coefficient ($\beta = m/C_D A$) and atmospheric density.

## Application Value

LEO serves not only as the starting point for space activities but also as a key node in cislunar space infrastructure:

- **Space stations**: China's Tiangong Space Station and the International Space Station both operate in LEO, providing platforms for long-duration human spaceflight.
- **Satellite constellations**: Large communication constellations such as Starlink and OneWeb are deployed in LEO.
- **Cislunar transportation hub**: LEO is expected to evolve into a transportation hub for cislunar space, handling on-orbit refueling and cargo transfer functions.

## Related Concepts

- Cislunar Space
- Parking Orbit
- Transfer Orbit
- Powered Lunar Flyby (PLF)

## References

- Wei Z et al., "Research on Lunar Flyby Transfer to Distant Retrograde Orbit Families in the Earth-Moon System", 2026.
- Vallado D A, "Fundamentals of Astrodynamics and Applications", 4th ed., Microcosm Press, 2013.
- Wertz J R, Everett D F, Puschell J J, "Space Mission Engineering: The New SMAD", Microcosm Press, 2011.
