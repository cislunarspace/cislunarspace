---
title: 偏导数阵（Jacobian Matrix）
description: 设计目标对设计变量的偏导数矩阵，在微分改正法迭代中用于计算状态修正量。该矩阵的元素表示各设计目标对各设计变量的敏感度，是将非线性方程组线性化的核心工具。论文指出由于地月转移轨道中设计变量与目标之间没有显式函数关系，实际计算中采用单向有限差分近似公式数值求解各元素，有限差分步长取1%至2%的小偏差。
keywords: 偏导数阵, Jacobian Matrix, 轨道力学, 数值方法, 基础理论
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 偏导数阵（Jacobian Matrix）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 偏导数阵详解 | 术语定义
  description: 设计目标对设计变量的偏导数矩阵，在微分改正法迭代中用于计算状态修正量。该矩阵的元素表示各设计目标对各设计变量的敏感度，是将非线性方程组线性化的核心工具。论文指出由于地月转移轨道中设计变量与目标之间没有显式函数关系，实际计算中采用单向有限差分近似公式数值求解各元素，有限差分步长取1%至2%的小偏差。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 偏导数阵详解 | 术语定义
  description: 设计目标对设计变量的偏导数矩阵，在微分改正法迭代中用于计算状态修正量。该矩阵的元素表示各设计目标对各设计变量的敏感度，是将非线性方程组线性化的核心工具。论文指出由于地月转移轨道中设计变量与目标之间没有显式函数关系，实际计算中采用单向有限差分近似公式数值求解各元素，有限差分步长取1%至2%的小偏差。
  image: /logo.png
permalink: /glossary/fundamentals/jacobian-matrix/
---

# 偏导数阵（Jacobian Matrix）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

设计目标对设计变量的偏导数矩阵，在微分改正法迭代中用于计算状态修正量。该矩阵的元素表示各设计目标对各设计变量的敏感度，是将非线性方程组线性化的核心工具。论文指出由于地月转移轨道中设计变量与目标之间没有显式函数关系，实际计算中采用单向有限差分近似公式数值求解各元素，有限差分步长取1%至2%的小偏差。

## 应用价值

偏导数阵是地月空间研究的基础理论和方法。在实际应用中，该概念为轨道设计、导航计算和动力学分析提供了理论支撑，是理解更复杂空间任务问题的前提。

## 相关概念

- 牛顿万有引力定律（Newton's Law of Gravitation）
- 三角级数（Trigonometric Series）
- 发射三要素（Three Launch Elements）
- [伪势（Pseudo-Potential）](/glossary/dynamics/jacobi-integral/)

## 参考文献

- 刘磊 等 - 2008 - 多约束条件下的地月转移轨道设计
