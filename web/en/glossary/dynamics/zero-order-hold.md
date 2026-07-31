---
title: Zero-Order Hold
description: "A control parametrization where the input remains constant between discretization nodes."
keywords: Zero-Order Hold
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Zero-Order Hold
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Zero-Order Hold Explained | Term Definition"
  description: A fundamental method in digital control systems for converting discrete sampled signals to continuous signals. It reads the control command at each sampling instant and holds that value constant over the entire interval until the next sampling instant. In digital implementation of orbit station-keeping, continuous-time controllers discretized via ZOH for direct use (emulation-based implementation) may suffer degraded closed-loop performance or even instability.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Zero-Order Hold Explained | Term Definition"
  description: A fundamental method in digital control systems for converting discrete sampled signals to continuous signals. It reads the control command at each sampling instant and holds that value constant over the entire interval until the next sampling instant. In digital implementation of orbit station-keeping, continuous-time controllers discretized via ZOH for direct use (emulation-based implementation) may suffer degraded closed-loop performance or even instability.
  image: /logo.png
permalink: /en/glossary/dynamics/zero-order-hold/
---

# Zero-Order Hold
> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A fundamental method in digital control systems for converting discrete sampled signals to continuous signals. It reads the control command at each sampling instant and holds that value constant over the entire interval until the next sampling instant. In digital implementation of orbit station-keeping, continuous-time controllers discretized via ZOH for direct use (emulation-based implementation) may suffer degraded closed-loop performance or even instability.

## Application Value

The Zero-Order Hold is significant in cislunar space mission design, analysis, and control. It can be used for transfer trajectory optimization during orbital design, navigation and control for improved mission precision and reliability, and system analysis to understand multi-body dynamical behavior and guide mission planning.


## Related Concepts

- [遭遇区域（Encounter Region）](/en/glossary/dynamics/encounter-region/)
- [相对论效应修正（Relativistic Correction）](/en/glossary/dynamics/relativistic-correction/)
- [直接飞越转移（Direct Fly-By Transfer, DFBT）](/en/glossary/dynamics/direct-fly-by-transfer-dfbt/)
- [安全转移编队（Safe Transfer Formation）](/en/glossary/dynamics/safe-transfer-formation/)


## References

- Elango 等 - 2025