---
title: 经验局部可观测性Gramian矩阵（Empirical Local Observability Gramian）
description: 基于仿真计算的可观测性度量矩阵。对目标初始状态施加微小扰动，仿真传播后比较扰动轨迹与标称轨迹的测量输出差异，按公式 P(x₀)_(i,j) = 1/(4ε²) ∫₀ᵀ [y⁺ⁱ(t) - y⁻ⁱ(t)]ᵀ[y⁺ʲ(t) - y⁻ʲ(t)] dt 组装矩阵各元素。该方法只需仿真动力学系统，无需精确的解析模型，适用于...
keywords: 经验局部可观测性Gramian矩阵, Empirical Local Observability Gramian, 轨道力学, 最优控制, 非线性动力学
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 经验局部可观测性Gramian矩阵（Empirical Local Observability Gramian）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 经验局部可观测性Gramian矩阵详解 | 术语定义
  description: 基于仿真计算的可观测性度量矩阵。对目标初始状态施加微小扰动，仿真传播后比较扰动轨迹与标称轨迹的测量输出差异，按公式 P(x₀)_(i,j) = 1/(4ε²) ∫₀ᵀ [y⁺ⁱ(t) - y⁻ⁱ(t)]ᵀ[y⁺ʲ(t) - y⁻ʲ(t)] dt 组装矩阵各元素。该方法只需仿真动力学系统，无需精确的解析模型，适用于...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 经验局部可观测性Gramian矩阵详解 | 术语定义
  description: 基于仿真计算的可观测性度量矩阵。对目标初始状态施加微小扰动，仿真传播后比较扰动轨迹与标称轨迹的测量输出差异，按公式 P(x₀)_(i,j) = 1/(4ε²) ∫₀ᵀ [y⁺ⁱ(t) - y⁻ⁱ(t)]ᵀ[y⁺ʲ(t) - y⁻ʲ(t)] dt 组装矩阵各元素。该方法只需仿真动力学系统，无需精确的解析模型，适用于...
  image: /logo.png
permalink: /glossary/dynamics/empirical-local-observability-gramian/
---

# 经验局部可观测性Gramian矩阵（Empirical Local Observability Gramian）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

基于仿真计算的可观测性度量矩阵。对目标初始状态施加微小扰动，仿真传播后比较扰动轨迹与标称轨迹的测量输出差异，按公式 P(x₀)_(i,j) = 1/(4ε²) ∫₀ᵀ [y⁺ⁱ(t) - y⁻ⁱ(t)]ᵀ[y⁺ʲ(t) - y⁻ʲ(t)] dt 组装矩阵各元素。该方法只需仿真动力学系统，无需精确的解析模型，适用于三体问题等复杂动力学。

## 应用价值

该概念在地月空间动力学建模与分析中具有应用价值，可用于轨道设计与任务规划。

## 相关概念

- [偏转角（Deflection Angle）](/glossary/dynamics/deflection-angle/)
- [时间最优转移（Time-Optimal Transfer）](/glossary/dynamics/time-optimal-transfer/)
- [双程测距求和组合（Summation Combination of Dual One-Way Ranging）](/glossary/navigation/summation-combination-of-dual-one-way-ranging/)
- [地图投影（Map Projection）](/glossary/fundamentals/map-projection/)

## 参考文献

- Observability metrics for space-based cislunar domain awareness (Fowler & Paley, 2023)
