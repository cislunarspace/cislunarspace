---
title: Control Parametrization, B-Spline, Spherical Variables and Throttle
description: Control parametrization expresses the infinite-dimensional continuous-thrust control signal as a finite set of parameters (polynomial or Fourier coefficients, B-spline control points, spherical (T,α,β), etc.), turning an optimal control problem into a nonlinear program. This entry covers the basic idea, the continuity order and knot-multiplicity rules of B-spline basis functions, the use of spherical control variables in CR3BP low-thrust optimization (HDDP) with the Cartesian switch on frame degeneracy, and the throttle factor as a nondimensional thrust-magnitude variable whose value depends on the optimality criterion (constant 1 for time-optimal, switching-function-driven for fuel-optimal, bang-bang), and multi-mode throttle functions.
keywords: control parametrization, B-spline, spherical control variables, throttle factor, throttle function, polynomial basis, Fourier basis, thrust magnitude, low-thrust control
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Control Parametrization, B-Spline, Spherical Variables and Throttle
  desc: Polynomial, B-spline, spherical (T,α,β), and throttle parametrizations reduce continuous-thrust control to a finite-dimensional NLP.
  image: /logo.png
og:
  title: Control Parametrization and Throttle Explained | Term Definition
  description: Control parametrization expresses continuous-thrust control as finite parameters (polynomial, B-spline, spherical variables, throttle factor), turning optimal control into a nonlinear program. This entry covers B-spline basis, spherical control variables in the CR3BP, throttle factor under different optimality criteria, and multi-mode throttle functions.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Control Parametrization and Throttle Explained | Term Definition
  description: Control parametrization expresses continuous-thrust control as finite parameters (polynomial, B-spline, spherical variables, throttle factor), turning optimal control into a nonlinear program. This entry covers B-spline basis, spherical control variables in the CR3BP, throttle factor under different optimality criteria, and multi-mode throttle functions.
  image: /logo.png
permalink: /en/glossary/dynamics/control-parametrization/
---

# Control Parametrization, B-Spline, Spherical Variables and Throttle

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Control parametrization expresses the infinite-dimensional continuous-thrust control $\boldsymbol{u}(t)$ as a finite set of parameters. Writing $\boldsymbol{u}(t) = \sum_{i} c_i\,\phi_i(t)$ where $\{\phi_i\}$ is a chosen basis family and $\{c_i\}$ are coefficients to be optimized, the optimal control problem becomes a nonlinear program (NLP) in $\{c_i\}$. Common basis families are polynomials, Fourier series, and B-splines. The **throttle factor / throttle function** is a scalar/functional parametrization specific to low-thrust engines, describing how thrust magnitude varies with time.

## Polynomial and Fourier Bases

The simplest parametrizations. The polynomial basis $\phi_i(t) = t^i$ is suitable for smooth control but becomes ill-conditioned at high order; Chebyshev or Legendre polynomials improve conditioning. The Fourier basis $\phi_i(t)=\cos(i\omega t), \sin(i\omega t)$ is well suited to periodic control such as libration-point orbit keeping. Both are globally supported: changing one coefficient affects the entire control profile, making local features such as thrust switches hard to express.

## B-Spline Parametrization

B-splines use piecewise polynomials with compactly supported basis functions and are the most common parametrization in trajectory optimization. Write

$$
\boldsymbol{u}(t) = \sum_{i} \boldsymbol{P}_i\,B_{i,q}(t),
$$

where $\boldsymbol{P}_i$ are control points (optimization variables) and $B_{i,q}(t)$ are $q$-th order ($q-1$ degree) B-spline basis functions. **Key properties**:

- **Compact support.** Each $B_{i,q}$ is nonzero only on $q$ knot intervals; adjusting one control point affects the profile only locally, an advantage over global bases when the control contains switches.
- **Continuity order.** With non-repeated interior knots, a $q$-th order B-spline is $C^{q-1}$; repeating a knot lowers continuity at that point, useful for representing discontinuities such as mode switches in multi-mode propulsion.
- **Convex hull.** The curve lies within the convex hull of its control points, which makes thrust-magnitude constraints easy to impose.

Sanchez et al. (2020) apply B-splines to trajectory optimization and attitude control, often combined with [direct collocation](/en/glossary/dynamics/differential-correction/) or [HDDP](/en/glossary/dynamics/hddp/).

## Spherical Control Variables

For CR3BP low-thrust optimization, HDDP (Aziz et al. 2019) uses a spherical parametrization, decomposing thrust into magnitude $T$ and two steering angles $\alpha,\beta$

$$
\boldsymbol{u} = [T,\alpha,\beta]^T,
$$

with angles defined in a radial–transverse–normal (RSW) frame and mapped to the synodic frame by

$$
\begin{bmatrix}T_r\\T_s\\T_w\end{bmatrix} = \begin{bmatrix} T\sin\alpha\cos\beta\\T\cos\alpha\cos\beta\\T\sin\beta\end{bmatrix},\qquad \boldsymbol{T}_{syn} = [\hat{\boldsymbol{r}}_2\ \hat{\boldsymbol{s}}\ \hat{\boldsymbol{w}}]\boldsymbol{T}_{RSW}.
$$

**Advantages**: decoupling magnitude from direction, simple magnitude constraint $0\le T\le T_{\max}$, independent trust-region scaling for magnitude (normalized by $T_{\max}$) and angles (larger bounds).

**Frame degeneracy**: when the position vector $\boldsymbol{r}_2$ is collinear with velocity, the RSW basis is undefined; switch to Cartesian control $\boldsymbol{u}=[T_x,T_y,T_z]^T$ in those cases.

## Throttle Factor and Throttle Function

The throttle factor is the **nondimensional thrust-magnitude variable** $u\in[0,1]$ of a low-thrust engine, with $u=0$ for coast and $u=1$ for full thrust, decoupled from the steering angles. Its optimal value is determined by the [switching function](/en/glossary/dynamics/bang-bang-control/) given by the [Pontryagin Minimum Principle](/en/glossary/dynamics/pontryagins-maximum-principle/):

- **Time-optimal control**: throttle is constantly 1 (always full thrust).
- **Fuel-optimal control**: throttle is bang-bang, set to 0 or 1 by the sign of the switching function; equivalent to the limit of the energy-optimal homotopy.
- **Energy-optimal control**: throttle takes continuous values, determined jointly by the costate and the homotopy parameter.

Du et al. (2024), Tu et al. (2025), and others give throttle profiles for CR3BP low-thrust collision avoidance and Halo orbit transfers.

The **throttle function** generalizes the throttle factor to multi-mode propulsion. Zhang Z et al. (2026) use two throttle functions $\delta_{P1}(t),\delta_{P2}(t)\in\{0,1\}$ for a dual-mode electric propulsion system, with bang-bang solutions derived from the [Pontryagin Minimum Principle](/en/glossary/dynamics/pontryagins-maximum-principle/). In the [indirect method](/en/glossary/dynamics/indirect-methods/), the throttle function is an explicit output of the optimal control, not an externally imposed parametrization.

## Practical Notes

- **Match basis to physics.** Transfers with thrust switches favour B-splines (local support) or discretized switching functions; smooth continuous low thrust favours Fourier/Chebyshev.
- **Spherical vs Cartesian.** Spherical variables are friendly to directional trust regions and natural for magnitude constraints but require handling RSW degeneracy; Cartesian variables avoid degeneracy but have a non-convex magnitude constraint $\|\boldsymbol{T}\|\le T_{\max}$.
- **Throttle as an optimization variable.** In indirect methods the throttle is determined analytically by the switching function and is **not** an optimization variable; in direct methods it is an independent optimization variable at each collocation point, subject to the path constraint $0\le u_k\le 1$.
- **B-spline order.** Low thrust typically uses order 3–5 ($C^2$–$C^4$); too high invites numerical ill-conditioning, too low cannot represent the required thrust rate.
- **Knot multiplicity for discontinuity.** Repeated knots at mode switches lower continuity and allow discontinuities.

## Related Concepts

- [Differential Dynamic Programming (DDP/iLQR/HDDP)](/en/glossary/dynamics/hddp/)
- [Pontryagin Minimum Principle](/en/glossary/dynamics/pontryagins-maximum-principle/)
- [Indirect Method](/en/glossary/dynamics/indirect-methods/)
- [Direct Collocation](/en/glossary/dynamics/differential-correction/)
- [Switching Function](/en/glossary/dynamics/bang-bang-control/)
- [Bang-bang Control](/en/glossary/dynamics/bang-bang-control/)
- [Fuel-Optimal Control](/en/glossary/dynamics/fuel-optimal/)

## References

- de Boor, C., 1978, *A Practical Guide to Splines* (the mathematical foundation of B-splines).
- Sanchez, P., et al., 2020 (B-spline control parametrization for trajectory optimization and attitude control).
- Aziz, J. D., Scheeres, D. J., Lantoine, G., 2019, "Hybrid Differential Dynamic Programming in the CR3BP," *JGCD* (spherical control variables, RSW degeneracy switching, trust-region scaling).
- Colagrossi, A., et al., 2021, "Guidance, navigation and control for 6DOF rendezvous in cislunar multi-body environment" (control parametrization for 6DOF rendezvous).
- Du, L., et al., 2023, "Two trajectory configurations for the low-thrust transfer between northern and southern halo orbits" (throttle factor applied to Halo transfers).
- Du, L., et al., 2024, "A novel calculation method for low-thrust transfer trajectories in the Earth-Moon restricted three-body problem" (throttle parameter and switching function).
- Tu, X., et al., 2025, "Optimal control for low-thrust collision avoidance in CRTBP" (throttle factor for collision avoidance).
- Zhang, Z., et al., 2026, *Space Sci. Technol.* 6:0441 (throttle functions for dual-mode electric propulsion and their bang-bang solutions).
