---
title: 拍卖算法（Auction Algorithm）
description: 一种低计算成本的调度方法，通过竞拍机制将客户卫星分配给服务航天器，并考虑相位约束。
keywords: 拍卖算法, Auction Algorithm, AA, 调度, 航天器分配, 相位约束
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 拍卖算法（Auction Algorithm）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 拍卖算法详解 | 术语定义
  description: 一种低计算成本的调度方法，通过竞拍机制将客户卫星分配给服务航天器，并考虑相位约束。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 拍卖算法详解 | 术语定义
  description: 一种低计算成本的调度方法，通过竞拍机制将客户卫星分配给服务航天器，并考虑相位约束。
  image: /logo.png
permalink: /glossary/dynamics/auction-algorithm/
---

# 拍卖算法（Auction Algorithm）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种低计算成本的调度方法，通过竞拍机制将客户卫星分配给服务航天器，并考虑相位约束。

## 应用价值

在多航天器协同服务场景中，拍卖算法能够以较低的计算复杂度实现近乎最优的任务分配。服务航天器对各客户卫星进行"竞价"，出价最低（或效益最高）的服务任务被优先分配。考虑相位约束意味着算法会考虑目标卫星相对于服务航天器的轨道相位关系，确保在物理上可达的窗口内完成服务。该方法非常适合地月空间多星陪飞任务中的在轨服务调度，能够在推进剂受限的条件下最大化服务收益。

## 相关概念

- [轨道转移（Orbital Transfer）](/glossary/dynamics/orbital-transfer/)
- [多星陪飞（Multi-Satellite Formation Flying）](/glossary/programs/multi-satellite-formation/)
- [交会（Rendezvous）](/glossary/dynamics/rendezvous/)
- [调度优化（Scheduling Optimization）](/glossary/dynamics/scheduling-optimization/)

## 参考文献

- Waldecker & Howell 2025
