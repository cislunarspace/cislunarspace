---
title: 脉冲机动（Impulsive Maneuver）
description: 详细解析脉冲机动的定义、数学模型、在轨道转移初步设计中的应用，以及与有限推力机动的对比
keywords: 脉冲机动, Impulsive Maneuver, 速度增量, 轨道转移, 地月空间, Delta-v, 月球借力, 有限推力
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 脉冲机动（Impulsive Maneuver）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 脉冲机动详解 | 轨道转移的理想化机动模型
  description: 详细解析脉冲机动的定义、数学模型、在轨道转移初步设计中的应用，以及与有限推力机动的对比
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 脉冲机动详解 | 轨道转移的理想化机动模型
  description: 详细解析脉冲机动的定义、数学模型、在轨道转移初步设计中的应用，以及与有限推力机动的对比
  image: /logo.png
permalink: /glossary/dynamics/impulsive-maneuver/
---

# 脉冲机动（Impulsive Maneuver）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

脉冲机动（Impulsive Maneuver）是轨道力学中一种理想化的轨道机动模型，假设航天器的速度变化在瞬间完成——即速度增量 $\Delta \mathbf{v}$ 的施加时间为零。在脉冲机动假设下，机动前后航天器的位置保持不变，仅速度矢量发生突变：

$$\mathbf{r}^+ = \mathbf{r}^-, \quad \mathbf{v}^+ = \mathbf{v}^- + \Delta \mathbf{v}$$

其中上标 "$-$" 和 "$+$" 分别表示机动前后的状态。脉冲机动是轨道转移初步设计中最基本、最常用的机动模型，为评估转移方案的能量需求提供了简洁而有效的分析框架。

## 核心要素

### 物理基础与适用条件

脉冲机动假设的物理含义是：发动机推力远大于航天器所受的引力和其他外力，使得在极短的点火时间内，引力引起的轨道变化可以忽略。这一假设在以下条件下成立：

- 发动机推力足够大（化学发动机通常满足）
- 点火时间远小于轨道周期（通常 $t_{\text{burn}} \ll T_{\text{orbit}}$，即点火时间不到轨道周期的 1%）
- 不关心点火期间的精确轨道演化

当推力较小（如电推进发动机）时，脉冲假设不再适用，需要使用**有限推力**（Finite Thrust）或**连续推力**（Continuous Thrust）模型。

### 速度增量与 $\Delta v$ 预算

脉冲机动的核心度量是速度增量 $\Delta v = \|\Delta \mathbf{v}\|$。在任务设计中，$\Delta v$ 预算是评估转移方案可行性的关键指标：

$$\Delta v_{\text{total}} = \sum_{i=1}^{n} \Delta v_i$$

其中 $n$ 为总机动次数。$\Delta v$ 与燃料消耗的关系由**齐奥尔科夫斯基方程**（Tsiolkovsky Equation）给出：

$$\Delta v = I_{\text{sp}} \cdot g_0 \cdot \ln\left(\frac{m_0}{m_f}\right)$$

其中 $I_{\text{sp}}$ 为比冲，$g_0$ 为标准重力加速度，$m_0$ 和 $m_f$ 分别为机动前后的航天器质量。

### 轨道转移中的典型脉冲机动

| 机动类型 | 描述 | 典型 $\Delta v$ 量级 |
|:---|:---|:---|
| **霍曼转移**（Homan Transfer） | 两次脉冲实现共面圆轨道间转移 | 3.2 km/s（LEO→GEO） |
| **双椭圆转移** | 三次脉冲，适用于大半径比轨道 | 可能小于霍曼转移 |
| **平面改变** | 改变轨道倾角的脉冲 | 取决于倾角变化量 |
| **月球借力入轨** | 在近月点施加脉冲进入目标轨道 | 数百 m/s 量级 |

### 在 DRO 转移设计中的应用

魏赞等（2026）在研究地月 DRO 轨道族的月球借力转移入轨方案中，脉冲机动的使用体现在：

1. **LEO 出发脉冲**：在近地轨道上施加出发速度增量 $\Delta v_{\text{LEO}}$，使航天器进入地月转移轨道
2. **近月点修正脉冲**：在月球近月点处施加速度增量 $\Delta v_{\text{PLF}}$，调整速度矢量方向和大小以匹配目标 DRO 轨道的近月点条件
3. **DRO 入轨脉冲**：必要时在到达 DRO 后施加轨道修正脉冲，使轨道精确收敛至标称 DRO

总 $\Delta v$ 需求为：

$$\Delta v_{\text{total}} = \Delta v_{\text{LEO}} + \Delta v_{\text{PLF}} + \Delta v_{\text{DRO}}$$

通过拼接法和延拓方法对各段轨道进行优化，可以使 $\Delta v_{\text{total}}$ 最小化。

### Lambert 问题与脉冲转移

给定两个位置 $\mathbf{r}_1$ 和 $\mathbf{r}_2$ 及转移时间 $\Delta t$，Lambert 问题求解连接两点的开普勒轨道，并给出两端所需的速度 $\mathbf{v}_1$ 和 $\mathbf{v}_2$。脉冲速度增量为：

$$\Delta v_1 = \|\mathbf{v}_1 - \mathbf{v}_{\text{orbit},1}\|, \quad \Delta v_2 = \|\mathbf{v}_{\text{orbit},2} - \mathbf{v}_2\|$$

Lambert 问题是脉冲转移设计的基本工具，通过扫描不同的出发时刻和转移时间，可以绘制 **Porkchop 图**（猪排图），直观展示 $\Delta v$ 随发射窗口的变化。

### 与有限推力机动的对比

| 特征 | 脉冲机动 | 有限推力机动 |
|:---|:---|:---|
| 推力模型 | 无穷大推力、零作用时间 | 有限推力、有限作用时间 |
| 位置变化 | 机动前后位置不变 | 点火期间位置持续变化 |
| 计算复杂度 | 低（仅需轨道力学） | 高（需推力矢量控制） |
| 适用阶段 | 概念设计、初步方案 | 详细设计、任务执行 |
| 发动机类型 | 化学发动机 | 化学或电推进 |
| $\Delta v$ 精度 | 近似（忽略重力损耗） | 精确 |

需要注意的是，有限推力机动存在**重力损耗**（Gravity Loss）——在有限推力期间，重力持续使航天器减速（对于加速机动）或改变速度方向。实际任务中，脉冲 $\Delta v$ 需乘以一个修正系数（通常 1.05-1.3）来估算有限推力情况下的实际燃料消耗。

## 应用价值

脉冲机动模型在地月空间任务设计中的核心价值体现在：

- **方案快速评估**：脉冲假设大幅简化了轨道转移计算，使得在概念设计阶段可以快速筛选大量候选方案
- **能量需求基准**：$\Delta v$ 预算是任务可行性评估的第一道门槛，脉冲模型提供了简洁的能量需求度量
- **Porkchop 图绘制**：基于 Lambert 问题的脉冲转移分析可以生成发射窗口的全局视图
- **拼接法的基础**：在拼接法框架下，各段轨道的连接通常以脉冲机动形式实现，脉冲模型是拼接法的自然组成部分

## 相关概念

- [转移轨道（Transfer Orbit）](/glossary/orbits/transfer-orbit/)
- [月球引力辅助（Lunar Gravity Assist）](/glossary/other/lunar-gravity-assist/)
- [变推力月球飞越（Powered Lunar Flyby）](/glossary/other/powered-lunar-flyby/)
- [拼接法（Patched Method）](/glossary/dynamics/patched-method/)
- [微分修正（Differential Correction）](/glossary/dynamics/differential-correction/)

## 参考文献

- 魏赞等. 地月远距离逆行轨道族月球借力转移入轨研究[J]. 北京航空航天大学学报, 2026.
- Bate R R, Mueller D D, White J E. Fundamentals of Astrodynamics[M]. Dover Publications, 1971.
- Vallado D A. Fundamentals of Astrodynamics and Applications[M]. 4th ed. Microcosm Press, 2013.
- Lawden D F. Optimal Trajectories for Space Navigation[M]. Butterworths, 1963.
