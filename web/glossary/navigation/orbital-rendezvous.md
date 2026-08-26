---
title: 轨道交会（Orbital Rendezvous）
description: 两个或多个航天器在特定引力场中通过轨道机动消除相对空间位置与速度偏差以实现精准汇合或对接的飞行动力学过程。
keywords: 轨道交会, Orbital Rendezvous, 轨道机动, 相对导航, 空间交会对接
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 轨道交会（Orbital Rendezvous）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/navigation/orbital-rendezvous/
---

# 轨道交会（Orbital Rendezvous）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

轨道交会（Orbital Rendezvous）是指追踪航天器通过实施一系列自主或地面导引的轨道机动，改变自身轨道几何参数与沿轨相位，最终在预定时刻与目标航天器汇合于同一空间轨道位置并消除两者相对运动速度矢量的完整受控动力学飞行过程。

## 物理机制与工程价值

在地月空间多引力体非自治动力学环境中，轨道交会面临多天体引力梯度耦合与强非线性摄动的复杂力学约束：

1. 变轨弧段设计与多脉冲寻优：无法简单沿用二体开普勒霍曼转移模型，必须通过三体兰伯特多脉冲算法、不变流形管拓扑匹配或序列二次规划进行全弹道寻优；
2. 远程导引与终端逼近衔接：交会过程通常划分为相位调整段、远距离导引段、近距离逼近段与最终平移靠拢段。各阶段需要协同切换测角、测距及相对激光雷达测量模式；
3. 安全走廊与避撞裕度：考虑地月引力摄动引起的不确定度快速扩散，机动轨迹规划必须引入被动安全漂移椭圆与禁飞锥体约束，防止点火故障引发灾难性碰撞。

轨道交会技术是执行月球样品在轨转移、地月空间站组装建造与航天员往返救援的通用关键技术支撑。

## 相关概念

- [Halo轨道交会（Halo Orbit Rendezvous）](/glossary/navigation/halo-orbit-rendezvous/)
- [参考轨道（Reference Orbit）](/glossary/navigation/reference-orbit/)
- [接近段（Approach Phase）](/glossary/orbits/approach-phase/)
- [双脉冲交会（Two-Impulse Rendezvous）](/glossary/dynamics/two-impulse-rendezvous/)

## 参考文献

- Fehse, W. Automated Rendezvous and Docking of Spacecraft. Cambridge University Press, 2003.
- Luo, Y. Z., Zhang, J., & Li, H. Y. Survey on orbital rendezvous and proximity operations for space missions. Chinese Journal of Aeronautics, 2014, 27(1): 1-11.
