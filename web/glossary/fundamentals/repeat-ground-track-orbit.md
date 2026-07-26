---
title: 回归轨道（Repeat Ground Track Orbit）
description: 详细解析回归轨道与准回归轨道的定义、判据及星下点轨迹排列规律
keywords: 回归轨道, Repeat Ground Track Orbit, 准回归轨道, 星下点重复, 轨道设计
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 回归轨道（Repeat Ground Track Orbit）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 回归轨道详解 | 术语定义
  description: 详细解析回归轨道与准回归轨道的定义及判据
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 回归轨道详解 | 术语定义
  description: 详细解析回归轨道与准回归轨道的定义及判据
  image: /logo.png
permalink: /glossary/fundamentals/repeat-ground-track-orbit/
---

# 回归轨道（Repeat Ground Track Orbit）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

回归轨道是卫星星下点轨迹以一定周期重复的轨道。在 $D$ 个恒星日内，卫星运行 $N$ 圈后星下点轨迹开始重复，满足 $24/T = N/D$，其中 $T$ 为轨道周期（恒星时）。若 $D=1$，则在 1 个恒星日内星下点轨迹重复，称为回归轨道；若 $D>1$ 且 $N$、$D$ 互质，则称为准回归轨道。

## 核心要素

### 回归判据

$$\frac{24}{T} = \frac{N}{D}$$

其中 $N$ 和 $D$ 分别为实现星下点轨迹重复所需的最少圈数和恒星日数。

### 回归轨道特性

| 特性 | 说明 |
| :--- | :--- |
| 重复周期 | $D=1$ 恒星日 |
| 每圈间隔 | $L = 360°/N = 15°T$ |
| 圈号排列 | 向西顺序：0-1-2-...-(N-1) |
| 经度跨度 | 每圈西移 $15°T$，等于每圈间隔 |

### 准回归轨道特性

准回归轨道的星下点轨迹不逐日重复，而是间隔 $D$ 恒星日后重复。其圈号不再顺序排列，需通过求解二元一次不定方程确定相邻圈号：

$$D \cdot n_W - N \cdot d_W = 1 \quad (\text{西邻})$$
$$D \cdot n_E - N \cdot d_E = -1 \quad (\text{东邻})$$

### 与太阳同步的结合

当回归/准回归轨道同时满足太阳同步约束 $\dot{\Omega} = \omega_S$ 时，称为太阳同步（准）回归轨道。此时升交日等于平太阳日：

$$T = \frac{D^* \text{ 平太阳日}}{N}$$

## 应用价值

回归轨道使卫星能够周期性地重复观测相同地面区域，对地球资源观测、气象监测、侦察等任务具有重要意义。准回归轨道通过合理设计 $N$ 和 $D$ 的比值，可在覆盖周期和覆盖均匀性之间取得平衡。太阳同步准回归轨道是目前对地观测卫星最常用的轨道类型。

## 相关概念

- [星下点轨迹（Subsatellite Track）](/glossary/fundamentals/subsatellite-track/)
- [太阳同步轨道（Sun-Synchronous Orbit）](/glossary/fundamentals/sun-synchronous-orbit/)
- [覆盖角（Coverage Angle）](/glossary/fundamentals/coverage-angle/)
- [Walker 星座（Walker Constellation）](/glossary/fundamentals/walker-constellation/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
