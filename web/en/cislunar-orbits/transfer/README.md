---
title: Earth-Moon Transfer Orbit
description: "Overview of Earth-Moon transfer orbits: classification, energy budget, time vs. fuel tradeoffs, and rendezvous design with NRHO and DRO."
keywords: Earth-Moon transfer orbit, TLI, ballistic capture, transfer corridor, launch window, energy budget
author: CislunarSpace
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /en/cislunar-orbits/transfer/
---

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Source: [https://cislunarspace.cn](https://cislunarspace.cn)

# Earth-Moon Transfer Orbit

## Definition and Classification

An Earth-Moon transfer orbit is the orbital segment connecting a Low Earth Orbit (LEO) to a target orbit in cislunar space, such as an NRHO, DRO, or the lunar surface. Depending on the transfer strategy, these orbits can be classified as follows:

### Impulsive Transfer

Uses one or a few high-thrust maneuvers to complete the transfer, typically a Hohmann Transfer or a direct trans-lunar injection. The typical $\Delta V$ from LEO to TLI (Trans-Lunar Injection) is approximately 3.1–3.3 km/s.

### Low-Energy Transfer

Exploits the dynamical characteristics of the Earth-Moon system — such as the Weak Stability Boundary (WSB) and stable manifolds of halo orbits — to achieve transfer at a lower energy cost. The trade-off is a significantly longer transfer time, ranging from several weeks to months. The Weak Stability Boundary transfer is a representative example.

### Ballistic Capture Transfer

Uses lunar gravity assist so that the spacecraft is "captured" by the Moon's gravity upon approach without requiring propulsion. A small maneuver is then performed to enter the target orbit. This method can substantially save propellant but demands precise launch timing.

## Energy Budget

The energy requirement for an Earth-Moon transfer is commonly characterized by the hyperbolic excess velocity ($C_3$):

$$C_3 = v^2 - \frac{2\mu}{r}$$

where $v$ is the spacecraft's velocity in the Earth-centered inertial frame and $\mu$ is Earth's gravitational parameter.

From LEO (185 km circular orbit) to TLI, the typical $C_3 \approx -0.5$ km$^2$/s$^2$ (corresponding to $v \approx 10.9$ km/s), with a required $\Delta V \approx 3.1-3.3$ km/s.

## Transfer Time vs. Energy Tradeoff

Earth-Moon transfer is a classic bi-objective optimization problem balancing time and fuel:

| Transfer Type | Typical Duration | Typical ΔV | Suitable For |
|---------------|-------------------|-------------|---------------|
| Direct transfer | 3–5 days | ~3.2 km/s | Urgent missions, cargo |
| Low-energy transfer | 2–4 weeks | ~3.0 km/s | Crewed missions, probes |
| Ballistic capture | 1–3 months | ~2.9 km/s | Small probes, CubeSats |

## Rendezvous with NRHO and DRO

After arriving in cislunar space, the spacecraft must perform rendezvous and docking or orbit insertion with the target orbit:

- **NRHO rendezvous**: Orbit insertion maneuver near the L1 point ($\Delta V \approx 200-400$ m/s) to enter the NRHO.
- **DRO rendezvous**: Insertion maneuver when approaching the target DRO ($\Delta V \approx 100-300$ m/s).
- **Lunar surface rendezvous**: Descent maneuver from NRHO or transfer orbit to the lunar surface ($\Delta V \approx 1.5-2.0$ km/s).

## Simulation

You can design Earth-Moon transfer orbits in the [Satellite Orbit Simulation Lab](/en/satellite-simulation/) and observe transfer trajectories under different $C_3$ values and launch windows.

## Related Concepts

- [NRHO (Near-Rectilinear Halo Orbit)](/en/cislunar-orbits/nrho/)
- [DRO (Distant Retrograde Orbit)](/en/cislunar-orbits/dro/)
- [TLI Overview](/en/cislunar-orbits/transfer/tli-overview/)
- [Ballistic Capture](/en/cislunar-orbits/transfer/ballistic-capture/)
