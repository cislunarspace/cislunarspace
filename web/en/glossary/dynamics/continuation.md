---
title: Numerical Continuation
description: A class of methods for tracking the solution curve of a parameterised nonlinear system F(x,λ)=0 — starting from a known solution, the parameter is varied step by step and each new solution is warm-started from the previous one, allowing an entire branch to be swept. It is the standard tool for systematically computing families of periodic orbits (Halo, Lyapunov, DRO, NRHO) in cislunar dynamics, can negotiate turning points and capture bifurcating branches.
keywords: numerical continuation, pseudo-arclength continuation, natural parameter continuation, Newton continuation, predictor-corrector, orbit family, CR3BP, bifurcation
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Numerical Continuation
  desc: Standard method for tracking the solution curve of F(x,λ)=0; the core tool for systematic computation of periodic orbit families.
  image: /logo.png
og:
  title: Numerical Continuation Explained | Glossary
  description: A class of methods for tracking the solution curve of a parameterised nonlinear system F(x,λ)=0 — starting from a known solution, the parameter is varied step by step, allowing an entire branch to be swept. It is the standard tool for systematically computing families of periodic orbits in cislunar dynamics.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Numerical Continuation Explained | Glossary
  description: A class of methods for tracking the solution curve of a parameterised nonlinear system F(x,λ)=0 — starting from a known solution, the parameter is varied step by step, allowing an entire branch to be swept. It is the standard tool for systematically computing families of periodic orbits in cislunar dynamics.
  image: /logo.png
permalink: /en/glossary/dynamics/continuation/
---

# Numerical Continuation

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Numerical continuation is a family of methods for tracking the solution curve of a parameterised nonlinear system

$$\mathbf{F}(\mathbf{x},\lambda)=\mathbf{0},\qquad \mathbf{x}\in\mathbb{R}^n,\ \lambda\in\mathbb{R}$$

starting from a known solution $(\mathbf{x}_0,\lambda_0)$. The parameter is stepped forward incrementally, with each previous solution used as the initial guess for the next, thereby sweeping out an entire solution branch (Seydel 2010; Allgower & Georg 1990).

In the [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/), $\mathbf{F}$ is usually the periodicity condition (the shooting equation for state return) augmented by one constraint, $\mathbf{x}$ collects the free variables (initial state, period, etc.), and $\lambda$ is the family parameter (Jacobi constant $C$, amplitude $A_z$, perilune altitude, etc.). Continuation is the standard tool for systematically computing and analysing [periodic orbit families](/en/glossary/orbits/periodic-orbit-family/) — Halo, Lyapunov, [DRO](/en/glossary/orbits/distant-retrograde-orbit-dro/), [NRHO](/en/glossary/orbits/nrho/), butterfly, and so on. The idea was introduced by Poincaré and matured into a numerical discipline in the 1960s–70s (Gómez et al. 2001; Zhang 2019).

## General Form

When the system has $n$ equations in $n+1$ unknowns ($\mathbf{x}$ of dimension $n$ plus the parameter $\lambda$), the solution set is generically a **one-dimensional curve** (branch) in $(\mathbf{x},\lambda)$-space. Continuation amounts to parametrising this curve by an arclength $s$ and tracking it:

$$\mathbf{F}(\mathbf{x}(s),\lambda(s))=\mathbf{0}.$$

Differentiating with respect to $s$ yields the tangent $(\dot{\mathbf{x}},\dot{\lambda})$ satisfying

$$\mathbf{F}_\mathbf{x}\,\dot{\mathbf{x}}+\mathbf{F}_\lambda\,\dot{\lambda}=\mathbf{0},$$

so that at non-degenerate points (where the Jacobian $\mathbf{F}_\mathbf{x}$ has full rank) the tangent direction is determined up to normalisation. The various continuation algorithms differ mainly in *how the stepping direction is chosen, how correction is performed, and how turning points are negotiated*.

## Principal Variants

### 1. Natural Parameter Continuation

The simplest form: step the parameter $\lambda$ directly through a sequence $\lambda_0<\lambda_1<\cdots$, and for each $\lambda_k$ solve $\mathbf{F}(\mathbf{x}_k,\lambda_k)=\mathbf{0}$ by [differential correction](/en/glossary/dynamics/differential-correction/) / shooting, with $\mathbf{x}_k^{(0)}=\mathbf{x}_{k-1}$ as initial guess.

Easy to implement and effective on smooth monotone branches. **Critical limitation**: when the curve develops a turning point (fold, $d\lambda/ds=0$), $\lambda$ ceases to be monotone and the method fails. Period–energy relations in the CR3BP routinely fold, so natural parameter continuation is used only for fast preliminary sweeps.

### 2. Newton Continuation

The Newton-iteration variant of natural parameter continuation: at each step solve $\mathbf{F}(\mathbf{x}_k,\lambda_k)=\mathbf{0}$ by Newton's method, with Jacobian factorised at $\mathbf{x}_{k-1}$:

$$\mathbf{x}_k^{(j+1)}=\mathbf{x}_k^{(j)}-\mathbf{F}_\mathbf{x}^{-1}\mathbf{F}(\mathbf{x}_k^{(j)},\lambda_k).$$

"Newton" here refers to the correction step — the underlying stepping strategy remains natural-parameter. Like it, the method cannot cross turning points. The literature sometimes conflates this with Newton *homotopy* (a particular way of constructing the homotopy function, see [Homotopy Method](/en/glossary/dynamics/homotopy-method/)); the two are distinct.

### 3. Pseudo-arclength Continuation

Designed to negotiate turning points, systematised by Keller (1977), and the core of mainstream continuation software (AUTO, MATCONT, etc.). The parameter $\lambda$ is treated as an unknown and an **arclength constraint** is added to recover the missing degree of freedom:

$$\begin{cases}\mathbf{F}(\mathbf{x},\lambda)=\mathbf{0},\\[2pt] \dot{\mathbf{x}}_{k-1}^{\,T}(\mathbf{x}-\mathbf{x}_{k-1})+\dot{\lambda}_{k-1}(\lambda-\lambda_{k-1})=\Delta s,\end{cases}$$

where the second equation forces the displacement along the previous tangent $(\dot{\mathbf{x}}_{k-1},\dot{\lambda}_{k-1})$ to equal the chosen arclength step $\Delta s$. The augmented Jacobian

$$\begin{bmatrix}\mathbf{F}_\mathbf{x} & \mathbf{F}_\lambda \\ \dot{\mathbf{x}}_{k-1}^{\,T} & \dot{\lambda}_{k-1}\end{bmatrix}$$

remains non-singular at the turning point where the standard Jacobian $\mathbf{F}_\mathbf{x}$ becomes singular, allowing the method to fold smoothly around the branch (Allgower & Georg 1990; Seydel 2010).

**Predictor-corrector implementation**: each step first predicts along the tangent, $\tilde{\mathbf{x}}=\mathbf{x}_{k-1}+\Delta s\,\dot{\mathbf{x}}_{k-1}$, $\tilde{\lambda}=\lambda_{k-1}+\Delta s\,\dot{\lambda}_{k-1}$, then corrects back to the curve by Newton iteration on the coupled system. This is the standard recipe for full-branch sweeps and bifurcation tracking of Halo, Lyapunov, DRO and related families in the CR3BP (Doedel et al. 2007; Galan-Vioque et al. 2014; Zhang 2019).

### 4. Piecewise-Linear (Simplicial) Continuation

A derivative-free "robust" variant that requires only continuity of $\mathbf{F}$: the $(\mathbf{x},\lambda)$ space is triangulated and completely labelled simplices are tracked to approximate the curve. No Jacobian is needed and the method works on non-smooth problems, but accuracy is low and computational cost high — much slower than predictor-corrector (Allgower & Georg 1990; Haberkorn et al. 2004). Rarely used in orbital mechanics except as a fallback when Jacobians are unavailable or the homotopy curve is highly irregular.

## Turning Points and Bifurcations

The interesting discoveries during continuation usually occur at **singular points** of the curve:

- **Turning (fold / saddle-node) points**: $\lambda$ attains a local extremum along the curve, so multiple solutions coexist at the same $\lambda$ or the branch terminates. Common in CR3BP period-energy diagrams; they bound the existence range of a family.

- **Bifurcation (branching) points**: two or more branches intersect. The Halo family, for example, arises from a pitchfork bifurcation off the planar Lyapunov family (symmetry breaking in $z\to -z$). Connections between the DRO, NRHO and butterfly families are detected during continuation by monitoring the null space of the Jacobian or the crossing of Floquet multipliers through $+1$ (Galan-Vioque et al. 2014; Zhang 2019).

After the bifurcation diagram has been swept out, branch switching at each bifurcation point continues the new branches, yielding the full family tree.

## Continuation Parameters in the CR3BP

Common continuation parameters for cislunar periodic orbit families:

| Parameter | Typical family | Notes |
| :--- | :--- | :--- |
| Jacobi constant $C$ | all families | conserved quantity in CR3BP; stepping in $C$ scans energy surfaces directly |
| $z$-amplitude $A_z$ | Halo | the classical Halo family parameter (also used in Richardson's third-order expansion) |
| $x$-amplitude $A_x$ | Lyapunov | planar amplitude, naturally extended to Lissajous |
| Period $T$ | DRO | DRO family exists over a wide period range |
| Perilune altitude $h_p$ | lunar orbit families | intuitive for engineering but family existence ranges are narrow |
| Initial $\dot{y}_0$ | single-value families | fixing one component reduces the degrees of freedom |

A fixed step $\Delta\lambda$ (or $\Delta s$) that is too large causes the predicted point to leave the basin of convergence of differential correction; too small inflates the cost. Common adaptive strategies adjust the step based on the number of Newton iterations in the previous step (few → enlarge, many → shrink) or the local curvature of the solution curve (shrink where curvature is high).

## Application Notes

1. **Systematic family sweep**. Given a seed periodic orbit (typically produced by [differential correction](/en/glossary/dynamics/differential-correction/)), continuation generates thousands of orbits in a single run, bypassing per-orbit initial guessing — this is the industrial-strength way to produce Halo/Lyapunov/DRO/NRHO atlases (Zhang 2019).
2. **Model continuation**. Treat model fidelity as the continuation parameter (e.g. CR3BP → bicircular four-body → ephemeris $N$-body), solving for libration points or periodic orbits at each step. Systematised by Ren et al. (2012) and Dei Tos & Topputo (2017), this is the standard pipeline for transplanting a CR3BP-designed orbit into a real ephemeris environment.
3. **Continuation of quasi-periodic invariant tori**. A state grid is built near the centre manifold of a reference periodic orbit, corrected under stroboscopic-map anchoring, no-drift-along-torus and period-matching constraints, and then continued along the family tangent — the standard way to generate quasi-periodic Lissajous / quasi-Halo families in the CR3BP (Capannolo et al. 2023; Gómez et al. 2001).
4. **Launch window and robustness analysis**. Treat engineering parameters such as departure time or surface stay duration as continuation variables and sweep the feasibility region around an optimum to assess window width and backup capability (Ding et al. 2023).

## Related Concepts

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

- [Periodic Orbit Family](/en/glossary/orbits/periodic-orbit-family/)

- [Differential Correction](/en/glossary/dynamics/differential-correction/)

- [Poincaré Section](/en/glossary/dynamics/poincare-section/)

- [Jacobi Integral](/en/glossary/dynamics/jacobi-integral/)

- [Homotopy Method](/en/glossary/dynamics/homotopy-method/)

- [Synodic Frame](/en/glossary/fundamentals/synodic-frame/)

## References

- Allgower E L, Georg K. 1990. *Numerical Continuation Methods: An Introduction*. Springer. (Standard textbook on continuation algorithms: natural-parameter, arclength, and simplicial methods.)

- Seydel R. 2010. *Practical Bifurcation and Stability Analysis*. 3rd ed. Springer. (Engineering treatment of turning and bifurcation points.)

- Keller H B. 1977. Numerical solution of bifurcation and nonlinear eigenvalue problems. In *Applications of Bifurcation Theory*, Academic Press: 359–384. (The originating reference for pseudo-arclength continuation.)

- Doedel E J, et al. 2007. AUTO-07p: Continuation and Bifurcation Software for Ordinary Differential Equations. (Implementation and documentation of mainstream continuation software.)

- Galan-Vioque J, Almendral J A, McGrath M. 2014. Continuation of periodic orbits in symmetric Hamiltonian and conservative systems. *Discrete Contin. Dyn. Syst. Ser. S*. (Theory and AUTO practice for periodic orbit continuation in conservative systems.)

- Gómez G, Mondelo J M. 2001. *Dynamics and Mission Design near Libration Points — vol. II*. World Scientific. (Standard continuation procedures for CR3BP periodic orbit families.)

- Zhang C. 2019. Numerical continuation of families of periodic orbits in the circular restricted three-body problem. (Worked examples for Earth-Moon periodic orbit families.)

- Dei Tos D A, Topputo F. 2017. Trajectory refinement of three-body orbits in the real solar system model. *JGCD*. (Standard model-continuation pipeline CR3BP→ephemeris.)

- Ding B H et al. 2023. Transfer orbit and landing-site evaluation for crewed lunar exploration missions. (Example of continuation applied to launch-window robustness analysis.)
