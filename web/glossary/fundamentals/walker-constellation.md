---
title: Walker 星座（Walker Constellation）
description: 详细解析 Walker 星座的构形分类、参数描述及设计方法
keywords: Walker 星座, Walker Constellation, δ星座, σ星座, 玫瑰星座, 卫星星座
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Walker 星座（Walker Constellation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: Walker 星座详解 | 术语定义
  description: 详细解析 Walker 星座的构形分类及参数描述
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Walker 星座详解 | 术语定义
  description: 详细解析 Walker 星座的构形分类及参数描述
  image: /logo.png
permalink: /glossary/fundamentals/walker-constellation/
---

# Walker 星座（Walker Constellation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

Walker 星座是由英国学者 J. G. Walker 提出的一类均匀对称卫星星座构形。其特点是：所有卫星采用高度相同、倾角相同的圆轨道；轨道平面沿赤道均匀分布；卫星在轨道面内均匀分布；不同轨道面之间卫星的相位保持一定关系。Walker 星座包括 $\delta$ 星座、$\sigma$ 星座和玫瑰星座等类型。

## 核心要素

### $\delta$ 星座

$\delta$ 星座是应用最广泛的 Walker 星座，描述符号为 $i:T/P/F$，其中：

| 参数 | 含义 |
| :--- | :--- |
| $i$ | 轨道倾角 |
| $T$ | 卫星总数 |
| $P$ | 轨道平面数 |
| $F$ | 相位参数（$0 \leq F \leq P-1$） |

每个轨道面内卫星数 $S = T/P$，基本单位 $PU = 2\pi/T$。

### $\sigma$ 星座

$\sigma$ 星座是 $\delta$ 星座的特殊子集，其所有卫星的地面轨迹重合且不自相交，形成一条封闭的类正弦曲线。需满足 $N - D = 1$（$N$ 为圈数，$D$ 为天数）。

### 玫瑰星座

玫瑰星座是 $\delta$ 星座中 $P = T$ 的特殊情况，即每个轨道平面内只有一颗卫星。第 $j$ 颗卫星的位置：

$$\Omega_j = j \cdot 2\pi/T, \quad u_j = m\Omega_j + nt$$

其中 $m$ 取不同整数时产生不同的玫瑰星座。

### 星座对地覆盖

卫星环覆盖带宽度由覆盖角 $d$ 和卫星数 $k$ 决定：

$$\cos d_r = \frac{\cos d}{\cos(180°/k)}$$

多个卫星环组成星座可消除盲区，实现全球覆盖。

## 应用价值

Walker 星座是全球和纬度带覆盖最有效的星座构形，大多在轨星座均采用该构形。GPS、Galileo、北斗等导航星座，以及 Iridium、GlobalStar 等通信星座都采用了 Walker 星座或其变体。通过合理选择 $T$、$P$、$F$ 参数，可以在卫星数量和覆盖性能之间取得最优平衡。

## 相关概念

- [卫星环（Satellite Ring）](/glossary/fundamentals/satellite-ring/)
- [覆盖角（Coverage Angle）](/glossary/fundamentals/coverage-angle/)
- [回归轨道（Repeat Ground Track Orbit）](/glossary/fundamentals/repeat-ground-track-orbit/)
- [太阳同步轨道（Sun-Synchronous Orbit）](/glossary/fundamentals/sun-synchronous-orbit/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
