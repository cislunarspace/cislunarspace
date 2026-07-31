---
title: 混编架构（Hybrid MO-MCTS/NSGA-II）
description: 论文采用的混合多目标优化算法。先用MO-MCTS在约400次迭代内快速生成帕累托前沿的初始估计，再以其结果作为NSGA-II的初始种群继续进化优化。混合方法结合了MO-MCTS的深度搜索能力和NSGA-II的全局探索能力，克服了各自单独使用时HVI早熟 plateau 或陷入非最优区域的缺陷。
keywords: 混编架构, Hybrid MO-MCTS/NSGA-II, , 动力学, 非线性, 稳定性, 流形, 控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 混编架构（Hybrid MO-MCTS/NSGA-II）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 混编架构（Hybrid MO-MCTS/NSGA-II）详解 | 术语定义
  description: 论文采用的混合多目标优化算法。先用MO-MCTS在约400次迭代内快速生成帕累托前沿的初始估计，再以其结果作为NSGA-II的初始种群继续进化优化。混合方法结合了MO-MCTS的深度搜索能力和NSGA-II的全局探索能力，克服了各自单独使用时HVI早熟 plateau 或陷入非最优区域的缺陷。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 混编架构（Hybrid MO-MCTS/NSGA-II）详解 | 术语定义
  description: 论文采用的混合多目标优化算法。先用MO-MCTS在约400次迭代内快速生成帕累托前沿的初始估计，再以其结果作为NSGA-II的初始种群继续进化优化。混合方法结合了MO-MCTS的深度搜索能力和NSGA-II的全局探索能力，克服了各自单独使用时HVI早熟 plateau 或陷入非最优区域的缺陷。
  image: /logo.png
permalink: /glossary/dynamics/hybrid-mo-mcts-nsga-ii/
---

# 混编架构（Hybrid MO-MCTS/NSGA-II）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

论文采用的混合多目标优化算法。先用MO-MCTS在约400次迭代内快速生成帕累托前沿的初始估计，再以其结果作为NSGA-II的初始种群继续进化优化。混合方法结合了MO-MCTS的深度搜索能力和NSGA-II的全局探索能力，克服了各自单独使用时HVI早熟 plateau 或陷入非最优区域的缺陷。

## 应用价值

在实际的地月空间任务中，该方法可用于提升航天器的自主导航与姿态控制能力。通过实时处理传感器数据并估计系统状态，航天器能够在缺乏地面测控支持的条件下维持正常工作。这一技术在深空探测和交会对接等复杂任务场景中尤为重要，能够增强系统的鲁棒性和适应性。

## 相关概念

- [椭圆限制性三体问题（Elliptic Restricted Three-Body Problem）](/glossary/dynamics/elliptic-restricted-three-body-problem/)
- [动力一致性（Dynamical Consistency）](/glossary/dynamics/dynamical-consistency/)
- [组合协方差（Combined Covariance）](/glossary/dynamics/combined-covariance/)
- [尼霍罗舍夫估计（Nekhorosev Estimates）](/glossary/dynamics/nekhorosev-estimates/)

## 参考文献

- Klonowski 等 - 2024 - Cislunar space domain awareness architecture design and analysis for cooperative agents
