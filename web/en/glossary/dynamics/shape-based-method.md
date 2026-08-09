---
title: Shape-Based Method and Velocity Hodograph
description: Shape-based methods use predefined analytical shape functions (exponential sinusoids, inverse polynomials, Fourier series, etc.) to approximate the geometry of a low-thrust trajectory, then recover the thrust profile by inverse dynamics, reducing an infinite-dimensional optimal control problem to a finite-dimensional parameter optimization. This entry covers the Petropoulos exponential sinusoid and its multi-revolution Lambert analogue (Izzo 2006), the Wall-Conway inverse polynomial, velocity-hodograph shaping, the CR3BP-modified exponential sinusoid (Vellutini & Avanzini 2014), amplitude-phase shape functions for libration-point periodic orbits, the origin of the feasibility condition |k1·k2²|<1, the cost of the tangential-thrust assumption, and the engineering role in global search and initial-guess generation.
keywords: shape-based method, shape method, exponential sinusoid, inverse polynomial, velocity hodograph, Petropoulos, Wall-Conway, Vellutini, low-thrust trajectory design, libration point orbit
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Shape-Based Method and Velocity Hodograph
  desc: Approximate low-thrust trajectories by analytical shape functions (exponential sinusoids, inverse polynomials, Fourier series), and recover thrust by inverse dynamics.
  image: /logo.png
og:
  title: Shape-Based Method and Velocity Hodograph Explained | Term Definition
  description: Shape-based methods use analytical shape functions to approximate low-thrust trajectories and recover thrust by inverse dynamics. This entry covers the exponential sinusoid (Petropoulos, Izzo), the inverse polynomial (Wall-Conway), velocity hodograph, the CR3BP-modified sinusoid (Vellutini & Avanzini), feasibility conditions and the tangential-thrust assumption.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Shape-Based Method and Velocity Hodograph Explained | Term Definition
  description: Shape-based methods use analytical shape functions to approximate low-thrust trajectories and recover thrust by inverse dynamics. This entry covers the exponential sinusoid (Petropoulos, Izzo), the inverse polynomial (Wall-Conway), velocity hodograph, the CR3BP-modified sinusoid (Vellutini & Avanzini), feasibility conditions and the tangential-thrust assumption.
  image: /logo.png
permalink: /en/glossary/dynamics/shape-based-method/
---

# Shape-Based Method and Velocity Hodograph

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A shape-based method is an **approximate analytical design technique** for low-thrust trajectories: an analytical function with a few free parameters (the "shape function") describes the trajectory geometry — typically the polar radius $r(\theta)$ or the velocity vector $\boldsymbol{v}(t)$ — and inverse dynamics recovers the thrust acceleration $\boldsymbol{u}(t)$ and time of flight from the shape. It **does not solve the full optimal control problem**; instead it reduces an infinite-dimensional trajectory optimization to a finite-dimensional parameter optimization. It is fast and well-suited to global search, but the achievable shapes are limited by the chosen function family, so the solution is generally not truly optimal (Petropoulos & Longuski 2004; Conway 2010; Vellutini & Avanzini 2014).

Engineering role: shape-based methods are **initial-guess generators and global pruners** — rapidly producing near-feasible transfers among many candidates, then handing them off to [direct collocation](/en/glossary/dynamics/differential-correction/), [HDDP](/en/glossary/dynamics/hddp/), or [indirect methods](/en/glossary/dynamics/indirect-methods/) for refinement.

## The Petropoulos Exponential Sinusoid

Under a central gravity field with tangential thrust, Petropoulos (Petropoulos & Longuski 2004) found that the exponential sinusoid

$$
r(\theta) = k_0\,\exp\!\big[k_1\sin(k_2\theta+\phi)\big]
$$

analytically satisfies the planar equations of motion when $\alpha=\gamma$ (thrust aligned with velocity). Substituting gives closed-form angular rate and thrust acceleration

$$
\dot\theta^2 = \frac{\mu/r^3}{\tan^2\gamma + k_1 k_2^2 s + 1},\qquad a = \frac{\tan\gamma}{2\cos\gamma}\!\left[\frac{1}{\tan^2\gamma + k_1 k_2^2 s + 1} - \frac{k_2^2(1-2k_1 s)}{(\tan^2\gamma + k_1 k_2^2 s + 1)^2}\right]
$$

where $\tan\gamma=k_1 k_2\cos(k_2\theta+\phi)$ and $s=\sin(k_2\theta+\phi)$.

**Feasibility condition $|k_1 k_2^2|<1$.** When $|k_1 k_2^2|\ge 1$, $\dot\theta^2$ becomes negative for some $\theta$ (imaginary angular rate) or $a$ diverges; the shape is unflyable. This is the most important constraint of shape-based methods.

**Izzo's multi-revolution Lambert analogue (2006).** Given $r_1, r_2, \Delta\theta$ and a transfer time $t_f$, the multi-revolution Lambert problem generalizes to exponential sinusoids: with $k_2$ fixed, a one-parameter family (parameterized by initial flight-path angle $\gamma_1$) passes through both endpoints; feasibility reduces to a quadratic inequality in $\tan\gamma_1$, analytically bounding the feasible interval. This is a "low-thrust Lambert solver" for global optimization.

## Other Shape Function Families

**Inverse polynomial (Wall & Conway).** Wall and Conway (2010) proposed fifth- and sixth-order inverse polynomials $r(\theta)=1/\sum_{i} a_i\theta^i$, with more parameters and the ability to fit more general trajectories (including non-tangential thrust components), suitable for fixed-time rendezvous and interception. The price is the "curse of dimensionality" — grid search cost grows with order.

**Velocity hodograph method.** Represent the velocity vector $\boldsymbol{v}(t)$ (rather than position) as a shape function of time or true anomaly; recover position via $\dot{\boldsymbol{r}}=\boldsymbol{v}$ and thrust via the equations of motion. The advantage is direct handling of velocity boundary conditions, useful for rendezvous with velocity matching; the method has been applied to Earth–Mars, Earth–Mercury, asteroid and comet missions.

**Forbes spiral, Lawden spiral, logarithmic spiral.** Classic analytical families with fewer parameters and limited expressiveness, mostly used for teaching and quick screening.

## CR3BP-Modified Exponential Sinusoid (Vellutini & Avanzini 2014)

The classical exponential sinusoid assumes a single central body; for Earth–Moon $L_1$ transfers lunar gravity is non-negligible. Vellutini & Avanzini augment the sinusoid with a **deformation along the primary line**

$$
r(\theta) = k_0\,\exp\!\big[k_1\sin(k_2\theta+\phi) + k_3\theta\cos(k_4\theta+\phi)\big],
$$

where the amplitude $k_3\theta$ of the cosine term grows linearly with angular travel, deforming the spiral toward the Moon as it moves away from Earth. The thrust profile is re-derived under the CR3BP equations (still with tangential thrust), yielding shorter transfer times and lower $\Delta V$ than the classical form for the same boundary conditions. The method extends to Sun–Earth $L_1$ and $L_2$ by replacing $\mu$ with $1-\mu$.

## Amplitude-Phase Shape Functions for Libration-Point Periodic Orbits

For low-thrust transfers between libration-point periodic orbits (Halo, Lissajous), Chinese-language literature has introduced shape functions in which amplitude and phase vary polynomially, embedding the dynamics of the collinear libration neighbourhood — [center manifold](/en/glossary/dynamics/invariant-manifold/), [zero-velocity surfaces](/en/glossary/dynamics/zero-velocity-surface/) — into the parametrization. These express dynamically meaningful transfers with fewer parameters than generic shapes; the resulting initial guess is refined by [Gauss pseudospectral methods](/en/glossary/dynamics/direct-methods/) or HDDP.

## Practical Notes

- **Tangential thrust is the central simplification.** Shape-based methods typically assume $\alpha=\gamma$, eliminating thrust-direction freedom to obtain a closed form. When the true optimal has significant radial component (e.g. plane changes, de-orbit burns), shape-based solutions can be far from optimal.
- **Check feasibility first.** $|k_1 k_2^2|<1$ is necessary; analogous conditions exist for other shape families.
- **Most effective as an initial-guess generator.** Shape methods are most useful for producing feasible seeds for direct/indirect refinement; do not treat them as final engineering solutions.
- **Multi-revolution: scan over $k_2$.** Since $k_2$ controls the number of revolutions, global optimization often fixes $k_2$, optimizes the remaining parameters, then changes $k_2$ and repeats.
- **Re-derive under CR3BP.** Directly importing two-body shapes into the CR3BP distorts the result; a dual-primary correction term (as in Vellutini) and a re-derived thrust profile are required.

## Related Concepts

- [Direct Collocation](/en/glossary/dynamics/differential-correction/)
- [Differential Dynamic Programming (DDP/iLQR/HDDP)](/en/glossary/dynamics/hddp/)
- [Control Parametrization](/en/glossary/dynamics/control-parametrization/)
- [Gooding's Method and Lambert Solvers](/en/glossary/dynamics/goodings-method/)
- [Invariant Manifold](/en/glossary/dynamics/invariant-manifold/)
- [Zero-Velocity Surface](/en/glossary/dynamics/zero-velocity-surface/)
- [Flow Tube](/en/glossary/dynamics/flow-tube/)

## References

- Petropoulos, A. E., Longuski, J. M., 2004, "Shape-based algorithm for the automated design of low-thrust, gravity-assist trajectories," *J. Spacecr. Rockets* (the founding paper on exponential sinusoids).
- Izzo, D., 2006, "Lambert's problem for exponential sinusoids," *J. Guid. Control Dyn.*, DOI: 10.2514/1.21796 (the multi-revolution low-thrust Lambert problem and the $\tan\gamma_1$ feasibility interval).
- Wall, B. J., Conway, B. A., 2010, "Shape-based approach to low-thrust rendezvous trajectory design," *J. Guid. Control Dyn.* (inverse-polynomial shape functions).
- Vellutini, E., Avanzini, G., 2014, "Shape-Based Design of Low-Thrust Trajectories to Cislunar Lagrangian Point," *J. Guid. Control Dyn.*, DOI: 10.2514/1.G000165 (CR3BP-modified exponential sinusoid for Earth–Moon $L_1$).
- Conway, B. A. (ed.), 2010, *Spacecraft Trajectory Optimization* (textbook, chapter on shape-based methods).
- Research on Gauss pseudospectral methods for low-thrust transfers between libration-point periodic orbits (amplitude-phase shape functions).
