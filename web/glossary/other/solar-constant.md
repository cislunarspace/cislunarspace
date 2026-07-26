---
title: 太阳常数（Solar Constant）
description: 详细解析太阳常数的定义、数值、在太阳辐射压计算中的应用
keywords: 太阳常数, Solar Constant, 太阳辐射压, 辐射能量, 天文单位, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 太阳常数（Solar Constant）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 太阳常数详解 | 太阳辐射基本物理量
  description: 详细解析太阳常数的定义、数值、在太阳辐射压计算中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 太阳常数详解 | 太阳辐射基本物理量
  description: 详细解析太阳常数的定义、数值、在太阳辐射压计算中的应用
  image: /logo.png
permalink: /glossary/other/solar-constant/
---

# 太阳常数

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

太阳常数（Solar Constant）$S_0$ 是在地球大气外距离太阳一个天文单位（AU）处，垂直于太阳光束方向的单位面积上在单位时间内接收到的太阳总辐射能量。

## 核心要素

### 基本概念

太阳常数描述了太阳在地球轨道处的总辐照度，是太阳辐射能量在天文单位距离上的度量。其物理本质是太阳总光度 $L_{\odot}$ 在 1 AU 球面上的面积密度：$S_0 = L_{\odot} / (4\pi R_0^2)$，其中 $R_0 = 1$ AU。

### 技术特征

太阳常数的数值为 $S_0 \approx 1367$ W/m²，实际存在约 0.1% 的太阳活动周期变化。太阳常数随距离的平方反比衰减：$S(R) = S_0 (R_0/R)^2$。对应太阳辐射压强 $P_{SRP} = S_0/c \approx 4.56$ μN/m²。

### 实现方法

太阳常数的测量通过空间平台上的绝对辐射计实现，如 NASA 的 ACRIM 和 TIM 仪器。在轨道力学中，太阳常数作为已知物理常数直接代入太阳辐射压加速度计算公式，与反射系数和面质比共同决定 SRP 对航天器的作用强度。

## 数值

$$S_0 \approx 1367 \text{ W/m}^2$$

## 在太阳辐射压计算中的应用

太阳常数是计算太阳辐射压（SRP）的基本参数之一。太阳辐射压加速度的计算公式为：

$$a_{SRP} = k C_R \frac{S_0}{c} \frac{A}{m} \left(\frac{R_0}{R}\right)^2 \hat{n}$$

其中 $S_0/c$ 为太阳辐射压强，约 4.56 μN/m²。

## 应用价值

太阳常数是计算太阳辐射压的基本物理输入，而太阳辐射压是地月空间航天器（特别是 DRO 轨道）最主要的非引力扰动因素。精确的太阳常数值对于高精度轨道预报、轨道保持策略设计和面质比在轨辨识具有基础性支撑作用。

## 相关概念

- [太阳辐射压](/glossary/dynamics/solar-radiation-pressure/)
- [反射系数](/glossary/other/reflection-coefficient/)

## 参考文献

- 陈昱桔. 面向地月空间态势感知的DRO轨道设计与控制研究[D]. 2024.
