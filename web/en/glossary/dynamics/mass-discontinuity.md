---
title: Mass Discontinuity (Mass Discontinuity)
description: Analysis of mass discontinuity concept, impact on orbital transfer vehicle batch deployment, and importance of accurate modeling
keywords: Mass Discontinuity, Mass Variation, Satellite Deployment, OTV, State-Dependent
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Mass Discontinuity
  desc: Cislunar space research frontiers, terminology definitions, and tool resources in one-stop learning.
  image: /logo.png
og:
  title: "Mass Discontinuity Explained | Mass Variation in Orbital Deployment"
  description: Analysis of mass discontinuity concept and its impact on orbital transfer vehicle batch deployment
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Mass Discontinuity Explained | Mass Variation in Orbital Deployment"
  description: Analysis of mass discontinuity impact on orbital deployment and importance of accurate modeling
  image: /logo.png
permalink: /en/glossary/dynamics/mass-discontinuity/
---

# Mass Discontinuity (Mass Discontinuity)

> Editor/Author: 胡敏, 肖金伟, 张天天, 陶雪峰 (2026) "Mission Planning for Orbital Transfer Vehicles for Batch Deployment of Medium-to-High Orbit Satellites"
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Mass Discontinuity refers to the discrete, significant decrease in the total mass of an Orbital Transfer Vehicle (OTV) when executing batch deployment missions, occurring each time a small satellite is successfully deployed to its target orbit due to satellite separation.

Unlike the continuous mass decrease caused by propellant consumption, mass discontinuity is instantaneous and relatively large in magnitude, having a significant impact on the dynamic characteristics of subsequent orbital transfers.

## Generation Mechanism

In OTV batch deployment missions, mass variation exhibits two patterns:

### 1. Discrete Mass Discontinuity

When the OTV successfully releases a small satellite to its target orbit, its total mass undergoes a significant discrete decrease:

$$m_k = m_{k-1} - m_{sat, \pi_k}$$

Where:

- $m_k$: OTV mass before deploying the k-th small satellite
- $m_{k-1}$: OTV mass before deploying the (k-1)-th satellite
- $m_{sat, \pi_k}$: Mass of the k-th deployed small satellite

### 2. Continuous Mass Variation

Due to continuous propellant consumption, OTV mass undergoes continuous decrease:

$$\dot{m}(t) = -\frac{T_{max}}{I_{sp} \cdot g_0}$$

Where $I_{sp}$ is specific impulse and $g_0$ is standard gravitational acceleration.

## Impact on Mission Planning

### State-Dependent Transfer Cost

Mass discontinuity makes the transfer cost between any two points dependent on the dynamic quantity at its position in the sequence:

$$C(i, j, k) \neq C(i, j, k')$$

The same origin-destination combination has different transfer costs under different mass states $k$ and $k'$.

### Impact on Sequence Optimization

Research results (Hu Min et al., 2026):

| Model Type | N=8 Propellant Consumption | N=12 Propellant Consumption | Feasibility |
| :--- | :--- | :--- | :--- |
| State-Dependent (SDTSP-DP) | 487.7 kg | 632.1 kg | Feasible |
| State-Independent (SI-Greedy) | 602.5 kg | 902.1 kg* | Exceeded |

*Indicates exceeding the initial propellant mass carried by OTV

### Key Findings

1. **Systematic Underestimation**: State-independent models that ignore mass discontinuity systematically underestimate transfer costs in later mission phases
2. **Optimal Sequence Differences**: Accurate modeling of mass discontinuity leads to completely different optimal deployment sequences
3. **Strategic Detour Phenomenon**: With accurate modeling, dynamic programming strategically postpones high-cost maneuvers until OTV is lightest and most efficient

## Importance of Accurate Modeling

### Engineering Value

- **Feasibility Guarantee**: Accurate modeling ensures feasible solutions can be found at various mission scales
- **Propellant Savings**: In N=12 scenarios, accurate modeling can save approximately 25.8% propellant
- **Solution Reliability**: Avoids mission failures due to cost underestimation

### Reasonableness of Decoupling Assumption

Research by Hu Min et al. (2026) validates that simplifying continuous mass consumption to discrete discontinuities during sequence planning is reasonable and feasible:

- Refined results are highly consistent with estimated costs (deviation only 2.8%)
- Discrete discontinuities are the primary factor affecting cost
- Continuous consumption impact can be compensated during trajectory refinement

## Mass Discontinuity and State Update

Mass discontinuity after each deployment completion leads to OTV state update:

$$k = |S| - 1$$

Where $k$ is the number of deployed small satellites and $|S|$ is the size of the current visited set.

This relationship determines the value of $k$ in the cost matrix $C(i, j, k)$, which in turn affects optimality conditions in the Bellman equation.

## Related Concepts

- [Orbital Transfer Vehicle (OTV)](/en/glossary/fundamentals/orbital-transfer-vehicle/)
- [Batch Deployment](/en/glossary/dynamics/batch-deployment/)
- [State-Dependent Traveling Salesman Problem (SDTSP)](/en/glossary/dynamics/state-dependent-tsp/)
- [Q-law Control Law](/en/glossary/dynamics/q-law/)
- [Hub-and-Spoke](/en/glossary/orbits/hub-and-spoke/)

## References

- 胡敏, 肖金伟, 张天天, 陶雪峰. 面向中高轨小卫星批量部署的轨道转移飞行器任务规划[J]. 航天器工程, 2026, 25(3): 634-646.
- Apa R, Kaminer I, Hudson J, et al. Optimal low-thrust orbital transfer for servicing multiple satellites in elliptical orbits[J]. Journal of Guidance, Control, and Dynamics, 2023, 46(6): 1723-1738.
- Lee D, Ahn J. Optimal multitarget rendezvous using hybrid propulsion system[J]. Journal of Spacecraft and Rockets, 2023, 60(2): 456-471.
