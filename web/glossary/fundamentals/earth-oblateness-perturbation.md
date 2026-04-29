---
title: 地球扁率摄动（Earth Oblateness Perturbation）
description: 详细解析地球扁率（J2项）摄动的定义、对轨道根数的长期影响及升交点漂移规律
keywords: 地球扁率摄动, Earth Oblateness Perturbation, J2摄动, 升交点漂移, 轨道进动
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 地球扁率摄动（Earth Oblateness Perturbation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 地球扁率摄动详解 | 术语定义
  description: 详细解析地球扁率摄动对轨道根数的长期影响
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 地球扁率摄动详解 | 术语定义
  description: 详细解析地球扁率摄动对轨道根数的长期影响
  image: /logo.png
permalink: /glossary/fundamentals/earth-oblateness-perturbation/
---

# 地球扁率摄动（Earth Oblateness Perturbation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

地球扁率摄动是指由于地球两极扁平、赤道略鼓的非球形质量分布，导致其引力偏离均质圆球假设而产生的摄动。在近地空间，二阶带谐函数（$J_2$ 项）是主要摄动项，对应的摄动引力位为：

$$\Delta U(r,\varphi) = -\frac{1}{2}\frac{\mu_E}{r}J_2\left(\frac{R_E}{r}\right)^2(3\sin^2\varphi - 1)$$

其中 $J_2 = 1.08263 \times 10^{-3}$ 为地球扁率系数，$R_E$ 为地球半径，$\varphi$ 为地心纬度。

## 核心要素

### J2 长期项对轨道根数的影响

仅考虑 $J_2$ 长期项时，各轨道根数的变化率：

$$\left\{\begin{array}{l} \dot{a} = 0, \quad \dot{e} = 0, \quad \dot{i} = 0 \\ \dot{\Omega} = -\frac{3J_2R_E^2}{2p^2}n\cos i \\ \dot{\omega} = \frac{3J_2R_E^2}{2p^2}n(2 - \frac{5}{2}\sin^2 i) \\ \dot{M} = n + \frac{3J_2R_E^2}{2p^2}n(1 - \frac{3}{2}\sin^2 i)\sqrt{1-e^2} \end{array}\right.$$

### 升交点赤经漂移（轨道进动）

| 条件 | 漂移方向 | 物理机制 |
|:---|:---|:---|
| 顺行轨道（$i < 90°$） | $\dot{\Omega} < 0$，升交点西退 | 赤道隆起部分引力力矩引起动量矩进动 |
| 逆行轨道（$i > 90°$） | $\dot{\Omega} > 0$，升交点东进 | 同上，方向相反 |
| 极轨道（$i = 90°$） | $\dot{\Omega} = 0$ | $\cos i = 0$，不受扁率长期项影响 |

漂移速率与轨道高度和偏心率有关：半长轴越小、偏心率越接近1，漂移越快。

### 近拱点漂移

近拱点纬度幅角变化率 $\dot{\omega}$ 为常量，取决于 $a$、$e$ 和 $i$。当 $\sin^2 i = 4/5$（即 $i = 63.4°$ 或 $116.6°$）时，$\dot{\omega} = 0$，轨道拱线不发生转动，该倾角称为临界倾角。

### 摄动分解

地球扁率摄动可分为：
- **长期项** $R_C$：轨道周期积分均值，引起轨道根数单调变化
- **短周期项** $R_S$：一个轨道周期内积分均值为零，不产生积累效应

## 应用价值

地球扁率摄动是近地轨道最主要摄动源（量级 $10^{-3}$）。其长期项效应是太阳同步轨道和冻结轨道设计的物理基础。升交点漂移规律对星座设计、轨道维持和空间态势感知具有重要意义。

## 相关概念

- [太阳同步轨道（Sun-Synchronous Orbit）](/glossary/fundamentals/sun-synchronous-orbit/)
- [冻结轨道（Frozen Orbit）](/glossary/fundamentals/frozen-orbit/)
- [拉格朗日型摄动方程（Lagrangian Perturbation Equations）](/glossary/fundamentals/lagrangian-perturbation-equations/)
- [摄动运动（Perturbation Motion）](/glossary/fundamentals/perturbation-motion/)
- [轨道根数（Orbital Elements）](/glossary/fundamentals/orbital-elements/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 刘林. 航天器轨道理论[M]. 国防工业出版社.
