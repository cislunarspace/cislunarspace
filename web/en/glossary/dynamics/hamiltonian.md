---
title: Hamiltonian
description: Detailed explanation of the Hamiltonian function in orbital mechanics, its mathematical formulation, and applications in optimal control and the three-body problem
keywords: Hamiltonian, orbital mechanics, optimal control, three-body problem, co-state variables, canonical equations
author: Tianjiang Shuo
date: 2026-06-05
lastUpdated: 2026-06-05
wechatShare:
  title: Hamiltonian
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: "Hamiltonian Details | Core Tool of Orbital Mechanics and Optimal Control"
  description: Detailed explanation of the Hamiltonian function in orbital mechanics, its mathematical formulation, and applications in optimal control and the three-body problem
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Hamiltonian Details | Core Tool of Orbital Mechanics and Optimal Control"
  description: Detailed explanation of the Hamiltonian function in orbital mechanics, its mathematical formulation, and applications in optimal control and the three-body problem
  image: /logo.png
permalink: /en/glossary/dynamics/hamiltonian/
---

# Hamiltonian

> Author: Tianjiang Shuo
>
> Contributing Institution: School of Astronautics, Harbin Institute of Technology, National Key Laboratory of Rapid Design and Intelligent Swarm of Small Spacecraft

## Definition

The Hamiltonian is a core scalar function in analytical mechanics and optimal control theory, constructed from generalized coordinates and generalized momenta (or state variables and co-state variables). In orbital mechanics, the Hamiltonian serves both as a physical quantity describing energy conservation and as a mathematical tool for establishing necessary conditions in optimal control. Pontryagin's Maximum Principle uses the Hamiltonian as its central framework to derive optimal control laws.

## Mathematical Description

### Hamiltonian in Classical Mechanics

In the Hamiltonian mechanics framework, the Hamiltonian is defined as:

$$H(\mathbf{q}, \mathbf{p}, t) = \mathbf{p}^T \dot{\mathbf{q}} - L(\mathbf{q}, \dot{\mathbf{q}}, t)$$

where $\mathbf{q}$ is the generalized coordinate, $\mathbf{p} = \partial L / \partial \dot{\mathbf{q}}$ is the generalized momentum, and $L$ is the Lagrangian. The canonical equations are:

$$\dot{\mathbf{q}} = \frac{\partial H}{\partial \mathbf{p}}, \quad \dot{\mathbf{p}} = -\frac{\partial H}{\partial \mathbf{q}}$$

When $H$ does not explicitly depend on time $t$, it is a conserved quantity corresponding to the total energy of the system.

### Hamiltonian in CR3BP

In the rotating frame of the Circular Restricted Three-Body Problem (CR3BP), the Hamiltonian is:

$$H = \frac{1}{2}(p_x^2 + p_y^2 + p_z^2) + y p_x - x p_y - \frac{1-\mu}{r_1} - \frac{\mu}{r_2}$$

where $p_x, p_y, p_z$ are canonical momenta, and $r_1, r_2$ are the distances from the spacecraft to the two primary bodies. The Jacobi constant $C = -2H$ is the only conserved quantity in CR3BP.

### Hamiltonian in Optimal Control

In optimal control problems, the Hamiltonian is constructed from the state equations, co-state variables, and the performance index:

$$H(\mathbf{x}, \boldsymbol{\lambda}, \mathbf{u}, t) = L(\mathbf{x}, \mathbf{u}, t) + \boldsymbol{\lambda}^T \mathbf{f}(\mathbf{x}, \mathbf{u}, t)$$

where $L$ is the instantaneous cost function, $\mathbf{f}$ is the right-hand side of the state equation, and $\boldsymbol{\lambda}$ is the co-state variable. The optimal control $\mathbf{u}^*$ extremizes $H$:

$$\frac{\partial H}{\partial \mathbf{u}} = 0 \quad \text{(for continuous control)}$$

## Applications in Cislunar Space

The Hamiltonian has broad applications in cislunar space missions:

- **Orbit design**: In the CR3BP framework, the Hamiltonian is directly related to the Jacobi constant; zero-velocity surfaces are determined by level sets of $H$, providing the foundation for orbit accessibility analysis
- **Fuel-optimal control**: In Pontryagin's Maximum Principle, the extremization condition of the Hamiltonian derives the optimal control law for thrust direction and magnitude, serving as the starting point for indirect methods in trajectory optimization
- **Invariant manifold analysis**: The symplectic structure of Hamiltonian systems guarantees phase space volume conservation, providing theoretical assurance for computing stable/unstable manifolds of periodic orbits such as DRO and NRHO

## Related Concepts

- [Pontryagin's Maximum Principle](/en/glossary/dynamics/pontryagins-maximum-principle/)
- [Co-state Variables](/en/glossary/dynamics/co-state-variables/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)
- [Action-Angle Variables](/en/glossary/dynamics/canonical-variables/)
- [Birkhoff-Gustavson Normal Form](/en/glossary/dynamics/birkhoff-gustavson-normal-form/)
