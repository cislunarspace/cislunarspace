---
title: 驻点热流（Stagnation Heat Flux）
description: 详细解析驻点热流的定义、计算公式及在再入走廊设计中的约束作用
keywords: 驻点热流, Stagnation Heat Flux, 气动加热, 再入热防护, 热流限制
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 驻点热流（Stagnation Heat Flux）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 驻点热流详解 | 术语定义
  description: 详细解析驻点热流的定义及计算公式
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 驻点热流详解 | 术语定义
  description: 详细解析驻点热流的定义及计算公式
  image: /logo.png
permalink: /glossary/fundamentals/stagnation-heat-flux/
---

# 驻点热流（Stagnation Heat Flux）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

驻点热流 $q_s$ 是再入飞行器表面气动加热最严重位置（驻点处）的热流密度。驻点是气流速度降为零、温度最高的位置，其热流密度为：

$$q_s = k_s\sqrt{\rho}\,v^3$$

其中 $k_s$ 为与飞行器外形相关的系数，$\rho$ 为大气密度，$v$ 为飞行速度。

## 核心要素

### 热流公式分析

驻点热流与以下因素相关：

| 参数 | 影响 |
|:---|:---|
| 大气密度 $\rho$ | 热流与 $\sqrt{\rho}$ 成正比，高度越低密度越大 |
| 飞行速度 $v$ | 热流与 $v^3$ 成正比，速度影响最为显著 |
| 外形系数 $k_s$ | 取决于飞行器头部形状和半径 |

### 热流限制边界

在再入走廊设计中，驻点热流是最严格的热约束。最大热流限制条件为：

$$q_s \leq (q_s)_{\max}$$

由此导出的走廊边界方程：

$$D = \frac{C_x S_M}{2m}\frac{(q_s)_{\max}^2}{k_s^2 v^4}$$

在 $D$-$v$ 平面内，该边界为一条随速度减小而急剧上升的曲线。

### 最大热流发生条件

对于零攻角再入，最大热流发生在特定高度和速度条件下。由速度衰减规律和密度分布，最大热流与再入速度 $v_e$ 和再入角 $\Theta_e$ 密切相关。减小 $|\Theta_e|$ 可以降低热流峰值，这也是跳跃式再入降低热载荷的物理基础。

### 热防护设计

| 防热方式 | 原理 | 典型应用 |
|:---|:---|:---|
| 烧蚀防热 | 材料烧蚀吸收热量 | 弹头、返回舱 |
| 辐射防热 | 高温表面辐射散热 | 航天飞机 |
| 隔热防热 | 隔热层阻断热传导 | 多种航天器 |

## 应用价值

驻点热流是再入飞行器热防护设计的核心参数。在再入走廊确定中，热流限制通常是决定走廊上边界（$|\Theta_e|_{\max}$）的主要因素。通过合理设计飞行器外形（增大头部半径可降低 $k_s$）、选择再入弹道（减小再入角或采用跳跃式再入）和采用先进防热材料，可以有效控制再入热载荷。

## 相关概念

- [再入走廊（Reentry Corridor）](/glossary/fundamentals/reentry-corridor/)
- [零攻角再入（Zero-Angle-of-Attack Reentry）](/glossary/fundamentals/zero-angle-of-attack-reentry/)
- [跳跃式再入（Skip Reentry）](/glossary/fundamentals/skip-reentry/)
- [弹道系数（Ballistic Coefficient）](/glossary/fundamentals/ballistic-coefficient/)
- [再入段（Reentry Phase）](/glossary/fundamentals/reentry-phase/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
