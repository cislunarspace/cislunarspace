---
title: Orbit Identification
description: A detailed analysis of the definition of orbit identification in cislunar space, its comparison with traditional numerical integration methods, the characteristic-parameter-based identification process, and robustness to observation arc length and observation errors.
keywords: orbit identification, Orbit Identification, cislunar space situational awareness, libration point orbit, CRTBP, reference orbit, characteristic parameters, Bayesian optimization
author: 天疆说
date: 2026-04-23
lastUpdated: 2026-04-26
wechatShare:
  title: Orbit Identification
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Orbit Identification Detailed | Cislunar Space Situational Awareness
  description: A detailed analysis of the definition of orbit identification in cislunar space, its comparison with traditional numerical integration methods, the characteristic-parameter-based identification process, and robustness to observation arc length and observation errors.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Orbit Identification Detailed | Cislunar Space Situational Awareness
  description: A detailed analysis of the definition of orbit identification in cislunar space, its comparison with traditional numerical integration methods, the characteristic-parameter-based identification process, and robustness to observation arc length and observation errors.
  image: /logo.png
permalink: /en/glossary/navigation/orbit-identification/
---

# Orbit Identification

> This article author: [天疆说](https://blog.csdn.net/qq_33254264)
>
> This article is edited from: Qiao et al. (2025) "Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points"
>
> Site address: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Orbit Identification is a core problem in cislunar space situational awareness: given a sequence of observed spacecraft states over a period of time, identifying the **reference orbit** (reference orbit) that the spacecraft is traversing, i.e., the periodic or quasi-periodic orbit in the CR3BP model.

The essence of this problem is: within the standard orbit catalog established by CR3BP, finding the reference orbit that best matches the observed actual motion, thereby obtaining the physical characteristics (period, amplitude, etc.) of the spacecraft, serving space object cataloging, collision warning, and space traffic management.

## Inverse Nature of the Problem

Orbit identification and orbit design are **inverse** processes of each other:

| Process | Input | Output |
|:---|:---|:---|
| **Orbit Design** | Physical parameters of a reference orbit (period, amplitude, etc.) | Actual orbit under ephemeris model (numerical integration) |
| **Orbit Identification** | Observed actual orbital state sequence | Corresponding CR3BP reference orbit and its physical parameters |

In orbit design, a reference orbit is first obtained in CR3BP, then refined in the ephemeris model through multi-step shooting methods, two-level differential correction, etc., to obtain a real orbit satisfying the actual gravitational environment.

In orbit identification, the direction is reversed: starting from the actual orbital state sequence, physically interpretable parameters (such as period, amplitude) need to be extracted to find the corresponding reference orbit.

## Limitations of Traditional Methods

The most direct orbit identification method is **numerical integration and comparison**: selecting a specific state vector, integrating to obtain a complete orbit, and then comparing with observation results. However, in cislunar space, this method faces fundamental difficulties:

### 1. Observation Errors

For non-cooperative targets, orbital states come from radar/optical tracking with noise errors.

### 2. Dynamical Model Uncertainty

During integration, there are unmodeled factors: perturbations (solar radiation pressure, lunar non-spherical gravity, other celestial bodies) and unknown orbital maneuvers of non-cooperative spacecraft.

### 3. Chaotic Sensitivity

CR3BP itself is a non-integrable chaotic system, where initial errors cause numerical integration to diverge rapidly. Numerical experiments by Qiao et al. (2025) show: when position error exceeds **10 km** and velocity error exceeds **0.1 m/s**, integrated trajectories diverge quickly, making it impossible to identify the initial Halo orbit.

## Characteristic-Parameter-Based Identification Method

Qiao et al. (2025) proposed a six-dimensional characteristic parameter orbit identification method, effectively avoiding the numerical integration divergence problem:

### Core Idea

1. Transform the six-dimensional state $(X, Y, Z, \dot{X}, \dot{Y}, \dot{Z})$ into six-dimensional characteristic parameters $[q_1, p_1, I_2, \theta_2, I_3, \theta_3]$
2. The physical meaning of characteristic parameters is clear, directly related to the orbit's period, amplitude, etc.
3. On the Poincaré section map, reference orbits have a one-to-one correspondence with section coordinates $[I_2^{(0)}, I_3^{(0)}]$
4. Search on the section map through optimization methods to minimize the mean squared error (MSE) between the actual orbit and reference orbit

### Optimization Model

Given the state $[X_1, X_2, ..., X_n]$ corresponding to the observation sequence $[t_1, t_2, ..., t_n]$, define MSE:

$$\text{MSE} = \frac{1}{n}\sum_{i=1}^{n}\left[(I_2^{(i)} - \varphi_{I_2}(\sigma_0; t_0, t_i))^2 + (I_3^{(i)} - \varphi_{I_3}(\sigma_0; t_0, t_i))^2\right]$$

Where $\varphi$ is the integral flow function of the central manifold canonical equations.

Optimization problem:

$$\min_{\text{MSE}} \quad x = [I_2^{(0)}, I_3^{(0)}, t_0]$$
$$\text{s.t.} \quad |I_j^{(0)} - I_j^*| \leq I_{\max}, \quad j=2,3$$
$$\quad t_0 \in [0, T_{\max}]$$

### Bayesian Optimization

Since the MSE function is a black-box optimization problem (high computational cost, no explicit derivatives), Qiao et al. (2025) adopted **Bayesian Optimization** for solving, finding the global optimum within 30 function evaluations with high computational efficiency.

## Sensitivity Analysis

Qiao et al. (2025) conducted systematic analysis of two major factors affecting orbit identification:

### 1. Observation Arc Length

| Arc Length | Identification Result Characteristics |
|:---|:---|
| Short arc (1 hour) | Results are scattered, mainly distributed along constant energy lines, representing "instantaneous orbits" |
| Long arc (1 month) | Results converge to reference orbit, representing "mean orbit" |

This phenomenon is analogous to the concept of **osculating elements** and **mean elements** in the two-body problem.

### 2. Observation Errors (State Deviations)

Robustness to state errors:

- When position error < **100 km** and velocity error < **1 m/s**, identification results have small fluctuations
- 100 km position error and 1 m/s velocity error have equivalent impact on robustness
- This points the way for future development of cislunar space orbit determination technology: **greater emphasis should be placed on improving velocity measurement accuracy**

## Significance

This method provides an orbit identification approach for cislunar space situational awareness **without relying on long-term numerical integration**, remaining effective under non-cooperative target and low-precision observation conditions. Combined with Poincaré section distribution maps, the target's orbit family (northern Halo, southern Halo, Lissajous, etc.) and its physical parameters can be quickly determined.

## Related Concepts

- [Central Manifold](/en/glossary/central-manifold/)
- [Poincaré Section](/en/glossary/poincare-section/)
- [Action-Angle Variables](/en/glossary/action-angle/)
- [Birkhoff-Gustavson Normal Form](/en/glossary/birkhoff-gustavson/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/cr3bp/)
- Cislunar Space Situational Awareness
- Reference Orbit
- Non-cooperative Target

## References

- Qiao C, Long X, Yang L, et al. Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points[J]. Chinese Journal of Aeronautics, 2025. doi: 10.1016/j.cja.2025.103869.
- Wang X, Jin Y C, Schmitt S, et al. Recent advances in Bayesian optimization[J]. ACM Comput Surv, 2023, 55(13s): 1-36.
