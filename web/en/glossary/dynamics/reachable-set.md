---
title: Reachable Set
description: A detailed analysis of the reachable set definition, computation methods, and applications in cislunar space situational awareness architecture resilience analysis
wechatShare:
  title: Reachable Set
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
keywords: Reachable Set, Reachability, Cislunar Space, Situational Awareness, Resilience Analysis, Low-Thrust, Trajectory Analysis
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: Reachable Set
  description: A detailed analysis of the reachable set definition, computation methods, and applications in cislunar space situational awareness architecture resilience analysis
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Reachable Set
  description: A detailed analysis of the reachable set definition, computation methods, and applications in cislunar space situational awareness architecture resilience analysis
  image: /logo.png
permalink: /en/glossary/dynamics/reachable-set/
---

# Reachable Set

## Definition

A reachable set is the set of all possible states a system can reach given a set of initial conditions and control inputs. Reachability theory is an important tool for analyzing system capabilities and constraints. In cislunar space situational awareness, it is used to quantify the persistent detection capability of an architecture against low-thrust spacecraft.

## Mathematical Description

### Dynamical System

Consider a nonlinear dynamical system:

$$\dot{\mathbf{x}} = f(\mathbf{x}, \mathbf{u}), \quad \mathbf{u} \in \mathcal{U}$$

where $\mathbf{x}$ is the state, $\mathbf{u}$ is the control input, and $\mathcal{U}$ is the set of admissible controls.

### Forward Reachable Set

Starting from an initial set $\mathcal{X}_0$, the reachable set after time $t$ is:

$$\mathcal{R}^t(\mathcal{X}_0) = \{ \mathbf{x}(t) \mid \mathbf{x}(0) \in \mathcal{X}_0, \mathbf{u}(\tau) \in \mathcal{U}, 0 \leq \tau \leq t \}$$

### Low-Thrust Spacecraft Reachable Set

For low-thrust spacecraft, the control input $\mathbf{u}$ is constrained:

$$\|\mathbf{u}\| \leq u_{\max}$$

The reachable set describes all states the spacecraft can reach from an initial position within a given time.

## Application in Cislunar SSA Architecture Resilience Analysis

Klonowski (2025) utilized reachability theory to analyze the resilience of SSA architectures:

1. **Precomputing reachable sets**: Precomputing low-thrust spacecraft reachable sets at grid points in cislunar space
2. **Coverage analysis**: Comparing reachable sets with the architecture's detection areas to identify coverage blind spots
3. **Resilience maps**: Generating heatmaps to visualize the evolution of the architecture's detection capability against spacecraft at any initial position over time

## Key Elements

### Mathematical Definition

The reachable set $\mathcal{R}^t(\mathcal{X}_0)$ contains all states that the system can reach at time $t$, starting from the initial set $\mathcal{X}_0$ under admissible control inputs.

### Key Properties

The boundary of the reachable set describes the system's capability limits. For low-thrust spacecraft, the reachable set shape is influenced by thrust magnitude and direction constraints.

### Numerical Methods

Numerical computation methods for reachable sets include:

- Hyperrectangle approximation
- Flow pipe approximation
- Level set methods

## Related Concepts

- [Resilience Map](/en/glossary/doctrine/resilience-map/)
- [Cislunar Space Situational Awareness Architecture Design](/en/glossary/doctrine/cislunar-space-situational-awareness/)
- [Low-Energy Transfer Orbit](/en/glossary/orbits/low-energy-transfer/)

## References

- Klonowski M, Holzinger M J. Resilience of Architectures for Cislunar Space Situational Awareness Using Low-Thrust Reachable Sets[J]. The Journal of Spacecraft and Rockets, 2025.
- Klonowski M. Cislunar Space Situational Awareness Architecture Design and Analysis[D]. University of Colorado Boulder, 2025.
