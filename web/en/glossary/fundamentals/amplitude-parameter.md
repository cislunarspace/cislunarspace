---
title: Amplitude Parameter & Phase Parameter (振幅参数与相位参数)
description: "The two fundamental descriptive parameters for Distant Retrograde Orbits (DROs) in the synodic frame: the amplitude parameter characterizes the size of the DRO relative to the libration point, and the phase parameter indicates the position of a point along the DRO period. Together they uniquely determine the state at any point on a DRO for a given Jacobi constant."
keywords: Amplitude Parameter, Phase Parameter, DRO, Distant Retrograde Orbit, synodic frame, orbit parameterization, Jacobi constant, differential correction
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Amplitude Parameter & Phase Parameter
  desc: Two fundamental DRO parameters — size and position on the orbit — together uniquely determine the state.
  image: /logo.png
og:
  title: Amplitude Parameter & Phase Parameter — Detailed Definition
  description: "The two fundamental parameters for DROs in the synodic frame: amplitude parameter characterizes orbit size, phase parameter locates a point along the period. Together they uniquely determine the state at any point on a DRO for a given Jacobi constant."
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Amplitude Parameter & Phase Parameter — Detailed Definition
  description: "The two fundamental parameters for DROs in the synodic frame: amplitude parameter characterizes orbit size, phase parameter locates a point along the period."
  image: /logo.png
permalink: /en/glossary/fundamentals/amplitude-parameter/
---

# Amplitude Parameter & Phase Parameter (振幅参数与相位参数)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Distant Retrograde Orbits (DROs) in the synodic frame are characterized by the Jacobi constant $C_J$ (or equivalently, the energy level) and two parameters: the **amplitude parameter** gives the size of the orbit, and the **phase parameter** indicates the position of a point along the orbit.

The amplitude parameter describes the size of a DRO relative to a libration point in the synodic frame, typically defined as the absolute difference between the initial x-coordinate and the x-coordinate of the Earth-Moon $L_1$ or $L_2$ point (Tan 2014). For a given Jacobi constant, there is a one-to-one correspondence between the amplitude parameter and the DRO size. The phase parameter describes the location of a point on the DRO within the orbital period, corresponding to the orbital phase angle at time $t$. Together, for a specified Jacobi constant, they uniquely determine the state (position and velocity) at any point on a DRO in the synodic frame (Tan 2014).

DROs form a family of periodic orbits that enclose the Moon and travel in the direction opposite to the synodic frame rotation (retrograde). At high Jacobi constants they lie close to the Moon; at low Jacobi constants the orbit size increases (Scott 2010). The amplitude parameter effectively serves as a label for this one-parameter orbit family: different amplitudes correspond to different DRO sizes and different stability characteristics.

## Role in Numerical Solution

The amplitude and phase parameters provide a natural parameterization for computing DRO periodic orbits numerically. A typical procedure: in the synodic frame, given a Jacobi constant and amplitude parameter, the initial position is set on the x-axis according to the amplitude parameter, the initial velocity direction is implicitly determined by the phase parameter, and differential correction iteratively converges to a strict periodic solution (Tan 2014). This parameterization offers better convergence properties and clearer physical meaning than working directly with Cartesian state vectors.

## Relevance to DRO Formation and Transfer

- **DRO formation**: Spacecraft with identical amplitude parameters lie on the same DRO family; the relative motion of the formation is determined by the difference in phase parameters. Spacecraft with different amplitude parameters lie on different DROs, and their relative drift depends on the orbital period difference corresponding to the Jacobi constant difference.

- **DRO transfer**: In transfer design from Earth parking orbit to DRO, the target DRO is specified by its amplitude and phase parameters, with optimization variables typically including the departure epoch and required velocity increment (Tan 2014).

## Related Concepts

- [Distant Retrograde Orbit (DRO)](/en/glossary/programs/dro/)

- [Differential Correction Method](/en/glossary/dynamics/differential-correction/)

- [Synodic Frame](/en/glossary/fundamentals/synodic-frame/)

- [Poincaré Section](/en/glossary/dynamics/poincare-section/)

- [Invariant Manifold](/en/glossary/dynamics/invariant-manifold/)

## References

- Tan Minghu et al., 2014, Transfer to long term distant retrograde orbits around the Moon (definition of amplitude and phase parameters and DRO solution method)

- Scott, 2010, Transfer and Capture into Distant Retrograde Orbits (Jacobi constant–size mapping and stability of the DRO family)

- Ao Haiyue et al., 2024 (further analysis of amplitude-phase coupling in DRO formations)
