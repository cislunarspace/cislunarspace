---
title: 近直线晕轨道(NRHO)
description: 详细解析近直线晕轨道(NRHO)的定义、与Halo轨道的关系、共振特性、稳定性分析及其在地月空间任务中的应用
keywords: 近直线晕轨道, NRHO, Near-Rectilinear Halo Orbit, Halo轨道, 地月平动点, L2点, 门户空间站, Gateway, A2PPO, 低推力转移
author: 天疆说
date: 2026-04-04
lastUpdated: 2026-04-27
wechatShare:
  title: 近直线晕轨道(NRHO)
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 近直线晕轨道(NRHO)详解 | 地月空间站候选轨道
  description: 详细解析近直线晕轨道(NRHO)的定义、与Halo轨道的关系、共振特性、稳定性分析及其在地月空间任务中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 近直线晕轨道(NRHO)详解 | 地月空间站候选轨道
  description: 详细解析近直线晕轨道(NRHO)的定义、与Halo轨道的关系、共振特性、稳定性分析及其在地月空间任务中的应用
  image: /logo.png
permalink: /glossary/nrho/
---

# 近直线晕轨道

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

近直线晕轨道（Near-Rectilinear Halo Orbit，NRHO）是地月共线平动点 $L_1$ 或 $L_2$ 附近 Halo 轨道族的一个子类。在会合坐标系中，当 Halo 轨道的垂直于地月轨道平面的振幅 $A_z$ 远大于面内振幅 $A_y$ 时，轨道形态从经典的"腰果形" Halo 轨道逐渐演变为近似直线的往复运动，即 NRHO。换言之，NRHO 对应于 Halo 轨道族中 $A_z/A_y$ 比值较大的极端成员。

![地月 L1 北族和 L2 南族 Halo 轨道与 NRHO](/glossary/Figures/NRHO/地月L1北族和L2南族Halo轨道和NRHO.png)
*地月 L1 北族和 L2 南族 Halo 轨道，其中极端构型即为 NRHO*



## 几何特征

- **近月点高度极低**：通常低于 100 km
- **远月点**：位于地月 $L_2$ 点附近
- **轨面关于 $xOz$ 平面对称**：存在南族与北族两个分支
- **整体呈现近似沿直线往复的形态**

## 共振关系

与 DRO 类似，NRHO 也存在与月球公转周期的共振关系。当轨道周期 $T$ 与月球公转周期 $T_M$ 满足 $T/T_M \approx n/m$ 时，称为 $m:n$ 会合共振 NRHO。

| 共振比 | 特征与应用 |
|:---|:---|
| 3:1, 4:1（低阶） | 近月点高度低，对月面探测和通信中继有利 |
| **9:2** | **NASA 门户空间站选定轨道，稳定性好，适合长期驻留** |
| 11:2（高阶） | 轨道稳定性更好，适合长期驻留任务 |

## 动力学对称性

与 DRO 关于 $x$ 轴的对称性不同，NRHO 的对称性体现在 **$xOz$ 平面的镜像对称**。NRHO 轨道在穿越 $xOz$ 平面时，速度分量满足 $\dot{x}$ 和 $\dot{z}$ 反号、$\dot{y}$ 保持不变的条件。这一对称性为微分修正提供了自然的打靶条件：在 $xOz$ 平面上选取初始点，仅保留 $z_0$ 和 $\dot{y}_0$ 作为自由变量，通过半周期积分后校核 $xOz$ 平面穿越条件，即可迭代收敛至周期轨道。

## 稳定性特征

NRHO 的稳定性分析需要关注：

- **Floquet 乘子**：通过单值矩阵的特征值刻画轨道各方向扰动的放大/衰减特性
- **近月点距离 $r_p$**：$r_p$ 过小可能导致月面撞击风险，$r_p$ 过大则削弱通信和探测优势
- **与平动点区域不变流形的耦合关系**：这是 NRHO 区别于 DRO 的独特动力学特征

## 工程应用

NRHO 已成为当前地月空间任务的热门候选轨道：

- **我国嫦娥四号中继星"鹊桥"**：已成功运行于地月 $L_2$ 点 Halo 轨道，为月球背面探测提供通信中继服务
- **NASA"门户"空间站（Gateway）**：计划部署于 $L_2$ 点南族 9:2 共振 NRHO
- **地月空间态势感知**：NRHO 凭借独特的轨道位置，适合部署中继通信和观测平台

## 在 A2PPO 低推力转移研究中的应用

Ul Haq 等人（2026）使用 A2PPO（注意力增强近端策略优化）算法研究了从 L₂ 晕轨道到 NRHO 的自主低推力转移（S2 场景）[[5]]()：

- **出发轨道**：L₂ 南晕轨道（$C_J \approx 3.1211$，周期 14.55 天）
- **目标轨道**：L₂ 南 NRHO（$C_J \approx 3.0395$，周期 6.99 天）
- **转移结果**：8.38 天，消耗 5.00 kg 推进剂
- **转移特性**：形成月球借力飞行（lunar flyby）几何结构

NRHO 与晕轨道之间的转移需要显著的能量变化（$C_J$ 变化约 0.08），是低推力轨迹优化中的高难度场景。A2PPO 能够在无需初始猜测的条件下自主学习高效转移策略。

## 相关概念
- [远距离逆行轨道（DRO）](/glossary/dro/)
- [地月 L1/L2 晕轨道（EML1/EML2 Halo）](/glossary/eml-halo/)
- [A2PPO（注意力增强近端策略优化）](/glossary/a2ppo/)
- [星伞（Starshade）](/glossary/starshade/)
- [Birkhoff-Gustavson 标准型](/glossary/birkhoff-gustavson/)
- [中心流形（Central Manifold）](/glossary/central-manifold/)
- [作用角变量（Action-Angle Variables）](/glossary/action-angle/)
- [轨道辨识（Orbit Identification）](/glossary/orbit-identification/)
- Halo 轨道
- [圆形限制性三体问题（CR3BP）](/glossary/cr3bp/)
- 平动点（拉格朗日点）
- 星历模型
- 不变流形

## 参考文献

- Zimovan E M. Rectilinear halo orbits and their applications in cislunar space[D]. Purdue University, 2017.
- Williams J, Whitley R. Targeting cislunar rectilinear halo orbits for spacecraft missions[C]. 2017.
- 吴伟仁. 嫦娥4号月球背面软着陆任务设计[J]. 2017.
- Qiao C, Long X, Yang L, et al. Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points[J]. Chinese Journal of Aeronautics, 2025. doi: 10.1016/j.cja.2025.103869.
- [[5]]() Ul Haq I U, Dai H, Du C. Autonomous low-thrust trajectory optimization in cislunar space via attention-augmented reinforcement learning[J]. Aerospace Science and Technology, 2026.
