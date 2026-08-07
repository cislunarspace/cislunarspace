---
title: Near-Rectilinear Halo Orbit (NRHO)
description: A stability-defined subset of the halo orbit family — low perilune, large out-of-plane amplitude, linearly stable or nearly stable; its 9:2 lunar synodic resonant member (period ~6.56 days) is the Gateway baseline orbit, flight-proven by CAPSTONE.
keywords: Near-Rectilinear Halo Orbit, NRHO, Gateway, CAPSTONE, Halo Orbit, cislunar space, periodic orbit
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: Near-Rectilinear Halo Orbit (NRHO)
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Near-Rectilinear Halo Orbit (NRHO) Explained | Term Definition"
  description: A stability-defined subset of the halo orbit family — low perilune, large out-of-plane amplitude, linearly stable or nearly stable; its 9:2 lunar synodic resonant member (period ~6.56 days) is the Gateway baseline orbit, flight-proven by CAPSTONE.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Near-Rectilinear Halo Orbit (NRHO) Explained | Term Definition"
  description: A stability-defined subset of the halo orbit family — low perilune, large out-of-plane amplitude, linearly stable or nearly stable; its 9:2 lunar synodic resonant member (period ~6.56 days) is the Gateway baseline orbit, flight-proven by CAPSTONE.
  image: /logo.png
permalink: /en/glossary/orbits/nrho/
---

# Near-Rectilinear Halo Orbit (NRHO)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An NRHO is a stability-defined subset of the halo orbit family: the segment of halo orbits with bounded linear stability — stable or nearly stable members (Spreen 2021, Gao 2023). Concretely, L2 NRHOs are the halo orbits between the first and third stability changes along the family, with perilune radii of roughly 1832–17390 km; L1 NRHOs lie between the first and fourth stability changes, with perilune radii of roughly 900–19000 km and periods of 8–10 days (Spreen 2021, Jin 2025).

Morphologically, NRHOs combine a very low perilune with a large out-of-plane amplitude, stretching the orbit nearly straight (Singh 2021, Gao 2023). For the 9:2 NRHO, the three-directional amplitudes are [x, y, z] = [13090, 31925, 73197] km — the out-of-plane amplitude more than doubles each in-plane one (Spreen 2021, Appendix C). The term traces back to Howell & Breakwell's 1983 "almost rectilinear halo orbit" approximation (Spreen 2021).

## The 9:2 Synodic Resonant Member

The most important NRHO is the L2 southern member in 9:2 resonance with the lunar synodic period: nine revolutions per two synodic months (≈29.53 days), giving a period of about 6.556 days. Precise CR3BP parameters: perilune radius 3153 km, apolune radius 71230 km, Jacobi constant 3.04719 (Spreen 2021, Appendix C); engineering literature rounds these to 6.5 days and 3200/70000 km (Capannolo 2023 — note these are Moon-centered radii, not altitudes).

Two points of usage:

- The resonance baseline is the **lunar synodic period**, not the tropical year. Some papers say "Sun-resonant NRHO" (Gao 2023), but in their model the Sun's apparent period in the Earth–Moon rotating frame numerically equals the lunar synodic period — the two phrasings describe the same resonance.
- Synodic resonance makes the Earth–Moon–Sun geometry repeat every synodic month, which gives the 9:2 NRHO its eclipse-avoidance geometry and was one reason it was chosen as the Gateway baseline (Zimovan-Spreen 2022, Spreen 2021).

## Stability and Neighborhood Structure

Stability indices along the NRHO segment lie between 1 and 1.69, covering linearly stable and mildly unstable members (Spreen 2021; Jin 2025 reports indices "near ±1"). The NRHO neighborhood bifurcates into higher-period orbit families (P2HO1, i.e. the butterfly family, P2HO2, P4HO1/2, and others), whose manifolds can be exploited to build transfers between NRHOs and other orbits (Zimovan-Spreen 2022).

## Applications

- **Gateway and CAPSTONE**: the L2 southern 9:2 synodic resonant NRHO is the Gateway baseline orbit (Zimovan-Spreen 2022); CAPSTONE entered this orbit in 2022 and operated there, validating navigation and station-keeping (Jin 2025, Qiao 2025).
- **Lunar navigation constellations**: NRHOs of the L1/L2 northern and southern families (parameterized by perilune radius 2000–16000 km) can build a lunar global positioning constellation; the best configuration is four orbits with 16 satellites, with polar GDOP better than comparably sized halo constellations (Jin 2025). In resonant-constellation studies, the L2 northern/southern NRHOs (denoted L2NH/L2SH, family period range ~1.37–3.42 time units) appear in the Rank 1/2 configurations of all three target regions (near-Earth, lunar, and combined) — the combined-region optimum pairs L2NH-L2SH with L4/L5 vertical orbits (He 2025).
- **Formation flight**: the quasi-periodic tori (QPT) around Gateway serve as naturally bounded regions for Orion formation flight, with model predictive control handling phasing on the torus (Capannolo 2023).

## Getting There and Back

- **NRHOI (NRHO insertion)**: the insertion maneuver into an NRHO. Two schemes compared (Kikuchi 2024): in the indirect transfer (IDT), NRHOI is applied at true anomaly 160° with a large non-velocity-direction component, about 240 m/s; in the perilune rendezvous method (PRM) it is applied along the velocity direction at perilune, only about 55 m/s — PRM first brakes into a long elliptical lunar orbit, waits about two weeks for the orbital plane to align with the NRHO, then inserts and rendezvous with Gateway in one go.
- **Earth↔NRHO**: IDT about 5.8 days / 593 m/s (including TLI), PRM about 18.3 days / 545 m/s, WSB transfers over 100 days but only 60–100 m/s (Kikuchi 2024); low-thrust sGTO↔southern L2 NRHO transfers treat the stable manifold as a long coast arc, on the order of 93 days / 1541 m/s (Singh 2021).
- **NRHO↔DRO**: two-impulse transfers exploit symmetry to simplify the search; via lunar flybys and Lyapunov-like legs the cost can be pushed down to 184–248 m/s (Wang 2021); using manifolds of the bifurcated neighborhood families takes about 20 days at ~200 m/s with eclipse avoidance throughout (Zimovan-Spreen 2022).
- **Gateway↔elsewhere**: in a high-fidelity ephemeris model, Gateway (9:2 NRHO)↔LLO takes about 36 days and ↔LEO about 144–153 days by minimum-time low-thrust transfer in both directions (Pozzi 2025).
- **Low-energy phasing (Liu 2025)**: since NRHOs lack well-defined invariant manifolds, escape/approach flows built from the maximum stretching directions of the Cauchy–Green tensor are intersected to align the chaser's phase with the target, saving considerably on propellant compared with impulsive phasing.

## Terminology Variants

| Term | Meaning | Source |
|------|---------|--------|
| 9:2 NRHO | L2 southern resonant member, 9 revolutions per 2 synodic months; Gateway baseline | Spreen 2021 |
| Sun-resonant NRHO | Alternative phrasing; the baseline is actually the lunar synodic period | Gao 2023 |
| NRHOI | NRHO insertion maneuver (PRM: along-velocity at perilune / IDT: at 160° true anomaly) | Kikuchi 2024 |
| NRHO transfer | A transfer departing from or arriving at an NRHO | Pozzi 2025 |
| QPT | Quasi-periodic torus around an NRHO, used for formation flight | Capannolo 2023 |
| L2NH / L2SH | L2 northern / southern NRHOs (resonant navigation constellation context) | He 2025 |

## Related Concepts

- [Halo Orbit](/en/glossary/orbits/halo-orbit/)
- [Lissajous Orbit](/en/glossary/orbits/lissajous-orbit/)
- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/distant-retrograde-orbit-dro/)
- [Resonant Orbit Family](/en/glossary/orbits/resonant-orbit-family/)
- [Weak Stability Boundary Transfer Trajectory](/en/glossary/orbits/weak-stability-boundary-transfer-trajectory/)

## References

- Spreen, 2021, Trajectory design and targeting for applications to the exploration program in cislunar space (thesis)
- Zimovan-Spreen et al., 2022, Dynamical structures nearby NRHOs with applications to transfer design in cislunar space
- Gao et al., 2023, Low-thrust station-keeping control for lunar near rectilinear halo orbits
- Singh et al., 2021, Low-thrust transfers to southern L2 near-rectilinear halo orbits facilitated by invariant manifolds
- Wang et al., 2021, Transfers between NRHOs and DROs in the Earth-Moon system
- Bucchioni et al., 2023, Phasing with near rectilinear halo orbits: design and comparison
- Capannolo et al., 2023, Model predictive control for formation reconfiguration exploiting quasi-periodic tori in the cislunar environment
- Kikuchi et al., 2024, Comparison of transfer trajectories to NRHO and operation plan for logistics resupply mission to Gateway
- Pozzi et al., 2025, Gateway↔LLO/LEO bidirectional low-thrust transfer study
- Jin et al., 2025, NRHO-based lunar global positioning constellation study
- Qiao et al., 2025, Review of cislunar libration-point missions
