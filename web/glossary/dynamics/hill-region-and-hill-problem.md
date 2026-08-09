---
title: Hill 区域与 Hill 问题（Hill's Region & Hill Problem）
description: 限制性三体问题中由雅可比常数（零速度曲面）界定的允许运动区域及其拓扑构型，以及质量参数趋于零的极限模型 Hill 问题——覆盖五种区域构型、Hill 稳定性判据、周期轨道族与 Hill 模型的 Lambert 求解。
keywords: Hill region, Hill's region, Hill stability, Hill problem, Hill model, 零速度曲面, 雅可比常数, 禁区, 允许区域, 周期轨道族
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Hill 区域与 Hill 问题
  desc: 限制性三体问题的允许运动区域、拓扑构型与 Hill 极限模型。
  image: /logo.png
og:
  title: Hill 区域与 Hill 问题详解 | 术语定义
  description: 由雅可比常数（零速度曲面）界定的允许运动区域与 Hill 问题极限模型。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Hill 区域与 Hill 问题详解 | 术语定义
  description: 限制性三体问题的 Hill 区域构型与 Hill 极限模型。
  image: /logo.png
permalink: /glossary/dynamics/hill-region-and-hill-problem/
---

# Hill 区域与 Hill 问题（Hill's Region & Hill Problem）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

Hill 区域（Hill's region）是圆型限制性三体问题中第三体质点被允许运动的构型空间区域。在会合系中，质点的能量由雅可比常数（[雅可比积分](/glossary/dynamics/jacobi-integral/)）度量；给定 $C$ 值，零速度曲面（[零速度曲面](/glossary/dynamics/zero-velocity-surface/)）把位置空间划分为允许区与禁区，Hill 区域即能量流形在位置空间上的投影（Szebehely 1967；Topputo 2013）。物理直观：质点在禁区内的势能大于总能量，无法到达。

## 五种拓扑构型

雅可比常数 $C$ 在五个平动点处的取值 $C(L_1), C(L_2), C(L_3), C(L_4)=C(L_5)$ 把问题分成五种几何形态（Sousa-Silva 等 2018；Szebehely 1967）：

1. $C > C(L_1)$：区域由两个互不连通的天体邻域组成，质点在主天体间不能穿越；
2. $C(L_2) < C < C(L_1)$：两区域在地球与 L1 之间的「颈」处连通，质点可在两主天体间通行；
3. $C(L_3) < C < C(L_2)$：L1、L2 两通道均开启，允许区域环绕内区并向外伸展；
4. $C(L_4) < C < C(L_3)$：L3 通道开启，从内区可达更远的外部；
5. $C < C(L_4)$：除两主天体邻域（奇异）外全空间允许，等边三角形平动点邻域成为可通行区域。

C 越小，允许区域越大、通行性越强。这一判据决定了探测器能否在地球与月球引力域之间自由穿越、何时需要借力或机动，是轨道可达性定性分析的基础（Hill 区域构型即指这五种配置）。

## Hill 稳定性

Hill 稳定性（Hill stability）指三体系统中相互距离保持有界的条件：当质点的雅可比常数满足 $C > C(L_1)$（对圆型限制性三体问题），或一般三体问题中相应的能量判据成立时，较小主天体不会脱离另一主天体而逃逸，距离保持有界。该概念可部分推广到一般三体问题（Marchal 1990；Szebehely 1967），是判断轨道长期有界、区分逃逸/非逃逸与束缚运动的常用工具。

## Hill 问题：质量参数趋于零的极限模型

Hill 问题（Hill problem / Hill's problem）是限制性三体问题在质量参数 $\mu \to 0$（第三体位于小天体附近）时的极限近似：把坐标原点移到小天体并作局部展开，运动方程保留一阶引力项与离心/科氏项，得到自治哈密顿系统

$\ddot{x} - 2\dot{y} = 3x - \frac{x}{r^3}$，$\ddot{y} + 2\dot{x} = -\frac{y}{r^3}$，$\ddot{z} = -\frac{z}{r^3}$

（无量纲化、$r=\sqrt{x^2+y^2+z^2}$）。该模型保留了限制性三体问题的主要动力学特征：存在雅可比型运动积分、周期轨道按单参数族组织（Hénon 的经典族划分）、在会合系中周期为 $2\pi$。它是推导和分类地月转移基本周期轨道族的理论起点，也是理解更复杂三体动力学的入门模型（Hénon 1969；Mingotti 等 2012；Gómez 等 2001）。Gómez 和 Marcote 给出 Hill 方程的高阶解析解（Gómez 和 Marcote 2006）。

## Hill 模型与三体 Lambert 求解

「Hill 模型」在工程文献中有另一种用法：把限制性三体问题在航天器运动范围远小于两主天体间距的条件下近似为 Hill 方程形式，使三体 Lambert 问题可用修正初末位置矢量的两层迭代方法求解；Sukhanov 和 Prado 基于此提出了收敛性较好的 Lambert 求解算法（Sukhanov 和 Prado 2004）。该用法与「Hill 区域」「Hill 问题」指代不同对象，注意区分。

## 相关概念

- [雅可比积分（Jacobi Integral）](/glossary/dynamics/jacobi-integral/)

- [零速度曲面（Zero-Velocity Surface）](/glossary/dynamics/zero-velocity-surface/)

- [会合坐标系（Synodic Frame）](/glossary/fundamentals/synodic-frame/)

- [庞加莱截面（Poincaré Section）](/glossary/dynamics/poincare-section/)

- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)

## 参考文献

- Szebehely, 1967, Theory of Orbits: The Restricted Problem of Three Bodies（Hill 区域与五种构型经典出处）

- Marchal, 1990, The Three-Body Problem（Hill 稳定性）

- Hénon, 1969, Numerical exploration of the restricted problem. V（Hill 问题周期轨道族）

- Gómez 和 Marcote, 2006, High-order analytical solutions of Hill's equations

- Mingotti 等, 2012, Transfers to distant periodic orbits around the Moon via their invariant manifolds（Hill 问题作为轨道族理论起点）

- Sukhanov 和 Prado, 2004（Hill 模型 Lambert 求解）

- Sousa-Silva 等, 2018, Fast Earth-Moon transfers with ballistic capture（五种 Hill 区域构型）

- Topputo, 2013（能量流形投影与可达集）
