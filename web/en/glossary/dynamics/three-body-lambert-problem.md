---
title: Three-Body Lambert Problem
description: The boundary-value problem of finding a connecting trajectory between two given positions in a fixed time under the circular restricted three-body problem (CR3BP). No analytical solution exists; numerical methods are required; initial-guess construction is the central difficulty; and a single set of boundary conditions can admit multiple qualitatively distinct solutions. Covers the equivalence of L3BP / CR3BP Lambert problem labels, the fundamental differences from the two-body Lambert problem, initial-guess strategies (two-body solution + homotopic Newton iteration / genetic algorithms / Sukhanov-Prado two-level iteration), the multi-solution property, and the connection to invariant manifolds and Halo orbits.
keywords: Three-Body Lambert Problem, L3BP, CR3BP Lambert problem, three-body two-point boundary value problem, Halo orbit rendezvous, homotopic Newton method, invariant manifolds
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Three-Body Lambert Problem
  desc: The two-point boundary value problem in the CR3BP — no analytical solution, hard to initialise, and inherently multi-valued.
  image: /logo.png
og:
  title: Three-Body Lambert Problem — Definition and Detailed Discussion
  description: The boundary-value problem of finding a connecting trajectory between two given positions in a fixed time under the circular restricted three-body problem (CR3BP). No analytical solution exists; numerical methods are required; initial-guess construction is the central difficulty; and a single set of boundary conditions can admit multiple qualitatively distinct solutions.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Three-Body Lambert Problem — Definition and Detailed Discussion
  description: The boundary-value problem of finding a connecting trajectory between two given positions in a fixed time under the circular restricted three-body problem (CR3BP). No analytical solution exists; numerical methods are required; initial-guess construction is the central difficulty; and a single set of boundary conditions can admit multiple qualitatively distinct solutions.
  image: /logo.png
permalink: /en/glossary/dynamics/three-body-lambert-problem/
---

# Three-Body Lambert Problem

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Three-Body Lambert Problem (3BLP; also written L3BP — Lambert Three-Body Problem; in the CR3BP model, the CR3BP Lambert problem) is the extension of [Lambert's problem](/en/glossary/fundamentals/lamberts-problem/) to three-body dynamics: in the [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/), given an initial position $\vec r_1$ (at time $t_1$), a final position $\vec r_2$ (at time $t_2$), and the time of flight $\Delta t=t_2-t_1$, find the connecting trajectory and the endpoint velocities (Sun et al. 2017).

Because the CR3BP equations of motion are non-integrable and highly sensitive to initial conditions, the three-body Lambert problem has **no analytical solution** and can only be solved numerically; initial-guess construction is the central difficulty, and simple Newton-Raphson shooting barely converges for long-duration transfers.

## Fundamental Differences from the Two-Body Lambert Problem

| Aspect | Two-body Lambert | Three-body Lambert |
|---|---|---|
| Existence | Guaranteed by Lambert's theorem, at most $2N+1$ solutions | No analytical structure; existence decided numerically |
| Time-orbit mapping | $\Delta t$ depends only on $a,\,r_1+r_2,\,c$ | $\Delta t$ is coupled to orbit shape; Lambert's theorem fails |
| Multi-valuedness | At most $2N+1$ (by revolution count and short/long way) | May have **qualitatively distinct** solutions (short arc/long arc/lunar-flyby/multi-revolution/manifold-type) |
| Conserved quantities | Energy, angular momentum | [Jacobi constant](/en/glossary/dynamics/jacobi-integral/) $C_J$ (usable as an extra constraint or a free parameter) |
| Plane | Automatically determined by the two vectors | Two vectors do not uniquely fix the plane (3D transfers are common) |
| Solution method | One transcendental equation + standard algorithms | Numerical shooting + differential correction, depends on a good initial guess |

## Initial-Guess Strategies

Solving the three-body Lambert problem is essentially a two-endpoint shooting problem. Common initial-guess strategies:

- **Two-body solution + homotopic iteration**: obtain the two-body Lambert solution $\vec v_1^{(2B)}$ as the initial guess, then introduce a homotopy parameter $\lambda\in[0,1]$ that continuously deforms the dynamics from two-body to CR3BP ([homotopy method](/en/glossary/dynamics/homotopy-method/)), with Newton-Raphson convergence at each step. This method is markedly superior to direct shooting for long-duration transfers (Sun et al. 2017).

- **Genetic algorithm for a reference trajectory**: use a GA to globally search a coarse position-time sequence that approximately satisfies the boundary conditions, then refine by homotopic Newton iteration; resolves the poor convergence of long-duration Halo-to-Halo transfers (Sun et al. 2017).

- **Sukhanov-Prado two-level iteration**: in the Hill model, simultaneously correct the initial and final position vectors; converges well but cannot guarantee convergence to the desired solution (because three-body Lambert is multi-valued).

- **Invariant-manifold patching**: for transfers between libration-point orbits, recast the problem as the patching of the unstable manifold of one Halo/Lissajous orbit with the stable manifold of another on a [Poincaré section](/en/glossary/fundamentals/synodic-frame/), then refine via three-body Lambert.

## Multi-Solution Property

A single set $(\vec r_1,\vec r_2,\Delta t)$ can correspond to multiple qualitatively distinct transfer trajectories: a direct short arc, a long arc via lunar flyby, a multi-revolution transfer around Earth before arrival, or a low-energy transfer exploiting solar perturbation. This is a direct consequence of CR3BP nonlinear dynamics and contrasts with the two-body Lambert bound of $2N+1$. In practice one usually:

- bounds the [Jacobi constant](/en/glossary/dynamics/jacobi-integral/) $C_J$ to clip the search space to an energetically feasible subset;

- fixes the revolution direction (around the Moon / Earth / Sun-Earth $L_1$);

- runs [differential correction](/en/glossary/dynamics/differential-correction/) with multiple initial guesses in parallel and selects the minimum-$\Delta v$ solution.

For [Halo orbit computation](/en/glossary/dynamics/halo-orbit-computation/) and libration-point rendezvous, multi-valuedness is both nuisance (filtering required) and opportunity (an extra candidate may save fuel).

## Application Notes

- **Libration-point rendezvous and docking**: transfers between two spacecraft in different phases of the same Halo orbit, or between Halos of different amplitudes — a foundational tool for building a cislunar $L_2$ space station (Sun et al. 2017).

- **Low-energy Earth-Moon transfer**: design of WSB and manifold-patching transfers exploiting solar perturbation.

- **Multi-arc patching**: decompose a cislunar transfer into several three-body Lambert arcs, solve each independently, then patch.

- **No analytical shortcut**: every application needs a stable numerical pipeline and a good initial guess — the biggest practical difference from two-body Lambert.

## Related Concepts

- [Lambert's Problem](/en/glossary/fundamentals/lamberts-problem/)

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

- [Jacobi Constant](/en/glossary/dynamics/jacobi-integral/)

- [Libration Point](/en/glossary/fundamentals/libration-point/)

- [Halo Orbit Computation](/en/glossary/dynamics/halo-orbit-computation/)

- [Differential Correction](/en/glossary/dynamics/differential-correction/)

- [Homotopy Method](/en/glossary/dynamics/homotopy-method/)

- [Two-Point Boundary Value Problem](/en/glossary/dynamics/tpbvp/)

## References

- Sun Yu, Zhang Jin, Luo Yazhong, 2017, Rendezvous Trajectory Design of Libration Points Based on Three-body Lambert Algorithm (Earth-Moon $L_2$ Halo-to-Halo rendezvous; genetic algorithm + homotopic Newton iteration).

- Vallado, 2022, Fundamentals of Astrodynamics and Applications, §7.6 (the two-body Lambert problem as the parent concept and contrast).

- Szebehely, 1967, Theory of Orbits: The Restricted Problem of Three Bodies (the CR3BP framework).
