---
title: 活力公式（Vis-Viva Equation）
description: 详细解析活力公式的定义、推导、物理含义及在不同圆锥曲线轨道中的应用
keywords: 活力公式, Vis-Viva, 机械能守恒, 比机械能, 逃逸速度, 第一宇宙速度, 第二宇宙速度
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 活力公式（Vis-Viva Equation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 活力公式详解 | 术语定义
  description: 详细解析活力公式的定义、物理含义及在轨道力学中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 活力公式详解 | 术语定义
  description: 详细解析活力公式的定义、物理含义及在轨道力学中的应用
  image: /logo.png
permalink: /glossary/fundamentals/vis-viva-equation/
---

# 活力公式（Vis-Viva Equation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

活力公式（Vis-Viva Equation）是二体运动中机械能守恒定律的表达式，建立了飞行器速度大小 $v$、地心距 $r$ 与轨道半长轴 $a$ 之间的关系：

$$v^2 = \mu_E\left(\frac{2}{r} - \frac{1}{a}\right)$$

该公式表明，给定轨道半长轴后，飞行器在任意地心距处的速度大小可直接计算，且地心距越大、速度越小。

## 核心要素

### 比机械能

由活力公式可得比机械能 $\varepsilon$ 仅由半长轴决定：

$$\varepsilon = \frac{1}{2}v^2 - \frac{\mu_E}{r} = -\frac{\mu_E}{2a}$$

| 轨道类型 | 半长轴 | 比机械能 |
|:---|:---|:---|
| 圆/椭圆轨道 | $a > 0$ | $\varepsilon < 0$ |
| 抛物线轨道 | $a \to \infty$ | $\varepsilon = 0$ |
| 双曲线轨道 | $a < 0$ | $\varepsilon > 0$ |

### 特征速度

| 速度 | 公式 | 含义 |
|:---|:---|:---|
| 第一宇宙速度 | $v_I = \sqrt{\mu_E/R_E} = 7.9 \, \text{km/s}$ | 地表圆轨道速度 |
| 第二宇宙速度 | $v_{II} = \sqrt{2\mu_E/R_E} = 11.2 \, \text{km/s}$ | 地表逃逸速度 |
| 逃逸速度 | $v_{\text{esc}} = \sqrt{2\mu_E/r}$ | 任意高度的逃逸速度 |

### 速度方向

速度矢量与当地水平面的夹角为当地速度倾角 $\Theta$：

$$\tan\Theta = \frac{e\sin f}{1 + e\cos f}$$

在近地点和远地点处 $\Theta = 0°$（速度沿水平方向），在椭圆轨道短轴端点处 $|\Theta|$ 取极大值 $\sin^{-1}e$。

## 应用价值

活力公式是轨道力学中最常用的公式之一。它将速度大小与轨道位置直接关联，无需通过时间积分即可计算速度。在轨道设计中，活力公式用于确定变轨所需速度增量；在轨道确定中，用于由观测数据反推轨道参数；在发射窗口计算中，用于确定入轨速度要求。

## 相关概念

- [二体问题（Two-Body Problem）](/glossary/fundamentals/two-body-problem/)
- [轨道方程（Orbital Equation）](/glossary/fundamentals/orbital-equation/)
- [比动量矩（Specific Angular Momentum）](/glossary/fundamentals/specific-angular-momentum/)
- [轨道根数（Orbital Elements）](/glossary/fundamentals/orbital-elements/)
- [真近点角（True Anomaly）](/glossary/fundamentals/true-anomaly/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
