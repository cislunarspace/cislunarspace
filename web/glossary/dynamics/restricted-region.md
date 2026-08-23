---
title: 限制区（Restricted Region）
description: 月表直接上升或下降转移轨迹在动力学上无法直接连通的禁入空间与经度分布区域。
keywords: 限制区, Restricted Region, 动力学, 轨道设计, 转移轨迹
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 限制区（Restricted Region）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/dynamics/restricted-region/
---

# 限制区（Restricted Region）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

限制区（Restricted Region）是指在地月多体动力学环境下，受引力势阱拓扑结构、能量守恒（希尔曲面）及轨道初末状态边界约束制约，航天器通过无动力或受限单脉冲机动无法从月球表面特定位置直接上升或直接射入特定地月转移轨道（如返回地球轨道或地月平动点轨道）的月表地理经纬度分布盲区。

## 物理机制与工程价值

在月球起飞与地月转移轨道设计中，航天器的直接上升返回轨迹受到地球月球引力梯度耦合及柯氏力的强非线性扭曲。早在 1961 年，Penzo 通过二体与摄动积分分析发现月表经度 270 度附近存在直接上升转移不可达的限制区。

在更精确的三体动力学与 $n$ 体摄动框架下：

1. 限制区的几何范围和空间拓扑随着任务雅可比常数 $C_j$ 和出发能量水平的变化而发生漂移；
2. 当计入太阳第三体引力摄动及月球轨道偏心率时，限制区的几何边界呈现混沌侵蚀现象，使得原先清晰的禁区边界演变为动力学拓扑分界带；
3. 航天器若需从限制区内起飞，必须采用先入月球停泊环月轨道再施加逃逸脉冲的两步转移方案，或借助复杂弱稳定性边界（WSB）弹道。

该动力学概念对于月球基地选址、极区探测上升起飞窗口规划、月球采样返回着陆器上升弹道设计具有基础性的约束与指导作用。

## 相关概念

- [禁区（Forbidden Region）](/glossary/dynamics/forbidden-region/)
- [容许区（Allowed Region）](/glossary/dynamics/allowed-region/)
- [雅可比积分（Jacobi Integral）](/glossary/dynamics/jacobi-integral/)
- [接近段（Approach Phase）](/glossary/orbits/approach-phase/)

## 参考文献

- Penzo, P. A. Direct Lunar Trajectories with Specified Landing Site and Flight Time. NASA CR-132100, 1961.
- Anderson, R. L., & Parker, J. S. Survey of ballistic transfer opportunities to low lunar orbit. Journal of Guidance, Control, and Dynamics, 2012, 35(4): 1158-1167.
