---
title: Orbital Transfer Vehicle
description: Detailed explanation of the Orbital Transfer Vehicle (OTV) definition, functions, types, and applications in satellite deployment and space transportation
keywords: Orbital Transfer Vehicle, OTV, Orbital Transfer, Satellite Deployment, Last Mile Delivery, Space Transportation
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Orbital Transfer Vehicle
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "Orbital Transfer Vehicle | Terminology Definition"
  description: Detailed explanation of the Orbital Transfer Vehicle definition, functions, and applications
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Orbital Transfer Vehicle | Terminology Definition"
  description: Detailed explanation of the Orbital Transfer Vehicle definition, functions, and applications
  image: /logo.png
permalink: /en/glossary/fundamentals/orbital-transfer-vehicle/
---

# Orbital Transfer Vehicle (OTV)

> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An Orbital Transfer Vehicle (OTV) is a specialized spacecraft used to transfer satellites, cargo, and payloads between orbits. The OTV primarily solves the "last mile" transportation problem of moving satellites from parking orbits to target orbits, and is a key capability for rapid and flexible satellite deployment. The OTV is also referred to as a "Last Mile Delivery" (LMD) vehicle.

## Functions and Characteristics

### Core Functions

- **Orbit Raising**: Transports satellites from low orbit to high orbit (e.g., GEO, MEO)
- **Orbit Adjustment**: Precisely adjusts satellite orbital parameters (inclination, altitude, argument of perigee)
- **Constellation Deployment**: Supports rapid networking and deployment of large-scale constellations
- **On-Orbit Servicing**: Capable of performing on-orbit refueling, maintenance, and other tasks

### Technical Characteristics

- **Multiple Restart Capability**: Orbital maneuver capability with multiple in-space engine restarts
- **Precision Guidance and Control**: High-precision orbital maneuvering and station-keeping
- **Payload Versatility**: Standardized interfaces compatible with different satellite platforms
- **Green Propulsion**: Modern OTVs increasingly adopt green propellants (e.g., HAN-based propellants)

## Classification

### By Propulsion Type

- **Chemical Propulsion OTV**: Uses chemical propellants, suitable for large-scale orbital transfers
- **Electric Propulsion OTV**: Uses ion or Hall-effect thrusters, suitable for small-scale adjustments
- **Hybrid Propulsion OTV**: Combines chemical and electric propulsion to optimize performance and efficiency

### By Mission Type

- **GEO Transfer OTV**: Specifically transfers payloads from GTO to GEO
- **Constellation Deployment OTV**: Supports rapid deployment of large-scale LEO constellations
- **On-Orbit Servicing OTV**: Performs on-orbit refueling, maintenance, and other tasks
- **Cislunar OTV**: Supports orbital transfer missions in cislunar space

### Satellite Constellation Deployment

OTVs can significantly accelerate satellite constellation deployment:

- Traditional approach: Satellites are directly inserted into orbit, requiring multiple rockets
- OTV approach: Satellites are first inserted into orbit, then distributed to individual orbital planes via OTV

### Geostationary Orbit (GEO) Satellites

OTVs are an important means of GEO satellite deployment:

- Transferring payloads from GTO to GEO
- Extending satellite lifespan (saving propellant for station-keeping)
- Supporting on-orbit maintenance and upgrades of GEO satellites

### Batch Deployment of Medium and High Orbit Small Satellites

Hu Min et al. (2026) proposed using OTVs for batch deployment of medium and high orbit small satellites, establishing a "hub-and-spoke" deployment architecture:

- **Architecture Features**: The OTV serves as a "space bus," co-orbiting with an on-orbit residence platform, departing from the platform to complete a batch of small satellite deployments before returning to the platform for propellant replenishment and maintenance
- **Mass Discontinuity Characteristics**: After each small satellite separation, the OTV total mass undergoes discrete reduction, directly affecting subsequent orbital transfer costs and requiring precise modeling
- **Mission Planning Challenge**: Essentially a Multi-Target Rendezvous Problem (MTRP) with NP-hard properties, where discrete satellite visit sequences and continuous transfer trajectories require deeply coupled optimization
- **Solution Method**: A partially decoupled two-stage approach combining "trajectory optimization + sequence planning," where the upper level models the problem as a State-Dependent Traveling Salesman Problem (SDTSP) and the lower level uses Q-law control law to offline generate a state-dependent transfer cost matrix

### Cislunar Space Transportation

In cislunar space, OTVs can perform:

- Payload transportation on Earth-Moon transfer orbits
- Resupply of key orbits such as NRHO and GEO
- Transit support for lunar missions

## Related Concepts

- [Reusable Launch Vehicle](/en/glossary/fundamentals/reusable-launch-vehicle/)
- [SpaceX](/en/glossary/organizations/spacex/)
- [Batch Deployment](/en/glossary/dynamics/batch-deployment/)
- [Mass Discontinuity](/en/glossary/dynamics/mass-discontinuity/)

## References

- KASA, "Space Transportation Strategic Plan", 2024.
- Euroconsult, "Satellite to be Built & Launched", 2022.
- Firefly Aerospace, "Alpha OTV Development", 2024.
- Hu Min, Xiao Jinwei, Zhang Tiantian, Tao Xuefeng. Mission Planning of Orbital Transfer Vehicle for Batch Deployment of Medium and High Orbit Small Satellites[J]. Spacecraft Engineering, 2026, 25(3): 634-646.
