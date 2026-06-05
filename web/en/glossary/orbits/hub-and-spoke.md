---
title: Hub-and-Spoke
description: Explanation of the hub-and-spoke architecture — definition, application in satellite deployment, and integration with orbital transfer vehicles
keywords: Hub-and-spoke, space logistics, deployment architecture, OTV, satellite deployment
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Hub-and-Spoke
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Hub-and-Spoke Architecture | Satellite Deployment Model
  description: Explanation of the hub-and-spoke architecture and its application in satellite deployment
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Hub-and-Spoke Architecture | Satellite Deployment Model
  description: Explanation of the hub-and-spoke deployment architecture and its integration with OTV
  image: /logo.png
permalink: /en/glossary/orbits/hub-and-spoke/
---

# Hub-and-Spoke

> Source: Hu Min, Xiao Jinwei, Zhang Tiantian, Tao Xuefeng (2026) "Mission planning of orbital transfer vehicles for batch deployment of medium-to-high orbit small satellites"
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

**Hub-and-Spoke** is a space logistics and deployment architecture in which an Orbital Transfer Vehicle (OTV) serves as a "space bus," co-orbiting with an on-orbit residence platform. The OTV departs from the platform to complete deployment missions and must return to the platform for propellant replenishment and maintenance before undertaking subsequent missions.

This architecture is a key engineering constraint for achieving OTV reusability and building a cost-effective space logistics system.

## Architecture Characteristics

### Core Components

1. **On-orbit residence platform**: A long-term on-orbit platform co-orbiting with the OTV
2. **Orbital Transfer Vehicle (OTV)**: The transport vehicle that executes specific deployment missions
3. **Target orbits**: The operational orbits of each small satellite
4. **Small satellites**: The payloads to be deployed

### Operational Workflow

The operational workflow described by Hu et al. (2026):

1. The launch vehicle upper stage delivers the OTV to a parking orbit near the target operational region
2. The OTV docks with or co-orbits the on-orbit residence platform
3. The OTV departs from the platform and sequentially visits each target operational orbit
4. The OTV precisely releases the corresponding small satellite at each target orbit
5. After completing a batch of deployments, the OTV returns to the platform for propellant replenishment
6. The cycle repeats until all deployment missions are completed

### Engineering Advantages

| Advantage | Description |
|:---|:---|
| Reusability | OTV returns to the platform for propellant replenishment and maintenance |
| Flexible deployment | Departs from a unified platform to flexibly address multi-plane, multi-altitude deployment requirements |
| Extended lifespan | Small satellites do not consume their own propellant, extending on-orbit service life |
| Cost-effectiveness | Multiple reuses reduce per-payload transport costs |

## Comparison with Traditional Models

### Direct Insertion Model

- Satellites are delivered directly to target orbits by the launch vehicle
- High cost and long launch cycle
- Difficult to flexibly address complex deployment requirements

### Indirect Insertion Model (Satellite Self-Maneuvering)

- Rocket delivers to a parking orbit
- Satellite relies on its own propulsion system to maneuver to the target orbit
- Consumes significant amounts of the small satellite's precious propellant
- Significantly shortens on-orbit service life

### Hub-and-Spoke OTV Deployment Model

- OTV serves as the transport intermediary
- Small satellites are passively deployed (no self-maneuvering required)
- Platform resupply enables OTV reusability
- Optimal in terms of both cost and flexibility

## Applicability to Medium-to-High Orbit Deployment

### Characteristics of Medium-to-High Orbits

Medium-to-high orbit satellite constellations have the following features:

- **Superior coverage**: Large single-satellite coverage area
- **Concentrated configuration**: Satellites are concentrated near specific orbital planes
- **High deployment difficulty**: Orbital transfers require more propellant

### Hub-and-Spoke Solution

The research by Hu et al. (2026) demonstrates:

- The OTV can depart from the platform to sequentially visit medium-to-high orbit target orbits
- Platform resupply ensures the OTV has sufficient propellant to complete missions
- Deployment sequence optimization minimizes total cost
- Propellant savings of up to 25.8% compared to the state-independent model

## Multi-OTV Coordination Outlook

The research notes that future exploration of multi-OTV coordinated deployment models is possible:

- Multiple OTVs executing deployment missions in parallel
- Coordinated planning to further improve deployment efficiency
- The SDTSP model serves as the core foundation for coordinated planning

## Related Concepts

- [Orbital Transfer Vehicle (OTV)](/en/glossary/fundamentals/orbital-transfer-vehicle/)
- [Batch Deployment](/en/glossary/dynamics/batch-deployment/)
- [On-Orbit Residence Platform](/en/glossary/other/orbital-residence-platform/)
- [State-Dependent Traveling Salesman Problem (SDTSP)](/en/glossary/dynamics/state-dependent-tsp/)
- [Mass Discontinuity](/en/glossary/dynamics/mass-discontinuity/)

## References

- Hu M, Xiao J W, Zhang T T, Tao X F. Mission planning of orbital transfer vehicles for batch deployment of medium-to-high orbit small satellites[J]. Spacecraft Engineering, 2026, 25(3): 634-646. (in Chinese)
- Baratof T, Toson E, Milza F, et al. Investigation of different strategies for access to space of small satellites on a defined LEO orbit[J]. Acta Astronautica, 2024, 222: 11-28.
