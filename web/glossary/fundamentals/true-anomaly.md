---
title: 真近点角（True Anomaly）
description: 详细解析真近点角的定义、与偏近点角和平近点角的关系、速度特性及在轨道描述中的作用
keywords: 真近点角, True Anomaly, 偏近点角, 平近点角, 近地点, 纬度幅角, 轨道位置
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 真近点角（True Anomaly）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 真近点角详解 | 术语定义
  description: 详细解析真近点角的定义及在轨道描述中的作用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 真近点角详解 | 术语定义
  description: 详细解析真近点角的定义及在轨道描述中的作用
  image: /logo.png
permalink: /glossary/fundamentals/true-anomaly/
---

# 真近点角（True Anomaly）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

真近点角（True Anomaly, $f$）是轨道平面内偏心率矢量 $\boldsymbol{e}$（指向近地点）与飞行器位置矢量 $\boldsymbol{r}$ 之间的夹角，描述飞行器在轨道上的瞬时位置。$f = 0°$ 对应近地点，$f = 180°$ 对应远地点，$f$ 从 $0°$ 到 $360°$ 变化完成一个轨道周期。

## 核心要素

### 与轨道位置的关系

真近点角直接通过轨道方程确定地心距：

$$r = \frac{a(1-e^2)}{1 + e\cos f}$$

| 真近点角 | 位置 | 地心距 |
|:---|:---|:---|
| $f = 0°$ | 近地点 | $r_p = a(1-e)$ |
| $f = 90°$ | 通径端点 | $r = p = a(1-e^2)$ |
| $f = 180°$ | 远地点 | $r_a = a(1+e)$ |

### 与纬度幅角的关系

纬度幅角 $u$ 是位置矢量与升交点矢量的夹角：

$$f = u - \omega$$

其中 $\omega$ 为近地点纬度幅角。$u \in [-90°, 90°]$ 对应升段，$u \in (90°, 270°)$ 对应降段。

### 与偏近点角、平近点角的关系

真近点角与偏近点角 $E$ 的半角关系：

$$\tan\frac{f}{2} = \sqrt{\frac{1+e}{1-e}}\tan\frac{E}{2}$$

真近点角变化不均匀（近地点快、远地点慢），而平近点角 $M = n(t-\tau)$ 均匀变化。

### 速度特性

真近点角决定了速度倾角 $\Theta$：

$$\tan\Theta = \frac{e\sin f}{1 + e\cos f}$$

当 $f = 0°$ 或 $180°$ 时，$\Theta = 0°$（速度沿水平方向）；当 $\cos f = -e$ 时，$|\Theta|$ 取极大值 $\sin^{-1}e$。

## 应用价值

真近点角是描述飞行器在轨道上位置的最基本参数。通过轨道方程，真近点角直接映射为地心距；通过开普勒方程，真近点角与飞行时间建立联系。在轨道预报中，真近点角的计算是核心步骤。在轨道设计中，变轨点的真近点角决定了速度增量的方向和大小。

## 相关概念

- [轨道方程（Orbital Equation）](/glossary/fundamentals/orbital-equation/)
- [开普勒方程（Kepler's Equation）](/glossary/fundamentals/kepler-equation/)
- [轨道根数（Orbital Elements）](/glossary/fundamentals/orbital-elements/)
- [活力公式（Vis-Viva Equation）](/glossary/fundamentals/vis-viva-equation/)
- [比动量矩（Specific Angular Momentum）](/glossary/fundamentals/specific-angular-momentum/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
