---
title: 盒覆盖（Box Covering）
description: 基于GAIO软件实现的集合覆盖方法。通过对庞加莱映射所在的高维空间进行网格细分，逐步构造越来越小的矩形盒子族来逼近目标集合。仅保留与目标集合相交的盒子，形成对不变流形与截面交点的离散近似。该方法能够系统地检测不同限制性三体问题流形之间的连接点，并以预设精度控制位形空间中的交点误差。
keywords: 盒覆盖, Box Covering, 轨道优化, 控制理论, 非线性控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 盒覆盖（Box Covering）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 盒覆盖详解 | 术语定义
  description: 基于GAIO软件实现的集合覆盖方法。通过对庞加莱映射所在的高维空间进行网格细分，逐步构造越来越小的矩形盒子族来逼近目标集合。仅保留与目标集合相交的盒子，形成对不变流形与截面交点的离散近似。该方法能够系统地检测不同限制性三体问题流形之间的连接点，并以预设精度控制位形空间中的交点误差。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 盒覆盖详解 | 术语定义
  description: 基于GAIO软件实现的集合覆盖方法。通过对庞加莱映射所在的高维空间进行网格细分，逐步构造越来越小的矩形盒子族来逼近目标集合。仅保留与目标集合相交的盒子，形成对不变流形与截面交点的离散近似。该方法能够系统地检测不同限制性三体问题流形之间的连接点，并以预设精度控制位形空间中的交点误差。
  image: /logo.png
permalink: /glossary/dynamics/box-covering/
---

# 盒覆盖（Box Covering）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

基于GAIO软件实现的集合覆盖方法。通过对庞加莱映射所在的高维空间进行网格细分，逐步构造越来越小的矩形盒子族来逼近目标集合。仅保留与目标集合相交的盒子，形成对不变流形与截面交点的离散近似。该方法能够系统地检测不同限制性三体问题流形之间的连接点，并以预设精度控制位形空间中的交点误差。

## 应用价值

基于该术语的定义，它在地月空间任务中具有重要应用价值。例如在轨道设计中，可利用其特性进行转移轨道优化；在轨道维持中，能够实现精确的轨道控制；在导航定轨中，可用于提高状态估计精度；在任务规划中，可辅助决策轨道转移时机和策略。具体的工程应用需结合任务约束和轨道特性进行综合分析。

## 相关概念

- [微分改正法](/glossary/fundamentals/differential-correction/)
- [间接法](/glossary/dynamics/indirect-methods/)
- [共振条件](/glossary/dynamics/resonance-condition/)
- [低推力平衡点](/glossary/dynamics/low-thrust-equilibrium-point/)
## 参考文献

- Dellnitz and Junge, 2002; Zanzottera et al., 2012
