---
title: 串行求解策略（Serial Solution Strategy）
description: 一种从初步设计到精确设计分两步求解的轨道优化策略。第一步在简化模型（如多圆锥截线法、混合轨道模型）中快速求得满足约束的初步解；第二步以初步解为初值，在包含完整摄动因素的高精度模型中进行精确优化。初步设计降低了精确求解对初值的敏感性，显著加快了收敛速度。
keywords: 串行求解策略, Serial Solution Strategy, , 动力学, 非线性, 稳定性, 流形, 控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 串行求解策略（Serial Solution Strategy）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 串行求解策略（Serial Solution Strategy）详解 | 术语定义
  description: 一种从初步设计到精确设计分两步求解的轨道优化策略。第一步在简化模型（如多圆锥截线法、混合轨道模型）中快速求得满足约束的初步解；第二步以初步解为初值，在包含完整摄动因素的高精度模型中进行精确优化。初步设计降低了精确求解对初值的敏感性，显著加快了收敛速度。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 串行求解策略（Serial Solution Strategy）详解 | 术语定义
  description: 一种从初步设计到精确设计分两步求解的轨道优化策略。第一步在简化模型（如多圆锥截线法、混合轨道模型）中快速求得满足约束的初步解；第二步以初步解为初值，在包含完整摄动因素的高精度模型中进行精确优化。初步设计降低了精确求解对初值的敏感性，显著加快了收敛速度。
  image: /logo.png
permalink: /glossary/dynamics/serial-solution-strategy/
---

# 串行求解策略（Serial Solution Strategy）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种从初步设计到精确设计分两步求解的轨道优化策略。第一步在简化模型（如多圆锥截线法、混合轨道模型）中快速求得满足约束的初步解；第二步以初步解为初值，在包含完整摄动因素的高精度模型中进行精确优化。初步设计降低了精确求解对初值的敏感性，显著加快了收敛速度。

## 应用价值

该术语在地月转移轨道设计中被广泛应用，用于优化转移轨迹、降低速度增量消耗。工程师在设计地月空间任务时，可以利用这一概念评估不同轨道的性能差异，选择满足任务约束的最优方案。此外，它也可用于分析轨道机动方案的可行性，支持任务规划与决策。

## 相关概念

- [椭圆限制性三体问题（Elliptic Restricted Three-Body Problem）](/glossary/dynamics/elliptic-restricted-three-body-problem/)
- [动力一致性（Dynamical Consistency）](/glossary/dynamics/dynamical-consistency/)
- [组合协方差（Combined Covariance）](/glossary/dynamics/combined-covariance/)
- [尼霍罗舍夫估计（Nekhorosev Estimates）](/glossary/dynamics/nekhorosev-estimates/)

## 参考文献

- 陆林 等 - 2021 - 载人月球极地探测地月转移轨道设计
