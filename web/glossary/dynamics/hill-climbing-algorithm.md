---
title: 爬山算法（Hill-Climbing Algorithm）
description: 一种局部搜索优化算法，从初始解出发沿梯度上升方向迭代改进直至到达局部最优。论文采用动态爬山算法（最速下降法）对遗传算法找到的初始猜测进行精细收敛，得到局部最小值。
keywords: 爬山算法, Hill-Climbing Algorithm, 轨道动力学, 多体问题, 摄动
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 爬山算法（Hill-Climbing Algorithm）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 爬山算法详解 | 术语定义
  description: 一种局部搜索优化算法，从初始解出发沿梯度上升方向迭代改进直至到达局部最优。论文采用动态爬山算法（最速下降法）对遗传算法找到的初始猜测进行精细收敛，得到局部最小值。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 爬山算法详解 | 术语定义
  description: 一种局部搜索优化算法，从初始解出发沿梯度上升方向迭代改进直至到达局部最优。论文采用动态爬山算法（最速下降法）对遗传算法找到的初始猜测进行精细收敛，得到局部最小值。
  image: /logo.png
permalink: /glossary/dynamics/hill-climbing-algorithm/
---

# 爬山算法（Hill-Climbing Algorithm）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种局部搜索优化算法，从初始解出发沿梯度上升方向迭代改进直至到达局部最优。论文采用动态爬山算法（最速下降法）对遗传算法找到的初始猜测进行精细收敛，得到局部最小值。

## 应用价值

在轨道控制律设计中，该方法通过优化推力方向和大小实现燃料消耗最小化，是深空任务的核心技术。

## 相关概念

- [月球飞越法（Lunar Fly-by Method）](/glossary/dynamics/lunar-fly-by-method/)
- [可达集（Reachability Set）](/glossary/dynamics/reachability-set/)
- [最大能量逃逸轨迹（Maximum-Energy Escape Trajectory）](/glossary/dynamics/maximum-energy-escape-trajectory/)
- [拉普拉斯方法（Laplace Method）](/glossary/dynamics/laplace-method/)

## 参考文献

- /home/ouyangjiahong/Downloads/地月空间相关/output/Parker和Born - 2008 - Direct lunar halo orbit transfers/hybrid_auto/Parker和Born - 2008 - Direct lunar halo orbit transfers.md
