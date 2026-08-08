---
title: 微分校正（Differential Correction）
description: 将低保真模型（如圆型限制性三体问题）中的转移轨道过渡到高保真星历模型的数值方法。具体做法是将转移过程中的NRHO、转移轨道和DRO离散为节点，利用节点间的状态和历元作为初值，对机动节点施加位置连续性约束、对其他节点施加位置和速度连续性约束，经迭代修正得到星历模型下的收敛轨道。
keywords: 微分校正, Differential Correction, 导航, 制导, 相对状态测量, 交会
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 微分校正（Differential Correction）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 微分校正（Differential Correction）详解 | 术语定义
  description: 将低保真模型（如圆型限制性三体问题）中的转移轨道过渡到高保真星历模型的数值方法。具体做法是将转移过程中的NRHO、转移轨道和DRO离散为节点，利用节点间的状态和历元作为初值，对机动节点施加位置连续性约束、对其他节点施加位置和速度连续性约束，经迭代修正得到星历模型下的收敛轨道。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 微分校正（Differential Correction）详解 | 术语定义
  description: 将低保真模型（如圆型限制性三体问题）中的转移轨道过渡到高保真星历模型的数值方法。具体做法是将转移过程中的NRHO、转移轨道和DRO离散为节点，利用节点间的状态和历元作为初值，对机动节点施加位置连续性约束、对其他节点施加位置和速度连续性约束，经迭代修正得到星历模型下的收敛轨道。
  image: /logo.png
permalink: /glossary/navigation/differential-correction/
---

# 微分校正（Differential Correction）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将低保真模型（如圆型限制性三体问题）中的转移轨道过渡到高保真星历模型的数值方法。具体做法是将转移过程中的NRHO、转移轨道和DRO离散为节点，利用节点间的状态和历元作为初值，对机动节点施加位置连续性约束、对其他节点施加位置和速度连续性约束，经迭代修正得到星历模型下的收敛轨道。

## 应用价值

该类轨道在任务设计中用于实现航天器在不同轨道状态之间的转移，可充分利用天体引力特性和动力学机制，降低转移所需的速度增量。

## 相关概念

- 伪解（Fake Solution）
- [地月质心旋转坐标系（Earth-Moon Barycenter Rotating Frame）](/glossary/navigation/earth-moon-barycenter-rotating-frame/)
- 视觉导航（Vision-Based Navigation）

## 参考文献

- Wang et al. 2021
