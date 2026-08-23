---
title: 轨迹截面宽度（Trajectory Section Width）
description: 描述地月远距离逆行轨道及其邻域准周期运动在庞加莱截面上相点分布范围与动力学稳定边界的几何度量指标。
keywords: 轨迹截面宽度, Trajectory Section Width, 轨道设计, 轨道力学, 转移轨道, 周期轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 轨迹截面宽度（Trajectory Section Width）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/orbits/trajectory-section-width/
---

# 轨迹截面宽度（Trajectory Section Width）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

轨迹截面宽度（Trajectory Section Width）指在圆形限制性三体问题或受摄星历模型中，取特定的庞加莱截面（如地月连线方向的 $y=0$ 截面）时，围绕周期轨道（如远距离逆行轨道DRO）运动的有界准周期轨迹在截面上所产生的所有穿越点位置坐标的最大跨距与几何包络宽度。

## 物理机制与工程价值

轨迹截面宽度是定量表征相空间局部稳定性结构、轨道有界运动范围以及流形发散速率的重要度量：

1. 准周期运动与KAM环面拓扑：在非线性哈密顿动力系统中，稳定周期轨道周围存在密集的KAM不变环面簇。轨迹截面宽度直观反映了中心流形（Center Manifold）在截面上的投影跨度；截面宽度越小且收敛，表明该能量下的周期轨道具有更紧致的自稳定束缚域。
2. 摄动鲁棒性与导航容差：在地月空间DRO导航星座设计中，受到太阳三体引力和月球非球形引力摄动，卫星轨迹会在名义轨道附近震荡。截面宽度为评估长期轨道漂移界限、星间相对测距误差容限及构型发散风险提供了明确的无量纲几何准则。
3. 转移轨道注入精度评估：在从近地或平动点流形向DRO注入时，截面宽度决定了入轨终端脉冲偏差允许的动力学吸引盆范围。

## 相关概念

- [面外振幅（Out-of-plane Amplitude, Az）](/glossary/orbits/az/)
- [相切（Tangential）](/glossary/orbits/tangential/)
- [转移轨道族（Transfer Family）](/glossary/orbits/transfer-family/)
- [轨道维持代价（Orbit Maintenance Cost）](/glossary/orbits/orbit-maintenance-cost/)

## 参考文献

- Zhou H, Zhang L, Qi R. Design of circumlunar global positioning satellite constellation on DRO in the cislunar space. *Acta Astronautica*, 2024, 214: 412-426.
- Celletti A. *Stability and Chaos in Celestial Mechanics*. Berlin: Springer, 2010.
