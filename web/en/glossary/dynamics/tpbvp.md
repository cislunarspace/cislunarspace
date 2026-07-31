---
title: Two-Point Boundary Value Problem (TPBVP)
description: Detailed explanation of the TPBVP definition, mathematical formulation, solution methods in trajectory optimization, and relationship with shooting methods
keywords: TPBVP, boundary value problem, shooting method, trajectory optimization, indirect method, optimal control
author: Tianjiang Shuo
date: 2026-06-05
lastUpdated: 2026-06-05
wechatShare:
  title: Two-Point Boundary Value Problem (TPBVP)
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: "TPBVP Details | Core Mathematical Problem in Trajectory Optimization"
  description: Detailed explanation of the TPBVP definition, mathematical formulation, solution methods in trajectory optimization, and relationship with shooting methods
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "TPBVP Details | Core Mathematical Problem in Trajectory Optimization"
  description: Detailed explanation of the TPBVP definition, mathematical formulation, solution methods in trajectory optimization, and relationship with shooting methods
  image: /logo.png
permalink: /en/glossary/dynamics/tpbvp/
---

# Two-Point Boundary Value Problem (TPBVP)

> Author: Tianjiang Shuo
>
> Contributing Institution: School of Astronautics, Harbin Institute of Technology, National Key Laboratory of Rapid Design and Intelligent Swarm of Small Spacecraft

## Definition

A Two-Point Boundary Value Problem (TPBVP) is a class of differential equation boundary value problems where boundary conditions are imposed at both the initial and terminal ends of the integration interval. In spacecraft trajectory optimization, the TPBVP is the core mathematical problem of the indirect method: the optimal trajectory derived from Pontryagin's Maximum Principle must simultaneously satisfy initial state constraints and terminal state constraints, forming a characteristic two-point boundary value structure.

## Mathematical Description

### General Form

The general form of a TPBVP seeks to solve the differential equation:

$$\dot{\mathbf{y}} = \mathbf{f}(\mathbf{y}, t), \quad t \in [t_0, t_f]$$

subject to boundary conditions:

$$\boldsymbol{\psi}(\mathbf{y}(t_0), \mathbf{y}(t_f)) = \mathbf{0}$$

where $\mathbf{y}$ is the combined state and co-state vector, and $\boldsymbol{\psi}$ is the boundary constraint function.

### TPBVP in Trajectory Optimization

In spacecraft fuel-optimal trajectory design, the TPBVP takes the specific form:

- **State equations** (Hamilton's canonical equations):
$$\dot{\mathbf{r}} = \frac{\partial H}{\partial \boldsymbol{\lambda}_r}, \quad \dot{\mathbf{v}} = \frac{\partial H}{\partial \boldsymbol{\lambda}_v}, \quad \dot{m} = \frac{\partial H}{\partial \lambda_m}$$

- **Co-state equations**:
$$\dot{\boldsymbol{\lambda}} = -\frac{\partial H}{\partial \mathbf{x}}$$

- **Initial conditions**: $\mathbf{r}(t_0), \mathbf{v}(t_0), m(t_0)$ are known
- **Terminal conditions**: $\mathbf{r}(t_f) = \mathbf{r}_{target}, \mathbf{v}(t_f) = \mathbf{v}_{target}$
- **Unknowns**: Initial co-state $\boldsymbol{\lambda}(t_0)$ and terminal time $t_f$

## Solution Methods

### Shooting Method

The shooting method is the most intuitive approach to solving a TPBVP: guess the unknown initial co-state $\boldsymbol{\lambda}(t_0)$, integrate forward to the terminal time, and iteratively correct the guess until the terminal conditions are satisfied.

Define the shooting function as:

$$\mathbf{F}(\boldsymbol{\lambda}(t_0), t_f) = \begin{bmatrix} \mathbf{r}(t_f) - \mathbf{r}_{target} \\ \mathbf{v}(t_f) - \mathbf{v}_{target} \end{bmatrix}$$

Solve $\mathbf{F} = \mathbf{0}$ via Newton-Raphson iteration.

### Multiple Shooting

For long-duration transfers or complex dynamics, single-shooting methods suffer from severe numerical error accumulation. Multiple shooting divides the integration interval into sub-arcs, introducing matching conditions at each segment boundary, thereby reducing sensitivity to initial guesses.

### Numerical Difficulties

The main difficulties in solving a TPBVP include:

- Co-state variables lack intuitive physical meaning, making reasonable initial guesses difficult
- The shooting function may be highly nonlinear with multiple local minima
- Co-state normalization techniques reduce the search space from infinity to a unit sphere, significantly improving convergence

## Applications in Cislunar Space

In cislunar space missions, the TPBVP is the core computational object of indirect trajectory optimization methods. Low-energy transfers from near-Earth orbit to lunar orbit, NRHO orbit insertion and station-keeping, and multi-spacecraft cooperative rendezvous all reduce to solving TPBVPs. The introduction of techniques such as co-state normalization and homotopy methods has effectively improved the numerical solvability of TPBVPs.

## Related Concepts

- [Co-state Variables](/en/glossary/dynamics/co-state-variables/)
- [Co-state Normalization](/en/glossary/dynamics/co-state-normalization/)
- [Pontryagin's Maximum Principle](/en/glossary/dynamics/pontryagin-principle/)
- [Hamiltonian](/en/glossary/dynamics/hamiltonian/)
- [Shooting Method](/en/glossary/dynamics/shooting-method/)
- [Homotopy Method](/en/glossary/dynamics/homotopy-method/)
