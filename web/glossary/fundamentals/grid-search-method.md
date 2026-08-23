---
title: 网格搜索法（Grid Search Method）
description: 在高维轨道初始参数空间中进行系统化离散离散采样与正向传播的全局轨迹探索方法。
keywords: 网格搜索法, Grid Search Method, 轨道搜索, 初始参数空间, 轨迹数据库
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 网格搜索法（Grid Search Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/fundamentals/grid-search-method/
---

# 网格搜索法（Grid Search Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

网格搜索法（Grid Search Method）是一种通过在轨道动力学与控制参数空间中建立确定性等间隔或自适应离散网格，遍历评估所有网格节点轨迹响应以获取可行解集或全局最优解初值的确定性全局数值搜索算法。

## 物理机制与工程价值

在地月空间多体引力场中，受三体动力学强非线性与混沌效应影响，传统局部梯度优化算法在初值猜测偏差较大时容易发散或陷入局部极小。网格搜索法通过系统性扫描设计变量全域，构建完整的解空间拓扑图景。

在典型的地月轨道转移与周期轨道生成设计中，算法通常将雅可比能量常数 $C_j$、初始穿越坐标 $y_0$ 以及平面速度入射角 $\theta$ 等关键自变量离散化为高维参数网格。例如设置能量步长 $\Delta C = 0.01$、速度角步长 $\Delta \theta = 0.005^\circ$、位置步长 $\Delta y_0 = 0.01$，生成数十万至数百万个离散初值节点进行并行数值传播。

网格搜索法能全面揭示稳定流形、共振轨道及弹道捕获通道在参数空间中的连通域，为深空探测转移轨迹优化提供无遗漏的全局拓扑结构初值。

## 相关概念

- [蒙特卡洛轨迹射击法（Monte Carlo Trajectory Shooting）](/glossary/dynamics/monte-carlo-trajectory-shooting/)
- [网格划分方法（Grid Division Method）](/glossary/navigation/grid-division-method/)
- [滑动规则（Sliding Rule）](/glossary/dynamics/sliding-rule/)
- [庞加莱截面（Poincare Section）](/glossary/dynamics/poincare-section/)

## 参考文献

- Liang, Y., Qi, R., & Baoyin, H. Global search for low-thrust transfers in the Earth-Moon system. Astrophysics and Space Science, 2016, 361(12): 390.
- Parker, J. S., & Anderson, R. L. Low-Energy Lunar Trajectory Design. John Wiley & Sons, 2014.
