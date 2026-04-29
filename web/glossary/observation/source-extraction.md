---
title: 源提取（Source Extraction）
description: 源提取是从天文图像中自动检测和测量天体源的过程，是地月空间光学巡天数据处理的基础步骤
keywords: 源提取, Source Extraction, SExtractor, 质心, 通量, 检测阈值, 地月空间, 光学巡天
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 源提取（Source Extraction）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 源提取（Source Extraction）详解 | Automated Source Detection in Astronomical Images
  description: 源提取是从天文图像中自动检测和测量天体源的过程，是地月空间光学巡天数据处理的基础步骤
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 源提取（Source Extraction）详解 | Automated Source Detection in Astronomical Images
  description: 源提取是从天文图像中自动检测和测量天体源的过程，是地月空间光学巡天数据处理的基础步骤
  image: /logo.png
permalink: /glossary/observation/source-extraction/
---

# 源提取（Source Extraction）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

源提取（Source Extraction）是从天文图像中自动检测天体源并测量其基本参数（位置、通量、形态等）的计算过程。它是天文数据处理管线中的基础步骤，为后续的天体测量、测光分析和目标识别提供原始测量数据。

## 核心原理

### SExtractor 工具

SExtractor（Source Extractor）是天文领域最广泛使用的源提取工具，由 Bertin 和 Arnouts 于 1996 年开发。Sun 等人（2026）在地月空间光学巡天中采用了这一工具，其主要功能包括：

- **质心测量（Centroid）**：计算每个检测源的精确像素坐标位置
- **通量测量（Flux）**：测量源的积分通量强度
- **形态参数**：提取源的形状信息（椭率、位置角等）
- **背景估计**：自动估计并扣除图像背景

### 检测阈值

源提取的核心参数之一是检测阈值，它决定了源信号需要超过背景噪声多少倍才会被认定为真实检测。阈值设置需要在灵敏度和可靠性之间取得平衡：

| 应用场景 | 推荐阈值 | 说明 |
|:---|:---:|:---|
| 背景恒星检测 | $1.5\sigma$ | 较低阈值，确保参考星的完整提取 |
| 候选目标检测（叠加后） | $3\sigma$ | 较高阈值，降低虚警率 |

Sun 等人（2026）特别指出："the threshold used in source extraction must be evaluated carefully in order to ensure that stars detected in different frames are the same"——即不同帧的检测阈值必须保持一致，以确保各帧提取的恒星集相同，这对后续的帧间交叉匹配至关重要。

### 处理流程

典型的源提取处理流程为：

1. **背景估计与扣除**：估计图像的背景水平和噪声标准差
2. **源检测**：基于阈值检测图像中的候选源
3. **去卷积与分割**：将相邻的源进行分离
4. **参数测量**：对每个检测源测量质心、通量、形态等参数
5. **输出目录**：生成包含所有检测源参数的源目录（Source Catalog）

## 在地月空间观测中的应用

在地月空间运动目标的光学巡天中，源提取是数据处理管线的第一个关键步骤。Sun 等人（2026）的工作展示了源提取在地月空间观测中的典型应用：

1. **逐帧源提取**：对每帧原始图像运行 SExtractor，获取所有检测源的质心坐标和通量强度
2. **天体测量输入**：源提取得到的质心坐标作为天体测量解算的输入数据
3. **帧间一致性**：通过精心设置检测阈值，确保不同帧中检测到的背景恒星集合一致，为后续的帧间配准和叠加奠定基础
4. **候选目标筛选**：在叠加图像上以较高阈值（$3\sigma$）进行源提取，筛选潜在的运动目标候选
5. **通量测量**：为后续的星等计算和目标亮度分析提供通量数据

源提取的质量直接影响整个数据处理管线的可靠性——遗漏的源可能导致参考星不足，虚警源则会引入错误的交叉匹配。

## 相关概念

- [天体测量（Astrometry）](/glossary/observation/astrometry/)
- [信噪比（SNR）](/glossary/observation/signal-to-noise-ratio/)
- [图像叠加（Image Stacking）](/glossary/observation/image-stacking/)
- [星历关联（Ephemeris Correlation）](/glossary/observation/ephemeris-correlation/)

## 参考文献

- Sun, R., Zhang, Q., Yu, S., et al. Optical Survey for Cislunar Moving Objects Using Image Stacking. AJ, 2026.
- Bertin, E., Arnouts, S. SExtractor: Software for source extraction. A&AS, 1996.
