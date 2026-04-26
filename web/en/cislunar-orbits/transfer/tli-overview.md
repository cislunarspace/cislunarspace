---
title: TLI Overview
description: Principles, launch windows, energy budget, and typical mission parameters of Trans-Lunar Injection (TLI).
keywords: TLI, Trans-Lunar Injection, launch window, C3, hyperbolic excess velocity, Apollo, Chang'e
author: CislunarSpace
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /en/cislunar-orbits/transfer/tli-overview/
---

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Source: [CislunarSpace](https://cislunarspace.cn)

# TLI Overview

## Definition

TLI (Trans-Lunar Injection) is the first major maneuver in a lunar transfer mission, delivering a spacecraft from a low-Earth parking orbit into a trans-lunar trajectory. The TLI maneuver is typically executed from a Earth parking orbit (LEO or high elliptical orbit) using an upper stage or the spacecraft's main engine to provide the required $\Delta V$.

Historically, missions that have performed TLI maneuvers include: Apollo crewed lunar missions, the Chang'e series lunar probes, the SLIM lunar lander, and several deep space exploration missions.

## Launch Windows

TLI launch windows are determined by the Earth-Moon geometry, with the main considerations including:

### Lunar Phase

The optimal TLI launch window occurs when the Moon is near **perigee**, when the Moon is closest to Earth and the transfer requires the least energy. Lunar phase (the angle relative to the Sun) is also an important parameter — the ideal launch timing is when the Moon's position in the sky favors observation and communication.

### Launch Opportunity Frequency

Due to the orbital period relationship of the Earth-Moon system, suitable TLI launch windows occur approximately every 14-15 days (half a synodic month). This is because after each launch, one must wait for the Moon to move to the appropriate position for optimal-energy arrival.

### Cost of Window Deviation

If the launch timing deviates from the optimal window:
- Transfer energy $C_3$ increases (possibly reaching -0.3 km$^2$/s$^2$ or higher)
- Transfer time varies (may lengthen or shorten)
- Arrival phase at the Moon is unfavorable, affecting rendezvous/docking or landing

## Energy Budget

TLI energy requirements are characterized by hyperbolic excess velocity $C_3$:

$$C_3 = v^2 - \frac{2\mu_E}{r}$$

The velocity increment needed to go from LEO (185 km circular orbit, $v \approx 7.8$ km/s) to escape velocity ($v_{escape} = \sqrt{2\mu_E/r} \approx 11.0$ km/s):

$$\Delta V_{TLI} = v_{escape} - v_{LEO} \approx 3.1-3.3 \text{ km/s}$$

| Mission | LEO Parking Orbit | TLI ΔV | Notes |
|---------|-------------------|---------|-------|
| Apollo 11 | 185 km | ~3.05 km/s | Saturn V S-IVB |
| Chang'e 5 | 190 km | ~3.0 km/s | Orbiter+Return |
| SLIM | 190 km | ~3.1 km/s | Small lander |

## Post-Launch Trajectory

A typical TLI launch sequence:

1. **LEO Insertion**: Launch vehicle delivers spacecraft to parking orbit
2. **Checkout and Wait**: Perform system checks in LEO, await suitable launch window
3. **TLI Maneuver**: Upper stage or main engine ignition, providing $\Delta V \approx 3.1$ km/s
4. **Upper Stage Separation**: Transfer stage separates from spacecraft
5. **Mid-Course Correction** (optional): 1-2 trajectory correction maneuvers ($\Delta V \sim 1-50$ m/s)
6. **Lunar Arrival**: Enter Moon's sphere of influence (~64,000 km), prepare for orbit insertion

## Launch Window Planning Tools

Modern mission planning uses tools such as GMAT and STK for TLI launch window optimization:
- **GMAT**: NASA's open-source orbit design tool, supporting TLI optimization and pork-chop plot generation
- **STK** (Satellite Tool Kit): AGI's professional orbit analysis software, providing high-precision window calculations

## Simulation Experiments

Design TLI maneuvers in the [Satellite Orbit Simulation Lab](/en/satellite-simulation/) to observe transfer trajectory profiles under different launch windows.
