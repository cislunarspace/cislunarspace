---
title: 拼接法（Patched Method）
description: 详细解析轨道设计中拼接法的定义、数学原理、在地月转移轨道设计中的应用，以及与连续法的对比
keywords: 拼接法, Patched Method, 轨道拼接, 近月点拼接, 转移轨道设计, 地月空间, 动力学模型匹配
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 拼接法（Patched Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 拼接法详解 | 轨道分段设计与动力学模型匹配
  description: 详细解析轨道设计中拼接法的定义、数学原理、在地月转移轨道设计中的应用，以及与连续法的对比
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 拼接法详解 | 轨道分段设计与动力学模型匹配
  description: 详细解析轨道设计中拼接法的定义、数学原理、在地月转移轨道设计中的应用，以及与连续法的对比
  image: /logo.png
permalink: /glossary/dynamics/patched-method/
---

# 拼接法（Patched Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

拼接法（Patched Method）是轨道力学中一种经典的数值设计方法，其核心思想是将复杂的转移轨迹划分为若干段较为简单的子弧段，每段采用各自最合适的动力学模型进行描述和积分，并在相邻段的连接点处通过匹配位置和速度状态向量实现"拼接"。该方法的优势在于降低了单一模型下求解全局轨迹的复杂度，使得每段轨道可以利用各自区域内主导的力学特性进行高效计算。

在地月远距离逆行轨道（DRO）的转移轨道设计中，拼接法广泛应用于将从近地轨道（LEO）出发的飞行弧段和到达DRO的末段弧段在近月点（perilune）处进行拼接，从而构建完整的转移方案。

## 核心要素

### 基本原理

拼接法的核心步骤可概括为：

1. **分段**：根据轨迹经过的引力主导区域，将完整轨迹划分为 $N$ 段子弧。每段选取最能反映该区域引力特征的动力学模型。
2. **独立求解**：在每段内，使用对应的动力学方程（如二体模型、限制性三体问题模型等）对轨迹进行积分和优化。
3. **状态匹配**：在相邻段的连接点 $\mathbf{r}_i^-$（前段末端）和 $\mathbf{r}_i^+$（后段起始）处，要求位置和速度连续：

$$\mathbf{r}_i^- = \mathbf{r}_i^+, \quad \mathbf{v}_i^- = \mathbf{v}_i^+ \quad (i = 1, 2, \ldots, N-1)$$

4. **迭代修正**：若连接点处状态不满足匹配条件，则通过微分修正或优化算法调整各段的自由参数，直至所有拼接条件收敛。

### 在地月 DRO 转移中的应用

魏赞等（2026）在研究地月远距离逆行轨道族的月球借力转移入轨方案时，采用拼接法在近月点处将轨迹分为两段：

| 段落 | 弧段描述 | 动力学模型 | 关键参数 |
|:---|:---|:---|:---|
| 第一段 | LEO 至近月点 | 地月CR3BP 或高精度星历模型 | LEO 出发速度、转移时间 |
| 第二段 | 近月点至 DRO | 地月CR3BP | 近月点高度、DRO 终端状态 |

在近月点处，两段轨道的速度方向可能不同（因为月球借力改变了速度矢量方向），通过引入**变推力月球飞越**（Powered Lunar Flyby, PLF）机动，可在近月点处施加脉冲使速度矢量匹配，从而完成拼接。

### 拼接条件的数学表达

设近月点状态为 $(\mathbf{r}_{\text{pl}}, \mathbf{v}_{\text{pl}})$，第一段末端到达近月点时的速度为 $\mathbf{v}_{\text{pl}}^-$，第二段从近月点出发的速度为 $\mathbf{v}_{\text{pl}}^+$。拼接条件为：

$$\mathbf{r}_{\text{pl}}^- = \mathbf{r}_{\text{pl}}^+ = \mathbf{r}_{\text{pl}}$$

$$\mathbf{v}_{\text{pl}}^+ = \mathbf{v}_{\text{pl}}^- + \Delta \mathbf{v}_{\text{PLF}}$$

其中 $\Delta \mathbf{v}_{\text{PLF}}$ 为月球飞越处施加的速度增量。当 $\Delta \mathbf{v}_{\text{PLF}} = \mathbf{0}$ 时，即为纯引力借力（无动力飞越），对应自然拼接。

### 与连续法的对比

| 特征 | 拼接法 | 连续法（直接法） |
|:---|:---|:---|
| 模型使用 | 每段用不同模型 | 全程统一模型 |
| 计算效率 | 较高（各段独立求解） | 较低（全局优化） |
| 物理可解释性 | 强（每段对应明确的飞行阶段） | 较弱 |
| 精度 | 取决于拼接点匹配精度 | 取决于离散化密度 |
| 适用场景 | 概念设计、初步方案筛选 | 高精度任务设计 |

### 局限性

- 拼接点处的动力学模型切换可能引入不连续的物理假设误差
- 对于强非线性区域（如低空飞越），分段模型可能不够精确
- 需要迭代求解拼接条件，收敛性依赖于初始猜测的质量

## 应用价值

在地月空间任务设计中，拼接法是最常用的概念设计工具之一：

- **DRO 入轨设计**：利用拼接法可以快速筛选从 LEO 到 DRO 的可行转移窗口，评估不同发射条件下的 $\Delta v$ 需求
- **月球借力轨道设计**：通过在近月点处的拼接，自然引入月球引力辅助效应，降低转移所需的能量
- **多段转移方案**：对于包含地球借力、月球借力的复杂多体转移，拼接法提供了直观的物理分段框架

## 相关概念

- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [微分修正（Differential Correction）](/glossary/dynamics/differential-correction/)
- [转移轨道（Transfer Orbit）](/glossary/orbits/transfer-orbit/)
- [变推力月球飞越（Powered Lunar Flyby）](/glossary/other/powered-lunar-flyby/)
- [月球引力辅助（Lunar Gravity Assist）](/glossary/other/lunar-gravity-assist/)

## 参考文献

- 魏赞等. 地月远距离逆行轨道族月球借力转移入轨研究[J]. 北京航空航天大学学报, 2026.
- Bate R R, Mueller D D, White J E. Fundamentals of Astrodynamics[M]. Dover Publications, 1971.
- Stern S A, et al. Patched-conic and CR3BP methods for lunar transfer design[C]. AAS/AIAA Astrodynamics Specialist Conference, 2019.
