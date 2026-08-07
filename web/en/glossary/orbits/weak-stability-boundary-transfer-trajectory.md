---
title: Weak Stability Boundary Transfer Trajectory
description: A low-energy transfer trajectory built on the weak stability boundary (WSB) — the set of farthest distances at which stable orbiting is still possible; the spacecraft flies out to Earth's WSB via a lunar flyby and joins a ballistic-capture orbit on the Moon's WSB with a near-zero maneuver, saving about 18% over Hohmann, first flight-proven by the Hiten mission in 1991.
keywords: Weak Stability Boundary, WSB, ballistic capture, low-energy transfer, Belbruno, Earth–Moon transfer
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: Weak Stability Boundary Transfer Trajectory
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Weak Stability Boundary Transfer Trajectory Explained | Term Definition"
  description: A low-energy transfer trajectory built on the weak stability boundary (WSB) — the set of farthest distances at which stable orbiting is still possible; the spacecraft flies out to Earth's WSB via a lunar flyby and joins a ballistic-capture orbit on the Moon's WSB with a near-zero maneuver, saving about 18% over Hohmann, first flight-proven by the Hiten mission in 1991.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Weak Stability Boundary Transfer Trajectory Explained | Term Definition"
  description: A low-energy transfer trajectory built on the weak stability boundary (WSB) — the set of farthest distances at which stable orbiting is still possible; the spacecraft flies out to Earth's WSB via a lunar flyby and joins a ballistic-capture orbit on the Moon's WSB with a near-zero maneuver, saving about 18% over Hohmann, first flight-proven by the Hiten mission in 1991.
  image: /logo.png
permalink: /en/glossary/orbits/weak-stability-boundary-transfer-trajectory/
---

# Weak Stability Boundary Transfer Trajectory

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Defining the Weak Stability Boundary

- **Heuristic definition (Belbruno & Miller 1993)**: stable motion around a central body breaks down far enough away — there is a critical distance r* such that for r<r* a particle keeps circling, while for r>r* it is pulled away by another body's perturbation; r* varies with direction, velocity, and phase angle, and the set of all r* is the weak stability boundary (WSB). The WSB can be seen as a sharpening of the "sphere of influence" concept: it is where escape can happen and also where capture can happen.
- **Algorithmic definition (Belbruno 2010)**: in the planar CR3BP, a trajectory that departs from the osculating-ellipse periapsis on a radial line segment from the secondary, completes n full revolutions around the secondary without circling the primary, and returns with negative Keplerian energy is called n-stable; the jump points between n-stable and n-unstable form the index-n WSB. The WSB resembles a Cantor set and is neither an invariant object nor a manifold — it does not depend on manifolds existing, so it applies to models where manifolds are undefined, such as the elliptic three-body or bicircular four-body problem.

**Location**: Earth's WSB is at about 4 Earth–Moon distances (roughly 1.5 million km; Wang 2025 cites the literature range as 3–5 times, not strictly confined to it); the Moon's WSB lies 0.08–0.39 Earth–Moon distances from the Moon, varying sharply with direction (Belbruno & Miller 1993). An exterior transfer holds only when its apogee lies in the second or fourth quadrant of the Earth-centered frame (x-axis anti-Sun) (summarized by Topputo 2013).

## Relation to Invariant Manifolds

Belbruno 2010 proved in the planar CR3BP that, within a certain energy range, the points of the secondary's WSB are exactly the points on the stable manifolds of the L1/L2 Lyapunov orbits with zero radial velocity and negative Keplerian energy relative to the secondary — the WSB is the broader concept, and the manifolds are its realization within a certain energy interval of the CR3BP.

The complete WSB transfer path: the spacecraft leaves Earth along a stable-manifold branch of a Sun–Earth L1/L2 Lyapunov orbit, returns toward the Earth–Moon region along the same orbit's unstable manifold, and finally enters a transit orbit **inside the stable-manifold tube** of an Earth–Moon L2 Lyapunov orbit to be captured by the Moon (Fantino 2010, Sousa-Silva 2018, Ross 2022). Note a literature discrepancy: some Chinese-language sources (Xu 2010 §3.2, Xu 2013) describe the Earth–Moon leg as patching to the "LL2 unstable manifold," while the Koon-school works and most of the literature (Howell & Kakoi 2006, Topputo 2013, Wang 2025) pair "Sun–Earth-side manifolds + transit orbit inside the Earth–Moon L2 stable-manifold tube"; this entry adopts the latter.

## Transfer Construction and Windows

The classic construction (Belbruno & Miller 1993): lunar flyby outbound → Earth's WSB → near-zero maneuver → ballistic-capture orbit on the Moon's WSB; about 18% ΔV saved over Hohmann (total ΔV for insertion into a 100 km lunar circular orbit: 0.695 vs 0.848 km/s), with a flight time of 3–5 months.

Transit analysis (Xu 2010): an LL1-point transit is the minimum-energy transfer, with a usable solar-phase window of Δβ≈89°; LL2 transits split into inner/outer side — the inner side is essentially an LL1 transit, the outer side is the WSB transfer, with a usable window of only Δβ≈3°; for LL2-halo transits the window is jointly determined by the solar phase β and the halo-orbit phase τ, and the usable set is very small. Xu 2013 names the outer transfer the outer WSB trajectory (geometrically identical to Belbruno's theory in an inertial frame).

## Variants and Generalizations

- **Belbruno–Miller trajectory**: another name for the WSB transfer, denoting a low-energy Earth–Moon transfer achieving zero hyperbolic excess speed (no V_∞ at perilune) ballistic capture (Belbruno & Miller 1993; the name appears in Krish 1991).
- **WSB-like (Chao 2022)**: a low-energy transfer arc exploiting solar gravity assist, distinct from the classic WSB based on lunar gravitational capture — it may circle Earth more than once within a total duration under 100 days, may include a powered lunar flyby en route, and in degenerate cases never exceeds the lunar orbit; the context is LFO→DRO transfers in the bicircular four-body model (global optimum ΔV 104 m/s).
- **Low-energy transfer gateway (LETG, Wang 2025)**: taking 5 lunar gravitational-sphere radii (about 0.86 Earth–Moon distances) as the projection surface for DRO capture, forward WSB transfer trajectories and backward capture trajectories are matched in mechanical energy on that surface, and the set of matching intersections is called the LETG; two-impulse DRO transfers patched at the LETG reach a 73.6% convergence rate.

## Mission Validation

Hiten (arrived at the Moon in October 1991, with the midcourse maneuver actually squeezed to zero — the first WSB/ballistic-capture transfer); SMART-1 (2004, low thrust combined with WSB); GRAIL (2011, lunar orbit insertion performed directly from a low-energy transfer); BepiColombo (WSB applied to a Mercury mission, Belbruno 2010).

## Terminology Variants

| Term | Meaning | Source |
|------|---------|--------|
| WSB transfer | Abbreviation of weak stability boundary transfer | Belbruno & Miller 1993 |
| Outer WSB transfer | Manifold-patching transfer geometrically identical to Belbruno's in an inertial frame | Xu 2013 |
| Belbruno–Miller trajectory | Low-energy Earth–Moon transfer with zero-hyperbolic-excess ballistic capture | Krish 1991 |
| LL1/LL2-point transit | Well transit via Earth–Moon L1/L2 (LL1 = minimum energy; LL2 outer = WSB) | Xu 2010 |
| WSB-like | Solar-assisted low-energy arc (distinct from lunar-capture WSB) | Chao 2022 |
| LETG | Low-energy transfer gateway (mechanical-energy matching set on the DRO-capture projection surface) | Wang 2025 |

## Related Concepts

- [Low-Energy Transfer](/en/glossary/orbits/low-energy-transfer/)
- [Ballistic Capture](/en/glossary/orbits/ballistic-capture/)
- [Lyapunov Orbit](/en/glossary/orbits/lyapunov-orbit/)
- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/distant-retrograde-orbit-dro/)

## References

- Belbruno & Miller, 1993, Sun-perturbed Earth-to-Moon transfers with ballistic capture
- Belbruno, Gidea & Topputo, 2010, Weak stability boundary and invariant manifolds
- Fantino et al., 2010, A note on libration point orbits, temporary capture and low-energy transfers
- Xu, 2010, Onset conditions and trajectory construction of Earth–Moon low-energy transfers
- Xu et al., 2013, On the construction of low-energy cislunar and trans-lunar transfers based on the libration points
- Topputo, 2013, On optimal two-impulse Earth–Moon transfers in a four-body model
- Sousa-Silva et al., 2018, Fast Earth–Moon transfers with ballistic capture
- Ross et al., 2022, Dynamical Systems, the Three-Body Problem, and Space Mission Design
- Chao et al., 2022, Exploring more solutions for low-energy transfers to lunar distant retrograde orbits
- Li et al., 2024, Low-energy Earth–Moon transfer trajectory design based on weak stability boundary theory
- Wang et al., 2025, Mechanism analysis of the DRO low-energy transfer problem: An energy perspective
