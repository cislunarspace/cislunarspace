---
title: Patch Point
description: Segment junction nodes in multiple shooting — continuity constraints at patch points link adjacent sub-arcs, and their number and placement directly govern convergence speed and accuracy. Covers fixed/variable-time patching, adaptive placement, and their role in connecting trajectories across different three-body systems.
keywords: patch point, splicing point, connection point, multiple shooting, differential correction, trajectory patching, adaptive selection, cislunar space
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Patch Point
  desc: Segment junction nodes in multiple shooting linking adjacent trajectory arcs
  image: /logo.png
og:
  title: "Patch Point Explained | Key Concept in Multiple Shooting"
  description: Segment junction nodes in multiple shooting — continuity constraints at patch points link adjacent sub-arcs, and their number and placement directly govern convergence speed and accuracy.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Patch Point Explained | Key Concept in Multiple Shooting"
  description: Segment junction nodes in multiple shooting — continuity constraints at patch points link adjacent sub-arcs.
  image: /logo.png
permalink: /en/glossary/dynamics/patch-point/
---

# Patch Point

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A patch point (also splicing point, connection point) is a junction node in [multiple shooting](/en/glossary/dynamics/differential-correction/) and two-level [differential correction](/en/glossary/dynamics/differential-correction/) where a long trajectory arc is split into sub-arcs. At each patch point, adjacent sub-arcs must satisfy position and velocity continuity constraints: these constraints form the equality-constraint equations in the differential correction's free-variable/constraint system, and their Jacobian entries are given by the corresponding arc's [State Transition Matrix](/en/glossary/fundamentals/stm/) components (Muralidharan 2021 §3.4).

Conceptually, patch points are the geometric realization of multiple shooting's divide and conquer strategy: an entire trajectory from initial to terminal state would require single-shooting to solve in one pass, with the STM accumulating errors over long arcs and narrow convergence basins. Introducing patch points confines each sub-arc's STM to its own short segment: the matrices are better conditioned and the algorithm tolerates larger initial-guess errors. The price: simultaneously solving for $6n$ free variables ($6$ states per point $\times$ $n$ points).

## Role in the Two-Level Differential Corrector

The two-level corrector of Howell & Pernicka (1987) owes its name to the patch points: two-level refers to the nested iteration that first handles position continuity and then velocity continuity at every patch point:

- **Inner level**: Fix the position of all patch points, adjust only the velocities, eliminating positional discontinuities between each segment's terminal state and the next patch point;

- **Outer level**: Adjust both patch-point positions and segment flight times, eliminating velocity discontinuities.

Quasi-periodic orbits (Lissajous trajectories) are not strictly closed, but with sufficient patch points and satisfied continuity conditions, an arbitrarily long continuous trajectory can be constructed. The algorithm was extended by Howell & Pernicka (1990, 1993) to the ephemeris model, and remains the workhorse for transitioning CR3BP solutions into high-fidelity ephemeris models.

## Fixed-Time vs. Variable-Time Patching

- **Fixed-time multiple shooting**: The flight time of each segment is fixed; the free variables consist solely of each patch point's 6-dimensional state. The constraints are the continuity conditions between successive patch points. The system is compact, but the time allocation must be specified a priori.

- **Variable-time multiple shooting**: Each segment's flight time joins the free variables. The dimension rises to $7n-1$ ($n$ points $\times$ 6 states + $n-1$ time intervals). The Jacobian gains columns for the time-derivative terms (terminal velocity $\dot{\mathbf{x}}$). The larger solution space improves convergence robustness (Muralidharan 2021 §3.4.2) and allows additional user-specified constraints such as Jacobi-constant preservation.

## Number and Placement: Engineering Trade-offs

More patch points do not automatically mean better performance. Chen (2024) found that 4 patch points achieves the optimal balance between computational efficiency and accuracy for DRO transfer design: fewer points result in overly long sub-arcs and ill-conditioned STMs; more points blow up the Jacobian dimension and sharply increase per-iteration computational cost.

The traditional approach places patch points at equal intervals (by time or arc length). However, different-amplitude DRO/NRHO orbits exhibit drastically different local sensitivities, so equal spacing rarely works well. Adaptive strategies use finite-difference sensitivity analysis or [differential evolution](/en/glossary/dynamics/de/) to locate optimal patch-point positions: densely packed in high-sensitivity regions (perilune, plane crossings), sparser in quiescent regions. Muralidharan (2021 §4.4), generating a ~1-year Gateway NRHO virtual reference trajectory, used approximately 40–50 patch points (one per revolution), with wider spacing near apoapsis and tighter spacing near perilune.

## Connection Points Across Heterogeneous Systems

Two different three-body systems (e.g., Sun-Earth CR3BP + Earth-Moon CR3BP) possess distinct gravitational domains and cannot be directly coupled in a single framework. The key idea of weak stability boundary (WSB) transfers is to locate connection points on a shared Poincaré section: the intersection of projections from the Sun-Earth manifolds and the Earth-Moon manifolds. The state at this intersection serves as a geometric patch point between the two systems, with each side integrated in its own rotating frame; the velocity jump in the overlap region is then eliminated via differential correction, enabling low-energy connections between the two systems (Koon et al. 2000).
In this context, a patch point is not merely an algorithmic node but also a geometric entity: it is the interface where the dynamical model is switched. For Earth-Moon/Sun-Earth connections, the interface is typically placed near the Earth-Moon $L_2$ libration point, where the spacecraft can pass the section ballistically in both systems.

## Related Concepts

- [Differential Correction and Shooting Method](/en/glossary/dynamics/differential-correction/)

- [CR3BP](/en/glossary/dynamics/cr3bp/)

- [State Transition Matrix (STM)](/en/glossary/fundamentals/stm/)

- [Poincaré Map](/en/glossary/dynamics/poincare-map/)

- [Differential Evolution (DE)](/en/glossary/dynamics/de/)

- [Station-Keeping](/en/glossary/dynamics/station-keeping/)

## References

- Howell K C, Pernicka H J. Numerical determination of Lissajous trajectories in the restricted three-body problem[J]. Celestial Mechanics, 1987, 41(1-4): 107-124. (Original definition of patch points and the two-level corrector)

- Muralidharan A. Stretching directions in cislunar space: stationkeeping and an application to transfer trajectory design[D]. Purdue University, 2021. §3.4, §4.4. (Mathematical treatment of patch points in fixed/variable-time multiple shooting, adaptive seeding)

- Chen Y J. DRO Orbit Design and Control Research for Cislunar Space Situation Awareness[D]. 2024. (Adaptive patch-point selection via differential evolution)

- Koon W S, Lo M W, Marsden J E, Ross S D. Heteroclinic connections between periodic orbits and resonance transitions in celestial mechanics[J]. Chaos, 2000, 10(2): 427-469. (Heteroclinic connections between Sun-Earth and Earth-Moon systems: geometric role of connection points)
