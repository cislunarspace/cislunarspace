---
title: Retrograde
description: Detailed explanation of retrograde motion definition, behavior in the Earth-Moon rotating frame, relationship with DRO, and impulsive advantages
keywords: Retrograde, DRO, Distant Retrograde Orbit, prograde, orbital motion direction, Earth-Moon rotating frame, impulsive advantage
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Retrograde
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Retrograde Explained | Cislunar Space
  description: Detailed explanation of retrograde motion definition, behavior in the Earth-Moon rotating frame, relationship with DRO, and impulsive advantages
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Retrograde Explained | Cislunar Space
  description: Detailed explanation of retrograde motion definition, behavior in the Earth-Moon rotating frame, relationship with DRO, and impulsive advantages
  image: /logo.png
permalink: /en/glossary/orbits/retrograde/
---

# Retrograde

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Retrograde refers to the motion state where a spacecraft's direction of travel is **opposite** to the central body's rotation or orbital direction. In the Earth-Moon rotating reference frame, a DRO appears as clockwise motion around the Moon, making it a retrograde orbit. The opposite is prograde orbit, where the motion direction is the same as the central body's motion.

## Key Elements

### Meaning of Retrograde in the Earth-Moon System

In the Earth-Moon rotating reference frame (with the Earth-Moon line as the $x$-axis, rotating at the Moon's orbital rate):

- **Retrograde orbit**: The spacecraft's motion around the Moon is opposite to the Moon's orbital direction around Earth, appearing as **clockwise** motion in the rotating frame
- **Prograde orbit**: The spacecraft's motion around the Moon is the same as the Moon's orbital direction around Earth, appearing as **counterclockwise** motion in the rotating frame

The "retrograde" in DRO (Distant Retrograde Orbit) comes from this -- in the synodic reference frame, a spacecraft on a DRO moves in the opposite direction to the Moon.

### Impulsive Advantages of Retrograde Orbits

Research by Wei et al. (2026) shows that during transfers from LEO to DRO, **retrograde orbits have significant impulsive advantages over prograde orbits**. The physical basis for this advantage includes:

- **Coriolis force effect**: In the rotating frame, the Coriolis force for retrograde motion opposes the direction of travel, acting like a "brake" that helps the spacecraft gain more energy during the gravity assist
- **Potential energy surface structure**: In the Jacobi constant equipotential surfaces of the Earth-Moon rotating frame, retrograde orbits correspond to more favorable energy channels in phase space
- **Gravity assist geometry**: Retrograde-direction lunar gravity assist produces greater orbital energy change, reducing the total $\Delta V$ required to enter DRO

Specifically, when transferring from LEO to $m:n$ resonant DRO via lunar gravity assist, the retrograde transfer scheme typically has lower total impulsive cost than the prograde scheme.

### Mathematical Description of Retrograde and Prograde

In the synodic reference frame, the angular momentum $h$ of a spacecraft's motion around the Moon can be positive or negative:

- Retrograde: $h < 0$ (angular momentum vector opposite to the $z$-axis of the rotating frame)
- Prograde: $h > 0$ (angular momentum vector aligned with the $z$-axis of the rotating frame)

The prograde/retrograde nature of an orbit can be determined from the cross product of velocity and position vectors:

$$\mathbf{h} = \mathbf{r} \times \mathbf{v}$$

## Application Value

Retrograde motion characteristics have core value in cislunar mission design:

- **DRO mission design**: DRO is inherently a retrograde orbit; understanding retrograde characteristics is fundamental to DRO transfer orbit design
- **Fuel optimization**: Using the impulsive advantage of retrograde orbits can significantly reduce fuel consumption for cislunar transfers
- **Orbital stability**: DRO's long-term stability is partly due to its retrograde nature; retrograde orbits have a wider stability region in the CRTBP framework
- **Constellation deployment**: In DRO constellation design, retrograde characteristics affect inter-satellite relative motion and coverage properties

## Related Concepts

- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/dro/)
- [Prograde](/en/glossary/orbits/prograde/)

## References

- Wei Z et al. Research on lunar gravity-assist injection into cislunar distant retrograde orbit families[J]. 2026.
- Whitley R, Martinez R. Options for staging orbits in cislunar space[C]. 2016.
- Broucke R. Periodic orbits in the restricted three-body problem with Earth-Moon masses[R]. 1968.
