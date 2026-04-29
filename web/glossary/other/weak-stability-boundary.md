---
title: 弱稳定边界（Weak Stability Boundary, WSB）
description: 详细解析弱稳定边界的定义、三体动力学本质、转移特性及其在低能轨道转移中的应用
keywords: 弱稳定边界, Weak Stability Boundary, WSB, 三体问题, 低能转移, 引力束缚, 地月转移
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 弱稳定边界（WSB）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 弱稳定边界（WSB）详解 | 术语定义
  description: 详细解析弱稳定边界的定义、三体动力学本质及其在低能轨道转移中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 弱稳定边界（WSB）详解 | 术语定义
  description: 详细解析弱稳定边界的定义、三体动力学本质及其在低能轨道转移中的应用
  image: /logo.png
permalink: /glossary/other/weak-stability-boundary/
---

# 弱稳定边界（Weak Stability Boundary, WSB）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：https://cislunarspace.cn

## 定义

弱稳定边界（Weak Stability Boundary, WSB）是限制性三体问题（CR3BP）中，航天器对某一主天体的引力束缚变得极为薄弱的区域。在 WSB 区域内，航天器虽然名义上仍处于某一主天体的引力影响球内，但其运动状态对初始条件极其敏感——微小的速度扰动即可导致航天器从一个主天体的引力域"滑入"另一个主天体的引力域，实现自发的天体间转移。

WSB 的概念最初由 Belbruno（1987）在研究地月系统低能转移时提出，也被称为"弱稳定域"（Weak Stability Region）或"模糊边界"（Fuzzy Boundary）。

## 核心要素

### 三体动力学本质

WSB 的存在是限制性三体问题动力学特性的直接体现。在 CR3BP 中，存在五个平动点（L1–L5），其中 L1 和 L2 是不稳定的鞍点。在这些平动点附近，存在一族不变流形（Invariant Manifolds）——稳定流形（Stable Manifold）和不稳定流形（Unstable Manifold）。

- **稳定流形**：沿此流形运动的航天器将渐近趋近于平动点附近的周期轨道。
- **不稳定流形**：沿此流形运动的航天器将渐近远离平动点附近的周期轨道。

WSB 区域大致对应于不稳定流形所覆盖的空间区域。在这些区域内，航天器的运动处于"临界稳定"状态——既有被主天体捕获的趋势，又有逃逸的趋势。

### 转移特性

WSB 转移具有以下独特特性：

1. **低脉冲需求**：WSB 转移所需的 $\Delta v$ 通常远小于传统的霍曼转移。例如，从地球到月球的 WSB 转移可能仅需几百 m/s 的总脉冲，而霍曼转移约需 3.1 km/s。

2. **长转移时间**：低脉冲的代价是转移时间显著增加。WSB 转移通常需要数月甚至更长时间，远超霍曼转移的数天。

3. **对初始条件敏感**：WSB 转移对出发时刻和初始状态极为敏感，需要精确的轨道设计和导航。

4. **混沌特性**：WSB 区域的轨道运动具有混沌特性，长期预报精度有限。

### WSB 与不变流形的关系

从动力学系统理论角度看，WSB 边界与 L1/L2 平动点的不稳定流形密切相关。航天器可以沿着这些不变流形"管状"结构在地月系统中低能量地滑行，实现从地球附近到月球附近的自然转移。

Belbruno 和 Miller（1993）首次利用这一原理为日本航天器 Hiten 设计了低能月球捕获轨道，验证了 WSB 转移的可行性。这一成功案例开创了地月空间低能转移研究的新方向。

### WSB 转移的设计方法

WSB 转移轨道的设计通常采用以下方法：

1. **逆向积分法**：从目标轨道（如月球附近）出发，沿不稳定流形逆向积分至出发区域（如 LEO 附近），筛选满足约束的转移轨道。

2. **庞加莱截面法**：在相空间中选取合适的截面（如 L1 或 L2 平面），分析轨道在截面上的交点分布，识别 WSB 转移通道。

3. **全局搜索法**：结合全局优化算法（如差分进化），在大范围参数空间中搜索满足约束的 WSB 转移轨道。

## 应用价值

WSB 转移在以下场景中具有重要应用价值：

- **月球探测**：为低成本月球探测任务提供低能量转移方案。
- **行星际任务**：WSB 概念可推广至日-地系统和日-木系统，为行星际低能转移提供理论基础。
- **平动点任务**：WSB 转移是到达地月 L1/L2 平动点附近轨道的高效方式。

需要指出的是，WSB 转移虽然脉冲需求低，但转移时间长，且对导航精度要求高。在实际任务中，常将 WSB 转移与月球借力（LGA）或有动力月球借力（PLF）相结合，以在脉冲需求和转移时间之间取得平衡。

## 相关概念

- [限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [月球借力（LGA）](/glossary/other/lunar-gravity-assist/)
- [转移轨道（Transfer Orbit）](/glossary/orbits/transfer-orbit/)
- [平动点（Libration Point）](/glossary/dynamics/libration-point/)


## 参考文献

- Belbruno E A, "Lunar Capture Orbits, a Method of Constructing Earth-Moon Trajectories and the Lunar Gas Mission", IAF-87-329, 1987.
- Belbruno E A, Miller J K, "Sun-Perturbed Earth-to-Moon Transfers with Ballistic Capture", Journal of Guidance, Control, and Dynamics, 16(4), 1993.
- Koon W S, Lo M W, Marsden J E, Ross S D, "Dynamical Systems, the Three-Body Problem and Space Mission Design", 2011.
