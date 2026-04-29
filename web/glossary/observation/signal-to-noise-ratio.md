---
title: 信噪比（Signal-to-Noise Ratio, SNR）
description: 信噪比是天文观测中最基础的度量指标，决定了天体目标能否从背景噪声中被有效检测和识别
keywords: 信噪比, SNR, Signal-to-Noise Ratio, 图像叠加, 天文观测, 检测阈值, 地月空间, 图像处理
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 信噪比（SNR）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 信噪比（SNR）详解 | Signal-to-Noise Ratio in Cislunar Observation
  description: 信噪比是天文观测中最基础的度量指标，决定了天体目标能否从背景噪声中被有效检测和识别
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 信噪比（SNR）详解 | Signal-to-Noise Ratio in Cislunar Observation
  description: 信噪比是天文观测中最基础的度量指标，决定了天体目标能否从背景噪声中被有效检测和识别
  image: /logo.png
permalink: /glossary/observation/signal-to-noise-ratio/
---

# 信噪比（Signal-to-Noise Ratio, SNR）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

信噪比（Signal-to-Noise Ratio，SNR）是衡量观测信号强度与背景噪声水平之比的无量纲指标，是天文观测中最基础、最关键的质量度量。SNR 越高，表示目标信号相对于背景噪声越强，检测结果越可靠。

在天文图像中，SNR 通常定义为目标源的信号强度（通量）与背景噪声标准差之比：

$$\text{SNR} = \frac{S}{\sigma_{\text{bg}}}$$

其中 $S$ 为目标信号，$\sigma_{\text{bg}}$ 为背景噪声的标准差。

## 核心原理

### 单帧信噪比

单帧图像的信噪比记为 $\text{SNR}_O$，受限于大气条件、曝光时间、望远镜口径和探测器噪声等因素。对于地月空间中的暗弱运动目标，单帧 SNR 往往较低，难以可靠检测。

### 多帧叠加的信噪比提升

多帧图像叠加（Image Stacking）是提升 SNR 的核心技术手段。假设各帧独立同分布，将 $N$ 帧图像叠加后，信号线性叠加而噪声以 $\sqrt{N}$ 增长，因此叠加后的 SNR 为：

$$\text{SNR}_S = \text{SNR}_O \cdot \sqrt{N}$$

即 SNR 提升倍率为 $\sqrt{N}$。Sun 等人（2026）通过实际观测数据验证了这一关系：

| 叠加帧数 $N$ | SNR 提升倍率（理论值 $\sqrt{N}$） | 实测提升倍率 |
|:---:|:---:|:---:|
| 4 | 2.00× | 1.90× |
| 6 | 2.45× | 2.29× |
| 9 | 3.00× | 2.73× |

实测值略低于理论值，主要因为帧间存在相关噪声（如大气湍流引起的系统误差）以及图像配准精度的限制。

### 检测阈值

SNR 是决定目标能否被检测的关键参数。当目标的 SNR 低于某一阈值时，目标将淹没在噪声中无法被识别。在源提取阶段，检测阈值通常设为背景噪声标准差的数倍（如 $1.5\sigma$ 用于背景恒星检测，$3\sigma$ 用于叠加后的候选目标检测）。

## 在地月空间观测中的应用

地月空间中的运动目标（如航天器、碎片）亮度暗弱、运动速度快，单帧观测的 SNR 通常很低。Sun 等人（2026）在使用图像叠加技术对嫦娥六号轨道器进行光学巡天观测时，系统性地利用了 SNR 的叠加提升效应：

1. **逐级叠加验证**：通过从 2 帧到 9 帧的逐步叠加，验证了 SNR 按 $\sqrt{N}$ 规律提升的理论预期
2. **叠加帧数优化**：研究发现 9 帧叠加可将 SNR 提升超过 2.7 倍，显著提高了暗弱目标的检测率
3. **残差分析基础**：SNR 直接影响天体测量精度——高 SNR 图像的测量精度可达 0.1 像素以内，为后续的星历关联提供可靠的输入数据

这一方法为地月空间态势感知中的暗弱目标检测提供了实用的技术路径。

## 核心要素

### 观测原理
信噪比定义为目标信号强度与背景噪声标准差之比（SNR = S/σ_bg）。信号源包括天体目标的光子信号，噪声源包括读出噪声、暗电流噪声、天空背景噪声和光子散粒噪声。SNR 越高，检测结果越可靠，天体测量和测光精度越高。

### 算法流程
SNR 提升的核心手段是多帧叠加：将 N 帧独立图像叠加后，信号线性增长 N 倍，噪声按 √N 倍增长，因此 SNR 提升 √N 倍。实测中因帧间相关噪声和配准精度限制，实际提升倍率略低于理论值。在源提取阶段，检测阈值通常设为 1.5σ（背景恒星）或 3σ（叠加后候选目标）。

### 精度分析
SNR 直接影响天体测量精度：高 SNR 图像的质心测量精度可达 0.1 像素以内，低 SNR 图像的测量误差显著增大。叠加帧数增加到一定程度后增益趋于饱和；对于移动目标还需权衡叠加帧数与目标运动导致的信号模糊之间的关系。月球眩光区内观测时 SNR 会急剧下降。

## 应用价值
信噪比是评估地月空间暗弱目标检测能力的基础指标，决定了光学巡天系统的探测极限。通过图像叠加技术系统性提升 SNR，可将单帧难以检测的暗弱目标提升至可检测水平，为地月空间态势感知中的目标发现、测光分析和天体测量提供质量保障。

## 相关概念

- [图像叠加（Image Stacking）](/glossary/observation/image-stacking/)
- [源提取（Source Extraction）](/glossary/observation/source-extraction/)
- [天体测量（Astrometry）](/glossary/observation/astrometry/)
- [星历关联（Ephemeris Correlation）](/glossary/observation/ephemeris-correlation/)

## 参考文献

- Sun, R., Zhang, Q., Yu, S., et al. Optical Survey for Cislunar Moving Objects Using Image Stacking. AJ, 2026.
