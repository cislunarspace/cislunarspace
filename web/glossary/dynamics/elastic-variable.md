---
title: 弹性变量（Elastic Variable）
description: 在序列二次规划（SQP）算法中，为处理约束违反而引入的辅助松弛变量。当约束难以严格满足时，弹性变量允许约束有一定违反，算法通过在目标函数中加入惩罚项来平衡约束违反程度与原始目标。SNOPT算法中使用弹性变量技术处理大规模约束优化问题。
keywords: 弹性变量, Elastic Variable, 动力学, 轨道力学, 控制理论, 优化
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 弹性变量（Elastic Variable）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 弹性变量详解 | 术语定义
  description: 在序列二次规划（SQP）算法中，为处理约束违反而引入的辅助松弛变量。当约束难以严格满足时，弹性变量允许约束有一定违反，算法通过在目标函数中加入惩罚项来平衡约束违反程度与原始目标。SNOPT算法中使用弹性变量技术处理大规模约束优化问题。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 弹性变量详解 | 术语定义
  description: 在序列二次规划（SQP）算法中，为处理约束违反而引入的辅助松弛变量。当约束难以严格满足时，弹性变量允许约束有一定违反，算法通过在目标函数中加入惩罚项来平衡约束违反程度与原始目标。SNOPT算法中使用弹性变量技术处理大规模约束优化问题。
  image: /logo.png
permalink: /glossary/dynamics/elastic-variable/
---

# 弹性变量（Elastic Variable）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在序列二次规划（SQP）算法中，为处理约束违反而引入的辅助松弛变量。当约束难以严格满足时，弹性变量允许约束有一定违反，算法通过在目标函数中加入惩罚项来平衡约束违反程度与原始目标。SNOPT算法中使用弹性变量技术处理大规模约束优化问题。

## 应用价值

在轨迹优化问题中，用于寻找燃料消耗最少或时间最短的最优飞行方案。
该概念在地月空间任务中具有重要的应用价值，值得深入研究。

## 相关概念

- [平动点（Libration Point / Lagrange Point）](/glossary/dynamics/libration-point-lagrange-point/)

## 参考文献

- Betts and Erb, 2003, Optimal low thrust trajectories to the moon
