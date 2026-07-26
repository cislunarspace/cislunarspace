---
title: 航迹规划（Trajectory Planning）
description: 详细解析平流层飞艇航迹规划的定义、目标函数、约束条件及典型算法
keywords: 航迹规划, Trajectory Planning, 路径规划, 最优控制, 滚动优化, 低能耗, 平流层飞艇
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 航迹规划（Trajectory Planning）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 航迹规划（Trajectory Planning）详解 | 术语定义
  description: 详细解析平流层飞艇航迹规划的定义、目标函数、约束条件及典型算法
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 航迹规划（Trajectory Planning）详解 | 术语定义
  description: 详细解析平流层飞艇航迹规划的定义、目标函数、约束条件及典型算法
  image: /logo.png
permalink: /glossary/navigation/trajectory-planning/
---

# 航迹规划（Trajectory Planning）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

航迹规划是指在给定的任务约束下，为平流层飞艇设计从起点到目标点的最优或近最优飞行轨迹。对于长航时区域驻留任务，航迹规划需要同时考虑能源效率、驻留精度、飞行时间等多项目标。

## 问题描述

### 状态空间

$$\mathbf{x} = [x, y, z, \dot{x}, \dot{y}, \dot{z}, m]^T$$

### 控制输入

$$\mathbf{u} = [T_x, T_y, T_z, \dot{m}_{ballast}]^T$$

### 目标函数

$$J = \int_{t_0}^{t_f} L(\mathbf{x}, \mathbf{u}, t) dt + \phi(\mathbf{x}(t_f))$$

典型指标：

| 目标 | 表达式 |
| :--- | :--- |
| 能源最小 | $\min \int P_{prop} dt$ |
| 时间最短 | $\min (t_f - t_0)$ |
| 路径最短 | $\min \int | \mathbf{v} | dt$ |
| 驻留精度最大 | $\min \int | | \mathbf{p} - \mathbf{p}_d | | dt$ |

## 约束条件

### 运动学约束

$$\dot{\mathbf{x}} = f(\mathbf{x}, \mathbf{u})$$

### 控制约束

| 约束 | 范围 |
| :--- | :--- |
| 推力大小 | $0 \leq | T | \leq T_{max}$ |
| 推力方向 | 全向（欠驱动） |
| 高度变化率 | $ | \dot{h} | \leq \dot{h}_{max}$ |

### 路径约束

| 约束 | 要求 |
| :--- | :--- |
| 驻留区域 | $\mathbf{p} \in \mathcal{R}_{station}$ |
| 最大航程 | $d_{total} \leq D_{max}$ |
| 禁飞区 | $\mathbf{p} \notin \mathcal{R}_{forbidden}$ |

## 典型算法

### 解析方法

| 方法 | 优点 | 缺点 |
| :--- | :--- | :--- |
| 极小值原理 | 全局最优 | 计算复杂 |
| 梯度法 | 收敛快 | 局部最优 |

### 数值方法

| 方法 | 适用场景 |
| :--- | :--- |
| 直接_collocation | 数值稳定 |
| 伪谱法 | 高精度 |
| 模型预测控制（MPC） | 实时可行 |

### 智能优化

| 方法 | 特点 |
| :--- | :--- |
| 粒子群优化（PSO） | 全局搜索 |
| 遗传算法（GA） | 鲁棒性强 |
| 深度强化学习（DRL） | 处理复杂约束 |

## 低能耗航迹

### 原理

利用风场能量减少推进能耗：

$$E_{prop} = \int \frac{1}{2}\rho | \mathbf{v}_{rel} |^3 C_D S \cdot dt$$

相对风速：

$$\mathbf{v}_{rel} = \mathbf{v}_{airship} - \mathbf{v}_{wind}$$

### 最优策略

| 策略 | 条件 |
| :--- | :--- |
| 顺风航行 | $\mathbf{v}_{wind}$ 指向目标 |
| 高度调度 | 利用垂直风切变 |
| 等待/漂流 | 禁飞区或低风时段 |

## 相关概念

- [区域驻留控制（Regional Station-keeping Control）](/glossary/dynamics/regional-station-keeping/)
- [纬向风（Zonal Wind）](/glossary/observation/zonal-wind/)
- [高度调控（Altitude Regulation）](/glossary/navigation/altitude-regulation/)

## 参考文献

- Betts J T. Practical Methods for Optimal Control and Estimation Using Nonlinear Programming[M]. SIAM, 2023.
- Zhang Y, et al. Trajectory Optimization for High Altitude Airship[J]. AIAA Journal of Aerospace Systems, 2024.
