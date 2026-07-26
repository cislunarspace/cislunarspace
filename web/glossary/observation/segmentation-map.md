---
title: 分割图（Segmentation Map）
description: 详细解析分割图的定义、生成方法、数据结构及其在天文图像处理和地月空间观测中的应用
keywords: 分割图, Segmentation Map, SExtractor, 源检测, 掩模, 天文图像处理, 背景恒星消除
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 分割图
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 分割图详解 | Segmentation Map
  description: 详细解析分割图的定义、生成方法、数据结构及其在天文图像处理和地月空间观测中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 分割图详解 | Segmentation Map
  description: 详细解析分割图的定义、生成方法、数据结构及其在天文图像处理和地月空间观测中的应用
  image: /logo.png
permalink: /glossary/observation/segmentation-map/
---

# 分割图（Segmentation Map）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

分割图（Segmentation Map）是由源提取软件 SExtractor（Source Extractor）生成的一种二维数组图像。Sun 等人（2026）将其定义为："分割图是一个与原始帧具有相同形状和大小的数组，其中所有属于背景恒星的像素被设为非零值，其余像素为零。"

## 核心原理

### SExtractor 源检测

SExtractor（Bertin & Arnouts, 1996）是天文图像处理领域广泛使用的自动源检测与测光软件。其工作流程为：

1. **背景估计**：估计图像的背景噪声水平
2. **像素阈值化**：将高于背景一定倍数的像素标记为源候选
3. **连通域分析**：将相邻的源候选像素聚类为独立的源
4. **参数测量**：对每个检测到的源测量位置、流量、形状等参数

### 分割图的数据结构

分割图是一种标签图像（label image），其数据结构具有以下特点：

- **尺寸**：与原始天文帧完全一致（相同像素数）
- **背景像素值**：0（不属于任何检测源）
- **源像素值**：非零正整数（属于第 N 个检测源的像素值为 N）
- **源边界**：由相邻像素的标签变化自然定义

### 作为掩模使用

在天文图像处理中，分割图最常见的用途是作为掩模（mask）。通过将原始图像与分割图相乘或用分割图标记区域进行替换，可以实现：

- **恒星区域屏蔽**：将恒星像素从后续处理中排除
- **区域选择**：提取特定源周围的像素进行分析
- **背景估计**：排除源像素后更准确地估计天空背景

## 在地月空间观测中的应用

在地月空间移动天体的光学巡天中，分割图是背景恒星消除步骤的核心工具。Sun 等人（2026）描述了其具体应用流程：

1. 使用 SExtractor 对配准后的图像进行源检测，生成分割图
2. 将分割图用作掩模，"将检测到的恒星的所有像素值设为零"
3. 处理后的图像送入叠加搜索算法（SAA），仅保留非恒星区域的信号

这一流程确保了 SAA 算法仅在无恒星干扰的像素上运行，大幅提高了算法效率和检测灵敏度。

### 注意事项

分割图掩模法的效果取决于 SExtractor 的检测阈值设置：

- 检测阈值过高可能导致恒星边缘像素未被标记，产生残留信号
- 检测阈值过低可能导致暗弱移动目标被误标记为恒星而被消除
- 对于重叠源（如双星或星系中的恒星），分割图的边界可能不够精确

## 核心要素

### 观测原理

分割图由 SExtractor 源检测工具生成，是一种标签图像（label image），与原始天文帧具有相同尺寸。背景像素值为零，属于第 N 个检测源的像素值为 N，通过相邻像素的标签变化自然定义源边界，实现源区域与背景的精确分割。

### 算法流程

生成流程为：SExtractor 估计图像背景噪声水平 → 将高于背景一定倍数的像素标记为源候选 → 通过连通域分析将相邻像素聚类为独立源 → 对每个源赋予唯一标签值 → 输出与原始帧等大的标签数组作为分割图。分割图可直接用作掩模，将恒星像素从后续处理中排除。

### 精度分析

分割图的质量取决于 SExtractor 的检测阈值设置：阈值过高可能导致恒星边缘像素未被标记，产生残留信号；阈值过低可能导致暗弱移动目标被误标记为恒星而被消除。对于重叠源（如双星）和月球眩光区内的弥散背景，分割图的边界精度可能下降。

## 应用价值

分割图是背景恒星消除步骤的核心工具，也是天文图像处理中源区域识别和掩模生成的通用手段。在地月空间光学巡天中，高质量的分割图可有效隔离恒星信号与移动目标信号，显著提高叠加搜索算法的检测灵敏度和效率。

## 相关概念

- [背景恒星消除（Background Star Elimination）](/glossary/observation/background-star-elimination/)
- [图像配准（Image Registration）](/glossary/observation/image-registration/)
- [叠加搜索算法（Stacking Search Algorithm）](/glossary/observation/image-stacking/)
- [热像素（Hot Pixel）](/glossary/observation/hot-pixel/)

## 参考文献

- Sun, R., Zhang, Q., Yu, S., et al. Optical Survey for Cislunar Moving Objects Using Image Stacking. AJ, 2026.
- Bertin, E., & Arnouts, S. SExtractor: Software for source extraction. A&AS, 117, 393–404, 1996.
