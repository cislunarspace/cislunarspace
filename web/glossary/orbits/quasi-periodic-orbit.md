---
title: 拟周期轨道（Quasi-Periodic Orbit）
description: 详细解析拟周期轨道的定义、与周期轨道的区别、在星历模型下的DRO轨道表现
keywords: 拟周期轨道, Quasi-Periodic Orbit, 准周期轨道, DRO, 星历模型, 轨道发散, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 拟周期轨道（Quasi-Periodic Orbit）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 拟周期轨道详解 | 星历模型下的真实轨道形态
  description: 详细解析拟周期轨道的定义、与周期轨道的区别、在星历模型下的DRO轨道表现
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 拟周期轨道详解 | 星历模型下的真实轨道形态
  description: 详细解析拟周期轨道的定义、与周期轨道的区别、在星历模型下的DRO轨道表现
  image: /logo.png
permalink: /glossary/orbits/quasi-periodic-orbit/
---

# 拟周期轨道

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

拟周期轨道（Quasi-Periodic Orbit）是在多摄动环境下，轨道不再保持严格闭合，但在有限区域内缠绕的轨道形态。其轨迹不闭合，但整体形态保持稳定，表现为在标称周期轨道附近的准周期振荡。

## 与周期轨道的区别

| 特征 | 周期轨道 | 拟周期轨道 |
|:---|:---|:---|
| 闭合性 | 严格闭合 | 不闭合，但在有限区域内缠绕 |
| 模型 | CR3BP（简化模型） | 星历模型（高精度模型） |
| 重复性 | 每圈完全重复 | 每圈略有差异 |
| 稳定性 | 理想状态 | 受摄动影响的实际情况 |

## 在星历模型下的 DRO

在星历模型等多摄动环境下，由于天体位置随时间变化，DRO 不再保持严格周期性，而演变为拟周期轨道。通过二级微分修正法将 CR3BP 下的 DRO 轨道转换至星历模型，可得到持续 1 年的拟周期 DRO 轨道。

拟周期 DRO 轨道的特征包括：
- $z$ 方向产生振幅（CR3BP 下为平面轨道）
- 每圈轨道的 $y$ 方向振幅略有变化
- 整体形态保持稳定，但不完全闭合

## 相关概念

- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)
- [星历模型](/glossary/dynamics/ephemeris-model/)
- [二级微分修正法](/glossary/dynamics/two-level-differential-correction/)
- [庞加莱截面](/glossary/dynamics/poincare-section/)

## 核心要素

### 轨道定义

拟周期轨道是在多摄动环境下轨道不再保持严格闭合，但在有限区域内缠绕的轨道形态。其轨迹不闭合但整体形态保持稳定，表现为在标称周期轨道附近的准周期振荡。

### 动力学特性

- **闭合性**：不闭合，但在有限区域内缠绕
- **模型依赖**：星历模型（高精度）下的实际轨道形态
- **每圈差异**：每圈略有差异，但整体形态稳定
- **z 方向振幅**：CR3BP 下的平面轨道在星历模型中产生 z 方向振幅

### 设计方法

- **二级微分修正法**：将 CR3BP 下的周期轨道转换至星历模型
- **参考轨道保持**：在拟周期轨道附近进行轨道维持
- **长期传播**：可持续 1 年以上的拟周期 DRO 轨道设计


## 应用价值

拟周期轨道是星历模型等真实力学环境下的实际轨道形态，理解拟周期轨道特性对于地月空间任务的轨道设计、轨道预报和轨道控制具有重要意义。DRO 在星历模型中的拟周期特性使其成为长期稳定驻留的理想选择。


## 参考文献

- Farquhar R W, Kamel A A. Quasi-periodic orbits about the translunar libration point[J]. Celestial Mechanics, 1973.
- 陈昱桔. 面向地月空间态势感知的DRO轨道设计与控制研究[D]. 2024.
