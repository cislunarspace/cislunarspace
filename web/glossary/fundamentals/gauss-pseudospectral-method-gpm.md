---
title: Gauss伪谱法（Gauss Pseudospectral Method, GPM）
description: 一类直接法最优控制求解方法。用Legendre-Gauss配点将连续最优控制问题离散为非线性规划（NLP）问题。动力学约束只涉及当前节点状态，参数规模小；配点处的KKT条件等价于极大值原理的一阶最优性条件，精度高；具有伪谱法共有的指数收敛特性。在平动点轨道转移设计中，配合形状法提供的初值，可将迭代次数降低55%以上。
keywords: Gauss伪谱法, Gauss Pseudospectral Method, GPM, GPM, 轨道力学, 数值方法
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Gauss伪谱法（Gauss Pseudospectral Method, GPM）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: Gauss伪谱法详解 | 术语定义
  description: 一类直接法最优控制求解方法。用Legendre-Gauss配点将连续最优控制问题离散为非线性规划（NLP）问题。动力学约束只涉及当前节点状态，参数规模小；配点处的KKT条件等价于极大值原理的一阶最优性条件，精度高；具有伪谱法共有的指数收敛特性。在平动点轨道转移设计中，配合形状法提供的初值，可将迭代次数降低55%以上。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Gauss伪谱法详解 | 术语定义
  description: 一类直接法最优控制求解方法。用Legendre-Gauss配点将连续最优控制问题离散为非线性规划（NLP）问题。动力学约束只涉及当前节点状态，参数规模小；配点处的KKT条件等价于极大值原理的一阶最优性条件，精度高；具有伪谱法共有的指数收敛特性。在平动点轨道转移设计中，配合形状法提供的初值，可将迭代次数降低55%以上。
  image: /logo.png
permalink: /glossary/fundamentals/gauss-pseudospectral-method-gpm/
---

# Gauss伪谱法（Gauss Pseudospectral Method, GPM）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一类直接法最优控制求解方法。用Legendre-Gauss配点将连续最优控制问题离散为非线性规划（NLP）问题。动力学约束只涉及当前节点状态，参数规模小；配点处的KKT条件等价于极大值原理的一阶最优性条件，精度高；具有伪谱法共有的指数收敛特性。在平动点轨道转移设计中，配合形状法提供的初值，可将迭代次数降低55%以上。

## 应用价值

在轨道设计和转移轨道优化中，该方法用于确定最优转移时机和轨道形状，以最小化燃料消耗或飞行时间。通过数值仿真和迭代优化，可获得满足任务约束的可行轨道方案。

## 相关概念

- [同步旋转坐标系（Synodic Rotating Frame）](/glossary/fundamentals/synodic-rotating-frame/)
- [网格搜索（Grid Search）](/glossary/fundamentals/grid-search/)
- [Gauss求积公式（Gauss Quadrature Formula）](/glossary/fundamentals/gauss-quadrature-formula/)
- [星座构型向量（Constellation Pattern Vector）](/glossary/fundamentals/constellation-pattern-vector/)
## 参考文献

- 平动点周期轨道间小推力转移的Gauss伪谱法
