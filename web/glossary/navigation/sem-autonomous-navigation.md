---
title: 日地月信息自主导航（Sun-Earth-Moon Autonomous Navigation）
description: 详细解析基于日地月角位置信息的自主导航方法、原理、敏感器配置及在平动点拟周期轨道探测器中的应用
keywords: 日地月信息导航, SEM导航, 自主导航, 平动点导航, 拟周期轨道, 天文导航, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 日地月信息自主导航（SEM Navigation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 日地月信息自主导航详解 | 平动点探测器导航方法
  description: 详细解析基于日地月角位置信息的自主导航方法、原理、敏感器配置及在平动点拟周期轨道探测器中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 日地月信息自主导航详解 | 平动点探测器导航方法
  description: 详细解析基于日地月角位置信息的自主导航方法、原理、敏感器配置及在平动点拟周期轨道探测器中的应用
  image: /logo.png
permalink: /glossary/navigation/sem-autonomous-navigation/
---

# 日地月信息自主导航（Sun-Earth-Moon Autonomous Navigation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文参考：钱霙婧(2014)《地月空间拟周期轨道上航天器自主导航与轨道保持研究》
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

日地月信息自主导航（Sun-Earth-Moon Autonomous Navigation，简称 SEM 导航）是一种利用太阳、地球、月球相对于航天器的角位置观测信息，通过滤波算法估计航天器轨道状态的自主导航方法。该方法仅需配置太阳敏感器、地球敏感器和月球敏感器，无需依赖地面测控网络即可实现平动点拟周期轨道探测器的高精度轨道确定。

SEM 导航的核心优势在于其自主性强、敏感器配置简单、观测信息稳定可靠，特别适用于地月 L1/L2 平动点附近的拟周期轨道探测器。

## 导航原理

### 观测几何

在地月平动点附近，航天器相对于太阳、地球、月球的观测几何如下：

1. **太阳方位观测**：测量太阳相对于航天器的方位角和俯仰角，提供方向参考
2. **地球方位观测**：测量地球圆盘边缘或地心方向，提供地球位置参考
3. **月球方位观测**：测量月球相对于航天器的角半径或月心方向，提供月球位置参考

通过观测这些天体在航天器惯性参考系中的角度信息，结合已知的太阳、地球、月球星历位置，可以反推航天器在惯性坐标系中的位置和速度。

### 状态估计

设航天器状态向量为 $\mathbf{X} = [\mathbf{r}^T, \mathbf{v}^T]^T$，包含位置 $\mathbf{r}$ 和速度 $\mathbf{v}$。观测方程为：

$$\mathbf{y} = h(\mathbf{X}) + \mathbf{v}_{\text{noise}}$$

其中 $h(\cdot)$ 为非线性观测函数，将航天器状态映射为理论观测值。典型的观测包括：

- 太阳张角（Solar Angular Diameter）
- 地球张角（Earth Angular Diameter）
- 月球张角（Lunar Angular Diameter）
- 太阳-地球角距（Sun-Earth Angle）
- 太阳-月球角距（Sun-Moon Angle）
- 地球-月球角距（Earth-Moon Angle）

### 滤波算法

钱霙婧(2014)采用扩展卡尔曼滤波（EKF）进行状态估计。EKF 通过对非线性观测方程在当前状态估计处线性化，结合动力学模型进行状态传播和观测更新：

1. **状态预测**：利用动力学方程积分预测状态和协方差
2. **线性化**：计算观测矩阵 $\mathbf{H} = \frac{\partial h}{\partial \mathbf{X}}$
3. **状态更新**：利用新观测信息修正状态估计

## 敏感器配置

SEM 导航系统的典型敏感器配置包括三种方案：

### 方案一：太阳敏感器 + 地球敏感器 + 月球敏感器

| 敏感器 | 观测信息 | 精度要求 |
| :--- | :--- | :--- |
| 太阳敏感器 | 太阳方位 | ~0.01° |
| 地球敏感器 | 地球张角或地心方向 | ~0.1% |
| 月球敏感器 | 月球张角或月心方向 | ~0.1% |

### 方案二：星敏感器 + 太阳/地球/月球敏感器组合

利用星敏感器提供高精度的姿态基准，结合天体敏感器观测天体方位。

### 方案三：光学相机 + 图像处理

通过光学相机拍摄太阳、地球、月球的图像，利用图像处理算法提取天体边缘或中心位置。

## 可观测性分析

由于平动点轨道处于动力学混沌系统中，SEM 导航方法的可行性需要通过可观测性分析验证。钱霙婧(2014)基于非线性可观测性理论分析了不同敏感器配置的可观测度。

### 可观测度指标

可观测度（Degree of Observability）衡量系统状态可被观测信息确定的程度。对于线性时变系统，可观测度可通过可观测性矩阵的奇异值分解（SVD）评估：

$$\text{obs} = \frac{\sigma_{\min}}{\sigma_{\max}}$$

其中 $\sigma_{\min}$ 和 $\sigma_{\max}$ 分别为可观测性矩阵的最小和最大奇异值。

### 影响因素

SEM 导航的可观测性受以下因素影响：

1. **观测弧长**：较长的观测弧长通常提供更好的可观测性
2. **观测几何**：太阳、地球、月球的相对位置影响信息量
3. **敏感器精度**：测量噪声会影响状态估计的收敛性
4. **轨道动力学模型**：模型误差会传播到状态估计

## 在平动点拟周期轨道中的应用

钱霙婧(2014)针对地月 L2 点弱稳定拟周期轨道，研究了 SEM 导航方法的可行性。研究表明：

1. **收敛性**：基于日地月信息的自主导航方法能够提供收敛的轨道估计
2. **精度**：导航精度可达百米级，满足轨道保持的需求
3. **约束**：导航收敛弧长需小于轨道保持脉冲间隔

### 仿真验证

仿真研究表明，针对地月 L2 点拟周期 Halo 轨道：

- 采用方案一（太阳+地球+月球敏感器）可在 2-3 个轨道周期内实现状态收敛
- 导航精度受测量噪声和采样弧长显著影响
- 扩展卡尔曼滤波能够有效处理非线性观测方程

## 相关概念

- [自主导航（Autonomous Navigation）](/glossary/navigation/autonomous-navigation/)
- [扩展卡尔曼滤波（EKF）](/glossary/navigation/extended-kalman-filter/)
- [可观测性（Observability）](/glossary/navigation/observability/)
- [平动点（Libration Point）](/glossary/dynamics/libration-point/)
- [拟周期轨道（Quasi-Periodic Orbit）](/glossary/orbits/quasi-periodic-orbit/)
- [轨道保持（Orbit Keeping）](/glossary/orbits/orbit-keeping/)

## 参考文献

- 钱霙婧. 地月空间拟周期轨道上航天器自主导航与轨道保持研究[D]. 哈尔滨工业大学, 2014.
- Hill K, Born G H. Linked autonomous interplanetary satellite orbit navigation [LiAISON](C). AAS/AIAA Astrodynamics Specialist Conference, 2005.
