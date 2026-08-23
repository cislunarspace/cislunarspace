---
title: 三角平动点周期轨道族（Periodic Orbit Family at Triangular Libration Point）
description: 限制性三体问题中围绕拉格朗日三角平衡点L4和L5分岔演化的长短周期对称封闭轨道集合。
keywords: 三角平动点周期轨道族, Periodic Orbit Family at Triangular Libration Point, 动力学, 平动点, 周期轨道族
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 三角平动点周期轨道族（Periodic Orbit Family at Triangular Libration Point）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/dynamics/periodic-orbit-family-at-triangular-libration-point/
---

# 三角平动点周期轨道族（Periodic Orbit Family at Triangular Libration Point）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

三角平动点周期轨道族（Periodic Orbit Family at Triangular Libration Point）是指在限制性三体问题模型中，围绕三角拉格朗日平衡点 $L_4$ 或 $L_5$ 拓扑分岔生成的一维连续周期轨道集合。在地月系统中，主要包含由中心流形微小扰动线性化本征频率演化而来的短周期轨道族（Short-Period Family）与长周期轨道族（Long-Period Family）。

## 物理机制与工程价值

在地月圆型限制性三体问题（CR3BP）中，质量比 $\mu \approx 0.01215$ 满足劳斯稳定判据（$\mu < \mu_R \approx 0.03852$），三角平动点 $L_4$ 和 $L_5$ 呈现纯虚数特征值结构 $\pm i\omega_1, \pm i\omega_2$，线性动力学表现为线性稳定中心。

1. **短周期轨道族**：围绕平衡点做逆时针快速环绕，无量纲极限基本周期约为 $T_1 = 2\pi/\omega_1 \approx 6.58$（对应约 28.5 天）；
2. **长周期轨道族**：对应缓变振荡模态，极限周期约为 $T_2 = 2\pi/\omega_2 \approx 21.07$（对应约 91.2 天），在旋转坐标系中呈现大尺度的豆状或蝌蚪形闭合轨迹；
3. **分岔与稳定性**：随着能量（雅可比常数 $C_j$）变化，长周期族会演化出三维空间垂直分岔族并逐步失去线性稳定性。

在工程应用中，地月 $L_4/L_5$ 三角平动点周期轨道天然具备长期轨道稳定性，轨道维持速度增量 $\Delta v$ 需求极低，是部署深空甚长基线干涉测量（VLBI）基线节点、全天域深空监测与长期驻留中继通信平台的理想轨道场所。

## 相关概念

- [等边三角形平动点（Equilateral Triangle Libration Point）](/glossary/dynamics/equilateral-triangle-libration-point/)
- [雅可比积分（Jacobi Integral）](/glossary/dynamics/jacobi-integral/)
- [Halo轨道计算（Halo Orbit Computation）](/glossary/dynamics/halo-orbit-computation/)
- [轨道保持（Station-Keeping）](/glossary/dynamics/station-keeping/)

## 参考文献

- Gómez, G., Llibre, J., Martínez, R., & Simó, C. Dynamics and Mission Design Near Libration Points - Vol. 1: Fundamentals. World Scientific, 2001.
- Szebehely, V. Theory of Orbits: The Restricted Problem of Three Bodies. Academic Press, 1967.
