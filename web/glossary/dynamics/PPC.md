---
title: 规定性能控制（Prescribed Performance Control, PPC）
description: 由 Bechlioulis 和 Rovithakis 于 2008 年提出的控制框架。核心思路是：先定义一个单调递减的性能函数来描述跟踪误差允许的边界，再通过误差变换函数将受约束的误差系统映射为无约束系统，然后在变换空间中设计控制器。
keywords: 规定性能控制, Prescribed Performance Control, PPC, PPC, 轨道动力学, 控制理论, 非线性控制, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 规定性能控制（Prescribed Performance Control, PPC）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 规定性能控制详解 | 术语定义
  description: 由 Bechlioulis 和 Rovithakis 于 2008 年提出的控制框架。核心思路是：先定义一个单调递减的性能函数来描述跟踪误差允许的边界，再通过误差变换函数将受约束的误差系统映射为无约束系统，然后在变换空间中设计控制器。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 规定性能控制详解 | 术语定义
  description: 由 Bechlioulis 和 Rovithakis 于 2008 年提出的控制框架。核心思路是：先定义一个单调递减的性能函数来描述跟踪误差允许的边界，再通过误差变换函数将受约束的误差系统映射为无约束系统，然后在变换空间中设计控制器。
  image: /logo.png
permalink: /glossary/dynamics/PPC/
---

# 规定性能控制（Prescribed Performance Control, PPC）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

由 Bechlioulis 和 Rovithakis 于 2008 年提出的控制框架。核心思路是：先定义一个单调递减的性能函数来描述跟踪误差允许的边界，再通过误差变换函数将受约束的误差系统映射为无约束系统，然后在变换空间中设计控制器。控制器设计仅依赖状态反馈，不需要精确模型参数，能同时保证瞬态响应和稳态精度，对模型不确定性和外部扰动具有鲁棒性。

## 应用价值

通过预设性能边界保证系统响应的瞬态和稳态质量，适用于存在模型不确定性和外部扰动的航天器轨道跟踪与姿态控制问题。

## 相关概念

- [规定性能函数（Prescribed Performance Function, PPF）](/glossary/dynamics/PPF/)
- [终端滑模控制（Terminal Sliding Mode Control, TSMC）](/glossary/dynamics/TSMC/)
- [动力下降制导（Powered Descent Guidance）](/glossary/dynamics/PDG/)
- [平面双圆限制性四体问题（Planar Bicircular Restricted Four-Body Problem）](/glossary/dynamics/PBR4BP/)

## 参考文献

- https://doi.org/10.1177/0954410020940892。
- https://doi.org/10.1109/TAC.2008.2006963。
- Liu 等 - 2025 - Rendezvous and docking operations in near rectilinear halo orbits。
