---
title: 邻接矩阵法保持点优化（Adjacency Matrix-based Hold Point Optimization）
description: 用62×62邻接矩阵表示所有保持点候选位置之间的转移代价，通过Dijkstra算法在图中搜索最优保持点序列。代价函数包含漂移代价、随机方向碰撞角代价和ΔV代价三个部分。
keywords: 邻接矩阵法保持点优化, Adjacency Matrix-based Hold Point Optimization, 导航, 轨道确定, 测距
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 邻接矩阵法保持点优化（Adjacency Matrix-based Hold Point Optimization）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 邻接矩阵法保持点优化详解 | 术语定义
  description: 用62×62邻接矩阵表示所有保持点候选位置之间的转移代价，通过Dijkstra算法在图中搜索最优保持点序列。代价函数包含漂移代价、随机方向碰撞角代价和ΔV代价三个部分。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 邻接矩阵法保持点优化详解 | 术语定义
  description: 用62×62邻接矩阵表示所有保持点候选位置之间的转移代价，通过Dijkstra算法在图中搜索最优保持点序列。代价函数包含漂移代价、随机方向碰撞角代价和ΔV代价三个部分。
  image: /logo.png
permalink: /glossary/navigation/adjacency-matrix-based-hold-point-optimization/
---

# 邻接矩阵法保持点优化（Adjacency Matrix-based Hold Point Optimization）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：Innocenti et al., 2022
>
> 站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

用62×62邻接矩阵表示所有保持点候选位置之间的转移代价，通过Dijkstra算法在图中搜索最优保持点序列。代价函数包含漂移代价、随机方向碰撞角代价和ΔV代价三个部分。

## 应用价值

该术语在地月空间任务中具有重要应用价值。在轨道设计阶段，工程师利用相关理论进行轨迹优化；在导航与轨道确定中，用于提升测量精度；在姿态控制与轨道保持任务中，确保航天器稳定运行。具体应用中，可结合任务需求进行参数优化和算法适配，提高任务成功率和资源利用效率。

## 相关概念

- [特征指数（Characteristic Exponents）](/glossary/dynamics/characteristic-exponents/)
- [捕获对接段（Capture Docking Phase）](/glossary/navigation/capture-docking-phase/)
- [月球借力转移（Lunar Flyby Transfer）](/glossary/orbits/lunar-flyby-transfer/)

## 参考文献

- Innocenti et al., 2022
