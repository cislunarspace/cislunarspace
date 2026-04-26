---
title: Launch Window Analysis
description: Formation mechanism of Earth-Moon transfer launch windows, window frequency, deviation cost, and introduction to planning tools.
keywords: launch window, window frequency, C3 variation, ΔV penalty, GMAT, STK
author: CislunarSpace
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /en/cislunar-orbits/transfer/launch-windows/
---

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

# Launch Window Analysis

## Launch Window Formation Mechanism

Earth-Moon transfer launch windows are determined by the **Earth-Moon geometry cycle**. The fundamental cause is the Earth's rotation period (the Moon's orbital period around Earth is 27.3 days, but accounting for Earth's revolution around the Sun, the actual lunar phase period is 29.5 days).

### Key Geometric Parameters

1. **Lunar phase angle**: The Moon's relative position with respect to the Sun, which determines the lunar phase (new moon, first quarter, full moon, etc.)
2. **Launch direction**: Earth's rotation causes the launch point to change relative to the Moon's direction by approximately $12^\circ$ per day ($360^\circ/30$ days)
3. **Earth-Moon distance**: The Moon's perigee/apogee distance affects transfer energy

### Physical Mechanism of Launch Window Formation

When the launch direction (determined by Earth's rotation) and the Moon's orbital direction and position reach a specific geometric relationship, a spacecraft departing from LEO can reach the Moon with minimum propellant consumption. The timing satisfying this geometric relationship is the TLI launch window.

## Window Frequency

Typical TLI launch window frequency:
- **Optimal windows**: Appear approximately every 14-15 days (half a synodic month)
- **Sub-optimal windows**: Sub-optimal opportunities exist between the two optimal windows, but with higher energy requirements
- **Missing a window**: If a launch window is missed, one typically waits for the next 14-15 day cycle

For missions requiring precise arrival at a specific point on the Moon (such as a particular longitude and latitude on the lunar far side), windows may further narrow to once every 28-30 days.

## Cost of Deviating from Optimal Windows

If the launch timing deviates from the optimal window, the main costs are:

### $C_3$ Increase

Deviating from the optimal window causes the required $C_3$ to increase, with typical increases:
- Deviating by 1 day: $C_3$ increases by approximately $0.05-0.1$ km$^2$/s$^2$
- Deviating by 3 days: $C_3$ increases by approximately $0.2-0.3$ km$^2$/s$^2$

### $\Delta V$ Penalty

The $C_3$ increase directly leads to increased $\Delta V$ required for TLI maneuvers:
- For every $0.1$ km$^2$/s$^2$ increase in $C_3$, $\Delta V$ increases by approximately $50-100$ m/s

### Transfer Time Variation

Deviating from the optimal window may also cause transfer time to lengthen or shorten, as well as unfavorable geometric positions upon lunar arrival.

## Launch Window Planning Tools

### GMAT

NASA's **General Mission Analysis Tool** (GMAT) is an open-source orbital design tool that supports:
- TLI launch window search and optimization
- Pork-Chop plot generation
- Multi-objective optimization (Pareto frontier computation)

### STK

**Systems Tool Kit** (STK, by AGI) is a professional orbital analysis software providing:
- High-precision ephemeris calculations
- Automatic launch window search
- Mission trajectory visualization

### Amateur Tools

Enthusiasts can also use open-source tools such as **Firefly Aerospace's** transfer analysis tools or Python libraries (such as `poliastro`) for basic window analysis.

## Simulation Experiments

You can set different TLI launch timings in the [Satellite Orbit Simulation Laboratory](/satellite-simulation/) to observe changes in transfer trajectories and arrival points.
