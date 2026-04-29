---
title: 压力中心（Center of Pressure）
description: 详细解析压力中心的定义、与质心的关系、稳定力矩的产生及在飞行器稳定性中的作用
keywords: 压力中心, Center of Pressure, 压心, 质心, 稳定力矩, 气动稳定性, 飞行器
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 压力中心（Center of Pressure）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 压力中心（Center of Pressure）详解 | 术语定义
  description: 详细解析压力中心的定义、与质心的关系及在飞行器稳定性中的作用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 压力中心（Center of Pressure）详解 | 术语定义
  description: 详细解析压力中心的定义、与质心的关系及在飞行器稳定性中的作用
  image: /logo.png
permalink: /glossary/fundamentals/pressure-center/
---

# 压力中心（Center of Pressure）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

压力中心（Center of Pressure, CP）是空气动力合力的作用点，简称压心，记为 $O_{c,p}$。由于飞行器的轴对称性，压心位于飞行器纵轴上。压心的位置取决于飞行器的外形和飞行状态（攻角、马赫数等），一般情况下压心与质心（重心）不重合。

## 核心要素

### 压心与质心的关系

将作用在压心上的空气动力合力 $\mathbf{R}$ 平移到质心 $O_{c,g}$ 上，根据力的平移原理，需附加一个力矩——稳定力矩 $\mathbf{M}_{st}$：

$$\mathbf{M}_{st} = \mathbf{R} \times (x_p - x_g)\mathbf{x}_1^0$$

其中 $x_p$、$x_g$ 分别为压心和质心到火箭头部尖端的距离。

### 压心位置对稳定性的影响

| 条件 | 效果 | 稳定性 |
|:---|:---|:---|
| 压心在质心之后（$x_p > x_g$） | 气动力矩使攻角减小 | 静稳定 |
| 压心在质心之前（$x_p < x_g$） | 气动力矩使攻角增大 | 静不稳定 |
| 压心与质心重合（$x_p = x_g$） | 无力矩 | 中性稳定 |

### 压心的确定

压心位置通常用压心系数 $x_{cp}$ 表示：

$$x_{cp} = \frac{x_p}{l_k}$$

其中 $l_k$ 为参考长度。压心系数通过风洞试验或 CFD 计算确定，随马赫数和攻角变化。

## 应用价值

压心位置是飞行器气动布局设计的关键参数。对于弹道导弹和运载火箭，需要保证压心在质心之后以实现静稳定飞行；对于需要机动飞行的飞行器，可通过控制面偏转改变压心位置。在地月空间任务的再入段，压心位置决定了再入飞行器的配平攻角和升阻比。

## 相关概念

- [空气动力系数（Aerodynamic Coefficient）](/glossary/fundamentals/aerodynamic-coefficient/)
- [体坐标系（Body Frame）](/glossary/fundamentals/body-frame/)
- [空气动力矩（Aerodynamic Moment）](/glossary/fundamentals/aerodynamic-moment/)
- [升阻比（Lift-to-Drag Ratio）](/glossary/fundamentals/lift-to-drag-ratio/)
- [再入段（Reentry Phase）](/glossary/fundamentals/reentry-phase/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
