---
title: 体坐标系（Body Frame）
description: 详细解析体坐标系的定义、坐标轴约定、与发射坐标系的关系及在飞行器姿态描述中的核心作用
keywords: 体坐标系, Body Frame, 弹体坐标系, 箭体坐标系, 姿态角, 欧拉角, 坐标系, 飞行器
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 体坐标系（Body Frame）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 体坐标系（Body Frame）详解 | 术语定义
  description: 详细解析体坐标系的定义、坐标轴约定及在飞行器姿态描述中的核心作用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 体坐标系（Body Frame）详解 | 术语定义
  description: 详细解析体坐标系的定义、坐标轴约定及在飞行器姿态描述中的核心作用
  image: /logo.png
permalink: /glossary/fundamentals/body-frame/
---

# 体坐标系（Body Frame）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

体坐标系（Body Frame）是与飞行器固联的坐标系，也称为弹体坐标系或箭体坐标系，记作 $o_1 - x_1 y_1 z_1$，简记为 $B$。体坐标系的原点为飞行器质心，坐标轴与飞行器结构固联，随飞行器一起运动和旋转。体坐标系是描述飞行器姿态的核心参考框架。

## 核心要素

### 坐标轴定义

| 轴 | 定义 |
|:---|:---|
| $o_1 x_1$ | 飞行器中心主对称轴，指向头部 |
| $o_1 y_1$ | 在飞行器主对称面内，垂直于 $x_1$ 轴 |
| $o_1 z_1$ | 垂直于主对称面，顺发射方向看去指向右方 |

主对称面在发射瞬时与发射坐标系 $xoy$ 平面重合。

### 姿态角的定义

体坐标系相对于发射坐标系（或发射惯性坐标系）的方位用三个欧拉角（姿态角）描述，采用 3-2-1 转动次序：

| 姿态角 | 符号 | 定义 |
|:---|:---|:---|
| 偏航角 | $\varphi$ | 绕 $z$ 轴旋转，$x_1$ 在水平面内的投影与 $x$ 轴的夹角 |
| 俯仰角 | $\psi$ | 绕 $y$ 轴旋转，$x_1$ 轴与水平面的夹角 |
| 滚转角 | $\gamma$ | 绕 $x$ 轴旋转，$y_1$ 轴与主对称面的夹角 |

### 与发射坐标系的转换

体坐标系与发射坐标系之间的方向余弦阵由三个姿态角的三角函数组成：

$$\mathbf{B}_G = \mathbf{R}_x(\gamma) \cdot \mathbf{R}_y(\psi) \cdot \mathbf{R}_z(\varphi)$$

通过该矩阵可将体坐标系中的测量值（如推力方向、气动力）转换到发射坐标系中。

## 应用价值

体坐标系是飞行器姿态控制和绕质心运动分析的基础。惯性导航系统中的陀螺仪和加速度计安装在体坐标系中，其测量值需要通过姿态矩阵转换到导航坐标系。对于地月空间任务，体坐标系的精确确定是姿态控制、交会对接和精确指向的前提。

## 相关概念

- [速度坐标系（Velocity Frame）](/glossary/fundamentals/velocity-frame/)
- [地心惯性坐标系（ECI）](/glossary/fundamentals/geocentric-inertial-frame/)
- [惯性导航系统（INS）](/glossary/fundamentals/inertial-navigation-system/)
- [升阻比（Lift-to-Drag Ratio）](/glossary/fundamentals/lift-to-drag-ratio/)
- [空天飞行器（Aerospace Vehicle）](/glossary/fundamentals/aerospace-vehicle/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
