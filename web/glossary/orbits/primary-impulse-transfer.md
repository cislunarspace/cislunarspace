---
title: 一次冲量轨道转移（Primary Impulse Orbit Transfer）
description: 详细解析一次冲量轨道转移的原理、与霍曼二次转移的对比及其在地月系统中的应用
keywords: 一次冲量, Primary Impulse, 轨道转移, 转移时间, 能量消耗, 地月系统, 平动点
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 一次冲量轨道转移（Primary Impulse Orbit Transfer）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 一次冲量轨道转移详解 | 平动点转移轨道设计
  description: 详细解析一次冲量轨道转移的原理、与霍曼二次转移的对比及其在地月系统中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 一次冲量轨道转移详解 | 平动点转移轨道设计
  description: 详细解析一次冲量轨道转移的原理、与霍曼二次转移的对比及其在地月系统中的应用
  image: /logo.png
permalink: /glossary/orbits/primary-impulse-transfer/
---

# 一次冲量轨道转移

> 本文编辑来源：郭建宇 (2020) "基于双基不变流形法的平动点轨道设计及保持策略研究"
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一次冲量轨道转移（Primary Impulse Orbit Transfer）是一种利用平动点附近不变流形进行轨道转移的方法。该方法只需在转移起点施加一次冲量，航天器便可沿不变流形自然滑入目标轨道。与传统的霍曼二次冲量转移相比，一次冲量转移利用了自然动力学通道，可显著降低能量消耗。

## 核心原理

### 不变流形特性

平动点附近存在稳定流形和不稳定流形，这些流形具有以下特性：

- **稳定流形 $W_s$**：沿该流形运动的航天器无需能量消耗即可自然趋近平动点周期轨道
- **不稳定流形 $W_u$**：沿该流形运动的航天器无需能量消耗即可自然远离周期轨道

### 转移机制

一次冲量轨道转移利用这一特性：

1. 在近天体轨道（如地球轨道）上施加一次冲量
2. 航天器进入连接近天体轨道与平动点周期轨道的不变流形
3. 沿不变流形自然滑行，无需额外推进剂消耗
4. 最终到达目标平动点周期轨道

### 与霍曼二次转移对比

| 特性 | 一次冲量转移 | 霍曼二次冲量转移 |
|:---|:---|:---|
| 冲量次数 | 1次 | 2次 |
| 能量消耗 | 较低（利用不变流形） | 较高 |
| 转移时间 | 较长 | 较短 |
| 轨道精度 | 依赖流形计算精度 | 较高 |

## 地月系统应用

在地月限制性三体模型中，一次冲量轨道转移可实现以下任务：

### 典型转移方案

| 起点 | 目标 | 特点 |
|:---|:---|:---|
| 月球轨道 | L1 平动点 | 转移时间较短 |
| 月球轨道 | L2 平动点 | 利用L2不稳定流形 |
| 地球轨道 | L1 平动点 | 远距离转移 |
| 地球轨道 | L2 平动点 | 需较大冲量 |

### 轨道参数

仿真分析表明，典型一次冲量转移的轨道参数包括：

- **转移时间**：数天至数月（取决于起点和目标）
- **能量消耗**：显著低于传统霍曼转移
- **冲量大小**：通常在数百 m/s 量级

## 核心要素

### 数学定义
一次冲量轨道转移利用平动点附近的不变流形管状结构，通过在近天体轨道施加一次冲量，使航天器进入连接近天体轨道与目标平动点周期轨道的不变流形通道。

### 关键性质
利用不变流形的自然动力学通道实现转移，可显著降低能量消耗，但转移时间通常较长。

### 数值方法
不变流形的计算通常需要数值积分和李雅普诺夫指数分析，拼接点的选择是关键步骤。

## 应用价值

一次冲量轨道转移为深空探测任务提供了一种低能量的转移方案，特别适用于：

- 对转移时间不敏感但对燃料消耗敏感的任务
- 需从近天天体轨道转移至平动点周期轨道的场景
- 作为构建"星际高速公路"的一部分

## 相关概念

- [霍曼转移](/glossary/fundamentals/hohmann-transfer/)
- [不变流形](/glossary/dynamics/central-manifold/)
- [异宿轨道转移](/glossary/dynamics/heteroclinic-orbit-transfer/)
- [平动点](/glossary/dynamics/libration-point/)
- [低能量转移轨道](/glossary/orbits/low-energy-transfer/)

## 参考文献

- 郭建宇. 基于双基不变流形法的平动点轨道设计及保持策略研究[D]. 北京工业大学, 2020.
- Lo M W, Ross S D. Low-energy interplanetary transfers using the invariant manifolds of L1, L2 halo orbits[C]. AAS/AIAA Astrodynamics Specialist Conference, 1998.
- Martin Lo W. The Interplanetary Superhighway and the Genesis Mission[R]. 2002.