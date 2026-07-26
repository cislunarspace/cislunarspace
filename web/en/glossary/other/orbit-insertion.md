---
title: Orbit Insertion
description: Detailed explanation of orbit insertion definition, impulse maneuver principles, role in DRO transfers, and insertion accuracy control
keywords: Orbit Insertion, orbital insertion, impulse maneuver, DRO transfer, three-burn transfer, orbital control
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Orbit Insertion
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Orbit Insertion Explained | Cislunar Space
  description: Detailed explanation of orbit insertion definition, impulse maneuver principles, and role in DRO transfers
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Orbit Insertion Explained | Cislunar Space
  description: Detailed explanation of orbit insertion definition, impulse maneuver principles, and role in DRO transfers
  image: /logo.png
permalink: /en/glossary/other/orbit-insertion/
---

# Orbit Insertion

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Orbit insertion is the process by which a spacecraft applies an impulse maneuver to transition from a transfer or cruise trajectory into its target orbit. Orbit insertion is the final critical step in orbital transfer, and its accuracy and efficiency directly determine mission success or failure.

In cislunar space missions, orbit insertion typically refers to a spacecraft transitioning from an Earth-Moon transfer trajectory into a lunar orbit, Distant Retrograde Orbit (DRO), or an orbit near a libration point. The magnitude of the insertion impulse depends on the velocity difference between the transfer trajectory terminal state and the target orbit.

## Core Elements

### Mechanics Principles of Insertion Impulse

The orbit insertion impulse is fundamentally a velocity increment $\Delta v$. If the spacecraft's velocity at the insertion point is $\mathbf{v}_{\text{transfer}}$ and the target orbit velocity at that point is $\mathbf{v}_{\text{target}}$, then the insertion impulse is:

$$\Delta v_{\text{insertion}} = |\mathbf{v}_{\text{target}} - \mathbf{v}_{\text{transfer}}|$$

The insertion impulse magnitude directly determines propellant consumption. According to the Tsiolkovsky rocket equation:

$$\Delta v = I_{sp} \cdot g_0 \cdot \ln\frac{m_0}{m_f}$$

where $I_{sp}$ is the specific impulse, $g_0$ is standard gravitational acceleration, and $m_0$ and $m_f$ are the masses before and after the burn, respectively. Larger insertion impulses require more propellant, reducing the payload fraction.

### Insertion Impulse in Three-Burn Transfer

In the PLF-based LEO-to-DRO transfer scheme, the insertion impulse is the third impulse $\Delta v_3$ of the three-burn transfer:

$$\Delta v_{\text{total}} = \Delta v_1 + \Delta v_2 + \Delta v_3$$

where:

- $\Delta v_1$: LEO de-orbit impulse (first burn)
- $\Delta v_2$: Perilune maneuver impulse (second burn, applied during PLF)
- $\Delta v_3$: **DRO insertion impulse** (third burn, transferring the spacecraft from the Moon-DRO transfer segment into the target DRO)

The magnitude of $\Delta v_3$ depends on how well the transfer trajectory terminal state matches the target DRO. By optimizing the first two impulses, $\Delta v_3$ can be minimized, thereby reducing the total impulse requirement.

### Insertion Accuracy Control

Insertion accuracy is a critical factor for mission success. Insertion errors can lead to:

1. **Orbital deviation**: The actual orbit deviates from the target orbit, affecting subsequent mission operations.
2. **Increased orbit maintenance**: Post-insertion correction impulses are needed to eliminate insertion errors, increasing propellant consumption.
3. **Compressed mission window**: High-accuracy insertion reduces correction requirements, extending mission lifetime.

Insertion accuracy is influenced by:

- **Navigation accuracy**: Measurement precision of spacecraft position and velocity.
- **Thrust accuracy**: Deviations in thrust magnitude and direction.
- **Timing accuracy**: Errors in the impulse application moment.
- **Transfer trajectory design**: Sensitivity of the transfer trajectory terminal state to insertion point parameters.

### Insertion Strategy Selection

Based on mission requirements, insertion strategies include:

1. **Single-impulse insertion**: Apply the entire impulse at once at the insertion point, directly switching from transfer orbit to target orbit. Suitable for scenarios with small insertion impulses and moderate accuracy requirements.

2. **Multi-impulse insertion**: Split the insertion impulse into multiple applications, each progressively adjusting the orbit. Suitable for scenarios with large insertion impulses or high accuracy requirements.

3. **Continuous-thrust insertion**: Use low-thrust engines (such as electric propulsion) with prolonged continuous thrust for insertion. Suitable for time-insensitive missions requiring high efficiency.

## Application Value

Orbit insertion is a critical element in all orbital transfer missions, particularly important in:

- **DRO insertion**: In three-burn PLF transfers, the insertion impulse transitions the spacecraft from the Moon-DRO transfer segment into stable DRO operation, serving as the final critical step for mission success.
- **Lunar orbit insertion**: After arriving near the Moon, lunar probes must apply an insertion impulse to enter a lunar orbit.
- **Libration point orbit insertion**: After reaching the vicinity of Earth-Moon L1 or L2, an insertion impulse is needed to enter a halo or Lissajous orbit.
- **Interplanetary mission insertion**: Deep space probes arriving at a target planet must apply an insertion impulse to enter a parking orbit.

## Related Concepts

- [Transfer Orbit](/en/glossary/orbits/transfer-orbit/)
- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/dro/)
- [Impulsive Maneuver](/en/glossary/dynamics/impulsive-maneuver/)
- [Powered Lunar Flyby (PLF)](/en/glossary/other/powered-lunar-flyby/)
- [Tsiolkovsky Rocket Equation](/en/glossary/fundamentals/tsiolkovsky-equation/)

## References

- Wei Z et al., "Research on Lunar Flyby Transfer to Distant Retrograde Orbit Families in the Earth-Moon System", 2026.
- Vallado D A, "Fundamentals of Astrodynamics and Applications", 4th ed., Microcosm Press, 2013.
- Wertz J R, Everett D F, Puschell J J, "Space Mission Engineering: The New SMAD", Microcosm Press, 2011.
