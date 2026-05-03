---
title: Batch Deployment (Batch Deployment)
description: Detailed analysis of batch deployment mission concepts, characteristics, and the State-Dependent TSP model for orbital transfer vehicle mission planning
keywords: Batch Deployment, OTV, State-dependent TSP, Low-thrust transfer, Orbit transfer, Satellite deployment
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Batch Deployment (Batch Deployment)
  desc: Cislunar space research frontiers, terminology definitions, and tool resources in one-stop learning.
  image: /logo.png
og:
  title: Batch Deployment Explained | OTV Mission Planning
  description: Detailed analysis of batch deployment mission concepts, characteristics, and the SDTSP model for orbital transfer vehicle mission planning
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Batch Deployment Explained | OTV Mission Planning
  description: Detailed analysis of batch deployment mission concepts, characteristics, and the SDTSP model for orbital transfer vehicle mission planning
  image: /logo.png
permalink: /en/glossary/dynamics/batch-deployment/
---

# Batch Deployment (Batch Deployment)

> Editor Source: 胡敏, 肖金伟, 张天天, 陶雪峰 (2026) "面向中高轨小卫星批量部署的轨道转移飞行器任务规划"
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Batch deployment refers to a mission mode where an Orbital Transfer Vehicle (OTV) carries multiple small satellites and deploys them sequentially to their respective target orbits during a single mission. This mode significantly improves launch vehicle utilization efficiency and reduces mission costs.

## Mission Characteristics

### Hub-and-Spoke Architecture

The batch deployment mode typically adopts a hub-and-spoke architecture:
- **Hub (Origin)**: Launch orbit (usually GEO or MEO)
- **Spokes (Targets)**: Multiple target orbits for small satellite deployment
- **OTV**: Performs orbit transfers between orbits, deploying satellites along the way

### Dual Propulsion System

The OTV typically uses a dual propulsion system:
- **Chemical propulsion**: Provides high thrust for orbit raising and large maneuver requirements
- **Electric propulsion**: Provides low thrust for fine orbit adjustments and efficient transfer

## Key Technologies

### Q-law Control Law

The Q-law is a Lyapunov-based feedback control law for low-thrust orbit transfer:
- Constructs a scalar Q function describing state error
- Ensures Q function decreases monotonically
- Guides spacecraft to converge autonomously to target orbit

### State-Dependent Cost Matrix

Due to mass discontinuity after each satellite deployment, the transfer cost matrix becomes three-dimensional:
- **i**: Starting orbit
- **j**: Target orbit
- **k**: Number of satellites already deployed (determines OTV mass state)

### Coasting Arc Mechanism

When thrust efficiency falls below a threshold, the engine shuts down and the spacecraft coasts:
- Achieves propellant-time trade-off
- Can save approximately 21% propellant with about 14% time increase

## Mission Planning Challenges

### State-Dependent Traveling Salesman Problem (SDTSP)

The deployment sequence optimization problem is modeled as SDTSP:
- Nodes represent target orbits
- Edge weights are state-dependent orbit transfer costs
- Constraint: Must visit all nodes with each node visited exactly once
- Objective: Minimize total transfer cost

### Dynamic Programming Solution

For medium-scale missions (N ≤ 12), dynamic programming provides globally optimal solutions:
- Time complexity: $O(N^2 \cdot 2^N)$
- Space complexity: $O(N \cdot 2^N)$

## Performance Analysis

Research results (胡敏等, 2026) show:

| Optimization Objective | Propellant (kg) | Transfer Time (d) | CPU Time (s) |
|:---|:---|:---|:---|
| Time minimization | 96.49 | 32.87 | 0.00025 |
| Propellant minimization | 76.07 | 37.55 | 0.00026 |
| Trade-off | 85.12 | 35.87 | 0.00025 |

## Related Concepts

- [Orbital Transfer Vehicle (OTV)](/en/glossary/fundamentals/orbital-transfer-vehicle/)
- [Q-law Control Law](/en/glossary/dynamics/q-law/)
- [State-Dependent TSP](/en/glossary/dynamics/state-dependent-tsp/)
- [Mass Discontinuity](/en/glossary/dynamics/mass-discontinuity/)
- [Coasting Arc](/en/glossary/dynamics/coasting-arc/)
- [Hub-and-Spoke](/en/glossary/orbits/hub-and-spoke/)

## References

- 胡敏, 肖金伟, 张天天, 陶雪峰. 面向中高轨小卫星批量部署的轨道转移飞行器任务规划[J]. 航天器工程, 2026, 25(3): 634-646.
- Narayanaswamy S, Damaren C J. Equinoctial Lyapunov control law for low-thrust rendezvous[J]. Journal of Guidance, Control, and Dynamics, 2023, 46(4): 781-795.
