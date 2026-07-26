---
title: 覆盖角（Coverage Angle）
description: 详细解析卫星对地覆盖角的定义、计算方法及覆盖带宽度分析
keywords: 覆盖角, Coverage Angle, 覆盖带, 对地覆盖, 最小观测角
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 覆盖角（Coverage Angle）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 覆盖角详解 | 术语定义
  description: 详细解析卫星对地覆盖角的定义及计算方法
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 覆盖角详解 | 术语定义
  description: 详细解析卫星对地覆盖角的定义及计算方法
  image: /logo.png
permalink: /glossary/fundamentals/coverage-angle/
---

# 覆盖角（Coverage Angle）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

覆盖角 $d$ 是卫星对地覆盖能力的度量参数，定义为卫星与地球切线所对应的地心角。覆盖角决定了卫星在某一时刻可观测的地面区域范围，覆盖角以内的区域称为覆盖区，以外的区域称为覆盖盲区。

## 核心要素

### 基本公式

设卫星瞬时高度为 $h$，覆盖角满足：

$$d = \arccos\left(\frac{a_E}{a_E + h}\right)$$

其中 $a_E$ 为地球半径。

### 覆盖带参数

| 参数 | 公式 | 说明 |
| :--- | :--- | :--- |
| 半视场角 | $\alpha = 90° - d$ | 卫星视线与地平的夹角 |
| 覆盖带宽 | $S_w = 2a_E d$ | 地面覆盖带宽度 |
| 覆盖面积 | $A = 2\pi a_E^2(1 - \cos d)$ | 球冠面积 |
| 面积覆盖率 | $A_r = \sin^2(d/2) \times 100\%$ | 覆盖面积占全球比例 |

### 最小观测角约束

考虑最小观测角 $\sigma$ 后，覆盖角减小为：

$$d_\sigma = \arccos\left(\frac{a_E \cos\sigma}{a_E + h}\right) - \sigma$$

例如，静止轨道卫星（$h=35787$ km）：无约束时 $d=81.31°$，考虑 $\sigma=5°$ 时 $d_\sigma=76.35°$。

### 最小覆盖带宽度

圆轨道卫星的最小覆盖带宽度：

$$\Delta\lambda_d = \arctan\left(\frac{\tan d}{\sin i}\right)$$

当相邻圈覆盖带在赤道上相互衔接时，卫星可实现赤道上的全球覆盖。

## 应用价值

覆盖角是卫星对地覆盖性能分析的核心参数。通过覆盖角可以计算覆盖面积、覆盖带宽度和覆盖重数，为星座设计和轨道选择提供定量依据。赤道上空三颗等间隔静止轨道卫星可实现除极地外的全球通信，正是基于覆盖角分析的结论。

## 相关概念

- [星下点轨迹（Subsatellite Track）](/glossary/fundamentals/subsatellite-track/)
- [卫星环（Satellite Ring）](/glossary/fundamentals/satellite-ring/)
- [Walker 星座（Walker Constellation）](/glossary/fundamentals/walker-constellation/)
- [受晒因子（Solar Exposure Factor）](/glossary/fundamentals/solar-exposure-factor/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
