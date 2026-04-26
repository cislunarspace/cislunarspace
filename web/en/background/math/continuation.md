---
title: Arc-length Continuation
description: Arc-length continuation is a numerical method for tracing solution curves along a parameter branch, combined with shooting methods to effectively extend the solution range of periodic orbits.
keywords: Arc-length Continuation, Parameter Continuation, Arc-length Constraint, Periodic Orbit
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /en/background/math/continuation/
---

# Arc-length Continuation

> Author: [天疆说](https://blog.csdn.net/qq_33254264)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Arc-length continuation is a numerical method for tracing solution curves along a parameter branch. Rather than treating the parameter as a free variable to solve directly, an arc-length constraint is introduced in parameter space so that each iteration step advances along the arc direction, bypassing singular points (e.g., limit points) and enabling global tracing of solution branches.

## Principles

Arc-length continuation is typically used together with the shooting method. Let $\lambda$ be the parameter, $\mathbf{x}$ the state vector, and $\mathbf{F}(\mathbf{x}, \lambda) = 0$ the shooting equation. The arc-length constraint is:

$$G(\mathbf{x}, \lambda, s) = \|\mathbf{x} - \mathbf{x}_0\|^2 + (\lambda - \lambda_0)^2 - \Delta s^2 = 0$$

where $\Delta s$ is the prescribed arc-length step and $(\mathbf{x}_0, \lambda_0)$ is the current known solution.

**Predictor-corrector steps:**
1. **Predict**: advance one step along the tangent vector to get $(\mathbf{x}_p, \lambda_p)$
2. **Correct**: use $(\mathbf{x}_p, \lambda_p)$ as initial guess and solve the coupled system of shooting equation and arc-length constraint via Newton iteration
3. **Step size control**: adaptively adjust $\Delta s$ based on corrector convergence

## Applications in Cislunar Space

- **Halo orbit family continuation**: starting from planar Lyapunov orbits ($A_z = 0$), gradually increase $A_z$ amplitude, solving each new orbit with shooting at each step
- **DRO orbit branch tracing**: trace DRO configurations along the $A_x$ parameter to construct the complete periodic orbit branch diagram
- **NRHO family analysis**: trace the evolution of Earth-Moon L1/L2 NRHO branches as the mass parameter varies

Arc-length continuation extends the shooting method from single-orbit solving to systematic generation of entire orbit families, making it a core tool in libration point orbit design.

## Related Concepts

- [Shooting Method](./shooting-method/)
- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/dro/)
- [Near-Rectilinear Halo Orbit (NRHO)](/en/glossary/nrho/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

## References

- Zimovan E M. Characteristics and design strategies for near rectilinear halo orbits within the Earth-Moon system[D]. Purdue University, 2017.
- Seydel R. Practical bifurcation and stability analysis[M]. Springer, 2010.
