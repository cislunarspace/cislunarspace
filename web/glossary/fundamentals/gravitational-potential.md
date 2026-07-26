---
title: 引力位（Gravitational Potential）
description: 详细解析地球引力位的定义、球谐函数展开、正常引力位与扰动引力位及在轨道力学中的应用
keywords: 引力位, Gravitational Potential, 引力势, 球谐函数, 扰动引力位, 正常引力位, 引力场, 地球引力
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 引力位（Gravitational Potential）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 引力位（Gravitational Potential）详解 | 术语定义
  description: 详细解析地球引力位的定义、球谐函数展开及在轨道力学中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 引力位（Gravitational Potential）详解 | 术语定义
  description: 详细解析地球引力位的定义、球谐函数展开及在轨道力学中的应用
  image: /logo.png
permalink: /glossary/fundamentals/gravitational-potential/
---

# 引力位（Gravitational Potential）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

引力位（Gravitational Potential）是描述引力场强弱的标量函数，又称引力势。引力场中某点的引力位 $U$ 与该点单位质量质点所受引力（场强 $\mathbf{F}'$）的关系为：

$$\mathbf{F}' = \text{grad}\, U$$

对于将地球视为质点（或均质圆球）的情形，引力位为：

$$U = \frac{\mu_E}{r}$$

其中 $\mu_E = fM$ 为地球引力常数，$r$ 为地心距。单位质量的引力位值与其引力势能大小相等、符号相反。

## 核心要素

### 球谐函数展开

真实地球并非均质圆球，其引力位需用球谐函数展开逼近：

$$U = \frac{\mu_E}{r} \sum_{n=0}^{s} \left(\frac{a_e}{r}\right)^n \sum_{m=0}^{n} (\bar{C}_{nm} \cos m\lambda + \bar{S}_{nm} \sin m\lambda) \bar{P}_{nm}(\sin\phi)$$

其中 $a_e$ 为地球赤道半径，$\phi$ 为地心纬度，$\lambda$ 为地心经度，$\bar{C}_{nm}$、$\bar{S}_{nm}$ 为归一化球谐系数，$\bar{P}_{nm}$ 为归一化 Legendre 函数。

### 正常引力位与扰动引力位

| 概念 | 定义 | 物理意义 |
| :--- | :--- | :--- |
| 正常引力位 $V$ | 正常地球模型对应的引力位 | 旋转对称椭球体的引力位 |
| 扰动引力位 $T$ | 真实引力位与正常引力位之差 | $T = U - V$，反映地球形状和密度的不规则性 |

扰动引力位对应的扰动引力加速度 $\delta\mathbf{g} = \text{grad}\, T$，其量级约 200 mgal（$10^{-5}$ m/s²），对飞行器运动有不可忽略的影响。

### 引力位与势能的关系

质量为 $m_1$ 的质点在引力场中的势能 $V$ 与引力位 $U$ 的关系为：

$$U = -\frac{V}{m_1}$$

引力势能以无穷远处为零点。

## 应用价值

引力位是地球引力场建模和轨道力学的基础。通过球谐系数可以精确计算空间任意点的引力加速度，为弹道计算和轨道预报提供基础输入。对于地月空间任务，高精度引力位模型是精密定轨和轨道设计的前提。

## 相关概念

- [地球椭球体（Earth Ellipsoid）](/glossary/fundamentals/earth-ellipsoid/)
- [重力与引力（Gravity vs Gravitation）](/glossary/fundamentals/gravity-vs-gravitation/)
- [地心惯性坐标系（ECI）](/glossary/fundamentals/geocentric-inertial-frame/)
- [主动段（Powered Phase）](/glossary/fundamentals/powered-phase/)
- [在轨段（Orbital Phase）](/glossary/fundamentals/orbital-phase/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 任萱, 肖峰. 人造地球卫星轨道力学[M]. 国防科技大学出版社.
