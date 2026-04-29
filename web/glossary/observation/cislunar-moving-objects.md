---
title: 地月空间移动天体（Cislunar Moving Objects）
description: 详细解析地月空间移动天体的定义、运动特征、观测挑战及其在空间态势感知中的应用
keywords: 地月空间移动天体, Cislunar Moving Objects, 地月空间, 空间碎片, 三体问题, 空间态势感知, 光学巡天
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 地月空间移动天体
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 地月空间移动天体详解 | Cislunar Moving Objects
  description: 详细解析地月空间移动天体的定义、运动特征、观测挑战及其在空间态势感知中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 地月空间移动天体详解 | Cislunar Moving Objects
  description: 详细解析地月空间移动天体的定义、运动特征、观测挑战及其在空间态势感知中的应用
  image: /logo.png
permalink: /glossary/observation/cislunar-moving-objects/
---

# 地月空间移动天体（Cislunar Moving Objects）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

地月空间移动天体（Cislunar Moving Objects）是指存在于地月空间区域内、相对于背景恒星具有视运动的各类天体。"地月空间"（cislunar space）指受地球和/或月球引力影响的空间区域。这些移动天体主要包括三大类：

- **航天器**：各类人造卫星、深空探测器、月球轨道器等
- **空间碎片**：废弃的火箭上面级、碰撞产生的碎片、退役卫星残骸等
- **自然天体**：近地小行星（NEA）、临时捕获天体等

## 核心特征

与近地轨道（LEO）中的空间目标相比，地月空间移动天体具有以下显著特征：

### 运动规律不同

地月空间天体的运动"通常遵循三体问题的规律，而非通常的二体问题"。这意味着其轨道演化受地球和月球引力的共同支配，运动模式更加复杂，难以用简单的开普勒轨道根数进行描述。

### 视亮度更低

由于距离地球观测者"显著更远"，地月空间天体对地面观测者而言"更加暗弱"。这一特征对望远镜口径、曝光时间和图像处理算法提出了更高要求。

### 视角运动速度更大

与近地小行星相比，地月空间天体"表现出更大的视角运动速度"。这意味着在固定曝光时间内，目标在图像上的位移更大，更容易被传统的静止目标巡天方法所遗漏。

## 观测挑战

地月空间移动天体的探测面临多重挑战：

1. **信号微弱**：距离远导致亮度低，需要大口径望远镜和长曝光时间
2. **运动速度快**：传统的图像叠加方法可能因目标运动而产生拖影，降低检测灵敏度
3. **背景干扰**：密集的恒星背景、宇宙射线和热像素等均增加虚警率
4. **轨道预报困难**：三体动力学使得长期轨道预报精度下降

## 在地月空间观测中的应用

Sun 等人（2026）针对地月空间移动天体的光学巡天需求，提出了基于图像叠加（Image Stacking）的系统化观测方案。该方案通过以下步骤实现对暗弱移动天体的高效探测：

1. **图像配准**：对齐连续帧以消除跟踪误差
2. **背景恒星消除**：从配准后的图像中减去恒星背景
3. **叠加搜索算法（SAA）**：在不同假设速度下叠加图像，增强移动天体信号
4. **热像素去除**：通过中值滤波消除传感器缺陷的影响

该方法能够在保持较高检测灵敏度的同时，有效处理地月空间天体的快速视运动特征。

## 核心要素

### 观测原理
地月空间移动天体的探测基于光学巡天观测原理：通过望远镜以恒星跟踪模式拍摄连续图像序列，利用天体测量技术对图像进行精确配准，再通过移位叠加算法在不同速度假设下叠加图像，增强移动目标信号并检测候选天体。

### 算法流程
标准观测流程为：原始图像采集 → 偏置和平场校正 → 天体测量解算与图像配准 → 背景恒星消除 → 热像素去除 → 叠加搜索算法（SAA）在多种速度假设下叠加检测 → 候选源提取与星历关联确认。整个流程针对三体运动目标的复杂运动模式进行优化。

### 精度分析
探测能力取决于望远镜口径、曝光时间、叠加帧数和图像处理算法的综合性能。地月空间天体距离远、亮度低，单帧 SNR 通常不足；通过多帧叠加可将 SNR 提升 √N 倍，但三体运动的非圆锥曲线轨迹增加了运动补偿的复杂度，需在速度搜索空间分辨率和计算效率之间权衡。

## 应用价值
地月空间移动天体的探测是空间态势感知的核心任务，涵盖航天器监视、空间碎片编目和近地天体预警。高效的光学巡天能力可为地月空间交通管理、碰撞风险评估和深空探测安全提供关键数据支撑。

## 相关概念

- [月球眩光区（Lunar Glare Zone）](/glossary/observation/lunar-glare-zone/)
- [图像配准（Image Registration）](/glossary/observation/image-registration/)
- [叠加搜索算法（Stacking Search Algorithm）](/glossary/observation/image-stacking/)
- [背景恒星消除（Background Star Elimination）](/glossary/observation/background-star-elimination/)
- [热像素（Hot Pixel）](/glossary/observation/hot-pixel/)

## 参考文献

- Sun, R., Zhang, Q., Yu, S., et al. Optical Survey for Cislunar Moving Objects Using Image Stacking. AJ, 2026.
