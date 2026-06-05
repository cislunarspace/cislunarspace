---
title: 三角平动点（Triangular Libration Points）
description: 详细解析三角平动点L4和L5的定义、动力学特性、稳定性分析及在地月空间任务中的应用
keywords: 三角平动点, Triangular Libration Points, L4, L5, 平动点, 三体问题, 拉格朗日点, 轨道动力学
author: 天疆说
date: 2026-06-05
lastUpdated: 2026-06-05
wechatShare:
  title: 三角平动点（Triangular Libration Points）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 三角平动点详解 | 地月系统中稳定的动力学平衡区域
  description: 详细解析三角平动点L4和L5的定义、动力学特性、稳定性分析及在地月空间任务中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 三角平动点详解 | 地月系统中稳定的动力学平衡区域
  description: 详细解析三角平动点L4和L5的定义、动力学特性、稳定性分析及在地月空间任务中的应用
  image: /logo.png
permalink: /glossary/orbits/triangular-libration-points/
---

# 三角平动点（Triangular Libration Points）

> 本文作者：天疆说
>
> 参编单位：哈尔滨工业大学航天学院、微小型航天器快速设计与智能集群全国重点实验室

## 定义

三角平动点（Triangular Libration Points）是圆形限制性三体问题（CR3BP）中五个平动点中的两个，记为 L4 和 L5。它们位于两大天体轨道平面内，与两大天体构成等边三角形。在地月系统中，L4 位于月球轨道前方 60° 处，L5 位于后方 60° 处。与三个共线平动点（L1、L2、L3）不同，三角平动点在线性意义下是稳定的平衡点，其附近存在丰富的周期轨道族。

## 核心要素

### 数学定义

在 CR3BP 的旋转坐标系中，L4 和 L5 的坐标为：

$$L_4: \left(\frac{1}{2} - \mu, \frac{\sqrt{3}}{2}\right), \quad L_5: \left(\frac{1}{2} - \mu, -\frac{\sqrt{3}}{2}\right)$$

其中 $\mu = m_2/(m_1 + m_2)$ 为质量参数。在地月系统中 $\mu \approx 0.01215$，L4 和 L5 非常接近标准等边三角形的顶点。

### 稳定性分析

三角平动点的线性稳定性条件为：

$$\frac{27 m_1 m_2}{(m_1 + m_2)^2} > 1$$

对于地月系统（$m_1 \gg m_2$），该条件满足。线性化方程的特征值为纯虚数，对应中心×中心型动力学，意味着 L4/L5 附近的运动在理想 CR3BP 中既不增长也不衰减。然而，非线性效应（如共振）可能导致长期不稳定性。

### 周期轨道族

L4/L5 附近存在三类基本周期轨道族：

| 轨道族 | 特征 | 周期 |
|:---|:---|:---|
| 短周期轨道（SPO） | 小振幅快速振荡，近似椭圆 | 较短 |
| 长周期轨道（LPO） | 大振幅慢振荡，非椭圆 | 较长 |
| 马蹄轨道（HS） | 大尺度马蹄形运动 | 最长 |

### 与共线平动点的区别

| 特征 | 三角平动点 L4/L5 | 共线平动点 L1/L2/L3 |
|:---|:---|:---|
| 位置 | 等边三角形顶点 | 两大天体连线上 |
| 线性稳定性 | 稳定（中心×中心） | 不稳定（鞍×中心） |
| 附近周期轨道 | SPO, LPO, Horseshoe | Halo, Lyapunov, Lissajous |
| 流形结构 | 中心流形为主 | 稳定/不稳定流形显著 |

## 在地月空间中的应用

三角平动点在地月空间任务中具有独特的应用价值：

- **长期存储区域**：L4/L5 的线性稳定性使其成为航天器或空间物体长期存储的理想区域，无需频繁轨道维持
- **小行星捕获**：NASA 等机构已提出利用 L4/L5 区域进行小行星捕获和存储的任务概念
- **通信中继**：L4/L5 位置可提供对月球和深空的通信覆盖，作为中继节点具有战略价值
- **动力学研究**：三角平动点附近的非线性动力学（共振、分岔）是天体力学和轨道力学的重要研究领域

## 相关概念

- [短周期轨道（Short Period Orbit）](/glossary/orbits/short-period-orbit/)
- [长周期轨道（Long Period Orbit）](/glossary/orbits/long-period-orbit/)
- [马蹄轨道（Horseshoe Orbit）](/glossary/orbits/horseshoe-orbit/)
- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [Lissajous 轨道（Lissajous Orbit）](/glossary/orbits/lissajous-orbit/)

## 参考文献

- Szebehely V. Theory of Orbits: The Restricted Problem of Three Bodies[M]. Academic Press, 1967.
- Doedel E J, Romanov V A, Paffenroth R C, et al. Elemental periodic orbits associated with the libration points in the circular restricted 3-body problem[J]. International Journal of Bifurcation and Chaos, 2007, 17(8): 2625-2677.
