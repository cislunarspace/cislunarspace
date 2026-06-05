---
title: State-Dependent Traveling Salesman Problem (SDTSP)
description: An analysis of the state-dependent traveling salesman problem, its differences from classical TSP, applications in orbital deployment, and dynamic programming solution methods
keywords: State-Dependent Traveling Salesman Problem, SDTSP, State-Dependent TSP, Deployment Sequence Optimization, Dynamic Programming, Traveling Salesman Problem
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: State-Dependent Traveling Salesman Problem (SDTSP)
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: State-Dependent Traveling Salesman Problem Explained | Orbital Deployment Sequence Optimization
  description: An analysis of the state-dependent traveling salesman problem (SDTSP), its differences from classical TSP, and applications in orbital deployment
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: State-Dependent Traveling Salesman Problem Explained | Orbital Deployment Sequence Optimization
  description: An analysis of the state-dependent traveling salesman problem and its applications in orbital deployment sequence optimization
  image: /logo.png
permalink: /en/glossary/dynamics/state-dependent-tsp/
---

# State-Dependent Traveling Salesman Problem (SDTSP)

> Editor source: Hu Min, Xiao Jinwei, Zhang Tiantian, Tao Xuefeng (2026) "Mission Planning for Orbit Transfer Vehicles Oriented Toward Batch Deployment of Medium and High Orbit Small Satellites"
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The State-Dependent Traveling Salesman Problem (SDTSP) is a variant of the classical Traveling Salesman Problem (TSP). Its core feature is that the transfer cost depends not only on the origin and destination but also on the current state or stage.

In orbital deployment missions, the "state" in SDTSP typically refers to the mass state of the orbit transfer vehicle performing the transfer. Since the vehicle's mass undergoes a discrete step change after each satellite deployment, the same origin-to-destination transfer has different costs under different mass states.

## Differences from Classical TSP

| Feature | Classical TSP | State-Dependent TSP |
|:---|:---|:---|
| Transfer cost | Depends only on (i, j) | Depends on (i, j, k), where k is the current state |
| Solution space | N! | N! x (number of states) |
| Optimality | Unique global optimum | Sequence optimum depends on state sequence |
| Application scenario | Static path planning | Dynamic, multi-stage mission planning |

## Mathematical Model

### Decision Variables

Deployment sequence $\Pi = (\pi_1, \pi_2, \dots, \pi_N)$, where $\pi_k$ is the index of the $k$-th deployed small satellite.

### Objective Function

Minimize the total mission cost:

$$\min J = C_f = \sum_{k=1}^{N} \Delta C_k(\Pi, u_k(t); \eta_{abs}, \eta_{rel})$$

where $\Delta C_k$ is the cost consumption of the $k$-th transfer segment.

### Bellman Equation

According to Bellman's principle of optimality, the dynamic programming recurrence relation is:

$$J(S, j) = \min_{i \in S \setminus \{j\}} \{J(S \setminus \{j\}, i) + C(i, j, k)\}$$

where $C(i, j, k)$ represents the cost of transferring the OTV from orbit $i$ to orbit $j$ after $k$ satellites have been deployed.

## Application in Orbital Deployment

### Problem Transformation

Hu Min et al. (2026) formulated the OTV batch deployment mission as an SDTSP:

- **Nodes**: Target orbits (satellite deployment points)
- **Edge weights**: State-dependent orbit transfer costs $C(i, j, k)$
- **Constraints**: All nodes must be visited, and each node is visited exactly once
- **Objective**: Minimize total transfer cost (propellant consumption or time)

### State-Dependent Cost Matrix

The cost matrix $C(i, j, k)$ is three-dimensional:
- $i$: Origin orbit
- $j$: Destination orbit
- $k$: Number of satellites already deployed (determines OTV mass state)

This matrix is generated offline through Q-law control law simulation.

## Solution Methods

### Dynamic Programming

For medium-scale missions ($N \leq 12$), dynamic programming can guarantee a globally optimal solution:

1. Define state $(S, j)$: visited set $S$, currently stationed at node $j$
2. Use the Bellman equation for bottom-up recursion
3. Improve computational efficiency through state compression techniques (bitwise operations)

### Complexity Analysis

- Time complexity: $O(N^2 \cdot 2^N)$
- Space complexity: $O(N \cdot 2^N)$
- Applicable scale: Medium-scale missions with $N < 15$

### Comparison with Heuristic Algorithms

Research results (Hu Min et al., 2026) show:

| Algorithm | Optimality Guarantee | Applicable Scale |
|:---|:---|:---|
| Dynamic Programming (DP) | Exact optimal | N <= 12 |
| Genetic Algorithm (GA) | Heuristic, probabilistic convergence | Any scale |
| Greedy Algorithm | Local optimal | N <= 8 |

## Key Elements

### Mathematical Definition
SDTSP is a state-dependent extension of the classical TSP, where transfer cost $C_{ij}^k$ depends on the current state $k$, making the problem more closely aligned with actual engineering constraints.

### Key Properties
State dependence makes the problem more realistically reflect physical reality, particularly in space missions where mass changes are significant.

### Engineering Value
Accurate SDTSP modeling is key to obtaining high-quality deployment plans. A state-independent model systematically underestimates costs in later stages.

## Related Concepts

- [Batch Deployment](/en/glossary/dynamics/batch-deployment/)
- [Dynamic Programming](/en/glossary/dynamics/dynamic-programming/)
- [Q-Law Control Law](/en/glossary/dynamics/q-law/)
- [Mass Discontinuity](/en/glossary/dynamics/mass-discontinuity/)
- [Bellman's Principle of Optimality](/en/glossary/dynamics/dynamic-programming/)

## References

- Hu Min, Xiao Jinwei, Zhang Tiantian, Tao Xuefeng. Mission Planning for Orbit Transfer Vehicles Oriented Toward Batch Deployment of Medium and High Orbit Small Satellites[J]. Spacecraft Engineering, 2026, 25(3): 634-646. [in Chinese]
- Bellman R. Dynamic Programming[M]. Princeton: Princeton University Press, 2010.
- Narayanaswamy S, Wu B, Ludivig P, et al. Low-thrust rendezvous trajectory generation for multi-target active space debris removal using the RQ-law[J]. Advances in Space Research, 2023, 71(10): 4276-4287.
