---
title: Q-Law Control Law
description: An analysis of the Q-law control law, its applications in low-thrust orbit transfers, and its integration with modified equinoctial orbital elements
keywords: Q-Law, Q-Law Control Law, Lyapunov Control, Feedback Control, Low-Thrust Orbit Transfer, Trajectory Optimization, Equinoctial
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Q-Law Control Law
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Q-Law Control Law Explained | Lyapunov Orbit Control
  description: An analysis of the Q-law control law and its applications in low-thrust orbit transfers
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Q-Law Control Law Explained | Lyapunov Orbit Control
  description: An analysis of the Q-law control law and its applications in low-thrust orbit transfers
  image: /logo.png
permalink: /en/glossary/dynamics/q-law/
---

# Q-Law Control Law

> Editor source: Hu Min, Xiao Jinwei, Zhang Tiantian, Tao Xuefeng (2026) "Mission Planning for Orbit Transfer Vehicles Oriented Toward Batch Deployment of Medium and High Orbit Small Satellites"
>
> Narayanaswamy S, Damaren C J. Equinoctial Lyapunov control law for low-thrust rendezvous[J]. Journal of Guidance, Control, and Dynamics, 2023, 46(4): 781-795.
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Q-law is a feedback control law based on Lyapunov theory, used for orbit transfer control of low-thrust spacecraft. Its core idea is to construct a scalar Q function that describes the state error and ensure its monotonically decreasing behavior, thereby guiding the spacecraft to autonomously converge to the target orbit.

## Theoretical Foundation

### Lyapunov Stability

The Q-law is based on Lyapunov stability theory:

1. Construct a positive-definite Lyapunov function $Q(Z) \geq 0$
2. Design a control law such that $\dot{Q} < 0$ (Q function decreases monotonically)
3. When $Q \to 0$, the system converges to the target state

### Q Function Definition

In orbit transfers, the Q function is defined as a weighted quadratic form of orbital element errors:

$$Q(Z) = (1 + W_P P) \sum_{i=1}^{5} W_i S_i \left(\frac{\delta Z_i}{\max_L(\dot{X}_i)}\right)^2$$

where:

- $W_i$: weights for each orbital element
- $P$: penalty function term
- $S_i$: shaping function
- $\delta Z_i$: orbital element error
- $\max_L(\dot{X}_i)$: maximum rate of change (normalization factor)

## Control Law Design

### Optimal Thrust Direction

The control law aims to find the thrust direction that maximizes the rate of decrease of the Q function. By computing the extremum of $\dot{Q}$, the optimal thrust direction can be analytically obtained:

$$\alpha^* = \arctan(-D_2, -D_1)$$
$$\beta^* = \arctan(-D_3, \sqrt{D_1^2 + D_2^2})$$

where $\alpha, \beta$ are thrust direction vector components, and $D_1, D_2, D_3$ are computational coefficients related to the Q function gradient.

### Coasting Arc Mechanism

To achieve a trade-off between propellant mass and time, a coasting arc mechanism is introduced:

$$u = \begin{cases} [0, 0], & \eta_r \leq \eta_{rel} \text{ or } \eta_a \leq \eta_{abs} \\ T_{max}[\alpha^*, \beta^*], & \text{otherwise} \end{cases}$$

When thrust efficiency falls below a threshold, the engine is shut down and the spacecraft enters a coasting phase, trading time for propellant savings.

## Integration with Modified Equinoctial Elements

### Modified Equinoctial Elements (MEE)

Hu Min et al. (2026) adopted a Q-law based on Modified Equinoctial Elements (MEE):

$$\begin{cases}
p = a(1 - e^2) \\
e_1 = e\cos(\omega + \Omega) \\
e_2 = e\sin(\omega + \Omega) \\
h_1 = \tan(i/2)\cos\Omega \\
h_2 = \tan(i/2)\sin\Omega \\
L = \omega + \Omega + \theta
\end{cases}$$

### Advantages

Compared to classical orbital elements, MEE offers:

- **Numerical stability**: No singularities near near-circular orbits
- **Better control performance**: Semi-major axis $a$ replacing semi-latus rectum $p$ is more suitable for control
- **Clear physical meaning**: Each component has a clear geometric interpretation

## Application in Batch Deployment

### State-Dependent Cost Matrix Generation

Hu Min et al. (2026) used the Q-law control law to generate state-dependent transfer cost matrices offline:

1. For all discrete mass states $k = 0, 1, \dots, N$
2. For all origin-destination combinations $(i, j)$
3. Compute transfer costs $C(i, j, k)$ via Q-law simulation
4. Construct a complete three-dimensional cost matrix

### Computational Efficiency

Although the Q-law provides sub-optimal solutions, it offers significant advantages:

- **Extremely low computational cost**: Efficiency improvements of several orders of magnitude compared to direct optimization methods
- **Strong robustness**: Inherent error correction capability
- **Good real-time performance**: Closed-loop strategy can compensate for unmodeled perturbations in real time

## Performance Analysis

Research results (Hu Min et al., 2026) show:

| Optimization Objective | Propellant Consumption | Transfer Time | CPU Time |
|:---|:---|:---|:---|
| Minimize time | 96.49 kg | 32.87 d | 0.00025 s |
| Minimize propellant | 76.07 kg | 37.55 d | 0.00026 s |
| Propellant-time trade-off | 85.12 kg | 35.87 d | 0.00025 s |

By adjusting the efficiency parameters $\eta_{rel}$ and $\eta_{abs}$, flexible switching between propellant and time optimization is achievable.

## Related Concepts

- [Batch Deployment](/en/glossary/dynamics/batch-deployment/)
- [State-Dependent Traveling Salesman Problem (SDTSP)](/en/glossary/dynamics/state-dependent-tsp/)
- [Equinoctial Orbital Elements](/en/glossary/dynamics/equinoctial-elements/)
- [Coasting Arc](/en/glossary/dynamics/coasting-arc/)
- [Mass Discontinuity](/en/glossary/dynamics/mass-discontinuity/)

## References

- Hu Min, Xiao Jinwei, Zhang Tiantian, Tao Xuefeng. Mission Planning for Orbit Transfer Vehicles Oriented Toward Batch Deployment of Medium and High Orbit Small Satellites[J]. Spacecraft Engineering, 2026, 25(3): 634-646. [in Chinese]
- Narayanaswamy S, Damaren C J. Equinoctial Lyapunov control law for low-thrust rendezvous[J]. Journal of Guidance, Control, and Dynamics, 2023, 46(4): 781-795.
- Lee D, Ahn J. Optimal multitarget rendezvous using hybrid propulsion system[J]. Journal of Spacecraft and Rockets, 2023, 60(2): 456-471.
