---
title: 过载（Load Factor）
description: 详细解析过载和过载系数的定义、轴向/法向/横向分量及在飞行器结构设计中的应用
keywords: 过载, Load Factor, 过载系数, 轴向过载, 法向过载, 横向过载, 视加速度, 结构设计
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 过载（Load Factor）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 过载（Load Factor）详解 | 术语定义
  description: 详细解析过载和过载系数的定义及在飞行器结构设计中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 过载（Load Factor）详解 | 术语定义
  description: 详细解析过载和过载系数的定义及在飞行器结构设计中的应用
  image: /logo.png
permalink: /glossary/fundamentals/load-factor/
---

# 过载（Load Factor）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

过载（Load Factor）是火箭飞行中除引力以外作用在火箭上的所有真实外力的合力，记为 $\mathbf{N}$。过载所产生的加速度即为视加速度 $\dot{\mathbf{W}}$。过载是飞行器结构强度设计和仪表选型的关键参数。

$$\mathbf{N} = m\dot{\mathbf{W}}$$

## 核心要素

### 过载在体坐标系中的分量

过载在体坐标系中分解为三个分量：

| 分量 | 符号 | 方向 | 物理意义 |
| :--- | :--- | :--- | :--- |
| 轴向过载 | $N_{x1}$ | 沿飞行器纵轴 | 发动机推力与气动阻力的合力 |
| 法向过载 | $N_{y1}$ | 垂直于纵轴，在主对称面内 | 升力与推力法向分量的合力 |
| 横向过载 | $N_{z1}$ | 垂直于主对称面 | 侧力与推力横向分量的合力 |

$$\begin{bmatrix} N_{x1} \\ N_{y1} \\ N_{z1} \end{bmatrix} = m \begin{bmatrix} \dot{W}_{x1} \\ \dot{W}_{y1} \\ \dot{W}_{z1} \end{bmatrix}$$

### 过载系数

过载系数定义为过载与火箭地面重量之比：

$$\begin{bmatrix} n_{x1} \\ n_{y1} \\ n_{z1} \end{bmatrix} = \frac{1}{g_0} \begin{bmatrix} \dot{W}_{x1} \\ \dot{W}_{y1} \\ \dot{W}_{z1} \end{bmatrix}$$

其中 $g_0$ 为海平面标准重力加速度。过载系数是无量纲量，表示过载相对于地面重力的倍数。

### 过载与视加速度的关系

视加速度是惯性测量单元（IMU）中的加速度计直接测量的量，等于除引力外所有外力产生的加速度。过载等于视加速度乘以飞行器质量。

## 应用价值

过载是飞行器结构强度设计的核心输入参数。箭体结构、仪器设备和有效载荷必须能承受主动段飞行中的最大过载。对于弹道导弹，过载系数决定了弹头再入时的结构强度要求。对于运载火箭，过载系数影响卫星等有效载荷的设计。在主动段飞行中，最大轴向过载通常出现在一级发动机关机前。

## 相关概念

- [推力（Thrust）](/glossary/fundamentals/thrust/)
- [空气动力系数（Aerodynamic Coefficient）](/glossary/fundamentals/aerodynamic-coefficient/)
- [体坐标系（Body Frame）](/glossary/fundamentals/body-frame/)
- [主动段（Powered Phase）](/glossary/fundamentals/powered-phase/)
- [惯性导航系统（INS）](/glossary/fundamentals/inertial-navigation-system/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
