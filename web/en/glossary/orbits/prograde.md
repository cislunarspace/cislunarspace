---
title: Prograde (顺行)
description: Detailed explanation of prograde motion definition, behavior in the Earth-Moon rotating frame, comparison with retrograde, and impulsive consumption characteristics in orbital transfer
keywords: Prograde, DRO, retrograde, orbital motion direction, Earth-Moon rotating frame, impulsive consumption
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Prograde
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Prograde Explained | Cislunar Space
  description: Detailed explanation of prograde motion definition, behavior in the Earth-Moon rotating frame, comparison with retrograde, and impulsive consumption characteristics in orbital transfer
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Prograde Explained | Cislunar Space
  description: Detailed explanation of prograde motion definition, behavior in the Earth-Moon rotating frame, comparison with retrograde, and impulsive consumption characteristics in orbital transfer
  image: /logo.png
permalink: /en/glossary/orbits/prograde/
---

# Prograde

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Prograde refers to the motion state where a spacecraft's direction of travel is the **same** as the central body's rotation or orbital direction. In the Earth-Moon rotating reference frame, a prograde orbit appears as counterclockwise motion around the Moon. The opposite is retrograde orbit, where the motion direction is opposite to the central body's motion.

## Key Elements

### Meaning of Prograde in the Earth-Moon System

In the Earth-Moon rotating reference frame, the definitions of prograde and retrograde are based on the Moon's orbital direction around Earth:

- **Prograde orbit**: The spacecraft's motion around the Moon is in the same direction as the Moon's orbit around Earth, appearing as **counterclockwise** motion in the rotating frame
- **Retrograde orbit**: The spacecraft's motion around the Moon is opposite to the Moon's orbit around Earth, appearing as **clockwise** motion in the rotating frame

Most natural celestial bodies (such as the Moon orbiting Earth, Earth orbiting the Sun) move in prograde, making prograde orbits the "conventional" motion state in a sense.

### Characteristics of Prograde Orbits in DRO Transfer

Research by Wei et al. (2026) shows that during transfers from LEO to DRO, **prograde orbits typically have higher impulsive consumption than retrograde orbits**. Reasons for this difference include:

- **Coriolis force direction**: In the rotating frame, the Coriolis force for prograde motion aligns with the direction of travel, producing an "acceleration" effect that makes it harder for the spacecraft to be captured into the target orbit during gravity assist
- **Asymmetric energy channels**: In the Earth-Moon rotating frame, the energy channel structures in prograde and retrograde directions are asymmetric; the prograde direction typically requires more energy injection
- **Gravity assist efficiency**: Lunar gravity assist in the prograde direction usually produces less orbital energy change than in the retrograde direction

### Relationship Between Prograde and DRO

DRO (Distant Retrograde Orbit) is inherently a retrograde orbit. If one attempts to design prograde periodic orbits around the Moon, the following categories are typically considered:

- **Prograde near-lunar orbits**: Prograde orbits close to the Moon, with significant non-spherical gravitational perturbation
- **Lissajous/Halo orbits**: The motion direction of orbits around libration points has special characteristics in the synodic frame
- **Prograde DRO-like orbits**: Theoretically exist, but their stability and impulsive consumption are inferior to retrograde DRO

### Velocity Vector Description

The angular momentum direction of prograde motion aligns with the $z$-axis of the rotating frame:

$$h_z = (\mathbf{r} \times \mathbf{v}) \cdot \hat{\mathbf{z}} > 0$$

In the inertial frame, prograde means the spacecraft's velocity component in the equatorial or orbital plane aligns with the central body's rotation direction. In the synodic frame, this relationship additionally accounts for the frame's rotational angular velocity.

## Application Value

Prograde motion characteristics have fundamental significance in orbital mechanics:

- **Orbital classification basis**: Prograde and retrograde are basic classifications for describing orbital motion direction, serving as prerequisites for understanding special orbits like DRO
- **Transfer scheme comparison**: In DRO transfer design, prograde schemes serve as baselines against retrograde schemes, helping analyze the physical roots of impulsive consumption differences
- **Natural orbit reference**: Most natural satellites and planets have prograde orbits; prograde orbit theory provides the foundation for understanding solar system body motion
- **Orbit-keeping strategies**: Prograde and retrograde orbit maintenance strategies differ; the different Coriolis force directions directly affect orbit control strategy design

## Related Concepts
- [Retrograde](/en/glossary/orbits/retrograde/)
- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/dro/)

## References
- Wei Z et al. Research on lunar gravity-assist injection into cislunar distant retrograde orbit families[J]. 2026.
- Vallado D A. Fundamentals of Astrodynamics and Applications[M]. 4th ed. 2013.
- Whitley R, Martinez R. Options for staging orbits in cislunar space[C]. 2016.
