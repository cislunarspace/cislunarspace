---
title: Persistent Detection Corridor (PDC)
description: A detailed analysis of the Persistent Detection Corridor, its generation methodology, and its application in ensuring crewed mission safety through cislunar space situational awareness.
keywords: Persistent Detection Corridor, PDC, cislunar space, situational awareness, crewed mission, detection corridor, trajectory planning
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Persistent Detection Corridor (PDC)
  desc: A detailed analysis of the Persistent Detection Corridor, its generation methodology, and its application in ensuring crewed mission safety.
  image: /logo.png
og:
  title: Persistent Detection Corridor (PDC)
  description: A detailed analysis of the Persistent Detection Corridor and its role in cislunar space situational awareness for crewed mission safety.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Persistent Detection Corridor (PDC)
  description: A detailed analysis of the Persistent Detection Corridor and its role in cislunar space situational awareness for crewed mission safety.
  image: /logo.png
permalink: /en/glossary/doctrine/persistent-detection-corridor/
---

# Persistent Detection Corridor (PDC)

## Definition

The Persistent Detection Corridor (PDC) is a concept proposed by Klonowski et al. (2025). It refers to the spatial volume within which a spacecraft can continuously fly without exceeding the detection capability of a given SSA architecture. The PDC guarantees that high-value assets (such as crewed spacecraft) remain within the architecture's detectable region even under small perturbations, providing a predictable safety corridor for crewed cislunar space missions.

## Generation Method

The generation of a PDC involves the following steps:

### 1. Graph Representation

The architecture's time-evolving detectable regions are encoded as a graph structure:
- **Nodes**: Centroids of detectable regions
- **Edges**: Connectivity between adjacent detectable regions
- **Edge Weights**: Control cost for traversing adjacent regions

### 2. Path Search

An A* algorithm is used to search for persistently detectable paths within the detection graph:

$$\min \sum_{e \in \mathcal{P}} c_e$$

where $c_e$ is the traversal cost of edge $e$, and $\mathcal{P}$ is the set of edges along the path.

### 3. Trajectory Optimization

Trajectory refinement is performed on the searched path using a collocation method (such as Hermite-Simpson):
- Generate dynamically feasible trajectories that satisfy the dynamics constraints
- Minimize the control cost $\Delta v$

## Core Elements

### Mathematical Definition
The PDC is a spatial volume $\mathcal{C}$ satisfying the following condition: for any reference trajectory $\mathbf{x}(t) \in \mathcal{C}$, there exists a detection threshold $\lambda$ such that $\|\mathbf{x}(t) - \mathcal{D}(t)\| \leq \lambda$, where $\mathcal{D}(t)$ is the architecture's detectable region at time $t$.

### Key Properties
- The PDC guarantees that a spacecraft at any position within the corridor can be detected by the architecture
- Corridor width is related to the allowable perturbation magnitude
- The PDC can be used for trajectory optimization and mission planning

### Application Scenarios
The PDC is applicable to cislunar crewed mission planning, ensuring that astronauts remain within the detection range of ground stations or backup observation systems in emergency situations.

## Related Concepts

- [Cislunar Space Situational Awareness Architecture](/en/glossary/doctrine/cislunar-space-situational-awareness/)
- [A* Search Algorithm](/en/glossary/dynamics/a-star-search/)
- [Direct Collocation](/en/glossary/dynamics/direct-collocation/)

## References

- Klonowski M, Heidrich C, Owens-Fahrner N, et al. Persistent Detection Corridors for Crewed Missions and Cislunar Space Situational Awareness[J]. The Journal of Spacecraft and Rockets, 2025.
- Klonowski M. Cislunar Space Situational Awareness Architecture Design and Analysis[D]. University of Colorado Boulder, 2025.
