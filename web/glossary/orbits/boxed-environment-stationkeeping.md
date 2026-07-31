---
title: 箱约束保持法（Boxed Environment Stationkeeping）
description: 一种保证收敛的平动点轨道保持策略。以平动点为中心，在 X 轴和 Y 轴方向上分别设定距离阈值，构成一个「箱」。轨道在箱内自由演化；当轨道越过箱边界时（表明正在沿流形逃逸至月球方向、日地方向或三角平动点），用二分法逐步搜索速度增量使轨道返回。该方法虽然每次修正不一定最小化燃料，但保证能找到可用解，因此通常作为其他策略失效
keywords: 箱约束保持法, Boxed Environment Stationkeeping
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 箱约束保持法（Boxed Environment Stationkeeping）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 箱约束保持法详解 | 术语定义
  description: 一种保证收敛的平动点轨道保持策略。以平动点为中心，在 X 轴和 Y 轴方向上分别设定距离阈值，构成一个「箱」。轨道在箱内自由演化；当轨道越过箱边界时（表明正在沿流形逃逸至月球方向、日地方向或三角平动点），用二分法逐步搜索速度增量使轨道返回。该方法虽然每次修正不一定最小化燃料，但保证能找到可用解，因此通常作为其他策略失效
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 箱约束保持法详解 | 术语定义
  description: 一种保证收敛的平动点轨道保持策略。以平动点为中心，在 X 轴和 Y 轴方向上分别设定距离阈值，构成一个「箱」。轨道在箱内自由演化；当轨道越过箱边界时（表明正在沿流形逃逸至月球方向、日地方向或三角平动点），用二分法逐步搜索速度增量使轨道返回。该方法虽然每次修正不一定最小化燃料，但保证能找到可用解，因此通常作为其他策略失效
  image: /logo.png
permalink: /glossary/orbits/boxed-environment-stationkeeping/
---

# 箱约束保持法（Boxed Environment Stationkeeping）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种保证收敛的平动点轨道保持策略。以平动点为中心，在 X 轴和 Y 轴方向上分别设定距离阈值，构成一个「箱」。轨道在箱内自由演化；当轨道越过箱边界时（表明正在沿流形逃逸至月球方向、日地方向或三角平动点），用二分法逐步搜索速度增量使轨道返回。该方法虽然每次修正不一定最小化燃料，但保证能找到可用解，因此通常作为其他策略失效时的兜底方案。

## 应用价值

在轨道设计与任务规划中，需要选择合适的轨道类型并分析其动力学特性。该概念对于转移轨道设计、轨道插入和轨道保持具有重要指导意义。

## 相关概念

- [共振比（Synodic Resonance Ratio）](/glossary/orbits/synodic-resonance-ratio/)
- [外俘获型低能转移轨道（Exterior Capture Low-Energy Transfer Orbit）](/glossary/orbits/exterior-capture-low-energy-transfer-orbit/)
- [入轨代价（Orbit Insertion Cost）](/glossary/orbits/orbit-insertion-cost/)

## 参考文献

- Folta et al. 2010
