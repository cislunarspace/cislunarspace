---
title: 微分校正（Differential Correction）
description: 将圆型限制性三体等低阶简化模型轨道通过多节点打靶连续性约束无缝过渡到高精度星历多体摄动模型的数值配准方法。
keywords: 微分校正, Differential Correction, 多重打靶, 星历模型, 连续性约束
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 微分校正（Differential Correction）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/navigation/differential-correction/
---

# 微分校正（Differential Correction）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

微分校正（Differential Correction）是一种基于一阶变分方程与多重打靶法（Multiple Shooting Method）的高维非线性边界值问题求解技术。在复杂航天轨道设计中，特指将理想化低保真动力学模型（如圆型限制性三体问题 CR3BP 或二体拼接模型）中设计得到的名义轨道与转移轨迹，转化为满足连续性与实际边界约束、能够在高精度行星历表全力摄动模型（Full Force Ephemeris Model）下稳定收敛运行的真实工程轨道。

## 物理机制与工程价值

在地月复杂航天任务设计中（如 NRHO 轨道向 DRO 轨道转移、地月 $L_2$ 空间站航线规划），直接在全力星历模型中全局寻优往往面临搜索空间巨大且极度耗时的困境。工程标准流程通常先在 CR3BP 自治系统中快速生成拓扑解，随后利用微分校正技术完成高保真模型过渡：

1. **分段打靶离散化**：将连续的初值轨道划分为 $N$ 个离散节点（Patch Points），记录各节点的历元时间 $t_k$ 与状态量 $\mathbf{x}_k$；
2. **构建边界残差方程**：对内部无机动节点建立位置与速度双重连续性约束 $\mathbf{x}(t_{k+1}^-) - \mathbf{x}_{k+1} = \mathbf{0}$；对施加点火控制的机动节点仅施加位置连续性约束，允许速度矢量发生脉冲跳变；
3. **雅可比矩阵迭代求解**：联立高精度星历变分方程计算各轨道弧段的状态转移矩阵，构建超定或欠定雅可比残差矩阵，利用摩尔彭罗斯伪逆或高斯牛顿法迭代修正各节点状态与点火历元。

该方法消除了星历非自治摄动引起的流形漂移，确保了地月空间理论轨道向实际飞行工程轨道的高精度保真转化。

## 相关概念

- [微分修正算法（Differential Correction Algorithm）](/glossary/dynamics/an-iterative-method-that-maps-terminal-constraint-residuals-back-to-initial-velocity-corrections-via/)
- [全摄动模型（Full Force Model）](/glossary/dynamics/full-force-model/)
- [星历多体模型（Ephemeris-Based N-Body Model）](/glossary/dynamics/ephemeris-based-n-body-model/)
- [状态雅可比矩阵（State Jacobian Matrix）](/glossary/dynamics/state-jacobian-matrix/)

## 参考文献

- Wang, K., Qi, R., & Baoyin, H. Transfers between Earth-Moon libration point orbits in the full ephemeris model. Acta Astronautica, 2021, 180: 318-330.
- Pavlak, T. A. Trajectory Design and Orbit Stationkeeping in the Earth-Moon System. Ph.D. dissertation, Purdue University, 2013.
