---
title: 轨道机动（Orbital Maneuver）
description: 详细解析轨道机动的分类、推力模型及机动方法
keywords: 轨道机动, Orbital Maneuver, 轨道改变, 轨道转移, 轨道调整, 脉冲推力, 有限推力
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 轨道机动（Orbital Maneuver）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 轨道机动详解 | 术语定义
  description: 详细解析轨道机动的分类及推力模型
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 轨道机动详解 | 术语定义
  description: 详细解析轨道机动的分类及推力模型
  image: /logo.png
permalink: /glossary/fundamentals/orbital-maneuver/
---

# 轨道机动（Orbital Maneuver）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

轨道机动是空天飞行器利用火箭发动机推力或环境外力主动改变飞行轨道的过程。与自然天体的被动运动不同，轨道机动是航天器特有的主动运动能力，是实现轨道改变、轨道转移和轨道调整等任务的基础手段。

## 核心要素

### 按机动任务分类

| 类型 | 说明 | 特征 |
| :--- | :--- | :--- |
| 轨道改变 | 初始轨道与最终轨道存在交点，冲量在交点处施加 | 一次大冲量，轨道根数较大变化 |
| 轨道转移 | 经转移轨道从初始轨道进入最终轨道，两轨道无交点 | 至少两次冲量 |
| 轨道调整 | 小冲量改变轨道根数的微小偏差 | 轨道捕获、轨道保持等 |

### 按推力作用时间分类

| 类型 | 说明 |
| :--- | :--- |
| 脉冲推力机动 | 推力充分大，瞬间获得速度增量，位置不变而速度跳变 |
| 有限推力机动 | 推力有限，需经历一段时间才能获得所需速度增量 |

### 脉冲推力模型

$$\Delta v = - I_{sp} g_0 \cdot \ln\left(1 - \frac{\Delta m}{m_0}\right)$$

其中 $I_{sp}$ 为发动机比冲，$m_0$ 为变轨前总质量。

### 有限推力模型

推力 $F$ 和比冲 $I_{sp}$ 恒定时，推力作用时间：

$$\Delta t = \frac{m_0 I_{sp} g_0}{F} \left[1 - \exp\left(-\frac{\Delta v}{I_{sp} g_0}\right)\right]$$

点火时刻为 $t_c - \Delta t/2$，关机时刻为 $t_c + \Delta t/2$。

## 应用价值

轨道机动是航天任务中最核心的操作之一。地球同步卫星入轨、空间站交会对接、行星际探测轨道设计、卫星编队飞行等都依赖精确的轨道机动规划。脉冲推力假设可满足大多数机动轨道初步设计的精度要求，而有限推力模型则用于高精度的机动参数计算。

## 相关概念

- [霍曼转移（Hohmann Transfer）](/glossary/fundamentals/hohmann-transfer/)
- [双椭圆转移（Bi-Elliptic Transfer）](/glossary/fundamentals/bi-elliptic-transfer/)
- [特征速度（Characteristic Velocity）](/glossary/fundamentals/characteristic-velocity/)
- [轨道捕获（Orbit Capture）](/glossary/fundamentals/orbit-capture/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
