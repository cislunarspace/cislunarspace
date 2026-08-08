---
title: 直接多点射击法（Direct Multiple Shooting）
description: 将轨迹分解为多个时间段落，每段衔接处设置未知初值和协态变量，从而降低设计变量敏感性的轨迹优化方法。
keywords: 直接多点射击法, Direct Multiple Shooting, 轨道动力学, 三体问题, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 直接多点射击法（Direct Multiple Shooting）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 直接多点射击法详解 | 术语定义
  description: 将轨迹分解为多个时间段落，每段衔接处设置未知初值和协态变量，从而降低设计变量敏感性的轨迹优化方法。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 直接多点射击法详解 | 术语定义
  description: 将轨迹分解为多个时间段落，每段衔接处设置未知初值和协态变量，从而降低设计变量敏感性的轨迹优化方法。
  image: /logo.png
permalink: /glossary/dynamics/direct-multiple-shooting/
---

# 直接多点射击法（Direct Multiple Shooting）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将轨迹分解为多个时间段落，每段衔接处设置未知初值和协态变量，从而降低设计变量敏感性的轨迹优化方法。

## 应用价值

在轨迹优化和参数搜索中，该方法可高效求解非线性优化问题。结合全局搜索策略，能够找到多族解并评估解的质量，为任务设计提供决策支持。

## 相关概念

- [地心天体参考框架（Geocentric Celestial Reference Frame）](/glossary/dynamics/gcrf/)
- 机动重构（Maneuver Reconstruction）
- [内部频率（Inner Frequencies）](/glossary/dynamics/inner-frequencies/)
- 功能连接理论（Theory of Functional Connections）

## 参考文献

- Ozimek和Howell 2010
