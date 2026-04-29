---
title: 月球眩光区（Lunar Glare Zone）
description: 详细解析月球眩光区（耻辱锥）的定义、成因、影响范围及其对地月空间光学观测的限制
keywords: 月球眩光区, Lunar Glare Zone, 耻辱锥, Cone of Shame, 月球反射光, 光学观测, 信噪比
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 月球眩光区
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 月球眩光区详解 | Lunar Glare Zone
  description: 详细解析月球眩光区（耻辱锥）的定义、成因、影响范围及其对地月空间光学观测的限制
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 月球眩光区详解 | Lunar Glare Zone
  description: 详细解析月球眩光区（耻辱锥）的定义、成因、影响范围及其对地月空间光学观测的限制
  image: /logo.png
permalink: /glossary/observation/lunar-glare-zone/
---

# 月球眩光区（Lunar Glare Zone）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

月球眩光区（Lunar Glare Zone），又称"耻辱锥"（Cone of Shame），是指月球周围因月面反射太阳光而产生强烈散射光的区域。在该区域内，地面光学传感器和地球轨道天基光学传感器的观测能力受到严重限制，空间目标的信噪比（SNR）显著降低。

## 核心原理

月球本身不发光，其可见亮度来自对太阳光的反射。月面反射率（反照率）约为 0.12，但由于月球距地球较近且视面积大，其在天空中的亮度极高。当望远镜指向月球附近区域时，月球散射光会在光学系统内部产生杂散光（stray light），淹没来自暗弱空间目标的信号。

月球眩光区的影响范围通常定义为：

- **月心距 ∼15° 以内**：信噪比严重下降，光学观测极为困难
- **月心距 2°–15°**：观测受到显著影响，但通过特殊图像处理技术可能提取部分目标信号
- **月心距 <2°**：传统上认为完全不可观测，但近年研究表明可行性有所突破

## 影响因素

月球眩光区的实际影响范围受以下因素制约：

1. **月相**：满月时眩光最强，影响范围最大；新月时影响最小
2. **望远镜光学设计**：遮光罩长度、镜筒内部消光处理直接影响杂散光水平
3. **大气条件**：大气散射会加剧月球眩光的影响
4. **探测器灵敏度**：高灵敏度传感器在低信噪比条件下仍有一定检测能力
5. **图像处理算法**：先进的背景扣除和目标提取算法可在一定程度上缓解眩光影响

## 与其他观测限制的比较

月球眩光区是地月空间光学观测面临的几大限制之一，与其他限制因素的比较：

| 限制因素 | 影响范围 | 主要表现 |
|:---|:---|:---|
| 月球眩光区 | 月心距 ∼15° | 信噪比急剧下降 |
| 太阳回避区 | 太阳距角 <30° | 天空背景亮度高 |
| 大气消光 | 地平高度 <20° | 透过率下降、折射畸变 |
| 银河背景 | 银河平面附近 | 恒星密集，源检测困难 |

## 在地月空间观测中的应用

Sun 等人（2026）指出，"当观测月球附近区域时，由于月面反射的太阳光，使用地面光学传感器和地球轨道天基光学传感器都面临挑战"。在月球眩光区内，空间目标"以低信噪比成像"。

然而，该研究也展示了在月心距低至 2° 的条件下获取光学测量的可行性。这意味着通过优化观测策略和图像处理流程，可以将月球眩光区的有效观测边界从传统的 15° 向内大幅压缩，显著扩大地月空间光学巡天的可观测区域。

这一突破对于地月空间态势感知具有重要意义：许多重要的地月空间轨道（如近直线晕轨道 NRHO 的月球近端弧段）恰好穿越月球眩光区，能够在该区域内实现有效观测将极大提升空间态势感知的完整性。

## 相关概念

- [地月空间移动天体（Cislunar Moving Objects）](/glossary/observation/cislunar-moving-objects/)
- [图像配准（Image Registration）](/glossary/observation/image-registration/)
- [背景恒星消除（Background Star Elimination）](/glossary/observation/background-star-elimination/)
- [近直线晕轨道（NRHO）](/glossary/orbits/nrho/)

## 参考文献

- Sun, R., Zhang, Q., Yu, S., et al. Optical Survey for Cislunar Moving Objects Using Image Stacking. AJ, 2026.
