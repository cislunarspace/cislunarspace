---
title: 可观测性（Observability）
description: 详细解析可观测性的定义、线性与非线性系统分析方法、在自主导航系统设计中的应用
keywords: 可观测性, Observability, 状态估计, 导航系统, 奇异值分解, 非线性可观测性, 导航滤波
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 可观测性（Observability）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 可观测性详解 | 导航系统设计的核心概念
  description: 详细解析可观测性的定义、线性与非线性系统分析方法、在自主导航系统设计中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 可观测性详解 | 导航系统设计的核心概念
  description: 详细解析可观测性的定义、线性与非线性系统分析方法、在自主导航系统设计中的应用
  image: /logo.png
permalink: /glossary/navigation/observability/
---

# 可观测性（Observability）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文参考：钱霙婧(2014)《地月空间拟周期轨道上航天器自主导航与轨道保持研究》
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

可观测性（Observability）是系统论和控制理论中的核心概念，描述了系统内部状态可通过外部输出（观测）信息被确定的程度。在导航系统设计中，可观测性分析用于判断：给定一组传感器配置和观测信息，系统状态能否被唯一且准确地估计出来。

对于自主导航系统，可观测性分析是导航方案设计的关键步骤。不满足可观测性要求的导航系统将无法提供收敛的状态估计，即使采用最优的滤波算法也无济于事。

## 线性系统的可观测性

### 定义

对于线性时不变系统：

$$\dot{\mathbf{x}} = \mathbf{A}\mathbf{x} + \mathbf{B}\mathbf{u}$$
$$\mathbf{y} = \mathbf{C}\mathbf{x} + \mathbf{D}\mathbf{u}$$

其可观测性矩阵（Observability Matrix）为：

$$\mathcal{O} = \begin{bmatrix} \mathbf{C} \\ \mathbf{C}\mathbf{A} \\ \mathbf{C}\mathbf{A}^2 \\ \vdots \\ \mathbf{C}\mathbf{A}^{n-1} \end{bmatrix}$$

其中 $n$ 为状态维度。系统完全可观测的充要条件是 $\text{rank}(\mathcal{O}) = n$。

### 可观测性判据

| 判据 | 条件 | 适用场景 |
|:---|:---|:---|
| 秩判据 | $\text{rank}(\mathcal{O}) = n$ | 一般线性系统 |
| GRAM 判据 | $\mathcal{O}^T\mathcal{O}$ 正定 | 连续系统 |
| PBH 判据 | $\text{rank}[s\mathbf{I}-\mathbf{A}, \mathbf{C}] = n, \forall s$ | 线性系统 |

## 非线性系统的可观测性

### 局部弱可观测性

对于非线性系统：

$$\dot{\mathbf{x}} = \mathbf{f}(\mathbf{x})$$
$$\mathbf{y} = h(\mathbf{x})$$

可采用局部弱可观测性（Locally Weakly Observable）判据。系统在某邻域内局部弱可观测当且仅当：

$$\text{rank}\left(\frac{\partial}{\partial \mathbf{x}} \mathcal{L}^k h(\mathbf{x})\right) = n, \forall k \geq 0, \forall \mathbf{x}$$

其中 $\mathcal{L}^k h$ 为 $h$ 的 $k$ 阶李导数。

### 可观测度

在实际工程中，即使系统满足可观测性判据，状态估计的精度也可能因信息量不足而较差。可观测度（Degree of Observability）用于量化这种"可观测程度"：

$$\text{obs} = \frac{\sigma_{\min}}{\sigma_{\max}}$$

其中 $\sigma_{\min}$ 和 $\sigma_{\max}$ 分别为可观测性矩阵的最小和最大奇异值。可观测度越接近 1，表示各状态分量越容易被同等程度地估计；可观测度越接近 0，表示某些状态分量难以被估计。

## 在导航系统设计中的应用

### 敏感器配置优化

可观测性分析用于优化敏感器配置。钱霙婧(2014)在研究日地月信息自主导航时，通过可观测性分析比较了三种敏感器配置方案：

1. **方案一**：太阳敏感器 + 地球敏感器 + 月球敏感器
2. **方案二**：星敏感器 + 太阳/地球敏感器组合
3. **方案三**：光学相机 + 图像处理

分析结果表明，不同配置方案的可观测度存在显著差异，需要根据任务需求选择最优配置。

### 采样策略优化

可观测性与采样弧长密切相关。较长的连续观测弧段通常提供更好的可观测性，但会增加计算负担和响应延迟。实际设计中需要在可观测性与系统实时性之间取得平衡。

### 导航滤波器设计

可观测性分析结果直接影响滤波器设计：

- 对于可观测性较差的系统状态分量，需要增加先验信息或约束
- 对于不可观测的状态，需要采用降阶滤波器或固定值处理

## 可观测性分析的局限性

1. **局部性质**：局部弱可观测性分析仅保证局部唯一性，全局可观测性难以判断
2. **模型依赖**：分析结果依赖于系统动力学模型的准确性
3. **数值稳定性**：高维系统的可观测性矩阵计算可能存在数值病态问题
4. **时变系统**：时变系统的可观测性分析更为复杂

## 相关概念

- [自主导航（Autonomous Navigation）](/glossary/navigation/autonomous-navigation/)
- [日地月信息自主导航（SEM Navigation）](/glossary/navigation/sem-autonomous-navigation/)
- [扩展卡尔曼滤波（EKF）](/glossary/navigation/extended-kalman-filter/)
- [状态转移矩阵（STM）](/glossary/dynamics/state-transition-matrix/)

## 参考文献

- Hermann R, Krener A J. Nonlinear controllability and observability[J]. IEEE Transactions on Automatic Control, 1977.
- 钱霙婧. 地月空间拟周期轨道上航天器自主导航与轨道保持研究[D]. 哈尔滨工业大学, 2014.