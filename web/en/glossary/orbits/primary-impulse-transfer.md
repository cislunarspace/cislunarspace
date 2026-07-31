---
title: Primary Impulse Orbit Transfer
description: Detailed explanation of primary impulse orbit transfer — principles, comparison with Hohmann two-impulse transfer, and applications in the Earth-Moon system
keywords: Primary Impulse, orbit transfer, transfer time, energy consumption, Earth-Moon system, libration point
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Primary Impulse Orbit Transfer
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "Primary Impulse Orbit Transfer | Libration Point Transfer Orbit Design"
  description: Detailed explanation of primary impulse orbit transfer — principles, comparison with Hohmann two-impulse transfer, and applications in the Earth-Moon system
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Primary Impulse Orbit Transfer | Libration Point Transfer Orbit Design"
  description: Detailed explanation of primary impulse orbit transfer — principles, comparison with Hohmann two-impulse transfer, and applications in the Earth-Moon system
  image: /logo.png
permalink: /en/glossary/orbits/primary-impulse-transfer/
---

# Primary Impulse Orbit Transfer

> Source: Guo Jianyu (2020) "Research on libration point orbit design and station-keeping strategies based on the two-dominant invariant manifold method"
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

**Primary Impulse Orbit Transfer** is an orbital transfer method that utilizes invariant manifolds near libration points. This method requires only a single impulse at the transfer starting point, after which the spacecraft naturally glides along the invariant manifold into the target orbit. Compared to the traditional Hohmann two-impulse transfer, primary impulse transfer exploits natural dynamical corridors and can significantly reduce energy consumption.

## Core Principles

### Invariant Manifold Properties

Stable and unstable manifolds exist near libration points, possessing the following properties:

- **Stable manifold $W_s$**: A spacecraft moving along this manifold naturally approaches the libration point periodic orbit without energy expenditure
- **Unstable manifold $W_u$**: A spacecraft moving along this manifold naturally departs from the periodic orbit without energy expenditure

### Transfer Mechanism

Primary impulse orbit transfer exploits this property:

1. A single impulse is applied on a near-celestial-body orbit (e.g., Earth orbit)
2. The spacecraft enters the invariant manifold connecting the near-celestial-body orbit with the libration point periodic orbit
3. The spacecraft glides along the invariant manifold without additional propellant consumption
4. The spacecraft ultimately arrives at the target libration point periodic orbit

### Comparison with Hohmann Two-Impulse Transfer

| Feature | Primary Impulse Transfer | Hohmann Two-Impulse Transfer |
| :--- | :--- | :--- |
| Number of impulses | 1 | 2 |
| Energy consumption | Lower (uses invariant manifold) | Higher |
| Transfer time | Longer | Shorter |
| Orbit accuracy | Depends on manifold computation accuracy | Higher |

## Earth-Moon System Applications

In the Earth-Moon restricted three-body model, primary impulse orbit transfer can accomplish the following missions:

### Typical Transfer Scenarios

| Origin | Target | Characteristics |
| :--- | :--- | :--- |
| Lunar orbit | L1 libration point | Relatively short transfer time |
| Lunar orbit | L2 libration point | Uses L2 unstable manifold |
| Earth orbit | L1 libration point | Long-distance transfer |
| Earth orbit | L2 libration point | Requires larger impulse |

### Orbital Parameters

Simulation analysis shows that typical primary impulse transfer orbital parameters include:

- **Transfer time**: Several days to several months (depending on origin and target)
- **Energy consumption**: Significantly lower than traditional Hohmann transfer
- **Impulse magnitude**: Typically on the order of hundreds of m/s

## Core Elements

### Mathematical Definition

Primary impulse orbit transfer exploits the tubular structure of invariant manifolds near libration points, applying a single impulse on a near-celestial-body orbit to place the spacecraft into the invariant manifold corridor connecting the near-celestial-body orbit with the target libration point periodic orbit.

### Key Properties

Transfer is achieved through the natural dynamical corridor of invariant manifolds, significantly reducing energy consumption, though transfer time is typically longer.

### Numerical Methods

Computation of invariant manifolds typically requires numerical integration and Lyapunov exponent analysis, with patch point selection being a critical step.

## Application Value

Primary impulse orbit transfer provides a low-energy transfer scheme for deep space exploration missions, particularly suitable for:

- Missions that are time-insensitive but fuel-consumption-sensitive
- Scenarios requiring transfer from near-celestial-body orbits to libration point periodic orbits
- As a component of constructing an "Interplanetary Superhighway"

## Related Concepts

- [Hohmann Transfer](/en/glossary/fundamentals/hohmann-transfer/)
- [Invariant Manifold](/en/glossary/dynamics/central-manifold/)
- [Heteroclinic Orbit Transfer](/en/glossary/dynamics/heteroclinic-orbit-transfer/)
- [Libration Point](/en/glossary/dynamics/libration-point/)
- [Low-Energy Transfer](/en/glossary/orbits/low-energy-transfer/)

## References

- Guo J Y. Research on libration point orbit design and station-keeping strategies based on the two-dominant invariant manifold method[D]. Beijing University of Technology, 2020. (in Chinese)
- Lo M W, Ross S D. Low-energy interplanetary transfers using the invariant manifolds of L1, L2 halo orbits[C]. AAS/AIAA Astrodynamics Specialist Conference, 1998.
- Martin Lo W. The Interplanetary Superhighway and the Genesis Mission[R]. 2002.
