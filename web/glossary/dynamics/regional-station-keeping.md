---
title: 区域驻留控制（Regional Station-keeping Control）
description: 详细解析区域驻留控制的定义、控制目标、核心挑战及其在平流层飞艇中的研究现状
keywords: 区域驻留控制, Regional Station-keeping, 长航时, 定点精度, 驻留半径, 滑模控制, 深度强化学习
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 区域驻留控制（Regional Station-keeping Control）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 区域驻留控制（Regional Station-keeping Control）详解 | 术语定义
  description: 详细解析区域驻留控制的定义、控制目标、核心挑战及其在平流层飞艇中的研究现状
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 区域站留控制（Regional Station-keeping Control）详解 | 术语定义
  description: 详细解析区域驻留控制的定义、控制目标、核心挑战及其在平流层飞艇中的研究现状
  image: /logo.png
permalink: /glossary/dynamics/regional-station-keeping/
---

# 区域驻留控制（Regional Station-keeping Control）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

区域驻留控制是指飞行器在指定空域内维持相对稳定位置的主动控制技术。对于平流层飞艇，区域驻留控制的目标是使飞艇在预设的**驻留半径**（Station-keeping Radius）内围绕指定中心点飞行，同时将**驻留高度**维持在误差允许范围内。

## 控制目标

| 指标 | 描述 | 典型要求 |
|:---|:---|:---|
| 水平位置精度 | 相对于目标中心的距离 | < 1-5 km |
| 高度精度 | 相对于标称高度 | < 100 m |
| 航时 | 单次任务持续时间 | 14-90 天 |
| 能耗效率 | 单位时间能耗 | 最小化 |

## 核心挑战

### 1. 风场扰动

平流层风速可达 30-100 m/s，风向随高度和季节变化。主要策略包括：

- **动力抗风**：推进器主动对抗风扰
- **高度调度**：利用准零风层风速较小的特点
- **被动适应**：设计低阻力外形减少风致漂移

### 2. 浮重失衡

昼夜温差导致氦气热胀冷缩，引起浮力变化：

$$F_b = \rho_{air} V_{He} g - m_{total} g$$

当浮力与重力失衡时，飞艇会上浮或下沉，需要通过：

- 副气囊充放气调节
- 配重调节
- 高度机动调节

### 3. 能源约束

推进和热控系统竞争有限的太阳能，需要：

- **滚动优化**：滚动时域树搜索算法
- **预测控制**：基于风场预报的前馈控制
- **低能耗策略**：利用热力气流减少主动推进

## 控制方法

### 经典控制

| 方法 | 优点 | 缺点 |
|:---|:---|:---|
| PID 控制 | 简单易实现 | 难以处理非线性 |
| 滑模控制 | 鲁棒性强 | 抖振问题 |
| 反步滑模 | 收敛快 | 计算复杂 |

### 智能控制

| 方法 | 优点 | 缺点 |
|:---|:---|:---|
| 模糊反步控制 | 适合非线性系统 | 依赖专家经验 |
| 深度强化学习 | 自学习能力强 | 训练数据需求大 |
| 高斯过程回归 | 不确定性建模 | 实时性受限 |

## 研究前沿

1. **深度强化学习（DRL）**：通过与环境交互学习最优驻留策略
2. **数据驱动控制**：利用历史风场数据训练预测模型
3. **多源异构信息融合**：融合气象预报、GPS、视觉等感知信息
4. **热力耦合控制**：联合优化动力学与热力学状态

## 相关概念

- [平流层飞艇（Stratospheric Airship）](/glossary/fundamentals/stratospheric-airship/)
- [滑模控制（Sliding Mode Control）](/glossary/dynamics/sliding-mode-control/)
- [深度强化学习（Deep Reinforcement Learning）](/glossary/dynamics/deep-reinforcement-learning/)

## 参考文献

- 陈伟, 王海峰. 平流层飞艇区域驻留控制技术[J]. 航空学报, 2025.
- Zhang Y, et al. Deep Reinforcement Learning for Stratospheric Airship Station-keeping[J]. AIAA Journal, 2024.
- Wang H, et al. Fuzzy Backstepping Control for High Altitude Airship[J]. IEEE Transactions on Aerospace Systems, 2024.