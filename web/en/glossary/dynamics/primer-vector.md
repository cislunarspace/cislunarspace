---
title: Primer Vector
description: The primer vector p(t)=-λ_v(t) introduced by Lawden (1963), the unifying adjoint quantity for first-order necessary conditions of both continuous-thrust and impulsive optimal transfers. Covers the primer vector equation, the Lawden-Lion-Handelsman impulsive necessary conditions, the adjoint-control transformation, switching-function-based throttle, and cislunar application notes.
keywords: primer vector, Lawden, costate velocity, switching function, optimal thrust direction, impulsive transfer optimality, Lion-Handelsman, Jezewski-Rozendaal, indirect method
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Primer Vector
  desc: Lawden's optimal thrust criterion — the negative velocity costate, fixing thrust direction and impulse times.
  image: /logo.png
og:
  title: Primer Vector Explained | Optimal Control & Impulsive Transfers
  description: The primer vector p(t)=-λ_v(t) introduced by Lawden (1963) unifies first-order necessary conditions for continuous-thrust and impulsive optimal transfers. Covers the primer vector equation, impulsive NC, Lion-Handelsman gradients, and cislunar applications.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Primer Vector Explained | Optimal Control & Impulsive Transfers
  description: The primer vector p(t)=-λ_v(t) introduced by Lawden (1963) unifies first-order necessary conditions for continuous-thrust and impulsive optimal transfers. Covers the primer vector equation, impulsive NC, Lion-Handelsman gradients, and cislunar applications.
  image: /logo.png
permalink: /en/glossary/dynamics/primer-vector/
---

# Primer Vector

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The **primer vector** is a term coined by Lawden (1963) in his foundational work *Optimal Trajectories for Space Navigation*. It is defined as the negative of the velocity costate:

$$
\mathbf{p}(t)\equiv-\boldsymbol{\lambda}_v(t).
$$

It is the central adjoint quantity produced by [Pontryagin's Minimum Principle](/en/glossary/dynamics/pontryagins-maximum-principle/) for optimal spacecraft control: it fixes the optimal thrust direction and throttle-switching instants in the continuous-thrust case, and the impulse times, directions, and the question of whether to add further impulses in the impulsive case. Lawden explained the name in a 1990 letter to Prussing: he served in the artillery during World War II, where a primer charge initiates the burning of cordite; analogously, "$p=1$" is the signal for the rocket motor to ignite (Prussing 2010).

## Derivation: from the Minimum Principle to the primer vector

Consider a variable-mass spacecraft in a central gravity field,

$$
\dot{\mathbf{r}}=\mathbf{v},\quad \dot{\mathbf{v}}=\mathbf{g}(\mathbf{r})+\frac{T_{\max}}{m}\,u\,\boldsymbol{\alpha},\quad \dot{m}=-\frac{T_{\max}}{c}\,u,
$$

with thrust direction $\boldsymbol{\alpha}$ ($\|\boldsymbol{\alpha}\|=1$), throttle $u\in[0,1]$, and exhaust velocity $c=I_{sp}g_0$. The Hamiltonian is

$$
H=\boldsymbol{\lambda}_r^{\mathrm{T}}\mathbf{v}+\boldsymbol{\lambda}_v^{\mathrm{T}}\mathbf{g}(\mathbf{r})+u\,T_{\max}\!\left(\frac{\boldsymbol{\lambda}_v^{\mathrm{T}}\boldsymbol{\alpha}}{m}-\frac{\lambda_m}{c}\right).
$$

Minimizing over $\boldsymbol{\alpha}$ yields the optimal thrust direction

$$
\boldsymbol{\alpha}^{*}=\frac{\mathbf{p}(t)}{\|\mathbf{p}(t)\|},\qquad \mathbf{p}(t)\equiv-\boldsymbol{\lambda}_v(t),
$$

i.e., the **optimal thrust direction is along the primer vector**. Substituting back gives the control-coupling term $H_c=u\,\Phi(t)$ with the **switching function**

$$
\Phi(t)=-T_{\max}\!\left(\frac{\|\mathbf{p}\|}{m}+\frac{\lambda_m}{c}\right).
$$

The Minimum Principle then gives $u^{*}=0$ when $\Phi>0$ (coast) and $u^{*}=1$ when $\Phi<0$ (full thrust) — the structure underlying [Bang-bang control](/en/glossary/dynamics/bang-bang-control/).

## The primer vector equation

The costate equations $\dot{\boldsymbol{\lambda}}_v=-\boldsymbol{\lambda}_r$ and $\dot{\boldsymbol{\lambda}}_r=-G(\mathbf{r})\boldsymbol{\lambda}_v$, with $G(\mathbf{r})=\partial\mathbf{g}/\partial\mathbf{r}$ the $3\times 3$ gravity-gradient matrix, combine to give the **primer vector equation**

$$
\ddot{\mathbf{p}}=G(\mathbf{r})\,\mathbf{p}.
$$

It is a second-order linear ODE along the trajectory (Lawden 1963, Ch. 3; Prussing 2010, Eq. 2.19) and shares its state transition matrix with the orbital variational equation, so it can be propagated together with the [state transition matrix](/en/glossary/dynamics/co-state-variables/). In the two-body problem $G(\mathbf{r})=\mu(3\hat{\mathbf{r}}\hat{\mathbf{r}}^{\mathrm{T}}-I)/r^3$, where analytical foundations are available (Prussing 1993).

## Continuous-thrust necessary conditions

For a constant-specific-impulse (CSI) optimal control problem, the primer vector satisfies (Lawden 1963; Conway 2010, Ch. 2):

1. $\mathbf{p}(t)$ and $\dot{\mathbf{p}}(t)$ are everywhere continuous;
2. The optimal thrust direction is $\boldsymbol{\alpha}^{*}=\mathbf{p}/\|\mathbf{p}\|$;
3. The throttle is decided by the sign of the switching function $\Phi$;
4. At a switching instant, $\Phi=0$, i.e. $\|\mathbf{p}\|=-m\lambda_m/c$.

Lawden accordingly classified thrust arcs into maximum-thrust (MT), null-thrust (NT), and intermediate-thrust (IT, i.e. the [singular arc](/en/glossary/dynamics/bang-bang-control/)). See [Bang-bang Control & Lawden's Arc Law](/en/glossary/dynamics/bang-bang-control/).

## Impulsive case: Lawden–Lion–Handelsman conditions

In the high-thrust limit, MT arcs shrink to instantaneous impulses. Lawden (1963) first wrote down the first-order necessary conditions; Lion and Handelsman (1968) put them in the engineering form:

1. $\mathbf{p}(t)$ and $\dot{\mathbf{p}}(t)$ are everywhere continuous;
2. $\|\mathbf{p}(t)\|\le 1$ for all $t$, and impulses can occur only at instants where $\|\mathbf{p}\|=1$;
3. At an impulse, $\mathbf{p}$ is a unit vector in the optimal impulse direction;
4. At an intermediate impulse (not initial or final), $\dot{\mathbf{p}}=\dot{\mathbf{p}}^{\mathrm{T}}\mathbf{p}/\|\mathbf{p}\|=0$.

For linear systems these conditions are also sufficient and bound the number of optimal impulses (Prussing 1993).

### Lion–Handelsman gradient method

In practice, given a fixed transfer time and boundary conditions, one usually starts from a non-optimal $N$-impulse solution (e.g., a two-impulse Lambert solution). Lion and Handelsman (1968) derived the cost gradients with respect to three corrective operations:

- **Terminal coast**: shifting the first/last impulse time — gradient $\partial J/\partial t_i=\pm\|\dot{\mathbf{p}}(t_i)\|$;
- **Midcourse impulse**: adding an impulse on a sub-arc where $\|\mathbf{p}\|>1$ — gradient $\partial J/\partial\Delta\mathbf{v}=(\|\mathbf{p}\|-1)\,\hat{\mathbf{p}}$;
- **Impulse time iteration**: nudging impulse times by the residual of $\dot{\mathbf{p}}$.

Jezewski and Rozendaal (1968) embedded these gradients in a nonlinear-programming framework (see [Indirect Methods](/en/glossary/dynamics/indirect-methods/)), yielding an algorithm that automatically decides when to add impulses and when to introduce coasts. It remains the standard tool for verifying and improving impulsive-transfer optimality.

## Relation to the adjoint-control transformation

Because $u^{*}=\mathrm{sign}(-\Phi)$ with $\Phi$ expressible through $\mathbf{p}$ and $\lambda_m$ alone, the optimal control can be parameterized entirely by $(\mathbf{p},\lambda_m)$. This observation underlies the [adjoint-control transformation](/en/glossary/dynamics/adjoint-control-transformation/) and costate normalization, which reduce the dimension of the indirect-method search space (Taheri et al. 2016; see [Co-state Variables](/en/glossary/dynamics/co-state-variables/)).

## Application notes

- **Impulsive-transfer optimality test**: if $\|\mathbf{p}(t)\|$ exceeds 1 along a two-impulse Lambert solution, an additional impulse or a coast is needed. This is the standard criterion for automating three-impulse cislunar transfer design.
- **Continuous-thrust direction command**: when simplified tangent-thrust laws fail, taking $\boldsymbol{\alpha}=\mathbf{p}/\|\mathbf{p}\|$ recovers the first-order optimal direction; the remaining freedom is only the throttle schedule, dramatically shrinking the indirect parameter space.
- **Multi-body extension**: in CR3BP $G(\mathbf{r})$ becomes the rotating-frame Jacobian of the synodic equations, but the primer vector equation retains its form, so the same toolbox serves Earth-Moon $L_1$/$L_2$ transfer analysis.
- **Homotopy initialization**: the energy-optimal (continuous-thrust) solution gives a closed-form approximation to $\mathbf{p}(t)$, an excellent starting point for [homotopy methods](/en/glossary/dynamics/homotopy-method/) that continue toward fuel-optimal bang-bang solutions.

## Related concepts

- [Bang-bang Control](/en/glossary/dynamics/bang-bang-control/) — the throttle structure derived from primer vector magnitude via the switching function
- [Co-state Variables](/en/glossary/dynamics/co-state-variables/) — the costate origin of the primer vector
- [Pontryagin's Minimum Principle](/en/glossary/dynamics/pontryagins-maximum-principle/) — the mathematical foundation
- [Homotopy Method](/en/glossary/dynamics/homotopy-method/) — the numerical workhorse for the primer vector BVP
- [Fuel-optimal Control](/en/glossary/dynamics/fuel-optimal/) — the dominant cost type for which the primer vector is applied
- [Adjoint-Control Transformation](/en/glossary/dynamics/adjoint-control-transformation/) — replacing the full costate by $(\mathbf{p},\lambda_m)$
- [Indirect Methods](/en/glossary/dynamics/indirect-methods/) — the multiple-shooting NLP framework implementing Lion-Handelsman gradients
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/) — the dynamical setting for cislunar primer vector applications

## References

- Lawden, D. F. 1963. *Optimal Trajectories for Space Navigation*. Butterworths, London. (Original definition of the primer vector; continuous and impulsive necessary conditions; three-arc classification.)
- Lion, P. M., and Handelsman, M. 1968. "Primer Vector on Fixed-Time Impulsive Trajectories." *AIAA Journal* 6(1): 127–132. (Cost gradients for terminal coasts and midcourse impulses.)
- Jezewski, D. J., and Rozendaal, H. L. 1968. "An Efficient Method for Calculating Optimal Free-Space N-Impulse Trajectories." *AIAA Journal* 6(11): 2160–2165. (NLP implementation of Lion-Handelsman gradients with automatic impulse insertion.)
- Prussing, J. E. 1993. "Equation for Optimal Power-Limited Spacecraft Trajectories." *JGCD* 16(6).
- Prussing, J. E. 2010. *Primer Vector Theory and Applications*. In Conway (ed.), *Spacecraft Trajectory Optimization*, Ch. 2, Cambridge Univ. Press.
- Conway, B. A. (ed.) 2010. *Spacecraft Trajectory Optimization*. Cambridge Univ. Press.
- Bryson, A. E., and Ho, Y.-C. 1975. *Applied Optimal Control*. Hemisphere.
- Taheri, E., Kolmanovsky, I., and Atkins, E. 2016. "Enhanced Smoothing Technique for Indirect Optimization of Minimum-Fuel Low-Thrust Trajectories." *JGCD* 39(11): 2500–2511.
