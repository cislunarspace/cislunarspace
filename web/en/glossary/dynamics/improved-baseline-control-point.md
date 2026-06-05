---
title: Improved Baseline Control-Point Method (Improved Baseline Control-Point Method)
description: Detailed analysis of improved baseline control-point method principles, differences from traditional methods, and application in orbit keeping
keywords: Baseline Control-Point Method, Orbit Keeping, Improved Baseline Trajectory, Control Strategy, Libration Point, Quasi-Periodic Orbit, Weakly Stable Orbit
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Improved Baseline Control-Point Method
  desc: Cislunar space research frontiers, terminology definitions, and tool resources in one-stop learning.
  image: /logo.png
og:
  title: Improved Baseline Control-Point Method Explained | Libration Point Orbit Keeping Control
  description: Detailed analysis of improved baseline control-point method principles, differences from traditional methods, and application in orbit keeping
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Improved Baseline Control-Point Method Explained | Libration Point Orbit Keeping Control
  description: Detailed analysis of improved baseline control-point method principles, differences from traditional methods, and application in orbit keeping
  image: /logo.png
permalink: /en/glossary/dynamics/improved-baseline-control-point/
---

# Improved Baseline Control-Point Method (Improved Baseline Control-Point Method)

> Author: Tianjiang Shuo
>
> Reference: 钱霙婧(2014)《地月空间拟周期轨道上航天器自主导航与轨道保持研究》
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Improved Baseline Control-Point Method is an orbit keeping control strategy proposed for Earth-Moon libration point weakly stable quasi-periodic orbits. This method introduces clock information correction and navigation constraints based on traditional baseline control-point method, enabling effective orbit keeping under conditions of initial orbital insertion deviation, navigation errors, and actuator errors.

Traditional baseline control-point method assumes nominal trajectory is precisely known and error-free, suitable for strongly stable orbits. However, for weakly stable quasi-periodic orbits near Earth-Moon libration points, initial insertion deviation leads to rapid orbital divergence, making traditional methods unable to guarantee control effectiveness. The improved baseline control-point method solves this problem through:

1. Target calculation considering navigation errors
2. Introduction of clock information correction
3. Constraints from autonomous navigation system requirements

## Orbit Keeping Constraints

### Dynamic Environment Constraints

1. **Orbital divergence characteristics**: Weakly stable orbits are sensitive to initial values; small deviations cause large orbital deviations
2. **Impulse timing constraints**: Impulse application timing must be within controllable orbital range
3. **Fuel constraints**: Total impulse budget is limited; pulse magnitude and direction need optimization

### Actuator Constraints

1. **Thrust direction constraints**: Actual thrust direction constrained by attitude control system
2. **Thrust magnitude constraints**: Minimum impulse width and maximum thrust constraints
3. **Execution errors**: Deviation between actual $\Delta v$ and nominal values

### Autonomous Navigation Constraints

1. **Convergence arc length constraint**: Navigation system needs to provide convergent estimates within half orbital period
2. **Accuracy constraint**: Navigation accuracy directly affects control effectiveness
3. **Update frequency constraint**: Navigation update frequency must match orbit keeping impulse intervals

## Algorithm Principles

### Basic Principles of Baseline Control-Point Method

The core idea of baseline control-point method: select several baseline points (Control Points) on the orbit, transforming orbit keeping problem into one of making spacecraft satisfy predetermined states at baseline points.

Let nominal baseline trajectory be $\mathcal{T}^*$, actual orbit be $\mathcal{T}$. At the $i$-th baseline point:

**Traditional method:**
$$\min \|\mathbf{x}(t_i) - \mathbf{x}^*(t_i)\|$$

**Improved method:**
$$\min \|\mathbf{x}(t_i) - \mathbf{x}^*(t_i)\| + \|\mathbf{e}_{\text{nav}}\| + \|\mathbf{e}_{\text{act}}\|$$

Where $\mathbf{e}_{\text{nav}}$ is navigation error estimate, $\mathbf{e}_{\text{act}}$ is actuator error estimate.

### Clock Information Correction

A key innovation of the improved method is introducing clock information correction. Since weakly stable orbits are sensitive to time, the orbit keeping controller requires precise time synchronization:

1. **Clock bias estimation**: Use navigation filter to estimate clock bias $\delta t$
2. **Time correction calculation**: Calculate impact of clock bias on orbit
3. **Corrected impulse calculation**: Compensate for clock bias in impulse calculation

Corrected impulse calculation formula:

$$\Delta \mathbf{v}_{\text{corr}} = \Delta \mathbf{v}_{\text{nom}} + \frac{\partial \mathbf{v}}{\partial t}\bigg|_{t_i} \cdot \delta t$$

### Navigation Constraint Coupling

The improved method requires collaborative design with autonomous navigation system:

1. **Target point selection**: Choose locations with good navigation observability as baseline points
2. **Impulse timing**: Ensure impulse applied after navigation update
3. **Accuracy requirements**: Set control accuracy thresholds based on navigation accuracy

## Algorithm Flow

### Initialization

1. Select $N$ baseline points on nominal trajectory
2. Determine target state $\mathbf{x}^*_i$ at each baseline point
3. Set control accuracy threshold $\varepsilon$

### Orbit Propagation

1. From current state, integrate along orbit to next baseline point
2. Calculate deviation $\Delta \mathbf{x}_i$ between actual and target states
3. Estimate navigation and actuator errors

### Impulse Calculation

1. Use state transition matrix to calculate impulse sensitivity
2. Consider clock correction
3. Calculate minimum impulse to return to state

### Execution and Update

1. Execute impulse maneuver
2. Update orbit state
3. Return to step 2 for continued propagation

## Simulation Verification

钱霙婧 (2014) verified the improved method's effectiveness through closed-loop simulation:

### Simulation Scenario

- Target orbit: Earth-Moon L2 quasi-periodic Halo orbit
- Initial deviation: Position 10 km, velocity 1 m/s
- Navigation error: Position 100 m (1σ)
- Actuator error: Velocity increment 1% (1σ)

### Simulation Results

| Metric | Traditional Method | Improved Method |
|:---|:---|:---|
| Orbit deviation control | Cannot converge | < 1 km |
| Impulse consumption | Divergent | ~10 m/s/year |
| Control period | Not applicable | ~7 days |

Results show the improved baseline control-point method achieves effective orbit keeping under complex error conditions, with control accuracy meeting mission requirements.

## Comparison with Other Methods

| Method | Applicable Scenario | Advantages | Disadvantages |
|:---|:---|:---|:---|
| X-axis velocity constraint pulse | Halo orbit | Simple, intuitive | Only for specific orbits |
| Floquet mode method | Periodic orbit | Theoretically complete | Computationally complex |
| Traditional control-point | Strongly stable orbit | Mature, stable | Not suitable for weakly stable orbits |
| **Improved baseline control-point** | **Weakly stable quasi-periodic orbit** | **Considers multi-source errors** | **Higher computation** |

## Related Concepts

- [Orbit Keeping](/en/glossary/orbits/orbit-keeping/)
- [Quasi-Periodic Orbit](/en/glossary/orbits/quasi-periodic-orbit/)
- [Libration Point](/en/glossary/dynamics/libration-point/)
- [Autonomous Navigation](/en/glossary/navigation/autonomous-navigation/)
- [State Transition Matrix (STM)](/en/glossary/dynamics/state-transition-matrix/)

## References

- 钱霙婧. 地月空间拟周期轨道上航天器自主导航与轨道保持研究[D]. 哈尔滨工业大学, 2014.
- Folta D, Quinn D, Quinn T. Stationkeeping of L2 libration point orbits with ESM manifests[C]. AIAA/AAS Astrodynamics Specialist Conference, 2014.
