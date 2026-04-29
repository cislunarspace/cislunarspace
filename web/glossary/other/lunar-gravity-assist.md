---
title: 月球借力（Lunar Gravity Assist, LGA）
description: 详细解析月球借力的定义、力学原理、轨道设计方法及其在地月空间低能转移中的关键作用
keywords: 月球借力, Lunar Gravity Assist, LGA, 引力弹弓, 地月转移, 轨道机动, 低能转移
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 月球借力（LGA）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 月球借力（LGA）详解 | 术语定义
  description: 详细解析月球借力的定义、力学原理及其在地月空间低能转移中的关键作用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 月球借力（LGA）详解 | 术语定义
  description: 详细解析月球借力的定义、力学原理及其在地月空间低能转移中的关键作用
  image: /logo.png
permalink: /glossary/other/lunar-gravity-assist/
---

# 月球借力（Lunar Gravity Assist, LGA）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：https://cislunarspace.cn

## 定义

月球借力（Lunar Gravity Assist, LGA）是指航天器利用月球引力场改变自身速度矢量的轨道机动技术。当航天器飞越月球时，月球引力会对航天器做功，在月球固连参考系中航天器的速度大小不变但方向改变，而在惯性参考系中则表现为速度大小和方向的同时改变。

月球借力本质上是一种"引力弹弓"效应，可以在不消耗推进剂的情况下改变航天器的能量和角动量，是实现地月空间低能量轨道转移的核心手段之一。

## 核心要素

### 力学原理

在月球固连参考系中，航天器以双曲线轨道飞越月球。设航天器进入月球影响球时的相对速度为 $v_{\infty}$，近月点半径为 $r_p$，则双曲线偏转角 $\delta$ 为：

$$\sin\frac{\delta}{2} = \frac{1}{1 + \frac{r_p \cdot v_{\infty}^2}{\mu_M}}$$

其中 $\mu_M = 4902.8 \text{ km}^3/\text{s}^2$ 为月球引力常数。偏转角 $\delta$ 的大小取决于近月点高度和飞越速度——近月点越低、飞越速度越慢，偏转角越大。

在惯性参考系中，航天器飞越月球后的速度变化量 $\Delta v$ 可以通过速度矢量三角形计算：

$$\Delta v = 2 v_{\infty} \sin\frac{\delta}{2}$$

### 借力效果的控制

月球借力效果主要由以下参数决定：

1. **近月点高度**（$h_p$）：近月点越低，引力场越强，偏转效果越显著。但近月点过低可能撞击月球表面（月球半径约 1737 km）。
2. **飞越速度**（$v_{\infty}$）：速度越慢，航天器在月球引力场中停留时间越长，偏转效果越强。
3. **飞越几何**（B-plane 参数）：飞越平面的定向决定了速度改变的方向，从而决定借力后轨道的形状和方向。

### 月球借力的类型

根据借力效果对航天器能量的影响，月球借力可分为：

- **加速借力**：航天器从月球引力场获得能量，速度增加，可用于逃逸地月系统或进入更高能量轨道。
- **减速借力**：航天器损失能量，速度减小，可用于降低轨道能量，进入捕获轨道。
- **方向改变借力**：主要改变速度方向而不显著改变能量大小，用于调整轨道平面或方向。

### 无动力 vs 有动力月球借力

传统的无动力月球借力（Unpowered LGA）完全依靠月球引力改变航天器速度，不需要额外推进。而有动力月球借力（Powered Lunar Flyby, PLF）则在近月点施加额外脉冲，以增强借力效果或避免航天器逃逸出地月系统。PLF 方案在 LEO 至 DRO 的转移中具有重要应用价值。

## 应用价值

月球借力技术在地月空间任务中有广泛应用：

- **低能转移**：利用月球借力可以实现从 LEO 到远距离逆行轨道（DRO）、平动点轨道等高能目标轨道的低能量转移，相比直接转移可节省大量推进剂。
- **轨道捕获**：通过月球减速借力，航天器可以无需大量制动脉冲即被月球引力"捕获"，进入绕月轨道。
- **深空任务借鉴**：行星际任务中广泛使用引力弹弓技术（如旅行者号、卡西尼号），月球借力是这一技术在地月空间的具体应用。

魏赞等（2026）研究了基于有动力月球借力的 LEO 至 DRO 转移方案，发现通过合理设计三脉冲转移（LEO 离轨 + 近月点机动 + DRO 入轨），可以在较短转移时间内实现高效入轨。

## 相关概念

- [有动力月球借力（PLF）](/glossary/other/powered-lunar-flyby/)
- [弱稳定边界（WSB）](/glossary/other/weak-stability-boundary/)
- [转移轨道（Transfer Orbit）](/glossary/orbits/transfer-orbit/)
- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)
- [近月点（Perilune）](/glossary/orbits/perilune/)

## 参考文献

- 魏赞等, "地月远距离逆行轨道族月球借力转移入轨研究", 2026.
- Broucke R A, "The Celestial Mechanics of Gravity Assist", AIAA/AAS Astrodynamics Conference, 1988.
- Lo M W, Ross S D, "The Lunar L1 Gateway: Portal to the Stars and Beyond", AIAA Space Conference, 2001.
