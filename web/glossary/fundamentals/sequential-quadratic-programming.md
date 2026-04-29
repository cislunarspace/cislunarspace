---
title: 序列二次规划（Sequential Quadratic Programming）
description: 详细解析序列二次规划算法的基本原理、迭代过程及在轨迹优化中的应用
keywords: 序列二次规划, Sequential Quadratic Programming, SQP, 非线性规划, 轨迹优化
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 序列二次规划（Sequential Quadratic Programming）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 序列二次规划详解 | 术语定义
  description: 详细解析序列二次规划算法的基本原理及迭代过程
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 序列二次规划详解 | 术语定义
  description: 详细解析序列二次规划算法的基本原理及迭代过程
  image: /logo.png
permalink: /glossary/fundamentals/sequential-quadratic-programming/
---

# 序列二次规划（Sequential Quadratic Programming）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

序列二次规划（SQP）算法是求解非线性规划（NLP）问题最有效的方法之一，具有整体收敛性与局部超线性收敛特性。其基本思想是将原 NLP 问题转化为一系列二次规划（QP）子问题进行求解。

## 核心要素

### 问题形式

一般的 NLP 问题可表示为：

$$\min \quad J = F(y)$$
$$\text{s.t.} \quad h_i(y) = 0, \quad i = 1, 2, \ldots, r$$
$$g_j(y) \leq 0, \quad j = r+1, r+2, \ldots, s$$

其中 $y$ 包含状态变量和控制变量。

### Lagrangian 函数

NLP 问题的 Lagrangian 函数为：

$$L(y, \lambda) = F(y) + \sum_{i=1}^{r} \lambda_i h_i(y) + \sum_{j=r+1}^{s} \lambda_j g_j(y)$$

### QP 子问题

在每次迭代中，用一阶 Taylor 级数近似约束条件，二阶 Taylor 级数近似目标函数，将 NLP 问题转化为 QP 子问题：

$$\min_{d_k} \nabla F(y_k)^{\mathrm{T}} d_k + \frac{1}{2} d_k^{\mathrm{T}} H_k d_k$$

其中 $H_k$ 为 Lagrangian 函数 Hessian 矩阵的近似正定形式，采用改进 BFGS 公式更新：

$$H_{k+1} = H_k + \frac{s_k s_k^{\mathrm{T}}}{s_k^{\mathrm{T}} \delta_k} - \frac{(H_k \delta_k)(H_k \delta_k)^{\mathrm{T}}}{(H_k \delta_k)^{\mathrm{T}} \delta_k}$$

### 迭代步骤

1. 给定初始点 $y_0$、初始矩阵 $H_0$ 和控制误差 $\varepsilon$
2. 求解 QP 子问题，确定搜索方向 $d_k$ 及拉格朗日乘子 $\lambda_k$
3. 由精确一维搜索确定步长因子 $\alpha_k$，计算新迭代点 $y_{k+1} = y_k + \alpha_k d_k$
4. 若 $\|y_{k+1} - y_k\| \leq \varepsilon$，停止；否则更新 $H_k$，返回步骤 2

### 与其他优化方法的对比

| 方法 | 特点 | 适用场景 |
|:---|:---|:---|
| SQP | 基于梯度，收敛快，局部最优 | 连续可微的 NLP 问题 |
| 遗传算法 | 全局搜索，不依赖梯度 | 离散或非光滑问题 |
| 模拟退火 | 全局搜索，避免局部最优 | 复杂多峰问题 |

## 应用价值

SQP 算法是轨迹优化的核心方法之一。在运载火箭和弹道导弹的轨迹优化中，SQP 算法用于求解以运载能力或落点精度为目标函数、以入轨条件和过程约束为约束条件的非线性规划问题。其快速收敛特性使其在工程设计中得到广泛应用。

## 相关概念

- [轨迹优化（Trajectory Optimization）](/glossary/fundamentals/trajectory-optimization/)
- [牛顿迭代法（Newton's Iteration Method）](/glossary/fundamentals/newton-iteration-method/)
- [发射方位角（Launch Azimuth）](/glossary/fundamentals/launch-azimuth/)
- [俯仰程序角（Pitch Program Angle）](/glossary/fundamentals/pitch-program/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
