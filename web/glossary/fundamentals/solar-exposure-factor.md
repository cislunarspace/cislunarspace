---
title: 受晒因子（Solar Exposure Factor）
description: 详细解析受晒因子的定义、计算方法及与轨道参数的关系
keywords: 受晒因子, Solar Exposure Factor, 星蚀, 太阳能帆板, 轨道设计
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 受晒因子（Solar Exposure Factor）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 受晒因子详解 | 术语定义
  description: 详细解析受晒因子的定义及计算方法
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 受晒因子详解 | 术语定义
  description: 详细解析受晒因子的定义及计算方法
  image: /logo.png
permalink: /glossary/fundamentals/solar-exposure-factor/
---

# 受晒因子（Solar Exposure Factor）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

受晒因子 $K_S$ 是卫星在一个轨道周期内受阳光照射的时间 $T_S$ 与轨道周期 $T_0$ 的比值，描述卫星受阳光照射的情况。与受晒因子互补的量为星蚀率 $R_S = 1 - K_S$，描述卫星处于地球阴影中的比例。

## 核心要素

### 基本定义

$$K_S = \frac{T_S}{T_0} \leq 1$$

| 状态 | $K_S$ | $R_S$ |
| :--- | :--- | :--- |
| 全轨道受晒 | 1 | 0 |
| 全轨道星蚀（理论上不存在） | 0 | 1 |
| 一般情况 | $0 < K_S < 1$ | $0 < R_S < 1$ |

### 阳光与轨道面夹角

$$\cos\gamma = \hat{h} \cdot \hat{r}_S$$

其中 $\hat{h}$ 为轨道面法向单位矢量，$\hat{r}_S$ 为太阳方向单位矢量。

### 特殊情况下的受晒因子

| 夹角 $\gamma$ | 受晒因子 $K_S$ | 说明 |
| :--- | :--- | :--- |
| $0°$ 或 $180°$ | 1 | 阳光直射轨道面，全轨道受晒 |
| $90°$ | $\frac{1}{2} + \frac{\alpha}{180°}$ | 阳光在轨道面内 |

其中 $\alpha = \arcsin\frac{\sqrt{2a_Eh + h^2}}{a_E + h}$。

### 一般情况下的受晒因子

当 $\gamma \leq \alpha$ 或 $\gamma \geq 180° - \alpha$ 时，$K_S = 1$（全轨道受晒）。否则：

$$K_S = \frac{1}{2} + \frac{1}{180°}\arcsin\frac{\sin\alpha}{\sin\gamma}$$

受晒因子与轨道的 $i$、$\Omega$、$h$ 以及太阳黄经 $\lambda_S$ 和黄赤交角 $\varepsilon_S$ 有关。

### 帆板效率

$$C = K_S \cos\zeta$$

其中 $\zeta$ 为太阳能帆板法向与阳光方向的夹角。

## 应用价值

受晒因子直接影响星上太阳能电池的供电能力和卫星温控系统设计。在轨道设计中，需要确保卫星具有足够的受晒时间以维持电源系统正常工作。对于需要长时间星蚀的轨道（如低轨卫星的地影段），需配备蓄电池以维持星蚀期间的供电。

## 相关概念

- [覆盖角（Coverage Angle）](/glossary/fundamentals/coverage-angle/)
- [星下点轨迹（Subsatellite Track）](/glossary/fundamentals/subsatellite-track/)
- [太阳同步轨道（Sun-Synchronous Orbit）](/glossary/fundamentals/sun-synchronous-orbit/)
- [发射窗口（Launch Window）](/glossary/fundamentals/launch-window/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
