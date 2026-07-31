---
title: 无迹变换（Unscented Transformation, UT）
description: 无迹卡尔曼滤波的核心变换手段。从先验分布中取一组确定性sigma点，使其均值和协方差与原分布一致，将这些点通过非线性函数传播后，用传播后的点集重新估计均值和协方差。与扩展卡尔曼滤波的一阶线性化相比，无迹变换能捕捉到二阶矩信息，不需要计算雅可比矩阵。
keywords: 无迹变换, Unscented Transformation, UT, UT, navigation
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 无迹变换（Unscented Transformation, UT）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 无迹变换详解 | 术语定义
  description: 无迹卡尔曼滤波的核心变换手段。从先验分布中取一组确定性sigma点，使其均值和协方差与原分布一致，将这些点通过非线性函数传播后，用传播后的点集重新估计均值和协方差。与扩展卡尔曼滤波的一阶线性化相比，无迹变换能捕捉到二阶矩信息，不需要计算雅可比矩阵。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 无迹变换详解 | 术语定义
  description: 无迹卡尔曼滤波的核心变换手段。从先验分布中取一组确定性sigma点，使其均值和协方差与原分布一致，将这些点通过非线性函数传播后，用传播后的点集重新估计均值和协方差。与扩展卡尔曼滤波的一阶线性化相比，无迹变换能捕捉到二阶矩信息，不需要计算雅可比矩阵。
  image: /logo.png
permalink: /glossary/navigation/ut/
---

# 无迹变换（Unscented Transformation, UT）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

无迹卡尔曼滤波的核心变换手段。从先验分布中取一组确定性sigma点，使其均值和协方差与原分布一致，将这些点通过非线性函数传播后，用传播后的点集重新估计均值和协方差。与扩展卡尔曼滤波的一阶线性化相比，无迹变换能捕捉到二阶矩信息，不需要计算雅可比矩阵。

## 应用价值

无迹变换在地月空间研究中具有应用价值，为月球探测任务提供了技术支撑或理论分析方法。

## 相关概念

- （暂无相关概念）

## 参考文献

- Li 等 - 2025 - Efficient reachable domain search-tracking for cislunar non-cooperative targets via designed quadrature。
