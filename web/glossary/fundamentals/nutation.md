---
title: 章动（Nutation）
description: 详细解析章动的定义、物理成因、主要周期分量及在高精度天球参考框架中的作用
keywords: 章动, Nutation, 地球自转轴, 月球引力, 章动序列, 天球参考框架, 坐标变换
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 章动（Nutation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 章动（Nutation）详解 | 术语定义
  description: 详细解析章动的定义、物理成因、主要周期分量及在高精度参考框架中的作用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 章动（Nutation）详解 | 术语定义
  description: 详细解析章动的定义、物理成因、主要周期分量及在高精度参考框架中的作用
  image: /logo.png
permalink: /glossary/fundamentals/nutation/
---

# 章动（Nutation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

章动（Nutation）是地球自转轴在岁差进动基础上叠加的短周期微小摆动。与岁差的长期缓慢变化不同，章动的周期从数天到 18.6 年不等，振幅最大约 9.2"（章动常数）。章动是月球和太阳引力作用于地球赤道隆起部分的结果。

## 核心要素

### 物理成因

章动主要由月球轨道面（白道面）的运动引起。白道面与黄道面的交线以约 18.6 年的周期旋转，导致月球对地球赤道隆起部分的引力矩发生周期性变化，从而使地球自转轴在岁差圆锥面上做周期性摆动。

### 主要分量

章动可以分解为两个分量：

| 分量 | 定义 | 典型值 |
| :--- | :--- | :--- |
| 交角章动 $\Delta\varepsilon$ | 黄赤交角的变化量 | 最大约 ±9.2" |
| 经度章动 $\Delta\psi$ | 春分点沿黄道的周期性位移 | 最大约 ±17.2" |

### 章动序列

章动可以用包含多个周期分量的级数（章动序列）来描述：

$$\Delta\psi = \sum_{i} (A_i + B_i t) \sin(\text{argument}_i)$$

$$\Delta\varepsilon = \sum_{i} (C_i + D_i t) \cos(\text{argument}_i)$$

其中 argument 是由月球升交点黄经、太阳平近点角等基本参数线性组合得到的幅角。IAU 2000A 章动模型包含 678 个周期分量。

### 与岁差的区别

| 特征 | 岁差 | 章动 |
| :--- | :--- | :--- |
| 周期 | 约 25,800 年 | 数天至 18.6 年 |
| 振幅 | 约 50"/年 | 最大约 9.2" |
| 轨迹 | 光滑圆锥 | 圆锥面上的摆动 |
| 成因 | 日月引力平均效果 | 日月引力的周期性变化 |

## 应用价值

章动是高精度天球参考框架建立的基本修正项。对于地月空间任务的精密定轨和深空探测器导航，章动改正的精度直接影响位置和速度的确定精度。章动模型的选择（如 IAU 1980、IAU 2000A）取决于任务的精度要求。

## 相关概念

- [岁差（Precession）](/glossary/fundamentals/precession/)
- [天球坐标系（Celestial Coordinate System）](/glossary/fundamentals/celestial-coordinate-system/)
- [天球（Celestial Sphere）](/glossary/fundamentals/celestial-sphere/)
- [惯性导航系统（Inertial Navigation System）](/glossary/fundamentals/inertial-navigation-system/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 任萱, 肖峰. 人造地球卫星轨道力学[M]. 国防科技大学出版社.
- IAU SOFA. IAU 2000A Nutation Model[S].
