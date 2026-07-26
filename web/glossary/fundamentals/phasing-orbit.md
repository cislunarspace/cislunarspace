---
title: 调相轨道（Phasing Orbit）
description: 详细解析调相轨道的原理、周期设计及交会应用
keywords: 调相轨道, Phasing Orbit, 轨道交会, 同轨道机动, 位置变换
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 调相轨道（Phasing Orbit）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 调相轨道详解 | 术语定义
  description: 详细解析调相轨道的原理及周期设计
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 调相轨道详解 | 术语定义
  description: 详细解析调相轨道的原理及周期设计
  image: /logo.png
permalink: /glossary/fundamentals/phasing-orbit/
---

# 调相轨道（Phasing Orbit）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

调相轨道是一种特殊的两冲量转移轨道，其初始轨道和最终轨道为同一轨道。飞行器通过进入一个周期不同于主轨道的椭圆调相轨道，运行若干圈后返回主轨道，实现同一轨道上的位置变换或交会。

## 核心要素

### 调相原理

追踪飞行器在主轨道 $P$ 点施加冲量进入调相椭圆轨道，运行 $k_1$ 圈后返回 $P$ 点，施加反向冲量返回主轨道。

### 后向调相与前向调相

| 类型 | 目标位置 | 调相轨道周期 | 冲量方向 |
| :--- | :--- | :--- | :--- |
| 后向调相 | 目标落后 | 大于主轨道周期 | 沿速度方向 |
| 前向调相 | 目标超前 | 小于主轨道周期 | 沿反速度方向 |

### 周期设计

后向调相轨道周期满足：

$$k_1 T = T_c\left(k_2 + \frac{\theta}{2\pi}\right)$$

前向调相轨道周期满足：

$$k_1 T = T_c\left(k_2 - \frac{\theta}{2\pi}\right)$$

其中 $T$ 为调相轨道周期，$T_c$ 为主轨道周期，$\theta$ 为相位角，$k_2$ 为调相过程中目标飞行器沿主轨道的运行圈数。

### 速度冲量

$$\Delta v = \left|\sqrt{\frac{\mu}{r_c}} - \sqrt{\mu\left(\frac{2}{r_c} - \frac{1}{a}\right)}\right|$$

调相轨道半长轴 $a = \sqrt[3]{\mu_e T^2 / 4\pi^2}$。

## 应用价值

调相轨道广泛应用于地球同步轨道卫星的位置调整（如通信卫星移动至赤道上空新位置）、空间交会对接的轨道规划、以及星座构型调整等任务。每次机动的能量消耗取决于调相轨道与主轨道的周期差。

## 相关概念

- [霍曼转移（Hohmann Transfer）](/glossary/fundamentals/hohmann-transfer/)
- [特征速度（Characteristic Velocity）](/glossary/fundamentals/characteristic-velocity/)
- [轨道机动（Orbital Maneuver）](/glossary/fundamentals/orbital-maneuver/)
- [双椭圆转移（Bi-Elliptic Transfer）](/glossary/fundamentals/bi-elliptic-transfer/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
