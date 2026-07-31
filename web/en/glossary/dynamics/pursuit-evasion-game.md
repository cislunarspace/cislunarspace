---
title: Spacecraft Pursuit-Evasion Game
description: A spacecraft pursuit-evasion game studies the adversarial maneuvering between a pursuing spacecraft and an evading spacecraft, with applications in space security, rendezvous and docking, and related fields.
wechatShare:
  title: Spacecraft Pursuit-Evasion Game
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
keywords: Spacecraft Pursuit-Evasion Game, Pursuit-Evasion Game, Orbital Pursuit-Evasion, Differential Game, Saddle-Point Strategy, Zero-Effort Miss
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: "Spacecraft Pursuit-Evasion Game | Orbital Dynamics"
  description: Studies the dynamics of adversarial maneuvering between pursuing and evading spacecraft, applied to space security situational awareness
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Spacecraft Pursuit-Evasion Game | Orbital Dynamics"
  description: Studies the dynamics of adversarial maneuvering between pursuing and evading spacecraft, applied to space security situational awareness
  image: /logo.png
permalink: /en/glossary/dynamics/pursuit-evasion-game/
---

# Spacecraft Pursuit-Evasion Game

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> This article is based on Zhang Chengming (2021) Research on Guidance Strategies for Spacecraft Pursuit-Evasion Games.

## Definition

The spacecraft pursuit-evasion game is a hot research topic in the field of space security. It studies the adversarial maneuvering problem between maneuverable on-orbit spacecraft. The pursuing spacecraft aims to approach the target spacecraft at minimal cost and complete a capture mission, while the evading spacecraft adopts corresponding strategies to avoid capture. The problem is essentially a bilateral control continuous dynamic game, which differs from cooperative rendezvous and docking in that it requires consideration of the strategic game between both pursuing and evading parties.

## Problem Classification

Spacecraft pursuit-evasion problems can be classified along different dimensions:

| Classification Criterion | Type |
| :--- | :--- |
| Orbit type | Near-circular orbit, elliptical orbit |
| Thrust form | Continuous low-thrust, impulsive thrust |
| Number of players | Two-player, multi-spacecraft |
| Objective function | Zero-sum, non-zero-sum |
| Game duration | Fixed-time, free-time |
| Relative distance | Long-range, short-range |

## Dynamic Modeling Methods

### CW Equation Description

Short-range pursuit-evasion problems typically use the CW equation (Clohessy-Wiltshire equation) to describe the relative motion of two spacecraft. The CW equation is applicable to near-circular orbits with relative distances much smaller than the semi-major axis.

### State Equations

In the LVLH coordinate frame, the spacecraft state vector is $\boldsymbol{X} = [x, y, z, \dot{x}, \dot{y}, \dot{z}]^T$, and the state equation is:
$$\dot{\boldsymbol{X}}_i = \boldsymbol{A}\boldsymbol{X}_i + T_i\boldsymbol{B}\boldsymbol{U}_i$$

where $\boldsymbol{U}_i = [\cos\alpha_i\cos\beta_i, \sin\alpha_i\cos\beta_i, \sin\beta_i]^T$ is the control variable, and $\alpha_i, \beta_i$ are thrust direction angles.

### Objective Function

A typical objective function for the free-time pursuit-evasion problem is:
$$J = J_p = -J_e = \int_0^{t_f} 1 \, dt$$

i.e., minimizing the pursuit-evasion time (for the pursuer) or maximizing it (for the evader).

## Solution Methods

### Differential Game Approach

Based on differential game theory, the pursuit-evasion problem is formulated as a zero-sum game. By deriving the necessary conditions for the saddle-point strategy, a two-point boundary value problem is obtained. Typical solution methods include:

- **Costate normalization**: Eliminates non-uniqueness of the saddle-point solution
- **Dimensionality reduction**: Converts the high-dimensional two-point boundary value problem into a lower-dimensional optimization problem
- **Semi-direct method**: Uses the analytical necessary conditions of one party to reduce problem dimensionality

### Deep Learning Methods

In recent years, deep neural networks have shown promising applications in solving pursuit-evasion problems:

- **DRD algorithm**: A dimensionality reduction-DNN-based approach for near-circular orbit pursuit-evasion problems
- **DNN-pseudospectral method**: A Radau pseudospectral method based on deep neural networks
- **Combined optimization methods**: Integrating traditional optimization algorithms with neural networks

### Numerical Solution Methods

- Shooting method and its improved variants
- Pseudospectral method
- Global optimization algorithms such as genetic algorithms and particle swarm optimization
- Hybrid methods combining multiple shooting with sequential quadratic programming

## Typical Application Scenarios

- **Space situational awareness**: Approach operations on non-cooperative targets (e.g., defunct satellites, space debris)
- **Space confrontation**: Strategy design in orbital offense-defense games
- **On-orbit servicing**: Relative maneuvering in satellite inspection, repair, and refueling missions
- **Rendezvous and docking**: Although primarily cooperative, game analysis can enhance mission safety

## Research Frontiers

- Multi-spacecraft pursuit-evasion problems (cooperation or competition within the pursuing or evading side)
- Pursuit-evasion problems considering orbital perturbations ($J_2$ perturbation, atmospheric drag, etc.)
- Applications of deep reinforcement learning in pursuit-evasion games
- Pursuit-evasion-defense three-body problems (complex game scenarios introducing a defending party)

## References

- Zhang Chengming. Research on Guidance Strategies for Spacecraft Pursuit-Evasion Games[D]. National University of Defense Technology, 2021. [in Chinese]
- Isaacs R. Differential Games: A Mathematical Theory with Applications to Warfare and Pursuit, Optimization and Control[M]. John Wiley & Sons, 1965.
- Lachner R, et al. Air Combat Analysis Using Differential Games[C]. AIAA Guidance, Navigation, and Control Conference, 1999.
