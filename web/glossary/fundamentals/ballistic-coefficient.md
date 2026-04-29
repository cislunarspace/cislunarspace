---
title: 弹道系数（Ballistic Coefficient）
description: 详细解析弹道系数的定义、物理意义及在再入弹道计算中的应用
keywords: 弹道系数, Ballistic Coefficient, 气动减速, 再入弹道, 阻力
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 弹道系数（Ballistic Coefficient）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 弹道系数详解 | 术语定义
  description: 详细解析弹道系数的定义及物理意义
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 弹道系数详解 | 术语定义
  description: 详细解析弹道系数的定义及物理意义
  image: /logo.png
permalink: /glossary/fundamentals/ballistic-coefficient/
---

# 弹道系数（Ballistic Coefficient）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

弹道系数 $B$ 是表征飞行器在大气中气动减速能力的参数，定义为：

$$B = \frac{C_x S_M}{2m}$$

其中 $C_x$ 为阻力系数，$S_M$ 为参考面积，$m$ 为飞行器质量。弹道系数出现在再入段运动方程中：

$$\frac{\mathrm{d}v}{\mathrm{d}t} = -B\rho_0 e^{-\beta h} v^2$$

## 核心要素

### 物理意义

弹道系数综合反映了飞行器的气动外形和质量特性：

| 参数 | 影响 |
|:---|:---|
| 阻力系数 $C_x$ 越大 | 弹道系数越大，气动减速越强 |
| 参考面积 $S_M$ 越大 | 弹道系数越大，气动减速越强 |
| 质量 $m$ 越大 | 弹道系数越小，气动减速越弱 |

弹道系数越大，飞行器在大气中受到的减速效果越显著。

### 与最小负加速度的关系

在零攻角再入条件下，最小负加速度与弹道系数的关系：

$$\dot{v}_m = \frac{\beta v_e^2}{2e}\sin\Theta_e$$

该结果表明，在给定再入条件下，最小负加速度与弹道系数无关，而只取决于再入速度 $v_e$ 和再入角 $\Theta_e$。

### 与最小负加速度高度的关系

最小负加速度发生时的高度：

$$h_m = \frac{1}{\beta}\ln\left(-\frac{C_x S_M \rho_0}{m\beta\sin\Theta_e}\right)$$

质量 $m$ 越大或 $|\Theta_e|$ 越大，最小负加速度发生的高度越低。

### 速度衰减规律

在忽略引力的假设下，速度随高度的变化：

$$v = v_e\exp\left(\frac{B\rho_0}{\beta\sin\Theta_e}e^{-\beta h}\right)$$

## 应用价值

弹道系数是再入飞行器设计的关键参数，直接影响再入过程中的减速特性、过载峰值和气动加热。在弹头设计中，通过增大弹道系数（增大质量或减小阻力面积）可以降低最小负加速度发生高度，提高突防能力。在航天器再入设计中，弹道系数是确定再入走廊的重要参数。

## 相关概念

- [零攻角再入（Zero-Angle-of-Attack Reentry）](/glossary/fundamentals/zero-angle-of-attack-reentry/)
- [再入走廊（Reentry Corridor）](/glossary/fundamentals/reentry-corridor/)
- [总攻角（Total Angle of Attack）](/glossary/fundamentals/total-angle-of-attack/)
- [再入段（Reentry Phase）](/glossary/fundamentals/reentry-phase/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
