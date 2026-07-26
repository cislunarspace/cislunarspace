---
title: Cooperative Agent (CA)
description: Detailed analysis of cooperative agent definition, its role in cislunar situational awareness architecture design, and interaction models with SSA architecture
keywords: Cooperative Agent, CA, Cislunar Space, Situational Awareness, Architecture Design, Trajectory Optimization, Multi-objective Optimization
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: Cooperative Agent (CA)
  description: Detailed analysis of cooperative agent definition and its role in cislunar situational awareness architecture design
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Cooperative Agent (CA)
  description: Detailed analysis of cooperative agent definition and its role in cislunar situational awareness architecture design
  image: /logo.png
permalink: /en/glossary/dynamics/cooperative-agent/
wechatShare:
  title: "Cislunar Space Guide | Cooperative Agent (CA)"
  desc: "Detailed analysis of cooperative agent definition, its role in cislunar situational awareness architecture design, and interaction models with SSA architecture"
  image: "/logo.png"
---

# Cooperative Agent (Cooperative Agent, CA)

## Definition

A Cooperative Agent (CA) is a concept introduced by Klonowski (2025) in cislunar space situational awareness architecture design, referring to spacecraft in cislunar space that depend on the SSA architecture for mission support. CAs work in coordination with the SSA architecture: CAs utilize the architecture's detection capabilities to complete their own missions, while their mission trajectories also serve as inputs for architecture coverage optimization.

## CA Model

In cislunar SSA architecture design, CAs are modeled as transfer spacecraft departing from GEO to L1 or L2:

### Transfer Trajectory Generation

CAs generate transfer trajectories through multi-objective optimization, simultaneously optimizing:

1. **Photometric detection threshold maximization**: Utilizing the architecture's optical detection capability
2. **Control cost minimization**: Minimizing $\Delta v$ consumption

### Trajectory Equation

CA transfer trajectories satisfy Circular Restricted Three-Body Problem (CR3BP) dynamics:

$$\ddot{\mathbf{x}} = \mathbf{f}(\mathbf{x})$$

### Boundary Conditions

| Destination | Initial Orbit | Target Orbit |
| :--- | :--- | :--- |
| L1 | GEO | L1 halo orbit |
| L2 | GEO | L2 halo orbit |

## Architecture-Agent Interaction

The interaction between CAs and the SSA architecture manifests as a cost allocation problem:

- Architecture design must consider coverage of CA transfer trajectories
- CAs can adjust trajectories to adapt to the architecture's existing detection capabilities
- The Pareto optimal frontier describes the trade-off between architecture cost and CA cost

## Core Elements

### Mathematical Definition

A CA is a transfer trajectory $\tau(t)$ satisfying CR3BP dynamics, minimizing a multi-objective functional under given boundary conditions:

$$\min J(\tau) = [-\text{photometric detection}, \Delta v]$$

### Key Properties

CA trajectory generation involves multi-objective optimization, requiring trade-offs between detection capability utilization and fuel consumption. The CA-architecture interaction forms a bi-level optimization problem.

### Application Scenarios

The CA concept applies to high-value asset mission planning in cislunar space crewed missions, commercial lunar missions, and other missions dependent on SSA support.

## Related Concepts

- [Pareto Optimality](/en/glossary/dynamics/pareto-optimal/)
- [Cislunar Space Situational Awareness Architecture Design](/en/glossary/doctrine/cislunar-space-situational-awareness/)
- [L1/L2 Transfer Orbit](/en/glossary/orbits/lt-transfer/)

## References

- Klonowski M, Owens-Fahrner N, Heidrich C, et al. Cislunar space domain awareness architecture design and analysis for cooperative agents[J]. The Journal of the Astronautical Sciences, 2024.
- Klonowski M. Cislunar Space Situational Awareness Architecture Design and Analysis[D]. University of Colorado Boulder, 2025.
