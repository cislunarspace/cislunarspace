---
title: 中心流形（Central Manifold）
description: 详细解析中心流形理论在CR3BP平动点轨道参数化中的作用，以及双曲方向与中心方向的解耦方法
keywords: 中心流形, Central Manifold, CR3BP, 平动点, 双曲不变流形, 稳定流形, 不稳定流形, 轨道参数化
author: 天疆说
date: 2026-04-23
lastUpdated: 2026-04-23
wechatShare:
  title: 中心流形（Central Manifold）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 中心流形详解 | CR3BP平动点轨道参数化
  description: 详细解析中心流形理论在CR3BP平动点轨道参数化中的作用，以及双曲方向与中心方向的解耦方法
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 中心流形详解 | CR3BP平动点轨道参数化
  description: 详细解析中心流形理论在CR3BP平动点轨道参数化中的作用，以及双曲方向与中心方向的解耦方法
  image: /logo.png
permalink: /glossary/central-manifold/
---

# 中心流形

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文编辑来源：Qiao et al. (2025) "Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points"
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

中心流形（Central Manifold）是哈密顿系统平衡点附近相空间分解中的**中性稳定方向**所构成的不变流形。在地月空间平动点（尤其是共线平动点 $L_1, L_2, L_3$）的动力学研究中，中心流形理论是将高维相空间降维、揭示轨道几何结构的核心工具。

在 CR3BP 的共线平动点邻域，线性化动力学具有 **鞍×中心×中心**（saddle × center × center）的结构：

- **双曲方向**（saddle/unstable）：沿不稳定流形和稳定流形，状态量呈指数型增长或衰减
- **中心方向**（center/stable）：两个中心模沿椭圆轨道运动，状态量有界振荡

中心流形对应两个**中心方向**的全体，构成了平动点轨道族（如 Halo 轨道、Lyapunov 轨道、Lissajous 轨道）栖息的低维不变流形。

## 动力学结构

对于 CR3BP 共线平动点的线性化哈密顿量：

$$H_2 = \lambda q_1 p_1 + \frac{\omega_p}{2}(q_2^2 + p_2^2) + \frac{\omega_\nu}{2}(q_3^2 + p_3^2)$$

三个特征量对应的运动模式为：

| 特征量 | 符号 | 运动性质 |
|:---|:---|:---|
| $\lambda$ | $\eta_1 < 0$ 的平方根 | 双曲：$q_1$ 指数增长，$p_1$ 指数衰减 |
| $\omega_p$ | $\eta_2 > 0$ 的平方根 | 中心：$XY$ 平面内的椭圆运动 |
| $\omega_\nu$ | $\eta_3 > 0$ 的平方根 | 中心：$Z$ 方向的振荡运动 |

## 与双曲不变流形的解耦

Qiao et al. (2025) 的核心贡献之一，是通过**正则变换**将双曲方向从中心流形中解耦。解耦后的哈密顿量形式为：

$$\hat{H} = H_2 + \hat{H}_N(q_1 p_1, I_2, I_3, \theta_2, \theta_3) + R_N(q,p)$$

其中 $R_N$ 为 $N$ 阶以外的高阶余项。解耦的核心效果是：

- 双曲方向 $q_1, p_1$ 在高阶项中仅以**乘积形式** $q_1 p_1$ 出现，不再与中心方向的坐标耦合
- 中心流形上的运动仅由 $(I_2, \theta_2, I_3, \theta_3)$ 四个参数描述

这一解耦使得在研究平动点轨道族时，可以**独立处理**双曲逃逸/捕获动力学（稳定/不稳定流形）和周期/准周期轨道运动。

## 中心流形上的运动

在中心流形上，运动可由**作用角变量**描述。设中心流形哈密顿量为：

$$H_{CM} = H_2(I_2, I_3) + H_N(I_2, I_3, \theta_2, \theta_3)$$

则：

- 作用量 $I_2, I_3$ 在线性部分为常数（积分），高阶项引起长周期微扰振荡
- 角变量 $\theta_2, \theta_3$ 线性变化：$\theta = \omega t + \theta_0$，高阶项叠加小幅振动

### Poincaré 截面分析

中心流形上的运动是四维相空间中的二维环面运动。采用 Poincaré 截面（$\theta_2 = 0$ 或 $\theta_3 = \pi/2$）可将相空间降维，实现可视化。

在 Poincaré 截面中：

- **Lyapunov 轨道**：对应 $I_3 = 0$ 的截面交线
- **垂直 Lyapunov 轨道**：对应 $I_2 = 0$ 的截面交线
- **Halo 轨道**：环面收缩至中心点处，对应 $\theta_3 = \pi/2$ 或 $3\pi/2$ 附近的特定能量层
- **Lissajous 轨道**：截面上的遍历轨迹，$\theta_3$ 在 $[0, 2\pi)$ 遍历整个截面
- **准 Halo 轨道**：局部形成环面结构

## 不变流形的定义

基于解耦后的特征参数，稳定流形 $W_s$ 和不稳定流形 $W_u$ 可简洁定义为：

$$W_s = \{[q_1, p_1, I_2, \theta_2, I_3, \theta_3] \mid H_{CM} = C, \ q_1 = 0\}$$

$$W_u = \{[q_1, p_1, I_2, \theta_2, I_3, \theta_3] \mid H_{CM} = C, \ p_1 = 0\}$$

- 当 $q_1 = 0$、$p_1 \neq 0$ 时，$p_1$ 随时指数衰减至零 → 稳定流形（趋近平动点）
- 当 $p_1 = 0$、$q_1 \neq 0$ 时，$q_1$ 随时指数增长 → 不稳定流形（远离平动点）

## 在轨道参数化中的作用

Qiao et al. (2025) 利用中心流形理论建立了地月空间共线平动点邻域的六维特征参数体系：

| 参数 | 描述 | 物理意义 |
|:---|:---|:---|
| $q_1$ | 双曲方向坐标 | 沿不稳定流形进入程度 |
| $p_1$ | 双曲方向动量 | 沿稳定流形进入程度 |
| $I_2$ | 中心流形作用量1 | $XY$ 平面内运动振幅 |
| $\theta_2$ | 中心流形角量1 | $XY$ 平面内相位 |
| $I_3$ | 中心流形作用量2 | $Z$ 方向运动振幅 |
| $\theta_3$ | 中心流形角量2 | $Z$ 方向相位 |

## 相关概念

- [Birkhoff-Gustavson 标准型](/glossary/birkhoff-gustavson/)
- [Poincaré 截面（Poincaré Section）](/glossary/poincare-section/)
- [正则变换（Canonical Transformation）](/glossary/canonical-transformation/)
- [作用角变量（Action-Angle Variables）](/glossary/action-angle/)
- [圆型限制性三体问题（CR3BP）](/glossary/cr3bp/)
- 双曲不变流形（Hyperbolic Invariant Manifold）
- 稳定/不稳定流形（Stable/Unstable Manifold）
- Halo 轨道（Lissajous 轨道）

## 参考文献

- Arnol'd V I. Mathematical methods of classical mechanics[M]. Springer, 1989.
- Jorba À, Masdemont J. Dynamics in the center manifold of the collinear points of the restricted three body problem[J]. Phys D, 1999, 132(1-2): 189-213.
- Qiao C, Long X, Yang L, et al. Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points[J]. Chinese Journal of Aeronautics, 2025. doi: 10.1016/j.cja.2025.103869.
