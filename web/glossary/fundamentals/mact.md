---
title: 映射伴随控制变换（Mapped Adjoint Control Transformation, MACT）
description: 将小推力轨道优化中的协态变量非线性映射至几何物理控制参数空间的间接法初值拓扑正则化技术。
keywords: 映射伴随控制变换, MACT, 最优控制, 间接法, 小推力转移
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 映射伴随控制变换（Mapped Adjoint Control Transformation, MACT）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/fundamentals/mact/
---

# 映射伴随控制变换（Mapped Adjoint Control Transformation, MACT）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

映射伴随控制变换（Mapped Adjoint Control Transformation, MACT）是一种用于求解空间航天器小推力最优轨迹间接法（Indirect Method）两点边值问题（TPBVP）的变量映射正则化技术。该方法将抽象且物理意义模糊的协态变量（Costate Variables）非线性变换至有明确几何物理边界的参数空间（如推力方向角、无量纲开关函数与瞬时主引向矢量模值），从而显著拓宽间接打靶法的初值收敛域。

## 物理机制与工程价值

在长寿命小推力地月转移（如从地球低轨螺旋上升至地月平动点或月球 Gateway 空间站）轨迹优化中，发动机推力极低、轨道圈数多达数百圈，使得协态方程对初始伴随变量的微小偏差呈现极端敏感的指数发散特性。直接在原始协态空间进行牛顿打靶极其脆弱，极难找到可收敛初值。

MACT 技术的物理机制与工程价值体现为：

1. **去奇异化与物理归一化**：通过解析代数关系，将伴随变量向量映射为即时的推力俯仰角、偏航角以及最优开关阀值，消除了伴随变量绝对模值任意缩放带来的多解冗余；
2. **极大拓展收敛半径**：将原本高度扭曲、病态狭窄的打靶初值收敛漏斗变换为几何规则凸集，使得优化算法在粗糙初值猜测下仍能稳定收敛；
3. **支持高保真多体摄动**：可无缝结合星历多体摄动与小推力占空比约束，兼具间接法精度高、满足一阶极值必要条件的理论严密性与直接法全局搜索能力。

该技术是月球 Gateway 空间站巡航轨道注入、电推进货运飞船地月低耗转移轨迹快速优化的关键数学工具。

## 相关概念

- [伴随控制变换（Adjoint Control Transformation）](/glossary/dynamics/adjoint-control-transformation/)
- [伴随方法（Adjoint Method）](/glossary/dynamics/adjoint-method/)
- [微分修正（Differential Correction）](/glossary/dynamics/differential-correction/)
- [截断策略（Truncation Strategy）](/glossary/fundamentals/truncation-strategy/)

## 参考文献

- Patrick, C. E., & Russell, R. P. Hybrid optimization of high-fidelity low-thrust transfers to the lunar gateway. Journal of Guidance, Control, and Dynamics, 2023, 46(8): 1461-1478.
- Pontryagin, L. S. The Mathematical Theory of Optimal Processes. Interscience Publishers, 1962.
