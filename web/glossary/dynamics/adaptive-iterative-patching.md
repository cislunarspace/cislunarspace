---
title: 自适应迭代拼接（adaptive iterative patching）
description: 伪状态理论中用于拼接各段圆锥曲线轨迹的数值方法。该技术通过自适应调整拼接参数来提高解算效率和鲁棒性，适用于地月转移轨道这类涉及多段可解析圆锥曲线的优化问题。相比固定参数拼接，具有收敛速度快、抗噪能力强的优点。
keywords: 自适应迭代拼接, adaptive iterative patching, 轨道优化, 控制理论, 非线性控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 自适应迭代拼接（adaptive iterative patching）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 自适应迭代拼接详解 | 术语定义
  description: 伪状态理论中用于拼接各段圆锥曲线轨迹的数值方法。该技术通过自适应调整拼接参数来提高解算效率和鲁棒性，适用于地月转移轨道这类涉及多段可解析圆锥曲线的优化问题。相比固定参数拼接，具有收敛速度快、抗噪能力强的优点。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 自适应迭代拼接详解 | 术语定义
  description: 伪状态理论中用于拼接各段圆锥曲线轨迹的数值方法。该技术通过自适应调整拼接参数来提高解算效率和鲁棒性，适用于地月转移轨道这类涉及多段可解析圆锥曲线的优化问题。相比固定参数拼接，具有收敛速度快、抗噪能力强的优点。
  image: /logo.png
permalink: /glossary/dynamics/adaptive-iterative-patching/
---

# 自适应迭代拼接（adaptive iterative patching）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

伪状态理论中用于拼接各段圆锥曲线轨迹的数值方法。该技术通过自适应调整拼接参数来提高解算效率和鲁棒性，适用于地月转移轨道这类涉及多段可解析圆锥曲线的优化问题。相比固定参数拼接，具有收敛速度快、抗噪能力强的优点。

## 应用价值

基于该术语的定义，它在地月空间任务中具有重要应用价值。例如在轨道设计中，可利用其特性进行转移轨道优化；在轨道维持中，能够实现精确的轨道控制；在导航定轨中，可用于提高状态估计精度；在任务规划中，可辅助决策轨道转移时机和策略。具体的工程应用需结合任务约束和轨道特性进行综合分析。

## 相关概念

- [微分改正法](/glossary/fundamentals/differential-correction/)
- [间接法](/glossary/dynamics/indirect-methods/)
- [共振条件](/glossary/dynamics/resonance-condition/)
- [低推力平衡点](/glossary/dynamics/low-thrust-equilibrium-point/)
## 参考文献

- 丁百慧 等 - 2023 - 载人月球探测任务转移轨道及月面着陆区评估分析
