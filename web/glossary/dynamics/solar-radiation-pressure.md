---
title: 太阳辐射压（Solar Radiation Pressure, SRP）
description: 详细解析太阳辐射压的定义、计算公式、对航天器轨道的影响及其在轨道设计中的考虑
keywords: 太阳辐射压, Solar Radiation Pressure, SRP, 摄动力, 轨道设计, 反射系数, 面质比, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 太阳辐射压（SRP）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 太阳辐射压详解 | 地月空间不可忽视的摄动力
  description: 详细解析太阳辐射压的定义、计算公式、对航天器轨道的影响及其在轨道设计中的考虑
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 太阳辐射压详解 | 地月空间不可忽视的摄动力
  description: 详细解析太阳辐射压的定义、计算公式、对航天器轨道的影响及其在轨道设计中的考虑
  image: /logo.png
permalink: /glossary/dynamics/solar-radiation-pressure/
---

# 太阳辐射压

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

太阳辐射压（Solar Radiation Pressure，SRP）是由光子和航天器表面的动量交换引起的力。入射光子会被航天器表面吸收或反射，吸收率和反射率取决于航天器表面材料的性质。

## 计算公式

球模型下的太阳辐射压加速度为：

$$a_{SRP} = k C_R \frac{S_0}{c} \frac{A}{m} \left(\frac{R_0}{R}\right)^2 \hat{n}$$

其中：

- $k$：光照因子（有光照时为 1，无光照时为 0）
- $C_R$：反射系数，$C_R \in [1, 2]$（1 表示全吸收，2 表示全反射）
- $S_0$：太阳常数，约 1367 W/m²
- $c$：光速
- $A/m$：航天器面质比
- $R_0$：天文单位
- $R$：航天器到太阳的距离

## 对轨道的影响

虽然与主要引力体相比，太阳辐射压的量级很小，但它比部分行星造成的引力摄动要大。对 DRO 轨道稳定性研究表明，太阳引力是唯一显著影响稳定性的因素，而太阳辐射压在长期轨道演化中也不可忽视。

## 核心要素

### 数学定义

球模型下的 SRP 加速度为 $a_{SRP} = k C_R \frac{S_0}{c} \frac{A}{m} \left(\frac{R_0}{R}\right)^2 \hat{n}$，其中 $C_R \in [1, 2]$ 为反射系数，$A/m$ 为面质比。

### 关键性质

SRP 量级虽小，但比部分行星造成的引力摄动要大。光照因子 $k$ 取值 0 或 1，取决于航天器是否处于阴影区。

### 数值方法

在星历模型中，SRP 加速度作为摄动项与引力项叠加。长期轨道演化需考虑地球阴影区的周期性遮挡效应。

## 应用价值

太阳辐射压是地月空间轨道设计中不可忽视的摄动力，对 DRO 等长期运行轨道的稳定性有显著影响。在高精度轨道设计和轨道保持策略中必须考虑 SRP 的长期累积效应。

## 相关概念

- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)
- [轨道保持](/glossary/orbits/orbit-keeping/)
- [星历模型](/glossary/dynamics/ephemeris-model/)

## 参考文献

- 陈昱桔. 面向地月空间态势感知的DRO轨道设计与控制研究[D]. 2024.
- Bezrouk C, Parker J S. Long term evolution of distant retrograde orbits in the Earth-Moon system[J]. Astrophysics and Space Science, 2017.
