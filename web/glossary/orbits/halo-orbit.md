---
title: Halo 轨道（Halo Orbit）
description: 详细解析Halo轨道的定义、动力学特性、在平动点附近的三维周期运动及其在地月空间任务中的应用
keywords: Halo轨道, Halo Orbit, 平动点, L1点, L2点, 三体问题, 地月空间, Gateway, 轨道设计
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Halo 轨道（Halo Orbit）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: Halo 轨道（Halo Orbit）详解 | 平动点三维周期轨道
  description: 详细解析Halo轨道的定义、动力学特性、在平动点附近的三维周期运动及其在地月空间任务中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Halo 轨道（Halo Orbit）详解 | 平动点三维周期轨道
  description: 详细解析Halo轨道的定义、动力学特性、在平动点附近的三维周期运动及其在地月空间任务中的应用
  image: /logo.png
permalink: /glossary/orbits/halo-orbit/
---

# Halo 轨道（Halo Orbit）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

Halo 轨道（Halo Orbit）是**环绕平动点的三维周期轨道**，在会合坐标系中呈光环状（Halo 意为"光环"）。Halo 轨道是圆形限制性三体问题（CR3BP）中的一类精确周期解，主要存在于地月系统的 L1、L2 和 L3 平动点附近。其中，地月 L2 点附近的 Halo 轨道在当前深空探测中应用最为广泛。

## 核心要素

### Halo 轨道的动力学特性

Halo 轨道在 CR3BP 框架下具有以下特性：

- **三维运动**：与平面 Lyapunov 轨道不同，Halo 轨道在 $xOy$ 平面内有大幅振荡的同时，在 $z$ 方向也有显著的周期运动，形成三维空间中的环状轨迹
- **周期性**：Halo 轨道是严格周期轨道，在会合坐标系中精确闭合
- **对称性**：标准 Halo 轨道关于 $xOz$ 平面对称，轨道在穿越该平面时速度的 $x$ 和 $z$ 分量为零
- **振幅参数化**：Halo 轨道族通过振幅参数 $A_z$（$z$ 方向最大位移）描述，振幅越大轨道越远离平动点

Halo 轨道的周期 $T$ 与振幅的关系可近似表达为：

$$T \approx T_0 + \alpha A_z^2$$

其中 $T_0$ 为平动点附近线性化运动的固有周期，$\alpha$ 为与系统参数相关的系数。

### Halo 轨道的线性近似

在平动点附近，CR3BP 的运动方程可线性化。对于共线平动点（L1、L2、L3），线性化后的运动在平面内有两个实特征值（对应稳定/不稳定流形）和一对共轭虚特征值（对应周期振荡），在 $z$ 方向也有一对共轭虚特征值。Halo 轨道的存在条件是平面内和 $z$ 方向的振荡频率满足共振关系：

$$\omega_z / \omega_{xy} \approx 1$$

Richardson（1980）利用 Lindstedt-Poincaré 方法推导了 Halo 轨道的三阶近似解析解，为数值精确解提供了优良的初始猜测。

### 稳定性与维持控制

大多数 Halo 轨道是**不稳定**的——其稳定流形和不稳定流形分别指向和远离轨道。因此：

- 航天器在 Halo 轨道上运行时需要定期进行轨道维持机动（Station-Keeping）
- 维持控制策略通常基于 Floquet 理论，消除沿不稳定流形增长的分量
- L2 Halo 轨道的典型维持速度增量约为每年数 m/s 量级

### 近直线晕轨道（NRHO）

NRHO 是 Halo 轨道的一个特殊子类，其轨道形状极度拉伸，近月点靠近月球表面而远月点位于深空。NRHO 是 NASA Gateway 空间站的目标轨道，结合了 Halo 轨道的三维覆盖优势和低近月点的通信/观测优势。

## 应用价值

Halo 轨道在地月空间任务中具有核心应用价值：

- **Gateway 空间站**：NASA Artemis 计划的 Gateway 空间站部署在月球 L2 NRHO 上
- **中继通信**：L2 Halo 轨道可为月球背面提供持续通信中继
- **科学观测**：Halo 轨道提供独特的观测几何，适合空间科学和天文观测
- **深空探测跳板**：Halo 轨道可作为向更远深空转移的中转轨道

## 相关概念
- [地月 L1/L2 Halo 轨道（EML1/EML2 Halo）](/glossary/orbits/eml-halo/)
- [近直线晕轨道（NRHO）](/glossary/orbits/nrho/)
- [Lissajous 轨道（Lissajous Orbit）](/glossary/orbits/lissajous-orbit/)
- [Lyapunov 轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

## 参考文献
- Richardson D L. Analytic construction of periodic orbits about the collinear points[J]. Celestial Mechanics, 1980, 22(3): 241-253.
- Farquhar R W. The utilization of halo orbits in advanced lunar operations[R]. NASA, 1971.
- Qiao C, Long X, Yang L, et al. Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points[J]. Chinese Journal of Aeronautics, 2025.
