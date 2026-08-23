---
title: 滑动规则（Sliding Rule）
description: 在脉冲交会机动等值线图上通过几何滑动快速定位初始与终端最优滑行时间的解析法则。
keywords: 滑动规则, Sliding Rule, 动力学, 轨道交会, 兰伯特问题
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 滑动规则（Sliding Rule）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/dynamics/sliding-rule/
---

# 滑动规则（Sliding Rule）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

滑动规则（Sliding Rule）是一种在轨道交会与多脉冲转移设计中，利用速度增量 $\Delta v$ 等值线图（Contour Map），通过几何投影与特征直线滑动快速确定追踪航天器在初始轨道和目标轨道上最优滑行时间（Coasting Time）的全局参数优化法则。

## 物理机制与工程价值

在航天器两脉冲或多脉冲轨道交会问题中，通常将总任务时间划分为初始停泊轨道滑行段 $t_{\text{coast1}}$、兰伯特转移轨道飞行段 $T$ 和终端目标轨道滑行段 $t_{\text{coast2}}$。由劳登（Lawden）引向矢量理论可知，最优滑行时间点的必要条件对应于主引向矢量模值导数过零。

滑动规则将这一抽象变分极值条件转化为直观的几何投影搜索：

1. 给定初始两航天器相对相位角与固定转移时间后，允许初始滑行对应在 $(\Delta \theta, T)$ 等值线平面上沿斜率为 $k = 1/(\omega_1 - \omega_2)$ 的特征方向线连续滑动采样（$\omega_1, \omega_2$ 分别为主从航天器的轨道角速度）；
2. 终端目标轨道的滑行则对应于沿垂直方向的等相位线滑动；
3. 当滑动方向与速度增量等值线相切时，即达到局部极值点。

该规则有效规避了传统非线性规划由于初值猜测不良导致的局部次优解陷阱，极大提高了多圈兰伯特交会、地月空间编队重构及远程交会轨道设计的全局搜索效率。

## 相关概念

- [双脉冲交会（Two-Impulse Rendezvous）](/glossary/dynamics/two-impulse-rendezvous/)
- [轨道交会（Orbital Rendezvous）](/glossary/navigation/orbital-rendezvous/)
- [有效飞行时间（Effective Time of Flight）](/glossary/orbits/effective-time-of-flight/)
- [网格搜索方法（Grid Search Method）](/glossary/fundamentals/grid-search-method/)

## 参考文献

- Shen, H. X., & Tsiotras, P. Optimal two-impulse rendezvous using multiple-revolution Lambert solutions. Journal of Guidance, Control, and Dynamics, 2003, 26(1): 50-61.
- Lawden, D. F. Optimal Trajectories for Space Navigation. Butterworths, 1963.
