---
title: Orbital Residence Platform
description: Analysis of the Orbital Residence Platform concept, its role in hub-and-spoke deployment architecture, and collaborative operational modes with OTVs
keywords: Orbital Residence Platform, space logistics, hub-and-spoke, OTV, satellite deployment
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Orbital Residence Platform
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "Orbital Residence Platform Explained | Space Logistics Hub"
  description: "Analysis of the Orbital Residence Platform's role in hub-and-spoke deployment architecture"
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Orbital Residence Platform Explained | Space Logistics Hub"
  description: "Analysis of the Orbital Residence Platform's role in space logistics and satellite deployment"
  image: /logo.png
permalink: /en/glossary/other/orbital-residence-platform/
---

# Orbital Residence Platform

> Editorial source: Hu Min, Xiao Jinwei, Zhang Tiantian, Tao Xuefeng (2026) "Mission Planning for Orbital Transfer Vehicles for Batch Deployment of Medium-to-High Orbit Small Satellites" (in Chinese)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Orbital Residence Platform is the core infrastructure in a hub-and-spoke deployment architecture. It co-orbits with Orbital Transfer Vehicles (OTVs), providing docking stations where OTVs can receive resupply, maintenance, and mission handoff services.

The Orbital Residence Platform is a key component for enabling OTV reusability and constructing a cost-effective space logistics system.

## Functional Positioning

### Core Functions

1. **OTV docking and resupply**: Providing docking positions and propellant resupply for OTVs returning from completed deployment missions
2. **Maintenance and inspection**: Performing status checks and maintenance on OTVs
3. **Mission handoff**: Receiving OTVs that have completed a batch of deployment missions and preparing for the next batch
4. **Payload transfer**: Serving as a transit storage point for payloads such as small satellites

### Distinction from Traditional Approaches

In the hub-and-spoke architecture, the Orbital Residence Platform plays roles analogous to:

- A "spaceport" in the aerospace domain
- A "logistics hub" in cislunar space
- A "command tower" for constellation deployment

## Role in the Architecture

### Position in the Deployment Workflow

The mission workflow described by Hu Min et al. (2026):

1. **Mission start**: OTV departs from the platform to execute deployment missions
2. **Mission end**: OTV returns to the platform after completing a batch of deployments
3. **Resupply cycle**: Platform replenishes working fluid for the OTV and performs maintenance
4. **Mission continuation**: OTV executes the next batch of deployment missions

### Closed-Loop Operation Mechanism

The platform enables deployment missions to form a closed loop:

```text
Platform -> OTV departure -> Sequential deployment -> OTV return -> Resupply and maintenance -> Platform -> OTV re-departure
```

This closed loop forms the basis for OTV reusability, achieving an efficient operational mode of single launch, multiple deployments.

## Technical Characteristics

### Co-Orbital Stationing

The platform co-orbits with the OTV, offering the following advantages:

- **Low transfer costs**: OTV can dock without additional maneuvers
- **Flexible mission scheduling**: OTV sorties can be dispatched as needed
- **High system reliability**: Redundant design improves mission reliability

### Resupply Capabilities

The platform should possess the following resupply capabilities:

| Resupply Type | Description |
| :--- | :--- |
| Propellant resupply | Replenishing working fluid for OTVs |
| Power resupply | Charging or powering OTVs |
| Thermal management | Maintaining suitable temperature environment for OTVs |
| Status monitoring | Inspecting OTV technical condition |

## Application Scenarios

### Medium-to-High Orbit Satellite Deployment

In medium-to-high orbit navigation constellation deployment:

- The platform is deployed near the target operational region
- OTVs departing from the platform can cover multiple orbital planes
- Full constellation deployment is completed through multiple cycles

### Cislunar Space Transportation

In the cislunar space logistics system:

- The platform can serve as a transit station for cislunar transfers
- Supporting collaborative operation of multiple OTVs
- Constructing a cislunar space transportation network

## Related Concepts

- [Orbital Transfer Vehicle (OTV)](/en/glossary/fundamentals/orbital-transfer-vehicle/)
- [Hub-and-Spoke](/en/glossary/orbits/hub-and-spoke/)
- [Batch Deployment](/en/glossary/dynamics/batch-deployment/)
- [State-Dependent Traveling Salesman Problem (SDTSP)](/en/glossary/dynamics/state-dependent-tsp/)
- [Mass Discontinuity](/en/glossary/dynamics/mass-discontinuity/)

## References

- Hu Min, Xiao Jinwei, Zhang Tiantian, Tao Xuefeng. Mission Planning for Orbital Transfer Vehicles for Batch Deployment of Medium-to-High Orbit Small Satellites[J]. Spacecraft Engineering, 2026, 25(3): 634-646. (in Chinese)
- Song Zhengyu. Control Technologies and Challenges for Promoting Continuous Innovation in Space Transportation Systems[J]. Acta Aeronautica et Astronautica Sinica, 2025, 46(6): 531446. (in Chinese)
