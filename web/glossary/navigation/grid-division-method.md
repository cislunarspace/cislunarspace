---
title: 网格划分法（Grid Division Method）
description: 在地月旋转坐标系下将连续的三维地月空间及月球轨道走廊系统离散化为评估点集以量化星座覆盖与导航几何精度的数值评估方法。
keywords: 网格划分法, Grid Division Method, 星座覆盖, 导航评估, 几何精度因子
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 网格划分法（Grid Division Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/navigation/grid-division-method/
---

# 网格划分法（Grid Division Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

网格划分法（Grid Division Method）是一种面向地月空间导航、通信与态势感知星座架构综合性能评估的离散化分析方法。该方法在地月质心旋转坐标系或月心惯性坐标系中，将广袤连续的地月三维服务空间、月表地形区域及航天器频繁通行的转移轨道带状通道，系统划分为具有特定拓扑间距的有限三维离散评估网格点集。

## 物理机制与工程价值

地月空间尺度横跨数十万公里，天体引力环境与航天器轨道构型极其复杂多样，直接对全连续空间进行解析覆盖度积分在数学上不可行。网格划分法建立了精确的数值量化基准：

1. **分级变密度网格构建**：以地月质心连线和地月平均轨道距离为基准半径构建宏观球形或柱坐标网格；在月球本体表面、极区永久阴影坑区及环月关键轨道带（如低月轨 LLO、近直线晕轨道 NRHO 走廊）实施高密度网格加密，兼顾计算效率与关键区域精度；
2. **多指标并行遍历评估**：将各时间步长下星座卫星对所有离散网格点的可见重数、单重/四重连续覆盖时延、几何精度因子（GDOP、PDOP）以及星间测距链路连通度进行高并发张量映射与统计累加；
3. **驱动星座构型优化**：通过生成空间覆盖性能三维热力图与覆盖盲区拓扑图，为地月空间混合导航通信星座（如 DRO+Halo+倾斜环月轨道组合星座）的构型参数寻优与星载载荷波束指向规划提供直接判定依据。

该方法是地月空间大型天基信息网络论证、覆盖效能评估与通信导航链路仿真设计的标准化基础工具。

## 相关概念

- [地月质心旋转坐标系（Earth-Moon Barycenter Rotating Frame）](/glossary/navigation/earth-moon-barycenter-rotating-frame/)
- [地月空间卫星导航系统（Cislunar Space Satellite Navigation System）](/glossary/navigation/cislunar-space-satellite-navigation-system/)
- [覆盖盲区（Coverage Blind Spot）](/glossary/navigation/coverage-blind-spot/)
- [网格搜索方法（Grid Search Method）](/glossary/fundamentals/grid-search-method/)

## 参考文献

- 徐明, 董天舒, 申晓伟. 地月空间航天动力学与应用. 清华大学出版社, 2026.
- Wertz, J. R. Mission Geometry: Orbit and Constellation Design and Management. Microcosm Press, 2001.
