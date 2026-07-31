---
title: 串行优化方法（Serial Optimization Method）
description: 一种轨道优化设计策略，将全局搜索与局部精化分步串联执行。第一步「全局遍历初值搜索」遍历目标流形上所有候选点，对每个点以单变量寻优求速度冲量，得到全局次优解；第二步「局部梯度优化」以次优解为初值，在其邻域内以三变量同时寻优，得到全局最优解。两步串行既避免了纯梯度法易陷入局部最优的缺陷，又控制了全局搜索的计算量。
keywords: 串行优化方法, Serial Optimization Method, 动力学, 最优控制, 轨迹优化
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 串行优化方法（Serial Optimization Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 串行优化方法详解 | 术语定义
  description: 一种轨道优化设计策略，将全局搜索与局部精化分步串联执行。第一步「全局遍历初值搜索」遍历目标流形上所有候选点，对每个点以单变量寻优求速度冲量，得到全局次优解；第二步「局部梯度优化」以次优解为初值，在其邻域内以三变量同时寻优，得到全局最优解。两步串行既避免了纯梯度法易陷入局部最优的缺陷，又控制了全局搜索的计算量。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 串行优化方法详解 | 术语定义
  description: 一种轨道优化设计策略，将全局搜索与局部精化分步串联执行。第一步「全局遍历初值搜索」遍历目标流形上所有候选点，对每个点以单变量寻优求速度冲量，得到全局次优解；第二步「局部梯度优化」以次优解为初值，在其邻域内以三变量同时寻优，得到全局最优解。两步串行既避免了纯梯度法易陷入局部最优的缺陷，又控制了全局搜索的计算量。
  image: /logo.png
permalink: /glossary/dynamics/serial-optimization-method/
---

# 串行优化方法（Serial Optimization Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种轨道优化设计策略，将全局搜索与局部精化分步串联执行。第一步「全局遍历初值搜索」遍历目标流形上所有候选点，对每个点以单变量寻优求速度冲量，得到全局次优解；第二步「局部梯度优化」以次优解为初值，在其邻域内以三变量同时寻优，得到全局最优解。两步串行既避免了纯梯度法易陷入局部最优的缺陷，又控制了全局搜索的计算量。

## 应用价值

基于该术语的定义，一种轨道优化设计策略，将全局搜索与局部精化分步串联执行。第一步「全局遍历初值搜索」遍历目标流形上所有。

## 相关概念

- [三体问题（Three-Body Problem）](/glossary/dynamics/three-body-problem/)
- [最优控制（Optimal Control）](/glossary/dynamics/optimal-control/)
- [轨迹优化（Trajectory Optimization）](/glossary/dynamics/trajectory-optimization/)

## 参考文献

- 曹鹏飞 等 - 2017 - 地月L2点Halo轨道支持的登月轨道优化设计
