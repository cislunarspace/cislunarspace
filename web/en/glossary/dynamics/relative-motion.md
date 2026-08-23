---
title: Relative Motion
description: The position and velocity of one spacecraft (deputy/interceptor) relative to another (chief/target) as functions of time. The dynamical foundation of formation flying, rendezvous, and proximity operations in two-body and three-body regimes.
keywords: relative motion, Hill's equations, Clohessy-Wiltshire equations, HCW, Hill frame, CR3BP relative dynamics, CLERM, ELERM, CNERM, relative orbit determination
sharingurl: 
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Relative Motion
  desc: Position and velocity of one spacecraft relative to another — HCW, CR3BP, and cislunar dynamics.
  image: /logo.png
og:
  title: "Relative Motion Explained | Term Definition"
  description: The position and velocity of one spacecraft relative to another — Hill-Clohessy-Wiltshire equations, CR3BP relative dynamics (CLERM/ELERM/CNERM), and analytical solutions at the triangular libration points.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Relative Motion Explained | Term Definition"
  description: The position and velocity of one spacecraft relative to another — Hill-Clohessy-Wiltshire equations, CR3BP relative dynamics, and analytical solutions at the triangular libration points.
  image: /logo.png
permalink: /en/glossary/dynamics/relative-motion/
---
# Relative Motion

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

**Relative motion** is the position and velocity of one spacecraft (the deputy or interceptor) expressed relative to another (the chief or target), as functions of time. It is the fundamental dynamical description underlying all formation flying, rendezvous, docking, and proximity operations, whether in the two-body Keplerian regime or in the multi-body cislunar environment.

A relative motion model expresses the state vector $\delta\mathbf{r} = \mathbf{r}_{\text{deputy}} - \mathbf{r}_{\text{chief}}$ in a reference frame attached to the chief. The choice of the dynamical model (two-body vs. CR3BP) and the linearization strategy (linear vs. nonlinear, circular vs. elliptic) determines the equation structure and the domain of validity.

## Hill–Clohessy–Wiltshire (HCW) Equations: Two-Body Near-Circular

For a chief in a **circular** Keplerian orbit (two-body), with the deputy sufficiently close that $\rho = |\delta\mathbf{r}| \ll r_{\text{chief}}$, linearizing the two-body equations in the chief's RSW (radial–along-track–cross-track) frame yields the **Hill–Clohessy–Wiltshire (HCW) equations** (Clohessy & Wiltshire 1960; Vallado 2022, §6.8):

$$
\ddot{x} - 2n\dot{y} - 3n^2 x = f_x, \quad
\ddot{y} + 2n\dot{x} = f_y, \quad
\ddot{z} + n^2 z = f_z
$$

where $n = \sqrt{\mu/r_{\text{chief}}^3}$ is the chief's mean motion, and $(x, y, z) = (\text{radial}, \text{along-track}, \text{cross-track})$ components of $\delta\mathbf{r}$.

The terms have specific meanings: $-3n^2 x$ is the **tidal** (differential gravity) stretching along the radial direction; $\pm 2n\dot{y}, \pm 2n\dot{x}$ are **Coriolis** accelerations from the rotating RSW frame; the $z$ equation is an uncoupled harmonic oscillator at frequency $n$.

**Solution** (free motion, $f_i = 0$):

$$
\begin{aligned}
x(t) &= \frac{\dot{x}_0}{n}\sin(nt) - \left(3x_0 + \frac{2\dot{y}_0}{n}\right)\cos(nt) + \left(4x_0 + \frac{2\dot{y}_0}{n}\right) \\
y(t) &= \left(6x_0 + \frac{4\dot{y}_0}{n}\right)\sin(nt) + \frac{2\dot{x}_0}{n}\cos(nt) - (6n x_0 + 3\dot{y}_0)t + \left(y_0 - \frac{2\dot{x}_0}{n}\right) \\
z(t) &= z_0\cos(nt) + \frac{\dot{z}_0}{n}\sin(nt)
\end{aligned}
$$

The **drift term** in $y(t)$ ($- (6n x_0 + 3\dot{y}_0)t$) is the central experimental fact of HCW dynamics: unless the initial conditions satisfy $6n x_0 + 3\dot{y}_0 = 0$, the deputy drifts secularly along-track. When this condition holds, the deputy traces a closed elliptical path around the chief with a semi-minor (radial) to semi-major (along-track) axis ratio of 1:2, the classic 2:1 relative ellipse geometry used worldwide in Earth-orbiting formation design.

**Limitations**: The HCW model assumes circular chief motion. For eccentric orbits, error grows significantly (Vallado 2022, Fig. 6-37: ~9 km/day drift error for a LEO $e=0.152$ orbit). The **Tschauner–Hempel equations** extend to elliptic chief orbits. All two-body relative models neglect the third-body gravity of the Moon or Sun; they fail in cislunar space where these effects are of the same order as the primary central-body gravity.

## CR3BP Relative Motion Equations

When the chief and deputy orbit near a libration point, both are subject to the gravity of **two** primaries. The two-body HCW model is inapplicable. The standard approach is to take the chief's trajectory as a reference orbit $\mathbf{x}_{\text{ref}}(t)$ in the CR3BP synodic frame, then linearize the CR3BP equations of motion around it:

$$
\delta\dot{\mathbf{x}}(t) = A(t)\,\delta\mathbf{x}(t)
$$

where $A(t) = \partial\mathbf{f}/\partial\mathbf{x}|_{\mathbf{x}_{\text{ref}}(t)}$ is a $6\times6$ time-varying Jacobian matrix, containing the Coriolis terms and the second-order spatial derivatives of the pseudo-potential evaluated at the reference trajectory. The resulting system is a linear time-periodic (LTP) system. Its Floquet multipliers and eigenvectors govern the stability, natural drift, and control requirements of the formation.

Three models at increasing fidelity are commonly referenced:

- **Circular Linearized Equations of Relative Motion (CLERM)**: The linear variational equations $\delta\dot{\mathbf{x}} = A(t)\delta\mathbf{x}$ in the CR3BP. This is the standard model for formation dynamics analysis and controller design near libration points (Marchand & Howell 2005). The matrix $A(t)$ includes the Coriolis coupling and the time-varying gravity gradient.

- **Circular Non-linear Equations of Relative Motion (CNERM)**: The full nonlinear CR3BP equations numerically differenced between the deputy and chief positions. Retains all nonlinear gravitational terms; suitable for terminal-phase rendezvous guidance. Innocenti et al. (2022) reported centimeter-level accuracy near the apolune region, adequate for short-range rendezvous guidance.

- **Elliptic Linearized Equations of Relative Motion (ELERM)**: Linearization about a reference solution in the Elliptic Restricted Three-Body Problem (ER3BP). The $A(t)$ matrix depends on time through the chief's true anomaly as well. Necessary when the lunar eccentricity ($e_M \approx 0.055$) cannot be neglected.

## Relative Motion at the Triangular Libration Points

Catlin & McLaughlin (2007) derived the analytical solution of relative motion at the Earth–Moon $L_4$ point. The linearized CR3BP equations in the principal-axis-coordinate frame produce two eigenfrequencies: a long-period mode ($s_1$) and a short-period mode ($s_2$), plus an uncoupled out-of-plane oscillation at frequency $s_z = 1$ (in nondimensional time).

The general solution is a linear superposition of both modes:

$$
\begin{aligned}
\bar{\xi}_r(t) &= A_1\cos(s_1 t) + B_1\sin(s_1 t) + A_2\cos(s_2 t) + B_2\sin(s_2 t) \\
\bar{\eta}_r(t) &= \bar{A}_1\cos(s_1 t) + \bar{B}_1\sin(s_1 t) + \bar{A}_2\cos(s_2 t) + \bar{B}_2\sin(s_2 t) \\
\bar{\zeta}_r(t) &= \bar{\zeta}_{r_0}\cos(t) + \dot{\bar{\zeta}}_{r_0}\sin(t)
\end{aligned}
$$

where $\xi_r$, $\eta_r$, $\zeta_r$ are the relative coordinates in the principal frame centered at the leader spacecraft. By selecting initial conditions that excite only $s_1$ or only $s_2$, one can isolate a pure long-period or pure short-period relative ellipse, useful for designing natural parallel or leader–follower formations. The analytical model's total range error is under 3% of the maximum motion amplitude when compared to numerically integrated CR3BP trajectories.

## Related Concepts

- [Spacecraft Formation Flying](/en/glossary/dynamics/spacecraft-formation-flying/)

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

- [Elliptic Restricted Three-Body Problem (ER3BP)](/en/glossary/dynamics/er3bp/)

- [Synodic Frame](/en/glossary/fundamentals/synodic-frame/)

- [Hill Model](/en/glossary/dynamics/hill-region-and-hill-problem/)

- [Linearization](/en/glossary/fundamentals/linearization/)

- [Monodromy Matrix](/en/glossary/dynamics/monodromy-matrix/)

## References

- Clohessy, W. H., Wiltshire, R. S., 1960, Terminal Guidance System for Satellite Rendezvous, *Journal of the Aerospace Sciences*, 27(9): 653–674.

- Vallado, D.A., 2022, *Fundamentals of Astrodynamics and Applications*, 5th ed., Microcosm Press, §6.8.

- Catlin, K. A., McLaughlin, C. A., 2007, Earth–Moon triangular libration point spacecraft formations, *J. Guidance, Control, Dyn.*, 30(2): 563–574.

- Marchand, B. G., Howell, K. C., 2005, Control strategies for formation flight in the vicinity of the libration points, AAS 03-113, *J. Guidance, Control, Dyn.*, 28(6): 1210–1219.

- Héritier, A., Howell, K. C., 2014, Dynamical evolution of natural formations in libration point orbits in a multi-body regime, *Acta Astronautica*, 102: 81–94.

- Innocenti, M. et al., 2022, Dynamics and control analysis during rendezvous in non-Keplerian Earth–Moon orbits, *Frontiers in Space Technologies*.

- Scheeres, D.J., Vinh, N.X., 2003, Stabilizing motion relative to an unstable orbit: applications to spacecraft formation flight, *J. Guidance, Control, Dyn.*, 26(1): 62–73.
