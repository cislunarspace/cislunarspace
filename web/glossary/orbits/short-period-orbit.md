---
title: 短周期轨道（Short Period Orbit）
description: 详细解析短周期轨道的定义、动力学特性、在L4/L5三角平动点附近的小振幅快速振荡运动及分类
keywords: 短周期轨道, Short Period Orbit, 三角平动点, L4, L5, 周期轨道, CR3BP, 轨道动力学
author: 天疆说
date: 2026-06-05
lastUpdated: 2026-06-05
wechatShare:
  title: 短周期轨道（Short Period Orbit）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 短周期轨道详解 | 三角平动点附近的小振幅快速振荡轨道
  description: 详细解析短周期轨道的定义、动力学特性、在L4/L5三角平动点附近的小振幅快速振荡运动及分类
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 短周期轨道详解 | 三角平动点附近的小振幅快速振荡轨道
  description: 详细解析短周期轨道的定义、动力学特性、在L4/L5三角平动点附近的小振幅快速振荡运动及分类
  image: /logo.png
permalink: /glossary/orbits/short-period-orbit/
---

# 短周期轨道（Short Period Orbit）

> 本文作者：天疆说
>
> 参编单位：哈尔滨工业大学航天学院、微小型航天器快速设计与智能集群全国重点实验室

## 定义

短周期轨道（Short Period Orbit, SPO）是**环绕 L4/L5 三角平动点的小振幅快速周期轨道族**，属于圆形限制性三体问题（CR3BP）框架下三角平动点附近周期轨道家族的重要成员。其名称来源于相对于长周期轨道（Long Period Orbit）更短的轨道周期。在 Doedel 等人（2007）建立的三角平动点周期轨道分类体系中，短周期轨道与长周期轨道共同构成了 L4/L5 区域的完整周期解族。

## 核心要素

### 动力学特性

短周期轨道在 CR3BP 框架下具有以下特性：

- **小振幅运动**：轨道振幅相对较小，航天器在三角平动点附近做近似椭圆的周期运动
- **快速振荡**：相比长周期轨道和马蹄轨道，短周期轨道的轨道周期较短
- **线性稳定性**：L4/L5 平动点本身是线性稳定的（中心×中心型），小振幅短周期轨道继承了这一稳定性特征
- **近似简谐运动**：在小振幅极限下，短周期轨道退化为线性化方程的简谐振荡解

### 轨道族分类

Doedel 等人（2007）系统研究了三角平动点附近的周期轨道族，短周期轨道的主要特征如下：

| 参数 | 特征 |
| :--- | :--- |
| 振幅 | 小（L4/L5 附近） |
| 轨道周期 | 短（相对 Long Period Orbit 和 Horseshoe Orbit） |
| 轨道形状 | 近似椭圆 |
| 稳定性 | 较好（受 L4/L5 线性稳定性保护） |

### 与轨道分类体系的关系

短周期轨道在三角平动点轨道家族中的定位：

- **与长周期轨道的关系**：长周期轨道（Long Period Orbit）是围绕 L4/L5 的大振幅慢振荡轨道，与短周期轨道共享相同的平衡点但在振幅和周期上有显著差异
- **与马蹄轨道的关系**：马蹄轨道（Horseshoe Orbit）可视为短周期轨道在振幅进一步增大后的演化形式，反映了从局部小振幅到全局大尺度运动的过渡
- **与 Lissajous 轨道的关系**：Lissajous 轨道是非严格闭合的准周期轨道，短周期轨道则是在特定能量下的严格周期解

## 应用价值

短周期轨道在地月空间任务中具有以下潜在应用价值：

- **稳定存储轨道**：利用 L4/L5 区域的稳定性，短周期轨道可用于航天器或空间物体的长期存储
- **科学观测平台**：小振幅的短周期运动提供了稳定的观测几何，适合进行空间科学实验
- **轨道动力学基准**：作为三角平动点附近最简单的周期解，短周期轨道是研究非线性动力学效应和分岔现象的理想基准

## 相关概念

- [长周期轨道（Long Period Orbit）](/glossary/orbits/long-period-orbit/)
- [马蹄轨道（Horseshoe Orbit）](/glossary/orbits/horseshoe-orbit/)
- [三角平动点（Triangular Libration Points）](/glossary/orbits/triangular-libration-points/)
- [Lissajous 轨道（Lissajous Orbit）](/glossary/orbits/lissajous-orbit/)
- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

## 参考文献

- Doedel E J, Romanov V A, Paffenroth R C, et al. Elemental periodic orbits associated with the libration points in the circular restricted 3-body problem[J]. International Journal of Bifurcation and Chaos, 2007, 17(8): 2625-2677.
- Guzzetti D, Bosanac N, Howell K C. A framework for efficient trajectory comparisons in the Earth-Moon design space[C]. AAS/AIAA Space Flight Mechanics Meeting, 2014.
