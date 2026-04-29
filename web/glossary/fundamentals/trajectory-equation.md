---
title: 主动段弹道方程（Powered Phase Trajectory Equation）
description: 详细解析主动段弹道方程的组成、发射坐标系和速度坐标系下的形式及数值求解方法
keywords: 弹道方程, Trajectory Equation, 主动段, 质心运动方程, 纵向运动, 侧向运动, 数值积分
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 主动段弹道方程（Trajectory Equation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 主动段弹道方程详解 | 术语定义
  description: 详细解析主动段弹道方程的组成及数值求解方法
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 主动段弹道方程详解 | 术语定义
  description: 详细解析主动段弹道方程的组成及数值求解方法
  image: /logo.png
permalink: /glossary/fundamentals/trajectory-equation/
---

# 主动段弹道方程（Powered Phase Trajectory Equation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

主动段弹道方程（Trajectory Equation）是描述飞行器在发动机工作期间质心运动的微分方程组。弹道方程将推力、气动力、引力和控制力统一投影到选定坐标系中，通过数值积分求解飞行器的速度、位置和姿态随时间的变化规律。

## 核心要素

### 方程的基本组成

弹道方程由以下几部分组成：

| 组成部分 | 内容 | 说明 |
|:---|:---|:---|
| 动力学方程 | 牛顿第二定律在各轴的投影 | 核心方程 |
| 运动学方程 | 速度与位置的微分关系 | $\dot{x} = v\cos\theta$ 等 |
| 控制方程 | 姿态控制指令 | $\delta_\varphi = a_0^\varphi(\varphi - \varphi_{pr})$ |
| 补充方程 | 质量、高度、攻角等辅助计算 | 封闭方程组 |

### 发射坐标系下的形式

在发射坐标系中，弹道方程包含 6 个动力学方程（质心 3 个 + 绕质心 3 个）以及运动学方程和补充方程。质心动力学方程为：

$$m\frac{d^2\mathbf{r}}{dt^2} = \mathbf{P} + \mathbf{R} + \mathbf{F}_c + m\mathbf{g} + \mathbf{F}_k'$$

投影到发射坐标系三轴后，得到可数值积分的标量方程组。

### 速度坐标系下的形式

选择速度坐标系作为计算系，可将弹道方程分为纵向运动方程和侧向运动方程：

| 方程类型 | 主要参数 | 描述的运动 |
|:---|:---|:---|
| 纵向运动方程 | $v$、$\theta$、$x$、$y$ | 射向平面内的运动 |
| 侧向运动方程 | $\sigma$、$z$ | 垂直于射向平面的运动 |

### 关机点参数

弹道方程积分至关机时刻 $t_k$（燃料耗尽或指令关机），得到关机点参数 $(v_k, \theta_k, x_k, y_k)$，这些参数决定了后续被动段的运动轨迹。

## 应用价值

弹道方程是飞行器设计和任务分析的核心工具。通过求解弹道方程，可以预测飞行轨迹、确定关机点参数、分析飞行性能。对于弹道导弹，关机点参数决定落点精度；对于运载火箭，关机点参数决定入轨精度。弹道方程也是弹道优化和制导算法设计的基础。

## 相关概念

- [推力（Thrust）](/glossary/fundamentals/thrust/)
- [空气动力系数（Aerodynamic Coefficient）](/glossary/fundamentals/aerodynamic-coefficient/)
- [纵向运动（Longitudinal Motion）](/glossary/fundamentals/longitudinal-lateral-motion/)
- [速度坐标系（Velocity Frame）](/glossary/fundamentals/velocity-frame/)
- [主动段（Powered Phase）](/glossary/fundamentals/powered-phase/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
