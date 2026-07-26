---
title: Continuation
description: Detailed explanation of continuation methods in orbital mechanics — mathematical principles, arc-length continuation algorithms, and applications in cislunar orbit family exploration
keywords: continuation, arc-length continuation, orbit family, parameter continuation, numerical continuation, cislunar space, DRO
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Continuation
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Continuation Method Explained | Orbit Family Parameter Exploration and Numerical Continuation
  description: Detailed explanation of continuation methods in orbital mechanics — mathematical principles, arc-length continuation algorithms, and applications in cislunar orbit family exploration
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Continuation Method Explained | Orbit Family Parameter Exploration and Numerical Continuation
  description: Detailed explanation of continuation methods in orbital mechanics — mathematical principles, arc-length continuation algorithms, and applications in cislunar orbit family exploration
  image: /logo.png
permalink: /en/glossary/dynamics/continuation/
---

# Continuation

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

**Continuation** is a fundamental numerical method in orbital mechanics and nonlinear dynamics. Its basic idea is to start from a known orbital solution and gradually vary a system parameter (such as orbital period, perilune altitude, energy integral value, amplitude, etc.), using the solution from the previous step as the initial guess for solving the adjacent solution at the next parameter value. Through this approach, one can systematically explore how an orbit family evolves with parameter changes, producing a complete map of the orbit family.

Continuation methods hold a central role in cislunar space orbit design, particularly in the systematic exploration of periodic orbit families near libration points, such as Halo orbit families, Lyapunov orbit families, and DRO orbit families.

## Core Elements

### Basic Principles

Consider a dynamical system $\dot{\mathbf{x}} = \mathbf{f}(\mathbf{x}, \lambda)$, where $\mathbf{x}$ is the state vector and $\lambda$ is a variable parameter. Given that a periodic solution $\mathbf{x}_0(t)$ exists at parameter value $\lambda_0$ (with period $T_0$), continuation aims to solve for the adjacent periodic solution at $\lambda_0 + \Delta\lambda$.

The basic steps are:

1. Use the solution $\mathbf{x}_0$ at $\lambda_0$ as the initial guess
2. Adjust the parameter to $\lambda_1 = \lambda_0 + \Delta\lambda$
3. Use differential correction to solve for the periodic orbit at $\lambda_1$
4. Use the solution at $\lambda_1$ as the starting point and continue to $\lambda_2$
5. Repeat until the target parameter range is covered

### Arc-Length Continuation

When parameter variation causes the solution curve to exhibit **turning points**, simple parameter continuation fails (because the parameter is no longer monotonically varying). Arc-length continuation resolves this by parameterizing the solution curve with arc length $s$:

$$\mathbf{F}(\mathbf{x}(s), \lambda(s)) = \mathbf{0}$$

$$\left\|\frac{d\mathbf{x}}{ds}\right\|^2 + \left(\frac{d\lambda}{ds}\right)^2 = 1$$

At each step, the next point is predicted along the tangent direction of the solution curve, then corrected via Newton iteration. This "Predictor-Corrector" strategy allows continuation to smoothly navigate around turning points along the solution curve.

### Key Parameter Choices for Continuation

In orbit family continuation, commonly used continuation parameters include:

| Continuation Parameter | Applicable Scenario | Typical Application |
| :--- | :--- | :--- |
| Amplitude $A_z$ | Periodic orbit family exploration | Halo orbit families, Lyapunov orbit families |
| Orbital period $T$ | DRO orbit family | Period range of distant retrograde orbit families |
| Perilune altitude $h_p$ | Lunar orbit families | Low to high lunar orbit families |
| Jacobi constant $C$ | Libration point orbit energy levels | Orbital morphology changes at different energies |
| Perilune velocity increment $\Delta v$ | Lunar flyby transfers | DRO injection scheme families |

### Application to DRO Orbit Family Research

Wei et al. (2026) employed continuation methods in their study of cislunar DRO orbit families for:

1. **Generating the DRO orbit family**: Starting from a known DRO solution, continuation by varying the orbital period parameter yields a DRO orbit family covering different period ranges
2. **Exploring perilune distributions**: Computing the perilune state for each DRO member in the family and plotting Poincaré maps to analyze the distribution characteristics of perilunes in phase space
3. **Screening transfer windows**: Using continuation to identify DRO members whose perilune velocity direction and magnitude are suitable for powered lunar flyby injection

### Relationship Between Continuation and Differential Correction

Continuation and differential correction are closely related but serve different functions:

- **Differential Correction** solves the problem of "given constraint conditions, find the single orbit that satisfies them"
- **Continuation** solves the problem of "starting from a known solution, systematically explore an entire orbit family"

In practice, each step of continuation calls differential correction to ensure the solution at the new parameter satisfies the orbit constraints. Therefore, continuation is often regarded as the "outer loop" of differential correction.

### Numerical Stability and Step Size Control

The numerical stability of continuation depends on the choice of step size $\Delta\lambda$ (or arc-length step $\Delta s$):

- Step too large: The initial guess deviates too far from the true solution, and differential correction may fail to converge
- Step too small: Low computational efficiency requiring many iteration steps

Common adaptive step size strategies include:

- Adjusting step size based on the iteration count of the previous differential correction step (fewer iterations → increase step size, vice versa)
- Adjusting step size based on the curvature of the solution curve (decrease step size where curvature is large)
- Constraint step size control in pseudo-arc-length continuation

## Application Value

The core value of continuation methods in cislunar space orbit design lies in:

- **Orbit Family Global Exploration**: Systematically revealing the complete map of an orbit family as parameters vary, avoiding omission of important branches
- **Bifurcation Detection**: During continuation, when an orbit family bifurcates (e.g., Halo orbits bifurcating from Lyapunov orbits), continuation naturally captures these critical points
- **Mission Design Efficiency**: Compared to independent solutions at each parameter, continuation leverages information from the previous step to significantly reduce computation per step, making large-scale orbit family exploration feasible
- **DRO Injection Scheme Search**: Through continuation, systematically scanning the perilune states of DRO family members to identify target orbits satisfying powered lunar flyby injection conditions

## Related Concepts

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)
- [Patched Method](/en/glossary/dynamics/patched-method/)
- [Differential Correction](/en/glossary/dynamics/differential-correction/)
- [Poincaré Map](/en/glossary/dynamics/poincare-map/)
- [Continuation Background](/background/math/continuation/)

## References

- Wei Z, et al. Research on powered lunar flyby transfer injection to cislunar distant retrograde orbit families[J]. Journal of Beijing University of Aeronautics and Astronautics, 2026.
- Doedel E J, et al. AUTO-07P: Continuation and bifurcation software for ordinary differential equations[M]. Concordia University, 2007.
- Parker T S, Chua L O. Practical Numerical Algorithms for Chaotic Systems[M]. Springer, 1989.
- Lara M, et al. Continuation techniques for the computation of periodic orbits in the restricted three-body problem[C]. AAS/AIAA Astrodynamics Specialist Conference, 2012.
