---
title: 命中方程（Hit Equation）
description: 详细解析命中方程的定义、推导、求解方法及在弹道导弹射程计算中的应用
keywords: 命中方程, Hit Equation, 射程角, 被动段射程, 主动段终点参数, 弹道导弹
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 命中方程（Hit Equation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 命中方程详解 | 术语定义
  description: 详细解析命中方程的定义及在弹道导弹射程计算中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 命中方程详解 | 术语定义
  description: 详细解析命中方程的定义及在弹道导弹射程计算中的应用
  image: /logo.png
permalink: /glossary/fundamentals/hit-equation/
---

# 命中方程（Hit Equation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

命中方程是描述弹道导弹被动段角射程 $\beta_{kc}$ 与主动段终点参数之间关系的核心方程：

$$\frac{r_k}{R_E} = \frac{1 - \cos\beta_{kc}}{\gamma_k \cos^2\Theta_k} + \frac{\cos(\beta_{kc} + \Theta_k)}{\cos\Theta_k}$$

其中 $r_k$ 为主动段终点地心距，$R_E$ 为地球半径，$\gamma_k$ 为能量参数，$\Theta_k$ 为当地速度倾角。该方程将导弹的射程与关机点参数直接关联，是弹道设计和命中精度分析的基础。

## 核心要素

### 求解方法

命中方程可通过半角公式转化为关于 $\tan(\beta_{kc}/2)$ 的一元二次方程：

$$A\tan^2\frac{\beta_{kc}}{2} - B\tan\frac{\beta_{kc}}{2} + C = 0$$

其中系数为：

| 系数 | 表达式 |
|:---|:---|
| $A$ | $2R_E(1+\tan^2\Theta_k) - \gamma_k(R_E + r_k)$ |
| $B$ | $2\gamma_k R_E \tan\Theta_k$ |
| $C$ | $\gamma_k(R_E - r_k)$ |

由于 $A \geq 0$，$C \leq 0$，方程有唯一有效解：

$$\tan\frac{\beta_{kc}}{2} = \frac{B + \sqrt{B^2 - 4AC}}{2A}$$

### 被动段射程与自由段射程

| 射程类型 | 定义 | 地心距替换 |
|:---|:---|:---|
| 被动段射程 $L_{kc}$ | 主动段终点弹下点 K' 到落点 C 的大圆弧 | 落点 $r_c = R_E$ |
| 自由段射程 $L_{ke}$ | 主动段终点弹下点 K' 到再入点弹下点 E' 的大圆弧 | 再入点 $r_e = r_k$ |

自由段角射程的简洁公式：

$$\sin\frac{\beta_{ke}}{2} = \frac{\gamma_k}{2e}\sin 2\Theta_k$$

### 角射程与绝对射程

角射程 $\beta$ 与绝对射程 $L$ 的关系为 $L = R_E \beta$。当能量参数 $\gamma_k$ 和关机点高度 $h_k$ 给定时，角射程总存在最大值，对应速度倾角即为最佳速度倾角。

## 应用价值

命中方程是弹道导弹设计的核心工具。通过它，可以由关机点参数直接计算导弹射程，也可以反推达到指定射程所需的关机点参数。在制导系统设计中，命中方程用于建立射程偏差与关机点参数偏差之间的关系，是误差系数建模的起点。

## 相关概念

- [自由段弹道（Free-Flight Trajectory）](/glossary/fundamentals/free-flight-trajectory/)
- [能量参数（Energy Parameter）](/glossary/fundamentals/energy-parameter/)
- [最佳速度倾角（Optimal Velocity Inclination）](/glossary/fundamentals/optimal-velocity-inclination/)
- [绝对射程（Absolute Range）](/glossary/fundamentals/absolute-range/)
- [射程误差系数（Range Error Coefficient）](/glossary/fundamentals/range-error-coefficient/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
