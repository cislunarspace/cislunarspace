---
title: Symplectic Integrator
description: A symplectic integrator is a class of numerical integration methods that preserve the symplectic geometric structure (symplectic form) of Hamiltonian systems, maintaining energy and other conserved quantities without systematic drift over long-term integration.
keywords: Symplectic Integrator, Hamiltonian System, Symplectic Integration, Energy Conservation, Celestial Mechanics Numerical Methods
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /en/background/math/symplectic-integrator/
---

# Symplectic Integrator

> Author: [天疆说](https://blog.csdn.net/qq_33254264)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A symplectic integrator is a class of numerical integration methods that preserve the symplectic geometric structure — the symplectic form — of Hamiltonian systems in phase space. For conservative systems in celestial mechanics (Hamiltonian systems), symplectic integrators maintain energy and other conserved quantities without systematic drift over long-term integration.

## Principles

### Hamiltonian Systems

The equations of motion for a Hamiltonian system are:

$$\dot{\mathbf{q}} = \frac{\partial H}{\partial \mathbf{p}}, \quad \dot{\mathbf{p}} = -\frac{\partial H}{\partial \mathbf{q}}$$

where $H(\mathbf{q}, \mathbf{p})$ is the Hamiltonian, $\mathbf{q}$ are generalized coordinates, and $\mathbf{p}$ are generalized momenta.

### Symplectic Geometry

The phase space flow of a Hamiltonian system is **symplectic**, preserving the symplectic 2-form $d\mathbf{q} \wedge d\mathbf{p}$. Standard numerical integrators (e.g., standard Runge-Kutta methods) do not preserve the symplectic structure, leading to systematic energy drift over long-term integration.

### Störmer-Verlet Method

The second-order symplectic integrator, also known as the leapfrog method:

$$\mathbf{p}_{n+1/2} = \mathbf{p}_n + \frac{\Delta t}{2} \cdot \frac{\partial H}{\partial \mathbf{q}}(\mathbf{q}_n)$$
$$\mathbf{q}_{n+1} = \mathbf{q}_n + \frac{\Delta t}{2} \cdot \left( \frac{\partial H}{\partial \mathbf{p}}(\mathbf{q}_n) + \frac{\partial H}{\partial \mathbf{p}}(\mathbf{q}_{n+1}) \right)$$
$$\mathbf{p}_{n+1} = \mathbf{p}_{n+1/2} + \frac{\Delta t}{2} \cdot \frac{\partial H}{\partial \mathbf{q}}(\mathbf{q}_{n+1})$$

### Splitting Methods

Decompose the Hamiltonian as $H = T(\mathbf{p}) + V(\mathbf{q})$ and integrate the kinetic and potential energy separately:

$$\mathbf{p} \leftarrow e^{\Delta t \cdot \nabla_{\mathbf{p}} T} \mathbf{p} \quad \text{(drift)}$$
$$\mathbf{q} \leftarrow e^{\Delta t \cdot \nabla_{\mathbf{q}} V} \mathbf{q} \quad \text{(kick)}$$

## Applications in Cislunar Space

- **Long-term orbit evolution simulation**: interplanetary trajectory prediction requiring $10^5$–$10^8$ revolution integration — symplectic integrators ensure no energy drift and reliable results
- **Multi-body problem integration**: long-term integration of the restricted three-body problem — symplectic integrators outperform standard RK methods
- **Solar system nested three-body problems**: long-term orbital evolution of Jupiter, Saturn, and other giant planets
- **Periodic orbit computation**: symplectic integrators can be used to search for periodic orbits via phase space analysis

## Comparison with Runge-Kutta Methods

| Property | Symplectic Integrator | Standard Runge-Kutta |
|:---|:---|:---|
| Energy conservation | Long-term preservation | Systematic drift |
| Phase space structure | Preserves symplectic form | Not preserved |
| Accuracy | Comparable at same order | Comparable at same order |
| Computational cost | Comparable | Comparable |
| Best for | Long-term integration, separable Hamiltonians | Short-term integration, non-conservative systems |

## Related Concepts

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)
- [Ephemeris Model](/en/glossary/dynamics/ephemeris-model/)
- [Shooting Method](./shooting-method/)

## References

- Hairer E, Lubich C, Wanner G. Geometric numerical integration[M]. Springer, 2006.
- Sanz-Serna J M, Calvo M P. Numerical Hamiltonian problems[M]. Chapman & Hall, 1994.
