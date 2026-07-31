---
title: 终端指标函数（Terminal Performance Index）
description: 衡量软着陆终端状态质量的加权目标函数。论文定义Omega为各终端速度分量绝对值和各方向位置偏差绝对值的加权和（k1|VxL(tf)|+k2|VyL(tf)|+k3|VzL(tf)|+k4|xL(tf)-xLr|+k5|yL(tf)-yLr|+k6|zL(tf)-zLr|）。在扫描法求解过程中，以共轭变量初值为参数优化此
keywords: 终端指标函数, Terminal Performance Index, 天体力学, 坐标系统, 轨道要素
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 终端指标函数（Terminal Performance Index）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 终端指标函数详解 | 术语定义
  description: 衡量软着陆终端状态质量的加权目标函数。论文定义Omega为各终端速度分量绝对值和各方向位置偏差绝对值的加权和（k1|VxL(tf)|+k2|VyL(tf)|+k3|VzL(tf)|+k4|xL(tf)-xLr|+k5|yL(tf)-yLr|+k6|zL(tf)-zLr|）。在扫描法求解过程中，以共轭变量初值为参数优化此
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 终端指标函数详解 | 术语定义
  description: 衡量软着陆终端状态质量的加权目标函数。论文定义Omega为各终端速度分量绝对值和各方向位置偏差绝对值的加权和（k1|VxL(tf)|+k2|VyL(tf)|+k3|VzL(tf)|+k4|xL(tf)-xLr|+k5|yL(tf)-yLr|+k6|zL(tf)-zLr|）。在扫描法求解过程中，以共轭变量初值为参数优化此
  image: /logo.png
permalink: /glossary/fundamentals/terminal-performance-index/
---

# 终端指标函数（Terminal Performance Index）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

衡量软着陆终端状态质量的加权目标函数。论文定义Omega为各终端速度分量绝对值和各方向位置偏差绝对值的加权和（k1|VxL(tf)|+k2|VyL(tf)|+k3|VzL(tf)|+k4|xL(tf)-xLr|+k5|yL(tf)-yLr|+k6|zL(tf)-zLr|）。在扫描法求解过程中，以共轭变量初值为参数优化此函数使其极小化，从而获得满足终端约束的最优解。加权系数ki反映各项终端误差的相对重要性。

## 应用价值

该基础概念是地月空间轨道力学和任务分析的理论基础，正确理解其内涵对于进行轨道设计、任务规划和性能评估具有重要意义。

## 相关概念

- [层次分析法（Analytic Hierarchy Process）](/glossary/fundamentals/analytic-hierarchy-process/)
- [共态方程（Costate Equations）](/glossary/fundamentals/costate-equations/)
- [速度增量（Delta-v, Δv）](/glossary/fundamentals/delta-v-v/)
- [连分式（Continued Fraction）](/glossary/fundamentals/continued-fraction/)

## 参考文献

- 周净扬和周荻 - 2007 - 月球探测器软着陆精确建模及最优轨道设计
