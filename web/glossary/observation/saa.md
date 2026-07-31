---
title: 移位叠加法（Shift-and-Add, SAA）
description: 检测暗弱运动天体的图像处理方法。针对连续曝光的多帧图像，按照假设的目标运动位移量将各帧平移对齐后叠加，使目标信号增强、信噪比提高，从而提取单帧中不可见的暗弱目标。最初用于提升天文图像分辨率，后广泛用于近地小行星和地月空间运动目标巡天。算法核心是遍历多组可能的位移量（dx, dy），对每组位移叠加后提取候选源，再利用运动
keywords: 移位叠加法, Shift-and-Add, SAA, SAA, observation
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 移位叠加法（Shift-and-Add, SAA）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 移位叠加法详解 | 术语定义
  description: 检测暗弱运动天体的图像处理方法。针对连续曝光的多帧图像，按照假设的目标运动位移量将各帧平移对齐后叠加，使目标信号增强、信噪比提高，从而提取单帧中不可见的暗弱目标。最初用于提升天文图像分辨率，后广泛用于近地小行星和地月空间运动目标巡天。算法核心是遍历多组可能的位移量（dx, dy），对每组位移叠加后提取候选源，再利用运动
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 移位叠加法详解 | 术语定义
  description: 检测暗弱运动天体的图像处理方法。针对连续曝光的多帧图像，按照假设的目标运动位移量将各帧平移对齐后叠加，使目标信号增强、信噪比提高，从而提取单帧中不可见的暗弱目标。最初用于提升天文图像分辨率，后广泛用于近地小行星和地月空间运动目标巡天。算法核心是遍历多组可能的位移量（dx, dy），对每组位移叠加后提取候选源，再利用运动
  image: /logo.png
permalink: /glossary/observation/saa/
---

# 移位叠加法（Shift-and-Add, SAA）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

检测暗弱运动天体的图像处理方法。针对连续曝光的多帧图像，按照假设的目标运动位移量将各帧平移对齐后叠加，使目标信号增强、信噪比提高，从而提取单帧中不可见的暗弱目标。最初用于提升天文图像分辨率，后广泛用于近地小行星和地月空间运动目标巡天。算法核心是遍历多组可能的位移量（dx, dy），对每组位移叠加后提取候选源，再利用运动连续性筛选真实目标。

## 应用价值

移位叠加法在地月空间研究中具有应用价值，为月球探测任务提供了技术支撑或理论分析方法。

## 相关概念

- （暂无相关概念）

## 参考文献

- Sun et al. 2026, Optical Survey for Cislunar Moving Objects Using Image Stacking。
