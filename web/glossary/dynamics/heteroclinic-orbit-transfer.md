---
title: 异宿轨道转移（Heteroclinic Orbit Transfer）
description: 详细解析异宿轨道的定义、在平动点转移中的应用、以及"星际高速公路"理论中的地位
keywords: 异宿轨道, Heteroclinic Orbit, 星际高速公路, 低能耗转移, 平动点, Halo轨道, 不变流形
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 异宿轨道转移（Heteroclinic Orbit Transfer）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 异宿轨道转移详解 | 星际高速公路理论
  description: 详细解析异宿轨道的定义、在平动点转移中的应用、以及"星际高速公路"理论中的地位
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 异宿轨道转移详解 | 星际高速公路理论
  description: 详细解析异宿轨道的定义、在平动点转移中的应用、以及"星际高速公路"理论中的地位
  image: /logo.png
permalink: /glossary/dynamics/heteroclinic-orbit-transfer/
---

# 异宿轨道转移

> 本文编辑来源：郭建宇 (2020) "基于双基不变流形法的平动点轨道设计及保持策略研究"
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

异宿轨道（Heteroclinic Orbit）是连接动力系统中两个不同平衡点的轨道。在圆型限制性三体问题（CR3BP）中，异宿轨道连接两个不同的平动点（如 L1 和 L2），或连接平动点与周期轨道。沿异宿轨道转移是一种极低能量的转移方式，被誉为"星际高速公路"的重要组成部分。

## 理论基础

### 异宿轨道的数学定义

在动力系统理论中，异宿轨道是满足以下条件的轨道：

$$\lim_{t \to -\infty} x(t) = L_i, \quad \lim_{t \to +\infty} x(t) = L_j$$

其中 $L_i$ 和 $L_j$ 是两个不同的平衡点（平动点）。当 $i = j$ 时，则称为同宿轨道（Homoclinic Orbit）。

### 在 CR3BP 中的存在性

在地月系统的共线平动点之间，异宿轨道的存在性已得到证明。这些异宿轨道沿着连接两个平动点不稳定流形的通道运行。

## 转移机制

### 利用异宿轨道实现转移

郭建宇（2020）的研究中，利用异宿轨道找到了一条从地球转移到地月 L2 平动点附近 Halo 周期轨道的路径：

1. 从地球轨道出发，施加初始冲量进入异宿轨道
2. 沿异宿轨道自然演化，无需额外推进剂
3. 轨道自然连接至 L2 点附近的 Halo 周期轨道
4. 被目标周期轨道捕获

### 异宿轨道与不变流形的关系

异宿轨道本质上是不变流形的一种特殊形式：

| 轨道类型 | 起点 | 终点 |
|:---|:---|:---|
| 同宿轨道 | 平动点 $L_i$ | 平动点 $L_i$（自身） |
| 异宿轨道 | 平动点 $L_i$ | 平动点 $L_j$（不同） |
| 周期轨道 | 平动点 $L_i$ | 平动点 $L_i$（同宿特例） |

## 星际高速公路

异宿轨道是"星际高速公路"（Interplanetary Superhighway）理论的核心组成部分。Martin Lo 提出，利用平动点处的不变流形和异宿轨道，可以构建连接太阳系各行星轨道的低能量转移网络。

### 星际高速公路特性

- **低能量**：利用自然动力学通道，大幅降低转移所需能量
- **网络化**：各平动点的流形相互连接，形成转移网络
- **时间尺度**：转移时间可能很长（数月到数年）

## 应用价值

异宿轨道转移为深空探测提供了极低能量的转移方案：

| 应用场景 | 说明 |
|:---|:---|
| 地月空间任务 | 从地球轨道到 L2 Halo 轨道的低能量转移 |
| 火星探测 | 利用日火 L1/L2 异宿轨道设计低能量转移 |
| 小行星探测 | 利用异宿轨道实现多目标探测任务 |
| 深空导航 | 作为星际航线的"主干道" |

## 核心要素

### 数学定义
异宿轨道是连接动力系统中两个不同平衡点的轨道，在 CR3BP 中连接两个不同的平动点或平动点与周期轨道。

### 关键性质
沿异宿轨道转移无需或仅需极少的能量消耗，是实现低能量深空转移的重要途径。

### 数值方法
异宿轨道的计算需要精确的不变流形数值积分，以及同宿/异宿轨道的检测和验证。

## 相关概念

- [一次冲量轨道转移](/glossary/orbits/primary-impulse-transfer/)
- [不变流形](/glossary/dynamics/central-manifold/)
- [平动点](/glossary/dynamics/libration-point/)
- [星际高速公路](/glossary/orbits/low-energy-transfer/)
- [低能量转移轨道](/glossary/orbits/low-energy-transfer/)
- [Halo 轨道](/glossary/orbits/halo-orbit/)

## 参考文献

- 郭建宇. 基于双基不变流形法的平动点轨道设计及保持策略研究[D]. 北京工业大学, 2020.
- Martin Lo W. The Interplanetary Superhighway and the Genesis Mission[R]. JPL, 2002.
- Koon W S, Lo M W, Marsden J E, et al. Dynamical systems, the three-body problem and space mission design[J]. 2006.