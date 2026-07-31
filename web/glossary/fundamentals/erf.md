---
title: 误差函数（Error Function）
description: 数学中的特殊函数 erf(x) = (1/sqrt(pi)) * integral(e^(-t^2)) dt。论文发现用误差函数作平滑函数，相比 tanh 和 L2 范数，计算时间减半、终端误差降低一个量级。
keywords: 误差函数, Error Function, erf, fundamentals
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 误差函数（Error Function）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 误差函数详解 | 术语定义
  description: 数学中的特殊函数 erf(x) = (1/sqrt(pi)) * integral(e^(-t^2)) dt。论文发现用误差函数作平滑函数，相比 tanh 和 L2 范数，计算时间减半、终端误差降低一个量级。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 误差函数详解 | 术语定义
  description: 数学中的特殊函数 erf(x) = (1/sqrt(pi)) * integral(e^(-t^2)) dt。论文发现用误差函数作平滑函数，相比 tanh 和 L2 范数，计算时间减半、终端误差降低一个量级。
  image: /logo.png
permalink: /glossary/fundamentals/erf/
---

# 误差函数（Error Function）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

数学中的特殊函数 erf(x) = (1/sqrt(pi)) * integral(e^(-t^2)) dt。论文发现用误差函数作平滑函数，相比 tanh 和 L2 范数，计算时间减半、终端误差降低一个量级。

## 应用价值

误差函数在平滑过渡和边界层处理中具有重要应用，可替代tanh等函数实现更高效的数值计算，在轨迹优化中能显著缩短计算时间并提高精度。

## 相关概念

- [变结构滑模控制（Variable Structure Sliding Mode Control）](/glossary/fundamentals/vssmc/)
- [庞特里亚金最小值原理（Pontryagin Minimum Principle）](/glossary/fundamentals/pmp/)
- [比冲（Specific Impulse）](/glossary/fundamentals/isp/)

## 参考文献

- Zhang et al. - 2025 - Smoothing technique for indirect low-thrust trajectory optimization in cislunar space。
