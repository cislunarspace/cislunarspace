---
title: 高阶目标相位法（TPhA）
description: 结合高阶微分代数展开与截面目标相位约束的周期轨道高精度长期自主保持算法。
keywords: 高阶目标相位法, TPhA, Target Phase Approach, 动力学, 轨道保持, 微分代数
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 高阶目标相位法（TPhA）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/dynamics/tpha-target-phase-approach/
---

# 高阶目标相位法（TPhA）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

高阶目标相位法（Target Phase Approach, TPhA）是一种面向平动点周期轨道与拟周期轨道长期维持的高精度控制算法。该算法结合高阶微分代数（Differential Algebra, DA）展开技术，在庞加莱截面上建立包含非线性项的相位角与状态转移映射，通过求解约束优化问题精确计算轨道修正机动历元与控制脉冲矢量。

## 物理机制与工程价值

在地月 $L_1/L_2$ Halo 轨道、近直线晕轨道（NRHO）等动力学强非线性区域，线性化目标点方法（如基于一阶状态转移矩阵的经典 TPS 方法）仅能在微小偏差范围内有效。当入轨注入误差或长期积分摄动较大时，线性假设失效导致修正机动发散或燃料消耗急剧增加。

高阶目标相位法实现了以下关键突破：

1. **高阶泰勒映射**：利用微分代数技术将非线性轨道动力学与控制脉冲效应自动展开为任意阶数（通常为 3 到 5 阶）的多元多项式映射，精确刻画非线性漂移曲率；
2. **截面事件映射**：引入沿名义轨道的庞加莱截面与目标相位角指标，将连续时间域上的轨道保持问题转化为截面离散映射问题；
3. **低代价全局收敛**：通过高阶多项式直接反求满足目标相位与横向收敛约束的最优脉冲解，无需耗时的传统变分迭代与多次数值重积分。

该方法不仅能显著降低轨道维持所需的推进剂消耗，还能极大降低星载自主计算负担，是实现地月空间轨道设施自主长期站位保持的前沿技术方案。

## 相关概念

- [目标相位（Target Phase）](/glossary/dynamics/tph/)
- [目标点策略（Target Point Strategy）](/glossary/dynamics/target-point-strategy/)
- [轨道保持（Station-Keeping）](/glossary/dynamics/station-keeping/)
- [轨道维持代价（Orbit Maintenance Cost）](/glossary/orbits/orbit-maintenance-cost/)

## 参考文献

- Fu, B., Gong, S. P., & Li, J. F. A high-order target phase approach for the station-keeping of periodic orbits in the Earth-Moon system. Aerospace Science and Technology, 2024, 145: 108873.
- Howell, K. C., & Pernicka, H. J. Stationkeeping method for Libration point trajectories. Journal of Guidance, Control, and Dynamics, 1993, 16(1): 151-159.
