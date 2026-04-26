---
title: Ballistic Capture
description: Principles of ballistic capture, comparison with powered capture, its role in low-energy transfers, and analysis of advantages and limitations.
keywords: Ballistic Capture, Low-Energy Transfer, WSB, Weak Stability Boundary, Lunar Gravity Assist
author: CislunarSpace
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /en/cislunar-orbits/transfer/ballistic-capture/
---

> Author: [CislunarSpace](https://gitee.com/cislunarspace)

# Ballistic Capture

## Principles

Ballistic Capture is a technique for Earth-Moon transfer that leverages lunar gravity assist. The core idea is that a spacecraft can be "naturally captured" by the Moon's gravity without performing any propulsion-based deceleration.

Traditional Earth-Moon transfer (powered capture) requires a deceleration maneuver when approaching the Moon to enter lunar orbit. Ballistic capture, on the other hand, exploits the dynamical characteristics of the lunar orbit: if a spacecraft is launched with precise aim at where the Moon will be at a future time, then when the spacecraft arrives at that location, the Moon's gravity will "pull it in" to a relatively stable orbit—even without deceleration.

## Ballistic Capture vs. Powered Capture

| Characteristic | Ballistic Capture | Powered Capture |
|----------------|-------------------|-----------------|
| Propulsion near Moon | None required | Required ($\Delta V \sim 0.8-1.0$ km/s) |
| Launch timing requirement | Very precise (narrow window) | Relatively flexible |
| Transfer duration | Longer (1-3 months) | Shorter (3-5 days) |
| Fuel efficiency | High | Moderate |
| Mission suitability | Small probes, CubeSats | Crewed, cargo, urgent missions |

## Role in Low-Energy Transfers

Ballistic capture is the core implementation mechanism of the **Weak Stability Boundary** (WSB) transfer theory.

WSB theory was proposed by Italian mathematicians Belbruno and Miller in 1987. Their key discovery was that there exists a "weak stability boundary" in the Earth-Moon system, and transfers crossing this boundary can be completed with extremely low energy. The specific process is:

1. Launch with aim at a point ahead of the Moon (not at the Moon itself)
2. Exploit the interaction between solar gravity perturbations and lunar gravity
3. Upon reaching the lunar vicinity, naturally enter the lunar capture region
4. Perform a small maneuver ($\Delta V \sim 50-100$ m/s) to enter the target orbit

Japan's lunar probe **Hiten** (1991) was the first mission to validate WSB ballistic capture transfer. NASA's **GRAIL** mission also adopted a similar low-energy transfer strategy.

## Advantages and Limitations

### Advantages

1. **Fuel savings**: Ballistic capture can reduce the TLI阶段的 $\Delta V$ by approximately 200-300 m/s
2. **Relaxed launch windows**: Although precise timing is required, optimal windows can be selected through advance planning
3. **Suitable for small satellites**: For small probes with tight $\Delta V$ budgets, ballistic capture provides a viable transfer solution

### Limitations

1. **Long transfer time**: Ballistic capture transfer typically takes 1-3 months, far longer than direct transfer
2. **Narrow launch window**: High precision is required for launch timing; deviating from the optimal window significantly increases $C_3$
3. **Communication constraints**: The long transfer time means the spacecraft will experience extended communication blackouts during transit
4. **Mission scheduling**: Ballistic capture is unsuitable for missions requiring rapid response (e.g., crewed missions)

## Related Concepts

The dynamical foundation of ballistic capture involves the Circular Restricted Three-Body Problem (CR3BP) and Weak Stability Boundary theory. See also:
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)
- [Weak Stability Boundary (WSB)](/en/glossary/)

## Simulation Experiments

Design ballistic capture transfers in the [Satellite Orbit Simulation Laboratory](/en/satellite-simulation/) and observe lunar capture effects under different launch timing conditions.
