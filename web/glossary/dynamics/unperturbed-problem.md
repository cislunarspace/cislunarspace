---
title: 无摄问题（Unperturbed Problem）
description: 仅考虑理想主要引力作用而忽略非球形引力、多体摄动及非保守力的动力学基准模型。
keywords: 无摄问题, Unperturbed Problem, 动力学, 二体问题, 限制性三体问题
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 无摄问题（Unperturbed Problem）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/dynamics/unperturbed-problem/
---

# 无摄问题（Unperturbed Problem）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

无摄问题（Unperturbed Problem）是指在天体力学与天体动力学研究中，经过理想化假设后仅保留核心主引力场作用、忽略所有外界微小扰动加速度的动力学基准模型。在近地或近月轨道动力学中通常指经典开普勒二体问题；在地月空间动力学中，通常指两个主天体绕其质心做严格圆周运动且忽略第三天体引力、非球形摄动及光压的圆型限制性三体问题（CR3BP）。

## 物理机制与工程价值

无摄动力学模型构成了整个轨道力学大厦的基石：

1. **积分常数与守恒律**：无摄二体问题拥有 6 个完全确定的开普勒积分（如能量积分、角动量积分和拉普拉斯矢量积分）；无摄圆型限制性三体问题则拥有反映系统能量与角动量守恒的单一积分（雅可比积分 $C_j$）；
2. **相空间几何骨架**：无摄模型提供了明确的力学平衡点（如拉格朗日平动点 $L_1-L_5$）、周期轨道族（Halo、Lyapunov、DRO 轨道）及其对应的不变流形流管；
3. **摄动展开基准**：实际真实物理环境中的所有微扰（如行星历表摄动、月球高阶引力场、太阳辐射压力、地球扁率 $J_2$）均被视为对无摄基准状态的微小偏离量，利用高斯行星方程或受摄拟轨道延拓方法进行精确修正。

在航天工程总体设计中，无摄问题提供了低成本、全局性的轨道拓扑初值搜索空间，是深空探测任务轨迹构型论证不可替代的第一步。

## 相关概念

- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [n体动力学（N-Body Dynamics）](/glossary/dynamics/n-body-dynamics/)
- [全摄动模型（Full Force Model）](/glossary/dynamics/full-force-model/)
- [雅可比积分（Jacobi Integral）](/glossary/dynamics/jacobi-integral/)

## 参考文献

- Szebehely, V. Theory of Orbits: The Restricted Problem of Three Bodies. Academic Press, 1967.
- Roy, A. E. Orbital Motion (4th Edition). Institute of Physics Publishing, 2005.
