---
title: 延拓方法（Continuation Method）
description: 详细解析延拓方法的定义、基本原理、在轨道族计算中的应用
keywords: 延拓方法, Continuation Method, 轨道族, 数值延拓, 切线延拓, 周期轨道, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 延拓方法（Continuation Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 延拓方法详解 | 轨道族系统化计算工具
  description: 详细解析延拓方法的定义、基本原理、在轨道族计算中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 延拓方法详解 | 轨道族系统化计算工具
  description: 详细解析延拓方法的定义、基本原理、在轨道族计算中的应用
  image: /logo.png
permalink: /glossary/dynamics/continuation-method/
---

# 延拓方法

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

延拓方法（Continuation Method）是由庞加莱首先提出的数值方法，用于研究含参数的微分方程系统中周期轨道族的计算。其核心思想是：若系统在某一参数下存在周期轨道，当参数发生微小变化时，以当前解作为初值继续求解，从而逐步延拓出整个轨道族。

## 基本原理

延拓方法的基本步骤如下：

1. **求解初始轨道**：在给定参数值下求得一条精确的周期轨道
2. **参数微调**：将延拓参数（如轨道振幅、周期、雅可比常数）做微小变化
3. **以当前解为初值**：将上一步的解作为新参数下的初值猜测
4. **微分修正**：对初值进行修正使其在新参数下收敛
5. **重复**：逐步改变参数，计算整个轨道族

## 延拓参数的选择

常用的延拓参数包括：

- **轨道振幅**：$x$ 方向振幅 $A_x$
- **轨道周期** $T$
- **雅可比常数** $C$
- **$y$ 方向速度** $\dot{y}_0$

固定步长下族参数的选择对计算影响很大，变步长的延拓方法可提高计算效率。

## 核心要素

### 数学定义

延拓方法以系统参数为连续变量，若在参数 $\mu_0$ 下存在周期轨道 $\mathbf{x}_0(\mu_0)$，则在 $\mu_0 + \Delta\mu$ 下以 $\mathbf{x}_0$ 为初值求解新的周期轨道，逐步延拓出整个轨道族。

### 关键性质

延拓过程中轨道族可能出现分岔点，在分岔点处轨道族分支为新族。变步长延拓可提高计算效率，弧长参数化可避免在极值点处失效。

### 数值方法

常用切线预测-修正策略：沿族参数的切线方向预测下一解，再通过微分修正使其精确满足周期条件。延拓参数可选轨道振幅、周期或雅可比常数。

## 应用价值

延拓方法是计算 DRO、Halo、Lyapunov 等轨道族的标准工具，可系统地探索轨道族的全貌，发现分岔点和新轨道分支。

## 相关概念

- [微分修正法](/glossary/dynamics/differential-correction/)
- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)
- [雅可比积分](/glossary/dynamics/jacobi-integral/)
- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [倍周期分岔](/glossary/other/period-doubling-bifurcation/)

## 参考文献

- 李瑞龙, 朱战霞. 圆形限制性三体问题周期轨道族的数值延拓与稳定性研究[C]. 中国力学大会, 2022.
- 陈昱桔. 面向地月空间态势感知的DRO轨道设计与控制研究[D]. 2024.
