---
title: 渐进扩展（Progressive Widening, PW）
description: 一种用于控制蒙特卡洛树搜索分支因子的启发式方法。通过使每个节点的可用动作数随访问次数j按 k = ceil(C * j^alpha) 增长，在搜索初期约束分支以到达深层状态，随后逐步扩展以提高解的多样性。
keywords: 渐进扩展, Progressive Widening, PW, PW, 轨道动力学, 姿态控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 渐进扩展（Progressive Widening, PW）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 渐进扩展详解 | 术语定义
  description: 一种用于控制蒙特卡洛树搜索分支因子的启发式方法。通过使每个节点的可用动作数随访问次数j按 k = ceil(C * j^alpha) 增长，在搜索初期约束分支以到达深层状态，随后逐步扩展以提高解的多样性。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 渐进扩展详解 | 术语定义
  description: 一种用于控制蒙特卡洛树搜索分支因子的启发式方法。通过使每个节点的可用动作数随访问次数j按 k = ceil(C * j^alpha) 增长，在搜索初期约束分支以到达深层状态，随后逐步扩展以提高解的多样性。
  image: /logo.png
permalink: /glossary/dynamics/progressive-widening-pw/
---

# 渐进扩展（Progressive Widening, PW）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：Klonowski 等 - 2024 - Cislunar space domain awareness architecture design and analysis for cooperative agents
>
> 站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种用于控制蒙特卡洛树搜索分支因子的启发式方法。通过使每个节点的可用动作数随访问次数j按 k = ceil(C * j^alpha) 增长，在搜索初期约束分支以到达深层状态，随后逐步扩展以提高解的多样性。

## 应用价值

该术语在地月空间任务中具有重要应用价值。在轨道设计阶段，工程师利用相关理论进行轨迹优化；在导航与轨道确定中，用于提升测量精度；在姿态控制与轨道保持任务中，确保航天器稳定运行。具体应用中，可结合任务需求进行参数优化和算法适配，提高任务成功率和资源利用效率。

## 相关概念

- [特征指数（Characteristic Exponents）](/glossary/dynamics/characteristic-exponents/)
- [捕获对接段（Capture Docking Phase）](/glossary/navigation/capture-docking-phase/)
- [月球借力转移（Lunar Flyby Transfer）](/glossary/orbits/lunar-flyby-transfer/)

## 参考文献

- Klonowski 等 - 2024 - Cislunar space domain awareness architecture design and analysis for cooperative agents
