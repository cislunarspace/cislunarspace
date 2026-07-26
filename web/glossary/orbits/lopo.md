---
title: 低顺行轨道（LoPO）
description: 详细解析低顺行轨道（LoPO）的定义、动力学特性、靠近月球的短周期运动及其在地月空间任务中的应用
keywords: 低顺行轨道, LoPO, Low Prograde Orbit, 地月空间, 月心轨道, 短周期, 月球停泊, 轨道动力学
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 低顺行轨道（LoPO）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 低顺行轨道（LoPO）详解 | 靠近月球的短周期轨道
  description: 详细解析低顺行轨道（LoPO）的定义、动力学特性、靠近月球的短周期运动及其在地月空间任务中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 低顺行轨道（LoPO）详解 | 靠近月球的短周期轨道
  description: 详细解析低顺行轨道（LoPO）的定义、动力学特性、靠近月球的短周期运动及其在地月空间任务中的应用
  image: /logo.png
permalink: /glossary/orbits/lopo/
---

# 低顺行轨道（LoPO）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

低顺行轨道（Low Prograde Orbit，LoPO）是**圆形限制性三体问题（CR3BP）中一类靠近月球的低轨道顺行周期轨道**，属于月心轨道（Moon-Centered Orbits）家族。LoPO 在会合坐标系中绕月逆时针运动（与月球公转方向相同），且轨道高度相对较低，因此称为"低顺行轨道"。LoPO 与 DPO（远距离顺行轨道）、DRO（远距离逆行轨道）共同构成了地月空间月心周期轨道的完整谱系。

## 核心要素

### LoPO 的动力学特性

LoPO 在 CR3BP 框架下具有以下特性：

- **低轨道高度**：LoPO 靠近月球表面运行，相对于月球的轨道高度较低，类似于传统的近月轨道
- **短周期**：LoPO 的轨道周期较短，从约 0.86 天到 11.50 天不等，低轨道成员周期接近典型的近月圆轨道周期（约 2 小时量级，在旋转坐标系中表现为约 1 天）
- **高能量**：LoPO 的 Jacobi 常数较高（约 3.18 ~ 3.53），表明这些轨道处于较高的能量水平
- **顺行运动**：LoPO 的运行方向与月球公转方向相同，在旋转坐标系中表现为逆时针运动

### LoPO 的轨道参数特征

以地月系统为例，LoPO 轨道族的主要参数范围如下（基于 Guzzetti 等人的动态目录统计）：

| 参数 | 范围 |
| :--- | :--- |
| Jacobi 常数 | 3.1805 ~ 3.5268（均值 3.2230） |
| 轨道周期 | 0.86 ~ 11.50 天（均值 约 3-5 天） |
| 稳定性指数 | 变化范围较宽 |

LoPO 的高 Jacobi 常数表明从 LEO 转移到 LoPO 需要较高的能量注入，但短周期特性有利于轨道操作和任务规划。

### LoPO 与 DPO、DRO 的对比

LoPO、DPO 和 DRO 是月心轨道家族中三个重要的类别：

| 特征 | DRO | DPO | LoPO |
| :--- | :--- | :--- | :--- |
| 运动方向 | 逆行 | 顺行 | 顺行 |
| 轨道高度 | 远离月球 | 中等 | 靠近月球 |
| 周期范围 | 5.87 ~ 27.38 天 | 5.82 ~ 28.00 天 | 0.86 ~ 11.50 天 |
| 能量水平 | 低（JC 1.44 ~ 3.02） | 中等（JC 2.99 ~ 3.18） | 高（JC 3.18 ~ 3.53） |
| 稳定性 | predominantly 稳定 | 变化大 | 变化大 |

### LoPO 在月球任务中的角色

LoPO 在地月空间任务设计中具有以下特点：

- **月球停泊轨道**：LoPO 靠近月球的特性使其成为月球着陆任务的自然候选停泊轨道
- **短周期优势**：LoPO 的短周期有利于快速轨道调整和频繁的发射窗口
- **通信覆盖**：低轨道成员可提供高分辨率的月球表面观测和通信覆盖
- **与共振轨道的关系**：部分 LoPO 成员可能与月球构成简单的共振关系（如 1:1 共振）

### 轨道维持挑战

LoPO 作为低轨道面临一些特有的挑战：

- 靠近月球意味着月球非球形引力（J2、C22 等）和地形摄动更为显著
- 可能需要更频繁的轨道维持机动来抵消摄动影响
- 在真实力学环境（星历模型）中，LoPO 的周期性和闭合性会受到更大破坏

## 应用价值

LoPO 在地月空间任务中具有以下应用价值：

- **月球着陆任务**：LoPO 可作为载人或无人月球着陆任务的临时停泊和检查轨道
- **月球科学观测**：靠近月球的 LoPO 适合进行高分辨率月球表面测绘和科学探测
- **通信中继**：部分 LoPO 可用于提供月球表面与地球之间的通信中继服务
- **轨道比较与选择**：在 Guzzetti 等人提出的动态目录框架中，LoPO 是月心轨道家族的重要成员，为任务设计提供了靠近月球的轨道选择

## 相关概念

- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)
- [远距离顺行轨道（DPO）](/glossary/orbits/dpo/)
- [顺行（Prograde）](/glossary/orbits/prograde/)
- [逆行（Retrograde）](/glossary/orbits/retrograde/)
- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

## 参考文献

- Guzzetti D, Bosanac N, Howell K C. A framework for efficient trajectory comparisons in the Earth-Moon design space[C]. AAS/AIAA Space Flight Mechanics Meeting, 2014.
- Folta D, Bosanac N, Guzzetti D, et al. An Earth-Moon system trajectory design reference catalog[C]. 2nd IAA Conference on Dynamics and Control of Space Systems, 2014.
- Whitley R, Martinez R. Options for staging orbits in cislunar space[C]. AIAA Space Conference and Exposition, 2016.
