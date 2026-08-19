---
title: Station-Keeping / Orbit Maintenance
description: "The periodic control operation that counteracts perturbation-induced drift to maintain a spacecraft near its nominal orbit in cislunar space — covering NRHO, DRO, and halo orbits; impulsive vs. continuous-thrust approaches; and the four principal strategies: target point, Floquet mode, DLQR, and x-axis control."
keywords: station-keeping, orbit maintenance, cislunar, NRHO, DRO, halo orbit, libration point, target point method, Floquet mode, DLQR, impulsive station-keeping, annual cost, solar radiation pressure
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Station-Keeping / Orbit Maintenance
  desc: Periodic control to keep a spacecraft near its nominal orbit under three-body perturbations in cislunar space.
  image: /logo.png
og:
  title: Station-Keeping / Orbit Maintenance | Glossary
  description: The periodic control operation that counteracts perturbation-induced drift to maintain a spacecraft near its nominal orbit in cislunar space — covering NRHO, DRO, and halo orbits; impulsive vs. continuous-thrust approaches; and the four principal strategies.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Station-Keeping / Orbit Maintenance | Glossary
  description: The periodic control operation that counteracts perturbation-induced drift to maintain a spacecraft near its nominal orbit in cislunar space — covering NRHO, DRO, and halo orbits; impulsive vs. continuous-thrust approaches; and the four principal strategies.
  image: /logo.png
permalink: /en/glossary/dynamics/station-keeping/
---

# Station-Keeping / Orbit Maintenance

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Station-keeping (also called orbit maintenance) is the periodic control operation that applies thrust maneuvers to counteract perturbation-induced drift, bounding the spacecraft's actual trajectory within a prescribed deviation envelope around the nominal orbit. In two-body mechanics, station-keeping primarily compensates for dissipative forces such as atmospheric drag. In the cislunar three-body regime, station-keeping confronts a fundamentally new class of problems: many nominal orbits are *inherently unstable* (e.g., collinear libration-point halo orbits), where even an infinitesimal initial error grows exponentially with a time constant as short as a few days. Superimposed on this intrinsic instability are the long-term cumulative effects of solar gravity, solar radiation pressure (SRP), and lunar non-spherical gravity, so departure from the design orbit is inevitable (Folta et al., 2014; Zhang et al., 2022).

Station-keeping is not a one-off trajectory correction but a **closed-loop periodic process** spanning the entire mission lifetime: navigation orbit determination, ground/on-board correction maneuver computation, and propulsion execution -- repeated indefinitely. The interval between successive maneuvers, called the impulse interval or coast duration, typically ranges from 2 to tens of days depending on the orbit's stability.

## Why Station-Keeping Is Needed: Perturbation Sources

The perturbation sources driving orbit drift in cislunar space, ordered by magnitude, are:

- **Intrinsic instability of the orbit (primary driver):** Orbits near the collinear L1/L2 libration points (halo, Lyapunov, large-amplitude branches of NRHO) possess a pair of real Floquet multipliers, with an unstable eigenvalue $\lambda > 1$ causing any initial deviation to grow exponentially along the unstable manifold direction. For Earth-Moon halo orbits, the divergence time constant is approximately 5-14 days -- the ARTEMIS mission's operational experience is that "a stationkeeping maneuver is required approximately once per week" (Folta and Vaughn, 2004; Pavlak and Howell, 2012).

- **Solar gravity (third-body perturbation):** Near collinear libration points, solar gravitational acceleration is on the order of $5 \times 10^{-6}$ m/s$^2$, comparable to the drift induced by the unstable manifold (Folta et al., 2014).

- **Solar radiation pressure (SRP):** For a spacecraft with a typical area-to-mass ratio (e.g., Gateway-class: 50 m$^2$ area, 25.8 tons mass), SRP acceleration is approximately $2 \times 10^{-7}$ m/s$^2$. While small in isolation, SRP neglected in the low-fidelity CR3BP model used to construct the nominal orbit adds an extra 5-6 m/s per year in maintenance cost (Zhang et al., 2022, Table 7).

- **Lunar non-spherical gravity:** For orbits with low perilune altitudes (e.g., NRHO perilune at ~3200 km, grazing the Moon), higher-order spherical harmonics (GRAIL model truncated to degree and order 8) significantly alter the dynamics near periapsis. Neglecting lunar non-spherical gravity increases NRHO annual cost from 1.63 to 3.68 m/s (Zhang et al., 2022).

- **Planetary perturbations:** The Jovian gravity contribution is typically below 1% and can be ignored or optionally included.

## Classification: Impulsive vs. Continuous Thrust

Two categories distinguished by how thrust is delivered:

**Impulsive station-keeping:** Velocity increments $\Delta V$ are applied as discrete impulses; between impulses the spacecraft coasts under natural dynamics. This is the mainstream approach in current engineering practice -- used by ARTEMIS, Gateway, and Chang'E-4 relay satellite (Folta et al., 2014; Muralidharan and Howell, 2021). Mathematically, the impulse at a discrete instant $t_k$ imposes an instantaneous state jump:

$$
\mathbf{x}(t_k^+) = \mathbf{x}(t_k^-) + \begin{bmatrix} \mathbf{0} \\ \Delta \mathbf{v}_k \end{bmatrix}
$$

**Continuous-thrust (low-thrust) station-keeping:** Electric propulsion (e.g., Hall-effect thrusters) applies a small, sustained thrust. The control force $\mathbf{u}(t)$ enters the right-hand side of the equations of motion directly; no instantaneous jump is assumed. Continuous thrust can more finely counteract unstable components with greater fuel-optimal potential, but is currently limited by the low thrust-to-weight ratio of available electric propulsion systems; impulsive strategies remain dominant in practice (Zhang and Wang, 2022).

## Control Strategies

The following four strategies constitute the mainstream methodological framework for cislunar station-keeping, listed by historical lineage and engineering maturity:

### Target Point Method

Introduced by Howell and Pernicka (1993). The nominal orbit is discretized into a series of time-indexed target points $\{\mathbf{x}^*_k\}$. The current deviation $\delta \mathbf{x}_k = \mathbf{x}_k - \mathbf{x}^*_k$ is propagated forward via the state transition matrix $\Phi(t_{k+1}, t_k)$ to predict position/velocity deviations at future target points. The optimal impulse $\Delta \mathbf{v}$ is then obtained by minimizing the performance index:

$$
J = \Delta \mathbf{v}^T \mathbf{Q} \Delta \mathbf{v} + \sum_{i=1}^{n} (\mathbf{p}_i^T \mathbf{R}_i \mathbf{p}_i + \mathbf{v}_i^T \mathbf{S}_i \mathbf{v}_i)
$$

The simplest variant nullifies only the future position deviation: $\Delta \mathbf{v} = -(\mathbf{B}_k^{k+1})^{-1}(\mathbf{A}_k^{k+1} \mathbf{p}_k + \mathbf{B}_k^{k+1} \mathbf{v}_k)$, where $\mathbf{A}, \mathbf{B}$ are the block partitions of the state transition matrix (Zhang et al., 2022).

The target point method performs well for DROs and halo orbits; Zhang et al. (2022) report an annual cost of only 1.12 m/s for the 2:1 DRO using the cost-aware variant. However, it may fail for NRHOs because the highly nonlinear dynamics near the perilune region cause the linear prediction to lose accuracy.

### Floquet Mode Approach

Exploits Floquet theory for periodic orbits: the eigenstructure of the monodromy matrix $\mathbf{M}$ distinguishes unstable, stable, and center modes. A velocity increment applied along the unstable eigenvector at the maneuver time precisely cancels the component of the current deviation along the unstable direction, thereby "excising the divergence" without wasting propellant on stable or center directions (Gomez et al., 2001; Simo et al., 1987). Post-mission analysis of the ARTEMIS mission revealed that the $\Delta V$ direction for approximately 60 actual stationkeeping maneuvers was closely aligned with the local stable eigenvector direction (Pavlak and Howell, 2012) -- implying that optimal maneuvers do not merely cancel the unstable mode, but rather **harness the stable mode to naturally pull the spacecraft back**.

Limitations: it relies on Floquet decomposition of periodic orbits and does not directly apply to quasi-periodic orbits (e.g., NRHOs in the ephemeris model). For stable or nearly stable orbits (e.g., low-amplitude NRHO branches), the unstable component is small or absent, rendering the Floquet approach suboptimal (Muralidharan and Howell, 2021).

### Discrete Linear Quadratic Regulator (DLQR)

Formulates station-keeping as a quadratic optimal control problem for a discrete linear system. The discrete dynamics use the state transition matrix $\mathbf{A} = \Phi(t_{k+1}, t_k)$ and control matrix $\mathbf{B}$:

$$
\mathbf{x}_{k+1} = \mathbf{A}\mathbf{x}_k + \mathbf{B}\Delta \mathbf{v}_k
$$

Solving the discrete algebraic Riccati equation yields a time-invariant feedback gain $\mathbf{K}$ such that $\Delta \mathbf{v}_k = -\mathbf{K} \mathbf{x}_k$ (see [Discrete Linear Quadratic Regulator (DLQR)](/en/glossary/dynamics/dlqr/)). DLQR is computationally efficient (the gain can be pre-computed and stored), does not depend on the periodic structure of the nominal orbit, and is equally applicable to quasi-periodic orbits and orbits in the ephemeris model. Zhang et al. (2022)'s 200-sample Monte Carlo simulation found DLQR to yield the lowest average cost across all strategies (2:1 DRO: 0.82 m/s/yr; halo(3): 1.15 m/s/yr; 9:2 NRHO: 1.63 m/s/yr).

### x-Axis Control Strategy

This is the engineering approach currently adopted for the Gateway mission (Muralidharan and Howell, 2021; Davis et al., 2017). It exploits the symmetry of NRHOs across the xz-plane in the synodic frame: in the CR3BP model, $\dot{x} = 0$ at every xz-plane crossing along the orbit. A maneuver is applied near apoapsis, targeting the $\dot{x}$ value at a specified *downstream* xz-plane crossing near periapsis to match that of the reference trajectory (with a tolerance of approximately 0.45 m/s).

The strategy has three tunable, mutually coupled parameters that govern performance (Muralidharan and Howell, 2021):

- **Coast duration:** The minimum time between successive impulses. Stable orbits can accommodate wider spacing to reduce cost; unstable orbits require more frequent correction.

- **Maneuver location:** Generally chosen near apoapsis. While not the most dynamically sensitive region (periapsis is), navigation errors are drastically amplified in sensitive regions, making them unfavorable maneuver locations in practice.

- **Target horizon:** The number of revolutions downstream from the maneuver to the targeted xz-plane crossing. A longer target horizon yields smaller maneuver magnitudes, but can be constrained by mission requirements such as tracking and communication windows.

## Annual Station-Keeping Cost: Cross-Orbit Comparison

The annual station-keeping cost is the core metric for assessing orbit maintenance economy, defined as the cumulative $\Delta V$ consumed over one year (in m/s). Zhang et al. (2022) conducted a systematic Monte Carlo evaluation (200 samples, navigation error 1 km / 1 cm/s, maneuver error 1%, 2-day impulse interval) of three representative Earth-Moon orbit types in the full ephemeris model. Key results:

| Orbit | Period (days) | Stability index $\nu$ | DLQR annual cost (m/s) |
|-------|---------------|----------------------|-------------------------|
| DRO (5) — 2:1 resonance | 13.66 | 1.000 (stable) | 0.82 |
| DRO (1) — small amplitude | 5.46 | 1.000 (stable) | 1.96 |
| halo (3) — moderate amplitude | 13.35 | 51.6 (strongly unstable) | 1.15 |
| halo (1) — large amplitude | 14.58 | 349.0 (extremely unstable) | 1.25 |
| NRHO (4) — 9:2 resonance | 6.56 | 1.32 (nearly stable) | 1.63 |
| NRHO (5) — lowest perilune | 6.13 | 1.09 (nearly stable) | 2.78 |

Key finding (Zhang et al., 2022): **The stability index $\nu$ has no direct monotonic relationship with annual station-keeping cost.** Stable orbits (e.g., DRO, $\nu = 1$) are not necessarily cheaper than unstable ones (halo, $\nu \gg 1$) -- because maintenance cost is a compound outcome of navigation error, maneuver execution error, SRP mismodeling, and impulse interval. Unstable orbits can "hedge" their divergence through higher maneuver frequency to keep total cost manageable. Large-amplitude DROs, farthest from the Moon with the smoothest dynamics, yield the lowest annual cost (~0.82 m/s/yr). NRHOs, despite near-unity $\nu$, in fact incur higher annual costs than halo orbits because of the sensitive perilune region.

## Engineering Constraints

In actual mission planning, several practical constraints dictate strategy feasibility and optimization direction (Zhang et al., 2022):

- **Initial orbit insertion error:** After nominal-orbit injection, position error ~10 km, velocity error ~1 cm/s (3$\sigma$), applied in random directions in Monte Carlo simulations.

- **Navigation error:** Orbit determination interval typically 2 days (i.e., the lower bound of the impulse interval); position 3$\sigma \approx$ 1 km, velocity 3$\sigma \approx$ 1 cm/s.

- **Maneuver execution error:** 1% of the impulse magnitude (1$\sigma$).

- **Minimum maneuver threshold:** Real propulsion systems cannot execute arbitrarily small impulses; typically $\Delta v_{\min} = 1$ cm/s; command impulses below this threshold are not executed.

- **SRP modeling uncertainty:** Reflectivity coefficient $C_r$ and effective cross-sectional area each carry ~5-10% uncertainty (Muralidharan and Howell, 2021), constituting one of the largest error sources in long-term simulations.

## Related Concepts

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

- [Libration Point](/en/glossary/fundamentals/libration-point/)

- [Invariant Manifold](/en/glossary/dynamics/invariant-manifold/)

- [Monodromy Matrix](/en/glossary/dynamics/monodromy-matrix/)

- [Discrete Linear Quadratic Regulator (DLQR)](/en/glossary/dynamics/dlqr/)

- [Target Point Strategy](/en/glossary/dynamics/target-point-strategy/)

- [Co-state Variables](/en/glossary/dynamics/co-state-variables/)

- [Zero-Velocity Surface](/en/glossary/dynamics/zero-velocity-surface/)

- [Solar Radiation Pressure (SRP)](/en/glossary/dynamics/srp/)

- [Poincare Section](/en/glossary/dynamics/poincare-section/)

## References

- Folta, D. C., Pavlak, T. A., Haapala, A. F., Howell, K. C., & Woodard, M. A., 2014, Earth–Moon libration point orbit stationkeeping: Theory, modeling, and operations, *Acta Astronautica* (ARTEMIS operational stationkeeping data, OCS strategy, Floquet mode alignment with optimal maneuver direction)

- Folta, D., & Vaughn, F., 2004, A survey of Earth-Moon libration orbits: stationkeeping strategies and intra-orbit transfers, AIAA 2004-4741 (dLQR vs. DC method comparison, annual cost survey for all five Earth-Moon libration-point orbits)

- Zhang, R., Wang, Y., Shi, Y., Zhang, C., & Zhang, H., 2022, Performance analysis of impulsive station-keeping strategies for cis-lunar orbits with the ephemeris model, *Acta Astronautica* (target point vs. DLQR, 200-sample Monte Carlo, SRP and non-spherical lunar gravity effects, impulse interval comparison)

- Pavlak, T. A., & Howell, K. C., 2012, Strategy for optimal, long-term stationkeeping of libration point orbits in the Earth-Moon system, AIAA 2012-4665 (long-term optimal stationkeeping, empirical alignment of ARTEMIS maneuvers with stable mode)

- Muralidharan, V., & Howell, K. C., 2021, Stationkeeping in Earth-Moon near rectilinear halo orbits, AAS 21-651 (x-axis control parameter coupling analysis, CGT stretching directions for maneuver location)

- Gomez, G., Jorba, A., Masdemont, J., & Simo, C., 2001, *Dynamics and Mission Design Near Libration Points — Vol. II* (classical source for the Floquet mode method)

- Davis, D. C., et al., 2017, Stationkeeping and transfer trajectory design for spacecraft in cislunar space, AAS 17-826 (early framework for Gateway stationkeeping analysis)
