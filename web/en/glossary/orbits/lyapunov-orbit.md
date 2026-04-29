---
title: Lyapunov Orbit (Lyapunov 轨道)
description: Detailed explanation of Lyapunov orbit definition, planar periodic characteristics, relationship with Halo orbits, and fundamental role in libration point dynamics research
keywords: Lyapunov Orbit, libration point, planar periodic orbit, Halo orbit, three-body problem, orbital dynamics
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Lyapunov Orbit
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Lyapunov Orbit Explained | Cislunar Space
  description: Detailed explanation of Lyapunov orbit definition, planar periodic characteristics, relationship with Halo orbits, and fundamental role in libration point dynamics research
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Lyapunov Orbit Explained | Cislunar Space
  description: Detailed explanation of Lyapunov orbit definition, planar periodic characteristics, relationship with Halo orbits, and fundamental role in libration point dynamics research
  image: /logo.png
permalink: /en/glossary/orbits/lyapunov-orbit/
---

# Lyapunov Orbit

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A Lyapunov orbit is a **family of periodic orbits lying in the plane near a libration point**, named after Russian mathematician Aleksandr Lyapunov. Lyapunov orbits are the in-plane counterparts of Halo orbits -- when the $z$-direction amplitude of a Halo orbit approaches zero, the three-dimensional Halo orbit degenerates into a planar Lyapunov orbit. Lyapunov orbits serve as the foundation for studying libration point dynamics, providing the theoretical starting point for understanding more complex three-dimensional orbits.

## Key Elements

### Dynamic Characteristics of Lyapunov Orbits

Key characteristics of Lyapunov orbits in the CR3BP framework include:

- **Planar motion**: Lyapunov orbits lie strictly in the $xOy$ plane with no $z$-direction motion component
- **Periodicity**: The orbits are precisely closed periodic orbits, forming closed curves in the synodic reference frame
- **Symmetry**: Lyapunov orbits are symmetric about the $x$-axis; when crossing the $x$-axis, the $y$-direction velocity is zero
- **Orbit shape**: Near the libration point, the shape is approximately elliptical; as amplitude increases, the shape gradually distorts, with the side far from the libration point becoming pointed or twisted

Lyapunov orbit families are parameterized by the initial displacement $x_0$ on the $x$-axis (relative to the libration point). When $x_0$ is small, the orbit approximates linearized simple harmonic oscillation; as $x_0$ increases, nonlinear effects become significant and the orbit shape deviates from elliptical.

### Linearized Analysis of Lyapunov Orbits

Near the libration point, the linearized CR3BP equations of motion have the following eigenvalue structure in the plane:

$$\lambda_{1,2} = \pm \sigma, \quad \lambda_{3,4} = \pm i\omega$$

where $\sigma$ is a real eigenvalue (corresponding to stable/unstable manifolds) and $\omega$ is an imaginary eigenvalue (corresponding to periodic oscillation). Lyapunov orbits correspond to motion that excites only the imaginary eigenvalue mode:

$$\mathbf{x}(t) = A \cos(\omega t + \phi) \mathbf{e}_{\text{center}} + \text{nonlinear corrections}$$

where $\mathbf{e}_{\text{center}}$ is the direction vector of the center manifold.

### Relationship Between Lyapunov and Halo Orbits

There is a profound connection between Lyapunov and Halo orbits:

- **Degeneration relationship**: Halo orbits degenerate into Lyapunov orbits as the $z$-direction amplitude $A_z \to 0$
- **Bifurcation structure**: In the parameter space of orbit families, Lyapunov orbit families generate Halo orbit families through pitchfork bifurcation
- **Frequency relationship**: Lyapunov orbits involve only the in-plane oscillation frequency $\omega_{xy}$, while Halo orbits require $\omega_{xy} = \omega_z$
- **Stability differences**: Both are unstable, but the unstable mode structure of Lyapunov orbits is simpler (in-plane only)

### Numerical Computation of Lyapunov Orbits

Precise computation of Lyapunov orbits typically employs the following methods:

1. **Linearized initial guess**: Using linearized analysis to obtain an approximate analytical solution
2. **Differential correction**: Using a shooting method to correct initial conditions so the orbit precisely closes
3. **Parameter continuation**: Starting from small-amplitude orbits, gradually increasing amplitude, using each orbit as the initial guess for the next

## Application Value

Lyapunov orbits have value in both theoretical research and practical missions:

- **Foundation for dynamics research**: Lyapunov orbits are the foundation for understanding the phase space structure near libration points, and a prerequisite for learning about more complex orbits like Halo and Lissajous
- **Invariant manifold analysis**: The stable and unstable manifolds of Lyapunov orbits form the skeleton of low-energy transfer channels near libration points
- **Low-energy transfer design**: Using the invariant manifolds of Lyapunov orbits, low-energy transfer trajectories connecting different libration point regions can be designed
- **Poincaré section analysis**: Lyapunov orbits are commonly used as reference orbits in Poincaré sections for analyzing the global structure of phase space
- **Education and introduction**: As the simplest periodic orbit family at libration points, Lyapunov orbits are an ideal starting point for orbital mechanics education

## Related Concepts
- [Halo Orbit](/en/glossary/orbits/halo-orbit/)
- [Lissajous Orbit](/en/glossary/orbits/lissajous-orbit/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

## References
- Richardson D L. Analytic construction of periodic orbits about the collinear points[J]. Celestial Mechanics, 1980, 22(3): 241-253.
- Szebehely V. Theory of Orbits: The Restricted Problem of Three Bodies[M]. Academic Press, 1967.
- Gomez G, Masdemont J, Simo C. Quasihalo orbits associated with libration points[J]. Journal of the Astronautical Sciences, 1998.
