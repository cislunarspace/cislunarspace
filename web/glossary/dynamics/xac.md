---
title: x轴穿越控制（x-Axis Crossing Control, XAC）
description: 利用平动点周期轨道平面穿透几何对称性实施的离散轨道维持控制算法。
keywords: x轴穿越控制, XAC, 轨道维持, 打靶法, 近直线晕轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: x轴穿越控制方法
  desc: 基于轨道对称性的平动点与NRHO轨道维持算法。
  image: /logo.png
permalink: /glossary/dynamics/xac/
---

# x轴穿越控制（x-Axis Crossing Control, XAC）

## 定义

一种在航天器穿越地月旋转系中垂对称平面（如xz平面）时施加小推力脉冲，校正切向与法向速度偏差，使预测轨迹在后续穿越点处满足正交穿越条件的离散轨道维持控制策略。

## 物理机制与工程价值

在圆型限制性三体问题中，许多典型周期轨道（如Halo与NRHO）关于主天体连线平面具有镜像对称性。XAC策略利用这种几何对称约束，将复杂的长时域连续轨迹优化简化为单圈或半圈穿越点的代数打靶问题。该方法计算量小、算法稳健，已被广泛应用于CAPSTONE探月微纳卫星与月球门户空间站的在轨自主轨道维持设计中。

## 相关概念

- [近直线晕轨道](/glossary/orbits/nrho/)
- [打靶法](/glossary/navigation/differential-correction/)
- [轨道维持](/glossary/dynamics/station-keeping/)

## 参考文献

- Shimane et al., 2025, Revolution-spaced output-feedback model predictive control for station keeping on near-rectilinear halo orbits.
