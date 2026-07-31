---
title: SNOPT（SNOPT）
description: 一种基于序列二次规划方法的大规模约束优化求解器，由加州大学圣迭戈分校开发。在每步迭代中将非线性规划问题近似为二次规划子问题求解，适用于含等式和不等式约束的优化问题。
keywords: SNOPT, SNOPT, SNOPT, 星座, 轨道设计
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: SNOPT（SNOPT）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: SNOPT详解 | 术语定义
  description: 一种基于序列二次规划方法的大规模约束优化求解器，由加州大学圣迭戈分校开发。在每步迭代中将非线性规划问题近似为二次规划子问题求解，适用于含等式和不等式约束的优化问题。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: SNOPT详解 | 术语定义
  description: 一种基于序列二次规划方法的大规模约束优化求解器，由加州大学圣迭戈分校开发。在每步迭代中将非线性规划问题近似为二次规划子问题求解，适用于含等式和不等式约束的优化问题。
  image: /logo.png
permalink: /glossary/other/snopt/
---

# SNOPT（SNOPT）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：学术论文与专业资料整理
>
> 站长地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种基于序列二次规划方法的大规模约束优化求解器，由加州大学圣迭戈分校开发。在每步迭代中将非线性规划问题近似为二次规划子问题求解，适用于含等式和不等式约束的优化问题。

## 应用价值

SNOPT 基于序列二次规划方法，适合求解含等式和不等式约束的大规模优化问题。在航天器轨迹优化中，SNOPT 可有效处理多约束的复杂优化任务。

## 相关概念

- [小行星防御星座（Asteroid Defense Constellation）](/glossary/other/asteroid-defense-constellation/)
- [DCAP（Dynamic Control Analysis Package）](/glossary/other/dynamic-control-analysis-package/)
- [自适应退步搜索（A search strategy that automatically halves the velocity correction and backtracks when differential correction iteration enters an erroneous region (integration reaches the fixed time limit without satisfying the flight path angle constraint). In the strongly nonlinear phase space around Halo orbits, standard differential correction tends to diverge or converge to large-impulse trajectories. Backstepping search progressively reduces the correction step size until the iteration escapes the erroneous region and finds a solution satisfying the termination condition, improving convergence robustness.）](/glossary/other/in/)
- [天地往返运输系统（Earth-to-Orbit Round-Trip System）](/glossary/other/earthtoorbit-roundtrip-system/)

## 参考文献

- Gill, Murray & Saunders, 1997
