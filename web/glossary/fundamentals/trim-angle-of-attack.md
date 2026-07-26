---
title: 配平攻角（Trim Angle of Attack）
description: 详细解析配平攻角的定义、求解方法及在弹道-升力式再入航天器中的应用
keywords: 配平攻角, Trim Angle of Attack, 气动力矩, 质心偏移, 弹道-升力式再入
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 配平攻角（Trim Angle of Attack）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 配平攻角详解 | 术语定义
  description: 详细解析配平攻角的定义及求解方法
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 配平攻角详解 | 术语定义
  description: 详细解析配平攻角的定义及求解方法
  image: /logo.png
permalink: /glossary/fundamentals/trim-angle-of-attack/
---

# 配平攻角（Trim Angle of Attack）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

配平攻角 $\eta_{tr}$ 是指空气动力对飞行器质心的力矩为零时所对应的攻角。在配平攻角飞行状态下，气动力 $\boldsymbol{R}$ 通过飞行器的压心和质心，飞行器处于力矩平衡状态。配平攻角通过质心偏离几何纵轴的偏移量 $\delta$ 实现。

## 核心要素

### 力矩平衡条件

以配平攻角飞行时，气动力对质心的力矩为零，由此得到平衡方程：

$$C_N(x_p - x_g) = C_{x1}\delta$$

其中：

| 符号 | 含义 |
| :--- | :--- |
| $C_N$ | 总法向力系数 |
| $x_p$ | 压心位置 |
| $x_g$ | 质心位置 |
| $C_{x1}$ | 轴向力系数 |
| $\delta$ | 质心偏离几何纵轴的距离 |

### 飞行特性

| 特性 | 说明 |
| :--- | :--- |
| 侧滑角 $\beta = 0$ | 气动力在 $o_1x_1y_1$ 平面内 |
| 攻角 $\alpha < 0$ | 速度轴在纵轴及法向轴正向所夹直角之内 |
| 升阻比 | 一般不大于 0.5 |

### 求解方法

$C_N$、$C_{x1}$、$x_p$ 均为攻角 $\eta$（即 $\alpha$）、马赫数 $M$ 及飞行高度 $h$ 的函数。对于给定的 $M$ 和 $h$，若某一 $\eta$ 对应的 $C_N$、$C_{x1}$ 及 $x_p$ 满足力矩平衡方程，则该 $\eta$ 值即为该条件下的配平攻角 $\eta_{tr}$。

### 弹道-升力式再入

弹道-升力式再入航天器通过将质心配置在偏离中心轴线的微小距离处（质心在压心之前），使航天器以配平攻角飞行时产生一定的升力。通过绕纵轴转动改变滚动角 $\gamma$，可控制升力在铅垂平面和水平平面的分量，从而在一定范围内控制着陆点位置。

## 应用价值

配平攻角是弹道-升力式再入航天器设计的核心参数。通过合理设计质心偏移量，可以确定所需的配平攻角，使航天器在再入过程中产生适当的升力，降低最大过载，提高着陆精度。Apollo飞船和Soyuz飞船均采用弹道-升力式再入方式。

## 相关概念

- [总攻角（Total Angle of Attack）](/glossary/fundamentals/total-angle-of-attack/)
- [零攻角再入（Zero-Angle-of-Attack Reentry）](/glossary/fundamentals/zero-angle-of-attack-reentry/)
- [再入走廊（Reentry Corridor）](/glossary/fundamentals/reentry-corridor/)
- [跳跃式再入（Skip Reentry）](/glossary/fundamentals/skip-reentry/)
- [升阻比（Lift-to-Drag Ratio）](/glossary/fundamentals/lift-to-drag-ratio/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
