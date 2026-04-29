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

## 相关概念

- [月球眩光区（Lunar Glare Zone）](/glossary/observation/lunar-glare-zone/)
- [图像配准（Image Registration）](/glossary/observation/image-registration/)
- [叠加搜索算法（Stacking Search Algorithm）](/glossary/observation/stacking-search-algorithm/)
- [背景恒星消除（Background Star Elimination）](/glossary/observation/background-star-elimination/)
- [热像素（Hot Pixel）](/glossary/observation/hot-pixel/)

## 参考文献

- Sun, R., Zhang, Q., Yu, S., et al. Optical Survey for Cislunar Moving Objects Using Image Stacking. AJ, 2026.
