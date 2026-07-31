---
title: 信号一致性检验（Signal Consistency Check）
description: 对多个导航敏感器的测量数据进行相互比对和一致性判别的技术。当某个敏感器测量异常时，通过一致性检验将其剔除出导航修正回路，避免异常数据污染导航结果，提高系统可靠性。
keywords: 信号一致性检验, Signal Consistency Check, 导航, 测距, 定位, 轨道确定
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 信号一致性检验（Signal Consistency Check）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 信号一致性检验详解 | 术语定义
  description: 对多个导航敏感器的测量数据进行相互比对和一致性判别的技术。当某个敏感器测量异常时，通过一致性检验将其剔除出导航修正回路，避免异常数据污染导航结果，提高系统可靠性。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 信号一致性检验详解 | 术语定义
  description: 对多个导航敏感器的测量数据进行相互比对和一致性判别的技术。当某个敏感器测量异常时，通过一致性检验将其剔除出导航修正回路，避免异常数据污染导航结果，提高系统可靠性。
  image: /logo.png
permalink: /glossary/navigation/signal-consistency-check/
---

# 信号一致性检验（Signal Consistency Check）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

对多个导航敏感器的测量数据进行相互比对和一致性判别的技术。当某个敏感器测量异常时，通过一致性检验将其剔除出导航修正回路，避免异常数据污染导航结果，提高系统可靠性。

## 应用价值

信号一致性检验通过比对多个导航敏感器的测量数据识别异常值。当某敏感器测量异常时，一致性检验将其剔除出导航修正回路，避免异常数据污染导航结果。在载人月面着陆等高可靠性要求的任务中，信号一致性检验是提高导航系统鲁棒性的重要手段。

## 相关概念

- [多径效应（Multipath Effect）](/glossary/navigation/multipath-effect/)
- [地形相对导航（Terrain Relative Navigation）](/glossary/navigation/terrain-relative-navigation/)
- [扩展卡尔曼滤波（Extended Kalman Filter）](/glossary/navigation/extended-kalman-filter/)
- [克拉美罗下界（Cramér-Rao Lower Bound, CRLB）](/glossary/fundamentals/cramr-rao-lower-bound-crlb/)
## 参考文献

- 陈上上 等 - 2026 - 载人月面着陆GNC技术及验证
