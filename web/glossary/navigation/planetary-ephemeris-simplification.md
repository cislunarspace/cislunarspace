---
title: 行星历表简化（Planetary Ephemeris Simplification）
description: 面向星载自主定轨的历表轻量化方法。核心思路：（1）剔除对轨道精度影响可忽略的天体，只保留月球、太阳、金星、木星、土星五体；（2）用 Hermite 插值替换 DE 历表的 Chebyshev 多项式拟合，降低参数量。实测表明，以 6 天定轨弧长计，月球插值间隔 1 天、太阳间隔 5 天时，精度损失在米级，存储量减少约 
keywords: 行星历表简化, Planetary Ephemeris Simplification, 导航, 定轨, 定位
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 行星历表简化（Planetary Ephemeris Simplification）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 行星历表简化详解 | 术语定义
  description: 面向星载自主定轨的历表轻量化方法。核心思路：（1）剔除对轨道精度影响可忽略的天体，只保留月球、太阳、金星、木星、土星五体；（2）用 Hermite 插值替换 DE 历表的 Chebyshev 多项式拟合，降低参数量。实测表明，以 6 天定轨弧长计，月球插值间隔 1 天、太阳间隔 5 天时，精度损失在米级，存储量减少约 
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 行星历表简化详解 | 术语定义
  description: 面向星载自主定轨的历表轻量化方法。核心思路：（1）剔除对轨道精度影响可忽略的天体，只保留月球、太阳、金星、木星、土星五体；（2）用 Hermite 插值替换 DE 历表的 Chebyshev 多项式拟合，降低参数量。实测表明，以 6 天定轨弧长计，月球插值间隔 1 天、太阳间隔 5 天时，精度损失在米级，存储量减少约 
  image: /logo.png
permalink: /glossary/navigation/planetary-ephemeris-simplification/
---

# 行星历表简化（Planetary Ephemeris Simplification）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

面向星载自主定轨的历表轻量化方法。核心思路：（1）剔除对轨道精度影响可忽略的天体，只保留月球、太阳、金星、木星、土星五体；（2）用 Hermite 插值替换 DE 历表的 Chebyshev 多项式拟合，降低参数量。实测表明，以 6 天定轨弧长计，月球插值间隔 1 天、太阳间隔 5 天时，精度损失在米级，存储量减少约 60%。

## 应用价值

行星历表简化是地月空间导航与定轨技术的关键环节。在实际任务中，利用该方法可以实现航天器的自主定位、轨道确定和时间同步，减少对地面测控系统的依赖，提高导航精度和自主性。

## 相关概念

- [北斗系统时（Beidou System Time, BDST）](/glossary/navigation/beidou-system-time-bdst/)
- [双天线设计（Dual-antenna design）](/glossary/navigation/dual-antenna-design/)
- [几何法定轨（Geometric Orbit Determination）](/glossary/navigation/geometric-orbit-determination/)
- [信标导航信号（Beacon）](/glossary/navigation/beacon/)

## 参考文献

- Lv et al., 2025
