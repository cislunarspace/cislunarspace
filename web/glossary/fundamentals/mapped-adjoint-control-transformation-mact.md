---
title: 映射伴随控制变换（Mapped Adjoint Control Transformation, MACT）
description: 一种提升间接法收敛域的技术。将协态变量从原始坐标系映射到新的参数空间，使优化初值对协态猜测的敏感性降低，从而让打靶法能在更大的初值范围内收敛。对推力加速度极低、需要数百圈螺旋飞行的转移问题尤其有效。
keywords: MACT, Mapped Adjoint Control Transformation, MACT, 坐标系, 映射伴随控制变换, 航天器, 轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 映射伴随控制变换（Mapped Adjoint Control Transformation, MACT）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 映射伴随控制变换详解 | 术语定义
  description: 一种提升间接法收敛域的技术。将协态变量从原始坐标系映射到新的参数空间，使优化初值对协态猜测的敏感性降低，从而让打靶法能在更大的初值范围内收敛。对推力加速度极低、需要数百圈螺旋飞行的转移问题尤其有效。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 映射伴随控制变换详解 | 术语定义
  description: 一种提升间接法收敛域的技术。将协态变量从原始坐标系映射到新的参数空间，使优化初值对协态猜测的敏感性降低，从而让打靶法能在更大的初值范围内收敛。对推力加速度极低、需要数百圈螺旋飞行的转移问题尤其有效。
  image: /logo.png
permalink: /glossary/fundamentals/mapped-adjoint-control-transformation-mact/
---

# 映射伴随控制变换（Mapped Adjoint Control Transformation, MACT）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种提升间接法收敛域的技术。将协态变量从原始坐标系映射到新的参数空间，使优化初值对协态猜测的敏感性降低，从而让打靶法能在更大的初值范围内收敛。对推力加速度极低、需要数百圈螺旋飞行的转移问题尤其有效。

## 应用价值

在航天器动力学分析与设计中，该方法用于实现航天器的精确姿态和轨道控制，是任务成功的关键技术。

## 相关概念

- [亚轨道（Suborbital）](/glossary/fundamentals/suborbital/)
- [相对运动最优控制（Optimal Relative Motion Control）](/glossary/fundamentals/optimal-relative-motion-control/)
- [火箭分级（Rocket Staging）](/glossary/fundamentals/rocket-staging/)
- [叉乘矩阵（Cross-Product Matrix / Skew-Symmetric Matrix）](/glossary/fundamentals/cross-product-matrix-skew-symmetric-matrix/)

## 参考文献

- Patrick 等 - 2023 - Hybrid optimization of high-fidelity low-thrust transfers to the lunar gateway