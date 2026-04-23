---
title: 庞加莱截面（Poincaré Section）
description: 详细解析Poincaré截面的定义、在平动点轨道可视化中的应用，以及如何利用Poincaré截面区分Lyapunov、Halo、Lissajous等轨道族
keywords: Poincaré截面, Poincaré Section, 平动点轨道, 相空间可视化, 中心流形, 环面, 轨道辨识, 地月空间
author: 天疆说
date: 2026-04-23
lastUpdated: 2026-04-23
wechatShare:
  title: 庞加蕾截面（Poincaré Section）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 庞加莱截面详解 | 平动点轨道分布可视化
  description: 详细解析Poincaré截面的定义、在平动点轨道可视化中的应用，以及如何利用Poincaré截面区分Lyapunov、Halo、Lissajous等轨道族
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 庞加莱截面详解 | 平动点轨道分布可视化
  description: 详细解析Poincaré截面的定义、在平动点轨道可视化中的应用，以及如何利用Poincaré截面区分Lyapunov、Halo、Lissajous等轨道族
  image: /logo.png
permalink: /glossary/poincare-section/
---

# 庞加莱截面

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文编辑来源：Qiao et al. (2025) "Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points"
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

庞加莱截面（Poincaré Section）是相空间中高维流形与低维截面相交形成的**二维截面图**，用于可视化哈密顿系统的动力学结构、区分不同类型的周期和准周期轨道。在地月空间平动点研究中，Poincaré 截面是将四维中心流形相空间降维可视化的核心工具。

## 原理

对于二维以上的相空间，直接可视化轨道十分困难。庞加莱截面的思想是：选取一个低维截面（通常为 $N-2$ 维，$N$ 为系统维数），记录轨道反复穿越该截面的交点。当轨道在截面上的交点形成：

- **闭合曲线**：对应准周期轨道（环面）
- **孤立的离散点**：对应周期轨道
- **混沌散点**：对应混沌运动

由于哈密顿系统能量守恒，相轨迹被限制在 $N-1$ 维等能面上。对于 CR3BP 共线平动点的中心流形（$N=4$ 维），Poincaré 截面为二维截面。

## 在地月空间平动点的应用

Qiao et al. (2025) 采用两类截面：

### 1. $\theta_2 = 0$ 截面

在中心流形坐标中取 $\theta_2 = 0$ 作为截面（经数值验证，该截面的相流穿越最为频繁）。固定能量层 $C$，截面方程为：

$$H_{CM}(I_2, 0, I_3, \theta_3) = C$$

在截面上选取均匀网格点，计算对应的中心流形初始状态并积分，标记轨道穿越截面的交点，即可得到截面图。

### 2. $\theta_3 = \pi/2$ 截面（能量综合截面）

为在同一截面上展示所有轨道族（特别是 Halo 轨道所在的环面中心），Qiao et al. (2025) 选取 $\theta_3 = \pi/2$ 截面，并在截面上叠加不同能量层 $C$ 的等值线，从而得到一幅包含所有轨道族信息的"地图"。

## 轨道族在截面上的特征

在地月共线平动点的 $\theta_3 = \pi/2$ 截面上，不同轨道族呈现截然不同的几何特征：

| 轨道族 | 截面特征 |
|:---|:---|
| **Lyapunov 轨道** | 位于 $I_3 = 0$ 线与截面的交线 |
| **垂直 Lyapunov 轨道** | 位于 $I_2 = 0$ 线与截面的交线 |
| **Lissajous 轨道** | $\theta_3$ 在 $[0, 2\pi)$ 遍历，截面轨迹充满整个可用区域 |
| **准 Halo 轨道** | 局部形成**环面结构**（toroidal structure） |
| **Halo 轨道** | 环面收缩至截面中心点（$I_2, I_3$ 的特定值） |
| **北族/南族** | 两个环面结构，分别以 $\theta_3 = \pi/2$ 和 $\theta_3 = 3\pi/2$ 为中心 |

### 关键发现

- 当能量较低时，截面中**不存在 Halo 轨道**——这表明 Halo 轨道起源于 Lyapunov 轨道随能量升高而发生的**分叉**（bifurcation）
- 北族和南族 Halo 轨道在 $\theta_3 = \pi/2$ 截面上**不可区分**（对称性），需结合 $\theta_3$ 的值判定
- 在 $L_3$ 点邻域，由于 Halo 轨道和垂直 Lyapunov 轨道的分叉发生在距平动点较远处（接近地球，强非线性导致 B-G 展开失效），截面图中不出现这两类轨道

## 用于轨道辨识

Qiao et al. (2025) 将 Poincaré 截面发展为平动点轨道**分布地图**（distribution map），用于：

1. 给定一个实际观测的航天器状态序列，将其转换为特征参数 $(I_2, I_3)$
2. 在截面图上定位该点最近的参考轨道
3. 通过优化方法（贝叶斯优化）找到最小 MSE 对应的参考轨道

这一方法绕过了在混沌环境中直接数值积分的困难，通过"查地图"实现轨道辨识。

## 相关概念

- [中心流形（Central Manifold）](/glossary/central-manifold/)
- [作用角变量（Action-Angle Variables）](/glossary/action-angle/)
- [轨道辨识（Orbit Identification）](/glossary/orbit-identification/)
- [圆型限制性三体问题（CR3BP）](/glossary/cr3bp/)
- 不变环面（Invariant Torus）
- 分叉（Bifurcation）
- 准周期轨道（Quasi-periodic Orbit）

## 参考文献

- Arnol'd V I. Mathematical methods of classical mechanics[M]. Springer, 1989.
- Qiao C, Long X, Yang L, et al. Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points[J]. Chinese Journal of Aeronautics, 2025. doi: 10.1016/j.cja.2025.103869.
