---
title: Homotopy Method
description: A class of numerical methods that solve a hard nonlinear system F(y)=0 by constructing a homotopy H(y,κ)=κF(y)+(1-κ)G(y) linking an easy problem G to the target problem F, then tracking the zero path from κ=0 to κ=1. In low-thrust trajectory optimisation it is the principal device for morphing a smooth energy-optimal solution into a bang-bang fuel-optimal one, or for stepping a high-thrust solution down to a target low thrust.
keywords: homotopy method, homotopy continuation, smoothing technique, thrust homotopy, L2-L1 homotopy, energy-fuel optimal, indirect method, two-point boundary value problem
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Homotopy Method
  desc: The core numerical method for morphing an energy-optimal solution into a fuel-optimal one in low-thrust trajectory optimisation.
  image: /logo.png
og:
  title: Homotopy Method Explained | Glossary
  description: A class of numerical methods that solve a hard nonlinear system F(y)=0 by constructing a homotopy H(y,κ)=κF(y)+(1-κ)G(y) linking an easy problem G to the target problem F, then tracking the zero path from κ=0 to κ=1. The principal device for morphing a smooth energy-optimal solution into a bang-bang fuel-optimal one in low-thrust trajectory optimisation.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Homotopy Method Explained | Glossary
  description: A class of numerical methods that solve a hard nonlinear system F(y)=0 by constructing a homotopy H(y,κ)=κF(y)+(1-κ)G(y) linking an easy problem G to the target problem F, then tracking the zero path from κ=0 to κ=1. The principal device for morphing a smooth energy-optimal solution into a bang-bang fuel-optimal one in low-thrust trajectory optimisation.
  image: /logo.png
permalink: /en/glossary/dynamics/homotopy-method/
---

# Homotopy Method

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The homotopy method (also called homotopy continuation) solves a nonlinear system $\mathbf{F}(\mathbf{y})=\mathbf{0}$ by constructing a parameterised **homotopy function** $\mathbf{H}(\mathbf{y},\kappa)$ with $\kappa\in[0,1]$ such that

$$\mathbf{H}(\mathbf{y},0)=\mathbf{G}(\mathbf{y})\ \text{(easy "initial problem")},\qquad \mathbf{H}(\mathbf{y},1)=\mathbf{F}(\mathbf{y})\ \text{(target problem)},$$

then tracking the zero curve of $\mathbf{H}(\mathbf{y},\kappa)=\mathbf{0}$ from the known solution at $\kappa=0$ to $\kappa=1$, where a solution of $\mathbf{F}(\mathbf{y})=\mathbf{0}$ is obtained (Watson 1986; Allgower & Georg 1990).

**Relation to [Numerical Continuation](/en/glossary/dynamics/continuation/)**: homotopy is a sub-class of continuation — the "parameter $\lambda$" is specialised to the homotopy parameter $\kappa$, and the "parameterised equation" is specialised to an artificially constructed homotopy. The two share the same path-following machinery (predictor-corrector, pseudo-arclength), but their starting points differ: continuation pushes forward from a single known solution to the family it belongs to; homotopy constructs a family of equations starting from a deliberately chosen easy problem in order to attack a hard problem with no usable initial guess.

In orbital mechanics the "hard problem" is typically the two-point boundary-value problem (TPBVP) arising from [indirect methods](/en/glossary/dynamics/indirect-methods/) — costate initial values have tiny convergence basins and the fuel-optimal control is bang-bang / discontinuous, so direct shooting is essentially hopeless. By morphing a smooth, well-converged "sister problem" (e.g. the energy-optimal problem) into the target problem step by step, the homotopy method replaces one large jump with hundreds of small ones — the bridge that turns indirect methods from "theoretically optimal" into "engineering-solvable" (Bertrand & Epenoy 2002; Haberkorn et al. 2004; Taheri et al. 2016).

## Construction of the Homotopy Function

### General form

The most common convex combination (Haberkorn et al. 2004; Pan & Pan 2019):

$$\mathbf{H}(\mathbf{y},\kappa)=\kappa\,\mathbf{F}(\mathbf{y})+(1-\kappa)\,\mathbf{G}(\mathbf{y}),$$

with initial problem $\mathbf{G}$ at $\kappa=0$ and target $\mathbf{F}$ at $\kappa=1$. The choice of $\mathbf{G}$ names the homotopy:

| Construction | $\mathbf{G}(\mathbf{y})$ | Solution at $\kappa=0$ | Applicability |
| :--- | :--- | :--- | :--- |
| **Newton homotopy** | $\mathbf{F}(\mathbf{y})-\mathbf{F}(\mathbf{y}_0)$ | near known guess $\mathbf{y}_0$ | simplest, but requires $\mathbf{y}_0$ already close to the true solution |
| **Fixed-point homotopy** | $\mathbf{y}-\mathbf{y}_0$ | $\mathbf{y}=\mathbf{y}_0$ | independent of the form of $\mathbf{F}$; widely applicable; looser requirement on $\mathbf{y}_0$ |
| **Scale-invariant affine homotopy** | affine combination, insensitive to scaling of $\mathbf{y}$ | — | more robust when variable magnitudes differ widely |
| **Cost-function homotopy** | convex combination of performance indices | energy-optimal solution | the mainstream choice for low-thrust fuel-optimal problems (see below) |

Newton and fixed-point homotopies are used when "a rough guess is already in hand and the accurate solution is wanted"; cost-function and thrust homotopies (below) are used when "one wants to jump from a physically easy solution to a physically hard one", and are the two most important families in trajectory optimisation.

### Energy-optimal → fuel-optimal (cost-function homotopy)

In spacecraft low-thrust optimal control, the energy-optimal ($L^2$) cost

$$J_E=\int_{t_0}^{t_f}\|\mathbf{u}(t)\|^2\,dt$$

yields a continuous, smooth control law with a wide convergence basin, whereas the fuel-optimal ($L^1$) cost

$$J_F=\int_{t_0}^{t_f}\|\mathbf{u}(t)\|\,dt$$

yields a discontinuous bang-bang / bang-off-bang control that [shooting methods](/en/glossary/dynamics/differential-correction/) cannot solve directly. Bertrand & Epenoy (2002) introduce a regularised cost

$$J_\varepsilon=\int_{t_0}^{t_f}\bigl[\|\mathbf{u}\|-\varepsilon\,F(\|\mathbf{u}\|)\bigr]\,dt,$$

where $F$ is a continuous perturbation (e.g. $F(w)=w(1-w)$, logarithmic barrier, sigmoid, etc.) and $\varepsilon\in[0,1]$ is the homotopy parameter. At $\varepsilon=1$ the cost reduces to the energy-optimal form (smooth); as $\varepsilon\to 0$ it approaches the fuel-optimal (bang-bang) form. The solution strategy takes a decreasing sequence $\varepsilon_1>\varepsilon_2>\cdots>\varepsilon_n\to 0$, solving each subproblem with the previous costate as initial guess.

### Choice of smoothing function

The form of the perturbation $F$ determines the smoothness of the homotopy path and the rate of convergence:

- **Polynomial smoothing** (Bertrand & Epenoy 2002 prototype): $F(w)=w(1-w)$. Simplest, but precision degrades at low thrust as the number of control switches grows, and second-order sufficiency conditions are hard to verify.

- **L2-L1 homotopy** (Caillau et al. 2012): a convex combination of $L^2$ and $L^1$ costs; a special case of the convex-combination form above and the classical implementation for planar minimum-fuel problems in the CR3BP.

- **Logarithmic-barrier homotopy** (Caillau et al. 2012): add $-\varepsilon\ln(\|\mathbf{u}\|(1-\|\mathbf{u}\|))$ to the cost, forcing $0<\|\mathbf{u}\|<1$ so that the Hamiltonian maximisation is everywhere differentiable; overcomes the precision loss of L2-L1 at low thrust.

- **Extended logarithmic smoothing** (Taheri et al. 2016): recasts the logarithmic smoothing in terms of the switching function and couples it with the state-transition-matrix method for accurate Jacobians, allowing $\varepsilon$ to jump in large steps (e.g. 1 → 0.01 → $10^{-5}$) in only 3 subproblems instead of 6.

- **Sigmoid smoothing** (Zhang et al. 2025): approximate $\mathrm{sign}(S)$ (where $S$ is the switching function) by parametric sigmoids — $\tanh$, algebraic, or error-function erf. On an L1-halo → L2-halo transfer benchmark, erf converges twice as fast as $\tanh$ or algebraic alternatives and yields an order-of-magnitude smaller terminal error.

An empirical rule: at $\varepsilon\sim 10^{-5}$ the thrust profile is visually indistinguishable from a true bang-bang solution (Taheri et al. 2016; Zhang et al. 2025).

### Thrust-amplitude homotopy (thrust continuation / thrust homotopy)

Another family uses the thrust upper bound $T_{\max}$ as the homotopy parameter: start from a large, easily-converged $T_L$ and step down to the target $T_{\max}$ (Caillau & Daoud 2012; Pan & Pan 2019). The effective thrust in the equations of motion is

$$T(\kappa)=T_{\max}+\kappa\,(T_L-T_{\max}),\qquad \kappa\in[0,1],$$

with $\kappa=0$ at the target low thrust (hard) and $\kappa=1$ at high thrust (easy). The same idea underlies the "target-point pull-back" approach to perturbed Lambert problems — the target point is gradually pulled from the two-body Lambert solution to the true multi-body position, the offset adjusted proportionally at each iteration (homotopy iteration method).

### LP → $T_{\min}$ → CEV continuation chain

Electric-propulsion missions often employ a three-stage homotopy chain that avoids specifying any "user guess" (Petukhov & Yoon 2023; Yoon & Petukhov 2023):

1. **Limited-power problem (LP)**: assumes constant power and arbitrarily small thrust (no switching); solvable with a zero initial guess.
2. **Minimum-thrust problem ($T_{\min}$)**: continued from the LP solution to find the minimum thrust feasible at a given angular distance; used to verify existence of solutions to the CEV problem.
3. **Constant-exhaust-velocity finite-thrust problem (CEV)**: continued from the $T_{\min}$ solution to the prescribed $T_{\mathrm{cev}}\geq T_{\min}$, yielding the true bang-off-bang fuel-optimal solution with switching.

Each stage uses Newton homotopy to immerse the BVP into a one-parameter family. This pipeline is the signature of the Petukhov school for Earth-Moon low-thrust optimisation.

### Endpoint homotopy

The departure point's phase on the parking orbit is adjusted to lower the required thrust: dragging the departure point against the direction of orbital motion increases the number of transfer revolutions and spreads out the required velocity increment. A classical technique for gradually reducing thrust in electric Earth–Moon transfer design; equivalent to a thrust homotopy that increases the transfer duration.

## Path-Following Algorithms

Once the homotopy function is constructed, the zero path of $\mathbf{H}(\mathbf{y},\kappa)=\mathbf{0}$ must be tracked. Two families (Pan & Pan 2019; Haberkorn et al. 2004):

### Discrete homotopy

Partition $[0,1]$ into nodes $0=\kappa_1<\kappa_2<\cdots<\kappa_m=1$ and solve each subproblem in turn, using the previous solution as the next initial guess. **Advantage**: simple to implement. **Drawbacks**: fails when consecutive nodes are too far apart for convergence; completely breaks down at turning points of the homotopy curve ($d\kappa/ds=0$).

### Continuous homotopy

Track the zero curve using pseudo-arclength steps $\Delta s$ (i.e. the pseudo-arclength method of [numerical continuation](/en/glossary/dynamics/continuation/)): at the current node $(\kappa_i,\mathbf{y}_i)$ compute the Jacobian, predict along the tangent, and correct back by Newton iteration. Because stepping is directed by the curve tangent, **$\kappa$ may increase or decrease** during tracking, so turning points can be negotiated. Thrust-amplitude homotopy curves routinely develop turning points near $\kappa\approx 0.85$ and spawn multiple local optima — discrete homotopy cannot handle them, and continuous homotopy is mandatory (Pan & Pan 2019).

Predictor-corrector is the standard implementation of continuous homotopy: a tangent-Euler step predicts, then Newton iteration corrects back to the zero path.

## Role in Low-Thrust Trajectory Optimisation

When an indirect method is applied to a low-thrust optimal control problem, the shooting function of the state-costate TPBVP is so sensitive to the costate initial values that the convergence radius is practically unusable — especially when thrust is low (many revolutions, many switches) or the control is bang-bang (Haberkorn et al. 2004; Taheri et al. 2016). The homotopy method overcomes this in two layers:

1. **Enlarging the convergence basin**: each subproblem differs from the previous one by $\Delta\kappa$, so the previous solution lies naturally inside the Newton basin of the current one; stepped progress effectively magnifies the convergence radius by orders of magnitude.
2. **Handling discontinuous control**: the cost-function homotopy makes the control continuously differentiable for $\varepsilon>0$, so the state-transition-matrix method works for Jacobian evaluation; once $\varepsilon$ is small enough that the control has converged to near-bang-bang, switching times are refined by discrete-event detection.

Empirically, Haberkorn et al. (2004) used cost-function homotopy + single shooting to solve LEO–GEO minimum-fuel transfers at the 0.1 N level (hundreds of revolutions, hundreds of switches); Pan & Pan (2019) used thrust-amplitude homotopy + pseudo-arclength tracking to solve a GEO→$L_2$ 1 N time-optimal transfer and discovered 13 local optima near the turning point; Zhang et al. (2025) used erf-smoothing homotopy to solve an $L_1$-halo → $L_2$-halo minimum-fuel transfer consuming only 0.34% of spacecraft mass.

## Distinction from Numerical Continuation

The terms "continuation", "homotopy", and "homotopy continuation" are often used interchangeably in the literature, but their engineering meaning differs:

| Aspect | Numerical continuation | Homotopy method |
| :--- | :--- | :--- |
| Starting point | a known solution within a family | the solution of an artificially constructed "easy problem" |
| Parameter | physical ($C$, amplitude, model fidelity) | artificially embedded $\kappa$ / $\varepsilon$ |
| Goal | sweep out the branch for that parameter | morph the easy problem's solution into the target problem's |
| Typical use | periodic orbit family scan, model transition | fuel-optimal bang-bang control, low-thrust convergence |

The two share path-following algorithms (natural-parameter, pseudo-arclength, predictor-corrector), but **purpose and construction** differ: continuation is descriptive ("what does this curve look like"), while homotopy is a tool for solving ("I construct a curve so as to reach the target solution").

## Related Concepts

- [Numerical Continuation](/en/glossary/dynamics/continuation/)

- [Indirect Methods](/en/glossary/dynamics/indirect-methods/)

- [Shooting Method](/en/glossary/dynamics/differential-correction/)

- [Differential Correction](/en/glossary/dynamics/differential-correction/)

- [Co-state Normalisation](/en/glossary/dynamics/co-state-variables/)

- [Bang-bang Control](/en/glossary/dynamics/bang-bang-control/)

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

## References

- Allgower E L, Georg K. 1990. *Numerical Continuation Methods: An Introduction*. Springer. (Unified textbook on homotopy and continuation algorithms.)

- Watson L T. 1986. Numerical linear algebra aspects of globally convergent homotopy methods. *SIAM Rev.* 28(4): 575–606. (Numerical linear algebra of homotopy path following.)

- Bertrand R, Epenoy R. 2002. New smoothing techniques for solving bang–bang optimal control problems — numerical results and statistical interpretation. *Optim. Control Appl. Methods* 23(4): 171–197. (Seminal paper on $\varepsilon$-regularised cost.)

- Haberkorn T, Martinon P, Gergaud J. 2004. Low thrust minimum-fuel orbital transfer: a homotopic approach. *JGCD* 27(6): 1046–1060. (Energy→fuel homotopy + single shooting for LEO–GEO 0.1 N transfers; comparison of PL / PC tracking algorithms.)

- Gergaud J, Haberkorn T. 2006. Homotopy method for minimum consumption orbit transfer problem. *ESAIM Control Optim. Calc. Var.* 12(2): 294–313. (Survey of homotopy applied to orbit transfer.)

- Caillau J B, Daoud B. 2012. Minimum time control of the restricted three-body problem. *SIAM J. Control Optim.* 50(6). (Thrust-amplitude homotopy; minimum-time problem.)

- Caillau J B, Cerf M, Dujols A, et al. 2012. Minimum fuel control of the planar circular restricted three-body problem. *CEP*. (Comparison of L2-L1 and logarithmic-barrier homotopies on planar CR3BP minimum-fuel.)

- Taheri E, Kolmanovsky I, Atkins E. 2016. Enhanced smoothing technique for indirect optimization of minimum-fuel low-thrust trajectories. *JGCD* 39(11): 2500–2511. (Extended logarithmic smoothing + state-transition matrix, reducing the number of subproblems.)

- Pan X, Pan B F. 2019. Homotopy-method-based low-thrust transfer optimisation from GEO to the Earth-Moon $L_2$ point. (Chinese-language source for thrust-amplitude homotopy + pseudo-arclength tracking; the origin of the Newton / fixed-point / scale-invariant affine homotopy terminology in the Chinese literature.)

- Yoon S, Petukhov V. 2023. Minimum-fuel low-thrust trajectories to the Moon. *Acta Astronaut.* (Implementation of the LP→$T_{\min}$→CEV three-stage homotopy chain for Earth-Moon transfer.)

- Zhang et al. 2025. Smoothing technique for indirect low-thrust trajectory optimization in cislunar space. (Comparison of $\tanh$ / algebraic / erf sigmoids on an $L_1$–$L_2$ halo transfer.)

- Guan Y T, Gao C S, Hu Y D, Zhao H H. 2026. Hyper-parameter self-tuning homotopy method for spacecraft long-range cooperative rendezvous. *Spacecraft Environment Engineering*. (Engineering practice of RLEPSO seed initial costates refined by homotopy.)
