---
title: 俯仰程序角（Pitch Program Angle）
description: 详细解析俯仰程序角的定义、飞行程序三阶段（垂直段、转弯段、瞄准段）及在弹道设计中的作用
keywords: 俯仰程序角, Pitch Program, 飞行程序, 垂直段, 转弯段, 瞄准段, 主动段, 弹道设计
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 俯仰程序角（Pitch Program Angle）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 俯仰程序角（Pitch Program Angle）详解 | 术语定义
  description: 详细解析俯仰程序角的定义、飞行程序三阶段及在弹道设计中的作用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 俯仰程序角（Pitch Program Angle）详解 | 术语定义
  description: 详细解析俯仰程序角的定义、飞行程序三阶段及在弹道设计中的作用
  image: /logo.png
permalink: /glossary/fundamentals/pitch-program/
---

# 俯仰程序角（Pitch Program Angle）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

俯仰程序角（Pitch Program Angle, $\varphi_{pr}$）是控制系统预设的飞行器俯仰角期望值随时间的变化规律，是主动段飞行程序设计的核心内容。俯仰程序角决定了飞行器的速度矢量方向如何从垂直起飞状态调整到关机点所需的期望角度。

## 核心要素

### 飞行程序三阶段

俯仰程序角通常分为三个阶段：

| 阶段 | 时间范围 | 俯仰程序角 | 物理意义 |
|:---|:---|:---|:---|
| 垂直段 | $0 \sim t_1$ | $\varphi_{pr} = 90°$ | 垂直起飞，快速穿越稠密大气 |
| 转弯段 | $t_1 \sim t_2$ | 从 90° 逐渐减小 | 速度矢量从垂直转向目标方向 |
| 瞄准段 | $t_2 \sim t_k$ | 保持转弯段末值不变 | 维持期望速度方向，精调速度大小 |

### 控制方程

俯仰程序角通过控制方程驱动飞行器姿态：

$$\delta_\varphi = a_0^\varphi (\varphi - \varphi_{pr})$$

其中 $\delta_\varphi$ 为控制偏转角，$a_0^\varphi$ 为控制增益，$\varphi$ 为实际俯仰角。当实际俯仰角偏离程序角时，控制系统产生控制力矩使飞行器转动。

### 转弯段的设计

转弯段是飞行程序设计的关键。转弯段的设计需满足：
- 关机点速度倾角 $\theta_k^*$ 满足射程或入轨要求
- 攻角不超过气动载荷限制
- 过载系数不超过结构强度限制
- 飞行高度不低于安全最低高度

转弯段的速率决定了攻角大小：转弯越快，攻角越大，气动载荷越大。

## 应用价值

俯仰程序角是主动段弹道设计的核心参数。不同的飞行任务（射程、轨道类型）对应不同的俯仰程序角。程序角的设计直接影响关机点参数、飞行过载和气动载荷。对于运载火箭，程序角设计还需考虑入轨精度和末速方向。程序角的优化是弹道优化的主要内容之一。

## 相关概念

- [主动段弹道方程（Trajectory Equation）](/glossary/fundamentals/trajectory-equation/)
- [瞬时平衡假设（Instantaneous Balance）](/glossary/fundamentals/instantaneous-balance/)
- [体坐标系（Body Frame）](/glossary/fundamentals/body-frame/)
- [过载（Load Factor）](/glossary/fundamentals/load-factor/)
- [主动段（Powered Phase）](/glossary/fundamentals/powered-phase/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
