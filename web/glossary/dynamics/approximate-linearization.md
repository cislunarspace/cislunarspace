---
title: 近似线性化（Approximate Linearization）
description: 将非线性动力学方程在参考状态（如参考轨道点）处作泰勒展开并保留一阶项，得到近似线性模型的处理方法。简化了控制器设计，但不可避免地降低控制精度和适用范围，尤其在远离线性化点时误差显著增大。本文在设计LQR控制器时采用了该方法。
keywords: 近似线性化, Approximate Linearization, 轨道动力学, 控制理论, 数值仿真
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 近似线性化（Approximate Linearization）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 近似线性化详解 | 术语定义
  description: 将非线性动力学方程在参考状态（如参考轨道点）处作泰勒展开并保留一阶项，得到近似线性模型的处理方法。简化了控制器设计，但不可避免地降低控制精度和适用范围，尤其在远离线性化点时误差显著增大。本文在设计LQR控制器时采用了该方法。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 近似线性化详解 | 术语定义
  description: 将非线性动力学方程在参考状态（如参考轨道点）处作泰勒展开并保留一阶项，得到近似线性模型的处理方法。简化了控制器设计，但不可避免地降低控制精度和适用范围，尤其在远离线性化点时误差显著增大。本文在设计LQR控制器时采用了该方法。
  image: /logo.png
permalink: /glossary/dynamics/approximate-linearization/
---

# 近似线性化（Approximate Linearization）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将非线性动力学方程在参考状态（如参考轨道点）处作泰勒展开并保留一阶项，得到近似线性模型的处理方法。简化了控制器设计，但不可避免地降低控制精度和适用范围，尤其在远离线性化点时误差显著增大。本文在设计LQR控制器时采用了该方法。

## 应用价值

近似线性化涉及地月空间航天器的运动特性分析和控制问题。在实际任务设计中，利用该方法可以分析轨道稳定性、计算控制策略，或评估摄动因素对轨道的影响，为任务安全性和可靠性提供保障。

## 相关概念

- [遭遇区域（Encounter Region）](/glossary/dynamics/encounter-region/)
- [相对论效应修正（Relativistic Correction）](/glossary/dynamics/relativistic-correction/)
- [直接飞越转移（Direct Fly-By Transfer, DFBT）](/glossary/dynamics/direct-fly-by-transfer-dfbt/)
- [安全转移编队（Safe Transfer Formation）](/glossary/dynamics/safe-transfer-formation/)

## 参考文献

- 人工平动点附近混合推进航天器编队滑模控制保持
