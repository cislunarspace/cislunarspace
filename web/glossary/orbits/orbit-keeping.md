---
title: 轨道保持（Orbit Keeping / Station-Keeping）
description: 详细解析轨道保持的定义、主要方法、在地月空间DRO轨道中的应用
keywords: 轨道保持, Orbit Keeping, Station-Keeping, 脉冲推力, 靶点法, DRO, 轨道控制, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 轨道保持（Orbit Keeping）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 轨道保持详解 | 航天器长期稳定运行保障
  description: 详细解析轨道保持的定义、主要方法、在地月空间DRO轨道中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 轨道保持详解 | 航天器长期稳定运行保障
  description: 详细解析轨道保持的定义、主要方法、在地月空间DRO轨道中的应用
  image: /logo.png
permalink: /glossary/orbits/orbit-keeping/
---

# 轨道保持

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

轨道保持（Orbit Keeping），又称轨道维持（Station-Keeping），是指通过施加控制机动使航天器保持在预定轨道或轨道带附近的技术。在地月空间任务中，由于多体动力学环境的混沌性以及各项误差的影响，航天器若不进行有效的保持控制，将以指数速率偏离标称轨道。

## 分类

### 按设计思路

| 类型 | 描述 |
|:---|:---|
| **"紧"控制** | 要求航天器沿预先设计的标称轨道运行 |
| **"松"控制** | 要求航天器在轨道附近运行，对轨迹不做约束 |

### 按推进方式

| 类型 | 描述 |
|:---|:---|
| **脉冲推力** | 主要采取化学推进，燃料消耗更低 |
| **连续推力** | 主要采取电推进或太阳光压，与轨道确定过程解耦 |

### 按控制策略

| 类型 | 描述 |
|:---|:---|
| **基于控制理论** | 如靶点法、LQR、滑模控制等 |
| **基于动力学特性** | 如 Floquet 模态法、消除不稳定分量等 |

## 在 DRO 轨道中的应用

DRO 轨道本身具有较好的稳定性，轨道保持所需的燃料消耗较少。研究表明，振幅在 60000~68000 km 之间的 DRO 轨道最稳定，能够抵抗太阳引力等摄动影响。

## 应用价值

轨道保持技术是地月空间航天器长期稳定运行的保障。DRO 轨道凭借其出色的自然稳定性，轨道保持所需燃料消耗极少，是地月空间基础设施的优选驻留轨道。随着地月空间任务增多，高效轨道保持算法和低推力维持技术将成为降低运维成本的关键。

## 相关概念

- [靶点法](/glossary/dynamics/targeting-method/)
- [动态靶点法](/glossary/dynamics/dynamic-target-method/)
- [脉冲推力](/glossary/other/impulse-thrust/)
- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)
- [太阳辐射压](/glossary/dynamics/solar-radiation-pressure/)

## 核心要素

### 轨道定义

轨道保持是通过施加控制机动使航天器保持在预定轨道或轨道带附近的技术。在地月空间多体动力学混沌环境下，航天器若不进行保持控制将以指数速率偏离标称轨道。

### 动力学特性

- **"紧"控制**：要求航天器沿标称轨道运行
- **"松"控制**：要求在轨道附近运行，对轨迹不做约束
- **DRO 稳定性**：振幅 60000-68000 km 的 DRO 轨道最稳定
- **燃料消耗**：DRO 轨道保持所需燃料较少

### 设计方法

- **脉冲推力**：化学推进，燃料消耗更低
- **连续推力**：电推进或太阳光压，与轨道确定过程解耦
- **基于控制理论**：靶点法、LQR、滑模控制等
- **基于动力学特性**：Floquet 模态法、消除不稳定分量等


## 参考文献

- Howell K C. A station-keeping method for libration point trajectories[C]. AIAA/AAS Astrodynamics Conference, 1990.
- 陈昱桔. 面向地月空间态势感知的DRO轨道设计与控制研究[D]. 2024.
