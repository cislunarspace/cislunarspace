---
title: 微分修正算法（Differential Correction Algorithm）
description: 轨道设计中的核心迭代算法。将控制变量与约束变量之间的非线性关系在初值处一阶泰勒展开，得到线性化的雅克比矩阵映射，再通过广义逆求解修正量。每次迭代更新控制变量，逐步满足目标约束。文中用于在高精度模型下求解地月转移轨道的近月点参数。
keywords: 微分修正算法, Differential Correction Algorithm, 轨道力学, 数值积分, 坐标系统
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 微分修正算法（Differential Correction Algorithm）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 微分修正算法详解 | 术语定义
  description: 轨道设计中的核心迭代算法。将控制变量与约束变量之间的非线性关系在初值处一阶泰勒展开，得到线性化的雅克比矩阵映射，再通过广义逆求解修正量。每次迭代更新控制变量，逐步满足目标约束。文中用于在高精度模型下求解地月转移轨道的近月点参数。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 微分修正算法详解 | 术语定义
  description: 轨道设计中的核心迭代算法。将控制变量与约束变量之间的非线性关系在初值处一阶泰勒展开，得到线性化的雅克比矩阵映射，再通过广义逆求解修正量。每次迭代更新控制变量，逐步满足目标约束。文中用于在高精度模型下求解地月转移轨道的近月点参数。
  image: /logo.png
permalink: /glossary/fundamentals/differential-correction-algorithm/
---

# 微分修正算法（Differential Correction Algorithm）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：学术论文与专业资料整理
>
> 站长地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

轨道设计中的核心迭代算法。将控制变量与约束变量之间的非线性关系在初值处一阶泰勒展开，得到线性化的雅克比矩阵映射，再通过广义逆求解修正量。每次迭代更新控制变量，逐步满足目标约束。文中用于在高精度模型下求解地月转移轨道的近月点参数。

## 应用价值

微分修正算法是轨道设计中的核心迭代算法，通过一阶泰勒展开和广义逆求解修正量。是求解边界值问题的基础方法。

## 相关概念

- [轨道状态向量（Orbital State Vector）](/glossary/fundamentals/orbital-state-vector/)
- [坐标时（Coordinate Time）](/glossary/fundamentals/coordinate-time/)
- [Hill坐标系（Hill Frame）](/glossary/fundamentals/hill-frame/)
- [开普勒定律（Kepler's Laws）](/glossary/fundamentals/keplers-laws/)

## 参考文献

- 曹鹏飞 等 - 2022 - 嫦娥五号探测器多圈调相地月转移应急轨道设计与分析
