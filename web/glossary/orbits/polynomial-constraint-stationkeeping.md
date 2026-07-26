---
title: 多项式约束轨道保持（Polynomial Constraint Station-keeping）
description: 详细解析多项式约束轨道保持方法的原理、与传统方法的对比及其在平动点轨道保持中的应用
keywords: 多项式约束, Polynomial Constraint, 轨道保持, Station-keeping, 实时性, 张弛性, 平动点, Halo轨道, Lissajous轨道
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 多项式约束轨道保持（Polynomial Constraint Station-keeping）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 多项式约束轨道保持详解 | 平动点轨道控制方法
  description: 详细解析多项式约束轨道保持方法的原理、与传统方法的对比及其在平动点轨道保持中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 多项式约束轨道保持详解 | 平动点轨道控制方法
  description: 详细解析多项式约束轨道保持方法的原理、与传统方法的对比及其在平动点轨道保持中的应用
  image: /logo.png
permalink: /glossary/orbits/polynomial-constraint-stationkeeping/
---

# 多项式约束轨道保持

> 本文编辑来源：郭建宇 (2020) "基于双基不变流形法的平动点轨道设计及保持策略研究"
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

多项式约束轨道保持（Polynomial Constraint Station-keeping）是一种基于双基不变流形方法的轨道保持技术。该方法通过建立平动点附近周期轨道三个方向运动之间的非线性多项式关系，将其作为约束条件进行轨道修正和控制，无需预先设计标称轨道。

## 核心原理

### 与传统方法的对比

轨道保持方法通常分为两类：

| 方法类型 | 描述 | 特点 |
| :--- | :--- | :--- |
| **"紧"控制** | 设计目标轨道，航天器偏离后需回到目标轨道一定范围内 | 控制精度高，但依赖预设计标称轨道 |
| **"松"控制** | 不设定目标轨道，只需航天器运行在平动点附近即可 | 计算量较大，但更灵活 |

### 多项式约束方法

多项式约束轨道保持方法的创新之处在于：

1. **无需预设计标称轨道**：通过当前航天器所在轨道状态值进行修正
2. **实时性**：利用实时测量的轨道状态与多项式约束进行比较
3. **张弛性**：允许一定范围内的偏差，更适应复杂动力学环境

### 数学表达

设周期轨道三个方向的状态分别为 $(x, y, z)$，则多项式约束关系为：

$$z = f(x, y) = \sum_{i,j} c_{ij} x^i y^j$$

当实际轨道状态偏离多项式约束时，施加控制修正使轨道回归约束面。

## 应用场景

多项式约束轨道保持方法适用于：

- **Halo 轨道保持**：地月 L1/L2 点 Halo 轨道的长期维持
- **Lissajous 轨道保持**：拟周期轨道的轨道控制
- **复杂动力学环境**：考虑太阳引力摄动、月球扰动等影响因素

## 仿真验证

郭建宇（2020）的论文中通过以下模型进行了仿真验证：

- 地月系统无量纲模型
- 日地系统有量纲模型
- 带有月球扰动的有量纲模型

仿真结果表明，多项式约束方法在轨道保持精度和计算效率方面均表现出良好的性能。

## 核心要素

### 数学定义

多项式约束轨道保持通过双基不变流形方法建立周期轨道三方向运动的非线性多项式关系，将其作为约束条件进行实时轨道修正，无需预设计标称轨道。

### 关键性质

相比传统"紧"控制和"松"控制方法，多项式约束方法具有更好的实时性和张弛性，更适应复杂动力学环境下的轨道保持需求。

### 数值方法

利用多项式关系计算目标状态值，通过状态测量偏差施加油门修正，典型修正周期为数天至数周。

## 应用价值

多项式约束轨道保持方法为平动点任务提供了一种新型的轨道控制策略，具有以下优势：

- **降低计算复杂度**：无需求解复杂的轨迹优化问题
- **提高实时性**：基于当前状态快速修正
- **增强鲁棒性**：对模型误差和测量偏差具有更好的适应性

## 相关概念

- [双基不变流形法](/glossary/dynamics/two-dominant-invariant-manifold/)
- [降阶动力学方程](/glossary/dynamics/reduced-order-dynamics/)
- [Halo 轨道](/glossary/orbits/halo-orbit/)
- [Lissajous 轨道](/glossary/orbits/lissajous-orbit/)
- [平动点轨道保持](/glossary/orbits/orbit-keeping/)
- [靶点法](/glossary/dynamics/targeting-method/)

## 参考文献

- 郭建宇. 基于双基不变流形法的平动点轨道设计及保持策略研究[D]. 北京工业大学, 2020.
- Breakwell J V, et al. A "broken-rails" steering law for stationkeeping of libration point orbits[R]. 1974.
- Simó C, Gómez G. Station keeping of a quasi-periodic halo orbit using invariant manifolds[C]. 1986.
