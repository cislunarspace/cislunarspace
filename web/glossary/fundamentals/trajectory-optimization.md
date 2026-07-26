---
title: 轨迹优化（Trajectory Optimization）
description: 详细解析轨迹优化的问题描述、约束条件及常用优化方法
keywords: 轨迹优化, Trajectory Optimization, 最优控制, 弹道优化, 运载能力
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 轨迹优化（Trajectory Optimization）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 轨迹优化详解 | 术语定义
  description: 详细解析轨迹优化的问题描述及常用优化方法
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 轨迹优化详解 | 术语定义
  description: 详细解析轨迹优化的问题描述及常用优化方法
  image: /logo.png
permalink: /glossary/fundamentals/trajectory-optimization/
---

# 轨迹优化（Trajectory Optimization）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

轨迹优化是在轨迹设计的基础上，对某一性能指标进行优化，从而获得最优飞行轨迹的问题。轨迹优化将轨迹设计问题描述为一个最优控制问题，采用数值优化方法求解，得到某一性能指标下最优的飞行轨迹。

## 核心要素

### 问题形式

轨迹优化问题可统一表示为：

$$\max \quad J = J(\dot{\varphi}_{pr}(t), A_0)$$

约束条件包括三类：

| 约束类型 | 说明 | 示例 |
| :--- | :--- | :--- |
| 动力学方程约束 | 描述质心运动的微分方程 | 运动方程组 |
| 初始/终端状态约束 | 起飞和关机时刻的运动状态 | 入轨根数、落点位置 |
| 过载约束 | 飞行过程中需满足的限制 | 过载、动压、残骸落区 |

### 优化目标

根据飞行任务确定，典型优化目标包括：

| 任务类型 | 优化目标 |
| :--- | :--- |
| 运载火箭 | 有效载荷质量最大（等价于剩余推进剂质量最大） |
| 弹道导弹 | 落点偏差最小 |
| 通用 | 燃料消耗最小、飞行时间最短 |

### 优化变量

以 GTO 发射轨道为例，优化变量包括发射方位角和各级俯仰程序角参数：

$$U = (A_0, \alpha_m, \dot{\varphi}_{p2}, t_{22}, \dot{\varphi}_{p31}, \dot{\varphi}_{p3h}, \dot{\varphi}_{p32}, t_{32}, \ldots, t_{k32})^{\mathrm{T}}$$

### 求解方法

| 方法类别 | 典型算法 | 特点 |
| :--- | :--- | :--- |
| 打靶法 | 遗传算法、模拟退火 | 全局搜索，不依赖梯度 |
| 配点法 | 伪谱法、凸优化 | 将连续问题离散化 |
| 基于梯度 | SQP | 收敛快，局部最优 |

### 与轨迹设计的区别

| 比较项 | 轨迹设计 | 轨迹优化 |
| :--- | :--- | :--- |
| 目标 | 找到满足约束的可行解 | 找到性能指标最优的解 |
| 方法 | 牛顿迭代法等 | SQP、遗传算法等 |
| 解的数量 | 一个可行解 | 最优解 |
| 计算量 | 较小 | 较大 |

## 应用价值

轨迹优化是充分发挥飞行器能力的重要手段。通过优化飞行程序，可以在满足各项约束的条件下最大化运载能力、最小化落点偏差或优化其他性能指标。随着计算机性能的提升和优化算法的发展，轨迹优化在航天器设计中的应用越来越广泛。

## 相关概念

- [序列二次规划（Sequential Quadratic Programming）](/glossary/fundamentals/sequential-quadratic-programming/)
- [牛顿迭代法（Newton's Iteration Method）](/glossary/fundamentals/newton-iteration-method/)
- [发射方位角（Launch Azimuth）](/glossary/fundamentals/launch-azimuth/)
- [俯仰程序角（Pitch Program Angle）](/glossary/fundamentals/pitch-program/)
- [入轨条件（Orbit Insertion Conditions）](/glossary/fundamentals/orbit-insertion-conditions/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
