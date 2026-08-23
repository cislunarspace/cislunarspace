---
title: 低地球轨道（Low Earth Orbit, LEO）
description: 详细解析低地球轨道的定义、高度范围、动力学特征及其在地月转移任务中的停泊轨道角色
keywords: 低地球轨道, LEO, Low Earth Orbit, 停泊轨道, 近地轨道, 地月转移, 航天发射
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 低地球轨道（LEO）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 低地球轨道（LEO）详解 | 术语定义
  description: 详细解析低地球轨道的定义、高度范围及其在地月转移任务中的角色
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 低地球轨道（LEO）详解 | 术语定义
  description: 详细解析低地球轨道的定义、高度范围及其在地月转移任务中的角色
  image: /logo.png
permalink: /glossary/other/leo/
---

# 低地球轨道（Low Earth Orbit, LEO）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

低地球轨道（Low Earth Orbit, LEO）是指轨道高度在地球表面以上 200 km 至 2000 km 之间的绕地球轨道。LEO 是人类航天活动中最常用的轨道类型，绝大多数载人航天器、对地观测卫星和空间站都运行在 LEO 上。

LEO 的轨道周期约为 90–120 分钟，取决于具体轨道高度。以国际空间站（ISS）为例，其运行在约 400 km 高度的近圆轨道上，轨道周期约 92 分钟。LEO 轨道速度约为 $v \approx 7.7 \text{ km/s}$（400 km 高度）。

## 核心要素

### 轨道力学参数

LEO 轨道的关键力学参数可通过开普勒定律计算。对于半径为 $r$ 的圆轨道，轨道速度为：

$$v = \sqrt{\frac{\mu_E}{r}}$$

其中 $\mu_E = 3.986 \times 10^{5} \text{ km}^3/\text{s}^2$ 为地球引力常数。LEO 轨道的特征速度 $\Delta v$ 需求较低，是从地面发射进入空间的最经济轨道。

### LEO 作为停泊轨道

在地月转移任务中，LEO 通常充当航天器的**停泊轨道**（Parking Orbit）。航天器首先由运载火箭送入 LEO，然后在合适的相位和时机施加地月转移脉冲，进入地月转移轨道。

这种由 LEO 停泊至地月转移的任务架构具有以下优势：

1. **任务灵活性**：航天器可在 LEO 等待最佳发射窗口，而不受地面发射窗口的严格约束。
2. **系统验证**：在 LEO 停泊期间可以对航天器各系统进行全面检查，确认状态正常后再执行深空转移。
3. **轨道组装**：大型任务可以在 LEO 进行在轨组装和补给，降低单次发射的质量约束。

### 地月转移中的 LEO 离轨脉冲

从 LEO 出发的地月转移通常需要施加一个离轨脉冲（De-orbit Impulse）$\Delta v_1$。对于直接转移至月球附近的方案，该脉冲大小取决于转移轨道的设计。在有动力月球借力（PLF）转移方案中，LEO 离轨脉冲是三脉冲转移的第一个脉冲，其大小直接影响后续转移轨道的形状和到达月球附近时的状态。

典型数值上，从 200 km 高度的 LEO 直接转移至月球附近所需的 $\Delta v_1$ 约为 3.1–3.2 km/s，略低于霍曼转移所需的理论值。通过优化转移轨道设计（如选择合适的 C3 能量），可以在 $\Delta v_1$ 和后续脉冲之间进行权衡。

### 大气阻力与轨道衰减

LEO 轨道面临的主要摄动因素是大气阻力。尽管在 400 km 以上大气密度已极为稀薄，但长期运行的航天器仍需定期进行轨道维持。大气阻力导致的轨道衰减速率与航天器的弹道系数（$\beta = m/C_D A$）和大气密度密切相关。

## 应用价值

LEO 不仅是航天活动的起点，更是地月空间基础设施的关键节点：

- **空间站**：中国空间站（天宫）、国际空间站均运行在 LEO，为长期载人航天提供平台。
- **卫星星座**：Starlink、OneWeb 等大型通信星座部署在 LEO，为全球提供互联网服务。
- **地月交通枢纽**：未来 LEO 有望发展为地月空间的交通枢纽，承担在轨加注、货物中转等功能。

## 相关概念

- 地月空间（Cislunar Space）
- 停泊轨道（Parking Orbit）
- 转移轨道（Transfer Orbit）
- 有动力月球借力（PLF）

## 参考文献

- 魏赞等, 地月远距离逆行轨道族月球借力转移入轨研究, 2026.
- Vallado D A, Fundamentals of Astrodynamics and Applications, 4th ed., Microcosm Press, 2013.
- Wertz J R, Everett D F, Puschell J J, Space Mission Engineering: The New SMAD, Microcosm Press, 2011.
