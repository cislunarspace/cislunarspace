---
title: 相位偏差（Phase Deviation）
description: 航天器在周期轨道沿飞行方向的相位相对基准轨迹偏离现象。源于 X 轴穿越控制等事件驱动保持方法不约束时间/相位分量。不加约束时相位漂移可累积至数小时量级，影响交会、凌日规避等任务需求。PC-SCoP 方法将相位约束作为优化问题的显式约束而非不可调权重的微分修正。
keywords: 相位偏差, Phase Deviation, 相位漂移, 平动点轨道保持, X 轴穿越控制, PC-SCoP, 轨道维持, NRHO, 绝对相位偏置
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 相位偏差（Phase Deviation）
  desc: 平动点轨道保持中相位偏移的成因、后果与控制——从 X 轴穿越到 PC-SCoP。
  image: /logo.png
og:
  title: 相位偏差（Phase Deviation）详解 | 术语定义
  description: 周期轨道的相位漂移：X 轴穿越控制因不约束时间分量导致相位偏离累积；PC-SCoP 将相位约束作为 SOCP 中的显式约束。覆盖成因、后果与精确定义。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 相位偏差详解 | 术语定义
  description: 平动点轨道保持中相位偏移的成因与 PC-SCoP 解法。
  image: /logo.png
permalink: /glossary/dynamics/phase-deviation/
---

# 相位偏差（Phase Deviation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义与成因

**相位偏差**（phase deviation）指航天器在周期轨道（平动点轨道、NRHO 等）上沿轨道飞行方向相对基准轨迹的位置偏移——即沿轨道运动方向"超前"或"滞后"（Shimane et al. 2025）。与状态分量偏差（位置和速度偏离）不同，相位偏差是沿标称轨道的切向累积，它不影响轨道几何形状的维持但影响**航天器出现在轨道上哪个位置**。

相位偏差的根本成因在于事件驱动的保持策略——最典型的是 **X 轴穿越控制**（x-axis crossing control）（Folta et al. 2014；Shimane et al. 2025）。该策略在航天器预测轨迹穿越会合坐标系 xz 平面（近月点附近）的事件时刻，通过微分修正或优化使预测状态与标称基线的部分状态分量匹配（通常只匹配速度分量 $v_x, v_z$ 等）。关键问题在于：一次机动最多控制六个状态分量中的三个，而**穿越时刻 $t_f$（即相位）没有被约束**。结果是每次控制后的实际穿越时刻可以在数值上偏离标称穿越时刻，经过多个周期累积后形成持续增长的相位偏差——即 **相位漂移**（phase drift）（Shimane et al. 2025；Davis et al. 2022）。

以 Gateway 的 NRHO 为例：X 轴穿越控制（无相位约束）在 5 年（约 300 圈）的 Monte Carlo 仿真中，相位偏差（以近月点时刻衡量）可累积至约 2.1 小时（Shimane et al. 2025 图 4）。

## 相位约束 X 轴穿越：从微分修正到 SOCP

较早期的相位约束方案通过两阶段微分修正（DC）：残差向量中包含目标状态分量（如 $v_x, v_z$）与穿越时刻偏差 $t_f - t_{f,\text{ref}}$，引入一个无物理意义的缩放权重 $W_{t_f}$ 调整时间偏差在残差向量中的权重（Davis et al. 2022）。权重调节过程不够直观——$W_{t_f}$ 需要手动试错找到数值稳定且保持性能满意的值。

**PC-SCoP**（Phase-Constrained Sequential Cone Program）是 Shimane et al. (2025) 提出的替代方案：将带相位约束的 X 轴穿越控制表述为非线性规划问题（NLP），目标函数为速度增量（$\Delta V$）的 $\ell_2$ 范数，约束分别为状态分量偏差（$\varepsilon_{\vartheta,\text{targ}}$）和穿越时刻偏差（$\varepsilon_{t_f,\text{targ}}$），用序列线性化将非线性的动力学约束转化为逐次求解的二阶锥规划（SOCP）子问题。直观的物理参数（实际是对位置/速度和时间的容差阈值）替代了 DC 方案中无物理意义的权重 $W_{t_f}$（Shimane et al. 2025）。

### PC-SCoP 数学形式

记 $T$ 为机动矢量在会合坐标系中的表示，$\delta T$ 为机动修正量，$\delta t_f$ 为时间增量。在每次序列迭代中，求解：

$$
\begin{aligned}
\min_{\delta T, \delta t_f} &\quad \|T + \delta T\|_2 \\
\text{s.t.} &\quad \|\vartheta(t_f, \text{ref}) - \vartheta(t_f, \text{pert})\| \le \varepsilon_{\vartheta,\text{targ}} \\
&\quad |t_f - t_{f,\text{ref}}| \le \varepsilon_{t_f,\text{targ}}
\end{aligned}
$$

动力学对 $\delta T, \delta t_f$ 的依赖通过变分方程线性化，每次求解后更新状态估计并重新线性化（Shimane et al. 2025）。

## 绝对相位偏置：DRO 编队中的相位控制

绝对相位偏置（absolute phase bias）是 DRO 编队轨道保持的一种思路。通过控制副星穿越月心 X-Z 平面的时刻比主星晚 $\Delta t$，使副星在主星后方保持固定安全距离（敖海跃等 2024）。与基于参考轨迹的相对运动控制不同，该方法直接从绝对运动的角度控制编队相位差——在不需要连续追踪完整参考轨迹的 DRO 长期运行场景下具有简洁性和安全性优势。

## 相关概念

- [轨道保持（Station-Keeping, SK）](/glossary/dynamics/station-keeping/)

- [约束 X 轴穿越速度](/glossary/dynamics/constrained-x-axis-crossing-velocity/)

- [目标点策略（Target Point Strategy）](/glossary/dynamics/target-point-strategy/)

- [近直线晕轨道（NRHO）](/glossary/orbits/nrho/)

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

## 参考文献

- Shimane et al., 2025, Optimization-Based Phase-Constrained x-Axis Crossing Control for Station-Keeping on Libration Point Orbits（PC-SCoP 的完整数学推导与 NRHO Monte Carlo 仿真结果）

- Davis et al., 2022（带相位约束的双阶段微分修正 X 轴穿越控制的权衡分析）

- Folta et al., 2014, Earth-Moon Libration Point Orbit Stationkeeping: Theory, Modeling, and Operations（X 轴穿越控制策略的起源与 ARTEMIS 任务验证）

- 敖海跃等, 2024（DRO 编队绝对相位偏置方法）
