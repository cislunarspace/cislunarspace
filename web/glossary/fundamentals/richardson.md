---
title: Richardson三阶近似（An analytical approximation method for periodic orbits near libration points, de）
description: Richardson于1980年提出的平动点附近周期轨道解析近似方法。该方法将动力学方程在平动点处展开到三阶，利用Lindstedt-Poincaré摄动法消除长期项，得到Halo轨道在平面内和法向的三阶近似解析解。由此可为后续数值微分修正提供初始猜测值，是Halo轨道数值求解的标准第一步。
keywords: Richardson三阶近似, An analytical approximation method for periodic or, 基础概念, 运动方程, 参考系, 参数
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Richardson三阶近似（An analytical approximation method for periodic orbits near libration points, de）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: Richardson三阶近似详解 | 术语定义
  description: Richardson于1980年提出的平动点附近周期轨道解析近似方法。该方法将动力学方程在平动点处展开到三阶，利用Lindstedt-Poincaré摄动法消除长期项，得到Halo轨道在平面内和法向的三阶近似解析解。由此可为后续数值微分修正提供初始猜测值，是Halo轨道数值求解的标准第一步。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Richardson三阶近似详解 | 术语定义
  description: Richardson于1980年提出的平动点附近周期轨道解析近似方法。该方法将动力学方程在平动点处展开到三阶，利用Lindstedt-Poincaré摄动法消除长期项，得到Halo轨道在平面内和法向的三阶近似解析解。由此可为后续数值微分修正提供初始猜测值，是Halo轨道数值求解的标准第一步。
  image: /logo.png
permalink: /glossary/fundamentals/richardson/
---

# Richardson三阶近似（An analytical approximation method for periodic orbits near libration points, de...）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

Richardson于1980年提出的平动点附近周期轨道解析近似方法。该方法将动力学方程在平动点处展开到三阶，利用Lindstedt-Poincaré摄动法消除长期项，得到Halo轨道在平面内和法向的三阶近似解析解。由此可为后续数值微分修正提供初始猜测值，是Halo轨道数值求解的标准第一步。

## 应用价值

Richardson三阶近似是平动点周期轨道解析设计的标准方法。在Halo轨道任务设计中，该方法首先提供满足动力学方程的解析初始猜测，然后通过数值微分修正得到精确周期轨道。由于解析解直接给出轨道的几何特征（如幅值、相位），设计者可据此快速评估轨道可行性，大幅缩短轨道设计周期。

## 相关概念

- [质心旋转坐标系（Center-of-Mass Rotating Frame）](/glossary/fundamentals/center-of-mass-rotating-frame/)
- [质量参数（Mass Parameter）](/glossary/fundamentals/mass-parameter/)
- [雅可比常数（Jacobi Constant, JC）](/glossary/dynamics/jacobi-constant-jc/)
- [归一化单位（Normalized Units）](/glossary/fundamentals/normalized-units/)
## 参考文献

- 彭坤 等 - 2016 - 基于不变流形的地月L2点Halo轨道转移轨道设计
