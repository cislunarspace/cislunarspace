---
title: Formation Flight
description: A mission mode in which multiple spacecraft fly cooperatively while maintaining a specific relative configuration; in the three-body environment, boundedness is analyzed with the linearized relative-motion equations and Floquet decomposition, and typical configurations include the parallel/circular formations at the triangular libration points and the accompanying/fly-around formations on DROs.
keywords: Formation Flight, fly-around formation, triangular libration point, DRO, relative motion, cislunar space
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: Formation Flight
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Formation Flight Explained | Term Definition"
  description: A mission mode in which multiple spacecraft fly cooperatively while maintaining a specific relative configuration; in the three-body environment, boundedness is analyzed with the linearized relative-motion equations and Floquet decomposition, and typical configurations include the parallel/circular formations at the triangular libration points and the accompanying/fly-around formations on DROs.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Formation Flight Explained | Term Definition"
  description: A mission mode in which multiple spacecraft fly cooperatively while maintaining a specific relative configuration; in the three-body environment, boundedness is analyzed with the linearized relative-motion equations and Floquet decomposition, and typical configurations include the parallel/circular formations at the triangular libration points and the accompanying/fly-around formations on DROs.
  image: /logo.png
permalink: /en/glossary/orbits/formation-flight/
---

# Formation Flight

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Formation flight is a mission mode in which multiple spacecraft fly cooperatively while maintaining a specific relative configuration. In the three-body environment, relative motion is analyzed with the linearized relative-motion equations plus Floquet decomposition: the bounded solution set already contains periodic and quasi-periodic solutions, and only the divergent ones need to be removed: boundedness is the essential requirement for preventing drift and collision between members (Yang, Wang & Zhang 2023). Compared with two-body orbits, the strong nonlinearity of three-body dynamics makes formation keeping more dependent on the choice of dynamical structure.

## Triangular Libration Point Formations

Catlin & McLaughlin 2007 derived the relative motion near Earth–Moon L4 in the CR3BP, decomposing it into long-period and short-period components that are designed separately (when both periods coexist the relative motion is a complex curve with axis ratio about 16/5 and period 458 days, unsuitable for formations):

- **Parallel formation**: members keep a fixed in-plane phase offset while their out-of-plane components are identical at all times. The most tolerant of injection errors (under the maintenance constraint, an initial-value accuracy of 1000% (i.e. 26 km and 1 m/s) suffices), it is the most robust natural formation in the paper.
- **Leader–follower formation**: members trail one another along the same trajectory.
- **Circular formation**: the long-period motion has an ellipse axis ratio of about 16/3 (period about 92 days), so a natural circular formation is impossible; the short-period motion (axis ratio about 2, period about one month) yields, by planar approximation, an approximate circle inclined about 60°, but it requires active control to maintain (an impulse reset at the end of each revolution, or continuous correction).

Background and value: no spacecraft had yet reached the triangular libration points (as of 2007), and getting there costs significantly more than reaching the collinear points; the value lies in unobstructed lines of sight for deep-space observation and radiation monitoring, and in future space-station siting. Perturbation ranking: solar point-mass gravity most significant, solar radiation pressure next, Earth's J2 negligible (Catlin 2007).

## Relative-Motion Modes on DROs

For a reference DRO (13.64 days, 2:1 resonance), the bounded solutions of the linearized relative motion combine into three modes (Yang, Wang & Zhang 2023):

- **Planar periodic mode (also called natural periodic mode)**: the deputy sits on the reference DRO with a phase offset; the trajectory stays on one side of the chief only, suiting it as a parking orbit for rendezvous and docking.
- **Planar quasi-periodic mode**: composed of two periodic components, the trajectory rotates around the chief within a bounded hollow region, the basic mode for fly-around formations. Note that the geometry of purely natural long-term fly-around is irregular; the engineering fly-around is a patchwork of a natural segment within one DRO period + a transfer segment, needing only two impulses per revolution and less than 1 cm/s of fuel per revolution for a 1 km-scale formation.
- **Normal quasi-periodic mode**: contains only the normal (z) component and serves to extend a planar formation into three dimensions: it can only be superimposed on a planar formation, never forms a formation alone.

## DRO Formation Design

Yang et al. 2023 (Chinese Journal of Aeronautics, Chinese-language edition, a sister paper by the same team as the English paper above) give two designs:

- **Natural accompanying formation**: based on the periodic solutions among the bounded ones, the deputy accompanies the chief a few meters to several hundred kilometers ahead or behind, long-term and low-fuel; but the natural configurations are very limited and the relative motion is slow.
- **Circular controlled fly-around formation**: with a spatial circle as the reference trajectory, impulses are applied at evenly spaced maneuver points to control the deputy's fly-around (the example uses 10 maneuver points per revolution, at scales of 1–100 km); the fuel cost depends on the circle's normal direction, center position, and scale; this is impulsive control, not continuous thrust.

## Phase Difference and Rendezvous

The angular spacing along the orbit between two spacecraft on the same halo orbit is called the phase difference. In same-orbit rendezvous, for equal transfer time the larger the initial phase difference, the larger the required velocity increment (Sun 2017's example: on an L2 northern halo orbit, a 1° phase difference allows a 3.46-day transfer at only 3.40 m/s, while 5° takes 7.35 days at 49.85 m/s); for rendezvous between halo orbits of different amplitudes, the larger the amplitude difference, the larger the ΔV. So whenever safety permits, the phase difference should be as small as possible.

## Terminology Variants

| Term | Meaning | Source |
|------|---------|--------|
| Parallel formation | Configuration with in-plane phase offset and identical out-of-plane components (most robust) | Catlin 2007 |
| Circular formation | Circular configuration from short-period planar approximation plus active control | Catlin 2007 |
| Triangular libration point formation | Formation design near L4/L5 | Catlin 2007 |
| Planar periodic mode | Deputy phase-offset on the reference DRO (= natural periodic mode) | Yang 2023 |
| Planar quasi-periodic mode | Bounded hollow-region mode rotating around the chief (fly-around basis) | Yang 2023 |
| Normal quasi-periodic mode | Normal component only, superimposed to extend a formation to 3D | Yang 2023 |
| Controlled fly-around formation | Spatial-circle reference trajectory plus maneuver-point impulses | Yang et al. 2023 (Chinese Journal of Aeronautics) |
| Phase difference | Angular spacing between two spacecraft on the same orbit | Sun 2017 |

## Related Concepts

- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/distant-retrograde-orbit-dro/)
- [Multi-Body Constellation](/en/glossary/orbits/multi-body-constellation/)
- [Halo Orbit](/en/glossary/orbits/halo-orbit/)
- [Quasi-Periodic Orbit (QPO)](/en/glossary/orbits/qpo/)

## References

- Catlin & McLaughlin, 2007, Earth–Moon triangular libration point spacecraft formations
- Sun, Zhang & Luo, 2017, Libration-point rendezvous trajectory design based on a three-body Lambert algorithm
- Yang, Wang & Zhang, 2023, Close relative motion on distant retrograde orbits
- Yang, Fu & Zhang, 2023, Close-proximity natural and controlled formation flying on distant retrograde orbits (Chinese Journal of Aeronautics 44(5):326563, in Chinese)
