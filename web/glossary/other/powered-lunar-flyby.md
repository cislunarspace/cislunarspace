---
title: 有动力月球借力（Powered Lunar Flyby, PLF）
description: 详细解析有动力月球借力的定义、三脉冲转移架构、四类转移轨道及其在LEO至DRO转移中的应用
keywords: 有动力月球借力, Powered Lunar Flyby, PLF, 近月点脉冲, 三脉冲转移, DRO入轨, 地月转移
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 有动力月球借力（PLF）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 有动力月球借力（PLF）详解 | 术语定义
  description: 详细解析有动力月球借力的定义、三脉冲转移架构及其在LEO至DRO转移中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 有动力月球借力（PLF）详解 | 术语定义
  description: 详细解析有动力月球借力的定义、三脉冲转移架构及其在LEO至DRO转移中的应用
  image: /logo.png
permalink: /glossary/other/powered-lunar-flyby/
---

# 有动力月球借力（Powered Lunar Flyby, PLF）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：https://cislunarspace.cn

## 定义

有动力月球借力（Powered Lunar Flyby, PLF）是一种结合月球引力借力与主动推力的轨道转移方式。其核心思想是在航天器飞越月球的近月点（Perilune）处施加一个推进脉冲，从而在借力过程中实现更精确的能量和轨道控制。

与传统的无动力月球借力相比，PLF 通过在近月点施加额外脉冲，可以：（1）提高能量转化效率，使借力效果最大化；（2）避免航天器在借力后逃逸出地月系统；（3）精确控制转移轨道的终态，使之满足目标轨道的入轨条件。

## 核心要素

### 三脉冲转移架构

基于 PLF 的 LEO 至 DRO 转移采用三脉冲架构：

$$\Delta v_{\text{total}} = \Delta v_1 + \Delta v_2 + \Delta v_3$$

其中：
- $\Delta v_1$：**LEO 离轨脉冲**——在低地球轨道上施加，将航天器从 LEO 送入地月转移轨道。该脉冲决定了转移轨道的 C3 能量和飞向月球的几何构型。
- $\Delta v_2$：**近月点机动脉冲**——在月球借力的近月点处施加，是 PLF 方案的核心脉冲。该脉冲的大小和方向决定了借力效果，直接影响转移轨道的后半段形状。
- $\Delta v_3$：**DRO 入轨脉冲**——在到达目标 DRO 的近月点附近施加，将航天器从转移轨道送入目标远距离逆行轨道。

### 四类转移轨道

魏赞等（2026）的研究表明，基于 PLF 的 LEO-DRO 转移轨道可按照航天器在月球附近的运动方向和速度变化分为四类：

1. **逆行加速（Retrograde Acceleration, RA）**：航天器在月球附近沿逆行方向运动，近月点脉冲施加后速度增加。此类转移的 $\Delta v_2$ 方向与运动方向相同，借力后能量显著增加。

2. **逆行减速（Retrograde Deceleration, RD）**：航天器在月球附近沿逆行方向运动，近月点脉冲施加后速度减小。此类转移利用减速借力降低能量，使航天器更易被 DRO 捕获。

3. **顺行加速（Prograde Acceleration, PA）**：航天器在月球附近沿顺行方向运动，近月点脉冲加速。此类转移结合了顺行飞越和加速借力的特点。

4. **顺行减速（Prograde Deceleration, PD）**：航天器在月球附近沿顺行方向运动，近月点脉冲减速。此类转移的 $\Delta v_2$ 可有效降低进入 DRO 所需的入轨脉冲。

### 脉冲优化

三脉冲转移的总 $\Delta v$ 是衡量方案效率的核心指标。优化目标通常为：

$$\min \; \Delta v_{\text{total}} = \Delta v_1 + \Delta v_2 + \Delta v_3$$

优化变量包括 LEO 出发时刻、转移轨道的初始状态、近月点脉冲参数以及 DRO 入轨点参数。由于问题的高度非线性，通常采用全局优化算法（如差分进化、粒子群优化）结合局部梯度优化进行求解。

### PLF vs 纯引力借力

与纯引力借力相比，PLF 的优势在于：

- **避免逃逸**：纯引力借力在某些几何条件下可能使航天器获得过多能量而逃逸出地月系统，PLF 通过精确控制近月点脉冲避免这一问题。
- **终态可控**：纯引力借力的终态完全由飞越几何决定，调节自由度有限；PLF 增加了近月点脉冲这一自由度，使转移终态更加灵活。
- **转移时间优化**：PLF 可以在保持总脉冲较低的同时缩短转移时间，提升任务效率。

## 应用价值

PLF 方案在以下任务场景中具有重要应用价值：

- **LEO 至 DRO 快速转移**：对于地月空间基础设施建设，需要高效地将航天器从 LEO 转移至 DRO，PLF 提供了脉冲需求和转移时间之间的良好平衡。
- **月球探测任务**：PLF 可用于设计高效的月球轨道转移方案，降低探测器的推进剂需求。
- **地月空间站轨道转移**：未来地月空间站部署在 DRO 时，PLF 方案可为货运飞船和载人飞船提供经济的转移方案。

## 相关概念

- [月球借力（LGA）](/glossary/other/lunar-gravity-assist/)
- [近月点（Perilune）](/glossary/orbits/perilune/)
- [转移轨道（Transfer Orbit）](/glossary/orbits/transfer-orbit/)
- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)
- [脉冲机动（Impulsive Maneuver）](/glossary/dynamics/impulsive-maneuver/)

## 参考文献

- 魏赞等, "地月远距离逆行轨道族月球借力转移入轨研究", 2026.
- Koon W S, Lo M W, Marsden J E, Ross S D, "Dynamical Systems, the Three-Body Problem and Space Mission Design", 2011.
- Parker J S, Anderson R P, "Low-Energy Lunar Trajectory Design", JPL Deep Space Communications and Navigation Series, 2014.
