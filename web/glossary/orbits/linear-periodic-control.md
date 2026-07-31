---
title: 线性周期控制（Linear Periodic Control）
description: 对线性周期时变系统（系数矩阵满足 A(t+T)=A(t)）设计周期时变状态反馈律 K(k)，使闭环系统具有期望特征乘子的控制方法。核心思路是利用系统周期性，通过定常变换将时变系统转化为定常系统，再用经典极点配置方法设计反馈增益。论文将此方法用于Halo轨道维持：由于Halo轨道的周期性，误差动力学的一阶近似即为线性周期
keywords: 线性周期控制, Linear Periodic Control, 转移轨道, 周期轨道, 晕轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 线性周期控制（Linear Periodic Control）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 线性周期控制详解 | 术语定义
  description: 对线性周期时变系统（系数矩阵满足 A(t+T)=A(t)）设计周期时变状态反馈律 K(k)，使闭环系统具有期望特征乘子的控制方法。核心思路是利用系统周期性，通过定常变换将时变系统转化为定常系统，再用经典极点配置方法设计反馈增益。论文将此方法用于Halo轨道维持：由于Halo轨道的周期性，误差动力学的一阶近似即为线性周期
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 线性周期控制详解 | 术语定义
  description: 对线性周期时变系统（系数矩阵满足 A(t+T)=A(t)）设计周期时变状态反馈律 K(k)，使闭环系统具有期望特征乘子的控制方法。核心思路是利用系统周期性，通过定常变换将时变系统转化为定常系统，再用经典极点配置方法设计反馈增益。论文将此方法用于Halo轨道维持：由于Halo轨道的周期性，误差动力学的一阶近似即为线性周期
  image: /logo.png
permalink: /glossary/orbits/linear-periodic-control/
---

# 线性周期控制（Linear Periodic Control）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 术语来源：徐明和徐世杰 - 2008 - Halo轨道维持的线性周期控制策略
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

对线性周期时变系统（系数矩阵满足 A(t+T)=A(t)）设计周期时变状态反馈律 K(k)，使闭环系统具有期望特征乘子的控制方法。核心思路是利用系统周期性，通过定常变换将时变系统转化为定常系统，再用经典极点配置方法设计反馈增益。论文将此方法用于Halo轨道维持：由于Halo轨道的周期性，误差动力学的一阶近似即为线性周期系统，以一次维持的时间间隔为离散步长后，通过极点配置即可实现轨道镇定。

## 应用价值

线性周期控制用于实现探测器轨道或姿态的精确跟踪与调节。在地月空间任务中，线性周期控制律的设计需要兼顾控制精度和推进剂消耗，通过反馈机制抑制各类扰动对轨道偏差的影响。

## 相关概念

- [低能月球转移轨道（Low-Energy Lunar Transfer）](/glossary/orbits/low-energy-lunar-transfer/)
- [内外侧转移（Inner and Outer Transfer）](/glossary/orbits/inner-and-outer-transfer/)
- [调相轨迹（Phasing Trajectory）](/glossary/orbits/phasing-trajectory/)
- [近火卫点距离（Periapsis Distance）](/glossary/orbits/periapsis-distance/)

## 参考文献

- 徐明和徐世杰 - 2008 - Halo轨道维持的线性周期控制策略
