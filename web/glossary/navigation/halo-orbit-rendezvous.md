---
title: Halo轨道交会（Halo Orbit Rendezvous）
description: 追踪航天器与目标航天器在地月平动点Halo轨道附近实现相对位置与速度匹配的轨道机动与相对导引控制过程。
keywords: Halo轨道交会, Halo Orbit Rendezvous, 相对导航, 轨道交会, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Halo轨道交会（Halo Orbit Rendezvous）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/navigation/halo-orbit-rendezvous/
---

# Halo轨道交会（Halo Orbit Rendezvous）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

Halo轨道交会（Halo Orbit Rendezvous）是指追踪航天器在限制性三体问题或星历摄动模型下，通过转移轨道机动、相对状态测量、远距离相位调谐与近距离自主逼近，最终与运行在地月共线拉格朗日点（L1/L2）Halo轨道上的目标航天器消除相对位置与相对速度偏差的飞行动力学与控制过程。

## 物理机制与工程价值

在地月平动点区域实施轨道交会，动力学环境与经典近地二体圆轨道交会存在本质区别：
1. 非线性鞍点动力学：Halo轨道具有双曲鞍点不稳定性，线性化相对运动状态转移矩阵存在模长大于1的实特征值，微小的测量与推进偏差会沿不稳定流形指数级快速发散；
2. 相对运动变系数耦合：平动点附近相对运动方程不具备Clohessy-Wiltshire简易封闭解析形式，需基于Floquet理论建立周期时变相对运动模型，或采用非线性高阶微分代数展开求解两点边值问题；
3. 相位匹配与燃料权衡：地月Halo轨道周期通常长达7至14天，大范围相位调相需合理设计等待轨道或借助不变流形分叉分支，以规避巨大的推进剂速度增量消耗。

该技术是月球背面中继卫星维护、地月空间站组装对接及月表载人登月上升段交会的核心关键技术。

## 相关概念

- [轨道交会（Orbital Rendezvous）](/glossary/navigation/orbital-rendezvous/)
- [参考轨道（Reference Orbit）](/glossary/navigation/reference-orbit/)
- [无迹变换（Unscented Transformation, UT）](/glossary/navigation/ut/)
- [等待时间（Wait Time）](/glossary/navigation/wt/)

## 参考文献

- Hou, X. Y., Tang, J., & Liu, L. Rendezvous in the vicinity of collinear libration points using invariant manifolds. Acta Astronautica, 2015, 115: 110-122.
- Peng, H., & Bai, X. Relative motion dynamics and control around Halo orbits in the Earth-Moon system. Journal of Guidance, Control, and Dynamics, 2018, 41(5): 1120-1135.
