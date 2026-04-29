---
title: 星下点轨迹（Subsatellite Track）
description: 详细解析星下点轨迹的定义、计算方法及影响因素
keywords: 星下点轨迹, Subsatellite Track, 地面轨迹, 轨道设计, 覆盖特性
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 星下点轨迹（Subsatellite Track）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 星下点轨迹详解 | 术语定义
  description: 详细解析星下点轨迹的定义及计算方法
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 星下点轨迹详解 | 术语定义
  description: 详细解析星下点轨迹的定义及计算方法
  image: /logo.png
permalink: /glossary/fundamentals/subsatellite-track/
---

# 星下点轨迹（Subsatellite Track）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

星下点轨迹是卫星在轨运动过程中，其星下点在地球表面形成的轨迹。星下点有两种定义：一是飞行器和地心连线与地球椭球面的交点 $G'$；二是卫星在地球椭球面上的垂直投影点 $G$。将各时刻星下点连接起来，在地球表面形成的连续曲线即为星下点轨迹。

## 核心要素

### 不考虑地球旋转时的星下点轨迹

地球相对于惯性空间静止时，星下点可用赤经 $\alpha$ 和赤纬 $\delta$ 表示：

$$\delta = \arcsin(\sin i \sin u)$$

$$\alpha = \Omega + \alpha'$$

其中 $i$ 为轨道倾角，$u$ 为纬度幅角，$\Omega$ 为升交点赤经。

### 考虑地球旋转时的星下点轨迹

考虑地球旋转后，星下点用地心经纬度 $(\varphi, \lambda)$ 描述：

$$\varphi = \arcsin(\sin i \sin u)$$

$$\lambda = \arctan(\cos i \tan u) + \Omega - \overline{S}(t)$$

其中 $\overline{S}(t)$ 为格林尼治平恒星时。

### 轨道根数对星下点形状的影响

| 轨道根数 | 影响 |
|:---|:---|
| 半长轴 $a$ | 决定轨道周期，影响经度跨度和轨迹稠密度 |
| 偏心率 $e$ | 影响南北对称性，$e$ 越大不对称越严重 |
| 近地点纬度幅角 $\omega$ | 影响南北半球轨迹的平缓/尖锐程度 |
| 轨道倾角 $i$ | 决定星下点轨迹能达到的最大纬度 |
| 升交点赤经 $\Omega$ | 仅影响轨迹沿经度方向的平移 |
| 真近点角 $\nu$ | 仅影响卫星在轨迹上的瞬时位置 |

### 星下点轨迹的"留"

当 $i \neq 0°$ 时，星下点轨迹可能呈 8 字形，存在 $\dot{\lambda} = 0$ 的点，称为"留"。在"留"处卫星将在该地区上空停留。

## 应用价值

星下点轨迹是航天器轨道设计和对地覆盖分析的基础。通过分析星下点轨迹的几何分布特性，可以确定轨道对地面目标的覆盖能力、光照条件和通信可见性，为侦察、通信、导航等航天任务的轨道选择提供依据。

## 相关概念

- [回归轨道（Repeat Ground Track Orbit）](/glossary/fundamentals/repeat-ground-track-orbit/)
- [覆盖角（Coverage Angle）](/glossary/fundamentals/coverage-angle/)
- [轨道倾角（Orbital Inclination）](/glossary/fundamentals/orbital-elements/)
- [太阳同步轨道（Sun-Synchronous Orbit）](/glossary/fundamentals/sun-synchronous-orbit/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
