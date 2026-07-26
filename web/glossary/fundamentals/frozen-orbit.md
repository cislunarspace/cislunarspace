---
title: 冻结轨道（Frozen Orbit）
description: 详细解析冻结轨道的定义、临界倾角条件及在通信和导航卫星中的应用
keywords: 冻结轨道, Frozen Orbit, 临界倾角, 近拱点漂移, Molniya轨道
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 冻结轨道（Frozen Orbit）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 冻结轨道详解 | 术语定义
  description: 详细解析冻结轨道的定义及临界倾角条件
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 冻结轨道详解 | 术语定义
  description: 详细解析冻结轨道的定义及临界倾角条件
  image: /logo.png
permalink: /glossary/fundamentals/frozen-orbit/
---

# 冻结轨道（Frozen Orbit）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

冻结轨道是指在地球扁率（$J_2$ 项）长期摄动下，近拱点纬度幅角 $\omega$ 不发生漂移的轨道。当轨道倾角满足 $\sin^2 i = 4/5$，即 $i = 63.4°$ 或 $i = 116.6°$ 时，$\dot{\omega} = 0$，轨道拱线在惯性空间中保持不变。该倾角称为临界倾角。

## 核心要素

### 临界倾角条件

根据地球扁率长期项对近拱点的影响：

$$\dot{\omega} = \frac{3J_2R_E^2}{2p^2}n\left(2 - \frac{5}{2}\sin^2 i\right)$$

当 $2 - \frac{5}{2}\sin^2 i = 0$ 时，$\dot{\omega} = 0$，解得：

| 临界倾角 | 轨道类型 |
| :--- | :--- |
| $i = 63.4°$ | 顺行冻结轨道 |
| $i = 116.6°$ | 逆行冻结轨道 |

### 近拱点漂移规律

| 倾角范围 | 漂移方向 | 说明 |
| :--- | :--- | :--- |
| $i < 63.4°$ | $\dot{\omega} > 0$，沿运动方向漂移 | 顺行轨道 |
| $63.4° < i < 116.6°$ | $\dot{\omega} < 0$，沿运动反方向漂移 | 包含极轨道 |
| $i > 116.6°$ | $\dot{\omega} > 0$，沿运动方向漂移 | 逆行轨道 |

### 典型应用：Molniya 轨道

前苏联"闪电卫星"（Molniya）采用冻结轨道设计：

| 参数 | 值 |
| :--- | :--- |
| 轨道周期 | 12 恒星小时 |
| 偏心率 | $e \approx 0.7$ |
| 轨道倾角 | $i = 63.4°$ |
| 近拱点位置 | 南半球上空 |

由于倾角等于临界倾角，近拱点不发生漂移，远拱点能一直停留在北半球高纬度地区上空，提供长时间通信服务。在12小时轨道周期中，处于高纬度地区的时间接近11小时。

### 每日漂移量

近拱点的单日漂移量：

$$\dot{\omega} = 4.9821\left(\frac{R_E}{a}\right)^{7/2}(1-e^2)^{-2}(4 - 5\sin^2 i) \quad (°/\text{天})$$

漂移速率与轨道高度和偏心率有关：半长轴越小、偏心率越接近1，漂移越快。

## 应用价值

冻结轨道是高椭圆轨道设计的重要概念。通过选择临界倾角，可以使轨道拱线保持固定方向，使远拱点（或近拱点）长期停留在特定区域上空。这对高纬度地区通信、特定区域遥感和重力场测量等任务具有重要意义。Molniya轨道是冻结轨道最经典的应用案例。

## 相关概念

- [地球扁率摄动（Earth Oblateness Perturbation）](/glossary/fundamentals/earth-oblateness-perturbation/)
- [太阳同步轨道（Sun-Synchronous Orbit）](/glossary/fundamentals/sun-synchronous-orbit/)
- [近地点幅角（Argument of Perigee）](/glossary/fundamentals/orbital-elements/)
- [拉格朗日型摄动方程（Lagrangian Perturbation Equations）](/glossary/fundamentals/lagrangian-perturbation-equations/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 刘林. 航天器轨道理论[M]. 国防工业出版社.
