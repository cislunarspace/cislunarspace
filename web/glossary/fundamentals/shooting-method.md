---
title: 扫描法（Shooting Method）
description: 求解两点边值问题的一种数值迭代方法，又称边值打靶法。基本思路是猜测缺失的初始条件（本论文中共轭变量初值），对状态方程和共轭方程从初始时刻积分到终端时刻，检查终端条件是否满足，然后调整猜测值重新积分，直到终端指标函数极小化。论文采用扫描法以六个共轭变量初值为参数，以软着陆终端状态为目标，通过参数优化得到满足终端速度和位置
keywords: 扫描法, Shooting Method, 参考系, 坐标变换, 基本概念
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 扫描法（Shooting Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 扫描法详解 | 术语定义
  description: 求解两点边值问题的一种数值迭代方法，又称边值打靶法。基本思路是猜测缺失的初始条件（本论文中共轭变量初值），对状态方程和共轭方程从初始时刻积分到终端时刻，检查终端条件是否满足，然后调整猜测值重新积分，直到终端指标函数极小化。论文采用扫描法以六个共轭变量初值为参数，以软着陆终端状态为目标，通过参数优化得到满足终端速度和位置
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 扫描法详解 | 术语定义
  description: 求解两点边值问题的一种数值迭代方法，又称边值打靶法。基本思路是猜测缺失的初始条件（本论文中共轭变量初值），对状态方程和共轭方程从初始时刻积分到终端时刻，检查终端条件是否满足，然后调整猜测值重新积分，直到终端指标函数极小化。论文采用扫描法以六个共轭变量初值为参数，以软着陆终端状态为目标，通过参数优化得到满足终端速度和位置
  image: /logo.png
permalink: /glossary/fundamentals/shooting-method/
---

# 扫描法（Shooting Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

求解两点边值问题的一种数值迭代方法，又称边值打靶法。基本思路是猜测缺失的初始条件（本论文中共轭变量初值），对状态方程和共轭方程从初始时刻积分到终端时刻，检查终端条件是否满足，然后调整猜测值重新积分，直到终端指标函数极小化。论文采用扫描法以六个共轭变量初值为参数，以软着陆终端状态为目标，通过参数优化得到满足终端速度和位置约束的一组共轭变量初值。

## 应用价值

打靶法是求解两点边值问题的经典方法，在周期轨道搜索和转移轨道设计中广泛应用。

## 相关概念

- [多重打靶法（Multiple Shooting Method）](/glossary/fundamentals/multiple-shooting-method/)
- [连续小推力（Continuous Low Thrust）](/glossary/fundamentals/continuous-low-thrust/)
- [双向链路（Two-Way Link）](/glossary/fundamentals/two-way-link/)
- [惯性坐标系（Inertial Coordinate System）](/glossary/fundamentals/inertial-coordinate-system/)

## 参考文献

- 周净扬和周荻 - 2007 - 月球探测器软着陆精确建模及最优轨道设计
