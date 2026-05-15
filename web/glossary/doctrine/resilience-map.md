---
title: 韧性地图（Resilience Map）
description: 详细解析韧性地图的定义、生成方法及其在地月空间SSA架构韧性评估中的应用
wechatShare:
  title: 韧性地图（Resilience Map）
  desc: 详细解析韧性地图的定义、生成方法及其在地月空间SSA架构韧性评估中的应用
  image: /logo.png
keywords: 韧性地图, Resilience Map, 地月空间, 态势感知, 架构韧性, 低推力, 可达集, 覆盖分析
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: 韧性地图（Resilience Map）
  description: 详细解析韧性地图的定义、生成方法及其在地月空间SSA架构韧性评估中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 韧性地图（Resilience Map）
  description: 详细解析韧性地图的定义、生成方法及其在地月空间SSA架构韧性评估中的应用
  image: /logo.png
permalink: /glossary/doctrine/resilience-map/
---

# 韧性地图（Resilience Map）

## 定义

韧性地图（Resilience Map）是 Klonowski（2025）提出的 SSA 架构评估可视化工具，以热图形式展示给定 SSA 架构在地月空间中随时间对任意初始位置低推力航天器的检测能力。韧性地图能够捕捉 SSA 架构覆盖的动态演化特性，是传统静态体积覆盖率指标的重要补充。

## 生成方法

### 步骤1：预计算可达集

在地月空间的三维网格点上预计算低推力航天器的可达集：
- 网格分辨率：覆盖地月空间关键区域
- 时间范围：评估周期（如 7 天）
- 控制约束：低推力上限

### 步骤2：覆盖叠加

对每个网格点和每个时间步：
- 检查该点的可达集是否与架构检测区域相交
- 统计可达集被检测的比例

### 步骤3：热图生成

将覆盖分析结果可视化：
- 颜色编码：红色表示高覆盖能力，蓝色表示低覆盖能力
- 时间维度：动画展示覆盖随时间的演变
- 空间维度：二维切片或三维体渲染

## 与传统体积覆盖率对比

| 指标 | 描述 | 局限性 |
|:---|:---|:---|
| 体积覆盖率 | 静态点在架构检测区域的比例 | 无法反映动态目标检测能力 |
| 韧性地图 | 可达集与检测区域的时间匹配度 | 计算成本较高 |

## 核心要素

### 数学定义
韧性地图 $\mathcal{RM}(\mathbf{x}_0, t)$ 定义为初始位置 $\mathbf{x}_0$ 的低推力可达集 $\mathcal{R}^t(\mathbf{x}_0)$ 在时刻 $t$ 被架构检测的比例：

$$\mathcal{RM}(\mathbf{x}_0, t) = \frac{\text{Vol}(\mathcal{R}^t(\mathbf{x}_0) \cap \mathcal{D}(t))}{\text{Vol}(\mathcal{R}^t(\mathbf{x}_0))}$$

其中 $\mathcal{D}(t)$ 为时刻 $t$ 的检测区域。

### 关键性质
韧性地图能够：
- 识别架构覆盖的时间盲区
- 量化架构对动态目标的检测能力
- 为架构优化提供局部改进方向

### 应用场景
韧性地图适用于 SSA 架构的性能评估、资源分配优化、任务规划等场景。

## 相关概念

- [可达集（Reachable Set）](/glossary/dynamics/reachable-set/)
- [地月空间态势感知架构设计](/glossary/doctrine/cislunar-space-situational-awareness/)
- [韧性架构（Resilient Architecture）](/glossary/doctrine/resilient-architecture/)

## 参考文献

- Klonowski M, Holzinger M J. Resilience of Architectures for Cislunar Space Situational Awareness Using Low-Thrust Reachable Sets[J]. The Journal of Spacecraft and Rockets, 2025.
- Klonowski M. Cislunar Space Situational Awareness Architecture Design and Analysis[D]. University of Colorado Boulder, 2025.