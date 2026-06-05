---
title: Transfer Orbit
description: Detailed explanation of transfer orbit definition, design principles, energy trade-offs, and applications in cislunar transfer missions
keywords: Transfer Orbit, cislunar transfer, Hohmann transfer, orbital design, impulsive maneuver, fuel optimization, orbital mechanics
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Transfer Orbit
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Transfer Orbit Explained | Cislunar Space
  description: Detailed explanation of transfer orbit definition, design principles, energy trade-offs, and applications in cislunar transfer missions
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Transfer Orbit Explained | Cislunar Space
  description: Detailed explanation of transfer orbit definition, design principles, energy trade-offs, and applications in cislunar transfer missions
  image: /logo.png
permalink: /en/glossary/orbits/transfer-orbit/
---

# Transfer Orbit

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A transfer orbit is an **intermediate trajectory** used to move a spacecraft from an initial orbit to a target orbit. In cislunar missions, transfer orbit design is one of the core problems in orbital mechanics, requiring trade-offs between transfer time and fuel consumption. The shape of a transfer orbit depends on the geometric relationship between the departure and target orbits, available thrust, and mission time constraints.

## Key Elements

### Basic Types of Transfer Orbits

Transfer orbits can be classified by thrust mode:

- **Impulsive Transfer**: Assumes thrust is applied instantaneously, achieving orbital changes through a finite number of velocity increments $\Delta V$. The classical Hohmann transfer is a two-impulse transfer representative, suitable for transfers between near-circular orbits.
- **Low-Thrust Transfer**: Thrust is continuous but small in magnitude, resulting in a gradually evolving spiral trajectory. Electric propulsion systems commonly use this mode, offering higher fuel efficiency at the cost of longer transfer times.
- **Gravity-Assisted Transfer**: Uses celestial gravity to change orbital energy and direction without additional fuel consumption. Lunar gravity assist is a key technique in cislunar transfers.

### Energy-Time Trade-off

The core challenge in transfer orbit design is the Pareto optimality between energy and time. Transfer time $t_f$ and total velocity increment $\Delta V_{\text{total}}$ are inversely related:

$$\Delta V_{\text{total}} = \sum_{i=1}^{n} |\Delta \mathbf{v}_i|$$

where $n$ is the number of impulses. Generally, shorter transfers require larger $\Delta V$; conversely, slower transfers save fuel but extend mission duration.

### Specifics of Cislunar Transfer

Key differences between cislunar and interplanetary transfers include:

- **Three-body gravity field**: Both Earth and Moon gravity act simultaneously, requiring transfer orbit design within the restricted three-body problem framework
- **Lunar gravity assist windows**: Precise control of perilune altitude enables significant orbital energy changes via lunar gravity
- **Multiple target orbits**: Targets include DRO, NRHO, Halo orbits, each imposing different design constraints on the transfer orbit

## Application Value

Transfer orbit design has critical applications in cislunar missions:

- **Crewed lunar missions**: Transferring from Earth parking orbit to lunar orbit or the lunar surface
- **Cargo resupply missions**: Delivering supplies to mission orbits like DRO or NRHO while optimizing fuel consumption to maximize payload mass
- **Constellation deployment**: Using multi-launch combined with elegant transfer orbit designs to place multiple satellites into different target orbits
- **Emergency return**: Free-return transfer orbits provide crewed missions the ability to safely return to Earth without additional propulsion

## Related Concepts
- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/dro/)
- [Near-Rectilinear Halo Orbit (NRHO)](/en/glossary/orbits/nrho/)
- [Lunar Gravity Assist](/en/glossary/other/lunar-gravity-assist/)
- [Impulsive Maneuver](/en/glossary/dynamics/impulsive-maneuver/)
- [Parking Orbit](/en/glossary/orbits/parking-orbit/)
- [Free-Return Trajectory](/en/glossary/orbits/free-return-trajectory/)

## References
- Hohmann W. Die Erreichbarkeit der Himmelskörper[M]. 1925.
- Wei Z et al. Research on lunar gravity-assist injection into cislunar distant retrograde orbit families[J]. 2026.
- Broucke R. Periodic orbits in the restricted three-body problem with Earth-Moon masses[R]. 1968.
