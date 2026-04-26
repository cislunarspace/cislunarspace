---
title: NRHO (Near-Rectilinear Halo Orbit)
description: Overview of NRHO (Near-Rectilinear Halo Orbit): definition, dynamical characteristics, orbit family classification, and engineering applications.
keywords: NRHO, Near-Rectilinear Halo Orbit, L1 NRHO, L2 NRHO, halo orbit, CR3BP
author: CislunarSpace
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /en/cislunar-orbits/nrho/
---

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Source: [https://cislunarspace.cn](https://cislunarspace.cn)

# NRHO (Near-Rectilinear Halo Orbit)

## Definition and Physical Background

An NRHO (Near-Rectilinear Halo Orbit) is a special type of periodic orbit in the Circular Restricted Three-Body Problem (CR3BP), existing near the L1 and L2 Lagrange points of the Earth-Moon system. The name "near-rectilinear" derives from the orbit's nearly linear geometric shape in the synodic (rotating) reference frame — a spacecraft near the L1 point moves back and forth along an approximately straight line, with a large amplitude ratio $A_z/A_x$ and an orbital plane nearly perpendicular to the Earth-Moon line.

Halo orbits and NRHOs are related but not identical. A halo orbit is the general term for periodic or quasi-periodic orbits near the L1/L2 Lagrange points, emphasizing their "halo-like" three-dimensional shape. An NRHO places greater emphasis on the near-rectilinear geometric characteristic and typically refers to the class of halo orbits with large amplitudes and high inclinations. In engineering discourse, "NRHO" has become the proper name for the specific orbit type selected for the Gateway mission.

## Dynamical Characteristics

The dynamics of an NRHO are governed by the Jacobi constant $C_J$ in the Earth-Moon CR3BP. Near the critical value $C_J \approx 3$, the orbit exhibits quasi-periodic behavior: the spacecraft oscillates near the L1/L2 point with a period of approximately 6.5 to 8 Earth days.

L1 NRHOs and L2 NRHOs differ in their stability directions — an L1 NRHO possesses locally stable manifolds in certain directions, facilitating low-energy transfer from the Earth direction; an L2 NRHO is better suited for communication relay and observation missions on the far side of the Moon.

## Orbit Family Classification

NRHOs can be classified into four families based on the Lagrange point (L1/L2) and amplitude (northern/southern):
- L1 Northern NRHO and L1 Southern NRHO
- L2 Northern NRHO and L2 Southern NRHO

The amplitude ratio $A_z/A_x$ is a key parameter distinguishing halo orbits from ordinary Lyapunov orbits: when $A_z/A_x > 1$, the orbit is typically classified as a halo orbit or NRHO.

## Engineering Applications

The primary engineering value of NRHOs lies in their geometric position relative to the Moon:
- **Lunar Gateway**: NASA's Artemis program selected an L1 NRHO as the Gateway's orbit, balancing Earth-Moon round trips and lunar surface access
- **Relay and Observation**: An L2 NRHO can provide continuous communication coverage for the far side of the Moon (e.g., the Chang'e-4 landing region)
- **Fuel Efficiency**: The ΔV budget for transfer from an NRHO to the lunar surface is approximately 200-400 m/s, superior to direct descent from LEO

## Simulation Experiments

Explore the orbital geometry and dynamical characteristics of NRHOs interactively in the [Satellite Orbit Simulation Laboratory](/en/satellite-simulation/).

## Related Concepts

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)
- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/dro/)
- [Cislunar Orbit Families Overview](/en/cislunar-orbits/)
