---
title: Coasting Arc (Coasting Arc)
description: Analysis of the coasting arc concept, its role in low-thrust orbit transfer, and the mechanism for propellant-time trade-off through efficiency parameters
keywords: Coasting Arc, Thrust Arc, Low-thrust Orbit Transfer, Q-law, Efficiency Parameter, Propellant-Time Trade-off
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Coasting Arc (Coasting Arc)
  desc: Cislunar space research frontiers, terminology definitions, and tool resources in one-stop learning.
  image: /logo.png
og:
  title: Coasting Arc Explained | Low-Thrust Orbit Control Strategy
  description: Analysis of the coasting arc concept and its propellant-time trade-off role in low-thrust orbit transfer
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Coasting Arc Explained | Low-Thrust Orbit Control Strategy
  description: Analysis of the coasting arc role in low-thrust orbit transfer
  image: /logo.png
permalink: /en/glossary/dynamics/coasting-arc/
---

# Coasting Arc (Coasting Arc)

> Editor Source: 胡敏, 肖金伟, 张天天, 陶雪峰 (2026) "面向中高轨小卫星批量部署的轨道转移飞行器任务规划"
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A coasting arc refers to the flight segment where, during low-thrust orbit transfer, when thrust efficiency falls below a set threshold, the engine shuts down and the spacecraft coasts on inertia.

Coasting arcs and thrust arcs together constitute the basic flight modes for low-thrust orbit transfer. By reasonably setting the proportion of coasting arcs, a flexible trade-off between propellant consumption and transfer time can be achieved.

## Physical Mechanism

### Thrust Efficiency Determination

The efficiency parameters defined by 胡敏等 (2026) determine whether to enter a coasting arc:

**Absolute Efficiency Parameter:**
$$\eta_a = \frac{\min_{\alpha, \beta}(\dot{Q})}{\min_\theta(\min_{\alpha, \beta}(\dot{Q}))}$$

**Relative Efficiency Parameter:**
$$\eta_r = \frac{\min_{\alpha, \beta}(\dot{Q}) - \max_\theta(\min_{\alpha, \beta}(\dot{Q}))}{\min_\theta(\min_{\alpha, \beta}(\dot{Q})) - \max_\theta(\min_{\alpha, \beta}(\dot{Q}))}$$

### Coasting Arc Switching Logic

The judgment formula for thrust on or off:

$$u = \begin{cases} [0, 0], & \eta_r \leq \eta_{rel} \text{ or } \eta_a \leq \eta_{abs} \\ T_{max}[\alpha^*, \beta^*], & \text{otherwise} \end{cases}$$

When relative or absolute efficiency falls below the set threshold, the engine shuts down and enters the coasting phase.

## Propellant-Time Trade-off

### Trade-off Mechanism

The introduction of coasting arcs decouples propellant from time:

| Optimization Objective | Efficiency Threshold | Coasting Arc Proportion | Characteristics |
| :--- | :--- | :--- | :--- |
| Time minimization | $\eta_{rel}=0, \eta_{abs}=0$ | None | Full maximum thrust |
| Propellant minimization | Higher threshold | More | Trade time for propellant |
| Trade-off mode | Medium threshold | Moderate | Propellant-time compromise |

### Simulation Results

Simulation results from 胡敏等 (2026) verify the trade-off effect of coasting arcs:

| Mission Objective | Propellant Mass (kg) | Transfer Time (d) |
| :--- | :--- | :--- |
| Time minimization | 96.49 | 32.87 |
| Propellant minimization | 76.07 | 37.55 |
| Propellant-time trade-off | 85.12 | 35.87 |

Propellant savings approximately 21%, time increase approximately 14%.

## Value in Batch Deployment

### Mission Configuration Flexibility

The coasting arc mechanism provides powerful configuration flexibility for batch deployment missions:

- Flexible selection of optimization objectives based on mission requirements
- When propellant budget is limited, mission duration can be extended by increasing coasting arcs
- Multiple trade-off solutions provide diverse options for mission decision-making

### Q-law Controller Adaptation

The Q-law controller automatically identifies low thrust efficiency intervals and shuts down the engine:

- Real-time calculation of efficiency parameters for current state
- Automatic switching between thrust arcs and coasting arcs
- Adaptive control without manual intervention

### Coasting Arc and Mass Discontinuity

The combination of coasting arc strategy and mass discontinuity characteristics:

- In later mission phases when OTV mass is lighter, the same thrust produces greater acceleration
- Efficiency parameters automatically reflect this change
- Systematic optimization of propellant consumption across the entire mission profile

## Related Concepts

- [Q-law Control Law](/en/glossary/dynamics/q-law/)
- [Batch Deployment](/en/glossary/dynamics/batch-deployment/)
- [Equinoctial Orbital Elements](/en/glossary/dynamics/equinoctial-elements/)
- [Mass Discontinuity](/en/glossary/dynamics/mass-discontinuity/)
- [State-Dependent TSP](/en/glossary/dynamics/state-dependent-tsp/)

## References

- 胡敏, 肖金伟, 张天天, 陶雪峰. 面向中高轨小卫星批量部署的轨道转移飞行器任务规划[J]. 航天器工程, 2026, 25(3): 634-646.
- Narayanaswamy S, Damaren C J. Equinoctial Lyapunov control law for low-thrust rendezvous[J]. Journal of Guidance, Control, and Dynamics, 2023, 46(4): 781-795.
