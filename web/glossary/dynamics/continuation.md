---
title: 延拓（Continuation）
description: 详细解析轨道力学中延拓方法的定义、数学原理、弧长延拓算法，以及在地月轨道族探索中的应用
keywords: 延拓, Continuation, 弧长延拓, 轨道族, 参数延续, 数值延拓, 地月空间, DRO
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 延拓（Continuation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 延拓方法详解 | 轨道族参数探索与数值延续
  description: 详细解析轨道力学中延拓方法的定义、数学原理、弧长延拓算法，以及在地月轨道族探索中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 延拓方法详解 | 轨道族参数探索与数值延续
  description: 详细解析轨道力学中延拓方法的定义、数学原理、弧长延拓算法，以及在地月轨道族探索中的应用
  image: /logo.png
permalink: /glossary/dynamics/continuation/
---

# 延拓（Continuation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

> 校对记录：
> 1. 2026年4月29日：纠正了参考文献错误

## 定义

延拓（Continuation）是轨道力学和非线性动力学中一种重要的数值方法，其基本思想是：从一条已知的轨道解出发，通过逐步改变某个系统参数（如轨道周期、近月点高度、能量积分值、振幅等），利用上一步的解作为下一步的初始猜测，求解相邻的轨道解。通过这种方式，可以系统地探索一族轨道随参数变化的演化规律，绘制出完整的轨道族图谱。

延拓方法在地月空间轨道设计中具有核心地位，尤其在平动点附近的周期轨道族（如 Halo 轨道族、Lyapunov 轨道族、DRO 轨道族）的系统性探索中不可或缺。

## 核心要素

### 基本原理

设轨道动力学系统为 $\dot{\mathbf{x}} = \mathbf{f}(\mathbf{x}, \lambda)$，其中 $\mathbf{x}$ 为状态向量，$\lambda$ 为可变参数。已知在参数值 $\lambda_0$ 下存在周期解 $\mathbf{x}_0(t)$（周期为 $T_0$），延拓的目标是求解 $\lambda_0 + \Delta\lambda$ 处的相邻周期解。

基本步骤为：

1. 以 $\lambda_0$ 处的解 $\mathbf{x}_0$ 作为初始猜测
2. 将参数微调为 $\lambda_1 = \lambda_0 + \Delta\lambda$
3. 利用微分修正求解 $\lambda_1$ 处的周期轨道
4. 以 $\lambda_1$ 处的解为起点，继续增大参数至 $\lambda_2$
5. 重复直至覆盖目标参数范围

### 弧长延拓法（Arc-length Continuation）

当参数变化导致解曲线出现**转向点**（turning point）时，简单的参数延拓会失效（因为参数不再是单调变化的）。弧长延拓法通过将解曲线参数化为弧长 $s$ 来解决这一问题：

$$\mathbf{F}(\mathbf{x}(s), \lambda(s)) = \mathbf{0}$$

$$\left\|\frac{d\mathbf{x}}{ds}\right\|^2 + \left(\frac{d\lambda}{ds}\right)^2 = 1$$

在每一步中，沿解曲线的切线方向预测下一个点，然后通过牛顿迭代进行校正。这种"预测-校正"（Predictor-Corrector）策略使得延拓可以沿解曲线平滑地绕过转向点。

### 延拓中的关键参数选择

在轨道族延拓中，常用的延拓参数包括：

| 延拓参数 | 适用场景 | 典型应用 |
|:---|:---|:---|
| 振幅 $A_z$ | 周期轨道族探索 | Halo 轨道族、Lyapunov 轨道族 |
| 轨道周期 $T$ | DRO 轨道族 | 远距离逆行轨道族的周期范围 |
| 近月点高度 $h_p$ | 月球轨道族 | 低月轨道至高月轨道族 |
| Jacobi 常数 $C$ | 平动点轨道能量层 | 不同能量下的轨道形态变化 |
| 近月点速度增量 $\Delta v$ | 月球借力转移 | DRO 入轨方案族 |

### 在 DRO 轨道族研究中的应用

魏赞等（2026）在研究地月远距离逆行轨道族时，延拓方法被用于：

1. **生成 DRO 轨道族**：从已知的 DRO 解出发，通过改变轨道周期参数进行延拓，得到覆盖不同周期范围的 DRO 轨道族
2. **探索近月点分布**：对族内每条 DRO 轨道计算近月点状态，绘制庞加莱图（Poincaré Map），分析近月点在相空间中的分布特征
3. **筛选转移窗口**：通过延拓识别出近月点速度方向和大小适合进行月球借力入轨的 DRO 成员

### 延拓与微分修正的关系

延拓方法和微分修正方法密切相关但功能不同：

- **微分修正**解决的是"给定约束条件，求解满足条件的单一轨道"的问题
- **延拓**解决的是"从已知解出发，系统性地探索一族轨道"的问题

在实际应用中，延拓的每一步都需要调用微分修正来确保新参数下的解满足轨道约束条件，因此延拓常被视为微分修正的"外层循环"。

### 数值稳定性与步长控制

延拓的数值稳定性取决于步长 $\Delta\lambda$（或弧长步长 $\Delta s$）的选择：

- 步长过大：初始猜测偏离真实解，微分修正可能不收敛
- 步长过小：计算效率低下，需要大量迭代步

常用的自适应步长策略包括：

- 根据上一步微分修正的迭代次数调整步长（迭代次数少则增大步长，反之减小）
- 根据解曲线的曲率调整步长（曲率大处减小步长）
- 伪弧长延拓中的约束步长控制

## 应用价值

延拓方法在地月空间轨道设计中的核心价值体现在：

- **轨道族全局探索**：系统性地揭示一族轨道随参数变化的完整图谱，避免遗漏重要分支
- **分叉检测**：在延拓过程中，当轨道族出现分叉（如从 Lyapunov 轨道分叉出 Halo 轨道）时，延拓可以自然地捕捉到这些关键节点
- **任务设计效率**：相比逐个独立求解，延拓利用前一步的信息大幅减少每步的计算量，使得大规模轨道族探索成为可能
- **DRO 入轨方案搜索**：通过延拓系统性地扫描 DRO 轨道族成员的近月点状态，识别满足月球借力入轨条件的目标轨道

## 相关概念

- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [拼接法（Patched Method）](/glossary/dynamics/patched-method/)
- [微分修正（Differential Correction）](/glossary/dynamics/differential-correction/)
- [庞加莱图（Poincaré Map）](/glossary/dynamics/poincare-map/)


## 参考文献

[1] 魏赞, 石玉, 张晨, 等. 地月远距离逆行轨道族月球借力转移入轨研究[J]. 北京航空航天大学学报, 2026: 1-16.

[2] Parker T S, Chua L. Practical numerical algorithms for chaotic systems[M]. Springer Science & Business Media, 2012.

[3] Doedel E, Champneys A, Fairgrieve T, et al. Continuation and bifurcation software for ordinary differential equations[J]. FTP from Pub/doedel/auto, 1997, 39.

[4] Broucke R A. Periodic orbits in the restricted three body problem with Earth-moon masses[R]. 1968.
