---
title: 绝对射程（Absolute Range）
description: 详细解析绝对射程的定义、被动段与自由段射程的计算方法及与主动段终点参数的关系
keywords: 绝对射程, Absolute Range, 被动段射程, 自由段射程, 角射程, 射程角
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 绝对射程（Absolute Range）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 绝对射程详解 | 术语定义
  description: 详细解析绝对射程的定义及计算方法
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 绝对射程详解 | 术语定义
  description: 详细解析绝对射程的定义及计算方法
  image: /logo.png
permalink: /glossary/fundamentals/absolute-range/
---

# 绝对射程（Absolute Range）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

绝对射程是弹道平面与地球表面相截而成的大圆弧弧长，描述弹道导弹从关机点到落点的地面距离。被动段绝对射程 $L_{kc}$ 由自由段射程 $L_{ke}$ 和再入段射程 $L_{ec}$ 两部分组成：

$$L_{kc} = L_{ke} + L_{ec}$$

## 核心要素

### 角射程与绝对射程

大圆弧对应的地心角称为角射程，与绝对射程的关系为：

$$L_{kc} = R_E \beta_{kc}, \quad L_{ke} = R_E \beta_{ke}, \quad L_{ec} = R_E \beta_{ec}$$

其中 $\beta_{kc} = \beta_{ke} + \beta_{ec}$。

### 自由段角射程

自由段角射程由主动段终点参数确定，有两种常用形式：

**正切公式**：
$$\tan\frac{\beta_{ke}}{2} = \frac{\gamma_k \sin\Theta_k \cos\Theta_k}{1 - \gamma_k \cos^2\Theta_k}$$

**正弦公式**（形式简洁，实践中常用）：
$$\sin\frac{\beta_{ke}}{2} = \frac{\gamma_k}{2e}\sin 2\Theta_k$$

### 被动段角射程

被动段角射程需通过命中方程求解：

$$\tan\frac{\beta_{kc}}{2} = \frac{B + \sqrt{B^2 - 4AC}}{2A}$$

其中 $A$、$B$、$C$ 由主动段终点参数 $r_k$、$\gamma_k$、$\Theta_k$ 和地球半径 $R_E$ 确定。

### 射程的影响因素

| 参数 | 对射程的影响 |
|:---|:---|
| 能量参数 $\gamma_k$ | $\gamma_k$ 增大，射程增大 |
| 速度倾角 $\Theta_k$ | 存在最佳值 $\Theta_{k,\mathrm{opt}}$ 使射程最大 |
| 关机点高度 $h_k$ | $h_k$ 增大，再入段射程比例减小 |

### 与相对射程的区别

绝对射程在惯性空间中定义，不考虑地球自转。实际应用中需考虑地球自转，将绝对射程转换为相对射程（相对旋转地球的射程），转换关系为：

$$\beta_{kc'} = \beta_{kc} - \omega_E T_{kc}$$

其中 $\omega_E$ 为地球自转角速度，$T_{kc}$ 为被动段飞行时间。

## 应用价值

绝对射程是弹道导弹性能的核心指标。通过命中方程，可以由关机点参数计算射程，也可以由射程要求反推关机点参数。射程计算是弹道设计、制导系统设计和命中精度分析的基础。

## 相关概念

- [命中方程（Hit Equation）](/glossary/fundamentals/hit-equation/)
- [最佳速度倾角（Optimal Velocity Inclination）](/glossary/fundamentals/optimal-velocity-inclination/)
- [自由段弹道（Free-Flight Trajectory）](/glossary/fundamentals/free-flight-trajectory/)
- [能量参数（Energy Parameter）](/glossary/fundamentals/energy-parameter/)
- [射程误差系数（Range Error Coefficient）](/glossary/fundamentals/range-error-coefficient/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
