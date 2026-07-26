---
title: Powered Lunar Flyby / PLF
description: Detailed explanation of powered lunar flyby definition, three-burn transfer architecture, four transfer trajectory types, and applications in LEO-to-DRO transfers
keywords: Powered Lunar Flyby, PLF, perilune impulse, three-burn transfer, DRO insertion, Earth-Moon transfer
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Powered Lunar Flyby (PLF)
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Powered Lunar Flyby (PLF) Explained | Cislunar Space
  description: Detailed explanation of powered lunar flyby definition, three-burn transfer architecture, and applications in LEO-to-DRO transfers
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Powered Lunar Flyby (PLF) Explained | Cislunar Space
  description: Detailed explanation of powered lunar flyby definition, three-burn transfer architecture, and applications in LEO-to-DRO transfers
  image: /logo.png
permalink: /en/glossary/other/powered-lunar-flyby/
---

# Powered Lunar Flyby (PLF)

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Powered Lunar Flyby (PLF) is an orbital transfer method that combines lunar gravitational assist with active thrust. The core concept is to apply a propulsion impulse at the spacecraft's perilune (closest approach to the Moon) during a lunar flyby, enabling more precise energy and orbital control during the gravity assist process.

Compared to traditional unpowered lunar gravity assist, PLF offers the following advantages: (1) improved energy conversion efficiency to maximize the flyby effect; (2) prevention of spacecraft escape from the Earth-Moon system after the flyby; and (3) precise control of the transfer trajectory's terminal state to meet the target orbit's insertion conditions.

## Core Elements

### Three-Burn Transfer Architecture

The PLF-based LEO-to-DRO transfer uses a three-burn architecture:

$$\Delta v_{\text{total}} = \Delta v_1 + \Delta v_2 + \Delta v_3$$

where:

- $\Delta v_1$: **LEO de-orbit impulse** — applied at Low Earth Orbit to send the spacecraft onto the Earth-Moon transfer trajectory. This impulse determines the transfer trajectory's C3 energy and the lunar flyby geometry.
- $\Delta v_2$: **Perilune maneuver impulse** — applied at the closest approach during the lunar flyby. This is the core impulse of the PLF scheme. Its magnitude and direction determine the flyby effect and directly influence the shape of the transfer trajectory's second half.
- $\Delta v_3$: **DRO insertion impulse** — applied near the perilune of the target DRO to transfer the spacecraft from the Moon-DRO transfer segment into the target Distant Retrograde Orbit.

### Four Transfer Trajectory Types

Research by Wei et al. (2026) shows that PLF-based LEO-DRO transfer trajectories can be classified into four types based on the spacecraft's direction of motion and velocity change near the Moon:

1. **Retrograde Acceleration (RA)**: The spacecraft moves in the retrograde direction near the Moon, and velocity increases after the perilune impulse. The $\Delta v_2$ direction aligns with the motion direction, significantly increasing energy after the flyby.

2. **Retrograde Deceleration (RD)**: The spacecraft moves retrograde, and velocity decreases after the perilune impulse. This transfer uses deceleration flyby to reduce energy, making it easier for the spacecraft to be captured by a DRO.

3. **Prograde Acceleration (PA)**: The spacecraft moves prograde, and the perilune impulse accelerates it. This transfer combines prograde flyby with acceleration assist characteristics.

4. **Prograde Deceleration (PD)**: The spacecraft moves prograde, and the perilune impulse decelerates it. The $\Delta v_2$ can effectively reduce the insertion impulse required to enter a DRO.

### Impulse Optimization

The total $\Delta v$ of the three-burn transfer is the core metric for evaluating scheme efficiency. The optimization objective is typically:

$$\min \; \Delta v_{\text{total}} = \Delta v_1 + \Delta v_2 + \Delta v_3$$

Optimization variables include LEO departure time, initial state of the transfer trajectory, perilune impulse parameters, and DRO insertion point parameters. Due to the highly nonlinear nature of the problem, global optimization algorithms (such as differential evolution, particle swarm optimization) combined with local gradient optimization are typically employed.

### PLF vs Pure Gravity Assist

Compared to pure gravity assist, PLF offers:

- **Escape prevention**: Pure gravity assist may cause the spacecraft to gain excessive energy and escape the Earth-Moon system under certain geometric conditions. PLF avoids this through precise control of the perilune impulse.
- **Controllable terminal state**: Pure gravity assist's terminal state is entirely determined by flyby geometry with limited adjustment freedom. PLF adds the perilune impulse as an additional degree of freedom.
- **Transfer time optimization**: PLF can maintain low total impulse while shortening transfer time, improving mission efficiency.

## Application Value

PLF schemes have important applications in:

- **LEO-to-DRO rapid transfer**: For cislunar space infrastructure construction, PLF provides an excellent balance between impulse requirements and transfer time.
- **Lunar exploration missions**: PLF can be used to design efficient lunar orbital transfer schemes, reducing propellant requirements.
- **Cislunar space station logistics**: When future cislunar space stations are deployed in DRO, PLF schemes can provide economical transfer solutions for cargo and crew vehicles.

## Related Concepts

- [Lunar Gravity Assist (LGA)](/en/glossary/other/lunar-gravity-assist/)
- [Perilune](/en/glossary/orbits/perilune/)
- [Transfer Orbit](/en/glossary/orbits/transfer-orbit/)
- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/dro/)
- [Impulsive Maneuver](/en/glossary/dynamics/impulsive-maneuver/)

## References

- Wei Z et al., "Research on Lunar Flyby Transfer to Distant Retrograde Orbit Families in the Earth-Moon System", 2026.
- Koon W S, Lo M W, Marsden J E, Ross S D, "Dynamical Systems, the Three-Body Problem and Space Mission Design", 2011.
- Parker J S, Anderson R P, "Low-Energy Lunar Trajectory Design", JPL Deep Space Communications and Navigation Series, 2014.
