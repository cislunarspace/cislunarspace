---
title: 误差演化（Uncertainty Propagation）
description: 初始轨道状态与动力学参数的不确定度统计分布随非线性轨道运动时间推移的映射与形变演化过程。
keywords: 误差演化, Uncertainty Propagation, 协方差传播, 非线性扩散, 轨道安全性
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 误差演化（Uncertainty Propagation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/fundamentals/uncertainty-propagation/
---

# 误差演化（Uncertainty Propagation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

误差演化（Uncertainty Propagation）是指在确定性或随机性动力学系统作用下，航天器初始状态测量误差、轨道机动控制执行偏差及动力学模型参数不确定度所构成的统计概率密度分布（PDF）随时间前向积分与几何形变的历史映射过程。

## 物理机制与工程价值

在地月空间多引力体非线性动力学场中，相空间的局部双曲鞍点特性与柯氏力耦合会导致初始紧致的高斯椭球形协方差在短时间内发生剧烈的非线性拉伸、弯曲与折叠扩散。

1. **敏感性与安全性建模**：在远距离逆行轨道（DRO）近距离编队飞行与平动点轨道保持中，利用微分代数（DA）或高阶状态转移张量（STT）进行微分几何分析，能够精确揭示不同轨道相位点上误差扩散的主特征发散方向；
2. **非高斯化畸变捕捉**：结合无迹变换（UT）与高斯混合模型（GMM），定量追踪误差包络在沿轨、径向与法向的非高斯形变特征，精确计算多星碰撞概率与安全包络；
3. **指导轨道维持与导航策略**：通过掌握误差在不同滑行弧段的收缩与膨胀规律，能够最优选取轨道控制机动历元（如在误差扩散拐点前施加修正），从而以最小控制频次和代价保障编队构型的长期稳定。

该理论是地月空间空间态势感知、交会对接安全走廊构建与自主编队保持方案论证的核心基础。

## 相关概念

- [无迹卡尔曼滤波（UKF）](/glossary/fundamentals/ukf/)
- [无迹变换（Unscented Transform）](/glossary/navigation/ut/)
- [状态转移矩阵（State Transition Matrix）](/glossary/dynamics/state-jacobian-matrix/)
- [轨道保持（Station-Keeping）](/glossary/dynamics/station-keeping/)

## 参考文献

- 敖海跃, 李明涛, 宝音贺西. 地月空间远距离逆行轨道编队飞行相对运动不确定性传播及保持控制. 宇航学报, 2024, 45(6): 889-901.
- Junkins, J. L., Akella, M. R., & Alfriend, K. T. Non-Gaussian error propagation in orbital mechanics. Journal of the Astronautical Sciences, 1996, 44(4): 541-563.
