---
title: 粒子群优化（PSO）
description: 详细解析粒子群优化的基本原理、算法流程、参数设置及其在平流层飞艇航迹规划中的应用
keywords: 粒子群优化, Particle Swarm Optimization, PSO, 群体智能, 优化算法, 全局优化, 航迹规划
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 粒子群优化（Particle Swarm Optimization）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 粒子群优化（Particle Swarm Optimization）详解 | 术语定义
  description: 详细解析粒子群优化的基本原理、算法流程、参数设置及其在平流层飞艇航迹规划中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 粒子群优化（Particle Swarm Optimization）详解 | 术语定义
  description: 详细解析粒子群优化的基本原理、算法流程、参数设置及其在平流层飞艇航迹规划中的应用
  image: /logo.png
permalink: /glossary/dynamics/particle-swarm-optimization/
---

# 粒子群优化（PSO）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

粒子群优化（Particle Swarm Optimization, PSO）是一种基于群体智能的元启发式优化算法，通过模拟鸟群觅食行为利用个体经验和群体协作寻找多维空间中的最优解。PSO 算法简单、收敛快、参数少，广泛应用于连续空间优化问题。

## 算法起源

1995 年 Kennedy 和 Eberhart 基于社会认知模型提出：

| 来源 | 对应 |
|:---|:---|
| 鸟群觅食 | 优化搜索 |
| 个体经验 | 个体最优 pbest |
| 群体协作 | 全局最优 gbest |

## 基本原理

### 粒子表示

每个粒子代表问题的一个候选解：

$$\mathbf{x}_i = (x_{i1}, x_{i2}, ..., x_{iD})$$

其中 $D$ 为维度。

### 速度更新

$$\mathbf{v}_i^{n+1} = w \mathbf{v}_i^n + c_1 r_1 (\mathbf{pbest}_i - \mathbf{x}_i^n) + c_2 r_2 (\mathbf{gbest} - \mathbf{x}_i^n)$$

### 位置更新

$$\mathbf{x}_i^{n+1} = \mathbf{x}_i^n + \mathbf{v}_i^{n+1}$$

## 参数说明

| 参数 | 含义 | 典型值 |
|:---|:---|:---|
| $w$ | 惯性权重 | 0.4-0.9 |
| $c_1$ | 个体学习因子 | 2.0 |
| $c_2$ | 社会学习因子 | 2.0 |
| $r_1, r_2$ | [0,1] 随机数 | - |
| $v_{max}$ | 最大速度 | $0.1 \times x_{max}$ |

### 惯性权重策略

| 策略 | 公式 | 特点 |
|:---|:---|:---|
| 固定 | $w = const$ | 简单 |
| 线性递减 | $w = w_{max} - (w_{max} - w_{min}) \times \frac{n}{n_{max}}$ | 平衡探索 |
| 自适应 | $w = f(w, fit)$ | 动态调整 |

## 算法流程

```
初始化粒子群位置和速度
      ↓
计算各粒子适应度值
      ↓
更新个体最优 pbest_i
      ↓
更新全局最优 gbest
      ↓
更新粒子速度和位置
      ↓
检查终止条件？
    ↓     ↓
   是     否
  输出    返回
  结果
```

## 在平流层飞艇中的应用

### 航迹优化

| 优化变量 | 维度 | 范围 |
|:---|:---|:---|
| 航向角序列 | $N \times 1$ | $[0, 2\pi)$ |
| 高度剖面 | $N \times 1$ | $[h_{min}, h_{max}]$ |
| 时间分配 | $N \times 1$ | $[0, T_{max}]$ |

### 目标函数

$$\min J = \int_0^T P_{prop}(\mathbf{x}, t) dt + \lambda_1 |h_{error}| + \lambda_2 |d_{station} - R_{target}|$$

### 约束处理

| 约束 | 处理方法 |
|:---|:---|
| 驻留区域 | 罚函数法 |
| 高度限制 | 边界约束 |
| 推力限制 | 饱和函数 |

## 改进算法

| 算法 | 改进点 |
|:---|:---|
| 线性递减权重 PSO | 平衡全局/局部搜索 |
| 压缩因子 PSO | 保证收敛 |
| 混沌 PSO | 跳出局部最优 |
| 混合 PSO-GA | 结合遗传算法优点 |

## 相关概念

- [航迹规划（Trajectory Planning）](/glossary/navigation/trajectory-planning/)
- [变分模态分解（VMD）](/glossary/dynamics/variational-mode-decomposition/)
- [深度强化学习（Deep Reinforcement Learning）](/glossary/dynamics/deep-reinforcement-learning/)

## 参考文献

- Kennedy J, Eberhart R. Particle Swarm Optimization[C]. IEEE International Conference on Neural Networks, 1995.
- Zhang Y, et al. PSO-based Trajectory Optimization for Stratospheric Airship[J]. AIAA Journal of Aerospace Systems, 2025.