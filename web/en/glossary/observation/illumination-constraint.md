---
title: Illumination Constraint
description: Detailed explanation of the illumination constraint including definition, shadow regions in cislunar space, and impact on SSA architecture design
keywords: Illumination Constraint, cislunar space, optical detection, space situational awareness, solar illumination, shadow, observability
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Illumination Constraint
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "Illumination Constraint Explained | Cislunar Optical Detection"
  description: Detailed explanation of the illumination constraint and its role in cislunar optical detection
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Illumination Constraint Explained | Cislunar Optical Detection"
  description: Detailed explanation of the illumination constraint and its role in cislunar optical detection
  image: /logo.png
permalink: /en/glossary/observation/illumination-constraint/
---

# Illumination Constraint

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The illumination constraint is the physical limitation that objects in cislunar space must be illuminated by the Sun in order to be detected by optical sensors. Optical sensors rely on sunlight reflected from the target for detection, so objects located in shadow regions of cislunar space (such as Earth shadow or lunar shadow) cannot be detected by optical SSA architectures.

## Shadow Regions

### Earth Shadow

Earth shadow is the region where a target enters the shadow cone cast by the Earth and cannot receive solar illumination. The half-angle $\theta$ of the shadow cone satisfies:

$$\tan \theta = \frac{R_\oplus}{d_E}$$

where $R_\oplus$ is the Earth radius and $d_E$ is the distance from the target to the Earth.

### Lunar Shadow

Similarly, the half-angle of the lunar shadow cone is:

$$\tan \theta = \frac{R_M}{d_M}$$

where $R_M$ is the Moon radius and $d_M$ is the distance from the target to the Moon.

## Impact on SSA Architecture Design

Klonowski (2025) systematically considered the impact of illumination constraints in SSA architecture design:

### Dynamic Coverage Analysis

- The detection capability of an architecture varies with the Sun-Earth-Moon geometric configuration
- The temporal evolution of shadow regions leads to periodic blind spots in detection coverage
- Observation satellite orbits need to be optimized to minimize the impact of illumination constraints

### Orbital Resonance Design

- Selecting orbits that resonate with the Sun-Moon geometric period can improve sustained coverage capability
- The choice of initial orbital phase affects long-term coverage performance

## Core Elements

### Mathematical Definition

The condition for a target to be illuminated by the Sun is that the target lies outside both the Earth and lunar shadow cones:

$$\mathbf{n}_{\text{sun}} \cdot (\mathbf{r} - \mathbf{r}_{\text{E/M}}) > 0$$

where $\mathbf{n}_{\text{sun}}$ is the unit vector pointing toward the Sun, $\mathbf{r}$ is the target position, and $\mathbf{r}_{\text{E/M}}$ is the position of the primary body (Earth or Moon).

### Key Properties

The illumination constraint is periodic in time, with a period equal to the Sun-Moon synodic period (approximately 29.5 days). In shadow regions, optical sensors cannot detect targets.

### Application Scenarios

The illumination constraint affects orbit design, observation scheduling, and coverage assessment for SSA architectures. It is a critical constraint in optical detection mission planning.

## Related Concepts

- [Pointing Constraint](/en/glossary/observation/pointing-constraint/)
- [Signal-to-Noise Ratio (SNR)](/en/glossary/observation/signal-to-noise-ratio/)
- [Cislunar Space Situational Awareness Architecture Design](/en/glossary/doctrine/cislunar-space-situational-awareness/)

## References

- Klonowski M. Cislunar Space Situational Awareness Architecture Design and Analysis[D]. University of Colorado Boulder, 2025.
- Vendl A, Holzinger M J. Observability of space objects in cislunar space[J]. 2016.
