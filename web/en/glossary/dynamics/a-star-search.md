---
title: A* Search Algorithm (A* Search)
description: Detailed analysis of the A* search algorithm's principles, applications in persistent detection corridor path search, and its advantages in cislunar trajectory planning
keywords: A* search, A* Search, path planning, graph search, heuristic search, persistent detection corridor, cislunar space, trajectory optimization
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: A* Search Algorithm Explained
  description: Detailed analysis of A* search algorithm principles and its application in cislunar persistent detection corridor path search
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: A* Search Algorithm Explained
  description: Detailed analysis of A* search algorithm principles and its application in cislunar persistent detection corridor path search
  image: /logo.png
permalink: /en/glossary/dynamics/a-star-search/
wechatShare:
  title: "Cislunar Space Guide | A* Search Algorithm (A* Search)"
  desc: "Detailed analysis of the A* search algorithm's principles, applications in persistent detection corridor path search, and its advantages in cislunar trajectory planning"
  image: "/logo.png"
---

# A* Search Algorithm (A* Search)

## Definition

The A* Search Algorithm, introduced by Hart, Nilsson, and Raphael in 1968, is an optimal path search algorithm that combines the shortest-path guarantee of Dijkstra's algorithm with the heuristic efficiency of greedy best-first search. A* algorithm guarantees finding the minimum-cost path from a start node to a goal node in weighted graph search.

## Algorithm Principles

### Evaluation Function

The A* algorithm uses the following evaluation function to select the next node to expand:

$$f(n) = g(n) + h(n)$$

Where:
- $g(n)$: The actual cost from the start node to the current node $n$
- $h(n)$: The heuristic estimated cost from node $n$ to the goal

### Heuristic Function

The performance of the A* algorithm depends on the design of the heuristic function $h(n)$:

| Condition | Property | Result |
|:---|:---|:---|
| $h(n) = 0$ | Degrades to Dijkstra | Guarantees optimality |
| $h(n) \leq h^*(n)$ | Admissible | Guarantees optimality |
| $h(n) > h^*(n)$ | Over-estimation | May be non-optimal |

### Algorithm Steps

1. Add the start node to the open list
2. Repeat:
   - Select the node $n$ with minimum $f(n)$ from the open list
   - If $n$ is the goal, path is found
   - Move $n$ to the closed list
   - For each neighbor $m$ of $n$:
     - If $m$ is in the closed list or unreachable, skip
     - If the new path is better, update $m$'s parent and cost

## Application in Persistent Detection Corridors

Klonowski (2025) used the A* algorithm to search for continuously detectable paths in the detection graph for Persistent Detection Corridor (PDC) generation:
- Nodes: Centroids of detectable regions
- Edges: Connectivity between adjacent detectable regions
- Edge weights: Control cost for traversing adjacent regions

The A* algorithm ensures finding the continuously detectable path with minimum control cost, providing an initial guess for subsequent trajectory optimization.

## Core Elements

### Mathematical Definition
The A* algorithm searches for minimum-cost paths on a graph $\mathcal{G} = (\mathcal{V}, \mathcal{E})$, with optimality guaranteed when the heuristic function $h(n)$ is admissible.

### Key Properties
The time complexity of A* algorithm is $O(|E| \log|V|)$, and space complexity is $O(|V|)$. The design of the heuristic function directly affects algorithm efficiency.

### Application Scenarios
A* algorithm is suitable for path planning, game AI, robot navigation, cislunar trajectory search, and other scenarios.

## Related Concepts

- [Persistent Detection Corridor (PDC)](/en/glossary/doctrine/persistent-detection-corridor/)
- [KDTrees](/en/glossary/dynamics/kdtrees/)
- [Graph Search](/en/glossary/dynamics/detection-graph/)

## References

- Hart P E, Nilsson N J, Raphael B. A formal basis for the heuristic determination of minimum cost paths[J]. IEEE Transactions on Systems Science and Cybernetics, 1968.
- Klonowski M, Heidrich C, Owens-Fahrner N, et al. Persistent Detection Corridors for Crewed Missions and Cislunar Space Situational Awareness[J]. The Journal of Spacecraft and Rockets, 2025.
