---
title: 星历关联（Ephemeris Correlation）
description: 星历关联是将观测到的候选目标位置序列与已知航天器星历数据进行匹配，以确认目标身份的关键识别步骤
keywords: 星历关联, Ephemeris Correlation, 轨道确定, 嫦娥六号, 残差分析, 地月空间, 目标识别, 航天器定轨
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 星历关联（Ephemeris Correlation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 星历关联（Ephemeris Correlation）详解 | Target Identification via Ephemeris Matching
  description: 星历关联是将观测到的候选目标位置序列与已知航天器星历数据进行匹配，以确认目标身份的关键识别步骤
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 星历关联（Ephemeris Correlation）详解 | Target Identification via Ephemeris Matching
  description: 星历关联是将观测到的候选目标位置序列与已知航天器星历数据进行匹配，以确认目标身份的关键识别步骤
  image: /logo.png
permalink: /glossary/observation/ephemeris-correlation/
---

# 星历关联（Ephemeris Correlation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

星历关联（Ephemeris Correlation）是将光学观测中检测到的候选运动目标的位置序列与已知航天器或天体的星历（Ephemeris）数据进行比较和匹配的过程。其核心目的是确认候选目标的真实身份——区分真正的航天器检测与虚警（False Detection）。

## 核心原理

### 星历数据

星历（Ephemeris）是描述天体或航天器在特定时间段内位置和速度随时间变化的预测数据表。对于地月空间中的航天器，星历通常由轨道确定系统基于精密定轨结果生成，包含：

- **赤经（R.A.）和赤纬（decl.）**：目标在天球上的预测位置
- **时间序列**：与观测时间对应的位置数据
- **精度指标**：预测位置的不确定性

### 关联流程

星历关联的基本流程为：

1. **获取观测位置序列**：对候选目标在多帧图像中的天体测量位置进行汇总，形成时间-位置序列
2. **查询星历**：根据观测时间，从星历数据中插值获取目标的预测位置
3. **位置比对**：将观测位置与星历预测位置进行逐点比较
4. **残差计算**：计算观测值与预测值之间的残差（R.A. 方向和 decl. 方向分别计算）
5. **关联判据**：若残差在合理范围内且呈现系统性一致趋势，则确认关联成功

### 残差分析

残差是评估星历关联质量的核心指标。Sun 等人（2026）在对嫦娥六号轨道器的观测中，对 8 帧叠加图像的关联结果进行了残差分析：

| 方向 | 均方根残差（RMS） |
|:---|:---:|
| 赤经（R.A.） | $1.942$ 像素 |
| 赤纬（decl.） | $1.098$ 像素 |

R.A. 方向残差略大于 decl. 方向，这与地月空间目标的运动方向和地球自转效应有关。

## 在地月空间观测中的应用

星历关联是地月空间光学巡天数据处理管线的最终确认步骤。Sun 等人（2026）的工作展示了星历关联在实际观测中的应用：

1. **虚警排除**：在图像叠加和源提取后，仍然存在大量候选检测。星历关联是区分真实目标与虚警的决定性步骤——无法与任何已知目标星历匹配的候选源将被标记为虚警
2. **目标确认**：将每个候选目标的赤道坐标时间序列与嫦娥六号轨道器的星历进行关联，确认其是否为轨道器
3. **精度验证**：通过残差分析，验证整个数据处理管线（源提取 → 天体测量 → 叠加）的综合精度
4. **多目标识别**：当视场中存在多个运动目标时，星历关联可分别与不同目标的星历进行匹配，实现多目标的同时识别

星历关联将天体测量的"位置"信息与轨道力学的"预测"信息相结合，是连接观测数据与空间态势感知的关键桥梁。

## 核心要素

### 观测原理
星历关联的核心原理是将观测获得的目标位置时间序列与基于轨道力学预测的星历位置进行比对。若观测位置与星历预测位置在残差统计上呈现系统性一致，则可确认目标身份；反之则判定为虚警或未知目标。

### 算法流程
关联流程为：汇总候选目标在多帧图像中的天体测量位置序列 → 根据观测时间从星历数据库插值获取预测位置 → 计算 R.A. 和 decl. 方向的逐点残差 → 统计残差均方根值（RMS）→ 若 RMS 在合理阈值内则确认关联成功，否则标记为虚警。

### 精度分析
关联精度以残差 RMS 衡量，受天体测量精度、星历预报精度和时间同步精度共同影响。实际观测中 R.A. 方向残差（约 1.94 像素）略大于 decl. 方向（约 1.10 像素），与目标运动方向和地球自转效应有关。残差的系统性趋势可作为评估整个数据处理管线综合精度的依据。

## 应用价值
星历关联是地月空间光学巡天数据处理管线的最终确认步骤，是区分真实航天器检测与虚警的决定性手段。该技术将天体测量的位置信息与轨道力学的预测信息相结合，为多目标同时识别和空间态势感知数据库的构建提供关键支撑。

## 相关概念

- [天体测量（Astrometry）](/glossary/observation/astrometry/)
- [源提取（Source Extraction）](/glossary/observation/source-extraction/)
- [信噪比（SNR）](/glossary/observation/signal-to-noise-ratio/)
- [图像叠加（Image Stacking）](/glossary/observation/image-stacking/)

## 参考文献

- Sun, R., Zhang, Q., Yu, S., et al. Optical Survey for Cislunar Moving Objects Using Image Stacking. AJ, 2026.
