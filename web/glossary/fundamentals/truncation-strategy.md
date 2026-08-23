---
title: 截断策略（Truncation Strategy）
description: 在小推力交会轨道数据库离散延拓中依据发动机开关状态和代价增量平台期提前终止无效搜索的剪枝准则。
keywords: 截断策略, Truncation Strategy, 小推力交会, 轨道数据库, 启发式剪枝
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 截断策略（Truncation Strategy）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/fundamentals/truncation-strategy/
---

# 截断策略（Truncation Strategy）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

截断策略（Truncation Strategy）是指在构建空间多目标小推力交会、在轨服务与多脉冲转移大规模轨迹数据库时，通过实时监测推进系统末端工作状态、发动机点火占空比及燃料消耗梯度的边际收益，动态判断轨迹是否进入性能代价平台期，从而及时中断该支路数值延拓的智能剪枝准则。

## 物理机制与工程价值

在多目标小推力交会任务规划（如地月平动点多目标碎片清除或星座部署巡游）中，构建离散轨迹数据库通常采用打靶法或配点法沿时间轴与初末相位逐步延拓。然而，随着飞行时间或转移圈数的过度增加，燃料节省的边际收益迅速递减并进入代价平缓区，且多圈小推力开关函数易引发非凸鞍点发散。

截断策略建立了定量判定机制：
1. **状态与占空比阈值**：当小推力发动机在特定延拓窗口内持续关机或推力切换频率超过物理极限时，触发截断逻辑；
2. **代价平台识别**：当目标代价函数增量连续多次低于预设精度阈值 $\epsilon$ 时，立即停止无效的分支打靶；
3. **大幅压缩算力开销**：在严格保留全局帕累托前沿和最优解特性的前提下，将轨迹数据库的数据体量缩减至原规模的 40% 左右，同时减少 60% 以上的离线轨迹生成计算耗时。

该策略极大提升了地月多目标小推力任务快速重规划与星上自主实时规划的实用性。

## 相关概念

- [映射伴随控制变换（MACT）](/glossary/fundamentals/mact/)
- [轨道交会（Orbital Rendezvous）](/glossary/navigation/orbital-rendezvous/)
- [双脉冲交会（Two-Impulse Rendezvous）](/glossary/dynamics/two-impulse-rendezvous/)
- [网格搜索方法（Grid Search Method）](/glossary/fundamentals/grid-search-method/)

## 参考文献

- 蒋方华, 宝音贺西, 李明涛. 地月平动点小推力多目标交会任务设计与分析. 宇航学报, 2025, 46(1): 45-56.
- Betts, J. T. Practical Methods for Optimal Control and Estimation Using Nonlinear Programming. SIAM, 2010.
