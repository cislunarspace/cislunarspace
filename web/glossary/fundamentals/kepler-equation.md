---
title: "开普勒方程（Kepler's Equation）"
description: 详细解析开普勒方程的定义、偏近点角与平近点角的关系、求解算法及在轨道预报中的应用
keywords: 开普勒方程, Kepler Equation, 偏近点角, 平近点角, 牛顿迭代法, 轨道预报, 轨道周期
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: "开普勒方程（Kepler's Equation）"
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 开普勒方程详解 | 术语定义
  description: 详细解析开普勒方程的定义、求解算法及在轨道预报中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 开普勒方程详解 | 术语定义
  description: 详细解析开普勒方程的定义、求解算法及在轨道预报中的应用
  image: /logo.png
permalink: /glossary/fundamentals/kepler-equation/
---

# 开普勒方程（Kepler's Equation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

开普勒方程是描述椭圆轨道飞行时间与偏近点角关系的超越方程：

$$M = E - e\sin E$$

其中 $M = n(t - \tau)$ 为平近点角，$E$ 为偏近点角，$e$ 为偏心率，$n = \sqrt{\mu_E/a^3}$ 为平均角速度，$\tau$ 为过近地点时刻。该方程是求解二体运动方程所需的第六个积分常数的核心工具。

## 核心要素

### 三种近点角

| 近点角 | 符号 | 定义 | 特点 |
| :--- | :--- | :--- | :--- |
| 真近点角 | $f$ | 飞行器与近地点的地心角 | 直接描述位置，变化不均匀 |
| 偏近点角 | $E$ | 辅助圆上对应点的圆心角 | 与 $f$ 通过半角公式关联 |
| 平近点角 | $M$ | $n(t-\tau)$，均匀变化的虚拟角度 | 与时间成正比 |

三者关系：当 $f = 0°$ 或 $180°$ 时，$M = E = f$；当 $f \in (0°, 180°)$ 时，$M < E < f$；当 $f \in (180°, 360°)$ 时，$M > E > f$。偏心率越大，差异越大。

### 求解算法

已知飞行时间求偏近点角 $E$（反解开普勒方程）的常用方法：

| 方法 | 迭代公式 | 适用场景 |
| :--- | :--- | :--- |
| 简单迭代法 | $E_{k+1} = M + e\sin E_k$ | 小偏心率轨道 |
| 牛顿迭代法 | $E_{k+1} = E_k - \frac{E_k - e\sin E_k - M}{1 - e\cos E_k}$ | 通用，收敛快 |
| 级数展开法 | $E = M + e\sin M + \frac{e^2}{2}\sin 2M + \cdots$ | 小偏心率，解析表达 |

### 轨道周期

由开普勒方程可得轨道周期：

$$T = \frac{2\pi}{n} = 2\pi\sqrt{\frac{a^3}{\mu_E}}$$

即开普勒第三定律：轨道周期仅由半长轴决定。人造地球卫星的最小轨道周期约为 84.3 分钟。

## 应用价值

开普勒方程是轨道预报的核心方程。通过它，可以由已知的过近地点时刻和轨道根数计算任意时刻飞行器的偏近点角，进而求得真近点角和位置。在基于轨道根数的预报法中，开普勒方程的求解是关键步骤。对于抛物线和双曲线轨道，也有类似的时间方程（巴克方程和双曲线时间方程）。

## 相关概念

- [真近点角（True Anomaly）](/glossary/fundamentals/true-anomaly/)
- [轨道根数（Orbital Elements）](/glossary/fundamentals/orbital-elements/)
- [轨道方程（Orbital Equation）](/glossary/fundamentals/orbital-equation/)
- [二体问题（Two-Body Problem）](/glossary/fundamentals/two-body-problem/)
- [活力公式（Vis-Viva Equation）](/glossary/fundamentals/vis-viva-equation/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
