---
title: 欧拉角式（Euler Angle Form）
description: 用三个欧拉角描述卫星相对于参考坐标的姿态。
keywords: 欧拉角式, Euler Angle Form, 姿态描述, 欧拉角, 姿态动力学, 卫星姿态
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 欧拉角式（Euler Angle Form）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 欧拉角式详解 | 术语定义
  description: 用三个欧拉角描述卫星相对于参考坐标的姿态。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 欧拉角式详解 | 术语定义
  description: 用三个欧拉角描述卫星相对于参考坐标的姿态。
  image: /logo.png
permalink: /glossary/dynamics/euler-angle-form/
---

# 欧拉角式（Euler Angle Form）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

用三个欧拉角描述卫星相对于参考坐标的姿态。

## 应用价值

欧拉角是卫星姿态表示中最直观的参数，工程师可以直接从姿态控制回路中读取翻滚、俯仰和偏航角度。在卫星与空间站对接、航天器对地观测或载荷指向等任务中，欧拉角式提供了物理含义清晰的状态表示，便于控制律设计和指令编排。在姿态轨道耦合较强的地月转移段，姿态控制需要与轨道控制协同设计，欧拉角式的姿态参数便于与轨道六要素进行联合滤波估计。但需要注意的是，欧拉角存在奇异性（万向节锁），在赤道附近的姿态会出现姿态矩阵不唯一的问题，需要选择合适的欧拉轴序来规避。

## 相关概念

- [姿态控制（Attitude Control）](/glossary/dynamics/attitude-control/)
- [姿态动力学（Attitude Dynamics）](/glossary/dynamics/attitude-dynamics/)
- [四元数（Quaternion）](/glossary/dynamics/quaternion/)
- [姿态机动（Attitude Maneuver）](/glossary/dynamics/attitude-maneuver/)

## 参考文献

- 章仁为 - 1998 - 卫星轨道姿态动力学与控制
