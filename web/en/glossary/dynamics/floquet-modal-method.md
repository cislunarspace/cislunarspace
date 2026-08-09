---
title: Floquet Modal Method and Libration Point Stationkeeping（Floquet模态法与平动点轨道保持）
description: The Floquet modal method is a libration point stationkeeping strategy based on eigen-decomposition of the monodromy matrix — it projects state deviations onto Floquet modes and cancels only the exponentially growing unstable component, achieving low fuel consumption with long maneuver intervals. Covers Floquet modal method, unstable mode cancellation, and orbit balancing (continuation) method; explains why ARTEMIS chose orbit continuation over Floquet mode cancellation.
keywords: Floquet modal method, stationkeeping, libration point, unstable mode cancellation, orbit balancing, orbit continuation, impulse control, ARTEMIS, quasi-Floquet transformation
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Floquet Modal Method and Libration Point Stationkeeping
  desc: Floquet-theory-based libration point stationkeeping: from unstable mode cancellation to orbit continuation.
  image: /logo.png
og:
  title: Floquet Modal Method and Libration Point Stationkeeping | Glossary
  description: The Floquet modal method cancels only the unstable component of state deviations, achieving low-fuel, long-interval control. Compares Floquet modal method, unstable mode cancellation, and orbit balancing strategies with ARTEMIS mission engineering rationale.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Floquet Modal Method and Libration Point Stationkeeping | Glossary
  description: From Floquet theory to orbit continuation: the spectrum of stationkeeping strategies and engineering choices.
  image: /logo.png
permalink: /en/glossary/dynamics/floquet-modal-method/
---

# Floquet Modal Method and Libration Point Stationkeeping（Floquet模态法与平动点轨道保持）

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition and Core Idea

The Floquet modal method is a class of libration point stationkeeping strategies based on eigen-decomposition of the monodromy matrix. The core idea: decompose the deviation $\Delta X$ from the reference orbit into 6 Floquet modes (2 unstable, 2 center, 2 stable), then cancel only the exponentially growing unstable component while ignoring the oscillatory center modes and the decaying stable modes. Since the unstable mode dominates long-term error divergence, canceling it yields the lowest control cost, and maneuver intervals can be stretched to the time scale required for the error to re-accumulate to the activation threshold — typically days to weeks.

This principle was developed by Gómez et al. (1998) and subsequent work (Hou et al., 2011) into an operational stationkeeping framework for libration point missions. Compared with classical reference-orbit tracking methods (where maneuvers correct back to the reference orbit every few revolutions), the Floquet approach significantly reduces fuel consumption and yields longer maneuver intervals — particularly advantageous for deep-space missions requiring minimal thruster firings (e.g., those sensitive to instrument disturbance).

## Three Stationkeeping Strategies

Earth-Moon libration point stationkeeping strategies fall into three categories, best understood in terms of whether they depend on a reference orbit:

### Floquet Modal Method (Unstable Mode Cancellation)

**Principle**: Use a quasi-Floquet transformation to map the deviation onto the Floquet mode basis, obtaining the instantaneous amplitude $a_u$ of the unstable component. Apply an impulse $\Delta V$ along the unstable direction to set $a_u \to 0$, thereby eliminating the driving source of divergence. Center and stable components are left untouched.

**Computational procedure**:

1. Pre-compute the state transition matrix and Floquet basis ($W(t)$ matrix) on the reference orbit.
2. Compare the spacecraft's measured state with the reference orbit to obtain the deviation $\Delta X$.
3. Project $\Delta X$ onto the basis: $a = W^{-1} \cdot \Delta X$.
4. If $|a_u| > $ threshold, solve the impulse equation: $\Delta V$ such that $a_u=0$ at the start of the next cycle.
5. Maneuvers can be intermittent — the interval is determined by the threshold stringency: tighter thresholds mean more frequent maneuvers.

**Advantages**: Lower fuel consumption than reference-orbit tracking; long maneuver intervals (days to weeks); the option to leave center-mode amplitude variations uncontrolled preserves orbital natural evolution.
**Disadvantages**: Requires a pre-computed reference orbit and Floquet basis; sensitivity to reference orbit accuracy and perturbations — lunar eccentricity and solar gravity cause the modal computation to deviate from reality.

### Floquet Strategy (Nodal Method)

The Floquet strategy is mathematically in the same family as the Floquet modal method — the key difference lies in computing the Floquet decomposition at specific nodes of the reference orbit (e.g., $x$-axis crossings, or $x$-$z$ plane crossings). Nodal computation simplifies the modal matrix because the dynamical conditions at a node are more regular, yielding greater numerical stability and engineering applicability. Hou et al. (2011) systematized this strategy as the standard stationkeeping framework for Earth-Moon libration point orbits — the modal matrix is computed at each $x$-$z$ plane crossing to decide whether to execute a maneuver.

### Orbit Balancing (Orbit Continuation) Method

The orbit balancing method (also called **orbit continuation**) represents a fundamentally different approach to libration point stationkeeping: rather than attempting to return to a prescribed reference orbit, it selects a specific node on the current trajectory (e.g., an $x$-axis crossing) and applies a maneuver designed so that, several revolutions later, an energy or velocity target is met — thereby keeping the orbit from escaping.

Folta et al. (2010) describe this method in detail as applied to the **ARTEMIS** mission (quasi-periodic Lissajous orbits at Earth-Moon $L_1$/$L_2$). ARTEMIS chose **not** to use the Floquet modal method for two engineering reasons:

1. The mission had **no pre-generated reference orbit** for computing Floquet modes — the parameter space of quasi-periodic Lissajous orbits is continuous, with no single "correct" nominal orbit.
2. Under a full ephemeris model, lunar eccentricity and solar gravity make Floquet mode computation sensitive to perturbations, especially for quasi-periodic motion that cannot be precisely matched to a single CR3BP periodic orbit — the modal basis varies strongly over time.

Typical operation of the orbit balancing method: at an $x$-axis crossing, require the future $x$-velocity to be slightly negative, ensuring the orbit always wraps inward toward the libration point rather than escaping — this constraint is enforced via differential correction (DC) that solves for the maneuver direction and time. Folta & Vaughn (2004) report ARTEMIS annual stationkeeping costs of approximately 15–70 m/s (Lissajous) to 100–200 m/s (Halo), depending on orbit amplitude and control direction ($x$-axis vs. $y$-axis).

## Strategy Comparison

| Property | Floquet Modal Method | Floquet Strategy (Nodal) | Orbit Balancing (Continuation) |
|----------|---------------------|--------------------------|-------------------------------|
| Reference orbit | Required | Required | Not required |
| Control objective | Cancel unstable mode | Cancel unstable mode | Bound subsequent motion envelope |
| Maneuver location | Any point or node | Nodes only | Nodes only |
| Fuel consumption | Low (unstable component only) | Low (same, but more stable) | Moderate (energy correction needed) |
| Robustness to perturbations | Sensitive | Moderate (node constraint helps) | Better (numerical optimization adapts) |
| Typical application | Sun-Earth missions, pure CR3BP | Earth-Moon system, STK environment | ARTEMIS (quasi-periodic orbits without reference) |

## Practical Considerations

- **Mode Selection**: The key tuning parameter of the Floquet modal method is the unstable-component threshold — larger thresholds yield longer maneuver intervals but reduce fuel efficiency. Mission design must balance maneuver frequency against fuel cost.

- **Reference Orbit Dependence**: The Floquet modal method requires the reference orbit to be numerically balanced to high precision (at least $10^{-12}$) for reliable modal matrix computation — for large-amplitude Halo orbits, spin-plane constraints must also be introduced in the correction process.

- **Robustness Under Perturbations**: Under a full ephemeris model, the reference orbit and modal basis can be periodically re-computed to compensate for accumulated perturbation effects, mitigating modal drift errors.

- **Connection to Invariant Manifold Design**: The stable direction $w_s$ and unstable direction $w_u$ from the Floquet modal method are precisely the asymptotic directions needed for manifold patching — stationkeeping and transfer trajectory design share the same Floquet analysis infrastructure.

## Related Concepts

- [Monodromy Matrix and Floquet Stability Theory](/en/glossary/dynamics/monodromy-matrix/)

- [State Transition Matrix (STM)](/en/glossary/fundamentals/stm/)

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

- [Manifold Propagation](/en/glossary/dynamics/invariant-manifold/)

- [Halo Orbit Insertion (HOI)](/en/glossary/orbits/hoi/)

- [Halo Orbit](/en/glossary/orbits/halo-orbit/)

- [Lyapunov Orbit](/en/glossary/orbits/lyapunov-orbit/)

## References

- Gómez et al., 1998, "Study of the Transfer Between Halo Orbits", Acta Astronautica (initial introduction of the Floquet modal concept)

- Hou et al., 2011, "Station-Keeping of Libration Point Orbits by the Floquet Mode Elimination Approach in the Earth-Moon System", Acta Astronautica (complete Floquet strategy framework and Earth-Moon $L_1$/$L_2$ validation)

- Folta et al., 2010, "Applications Of Libration Point Orbit Transfers In The Earth-Moon System", AAS 10-139 (orbit balancing method design for ARTEMIS, VF13AD optimizer usage, and actual maneuver plan)

- Folta & Vaughn, 2004, "A Survey of Earth-Moon Libration Orbits: Stationkeeping Strategies and Intra-Orbit Transfers", AIAA-2004-4741 (systematic review of three stationkeeping approaches, with annual cost data for dLQR, DC, and x- vs. y-axis control)

- Gao et al., 2023, "Low-Thrust Station-Keeping Control for Lunar Near Rectilinear Halo Orbits" (improved quasi-Floquet basis under continuous low-thrust control)

- 2024, Journal of Astronautics, doi:10.3873/j.issn.1000-1328.2024.09.007 (recent Chinese review of Floquet modal method, with quantitative $\delta$-threshold vs. maneuver-frequency relation)
