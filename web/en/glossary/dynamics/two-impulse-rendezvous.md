---
title: "Impulsive Maneuvers and Rendezvous"
description: Orbit design and rendezvous methods that approximate chemical propulsion maneuvers as instantaneous velocity increments (impulses). Covers the Lambert problem and Hohmann transfer, two-impulse / three-impulse / multi-impulse maneuver strategies, libration-point two-impulse transfers, NRHO impulsive rendezvous phasing, TCT (Thrust-Coast-Thrust) sequences, impulse application rules and impulse interval design, and optimization metrics such as total delta-V and arrival impulse.
keywords: impulsive maneuver, two-impulse rendezvous, multi-impulse, three-impulse transfer, NRHO phasing, Lambert problem, Hohmann transfer, impulse application rule, libration-point two-impulse transfer, Thrust-Coast-Thrust, TCT, total delta-V
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Impulsive Maneuvers and Rendezvous
  desc: Orbital maneuvers and rendezvous for chemical-propulsion spacecraft—from two-impulse to multi-impulse, from two-body to libration points.
  image: /logo.png
og:
  title: "Impulsive Maneuvers and Rendezvous Explained | Terminology Definition"
  description: Orbit design and rendezvous methods that approximate chemical propulsion maneuvers as instantaneous velocity increments (impulses). Covers the Lambert problem and Hohmann transfer, two-impulse / three-impulse / multi-impulse strategies, libration-point impulse transfers, NRHO phasing, TCT sequences, impulse application rules, and total delta-V evaluation metrics.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Impulsive Maneuvers and Rendezvous Explained | Terminology Definition"
  description: Orbit design and rendezvous methods that approximate chemical propulsion maneuvers as instantaneous velocity increments (impulses). Covers Lambert/Hohmann, multi-impulse strategies, libration-point transfers, NRHO phasing, TCT sequences, and total delta-V.
  image: /logo.png
permalink: /en/glossary/dynamics/two-impulse-rendezvous/
---

# Impulsive Maneuvers and Rendezvous

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An impulsive maneuver is a mathematical approximation for chemical-propulsion orbital maneuvers: it assumes thrust $F \to \infty$, burn time $\Delta t \to 0$, such that the impulse $F\Delta t$ is finite and the orbital velocity undergoes an instantaneous jump. This approximation is valid when the burn time is much shorter than the orbital period—which holds well for typical high-thrust chemical rockets (thrust of hundreds of thousands of Newtons, $I_{sp}$ of 300--400 s) in low Earth orbit transfers (Vallado 2022).

Impulsive maneuvers reduce orbit design to solving for a velocity increment $\Delta v$ (magnitude and direction), rather than handling continuous-thrust integration. Two core performance metrics:

- **Total velocity increment** $\Delta v_{\text{total}}$: the sum of all impulse $\Delta v$ values required for a complete orbital transfer. It is the basic measure of fuel consumption, mapped to propellant mass via the Tsiolkovsky equation.

- **Arrival impulse** $\Delta v_f$: the final impulse applied upon reaching the target orbit. In DRO insertion problems, Pareto-front solutions show $\Delta v_f$ decreasing from about 98.5 m/s to about 2.2 m/s as transfer time increases, reflecting the fundamental trade-off between transfer time and fuel consumption.

## Impulsive Maneuvers in the Two-Body Problem

### Two-Impulse: The Lambert Problem and Hohmann Transfer

Two-impulse rendezvous is the most basic impulsive maneuver mode: a single departure impulse is applied at the initial orbit and a single arrival impulse at the final orbit, with the intervening coasting arc relying solely on gravity. This corresponds to the Lambert problem: given two position vectors $\mathbf{r}_1, \mathbf{r}_2$ and a transfer time $t_f$, find the initial and terminal velocities of the transfer orbit.

The solution to the Lambert problem, obtained via Lagrange coefficients or Gibbs' method, admits long-way/short-way and multi-revolution solution branches. When the two orbits are coplanar and circular, the energy-optimal two-impulse solution reduces to the **Hohmann transfer**: both impulses are applied tangentially—the departure impulse accelerates the spacecraft into an elliptical transfer orbit whose semi-major axis is the average of the two orbital radii, and the arrival impulse decelerates to circularize.

In the more general multi-revolution case, two-impulse rendezvous can be extended via multiple-revolution Lambert solutions to include transfers with 0 to N additional full revolutions (Shen and Tsiotras 2003).

### Three-Impulse and Multi-Impulse

When the two-impulse solution does not satisfy constraints (e.g., restricted thrust direction, window constraints), or to further optimize fuel consumption, intermediate impulses are introduced:

- **Three-impulse transfer**: In the standard configuration for Earth-Moon DRO insertion, three impulses are applied sequentially at the departure point, periapsis, and insertion point. The departure impulse sends the spacecraft from a parking orbit into an Earth-Moon transfer leg; the periapsis impulse is applied at the Moon flyby periapsis, exploiting the gravity assist to redirect toward the Moon-to-DRO transfer leg; the insertion impulse at the DRO insertion point completes orbit matching. Total impulse equals the sum of periapsis and insertion impulses (Wei et al. 2026).

- **Three-impulse orbit insertion**: A specific formulation of three-impulse transfer for DRO capture—first impulse: low-orbit departure; second impulse: periapsis redirection; third impulse: DRO insertion.

- **Multi-impulse maneuver**: Multiple impulse maneuvers used in orbital transfers, allowing piecewise adjustment of orbital parameters for more flexible transfer trajectory design. In complex missions with long transfer times and many constraints, increasing the number of impulses generally reduces total fuel consumption at the cost of increased operational complexity.

## Impulsive Maneuvers in the Three-Body Problem

In the multi-body dynamical context of the CR3BP, impulsive maneuvers extend beyond the two-body Lambert framework and must account for the stable/unstable manifold structure of libration-point orbits.

### Libration-Point Two-Impulse Transfers

A spacecraft departs from a near-Earth parking orbit and reaches a libration-point periodic orbit with only two impulses (Pan et al. 2017). The strategy exploits the invariant manifolds of the CR3BP:

1. **First impulse** (departure): Sends the spacecraft from near-Earth orbit onto a patched transfer leg heading toward the stable manifold of the target periodic orbit.
2. **Coasting arc**: The spacecraft follows gravity-only natural motion along the patched leg.
3. **Second impulse** (arrival): At the manifold patching point, matches the state of the target orbit; thereafter the spacecraft drifts unpowered along the stable manifold toward the target periodic orbit.

The reason a libration-point two-impulse transfer requires only two impulses is that it leverages the natural dynamics of manifolds—the coasting arc is not a free Lambert arc but an orbit transition "guided" by the manifold.

### NRHO Impulsive Rendezvous Phasing

On near-rectilinear halo orbits (NRHO), rendezvous between co-orbital spacecraft requires phasing. **NRHO two-impulse phasing** (Li et al. 2026): the chaser uses two impulses to match phase with a target spacecraft. The first impulse departs from the original NRHO to chase or wait for the target; after a transfer time, the second impulse restores the target-orbital state. Compared to three-impulse schemes, two-impulse phasing is more suitable for large phase differences.

Fossa et al. (2022) further studied two- and three-impulse phasing strategies on NRHO, showing that for the $L_2$ southern NRHO, total $\Delta v$ to specific target phases can be as low as ~1.5 m/s, significantly lower than traditional multi-revolution drift schemes.

### Two-Impulse Transfers Between Libration-Point Orbits

The two-impulse maneuver (TI) uses two impulses to transfer between collinear libration-point orbits, solving for impulse velocity increments via state transition matrix (STM) linearization of relative dynamics. The method computes the deviation between the target and current orbit states at the first impulse, propagates it via the STM to the target point, and solves for impulse velocity increments satisfying terminal conditions. This approach is computationally efficient, suitable for on-board guidance, though high-precision requirements demand iterative solutions to compensate for linearization errors (Cuevas del Valle et al. 2022).

## Impulse Application Rules

From the differential relationship between the Jacobi constant and velocity increment in the CR3BP, two energy-efficiency-optimal principles for impulse application can be derived (Qiao and Yang 2024):

1. **Deceleration maneuvers** should be applied at velocity maxima, with the velocity increment opposite and collinear to the velocity vector. When velocity is greatest, a given $\Delta v$ can most effectively reduce orbital energy (Jacobi constant).

2. **Turning maneuvers** should be applied at velocity minima. The energy cost of changing velocity direction is proportional to the current speed; the lower the speed, the more fuel-efficient the turn.

These rules provide physical interpretation for impulse-position and direction selection in multi-body gravity fields, serving as important qualitative guidance for initial-guess generation and result evaluation in trajectory optimization.

## Impulse Interval and Engineering Constraints

In station-keeping missions, impulses are not applied at arbitrary times but on fixed time intervals.

**Impulse interval** is the time between two successive station-keeping impulses, a core design parameter of the keeping strategy (Zhang et al. 2022):

- Longer intervals generally yield lower annualized fuel consumption but larger position deviations.

- For stable or weakly unstable orbits (e.g., DRO, NRHO), intervals of 1--7 days or longer are acceptable.

- For unstable orbits (e.g., Halo), excessively long intervals cause exponential orbital divergence, necessitating shorter intervals (hours to half a day).

The impulse application rules prescribe optimal impulse direction and location; the impulse interval embeds them into a temporal scheduling framework—together, the two define the complete impulsive station-keeping strategy.

## Comparison with Continuous-Thrust Control

| Property | Impulsive Maneuver | Continuous Thrust |
|------|---------|---------|
| Thrust model | $F \to \infty$, $\Delta t \to 0$ | $F$ finite, sustained |
| Propulsion system | Chemical rocket | Electric propulsion |
| $I_{sp}$ | 100--400 s | 2000--10000 s |
| Orbit solution | Lambert problem / linear algebra | Optimal control / two-point BVP |
| Fuel consumption | High (more propellant) | Low (less propellant) |
| Transfer time | Short (days) | Long (weeks to months) |
| Thrust arcs | Departure/arrival instants only | Throughout transfer or bang-bang switching |

See [Electric Propulsion (EP)](/en/glossary/fundamentals/ep/) and [Bang-bang Control](/en/glossary/dynamics/bang-bang-control/).

## Related Concepts

- [Electric Propulsion (EP)](/en/glossary/fundamentals/ep/) — The physical foundation of continuous-thrust systems; the complementary thrust type to the impulsive model

- [Bang-bang Control and Lawden's Arc Law](/en/glossary/dynamics/bang-bang-control/) — The pulse-like switching logic of fuel-optimal continuous thrust; two-impulse solutions provide continuation initial guesses

- [Tangential Thrust Control](/en/glossary/dynamics/tangential-thrust-control/) — Thrust-direction strategies under continuous thrust

- [CR3BP (Circular Restricted Three-Body Problem)](/en/glossary/dynamics/cr3bp/) — The dynamical framework for libration-point impulsive transfers

- [Zero-Velocity Surface](/en/glossary/dynamics/zero-velocity-surface/) — The reachable region boundary defined by the Jacobi constant; geometric background for impulse application rules

- [Libration Point](/en/glossary/fundamentals/libration-point/) — Reference targets for libration-point orbit impulsive transfers

- [Halo Orbit](/en/glossary/orbits/halo-orbit/) — Typical target orbit families for two- and multi-impulse transfers

## References

- Vallado, 2022, Fundamentals of Astrodynamics and Applications. Classic two-body treatment of impulsive maneuvers and the Lambert problem.

- Lawden, D. F., 1963, Optimal Trajectories for Space Navigation. Butterworths. Ch. 4: Systematic derivation of optimality conditions for impulsive maneuvers via the primer vector.

- Prussing, J. E., 2010, Primer Vector Theory and Applications. Evaluation and optimization of impulsive maneuvers via primer vector theory.

- Shen and Tsiotras, 2003, Optimal Two-Impulse Rendezvous Using Multiple-Revolution Lambert Solutions. JGCD. Application of multi-revolution Lambert solutions to two-impulse rendezvous.

- Pan et al., 2017, Fast Computation of Libration-Point Two-Impulse Transfer Orbits. Cislunar transfer strategy using two-impulse manifold patching.

- Li et al., 2026, NRHO Two-Impulse Phasing, Chinese Journal of Space Science, 46(1): 175-188. Phase-vs-fuel analysis for NRHO two-impulse phasing.

- Fossa et al., 2022, Two and Three Impulses Phasing Strategy with a Spacecraft Orbiting on an Earth-Moon NRHO. Comprehensive analysis of NRHO rendezvous phasing.

- Cuevas del Valle et al., 2022, Relative Dynamics and Modern Control Strategies for Rendezvous in Libration Point Orbits. Application of STM methods to libration-point orbit rendezvous.

- Wei et al., 2026, Three-Impulse Transfer and Insertion, J. Beijing Univ. Aeronautics and Astronautics. Standard three-impulse configuration for DRO insertion.

- Qiao and Yang, 2024, Design and Optimization of Low-Energy Earth-Moon L1 Transfer Orbits. Detailed derivation of impulse application rules.

- Zhang et al., 2022, Engineering design analysis of impulse intervals and orbit keeping.

- Kluever and Pierson, 1995, Original concept and dynamical analysis of the TCT sequence.
