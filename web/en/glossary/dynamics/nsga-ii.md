---
title: NSGA II (Non-dominated Sorting Genetic Algorithm II)
description: A detailed analysis of NSGA II algorithm principles, characteristics, and applications in multi-objective optimization of cislunar space situational awareness architectures
wechatShare:
  title: NSGA II (Non-dominated Sorting Genetic Algorithm II)
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
keywords: NSGA II, Non-dominated Sorting Genetic Algorithm, Multi-Objective Optimization, Genetic Algorithm, Evolutionary Algorithm, Pareto Optimal, Cislunar Space, Architecture Design
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: NSGA II Algorithm Explained | Multi-Objective Evolutionary Algorithm
  description: A detailed analysis of NSGA II algorithm principles, characteristics, and applications in multi-objective optimization of cislunar space situational awareness architectures
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: NSGA II Algorithm Explained | Multi-Objective Evolutionary Algorithm
  description: A detailed analysis of NSGA II algorithm principles, characteristics, and applications in multi-objective optimization of cislunar space situational awareness architectures
  image: /logo.png
permalink: /en/glossary/dynamics/nsga-ii/
---

# NSGA II (Non-dominated Sorting Genetic Algorithm II)

## Definition

NSGA II (Non-dominated Sorting Genetic Algorithm II) is a classic multi-objective evolutionary algorithm proposed by Deb et al. in 2002. It maintains diversity along the Pareto front during evolution through non-dominated sorting and crowding distance mechanisms. NSGA II is characterized by high computational efficiency, good convergence, and uniform distribution along the Pareto front, making it one of the most widely applied algorithms in the field of multi-objective optimization.

## Algorithm Principles

### Non-dominated Sorting

NSGA II first performs non-dominated sorting on the population:
1. Identify non-dominated solutions in the population (first layer of the Pareto front)
2. After removing these solutions, identify new non-dominated solutions (second layer of the Pareto front)
3. Repeat until all solutions are classified

### Crowding Distance

To maintain diversity along the Pareto front, NSGA II introduces the crowding distance:
$$d_i = \sum_{m=1}^{M} \frac{f_m^{i+1} - f_m^{i-1}}{f_m^{\max} - f_m^{\min}}$$

where $M$ is the number of objective functions, and $f_m^{i+1}$ and $f_m^{i-1}$ are the objective function values of adjacent solutions on the $m$-th objective.

### Selection Mechanism

Based on non-dominated sorting rank and crowding distance, a new population is generated:
1. Solutions with higher ranks (deeper front layers) are eliminated first
2. When ranks are equal, solutions with smaller crowding distances are eliminated first

## Application in Cislunar SSA Architecture Design

Klonowski (2025) used a hybrid algorithm of MO-MCTS and NSGA II to optimize observation satellite configurations in cislunar space situational awareness architecture design:
- MO-MCTS for global search of Pareto-optimal architectures
- NSGA II for local optimization and population update maintenance
- Cluster analysis (e.g., K-Medoids) for identifying different types of architecture configurations

## Key Elements

### Mathematical Definition
NSGA II classifies $N$ solutions into multiple front layers $\mathcal{F}_1, \mathcal{F}_2, ..., \mathcal{F}_k$ through non-dominated sorting, satisfying $\bigcup_i \mathcal{F}_i = \mathcal{P}$ (complete population), $\bigcap_i \mathcal{F}_i = \emptyset$ (no intersection between layers).

### Key Properties
NSGA II has a computational complexity of $O(MN^2)$, where $M$ is the number of objectives and $N$ is the population size. The crowding distance mechanism ensures uniform distribution along the Pareto front.

### Application Scenarios
NSGA II is suitable for multi-objective optimization problems with both continuous and discrete variables, and is widely applied in engineering design, scheduling optimization, machine learning hyperparameter tuning, and other fields.

## Related Concepts

- [Pareto Optimality](/en/glossary/dynamics/pareto-optimal/)
- [Multi-Objective Monte Carlo Tree Search (MO-MCTS)](/en/glossary/dynamics/mo-mcts/)
- [K-Medoids Clustering](/en/glossary/dynamics/k-medoids/)

## References

- Deb K, Pratap A, Agarwal S, et al. A fast and elitist multiobjective genetic algorithm: NSGA-II[J]. IEEE Transactions on Evolutionary Computation, 2002.
- Klonowski M, Owens-Fahrner N, Heidrich C, et al. Cislunar space domain awareness architecture design and analysis for cooperative agents[J]. The Journal of the Astronautical Sciences, 2024.
