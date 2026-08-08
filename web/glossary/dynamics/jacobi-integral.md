---
title: 雅可比积分（Jacobi Integral）
description: 详细解析雅可比积分的定义、物理意义、计算方法及其在圆型限制性三体问题中的重要作用
keywords: 雅可比积分, Jacobi Integral, Jacobi常数, 能量积分, 限制性三体问题, 伪势能, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 雅可比积分（Jacobi Integral）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 雅可比积分详解 | 三体问题唯一守恒量
  description: 详细解析雅可比积分的定义、物理意义、计算方法及其在圆型限制性三体问题中的重要作用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 雅可比积分详解 | 三体问题唯一守恒量
  description: 详细解析雅可比积分的定义、物理意义、计算方法及其在圆型限制性三体问题中的重要作用
  image: /logo.png
permalink: /glossary/dynamics/jacobi-integral/
---

# 雅可比积分

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

雅可比积分（Jacobi Integral）是圆型限制性三体问题（CR3BP）中迄今发现的唯一积分常数，又称雅可比常数（Jacobi Constant）。它是三体问题中能量守恒的体现，其表达式为：

$$C = 2\Omega - v^2$$

其中 $\Omega$ 为有效势能，$v$ 为航天器速度。$C$ 值越大表示能量越小。

## 物理意义

$-C$ 等于初始动能与初始势能之和的两倍。在不考虑摄动以及轨道控制的情况下，雅可比积分保持恒定，且是势能和动能不断转化的过程。

需要注意的是，由于在圆型限制性三体问题中使用的是质心旋转坐标系，此处的势能并非传统意义上的势能，称为**伪势能**（Pseudo-Potential）。

## 零速度面

雅可比积分定义了**零速度面**（Zero-Velocity Surface），即 $v=0$ 时 $\Omega = C/2$ 的等值面。零速度面将空间分为可达区域和不可达区域，是分析航天器运动范围的重要工具。

## 核心要素

### 数学定义

雅可比积分 $C = 2\Omega - v^2$ 是 CR3BP 中唯一守恒量，其中有效势能 $\Omega = \frac{x^2 + y^2}{2} + \frac{1-\mu}{r_1} + \frac{\mu}{r_2}$，$v$ 为航天器速度。

### 关键性质

$-C$ 等于初始动能与初始势能之和的两倍。$C$ 值越大表示能量越小。零速度面 $2\Omega(x,y,z) = C$ 将空间分为可达和不可达区域。

### 数值方法

Jacobi 常数在数值积分中作为守恒量可用于检验积分精度。在轨道族延拓中，$C$ 常作为延拓参数使用。

## 应用价值

雅可比积分能够作为研究限制性三体问题的重要工具，对探寻质点运动规律和力学特性有着重要的作用。在轨道设计中，雅可比常数常作为轨道族延拓的参数。

## 相关概念

- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [平动点](/glossary/dynamics/libration-point/)
- [远距离逆行轨道（DRO）](/glossary/orbits/distant-retrograde-orbit-dro/)
- [庞加莱截面](/glossary/dynamics/poincare-section/)

## 参考文献

- Szebehely V. Theory of orbits: the restricted problem of three bodies[M]. Academic Press, 1968.
- 陈昱桔. 面向地月空间态势感知的DRO轨道设计与控制研究[D]. 2024.
