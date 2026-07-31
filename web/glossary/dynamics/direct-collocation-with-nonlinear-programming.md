---
title: 非线性规划直接配点法（Direct Collocation with Nonlinear Programming）
description: 将连续最优控制问题离散化为有限维非线性规划问题的方法。通过在节点间采用Hermite-Simpson等插值多项式近似状态轨线，利用序列二次规划（SQP）等方法求解。
keywords: 非线性规划直接配点法, Direct Collocation with Nonlinear Programming, DCNLP, 轨道动力学, 三体问题, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 非线性规划直接配点法（Direct Collocation with Nonlinear Programming）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 非线性规划直接配点法详解 | 术语定义
  description: 将连续最优控制问题离散化为有限维非线性规划问题的方法。通过在节点间采用Hermite-Simpson等插值多项式近似状态轨线，利用序列二次规划（SQP）等方法求解。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 非线性规划直接配点法详解 | 术语定义
  description: 将连续最优控制问题离散化为有限维非线性规划问题的方法。通过在节点间采用Hermite-Simpson等插值多项式近似状态轨线，利用序列二次规划（SQP）等方法求解。
  image: /logo.png
permalink: /glossary/dynamics/direct-collocation-with-nonlinear-programming/
---

# 非线性规划直接配点法（Direct Collocation with Nonlinear Programming）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 术语来源：Kayama 等 - 2022
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将连续最优控制问题离散化为有限维非线性规划问题的方法。通过在节点间采用Hermite-Simpson等插值多项式近似状态轨线，利用序列二次规划（SQP）等方法求解。

## 应用价值

非线性规划直接配点法反映了地月空间动力学的本质特征。在长时间尺度上，初始条件的微小差异通过非线性规划直接配点法机制被放大，导致轨道行为的不可预测性。这对平动点轨道维持和编目管理都有重要影响。

## 相关概念

- [多段轨迹设计（Multiple Segment Trajectory Design）](/glossary/dynamics/multiple-segment-trajectory-design/)
- [零速度面（Zero-Velocity Surface）](/glossary/dynamics/zero-velocity-surface/)
- [零向量（Null Vector）](/glossary/dynamics/null-vector/)
- [圆形限制性三体问题（Circular Restricted Three-Body Problem）](/glossary/dynamics/circular-restricted-three-body-problem/)

## 参考文献

- Kayama 等 - 2022
