---
title: 掩星测量导航（Occultation-Based Navigation）
description: 通过光学敏感器观测天体被另一天体遮掩（掩星）现象的发生时刻，将时间信息转化为位置信息以实现自主导航的方法。论文介绍了周姜滨等研究的掩星自主天文导航方法：当背景恒星被月球遮掩时，敏感器记录掩星发生的精确时刻，结合已知星历和轨道动力学模型，通过卡尔曼滤波解算航天器三维位置。仿真结果表明，掩星时刻测量精度优于10毫秒，三维位
keywords: 掩星测量导航, Occultation-Based Navigation, 地月空间导航, PNT服务, 轨道确定
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 掩星测量导航（Occultation-Based Navigation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 掩星测量导航详解 | 术语定义
  description: 通过光学敏感器观测天体被另一天体遮掩（掩星）现象的发生时刻，将时间信息转化为位置信息以实现自主导航的方法。论文介绍了周姜滨等研究的掩星自主天文导航方法：当背景恒星被月球遮掩时，敏感器记录掩星发生的精确时刻，结合已知星历和轨道动力学模型，通过卡尔曼滤波解算航天器三维位置。仿真结果表明，掩星时刻测量精度优于10毫秒，三维位
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 掩星测量导航详解 | 术语定义
  description: 通过光学敏感器观测天体被另一天体遮掩（掩星）现象的发生时刻，将时间信息转化为位置信息以实现自主导航的方法。论文介绍了周姜滨等研究的掩星自主天文导航方法：当背景恒星被月球遮掩时，敏感器记录掩星发生的精确时刻，结合已知星历和轨道动力学模型，通过卡尔曼滤波解算航天器三维位置。仿真结果表明，掩星时刻测量精度优于10毫秒，三维位
  image: /logo.png
permalink: /glossary/navigation/occultation-based-navigation/
---

# 掩星测量导航（Occultation-Based Navigation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 术语来源：丛佃伟 等 - 2025 - 地月空间航天器自主导航技术及研究进展
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

通过光学敏感器观测天体被另一天体遮掩（掩星）现象的发生时刻，将时间信息转化为位置信息以实现自主导航的方法。论文介绍了周姜滨等研究的掩星自主天文导航方法：当背景恒星被月球遮掩时，敏感器记录掩星发生的精确时刻，结合已知星历和轨道动力学模型，通过卡尔曼滤波解算航天器三维位置。仿真结果表明，掩星时刻测量精度优于10毫秒，三维位置解算精度优于一定水平，三维速度解算精度优于0.1米每秒。

## 应用价值

掩星测量导航是地月空间探测器实现自主轨道确定的核心技术之一。通过星载敏感器或星间链路获取观测量，结合滤波器估计器消除测量噪声，可为转移轨道修正和目标轨道进入提供高精度的位置速度信息。在地月转移任务中，掩星测量导航精度直接影响入轨点偏差和推进剂消耗预算。

## 相关概念

- [地月空间导航系统（Cislunar Space Navigation System）](/glossary/navigation/cislunar-space-navigation-system/)
- [Lyapunov最优反馈制导（Lyapunov Optimal Feedback Guidance）](/glossary/navigation/lyapunov-optimal-feedback-guidance/)
- [距离可观测性（Range Observability）](/glossary/navigation/range-observability/)
- [六分仪（Sextant）](/glossary/navigation/sextant/)

## 参考文献

- 丛佃伟 等 - 2025 - 地月空间航天器自主导航技术及研究进展
