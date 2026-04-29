---
title: 天体测量（Astrometry）
description: 天体测量是通过精确测定天体在天球上的位置和运动参数，为地月空间目标定轨和识别提供核心数据支撑的观测技术
keywords: 天体测量, Astrometry, 赤道坐标, 位置测量, 像素精度, 地月空间, 嫦娥六号, Tycho-2
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 天体测量（Astrometry）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 天体测量（Astrometry）详解 | Precision Position Measurement in Cislunar Space
  description: 天体测量是通过精确测定天体在天球上的位置和运动参数，为地月空间目标定轨和识别提供核心数据支撑的观测技术
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 天体测量（Astrometry）详解 | Precision Position Measurement in Cislunar Space
  description: 天体测量是通过精确测定天体在天球上的位置和运动参数，为地月空间目标定轨和识别提供核心数据支撑的观测技术
  image: /logo.png
permalink: /glossary/observation/astrometry/
---

# 天体测量（Astrometry）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

天体测量（Astrometry）是天文学的核心分支之一，专注于精确测定天体在天球上的位置（赤经、赤纬）、自行、视差等运动参数。在地月空间观测中，天体测量为运动目标的精确定位、轨道确定和目标识别提供基础数据支撑。

## 核心原理

### 测量流程

天体测量的基本流程包括：

1. **源提取**：从天文图像中检测并提取天体源的像素坐标（质心）和通量信息
2. **天体测量解算**：利用已知参考星（如 Tycho-2 星表）的精确位置，建立像素坐标与天球坐标之间的映射关系（即天体测量解，Astrometric Solution）
3. **坐标转换**：基于天体测量解，将所有检测源的像素坐标转换为赤道坐标（赤经 R.A.、赤纬 decl.）
4. **星等计算**：结合测光标定，计算各源的视星等

### 测量精度

天体测量精度取决于多个因素：

- **信噪比（SNR）**：高 SNR 图像的质心测量精度更高。Sun 等人（2026）研究表明，高 SNR 图像的测量精度可达 **0.1 像素以内**
- **参考星密度**：参考星越多，天体测量解越稳健
- **图像畸变校正**：光学系统畸变会引入系统性位置误差
- **大气折射**：对低仰角观测影响显著

### 参考星表

天体测量依赖高精度的参考星表建立坐标框架。常用的星表包括：

| 星表 | 特点 |
|:---|:---|
| Tycho-2 | 约 250 万颗恒星，位置精度约 7 mas |
| Gaia DR3 | 约 18 亿颗恒星，亚毫角秒精度 |
| UCAC4 | 约 1.13 亿颗恒星，覆盖至 16 等 |

## 在地月空间观测中的应用

在地月空间运动目标的光学巡天中，天体测量贯穿整个数据处理流程。Sun 等人（2026）在嫦娥六号轨道器的光学观测中，系统性地运用了天体测量技术：

1. **帧间对齐**：利用天体测量信息进行多帧图像的精确对齐和配准（Image Registration），确保叠加过程中各帧的像素严格对应
2. **坐标解算**：将检测到的候选源与 Tycho-2 星表交叉匹配，获取天体测量解，进而计算所有候选图像的赤道坐标和视星等
3. **运动目标识别**：通过比较同一目标在不同帧中的天体测量位置变化，区分真实运动目标与背景恒星
4. **星历关联输入**：高精度的天体测量结果是后续星历关联（Ephemeris Correlation）的关键输入数据

## 相关概念

- [源提取（Source Extraction）](/glossary/observation/source-extraction/)
- [信噪比（SNR）](/glossary/observation/signal-to-noise-ratio/)
- [星历关联（Ephemeris Correlation）](/glossary/observation/ephemeris-correlation/)
- [图像叠加（Image Stacking）](/glossary/observation/image-stacking/)

## 参考文献

- Sun, R., Zhang, Q., Yu, S., et al. Optical Survey for Cislunar Moving Objects Using Image Stacking. AJ, 2026.
