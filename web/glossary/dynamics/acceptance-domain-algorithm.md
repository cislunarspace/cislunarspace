---
title: 接受域算法（Acceptance Domain Algorithm）
description: 着陆制导中决定备选着陆点是否更新为目标着陆点的判据。由航天器高度、偏差距离和连续偏差时间三个因素组成的指数函数定义：当函数值超过阈值时接受新着陆点，否则维持原目标。其作用类似模拟退火算法，防止下降过程中着陆点频繁跳变，减少不必要的机动和燃料消耗。
keywords: 接受域算法, Acceptance Domain Algorithm, 轨道动力学, 控制理论, 数值仿真
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 接受域算法（Acceptance Domain Algorithm）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 接受域算法详解 | 术语定义
  description: 着陆制导中决定备选着陆点是否更新为目标着陆点的判据。由航天器高度、偏差距离和连续偏差时间三个因素组成的指数函数定义：当函数值超过阈值时接受新着陆点，否则维持原目标。其作用类似模拟退火算法，防止下降过程中着陆点频繁跳变，减少不必要的机动和燃料消耗。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 接受域算法详解 | 术语定义
  description: 着陆制导中决定备选着陆点是否更新为目标着陆点的判据。由航天器高度、偏差距离和连续偏差时间三个因素组成的指数函数定义：当函数值超过阈值时接受新着陆点，否则维持原目标。其作用类似模拟退火算法，防止下降过程中着陆点频繁跳变，减少不必要的机动和燃料消耗。
  image: /logo.png
permalink: /glossary/dynamics/acceptance-domain-algorithm/
---

# 接受域算法（Acceptance Domain Algorithm）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

着陆制导中决定备选着陆点是否更新为目标着陆点的判据。由航天器高度、偏差距离和连续偏差时间三个因素组成的指数函数定义：当函数值超过阈值时接受新着陆点，否则维持原目标。其作用类似模拟退火算法，防止下降过程中着陆点频繁跳变，减少不必要的机动和燃料消耗。

## 应用价值

接受域算法涉及地月空间航天器的运动特性分析和控制问题。在实际任务设计中，利用该方法可以分析轨道稳定性、计算控制策略，或评估摄动因素对轨道的影响，为任务安全性和可靠性提供保障。

## 相关概念

- [遭遇区域（Encounter Region）](/glossary/dynamics/encounter-region/)
- [相对论效应修正（Relativistic Correction）](/glossary/dynamics/relativistic-correction/)
- [直接飞越转移（Direct Fly-By Transfer, DFBT）](/glossary/dynamics/direct-fly-by-transfer-dfbt/)
- [安全转移编队（Safe Transfer Formation）](/glossary/dynamics/safe-transfer-formation/)

## 参考文献

- Zhao et al. 2022, Advances in Space Research
