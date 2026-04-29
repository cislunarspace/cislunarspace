---
title: 速度倾角（Velocity Inclination Angle）
description: 详细解析速度倾角的定义、与航迹偏航角的关系、速度方位角及在弹道设计中的意义
keywords: 速度倾角, Velocity Inclination, 航迹倾角, 速度方位角, 航迹偏航角, 弹道设计, 关机点
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 速度倾角（Velocity Inclination Angle）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 速度倾角（Velocity Inclination Angle）详解 | 术语定义
  description: 详细解析速度倾角的定义及在弹道设计中的意义
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 速度倾角（Velocity Inclination Angle）详解 | 术语定义
  description: 详细解析速度倾角的定义及在弹道设计中的意义
  image: /logo.png
permalink: /glossary/fundamentals/velocity-inclination-angle/
---

# 速度倾角（Velocity Inclination Angle）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

速度倾角（Velocity Inclination Angle, $\theta$）是速度矢量与发射坐标系水平面（$xoz$ 平面）之间的夹角，描述速度矢量在纵向平面内的方向。速度倾角是纵向运动方程的核心变量之一，垂直起飞时 $\theta = 90°$，关机点时 $\theta = \theta_k^*$。

## 核心要素

### 速度方向的描述

速度矢量在空间中的方向由两个角度确定：

| 角度 | 符号 | 定义 | 描述的运动 |
|:---|:---|:---|:---|
| 速度倾角 | $\theta$ | 速度矢量与水平面的夹角 | 纵向平面内上升/下降 |
| 航迹偏航角 | $\sigma$ | 速度矢量偏离射向平面的角度 | 侧向偏离 |

### 速度倾角的微分方程

速度倾角的变化规律由法向加速度方程描述：

$$\dot{\theta} = \frac{1}{mv}(P_e + C_y^\alpha q S_M)\alpha + \frac{g}{v}\cos\theta$$

其中第一项为推力和升力法向分量产生的角加速度，第二项为引力法向分量的影响。

### 速度方位角

速度方位角 $A$ 描述速度矢量在水平面内的投影与子午线正北方向的夹角：

$$\tan A = \frac{\dot{z}}{\dot{x}}$$

速度方位角与航迹偏航角 $\sigma$ 和射击方位角 $A_0$ 的关系为：

$$A = A_0 + \sigma$$

### 关机点速度倾角

关机点速度倾角 $\theta_k^*$ 是弹道设计的关键参数：
- 对于弹道导弹，$\theta_k^*$ 决定被动段射程
- 对于运载火箭，$\theta_k^*$ 决定入轨轨道倾角
- 最优速度倾角随射程变化，近程时接近 45°，远程时逐渐减小

## 应用价值

速度倾角是主动段弹道设计和飞行程序优化的核心变量。俯仰程序角的设计本质上就是控制速度倾角从 90°（垂直起飞）变化到关机点的期望值 $\theta_k^*$。对于弹道导弹，速度倾角的精度直接影响落点精度。对于运载火箭，速度倾角与速度大小共同决定入轨参数。

## 相关概念

- [速度坐标系（Velocity Frame）](/glossary/fundamentals/velocity-frame/)
- [俯仰程序角（Pitch Program）](/glossary/fundamentals/pitch-program/)
- [纵向运动（Longitudinal Motion）](/glossary/fundamentals/longitudinal-lateral-motion/)
- [主动段弹道方程（Trajectory Equation）](/glossary/fundamentals/trajectory-equation/)
- [主动段（Powered Phase）](/glossary/fundamentals/powered-phase/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
