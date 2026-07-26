---
title: Dynamic Programming (Dynamic Programming)
description: Analysis of dynamic programming principles, Bellman's Principle of Optimality, and application in orbit deployment sequence optimization
keywords: Dynamic Programming, Bellman's Principle of Optimality, Bellman, Sequence Optimization, Deployment Sequence, SDTSP
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Dynamic Programming (Dynamic Programming)
  desc: Cislunar space research frontiers, terminology definitions, and tool resources in one-stop learning.
  image: /logo.png
og:
  title: Dynamic Programming Explained | Sequential Decision Optimization
  description: Analysis of dynamic programming principles and its application in orbit deployment sequence optimization
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Dynamic Programming Explained | Sequential Decision Optimization
  description: Analysis of dynamic programming principles and its application in orbit deployment sequence optimization
  image: /logo.png
permalink: /en/glossary/dynamics/dynamic-programming/
---

# Dynamic Programming (Dynamic Programming)

> Editor Source: 胡敏, 肖金伟, 张天天, 陶雪峰 (2026) "面向中高轨小卫星批量部署的轨道转移飞行器任务规划"
>
> Bellman R. Dynamic Programming[M]. Princeton University Press, 2010.
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Dynamic Programming (DP) is a mathematical method for solving multi-stage decision process optimization by decomposing complex problems into interrelated subproblems, solving bottom-up and gradually constructing optimal solutions.

The core characteristics of dynamic programming are:

- **Optimal substructure**: Global optimal solution contains optimal solutions of local subproblems
- **No aftereffect**: Current state choices only affect subsequent decisions, not past choices
- **Overlapping subproblems**: Subproblems are repeatedly calculated multiple times and can be stored for reuse

## Bellman's Principle of Optimality

### Principle Statement

Bellman's Principle of Optimality is the theoretical foundation of dynamic programming:

> "An optimal policy has the property that whatever the initial state and initial decision are, the remaining decisions must constitute an optimal policy with regard to the state resulting from the first decision."

### Mathematical Expression

For the State-Dependent Traveling Salesman Problem (SDTSP), Bellman's equation is:

$$J(S, j) = \min_{i \in S \setminus \{j\}} \{J(S \setminus \{j\}, i) + C(i, j, k)\}$$

Where:

- $J(S, j)$: Minimum cumulative cost for planning node $(S, j)$
- $S$: Set of visited orbits
- $j$: Current orbit
- $C(i, j, k)$: Cost from orbit $i$ to orbit $j$ (dependent on state $k$)

### Physical Significance

The optimal path to reach the current state $(S, j)$ must contain an optimal path to some predecessor state $(S \setminus \{j\}, i)$, then transit from orbit $i$ to orbit $j$.

## Application in Orbit Deployment

### Problem Modeling

胡敏等 (2026) modeled the OTV batch deployment mission as SDTSP and solved it using dynamic programming:

1. **Planning node**: Binary $(S, j)$ uniquely determines state
   - $S \subseteq V$: Subset of visited orbits
   - $j \in S$: Current orbit of OTV

2. **State transition**: After deploying a satellite, state updates
   $$k = |S| - 1$$
   Where $k$ is the number of deployed satellites

3. **Value function**: $J(S, j)$ represents the minimum cumulative cost from the starting orbit, visiting all orbits in set $S$, and ending at orbit $j$

### Initial Subproblem

The basis of recursion is the smallest subproblem visiting only the starting orbit:

$$J(\{i_{start}\}, i_{start}) = 0$$

### Final Return

After completing all deployments, the cost of returning to the starting orbit must be calculated:

$$J_{final} = \min_{u \in V} (J(V, u) + C(u, i_{start}, N))$$

## Algorithm Implementation

### State Compression Technique

To improve computational efficiency, 胡敏等 (2026) used state compression:

- Orbital subset $S$ is mapped to binary integer bitmask
- Set inclusion test becomes efficient bitwise operation
- Algorithm complexity reduces from exponential to polynomial

### Algorithm Flow

```text
Input: Total number of targets N, State-dependent cost matrix C, Starting orbit i_start
1. Initialize J to infinity, J[i_start, i_start] = 0
2. Iterate through all possible orbital subsets m and current node u
3. Update cumulative cost J[S_new, v]
4. Backtrack to extract optimal deployment sequence Π
Output: Optimal cost J and deployment sequence Π
```

### Complexity Analysis

| Metric | Complexity | Description |
| :--- | :--- | :--- |
| Time | $O(N^2 \cdot 2^N)$ | Iterate through all state combinations |
| Space | $O(N \cdot 2^N)$ | Store optimal cost array |

## Performance Comparison

Research results (胡敏等, 2026) show that in medium-orbit batch deployment missions:

| Algorithm | N=8 Propellant (kg) | N=12 Propellant (kg) | Optimality |
| :--- | :--- | :--- | :--- |
| DP (This method) | 487.7 | 632.1 | Exact optimal |
| GA | 507.8 | 632.1 | Heuristic |
| Greedy | 502.2 | 669.1* | Locally optimal |

*Exceeds initial propellant capacity

Dynamic programming performs optimally in medium-scale missions with N≤12, with advantages:

- **Global optimality guarantee**: Ensures finding the optimal deployment sequence
- **High computational efficiency**: CPU time only requires milliseconds
- **Good robustness**: Not affected by initial solutions

## Comparison with Other Algorithms

| Characteristic | Dynamic Programming | Genetic Algorithm | Greedy Algorithm |
| :--- | :--- | :--- | :--- |
| Optimality | Exact optimal | Probabilistic convergence | Locally optimal |
| Time complexity | $O(N^2 \cdot 2^N)$ | Adjustable | $O(N^2)$ |
| Space complexity | $O(N \cdot 2^N)$ | Medium | $O(N)$ |
| Applicable scale | N < 15 | Any scale | N < 10 |

## Related Concepts

- [State-Dependent TSP](/en/glossary/dynamics/state-dependent-tsp/)
- [Bellman's Principle of Optimality](/en/glossary/dynamics/dynamic-programming/)
- [Batch Deployment](/en/glossary/dynamics/batch-deployment/)
- [Mass Discontinuity](/en/glossary/dynamics/mass-discontinuity/)
- [Q-law Control Law](/en/glossary/dynamics/q-law/)

## References

- 胡敏, 肖金伟, 张天天, 陶雪峰. 面向中高轨小卫星批量部署的轨道转移飞行器任务规划[J]. 航天器工程, 2026, 25(3): 634-646.
- Bellman R. Dynamic Programming[M]. Princeton: Princeton University Press, 2010.
- Narayanaswamy S, Wu B, Ludivig P, et al. Low-thrust rendezvous trajectory generation for multi-target active space debris removal using the RQ-law[J]. Advances in Space Research, 2023, 71(10): 4276-4287.
