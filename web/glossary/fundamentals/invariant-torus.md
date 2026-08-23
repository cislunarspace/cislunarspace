---
title: 不变环面与准周期轨道（Invariant Torus & Quasi-Periodic Tori）
description: 限制性三体问题中的不变环面、准周期不变环面 QPT、双圆四体问题中的环面流形，及其在编队飞行与轨道保持中的应用。
keywords: 不变环面, Invariant Torus, 准周期不变环面, QPT, 双圆四体问题, 编队飞行, 轨道保持
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 不变环面与准周期轨道（Invariant Torus & QPT）
  desc: 三体问题中的不变环面、准周期轨道及其任务应用。
  image: /logo.png
og:
  title: 不变环面与准周期轨道详解 | 地月空间动力学
  description: 限制性三体问题中的不变环面、准周期不变环面 QPT、双圆四体问题中的环面流形，及其在编队飞行与轨道保持中的应用。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 不变环面与准周期轨道详解 | 地月空间动力学
  description: 限制性三体问题中的不变环面、准周期不变环面 QPT、双圆四体问题中的环面流形，及其在编队飞行与轨道保持中的应用。
  image: /logo.png
permalink: /glossary/fundamentals/invariant-torus/
---

# 不变环面与准周期轨道（Invariant Torus & Quasi-Periodic Tori）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

**不变环面**（invariant torus）是相空间中由两个以上独立频率运动张成的闭合高维曲面。若环面上轨道在两个角坐标方向的频率之比为无理数，则轨道永不闭合，称为**准周期轨道**；轨道密布整个环面。在 CR3BP 中，不变环面常环绕某条参考周期轨道，是理解拟周期 Lissajous 与准周期 Halo 轨道族的几何基础（Gómez et al. 2001；Meyer & Offin 2017）。

## 二维不变环面与 Lissajous / Halo 轨道

共线平动点中心流形中的两对中心频率可参数化为作用量-角度变量。对给定的两个振幅，若频率比无理，则得到二维不变环面。当其中一个振幅为零时，环面退化为平面 Lyapunov 轨道；当两频率满足特定共振关系时，可产生 Halo 轨道族的周期解。因此，周期轨道可视为不变环面族上的共振切片或分岔产物。

## 准周期不变环面（QPT）

**QPT**（Quasi-Periodic Invariant Tori）是 CRTBP 中由拟周期非共振轨道覆盖的有界闭曲面。与严格周期 Halo 轨道相比，QPT 上的轨道不重复，可在参考周期轨道附近自然漂移，具有天然的包围结构。由于环面上运动有界，QPT 可用于设计长期稳定的编队飞行相对轨迹：各航天器位于同一族环面的不同截面上，相对运动自然有界（Capannolo et al. 2023）。

## 双圆四体问题中的不变环面流形

在双圆四体问题（BCR4BP）中，太阳作为第四体对地月系统施加周期摄动。此时地月侧的不变环面仍可近似存在，其稳定/不稳定流形称为**不变环面流形**。计算时可在不变曲线上沿轨道传播状态转移矩阵，用其特征值和特征向量确定环面的局部稳定/不稳定方向，再作为延拓到四体模型的初值（Ren et al. 2012）。

## 应用要点

- **编队飞行**：利用同一族 QPT 的不同初始相位，构造长期无需轨道保持的伴飞构型；

- **轨道保持**：准周期轨道比周期轨道更柔顺，在某些任务中可降低站守成本；

- **模型过渡**：环面及其流形可作为从 CR3BP 向高精度星历模型过渡的初值结构。

## 相关概念

- [中心流形](/glossary/dynamics/center-manifold/)

- [KAM 定理](/glossary/dynamics/kam-theory/)

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [Halo 轨道](/glossary/orbits/halo-orbit/)

- [Lyapunov 轨道](/glossary/orbits/lyapunov-orbit/)

- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)

- [弱稳定边界（WSB）](/glossary/dynamics/wsb/)

## 参考文献

- Gómez, G., et al. (2001). Dynamics and Mission Design Near Libration Points, Vol. I/II.

- Meyer, K. R., & Offin, D. C. (2017). Introduction to Hamiltonian Dynamical Systems and the N-Body Problem.

- Capannolo, L., et al. (2023). Model predictive control for formation reconfiguration exploiting quasi-periodic tori in the cislunar environment.

- Ren, Y., et al. (2012). Manifolds of quasi-periodic orbits in the bicircular restricted four-body problem. *Celestial Mechanics and Dynamical Astronomy*.
