---
permalink: /en/glossary/dynamics/hermite-simpson-method/
title: Direct Collocation for Optimal Control (Hermite-Simpson / Direct Transcription)
description: A class of numerical methods that transcribes a continuous optimal control problem into a finite-dimensional nonlinear program (NLP) by discretizing states and controls on a mesh and imposing defect constraints at collocation points. Covers Hermite-Simpson defect, trapezoidal collocation, pseudospectral methods, piecewise-polynomial control parameterization, the role of differential-algebraic equations (DAE) and automatic differentiation (AD), mesh refinement, and operational software.
---

# Direct Collocation for Optimal Control (Hermite-Simpson / Direct Transcription)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Direct collocation (also called direct transcription) converts a continuous optimal control problem into a finite-dimensional nonlinear program (NLP). The time domain is partitioned into $M$ intervals defined by mesh points $t_0 < t_1 < \dots < t_M = t_f$. The NLP decision variables are the values of the state $\mathbf{y}_j$ and control $\mathbf{u}_j$ at each mesh point (plus parameters $\mathbf{p}$ and optionally the times $t_0$, $t_f$). On each interval, a polynomial interpolates the state, and a **defect constraint** forces the polynomial's derivative to match the dynamics $\mathbf{f}(\mathbf{y}, \mathbf{u}, \mathbf{p}, t)$ at one or more **collocation points** within the interval. This replaces the ODE system $(\dot{\mathbf{y}} = \mathbf{f})$ with algebraic equality constraints $\boldsymbol{\zeta}_j = 0$ (Betts 1998).

## Why Direct Collocation?

- **No adjoint derivation required.** Unlike [indirect methods](/en/glossary/dynamics/indirect-methods/), direct methods do not need the costate equations, transversality conditions, or the maximum principle—the user provides only the dynamics, constraints, and objective.

- **No a priori arc-sequence specification.** Path inequality constraints are handled by the NLP active-set strategy; the user need not guess which subarcs are constrained vs. unconstrained.

- **Sparse NLP structure.** The defect constraints couple only adjacent mesh points, producing sparse Jacobian and Hessian matrices that sparse NLP solvers exploit.

The main drawback: the NLP can be large—a problem with 7 states, 2 controls, 100 mesh points per phase, and 5 phases yields $n \approx 4500$ NLP variables (Betts 1998). Efficient exploitation of sparsity is essential.

## Hermite-Simpson Defect

The **Hermite-Simpson method** is among the most popular choices for the defect constraint (Betts 1998; Hargraves and Paris 1987). On interval $[t_j, t_{j+1}]$ of length $h_j = t_{j+1} - t_j$, a cubic Hermite interpolant is constructed from the endpoint states and dynamics:

$$
\bar{\mathbf{y}}_{j+\frac12} = \frac{1}{2}(\mathbf{y}_j + \mathbf{y}_{j+1}) + \frac{h_j}{8}\left[\mathbf{f}_j - \mathbf{f}_{j+1}\right]
$$

The Simpson integration rule then imposes the defect:

$$
\boldsymbol{\zeta}_j = \mathbf{y}_{j+1} - \mathbf{y}_j - \frac{h_j}{6}\left[\mathbf{f}_j + 4\bar{\mathbf{f}}_{j+\frac12} + \mathbf{f}_{j+1}\right] = 0
$$

where $\bar{\mathbf{f}}_{j+\frac12} = \mathbf{f}(\bar{\mathbf{y}}_{j+\frac12}, \bar{\mathbf{u}}_{j+\frac12})$ and $\bar{\mathbf{u}}_{j+\frac12}$ is either interpolated or treated as an additional NLP variable at the midpoint. The method is an implicit Runge-Kutta scheme of order 3 (Betts 1998).

## Control Parameterization

The continuous control function $\mathbf{u}(t)$ must be represented using a finite set of parameters. Common choices, from simplest to most flexible:

- **Linear interpolation parameterization:** control values are specified at mesh points and linearly interpolated between them. This is the simplest scheme and corresponds to piecewise-linear control—sufficient for many low-thrust transfer problems (Kluever 1997).

- **Piecewise polynomial control:** the control is represented as a polynomial on each mesh interval, with the polynomial coefficients as NLP variables. Higher-degree polynomials allow smoother control profiles and fewer mesh intervals for the same accuracy. This is a direct generalization of linear interpolation.

- **Pseudospectral methods** (e.g., Gauss, Radau, Legendre pseudospectral): use global polynomials with specially chosen collocation points (roots of orthogonal polynomials). These achieve spectral (exponential) convergence for smooth problems but can struggle with discontinuities.

## Differential-Algebraic Equations (DAE) in Optimal Control

The optimal control necessary conditions themselves form a DAE system: the state equations $\dot{\mathbf{y}} = \mathbf{f}$ (differential), the optimality condition $\mathbf{H}_{\mathbf{u}}^{\top} = 0$ (algebraic), and the costate equations. The **index** of a DAE measures how many differentiations are needed to convert the algebraic equations to explicit ODEs (Betts 1998, Sec. V.A). Index-1 DAEs (where $\partial\mathbf{g}/\partial\mathbf{u}$ is full rank, with $\mathbf{g}$ being path constraints) can be solved by standard methods like DASSL (Petzold). Higher-index DAEs (index $\ge 2$) require index reduction—differentiating the algebraic constraints—which introduces numerical drift; specialized collocation schemes are needed.

In direct transcription, the NLP is itself a large system of algebraic constraints (the defect constraints), and the implicit function theorem ensures that, for index-1 formulations, the NLP is well-posed if the mesh is sufficiently fine.

## Automatic Differentiation (AD) in Direct Collocation

The NLP solver requires first derivatives (the Jacobian $\mathbf{G}$) and preferably second derivatives (the Hessian $\mathbf{H}_L$) of the constraints and objective. Computing these by hand is exhaustive; finite differences introduce truncation error and scale poorly. **Automatic differentiation (AD)** operates on the source code of the dynamics $\mathbf{f}$ and constraints $\mathbf{g}$, propagating derivatives through elementary operations via the chain rule—yielding machine-precision gradients and Hessians with no truncation error (Betts 1998, Sec. VI.F.2).

Early trajectory optimization tools relied on sparse finite differencing. The ADIFOR software (Bischof et al.) and more recent frameworks (CasADi, algorithmic differentiation in C++) now make AD the preferred approach, especially when the DAE right-hand-side matrices $\mathbf{f}_{\mathbf{y}}$, $\mathbf{f}_{\mathbf{u}}$ are sparse.

## Mesh Refinement: h and p Methods

- **h-refinement:** increase the number of mesh intervals (reduce $h$) in regions where the local error estimate exceeds tolerance.

- **p-refinement:** increase the polynomial degree on each interval, keeping the number of intervals fixed.
Most production software uses h-refinement with fixed low-degree polynomials (e.g., trapezoidal or Hermite-Simpson, which are $k=2$ and $k=3$ methods respectively), as it is simpler to automate (Betts 1998).

## Operational Software

- **OTIS** (Optimal Trajectories by Implicit Simulation): originally by Hargraves and Paris (1987); uses Hermite-Simpson defect + NPSOL; later integrated with SOCS (Sparse Optimal Control Software).

- **GPOPS-II**: MATLAB-based hp-adaptive pseudospectral method (Rao et al.).

- **DIDO**: pseudospectral optimal control solver (Ross).

- **CasADi + IPOPT**: an open-source combination widely used in academic and industrial aerospace trajectory optimization.

## Application to Cislunar Trajectories

Direct collocation is widely used for cislunar trajectory optimization: low-thrust Earth-Moon transfers, halo orbit station-keeping design, and multi-body gravity-assist sequencing. The Hermite-Simpson method has been applied to Shuttle re-entry, low-thrust orbit transfers, and interplanetary trajectories (Betts 1998). Because the CR3BP equations of motion are smooth, pseudospectral methods can achieve very high accuracy with few collocation nodes.

## Related Concepts

- [Indirect Methods for Optimal Control](/en/glossary/dynamics/indirect-methods/)

- [Runge-Kutta Methods](/en/glossary/fundamentals/rk/)

- [Multi-Step Integrators (Adams-Cowell, Gauss-Jackson)](/en/glossary/dynamics/adams-cowell-integrator/)

- [State Transition Matrix (STM)](/en/glossary/fundamentals/stm/)

- [Gauss Pseudospectral Method (GPM)](/en/glossary/dynamics/gpm/)

- [Shape-Based Methods](/en/glossary/dynamics/shape-based-method/)

## References

- Betts, 1998, *Survey of Numerical Methods for Trajectory Optimization*, J. Guidance, Control, and Dynamics 21(2):193-207 (comprehensive survey; Hermite-Simpson defect Eq. 98-99; direct transcription formulation; DAE index analysis; AD discussion)

- Hargraves and Paris, 1987, *Direct Trajectory Optimization Using Nonlinear Programming and Collocation*, J. Guidance 10(4):338-342 (original Hermite-Simpson transcription for OTIS)

- Serban et al., 2002, *Halo Orbit Mission Correction Maneuvers Using Optimal Control*, Acta Astronautica (DAE formulation of optimal control for halo orbit station-keeping)

- Petzold, 1982, *A Description of DASSL: A Differential/Algebraic System Solver*, Sandia Report SAND82-8637

- Bischof et al., 1992, *ADIFOR: Generating Derivative Codes from Fortran Programs*, Scientific Programming 1(1):11-29

- Kluever, 1997, *Optimal Earth-Moon Trajectories Using Combined Chemical-Electric Propulsion*, J. Guidance 20(2):253-258 (linear interpolation control parameterization for low-thrust transfer)

- Gill et al., 2005, *SNOPT: An SQP Algorithm for Large-Scale Constrained Optimization*, SIAM Review 47(1):99-131

- Patterson and Rao, 2014, *GPOPS-II: A MATLAB Software for Solving Multiple-Phase Optimal Control Problems Using hp-Adaptive Gaussian Quadrature Collocation Methods*, ACM Trans. Math. Softw. 41(1)
