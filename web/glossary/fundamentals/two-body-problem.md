---
title: 二体问题（Two-Body Problem）
description: 详细解析二体问题的定义、基本假设、运动微分方程及其在轨道力学中的基础地位
keywords: 二体问题, Two-Body Problem, 中心引力, 开普勒轨道, 运动微分方程, 引力常数
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 二体问题（Two-Body Problem）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 二体问题详解 | 术语定义
  description: 详细解析二体问题的定义、基本假设及运动微分方程
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 二体问题详解 | 术语定义
  description: 详细解析二体问题的定义、基本假设及运动微分方程
  image: /logo.png
permalink: /glossary/fundamentals/two-body-problem/
---

# 二体问题（Two-Body Problem）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

二体问题是天体力学中的基本问题，指两个天体（质点）仅在万有引力作用下的运动问题。对于近地空间飞行的空天飞行器，其在轨段运动可近似为二体问题：地球视为均质球体（点质量模型），飞行器视为质点，仅受中心引力作用。在此假设下，飞行器运动轨迹为开普勒轨道，对应二体运动特性是研究真实轨道力学的基础。

## 核心要素

### 基本假设

| 假设 | 说明 |
|:---|:---|
| 地球为均质球体 | 引力作用效果等价于质量集中于球心的质点 |
| 飞行器为质点 | 尺寸远小于地心距，可忽略 |
| 仅受中心引力 | 忽略大气阻力、第三体引力等摄动力 |

### 运动微分方程

在惯性坐标系中，飞行器相对地球的运动方程为：

$$\ddot{\boldsymbol{r}} + \frac{\mu_E}{r^3}\boldsymbol{r} = 0$$

其中 $\mu_E = GM_E = 3.986 \times 10^{14} \, \text{m}^3/\text{s}^2$ 为地球引力常数。该方程为六阶非线性常微分方程，需要6个独立积分常数（即轨道根数）才能完全求解。

### 首次积分

二体运动方程存在以下守恒量：

| 守恒量 | 数学表达 | 物理意义 |
|:---|:---|:---|
| 比动量矩 | $\boldsymbol{h} = \boldsymbol{r} \times \boldsymbol{v} = \text{const}$ | 轨道面方位恒定 |
| 比机械能 | $\varepsilon = \frac{1}{2}v^2 - \frac{\mu_E}{r} = \text{const}$ | 轨道尺寸恒定 |
| 偏心率矢量 | $\boldsymbol{e} = \frac{1}{\mu_E}\left(\boldsymbol{v} \times \boldsymbol{h} - \frac{\mu_E}{r}\boldsymbol{r}\right) = \text{const}$ | 轨道形状和指向恒定 |

## 应用价值

二体问题是轨道力学的理论基石。虽然真实轨道受地球非球形、大气阻力、日月引力等摄动影响，但二体解提供了零阶近似和参考轨道。轨道设计、轨道预报、轨道确定等核心问题均以二体模型为出发点。二体问题的结论可推广至绕任意中心天体的运动，只需替换对应的引力常数。

## 相关概念

- [轨道根数（Orbital Elements）](/glossary/fundamentals/orbital-elements/)
- [轨道方程（Orbital Equation）](/glossary/fundamentals/orbital-equation/)
- [活力公式（Vis-Viva Equation）](/glossary/fundamentals/vis-viva-equation/)
- [比动量矩（Specific Angular Momentum）](/glossary/fundamentals/specific-angular-momentum/)
- [开普勒方程（Kepler's Equation）](/glossary/fundamentals/kepler-equation/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
