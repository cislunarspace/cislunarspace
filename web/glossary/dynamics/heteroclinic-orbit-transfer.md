---
title: 异宿轨道转移（Heteroclinic Orbit Transfer / Homoclinic Connections）
description: 限制性三体问题中的异宿连接、同宿连接及其组合循环：定义、庞加莱截面求交法、调相策略，以及“星际高速公路”在任务设计中的典型应用。
keywords: 异宿轨道, 同宿轨道, Heteroclinic, Homoclinic, 异宿连接, 同宿连接, 调相, 星际高速公路, 低能转移
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 异宿轨道转移（Heteroclinic Orbit Transfer）
  desc: 三体问题中流形管相交、异宿/同宿连接与星际高速公路。
  image: /logo.png
og:
  title: 异宿轨道转移详解 | 星际高速公路
  description: 限制性三体问题中的异宿连接、同宿连接及其组合循环：定义、庞加莱截面求交法、调相策略，以及“星际高速公路”在任务设计中的典型应用。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 异宿轨道转移详解 | 星际高速公路
  description: 限制性三体问题中的异宿连接、同宿连接及其组合循环：定义、庞加莱截面求交法、调相策略，以及“星际高速公路”在任务设计中的典型应用。
  image: /logo.png
permalink: /glossary/dynamics/heteroclinic-orbit-transfer/
---

# 异宿轨道转移（Heteroclinic Orbit Transfer / Homoclinic Connections）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在动力系统理论中，**异宿轨道**（heteroclinic orbit）是连接两个不同不变集（平衡点或周期轨道）的轨道；若起点与终点为同一不变集，则称为**同宿轨道**（homoclinic orbit）。在 CR3BP 中，它们常表现为不同平动点周期轨道之间稳定流形与不稳定流形的几何交线（Koon et al. 1999）。

设 $\mathcal{A}$、$\mathcal{B}$ 为两条周期轨道，记 $\mathcal{H}_{\mathcal{AB}}$ 为从 $\mathcal{A}$ 到 $\mathcal{B}$ 的异宿轨道，则

$$\lim_{t\to-\infty}\phi^t(x)\to\mathcal{A},\qquad \lim_{t\to+\infty}\phi^t(x)\to\mathcal{B}.$$

当同时存在 $\mathcal{H}_{\mathcal{AB}}$ 与 $\mathcal{H}_{\mathcal{BA}}$ 时，二者构成**异宿循环**（heteroclinic cycle）。同宿轨道 $
\mathcal{H}_{\mathcal{AA}}$ 本身已是循环。

## 庞加莱截面求交

异宿连接对应于两条流形管的横截相交。直接求 6 维相空间中两个 2 维流形管的交非常困难。利用 Jacobi 积分将空间降为 5 维，再取一个横截于流的**庞加莱截面**（Poincaré section），流形管与该截面的交降为 1 维曲线；求两条曲线的交点即得到异宿连接候选（Koon et al. 1999）。

具体而言，为寻找从 $L_2$ 周期轨道到 $L_1$ 周期轨道的连接：

1. 计算 $L_2$ 周期轨道的不稳定流形，正向积分至截面；
2. 计算 $L_1$ 周期轨道的稳定流形，反向积分至同一截面；
3. 在截面上寻找两族曲线交点；
4. 从交点分别正向、反向积分得到近似异宿轨道，再微分修正。

这种方法把高维的面与面相交问题降为线与线相交，是空间流形动力学方法的核心。

## 同宿/异宿调相

同宿或异宿连接还可作为**间接调相**（phasing）策略。航天器离开目标轨道后沿不稳定流形演化，再沿另一周期轨道的稳定流形返回，通过选择不同连接组合积累相位差，燃耗通常仅为进出平动点轨道的少量脉冲。同宿调相在同一轨道的不稳定/稳定流形之间完成；异宿调相则跨两个平动点轨道完成。

## 星际高速公路与任务实例

由大量平动点流形管及其异宿/同宿连接构成的网络被称为**星际高速公路**（Interplanetary Superhighway）。其特点包括：

- **低能**：沿自然动力学通道运动，燃料消耗极低；

- **网络化**：不同系统的流形相互拼接，形成太阳系尺度转移网络；

- **时间尺度长**：相比脉冲转移，飞行时间常以月甚至年计。

典型实例是 Genesis 任务的返回段：航天器从日地 $L_1$ Halo 轨道经一次 $L_2$ 区域异宿循环再回到 $L_1$ 附近，完成数百万公里的日侧返回，仅需数 m/s 量级机动（Koon et al. 1999；Lo 2002）。

## 相关概念

- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)

- [庞加莱截面（Poincaré Section）](/glossary/dynamics/poincare-section/)

- [Halo 轨道](/glossary/orbits/halo-orbit/)

- [Lyapunov 轨道](/glossary/orbits/lyapunov-orbit/)

- [弱稳定边界（WSB）](/glossary/dynamics/wsb/)

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

## 参考文献

- Koon, W. S., Lo, M. W., Marsden, J. E., & Ross, S. D. (1999). The Genesis trajectory and heteroclinic connections.

- Koon, W. S., Lo, M. W., Marsden, J. E., & Ross, S. D. (2006/2011). Dynamical systems, the three-body problem and space mission design.

- Lo, M. W. (2002). The Interplanetary Superhighway and the Genesis Mission. JPL.

- Gómez, G., et al. (2001). Invariant manifolds, the spatial three-body problem and space mission design.

- Ren, Y., et al. (2011). On the mechanisms of natural transport in the solar system.

- 郭建宇. (2020). 基于双基不变流形法的平动点轨道设计及保持策略研究. 北京工业大学.
