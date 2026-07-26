---
title: 惯性导航系统（Inertial Navigation System, INS）
description: 详细解析惯性导航系统的定义、平台式与捷联式架构、加速度计和陀螺仪原理及在航天器导航中的核心作用
keywords: 惯性导航系统, INS, 平台式惯导, 捷联式惯导, 加速度计, 陀螺仪, GNC, 惯性测量单元, IMU
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 惯性导航系统（Inertial Navigation System）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 惯性导航系统（Inertial Navigation System）详解 | 术语定义
  description: 详细解析惯性导航系统的定义、架构、核心器件及在航天器导航中的核心作用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 惯性导航系统（Inertial Navigation System）详解 | 术语定义
  description: 详细解析惯性导航系统的定义、架构、核心器件及在航天器导航中的核心作用
  image: /logo.png
permalink: /glossary/fundamentals/inertial-navigation-system/
---

# 惯性导航系统（Inertial Navigation System, INS）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

惯性导航系统（Inertial Navigation System, INS）是一种自主式导航系统，利用加速度计和陀螺仪测量飞行器的加速度和角速度，通过积分运算得到飞行器的速度、位置和姿态信息。惯性导航不依赖外部信号，具有完全自主、不受干扰的优点，是弹道导弹和运载火箭导航系统的核心。

## 核心要素

### 核心器件

| 器件 | 功能 | 典型精度 |
| :--- | :--- | :--- |
| 加速度计 | 测量飞行器沿敏感轴的比力（非引力加速度） | 偏差 10⁻⁵–10⁻⁶ m/s² |
| 陀螺仪 | 测量飞行器绕敏感轴的角速度 | 漂移 0.001–0.01 °/h |

加速度计和陀螺仪组合构成惯性测量单元（IMU），是惯性导航系统的核心组件。

### 平台式惯导系统（PINS）

平台式惯导系统将加速度计和陀螺仪安装在一个物理稳定平台上，平台通过陀螺仪和伺服机构保持在惯性空间中的指向不变。

- **优点**：加速度计直接测量惯性坐标系下的比力，计算简单；对陀螺仪精度要求相对较低
- **缺点**：结构复杂、体积大、成本高、可靠性较低
- **应用**：早期弹道导弹和运载火箭

### 捷联式惯导系统（SINS）

捷联式惯导系统将加速度计和陀螺仪直接固联在飞行器上，通过计算机实时计算姿态矩阵，将测量值从体坐标系转换到导航坐标系。

- **优点**：结构简单、体积小、成本低、可靠性高
- **缺点**：对陀螺仪动态范围和计算机速度要求高；需要复杂的姿态算法
- **应用**：现代弹道导弹、运载火箭和航天器

### GNC 系统

惯性导航系统是飞行器 GNC（制导、导航与控制）系统的三大组成部分之一：

- **导航（Navigation）**：确定飞行器的位置、速度和姿态 — 惯性导航的核心功能
- **制导（Guidance）**：根据当前位置和目标，计算所需的控制指令
- **控制（Control）**：执行制导指令，操纵飞行器的姿态和推力方向

## 应用价值

惯性导航系统是弹道导弹和运载火箭的标准导航方案，其自主性保证了在对抗环境下的可靠性。对于地月空间任务，惯性导航可与天文导航、无线电导航等组合使用，提供高精度的自主导航能力。惯性器件的精度直接决定了飞行器的导航精度和制导性能。

## 相关概念

- [天球坐标系（Celestial Coordinate System）](/glossary/fundamentals/celestial-coordinate-system/)
- [天球（Celestial Sphere）](/glossary/fundamentals/celestial-sphere/)
- [空天飞行器（Aerospace Vehicle）](/glossary/fundamentals/aerospace-vehicle/)
- [主动段（Powered Phase）](/glossary/fundamentals/powered-phase/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
