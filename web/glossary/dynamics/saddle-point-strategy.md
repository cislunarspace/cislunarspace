---
title: 鞍点策略（Saddle-Point Strategy）
description: 鞍点策略是零和微分对策中双方的最优策略组合，在该策略下任何单方面偏离都会导致自身收益下降。
wechatShare:
  title: 鞍点策略（Saddle-Point Strategy）
  desc: 鞍点策略是零和微分对策中双方的最优策略组合，在该策略下任何单方面偏离都会导致自身收益下降。
  image: /logo.png
keywords: 鞍点策略, Saddle-Point Strategy, 微分对策, 零和博弈, 最优控制, 追逃博弈
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: 鞍点策略（Saddle-Point Strategy）| 博弈论
  description: 零和微分对策中的最优策略组合，追逃博弈中追踪方和逃逸方的最优控制法则
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 鞍点策略（Saddle-Point Strategy）| 博弈论
  description: 零和微分对策中的最优策略组合，追逃博弈中追踪方和逃逸方的最优控制法则
  image: /logo.png
permalink: /glossary/dynamics/saddle-point-strategy/
---

# 鞍点策略（Saddle-Point Strategy）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文根据张乘铭(2021)《航天器追逃博弈制导策略研究》整理。

## 定义

在零和微分对策中，鞍点策略是指博弈双方的最优策略组合。当双方均采用鞍点策略时，任何单方面改变策略都会导致自身收益下降（对追踪方）或上升（对逃逸方）。鞍点代表了博弈的平衡状态，是该类问题的解。

## 数学表述

### 零和博弈框架

设追踪方控制为 $\boldsymbol{U}_p$，逃逸方控制为 $\boldsymbol{U}_e$，性能指标（支付函数）为 $J$。追踪方最小化 $J$，逃逸方最大化 $J$：

$$\min_{\boldsymbol{U}_p} \max_{\boldsymbol{U}_e} J = \max_{\boldsymbol{U}_e} \min_{\boldsymbol{U}_p} J = J^*$$

### 鞍点条件

策略对 $(\boldsymbol{U}_p^*, \boldsymbol{U}_e^*)$ 为鞍点，当且仅当：
$$J(\boldsymbol{U}_p^*, \boldsymbol{U}_e) \leq J(\boldsymbol{U}_p^*, \boldsymbol{U}_e^*) \leq J(\boldsymbol{U}_p, \boldsymbol{U}_e^*)$$

对所有容许控制 $\boldsymbol{U}_p, \boldsymbol{U}_e$ 成立。

## 航天器追逃中的鞍点策略

### 问题建模

基于微分对策理论，航天器追逃问题转化为两点边值问题。根据极小值原理，鞍点控制策略满足：

$$\frac{\partial H}{\partial \boldsymbol{U}_p} = 0, \quad \frac{\partial^2 H}{\partial \boldsymbol{U}_p^2} \geq 0$$
$$\frac{\partial H}{\partial \boldsymbol{U}_e} = 0, \quad \frac{\partial^2 H}{\partial \boldsymbol{U}_e^2} \leq 0$$

其中 $H$ 为哈密顿函数。

### 控制方程

对于CW方程描述的近圆轨道追逃问题，鞍点控制策略为：

$$\sin\alpha_i^* = \kappa \frac{\lambda_{i5}}{\sqrt{\lambda_{i4}^2 + \lambda_{i5}^2}}$$
$$\cos\alpha_i^* = \kappa \frac{\lambda_{i4}}{\sqrt{\lambda_{i4}^2 + \lambda_{i5}^2}}$$

其中 $\kappa = -1$（追踪方）或 $+1$（逃逸方），$\lambda_i$ 为协态变量。

### 关键性质

- **一致性**：追踪方与逃逸方的鞍点推力方向相同
- **对偶性**：双方协态变量满足 $\lambda_p(t) + \lambda_e(t) = 0$
- **可达域边界**：鞍点策略对应的轨迹位于可达域边界

## 求解难点

### 初值敏感性

两点边值问题的求解对协态变量初始猜测高度敏感，不同初值可能导致收敛到不同解或发散。

### 计算效率

传统数值优化方法（打靶法、牛顿迭代法等）计算效率较低，难以满足实时应用需求。

### 非唯一性

同一初始状态可能对应多个可行的协态变量组合，需要通过归一化等方法消除不唯一性。

## 求解方法进展

### 协态变量归一化

通过归一化协态变量，将无穷多组解映射到单位球面，得到唯一解表示。

### 深度学习方法

- **DRD算法**：利用深度神经网络拟合初始状态与鞍点解的映射关系
- **DNN-伪谱法**：神经网络输出作为伪谱法的初始猜测，加速收敛

### 组合优化方法

结合传统优化算法（遗传算法、序列二次规划）与神经网络，提高求解精度和效率。

## 与博弈论概念的关系

| 概念 | 含义 |
| :--- | :--- |
| 鞍点 | 博弈的平衡解 |
| 极大极小原则 | 逃逸方最大化、追踪方最小化 |
| 支付函数 | 追逃时间的函数 |
| 策略 | 追踪/逃逸控制序列 |

## 应用价值

鞍点策略是航天器追逃博弈的核心解概念，为以下问题提供理论基础：

- 空间对抗中的最优机动策略设计
- 交会对接中非合作目标的接近轨迹规划
- 导弹拦截的制导律设计

## 参考文献

- Isaacs R. Differential Games: A Mathematical Theory with Applications to Warfare and Pursuit, Optimization and Control[M]. John Wiley & Sons, 1965.
- 张乘铭. 航天器追逃博弈制导策略研究[D]. 国防科技大学, 2021.
- Başar T, Olsder G J. Dynamic Noncooperative Game Theory[M]. Academic Press, 1999.
