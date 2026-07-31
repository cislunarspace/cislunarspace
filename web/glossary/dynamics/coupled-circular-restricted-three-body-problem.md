---
title: 耦合圆型限制性三体问题（Coupled Circular Restricted Three-Body Problem）
description: 将两个圆型限制性三体问题（CR3BP）通过坐标转换拼接在一起的建模方法。典型用法是把日地 CR3BP 和地月 CR3BP 拼接，用日地系统的不稳定流形描述从日地平动点出发的段落，用地月系统描述近月段落，在两个系统的切换点（通常取地月质心在日地旋转坐标系中的位置）通过坐标转换实现衔接。这种方法用分段三体模型近似四体...
keywords: 耦合圆型限制性三体问题, Coupled Circular Restricted Three-Body Problem, Coupled CR3BP, 轨道优化, 控制理论
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 耦合圆型限制性三体问题（Coupled Circular Restricted Three-Body Problem）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 耦合圆型限制性三体问题详解 | 术语定义
  description: 将两个圆型限制性三体问题（CR3BP）通过坐标转换拼接在一起的建模方法。典型用法是把日地 CR3BP 和地月 CR3BP 拼接，用日地系统的不稳定流形描述从日地平动点出发的段落，用地月系统描述近月段落，在两个系统的切换点（通常取地月质心在日地旋转坐标系中的位置）通过坐标转换实现衔接。这种方法用分段三体模型近似四体...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 耦合圆型限制性三体问题详解 | 术语定义
  description: 将两个圆型限制性三体问题（CR3BP）通过坐标转换拼接在一起的建模方法。典型用法是把日地 CR3BP 和地月 CR3BP 拼接，用日地系统的不稳定流形描述从日地平动点出发的段落，用地月系统描述近月段落，在两个系统的切换点（通常取地月质心在日地旋转坐标系中的位置）通过坐标转换实现衔接。这种方法用分段三体模型近似四体...
  image: /logo.png
permalink: /glossary/dynamics/coupled-circular-restricted-three-body-problem/
---

# 耦合圆型限制性三体问题（Coupled Circular Restricted Three-Body Problem）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将两个圆型限制性三体问题（CR3BP）通过坐标转换拼接在一起的建模方法。典型用法是把日地 CR3BP 和地月 CR3BP 拼接，用日地系统的不稳定流形描述从日地平动点出发的段落，用地月系统描述近月段落，在两个系统的切换点（通常取地月质心在日地旋转坐标系中的位置）通过坐标转换实现衔接。这种方法用分段三体模型近似四体动力学，计算成本远低于完整历表模型。

## 应用价值

基于该术语的定义，它在地月空间任务中具有重要应用价值。例如在轨道设计中，可利用其特性进行转移轨道优化；在轨道维持中，能够实现精确的轨道控制；在导航定轨中，可用于提高状态估计精度；在任务规划中，可辅助决策轨道转移时机和策略。具体的工程应用需结合任务约束和轨道特性进行综合分析。

## 相关概念

- [微分改正法](/glossary/fundamentals/differential-correction/)
- [间接法](/glossary/dynamics/indirect-methods/)
- [共振条件](/glossary/dynamics/resonance-condition/)
- [低推力平衡点](/glossary/dynamics/low-thrust-equilibrium-point/)
## 参考文献

- Van Der Weg and Vasile, 2016, Sun-Earth L1 and L2 to Moon Transfers Exploiting Natural Dynamics
