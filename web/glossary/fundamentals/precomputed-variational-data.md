---
title: 预计算变分数据（Precomputed Variational Data）
description: 围绕参考轨道预先积分变分方程并存储状态转移矩阵和张量的策略。将参考轨道的时间区间按 2^m 等分，在每个子区间上积分一阶和二阶变分方程，存储对应的 STM 和 STT。在线阶段通过 cocycle 性质拼接预计算数据，避免每次求解最优控制问题时都进行数值积分。
keywords: Precomputed Variational Data, 坐标系, 航天器, 轨道, 预计算变分数据
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 预计算变分数据（Precomputed Variational Data）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 预计算变分数据详解 | 术语定义
  description: 围绕参考轨道预先积分变分方程并存储状态转移矩阵和张量的策略。将参考轨道的时间区间按 2^m 等分，在每个子区间上积分一阶和二阶变分方程，存储对应的 STM 和 STT。在线阶段通过 cocycle 性质拼接预计算数据，避免每次求解最优控制问题时都进行数值积分。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 预计算变分数据详解 | 术语定义
  description: 围绕参考轨道预先积分变分方程并存储状态转移矩阵和张量的策略。将参考轨道的时间区间按 2^m 等分，在每个子区间上积分一阶和二阶变分方程，存储对应的 STM 和 STT。在线阶段通过 cocycle 性质拼接预计算数据，避免每次求解最优控制问题时都进行数值积分。
  image: /logo.png
permalink: /glossary/fundamentals/precomputed-variational-data/
---

# 预计算变分数据（Precomputed Variational Data）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

围绕参考轨道预先积分变分方程并存储状态转移矩阵和张量的策略。将参考轨道的时间区间按 2^m 等分，在每个子区间上积分一阶和二阶变分方程，存储对应的 STM 和 STT。在线阶段通过 cocycle 性质拼接预计算数据，避免每次求解最优控制问题时都进行数值积分。

## 应用价值

在航天器动力学分析与设计中，该概念对理解航天器在地月空间中的运动特性和任务设计具有重要作用。

## 相关概念

- [亚轨道（Suborbital）](/glossary/fundamentals/suborbital/)
- [相对运动最优控制（Optimal Relative Motion Control）](/glossary/fundamentals/optimal-relative-motion-control/)
- [火箭分级（Rocket Staging）](/glossary/fundamentals/rocket-staging/)
- [叉乘矩阵（Cross-Product Matrix / Skew-Symmetric Matrix）](/glossary/fundamentals/cross-product-matrix-skew-symmetric-matrix/)

## 参考文献

- Kulik et al., 2023, JGCD, doi:10.2514/1.G007311
