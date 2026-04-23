---
title: Orbit Identification
description: Detailed explanation of orbit identification in cislunar space — identifying reference orbits from observed spacecraft state sequences using characteristic parameters and Poincaré sections
keywords: orbit identification, cislunar space situational awareness, libration point orbit, CRTBP, reference orbit, characteristic parameters, Bayesian optimization
author: CislunarSpace
date: 2026-04-23
lastUpdated: 2026-04-23
wechatShare:
  title: Orbit Identification
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Orbit Identification | Cislunar Space Situational Awareness
  description: Detailed explanation of orbit identification in cislunar space — identifying reference orbits from observed spacecraft state sequences using characteristic parameters
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Orbit Identification | Cislunar Space Situational Awareness
  description: Detailed explanation of orbit identification in cislunar space — identifying reference orbits from observed spacecraft state sequences
  image: /logo.png
permalink: /en/glossary/orbit-identification/
---

# Orbit Identification

> Source: Qiao et al. (2025) "Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points"
>
>Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

**Orbit Identification** is a core problem in cislunar space situational awareness: given a sequence of observed spacecraft states over a period of time, identifying the **reference orbit** — the periodic or quasi-periodic orbit in the CR3BP model — that the spacecraft is executing.

The essence of this problem is: in the standard orbit catalog established by CR3BP, finding the reference orbit that best matches the observed actual motion, thereby obtaining the physical characteristics (period, amplitude, etc.) of the spacecraft for space object cataloging, collision warning, and space traffic management.

## Inverse Relationship with Orbit Design

Orbit identification and orbit design are **inverse** processes:

| Process | Input | Output |
|:---|:---|:---|
| **Orbit Design** | Physical parameters of reference orbit (period, amplitude, etc.) | Actual orbit under ephemeris model (numerical integration) |
| **Orbit Identification** | Observed actual orbital state sequence | Corresponding CR3BP reference orbit and its physical parameters |

In orbit design, the reference orbit is first obtained in CR3BP, then refined in the ephemeris model using multiple shooting and differential correction methods to obtain the true orbit satisfying the actual gravitational environment.

In orbit identification, the direction is reversed: starting from the actual orbital state sequence, extract physically interpretable parameters (period, amplitude, etc.) to find the corresponding reference orbit.

## Limitations of Traditional Methods

The most direct orbit identification method is **numerical integration and comparison**: select specific state vectors, integrate to obtain a complete orbit, and compare with observations. However, in cislunar space, this method faces fundamental difficulties:

### 1. Observation Errors

For non-cooperative targets, orbital states come from radar/optical tracking and contain noise errors.

### 2. Dynamical Model Uncertainty

Unmodeled factors during integration: perturbations (solar radiation pressure, lunar non-spherical gravity, other celestial bodies) and unknown orbital maneuvers of non-cooperative spacecraft.

### 3. Chaos Sensitivity

CR3BP itself is a non-integrable chaotic system; initial errors cause numerical integration to diverge rapidly. Qiao et al. (2025)'s numerical experiments show: when position error exceeds **10 km** and velocity error exceeds **0.1 m/s**, integrated trajectories diverge rapidly, making initial Halo orbit identification impossible.

## Characteristic Parameter-Based Identification Method

Qiao et al. (2025) propose a six-dimensional characteristic parameter-based orbit identification method that effectively avoids numerical integration divergence:

### Core Idea

1. Convert 6D state $(X, Y, Z, \dot{X}, \dot{Y}, \dot{Z})$ to 6D characteristic parameters $[q_1, p_1, I_2, \theta_2, I_3, \theta_3]$
2. Characteristic parameters have clear physical meaning, directly related to orbit period and amplitude
3. On the Poincaré section diagram, reference orbits have a one-to-one correspondence with section coordinates $[I_2^{(0)}, I_3^{(0)}]$
4. Use optimization to search on the section diagram to find the reference orbit minimizing the mean square error (MSE) between actual and reference orbits

### Optimization Model

Given observation sequence $[t_1, t_2, ..., t_n]$ with states $[X_1, X_2, ..., X_n]$, define MSE:

$$\text{MSE} = \frac{1}{n}\sum_{i=1}^{n}\left[(I_2^{(i)} - \varphi_{I_2}(\sigma_0; t_0, t_i))^2 + (I_3^{(i)} - \varphi_{I_3}(\sigma_0; t_0, t_i))^2\right]$$

where $\varphi$ is the integral flow function of the central manifold canonical equations.

Optimization problem:

$$\min_{\text{MSE}} \quad x = [I_2^{(0)}, I_3^{(0)}, t_0]$$
$$\text{s.t.} \quad |I_j^{(0)} - I_j^*| \leq I_{\max}, \quad j=2,3$$
$$\quad t_0 \in [0, T_{\max}]$$

### Bayesian Optimization

Since the MSE function is a black-box optimization problem (high computational cost, no explicit derivatives), Qiao et al. (2025) use **Bayesian optimization**, finding the global optimum within **30 function evaluations**, highly efficient.

## Sensitivity Analysis

Qiao et al. (2025) systematically analyze two factors affecting orbit identification:

### 1. Observation Arc Length

| Arc Length | Identification Result Characteristics |
|:---|:---|
| Short arc (1 hour) | Results dispersed, mainly along equal-energy contours; represents "osculating orbit" |
| Long arc (1 month) | Results converge to reference orbit; represents "mean orbit" |

This parallels the concepts of **osculating elements** and **mean elements** in the two-body problem.

### 2. Observation Errors (State Deviations)

Robustness to state errors:

- Position error < **100 km** and velocity error < **1 m/s**: identification result fluctuations are small
- 100 km position error and 1 m/s velocity error have equivalent impact on robustness
- This points to a direction for future cislunar orbit determination technology: **greater emphasis should be placed on improving velocity measurement accuracy**

## Significance

This method provides a **non-iteration-through-long-numerical-integration** approach to orbit identification in cislunar space, effective even for non-cooperative targets under low-precision observation conditions. Combined with the Poincaré section distribution map, it can quickly determine which orbit family (Northern Halo, Southern Halo, Lissajous, etc.) a target belongs to and its physical parameters.

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
