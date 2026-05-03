---
title: Heteroclinic Orbit Transfer (Heteroclinic Orbit Transfer)
description: Detailed analysis of heteroclinic orbit definition, application in libration point transfer, and its position in the Interplanetary Superhighway theory
keywords: Heteroclinic Orbit, Interplanetary Superhighway, Low-energy Transfer, Libration Point, Halo Orbit, Invariant Manifold
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Heteroclinic Orbit Transfer (Heteroclinic Orbit Transfer)
  desc: Cislunar space research frontiers, terminology definitions, and tool resources in one-stop learning.
  image: /logo.png
og:
  title: Heteroclinic Orbit Transfer Explained | Interplanetary Superhighway Theory
  description: Detailed analysis of heteroclinic orbit definition, application in libration point transfer, and its position in the Interplanetary Superhighway theory
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Heteroclinic Orbit Transfer Explained | Interplanetary Superhighway Theory
  description: Detailed analysis of heteroclinic orbit definition, application in libration point transfer, and its position in the Interplanetary Superhighway theory
  image: /logo.png
permalink: /en/glossary/dynamics/heteroclinic-orbit-transfer/
---

# Heteroclinic Orbit Transfer

> Editor Source: 郭建宇 (2020) "基于双基不变流形法的平动点轨道设计及保持策略研究"
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A heteroclinic orbit is an orbit connecting two different equilibrium points of a dynamical system. In the Circular Restricted Three-Body Problem (CR3BP), heteroclinic orbits connect two different libration points (such as L1 and L2), or connect libration points with periodic orbits. Transfer along heteroclinic orbits is an extremely low-energy transfer method, regarded as an important component of the "Interplanetary Superhighway."

## Theoretical Foundation

### Mathematical Definition of Heteroclinic Orbits

In dynamical systems theory, a heteroclinic orbit satisfies:

$$\lim_{t \to -\infty} x(t) = L_i, \quad \lim_{t \to +\infty} x(t) = L_j$$

Where $L_i$ and $L_j$ are two different equilibrium points (libration points). When $i = j$, it is called a homoclinic orbit.

### Existence in CR3BP

The existence of heteroclinic orbits between collinear libration points in the Earth-Moon system has been proven. These heteroclinic orbits travel along channels formed by unstable manifolds connecting two libration points.

## Transfer Mechanism

### Using Heteroclinic Orbits for Transfer

In 郭建宇 (2020)'s research, a heteroclinic orbit was used to find a path from Earth orbit to a Halo periodic orbit near the Earth-Moon L2 libration point:

1. Depart from Earth orbit, apply initial impulse to enter heteroclinic orbit
2. Evolve naturally along heteroclinic orbit, no additional propellant needed
3. Orbit naturally connects to Halo periodic orbit near L2 point
4. Captured by target periodic orbit

### Relationship with Invariant Manifolds

Heteroclinic orbits are essentially a special form of invariant manifolds:

| Orbit Type | Start Point | End Point |
|:---|:---|:---|
| Homoclinic orbit | Libration point $L_i$ | Libration point $L_i$ (self) |
| Heteroclinic orbit | Libration point $L_i$ | Libration point $L_j$ (different) |
| Periodic orbit | Libration point $L_i$ | Libration point $L_i$ (homoclinic special case) |

## Interplanetary Superhighway

Heteroclinic orbits are core components of the "Interplanetary Superhighway" theory. Martin Lo proposed that using invariant manifolds at libration points and heteroclinic orbits, a low-energy transfer network connecting various planetary orbits in the solar system can be constructed.

### Interplanetary Superhighway Characteristics

- **Low energy**: Using natural dynamical channels significantly reduces transfer energy requirements
- **Networked**: Manifolds at various libration points interconnect, forming a transfer network
- **Time scale**: Transfer time may be very long (months to years)

## Application Value

Heteroclinic orbit transfers provide extremely low-energy transfer solutions for deep space exploration:

| Application | Description |
|:---|:---|
| Cislunar missions | Low-energy transfer from Earth orbit to L2 Halo orbit |
| Mars exploration | Low-energy transfer design using Sun-Mars L1/L2 heteroclinic orbits |
| Asteroid exploration | Multi-target exploration missions using heteroclinic orbits |
| Deep space navigation | As "main roads" for interplanetary routes |

## Core Elements

### Mathematical Definition
A heteroclinic orbit connects two different equilibrium points of a dynamical system; in CR3BP, it connects two different libration points or a libration point with a periodic orbit.

### Key Properties
Transfer along heteroclinic orbits requires no or minimal energy consumption, making it an important approach for low-energy deep space transfers.

### Numerical Methods
Computing heteroclinic orbits requires precise numerical integration of invariant manifolds, along with detection and verification of homoclinic/heteroclinic orbits.

## Related Concepts

- [Primary Impulse Orbit Transfer](/en/glossary/orbits/primary-impulse-transfer/)
- [Invariant Manifold](/en/glossary/dynamics/central-manifold/)
- [Libration Point](/en/glossary/dynamics/libration-point/)
- [Interplanetary Superhighway](/en/glossary/orbits/low-energy-transfer/)
- [Low Energy Transfer Orbit](/en/glossary/orbits/low-energy-transfer/)
- [Halo Orbit](/en/glossary/orbits/halo-orbit/)

## References

- 郭建宇. 基于双基不变流形法的平动点轨道设计及保持策略研究[D]. 北京工业大学, 2020.
- Martin Lo W. The Interplanetary Superhighway and the Genesis Mission[R]. JPL, 2002.
- Koon W S, Lo M W, Marsden J E, et al. Dynamical systems, the three-body problem and space mission design[J]. 2006.
