---
title: 目标相位（Target Phase, TPh）
description: 目标相位法中在庞加莱截面上定义的轨道相位角几何指标，用作平动点轨道保持控制的目标参考状态。
keywords: 目标相位, Target Phase, TPh, 动力学, 轨道保持, 庞加莱映射
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 目标相位（Target Phase, TPh）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/dynamics/tph/
---

# 目标相位（Target Phase, TPh）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

目标相位（Target Phase, TPh）是指在平动点准周期与周期轨道维持的目标相位法（Target Phase Approach, TPhA）中，于选定庞加莱截面（如 $x=0$ 或 $y=0$ 截面）上显式定义的表征航天器名义轨道运行周期的角相位参数。它作为轨道控制机动规划的终端几何与相位瞄准基准。

## 物理机制与工程价值

在地月平动点（如地月 $L_1/L_2$ Halo 或 NRHO）轨道长时间驻留任务中，受高阶引力摄动、太阳光压及初始入轨注入误差影响，航天器状态会沿不稳定流形方向迅速指数发散。

传统目标点策略（Target Point Strategy, TPS）通常在固定时间步长后强制将位置速度偏差归零，容易造成过度机动并引发大幅度纵向相位滑动。目标相位（TPh）引入了相位角作为映射自变量：

1. 将航天器穿越特定庞加莱截面的事件条件与名义轨道周期对应，解耦纵向沿轨漂移与横向发散模态；
2. 机动算法以穿越截面时的目标相位角作为等式约束，只消除垂直于名义轨道切向的发散分量，保留沿轨相位的自然漂移自由度；
3. 大幅减少由于沿轨硬性时间对齐引入的冗余推进脉冲，使轨道维持控制总 $\Delta v$ 显著逼近动力学稳定流形维持的理论下限。

该指标在地月空间长寿命中继星、地月空间站及空间望远镜的高精度长期自主轨道保持中发挥着核心约束作用。

## 相关概念

- [高阶目标相位法（TPhA）](/glossary/dynamics/tpha-target-phase-approach/)
- [目标点策略（Target Point Strategy）](/glossary/dynamics/target-point-strategy/)
- [轨道保持（Station-Keeping）](/glossary/dynamics/station-keeping/)
- [庞加莱截面（Poincare Section）](/glossary/dynamics/poincare-section/)

## 参考文献

- Fu, B., Gong, S. P., & Li, J. F. A high-order target phase approach for the station-keeping of periodic orbits in the Earth-Moon system. Aerospace Science and Technology, 2024, 145: 108873.
- Folta, D. C., & Pavlak, T. A. Extension of target point stationkeeping methods for libration point orbits. AAS/AIAA Space Flight Mechanics Meeting, 2013.
