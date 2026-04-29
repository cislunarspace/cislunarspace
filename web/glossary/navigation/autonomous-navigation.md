---
title: 自主导航（Autonomous Navigation）
description: 详细解析自主导航的定义、与地基导航的区别、关键技术要素及在地月空间任务中的应用
keywords: 自主导航, Autonomous Navigation, 地月空间, 航天器导航, 导航滤波, 扩展卡尔曼滤波, 深空导航
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 自主导航（Autonomous Navigation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 自主导航详解 | 地月空间航天器自主导航技术
  description: 详细解析自主导航的定义、与地基导航的区别、关键技术要素及在地月空间任务中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 自主导航详解 | 地月空间航天器自主导航技术
  description: 详细解析自主导航的定义、与地基导航的区别、关键技术要素及在地月空间任务中的应用
  image: /logo.png
permalink: /glossary/navigation/autonomous-navigation/
---

# 自主导航（Autonomous Navigation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文参考：钱霙婧(2014)《地月空间拟周期轨道上航天器自主导航与轨道保持研究》
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

自主导航（Autonomous Navigation）是指航天器不依赖地面测控系统，仅利用自身携带的导航传感器和计算设备，独立完成轨道确定（Orbit Determination）和位置速度估计的导航方式。与地基导航相比，自主导航能够显著降低对深空测控网络（DSN）的依赖，减少通信时延的影响，提高航天器在轨生存能力。

在地月空间任务中，由于通信延迟可达秒级且地基导航精度有限（通常在公里级），发展自主导航技术对于平动点探测器、月球探测器等任务具有重要价值。

## 与地基导航的区别

| 特征 | 地基导航 | 自主导航 |
|:---|:---|:---|
| 数据来源 | 地面测控站跟踪测量 | 星载传感器实时观测 |
| 通信依赖 | 强依赖，需持续跟踪 | 弱依赖，可独立工作 |
| 导航精度 | 公里级（DSN） | 米级至十米级（自主） |
| 实时性 | 存在数秒至数分钟延迟 | 实时或近实时 |
| 覆盖范围 | 受地面站分布限制 | 全球覆盖 |

## 关键技术要素

### 导航敏感器

自主导航系统通常配备以下敏感器组合：

1. **星敏感器（Star Tracker）**：测量航天器相对于恒星平台的姿态，获取天文定向信息
2. **惯性测量单元（IMU）**：提供角速率和加速度测量，用于轨道积分推算
3. **太阳传感器（Sun Sensor）**：测量太阳方位，用于深空导航
4. **地球/月球敏感器**：测量地球或月球相对航天器的方位和距离
5. **X射线脉冲星探测器**：用于深空巡航段的高精度自主导航

### 导航滤波算法

典型的自主导航滤波算法包括：

- **扩展卡尔曼滤波（EKF）**：将非线性系统线性化处理，是目前应用最广泛的导航滤波器
- **无迹卡尔曼滤波（UKF）**：使用 sigma 点采样避免线性化误差
- **粒子滤波（PF）**：基于蒙特卡洛采样的非线性滤波方法

### 导航体制

地月空间自主导航的主要体制包括：

1. **天文导航（Celestial Navigation）**：利用太阳、恒星、地球、月球等天体的观测信息确定航天器状态
2. **X射线脉冲星导航（XNAV）**：利用脉冲星的精确计时信号实现深空自主导航
3. **星间测距导航（Intersatellite Link Navigation）**：利用卫星之间的伪距测量实现相对导航
4. **日地月信息导航**：利用太阳、地球、月球的角位置信息组合进行导航

## 在地月空间的应用

### 平动点探测器

对于地月 L1/L2 平动点附近的探测器，由于距离地球遥远且轨道处于弱稳定状态，地基导航难以满足轨道保持的精度要求（通常需要百米级）。钱霙婧(2014)研究表明，基于日地月信息的自主导航方法可为平动点拟周期轨道探测器提供收敛的估计结果。

### 月球探测器

月球探测器在环月段和地月转移段均可采用自主导航。在环月段，可利用月面信标或月球高程图进行光学导航；在地月转移段，可利用太阳-地球矢量进行天文导航。

### 关键挑战

1. **收敛弧长约束**：平动点轨道具有强非线性，导航收敛需要足够的观测弧段
2. **轨道保持耦合**：导航精度直接影响轨道保持效果，两者需协同设计
3. **敏感器配置**：需要选择合适的敏感器组合以满足可观测性要求

## 相关概念

- [日地月信息自主导航（SEM Navigation）](/glossary/navigation/sem-autonomous-navigation/)
- [扩展卡尔曼滤波（EKF）](/glossary/navigation/extended-kalman-filter/)
- [可观测性（Observability）](/glossary/navigation/observability/)
- [平动点（Libration Point）](/glossary/dynamics/libration-point/)
- [轨道保持（Orbit Keeping）](/glossary/orbits/orbit-keeping/)
- [X射线脉冲星导航](/glossary/navigation/xray-pulsar-navigation/)

## 参考文献

- 钱霙婧. 地月空间拟周期轨道上航天器自主导航与轨道保持研究[D]. 哈尔滨工业大学, 2014.
- Hill K, Born G H. Linked autonomous interplanetary satellite orbit navigation (LiAISON)[C]. AAS/AIAA Astrodynamics Specialist Conference, 2005.
- 丛佃伟，吴富梅，李崇辉，等．地月空间航天器自主导航技术及研究进展[J]．无线电工程，2025，55(2)：317-322.