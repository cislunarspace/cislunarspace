---
title: 入轨（Orbit Insertion）
description: 详细解析入轨的定义、脉冲机动原理、在DRO转移中的作用及入轨精度控制
keywords: 入轨, Orbit Insertion, 轨道插入, 脉冲机动, DRO转移, 三脉冲转移, 轨道控制
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 入轨（Orbit Insertion）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 入轨（Orbit Insertion）详解 | 术语定义
  description: 详细解析入轨的定义、脉冲机动原理及其在DRO转移中的作用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 入轨（Orbit Insertion）详解 | 术语定义
  description: 详细解析入轨的定义、脉冲机动原理及其在DRO转移中的作用
  image: /logo.png
permalink: /glossary/other/orbit-insertion/
---

# 入轨（Orbit Insertion）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：<https://cislunarspace.cn>

## 定义

入轨（Orbit Insertion）是指航天器通过施加脉冲机动，从转移轨道或巡航轨道进入目标轨道的过程。入轨是轨道转移的最后一个关键步骤，其精度和效率直接决定任务的成败。

在地月空间任务中，入轨通常指航天器从地月转移轨道进入绕月轨道、远距离逆行轨道（DRO）、或平动点附近轨道的过程。入轨脉冲的大小取决于转移轨道终态与目标轨道之间的速度差。

## 核心要素

### 入轨脉冲的力学原理

入轨脉冲的本质是速度增量 $\Delta v$。设航天器到达入轨点时的速度为 $\mathbf{v}_{\text{transfer}}$，目标轨道在该点的速度为 $\mathbf{v}_{\text{target}}$，则入轨脉冲为：

$$\Delta v_{\text{insertion}} = |\mathbf{v}_{\text{target}} - \mathbf{v}_{\text{transfer}}|$$

入轨脉冲的大小直接决定了推进剂消耗。根据齐奥尔科夫斯基方程（Tsiolkovsky Equation）：

$$\Delta v = I_{sp} \cdot g_0 \cdot \ln\frac{m_0}{m_f}$$

其中 $I_{sp}$ 为比冲，$g_0$ 为标准重力加速度，$m_0$ 和 $m_f$ 分别为点火前后的质量。入轨脉冲越大，所需的推进剂越多，有效载荷比越低。

### 三脉冲转移中的入轨脉冲

在基于有动力月球借力（PLF）的 LEO 至 DRO 转移方案中，入轨脉冲是三脉冲转移的第三个脉冲 $\Delta v_3$：

$$\Delta v_{\text{total}} = \Delta v_1 + \Delta v_2 + \Delta v_3$$

其中：

- $\Delta v_1$：LEO 离轨脉冲（第一个脉冲）
- $\Delta v_2$：近月点机动脉冲（第二个脉冲，在 PLF 过程中施加）
- $\Delta v_3$：**DRO 入轨脉冲**（第三个脉冲，将航天器从月球-DRO 转移段送入目标 DRO）

$\Delta v_3$ 的大小取决于转移轨道终态与目标 DRO 之间的匹配程度。通过优化前两个脉冲，可以使 $\Delta v_3$ 最小化，从而降低总脉冲需求。

### 入轨精度控制

入轨精度是任务成功的关键因素。入轨误差可能导致：

1. **轨道偏差**：实际轨道偏离目标轨道，影响后续任务操作。
2. **轨道维持需求增加**：入轨后需要额外的修正脉冲来消除入轨误差，增加推进剂消耗。
3. **任务窗口压缩**：高精度入轨可以减少轨道修正需求，延长任务寿命。

入轨精度受以下因素影响：

- **导航精度**：航天器位置和速度的测量精度。
- **发动机推力精度**：推力大小和方向的偏差。
- **点火时机**：脉冲施加时刻的误差。
- **转移轨道设计**：转移轨道终态对入轨点参数的敏感性。

### 入轨策略选择

根据任务需求，入轨策略可分为：

1. **单脉冲入轨**：在入轨点一次性施加全部脉冲，实现从转移轨道到目标轨道的直接切换。适用于入轨脉冲较小、对精度要求不高的场景。

2. **多脉冲入轨**：将入轨脉冲分为多次施加，每次脉冲逐步调整轨道。适用于入轨脉冲较大或需要高精度的场景。

3. **连续推力入轨**：使用小推力发动机（如电推进）长时间连续推力实现入轨。适用于对时间不敏感但需要高效率的任务。

## 应用价值

入轨是所有轨道转移任务的关键环节，在以下场景中尤为重要：

- **DRO 入轨**：在三脉冲 PLF 转移中，入轨脉冲将航天器从月球-DRO 转移段送入稳定运行的 DRO，是任务成功的最后一道关键步骤。
- **月球轨道入轨**：月球探测器到达月球附近后，需要施加入轨脉冲进入绕月轨道。
- **平动点轨道入轨**：到达地月 L1 或 L2 平动点附近后，需要施加入轨脉冲进入晕轨道或李萨如轨道。
- **行星际任务入轨**：深空探测器到达目标行星后，需要施加入轨脉冲进入环绕轨道。

## 相关概念

- [转移轨道（Transfer Orbit）](/glossary/orbits/transfer-orbit/)
- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)
- [脉冲机动（Impulsive Maneuver）](/glossary/dynamics/impulsive-maneuver/)
- [有动力月球借力（PLF）](/glossary/other/powered-lunar-flyby/)

## 参考文献

- 魏赞等, "地月远距离逆行轨道族月球借力转移入轨研究", 2026.
- Vallado D A, "Fundamentals of Astrodynamics and Applications", 4th ed., Microcosm Press, 2013.
- Wertz J R, Everett D F, Puschell J J, "Space Mission Engineering: The New SMAD", Microcosm Press, 2011.
