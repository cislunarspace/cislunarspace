---
title: 星伞（Starshade）
description: 详细解析星伞（Starshade）的定义、工作原理、在地月空间任务中的应用，以及与望远镜的编队飞行构型
keywords: 星伞, Starshade, 恒星遮光, 系外行星成像, 编队飞行, 地月空间, 望远镜-星伞系统
author: 天疆说
date: 2026-04-23
lastUpdated: 2026-04-23
wechatShare:
  title: 星伞（Starshade）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 星伞（Starshade）详解 | 系外行星直接成像的遮光技术
  description: 详细解析星伞的定义、工作原理、在地月空间任务中的应用，以及与望远镜的编队飞行构型
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 星伞（Starshade）详解 | 系外行星直接成像的遮光技术
  description: 详细解析星伞的定义、工作原理、在地月空间任务中的应用，以及与望远镜的编队飞行构型
  image: /logo.png
permalink: /glossary/other/starshade/
---

# 星伞

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文编辑来源：Genszler et al. (2026) "Surveying orbits in cislunar space for telescope-starshade observatories"
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

星伞（Starshade）是一种**恒星光抑制系统**（starlight suppression system），通过在望远镜前方特定位置部署带有花瓣形边缘的遮光体，遮挡目标星的直射光，同时允许来自系外行星的偏振光进入望远镜，从而实现对系外行星的**直接成像光谱测量**。星伞是系外行星直接成像任务的核心技术之一，典型应用包括 HabEx（Habitable Exoplanet Observatory）和 LUVOIR（Large Ultraviolet Optical Infrared Surveyor）任务概念。

## 核心要素

### 基本概念
星伞是一种外日冕仪（external coronagraph），通过在望远镜前方特定距离部署大型遮光体，利用菲涅耳衍射原理抑制目标恒星的直射光，使周围极暗的系外行星反射光得以被望远镜探测。与内部日冕仪相比，星伞不受望远镜光学衍射极限的约束，可实现更高的对比度。

### 技术特征
星伞的关键技术参数包括：（1）分离距离（典型 120,000 km），决定了内工作角和遮挡效率；（2）花瓣形边缘设计，通过优化衍射图案将星光泄漏降至 $10^{-10}$ 量级对比度；（3）与望远镜的编队飞行精度要求，相对位置控制在米级。

### 实现方法
星伞任务的实现涉及遮光结构的折叠发射与在轨精确展开、与望远镜的编队飞行控制、以及观测切换（slew）时的双脉冲机动。每次 slew 需要两次点火：第一次启动转移，第二次匹配目标星方向的速度。

## 工作原理

星伞与望远镜沿望远镜指向目标星的视线（Line of Sight，LOS）形成**编队飞行**（formation flying）构型：

$$\vec{r}_{ss/O} = \vec{r}_{sc/O} + s \hat{r}_{LOS}$$

其中 $s$ 为星伞与望远镜之间的**分离距离**（separation distance），典型值为 $120 \times 10^3$ km（120,000 km）。

### 花瓣形设计

星伞通常采用**花瓣形设计**（flower-like design），中心为圆形，边缘附加花瓣形结构。这一设计能够有效**抑制衍射效应**，使艾里斑（Airy disk）能量集中在中心遮挡区域，大幅降低目标星光的泄漏。

### 内工作角

内工作角（Inner Working Angle，IWA）是表征星伞遮挡能力的关键参数，定义为：

$$\tan \gamma = \frac{R}{s}$$

其中 $R$ 为星伞半径，$s$ 为分离距离。对于 72 m 直径星伞在 120,000 km 分离距离下，IWA 约为 0.06 角秒。

## 关键技术挑战

当前星伞技术尚未达到任务就绪水平（TRL 9），主要技术挑战包括：

| 技术挑战 | 描述 |
|:---|:---|
| 太阳炫光（Solar glint） | 太阳光在星伞表面的反射干扰 |
| 热控（Thermal control） | 长时间深空运行的热稳定性 |
| 结构振动阻尼（Structural vibration dampening） | 帆翼结构的微振动控制 |
| 部署精度（Deployment accuracy） | 遮光结构的精确展开与形面控制 |
| 形状控制（Shape control） | 遮光体形状的长期保持 |

NASA 的 **S5 计划**（定向活动）已针对恒星光抑制、编队感知与控制、部署精度和形状等问题开展攻关，推动星伞技术向 TRL 5 发展，但距离任务实用化仍有距离。

## 与望远镜的相对运动

在会合坐标系中，星伞的轨迹不形成封闭周期轨道。每次观测切换（slew）时，星伞需要执行两次脉冲机动：

1. **第一次点火**：从当前目标星切换至下一个目标星
2. **第二次点火**：机动结束时与望远镜速度匹配，恢复跟踪状态

这一过程涉及**差分加速度**（differential acceleration）的精确控制，是任务设计中的核心问题。

## 地月空间应用

Genszler et al. (2026) 研究了在地月空间轨道上部署星伞技术演示任务的可行性，主要考虑三类轨道族：

- **远距离逆行轨道（DRO）**：稳定的多周期轨道，适合多次观测切换演示
- **地月 L1 晕轨道（EML1 Halo）**：周期约 8-10 天，转移时间短
- **地月 L2 晕轨道（EML2 Halo）**：周期约 6-10 天，观测条件优越

研究发现，在 20 m/s 的 $\Delta v$ 预算下，分离距离需降至约 **10,000 km** 才能实现可行的 slew 机动——这远小于 SEL2 任务的 120,000 km 分离距离，表明在地月空间进行星伞技术演示需要显著缩小系统规模。

## 应用价值
星伞技术是实现系外行星直接成像和光谱表征的关键手段，能够探测行星大气中的生物标志气体（如氧气、甲烷），对寻找宜居世界具有革命性意义。在地月空间部署星伞技术演示任务可验证编队飞行和遮光性能，为未来日地 L2 点科学任务奠定技术基础。

## 相关概念

- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)
- [近直线晕轨道（NRHO）](/glossary/orbits/nrho/)
- [地月 L1/L2 晕轨道](/glossary/orbits/eml-halo/)
- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- 系外行星直接成像（Direct Imaging）
- 编队飞行（Formation Flying）

## 参考文献

- Genszler G, Savransky D, Soto G J. Surveying orbits in cislunar space for telescope-starshade observatories[J]. 2026.
- Vanderbei R J, Cady E, Kasdin N J. Optimal occulter design for finding extrasolar planets[J]. Astrophysical Journal, 2007, 665(1): 794.
- Morgan R, Savransky D, Turmon M, et al. An exploration of expected number of exoplanets for a 6 m class direct imaging observatory[C]. SPIE, 2022, 12180: 761-775.
- Willems P, Lisman D. NASA's starshade technology development activity[J]. JATIS, 2021, 7(2): 021203.
