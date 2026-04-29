---
title: 改进的基准轨迹靶点法（Improved Baseline Control-Point Method）
description: 详细解析改进的基准轨迹靶点法的原理、与传统方法的区别、在轨道保持中的应用
keywords: 基准轨迹靶点法, 轨道保持, 改进基准轨迹, 控制策略, 平动点, 拟周期轨道, 弱稳定轨道
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 改进的基准轨迹靶点法
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 改进的基准轨迹靶点法详解 | 平动点轨道保持控制
  description: 详细解析改进的基准轨迹靶点法的原理、与传统方法的区别、在轨道保持中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 改进的基准轨迹靶点法详解 | 平动点轨道保持控制
  description: 详细解析改进的基准轨迹靶点法的原理、与传统方法的区别、在轨道保持中的应用
  image: /logo.png
permalink: /glossary/dynamics/improved-baseline-control-point/
---

# 改进的基准轨迹靶点法（Improved Baseline Control-Point Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文参考：钱霙婧(2014)《地月空间拟周期轨道上航天器自主导航与轨道保持研究》
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

改进的基准轨迹靶点法（Improved Baseline Control-Point Method）是针对地月平动点弱稳定拟周期轨道提出的一种轨道保持控制策略。该方法在传统基准轨迹靶点法的基础上，引入了时钟信息修正和导航约束，能够在存在初始入轨偏差、导航误差和执行机构误差的条件下实现有效的轨道保持。

传统的基准轨迹靶点法假设标称轨迹精确已知且无误差，适用于强稳定轨道。然而，对于地月平动点附近的弱稳定拟周期轨道，初始入轨偏差会导致轨道快速发散，传统方法无法保证控制效果。改进的基准轨迹靶点法通过以下改进解决了这一问题：

1. 考虑导航误差的靶点计算
2. 引入时钟信息修正
3. 约束来自自主导航系统的需求

## 轨道保持约束条件

改进的基准轨迹靶点法需要综合考虑以下约束：

### 动力学环境约束

1. **轨道发散特性**：弱稳定轨道对初值敏感，小偏差会导致大范围轨道偏离
2. **脉冲时机限制**：脉冲施加时机需在轨道可控范围内
3. **燃料限制**：总脉冲预算有限，需优化脉冲大小和方向

### 控制执行机构约束

1. **推力方向限制**：实际推力方向受姿态控制系统约束
2. **推力大小限制**：最小脉冲宽度和最大推力约束
3. **执行误差**：实际 $\Delta v$ 与标称值的偏差

### 自主导航约束

1. **收敛弧长约束**：导航系统需要在半个轨道周期内提供收敛估计
2. **精度约束**：导航精度直接影响控制效果
3. **更新频率约束**：导航更新频率需与轨道保持脉冲间隔匹配

## 算法原理

### 基准轨迹靶点法基本原理

基准轨迹靶点法的核心思想是：在轨道上选择若干基准点（Control Point），将轨道保持问题转化为使航天器在基准点处满足预定状态的问题。

设标称基准轨迹为 $\mathcal{T}^*$，实际轨道为 $\mathcal{T}$。在第 $i$ 个基准点处：

**传统方法：**
$$\min \|\mathbf{x}(t_i) - \mathbf{x}^*(t_i)\|$$

**改进方法：**
$$\min \|\mathbf{x}(t_i) - \mathbf{x}^*(t_i)\| + \|\mathbf{e}_{\text{nav}}\| + \|\mathbf{e}_{\text{act}}\|$$

其中 $\mathbf{e}_{\text{nav}}$ 为导航误差估计，$\mathbf{e}_{\text{act}}$ 为执行机构误差估计。

### 时钟信息修正

改进方法的一个关键创新是引入时钟信息修正。由于弱稳定轨道对时间敏感，轨道保持控制器需要精确的时间同步：

1. **时钟偏差估计**：利用导航滤波器估计时钟偏差 $\delta t$
2. **时间修正量计算**：计算时钟偏差对轨道的影响
3. **修正后脉冲计算**：在脉冲计算中补偿时钟偏差

修正后的脉冲计算公式：

$$\Delta \mathbf{v}_{\text{corr}} = \Delta \mathbf{v}_{\text{nom}} + \frac{\partial \mathbf{v}}{\partial t}\bigg|_{t_i} \cdot \delta t$$

### 导航约束耦合

改进方法需要与自主导航系统协同设计：

1. **靶点选择**：选择导航可观测性较好的位置作为基准点
2. **脉冲时机**：确保脉冲施加在导航更新之后
3. **精度要求**：根据导航精度设定控制精度阈值

## 算法流程

### 初始化

1. 选择基准轨迹上的 $N$ 个基准点
2. 确定各基准点处的目标状态 $\mathbf{x}^*_i$
3. 设定控制精度阈值 $\varepsilon$

### 轨道传播

1. 从当前状态出发，沿轨道积分至下一个基准点
2. 计算实际状态与目标状态的偏差 $\Delta \mathbf{x}_i$
3. 估计导航误差和执行机构误差

### 脉冲计算

1. 利用状态转移矩阵计算脉冲敏感性
2. 考虑时钟修正量
3. 计算使状态回归的最小脉冲

### 执行与更新

1. 执行脉冲机动
2. 更新轨道状态
3. 返回步骤 2 继续传播

## 仿真验证

钱霙婧(2014)通过闭环仿真验证了改进方法的有效性：

### 仿真场景

- 目标轨道：地月 L2 点拟周期 Halo 轨道
- 初始偏差：位置 10 km，速度 1 m/s
- 导航误差：位置 100 m（1σ）
- 执行机构误差：速度增量 1%（1σ）

### 仿真结果

| 指标 | 传统方法 | 改进方法 |
|:---|:---|:---|
| 轨道偏差控制 | 无法收敛 | < 1 km |
| 脉冲消耗 | 发散 | ~10 m/s/年 |
| 控制周期 | 不适用 | ~7 天 |

结果表明，改进的基准轨迹靶点法能够在复杂误差条件下实现有效的轨道保持，控制精度满足任务需求。

## 与其他方法的比较

| 方法 | 适用场景 | 优点 | 缺点 |
|:---|:---|:---|:---|
| X轴速度限制脉冲法 | Halo轨道 | 简单直观 | 仅适用特定轨道 |
| Floquet模态法 | 周期轨道 | 理论完善 | 计算复杂 |
| 传统靶点法 | 强稳定轨道 | 成熟稳定 | 不适用于弱稳定轨道 |
| **改进基准轨迹靶点法** | **弱稳定拟周期轨道** | **考虑多源误差** | **计算量较大** |

## 相关概念

- [轨道保持（Orbit Keeping）](/glossary/orbits/orbit-keeping/)
- [拟周期轨道（Quasi-Periodic Orbit）](/glossary/orbits/quasi-periodic-orbit/)
- [平动点（Libration Point）](/glossary/dynamics/libration-point/)
- [自主导航（Autonomous Navigation）](/glossary/navigation/autonomous-navigation/)
- [Floquet模态法（Floquet Mode Method）](/glossary/other/floquet-mode/)
- [状态转移矩阵（STM）](/glossary/dynamics/state-transition-matrix/)

## 参考文献

- 钱霙婧. 地月空间拟周期轨道上航天器自主导航与轨道保持研究[D]. 哈尔滨工业大学, 2014.
- Folta D, Quinn D, Quinn T. Stationkeeping of L2 libration point orbits with ESM manifests[C]. AIAA/AAS Astrodynamics Specialist Conference, 2014.