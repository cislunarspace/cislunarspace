---
title: 无迹变换（Unscented Transformation, UT）
description: 用于计算非线性函数作用下随机变量均值与协方差传递的确定性采样数值变换方法，是无迹卡尔曼滤波的核心理论基础。
keywords: 无迹变换, Unscented Transformation, UT, navigation
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 无迹变换（Unscented Transformation, UT）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/navigation/ut/
---

# 无迹变换（Unscented Transformation, UT）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

无迹变换（Unscented Transformation, UT）是一种通过确定性采样策略传播随机变量概率分布矩特征的数值计算方法。它通过在状态先验均值周围精心选取一组对称分布的Sigma样本点并赋予相应权重，将样本点通过真实的非线性动力学或量测方程映射后，加权统计重构出后验概率分布的均值与协方差矩阵。

## 物理机制与工程价值

在地月空间深空探测与非线性轨道估计中，系统动力学具有高度非线性与强引力摄动耦合特性，无迹变换展现出显著理论与计算优势：

1. 高阶精度逼近：传统扩展卡尔曼滤波（EKF）采用一阶泰勒展开截断非线性项，在强非线性地月多体引力场中容易因截断误差产生滤波发散；无迹变换无需忽略高阶项，其计算出的后验均值和协方差在泰勒级数展开下至少可精确至三阶精度（对于高斯先验输入）。
2. 免求雅可比矩阵：无迹变换直接基于确定性样本点的真实非线性函数映射，完全免去了对复杂多体引力模型、高阶球谐系数及太阳光压等动力学项解析或数值求偏导（雅可比矩阵）的过程，大幅降低了算法推导难度与计算奇异风险。
3. 广泛工程应用：无迹变换作为无迹卡尔曼滤波（UKF）与高斯混合滤波（GMF）的核心算子，广泛应用于地月空间非合作目标搜索跟踪、月球软着陆自主导航、多星交会对接相对状态估计及可达域不确定性传播等关键工程领域。

## 相关概念

- [参考轨道（Reference Orbit）](/glossary/navigation/reference-orbit/)
- [轨道交会（Orbital Rendezvous）](/glossary/navigation/orbital-rendezvous/)
- [GRAIL重力场模型（GRAIL Gravity Field Model）](/glossary/observation/grgm660prim/)
- [通用任务分析工具（General Mission Analysis Tool, GMAT）](/glossary/other/gmat/)

## 参考文献

- Julier S J, Uhlmann J K. Unscented filtering and nonlinear estimation. *Proceedings of the IEEE*, 2004, 92(3): 401-422.
- Li X, Zhang C, Baoyin H. Efficient reachable domain search-tracking for cislunar non-cooperative targets via designed quadrature. *Astrodynamics*, 2025, 9(1): 85-102.
