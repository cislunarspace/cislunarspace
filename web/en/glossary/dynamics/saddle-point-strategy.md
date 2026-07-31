---
title: Saddle-Point Strategy
description: "The saddle-point strategy is the optimal strategy combination for both players in a zero-sum differential game, where any unilateral deviation leads to a decrease in one's own payoff."
wechatShare:
  title: Saddle-Point Strategy
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
keywords: Saddle-Point Strategy, Saddle Point, Differential Game, Zero-Sum Game, Optimal Control, Pursuit-Evasion Game
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: "Saddle-Point Strategy | Game Theory"
  description: The optimal strategy combination in zero-sum differential games; the optimal control law for both pursuer and evader in pursuit-evasion games
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Saddle-Point Strategy | Game Theory"
  description: The optimal strategy combination in zero-sum differential games; the optimal control law for both pursuer and evader in pursuit-evasion games
  image: /logo.png
permalink: /en/glossary/dynamics/saddle-point-strategy/
---

# Saddle-Point Strategy

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> This article is based on Zhang Chengming (2021) Research on Guidance Strategies for Spacecraft Pursuit-Evasion Games.

## Definition

In zero-sum differential games, the saddle-point strategy refers to the optimal strategy combination for both players. When both players adopt the saddle-point strategy, any unilateral change in strategy leads to a decrease in payoff (for the pursuer) or an increase (for the evader). The saddle point represents the equilibrium state of the game and is the solution to such problems.

## Mathematical Formulation

### Zero-Sum Game Framework

Let the pursuer's control be $\boldsymbol{U}_p$ and the evader's control be $\boldsymbol{U}_e$, with the performance index (payoff function) being $J$. The pursuer minimizes $J$ while the evader maximizes $J$:

$$\min_{\boldsymbol{U}_p} \max_{\boldsymbol{U}_e} J = \max_{\boldsymbol{U}_e} \min_{\boldsymbol{U}_p} J = J^*$$

### Saddle-Point Conditions

The strategy pair $(\boldsymbol{U}_p^*, \boldsymbol{U}_e^*)$ is a saddle point if and only if:
$$J(\boldsymbol{U}_p^*, \boldsymbol{U}_e) \leq J(\boldsymbol{U}_p^*, \boldsymbol{U}_e^*) \leq J(\boldsymbol{U}_p, \boldsymbol{U}_e^*)$$

holds for all admissible controls $\boldsymbol{U}_p, \boldsymbol{U}_e$.

## Saddle-Point Strategy in Spacecraft Pursuit-Evasion

### Problem Formulation

Based on differential game theory, the spacecraft pursuit-evasion problem is transformed into a two-point boundary value problem. According to the minimum principle, the saddle-point control strategy satisfies:

$$\frac{\partial H}{\partial \boldsymbol{U}_p} = 0, \quad \frac{\partial^2 H}{\partial \boldsymbol{U}_p^2} \geq 0$$
$$\frac{\partial H}{\partial \boldsymbol{U}_e} = 0, \quad \frac{\partial^2 H}{\partial \boldsymbol{U}_e^2} \leq 0$$

where $H$ is the Hamiltonian.

### Control Equations

For the near-circular orbit pursuit-evasion problem described by the CW equation, the saddle-point control strategy is:

$$\sin\alpha_i^* = \kappa \frac{\lambda_{i5}}{\sqrt{\lambda_{i4}^2 + \lambda_{i5}^2}}$$
$$\cos\alpha_i^* = \kappa \frac{\lambda_{i4}}{\sqrt{\lambda_{i4}^2 + \lambda_{i5}^2}}$$

where $\kappa = -1$ (pursuer) or $+1$ (evader), and $\lambda_i$ are the costate variables.

### Key Properties

- **Consistency**: The pursuer and evader have the same saddle-point thrust direction
- **Duality**: The costate variables of both parties satisfy $\lambda_p(t) + \lambda_e(t) = 0$
- **Reachability set boundary**: The trajectory corresponding to the saddle-point strategy lies on the reachability set boundary

## Solution Challenges

### Initial Value Sensitivity

The solution of the two-point boundary value problem is highly sensitive to the initial guess of costate variables. Different initial values may lead to convergence to different solutions or divergence.

### Computational Efficiency

Traditional numerical optimization methods (shooting method, Newton iteration, etc.) have relatively low computational efficiency, making them difficult to satisfy real-time application requirements.

### Non-Uniqueness

The same initial state may correspond to multiple feasible costate variable combinations. Normalization and other methods are needed to eliminate the non-uniqueness.

## Advances in Solution Methods

### Costate Variable Normalization

By normalizing the costate variables, infinitely many solution sets are mapped onto a unit sphere, yielding a unique representation.

### Deep Learning Methods

- **DRD algorithm**: Uses deep neural networks to fit the mapping from initial states to saddle-point solutions
- **DNN-pseudospectral method**: Neural network outputs serve as initial guesses for pseudospectral methods, accelerating convergence

### Combined Optimization Methods

Combining traditional optimization algorithms (genetic algorithms, sequential quadratic programming) with neural networks to improve solution accuracy and efficiency.

## Relationship with Game Theory Concepts

| Concept | Meaning |
| :--- | :--- |
| Saddle point | The equilibrium solution of the game |
| Minimax principle | Evader maximizes, pursuer minimizes |
| Payoff function | Function of pursuit-evasion time |
| Strategy | Pursuit/evolution control sequence |

## Application Value

The saddle-point strategy is the core solution concept for spacecraft pursuit-evasion games, providing a theoretical foundation for:

- Optimal maneuver strategy design in space confrontation
- Approach trajectory planning for non-cooperative targets in rendezvous and docking
- Guidance law design for missile interception

## References

- Isaacs R. Differential Games: A Mathematical Theory with Applications to Warfare and Pursuit, Optimization and Control[M]. John Wiley & Sons, 1965.
- Zhang Chengming. Research on Guidance Strategies for Spacecraft Pursuit-Evasion Games[D]. National University of Defense Technology, 2021. [in Chinese]
- Basar T, Olsder G J. Dynamic Noncooperative Game Theory[M]. Academic Press, 1999.
