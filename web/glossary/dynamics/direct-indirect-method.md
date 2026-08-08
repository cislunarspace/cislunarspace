---
title: 直接/间接法（Direct/Indirect Method）
description: 一种混合轨迹优化方法：用间接法（变分法/协态方程）推导最优控制方向，减少控制参数数量；用直接法（非线性规划）处理边界条件和目标函数。兼顾间接法的控制降维优势和直接法对收敛初值不敏感的优点，将最优控制问题转化为小规模参数优化。
keywords: 直接/间接法, Direct/Indirect Method, 轨道动力学, 姿态控制, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 直接/间接法（Direct/Indirect Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 直接/间接法详解 | 术语定义
  description: 一种混合轨迹优化方法：用间接法（变分法/协态方程）推导最优控制方向，减少控制参数数量；用直接法（非线性规划）处理边界条件和目标函数。兼顾间接法的控制降维优势和直接法对收敛初值不敏感的优点，将最优控制问题转化为小规模参数优化。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 直接/间接法详解 | 术语定义
  description: 一种混合轨迹优化方法：用间接法（变分法/协态方程）推导最优控制方向，减少控制参数数量；用直接法（非线性规划）处理边界条件和目标函数。兼顾间接法的控制降维优势和直接法对收敛初值不敏感的优点，将最优控制问题转化为小规模参数优化。
  image: /logo.png
permalink: /glossary/dynamics/direct-indirect-method/
---

# 直接/间接法（Direct/Indirect Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：Yang - 2007 - Earth-moon trajectory optimization using solar electric propulsion
>
> 站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种混合轨迹优化方法：用间接法（变分法/协态方程）推导最优控制方向，减少控制参数数量；用直接法（非线性规划）处理边界条件和目标函数。兼顾间接法的控制降维优势和直接法对收敛初值不敏感的优点，将最优控制问题转化为小规模参数优化。

## 应用价值

该术语在地月空间任务中具有重要应用价值。在轨道设计阶段，工程师利用相关理论进行轨迹优化；在导航与轨道确定中，用于提升测量精度；在姿态控制与轨道保持任务中，确保航天器稳定运行。具体应用中，可结合任务需求进行参数优化和算法适配，提高任务成功率和资源利用效率。

## 相关概念

- 特征指数（Characteristic Exponents）
- 捕获对接段（Capture Docking Phase）
- 月球借力转移（Lunar Flyby Transfer）

## 参考文献

- Yang - 2007 - Earth-moon trajectory optimization using solar electric propulsion
