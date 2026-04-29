---
title: 逆行（Retrograde）
description: 详细解析逆行运动的定义、在地月旋转坐标系中的表现、与DRO的关系及其脉冲优势
keywords: 逆行, Retrograde, DRO, 远距离逆行轨道, 顺行, 轨道运动方向, 地月旋转坐标系, 脉冲优势
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 逆行（Retrograde）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 逆行（Retrograde）详解 | DRO核心运动特征
  description: 详细解析逆行运动的定义、在地月旋转坐标系中的表现、与DRO的关系及其脉冲优势
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 逆行（Retrograde）详解 | DRO核心运动特征
  description: 详细解析逆行运动的定义、在地月旋转坐标系中的表现、与DRO的关系及其脉冲优势
  image: /logo.png
permalink: /glossary/orbits/retrograde/
---

# 逆行（Retrograde）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

逆行（Retrograde）是指航天器运行方向与中心天体自转或公转方向**相反**的运动状态。在地月旋转坐标系中，DRO 表现为绕月顺时针运动，即逆行轨道。与之相对的是顺行（Prograde）轨道，其运动方向与中心天体的运动方向相同。

## 核心要素

### 逆行在地月系统中的含义

在地月旋转坐标系（以地月连线为 $x$ 轴，角速度等于月球公转角速度）中：

- **逆行轨道**：航天器绕月运动方向与月球绕地球公转方向相反，在旋转坐标系中表现为**顺时针**运动
- **顺行轨道**：航天器绕月运动方向与月球绕地球公转方向相同，在旋转坐标系中表现为**逆时针**运动

DRO（Distant Retrograde Orbit）的"逆行"正来源于此——在会合坐标系下，DRO 上的航天器与月球的运动方向相反。

### 逆行轨道的脉冲优势

魏赞等（2026）的研究表明，在从 LEO 向 DRO 转移的过程中，**逆行轨道相比顺行轨道具有显著的脉冲优势**。这一优势的物理根源在于：

- **科里奥利力效应**：在旋转坐标系中，逆行运动的科里奥利力方向与运动方向相反，起到类似"制动"的作用，有利于航天器在借力过程中获得更大的能量增益
- **势能面结构**：在地月旋转坐标系的雅可比常数等势面中，逆行轨道对应的相空间区域具有更有利的能量通道
- **借力几何**：逆行方向的月球借力可产生更大的轨道能量变化，降低进入 DRO 所需的总 $\Delta V$

具体而言，从 LEO 出发经月球借力进入 $m:n$ 共振 DRO 时，逆行转移方案的总脉冲消耗通常低于顺行方案。

### 逆行与顺行的数学描述

在会合坐标系中，航天器绕月运动的角动量 $h$ 可正可负：

- 逆行：$h < 0$（角动量矢量与旋转坐标系 $z$ 轴反向）
- 顺行：$h > 0$（角动量矢量与旋转坐标系 $z$ 轴同向）

轨道的顺行/逆行性质可通过速度矢量与位置矢量的叉积方向判断：

$$\mathbf{h} = \mathbf{r} \times \mathbf{v}$$

## 应用价值

逆行运动特性在地月空间任务设计中具有核心价值：

- **DRO 任务设计**：DRO 天然为逆行轨道，理解逆行特性是 DRO 转移轨道设计的基础
- **燃料优化**：利用逆行轨道的脉冲优势，可显著降低地月转移的燃料消耗
- **轨道稳定性**：DRO 的长期稳定性部分源于其逆行特性，在 CRTBP 框架下逆行轨道的稳定区域更广
- **星座部署**：在 DRO 星座设计中，逆行特性影响卫星间的相对运动和覆盖特性

## 相关概念
- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)
- [顺行（Prograde）](/glossary/orbits/prograde/)

## 参考文献
- 魏赞等. 地月远距离逆行轨道族月球借力转移入轨研究[J]. 2026.
- Whitley R, Martinez R. Options for staging orbits in cislunar space[C]. 2016.
- Broucke R. Periodic orbits in the restricted three-body problem with Earth-Moon masses[R]. 1968.
