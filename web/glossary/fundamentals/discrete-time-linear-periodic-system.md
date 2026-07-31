---
title: 线性离散周期系统（Discrete-Time Linear Periodic System）
description: 线性周期系统的离散化形式，状态方程为 x(k+1)=A(k)x+B(k)u，系数矩阵满足 A(k+T_L)=A(k)、B(k+T_L)=B(k)。论文将连续误差动力学以维持机动的时间间隔 Delta tau 为步长离散化，再通过定常变换（以一个周期内所有状态、控制量组成增广向量）转化为线性离散定常系统，从而能直接套用经
keywords: 线性离散周期系统, Discrete-Time Linear Periodic System, DTLP, 坐标系, 引力场
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 线性离散周期系统（Discrete-Time Linear Periodic System）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 线性离散周期系统详解 | 术语定义
  description: 线性周期系统的离散化形式，状态方程为 x(k+1)=A(k)x+B(k)u，系数矩阵满足 A(k+T_L)=A(k)、B(k+T_L)=B(k)。论文将连续误差动力学以维持机动的时间间隔 Delta tau 为步长离散化，再通过定常变换（以一个周期内所有状态、控制量组成增广向量）转化为线性离散定常系统，从而能直接套用经
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 线性离散周期系统详解 | 术语定义
  description: 线性周期系统的离散化形式，状态方程为 x(k+1)=A(k)x+B(k)u，系数矩阵满足 A(k+T_L)=A(k)、B(k+T_L)=B(k)。论文将连续误差动力学以维持机动的时间间隔 Delta tau 为步长离散化，再通过定常变换（以一个周期内所有状态、控制量组成增广向量）转化为线性离散定常系统，从而能直接套用经
  image: /logo.png
permalink: /glossary/fundamentals/discrete-time-linear-periodic-system/
---

# 线性离散周期系统（Discrete-Time Linear Periodic System）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：徐明和徐世杰 - 2008 - Halo轨道维持的线性周期控制策略
>
> 站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

线性周期系统的离散化形式，状态方程为 x(k+1)=A(k)x+B(k)u，系数矩阵满足 A(k+T_L)=A(k)、B(k+T_L)=B(k)。论文将连续误差动力学以维持机动的时间间隔 Delta tau 为步长离散化，再通过定常变换（以一个周期内所有状态、控制量组成增广向量）转化为线性离散定常系统，从而能直接套用经典极点配置定理。

## 应用价值

该术语在地月空间任务中具有重要应用价值。在轨道设计阶段，工程师利用相关理论进行轨迹优化；在导航与轨道确定中，用于提升测量精度；在姿态控制与轨道保持任务中，确保航天器稳定运行。具体应用中，可结合任务需求进行参数优化和算法适配，提高任务成功率和资源利用效率。

## 相关概念

- [虚拟共面起飞（Virtual Coplanar Takeoff）](/glossary/fundamentals/virtual-coplanar-takeoff/)
- [月球重力场不规则性（Lunar Gravity Field Irregularity）](/glossary/fundamentals/lunar-gravity-field-irregularity/)
- [LP100K模型（LP100K Model）](/glossary/fundamentals/lp100k-model/)

## 参考文献

- 徐明和徐世杰 - 2008 - Halo轨道维持的线性周期控制策略
