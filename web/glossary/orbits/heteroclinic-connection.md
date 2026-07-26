---
title: 异宿连接（Heteroclinic Connection）
description: 详细解析异宿连接的定义、动力学特性、在平动点周期轨道之间的不变流形连接及其在轨道设计中的应用
keywords: 异宿连接, Heteroclinic Connection, 不变流形, 平动点, 低能量转移, CR3BP, 轨道动力学
author: 天疆说
date: 2026-06-05
lastUpdated: 2026-06-05
wechatShare:
  title: 异宿连接（Heteroclinic Connection）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 异宿连接详解 | 平动点轨道间的不变流形通道
  description: 详细解析异宿连接的定义、动力学特性、在平动点周期轨道之间的不变流形连接及其在轨道设计中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 异宿连接详解 | 平动点轨道间的不变流形通道
  description: 详细解析异宿连接的定义、动力学特性、在平动点周期轨道之间的不变流形连接及其在轨道设计中的应用
  image: /logo.png
permalink: /glossary/orbits/heteroclinic-connection/
---

# 异宿连接（Heteroclinic Connection）

> 本文作者：天疆说
>
> 参编单位：哈尔滨工业大学航天学院、微小型航天器快速设计与智能集群全国重点实验室

## 定义

异宿连接（Heteroclinic Connection）是动力系统中**连接两个不同周期轨道的不变流形之间的交集路径**。具体而言，若一条轨道的不稳定流形恰好与另一条轨道的稳定流形重合，则形成异宿连接——航天器可以沿此路径从一个周期轨道自然过渡到另一个周期轨道，无需施加控制推力。在圆形限制性三体问题（CR3BP）中，异宿连接广泛存在于共线平动点（L1、L2）附近的周期轨道之间，是设计低能量转移轨道的核心动力学机制。

## 核心要素

### 数学描述

设 $P_1$ 和 $P_2$ 为 CR3BP 中两个不同的周期轨道，$W^u(P_1)$ 为 $P_1$ 的不稳定流形，$W^s(P_2)$ 为 $P_2$ 的稳定流形。若存在非空交集：

$$W^u(P_1) \cap W^s(P_2) \neq \emptyset$$

则该交集构成从 $P_1$ 到 $P_2$ 的异宿连接。沿此连接，轨道在 $t \to -\infty$ 时趋近 $P_1$，在 $t \to +\infty$ 时趋近 $P_2$。

### 动力学特性

异宿连接具有以下动力学特性：

- **零速度增量**：在理想 CR3BP 中，异宿连接是一条精确的自然动力学路径，转移过程中不消耗燃料
- **对扰动敏感**：异宿连接存在于高维相空间的低维交集上，对初始条件和模型参数极为敏感
- **能量匹配约束**：两条周期轨道必须具有相同的 Jacobi 常数（能量），否则流形不相交

### 典型异宿连接

在地月系统中，典型的异宿连接包括：

| 连接类型 | 连接对象 | 特征 |
| :--- | :--- | :--- |
| L1-L2 连接 | L1 Halo ↔ L2 Halo | 连接月球两侧的共线平动点区域 |
| L1-Lyapunov ↔ L2-Lyapunov | L1 平面轨道 ↔ L2 平面轨道 | 平面内的低能量转移通道 |
| Butterfly 轨道内部连接 | L1 Halo ↔ L2 Halo（大振幅） | 蝴蝶轨道本身即为异宿连接的体现 |

## 在地月空间中的应用

异宿连接在地月空间任务设计中具有重要应用价值：

- **低能量转移轨道**：通过拼接异宿连接段，可设计从近地轨道到月球附近轨道的低能量转移轨迹，显著降低推进剂需求
- **L1-L2 区域互联**：异宿连接提供了月球门户与月球背面之间的天然动力学通道，支持多样化的任务拓扑
- **编队重构**：利用异宿连接，编队航天器可从一个周期轨道整体转移至另一个周期轨道，实现编队构型的全局变换

## 相关概念

- [蝴蝶轨道（Butterfly Orbit）](/glossary/orbits/butterfly-orbit/)
- [Halo 轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)
- [Lyapunov 轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
- [低能量转移（Low-energy Transfer）](/glossary/orbits/low-energy-transfer/)
- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [燃料最优（Fuel-optimal Control）](/glossary/dynamics/fuel-optimal/)

## 参考文献

- Koon W S, Lo M W, Marsden J E, et al. Heteroclinic connections between periodic orbits and resonance transitions in celestial mechanics[J]. Chaos, 2000, 10(2): 427-469.
- Haapala A, Vaquero M, Pavlak T A, et al. Trajectory selection strategy for tours in the Earth-Moon system[C]. AAS/AIAA Astrodynamics Specialist Conference, 2013.
