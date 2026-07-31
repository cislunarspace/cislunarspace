---
title: 状态转移张量（State Transition Tensor）
description: 状态转移矩阵（STM）的二阶推广，描述轨道初始状态的微小变化如何通过动力学传播影响终端状态的非线性敏感度。STM是雅可比矩阵（一阶），STT则包含海森矩阵（二阶）信息，在HDDP反向扫描中用于构造二阶最优控制律。引入二阶信息可加速收敛，尤其在动力学高度非线性的多圈转移问题中。
keywords: 状态转移张量, State Transition Tensor, STT, 轨道动力学, 三体问题, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 状态转移张量（State Transition Tensor）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 状态转移张量详解 | 术语定义
  description: 状态转移矩阵（STM）的二阶推广，描述轨道初始状态的微小变化如何通过动力学传播影响终端状态的非线性敏感度。STM是雅可比矩阵（一阶），STT则包含海森矩阵（二阶）信息，在HDDP反向扫描中用于构造二阶最优控制律。引入二阶信息可加速收敛，尤其在动力学高度非线性的多圈转移问题中。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 状态转移张量详解 | 术语定义
  description: 状态转移矩阵（STM）的二阶推广，描述轨道初始状态的微小变化如何通过动力学传播影响终端状态的非线性敏感度。STM是雅可比矩阵（一阶），STT则包含海森矩阵（二阶）信息，在HDDP反向扫描中用于构造二阶最优控制律。引入二阶信息可加速收敛，尤其在动力学高度非线性的多圈转移问题中。
  image: /logo.png
permalink: /glossary/dynamics/state-transition-tensor/
---

# 状态转移张量（State Transition Tensor）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 术语来源：Oue等 - 2025 - Low-Thrust Many-Revolution Transfer between Near Rectilinear Halo Orbit and Low Lunar Orbit Using Hybrid Differential Dynamic Programming
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

状态转移矩阵（STM）的二阶推广，描述轨道初始状态的微小变化如何通过动力学传播影响终端状态的非线性敏感度。STM是雅可比矩阵（一阶），STT则包含海森矩阵（二阶）信息，在HDDP反向扫描中用于构造二阶最优控制律。引入二阶信息可加速收敛，尤其在动力学高度非线性的多圈转移问题中。

## 应用价值

状态转移张量在地月空间动力学分析和任务轨道设计中具有应用价值。正确理解和应用状态转移张量有助于优化轨道设计、控制策略和任务规划，是地月空间任务工程师需要掌握的基础知识。

## 相关概念

- [多段轨迹设计（Multiple Segment Trajectory Design）](/glossary/dynamics/multiple-segment-trajectory-design/)
- [零速度面（Zero-Velocity Surface）](/glossary/dynamics/zero-velocity-surface/)
- [零向量（Null Vector）](/glossary/dynamics/null-vector/)
- [圆形限制性三体问题（Circular Restricted Three-Body Problem）](/glossary/dynamics/circular-restricted-three-body-problem/)

## 参考文献

- Oue等 - 2025 - Low-Thrust Many-Revolution Transfer between Near Rectilinear Halo Orbit and Low Lunar Orbit Using Hybrid Differential Dynamic Programming
