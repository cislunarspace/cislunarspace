---
title: 瞬时平衡假设（Instantaneous Balance Assumption）
description: 详细解析瞬时平衡假设的定义、物理含义、数学表达及在弹道简化计算中的应用
keywords: 瞬时平衡假设, Instantaneous Balance, 力矩平衡, 弹道简化, 控制方程, 攻角
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 瞬时平衡假设（Instantaneous Balance Assumption）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 瞬时平衡假设详解 | 术语定义
  description: 详细解析瞬时平衡假设的定义、物理含义及在弹道简化计算中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 瞬时平衡假设详解 | 术语定义
  description: 详细解析瞬时平衡假设的定义、物理含义及在弹道简化计算中的应用
  image: /logo.png
permalink: /glossary/fundamentals/instantaneous-balance/
---

# 瞬时平衡假设（Instantaneous Balance Assumption）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

瞬时平衡假设是主动段弹道简化计算中的重要假设，认为控制系统设计良好，火箭在任意时刻都处于力矩平衡状态，即作用在飞行器上的气动力矩与控制力矩瞬时平衡。该假设将绕质心运动与质心运动解耦，大幅简化了弹道方程。

## 核心要素

### 物理含义

瞬时平衡假设意味着：

- 飞行器没有绕质心的角加速度
- 气动力矩与控制力矩在任意时刻平衡
- 攻角 $\alpha$ 和侧滑角 $\beta$ 由控制偏转角 $\delta$ 直接确定
- 绕质心运动的动力学方程退化为代数方程

### 数学表达

根据瞬时平衡假设，控制偏转角与攻角的关系为：

$$\delta_\varphi = -\frac{M_{z1}^\alpha}{M_{z1}^\delta} \alpha = -\frac{Y_1^\alpha(x_g - x_p)}{R'(x_g - x_c)} \alpha$$

其中 $M_{z1}^\alpha$ 为气动力矩对攻角的导数，$M_{z1}^\delta$ 为控制力矩对偏转角的导数，$x_g$、$x_p$、$x_c$ 分别为质心、压心和控制力作用点到头部的距离。

### 引入的误差

瞬时平衡假设忽略了：

- 绕质心运动的动态过渡过程
- 姿态角速度和角加速度的影响
- 控制系统的延迟和超调

这些误差在控制系统性能良好时为小量，对质心运动参数的影响通常在工程允许范围内。

## 应用价值

瞬时平衡假设是主动段弹道简化计算的基础。通过该假设，6 自由度运动方程可简化为 3 自由度质心运动方程，大幅降低计算复杂度。在飞行器方案论证和初步设计阶段，瞬时平衡假设使得在参数未完全确定时即可进行弹道估算。该假设也是纵向运动和侧向运动解耦的前提条件。

## 相关概念

- [主动段弹道方程（Trajectory Equation）](/glossary/fundamentals/trajectory-equation/)
- [纵向运动（Longitudinal Motion）](/glossary/fundamentals/longitudinal-lateral-motion/)
- [空气动力矩（Aerodynamic Moment）](/glossary/fundamentals/aerodynamic-moment/)
- [压力中心（Center of Pressure）](/glossary/fundamentals/pressure-center/)
- [体坐标系（Body Frame）](/glossary/fundamentals/body-frame/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
