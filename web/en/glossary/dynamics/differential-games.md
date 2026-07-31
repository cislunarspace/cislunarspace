---
title: Differential Games (Differential Games)
description: Differential games is a mathematical theory describing multi-party gaming problems in continuous dynamic systems, widely applied in spacecraft pursuit-evasion, economics, and military confrontation.
keywords: Differential Games, Pursuit-Evasion Game, Zero-Sum Game, Saddle-Point Strategy, Optimal Control
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: "Differential Games | Game Dynamics"
  description: Mathematical theory describing multi-party gaming problems in continuous dynamic systems, applied to spacecraft pursuit-evasion and guidance law design
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Differential Games | Game Dynamics"
  description: Mathematical theory describing multi-party gaming problems in continuous dynamic systems, applied to spacecraft pursuit-evasion and guidance law design
  image: /logo.png
permalink: /en/glossary/dynamics/differential-games/
wechatShare:
  title: "Cislunar Space Guide | Differential Games (Differential Games)"
  desc: "Differential games is a mathematical theory describing multi-party gaming problems in continuous dynamic systems, widely applied in spacecraft pursuit-evasion, economics, and military confrontation."
  image: "/logo.png"
---

# Differential Games (Differential Games)

> Author: Tianjiang Shuo
>
> This article is compiled from 张乘铭 (2021) "航天器追逃博弈制导策略研究"

## Definition

Differential games is a branch of operations research and control theory that studies confrontation or cooperation among multiple decision-makers (players) in continuous-time dynamic systems. When the objectives of opposing parties are completely opposite (one party's gain is the other party's loss), it is called a zero-sum differential game. Differential game theory provides a rigorous mathematical modeling and solution framework for spacecraft pursuit-evasion, missile interception, and UAV air combat problems.

## Historical Development

- **1965**: American RAND Corporation mathematician Isaacs published a monograph, establishing the mathematical theoretical foundation of differential games
- **1971**: Friedman used discrete game approximation sequences to define differential games, proving saddle point existence conditions
- **1970s-1980s**: Differential games were widely applied in military fields (air combat, missile interception)
- **Recent years**: Combined with fuzzy control, reinforcement learning, and deep neural networks to solve high-dimensional complex game problems

## Core Elements

### Basic Classification

Differential games can be classified according to different dimensions:

| Classification Dimension | Types |
| :--- | :--- |
| Information Structure | Complete information, Incomplete information |
| Stochasticity | Deterministic, Stochastic |
| Number of Players | Two-player, Multi-player |
| Objective Function | Zero-sum, Non-zero-sum |

### Key Concepts

- **Saddle-point strategy**: In zero-sum differential games, neither party can unilaterally improve their strategy at the saddle point
- **Payoff function**: A performance metric measuring game outcomes; in zero-sum games, one party's loss equals the other's gain
- **Co-state variables**: Auxiliary variables accompanying state variable changes, used to derive necessary conditions for optimality
- **Two-point boundary value problem**: The mathematical problem form to which pursuit-evasion games are transformed, representing the core difficulty in solving saddle-point strategies

## Relationship with Optimal Control

Differential games are closely related to optimal control. When there is only one decision-maker in a game, differential games degenerate into optimal control problems. The Maximum Principle of optimal control can be viewed as a special case of differential games. In pursuit-evasion problems, saddle-point guidance laws derived from differential game theory are formally consistent with guidance laws designed based on optimal control theory.

## Application Domains

- **Spacecraft pursuit-evasion games**: Design of adversarial maneuvering strategies in orbital rendezvous and proximity operations
- **Missile interception**: Guidance law design for air-to-air and air-to-ground missiles
- **UAV swarm coordination**: Game decision-making for multi-agent systems
- **Deep space exploration**: Mission planning for spacecraft approaching asteroids and comets

## References

- Isaacs R. Differential Games: A Mathematical Theory with Applications to Warfare and Pursuit, Optimization and Control[M]. John Wiley & Sons, 1965.
- Friedman A. Differential Games[M]. American Mathematical Society, 1971.
- 张乘铭. 航天器追逃博弈制导策略研究[D]. 国防科技大学, 2021.
