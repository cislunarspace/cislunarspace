---
title: Multi-Objective Monte Carlo Tree Search (MO-MCTS)
description: A detailed analysis of the MO-MCTS algorithm principles, its application in cislunar space situational awareness architecture design, and its advantages
wechatShare:
  title: Multi-Objective Monte Carlo Tree Search (MO-MCTS)
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
keywords: Multi-Objective Monte Carlo Tree Search, MO-MCTS, Monte Carlo Tree Search, Multi-Objective Optimization, Cislunar Space, Architecture Design, Artificial Intelligence, Reinforcement Learning
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: Multi-Objective Monte Carlo Tree Search (MO-MCTS)
  description: A detailed analysis of the MO-MCTS algorithm principles and its application in cislunar space situational awareness architecture design
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Multi-Objective Monte Carlo Tree Search (MO-MCTS)
  description: A detailed analysis of the MO-MCTS algorithm principles and its application in cislunar space situational awareness architecture design
  image: /logo.png
permalink: /en/glossary/dynamics/mo-mcts/
---

# Multi-Objective Monte Carlo Tree Search (MO-MCTS)

## Definition

Multi-Objective Monte Carlo Tree Search (MO-MCTS) is an algorithmic framework that extends Monte Carlo Tree Search to multi-objective optimization problems. MO-MCTS evaluates multiple objective functions simultaneously in each simulation, balancing exploration and exploitation through Upper Confidence Bound (UCB)-like formulas. It is applicable to optimization problems with discrete decision spaces and complex constraints.

## Algorithm Principles

The core of MO-MCTS is modifying the four standard MCTS steps — Selection, Expansion, Simulation, and Backpropagation — to handle multiple objectives:

### Selection Phase

A multi-objective UCB formula is used to select child nodes:

$$UCB_i = \bar{X}_i + C \sqrt{\frac{\ln N}{n_i}}$$

where $\bar{X}_i$ is the average reward for the $i$-th objective, $N$ is the parent node visit count, $n_i$ is the child node visit count, and $C$ is the exploration constant.

### Expansion and Simulation

New decision nodes are added during the expansion phase, and reward values for all objective functions are computed simultaneously during the simulation phase.

### Backpropagation Phase

Multi-objective reward values are backpropagated to update statistics for all nodes along the path.

## Application in Cislunar SSA Architecture Design

Klonowski (2025) was the first to apply MO-MCTS to cislunar space situational awareness architecture design, optimizing the configuration of distributed observation satellites. The objective functions include:

1. Maximizing coverage of cislunar transfer trajectories
2. Maximizing coverage of critical volume space
3. Minimizing total architecture cost (number and capability of observation satellites)

This method can efficiently search for Pareto-optimal architecture configurations in the discretized decision space, overcoming the limitations of traditional gradient-based optimization methods on non-convex, multi-modal problems.

## Key Elements

### Mathematical Definition

MO-MCTS models the multi-objective optimization problem as a multi-objective Markov decision process (MO-MDP) and searches for Pareto-optimal solutions in the discrete decision space via tree search.

### Key Properties

MO-MCTS combines the adaptive sampling advantage of MCTS with the trade-off analysis capability of multi-objective optimization, enabling it to handle problems with expensive objective function evaluations.

### Application Scenarios

MO-MCTS is suitable for problems with discrete decision spaces, computationally expensive objective functions, and the need for Pareto front approximation, such as satellite architecture design and mission planning.

## Related Concepts

- [Pareto Optimality](/en/glossary/dynamics/pareto-optimal/)
- [NSGA II](/en/glossary/dynamics/nsga-ii/)
- [Monte Carlo Tree Search (MCTS)](/en/glossary/dynamics/monte-carlo-tree-search/)

## References

- Klonowski M, Holzinger M J, Owens-Fahrner N. Optimal Cislunar Architecture Design Using Monte Carlo Tree Search Methods[J]. The Journal of the Astronautical Sciences, 2023.
- Klonowski M. Cislunar Space Situational Awareness Architecture Design and Analysis[D]. University of Colorado Boulder, 2025.
