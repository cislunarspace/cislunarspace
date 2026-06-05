---
title: Pursuit-Evasion-Defense Game
description: Pursuit-evasion-defense is a three-player extension of spacecraft pursuit-evasion games, introducing a defender into the game, applied to space offense-defense confrontation and mission planning research.
wechatShare:
  title: Pursuit-Evasion-Defense Game
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
keywords: pursuit-evasion-defense, three-player game, spacecraft pursuit-evasion, fuzzy comprehensive evaluation, zero-effort miss
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: Pursuit-Evasion-Defense Game | Game Extension
  description: A three-player pursuit-evasion game model introducing a defender, applied to space offense-defense strategy design
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Pursuit-Evasion-Defense Game | Game Extension
  description: A three-player pursuit-evasion game model introducing a defender, applied to space offense-defense strategy design
  image: /logo.png
permalink: /en/glossary/other/pursuit-evasion-defense/
---

# Pursuit-Evasion-Defense Game

> Author: [Tianjiang Talk](https://blog.csdn.net/qq_33254264)
>
> Based on Zhang Chengming (2021) "Research on Guidance Strategies for Spacecraft Pursuit-Evasion Games" (in Chinese).

## Definition

The pursuit-evasion-defense game is a three-player extension of the classical two-player pursuit-evasion game. In the pursuit-evasion-defense problem, in addition to the pursuer and the evader, there is a defender participating in the game. The defender's objective is to assist the evader while avoiding capture by the pursuer, or to protect high-value assets.

The motivation for this problem is as follows: the evader (typically a high-value spacecraft) consumes substantial fuel when executing evasion maneuvers, placing high demands on spacecraft design and launch vehicle capability. Introducing a defender can help the evader accomplish defensive tasks while reducing the evader's fuel consumption.

## Problem Model

### Three-Player Roles

| Role | Objective | Typical Scenario |
|:---|:---|:---|
| Pursuer | Capture the evader | Enemy interceptor, pursuit satellite |
| Evader | Avoid capture | High-value satellite, space station |
| Defender | Assist the evader in evading the pursuer | Escort satellite, defense system |

### Game Structure

The pursuit-evasion-defense problem can be decomposed into two two-player zero-sum subgames:
1. Pursuer vs. Evader (pursuit-evasion game)
2. Defender vs. Pursuer (offense-defense game)

The complexity of the three-player game lies in the coupling of strategies among all parties, requiring coordinated multi-agent decision-making.

## Solution Methods

### Modeling Based on Zero-Effort Miss (ZEM)

Zhang Chengming (2021) proposed a modeling approach for the pursuit-evasion-defense problem based on Zero-Effort Miss (ZEM):

1. Establish relative motion equations between the pursuer and the evader, and between the pursuer and the defender
2. Compute in real time the ZEM of the pursuer relative to the evader and to the defender
3. Assess the threat level to the pursuer based on ZEM values
4. Design the pursuer's guidance strategy to capture the evader while evading the defender

### Fuzzy Comprehensive Evaluation Method

To address uncertainty in the pursuit-evasion-defense problem, a fuzzy comprehensive evaluation method is employed:

1. **Factor set establishment**: Establish a factor set influencing the pursuer's decisions $\{ZEM_p, ZEM_d, \dot{r}, fuel, \ldots\}$
2. **Membership functions**: Establish membership functions mapping each factor to threat levels
3. **Weight determination**: Determine the weight allocation for each factor
4. **Fuzzy evaluation**: Obtain fuzzy evaluation results for the threat level to the pursuer
5. **Guidance decision**: Select the corresponding control strategy based on the threat level

### Collaborative Optimization

The defender's mission planning must consider:
- Distributed online mission planning algorithms
- Nash equilibrium-based task allocation
- Collaborative optimization of orbital maneuvers

## Technical Challenges

### Cooperation and Competition Assessment

The defender and evader have a cooperative relationship, but defensive resources are limited. It is necessary to evaluate the cooperative or competitive relationships among different parties, as well as the threat level posed to others.

### Dimensionality Explosion in Solution Space

The problem dimensionality of a three-player game is far higher than that of a two-player game, making the existence of saddle-point strategies and solution methods significantly more complex.

### Real-Time Requirements

Practical applications require real-time or near-real-time decision-making, placing high demands on computational efficiency.

## Application Scenarios

- **Satellite protection**: High-value satellites equipped with defense systems to counter hostile approaches
- **Space station safety**: Space station defense systems protecting crew and facilities
- **Anti-satellite operations**: Strategic games between offense and defense parties
- **Multi-agent coordination**: Offense-defense mission planning for UAV swarms

## Research Frontiers

- Multi-spacecraft pursuit-evasion-defense problems (multi-party participation)
- Stochastic factors and uncertainty modeling
- Application of deep reinforcement learning in multi-party games
- Robustness analysis of pursuit-evasion-defense strategies

## References

- Zhang Chengming. Research on Guidance Strategies for Spacecraft Pursuit-Evasion Games[D]. National University of Defense Technology, 2021. (in Chinese)
- Li J, et al. Pursuit-Evasion-Defense Game with Defender[C]. AIAA Guidance, Navigation, and Control Conference, 2015.
- Liu Y, et al. Distributed Task Planning for Spacecraft Formation with Fuzzy Evaluation[C]. IEEE Transactions on Aerospace and Electronic Systems, 2018.
