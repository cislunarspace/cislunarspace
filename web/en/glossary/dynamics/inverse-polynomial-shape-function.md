---
permalink: /en/glossary/dynamics/inverse-polynomial-shape-function/
title: Shape-Based Method
description: A class of trajectory design techniques that parameterize the geometric shape of a low-thrust orbit with analytical functions (inverse polynomials, exponential sinusoids, Fourier series, etc.), solving for the thrust profile that achieves the prescribed shape. The resulting approximate trajectory serves as an initial guess for subsequent numerical optimization (direct or indirect methods).
---

# Shape-Based Method

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A shape-based method prescribes the geometry of a low-thrust trajectory—typically the radial distance $r(t)$ or the polar angle $\theta(t)$ as a function of time—using a parametric analytical function. From the prescribed shape and the equations of motion, the required thrust acceleration profile $\mathbf{a}_T(t)$ is solved analytically. This bypasses the full optimal control problem and provides a fast, approximate trajectory that can serve as an initial guess for a higher-fidelity numerical optimization (direct collocation or indirect shooting) (Petropoulos and Longuski 2004).

Shape-based methods are especially useful in the **initial design phase** of low-thrust missions, where the design space is large and good initial guesses for NLP solvers are hard to come by.

## Inverse Polynomial Shape Function

The **inverse polynomial shape function** specifies the trajectory radius as:

$$
r(\theta) = \frac{1}{a_0 + a_1\theta + a_2\theta^2 + \dots + a_n\theta^n}
$$

where $\theta$ is the polar angle (often the true anomaly or a generalized angular coordinate). The coefficients $a_i$ are design variables chosen to satisfy boundary conditions—initial and final positions and velocities—while keeping the thrust magnitude within admissible limits.

The term "inverse" reflects the representation $r = 1/P(\theta)$ rather than $r = P(\theta)$, which has advantages for representing trajectories with large radial excursions (since $r \to \infty$ corresponds to $P(\theta) \to 0$, a well-behaved limit).

The thrust profile is derived by substituting the shape into the polar equations of motion:

$$
\ddot{r} - r\dot{\theta}^2 = -\frac{\mu}{r^2} + a_{T,r}, \qquad r\ddot{\theta} + 2\dot{r}\dot{\theta} = a_{T,\theta}
$$

rearranging to solve for $a_{T,r}(\theta)$ and $a_{T,\theta}(\theta)$.

## Other Shape Functions

| Shape type | Functional form | Typical use |
|---|---|---|
| Inverse polynomial | $r = 1 / \sum a_i \theta^i$ | Large radial variation, Earth-departure spirals |
| Exponential sinusoid | $r = k_0 \exp[k_1 \sin(k_2\theta + \phi)]$ | Low-thrust spiral transfers (Petropoulos and Longuski) |
| Fourier series | $r(\theta) = a_0 + \sum(a_n\cos n\theta + b_n\sin n\theta)$ | Periodic orbits, resonant transfers |
| Polynomial (direct) | $r(\theta) = \sum a_i \theta^i$ | Short arcs, small radial variation |
| Velocity-based shaping | Prescribe $v_r(\theta)$, $v_\theta(\theta)$ directly | Eclipse-conscious or constrained-thrust-direction designs |

## Why Shape-Based?

1. **Speed:** Analytical thrust derivation, no NLP solve needed for the shape determination phase.
2. **Feasibility gating:** Designs that violate thrust magnitude limits or produce retrograde motion are rejected early, without NLP cost.
3. **Guaranteed boundary satisfaction:** By design, the shape satisfies the endpoint position and velocity constraints.
4. **Initial guess quality:** The shape-based trajectory is usually in the convergence basin of a high-fidelity optimizer, dramatically reducing the total solve time.

The limitation: shape-based methods enforce a pre-chosen functional form that may not include the true optimal trajectory. They are a starting point, not a substitute for rigorous optimization.

## Application to Cislunar Trajectories

For Earth-Moon low-thrust transfers, inverse polynomial and exponential sinusoid shapes have been used to generate initial guesses for direct collocation solvers (Gauss pseudospectral method, Hermite-Simpson). The large radial variation from LEO altitude (~300 km) to lunar distance (~384,000 km) naturally suits the inverse polynomial form.

For transfers between periodic orbits in the CR3BP (e.g., halo-to-DRO), the shape is typically specified in rotating-frame coordinates and solved for the required thrust in the synodic frame, then transformed to the inertial frame for propagation.

## Related Concepts

- [Direct Collocation Methods for Optimal Control](/en/glossary/dynamics/hermite-simpson-method/)

- [Gauss Pseudospectral Method (GPM)](/en/glossary/dynamics/gpm/)

- [Indirect Methods for Optimal Control](/en/glossary/dynamics/indirect-methods/)

- [Low-Thrust Propulsion](/en/glossary/fundamentals/ep/)

- [Chebyshev Polynomial](/en/glossary/fundamentals/chebyshev-polynomial/)

## References

- Petropoulos and Longuski, 2004, *Shape-Based Algorithm for Automated Design of Low-Thrust, Gravity-Assist Trajectories*, J. Spacecraft and Rockets 41(5):787-796 (exponential sinusoid shape; automated gravity-assist sequencing)

- Wall and Conway, 2009, *Shape-Based Approach to Low-Thrust Rendezvous Trajectory Design*, J. Guidance 32(1):95-101 (polynomial and Fourier shape functions for rendezvous)

- Taheri and Abdelkhalik, 2012, *Shape-Based Approximation of Constrained Low-Thrust Space Trajectories Using Fourier Series*, J. Spacecraft and Rockets 49(3):535-546

- De Pascale and Vasile, 2006, *Preliminary Design of Low-Thrust Multiple Gravity-Assist Trajectories*, J. Spacecraft and Rockets 43(5):1065-1076 (inverse polynomial and other shape parameterizations)

- Gondelach and Noomen, 2015, *Hodographic-Shaping Method for Low-Thrust Interplanetary Trajectory Design*, J. Spacecraft and Rockets 52(3):728-738
