---
title: 比动量矩（Specific Angular Momentum）
description: 详细解析比动量矩的定义、物理意义、守恒性质及其在轨道面描述中的作用
keywords: 比动量矩, Specific Angular Momentum, 动量矩守恒, 轨道面, 面积积分, 开普勒第二定律
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 比动量矩（Specific Angular Momentum）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 比动量矩详解 | 术语定义
  description: 详细解析比动量矩的定义、守恒性质及在轨道面描述中的作用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 比动量矩详解 | 术语定义
  description: 详细解析比动量矩的定义、守恒性质及在轨道面描述中的作用
  image: /logo.png
permalink: /glossary/fundamentals/specific-angular-momentum/
---

# 比动量矩（Specific Angular Momentum）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

比动量矩（Specific Angular Momentum, $\boldsymbol{h}$）是二体运动中单位质量的动量矩，定义为位置矢量与速度矢量的叉积：

$$\boldsymbol{h} = \boldsymbol{r} \times \boldsymbol{v}$$

比动量矩垂直于瞬时运动平面，其方向描述轨道面在惯性空间的方位，其大小 $h = rv\cos\Theta$ 与面积速度成正比（$h = 2\dot{S}$），即开普勒第二定律的数学表述。

## 核心要素

### 守恒性质

在二体问题中，对 $\boldsymbol{h}$ 求导可得：

$$\frac{d\boldsymbol{h}}{dt} = \boldsymbol{v} \times \boldsymbol{v} + \boldsymbol{r} \times \ddot{\boldsymbol{r}} = \boldsymbol{0}$$

因此比动量矩为惯性空间常矢量，二体系统动量矩守恒。这意味着飞行器始终在过地心的固定平面内运动。

### 与轨道根数的关系

比动量矩的三个分量 $h_X, h_Y, h_Z$ 是求解二体运动方程的三个积分常数，可等价替换为：

| 参数 | 定义 | 描述的特性 |
| :--- | :--- | :--- |
| 轨道倾角 $i$ | $\cos i = h_Z / h$ | 轨道面与赤道面的夹角 |
| 升交点赤经 $\Omega$ | 由 $h_X, h_Y$ 确定 | 轨道面在赤道面内的方位 |
| 比动量矩大小 $h$ | $h = \|\boldsymbol{h}\|$ | 与轨道尺寸相关 |

### 面积速度

比动量矩大小与面积速度的关系为：

$$h = 2\frac{dS}{dt} = 2\dot{S}$$

面积速度恒定即开普勒第二定律，说明飞行器在近地点运动最快、远地点运动最慢。

## 应用价值

比动量矩是描述轨道面方位的核心参数，也是推导轨道方程、活力公式的基础。通过比动量矩守恒，可确定轨道面在惯性空间的指向，进而定义轨道倾角和升交点赤经。比动量矩的大小还决定了轨道的半通径 $p = h^2/\mu_E$，间接反映轨道的尺寸。

## 相关概念

- [二体问题（Two-Body Problem）](/glossary/fundamentals/two-body-problem/)
- [轨道根数（Orbital Elements）](/glossary/fundamentals/orbital-elements/)
- [轨道方程（Orbital Equation）](/glossary/fundamentals/orbital-equation/)
- [活力公式（Vis-Viva Equation）](/glossary/fundamentals/vis-viva-equation/)
- [真近点角（True Anomaly）](/glossary/fundamentals/true-anomaly/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
