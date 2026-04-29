---
title: 热力学模型（Thermodynamic Model）
description: 详细解析平流层飞艇热力学模型的建立方法、两节点模型与七节点模型对比及热力耦合分析
keywords: 热力学模型, Thermodynamic Model, 两节点模型, 七节点模型, 热平衡方程, 热力耦合, 太阳辐射, 地球反照
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 热力学模型（Thermodynamic Model）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 热力学模型（Thermodynamic Model）详解 | 术语定义
  description: 详细解析平流层飞艇热力学模型的建立方法、两节点模型与七节点模型对比及热力耦合分析
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 热力学模型（Thermodynamic Model）详解 | 术语定义
  description: 详细解析平流层飞艇热力学模型的建立方法、两节点模型与七节点模型对比及热力耦合分析
  image: /logo.png
permalink: /glossary/dynamics/thermodynamic-model/
---

# 热力学模型（Thermodynamic Model）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

热力学模型用于描述平流层飞艇囊体内氦气温度、热力学状态随外部环境（太阳辐射、地球反照、红外辐射、对流换热等）和内部状态（氦气充放、载荷发热）的变化规律，是预测浮力变化和进行热致控制的基础。

## 能量平衡方程

### 总体形式

$$Q_{net} = Q_{solar} + Q_{albedo} + Q_{IR,earth} - Q_{IR,sky} - Q_{conv} - Q_{cond}$$

### 各分量表达式

| 热量项 | 表达式 | 方向 |
|:---|:---|:---|
| 太阳辐射 | $Q_{solar} = \alpha_{skin} I_{sun} A_{proj}$ | 吸收 |
| 地球反照 | $Q_{albedo} = \alpha_{skin} \rho_{albedo} I_{sun} A_{proj}$ | 吸收 |
| 地球红外 | $Q_{IR,earth} = \varepsilon_{skin} \sigma T_{earth}^4 A_{proj}$ | 吸收 |
| 天空红外 | $Q_{IR,sky} = \varepsilon_{skin} \sigma T_{sky}^4 A_{proj}$ | 辐射 |
| 对流换热 | $Q_{conv} = h_{conv} (T_{skin} - T_{air}) A_{surf}$ | 损失 |
| 热传导 | $Q_{cond} = k_{cond} (T_{in} - T_{out}) / \delta$ | 内部 |

## 两节点模型

### 结构假设

将飞艇简化为两个节点：

| 节点 | 描述 | 热容 |
|:---|:---|:---|
| 节点1（蒙皮） | 外表面薄层 | $C_{skin}$ |
| 节点2（氦气） | 内部氦气 | $C_{He}$ |

### 数学描述

$$\begin{aligned}
C_{skin}\dot{T}_{skin} &= Q_{ext} - h_{int}(T_{skin} - T_{He}) - h_{ext}(T_{skin} - T_{air}) \\
C_{He}\dot{T}_{He} &= h_{int}(T_{skin} - T_{He}) + Q_{int}
\end{aligned}$$

### 适用范围

- 设计初期的快速估算
- 稳态分析
- 控制律设计的简化模型

## 七节点模型

### 结构假设

将飞艇分为七个节点进行精细建模：

| 节点 | 描述 |
|:---|:---|
| 1 | 迎风蒙皮 |
| 2 | 背风蒙皮 |
| 3 | 顶部蒙皮 |
| 4 | 底部蒙皮 |
| 5 | 氦气主体 |
| 6 | 副气囊 |
| 7 | 结构骨架 |

### 网格划分

$$C_i \frac{dT_i}{dt} = \sum_{j} Q_{i,j}^{cond} + Q_i^{ext} + Q_i^{int}$$

### 适用场景

- 详细设计阶段的性能预测
- 瞬态热分析
- 局部热点的识别

## 热力耦合

### 耦合变量

平流层飞艇的热力学与飞行动力学通过以下变量耦合：

| 耦合变量 | 热→动力 | 动力→热 |
|:---|:---|:---|
| 氦气密度 $\rho_{He}$ | 影响浮力 | 随高度变化 |
| 体积 $V_{He}$ | 热膨胀 | 形变 |
| 温度 $T_{He}$ | 太阳加热 | 压缩做功 |

### 耦合方程

浮力计算：

$$B = (\rho_{air}(T_{air}) - \rho_{He}(T_{He})) V_{He} g$$

状态方程：

$$\rho_{He} = \frac{p_{He} M_{He}}{RT_{He}}$$

## 相关概念

## 参考文献

- da Silva M G, et al. Thermal Modeling of High Altitude Airships[J]. Journal of Aircraft, 2024.
- 王海峰, 陈伟. 平流层飞艇热力学建模与仿真[J]. 航空学报, 2025.