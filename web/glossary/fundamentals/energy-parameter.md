---
title: 能量参数（Energy Parameter）
description: 详细解析能量参数的定义、物理含义、与轨道类型的关系及在弹道计算中的应用
keywords: 能量参数, Energy Parameter, 比机械能, 能量比, 弹道形状, 轨道类型
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 能量参数（Energy Parameter）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 能量参数详解 | 术语定义
  description: 详细解析能量参数的定义及在弹道计算中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 能量参数详解 | 术语定义
  description: 详细解析能量参数的定义及在弹道计算中的应用
  image: /logo.png
permalink: /glossary/fundamentals/energy-parameter/
---

# 能量参数（Energy Parameter）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

能量参数 $\gamma$ 是描述飞行器在某一位置处速度与当地圆轨道速度之比的无量纲参数：

$$\gamma = \frac{v^2 r}{\mu_E} = \frac{v^2}{v_{\text{circle}}^2}$$

其中 $v$ 为速度大小，$r$ 为地心距，$\mu_E$ 为地球引力常数，$v_{\text{circle}} = \sqrt{\mu_E/r}$ 为当地圆轨道速度。能量参数直接反映了飞行器的机械能状态。

## 核心要素

### 与比机械能的关系

能量参数与比机械能 $\varepsilon$ 和半长轴 $a$ 的关系：

$$\gamma = 2 - \frac{r}{a}, \quad \varepsilon = -\frac{\mu_E}{2a} = \frac{v^2}{2} - \frac{\mu_E}{r}$$

因此 $\gamma_k = 2r_k/r_{k,\text{circle}} = v_k^2 r_k / \mu_E$。

### 与轨道类型的对应关系

| 轨道类型 | 能量参数范围 | 半长轴 | 比机械能 |
|:---|:---|:---|:---|
| 圆轨道 | $\gamma = 1$ | $a = r$ | $\varepsilon < 0$ |
| 椭圆轨道 | $0 < \gamma < 2$ | $a > 0$ | $\varepsilon < 0$ |
| 抛物线轨道 | $\gamma = 2$ | $a \to \infty$ | $\varepsilon = 0$ |
| 双曲线轨道 | $\gamma > 2$ | $a < 0$ | $\varepsilon > 0$ |

### 在弹道参数计算中的作用

能量参数是弹道计算的核心中间变量，出现在多个关键公式中：

| 公式 | 表达式 |
|:---|:---|
| 半通径 | $p = r_k \gamma_k \cos^2\Theta_k$ |
| 偏心率 | $e = \sqrt{1 - \gamma_k(2-\gamma_k)\cos^2\Theta_k}$ |
| 半长轴 | $a = r_k / (2 - \gamma_k)$ |
| 自由段角射程 | $\sin(\beta_{ke}/2) = \gamma_k \sin 2\Theta_k / (2e)$ |

### 与主动段终点参数的关系

在主动段终点 K 处，能量参数完全由速度大小 $v_k$ 和地心距 $r_k$ 确定：

$$\gamma_k = \frac{v_k^2 r_k}{\mu_E}$$

其偏导数为：

$$\frac{\partial\gamma_k}{\partial v_k} = \frac{2\gamma_k}{v_k}, \quad \frac{\partial\gamma_k}{\partial r_k} = \frac{\gamma_k}{r_k}$$

## 应用价值

能量参数是连接速度、位置与轨道形状的桥梁。通过能量参数，可以快速判断飞行器的轨道类型，简化弹道方程的表达形式。在命中方程、射程误差系数、飞行时间等计算中，能量参数都是核心中间变量。导弹设计中，能量参数的大小直接反映了关机点的速度能量状态。

## 相关概念

- [活力公式（Vis-Viva Equation）](/glossary/fundamentals/vis-viva-equation/)
- [自由段弹道（Free-Flight Trajectory）](/glossary/fundamentals/free-flight-trajectory/)
- [命中方程（Hit Equation）](/glossary/fundamentals/hit-equation/)
- [轨道根数（Orbital Elements）](/glossary/fundamentals/orbital-elements/)
- [比动量矩（Specific Angular Momentum）](/glossary/fundamentals/specific-angular-momentum/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
