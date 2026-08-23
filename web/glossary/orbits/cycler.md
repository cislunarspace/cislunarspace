---
title: 循环轨道（Cycler Orbit）
description: 周期性往返于地球和月球之间、在两者附近绕飞而不停留的周期轨道；工程上多取共振型（轨道周期与地月系统周期成固定比例），典型 1:2 共振循环轨道周期约 14 天，可支持每月一次的登月窗口。
keywords: 循环轨道, Cycler Orbit, 共振循环轨道, 周期重访轨道, 地月转移
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: 循环轨道（Cycler Orbit）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 循环轨道详解 | 术语定义
  description: 周期性往返于地球和月球之间、在两者附近绕飞而不停留的周期轨道；工程上多取共振型（轨道周期与地月系统周期成固定比例），典型 1:2 共振循环轨道周期约 14 天，可支持每月一次的登月窗口。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 循环轨道详解 | 术语定义
  description: 周期性往返于地球和月球之间、在两者附近绕飞而不停留的周期轨道；工程上多取共振型（轨道周期与地月系统周期成固定比例），典型 1:2 共振循环轨道周期约 14 天，可支持每月一次的登月窗口。
  image: /logo.png
permalink: /glossary/orbits/cycler/
---

# 循环轨道（Cycler Orbit）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

循环轨道是周期性往返于地球和月球之间、在两者附近**绕飞而不停留**的轨道；其本质是地月限制性三体问题下往返地月间的一类周期轨道（彭坤、杨雷 2018）。面向任务需求，工程上**可采用**共振型循环轨道，即轨道周期与地月系统周期成固定比例、近地点与近月点高度较低（注意共振是工程选择，不是本质属性）。同一概念在中文文献的另一译名是地月周期重访轨道（杨雷等 2013）。

## 典型参数与稳定性

彭坤、杨雷 2018 的 CYCLER 轨道：周期约 14 天，与月球会合周期约 28 天（每 28 天内一个 14 天周期与月球会合）；远地距约 48.4 万千米、近地距约 1.07 万千米；倾角 28°，轨道近似关于地月连线对称且处于月球轨道面内；GMAT 推演 10 个周期（140 天）运行稳定。

## 共振循环轨道

共振循环轨道按 p:q = 月球圈数 : 航天器圈数定义（Liang 2016，引 Casoliva 2010）：1:2 即月球转一圈、航天器转两圈，二体初值约 13.66 天、微分修正后约 14 天。生成方法为二体初值猜测加微分修正与延拓，一个初值只生成一条；可推广至 1:2n。由对称性，1:2 共振循环轨道的近月点在旋转系月球后方的 y 轴上。

## Geocycler（SSA 观测轨道）

DeCoster 2026 的地月态势感知架构选用七条 CR3BP 周期轨道，其中两条命名为 Eagle Geocycler（周期 27.5 天）与 Vulture Geocycler（70.5 天），作观测平台提供空间与几何多样性。它们与运输型循环轨道命名相似、用途不同，原文未建立两者的联系。

## 应用

CYCLER 空间站载人登月模式：每月 1 次登月窗口、可支持全月面登月；代价是反复穿越外辐射带、大椭圆轨道交会对接难度高，在六种模式评比中综合可靠性较低（彭坤、杨雷 2018）。共振循环轨道另用于 GEO 离轨与月球中继卫星系统（Liang 2016）。

## 术语变体对照

| 术语 | 含义 | 出处 |
|------|------|------|
| 地月周期重访轨道 | 循环轨道的中文另一译名 | 杨雷 2013 |
| 共振循环轨道（resonance cycler） | 周期与地月系统成整数比的循环轨道 | Liang 2016 |
| 1:2 共振循环轨道 | 月球一圈、航天器两圈，周期约 14 天 | Liang 2016 |
| Eagle / Vulture Geocycler | SSA 观测架构中的两条命名周期轨道 | DeCoster 2026 |

## 相关概念

- [共振轨道族（Resonant Orbit Family）](/glossary/orbits/resonant-orbit-family/)
- [编队飞行（Formation Flight）](/glossary/orbits/formation-flight/)
- [星座（Multi-Body Constellation）](/glossary/orbits/multi-body-constellation/)

## 参考文献

- 杨雷 等, 2013, 基于地月周期重访轨道空间站的载人月球探测方案设想
- Liang et al., 2016, The classification of cislunar trajectories and its applications in the Earth–Moon system
- 彭坤、杨雷, 2018, 利用地月间空间站的载人登月飞行模式分析（宇航学报 39(5):471–481）
- DeCoster et al., 2026, Building the future of cislunar surveillance: in-space assembly and manufacturing-enabled sensor architectures
