---
title: Shape Parameter (形状参数)
description: A family of parameters defining the trajectory geometry in shape-based methods — most notably the four parameters $[k_0, k_1, k_2, \phi]$ of the exponential sinusoid. In the low-thrust Lambert problem with a known departure velocity, the degrees of freedom reduce to the single shape parameter $k_2$, which is the core decision variable of the multi-revolution exponential-sinusoid Lambert problem.
keywords: Shape Parameter, exponential sinusoid, shape-based method, low-thrust trajectory, multi-revolution Lambert problem, Petropoulos, Izzo
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Shape Parameter
  desc: The exponential-sinusoid shape parameter — core decision variable of the multi-revolution low-thrust Lambert problem.
  image: /logo.png
og:
  title: Shape Parameter — Detailed Definition
  description: A family of parameters defining trajectory geometry in shape-based methods. The four parameters $[k_0, k_1, k_2, \phi]$ of the exponential sinusoid define the polar curve of a low-thrust trajectory; with a known departure velocity, the single parameter $k_2$ becomes the core decision variable of the multi-revolution exponential-sinusoid Lambert problem.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Shape Parameter — Detailed Definition
  description: The exponential-sinusoid shape parameter — core decision variable of the multi-revolution low-thrust Lambert problem.
  image: /logo.png
permalink: /en/glossary/fundamentals/shape-parameter/
---

# Shape Parameter (形状参数)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

In trajectory design via **shape-based methods**, shape parameters are the free parameters that define the geometric curve of a trajectory. Rather than corresponding to specific physical quantities, they parameterize the spacecraft's motion path by assuming the trajectory follows a particular analytic shape (such as an exponential sinusoid, polynomial curve, etc.); the thrust profile, time of flight, and segment propellant consumption are then recovered from the shape parameters via inverse dynamics (Petropoulos 2002; Izzo 2006).

The best-known shape-parameter system is Petropoulos's (2002) **exponential sinusoid**, defined by four parameters:

$$
r(\theta) = k_0 \exp\left[k_1 \sin(k_2\theta + \phi)\right]
$$

where $r$ is the radial distance and $\theta$ is the polar angle. The roles of the four parameters (Izzo 2006):

- $k_0$: controls the overall size of the orbit (distance scale), determining the maximum and minimum radial distance.

- $k_1$: controls the amplitude of the radial oscillation within each revolution: larger $k_1$ produces more pronounced spiral-like radial variation.

- $k_2$: controls the angular frequency, determining how many loops the trajectory makes per revolution. In Petropoulos's original formulation, $k_2$ is the **shape parameter** in the narrow sense.

- $\phi$: controls the phase, i.e., the initial phase angle of the trajectory at $\theta = 0$.

### Dynamical Feasibility

Under the assumption of purely tangential thrust, the thrust profile and the polar-angle time history are uniquely determined by the four parameters (Petropoulos 2002; Izzo 2006):

$$
\frac{F}{m} = \frac{\mu}{r^2} \cdot a(\theta), \qquad \dot{\theta}^2 = \frac{\mu}{r^3} \cdot f(\theta; k_0, k_1, k_2, \phi)
$$

Crucially, the trajectory is physically feasible (thrust always positive, no trajectory reversal) if and only if $|k_1 k_2^2| < 1$ (Izzo 2006).

## The Multi-Revolution Exponential-Sinusoid Lambert Problem

When the departure planet's velocity is known, the four parameters collapse to a single free parameter $k_2$, the **shape parameter**. Given $r_1$ (departure position), $r_2$ (target position), $\psi$ (transfer polar angle), and $N$ (number of revolutions), all possible exponential sinusoids connecting the two points form a single-parameter family $\mathcal{S}_{k_2}[r_1, r_2, \psi, N]$ parameterized by the departure flight-path angle $\gamma_1$ (Izzo 2006).

For those trajectories in the family that are dynamically feasible ($|k_1 k_2^2| < 1$), the time of flight $T$ is a monotonic function of $\gamma_1$, critical for the well-posedness and uniqueness of the multi-revolution exponential-sinusoid Lambert problem. The Lambert problem is solved via numerical quadrature and the Regula Falsi method: given $k_2$, $N$, and the desired time of flight, the unique corresponding exponential sinusoid can be found (Izzo 2006). In interplanetary global optimization, $k_2$ is one of the core decision variables: for example, in an Earth-to-Mars transfer, the N=0 optimal solution corresponds to $k_2 \approx 0.928$, N=1 to $k_2 \approx 0.523$, and N=2 to $k_2 \approx 0.236$ (Izzo 2006, Table 1).

## Relevance to Low-Thrust Transfer Design

The appeal of shape-based methods is that they reduce the complex optimal-control problem, normally requiring indirect methods (Pontryagin's Maximum Principle + multi-point boundary value problem), to a search over a small number of shape parameters. The downside, inevitable when the number of shape parameters is small (at most 4 for the exponential sinusoid), is that the represented trajectories are only a subset of all feasible trajectories (shape-restricted optimal, not globally optimal). Nonetheless, for preliminary design screening, seed generation for global optimization algorithms, and rapid scanning of large numbers of trajectory options, this is among the most practical compromises available (Izzo 2006; Vasile et al. 2007).

Regarding the **polynomial amplitude-phase assumption**: for low-thrust transfers near libration points, the amplitude and phase may be assumed to vary polynomially in time (linear or higher-order) to capture the spiral-transfer character. However, this is a heuristic model specific to certain orbit families: its generality does not match that of the exponential-sinusoid shape parameters (Petropoulos 2002).

## Related Concepts

- [Low-Energy Transfer](/en/glossary/orbits/low-energy-transfer/)

- [Invariant Manifold](/en/glossary/dynamics/invariant-manifold/)

- [CR3BP](/en/glossary/dynamics/cr3bp/)

- [Newton-Raphson Method](/en/glossary/dynamics/newton-raphson-method/)

## References

- Petropoulos, 2002, Ph.D. dissertation, Purdue University (original proposal of the exponential-sinusoid shape-based method)

- Izzo, 2006, Lambert's problem for exponential sinusoids, JGCD (systematic solution of the multi-revolution exponential-sinusoid Lambert problem; the role of the shape parameter $k_2$ and determination of optimal values)

- Vasile, Schütze et al., 2007 (extension of the exponential-sinusoid approach with shape-based methods using more free parameters, trading curve fidelity against search dimensionality)
