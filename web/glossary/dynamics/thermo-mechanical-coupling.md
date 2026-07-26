---
title: 热力耦合模型（Thermo-mechanical Coupling Model）
description: 详细解析平流层飞艇热力耦合建模的基本原理、耦合变量、交叉耦合机制及其对区域驻留控制的影响
keywords: 热力耦合, Thermo-mechanical Coupling, 飞行力学, 热力学, 耦合变量, 交叉耦合, 浮力变化
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 热力耦合模型（Thermo-mechanical Coupling Model）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 热力耦合模型（Thermo-mechanical Coupling Model）详解 | 术语定义
  description: 详细解析平流层飞艇热力耦合建模的基本原理、耦合变量、交叉耦合机制及其对区域驻留控制的影响
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 热力耦合模型（Thermo-mechanical Coupling Model）详解 | 术语定义
  description: 详细解析平流层飞艇热力耦合建模的基本原理、耦合变量、交叉耦合机制及其对区域驻留控制的影响
  image: /logo.png
permalink: /glossary/dynamics/thermo-mechanical-coupling/
---

# 热力耦合模型（Thermo-mechanical Coupling Model）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

热力耦合模型是描述平流层飞艇热力学状态（温度、压力、密度）与飞行力学状态（位置、速度、姿态）相互影响、相互制约的数学模型。与传统飞机不同，平流层飞艇的热状态直接决定浮力变化，从而影响飞行性能。

## 耦合机理

### 热→力（Thermal to Mechanical）

| 热变量 | 力效应 | 物理机制 |
| :--- | :--- | :--- |
| 氦气温度 $T_{He}$ | 浮力变化 | $\rho_{He} = p/(RT_{He})$ |
| 蒙皮温度 $T_{skin}$ | 气动加热 | 影响边界层 |
| 压力 $p_{He}$ | 囊体膨胀 | $V = nRT/p$ |

### 力→热（Mechanical to Thermal）

| 力变量 | 热效应 | 物理机制 |
| :--- | :--- | :--- |
| 高度 $h$ | 大气密度 | $\rho_{air}(h)$ 影响对流 |
| 速度 $v$ | 气动加热 | $Q_{dyn} = \frac{1}{2}\rho v^3$ |
| 姿态 $\theta$ | 日照角变化 | 影响太阳直射量 |

## 核心耦合变量

### 1. 氦气密度

$$\rho_{He} = \frac{p_{He} M_{He}}{RT_{He}}$$

密度随温度变化：

$$\frac{\partial \rho_{He}}{\partial T_{He}} = -\frac{p_{He} M_{He}}{RT_{He}^2}$$

### 2. 浮力

静浮力：

$$B = (\rho_{air} - \rho_{He}) V_{He} g$$

浮力变化率：

$$\dot{B} = -\frac{\partial \rho_{He}}{\partial T_{He}} \dot{T}_{He} \cdot V_{He} g$$

### 3. 内外压差

囊体结构约束：

$$\Delta p = p_{He} - p_{ext}$$

体积约束：

$$V_{He} = V_{envelope} - V_{ballonet}$$

## 耦合方程组

### 热力学模块

$$\begin{bmatrix} C_{skin} & 0 \\ 0 & C_{He} \end{bmatrix} \begin{bmatrix} \dot{T}_{skin} \\ \dot{T}_{He} \end{bmatrix} = \begin{bmatrix} Q_{ext} \\ Q_{int} \end{bmatrix} - \mathbf{H} \begin{bmatrix} T_{skin} \\ T_{He} \end{bmatrix}$$

### 动力学模块

$$m\begin{bmatrix} \dot{u} \\ \dot{v} \\ \dot{w} \end{bmatrix} = \begin{bmatrix} X \\ Y \\ Z \end{bmatrix} + \begin{bmatrix} 0 \\ 0 \\ B - mg \end{bmatrix}$$

### 耦合项

$$\frac{\partial B}{\partial T_{He}} = -\frac{p_{He} M_{He}}{RT_{He}^2} V_{He} g$$

## 交叉耦合影响

### 昼夜循环

| 时刻 | $T_{He}$ | $B$ | 飞行状态 |
| :--- | :--- | :--- | :--- |
| 正午 | 高 | 低 | 上浮趋势 |
| 午夜 | 低 | 高 | 下沉趋势 |

### 控制策略

- **主动热管理**：通过副气囊调节氦气量补偿浮力变化
- **高度调度**：利用高度变化调节大气密度
- **预热/预冷**：地面阶段调节初始温度

## 相关概念

- [热力学模型（Thermodynamic Model）](/glossary/dynamics/thermodynamic-model/)
- [区域驻留控制（Regional Station-keeping Control）](/glossary/dynamics/regional-station-keeping/)

## 参考文献

- Wang H, et al. Thermo-mechanical Coupling Analysis for Stratospheric Airship[J]. AIAA Journal, 2025.
- Li J, Chen W. Coupled Thermal-Flight Dynamics of High Altitude Airships[J]. IEEE Transactions on Aerospace Systems, 2024.
