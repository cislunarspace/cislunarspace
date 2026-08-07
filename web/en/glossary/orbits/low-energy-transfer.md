---
title: Low-Energy Transfer
description: A collective term for Earth–Moon transfer trajectories that cost less energy than a Hohmann transfer but take longer; three technical routes deliver the savings — invariant manifolds, the weak stability boundary, and ballistic capture — and the literature applies three different "low-energy" criteria: total ΔV, instantaneous eccentricity, and arrival-end two-body energy.
keywords: Low-Energy Transfer, invariant manifold, weak stability boundary, ballistic capture, Earth–Moon transfer, cislunar space
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: Low-Energy Transfer
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Low-Energy Transfer Explained | Term Definition"
  description: A collective term for Earth–Moon transfer trajectories that cost less energy than a Hohmann transfer but take longer; three technical routes deliver the savings — invariant manifolds, the weak stability boundary, and ballistic capture — and the literature applies three different "low-energy" criteria: total ΔV, instantaneous eccentricity, and arrival-end two-body energy.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Low-Energy Transfer Explained | Term Definition"
  description: A collective term for Earth–Moon transfer trajectories that cost less energy than a Hohmann transfer but take longer; three technical routes deliver the savings — invariant manifolds, the weak stability boundary, and ballistic capture — and the literature applies three different "low-energy" criteria: total ΔV, instantaneous eccentricity, and arrival-end two-body energy.
  image: /logo.png
permalink: /en/glossary/orbits/low-energy-transfer/
---

# Low-Energy Transfer

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition and Criteria

A low-energy transfer is a collective term for Earth–Moon transfer trajectories that consume less energy than a Hohmann transfer at the price of a longer transfer time (Xu 2010, Zheng & Zhao 2023). Three "low-energy" criteria coexist in the literature — state which is meant when citing:

- **Cost criterion**: total ΔV below that of a Hohmann transfer between the same endpoints. The magnitude depends on the endpoints: a WSB transfer saves about 18% over Hohmann (Belbruno & Miller 1993), and typical savings run 80–270 m/s (the example relayed by Xu 2010 is about 150 m/s; Sousa-Silva 2018 about 80 m/s). Reference lower bound: Sweetser estimated the global minimum ΔV in the CR3BP from a 167 km Earth circular orbit to a 100 km lunar circular orbit at about 3.72 km/s; low-energy transfers including solar perturbation can go below this CR3BP theoretical bound (Anderson & Parker 2012).
- **Geometric criterion**: instantaneous eccentricity below 1 throughout the transfer — the spacecraft remains in a two-body-bound (elliptic) state relative to Earth/Moon at all times; a Hohmann transfer arrives near the Moon at hyperbolic speed and can never be ballistically captured (Xu 2010, Xu 2013).
- **Arrival-end energy criterion**: the two-body (Keplerian) energy relative to the Moon turns from positive to negative on approach (Topputo 2013, Parker & Anderson 2014) — see [Ballistic Capture](/en/glossary/orbits/ballistic-capture/).

In time, low-energy transfers typically take 2.5–5 months (Belbruno & Miller 1993, Parker & Anderson 2014), versus about 3 days for a Hohmann.

## Three Technical Routes

A low-energy transfer is not a single technique but three interlocking routes:

1. **The invariant-manifold route (inside the Earth–Moon system)**: Conley 1968 established the orbit classification for the neck region near a libration point (transit / non-transit / asymptotic / periodic orbits, with manifolds as the separatrices); Koon and colleagues patched the manifold tubes of the Sun–Earth and Earth–Moon CR3BPs on Poincaré sections, and trajectories continuous in both position and velocity are low-energy transfers (Xu 2010 calls this "the solution to a theoretical problem that had troubled celestial mechanicians for over a decade"). Interior transfers purely within the Earth–Moon system need no solar perturbation and can be defined inside the Earth–Moon three-body model (Topputo 2013).
2. **The WSB/exterior route**: a lunar flyby sends the spacecraft out to Earth's weak stability boundary (about 4 times the Earth–Moon distance), where the region's dynamical sensitivity allows a near-zero-maneuver junction to a ballistic-capture orbit on the Moon's WSB (Belbruno & Miller 1993). See [Weak Stability Boundary Transfer Trajectory](/en/glossary/orbits/weak-stability-boundary-transfer-trajectory/).
3. **Ballistic capture is the arrival mechanism, not an independent route**: both the WSB transfer and the manifold route end in ballistic capture — targeting the region inside the stable-manifold tube of an Earth–Moon L2 Lyapunov orbit constructs an orbit ballistically captured by the Moon (Ross 2022).

Belbruno 2010 unifies the three routes: within a certain energy range, the points of the secondary primary's WSB are exactly the points on the stable manifolds of the L1/L2 Lyapunov orbits where the radial velocity is zero and the Keplerian energy relative to the secondary is negative.

## Classifications

- **By trajectory geometry** (Topputo 2013): exterior transfers reach an apogee of about 4 Earth–Moon distances, and the apogee must lie in the second or fourth quadrant of the Earth-centered frame (x-axis pointing anti-Sun); interior transfers stay mostly inside the lunar orbit and can exploit resonances to shorten the time.
- **By the libration point used** (Zheng & Zhao 2023): the L1 manifolds give inner-capture-type transfers (always inside the Earth–Moon system, shorter); the L2 manifolds give outer-capture-type transfers (= the WSB route, requiring solar gravity assist, longer).
- **By the object transited** (Xu 2010): LL1 transit (minimum-energy transfer), LL1-halo transit, LL2 transit (inner/outer side — outer is the WSB), LL2-halo transit.
- **By mission profile** (Parker & Anderson 2014): direct (3–6 days), direct-staging (2–10 weeks), direct to Earth–Moon L1 (1–5 weeks), low-thrust (months), low-energy (2.5–4 months).

## Design Methods and Numbers

- Two-impulse fully ballistic solutions: the global optimum is 82.6 days, 3769 m/s (Topputo 2013); an exterior transfer with one lunar flyby takes 162 days, 3775 m/s (Campana 2024).
- Three/four-impulse schemes (Qiao 2024, in the EML1 halo→GEO direction): the three-impulse energy optimum is 1.55 km/s over 40 days; the four-impulse 1.47 km/s over 48 days — turning at the unstable manifold's minimum-velocity point and braking at its maximum, with one maneuver at each end of the Lambert arc.
- A single stable manifold directly connecting near-Earth and near-Moon orbits: total ΔV about 3921 m/s over 62 days (Zheng & Zhao 2023).
- Cross-system manifold patching by bilevel optimization: the minimum patching impulse is about 12.6 m/s (Li 2024).

## Mission Applications

Earth–Moon system: Hiten (1991, first WSB/ballistic-capture transfer), GRAIL (2011, first mission with a low-energy transfer as the main leg, performing lunar orbit insertion directly), ARTEMIS (2010, low-energy transfer to libration point orbits; using a "nearly ballistic" transfer including statistical corrections and small deterministic maneuvers). Sun–Earth reference: Genesis; SMART-1 combined low thrust with the WSB concept.

## Terminology Variants

| Term | Meaning | Source |
|------|---------|--------|
| Low-energy transfer (LET) | Same as low-energy transfer; literature abbreviation LET | Fantino 2010 |
| Low-energy lunar transfer | 2.5–4-month Earth–Moon transfer exploiting solar gravity | Parker & Anderson 2014 |
| Exterior transfer | Low-energy transfer with apogee about 4 Earth–Moon distances | Topputo 2013 |
| Outer-capture / inner-capture type | Classified by the libration point used (L2/L1) | Zheng & Zhao 2023 |
| Three/four-impulse low-energy transfer | Scheme with maneuvers at manifold velocity extrema plus Lambert arcs | Qiao 2024 |

## Related Concepts

- [Weak Stability Boundary Transfer Trajectory](/en/glossary/orbits/weak-stability-boundary-transfer-trajectory/)
- [Ballistic Capture](/en/glossary/orbits/ballistic-capture/)
- [Lyapunov Orbit](/en/glossary/orbits/lyapunov-orbit/)
- [Manifold Connection](/en/glossary/orbits/manifold-connection/)

## References

- Conley, 1968, Low energy transit orbits in the restricted three-body problem
- Belbruno & Miller, 1993, Sun-perturbed Earth-to-Moon transfers with ballistic capture
- Belbruno, Gidea & Topputo, 2010, Weak stability boundary and invariant manifolds
- Fantino et al., 2010, A note on libration point orbits, temporary capture and low-energy transfers
- Xu, 2010, Onset conditions and trajectory construction of Earth–Moon low-energy transfers
- Xu et al., 2013, On the construction of low-energy cislunar and trans-lunar transfers based on the libration points
- Topputo, 2013, On optimal two-impulse Earth–Moon transfers in a four-body model
- Anderson & Parker, 2012, Survey of ballistic transfers to the lunar surface
- Anderson & Parker, 2013, Comparison of low-energy lunar transfer trajectories to invariant manifolds
- Parker & Anderson, 2014, Low-Energy Lunar Trajectory Design
- Sousa-Silva et al., 2018, Fast Earth–Moon transfers with ballistic capture
- Ross et al., 2022, Dynamical Systems, the Three-Body Problem, and Space Mission Design
- Zheng & Zhao, 2023, Earth–Moon transfer method based on the stable manifolds of large-amplitude Lyapunov orbits
- Li et al., 2024, Low-energy Earth–Moon transfer trajectory design based on weak stability boundary theory
- Qiao & Yang, 2024, Design and optimization of low-energy transfer trajectories at Earth–Moon L1
- Campana et al., 2024, Low-energy Earth–Moon transfers via theory of functional connections and homotopy
- Grossi et al., 2024, High-efficiency exterior low-energy transfer study
