---
title: 地月转移轨道设计要素（Cislunar Transfer Design Elements）
description: Classification systems, transfer cost metrics, impulsive transfer methods, flyby assist mechanisms, phasing methods, and trajectory databases for cislunar transfer trajectory design. Covers Jacobi-energy-based classification (direct vs. low-energy transfers), two-/multi-impulse transfers, Hohmann-like transfers, direct fly-by transfers, apsidal transfers, and preceding/receding phasing.
keywords: cislunar transfer, transfer classification, transfer cost, two-impulse transfer, multi-pulse transfer, Hohmann-like transfer, direct fly-by transfer, DFBT, apsidal transfer, phasing, transfer leg, Earth-Moon transfer design, trajectory database
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 地月转移轨道设计要素（Cislunar Transfer Design Elements）
  desc: Classification, cost, impulses, and phasing for cislunar transfers
  image: /logo.png
og:
  title: Cislunar Transfer Design Elements (地月转移轨道设计要素) — In-Depth Glossary Entry
  description: Classification systems, transfer cost metrics, impulsive transfer methods, flyby assist mechanisms, phasing methods, and trajectory databases for cislunar transfers. Covers direct vs. low-energy classification, two-/multi-impulse transfers, Hohmann-like, DFBT, and phasing.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Cislunar Transfer Design Elements (地月转移轨道设计要素) — In-Depth Glossary Entry
  description: Classification, cost metrics, impulsive methods, and phasing for cislunar transfer design.
  image: /logo.png
permalink: /en/glossary/dynamics/cislunar-transfer-design-elements/
---

# Cislunar Transfer Design Elements (地月转移轨道设计要素)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Cislunar transfer design elements encompass the classification frameworks, cost metrics, maneuver strategies, auxiliary assist techniques, and phasing methods that engineers must consider when planning a spacecraft's transfer from one orbit to another in cislunar space. These elements collectively form the engineering "toolbox" for cislunar transfer mission design. Unlike [low-energy transfers](/en/glossary/dynamics/low-energy-transfer/) that focus on natural invariant manifold dynamics, design elements span diverse transfer modes from impulsive chemical propulsion to flyby-assisted strategies.

## Cislunar Transfer Classification

Cislunar transfer trajectories can be classified by Jacobi energy and flight time into two categories (Liang et al. 2016):

- **Direct transfer**: the spacecraft's Jacobi energy is far below $C_1$ (i.e., $C \ll C_1$), with a flight time of 2--6 days. With abundant energy, zero-velocity surfaces are fully open; the spacecraft completes the Earth-Moon transfer along approximately two-body conics, requiring a retro-burn (about 0.6--0.8 km/s) at arrival.

- **Low-energy transfer**: $C$ is slightly below $C_1$ but above $C_2$, i.e., $C_2 < C < C_1$, with the $L_1$ neck barely open. Flight times extend to tens to over a hundred days, but the required capture impulse at arrival is greatly reduced or even zero.

Through grid scanning on a Poincaré section, initial conditions can also be classified into five categories based on the spacecraft's ultimate behavior in the lunar region (Sousa-Silva et al. 2018): good capture (G), low-orbit capture (L), high-orbit capture (H), collision (C), and escape (O). This classification provides a quantitative framework for screening low-energy transfer candidate solutions.

### Transfer Orbit Family

In restricted three-body or four-body models, a set of transfer trajectories sharing the same dynamical symmetries and topological structure constitutes a "transfer orbit family." These trajectories are indexed by continuous parameters (e.g., velocity components at a Poincaré section). Wei & Li (2017) found that low-energy Earth-Moon transfers with lunar close approaches consist of at least 16 families with significant differences in departure epoch, flight time, $\Delta v$ cost, and perilune altitude distribution. The family concept enables global search to be conducted family-by-family rather than blindly sampling a continuous parameter space, greatly improving efficiency.

## Transfer Cost

Transfer cost is the total velocity increment $\Delta v_{\text{total}}$ required to complete an orbital transfer, equal to the sum of departure impulse $\Delta v_{\text{dep}}$ and insertion impulse $\Delta v_{\text{ins}}$:

$$
\Delta v_{\text{total}} = \Delta v_{\text{dep}} + \Delta v_{\text{ins}}
$$

Transfer cost is a core metric for selecting cislunar staging orbits (DRO, NRHO, Halo orbits), directly determining propellant requirements. Zhang et al. (2021) noted that for the same departure DRO, the cost difference between direct and low-energy transfers can exceed 400 m/s. Transfer cost is typically presented together with flight time as a Pareto front ($\Delta v$--TOF Pareto front), helping mission designers trade off between timeliness and fuel.

### Trajectory Database

For trajectory collections generated by Monte Carlo trajectory shooting or grid search, a **trajectory database** can be built that stores key states and parameters, enabling rapid queries and maneuver planning (Chao et al. 2022). The database approach is particularly suitable for scenarios requiring near-real-time maneuver decisions (e.g., space domain awareness, rendezvous planning, debris avoidance).

## Impulsive Transfer Methods

### Two-Impulse (Double-Pulse) Transfer

The two-impulse transfer is the classic application of Lambert's problem: one impulse at each of the initial and terminal orbits (Zhao et al. 2021). The first impulse ejects the spacecraft from its initial orbit into the transfer orbit; the second matches the target orbit velocity. The two-impulse method is structurally simple and physically intuitive, but demands relatively high single-burn thrust — the farther the target orbit or the shorter the flight time, the larger the individual impulse magnitudes — making it better suited for chemical propulsion missions.

### Multi-Pulse Transfer

Dividing the entire journey into multiple maneuver points, applying a velocity impulse at each, so that the spacecraft transfers segment by segment along a reference trajectory — this is multi-pulse transfer (Acta Aeronautica et Astronautica Sinica, 2023). Compared with the two-impulse approach, the multi-pulse scheme is closer to engineering-typical chemical propulsion practices — increasing the number of burns reduces the magnitude of each, offering a trade-off between fuel consumption and transfer time.

### Hohmann-Like Transfer

The Hohmann-like transfer is the cislunar analogy of the classical Hohmann transfer: from low Earth orbit, raise the apogee to the altitude of a libration point orbit, then apply a second maneuver at apogee to complete insertion (Renk et al. 2010). This method is simple and intuitive, but is especially expensive for EML2 transfers: the spacecraft is slow at apogee while EML2 moves relatively fast in the inertial frame, causing severe velocity mismatch. Thus the Hohmann-like approach is not a first choice for cislunar low-energy transfers, but its simplicity makes it a useful baseline for teaching and preliminary estimation.

### Apsidal Transfer

Transfer between coplanar elliptical orbits by rotating the line of apsides (Zhang Renwei 1998). In two-body mechanics, apsidal transfer is the optimal two-impulse scheme for changing perigee/apogee positions while preserving orbital shape. It has broad applications in classical satellite station-keeping but limited applicability in a three-body environment.

### Quasi-Circular Transfer

The slow spiral transfer of a low-thrust spacecraft between near-circular orbits. Since the thrust is extremely low (electric-propulsion level), the orbit remains approximately circular throughout the transfer. Edelbaum's analytical formula can estimate the required velocity increment and transfer time, avoiding heavy per-revolution numerical integration (Kluever 1997).

## Flyby-Assisted Transfers

### Direct Fly-By Transfer (DFBT)

A transfer method using lunar gravity assist: after passing through lunar periapsis, the spacecraft flies along a shorter path directly toward the target libration point orbit and performs an insertion maneuver (Renk et al. 2010). Compared with indirect fly-by transfers (which first enter the libration point region, adjust energy, then enter the target orbit), DFBT has a shorter transfer time but potentially larger insertion $\Delta v$ — a classic "time vs. fuel" trade-off.

### Close Lunar Flyby Plane Change Transfer

A low-energy transfer method that exploits the out-of-plane velocity component generated by a close lunar flyby to provide orbital plane change, replacing the departure impulse (Zhang et al. 2021). In low-energy DRO-to-Earth-orbit transfers, the out-of-plane component of the departure impulse can be below 5 m/s, while the close flyby can provide over 200 m/s of $z$-direction velocity change. This means the low-energy transfer cost hardly increases with target orbit inclination, whereas direct transfer cost increases dramatically with inclination due to out-of-plane impulses.

### System-to-System Transfer

In the Sun-Earth-Moon four-body problem, the technique of transferring a spacecraft from a libration point orbit in one three-body system (e.g., Earth-Moon) to one in another (e.g., Sun-Earth), or vice versa (Howell & Kakoi 2006). The core idea is to decompose the four-body problem into two overlapping three-body problems and find the intersection of the two system manifold tubes on a Poincaré section, enabling low-cost or even zero-fuel cross-system transit.

## Phasing

Phasing is the orbit control technique of timing a spacecraft's arrival at a target location to match a target spacecraft (or a target phase point) on the same orbit. For phasing relative to DRO-like periodic/quasi-periodic orbits:

- **Preceding phasing**: the phasing orbit arrives at the target point **earlier than** the target spacecraft — in DRO phasing, the trajectory lies inside the DRO.

- **Receding phasing**: arrival is **later than** the target spacecraft — the trajectory lies outside the DRO, typically offering a wider achievable phasing range than preceding phasing (DRO impulsive phasing method).

## Transfer Leg

When an extremely long-duration low-thrust transfer is decomposed into multiple segments, each optimal arc between two adjacent patch points is called a **transfer leg** (Patrick et al. 2023). Each leg independently solves a two-point boundary value problem; at patch points, only state continuity is ensured, with co-state discontinuities permitted (in coast arcs). This decomposition strategy transforms a poorly convergent ultra-long problem into several independently solvable sub-problems, and is a key technique for transfer optimization under extremely low thrust acceleration.

### Application Examples

**Energy-descent $L_1$ transfer**: a strategy for sending end-of-life GEO satellites to the Moon — first use low-thrust to inject the satellite into a low-energy cislunar transfer; upon reaching the lunar region, low-thrust gradually reduces the spacecraft's energy (increasing $C$) until the neck closes, achieving permanent capture (Liang et al. 2016). **DRO low-energy capture**: exploiting the weak stability boundary mechanism, using solar perturbations and lunar gravity assists to insert a spacecraft into a distant retrograde orbit (DRO) with minimal impulse (Wang et al. 2025).

## Related Concepts

- [Ballistic Capture](/en/glossary/dynamics/ballistic-capture/)

- [Low-Energy Transfer](/en/glossary/dynamics/low-energy-transfer/)

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

- [Invariant Manifold](/en/glossary/dynamics/invariant-manifold/)

- [Lambert's Problem](/en/glossary/fundamentals/lamberts-problem/)

- [Two-Point Boundary Value Problem (TPBVP)](/en/glossary/dynamics/tpbvp/)

- [Poincaré Section](/en/glossary/dynamics/poincare-section/)

- [Jacobi Integral](/en/glossary/dynamics/jacobi-integral/)

- [Weak Stability Boundary (WSB)](/en/glossary/dynamics/wsb/)

- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/distant-retrograde-orbit-dro/)

- [Halo Orbit](/en/glossary/orbits/halo-orbit/)

## References

- Liang et al., 2016, Low-energy lunar transfer and permanent capture for GEO disposal, *Acta Astronautica*

- Sousa-Silva et al., 2018, Fast earth–moon transfers with ballistic capture, *Celest. Mech. Dyn. Astron.*

- 韦炳威, 李银山 (Wei & Li), 2017, Analysis of low-energy Earth-Moon transfer orbit family characteristics

- Zhang et al., 2021, Low-energy transfers from DRO to Earth orbits, *Acta Astronautica*

- Chao et al., 2022, Trajectory database generation for cislunar space domain awareness

- 赵弘骞等 (Zhao et al.), 2021, Fast guidance for pinpoint lunar landing based on dynamic programming

- Acta Aeronautica et Astronautica Sinica, 2023, 44(5): 326563

- Renk, Hechler, & Messerschmid, 2010, Exploration missions in the Sun-Earth-Moon system, *Acta Astronautica*

- 章仁为 (Zhang Renwei), 1998, *Satellite Orbit Attitude Dynamics and Control*

- Kluever, 1997, Optimal Earth-Moon Trajectories Using Combined Chemical-Electric Propulsion, *J. Guidance, Control, and Dynamics*

- Howell & Kakoi, 2006, Transfers between the Earth–Moon and Sun–Earth systems using manifolds and transit orbits, *Acta Astronautica*

- Patrick et al., 2023, Hybrid optimization of high-fidelity low-thrust transfers to the lunar gateway

- Wang et al., 2025, Mechanism analysis of the DRO low-energy transfer problem: An energy perspective

- DRO impulsive phasing method for cislunar distant retrograde orbits
