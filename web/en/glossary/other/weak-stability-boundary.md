---
title: Weak Stability Boundary / WSB
description: Detailed explanation of weak stability boundary definition, three-body dynamics nature, transfer characteristics, and applications in low-energy orbital transfers
keywords: Weak Stability Boundary, WSB, three-body problem, low-energy transfer, gravitational capture, Earth-Moon transfer
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Weak Stability Boundary (WSB)
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Weak Stability Boundary (WSB) Explained | Cislunar Space
  description: Detailed explanation of weak stability boundary definition, three-body dynamics nature, and applications in low-energy orbital transfers
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Weak Stability Boundary (WSB) Explained | Cislunar Space
  description: Detailed explanation of weak stability boundary definition, three-body dynamics nature, and applications in low-energy orbital transfers
  image: /logo.png
permalink: /en/glossary/other/weak-stability-boundary/
---

# Weak Stability Boundary (WSB)

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Weak Stability Boundary (WSB) is a region in the Restricted Three-Body Problem (CR3BP) where a spacecraft's gravitational binding to one primary body becomes extremely weak. Within the WSB region, although the spacecraft is nominally within one primary body's sphere of influence, its dynamical state is extremely sensitive to initial conditions — a tiny velocity perturbation can cause the spacecraft to "slide" from one primary body's gravitational domain into another, achieving a natural inter-body transfer.

The concept of WSB was originally proposed by Belbruno (1987) while studying low-energy Earth-Moon transfers. It is also known as the "Weak Stability Region" or "Fuzzy Boundary."

## Core Elements

### Three-Body Dynamics Nature

The existence of WSB is a direct consequence of the dynamical properties of the Restricted Three-Body Problem. In the CR3BP, there exist five libration points (L1–L5), where L1 and L2 are unstable saddle points. Near these libration points, there exist families of invariant manifolds — stable manifolds and unstable manifolds.

- **Stable manifold**: Spacecraft moving along the stable manifold will asymptotically approach periodic orbits near the libration point.
- **Unstable manifold**: Spacecraft moving along the unstable manifold will asymptotically diverge from periodic orbits near the libration point.

The WSB region roughly corresponds to the spatial area covered by unstable manifolds. In these regions, the spacecraft's motion is in a "marginally stable" state — with both a tendency to be captured by the primary body and a tendency to escape.

### Transfer Characteristics

WSB transfers have the following unique properties:

1. **Low impulse requirements**: The $\Delta v$ required for WSB transfers is typically much less than traditional Hohmann transfers. For example, a WSB transfer from Earth to the Moon may require only a few hundred m/s total impulse, compared to approximately 3.1 km/s for a Hohmann transfer.

2. **Long transfer time**: The trade-off for low impulse is significantly increased transfer time. WSB transfers typically require months or more, far exceeding the few days of a Hohmann transfer.

3. **Sensitivity to initial conditions**: WSB transfers are extremely sensitive to departure time and initial state, requiring precise trajectory design and navigation.

4. **Chaotic properties**: Orbital motion in the WSB region exhibits chaotic characteristics, limiting long-term prediction accuracy.

### WSB and Invariant Manifolds

From a dynamical systems theory perspective, the WSB boundary is closely related to the unstable manifolds of the L1/L2 libration points. Spacecraft can "slide" along these invariant manifold "tube" structures through the Earth-Moon system with low energy, achieving natural transfers from the Earth vicinity to the Moon vicinity.

Belbruno and Miller (1993) first applied this principle to design a low-energy lunar capture trajectory for the Japanese spacecraft Hiten, validating the feasibility of WSB transfers. This success pioneered a new direction in cislunar low-energy transfer research.

### WSB Transfer Design Methods

WSB transfer trajectory design typically employs the following methods:

1. **Backward integration**: Starting from the target orbit (e.g., near the Moon), integrate backward along unstable manifolds to the departure region (e.g., near LEO), screening for transfer trajectories that meet constraints.

2. **Poincare section method**: Select appropriate sections in phase space (such as the L1 or L2 plane), analyze the distribution of trajectory intersections on the section, and identify WSB transfer channels.

3. **Global search**: Combine global optimization algorithms (such as differential evolution) with broad parameter space searches to find WSB transfer trajectories meeting constraints.

## Application Value

WSB transfers have important applications in:

- **Lunar exploration**: Providing low-energy transfer solutions for low-cost lunar missions.
- **Interplanetary missions**: The WSB concept can be extended to the Sun-Earth and Sun-Jupiter systems, providing theoretical foundations for low-energy interplanetary transfers.
- **Libration point missions**: WSB transfers are an efficient way to reach orbits near the Earth-Moon L1/L2 libration points.

It should be noted that while WSB transfers have low impulse requirements, they have long transfer times and require high navigation precision. In practice, WSB transfers are often combined with Lunar Gravity Assist (LGA) or Powered Lunar Flyby (PLF) to balance impulse requirements and transfer time.

## Related Concepts

- [Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)
- [Lunar Gravity Assist (LGA)](/en/glossary/other/lunar-gravity-assist/)
- [Transfer Orbit](/en/glossary/orbits/transfer-orbit/)
- [Libration Point](/en/glossary/dynamics/libration-point/)

## References

- Belbruno E A, "Lunar Capture Orbits, a Method of Constructing Earth-Moon Trajectories and the Lunar Gas Mission", IAF-87-329, 1987.
- Belbruno E A, Miller J K, "Sun-Perturbed Earth-to-Moon Transfers with Ballistic Capture", Journal of Guidance, Control, and Dynamics, 16(4), 1993.
- Koon W S, Lo M W, Marsden J E, Ross S D, "Dynamical Systems, the Three-Body Problem and Space Mission Design", 2011.
