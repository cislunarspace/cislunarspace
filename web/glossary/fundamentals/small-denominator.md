---
title: 小分母（Small Denominator）
description: 摄动动力学级数展开与特定轨道根数微分方程中除数趋近于零引发的数值奇异与积分步长坍缩现象。
keywords: 小分母, Small Denominator, 轨道根数, 奇异性, 摄动理论
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 小分母（Small Denominator）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/fundamentals/small-denominator/
---

# 小分母（Small Denominator）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

小分母（Small Denominator）是指在天体力学摄动展开级数、哈密顿系统正则变换积分以及特定非奇异轨道根数的变分运动微分方程中，出现的因特定轨道几何参数或无理频率线性组合逼近零而导致分母趋近于零的数学代数项。

## 物理机制与工程价值

在轨道摄动解析分析与轨道数值积分中，小分母问题主要出现在两个关键领域：

1. **轨道根数运动方程的坐标奇异性**：在某些统一轨道根数（Unified Orbital Elements）或经典开普勒根数微分方程中，导数表达式包含因子 $1/\cos(i/2)$ 或 $1/e$。当轨道倾角 $i \to 180^\circ$（严格逆行轨道）或偏心率 $e \to 0$（正圆轨道）时，分母急剧逼近零。在变步长数值积分过程中，导数绝对值爆炸导致局部截断误差超标，算法被迫将积分步长压缩至极小值甚至造成计算停滞与溢出；
2. **共振与久期摄动级数展开**：在多引力体摄动（如日月引力共振）哈密顿展开中，小分母项对应频率整数组合 $k_1 \omega_1 + k_2 \omega_2 \approx 0$，产生 KAM 环面破裂与混沌扩散。

在工程实践中，必须通过构造改进等效轨道根数（如春分点轨道根数、单位四元数或正则化 K-S 变量变换）从代数结构上消除小分母几何奇异性，从而保障地月空间航天器长期高精度定轨与轨道预报的高计算效率。

## 相关概念

- [正交坐标系（Orthogonal Coordinate System）](/glossary/fundamentals/orthogonal-coordinate-system/)
- [全摄动模型（Full Force Model）](/glossary/dynamics/full-force-model/)
- [平均化方法（Averaging Method）](/glossary/dynamics/averaging-method/)
- [状态雅可比矩阵（State Jacobian Matrix）](/glossary/dynamics/state-jacobian-matrix/)

## 参考文献

- Battin, R. H. An Introduction to the Mathematics and Methods of Astrodynamics. AIAA Education Series, 1999.
- Brouwer, D., & Clemence, G. M. Methods of Celestial Mechanics. Academic Press, 1961.
