---
title: 置信上界树算法（Upper Confidence Bound for Trees, UCT）
description: 蒙特卡洛树搜索中平衡探索与利用的选择策略。将树节点选择视为多臂老虎机问题：选择使 Q(s,a) + C·√(ln N(s)/N(s,a)) 最大化的子节点，其中 Q 为动作值估计，N(s) 和 N(s,a) 分别为状态和状态-动作对的访问次数，C 为探索常数（通常取 √2）。
keywords: 置信上界树算法, Upper Confidence Bound for Trees, UCT, UCT, 动力学, 轨道力学, 控制理论, 优化
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 置信上界树算法（Upper Confidence Bound for Trees, UCT）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 置信上界树算法详解 | 术语定义
  description: 蒙特卡洛树搜索中平衡探索与利用的选择策略。将树节点选择视为多臂老虎机问题：选择使 Q(s,a) + C·√(ln N(s)/N(s,a)) 最大化的子节点，其中 Q 为动作值估计，N(s) 和 N(s,a) 分别为状态和状态-动作对的访问次数，C 为探索常数（通常取 √2）。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 置信上界树算法详解 | 术语定义
  description: 蒙特卡洛树搜索中平衡探索与利用的选择策略。将树节点选择视为多臂老虎机问题：选择使 Q(s,a) + C·√(ln N(s)/N(s,a)) 最大化的子节点，其中 Q 为动作值估计，N(s) 和 N(s,a) 分别为状态和状态-动作对的访问次数，C 为探索常数（通常取 √2）。
  image: /logo.png
permalink: /glossary/dynamics/upper-confidence-bound-for-trees-uct/
---

# 置信上界树算法（Upper Confidence Bound for Trees, UCT）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

蒙特卡洛树搜索中平衡探索与利用的选择策略。将树节点选择视为多臂老虎机问题：选择使 Q(s,a) + C·√(ln N(s)/N(s,a)) 最大化的子节点，其中 Q 为动作值估计，N(s) 和 N(s,a) 分别为状态和状态-动作对的访问次数，C 为探索常数（通常取 √2）。

## 应用价值

用于分析地月空间动力学特性，支撑轨道设计和控制方案验证。
该概念在地月空间任务中具有重要的应用价值，值得深入研究。

## 相关概念

- [平动点（Libration Point / Lagrange Point）](/glossary/dynamics/libration-point-lagrange-point/)

## 参考文献

- Klonowski et al., 2023
