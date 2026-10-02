---
title: 零速度面（Zero-Velocity Surface）
description: 圆型限制性三体问题中由雅可比常数确定的运动许可区域边界曲面，随能量升高在平动点处依次打开通道，是划分转移可行域与理解平动点轨道能量层级的几何工具。
keywords: 零速度面, Zero-Velocity Surface, 雅可比常数, 希尔曲面, 平动点, 三体问题
author: 天疆说
date: 2026-10-01
lastUpdated: 2026-10-01
wechatShare:
  title: 零速度面（Zero-Velocity Surface）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 零速度面详解 | 术语定义
  description: 圆型限制性三体问题中由雅可比常数确定的运动许可区域边界曲面，随能量升高在平动点处依次打开通道，是划分转移可行域与理解平动点轨道能量层级的几何工具。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 零速度面详解 | 术语定义
  description: 圆型限制性三体问题中由雅可比常数确定的运动许可区域边界曲面，随能量升高在平动点处依次打开通道，是划分转移可行域与理解平动点轨道能量层级的几何工具。
  image: /logo.png
permalink: /glossary/orbits/zero-velocity-surface/
aliases:
  - Zero-Velocity Surface
  - 零速度面
  - 零速度曲面
  - Hill 曲面
  - Surfaces of Zero Velocity
related:
  - ref: orbits/lagrangian-point
    relation: related
  - ref: orbits/lissajous-orbit
    relation: related
  - ref: orbits/halo-orbit
    relation: related
---

# 零速度面（Zero-Velocity Surface）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

零速度面是圆型限制性三体问题中由雅可比常数确定的曲面族。给定雅可比常数，质点的运动被限制在有效势能满足一定条件的许可区域内，零速度面即该许可区域的边界，边界上质点速度为零。由于雅可比常数在圆型限制性三体问题中守恒，航天器不可能穿越零速度面进入禁区，因此零速度面给出了转移可行域的严格几何边界 \cite{szebehelyTheoryOrbitRestricted1967}。零速度面也称为希尔曲面或希尔限制面，Lundberg 等对三体问题零速度面的拓扑与解析性质作了系统研究 \cite{lundbergSurfacesZeroVelocity1985}。

## 能量层级与通道结构

随雅可比常数降低即能量升高，零速度面在平动点处依次收缩并打开通道。地月系中，能量达到 L1 平动点对应值时月球附近区域与地球附近区域连通，达到 L2 对应值时地月系统与外部日心空间连通，达到 L3 对应值时地球两侧区域连通。这一层级结构解释了平动点轨道的能量排序与低能转移的可行条件，是理解 Lyapunov 轨道、Halo 轨道与 Lissajous 轨道作为能量门户的基础 \cite{szebehelyTheoryOrbitRestricted1967}。近期研究还发现，在零速度面之外存在由稳定流形构成的对偶势垒结构，对穿越 L1 与 L2 的转移通道作了补充刻画 \cite{oshimaHiddenBarrierSurface2024}。

## 应用

在任务分析中，零速度面用于快速判断给定能量下地月转移与平动点任务轨道的可行性，比较不同停泊轨道与平动点轨道的能量需求，并为流形拼接方法提供能量层级的定性框架 \cite{szebehelyTheoryOrbitRestricted1967,oshimaHiddenBarrierSurface2024}。相关平动点概念见[拉格朗日点](/glossary/orbits/lagrangian-point/)与[Lissajous 轨道](/glossary/orbits/lissajous-orbit/)。

## 相关概念

- [拉格朗日点（Lagrangian Point）](/glossary/orbits/lagrangian-point/)
- [Lissajous 轨道（Lissajous Orbit）](/glossary/orbits/lissajous-orbit/)
- [晕轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)
