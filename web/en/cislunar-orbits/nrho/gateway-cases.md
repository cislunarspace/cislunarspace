---
title: Gateway Engineering Case Study
description: NASA's Lunar Gateway NRHO orbit selection rationale, international cooperation framework, and cis-lunar transfer design.
keywords: Gateway, Artemis, Lunar Gateway, NRHO applications, international cooperation
author: CislunarSpace
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /en/cislunar-orbits/nrho/gateway-cases/
---

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Source: [CislunarSpace](https://cislunarspace.cn)

# Gateway Engineering Case Study

## Lunar Gateway Overview

NASA's **Lunar Gateway** is the cornerstone infrastructure of the Artemis program — a small space station planned for operation in cislunar space. Unlike the International Space Station (ISS), the Gateway does not occupy a continuous resident orbit; instead, it operates in an L1 NRHO, periodically visiting the lunar surface and supporting deep-space missions.

NASA selected NRHO as the Gateway's operational orbit based on the following considerations:
1. **Orbital Stability**: The quasi-periodic nature of NRHO in the CR3BP model reduces the propellant required for station-keeping
2. **Lunar Surface Accessibility**: Transfer ΔV from NRHO to the lunar poles is approximately 200–400 m/s, superior to LEO
3. **Communication Coverage**: NRHO provides good communication visibility to the lunar far side, especially the south pole
4. **Deep-Space Hub**: NRHO can serve as an intermediate staging point for cis-lunar and deep-space missions

Gateway's target NRHO parameters: $A_x \approx 3100$ km, period approximately 6.5 days, located near the L1 point.

## International Cooperation Framework

The Gateway is one of the largest multilateral space cooperation projects to date, with each partner developing and operating different modules:

| Partner | Module | Function |
|---------|--------|----------|
| NASA (USA) | PPE (Power and Propulsion), HALO (Habitation and Logistics Outpost) | Power, propulsion, life support |
| ESA (Europe) | ESPRIT (European System Providing Refueling, Infrastructure and Telecommunications) | Propellant resupply, communications enhancement |
| JAXA (Japan) | I-HAB (International Habitation Module) | Crew habitation, scientific experiments |
| CSA (Canada) | Canadarm3 | Extravehicular robotics operations |

Each module is designed to operate independently or collaboratively in the Gateway NRHO, reflecting a modular, multinational design philosophy.

## Cis-Lunar Transfer Design

Transfers from Earth to the Gateway NRHO are typically divided into two phases:
1. **Trans-Lunar Injection (TLI)**: Launch from LEO or direct injection into a trans-lunar trajectory
2. **NRHO Insertion**: Orbital maneuvers near the L1 point to insert the spacecraft into the NRHO

A typical TLI energy budget is approximately $\Delta V \approx 3.1–3.3$ km/s (relative to LEO), with NRHO insertion maneuvers after arriving at the L1 sphere of influence requiring approximately 200–400 m/s.

## Alternative Orbit Comparison

During the Gateway planning phase, DRO was also considered as an alternative operational orbit. In comparison:

| Characteristic | NRHO | DRO |
|----------------|------|-----|
| Lunar Surface Accessibility | Good (200–400 m/s to poles) | Poor |
| Station-Keeping ΔV | 30–80 m/s/year | 5–20 m/s/year |
| Earth Communication | Good | Better |
| Lunar Far-Side Coverage | Moderate | Poor |
| Engineering Maturity | Low (Gateway is first large-scale application) | Higher (validated by CAPSTONE) |

NASA ultimately selected NRHO as the Gateway's operational orbit primarily due to its accessibility advantage to the lunar surface, especially the south pole landing zone.

## Simulation Experiment

In the [Satellite Orbit Simulation Lab](/en/satellite-simulation/), you can set typical Gateway NRHO parameters to observe the orbital profile and design transfer trajectories to the lunar surface.
