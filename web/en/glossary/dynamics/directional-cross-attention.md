---
title: Directional Cross-Attention
description: A cross-attention mechanism where the policy network (actor) queries the critic's state representation to incorporate value function context, enabling feature fusion between policy and value functi...
keywords: Directional Cross-Attention, cislunar space, orbital mechanics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Directional Cross-Attention
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Directional Cross-Attention Explained | Term Definition
  description: A cross-attention mechanism where the policy network (actor) queries the critic's state representation to incorporate value function context, enabling feature fusion between policy and value functi...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Directional Cross-Attention Explained | Term Definition
  description: A cross-attention mechanism where the policy network (actor) queries the critic's state representation to incorporate value function context, enabling feature fusion between policy and value functi...
  image: /logo.png
permalink: /en/glossary/dynamics/directional-cross-attention/
---

# Directional Cross-Attention

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition
A cross-attention mechanism where the policy network (actor) queries the critic's state representation to incorporate value function context, enabling feature fusion between policy and value function. The paper adopts a critic-to-actor directional design, allowing the policy to be conditioned by valuation signals while keeping the critic decoupled from the actor's exploratory noise.

## Application Value
This term has application value in the design and analysis of cislunar space missions, supporting trajectory design, mission planning, and system optimization. Researchers can analyze its physical mechanisms and engineering applicability based on specific mission requirements to advance cislunar space exploration technology.

## Related Concepts
- [Elliptic Restricted Three-Body Problem](/en/glossary/dynamics/elliptic-restricted-three-body-problem/)
- [Dynamical Consistency](/en/glossary/dynamics/dynamical-consistency/)
- [Combined Covariance](/en/glossary/dynamics/combined-covariance/)
- [Nekhorosev Estimates](/en/glossary/dynamics/nekhorosev-estimates/)

## References
- Ul Haq 等 - 2026 - Autonomous low-thrust trajectory optimization in cislunar space via attention-augmented reinforcement learning