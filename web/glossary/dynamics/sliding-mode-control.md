---
title: 滑模控制（Sliding Mode Control）
description: 详细解析滑模控制的基本原理、数学表达、抖振抑制技术及其在平流层飞艇控制中的应用
keywords: 滑模控制, Sliding Mode Control, 变结构控制, 滑模面, 抖振, 反步滑模控制, 平流层飞艇
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 滑模控制（Sliding Mode Control）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 滑模控制（Sliding Mode Control）详解 | 术语定义
  description: 详细解析滑模控制的基本原理、数学表达、抖振抑制技术及其在平流层飞艇控制中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 滑模控制（Sliding Mode Control）详解 | 术语定义
  description: 详细解析滑模控制的基本原理、数学表达、抖振抑制技术及其在平流层飞艇控制中的应用
  image: /logo.png
permalink: /glossary/dynamics/sliding-mode-control/
---

# 滑模控制（Sliding Mode Control）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

滑模控制（Sliding Mode Control, SMC）是一种变结构控制方法，通过设计滑模面并迫使系统状态在有限时间内到达并维持在滑模面上，从而实现对不确定性和外部扰动的鲁棒控制。

## 基本原理

### 滑模面设计

对于 n 阶非线性系统：

$$\dot{x} = f(x) + g(x)u$$

设计滑模面：

$$s(x) = \left(\frac{d}{dt} + \lambda\right)^{n-1}e$$

其中 $e = x - x_d$ 为跟踪误差，$\lambda > 0$ 为设计参数。

### 到达条件

采用指数到达律：

$$\dot{s} = -\varepsilon \text{sgn}(s) - ks, \quad \varepsilon > 0, k > 0$$

确保系统状态在有限时间 $t_r \leq |s(0)|/\varepsilon$ 内到达滑模面。

### 控制律结构

$$u = u_{eq} + u_{sw}$$

其中 $u_{eq}$ 为等效控制（维持系统在滑模面上的运动），$u_{sw}$ 为切换控制（克服扰动）。

## 抖振问题

抖振（Chattering）是滑模控制的固有缺陷，由高频切换引起：

| 问题 | 影响 |
|:---|:---|
| 高频切换 | 执行机构磨损 |
| 能量消耗 | 系统效率降低 |
| 热效应 | 控制器过热 |

### 抑制方法

| 方法 | 原理 |
|:---|:---|
| 边界层法 | 用饱和函数替代符号函数 |
| 高阶滑模 | 将切换高阶化平滑 |
| 观测器法 | 估计不确定项减少切换 |
| 模糊平滑 | 模糊逻辑平滑切换 |

## 在平流层飞艇中的应用

平流层飞艇存在以下不确定性：

- 气动参数摄动（速度、温度变化）
- 风场扰动（阵风、湍流）
- 浮力变化（氦气泄漏、温度效应）

滑模控制在以下方面应用：

1. **姿态控制**：利用其鲁棒性对抗气动扰动
2. **高度控制**：快速跟踪期望高度剖面
3. **路径跟踪**：轨迹跟踪的滑模设计

## 相关概念

- [反步滑模控制（Backstepping Sliding Mode Control）](/glossary/dynamics/backstepping-sliding-mode-control/)
- [模糊反步控制（Fuzzy Backstepping Control）](/glossary/dynamics/fuzzy-backstepping-control/)
- [区域驻留控制（Regional Station-keeping Control）](/glossary/dynamics/regional-station-keeping/)

## 参考文献

- 高为炳. 变结构控制理论基础[M]. 科学出版社, 2023.
- Utkin V I. Sliding Mode Control in Electro-Mechanical Systems[M]. CRC Press, 2024.