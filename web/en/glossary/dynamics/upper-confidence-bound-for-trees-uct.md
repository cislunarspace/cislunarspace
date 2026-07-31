---
title: Upper Confidence Bound for Trees, UCT
description: The selection strategy in MCTS that balances exploration and exploitation via a multi-armed bandit formulation. At each node, the child maximizing Q(s,a) + C·√(
keywords: Upper Confidence Bound for Trees, UCT
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Upper Confidence Bound for Trees, UCT
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Upper Confidence Bound for Trees, UCT Explained | Term Definition"
  description: The selection strategy in MCTS that balances exploration and exploitation via a multi-armed bandit formulation. At each node, the child maximizing Q(s,a) + C·√(
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Upper Confidence Bound for Trees, UCT Explained | Term Definition"
  description: The selection strategy in MCTS that balances exploration and exploitation via a multi-armed bandit formulation. At each node, the child maximizing Q(s,a) + C·√(
  image: /logo.png
permalink: /en/glossary/dynamics/upper-confidence-bound-for-trees-uct/
---
# Upper Confidence Bound for Trees, UCT

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The selection strategy in MCTS that balances exploration and exploitation via a multi-armed bandit formulation. At each node, the child maximizing Q(s,a) + C·√(ln N(s)/N(s,a)) is selected, where Q is the action-value estimate, N(s) and N(s,a) are visit counts, and C is an exploration constant (typically √2).

## Related Concepts

- [Libration Point / Lagrange Point](/en/glossary/dynamics/libration-point-lagrange-point/)

## References

- Klonowski et al., 2023

