---
title: Near-Rectilinear Halo Orbit (NRHO)
description: Detailed analysis of the definition, relationship with Halo orbits, resonance characteristics, stability analysis, and applications in cislunar space missions of the Near-Rectilinear Halo Orbit (NRHO)
keywords: Near-Rectilinear Halo Orbit, NRHO, Near-Rectilinear Halo Orbit, Halo orbit, Earth-Moon libration point, L2 point, Gateway space station, Gateway
author: Tianjiang Says
date: 2026-04-04
lastUpdated: 2026-04-26
wechatShare:
  title: Near-Rectilinear Halo Orbit (NRHO)
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Near-Rectilinear Halo Orbit (NRHO) Details | Candidate Orbit for Cislunar Space Station
  description: Detailed analysis of the definition, relationship with Halo orbits, resonance characteristics, stability analysis, and applications in cislunar space missions of the Near-Rectilinear Halo Orbit (NRHO)
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Near-Rectilinear Halo Orbit (NRHO) Details | Candidate Orbit for Cislunar Space Station
  description: Detailed analysis of the definition, relationship with Halo orbits, resonance characteristics, stability analysis, and applications in cislunar space missions of the Near-Rectilinear Halo Orbit (NRHO)
  image: /logo.png
permalink: /en/glossary/orbits/nrho/
---

# Near-Rectilinear Halo Orbit

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A Near-Rectilinear Halo Orbit (NRHO) is a sub-class of Halo orbits near the Earth-Moon collinear libration points $L_1$ or $L_2$. In the synodic reference frame, when the out-of-plane amplitude $A_z$ of a Halo orbit is much larger than the in-plane amplitude $A_y$, the orbit shape transitions from the classic "cashew-shaped" Halo orbit to an approximately linear reciprocating motion -- i.e., the NRHO. In other words, the NRHO corresponds to the extreme members of the Halo orbit family with large $A_z/A_y$ ratios.

![Earth-Moon L1 Northern and L2 Southern Halo Orbits and NRHO](/glossary/Figures/NRHO/地月L1北族和L2南族Halo轨道和NRHO.png)
*Earth-Moon L1 northern family and L2 southern family Halo orbits, with the extreme configuration being the NRHO*



## Geometric Characteristics

- **Extremely low perilune altitude**: typically below 100 km
- **Apolune**: located near the Earth-Moon $L_2$ point
- **Orbital plane symmetric about the $xOz$ plane**: with southern and northern families as two branches
- **Overall presents an approximately linear reciprocating motion**

## Resonance Relationships

Similar to DROs, NRHOs also exhibit resonance relationships with the Moon's orbital period. When the orbital period $T$ and the Moon's orbital period $T_M$ satisfy $T/T_M \approx n/m$, it is referred to as an $m:n$ synodic resonant NRHO.

| Resonance Ratio | Characteristics and Applications |
|:---|:---|
| 3:1, 4:1 (low-order) | Low perilune altitude, advantageous for lunar surface exploration and communications relay |
| **9:2** | **NASA Gateway space station selected orbit -- good stability, suitable for long-term station-keeping** |
| 11:2 (high-order) | Better orbital stability, suitable for long-duration mission |

## Dynamic Symmetry

Unlike DROs which exhibit symmetry about the $x$-axis, NRHOs display **mirror symmetry about the $xOz$ plane**. When an NRHO crosses the $xOz$ plane, the velocity components satisfy the conditions: $\dot{x}$ and $\dot{z}$ change sign while $\dot{y}$ remains unchanged. This symmetry provides natural shooting conditions for differential correction: select an initial point on the $xOz$ plane, retaining only $z_0$ and $\dot{y}_0$ as free variables, integrate for half a period, and verify the $xOz$ plane crossing conditions -- enabling iterative convergence to a periodic orbit.

## Stability Characteristics

NRHO stability analysis requires attention to:

- **Floquet multipliers**: eigenvalues of the monodromy matrix characterizing the amplification/attenuation characteristics of orbital perturbations in each direction
- **Perilune distance $r_p$**: excessively small $r_p$ may risk lunar surface impact, while excessively large $r_p$ weakens communications and exploration advantages
- **Coupling with invariant manifolds in the libration point region**: a unique dynamic characteristic distinguishing NRHOs from DROs

## Engineering Applications

NRHOs have become a popular candidate orbit for current cislunar space missions:

- **China's Chang'e-4 relay satellite "Queqiao"**: successfully operating in an Earth-Moon $L_2$ point Halo orbit, providing communications relay services for lunar far-side exploration
- **NASA "Gateway" space station**: planned deployment in the $L_2$ southern family 9:2 resonant NRHO
- **Cislunar space situation awareness**: NRHOs, with their unique orbital position, are well-suited for deploying relay communications and observation platforms

## Related Concepts
- [Distant Retrograde Orbit (DRO)](/en/glossary/dro/)
- [Earth-Moon L1/L2 Halo Orbits (EML1/EML2 Halo)](/en/glossary/eml-halo/)
- [Starshade](/en/glossary/starshade/)
- [Birkhoff-Gustavson Normal Form](/en/glossary/birkhoff-gustavson/)
- [Central Manifold](/en/glossary/central-manifold/)
- [Action-Angle Variables](/en/glossary/action-angle/)
- [Orbit Identification](/en/glossary/orbit-identification/)
- Halo orbit
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/cr3bp/)
- Libration point (Lagrangian point)
- Ephemeris model
- Invariant manifold

## References

- Zimovan E M. Rectilinear halo orbits and their applications in cislunar space[D]. Purdue University, 2017.
- Williams J, Whitley R. Targeting cislunar rectilinear halo orbits for spacecraft missions[C]. 2017.
- Wu Weiren. Chang'e-4 Lunar Far-Side Soft Landing Mission Design[J]. 2017.
- Qiao C, Long X, Yang L, et al. Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points[J]. Chinese Journal of Aeronautics, 2025. doi: 10.1016/j.cja.2025.103869.
