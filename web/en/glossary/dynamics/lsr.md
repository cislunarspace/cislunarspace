---
title: Lunar Synodic Resonance (LSR)
description: A state in which a spacecraft orbital period is in a simple integer ratio M:N with the lunar synodic period (~29.5 days), enabling eclipse avoidance and long-duration mission design for Gateway-class near rectilinear halo orbits (NRHOs) in cislunar space.
keywords: Lunar Synodic Resonance, LSR, synodic resonance, NRHO, near rectilinear halo orbit, eclipse avoidance, Gateway, BCR4BP, cislunar space, synodic resonant orbit
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-27
wechatShare:
  title: Lunar Synodic Resonance (LSR)
  desc: Commensurate orbital and lunar synodic periods — the key mechanism behind Gateway NRHO eclipse avoidance.
  image: /logo.png
og:
  title: Lunar Synodic Resonance (LSR) Explained | Term Definition
  description: A state in which a spacecraft orbital period is in a simple integer ratio M:N with the lunar synodic period (~29.5 days), enabling eclipse avoidance and long-duration mission design for Gateway-class near rectilinear halo orbits (NRHOs) in cislunar space.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Lunar Synodic Resonance (LSR) Explained | Term Definition
  description: A state in which a spacecraft orbital period is in a simple integer ratio M:N with the lunar synodic period (~29.5 days), enabling eclipse avoidance and long-duration mission design for Gateway-class near rectilinear halo orbits (NRHOs) in cislunar space.
  image: /logo.png
permalink: /en/glossary/dynamics/lsr/
---

# Lunar Synodic Resonance (LSR)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

**Lunar Synodic Resonance (LSR)** is a state in which a spacecraft orbital period $T_{\text{orb}}$ and the lunar synodic period $T_{\text{syn}}$ (~29.5 days, the interval between successive Sun-Earth-Moon conjunctions) satisfy a simple integer ratio:

$$\frac{T_{\text{orb}}}{T_{\text{syn}}} = \frac{P}{Q}$$

with positive integers $P$ and $Q$. The resonance is commonly denoted $M:N$, meaning the spacecraft completes $M$ revolutions while the Sun-Earth-Moon geometry repeats $N$ times. Because the synodic period is defined by the relative motion of the Sun and Moon, the resonance makes the trajectory predictable with respect to the periodic Sun-Earth-Moon configuration (Zimovan-Spreen et al. 2020; Boudad et al. 2020).

## Mathematical and Dynamical Details

In the bicircular restricted four-body problem (BCR4BP), the Sun revolves around the Earth-Moon barycenter at a constant angular rate $\omega_S$ (about $-0.925$ in Earth-Moon non-dimensional units, corresponding to 29.5 days). An $M:N$ synodic resonant periodic orbit must satisfy

$$T_{4BP} = N \left| \frac{2\pi}{\omega_S} \right|$$

with $\left| 2\pi / \omega_S \right| \approx 29.5$ days. The corresponding single-revolution orbital period in the CR3BP is

$$T_{3BP} = \frac{N}{M} \left| \frac{2\pi}{\omega_S} \right|$$

(Oshima 2022).

Synodic resonant orbits in the BCR4BP are computed by pseudo-arclength continuation from CR3BP solutions: the Sun's mass is gradually increased from zero, with intermediate solutions corresponding to higher-period near-periodic orbits in the CR3BP (Boudad et al. 2020). When $M$ is even, two distinct BCR4BP families ($T_0$ and $T_{1/2}$ families) can originate from one CR3BP orbit, distinguished by an initial solar phase offset of $\pi$ (Oshima 2022).

## Key Examples and Eclipse Avoidance

The principal value of LSR lies in eclipse avoidance. Synodic resonant orbits form repeating lobe/peak geometries in the Sun-Moon and Sun-Earth rotating frames; with careful epoch selection, the Earth and Moon shadow cones pass through the inter-lobe gaps without intersecting the trajectory, achieving long-duration ballistic eclipse-free flight (Zimovan-Spreen et al. 2020).

The following table lists key synodic resonant NRHOs along the $L_2$ halo family in the CR3BP Earth-Moon system:

| Resonance | Orbital Period | Perilune Radius | Apolune Radius | Remarks |
|-----------|----------------|-----------------|----------------|---------|
| 9:2 | ~6.56 days | ~3150 km | ~71000 km | Gateway baseline; 9 revs = 2 synodic periods (~59 days) |
| 4:1 | ~7.34 days | ~5600 km | ~75335 km | 4 revs = 1 synodic period; wider eclipse margins |
| 3:1 | ~9.79 days | ~15000 km | ~84500 km | Simple ratio but higher perilune |
| 5:1 | ~5.90 days | — | — | Very low perilune |

Higher-period orbit families adjacent to NRHOs also host synodic resonant members, e.g. 2:1 P2HO1 (period ~14.76 days), 1:1 P2HO1 (~29.5 days), and 3:2 P2HO1, which preserve eclipse-avoidance geometries analogous to the 4:1 or 9:2 NRHOs (Zimovan-Spreen et al. 2020).

## Application Highlights

1. **Eclipse avoidance**: in the BCR4BP, the 9:2 NRHO trajectory in the Sun-$B_1$ rotating frame is completely clear of the Earth's penumbra cone, enabling purely ballistic, long-duration eclipse-free flight.
2. **Long-term predictability**: the repeating geometry allows reliable estimation of lifetime station-keeping budgets and enables coordinated multi-spacecraft phasing (e.g. two spacecraft on the 9:2 NRHO with a $\pi$ solar-phase offset can fly concurrently without collision) (Boudad et al. 2020).
3. **Navigation and mission planning**: the periodic Sun-Earth-Moon geometry simplifies navigation filter design and onboarding epoch selection.

## Related Concepts

- [Halo Orbit Computation](/en/glossary/dynamics/halo-orbit-computation/)

- [Eclipse Avoidance Path Constraint](/en/glossary/dynamics/trajectory-constraints/)

- [Station-Keeping](/en/glossary/dynamics/station-keeping/)

- [Weak Stability Boundary](/en/glossary/dynamics/wsb/)

- [Invariant Manifold](/en/glossary/dynamics/invariant-manifold/)

- [Orbital Resonance](/en/glossary/dynamics/orbital-resonance/)

## References

- Zimovan-Spreen, E. M. et al., 2020, "Near rectilinear halo orbits and nearby higher-period dynamical structures: orbital stability and resonance properties," *Acta Astronautica*

- Boudad, K. D. et al., 2020, "Dynamics of synodic resonant near rectilinear halo orbits in the bicircular four-body problem," *Celestial Mechanics and Dynamical Astronomy*

- Williams, K. E. et al., 2017, "Targeting cislunar near rectilinear halo orbits for human space exploration," *AIAA SPACE and Astronautics Forum and Exposition*

- Oshima, K., 2022, "Multiple families of synodic resonant periodic orbits in the bicircular restricted four–body problem," *Advances in Space Research*

- Lee, K., 2019 (internal NASA report on Gateway NRHO 9:2 synodic resonant orbit analysis)
