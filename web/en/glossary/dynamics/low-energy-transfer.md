---
title: 低能转移（Low-Energy Transfer）
description: Orbital transfers that exploit the invariant manifold structures of multi-body dynamics to achieve spacecraft transfers with minimal propellant consumption. Covers low-energy transfer principles, invariant manifold tubes and dynamical channels, gravitational superhighway / interplanetary superhighway (IPS), neck transit and transitability criteria, and ballistic arc patching.
keywords: low-energy transfer, ballistic transfer, invariant manifold, gravitational superhighway, interplanetary superhighway, IPS, dynamical channel, transit gate, transitability, free transfer, Earth-Moon transfer, dynamical systems approach, CR3BP, patched manifolds
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 低能转移（Low-Energy Transfer）
  desc: Orbital transfers exploiting invariant manifolds with minimal fuel
  image: /logo.png
og:
  title: Low-Energy Transfer (低能转移) — In-Depth Glossary Entry
  description: Orbital transfers that exploit invariant manifold structures of multi-body dynamics to achieve transfers with minimal propellant. Covers principles, manifold tubes, dynamical channels, gravitational superhighway / IPS, neck transit, and transitability criteria.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Low-Energy Transfer (低能转移) — In-Depth Glossary Entry
  description: Orbital transfers exploiting invariant manifold structures with minimal fuel consumption.
  image: /logo.png
permalink: /en/glossary/dynamics/low-energy-transfer/
---

# Low-Energy Transfer (低能转移)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A low-energy transfer is an orbital transfer that exploits the natural dynamical structures of multi-body gravitational environments — specifically, the **invariant manifolds** of the restricted three-body/four-body problem — to achieve transfers with far lower propellant consumption than predicted by classical patched-conic methods (Koon et al. 2000; Parker & Anderson 2014).

In the traditional two-body framework, transfer trajectory design is based on patched-conics: the flight path is divided into segments, each approximated by a two-body conic around a single body. This paradigm is sufficiently accurate for near-Earth orbit missions, but in cislunar space, the Sun-Earth system, or interplanetary travel, multi-body effects become non-negligible — and low-energy transfers exploit these "messy" multi-body effects, turning perturbations from "error sources" into "resources."

Several synonymous or near-synonymous terms reflect different emphases:

- **Ballistic transfer**: emphasizes completing the transfer without thrust, relying solely on gravity (Anderson & Parker 2012) — the ideal limit of low-energy transfers.

- **Free transfer**: emphasizes the use of stable manifold "tubes" to achieve zero-fuel drift (Renk et al. 2010).

- **Dynamical systems approach**: refers to the methodology of using invariant manifolds, heteroclinic/homoclinic connections, etc., for trajectory design (Bello et al. 2010).

- **Gravitational superhighway**: a vivid description of the low-energy transport channel network formed by interwoven invariant manifold tubes.

## Invariant Manifold Tubes

The mathematical core of low-energy transfers is the **stable manifold $W^s$ and unstable manifold $W^u$** of libration point periodic orbits (Lyapunov or Halo orbits) in the CR3BP.

Let $\mathbf{X}_0$ be a point on the periodic orbit, $\Phi(T, 0)$ its monodromy matrix. Its eigenvectors $\mathbf{v}^s$ (corresponding to eigenvalue $|\lambda_s| < 1$) and $\mathbf{v}^u$ (corresponding to $|\lambda_u| > 1$) give the stable and unstable directions at that point, respectively. From each point along the periodic orbit, perturbing slightly along $\mathbf{v}^s$ and integrating backward yields a trajectory on the stable manifold tube; perturbing along $\mathbf{v}^u$ and integrating forward yields a trajectory on the unstable manifold tube.

The entire family of such trajectories forms a **tube-like structure** in the four-dimensional (spatial CR3BP) or six-dimensional phase space — this is the invariant manifold tube. In the synodic frame, the unstable tube "ejects" spacecraft from near the Moon; the stable tube "sucks in" spacecraft from afar (e.g., near Earth). The key step in low-energy transfer design is to find **overlap regions** between stable and unstable tubes on a Poincaré section (Koon et al. 2000).

### Ballistic Arc

The flight segment along an invariant manifold tube, where the spacecraft applies no thrust and is subject only to gravitational forces, is called a **ballistic arc**. In the CR3BP, the Jacobi constant is conserved along ballistic arcs. A complete low-energy trajectory is assembled by alternating ballistic arcs and thrust arcs: ballistic segments travel along manifolds, and thrust segments adjust energy so that manifolds of different systems or different energy levels match at the section (Ren et al. 2012).

## Neck Transit and Transit Gates

In the topology of zero-velocity surfaces, $L_1$ and $L_2$ libration points are gateways connecting different "realms." When the spacecraft's Jacobi constant $C$ satisfies $C_2 < C < C_1$, a **transit gate** opens at $L_1$ — the spacecraft can pass through this gate and travel freely between the Earth and Moon realms (Campana et al. 2024). When $C$ further drops to $C_3 < C < C_2$, a gate also opens at $L_2$, providing passage to outer space.

In the multi-body context, these gates form **dynamical channels** in the phase space — naturally occurring transport pathways that are used not only for spacecraft transfer design but also explain the migration of meteors, comets, etc., in the Solar System (Bello et al. 2010).

### Transitability

Transitability is a binary assessment criterion proposed by Cox et al. (2021): given a specific combination of low-thrust acceleration, thrust angle, and low-thrust Hamiltonian, does a feasible trajectory exist that crosses the $L_1/L_2$ channel? "Transitable" means that inter-realm passage is possible without high-cost maneuvers; "non-transitable" means it is impossible with that parameter combination — providing a preliminary screening tool for low-thrust trajectory searches, avoiding wasted computation in infeasible parameter regions.

## Interplanetary Superhighway (IPS)

The Interplanetary Superhighway (IPS) is the interplanetary-scale generalization of the low-energy transfer concept (Lo 2002). Its core idea: **splice together** the invariant manifolds of libration point orbits from different three-body systems (e.g., Sun-Earth and Earth-Moon) to form a low-energy transport network spanning the entire inner planet region and even extending to outer planets.

A typical IPS trajectory might proceed as follows: spacecraft launches from Earth → enters the stable manifold tube of a Sun-Earth $L_1/L_2$ Halo orbit → drifts naturally along the manifold to the vicinity of the libration point orbit → applies a small impulse to jump at a Poincaré section onto a manifold tube of another three-body system → eventually arrives near the target body. Throughout the process, **impulses are used only for "transferring" between manifold tubes**; most of the journey is thrust-free coasting.

Practical applications of IPS include NASA's Genesis mission (using Sun-Earth $L_1$ manifolds round-trip) and the MAP (now WMAP) mission (using Sun-Earth $L_2$ manifolds to enter the target orbit) (Lo 2002). At the Earth-Moon scale, the IPS counterpart is often called the "gravitational superhighway" or "cislunar low-energy transfer channel," with the same essence: transport through the interwoven network of invariant manifold tubes.

### Low-Energy Transfer Gateway (LETG)

The Low-Energy Transfer Gateway (LETG) is a specific concept in weak stability boundary transfers: on the DRO capture projection plane, it is the intersection region where the transfer trajectory and DRO capture trajectory achieve mechanical energy matching (Wang et al. 2025). LetG characterizes, from an energy perspective, the geometric conditions for "where to insert into DRO most fuel-efficiently."

## Limitations

Low-energy transfers are not without cost:

- **Transfer time**: low-energy transfers typically require 80--120 days (Earth-Moon system), compared to 3--5 days for direct transfers. Transfer time is the primary factor limiting engineering application.

- **Launch windows**: low-energy transfer windows are constrained by Sun-Earth-Moon relative geometry, typically available only a few days per month.

- **Numerical sensitivity**: manifold tube regions (especially near the neck) are extremely sensitive to initial conditions; small perturbations cause rapid trajectory divergence, increasing the difficulty of navigation and orbit determination.

- **Launch energy**: although the arrival $\Delta v$ is very small, some low-energy transfer schemes require relatively large initial energy at departure (e.g., the highly elliptical orbit needed to enter the weak stability boundary).

## Related Concepts

- [Ballistic Capture](/en/glossary/dynamics/ballistic-capture/)

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

- [Invariant Manifold](/en/glossary/dynamics/invariant-manifold/)

- [Stable Manifold](/en/glossary/dynamics/invariant-manifold/)

- [Unstable Manifold](/en/glossary/dynamics/invariant-manifold/)

- [Weak Stability Boundary (WSB)](/en/glossary/dynamics/wsb/)

- [Zero-Velocity Surface](/en/glossary/dynamics/zero-velocity-surface/)

- [Jacobi Integral](/en/glossary/dynamics/jacobi-integral/)

- [Poincaré Section](/en/glossary/dynamics/poincare-section/)

- [Heteroclinic Orbit Transfer](/en/glossary/dynamics/heteroclinic-orbit-transfer/)

- [Homoclinic Connection](/en/glossary/dynamics/heteroclinic-orbit-transfer/)

- [Libration Point](/en/glossary/fundamentals/libration-point/)

- [Synodic Frame (Rotating Frame)](/en/glossary/fundamentals/synodic-frame/)

- [Halo Orbit](/en/glossary/orbits/halo-orbit/)

## References

- Koon, Lo, Marsden, & Ross, 2000, Dynamical systems, the three-body problem and space mission design, *Celest. Mech. Dyn. Astron.*

- Parker & Anderson, 2014, *Low-Energy Lunar Trajectory Design*, JPL Deep-Space Communications and Navigation Series

- Anderson & Parker, 2012, Comparison of low-energy lunar transfer trajectories, *J. Guidance, Control, and Dynamics*

- Lo, 2002, The interplanetary superhighway and the origins program, *IEEE Aerospace Conference*

- Bello, Gomez, & Masdemont, 2010, Invariant manifolds, Lagrangian trajectories and space mission design, in *Space Manifold Dynamics*, Springer

- Renk, Hechler, & Messerschmid, 2010, Exploration missions in the Sun-Earth-Moon system, *Acta Astronautica*

- Campana et al., 2024, Low-energy earth–moon transfers via theory of functional connections and homotopy, *Celest. Mech. Dyn. Astron.*

- Cox et al., 2021, Transitability of low-thrust transfers through libration point gateways

- Ren et al., 2012, Earth-Moon low-energy transfer using invariant manifolds, *Celest. Mech. Dyn. Astron.*

- Wang et al., 2025, Mechanism analysis of the DRO low-energy transfer problem: An energy perspective

- Belbruno, 2004, *Capture Dynamics and Chaotic Motions in Celestial Mechanics*, Princeton University Press

- 李翔宇, 乔栋, 程潏 (Li, Qiao, & Cheng), 2021, Progress of three-body orbital dynamics study, *Advances in Mechanics*

- Perozzi & Ferraz-Mello (eds.), 2010, *Space Manifold Dynamics*, Springer
