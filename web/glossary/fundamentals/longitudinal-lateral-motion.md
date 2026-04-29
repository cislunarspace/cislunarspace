---
title: 纵向运动与侧向运动（Longitudinal and Lateral Motion）
description: 详细解析纵向运动方程和侧向运动方程的定义、解耦条件及在弹道分析中的应用
keywords: 纵向运动, 侧向运动, Longitudinal Motion, Lateral Motion, 弹道方程, 射向平面, 解耦
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 纵向运动与侧向运动
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 纵向运动与侧向运动详解 | 术语定义
  description: 详细解析纵向运动方程和侧向运动方程的定义及在弹道分析中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 纵向运动与侧向运动详解 | 术语定义
  description: 详细解析纵向运动方程和侧向运动方程的定义及在弹道分析中的应用
  image: /logo.png
permalink: /glossary/fundamentals/longitudinal-lateral-motion/
---

# 纵向运动与侧向运动（Longitudinal and Lateral Motion）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在速度坐标系下，通过小角度假设和瞬时平衡假设，空间运动方程可分解为两组独立的方程：纵向运动方程描述射向平面（发射坐标系 $xoy$ 平面）内的运动，侧向运动方程描述垂直于射向平面的运动。这种分解实现了三维运动的解耦，大幅简化了弹道分析。

## 核心要素

### 纵向运动方程

纵向运动描述飞行器在射向平面内的运动，主要参数包括：

| 参数 | 符号 | 说明 |
|:---|:---|:---|
| 速度大小 | $v$ | 飞行速度标量 |
| 速度倾角 | $\theta$ | 速度矢量与水平面的夹角 |
| 水平位置 | $x$ | 发射坐标系 $x$ 轴分量 |
| 垂直位置 | $y$ | 发射坐标系 $y$ 轴分量 |

纵向运动方程为：

$$\begin{cases} m\dot{v} = P_e - C_x q S_M + mg\sin\theta \\ mv\dot{\theta} = (P_e + C_y^\alpha q S_M)\alpha + mg\cos\theta \\ \dot{x} = v\cos\theta \\ \dot{y} = v\sin\theta \end{cases}$$

### 侧向运动方程

侧向运动描述飞行器偏离射向平面的运动，主要参数包括：

| 参数 | 符号 | 说明 |
|:---|:---|:---|
| 航迹偏航角 | $\sigma$ | 速度矢量偏离射向平面的角度 |
| 横向位置 | $z$ | 发射坐标系 $z$ 轴分量 |

侧向运动通常很小，由横向控制力维持在射向平面附近。

### 解耦条件

纵向与侧向运动解耦的条件：
- 小角度假设（$\alpha$、$\beta$、$\sigma$、$\nu$ 为小量）
- 瞬时平衡假设
- 忽略地球自转影响（粗略计算时）

在精确计算中，纵向和侧向运动存在耦合，需联立求解。

## 应用价值

纵向运动与侧向运动的分解是主动段弹道分析的基础方法。纵向运动决定了飞行器的速度大小、飞行高度和射程，是弹道设计的核心。侧向运动反映了飞行器偏离射向平面的程度，需要横向控制系统加以抑制。在方案论证阶段，通常先设计纵向运动弹道，再分析侧向运动的稳定性。

## 相关概念

- [主动段弹道方程（Trajectory Equation）](/glossary/fundamentals/trajectory-equation/)
- [瞬时平衡假设（Instantaneous Balance）](/glossary/fundamentals/instantaneous-balance/)
- [速度坐标系（Velocity Frame）](/glossary/fundamentals/velocity-frame/)
- [俯仰程序角（Pitch Program）](/glossary/fundamentals/pitch-program/)
- [主动段（Powered Phase）](/glossary/fundamentals/powered-phase/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
