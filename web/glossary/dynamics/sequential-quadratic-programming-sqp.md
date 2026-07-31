---
title: 顺序二次规划（Sequential Quadratic Programming, SQP）
description: 求解非线性约束优化问题的迭代方法，通过在每一步求解二次规划子问题来逼近原问题的解。
keywords: 顺序二次规划, Sequential Quadratic Programming, SQP, 动力学, 控制, 优化, 稳定性分析
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 顺序二次规划（Sequential Quadratic Programming, SQP）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 顺序二次规划（Sequential Quadratic Programming, SQP）详解 | 术语定义
  description: 求解非线性约束优化问题的迭代方法，通过在每一步求解二次规划子问题来逼近原问题的解。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 顺序二次规划（Sequential Quadratic Programming, SQP）详解 | 术语定义
  description: 求解非线性约束优化问题的迭代方法，通过在每一步求解二次规划子问题来逼近原问题的解。
  image: /logo.png
permalink: /glossary/dynamics/sequential-quadratic-programming-sqp/
---

# 顺序二次规划（Sequential Quadratic Programming, SQP）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

求解非线性约束优化问题的迭代方法，通过在每一步求解二次规划子问题来逼近原问题的解。

## 应用价值

该方法在多目标轨迹优化中用于平衡冲突目标（如燃料消耗与飞行时间）。通过分析帕累托前沿，设计者可以理解性能边界，选择符合任务约束的最优解。

## 相关概念

- [雅可比积分（Jacobi Integral）](/glossary/dynamics/jacobi-integral/)
- [科氏定理（Coriolis Theorem）](/glossary/dynamics/coriolis-theorem/)
- [速度函数（Velocity Function）](/glossary/dynamics/velocity-function/)

## 参考文献

- Cui 等 - 2025
