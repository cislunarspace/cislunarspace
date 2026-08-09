---
title: Richardson三阶展开式（Richardson Third-Order Expansion）
description: 利用 Lindstedt-Poincaré 级数展开法，对CR3BP中共线平动点附近的Halo轨道求得的三阶近似解析解。它是Halo轨道数值计算的起点：先用 Richardson 展开得到解析初值，再通过 Newton 迭代微分修正精确化。展开式将 Halo 轨道的状态表示为幅值和相位的函数，揭示了面内频率与面外频率的
keywords: Richardson三阶展开式, Richardson Third-Order Expansion, 坐标系, 引力场, 摄动
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Richardson三阶展开式（Richardson Third-Order Expansion）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: Richardson三阶展开式详解 | 术语定义
  description: 利用 Lindstedt-Poincaré 级数展开法，对CR3BP中共线平动点附近的Halo轨道求得的三阶近似解析解。它是Halo轨道数值计算的起点：先用 Richardson 展开得到解析初值，再通过 Newton 迭代微分修正精确化。展开式将 Halo 轨道的状态表示为幅值和相位的函数，揭示了面内频率与面外频率的
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Richardson三阶展开式详解 | 术语定义
  description: 利用 Lindstedt-Poincaré 级数展开法，对CR3BP中共线平动点附近的Halo轨道求得的三阶近似解析解。它是Halo轨道数值计算的起点：先用 Richardson 展开得到解析初值，再通过 Newton 迭代微分修正精确化。展开式将 Halo 轨道的状态表示为幅值和相位的函数，揭示了面内频率与面外频率的
  image: /logo.png
permalink: /glossary/fundamentals/richardson-third-order-expansion/
---

# Richardson三阶展开式（Richardson Third-Order Expansion）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：徐明和徐世杰 - 2008 - Halo轨道维持的线性周期控制策略
>
> 站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

利用 Lindstedt-Poincaré 级数展开法，对CR3BP中共线平动点附近的Halo轨道求得的三阶近似解析解。它是Halo轨道数值计算的起点：先用 Richardson 展开得到解析初值，再通过 Newton 迭代微分修正精确化。展开式将 Halo 轨道的状态表示为幅值和相位的函数，揭示了面内频率与面外频率的 1:1 共振关系，以及幅值增大时频率漂移的非线性特征。

## 应用价值

该术语在地月空间任务中具有重要应用价值。在轨道设计阶段，工程师利用相关理论进行轨迹优化；在导航与轨道确定中，用于提升测量精度；在姿态控制与轨道保持任务中，确保航天器稳定运行。具体应用中，可结合任务需求进行参数优化和算法适配，提高任务成功率和资源利用效率。

## 相关概念

- 虚拟共面起飞（Virtual Coplanar Takeoff）
- [月球重力场不规则性（Lunar Gravity Field Irregularity）](/glossary/fundamentals/gravity-field-model/)
- [LP100K模型（LP100K Model）](/glossary/fundamentals/gravity-field-model/)

## 参考文献

- 徐明和徐世杰 - 2008 - Halo轨道维持的线性周期控制策略
