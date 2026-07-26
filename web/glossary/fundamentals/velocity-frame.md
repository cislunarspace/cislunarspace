---
title: 速度坐标系（Velocity Frame）
description: 详细解析速度坐标系的定义、坐标轴约定、与体坐标系的关系及在气动力分析中的核心作用
keywords: 速度坐标系, Velocity Frame, 气动力, 升力, 阻力, 侧力, 坐标系, 飞行器
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 速度坐标系（Velocity Frame）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 速度坐标系（Velocity Frame）详解 | 术语定义
  description: 详细解析速度坐标系的定义、坐标轴约定及在气动力分析中的核心作用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 速度坐标系（Velocity Frame）详解 | 术语定义
  description: 详细解析速度坐标系的定义、坐标轴约定及在气动力分析中的核心作用
  image: /logo.png
permalink: /glossary/fundamentals/velocity-frame/
---

# 速度坐标系（Velocity Frame）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

速度坐标系（Velocity Frame）是以飞行器飞行速度方向为基准建立的坐标系，记作 $o_1 - x_v y_v z_v$，简记为 $V$。速度坐标系的原点为飞行器质心，$x_v$ 轴沿飞行速度方向，用于描述飞行器的速度矢量状态和气动力的分解。

## 核心要素

### 坐标轴定义

| 轴 | 定义 |
|:---|:---|
| $o_1 x_v$ | 沿飞行器的飞行速度方向 |
| $o_1 y_v$ | 在飞行器主对称面内，垂直于 $x_v$ 轴 |
| $o_1 z_v$ | 垂直于 $x_v o_1 y_v$ 平面，顺飞行方向看去指向右方 |

### 与体坐标系的关系

速度坐标系与体坐标系之间的关系由两个角度确定：

| 角度 | 符号 | 定义 |
| :--- | :--- | :--- |
| 攻角 | $\alpha$ | 速度矢量在主对称面内的投影与 $x_1$ 轴的夹角 |
| 侧滑角 | $\beta$ | 速度矢量与主对称面的夹角 |

方向余弦阵为：

$$\mathbf{V}_B = \mathbf{R}_x(-\beta) \cdot \mathbf{R}_y(\alpha)$$

### 与发射坐标系的关系

速度坐标系与发射坐标系之间的关系由三个角度确定：

| 角度 | 符号 | 定义 |
| :--- | :--- | :--- |
| 航迹偏航角 | $\sigma$ | 速度矢量在发射坐标系水平面内的投影与 $x$ 轴的夹角 |
| 航迹倾角 | $\theta$ | 速度矢量与水平面的夹角 |
| 倾斜角 | $\gamma_v$ | 绕速度矢量的旋转角 |

### 气动力的分解

在速度坐标系中，气动力自然分解为：

| 分量 | 方向 | 物理意义 |
| :--- | :--- | :--- |
| 阻力 $X$ | $-x_v$ 方向 | 与速度方向相反 |
| 升力 $Y$ | $y_v$ 方向 | 垂直于速度方向，在主对称面内 |
| 侧力 $Z$ | $z_v$ 方向 | 垂直于速度方向和主对称面 |

## 应用价值

速度坐标系是气动力分析和飞行力学中的核心坐标系。空气动力（升力、阻力、侧力）自然沿速度坐标系分解，攻角和侧滑角是气动力计算的关键参数。在主动段弹道设计中，速度坐标系用于建立速度矢量的运动方程。对于地月空间任务的再入段，速度坐标系是分析气动加热和减速过程的基础。

## 相关概念

- [体坐标系（Body Frame）](/glossary/fundamentals/body-frame/)
- [升阻比（Lift-to-Drag Ratio）](/glossary/fundamentals/lift-to-drag-ratio/)
- [再入段（Reentry Phase）](/glossary/fundamentals/reentry-phase/)
- [主动段（Powered Phase）](/glossary/fundamentals/powered-phase/)
- [空天飞行器（Aerospace Vehicle）](/glossary/fundamentals/aerospace-vehicle/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
