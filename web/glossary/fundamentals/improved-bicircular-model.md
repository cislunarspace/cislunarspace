---
title: 改进的双圆模型（Improved Bi-Circular Model）
description: 在 Koon 双圆模型基础上，以地月质心为地月系会合坐标系原点的动力学近似模型。将日-地-月四体运动拆解为两个圆形限制性三体问题：太阳与地月质心构成日地 CR3BP（会合坐标系原点在日地质心），地球与月球构成地月 CR3BP（会合坐标系原点在地月质心），由初始相位角确定双圆模型的初始状态。相比直接四体数值积分，该模型在
keywords: 改进的双圆模型, Improved Bi-Circular Model, 轨道力学, 数值方法, 优化算法
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 改进的双圆模型（Improved Bi-Circular Model）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 改进的双圆模型详解 | 术语定义
  description: 在 Koon 双圆模型基础上，以地月质心为地月系会合坐标系原点的动力学近似模型。将日-地-月四体运动拆解为两个圆形限制性三体问题：太阳与地月质心构成日地 CR3BP（会合坐标系原点在日地质心），地球与月球构成地月 CR3BP（会合坐标系原点在地月质心），由初始相位角确定双圆模型的初始状态。相比直接四体数值积分，该模型在
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 改进的双圆模型详解 | 术语定义
  description: 在 Koon 双圆模型基础上，以地月质心为地月系会合坐标系原点的动力学近似模型。将日-地-月四体运动拆解为两个圆形限制性三体问题：太阳与地月质心构成日地 CR3BP（会合坐标系原点在日地质心），地球与月球构成地月 CR3BP（会合坐标系原点在地月质心），由初始相位角确定双圆模型的初始状态。相比直接四体数值积分，该模型在
  image: /logo.png
permalink: /glossary/fundamentals/improved-bicircular-model/
---

# 改进的双圆模型（Improved Bi-Circular Model）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在 Koon 双圆模型基础上，以地月质心为地月系会合坐标系原点的动力学近似模型。将日-地-月四体运动拆解为两个圆形限制性三体问题：太阳与地月质心构成日地 CR3BP（会合坐标系原点在日地质心），地球与月球构成地月 CR3BP（会合坐标系原点在地月质心），由初始相位角确定双圆模型的初始状态。相比直接四体数值积分，该模型在保持计算效率的同时提高了建模精度。

## 应用价值

在轨道动力学数值仿真中，该方法用于提高计算精度和效率。通过合理的离散化策略，可以在保证数值稳定性的同时大幅减少计算量。

## 相关概念

- [同步旋转坐标系（Synodic Rotating Frame）](/glossary/fundamentals/synodic-rotating-frame/)
- [网格搜索（Grid Search）](/glossary/fundamentals/grid-search/)
- [Gauss求积公式（Gauss Quadrature Formula）](/glossary/fundamentals/gauss-quadrature-formula/)
- [星座构型向量（Constellation Pattern Vector）](/glossary/fundamentals/constellation-pattern-vector/)
## 参考文献

- 利用平动点流形设计地月转移轨道的研究
