---
title: Free-Return Trajectory (自由返回轨道)
description: Detailed explanation of free-return trajectory definition, dynamics principles, safety role in crewed cislunar missions, and design methods
keywords: Free-Return Trajectory, crewed lunar mission, safety orbit, cislunar transfer, gravity-assist return, orbital design
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Free-Return Trajectory
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Free-Return Trajectory Explained | Cislunar Space
  description: Detailed explanation of free-return trajectory definition, dynamics principles, safety role in crewed cislunar missions, and design methods
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Free-Return Trajectory Explained | Cislunar Space
  description: Detailed explanation of free-return trajectory definition, dynamics principles, safety role in crewed cislunar missions, and design methods
  image: /logo.png
permalink: /en/glossary/orbits/free-return-trajectory/
---

# Free-Return Trajectory

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A free-return trajectory is a transfer orbit that **requires no additional propulsion to naturally return to the departure body** using celestial gravity alone. In cislunar missions, free-return trajectories provide critical safety assurance for crewed missions -- even if the propulsion system completely fails, the spacecraft can still naturally return to Earth's atmosphere using the gravity of Earth and the Moon.

## Key Elements

### Dynamics Principles of Free-Return Trajectories

Free-return trajectory design is based on energy conservation and gravity slingshot effects in the restricted three-body problem:

- **Gravity slingshot**: When the spacecraft approaches the Moon, lunar gravity changes its velocity vector, deflecting its orbit toward Earth
- **Jacobi constant conservation**: In the circular restricted three-body problem, the Jacobi constant $C_J$ is conserved, constraining the spacecraft's accessible region in the rotating frame
- **Natural return path**: By precisely designing departure velocity and direction, the spacecraft is guided back to Earth after flying past the Moon

The Jacobi constant of a free-return trajectory satisfies:

$$C_J = 2U(x, y) - v^2 = \text{const}$$

where $U$ is the effective potential function and $v$ is the speed in the rotating reference frame.

### Classification of Free-Return Trajectories

Based on whether they pass near the Moon, free-return trajectories can be classified as:

- **Lunar free-return**: Passes near the Moon, using lunar gravity for deflection and return; the most typical free-return scheme
- **Non-lunar free-return**: Does not pass near the Moon, relying solely on Earth's gravity for return, but with longer transfer times
- **Hybrid free-return**: A composite scheme combining lunar gravity assist and Earth gravity

### Design Constraints of Free-Return Trajectories

Designing a free-return trajectory must satisfy the following conditions:

- **Departure constraint**: The velocity increment $\Delta V$ from the parking orbit must be within the launch vehicle's capability
- **Return constraint**: The Earth re-entry angle upon return must be within a safe range (typically $5°$-$8°$); too steep causes excessive g-loading, too shallow causes the spacecraft to skip off the atmosphere
- **Time constraint**: Free-return trajectory periods are typically 6-10 days, must meet mission timeline planning
- **Lunar flyby constraint**: Perilune altitude must meet minimum safe distance requirements

### Apollo Missions' Free-Return Trajectories

Apollo crewed lunar missions extensively used free-return trajectories. In the Apollo 13 incident, it was the free-return trajectory that ensured the crew's safe return -- when the service module propulsion system failed, the spacecraft naturally returned to Earth along the free-return trajectory without any additional propulsion maneuvers.

## Application Value

Free-return trajectories have irreplaceable safety value in crewed cislunar missions:

- **Essential for crewed missions**: All crewed cislunar missions must design free-return trajectories as emergency return plans
- **Propulsion system redundancy**: Free-return trajectories provide physical safety redundancy for the propulsion system; even complete failure allows safe return
- **Orbital design starting point**: Free-return trajectories often serve as initial guesses or safety baselines for more complex transfer orbit design
- **Mission planning constraint**: The free-return constraint is one of the fundamental constraints in crewed mission orbit design

## Related Concepts
- [Transfer Orbit](/en/glossary/orbits/transfer-orbit/)
- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/dro/)
- [Lunar Gravity Assist](/en/glossary/other/lunar-gravity-assist/)

## References
- Berry R L. Launch window and translunar, transearth trajectory analysis for the Apollo 11 lunar landing mission[R]. NASA, 1970.
- Wei Z et al. Research on lunar gravity-assist injection into cislunar distant retrograde orbit families[J]. 2026.
- Vallado D A. Fundamentals of Astrodynamics and Applications[M]. 4th ed. 2013.
