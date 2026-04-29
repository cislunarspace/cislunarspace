---
title: 高度调控（Altitude Regulation）
description: 详细解析平流层飞艇高度调控的定义、控制目标、方法分类及典型控制律设计
keywords: 高度调控, Altitude Regulation, 高度控制, 高度控制, 浮力调节, 驻空高度, 配平
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 高度调控（Altitude Regulation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 高度调控（Altitude Regulation）详解 | 术语定义
  description: 详细解析平流层飞艇高度调控的定义、控制目标、方法分类及典型控制律设计
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 高度调控（Altitude Regulation）详解 | 术语定义
  description: 详细解析平流层飞艇高度调控的定义、控制目标、方法分类及典型控制律设计
  image: /logo.png
permalink: /glossary/navigation/altitude-regulation/
---

# 高度调控（Altitude Regulation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

高度调控是平流层飞艇控制系统的核心任务之一，通过调节飞艇的净浮力、姿态或推进力，实现对飞行高度的主动维持和调节。由于平流层飞艇是欠驱动系统（推力有限），高度控制需要综合运用浮力调节、气动控制和动力推进等多种手段。

## 控制目标

| 目标 | 描述 | 典型精度 |
|:---|:---|:---|
| 高度维持 | 保持标称高度 | ±100 m |
| 高度跟踪 | 跟踪期望高度剖面 | ±50 m |
| 高度调度 | 跨高度层转移 | 快速平滑 |

## 控制方法

### 被动高度控制

| 方法 | 原理 | 适用场景 |
|:---|:---|:---|
| 静浮力配平 | 浮力=重力，无净垂直力 | 稳态驻留 |
| 高度囊设计 | 副气囊吸收体积变化 | 减少高度波动 |

### 主动高度控制

| 方法 | 原理 | 能耗 |
|:---|:---|:---|
| 副气囊调节 | 充放氦气改变浮力 | 中等 |
| 配重调节 | 抛放压舱物 | 低 |
| 动力爬升/下滑 | 推进器产生垂直分力 | 高 |
| 热调节 | 改变氦气温度 | 高 |

## 控制律设计

### 串级 PID

外环（高度）：

$$u_{outer} = K_P^h (h_{ref} - h) + K_I^h \int(h_{ref} - h) dt$$

内环（垂直速度）：

$$u_{inner} = K_P^{\dot{h}} (\dot{h}_{ref} - \dot{h})$$

### 非线性控制

基于热力耦合模型：

$$m\ddot{h} = B(T_{He}) - mg - D_z(\dot{h})$$

采用反步法设计：

1. 定义 $z_1 = h - h_d$
2. 虚拟控制 $\alpha_1 = \dot{h}_d - c_1 z_1$
3. 最终控制 $u$ 设计

## 高度限制

### 硬限制

| 限制 | 值 | 原因 |
|:---|:---|:---|
| 最大高度 | 50 km | 结构强度 |
| 最小高度 | 15 km | 任务需求/军事 |

### 软限制

| 限制 | 原因 |
|:---|:---|
| QZWL 边界 | 风场过渡 |
| 能源约束 | 推进功率限制 |
| 热极限 | 蒙皮/设备温度 |

## 相关概念

- [区域驻留控制（Regional Station-keeping Control）](/glossary/dynamics/regional-station-keeping/)
- [浮重失衡（Buoyancy-weight Imbalance）](/glossary/dynamics/buoyancy-weight-imbalance/)
- [静升力（Static Lift）](/glossary/dynamics/static-lift/)

## 参考文献

- Wang H, et al. Altitude Control for Stratospheric Airship Based on Thermal-Flight Coupling[J]. AIAA Journal of Guidance, Control, and Dynamics, 2025.
- Li J, Chen W. Adaptive Altitude Control of High Altitude Airships[J]. IEEE Transactions on Aerospace Systems, 2024.