---
title: GRAIL重力场模型（GRAIL Gravity Field Model）
description: 基于美国国家航空航天局GRAIL双星重力梯度测量数据反演构建的高精度、高阶次月球非球形引力位球谐系数模型。
keywords: GRAIL重力场模型, GRAIL Gravity Field Model, GRGM660PRIM, observation
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: GRAIL重力场模型（GRAIL Gravity Field Model）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/observation/grgm660prim/
---

# GRAIL重力场模型（GRAIL Gravity Field Model）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

GRAIL重力场模型（GRAIL Gravity Field Model）指利用美国国家航空航天局（NASA）重力恢复与内部实验室（Gravity Recovery and Interior Laboratory, GRAIL）双星微波测距系统获取的高精度星间距离与距离变化率数据，结合精密定轨与最小二乘拟合反演得到的月球引力场高阶球谐系数模型。典型版本如GRGM660PRIM、GL0900C等，最高阶次可达660阶乃至900阶以上。

## 物理机制与工程价值

月球内部结构不均匀，月表广泛分布着大型质量瘤（Mascon），导致月球引力场表现出极强的不规则非球形摄动特性：

1. 引力位展开数学形式：月球引力位通常在球坐标系下展开为连带勒让德多项式球谐函数级数。高阶模型能够极其精确地刻画月球背面、环形山及深层地质构造产生的局部重力异常。
2. 轨道演化与寿命预测：在低月球环绕轨道（LLO）与近直线晕轨道（NRHO）近月点弧段，月球非球形引力摄动（特别是偶次带谐项J2、低阶扇谐项及质量瘤引力）是导致轨道偏心率漂移、近月点高度衰减甚至撞月的主要动力学因素。
3. 高保真星历积分：在深空轨道设计与自主导航滤波中，GRGM660PRIM模型提供厘米级引力场摄动计算基准，是精确评估轨道维持速度增量、设计冻结轨道以及保障航天器长期安全在轨飞行的核心输入。

## 相关概念

- [参考轨道（Reference Orbit）](/glossary/navigation/reference-orbit/)
- [轨道维持成本（Orbit Maintenance Cost）](/glossary/orbits/orbit-maintenance-cost/)
- [通用任务分析工具（General Mission Analysis Tool, GMAT）](/glossary/other/gmat/)
- [系统工具包（Systems Tool Kit, STK）](/glossary/other/stk/)

## 参考文献

- Lemoine F G, Goossens S, Sabaka T J, et al. High-degree gravity models from GRAIL primary and extended mission data. *Journal of Geophysical Research: Planets*, 2014, 119(7): 1676-1698.
- Konopliv A S, Park R S, Yuan D N, et al. The JPL lunar gravity field to spherical harmonic degree 660 from the GRAIL Primary Mission. *Journal of Geophysical Research: Planets*, 2013, 118(7): 1415-1434.
