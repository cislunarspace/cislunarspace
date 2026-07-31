---
title: 约束转化非线性规划（Constraint Conversion to Nonlinear Programming）
description: 将地月转移轨道的微分方程约束、边界条件和终端约束转化为非线性规划问题的建模方法。控制变量为速度增量和对准角，目标约束为近月点高度和转移时间，状态方程为旋转系动力学方程，积分终止条件为航迹角判据。
keywords: 约束转化非线性规划, Constraint Conversion to Nonlinear Programming, 轨道力学, 坐标系统, 引力
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 约束转化非线性规划（Constraint Conversion to Nonlinear Programming）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 约束转化非线性规划详解 | 术语定义
  description: 将地月转移轨道的微分方程约束、边界条件和终端约束转化为非线性规划问题的建模方法。控制变量为速度增量和对准角，目标约束为近月点高度和转移时间，状态方程为旋转系动力学方程，积分终止条件为航迹角判据。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 约束转化非线性规划详解 | 术语定义
  description: 将地月转移轨道的微分方程约束、边界条件和终端约束转化为非线性规划问题的建模方法。控制变量为速度增量和对准角，目标约束为近月点高度和转移时间，状态方程为旋转系动力学方程，积分终止条件为航迹角判据。
  image: /logo.png
permalink: /glossary/fundamentals/constraint-conversion-to-nonlinear-programming/
---

# 约束转化非线性规划（Constraint Conversion to Nonlinear Programming）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将地月转移轨道的微分方程约束、边界条件和终端约束转化为非线性规划问题的建模方法。控制变量为速度增量和对准角，目标约束为近月点高度和转移时间，状态方程为旋转系动力学方程，积分终止条件为航迹角判据。

## 应用价值

在进行轨道转移设计时，该概念有助于评估转移代价和飞行时间，为任务方案比选提供定量依据。结合全局搜索算法，可找到多族解和帕累托前沿，指导轨道设计决策。

## 相关概念

- [运行轨道库（Operational Orbit Library）](/glossary/orbits/operational-orbit-library/)
- [月球自由返回轨道（Lunar Free-Return Orbit, LFO）](/glossary/orbits/lunar-free-return-orbit/)
- [临界轨道（Critical Orbit）](/glossary/orbits/critical-orbit/)
- [准周期远距离逆行轨道（Quasi-Periodic Distant Retrograde Orbit, QPDRO）](/glossary/orbits/quasi-periodic-distant-retrograde-orbit/)

## 参考文献

- 彭坤 等 - 2018 - 三体模型下二维平面地月转移轨道设计与特性分析
