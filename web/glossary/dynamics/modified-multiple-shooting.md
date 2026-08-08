---
title: 修改型多打靶法（Modified Multiple Shooting）
description: 一种迭代缩减耦合机动量的多打靶算法。以截面强制精化所得轨道为初值，将耦合点的速度跳变作为待消除变量引入多打靶方程组，逐步缩小机动矢量幅值直至收敛到给定容差。当物理上存在零代价转移时，该方法可将耦合机动降至零。
keywords: Modified Multiple Shooting, 三体问题, 修改型多打靶法, 动力学分叉, 轨道力学
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 修改型多打靶法（Modified Multiple Shooting）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 修改型多打靶法详解 | 术语定义
  description: 一种迭代缩减耦合机动量的多打靶算法。以截面强制精化所得轨道为初值，将耦合点的速度跳变作为待消除变量引入多打靶方程组，逐步缩小机动矢量幅值直至收敛到给定容差。当物理上存在零代价转移时，该方法可将耦合机动降至零。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 修改型多打靶法详解 | 术语定义
  description: 一种迭代缩减耦合机动量的多打靶算法。以截面强制精化所得轨道为初值，将耦合点的速度跳变作为待消除变量引入多打靶方程组，逐步缩小机动矢量幅值直至收敛到给定容差。当物理上存在零代价转移时，该方法可将耦合机动降至零。
  image: /logo.png
permalink: /glossary/dynamics/modified-multiple-shooting/
---

# 修改型多打靶法（Modified Multiple Shooting）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种迭代缩减耦合机动量的多打靶算法。以截面强制精化所得轨道为初值，将耦合点的速度跳变作为待消除变量引入多打靶方程组，逐步缩小机动矢量幅值直至收敛到给定容差。当物理上存在零代价转移时，该方法可将耦合机动降至零。

## 应用价值

在轨道设计和控制中，该概念对理解航天器在地月空间中的运动特性和任务设计具有重要作用。

## 相关概念

- 最小范数解（Minimum Norm Solution）
- 刚体动力学（Rigid Body Dynamics）
- 变长设计空间（Variable-Size Design Space, VSDS）
- 分析梯度（Analytical Gradient）

## 参考文献

- Canalias and Masdemont, Acta Astronautica, 2008
