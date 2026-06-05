---
title: Distant Prograde Orbit (DPO)
description: Detailed explanation of Distant Prograde Orbits (DPO) — definitions, dynamical characteristics, differences from DRO, and applications in cislunar low-energy transfers
keywords: DPO, Distant Prograde Orbit, cislunar space, lunar-centered orbit, low-energy transfer, orbital dynamics, prograde
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Distant Prograde Orbit (DPO)
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Distant Prograde Orbit (DPO) | Cislunar Low-Energy Transfer Corridor
  description: Detailed explanation of Distant Prograde Orbits (DPO) — definitions, dynamical characteristics, differences from DRO, and applications in cislunar low-energy transfers
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Distant Prograde Orbit (DPO) | Cislunar Low-Energy Transfer Corridor
  description: Detailed explanation of Distant Prograde Orbits (DPO) — definitions, dynamical characteristics, differences from DRO, and applications in cislunar low-energy transfers
  image: /logo.png
permalink: /en/glossary/orbits/dpo/
---

# Distant Prograde Orbit (DPO)

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A **Distant Prograde Orbit (DPO)** is a **prograde periodic orbit encircling the Moon in the Circular Restricted Three-Body Problem (CR3BP)**. Unlike DRO (Distant Retrograde Orbit), which moves in the opposite direction, DPO revolves around the Moon in the same direction as the Moon orbits the Earth (counterclockwise) in the rotating coordinate system, hence the term "prograde." DPO belongs to the Moon-Centered Orbits family and, together with DRO and LoPO (Low Prograde Orbit), constitutes the major categories of lunar-centered periodic orbits in cislunar space.

## Core Elements

### Dynamical Characteristics of DPO

DPO possesses the following properties within the CR3BP framework:

- **Prograde motion**: DPO revolves counterclockwise around the Moon in the rotating coordinate system, consistent with the Moon's orbital direction
- **Period diversity**: The DPO orbit family has a wide period range, spanning from approximately 5.8 to 28.0 days
- **Broad energy range**: DPO covers a large range of Jacobi constants (approximately 2.99 ~ 3.18), indicating that the family includes orbits from low to relatively high energy levels
- **Instability characteristics**: The stability index of DPO varies over a very wide range (1.0 ~ 1342.8), with both near-stable and highly unstable members within the family

### Orbital Parameter Characteristics of DPO

Using the Earth-Moon system as an example, the main parameter ranges for the DPO orbit family are as follows (based on the dynamic catalog statistics by Guzzetti et al.):

| Parameter | Range |
|:---|:---|
| Jacobi Constant | 2.9941 ~ 3.1827 (mean 3.1150) |
| Orbital Period | 5.82 ~ 28.00 days (mean 13.10 days) |
| Stability Index | 1.000 ~ 1342.8 (mean 302.43) |

The wide distribution of DPO orbital periods and stability indices means that members with different characteristics can be selected within the orbit family to suit specific mission requirements.

### Comparison Between DPO and DRO

DPO and DRO are two important comparative objects within the lunar-centered orbit family:

| Feature | DRO (Distant Retrograde Orbit) | DPO (Distant Prograde Orbit) |
|:---|:---|:---|
| Motion direction | Retrograde (clockwise) | Prograde (counterclockwise) |
| Stability | Predominantly stable | Highly variable, partially unstable |
| Typical application | Long-term storage, situational awareness | Low-energy transfer, lunar parking |
| Period range | 5.87 ~ 27.38 days | 5.82 ~ 28.00 days |
| Energy level | Lower (JC 1.44 ~ 3.02) | Higher (JC 2.99 ~ 3.18) |

### Role of DPO in Transfer Design

DPO holds unique value in cislunar space transfer design:

- **L1-L2 transfer corridor**: DPO can be used to design low-cost transfer trajectories between L1 and L2 Lyapunov orbits, leveraging the invariant manifold structures of DPO to connect different libration point regions
- **Lunar parking orbit**: Some DPO members are close to the Moon and can serve as temporary parking orbits for lunar exploration missions
- **Comparison with DRO**: While DRO is more suitable for long-duration station-keeping due to its stability advantages, DPO may provide superior arrival/departure geometries in certain transfer scenarios

### Stability Analysis

The stability characteristics of DPO are complex and variable:

- The stability index across the DPO family spans an extremely wide range, from near 1 (stable) to over 1000 (highly unstable)
- DPO members with lower stability indices may support quasi-periodic motion and invariant tori in their vicinity
- DPO members with higher stability indices have pronounced unstable manifolds that can be used to design low-energy escape/capture transfers

## Application Value

DPO has the following applications in cislunar space missions:

- **Low-energy transfer design**: Using DPO's invariant manifolds, low-energy transfer corridors connecting libration point orbits and lunar-centered orbits can be designed
- **Lunar exploration missions**: DPO can serve as a temporary parking orbit for lunar exploration missions, supporting lunar surface operations and orbiter deployment
- **Orbit comparison and selection**: In the dynamic catalog framework proposed by Guzzetti et al., DPO is a candidate orbit family on par with DRO, Lyapunov orbits, and Halo orbits, providing more options for mission design
- **Dynamical structure research**: As an important member of the lunar-centered orbit family, DPO is key to understanding the dynamical structure of the lunar-centered region in cislunar space

## Related Concepts
- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/dro/)
- [Low Prograde Orbit (LoPO)](/en/glossary/orbits/lopo/)
- [Prograde](/en/glossary/orbits/prograde/)
- [Retrograde](/en/glossary/orbits/retrograde/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

## References
- Guzzetti D, Bosanac N, Howell K C. A framework for efficient trajectory comparisons in the Earth-Moon design space[C]. AAS/AIAA Space Flight Mechanics Meeting, 2014.
- Mingotti G, Topputo F, Bernelli-Zazzera F. Exploiting distant periodic orbits and their invariant manifolds to design novel space trajectories to the Moon[C]. AAS/AIAA Space Flight Mechanics Meeting, 2010.
- Folta D, Bosanac N, Guzzetti D, et al. An Earth-Moon system trajectory design reference catalog[C]. 2nd IAA Conference on Dynamics and Control of Space Systems, 2014.
