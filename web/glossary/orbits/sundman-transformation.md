---
title: Sundman变换（Sundman Transformation）
description: 将最优控制中的独立变量从时间域变换为真近点角域的变量替换技巧。变换关系为 dt = r^2/h dν，其中r为航天器距中心天体的距离，h为角动量大小。该变换使积分步数不再与轨道周期相关，而是与角度增量相关，特别适合处理多圈转移问题：无论轨道周期多长，每圈只需固定数量的离散步，计算量不随圈数急剧增长。
keywords: Sundman变换, Sundman Transformation, 轨道设计, 转移轨道, 晕轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Sundman变换（Sundman Transformation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: Sundman变换详解 | 术语定义
  description: 将最优控制中的独立变量从时间域变换为真近点角域的变量替换技巧。变换关系为 dt = r^2/h dν，其中r为航天器距中心天体的距离，h为角动量大小。该变换使积分步数不再与轨道周期相关，而是与角度增量相关，特别适合处理多圈转移问题：无论轨道周期多长，每圈只需固定数量的离散步，计算量不随圈数急剧增长。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Sundman变换详解 | 术语定义
  description: 将最优控制中的独立变量从时间域变换为真近点角域的变量替换技巧。变换关系为 dt = r^2/h dν，其中r为航天器距中心天体的距离，h为角动量大小。该变换使积分步数不再与轨道周期相关，而是与角度增量相关，特别适合处理多圈转移问题：无论轨道周期多长，每圈只需固定数量的离散步，计算量不随圈数急剧增长。
  image: /logo.png
permalink: /glossary/orbits/sundman-transformation/
---

# Sundman变换（Sundman Transformation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将最优控制中的独立变量从时间域变换为真近点角域的变量替换技巧。变换关系为 dt = r^2/h dν，其中r为航天器距中心天体的距离，h为角动量大小。该变换使积分步数不再与轨道周期相关，而是与角度增量相关，特别适合处理多圈转移问题：无论轨道周期多长，每圈只需固定数量的离散步，计算量不随圈数急剧增长。

## 应用价值

该轨道类型在地月空间任务中具有重要应用价值，是设计月球探测、空间站运营和深空任务的关键基础。

## 相关概念

- [弹道月球转移（Ballistic Lunar Transfer）](/glossary/orbits/ballistic-lunar-transfer/)
- [转移窗口（Transfer Window）](/glossary/orbits/transfer-window/)
- [近直线晕轨道（Near Rectilinear Halo Orbit）](/glossary/orbits/near-rectilinear-halo-orbit/)
- [标称Halo轨道（Nominal Halo Orbit）](/glossary/orbits/nominal-halo-orbit/)

## 参考文献

- Oue等 - 2025 - Low-Thrust Many-Revolution Transfer between Near Rectilinear Halo Orbit and Low Lunar Orbit Using Hybrid Differential Dynamic Programming
- Vallado - 2022 - Fundamentals of astrodynamics and applications
