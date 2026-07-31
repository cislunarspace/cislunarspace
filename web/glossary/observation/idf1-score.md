---
title: IDF1分数（IDF1 Score）
description: 衡量跟踪器保持目标身份一致性的指标，关注「正确匹配的轨迹长度占总轨迹长度的比例」。计算公式为 2*IDTP / (2*IDTP + IDFP + IDFN)，其中 IDTP、IDFP、IDFN 分别为身份正确匹配数、错误匹配数和未匹配数。IDF1 越高，说明跟踪器越擅长在长时间序列中维持同一目标的身份不混淆。
keywords: IDF1分数, IDF1 Score, IDF1, 观测, 图像处理
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: IDF1分数（IDF1 Score）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: IDF1分数详解 | 术语定义
  description: 衡量跟踪器保持目标身份一致性的指标，关注「正确匹配的轨迹长度占总轨迹长度的比例」。计算公式为 2*IDTP / (2*IDTP + IDFP + IDFN)，其中 IDTP、IDFP、IDFN 分别为身份正确匹配数、错误匹配数和未匹配数。IDF1 越高，说明跟踪器越擅长在长时间序列中维持同一目标的身份不混淆。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: IDF1分数详解 | 术语定义
  description: 衡量跟踪器保持目标身份一致性的指标，关注「正确匹配的轨迹长度占总轨迹长度的比例」。计算公式为 2*IDTP / (2*IDTP + IDFP + IDFN)，其中 IDTP、IDFP、IDFN 分别为身份正确匹配数、错误匹配数和未匹配数。IDF1 越高，说明跟踪器越擅长在长时间序列中维持同一目标的身份不混淆。
  image: /logo.png
permalink: /glossary/observation/idf1-score/
---

# IDF1分数（IDF1 Score）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

衡量跟踪器保持目标身份一致性的指标，关注「正确匹配的轨迹长度占总轨迹长度的比例」。计算公式为 2*IDTP / (2*IDTP + IDFP + IDFN)，其中 IDTP、IDFP、IDFN 分别为身份正确匹配数、错误匹配数和未匹配数。IDF1 越高，说明跟踪器越擅长在长时间序列中维持同一目标的身份不混淆。

## 应用价值

该概念在地月空间目标观测与感知中具有应用价值，为空间态势感知提供技术支持。

## 相关概念

- [轨道保持监管（Tracking Custody）](/glossary/observation/tracking-custody/)
- [单目视觉（Monocular Vision）](/glossary/observation/monocular-vision/)
- [偏转角（Deflection Angle）](/glossary/dynamics/deflection-angle/)
- [双程测距求和组合（Summation Combination of Dual One-Way Ranging）](/glossary/navigation/summation-combination-of-dual-one-way-ranging/)

## 参考文献

- 王磊等, 2025
