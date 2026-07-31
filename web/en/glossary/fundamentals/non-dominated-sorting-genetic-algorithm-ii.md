---
title: Non-Dominated Sorting Genetic Algorithm II (NSGA-II)
description: An efficient multi-objective evolutionary algorithm that rapidly sorts the population into layers via non-dominated sorting, measures solution diversity usin...
keywords: Non-Dominated Sorting Genetic Algorithm II, NSGA-II
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Non-Dominated Sorting Genetic Algorithm II
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Non-Dominated Sorting Genetic Algorithm II Explained | Term Definition"
  description: An efficient multi-objective evolutionary algorithm that rapidly sorts the population into layers via non-dominated sorting, measures solution diversity usin...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Non-Dominated Sorting Genetic Algorithm II Explained | Term Definition"
  description: An efficient multi-objective evolutionary algorithm that rapidly sorts the population into layers via non-dominated sorting, measures solution diversity usin...
  image: /logo.png
permalink: /en/glossary/fundamentals/non-dominated-sorting-genetic-algorithm-ii/
---

# Non-Dominated Sorting Genetic Algorithm II

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An efficient multi-objective evolutionary algorithm that rapidly sorts the population into layers via non-dominated sorting, measures solution diversity using crowding distance, and employs elitist preservation. In multi-objective low-thrust trajectory optimization, it generates the Pareto front between competing objectives of velocity increment and flight time.

## Application Value

In low-thrust trajectory optimization, minimum-time trajectories serve as a prerequisite, first determining the minimum flight time, then using it as the terminal time constraint for the fuel-optimal problem. This hierarchical optimization strategy significantly reduces the computational complexity of multi-objective trajectory design.

## Related Concepts

- [Scheduled and Pinpoint Landing](/en/glossary/fundamentals/scheduled-and-pinpoint-landing/)
- [Surface of Section, SOS](/en/glossary/fundamentals/surface-of-section-sos/)
- [Truncation Strategy](/en/glossary/fundamentals/truncation-strategy/)

## References

- Vellutini & Avanzini, 2014, Shape-based design of low-thrust trajectories to cislunar lagrangian point
