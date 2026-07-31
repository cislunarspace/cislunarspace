---
title: 形状基方法（Shape-Based Method）
description: 一种用预设解析函数（如指数正弦曲线、多项式、春分元表达式等）逼近低推力轨迹形状的近似设计方法。与直接法和间接法不同，形状基方法不求解完整的最优控制问题，而是用少量形状参数描述候选轨迹族，再通过优化搜索最佳参数组合。优点是计算快、适合全局搜索；缺点是轨迹形状受限于所选函数族，不一定能表达真正的最优解。
keywords: 形状基方法, Shape-Based Method, 轨道动力学, 多体问题, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 形状基方法（Shape-Based Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 形状基方法详解 | 术语定义
  description: 一种用预设解析函数（如指数正弦曲线、多项式、春分元表达式等）逼近低推力轨迹形状的近似设计方法。与直接法和间接法不同，形状基方法不求解完整的最优控制问题，而是用少量形状参数描述候选轨迹族，再通过优化搜索最佳参数组合。优点是计算快、适合全局搜索；缺点是轨迹形状受限于所选函数族，不一定能表达真正的最优解。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 形状基方法详解 | 术语定义
  description: 一种用预设解析函数（如指数正弦曲线、多项式、春分元表达式等）逼近低推力轨迹形状的近似设计方法。与直接法和间接法不同，形状基方法不求解完整的最优控制问题，而是用少量形状参数描述候选轨迹族，再通过优化搜索最佳参数组合。优点是计算快、适合全局搜索；缺点是轨迹形状受限于所选函数族，不一定能表达真正的最优解。
  image: /logo.png
permalink: /glossary/dynamics/shapebased-method/
---

# 形状基方法（Shape-Based Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：学术论文与专业资料整理
>
> 站长地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种用预设解析函数（如指数正弦曲线、多项式、春分元表达式等）逼近低推力轨迹形状的近似设计方法。与直接法和间接法不同，形状基方法不求解完整的最优控制问题，而是用少量形状参数描述候选轨迹族，再通过优化搜索最佳参数组合。优点是计算快、适合全局搜索；缺点是轨迹形状受限于所选函数族，不一定能表达真正的最优解。

## 应用价值

形状基方法用预设解析函数逼近低推力轨迹形状，计算快、适合全局搜索，但受函数族限制不一定能找到最优解。在低推力轨迹设计的初始搜索阶段具有优势。

## 相关概念

- [平动点轨道（Libration Point Orbit）](/glossary/dynamics/libration-point-orbit/)
- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)
- [脉冲机动（Impulsive Maneuver）](/glossary/dynamics/impulsive-maneuver/)
- [Halo轨道（Halo Orbit）](/glossary/dynamics/halo-orbit/)

## 参考文献

- Izzo - 2006 - Lambert's problem for exponential sinusoids
- Conway - 2010 - Spacecraft trajectory optimization
