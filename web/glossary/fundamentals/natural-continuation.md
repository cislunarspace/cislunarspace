---
title: 自然延拓（Natural Continuation）
description: 沿轨道族连续追踪的一类数值方法。取族中一条已知轨道的初始条件，沿某个参数（如远月点横坐标x0）做微小增量变化，以当前解为初值迭代求解下一个轨道，逐步扫出整个轨道族。该方法比从零搜索高效得多，是Halo轨道族计算的标准手段。
keywords: 自然延拓, Natural Continuation, 轨道力学, 数值方法, 优化算法
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 自然延拓（Natural Continuation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 自然延拓详解 | 术语定义
  description: 沿轨道族连续追踪的一类数值方法。取族中一条已知轨道的初始条件，沿某个参数（如远月点横坐标x0）做微小增量变化，以当前解为初值迭代求解下一个轨道，逐步扫出整个轨道族。该方法比从零搜索高效得多，是Halo轨道族计算的标准手段。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 自然延拓详解 | 术语定义
  description: 沿轨道族连续追踪的一类数值方法。取族中一条已知轨道的初始条件，沿某个参数（如远月点横坐标x0）做微小增量变化，以当前解为初值迭代求解下一个轨道，逐步扫出整个轨道族。该方法比从零搜索高效得多，是Halo轨道族计算的标准手段。
  image: /logo.png
permalink: /glossary/fundamentals/natural-continuation/
---

# 自然延拓（Natural Continuation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

沿轨道族连续追踪的一类数值方法。取族中一条已知轨道的初始条件，沿某个参数（如远月点横坐标x0）做微小增量变化，以当前解为初值迭代求解下一个轨道，逐步扫出整个轨道族。该方法比从零搜索高效得多，是Halo轨道族计算的标准手段。

## 应用价值

在轨道设计和转移轨道优化中，该方法用于确定最优转移时机和轨道形状，以最小化燃料消耗或飞行时间。通过数值仿真和迭代优化，可获得满足任务约束的可行轨道方案。

## 相关概念

- [同步旋转坐标系（Synodic Rotating Frame）](/glossary/fundamentals/synodic-rotating-frame/)
- [网格搜索（Grid Search）](/glossary/fundamentals/grid-search/)
- [Gauss求积公式（Gauss Quadrature Formula）](/glossary/fundamentals/gauss-quadrature-formula/)
- [星座构型向量（Constellation Pattern Vector）](/glossary/fundamentals/constellation-pattern-vector/)
## 参考文献

- Conti and Circi, 2025, Design of halo orbit constellation for lunar global positioning and communication services
