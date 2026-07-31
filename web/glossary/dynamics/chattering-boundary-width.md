---
title: 消抖界宽（Chattering Boundary Width）
description: 滑模控制中饱和函数设定的边界层宽度参数。在该宽度范围内，控制信号与偏差成线性关系，实现平滑切换；超出界宽后，控制信号取固定值。ζ越小，控制精度越高但抖振风险越大；ζ越大，抖振抑制越好但控制精度下降。需要在两者之间取折中。
keywords: 消抖界宽, Chattering Boundary Width, ζ, 轨道优化, 控制理论
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 消抖界宽（Chattering Boundary Width）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 消抖界宽详解 | 术语定义
  description: 滑模控制中饱和函数设定的边界层宽度参数。在该宽度范围内，控制信号与偏差成线性关系，实现平滑切换；超出界宽后，控制信号取固定值。ζ越小，控制精度越高但抖振风险越大；ζ越大，抖振抑制越好但控制精度下降。需要在两者之间取折中。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 消抖界宽详解 | 术语定义
  description: 滑模控制中饱和函数设定的边界层宽度参数。在该宽度范围内，控制信号与偏差成线性关系，实现平滑切换；超出界宽后，控制信号取固定值。ζ越小，控制精度越高但抖振风险越大；ζ越大，抖振抑制越好但控制精度下降。需要在两者之间取折中。
  image: /logo.png
permalink: /glossary/dynamics/chattering-boundary-width/
---

# 消抖界宽（Chattering Boundary Width）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

滑模控制中饱和函数设定的边界层宽度参数。在该宽度范围内，控制信号与偏差成线性关系，实现平滑切换；超出界宽后，控制信号取固定值。ζ越小，控制精度越高但抖振风险越大；ζ越大，抖振抑制越好但控制精度下降。需要在两者之间取折中。

## 应用价值

基于该术语的定义，它在地月空间任务中具有重要应用价值。例如在轨道设计中，可利用其特性进行转移轨道优化；在轨道维持中，能够实现精确的轨道控制；在导航定轨中，可用于提高状态估计精度；在任务规划中，可辅助决策轨道转移时机和策略。具体的工程应用需结合任务约束和轨道特性进行综合分析。

## 相关概念

- [微分改正法](/glossary/fundamentals/differential-correction/)
- [间接法](/glossary/dynamics/indirect-methods/)
- [共振条件](/glossary/dynamics/resonance-condition/)
- [低推力平衡点](/glossary/dynamics/low-thrust-equilibrium-point/)
## 参考文献

- 人工平动点附近混合推进航天器编队滑模控制保持
