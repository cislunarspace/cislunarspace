---
title: 切向推力（Tangential Thrust）
description: 推力方向始终与速度矢量平行（即沿轨迹切线方向）的推力模式。指数正弦曲线的解析推导基于切向推力假设（α = γ），在此假设下推力大小和极角变化率均由形状参数唯一确定。切向推力是最简单的推力方向假设，实际低推力发动机的推力方向通常需要在最优控制框架中优化。
keywords: 切向推力, Tangential Thrust, 轨道力学, 基础概念, 参考系
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 切向推力（Tangential Thrust）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 切向推力详解 | 术语定义
  description: 推力方向始终与速度矢量平行（即沿轨迹切线方向）的推力模式。指数正弦曲线的解析推导基于切向推力假设（α = γ），在此假设下推力大小和极角变化率均由形状参数唯一确定。切向推力是最简单的推力方向假设，实际低推力发动机的推力方向通常需要在最优控制框架中优化。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 切向推力详解 | 术语定义
  description: 推力方向始终与速度矢量平行（即沿轨迹切线方向）的推力模式。指数正弦曲线的解析推导基于切向推力假设（α = γ），在此假设下推力大小和极角变化率均由形状参数唯一确定。切向推力是最简单的推力方向假设，实际低推力发动机的推力方向通常需要在最优控制框架中优化。
  image: /logo.png
permalink: /glossary/fundamentals/tangential-thrust/
---

# 切向推力（Tangential Thrust）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

推力方向始终与速度矢量平行（即沿轨迹切线方向）的推力模式。指数正弦曲线的解析推导基于切向推力假设（α = γ），在此假设下推力大小和极角变化率均由形状参数唯一确定。切向推力是最简单的推力方向假设，实际低推力发动机的推力方向通常需要在最优控制框架中优化。

## 应用价值

在线性二次型最优控制框架下，通过选取合适的权重矩阵Q和R，可以在跟踪精度与控制能耗之间取得平衡，适用于地月空间轨道保持的实时控制。

## 相关概念

- 月心旋转坐标系（Moon-Centered Rotating Frame）
- [有效势能（Effective Pseudo-Potential）](/glossary/fundamentals/effective-pseudo-potential/)
- 比冲（Specific Impulse）
- 月球二体能量（Two-Body Energy with Respect to the Moon）

## 参考文献

- Izzo - 2006 - Lambert's problem for exponential sinusoids
