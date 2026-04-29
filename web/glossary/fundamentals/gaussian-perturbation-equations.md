---
title: 高斯型摄动方程（Gaussian Perturbation Equations）
description: 详细解析高斯型摄动方程的两种形式（I型和II型）、适用场景及物理特性
keywords: 高斯型摄动方程, Gaussian Perturbation Equations, 高斯I型, 高斯II型, 摄动加速度分解
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 高斯型摄动方程（Gaussian Perturbation Equations）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 高斯型摄动方程详解 | 术语定义
  description: 详细解析高斯型摄动方程的两种形式及适用场景
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 高斯型摄动方程详解 | 术语定义
  description: 详细解析高斯型摄动方程的两种形式及适用场景
  image: /logo.png
permalink: /glossary/fundamentals/gaussian-perturbation-equations/
---

# 高斯型摄动方程（Gaussian Perturbation Equations）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

高斯型摄动方程是以轨道根数为变量的受摄运动方程，将每个轨道根数的变化率表示为6个轨道根数和摄动加速度3个正交分量的函数。该方程由高斯在研究小行星智神星在木星引力作用下的摄动运动时首先建立。适用于任何保守的或非保守的摄动力，包括推力加速度。

## 核心要素

### 高斯 I 型方程

摄动加速度分解为径向分量 $f_r$、周向分量 $f_u$ 和轨道面法向分量 $f_h$：

$$\left\{\begin{array}{l} \dot{a} = \frac{2}{n\sqrt{1-e^2}}[e\sin f \cdot f_r + (1+e\cos f)f_u] \\ \dot{e} = \frac{\sqrt{1-e^2}}{na}[\sin f \cdot f_r + (\cos f + \cos E)f_u] \\ \dot{i} = \frac{r\cos u}{na^2\sqrt{1-e^2}}f_h \\ \dot{\Omega} = \frac{r\sin u}{na^2\sqrt{1-e^2}\sin i}f_h \\ \dot{\omega} = \frac{\sqrt{1-e^2}}{nae}[-\cos f \cdot f_r + (1+\frac{r}{p})\sin f \cdot f_u] - \cos i \cdot \dot{\Omega} \\ \dot{M} = n - \frac{1-e^2}{nae}[(2e\frac{r}{p}-\cos f)f_r + (1+\frac{r}{p})\sin f \cdot f_u] \end{array}\right.$$

### 高斯 I 型物理特性

| 特性 | 说明 |
|:---|:---|
| 轨道尺寸和形状 | 由 $f_r$ 和 $f_u$ 共同决定，与 $f_h$ 无关 |
| 轨道面方位变化 | 仅由 $f_h$ 决定，与 $f_r$、$f_u$ 无关 |
| $f_h$ 在交点处 | 对 $i$ 影响最显著，对 $\Omega$ 无影响 |
| $f_h$ 在 $u=\pm90°$ | 对 $\Omega$ 影响最显著，对 $i$ 无影响 |

### 高斯 II 型方程

摄动加速度分解为切向分量 $f_t$、主法向分量 $f_n$ 和副法向分量 $f_h$，适用于大气阻力分析：

| 特性 | 说明 |
|:---|:---|
| 轨道尺寸变化 | 仅由切向分量 $f_t$ 决定 |
| 轨道形状和平均位置 | 由 $f_t$ 和 $f_n$ 共同决定 |
| 轨道面方位变化 | 仅由副法向分量 $f_h$ 决定 |

### 使用约束

对于近圆轨道，$\omega$ 和 $M$ 的变化率通常很大；对于近赤道轨道，$\Omega$ 和 $\omega$ 的变化率通常很大。原因是变分参数选择不当导致分母包含偏心率和轨道倾角的正弦。

## 应用价值

高斯型摄动方程是分析任意摄动力对轨道影响的基本工具。由于其直接以摄动加速度分量为输入，适用于非保守力（如大气阻力、推力）的分析。在轨道捕获和轨道保持过程中，发动机推力加速度可用高斯型方程近似描述，并通过合理设计轨道控制方案消除轨道根数偏差。

## 相关概念

- [参数变分法（Variation of Parameters）](/glossary/fundamentals/variation-of-parameters/)
- [拉格朗日型摄动方程（Lagrangian Perturbation Equations）](/glossary/fundamentals/lagrangian-perturbation-equations/)
- [轨道根数（Orbital Elements）](/glossary/fundamentals/orbital-elements/)
- [摄动运动（Perturbation Motion）](/glossary/fundamentals/perturbation-motion/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 刘林. 航天器轨道理论[M]. 国防工业出版社.
