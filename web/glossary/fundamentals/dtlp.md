---
title: 线性离散周期系统（Discrete-Time Linear Periodic System）
description: 线性周期系统的离散化形式，状态方程为 x(k+1)=A(k)x+B(k)u，系数矩阵满足 A(k+T_L)=A(k)、B(k+T_L)=B(k)。论文将连续误差动力学以维持机动的时间间隔 Delta tau 为步长离散化，再通过定常变换（以一个周期内所有状态、控制量组成增广向量）转化为线性离散定常系统，从而能直接套用经
keywords: 线性离散周期系统, Discrete-Time Linear Periodic System, DTLP, fundamentals
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 线性离散周期系统（Discrete-Time Linear Periodic System）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 线性离散周期系统详解 | 术语定义
  description: 线性周期系统的离散化形式，状态方程为 x(k+1)=A(k)x+B(k)u，系数矩阵满足 A(k+T_L)=A(k)、B(k+T_L)=B(k)。论文将连续误差动力学以维持机动的时间间隔 Delta tau 为步长离散化，再通过定常变换（以一个周期内所有状态、控制量组成增广向量）转化为线性离散定常系统，从而能直接套用经
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 线性离散周期系统详解 | 术语定义
  description: 线性周期系统的离散化形式，状态方程为 x(k+1)=A(k)x+B(k)u，系数矩阵满足 A(k+T_L)=A(k)、B(k+T_L)=B(k)。论文将连续误差动力学以维持机动的时间间隔 Delta tau 为步长离散化，再通过定常变换（以一个周期内所有状态、控制量组成增广向量）转化为线性离散定常系统，从而能直接套用经
  image: /logo.png
permalink: /glossary/fundamentals/dtlp/
---

# 线性离散周期系统（Discrete-Time Linear Periodic System）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

线性周期系统的离散化形式，状态方程为 x(k+1)=A(k)x+B(k)u，系数矩阵满足 A(k+T_L)=A(k)、B(k+T_L)=B(k)。论文将连续误差动力学以维持机动的时间间隔 Delta tau 为步长离散化，再通过定常变换（以一个周期内所有状态、控制量组成增广向量）转化为线性离散定常系统，从而能直接套用经典极点配置定理。

## 应用价值

该系统通过离散化处理可套用经典控制理论定理，适用于平动点轨道的离散控制律设计。

## 相关概念

- [变结构滑模控制（Variable Structure Sliding Mode Control）](/glossary/fundamentals/vssmc/)
- [庞特里亚金最小值原理（Pontryagin Minimum Principle）](/glossary/fundamentals/pmp/)
- [误差函数（Error Function）](/glossary/fundamentals/erf/)

## 参考文献

- 徐明和徐世杰 - 2008 - Halo轨道维持的线性周期控制策略。
