---
title: 多圈 NRHO 星历模型计算
description: 真实星历模型下多圈 NRHO 的计算方法：多次打靶法、连接点选取策略与关键数值结果。
keywords: NRHO, 多次打靶法, 星历模型, 连接点选取, 状态转移矩阵, DE430
author: 天疆说
date: 2026-05-10
lastUpdated: 2026-05-10
permalink: /cislunar-orbits/nrho/ephemeris-computation/
---

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文编辑来源：[CislunarSpace](https://cislunarspace.cn)
>
> 来源：https://cislunarspace.cn

# 多圈 NRHO 星历模型计算

## 问题背景

在 CR3BP 模型中，单圈 NRHO 可通过延续法或微分修正直接计算（参见 [设计参数](./design-parameters/)）。但在真实星历模型（如 JPL DE430）下计算多圈 NRHO 时，直接对整条轨道进行微分修正往往会失败——线性化误差随飞行时间累积，尤其是低近月点半径的 NRHO 在近月点附近状态变化剧烈，导致修正过程发散。

现有方法（如 Williams 等人的前向/后向打靶、Davis 等人的两级修正）虽能生成高保真多圈 NRHO，但依赖 SNOPT 或 NASA Copernicus 等专用优化软件，可复现性受限。

## 多次打靶法

多次打靶法（Multiple Shooting）是解决长弧段轨道计算收敛困难的标准方法，核心步骤为：

1. 将 CR3BP 模型下的初始轨道按时间分为 $n-1$ 段（segments）
2. 在星历模型下对每段分别前向积分
3. 在相邻段的连接点（patch points）施加状态连续性约束
4. 通过 Newton-Raphson 最小二乘迭代修正各连接点状态

约束方程为：

$$F(\mathbf{X}) = \begin{bmatrix} X_1(t_2) \\ X_2(t_3) \\ \vdots \\ X_{n-1}(t_n) \end{bmatrix} - \begin{bmatrix} X_2 \\ X_3 \\ \vdots \\ X_n \end{bmatrix} = 0$$

其中 $X_i(t_{i+1})$ 为从第 $i$ 个连接点前向积分至 $t_{i+1}$ 的状态，$X_{i+1}$ 为第 $i+1$ 个连接点的初始状态。迭代修正公式中涉及状态转移矩阵 $\Phi(t_i, t_{i-1})$ 构成的雅可比矩阵。

## 连接点选取策略

Liu & Liu (2025) 的核心贡献在于揭示了**连接点位置对计算成败的关键影响**，并提出了系统性的选取策略。

### 条件数分析

状态转移矩阵 $\Phi(t_i, t_{i-1})$ 的条件数 $C$ 取决于弧段长度和起始点位置。当起始点靠近近月点时，$C$ 急剧增大（可达数个量级），导致约束方程组病态，Newton-Raphson 修正过冲而发散。因此，**弧段端点必须远离近月点**。

### 相对距离参数 $s$

定义相对 x 方向距离 $s$ 量化首末连接点与月球的距离：

$$s = \begin{cases} \dfrac{x_R - x_1}{x_R - x_L}, & \text{L1 情形} \\[6pt] \dfrac{x_1 - x_L}{x_R - x_L}, & \text{L2 情形} \end{cases}$$

其中 $x_L$、$x_R$ 分别为 NRHO 与 xz 平面左右交点的 x 坐标，$x_1$ 为首末连接点的 x 坐标。$s = 0$ 对应近月点位置，$s = 1$ 对应远月点位置。

每圈轨道分成 $N$ 段：首末两个连接点关于 xz 平面对称放置（使近月点恰好处于首末段中间），其余连接点按等时间间隔分布。关键结论：

- 当 $N = 2$ 时，$s$ 应大于 0.4
- 当 $N \geq 4$ 时，$s$ 可降低至 0.2 以下
- 段数越多，连接点可越靠近月球；近月点半径较大的 NRHO 需更大的 $s$ 值

## 计算结果

采用 JPL DE430 星历，初始历元取 2025 年 1 月 1 日，主要结果如下：

| 轨道族 | 有效范围 | 最少段数 $N$ | 可达圈数 |
|--------|----------|-------------|----------|
| L1 NRHO | 近月点半径 < 12,000 km | 2（推荐 4） | 30+ |
| L2 NRHO | 周期 < 8.8 天 | 2（推荐 4） | 30+ |

L1 NRHO 的有效周期范围约为 7.88–10 天，L2 NRHO 的对应近月点半径为 1,850–11,000 km。近月点半径较大的 L1 NRHO（> 12,000 km）或周期较长的 L2 NRHO（> 8.8 天）仅能计算 10–20 圈，轨道在会合坐标系中呈现松散的漂移模式。对于 30 圈可达的情况，圈数可进一步扩展至 100 甚至 500 圈。

## 方法特点

- 不依赖专用优化软件（SNOPT、Copernicus 等），仅使用经典多次打靶与微分修正
- 实现门槛低，便于一般用户复现
- 对低近月点半径的 NRHO（Gateway 等任务关注的范围）效果最为显著

## 参考文献

[1] Liu L, Liu Y. A note on the computation of multi-revolution NRHO under the ephemeris model[J]. Advances in Space Research, 2025.

## 仿真实验

可在 [卫星轨道仿真实验室](/satellite-simulation/) 中设置 NRHO 初始条件，在真实星历模型下观察多圈轨道的演化行为。
