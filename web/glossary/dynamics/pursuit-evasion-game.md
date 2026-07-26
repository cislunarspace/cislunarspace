---
title: 航天器追逃博弈（Spacecraft Pursuit-Evasion Game）
description: 航天器追逃博弈是研究追踪航天器与逃逸航天器之间对抗性机动的轨道动力学问题，应用于空间安全、交会对接等领域。
wechatShare:
  title: 航天器追逃博弈（Spacecraft Pursuit-Evasion Game）
  desc: 航天器追逃博弈是研究追踪航天器与逃逸航天器之间对抗性机动的轨道动力学问题，应用于空间安全、交会对接等领域。
  image: /logo.png
keywords: 航天器追逃博弈, Pursuit-Evasion Game, 轨道追逃, 微分对策, 鞍点策略, 零控脱靶量
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: 航天器追逃博弈（Spacecraft Pursuit-Evasion Game）| 轨道动力学
  description: 研究追踪与逃逸航天器对抗性机动的动力学问题，应用于空间安全态势感知
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 航天器追逃博弈（Spacecraft Pursuit-Evasion Game）| 轨道动力学
  description: 研究追踪与逃逸航天器对抗性机动的动力学问题，应用于空间安全态势感知
  image: /logo.png
permalink: /glossary/dynamics/pursuit-evasion-game/
---

# 航天器追逃博弈（Spacecraft Pursuit-Evasion Game）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文根据张乘铭(2021)《航天器追逃博弈制导策略研究》整理。

## 定义

航天器追逃博弈是空间安全领域的研究热点问题，研究具有机动能力的在轨航天器之间的对抗性机动问题。追踪航天器期望以最小代价接近目标航天器并完成捕获任务，逃逸航天器则采取相应策略避免被抓捕。该问题本质是一个双边控制的连续动态博弈对抗问题，区别于合作式交会对接，需要考虑追逃双方的策略博弈。

## 问题分类

航天器追逃问题可按不同维度分类：

| 分类标准 | 类型 |
| :--- | :--- |
| 轨道类型 | 近圆轨道追逃、椭圆轨道追逃 |
| 推力形式 | 连续小推力追逃、脉冲推力追逃 |
| 玩家人数 | 双人追逃、多航天器追逃 |
| 目标函数 | 零和追逃、非零和追逃 |
| 博弈时间 | 固定时间追逃、自由时间追逃 |
| 相对距离 | 远距离轨道追逃、近距离轨道追逃 |

## 动力学研究方法

### CW方程描述

近距离追逃问题通常采用CW方程（Clohessy-Wiltshire方程）描述两航天器的相对运动。CW方程适用于近圆轨道、相对距离远小于轨道半长轴的场景。

### 状态方程

在LVLH坐标系下，航天器状态量为 $\boldsymbol{X} = [x, y, z, \dot{x}, \dot{y}, \dot{z}]^T$，状态方程为：
$$\dot{\boldsymbol{X}}_i = \boldsymbol{A}\boldsymbol{X}_i + T_i\boldsymbol{B}\boldsymbol{U}_i$$

其中 $\boldsymbol{U}_i = [\cos\alpha_i\cos\beta_i, \sin\alpha_i\cos\beta_i, \sin\beta_i]^T$ 为控制变量，$\alpha_i, \beta_i$ 为推力方向角。

### 目标函数

自由时间追逃问题的典型目标函数为：
$$J = J_p = -J_e = \int_0^{t_f} 1 \, dt$$

即最小化追逃时间（对追踪方）或最大化追逃时间（对逃逸方）。

## 求解方法

### 微分对策方法

基于微分对策理论，将追逃问题建模为零和博弈问题，通过推导鞍点策略的必要条件，得到两点边值问题。典型求解方法包括：

- **协态变量归一化**：消除鞍点解的不唯一性
- **降维处理**：将高维两点边值问题转化为低维优化问题
- **半直接法**：利用一方的解析必要条件降低问题维度

### 深度学习方法

近年来，深度神经网络在解决追逃问题上显示出应用前景：

- **DRD算法**：基于降维-DNN的近圆轨道追逃问题求解
- **DNN-伪谱法**：基于深度神经网络的Radau伪谱法
- **组合优化方法**：结合传统优化算法与神经网络

### 数值求解方法

- 打靶法（Shooting Method）及改进算法
- 伪谱法（Pseudospectral Method）
- 遗传算法、粒子群算法等全局优化算法
- 多点打靶法与序列二次规划的混合方法

## 典型应用场景

- **空间态势感知**：对非合作目标（如失效卫星、空间碎片）的接近操作
- **太空对抗**：轨道攻防博弈中的策略设计
- **在轨服务**：卫星检查、维修、燃料补给等任务中的相对机动
- **交会对接**：虽以合作为主，但博弈分析可增强任务安全性

## 发展前沿

- 多航天器追逃问题（追踪方或逃逸方内部出现合作或竞争关系）
- 考虑轨道摄动（$J_2$摄动、大气阻力等）的追逃问题
- 深度强化学习在追逃博弈中的应用
- 追逃防三体问题（引入防御方的复杂博弈场景）

## 参考文献

- 张乘铭. 航天器追逃博弈制导策略研究[D]. 国防科技大学, 2021.
- Isaacs R. Differential Games: A Mathematical Theory with Applications to Warfare and Pursuit, Optimization and Control[M]. John Wiley & Sons, 1965.
- Lachner R, et al. Air Combat Analysis Using Differential Games[C]. AIAA Guidance, Navigation, and Control Conference, 1999.
