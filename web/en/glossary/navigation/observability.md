---
title: Observability
description: An in-depth analysis of the definition of observability, linear and nonlinear system analysis methods, and its applications in autonomous navigation system design
keywords: observability, state estimation, navigation system, singular value decomposition, nonlinear observability, navigation filtering
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Observability
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Observability Explained | A Core Concept in Navigation System Design
  description: An in-depth analysis of the definition of observability, linear and nonlinear system analysis methods, and its applications in autonomous navigation system design
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Observability Explained | A Core Concept in Navigation System Design
  description: An in-depth analysis of the definition of observability, linear and nonlinear system analysis methods, and its applications in autonomous navigation system design
  image: /logo.png
permalink: /en/glossary/navigation/observability/
---

# Observability

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Reference: Qian Yingjing (2014), "Research on Autonomous Navigation and Orbit Keeping of Spacecraft on Quasi-Periodic Orbits in Cislunar Space"
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Observability is a core concept in systems theory and control theory, describing the degree to which the internal states of a system can be determined through external output (measurement) information. In navigation system design, observability analysis is used to determine: given a set of sensor configurations and measurement information, whether the system states can be uniquely and accurately estimated.

For autonomous navigation systems, observability analysis is a critical step in navigation scheme design. A navigation system that fails to satisfy observability requirements cannot provide convergent state estimates, even with an optimal filtering algorithm.

## Observability of Linear Systems

### Definition

For a linear time-invariant system:

$$\dot{\mathbf{x}} = \mathbf{A}\mathbf{x} + \mathbf{B}\mathbf{u}$$
$$\mathbf{y} = \mathbf{C}\mathbf{x} + \mathbf{D}\mathbf{u}$$

its observability matrix is:

$$\mathcal{O} = \begin{bmatrix} \mathbf{C} \\ \mathbf{C}\mathbf{A} \\ \mathbf{C}\mathbf{A}^2 \\ \vdots \\ \mathbf{C}\mathbf{A}^{n-1} \end{bmatrix}$$

where $n$ is the state dimension. The necessary and sufficient condition for complete observability is $\text{rank}(\mathcal{O}) = n$.

### Observability Criteria

| Criterion | Condition | Applicable Scenario |
| :--- | :--- | :--- |
| Rank criterion | $\text{rank}(\mathcal{O}) = n$ | General linear systems |
| GRAM criterion | $\mathcal{O}^T\mathcal{O}$ is positive definite | Continuous systems |
| PBH criterion | $\text{rank}[s\mathbf{I}-\mathbf{A}, \mathbf{C}] = n, \forall s$ | Linear systems |

## Observability of Nonlinear Systems

### Locally Weak Observability

For a nonlinear system:

$$\dot{\mathbf{x}} = \mathbf{f}(\mathbf{x})$$
$$\mathbf{y} = h(\mathbf{x})$$

the locally weakly observable criterion can be applied. The system is locally weakly observable in a neighborhood if and only if:

$$\text{rank}\left(\frac{\partial}{\partial \mathbf{x}} \mathcal{L}^k h(\mathbf{x})\right) = n, \forall k \geq 0, \forall \mathbf{x}$$

where $\mathcal{L}^k h$ is the $k$-th Lie derivative of $h$.

### Degree of Observability

In practical engineering, even when a system satisfies the observability criteria, state estimation accuracy may still be poor due to insufficient information content. The degree of observability is used to quantify this "level of observability":

$$\text{obs} = \frac{\sigma_{\min}}{\sigma_{\max}}$$

where $\sigma_{\min}$ and $\sigma_{\max}$ are the minimum and maximum singular values of the observability matrix, respectively. A degree of observability closer to 1 indicates that all state components can be estimated with similar ease; a degree closer to 0 indicates that certain state components are difficult to estimate.

## Applications in Navigation System Design

### Sensor Configuration Optimization

Observability analysis is used to optimize sensor configuration. When studying Sun-Earth-Moon-based autonomous navigation, Qian Yingjing (2014) compared three sensor configuration schemes through observability analysis:

1. **Scheme 1**: Sun sensor + Earth sensor + Moon sensor
2. **Scheme 2**: Star tracker + Sun/Earth sensor combination
3. **Scheme 3**: Optical camera + image processing

The analysis results showed significant differences in the degree of observability among the different configuration schemes, requiring the optimal configuration to be selected based on mission requirements.

### Sampling Strategy Optimization

Observability is closely related to observation arc length. Longer continuous observation arcs generally provide better observability but increase computational burden and response latency. In practical design, a balance must be struck between observability and system real-time performance.

### Navigation Filter Design

Observability analysis results directly influence filter design:

- For system state components with poor observability, prior information or constraints need to be added
- For unobservable states, reduced-order filters or fixed-value treatment should be employed

## Limitations of Observability Analysis

1. **Local nature**: Locally weak observability analysis only guarantees local uniqueness; global observability is difficult to determine
2. **Model dependence**: Analysis results depend on the accuracy of the system dynamics model
3. **Numerical stability**: Observability matrix computation for high-dimensional systems may suffer from numerical ill-conditioning
4. **Time-varying systems**: Observability analysis of time-varying systems is more complex

## Related Concepts

- [Autonomous Navigation](/en/glossary/navigation/autonomous-navigation/)
- [Sun-Earth-Moon Autonomous Navigation (SEM Navigation)](/en/glossary/navigation/sem-autonomous-navigation/)
- [Extended Kalman Filter (EKF)](/en/glossary/navigation/extended-kalman-filter/)
- [State Transition Matrix (STM)](/en/glossary/dynamics/state-transition-matrix/)

## References

- Hermann R, Krener A J. Nonlinear controllability and observability [J]. IEEE Transactions on Automatic Control, 1977.
- Qian Yingjing. Research on Autonomous Navigation and Orbit Keeping of Spacecraft on Quasi-Periodic Orbits in Cislunar Space [D]. Harbin Institute of Technology, 2014.
