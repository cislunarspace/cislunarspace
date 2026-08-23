---
title: 无迹卡尔曼滤波（Unscented Kalman Filter, UKF）
description: 基于无迹变换确定性采样捕捉状态均值与协方差非线性传递的高精度递推状态估计算法。
keywords: 无迹卡尔曼滤波, UKF, 滤波算法, 自主导航, 非线性估计
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 无迹卡尔曼滤波（Unscented Kalman Filter, UKF）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/fundamentals/ukf/
---

# 无迹卡尔曼滤波（Unscented Kalman Filter, UKF）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

无迹卡尔曼滤波（Unscented Kalman Filter, UKF）是一种基于无迹变换（Unscented Transform, UT）的非线性统计滤波估计方法。该算法通过在当前估计状态分布周围选取一组确定性采样点（Sigma 点），通过非线性动力学和观测方程进行精确前向传播，进而重构后验状态的高阶均值与协方差，克服了传统扩展卡尔曼滤波（EKF）需要对非线性函数进行局部一阶泰勒线性化求导的限制。

## 物理机制与工程价值

在地月空间轨道确定与自主导航中，受地球与月球非对称引力场耦合、平动点鞍点不稳定性影响，状态转移呈现强烈的非线性畸变，高斯初值概率密度演化后会迅速退化为非对称香蕉形或环形分布。

UKF 算法在此类强非线性环境中的力学与工程优势体现在：
1. **二阶及以上估计精度**：通过确定性分布的 $2n+1$ 个 Sigma 点匹配先验高斯分布的一阶均值和二阶协方差，其非线性后验传播精度至少达到泰勒展开的三阶项，远优于 EKF 的一阶截断精度；
2. **无需计算解析雅可比矩阵**：避免了在复杂摄动（高阶月球重力场、太阳光压）下计算繁复且容易产生奇异的动力学和观测雅可比偏导矩阵；
3. **收敛鲁棒性高**：在地月转移初轨确定、近月制动捕获以及自主光学与星间测距融合滤波中，对较大初始定轨误差具有更宽的滤波收敛容限。

该算法已成为地月空间航天器星载高精度自主定轨与姿轨联合估计的核心基准算法之一。

## 相关概念

- [扩展卡尔曼滤波（EKF）](/glossary/navigation/ekf/)
- [误差演化（Uncertainty Propagation）](/glossary/fundamentals/uncertainty-propagation/)
- [无迹变换（Unscented Transform）](/glossary/navigation/ut/)
- [双向对发星间测距（Bidirectional Inter-Satellite Ranging）](/glossary/navigation/bidirectional-inter-satellite-ranging/)

## 参考文献

- Julier, S. J., & Uhlmann, J. K. Unscented filtering and nonlinear estimation. Proceedings of the IEEE, 2004, 92(3): 401-422.
- 于登云, 董捷, 肖东东, 等. 人工智能赋能地月空间感知技术现状及展望. 宇航学报, 2025, 46(1): 1-15.
