---
title: 微分修正算法（Differential Correction Algorithm）
description: 利用状态转移矩阵将终端约束偏差线性映射回初始状态修正量的数值迭代方法。
keywords: 微分修正算法, Differential Correction Algorithm, 动力学, 轨道设计, 状态转移矩阵
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 微分修正算法（Differential Correction Algorithm）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/dynamics/an-iterative-method-that-maps-terminal-constraint-residuals-back-to-initial-velocity-corrections-via/
---

# 微分修正算法（Differential Correction Algorithm）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

微分修正算法（Differential Correction Algorithm）是一种基于一阶泰勒展开与状态转移矩阵（State Transition Matrix, STM），将终端目标状态或几何约束的残差线性映射为初始自由变量（如初始速度、初始位置或历元时间）修正量的数值迭代求解算法。

## 物理机制与工程价值

在地月空间圆型限制性三体问题（CR3BP）及高精度星历模型中，轨道动力学具备强非线性和对初值高度敏感的特征。直接两点边值问题难以获得解析解，微分修正算法通过联立数值积分轨道动力学方程与变分方程，获取轨迹终点对起点的状态转移矩阵 $\Phi(t, t_0)$。

以地月平动点 Halo 轨道转移设计为例，设计者通常将近月点月心距、近月点速度方向航迹角设定为终端约束函数 $\mathbf{F}(\mathbf{x}_0)=\mathbf{0}$。算法利用雅可比矩阵对初始速度增量 $\Delta \mathbf{v}_0$ 进行迭代修正：

$$\Delta \mathbf{v}_0^{(k+1)} = \Delta \mathbf{v}_0^{(k)} - \left[ \frac{\partial \mathbf{F}}{\partial \mathbf{v}_0} \right]^{-1} \mathbf{F}(\mathbf{x}_0^{(k)})$$

该方法具有二阶局部收敛速度，计算效率高，但收敛域依赖初始猜测值的精度。在工程实践中，通常结合不变流形流管切断面或网格全局搜索提供高质量初值，广泛用于地月转移轨道设计、周期轨道族延拓与中途修正机动规划。

## 相关概念

- [微分修正（Differential Correction）](/glossary/dynamics/differential-correction/)
- [状态转移矩阵（State Transition Matrix）](/glossary/dynamics/state-jacobian-matrix/)
- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)
- [Halo轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)

## 参考文献

- 彭坤, 罗亚中, 高有涛, 等. 基于不变流形的地月L2点Halo轨道转移轨道设计. 宇航学报, 2016, 37(10): 1167-1175.
- Parker, G. H., & Anderson, R. O. Low-Energy Lunar Trajectory Design. John Wiley & Sons, 2014.
