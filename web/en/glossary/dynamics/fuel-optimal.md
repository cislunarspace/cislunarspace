---
title: Fuel-optimal Control
description: Unified framework for the three canonical performance indices in spacecraft optimal control — fuel-optimal (L¹), energy-optimal (L²), and time-optimal. Covers the Mayer/Lagrange forms, Pontryagin-derived switching functions and Bang-bang/Bang-off-Bang structures, singular arcs, the bridge to energy-fuel homotopy, and applications to powered descent, cislunar low-thrust transfers, and station-keeping.
keywords: fuel-optimal control, energy-optimal, time-optimal, performance index, switching function, bang-bang, bang-off-bang, indirect method, homotopy, powered descent, low-thrust transfer
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Fuel-optimal Control
  desc: The three performance indices — fuel, energy, time — under a unified optimal-control framework.
  image: /logo.png
og:
  title: Fuel-optimal Control Explained | Optimal Control Performance Indices
  description: Unified framework for fuel-optimal (L¹), energy-optimal (L²), and time-optimal spacecraft control. Covers Pontryagin's principle, switching functions, Bang-bang/Bang-off-Bang structures, singular arcs, energy-fuel homotopy, and applications to powered descent and cislunar low-thrust transfers.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Fuel-optimal Control Explained | Optimal Control Performance Indices
  description: Unified framework for fuel-optimal (L¹), energy-optimal (L²), and time-optimal spacecraft control. Covers Pontryagin's principle, switching functions, Bang-bang/Bang-off-Bang structures, singular arcs, energy-fuel homotopy.
  image: /logo.png
permalink: /en/glossary/dynamics/fuel-optimal/
---

# Fuel-optimal Control

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

**Fuel-optimal control** minimizes propellant consumption. Under the rocket equation it is equivalent to maximizing final mass or minimizing total delta-v. Together with **energy-optimal control** (minimize $\int\|\mathbf{u}\|^2 dt$) and **time-optimal control** (minimize $t_f-t_0$), it is one of the three canonical performance indices in spacecraft trajectory optimization; each leads to a different optimal-control structure under [Pontryagin's Minimum Principle](/en/glossary/dynamics/pontryagins-maximum-principle/) (Bryson & Ho 1975; Betts 1998; Conway 2010).

| Index | Form | Control structure | Typical use |
| :--- | :--- | :--- | :--- |
| **Fuel-optimal** ($L^1$) | $J=\int_{t_0}^{t_f}\|\mathbf{u}\|\,dt=-m(t_f)/c$ | Bang-off-Bang | Low-thrust deep-space, powered descent |
| **Energy-optimal** ($L^2$) | $J=\int_{t_0}^{t_f}\|\mathbf{u}\|^2\,dt$ | Continuous smooth throttle | Homotopy start, power-limited |
| **Time-optimal** | $J=t_f-t_0$ | Full thrust throughout | Time-critical transfers |

Here $\mathbf{u}=T_{\max}u\boldsymbol{\alpha}/m$ is thrust acceleration and $u\in[0,1]$ is throttle.

## Mathematical formulation

### Dynamics and cost

In a central gravity field with variable mass:

$$
\dot{\mathbf{r}}=\mathbf{v},\quad \dot{\mathbf{v}}=\mathbf{g}(\mathbf{r})+\frac{T_{\max}}{m}\,u\,\boldsymbol{\alpha},\quad \dot{m}=-\frac{T_{\max}}{c}\,u.
$$

Fuel-optimal in Mayer form is $J=-m(t_f)$, equivalent to $J=(T_{\max}/c)\int u\,dt$ in Lagrange form. The Hamiltonian is

$$
H=\boldsymbol{\lambda}_r^{\mathrm{T}}\mathbf{v}+\boldsymbol{\lambda}_v^{\mathrm{T}}\mathbf{g}+u\,T_{\max}\!\left(\frac{\boldsymbol{\lambda}_v^{\mathrm{T}}\boldsymbol{\alpha}}{m}-\frac{\lambda_m}{c}\right).
$$

### Optimal control: primer vector and switching function

With the [primer vector](/en/glossary/dynamics/primer-vector/) $\mathbf{p}\equiv-\boldsymbol{\lambda}_v$ and the dimensionless switching function

$$
\rho(t)=1-\frac{c\,\|\mathbf{p}\|}{m}-\lambda_m,
$$

minimizing $H$ yields the optimal direction $\boldsymbol{\alpha}^{*}=\mathbf{p}/\|\mathbf{p}\|$ and throttle (Zhu & Gao 2017; Caillau et al. 2012):

$$
u^{*}=\begin{cases}0,&\rho>0\\1,&\rho<0\\\text{indeterminate},&\rho=0\end{cases}
$$

$\rho=0$ corresponds to a **singular arc**, where the first-order condition is insufficient and the Legendre-Clebsch second-order condition is needed. Singular arcs are rare in standard fuel-optimal problems; most solutions exhibit **Bang-off-Bang** structure — alternating MT arcs ($u=1$) and NT arcs ($u=0$) with no intermediate thrust (Lawden 1963; see [Bang-bang Control](/en/glossary/dynamics/bang-bang-control/)).

### Energy-optimal as the homotopy start

The energy-optimal cost yields a smooth switching function $\rho_E=1-2\varepsilon c\|\mathbf{p}\|/m-\lambda_m$ (with $\varepsilon$ the homotopy parameter); the throttle is continuous and the convergence basin is wide. Bertrand and Epenoy (2002) introduce the regularized cost

$$
J_\varepsilon=\int_{t_0}^{t_f}\!\bigl[u-\varepsilon\,u(1-u)\bigr]dt,
$$

bridging $\varepsilon=1$ (energy-optimal, smooth) to $\varepsilon\to 0$ (fuel-optimal, Bang-off-Bang). Each subproblem along the path uses the previous solution as initial guess — the bridge that makes indirect methods engineering-feasible (see [Homotopy Method](/en/glossary/dynamics/homotopy-method/)).

### The special case of time-optimal control

The time-optimal cost is independent of $u$ explicitly; combined with $H\equiv 0$ (free-final-time condition) it implies $u^{*}=1$ throughout — full thrust with direction $\boldsymbol{\alpha}^{*}=\mathbf{p}/\|\mathbf{p}\|$. There are no switches, which makes time-optimal problems relatively tractable and a common starting point for thrust-amplitude homotopy (Caillau & Daoud 2012).

## Fuel-time trade-off

Real missions usually bound the transfer time. Define the time ratio $c_{t_f}=t_f/t_f^{\min}$; final mass increases with $c_{t_f}$ but saturates for $c_{t_f}\gtrsim 2$ (Caillau et al. 2012, Fig. 4) — diminishing returns. Designs pick a point on this Pareto front: $c_{t_f}\approx 1.5$ favors time for crewed missions; $c_{t_f}\approx 2$--3 favors fuel for cargo.

## Application notes

### Powered descent

Lunar or planetary powered descent is a canonical fuel-optimal problem with terminal state constraint and cost $J=m(t_f)$. The resulting thrust law typically shows "always-braking" or Bang-off-Bang behavior. For standard soft-landing formulations, non-trivial singular arcs can be ruled out (You & Dai 2022), justifying the Bang-off-Bang assumption.

### Cislunar low-thrust transfers

- **LEO to $L_1$/$L_2$ Halo**: Zhang et al. (2025) solve $L_1$-Halo to $L_2$-Halo transfers with erf-smoothing homotopy, fuel consumption only 0.34% of initial mass.
- **Planar CR3BP minimum-fuel**: Caillau et al. (2012) solve GEO-to-$L_1$/Moon transfers at 0.3 N using $L^2$--$L^1$ and logarithmic-barrier homotopies, emphasizing the need for conjugate-point tests.
- **Multi-stage formulation**: long transfers are split into thrust-coast-thrust legs, each a separate BVP stitched by match conditions (see [Indirect Methods](/en/glossary/dynamics/indirect-methods/)).

### Station-keeping

Long-term maintenance of NRHO, Halo and other libration-point orbits is a sequence of small fuel-optimal problems: whenever deviations exceed a threshold, a minimum-$\Delta V$ correction over a fixed horizon is solved, with Bang-off-Bang characteristics (Zhang and Wang 2022).

## Bridge to energy-fuel homotopy

Direct solution of Bang-off-Bang fuel-optimal control is infeasible (discontinuous control, unknown switch count). The mainstream route is the **energy-fuel homotopy** that continues a smooth energy-optimal solution toward the fuel-optimal one. Three smoothing families dominate the literature:

- **Polynomial smoothing** ($u(1-u)$, Bertrand & Epenoy 2002): simplest, but degrades at low thrust;
- **Logarithmic barrier** ($-u\log u-(1-u)\log(1-u)$, Caillau et al. 2012; Taheri et al. 2016): enforces $0<u<1$, makes the Hamiltonian everywhere differentiable;
- **Sigmoid family** ($\tanh$, algebraic, error function erf, Zhang et al. 2025): directly approximates $\mathrm{sign}(\rho)$; erf converges fastest.

Empirical rule: at $\varepsilon\sim 10^{-5}$ the throttle profile is visually indistinguishable from true Bang-off-Bang (Taheri et al. 2016; Zhang et al. 2025). See [Homotopy Method](/en/glossary/dynamics/homotopy-method/).

## Related concepts

- [Primer Vector](/en/glossary/dynamics/primer-vector/) — the adjoint quantity determining optimal thrust direction and impulse times
- [Bang-bang Control](/en/glossary/dynamics/bang-bang-control/) — the typical structure of fuel-optimal solutions
- [Homotopy Method](/en/glossary/dynamics/homotopy-method/) — the numerical workhorse for Bang-off-Bang fuel-optimal solutions
- [Pontryagin's Minimum Principle](/en/glossary/dynamics/pontryagins-maximum-principle/) — the theorem behind optimal control laws
- [Co-state Variables](/en/glossary/dynamics/co-state-variables/) — the source of the switching function
- [Indirect Methods](/en/glossary/dynamics/indirect-methods/) — the method framework for fuel-optimal problems
- [Electric Propulsion](/en/glossary/fundamentals/ep/) — the physical carrier of fuel-optimal low-thrust control

## References

- Lawden, D. F. 1963. *Optimal Trajectories for Space Navigation*. Butterworths, London.
- Bryson, A. E., and Ho, Y.-C. 1975. *Applied Optimal Control*. Hemisphere.
- Betts, J. T. 1998. "Survey of Numerical Methods for Trajectory Optimization." *JGCD* 21(2): 193–207.
- Conway, B. A. (ed.) 2010. *Spacecraft Trajectory Optimization*. Cambridge Univ. Press.
- Bertrand, R., and Epenoy, R. 2002. "New Smoothing Techniques for Solving Bang–Bang Optimal Control Problems." *Optim. Control Appl. Methods* 23(4): 171–197.
- Caillau, J.-B., Cerf, M., Dujols, A., et al. 2012. "Minimum Fuel Control of the Planar Circular Restricted Three-Body Problem." *CEP*.
- Caillau, J.-B., and Daoud, B. 2012. "Minimum Time Control of the Restricted Three-Body Problem." *SIAM J. Control Optim.* 50(6).
- Taheri, E., Kolmanovsky, I., and Atkins, E. 2016. "Enhanced Smoothing Technique for Indirect Optimization of Minimum-Fuel Low-Thrust Trajectories." *JGCD* 39(11): 2500–2511.
- Zhang, et al. 2025. "Smoothing Technique for Indirect Low-Thrust Trajectory Optimization in Cislunar Space." *Space Sci. Technol.*
- Zhu, Z., and Gao, Y. 2017. "Survey of Two Continuation Methods for Optimal Bang-Bang Control of Low-Thrust Trajectories." *J. Deep Space Explor.* 4(2): 101–110. (In Chinese.)
- You, S., and Dai, R. 2022. "Fuel-Optimal Trajectory Generation via Down-To-The-Moon Approach." *JGCD*, doi:10.2514/1.G006815.
