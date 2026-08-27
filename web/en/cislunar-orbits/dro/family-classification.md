---
title: DRO Orbit Family Classification
description: Single-parameter family structure, period-amplitude characteristics, planar family and vertical self-resonant 3D bridging families of Distant Retrograde Orbits.
keywords: DRO classification, vertical self-resonance, bridging family, Lyapunov orbit, DRO parameters
author: CislunarSpace
date: 2026-04-26
lastUpdated: 2026-08-27
permalink: /en/cislunar-orbits/dro/family-classification/
wechatShare:
  title: "Cislunar Space Guide | DRO Family Classification"
  desc: "L1/L2 classification, period-amplitude characteristics, bifurcation relations, and north-south symmetry of Distant Retrograde Orbits."
  image: "/logo.png"
---

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Source: <https://cislunarspace.cn>

# DRO Family Classification

## A Single Retrograde Family Around the Moon

A common misconception must be cleared up first: **DROs do not orbit a libration point — they are retrograde periodic orbits around the Moon**. In the Earth–Moon rotating frame, a DRO closes about the Moon at scales far exceeding the lunar sphere of influence. Labels such as "L1 DRO / L2 DRO" have no basis; the coordinates often quoted for them (x ≈ 0.836 / 1.166) belong to the L1/L2 libration points themselves, not to any DRO geometry.

In the CR3BP, retrograde periodic solutions about the Moon form a single one-parameter family that extends continuously from small amplitudes (close to the Moon) up to amplitudes approaching the Earth–Moon distance, with period growing monotonically along the family. Mission-relevant mid- to large-amplitude members typically span 40,000–100,000 km in amplitude with periods near two weeks; the Chinese Academy of Sciences' DRO-A/B twins fly a 2:1 synodic-resonant DRO with a period of about 14 days.

| Parameter | Typical range |
| ------ | -------- |
| Amplitude | 40,000–100,000 km |
| Typical period | ≈ 10–16 days (grows with amplitude) |
| Jacobi constant $C_J$ | Near 3.0 (varies slowly with amplitude) |

> Precise values of period and amplitude depend on the dynamical model used (CR3BP/ER3BP/ephemeris); the table gives orders of magnitude common in mission design.

## Planar Family and 3D Bridging Families

The classical DRO lies entirely within the Earth–Moon rotating plane; it is a purely planar periodic family and has no "southern/northern" split (reflecting a planar orbit through z → −z returns the orbit itself).

The structurally interesting features come from bifurcations. Along the family continuation, DROs sequentially pass through **period-doubling bifurcations** (giving rise to derived families such as Butterfly) and the **vertical self-resonant bifurcation**. Beyond the vertical self-resonant point, a chain of **bridging families** connects the planar retrograde family to three-dimensional prograde spatial orbits, producing high-inclination / polar-like morphologies known as Dragonfly and Hoverfly families. These bridging families provide a design entry point — starting from the stable planar family — for missions requiring high-inclination coverage.

## Relation to Lyapunov Orbits

Classical literature often traces the origin of DROs through bifurcation chains linking libration-point periodic orbits: as energy varies, certain branches connect the DRO family to the Lyapunov/Halo families through period-doubling and related bifurcations. Geometrically, however, a DRO is always centered on the Moon and should never be described as an orbit "near L1 or L2".

## Orbit Family Illustration

![DRO orbit schematic](../../glossary/figures/dro/barycentric-frame-and-dro-schematic.png)

The figure above shows the morphology of DRO orbits in the Earth-Moon rotating frame, clearly demonstrating their retrograde characteristic (motion opposite to the rotating frame)
