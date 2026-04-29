---
title: 升阻比（Lift-to-Drag Ratio）
description: 详细解析升阻比的定义、物理意义、在空天飞行器气动设计和再入飞行中的关键作用
keywords: 升阻比, Lift-to-Drag Ratio, L/D, 气动特性, 升力, 阻力, 再入飞行器, 滑翔弹头, 航天飞机
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 升阻比（Lift-to-Drag Ratio）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 升阻比（Lift-to-Drag Ratio）详解 | 术语定义
  description: 详细解析升阻比的定义、物理意义及在空天飞行器中的关键作用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 升阻比（Lift-to-Drag Ratio）详解 | 术语定义
  description: 详细解析升阻比的定义、物理意义及在空天飞行器中的关键作用
  image: /logo.png
permalink: /glossary/fundamentals/lift-to-drag-ratio/
---

# 升阻比（Lift-to-Drag Ratio）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

升阻比（Lift-to-Drag Ratio，L/D）是飞行器所受升力与阻力之比，是衡量飞行器气动效率的关键参数。升阻比越大，飞行器在产生相同升力时所付出的阻力代价越小，气动性能越优。

$$L/D = \frac{C_L}{C_D}$$

其中 $C_L$ 为升力系数，$C_D$ 为阻力系数。

## 核心要素

### 物理意义

升阻比直接反映了飞行器的滑翔能力和机动能力：

- **高升阻比**（L/D > 2）：飞行器可进行远距离滑翔、精确控制落点、实现水平着陆
- **中等升阻比**（L/D ≈ 0.5–2）：飞行器可获得一定升力，增大航程并减少过载
- **低/零升阻比**（L/D ≈ 0）：飞行器沿弹道飞行，无气动控制能力

### 不同飞行器的升阻比

| 飞行器类型 | 典型升阻比 | 气动特点 |
|:---|:---|:---|
| 球形弹头 | 约 0 | 无升力，纯弹道飞行 |
| 飞船返回舱 | 0.2–0.5 | 通过质心偏移获得小量升力 |
| 航天飞机 | 1–3 | 大面积翼面产生显著升力 |
| 高超声速滑翔体 | 2–4 | 升力体构型，可在大气层内大范围机动 |
| 常规飞机 | 10–20 | 最佳升阻比远高于再入飞行器 |

### 升阻比对再入飞行的影响

升阻比是决定再入飞行器性能的核心参数：

- **再入走廊宽度**：升阻比越大，再入走廊越宽，飞行器可选择的再入方案越多
- **航程**：高升阻比飞行器可在大气层内滑翔数千公里
- **过载**：升力可部分抵消重力分量，降低再入过载
- **热流分布**：升力使飞行器在大气中停留更长时间，但峰值热流降低

## 应用价值

升阻比是空天飞行器气动设计的核心指标。对于再入飞行器，升阻比直接决定了再入方式（弹道式、弹道-升力式、升力式）和飞行性能。高超声速滑翔武器和可重复使用运载器的设计都以提高升阻比为重要目标。

## 相关概念

- [再入段（Reentry Phase）](/glossary/fundamentals/reentry-phase/)
- [空天飞行器（Aerospace Vehicle）](/glossary/fundamentals/aerospace-vehicle/)
- [主动段（Powered Phase）](/glossary/fundamentals/powered-phase/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
