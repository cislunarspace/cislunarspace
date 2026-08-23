---
permalink: /background/math/
title: 数学基础
description: 地月空间轨道动力学与轨迹优化所需的数值计算方法与数学工具。
keywords: 数学工具, 打靶法, 弧长延续法, 辛积分器, 两点边值问题, 伪谱法, 数值优化
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-08-20
wechatShare:
  title: 地月空间数学工具
  desc: 支撑三体动力学与轨道计算的数值分析与数学算法体系。
  image: /logo.png
---

# 数学基础

在地月三体非线性动力学系统中，由于缺乏全局解析积分常量，轨道的搜索、流形结构的提取、轨道转移的设计以及轨道维持策略的制定，必须深度依托现代数值分析与计算数学方法。

本子栏目整理地月空间任务设计与轨道力学研究中不可或缺的数学工具与核心算法。

## 核心算法体系

### 1. 两点边值问题与打靶法（Two-Point Boundary Value Problems & Shooting Methods）

在非线性微分方程组中求解满足首末端特定状态或周期性约束的初始状态向量。

- **单打靶法（Single Shooting）**：利用状态转移矩阵（STM）计算雅可比矩阵，通过牛顿迭代法逐步修正初始状态，适用于短周期或弱非线性轨道。
- **多重打靶法（Multiple Shooting）**：将整条轨迹分割为若干子段，在段间施加连续性约束。该方法有效降低了非线性发散敏感度，是长周期三体轨道搜索与复杂转移轨迹拼接的工业标准方法。
- 专题阅读：[打靶法原理与实现](/background/math/shooting-method/)

### 2. 数值延拓法（Numerical Continuation）

用于在参数空间内追踪非线性代数方程解的分支演化。

- **自然参数延拓**：以 Jacobi 常数、能量或周期作为固定步长参数逐步递推。
- **伪弧长延续法（Pseudo-Arc-Length Continuation）**：引入沿解曲线切线方向的弧长参数，克服在极大值、极小值或分岔点处的雅可比矩阵奇异性，从而能够完整刻画从 L1/L2 Halo 族到 NRHO 族的整族几何形态演化。
- 专题阅读：[弧长延续法与分岔分析](/background/math/continuation/)

### 3. 保结构与辛几何积分（Symplectic Integrators）

天体动力学本质上是哈密顿（Hamiltonian）保相体积系统。

- 传统显式 Runge-Kutta 等通用数值算法在长时间积分中会导致能量（如 Jacobi 常数）产生系统性人工漂移。
- 辛积分器严格保持系统的辛几何结构与相空间体积，对于验证远距离逆行轨道（DRO）等在数十年时间尺度下的长期轨道稳定性至关重要。
- 专题阅读：[辛积分器原理与构造](/background/math/symplectic-integrator/)

### 4. 轨迹参数化与非线性规划（NLP & Collocation）

将连续时间动力学系统离散化为代数约束，采用非线性规划（如 SQP 或内点法）进行大尺度轨迹寻优。

- **正交配点法（Orthogonal Collocation）** 与 **伪谱法（Pseudospectral Methods）**：利用高斯求积节点（Legendre-Gauss-Lobatto）实现高精度的轨迹多项式逼近，广泛应用于电推进低推力转移轨道全局优化。
