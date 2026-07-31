---
title: 路径不等式约束（Path Inequality Constraint）
description: 沿轨迹每一时刻或每一阶段都必须满足的不等式约束，如推力幅值不超过最大值、航天器与天体的距离不小于最小半径等。与仅在轨迹两端施加的终端约束不同，路径约束贯穿整个飞行过程。在 HDDP 中，推力上限等控制约束通过截断处理直接满足；最小半径等状态约束则通过罚函数法软处理，允许少量违反但施加惩罚。
keywords: 路径不等式约束, Path Inequality Constraint, 轨道动力学, 三体问题, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 路径不等式约束（Path Inequality Constraint）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 路径不等式约束详解 | 术语定义
  description: 沿轨迹每一时刻或每一阶段都必须满足的不等式约束，如推力幅值不超过最大值、航天器与天体的距离不小于最小半径等。与仅在轨迹两端施加的终端约束不同，路径约束贯穿整个飞行过程。在 HDDP 中，推力上限等控制约束通过截断处理直接满足；最小半径等状态约束则通过罚函数法软处理，允许少量违反但施加惩罚。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 路径不等式约束详解 | 术语定义
  description: 沿轨迹每一时刻或每一阶段都必须满足的不等式约束，如推力幅值不超过最大值、航天器与天体的距离不小于最小半径等。与仅在轨迹两端施加的终端约束不同，路径约束贯穿整个飞行过程。在 HDDP 中，推力上限等控制约束通过截断处理直接满足；最小半径等状态约束则通过罚函数法软处理，允许少量违反但施加惩罚。
  image: /logo.png
permalink: /glossary/dynamics/path-inequality-constraint/
---

# 路径不等式约束（Path Inequality Constraint）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

沿轨迹每一时刻或每一阶段都必须满足的不等式约束，如推力幅值不超过最大值、航天器与天体的距离不小于最小半径等。与仅在轨迹两端施加的终端约束不同，路径约束贯穿整个飞行过程。在 HDDP 中，推力上限等控制约束通过截断处理直接满足；最小半径等状态约束则通过罚函数法软处理，允许少量违反但施加惩罚。

## 应用价值

在航天器控制系统设计中，该方法可用于设计姿态控制律或制导律，实现对航天器姿态和轨道的精确控制。在实际任务中，基于该方法的控制器能够提高姿态稳定性和轨迹跟踪精度。

## 相关概念

- [月球自由返回轨道（Lunar Free-Return Orbit, LFO）](/glossary/orbits/lunar-free-return-orbit/)
- [约束转化非线性规划（Constraint Conversion to Nonlinear Programming）](/glossary/fundamentals/constraint-conversion-to-nonlinear-programming/)
- [全局搜索（Global Search）](/glossary/fundamentals/global-search/)
- [姿态确定与控制系统（Attitude Determination and Control System）](/glossary/fundamentals/attitude-determination-and-control-system/)

## 参考文献

- Aziz et al. 2019, JGCD
