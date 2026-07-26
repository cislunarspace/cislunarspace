---
title: 庞加莱图（Poincaré Map）
description: 详细解析庞加莱图的定义、与庞加莱截面的关系、在地月轨道族近月点分布分析中的应用
keywords: 庞加莱图, Poincaré Map, 庞加莱截面, 相空间映射, 近月点分布, 离散映射, 地月空间, DRO
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 庞加莱图（Poincaré Map）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 庞加莱图详解 | 连续动力系统的离散化可视化方法
  description: 详细解析庞加莱图的定义、与庞加莱截面的关系、在地月轨道族近月点分布分析中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 庞加莱图详解 | 连续动力系统的离散化可视化方法
  description: 详细解析庞加莱图的定义、与庞加莱截面的关系、在地月轨道族近月点分布分析中的应用
  image: /logo.png
permalink: /glossary/dynamics/poincare-map/
---

# 庞加莱图（Poincaré Map）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

庞加莱图（Poincaré Map）是将连续动力系统降维为离散映射的可视化方法。其基本思想是在相空间中选取一个低维截面（称为**庞加莱截面**），记录轨道每次穿越该截面时的状态点，将连续的轨道演化转化为截面上一系列离散点的分布图。庞加莱图以法国数学家亨利·庞加莱（Henri Poincaré）命名，是分析非线性动力系统、识别周期轨道和混沌行为的重要工具。

在地月远距离逆行轨道（DRO）族的研究中，庞加莱图用于展示族内各成员轨道的近月点在相空间中的分布特征，从而揭示轨道族的结构规律和可用于转移设计的窗口。

## 核心要素

### 与庞加莱截面的关系

庞加莱图与庞加莱截面（Poincaré Section）密切相关但侧重不同：

| 概念 | 侧重点 | 描述 |
| :--- | :--- | :--- |
| **庞加莱截面** | 几何对象 | 相空间中的 $(N-1)$ 维或 $(N-2)$ 维超平面 |
| **庞加莱图** | 映射与可视化 | 轨道穿越截面后的交点分布图 |

简言之，庞加莱截面是"切面"，庞加莱图是"切面投影后看到的图案"。

### 数学定义

设连续动力系统为 $\dot{\mathbf{x}} = \mathbf{f}(\mathbf{x})$，$\mathbf{x} \in \mathbb{R}^N$。选取截面 $\Sigma \subset \mathbb{R}^{N-1}$，定义**首次回归映射**（First Return Map）$P: \Sigma \to \Sigma$：

$$P(\mathbf{x}_k) = \mathbf{x}_{k+1}$$

其中 $\mathbf{x}_k$ 为轨道第 $k$ 次穿越 $\Sigma$ 的状态，$\mathbf{x}_{k+1}$ 为下一次穿越的状态。这个映射即为庞加莱映射，其图像即为庞加莱图。

### 交点分布的物理含义

庞加莱图中离散点的分布模式反映了轨道的动力学性质：

| 交点分布模式 | 对应的轨道类型 |
| :--- | :--- |
| **孤立点**（有限个） | 周期轨道（周期为穿越次数的整数倍） |
| **闭合曲线** | 准周期轨道（环面上的轨道） |
| **密集散点填充区域** | 混沌轨道 |
| **稀疏散点** | 长周期轨道或过渡轨道 |

### 在 DRO 轨道族中的应用

魏赞等（2026）在研究地月 DRO 轨道族时，利用庞加莱图展示各 DRO 成员轨道的近月点分布：

1. **截面选取**：以近月点（$r = r_{\text{min}}$ 处）为截面，记录每次轨道经过近月点时的状态 $(r, v_r, v_t)$ 或其投影
2. **族内成员标记**：将不同周期的 DRO 轨道的近月点绘制在同一庞加莱图上
3. **转移窗口识别**：通过观察近月点在庞加莱图上的分布密度和方向特征，识别适合进行月球借力入轨的窗口

对于单条 DRO 轨道，由于 DRO 是周期轨道，其近月点在庞加莱图上表现为**固定的离散点**。而 DRO 轨道族整体在庞加莱图上的分布则呈现出规律性的曲线结构，反映了族内近月点状态随轨道参数（如周期）的连续变化。

### 低维系统的经典应用

在二维自治系统中，庞加莱图退化为一维截面上的点列，具有最直观的可视化效果：

- **中心型不动点**：对应稳定的周期轨道，周围的点形成闭合环
- **鞍型不动点**：对应不稳定的周期轨道（如 Lyapunov 轨道），周围的点沿稳定/不稳定流形排列
- **不变环面**：截面上的闭合曲线，对应准周期运动

在 CR3BP 的平面限制性问题中，庞加莱图常用于展示 $x$ 轴穿越截面（$y = 0$, $\dot{y} > 0$）上的交点分布，从而区分不同类型轨道族和混沌区域。

### 数值实现要点

绘制高质量的庞加莱图需要注意：

- **积分精度**：长时间积分需要高精度积分器（如 Runge-Kutta 8(9) 阶或 Symplectic 积分器）
- **截面穿越检测**：通过符号变化检测穿越时刻，再插值得到精确交点
- **坐标选择**：选择合适的截面坐标使不同轨道族的特征最清晰
- **足够的积分时间**：混沌轨道需要足够长的积分时间才能展现其散布特征

## 应用价值

庞加莱图在地月空间动力学研究中的核心价值在于：

- **轨道族结构可视化**：将高维相空间中的轨道族关系降维到二维图上，直观展示族内成员的拓扑关系
- **近月点分布分析**：对于 DRO 转移设计，庞加莱图可以清晰展示不同 DRO 轨道近月点的位置和速度方向分布
- **混沌识别**：通过观察交点分布是否形成规则图案，快速判断轨道是否处于混沌状态
- **转移设计辅助**：结合延拓方法生成的轨道族数据，庞加莱图为转移窗口筛选提供直观的"地图"

## 相关概念

- [庞加莱截面（Poincaré Section）](/glossary/dynamics/poincare-section/)
- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [延拓（Continuation）](/glossary/dynamics/continuation/)
- [微分修正（Differential Correction）](/glossary/dynamics/differential-correction/)
- [脉冲机动（Impulsive Maneuver）](/glossary/dynamics/impulsive-maneuver/)
- 不变环面（Invariant Torus）
- 混沌轨道（Chaotic Orbit）

## 参考文献

- 魏赞等. 地月远距离逆行轨道族月球借力转移入轨研究[J]. 北京航空航天大学学报, 2026.
- Poincaré H. Les méthodes nouvelles de la mécanique céleste[M]. Gauthier-Villars, 1892.
- Parker T S, Chua L O. Practical Numerical Algorithms for Chaotic Systems[M]. Springer, 1989.
- Hénon M. Numerical exploration of the restricted problem, V: Hill's case[J]. Astronomy and Astrophysics, 1969, 1: 223-267.
