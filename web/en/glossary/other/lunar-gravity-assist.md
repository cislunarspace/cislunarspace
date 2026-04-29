---
title: Lunar Gravity Assist / LGA (月球借力)
description: Detailed explanation of lunar gravity assist definition, mechanics principles, trajectory design methods, and its key role in low-energy cislunar transfers
keywords: Lunar Gravity Assist, LGA, gravity slingshot, Earth-Moon transfer, orbital maneuver, low-energy transfer
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Lunar Gravity Assist (LGA)
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Lunar Gravity Assist (LGA) Explained | Cislunar Space
  description: Detailed explanation of lunar gravity assist definition, mechanics principles, and its key role in low-energy cislunar transfers
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Lunar Gravity Assist (LGA) Explained | Cislunar Space
  description: Detailed explanation of lunar gravity assist definition, mechanics principles, and its key role in low-energy cislunar transfers
  image: /logo.png
permalink: /en/glossary/other/lunar-gravity-assist/
---

# Lunar Gravity Assist (LGA)

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Lunar Gravity Assist (LGA) is an orbital maneuver technique in which a spacecraft uses the Moon's gravitational field to change its velocity vector. When a spacecraft flies past the Moon, the lunar gravity does work on the spacecraft. In the Moon-fixed reference frame, the spacecraft's speed remains constant but its direction changes; in the inertial frame, both speed and direction change simultaneously.

LGA is fundamentally a "gravitational slingshot" effect that can alter a spacecraft's energy and angular momentum without consuming propellant. It is one of the core techniques for achieving low-energy orbital transfers in cislunar space.

## Core Elements

### Mechanics Principles

In the Moon-fixed reference frame, the spacecraft passes the Moon on a hyperbolic trajectory. If the spacecraft's velocity at the Moon's sphere of influence is $v_{\infty}$ and the perilune radius is $r_p$, the hyperbolic deflection angle $\delta$ is:

$$\sin\frac{\delta}{2} = \frac{1}{1 + \frac{r_p \cdot v_{\infty}^2}{\mu_M}}$$

where $\mu_M = 4902.8 \text{ km}^3/\text{s}^2$ is the Moon's gravitational parameter. The deflection angle $\delta$ depends on the perilune altitude and flyby speed — a lower perilune and slower flyby speed result in a larger deflection angle.

In the inertial frame, the velocity change $\Delta v$ after the lunar flyby can be calculated from the velocity triangle:

$$\Delta v = 2 v_{\infty} \sin\frac{\delta}{2}$$

### Control of Flyby Effect

The lunar gravity assist effect is primarily determined by:

1. **Perilune altitude** ($h_p$): Lower perilune results in a stronger gravitational field and more significant deflection. However, too low a perilune may cause impact with the lunar surface (lunar radius ~1737 km).
2. **Flyby speed** ($v_{\infty}$): Slower speed means the spacecraft spends more time in the lunar gravitational field, resulting in greater deflection.
3. **Flyby geometry** (B-plane parameters): The orientation of the flyby plane determines the direction of velocity change, thereby determining the shape and direction of the post-flyby trajectory.

### Types of Lunar Gravity Assist

Based on the effect on spacecraft energy:

- **Acceleration flyby**: The spacecraft gains energy from the lunar gravitational field, increasing speed. Useful for escaping the Earth-Moon system or entering higher-energy orbits.
- **Deceleration flyby**: The spacecraft loses energy, decreasing speed. Useful for reducing orbital energy and entering capture orbits.
- **Direction-change flyby**: Primarily changes velocity direction without significantly altering energy magnitude. Useful for adjusting orbital plane or direction.

### Unpowered vs Powered Lunar Gravity Assist

Traditional unpowered LGA relies entirely on lunar gravity to change the spacecraft's velocity without additional propulsion. Powered Lunar Flyby (PLF) applies an additional impulse at perilune to enhance the flyby effect or prevent the spacecraft from escaping the Earth-Moon system. PLF schemes have important applications in LEO-to-DRO transfers.

## Application Value

LGA technology has widespread applications in cislunar missions:

- **Low-energy transfer**: LGA enables low-energy transfers from LEO to high-energy target orbits such as DROs and libration point orbits, saving significant propellant compared to direct transfers.
- **Orbital capture**: Through lunar deceleration flybys, spacecraft can be "captured" by lunar gravity without requiring large braking impulses.
- **Deep space mission heritage**: Gravity assist techniques are widely used in interplanetary missions (e.g., Voyager, Cassini). LGA is the specific application of this technology in cislunar space.

Wei et al. (2026) studied LEO-to-DRO transfer schemes based on powered lunar flyby, finding that through properly designed three-burn transfers (LEO de-orbit + perilune maneuver + DRO insertion), efficient orbit insertion can be achieved within shorter transfer times.

## Related Concepts
- [Powered Lunar Flyby (PLF)](/en/glossary/other/powered-lunar-flyby/)
- [Weak Stability Boundary (WSB)](/en/glossary/other/weak-stability-boundary/)
- [Transfer Orbit](/en/glossary/orbits/transfer-orbit/)
- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/dro/)
- [Perilune](/en/glossary/orbits/perilune/)

## References

- Wei Z et al., "Research on Lunar Flyby Transfer to Distant Retrograde Orbit Families in the Earth-Moon System", 2026.
- Broucke R A, "The Celestial Mechanics of Gravity Assist", AIAA/AAS Astrodynamics Conference, 1988.
- Lo M W, Ross S D, "The Lunar L1 Gateway: Portal to the Stars and Beyond", AIAA Space Conference, 2001.
