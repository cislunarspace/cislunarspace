---
title: 变结构滑模控制（Variable Structure Sliding Mode Control）
description: 一种鲁棒非线性控制方法。通过设计滑模面，将系统状态驱动到滑模面上；状态一旦到达滑模面，系统动态仅由滑模面决定，对参数摄动和外部干扰具有不变性。论文将其用于补偿太阳引力对Halo轨道的持续扰动。
keywords: 变结构滑模控制, Variable Structure Sliding Mode Control, VSSMC, fundamentals
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 变结构滑模控制（Variable Structure Sliding Mode Control）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 变结构滑模控制详解 | 术语定义
  description: 一种鲁棒非线性控制方法。通过设计滑模面，将系统状态驱动到滑模面上；状态一旦到达滑模面，系统动态仅由滑模面决定，对参数摄动和外部干扰具有不变性。论文将其用于补偿太阳引力对Halo轨道的持续扰动。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 变结构滑模控制详解 | 术语定义
  description: 一种鲁棒非线性控制方法。通过设计滑模面，将系统状态驱动到滑模面上；状态一旦到达滑模面，系统动态仅由滑模面决定，对参数摄动和外部干扰具有不变性。论文将其用于补偿太阳引力对Halo轨道的持续扰动。
  image: /logo.png
permalink: /glossary/fundamentals/vssmc/
---

# 变结构滑模控制（Variable Structure Sliding Mode Control）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种鲁棒非线性控制方法。通过设计滑模面，将系统状态驱动到滑模面上；状态一旦到达滑模面，系统动态仅由滑模面决定，对参数摄动和外部干扰具有不变性。论文将其用于补偿太阳引力对Halo轨道的持续扰动。

## 应用价值

该控制方法对参数摄动和外部干扰具有不变性，适用于航天器轨道保持与姿态控制。通过设计滑模面可将系统状态快速驱动至期望轨迹，在非线性和不确定性环境中表现出较强的鲁棒性。

## 相关概念

- [庞特里亚金最小值原理（Pontryagin Minimum Principle）](/glossary/fundamentals/pmp/)
- [误差函数（Error Function）](/glossary/fundamentals/erf/)
- [比冲（Specific Impulse）](/glossary/fundamentals/isp/)

## 参考文献

- 考虑太阳引力摄动的Halo轨道保持控制。
