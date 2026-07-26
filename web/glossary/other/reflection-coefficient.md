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

## 核心要素

### 基本概念

反射系数 $C_R$ 综合描述了航天器表面对太阳光的吸收、漫反射和镜面反射特性。其物理含义为入射光子动量传递给航天器的效率：$C_R = 1$ 表示完全漫反射，$C_R = 2$ 表示完全镜面反射。

### 技术特征

反射系数是无量纲参数，取值范围 $[1, 2]$。实际航天器的 $C_R$ 取决于表面材料的光学特性（吸收率、反射率、散射特性）和航天器的几何构型。对于复杂构型航天器，$C_R$ 等效值需通过面积加权平均计算。

### 实现方法

工程中通过地面光学测量（双向反射分布函数 BRDF 测试）确定材料的反射特性，再结合航天器三维模型计算面积加权的等效 $C_R$。在轨辨识方法利用精密定轨数据反演太阳辐射压系数，作为模型验证和修正手段。

## 在太阳辐射压计算中的作用

反射系数是太阳辐射压加速度计算公式中的关键参数：

$$a_{SRP} = k C_R \frac{S_0}{c} \frac{A}{m} \left(\frac{R_0}{R}\right)^2 \hat{n}$$

其中 $C_R$ 直接决定了太阳辐射压对航天器的作用强度。对于 DRO 轨道上的航天器，由于远离地球大气和地磁场，太阳辐射压成为主要的环境扰动因素，$C_R$ 的精确确定对轨道预报至关重要。

## 典型取值

| 航天器类型 | 典型 $C_R$ 值 |
| :--- | :--- |
| 大型太阳能帆板 | 接近 2 |
| 高反射率卫星 | 1.5 ~ 1.8 |
| 暗色表面卫星 | 1.0 ~ 1.3 |

## 应用价值

反射系数的精确确定是 DRO 等高精度轨道预报的基础。在地月空间中，太阳辐射压是主要的非引力扰动源，$C_R$ 的不确定性直接传递为轨道预报误差。通过在轨辨识和修正反射系数模型，可以显著提升长期轨道预报精度，减少轨道维持的燃料消耗。

## 相关概念

- [太阳辐射压](/glossary/dynamics/solar-radiation-pressure/)
- [太阳常数](/glossary/other/solar-constant/)
- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)

## 参考文献

- 陈昱桔. 面向地月空间态势感知的DRO轨道设计与控制研究[D]. 2024.
