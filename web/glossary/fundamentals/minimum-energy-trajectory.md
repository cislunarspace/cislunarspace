---
title: 最小能量弹道（Minimum Energy Trajectory）
description: 详细解析最小能量弹道的定义、求解方法（极值法与图解法）及与最佳速度倾角的关系
keywords: 最小能量弹道, Minimum Energy Trajectory, 最佳速度倾角, 最大射程, 虚焦点, 半长轴
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 最小能量弹道（Minimum Energy Trajectory）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 最小能量弹道详解 | 术语定义
  description: 详细解析最小能量弹道的定义及求解方法
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 最小能量弹道详解 | 术语定义
  description: 详细解析最小能量弹道的定义及求解方法
  image: /logo.png
permalink: /glossary/fundamentals/minimum-energy-trajectory/
---

# 最小能量弹道（Minimum Energy Trajectory）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

最小能量弹道是在给定主动段终点地心距 $r_k$ 和被动段射程角 $\beta_{kc}$ 的条件下，使所需能量参数 $\gamma_k$（或速度大小 $v_k$、比机械能 $\varepsilon$）最小的椭圆弹道。最小能量弹道也是该能量参数对应的最大射程弹道，两者具有等价性。

## 核心要素

### 极值法求解

当 $r_k$ 和 $\beta_{kc}$ 给定时，$\gamma_k$ 仅为 $\Theta_k$ 的函数。$\gamma_k$ 取极小值的条件为 $\partial\gamma_k/\partial\Theta_k = 0$，得到最小能量参数与最佳速度倾角的关系：

$$\gamma_{k,\min} = 2\tan\Theta_{kc,\mathrm{opt}}\tan\frac{\beta_{kc}}{2}$$

该式与最大射程弹道的条件完全相同，证明了两者的等价性。

### 图解法求解

通过椭圆几何性质求解最小半长轴 $a_{\min}$：

$$a_{\min} = \frac{1}{4}(KC + r_k + R_E)$$

其中 $KC$ 为关机点 K 与落点 C 之间的直线距离，可由余弦定理计算。当 $a = a_{\min}$ 时，椭圆弹道的虚焦点 O' 位于线段 KC 上（即 $O'_E$ 点），此时比机械能 $\varepsilon_{\min}$ 取最小值。

### 最佳速度倾角的几何推导

在最小能量椭圆弹道上，K 点的法线平分 $\angle CKO_E$，由此可得：

$$\Theta_{kc,\mathrm{opt}} = \frac{1}{2}\tan^{-1}\frac{R_E\sin\beta_{kc}}{r_k - R_E\cos\beta_{kc}}$$

对于自由段（$r_e = r_k$），$\Delta CKO_E$ 为等腰三角形，对应公式进一步简化。

### 最小能量弹道的飞行时间

自由段最小能量弹道的飞行时间：

$$T_{ke} = 2\sqrt{\frac{a^3}{\mu_E}}\left[\cos^{-1}\sqrt{1-\gamma_{k,\min}} + \sqrt{\gamma_{k,\min}(1-\gamma_{k,\min})}\right]$$

## 应用价值

最小能量弹道是弹道导弹设计的核心概念。在给定射程要求下，最小能量弹道所需关机点速度最小，从而降低了对推进系统的要求。同时，最小能量弹道对应最佳速度倾角，该角度下速度倾角误差系数为零，有利于提高射击精度。导弹初步设计阶段通常以最小能量弹道为基准进行参数估算。

## 相关概念

- [最佳速度倾角（Optimal Velocity Inclination）](/glossary/fundamentals/optimal-velocity-inclination/)
- [命中方程（Hit Equation）](/glossary/fundamentals/hit-equation/)
- [能量参数（Energy Parameter）](/glossary/fundamentals/energy-parameter/)
- [活力公式（Vis-Viva Equation）](/glossary/fundamentals/vis-viva-equation/)
- [开普勒方程（Kepler's Equation）](/glossary/fundamentals/kepler-equation/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
