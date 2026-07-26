---
title: Multi-Revolution NRHO Ephemeris Computation
description: "Methods for computing multi-revolution NRHOs under the real ephemeris model: multiple shooting, patch point selection strategies, and key numerical results."
wechatShare:
  title: Multi-Revolution NRHO Ephemeris Computation
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
keywords: NRHO, multiple shooting, ephemeris model, patch point selection, state transition matrix, DE430
author: Tianjiang Shuo
date: 2026-05-10
lastUpdated: 2026-05-10
permalink: /en/cislunar-orbits/nrho/ephemeris-computation/
---

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Editor: [CislunarSpace](https://cislunarspace.cn)
>
> Source: <https://cislunarspace.cn>

# Multi-Revolution NRHO Ephemeris Computation

## Background

In the CR3BP model, a single-revolution NRHO can be computed directly using continuation or differential correction (see [Design Parameters](./design-parameters/)). However, when computing multi-revolution NRHOs under a real ephemeris model (such as JPL DE430), direct differential correction of the entire arc often fails — linearization errors accumulate over the flight time, and NRHOs with low perilune altitudes exhibit rapid state changes near perilune, causing the correction process to diverge.

Existing methods (such as forward/backward shooting by Williams et al. and two-level correction by Davis et al.) can generate high-fidelity multi-revolution NRHOs, but they rely on specialized optimization software such as SNOPT or NASA Copernicus, limiting reproducibility.

## Multiple Shooting Method

The multiple shooting method is the standard approach for resolving convergence difficulties in long-arc orbit computation. The key steps are:

1. Divide the initial CR3BP orbit into $n-1$ segments by time
2. Forward-propagate each segment independently under the ephemeris model
3. Impose state continuity constraints at the junction (patch) points between adjacent segments
4. Correct the state at each patch point via Newton-Raphson least-squares iteration

The constraint equation is:

$$F(\mathbf{X}) = \begin{bmatrix} X_1(t_2) \\ X_2(t_3) \\ \vdots \\ X_{n-1}(t_n) \end{bmatrix} - \begin{bmatrix} X_2 \\ X_3 \\ \vdots \\ X_n \end{bmatrix} = 0$$

where $X_i(t_{i+1})$ is the state propagated from patch point $i$ to $t_{i+1}$, and $X_{i+1}$ is the initial state at patch point $i+1$. The iterative correction formula involves a Jacobian matrix composed of state transition matrices $\Phi(t_i, t_{i-1})$.

## Patch Point Selection Strategy

The core contribution of Liu & Liu (2025) is revealing the **critical influence of patch point placement on computational success** and proposing a systematic selection strategy.

### Condition Number Analysis

The condition number $C$ of the state transition matrix $\Phi(t_i, t_{i-1})$ depends on the arc length and starting point location. When the starting point is near perilune, $C$ increases sharply (by several orders of magnitude), rendering the constraint equations ill-conditioned and causing the Newton-Raphson correction to overshoot and diverge. Therefore, **arc endpoints must be placed far from perilune**.

### Relative Distance Parameter $s$

The relative x-direction distance $s$ quantifies how far the first and last patch points are from the Moon:

$$s = \begin{cases} \dfrac{x_R - x_1}{x_R - x_L}, & \text{L1 case} \\[6pt] \dfrac{x_1 - x_L}{x_R - x_L}, & \text{L2 case} \end{cases}$$

where $x_L$ and $x_R$ are the x-coordinates of the left and right intersections of the NRHO with the xz-plane, and $x_1$ is the x-coordinate of the first/last patch point. $s = 0$ corresponds to perilune, and $s = 1$ corresponds to apolune.

Each revolution is divided into $N$ segments: the first and last patch points are placed symmetrically about the xz-plane (so that perilune falls at the midpoint of the first and last segments), and the remaining patch points are distributed at equal time intervals. Key findings:

- When $N = 2$, $s$ should be greater than 0.4
- When $N \geq 4$, $s$ can be reduced to below 0.2
- More segments allow patch points to be placed closer to the Moon; NRHOs with larger perilune radii require larger $s$ values

## Computational Results

Using JPL DE430 ephemeris with an initial epoch of January 1, 2025, the main results are:

| Orbit Family | Valid Range | Min Segments $N$ | Achievable Revolutions |
| --- | --- | --- | --- |
| L1 NRHO | Perilune radius < 12,000 km | 2 (recommend 4) | 30+ |
| L2 NRHO | Period < 8.8 days | 2 (recommend 4) | 30+ |

The valid period range for L1 NRHOs is approximately 7.88–10 days, and the corresponding perilune radius for L2 NRHOs is 1,850–11,000 km. L1 NRHOs with larger perilune radii (> 12,000 km) or L2 NRHOs with longer periods (> 8.8 days) can only be computed for 10–20 revolutions, with the orbit exhibiting a loose drift pattern in the synodic frame. For cases where 30 revolutions are achievable, the count can be further extended to 100 or even 500 revolutions.

## Method Characteristics

- Does not depend on specialized optimization software (SNOPT, Copernicus, etc.); uses only classical multiple shooting and differential correction
- Low implementation barrier, facilitating independent reproduction
- Most effective for NRHOs with low perilune altitudes (the range of interest for missions such as Gateway)

## References

[1] Liu L, Liu Y. A note on the computation of multi-revolution NRHO under the ephemeris model[J]. Advances in Space Research, 2025.

## Simulation Experiment

NRHO initial conditions can be set in the [Satellite Orbit Simulation Laboratory](/satellite-simulation/) to observe multi-revolution orbit evolution under the real ephemeris model.
