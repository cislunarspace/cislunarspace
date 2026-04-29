---
title: 移位叠加（Shift-and-Add, SAA）
description: 移位叠加是一种通过假设目标运动轨迹并对图像进行位移后再叠加，以检测移动天体的图像处理技术
keywords: 移位叠加, Shift-and-Add, SAA, 图像叠加, 移动天体检测, 地月空间巡天, 近地小行星
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 移位叠加（Shift-and-Add, SAA）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 移位叠加（Shift-and-Add, SAA）详解 | 移动天体检测技术
  description: 移位叠加是一种通过假设目标运动轨迹并对图像进行位移后再叠加，以检测移动天体的图像处理技术
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 移位叠加（Shift-and-Add, SAA）详解 | 移动天体检测技术
  description: 移位叠加是一种通过假设目标运动轨迹并对图像进行位移后再叠加，以检测移动天体的图像处理技术
  image: /logo.png
permalink: /glossary/observation/shift-and-add/
---

# 移位叠加（Shift-and-Add, SAA）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

移位叠加（Shift-and-Add, SAA）是在图像叠加基础上发展而来的移动天体检测技术。该技术通过预先假设被观测目标的多种可能运动轨迹，将多帧图像按照假设的位移量进行平移后再叠加，从而在叠加后的帧上提取候选天体源。SAA 技术有效解决了传统图像叠加无法检测移动目标的问题。

## 核心原理

### 基本思想

标准图像叠加假设目标在各帧中位置固定，因此对于移动天体，直接叠加会导致信号被"拖尾"或"模糊"。SAA 技术的核心思想是：在叠加之前，先将各帧图像按照目标的假设运动方向和速度进行位移，使得在该运动假设下，目标在各帧中的位置对齐，然后再进行叠加。

### 处理流程

SAA 技术的完整处理流程包括三个主要步骤：

#### 1. 图像预处理

对每帧原始图像进行标准化校正：

- **偏置扣除（Bias Subtraction）**：去除读出电子系统的固定模式噪声
- **平场校正（Flat-field Correction）**：校正光学系统和探测器的响应不均匀性
- **热像素消除（Hot Pixel Elimination）**：去除探测器缺陷产生的异常亮像素

#### 2. 图像对齐

在应用 SAA 之前，需要对图像进行基础对齐：

- **背景恒星去除**：识别并去除背景恒星信号，避免其对目标检测产生干扰
- **帧间偏移估计**：计算各帧之间的指向偏差，为后续位移操作提供基准

#### 3. SAA 检测

核心的移位叠加过程：

- **假设位移量**：设定一组位移参数 $(dx, dy)$，表示目标在帧间的像素移动量
- **图像位移**：将各帧图像按照 $(dx, dy)$ 进行像素级平移
- **叠加合并**：将位移后的图像进行叠加
- **候选源提取**：在叠加后的帧上检测候选天体源
- **多组尝试**：使用多组不同的 $(dx, dy)$ 值重复上述过程，生成多张叠加帧，以覆盖目标可能的运动范围

### 计算效率优化

为提高计算效率，SAA 技术通常采用整像素（integer pixel）位移操作，而非亚像素级插值。虽然亚像素插值可以提供更精确的对齐，但整像素位移在计算上更为高效，尤其在需要尝试大量 $(dx, dy)$ 组合时具有显著优势。

## 在地月空间观测中的应用

SAA 技术在地月空间移动天体观测中发挥着关键作用。地月空间天体的运动特性使得传统的固定目标检测方法不再适用：

- **非圆锥运动**：地月空间天体的运动遵循三体问题的动力学规律，而非简单的二体圆锥曲线运动
- **非平面轨迹**：这些天体的运动轨迹通常不在一个平面内，运动模式复杂
- **表观运动特点**：在恒星跟踪观测模式下，地月空间天体相对于背景恒星的表观运动并不显著，这使得 SAA 技术的应用更为可行

Sun 等人（2026）指出，SAA 技术通过假设多种运动模式并进行移位叠加，可以有效覆盖地月空间天体的可能运动范围，实现对微弱移动目标的检测。该技术是合成跟踪（Synthetic Tracking）的基础，后者在 SAA 的基础上进一步提升了计算效率和实时处理能力。

## 相关概念

- [图像叠加（Image Stacking）](/glossary/observation/image-stacking/)
- [合成跟踪（Synthetic Tracking）](/glossary/observation/synthetic-tracking/)
- [恒星跟踪（Sidereal Tracking）](/glossary/observation/sidereal-tracking/)

## 参考文献

- Sun, R., Zhang, Q., Yu, S., et al. Optical Survey for Cislunar Moving Objects Using Image Stacking. AJ, 2026.
