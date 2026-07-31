---
title: 状态转移张量（State Transition Tensor）
description: 状态转移矩阵（STM）的二阶推广，描述轨道初始状态的微小变化如何通过动力学传播影响终端状态的非线性敏感度。STM是雅可比矩阵（一阶），STT则包含海森矩阵（二阶）信息，在HDDP反向扫描中用于构造二阶最优控制律。引入二阶信息可加速收敛，尤其在动力学高度非线性的多圈转移问题中。
keywords: 状态转移张量, State Transition Tensor, STT, dynamics
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
permalink: /glossary/dynamics/stt/
---

# 状态转移张量（State Transition Tensor）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

状态转移矩阵（STM）的二阶推广，描述轨道初始状态的微小变化如何通过动力学传播影响终端状态的非线性敏感度。STM是雅可比矩阵（一阶），STT则包含海森矩阵（二阶）信息，在HDDP反向扫描中用于构造二阶最优控制律。引入二阶信息可加速收敛，尤其在动力学高度非线性的多圈转移问题中。

## 应用价值

状态转移张量包含二阶敏感度信息，在HDDP反向扫描中用于构造二阶最优控制律，加速收敛。

## 相关概念

- [非线性规划（Nonlinear Programming）](/glossary/dynamics/nlp/)
- [零速度曲线（Zero-Velocity Curve）](/glossary/dynamics/zvc/)
- [形状基方法（Shape-Based Method）](/glossary/dynamics/shape-based-method/)

## 参考文献

- Oue等 - 2025 - Low-Thrust Many-Revolution Transfer between Near Rectilinear Halo Orbit and Low Lunar Orbit Using Hybrid Differential Dynamic Programming。
