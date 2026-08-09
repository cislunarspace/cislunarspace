---
title: 状态方程（State Equation）
description: 以状态向量描述系统动力学的一阶微分方程组，形式为 dx/dt = A(t)x + Bu，y = Cx。将二阶运动方程转化为一阶状态方程是现代控制理论的标准步骤，使最优控制、状态反馈、状态观测等方法可以直接应用。
keywords: 状态方程, State Equation, 轨道力学, 数值方法, 优化算法
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 状态方程（State Equation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 状态方程详解 | 术语定义
  description: 以状态向量描述系统动力学的一阶微分方程组，形式为 dx/dt = A(t)x + Bu，y = Cx。将二阶运动方程转化为一阶状态方程是现代控制理论的标准步骤，使最优控制、状态反馈、状态观测等方法可以直接应用。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 状态方程详解 | 术语定义
  description: 以状态向量描述系统动力学的一阶微分方程组，形式为 dx/dt = A(t)x + Bu，y = Cx。将二阶运动方程转化为一阶状态方程是现代控制理论的标准步骤，使最优控制、状态反馈、状态观测等方法可以直接应用。
  image: /logo.png
permalink: /glossary/fundamentals/state-equation/
---

# 状态方程（State Equation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

以状态向量描述系统动力学的一阶微分方程组，形式为 dx/dt = A(t)x + Bu，y = Cx。将二阶运动方程转化为一阶状态方程是现代控制理论的标准步骤，使最优控制、状态反馈、状态观测等方法可以直接应用。

## 应用价值

在航天器姿态和轨道控制中，该方法用于实现高精度跟踪和稳定保持。通过设计合适的控制律，可以有效抑制外部扰动的影响，保证航天器在复杂动力学环境中的可靠运行。

## 相关概念

- [同步旋转坐标系（Synodic Rotating Frame）](/glossary/fundamentals/synodic-frame/)
- [网格搜索（Grid Search）](/glossary/fundamentals/grid-search/)
- Gauss求积公式（Gauss Quadrature Formula）
- 星座构型向量（Constellation Pattern Vector）

## 参考文献

- 地月空间航天器绕飞接近跟踪控制
