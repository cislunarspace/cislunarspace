---
title: University of Colorado Boulder
description: 以 LiAISON 地月自主导航体制与低能弹道月球转移设计闻名的航天动力学研究重镇。
keywords: 地月空间, University of Colorado Boulder, LiAISON, 自主导航, 低能弹道转移, 轨道力学
author: 天疆说
date: 2026-09-30
lastUpdated: 2026-09-30
permalink: /research-frontiers/institutions/cuboulder/
wechatShare:
  title: 地月空间研究机构与团队盘点 | University of Colorado Boulder
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 地月空间研究机构与团队盘点 | University of Colorado Boulder
  description: 以 LiAISON 地月自主导航体制与低能弹道月球转移设计闻名的航天动力学研究重镇。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 地月空间入门指南 | University of Colorado Boulder
  description: 以 LiAISON 地月自主导航体制与低能弹道月球转移设计闻名的航天动力学研究重镇。
  image: /logo.png
---

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

# University of Colorado Boulder

University of Colorado Boulder 是美国航天动力学研究的传统强校，其 Colorado Center for Astrodynamics Research 长期深耕轨道力学与空间导航领域。在地月空间方向，学校围绕 Lagrange 点轨道自主导航、低能弹道月球转移与智能化轨迹设计，形成了从导航体制到轨迹设计方法的完整积累。

## LiAISON 地月自主导航

地月 Lagrange 点附近的航天器相对地球测站几何关系特殊，传统地面测控对这一区域的支撑能力有限。LiAISON 体制利用不同轨道之间航天器的相对观测量实现自主定轨，显著降低了对地面测控的依赖，是地月空间导航的重要技术路线。

Leonard 以 LiAISON 导航支持载人任务为主线，建立了地月系内 Lagrange 点轨道航天器的导航精度基线，分析了常用观测数据类型的可观测性，并评估了载人扰动模型对导航性能的影响。研究中使用 ARTEMIS 任务的实测跟踪数据开展重叠弧段分析，使导航性能结论具备实测支撑 \cite{leonardSupportingCrewedMissions2015}。

## 低能弹道月球转移

低能弹道月球转移利用地月系不稳定三体轨道的稳定流形与地球停泊轨道相交的动力学通道，以极少的机动完成地月转移，是地月空间运输的经典设计思路。

Parker 在其博士论文中给出了用动力系统理论建模、分析与构建低能弹道月球转移的系统方法。转移只需在地球停泊轨道执行一次地月转移入射机动，随后全程弹道式飞行并渐进抵达目标月球轨道，无需近月制动，从机理上解释了此类转移的低成本来源 \cite{parkerLowenergyBallisticLunar2007}。

## 智能化自主轨迹设计

随着人工智能方法进入航天动力学，强化学习被用于探索传统设计方法难以覆盖的轨迹空间，Boulder 团队在这一新兴方向持续布局。

Kodukula 使用 Proximal Policy Optimization 强化学习算法在日地圆型限制性三体问题中设计从 L1 到 L4 的转移轨迹，验证了强化学习在连续动作空间轨迹设计问题中的可行性。该工作面向自主轨迹设计需求，展示了数据驱动方法与多体动力学相结合的潜力 \cite{kodukulaGeneratingTrajectorySunearth2025}。

## 相关页面

- [国内外地月空间研究组织总览](/research-frontiers/institutions/overview/)
