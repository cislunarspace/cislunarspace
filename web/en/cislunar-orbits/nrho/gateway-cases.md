---
title: Gateway Engineering Case Study
description: NASA's Lunar Gateway NRHO orbit selection rationale, international cooperation framework, and cis-lunar transfer design.
keywords: Gateway, Artemis, Lunar Gateway, NRHO applications, international cooperation
author: CislunarSpace
date: 2026-04-26
lastUpdated: 2026-08-27
permalink: /en/cislunar-orbits/nrho/gateway-cases/
wechatShare:
  title: "Cislunar Space Guide | Gateway Engineering Case Study"
  desc: "NASA's Lunar Gateway NRHO orbit selection rationale, international cooperation framework, and cis-lunar transfer design."
  image: "/logo.png"
---

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Source: [CislunarSpace](https://cislunarspace.cn)

# Gateway Engineering Case Study

## Lunar Gateway Overview

NASA's **Lunar Gateway** is the cornerstone infrastructure of the Artemis program, a small space station planned for operation in cislunar space. Unlike the International Space Station (ISS), the Gateway does not occupy a continuous resident orbit; instead, it flies an L2 southern 9:2 synodic-resonant NRHO, circling the Moon every ≈ 6.56 days and supporting deep-space and polar-surface missions.

NASA selected NRHO as the Gateway's operational orbit based on the following considerations:

1. **Orbital Stability**: NRHO's weak hyperbolic instability keeps station-keeping propellant demand low
2. **Lunar Surface Accessibility**: Transfer ΔV from NRHO to the lunar poles is approximately 200–400 m/s, superior to LEO
3. **Communication Coverage**: The station hovers above the lunar south polar region for most of every revolution, giving good visibility of polar landing zones
4. **Deep-Space Hub**: NRHO can serve as an intermediate staging point for cis-lunar and deep-space missions

Gateway's target NRHO parameters: perilune altitude roughly 1,500–3,000 km (sweeping over the lunar north pole), apolune about 70,000 km from the Moon (extending beyond the south pole), period approximately 6.56 days.

## International Cooperation Framework

The Gateway is one of the largest multilateral space cooperation projects to date, with each partner developing and operating different modules:

| Partner | Module | Function |
| --------- | -------- | ---------- |
| NASA (USA) | PPE (Power and Propulsion), HALO (Habitation and Logistics Outpost) | Power, propulsion, life support |
| ESA (Europe) | ESPRIT (European System Providing Refueling, Infrastructure and Telecommunications) | Propellant resupply, communications enhancement |
| JAXA (Japan) | I-HAB (International Habitation Module) | Crew habitation, scientific experiments |
| CSA (Canada) | Canadarm3 | Extravehicular robotics operations |

Each module is designed to operate independently or collaboratively in the Gateway NRHO, reflecting a modular, multinational design philosophy.

## Cis-Lunar Transfer Design

Transfers from Earth to the Gateway NRHO are typically divided into two phases:

1. **Trans-Lunar Injection (TLI)**: Launch from LEO or direct injection into a trans-lunar trajectory
2. **NRHO Insertion**: After lunar arrival, the spacecraft follows the stable manifold into the target orbit and performs the insertion maneuver

A typical TLI energy budget is approximately $\Delta V \approx 3.1–3.3$ km/s (relative to LEO), with NRHO insertion maneuvers after arriving at the lunar sphere of influence requiring approximately 200–400 m/s.

## Alternative Orbit Comparison

During the Gateway planning phase, DRO was also considered as an alternative operational orbit. In comparison:

| Characteristic | NRHO | DRO |
| ---------------- | ------ | ----- |
| Lunar Surface Accessibility | Good (200–400 m/s to poles) | Poor |
| Station-Keeping ΔV | A few m/s/year (below 2 m/s/year with modern methods) | Practically none (linearly stable in the CR3BP) |
| Earth Communication | Good | Better |
| Lunar South-Pole Coverage | Good (southern members dwell above the south pole most of each revolution) | Moderate |
| Engineering Maturity | Low (Gateway is first large-scale application; CAPSTONE already validated this orbit class) | Artemis I actually flew a distant retrograde lunar orbit |

NASA ultimately selected NRHO as the Gateway's operational orbit primarily due to its accessibility advantage to the lunar surface, especially the south pole landing zone.

## Simulation Experiment
