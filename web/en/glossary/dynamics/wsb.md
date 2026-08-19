---
title: Weak Stability and Weak Stability Boundary (WSB)（弱稳定性与弱稳定边界）
description: The Weak Stability Boundary (WSB) is the region in the Earth-Moon-Sun four-body gravitational environment where a spacecraft's Keplerian cycling motion breaks down due to solar perturbations — the boundary where ballistic lunar capture becomes possible without a retro-burn. Covers Belbruno & Miller's original algorithm, the Hiten mission, WSR/weak instability/practical stability region as three facets of weak stability, and comparison with invariant manifold theory.
keywords: Weak Stability Boundary, WSB, ballistic capture, weak stability region, WSR, weak instability, Belbruno, low-energy transfer, Hiten, practical stability region
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Weak Stability and Weak Stability Boundary (WSB)
  desc: Ballistic lunar capture through solar perturbations — from Belbruno's algorithm to Hiten's flight.
  image: /logo.png
og:
  title: Weak Stability and Weak Stability Boundary (WSB) | Glossary
  description: The WSB is the region where solar perturbations enable ballistic lunar capture. Covers Belbruno & Miller 1993 algorithm, Hiten validation, three facets of weak stability (WSR, weak instability, practical stability region), and invariant manifold comparison.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Weak Stability and Weak Stability Boundary (WSB) | Glossary
  description: "From Belbruno's algorithm to Hiten's flight: ballistic capture, WSR, weak instability, and practical stability regions."
  image: /logo.png
permalink: /en/glossary/dynamics/wsb/
---

# Weak Stability and Weak Stability Boundary (WSB)（弱稳定性与弱稳定边界）

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Weak Stability Boundary (WSB) is a concept introduced by Belbruno & Miller (1993): in the Earth-Moon-Sun four-body gravitational environment, a fuzzy transition boundary exists around each central body. Near this boundary, a spacecraft's "stable cycling" motion breaks down — after a few revolutions, it escapes the central body. The WSB is located in the region where gravitational perturbations balance: the pull of the central body, the perturbations from other bodies (Earth and Sun for the lunar case), and the spacecraft's velocity direction interact to produce trajectories that are highly sensitive to small velocity changes.

Specifically, the lunar WSB ($\text{WSB}_M$) has cycling-breakdown distances $r^*$ of roughly 0.08–2.95 Earth-Moon distances (~30,000–1,100,000 km) depending on direction and Sun-Earth-Moon phasing, while the Earth WSB ($\text{WSB}_E$) reaches out to about four times the Earth-Moon distance (~$1.5 \times 10^6$ km). The WSB is defined procedurally rather than geometrically — it is constructed point by point by numerically checking the critical distance at which stable cycling breaks down for a given radial distance and direction of motion (Belbruno 2024).

## Algorithmic Definition (Belbruno & Miller 1993)

For the lunar WSB ($\text{WSB}_M$), the consistency of stable motion is defined as follows:

1. Choose a motion direction $(\theta, \varphi, \alpha)$ (radial angle, polar angle, velocity orientation in the transverse plane) and eccentricity $e$.
2. Launch a test particle from a given distance $r$ on a radial line from the Moon, with initial velocity orthogonal to the radial direction (within the half-plane $P$ perpendicular to $l$).
3. Numerically integrate the four-body equations of motion (Sun-Earth-Moon-spacecraft), checking whether the particle completes at least two full revolutions about the Moon with return crossings of the reference half-plane. If fewer than the minimum number of cycles are completed before escape, stable motion is deemed to have failed.
4. Increment $r$ and repeat. The critical distance $r^*$ is defined as the minimum distance at which cycling breaks down — below $r^*$ stable cycling persists; above $r^*$ the particle escapes due to solar perturbation.

Repeating this procedure across different $(\theta, \varphi, \alpha)$ directions yields a surface $r^*(\theta, \varphi, \alpha)$ — the 3D envelope of the WSB. Belbruno's 1993 results give $r^*$ values for the lunar WSB ranging from 0.08 to 2.95 Earth-Moon distances (~30,000–1,100,000 km), a region far larger than the classical "lunar sphere of influence" (~66,000 km).

## Ballistic Capture and the Hiten Mission

The practical significance of the WSB lies in enabling **ballistic capture** — a spacecraft arriving near the Moon can naturally enter an elliptic lunar orbit without a large retro-burn. The classical approach (where hyperbolic excess velocity $V_\infty$ determines capture $\Delta V$) requires hundreds of m/s for capture. WSB ballistic capture achieves this with zero insertion $\Delta V$ (converting to a weakly unstable elliptic state), requiring only a tiny stabilization maneuver thereafter.

Japan's Hiten spacecraft became the first mission to use WSB ballistic capture to reach the Moon (Belbruno & Miller 1993). Launched in January 1990, Hiten lacked sufficient propellant to reach the Moon via classical transfer. Belbruno proposed an alternative:

1. Depart from Earth orbit, fly by the Moon, gaining enough energy to reach the Earth WSB (at ~$1.5 \times 10^6$ km);
2. At the Earth WSB, perform a small $\Delta V$ (~14 m/s) to match the initial conditions of a ballistic capture trajectory connecting to the lunar WSB;
3. Coast along the WSB(M) trajectory back to the Moon and enter lunar orbit with no additional capture maneuver.

The WSB transfer saves approximately 18% in total $\Delta V$ versus a Hohmann transfer, at the cost of longer flight time (~3–4 months instead of ~3 days). Hiten initiated the WSB transfer in April 1991 and achieved lunar orbit on October 2, 1991, validating the technique.

## Three Facets of Weak Stability

The cislunar literature contains three related but distinct concepts that all invoke "weak stability." They should be understood separately:

### 1. Collinear Weak Stability Region (WSR) — Corridor Type

In Chinese-language literature, the "Weak Stability Region" (WSR) commonly refers to **a corridor extending along the Earth-Moon line through the three collinear libration points $L_1, L_2, L_3$**, within which a spacecraft requires only minimal thrust to operate on a closed orbit. This overlaps with, but is not identical to, Belbruno's WSB — the WSR emphasizes the weak-gravity environment near libration points within the CR3BP framework, while the WSB emphasizes four-body solar perturbation evolution. Both express the common theme of "weak stability": the balance of gravitational forces makes spacecraft motion highly sensitive to environmental perturbations, enabling large orbital changes via small impulses.

### 2. Triangular Point Practical Stability Region

The triangular libration points ($L_4, L_5$) are center-type stable in the linear CR3BP analysis — all eigenvalues are pure imaginary. However, in the real Earth-Moon system, solar gravity introduces a non-integrable perturbation, causing motion near the triangular points to exhibit **weak instability**: the orbit is not violently ejected, but slowly drifts away over long time scales (years to decades). This bounded stable region is the **practical stability region**, where initial offsets of tens of thousands of kilometers can persist for decades without escape (Liu & Liu, 2008) — though solar perturbations drastically shrink the effective domain in realistic force models.

This contrasts with the strong exponential instability of collinear libration points (Floquet multiplier $\lambda_u > 1$, divergence rate $\delta \approx 0.5\ \text{day}^{-1}$) — the latter requires continuous active control, whereas triangular-point weak instability needs corrections only every few months.

### 3. Weakly Stable Orbit

In the broadest sense, a "weakly stable orbit" is one whose dynamical system has **at least one positive Lyapunov characteristic exponent** — initial errors grow exponentially in time, but at a relatively slow rate compared to strongly divergent orbits. Typical examples include Halo orbits and quasi-periodic orbits near collinear libration points (Qian et al., 2013). Their common feature: error divergence is inevitable, but slow enough that the stationkeeping cadence and total cost are lower than one might expect from the bare Floquet multiplier magnitude.

## Comparison with Invariant Manifold Theory

WSB theory and invariant manifold theory are two complementary frameworks for viewing low-energy transfers. Invariant manifolds (stable/unstable) originate from dynamical systems theory, characterizing the precise manifold structure of a specific periodic orbit's neighborhood, enabling transfer design via manifold patching. The WSB originates from four-body numerical exploration, characterizing a global region shaped by solar perturbations — without relying on the manifold of any specific periodic orbit. The two frameworks intersect: Belbruno et al. (2010) note that ballistic capture trajectories on the lunar WSB spatially overlap with the stable manifolds of Earth-Moon $L_1$/$L_2$ Lyapunov orbits — the WSB can be viewed as a generalization of invariant manifolds to the four-body environment.

From an engineering perspective, the WSB approach directly models ephemeris perturbations (lunar eccentricity, solar gravity) rather than introducing CR3BP approximations that require subsequent correction — making it closer to the operational environment.

## Practical Considerations

- **Ballistic Capture Design**: WSB transfers are suitable for propellant-limited lunar orbiters (e.g., asteroid sample-return lunar capture phases). Flight time penalty (months vs. days) is the primary trade-off.

- **Weak Instability Utilization**: Weak instability near triangular points means long-term on-orbit operation at very low cost (sub-m/s per year) — as low-cost staging for relay communications or navigation satellite constellations.

- **Corridor Passage**: The collinear WSR's low-thrust characteristics make it a potential natural dynamical corridor for small satellites to operate without significant impulsive stationkeeping.

## Related Concepts

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

- [Libration Point](/en/glossary/fundamentals/libration-point/)

- [KAM Theory and Long-Term Stability](/en/glossary/dynamics/kam-theory/)

- [Monodromy Matrix and Floquet Stability Theory](/en/glossary/dynamics/monodromy-matrix/)

- [Stable Manifold](/en/glossary/dynamics/invariant-manifold/)

- [Poincaré Map](/en/glossary/dynamics/poincare-map/)

- [Floquet Modal Method and Stationkeeping](/en/glossary/dynamics/floquet-modal-method/)

## References

- Belbruno & Miller, 1993, "Sun-Perturbed Earth-to-Moon Transfers with Ballistic Capture", J. Guidance, Control, and Dynamics (original WSB definition, algorithm, and Hiten flight demonstration)

- Belbruno, 2024, "Cantor Set Structure of the Weak Stability Boundary for Infinitely Many Cycles in the Restricted Three-Body Problem" (Cantor-set structure of the WSB; precise mathematical picture of infinite-cycle cycling breakdown)

- Belbruno et al., 2010, "Weak Stability Boundary and Invariant Manifolds" (geometric relationship between WSB and invariant manifolds; spatial overlap of lunar WSB trajectories with $L_1$/$L_2$ manifolds)

- Topputo, 2013, "On Optimal Two-Impulse Earth–Moon Transfers in a Realistic Four-Body Model", Celest. Mech. Dyn. Astron. (numerical optimization framework for WSB transfers in the four-body model)

- Liu & Liu, 2008, "Position drift and control of probes stationed near Earth-Moon triangular libration points" (practical stability region characteristics and solar perturbation effects)

- Qian et al., 2013, Journal of Astronautics (numerical analysis of weakly stable orbits and their stationkeeping strategies)

- Parker & Anderson, 2014, *Low-Energy Lunar Trajectory Design*, JPL (engineering handbook for WSB transfer design)

- Folta & Vaughn, 2004, "A Survey of Earth-Moon Libration Orbits" (weak stability analysis for libration point stationkeeping, with dLQR and differential correction comparison data)
