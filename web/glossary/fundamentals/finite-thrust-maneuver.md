---
title: 有限推力轨道机动（Finite Thrust Maneuver）
description: 详细解析有限推力轨道机动的最优控制模型、哈密顿函数及庞特里亚金极小值原理
keywords: 有限推力轨道机动, Finite Thrust Maneuver, 最优控制, 哈密顿函数, 庞特里亚金极小值原理, 开关函数
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 有限推力轨道机动（Finite Thrust Maneuver）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 有限推力轨道机动详解 | 术语定义
  description: 详细解析有限推力轨道机动的最优控制模型
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 有限推力轨道机动详解 | 术语定义
  description: 详细解析有限推力轨道机动的最优控制模型
  image: /logo.png
permalink: /glossary/fundamentals/finite-thrust-maneuver/
---

# 有限推力轨道机动（Finite Thrust Maneuver）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

有限推力轨道机动是考虑发动机推力大小有限、作用时间非瞬间的轨道机动。与脉冲推力假设不同，有限推力机动需要求解两点边值问题（TPBVP）得到最优控制律，通过庞特里亚金极小值原理确定推力方向和开关策略。

## 核心要素

### 最优控制模型

系统动态模型：

$$\dot{\boldsymbol{X}} = f(\boldsymbol{X}, \boldsymbol{u}, t)$$

性能指标：

$$J = \phi[\boldsymbol{X}(t_f), t_f] + \int_{t_0}^{t_f} L(\boldsymbol{X}, \boldsymbol{u}, t)\,dt$$

### 哈密顿函数

$$H = L(\boldsymbol{X}, \boldsymbol{u}, t) + \boldsymbol{\lambda}^T f(\boldsymbol{X}, \boldsymbol{u}, t)$$

状态方程 $\dot{\boldsymbol{X}} = \partial H / \partial \boldsymbol{\lambda}$，协态方程 $\dot{\boldsymbol{\lambda}} = -\partial H / \partial \boldsymbol{X}$。

### 庞特里亚金极小值原理

对有约束控制的最优性条件：

$$H(\boldsymbol{X}^*, \boldsymbol{u}^*, \boldsymbol{\lambda}^*, t) \leq H(\boldsymbol{X}^*, \boldsymbol{u}^* + \delta\boldsymbol{u}, \boldsymbol{\lambda}^*, t)$$

### 最优控制律

基于笛卡尔坐标的最优推力方向：

$$\boldsymbol{\alpha}^* = -\frac{\boldsymbol{\lambda}_v}{\|\boldsymbol{\lambda}_v\|}$$

即推力方向与速度协态方向相反。

### 开关函数

$$H_T = -\frac{\|\boldsymbol{\lambda}_v\|}{m} - \lambda_m \frac{1}{gI_{sp}}$$

- $H_T > 0$：$T = 0$（发动机关闭）
- $H_T < 0$：$T = T_{\max}$（发动机全推力）
- $H_T = 0$：$0 < T < T_{\max}$（弧段推力）

### 质量方程

$$\dot{m} = -\frac{T}{gI_{sp}}$$

## 应用价值

有限推力轨道机动方法适用于太阳能电推进（SEP）等小推力推进系统的轨道设计。该方法通过求解TPBVP得到最优推力策略，可实现燃料最优或时间最优的轨道转移。随着小推力推进技术的发展，有限推力机动方法在深空探测和长期在轨任务中的应用日益广泛。

## 相关概念

- [轨道机动（Orbital Maneuver）](/glossary/fundamentals/orbital-maneuver/)
- [特征速度（Characteristic Velocity）](/glossary/fundamentals/characteristic-velocity/)
- [比冲（Specific Impulse）](/glossary/fundamentals/specific-impulse/)
- [轨道捕获（Orbit Capture）](/glossary/fundamentals/orbit-capture/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
