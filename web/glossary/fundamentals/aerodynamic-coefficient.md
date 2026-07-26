---
title: 空气动力系数（Aerodynamic Coefficient）
description: 详细解析阻力系数、升力系数、侧力系数的定义、物理意义及在气动力计算中的应用
keywords: 空气动力系数, Aerodynamic Coefficient, 阻力系数, 升力系数, 侧力系数, 气动力, 动压, 参考面积
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 空气动力系数（Aerodynamic Coefficient）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 空气动力系数（Aerodynamic Coefficient）详解 | 术语定义
  description: 详细解析阻力系数、升力系数、侧力系数的定义及在气动力计算中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 空气动力系数（Aerodynamic Coefficient）详解 | 术语定义
  description: 详细解析阻力系数、升力系数、侧力系数的定义及在气动力计算中的应用
  image: /logo.png
permalink: /glossary/fundamentals/aerodynamic-coefficient/
---

# 空气动力系数（Aerodynamic Coefficient）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

空气动力系数（Aerodynamic Coefficient）是将空气动力无量纲化后的参数，用于表征飞行器气动特性。空气动力（阻力 $X$、升力 $Y$、侧力 $Z$）通过动压 $q$ 和参考面积 $S_M$ 进行无量纲化：

$$C_x = \frac{X}{q S_M}, \quad C_y = \frac{Y}{q S_M}, \quad C_z = \frac{Z}{q S_M}$$

其中动压 $q = \frac{1}{2}\rho v^2$，$\rho$ 为大气密度，$v$ 为飞行速度。

## 核心要素

### 阻力系数 $C_x$

阻力始终与飞行速度方向相反，只要飞行器与大气存在相对运动即存在。阻力系数可分解为：

$$C_x = C_{x0} + C_{x\alpha}(\alpha^2 + \beta^2)$$

其中 $C_{x0}$ 为零升阻力系数（$\alpha = \beta = 0$ 时），$C_{x\alpha}$ 为诱导阻力系数。

### 升力系数 $C_y$

升力垂直于速度方向，在飞行器主对称面内，主要由攻角 $\alpha$ 产生。在小攻角范围内：

$$C_y = C_y^\alpha \cdot \alpha$$

其中 $C_y^\alpha$ 为升力系数对攻角的导数，是气动设计的关键参数。

### 侧力系数 $C_z$

侧力垂直于速度方向和主对称面，主要由侧滑角 $\beta$ 产生：

$$C_z = C_z^\beta \cdot \beta$$

对于轴对称飞行器，$C_y^\alpha = -C_z^\beta$。

### 系数之间的关系

| 系数 | 体坐标系表示 | 速度坐标系表示 |
| :--- | :--- | :--- |
| 轴向力 | $C_{x1}$ | — |
| 法向力 | $C_{y1} = C_{y1}^\alpha \cdot \alpha$ | — |
| 阻力 | — | $C_x$ |
| 升力 | — | $C_y = C_y^\alpha \cdot \alpha$ |

## 应用价值

空气动力系数是气动力计算的核心参数，决定了飞行器在不同飞行状态下的气动特性。在主动段弹道设计中，阻力系数直接影响飞行速度损失；在再入段中，升阻比决定了飞行器的机动能力和减速特性。气动系数通常由风洞试验或 CFD 计算获得。

## 相关概念

- [升阻比（Lift-to-Drag Ratio）](/glossary/fundamentals/lift-to-drag-ratio/)
- [速度坐标系（Velocity Frame）](/glossary/fundamentals/velocity-frame/)
- [体坐标系（Body Frame）](/glossary/fundamentals/body-frame/)
- [压力中心（Center of Pressure）](/glossary/fundamentals/pressure-center/)
- [标准大气（Standard Atmosphere）](/glossary/fundamentals/standard-atmosphere/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
