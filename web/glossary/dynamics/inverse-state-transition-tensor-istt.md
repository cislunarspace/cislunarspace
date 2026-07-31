---
title: 逆状态转移张量（Inverse State Transition Tensor, ISTT）
description: 从终点时刻反向积分得到的高阶状态转移张量。与正向STT相乘，可快速获得任意中间时段的状态转移关系，无需重复积分，适用于中途修正中修正时刻频繁变动的场景。
keywords: 逆状态转移张量, Inverse State Transition Tensor, ISTT, ISTT, 动力学, 控制, 优化
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 逆状态转移张量（Inverse State Transition Tensor, ISTT）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 逆状态转移张量（Inverse State Transition Tensor, ISTT）详解 | 术语定义
  description: 从终点时刻反向积分得到的高阶状态转移张量。与正向STT相乘，可快速获得任意中间时段的状态转移关系，无需重复积分，适用于中途修正中修正时刻频繁变动的场景。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 逆状态转移张量（Inverse State Transition Tensor, ISTT）详解 | 术语定义
  description: 从终点时刻反向积分得到的高阶状态转移张量。与正向STT相乘，可快速获得任意中间时段的状态转移关系，无需重复积分，适用于中途修正中修正时刻频繁变动的场景。
  image: /logo.png
permalink: /glossary/dynamics/inverse-state-transition-tensor-istt/
---

# 逆状态转移张量（Inverse State Transition Tensor, ISTT）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

从终点时刻反向积分得到的高阶状态转移张量。与正向STT相乘，可快速获得任意中间时段的状态转移关系，无需重复积分，适用于中途修正中修正时刻频繁变动的场景。

## 应用价值

雅可比积分在地月三体系统中守恒，但在不同子系统之间切换时需要能量改变。追踪雅可比常数的变化可以揭示电推进弧段与弹道弧段的能量交替规律，为低能转移轨道设计提供理论依据。

## 相关概念

- [雅可比积分（Jacobi Integral）](/glossary/dynamics/jacobi-integral/)
- [科氏定理（Coriolis Theorem）](/glossary/dynamics/coriolis-theorem/)
- [速度函数（Velocity Function）](/glossary/dynamics/velocity-function/)

## 参考文献

- Park and Scheeres 2007
