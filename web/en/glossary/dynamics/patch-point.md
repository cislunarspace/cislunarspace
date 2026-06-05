---
title: Patch Point (Splicing Point)
description: Detailed analysis of patch point selection and its role in multi-segment orbit computation
keywords: Patch Point, Splicing Point, Multi-Segment Orbit, Orbit Computation, Boundary Condition
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Patch Point (Splicing Point)
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Patch Point Details | Key Nodes in Multi-Segment Orbit Computation
  description: Detailed analysis of patch point selection and its role in multi-segment orbit computation
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Patch Point Details | Key Nodes in Multi-Segment Orbit Computation
  description: Detailed analysis of patch point selection and its role in multi-segment orbit computation
  image: /logo.png
permalink: /en/glossary/dynamics/patch-point/
---

# Patch Point

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A patch point (splicing point) is a node where adjacent trajectory segments are connected in multi-segment orbit computation. Patch points serve as boundary conditions that ensure continuity of position and velocity across segments. Their selection significantly affects the convergence and accuracy of the orbit solution.

## Role in Orbit Computation

In multi-segment orbit design (e.g., transfer trajectories, multi-revolution orbits), the trajectory is divided into segments connected at patch points:

1. Each segment is propagated independently
2. Continuity conditions are enforced at patch points
3. Differential correction adjusts the patch point states to satisfy all constraints

## Selection Criteria

| Criterion | Description |
|:---|:---|
| Geometric location | Place patch points at physically meaningful positions (e.g., perilune, apolune, crossing points) |
| Dynamics | Choose points where the dynamics change character (e.g., near libration points) |
| Numerical conditioning | Avoid placing patch points where the state transition matrix is ill-conditioned |
| Adaptive selection | Dynamically adjust patch point positions during iteration to improve convergence |

## Adaptive Patch Point Selection

For complex orbits, adaptive patch point selection adjusts the number and positions of patch points based on the orbit geometry and convergence behavior. This approach:

- Automatically identifies regions requiring finer segmentation
- Improves convergence for sensitive orbits
- Reduces user intervention in orbit computation

## Related Concepts

- [Shooting Method](/en/glossary/dynamics/shooting-method/)
- [Differential Correction Method](/en/glossary/dynamics/differential-correction/)
- [Two-Level Differential Correction](/en/glossary/dynamics/two-level-differential-correction/)

## References

- Chen Yuju. DRO Orbit Design and Control Research for Cislunar Space Situation Awareness[D]. 2024.
