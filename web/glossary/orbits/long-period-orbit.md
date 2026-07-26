---
title: 长周期轨道（Long Period Orbit）
description: 详细解析长周期轨道的定义、动力学特性、在L4/L5三角平动点附近的大振幅慢振荡运动及分类
keywords: 长周期轨道, Long Period Orbit, 三角平动点, L4, L5, 周期轨道, CR3BP, 轨道动力学
author: 天疆说
date: 2026-06-05
lastUpdated: 2026-06-05
wechatShare:
  title: 长周期轨道（Long Period Orbit）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 长周期轨道详解 | 三角平动点附近的大振幅慢振荡轨道
  description: 详细解析长周期轨道的定义、动力学特性、在L4/L5三角平动点附近的大振幅慢振荡运动及分类
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 长周期轨道详解 | 三角平动点附近的大振幅慢振荡轨道
  description: 详细解析长周期轨道的定义、动力学特性、在L4/L5三角平动点附近的大振幅慢振荡运动及分类
  image: /logo.png
permalink: /glossary/orbits/long-period-orbit/
---

# 长周期轨道（Long Period Orbit）

> 本文作者：天疆说
>
> 参编单位：哈尔滨工业大学航天学院、微小型航天器快速设计与智能集群全国重点实验室

## 定义

长周期轨道（Long Period Orbit, LPO）是**环绕 L4/L5 三角平动点的大振幅慢振荡周期轨道族**，属于圆形限制性三体问题（CR3BP）框架下三角平动点附近周期轨道家族的重要成员。其名称来源于相对于短周期轨道（Short Period Orbit）更长的轨道周期。在 Doedel 等人（2007）的轨道分类体系中，长周期轨道与短周期轨道共同构成了三角平动点附近最基本的两类周期解。

## 核心要素

### 动力学特性

长周期轨道在 CR3BP 框架下具有以下特性：

- **大振幅运动**：轨道振幅相对较大，航天器在 L4/L5 平动点附近做大幅度周期运动，覆盖范围远超短周期轨道
- **慢振荡特性**：长周期轨道的轨道周期较长，通常为短周期轨道周期的数倍甚至数十倍
- **非线性效应增强**：随着振幅增大，非线性效应显著增强，轨道形状偏离椭圆，出现复杂的非线性畸变
- **稳定性退化**：虽然 L4/L5 平动点本身是线性稳定的，但大振幅的长周期轨道可能进入不稳定区域

### 轨道族特征

长周期轨道的主要特征参数：

| 参数 | 特征 |
| :--- | :--- |
| 振幅 | 大（L4/L5 附近） |
| 轨道周期 | 长（相对 Short Period Orbit） |
| 轨道形状 | 非椭圆（受非线性效应影响） |
| 稳定性 | 随振幅增大而退化 |

### 与轨道分类体系的关系

长周期轨道在三角平动点轨道家族中处于重要位置：

- **与短周期轨道的关系**：短周期轨道和长周期轨道是从 L4/L5 线性化解出发的两类不同频率的振荡模式，在振幅增大的过程中各自演化
- **与马蹄轨道的关系**：马蹄轨道与长周期轨道共享相似的能量尺度，在相空间中可能存在过渡关系
- **与分岔现象的关系**：长周期轨道在振幅增大的过程中可能经历分岔，产生新的轨道族

## 应用价值

长周期轨道在地月空间任务中具有以下潜在应用价值：

- **大范围覆盖**：长周期轨道的大振幅运动覆盖 L4/L5 附近的较大空间区域，适合进行大范围空间监测
- **轨道转移参考**：长周期轨道的动力学特性为设计低能量轨道转移提供了参考路径
- **非线性动力学研究**：长周期轨道是非线性效应的天然实验室，为理解三体问题中的共振和分岔现象提供研究对象

## 相关概念

- [短周期轨道（Short Period Orbit）](/glossary/orbits/short-period-orbit/)
- [马蹄轨道（Horseshoe Orbit）](/glossary/orbits/horseshoe-orbit/)
- [三角平动点（Triangular Libration Points）](/glossary/orbits/triangular-libration-points/)
- [Lissajous 轨道（Lissajous Orbit）](/glossary/orbits/lissajous-orbit/)
- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

## 参考文献

- Doedel E J, Romanov V A, Paffenroth R C, et al. Elemental periodic orbits associated with the libration points in the circular restricted 3-body problem[J]. International Journal of Bifurcation and Chaos, 2007, 17(8): 2625-2677.
- Guzzetti D, Bosanac N, Howell K C. A framework for efficient trajectory comparisons in the Earth-Moon design space[C]. AAS/AIAA Space Flight Mechanics Meeting, 2014.
