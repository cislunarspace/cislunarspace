---
title: 终端滑行（Terminal coast）
description: 初始滑行或末段滑行。初始滑行指首脉冲推迟施加，航天器沿初始轨道滑行；末段滑行指末脉冲提前施加后沿终轨滑行至名义终端时刻。是否加入终端滑行取决于脉冲时刻引燃矢量斜率的符号：ṗ_o>0则加初始滑行可降燃耗，ṗ_f<0则加末段滑行可降燃耗。
keywords: 终端滑行, Terminal coast, 轨道力学, 数值方法, 优化算法
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 终端滑行（Terminal coast）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 终端滑行详解 | 术语定义
  description: 初始滑行或末段滑行。初始滑行指首脉冲推迟施加，航天器沿初始轨道滑行；末段滑行指末脉冲提前施加后沿终轨滑行至名义终端时刻。是否加入终端滑行取决于脉冲时刻引燃矢量斜率的符号：ṗ_o>0则加初始滑行可降燃耗，ṗ_f<0则加末段滑行可降燃耗。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 终端滑行详解 | 术语定义
  description: 初始滑行或末段滑行。初始滑行指首脉冲推迟施加，航天器沿初始轨道滑行；末段滑行指末脉冲提前施加后沿终轨滑行至名义终端时刻。是否加入终端滑行取决于脉冲时刻引燃矢量斜率的符号：ṗ_o>0则加初始滑行可降燃耗，ṗ_f<0则加末段滑行可降燃耗。
  image: /logo.png
permalink: /glossary/fundamentals/terminal-coast/
---

# 终端滑行（Terminal coast）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

初始滑行或末段滑行。初始滑行指首脉冲推迟施加，航天器沿初始轨道滑行；末段滑行指末脉冲提前施加后沿终轨滑行至名义终端时刻。是否加入终端滑行取决于脉冲时刻引燃矢量斜率的符号：ṗ_o>0则加初始滑行可降燃耗，ṗ_f<0则加末段滑行可降燃耗。

## 应用价值

在轨道设计和转移轨道优化中，该方法用于确定最优转移时机和轨道形状，以最小化燃料消耗或飞行时间。通过数值仿真和迭代优化，可获得满足任务约束的可行轨道方案。

## 相关概念

- [同步旋转坐标系（Synodic Rotating Frame）](/glossary/fundamentals/synodic-rotating-frame/)
- [网格搜索（Grid Search）](/glossary/fundamentals/grid-search/)
- [Gauss求积公式（Gauss Quadrature Formula）](/glossary/fundamentals/gauss-quadrature-formula/)
- [星座构型向量（Constellation Pattern Vector）](/glossary/fundamentals/constellation-pattern-vector/)
## 参考文献

- Prussing - 2010 - Primer vector theory and applications
