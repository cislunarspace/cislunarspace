---
title: 导航误差（Navigation Error）
description: 详细解析导航误差的来源、类型及其对轨道控制的影响
keywords: 导航误差, Navigation Error, 轨道确定, 测量误差, 轨道控制, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 导航误差（Navigation Error）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 导航误差详解 | 轨道控制关键误差源
  description: 详细解析导航误差的来源、类型及其对轨道控制的影响
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 导航误差详解 | 轨道控制关键误差源
  description: 详细解析导航误差的来源、类型及其对轨道控制的影响
  image: /logo.png
permalink: /glossary/other/navigation-error/
---

# 导航误差

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

导航误差（Navigation Error）是指通过地面测控或自主导航手段确定航天器轨道状态时，确定值与真实值之间的偏差。导航误差是轨道保持控制中的重要误差源，直接影响控制策略的精度和燃料消耗。

## 误差来源

| 误差类型 | 描述 |
|:---|:---|
| 测量噪声 | 测距、测速、测角等观测量的随机误差 |
| 模型误差 | 动力学模型不精确导致的轨道预报偏差 |
| 时间同步误差 | 观测时间标记不准确导致的误差 |
| 基准误差 | 地面站坐标、地球自转参数等基准量的误差 |

## 对轨道保持的影响

在 DRO 轨道保持控制中，导航误差的影响主要体现在：

- **控制精度下降**：导航误差会导致计算的控制量与实际需要的控制量之间存在偏差
- **燃料消耗增加**：不精确的导航信息可能导致过多或方向不准确的控制机动
- **与执行机构误差耦合**：导航误差与执行机构误差的叠加效应会进一步降低控制效果

## 相关概念

- [轨道保持](/glossary/orbits/orbit-keeping/)
- [入轨误差](/glossary/other/insertion-error/)
- [执行机构误差](/glossary/other/actuator-error/)
- [脉冲推力](/glossary/other/impulse-thrust/)

## 参考文献

- 陈昱桔. 面向地月空间态势感知的DRO轨道设计与控制研究[D]. 2024.
