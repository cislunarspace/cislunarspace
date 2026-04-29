---
title: 反射系数（Reflection Coefficient, $C_R$）
description: 详细解析反射系数的定义、取值范围、在太阳辐射压计算中的作用
keywords: 反射系数, Reflection Coefficient, CR, 太阳辐射压, 光压系数, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 反射系数（Reflection Coefficient）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 反射系数详解 | 太阳辐射压关键参数
  description: 详细解析反射系数的定义、取值范围、在太阳辐射压计算中的作用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 反射系数详解 | 太阳辐射压关键参数
  description: 详细解析反射系数的定义、取值范围、在太阳辐射压计算中的作用
  image: /logo.png
permalink: /glossary/other/reflection-coefficient/
---

# 反射系数

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

反射系数（Reflection Coefficient）$C_R$ 是描述航天器表面对太阳光反射特性的无量纲参数，也称光压系数。其取值范围为：

- $C_R = 1$：完全漫反射（Lambertian reflection）
- $C_R = 2$：完全镜面反射（specular reflection）
- $1 < C_R < 2$：部分镜面反射

## 在太阳辐射压计算中的作用

反射系数是太阳辐射压加速度计算公式中的关键参数：

$$a_{SRP} = k C_R \frac{S_0}{c} \frac{A}{m} \left(\frac{R_0}{R}\right)^2 \hat{n}$$

其中 $C_R$ 直接决定了太阳辐射压对航天器的作用强度。对于 DRO 轨道上的航天器，由于远离地球大气和地磁场，太阳辐射压成为主要的环境扰动因素，$C_R$ 的精确确定对轨道预报至关重要。

## 典型取值

| 航天器类型 | 典型 $C_R$ 值 |
|:---|:---|
| 大型太阳能帆板 | 接近 2 |
| 高反射率卫星 | 1.5 ~ 1.8 |
| 暗色表面卫星 | 1.0 ~ 1.3 |

## 相关概念

- [太阳辐射压](/glossary/dynamics/solar-radiation-pressure/)
- [太阳常数](/glossary/other/solar-constant/)
- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)

## 参考文献

- 陈昱桔. 面向地月空间态势感知的DRO轨道设计与控制研究[D]. 2024.
