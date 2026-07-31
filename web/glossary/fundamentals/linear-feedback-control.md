---
title: 线性反馈控制（Linear Feedback Control）
description: 一种轨道控制策略：将目标轨道附近的动力学方程线性化，以当前状态与目标轨道的偏差作为反馈量，乘以控制增益生成推力指令，驱动偏差趋近于零。论文中通过引入位置偏差和速度偏差的加权二次型指标，在每个控制间隔求解最优推力，兼顾位置精度和能量消耗。
keywords: 线性反馈控制, Linear Feedback Control, 基础概念, 运动方程, 参考系, 参数
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 线性反馈控制（Linear Feedback Control）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 线性反馈控制详解 | 术语定义
  description: 一种轨道控制策略：将目标轨道附近的动力学方程线性化，以当前状态与目标轨道的偏差作为反馈量，乘以控制增益生成推力指令，驱动偏差趋近于零。论文中通过引入位置偏差和速度偏差的加权二次型指标，在每个控制间隔求解最优推力，兼顾位置精度和能量消耗。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 线性反馈控制详解 | 术语定义
  description: 一种轨道控制策略：将目标轨道附近的动力学方程线性化，以当前状态与目标轨道的偏差作为反馈量，乘以控制增益生成推力指令，驱动偏差趋近于零。论文中通过引入位置偏差和速度偏差的加权二次型指标，在每个控制间隔求解最优推力，兼顾位置精度和能量消耗。
  image: /logo.png
permalink: /glossary/fundamentals/linear-feedback-control/
---

# 线性反馈控制（Linear Feedback Control）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种轨道控制策略：将目标轨道附近的动力学方程线性化，以当前状态与目标轨道的偏差作为反馈量，乘以控制增益生成推力指令，驱动偏差趋近于零。论文中通过引入位置偏差和速度偏差的加权二次型指标，在每个控制间隔求解最优推力，兼顾位置精度和能量消耗。

## 应用价值

线性反馈控制基于状态向量的线性反馈设计控制律，是轨道保持和姿态控制的基础方法。在平动点轨道保持中，线性反馈控制通过抑制状态偏差实现轨道维持，具有结构简单、易于实现的优点，是工程中常用的控制方法。

## 相关概念

- [质心旋转坐标系（Center-of-Mass Rotating Frame）](/glossary/fundamentals/center-of-mass-rotating-frame/)
- [质量参数（Mass Parameter）](/glossary/fundamentals/mass-parameter/)
- [雅可比常数（Jacobi Constant, JC）](/glossary/dynamics/jacobi-constant-jc/)
- [归一化单位（Normalized Units）](/glossary/fundamentals/normalized-units/)
## 参考文献

- 关于探测器定点在共线平动点附近的控制问题
