---
title: 执行机构误差（Actuator Error）
description: 详细解析执行机构误差的来源、类型及其对轨道控制的影响
keywords: 执行机构误差, Actuator Error, 推力偏差, 轨道控制, 推进系统, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 执行机构误差（Actuator Error）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 执行机构误差详解 | 轨道控制执行层误差源
  description: 详细解析执行机构误差的来源、类型及其对轨道控制的影响
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 执行机构误差详解 | 轨道控制执行层误差源
  description: 详细解析执行机构误差的来源、类型及其对轨道控制的影响
  image: /logo.png
permalink: /glossary/other/actuator-error/
---

# 执行机构误差

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

执行机构误差（Actuator Error）是指航天器推进系统在执行控制指令时，实际推力与期望推力之间的偏差。执行机构误差是轨道控制中不可避免的误差源，与导航误差共同构成轨道保持控制的主要不确定性。

## 误差来源

| 误差类型 | 描述 |
|:---|:---|
| 推力大小误差 | 实际推力幅值与标称值的偏差 |
| 推力方向误差 | 实际推力方向与期望方向的偏差 |
| 推力作用时间误差 | 发动机点火时间与持续时间的偏差 |
| 姿态耦合误差 | 姿态控制偏差导致的推力方向误差 |

## 对轨道保持的影响

在 DRO 轨道保持控制中，执行机构误差的影响包括：

- **速度增量偏差**：实际施加的 $\Delta v$ 与期望值不一致
- **与导航误差的耦合**：执行机构误差与导航误差的叠加效应会累积放大
- **燃料消耗不确定性**：实际燃料消耗与理论预测存在差异

## 相关概念

- [脉冲推力](/glossary/other/impulse-thrust/)
- [轨道保持](/glossary/orbits/orbit-keeping/)
- [导航误差](/glossary/other/navigation-error/)
- [入轨误差](/glossary/other/insertion-error/)

## 参考文献

- 陈昱桔. 面向地月空间态势感知的DRO轨道设计与控制研究[D]. 2024.
