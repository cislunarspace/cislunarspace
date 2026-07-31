---
title: 扩展卡尔曼滤波（Extended Kalman Filter）
description: 将非线性系统的状态方程和量测方程在当前估计点处作一阶Taylor展开线性化，再套用标准卡尔曼滤波递推公式的估计算法。论文将EKF用于平动点轨道天文导航：状态方程为三体问题动力学方程，量测方程为星光角距与位置的非线性关系，一阶线性化的一步转移阵足以满足精度要求。仿真结果表明EKF在质心旋转系下可将定位误差收敛至约7.5 
keywords: 扩展卡尔曼滤波, Extended Kalman Filter, EKF, navigation
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 扩展卡尔曼滤波（Extended Kalman Filter）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 扩展卡尔曼滤波详解 | 术语定义
  description: 将非线性系统的状态方程和量测方程在当前估计点处作一阶Taylor展开线性化，再套用标准卡尔曼滤波递推公式的估计算法。论文将EKF用于平动点轨道天文导航：状态方程为三体问题动力学方程，量测方程为星光角距与位置的非线性关系，一阶线性化的一步转移阵足以满足精度要求。仿真结果表明EKF在质心旋转系下可将定位误差收敛至约7.5 
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 扩展卡尔曼滤波详解 | 术语定义
  description: 将非线性系统的状态方程和量测方程在当前估计点处作一阶Taylor展开线性化，再套用标准卡尔曼滤波递推公式的估计算法。论文将EKF用于平动点轨道天文导航：状态方程为三体问题动力学方程，量测方程为星光角距与位置的非线性关系，一阶线性化的一步转移阵足以满足精度要求。仿真结果表明EKF在质心旋转系下可将定位误差收敛至约7.5 
  image: /logo.png
permalink: /glossary/navigation/ekf/
---

# 扩展卡尔曼滤波（Extended Kalman Filter）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将非线性系统的状态方程和量测方程在当前估计点处作一阶Taylor展开线性化，再套用标准卡尔曼滤波递推公式的估计算法。论文将EKF用于平动点轨道天文导航：状态方程为三体问题动力学方程，量测方程为星光角距与位置的非线性关系，一阶线性化的一步转移阵足以满足精度要求。仿真结果表明EKF在质心旋转系下可将定位误差收敛至约7.5 km（2颗导航恒星、10 s采样周期）。

## 应用价值

扩展卡尔曼滤波通过线性化处理非线性问题，在平动点轨道天文导航中应用广泛，可收敛至较高精度。

## 相关概念

- [几何精度衰减因子（Geometric Dilution of Precision）](/glossary/navigation/gdop/)
- [甚长基线干涉测量（Very Long Baseline Interferometry）](/glossary/navigation/vlbi/)
- [深空网络（Deep Space Network）](/glossary/navigation/dsn/)

## 参考文献

- 赵书阁 等 - 2013 - 日地系统L2点Halo轨道自主天文导航及精度分析。
- Colagrossi 等 - 2021。
- Pesce 等 - 2023 - Modern spacecraft guidance, navigation, and control。
