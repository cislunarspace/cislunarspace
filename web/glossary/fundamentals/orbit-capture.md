---
title: 轨道捕获（Orbit Capture）
description: 详细解析轨道捕获的定义、高斯摄动方程及调整方法
keywords: 轨道捕获, Orbit Capture, 轨道调整, 入轨误差, 高斯摄动方程
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 轨道捕获（Orbit Capture）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 轨道捕获详解 | 术语定义
  description: 详细解析轨道捕获的定义及调整方法
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 轨道捕获详解 | 术语定义
  description: 详细解析轨道捕获的定义及调整方法
  image: /logo.png
permalink: /glossary/fundamentals/orbit-capture/
---

# 轨道捕获（Orbit Capture）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

轨道捕获是为消除入轨误差，使卫星获得标称轨道根数而进行的轨道调整机动。通过施加小冲量修正实际轨道与标称轨道之间的偏差，属于轨道调整机动的一种。

## 核心要素

### 基本原理

轨道捕获将推力加速度视为摄动力，基于冲量假设分析给定冲量所引起的轨道根数变化量。在轨道坐标系中，速度增量可分解为径向 $\Delta v_r$、周向 $\Delta v_t$ 和法向 $\Delta v_h$ 三个分量。

### 高斯型摄动运动方程

轨道根数变化量与速度冲量的关系：

$$\begin{cases} \Delta a = \frac{2}{n\sqrt{1-e^2}}[e\sin f \cdot \Delta v_r + (1+e\cos f)\Delta v_t] \\ \Delta e = \frac{\sqrt{1-e^2}}{na}[\sin f \cdot \Delta v_r + (\cos f + \cos E)\Delta v_t] \\ \Delta i = \frac{r\cos u}{na^2\sqrt{1-e^2}}\Delta v_h \\ \Delta\Omega = \frac{r\sin u}{na^2\sqrt{1-e^2}\sin i}\Delta v_h \end{cases}$$

### 调整策略

| 轨道根数 | 所需冲量分量 | 最优施加位置 |
|:---|:---|:---|
| 半长轴 $a$ | $\Delta v_r$, $\Delta v_t$ | 近地点切向 |
| 偏心率 $e$ | $\Delta v_r$, $\Delta v_t$ | 根据具体偏差确定 |
| 轨道倾角 $i$ | $\Delta v_h$ | $u = 0°$ 或 $180°$ |
| 升交点赤经 $\Omega$ | $\Delta v_h$ | $u = 90°$ 或 $270°$ |

### 修正量计算

若实际轨道与标称轨道的偏差为 $da$、$de$、$di$、$d\Omega$、$d\omega$、$dM$，则修正量为 $\Delta a = -da$，$\Delta e = -de$，以此类推。

## 应用价值

轨道捕获是卫星入轨后的关键操作环节。由于运载火箭入轨精度有限，卫星通常需要通过轨道捕获机动将实际轨道修正至标称轨道。合理选择冲量施加位置和方向可以最小化燃料消耗。

## 相关概念

- [轨道机动（Orbital Maneuver）](/glossary/fundamentals/orbital-maneuver/)
- [特征速度（Characteristic Velocity）](/glossary/fundamentals/characteristic-velocity/)
- [入轨条件（Orbit Insertion Conditions）](/glossary/fundamentals/orbit-insertion-conditions/)
- [轨道根数（Orbital Elements）](/glossary/fundamentals/orbital-elements/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
