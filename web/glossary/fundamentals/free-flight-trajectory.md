---
title: 自由段弹道（Free-Flight Trajectory）
description: 详细解析自由段弹道的定义、与主动段终点参数的关系、弹道形状条件及在弹道导弹中的应用
keywords: 自由段弹道, Free-Flight Trajectory, 主动段终点, 关机点, 弹道形状, 二体问题
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 自由段弹道（Free-Flight Trajectory）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 自由段弹道详解 | 术语定义
  description: 详细解析自由段弹道的定义及与主动段终点参数的关系
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 自由段弹道详解 | 术语定义
  description: 详细解析自由段弹道的定义及与主动段终点参数的关系
  image: /logo.png
permalink: /glossary/fundamentals/free-flight-trajectory/
---

# 自由段弹道（Free-Flight Trajectory）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

自由段弹道是空天飞行器在发动机关机后无动力、无控制的自由飞行阶段的运动轨迹。由于自由段几乎处于真空状态，不受空气动力作用，可将其视为质量集中于质心的质点，仅考虑地球中心引力的作用，即二体运动问题。自由段运动轨迹为惯性空间方位、尺寸、形状、指向保持不变的圆锥曲线弹道。

## 核心要素

### 与主动段终点参数的关系

自由段弹道的惯性方位、尺寸、形状和指向完全由主动段终点（关机点）K 处的位置 $\boldsymbol{r}_k$ 和速度 $\boldsymbol{v}_k$ 决定。由于自由段飞行时间不足一个轨道周期，弹道可从三维退化为二维平面弹道，对应参数简化为：

| 参数 | 符号 | 含义 |
|:---|:---|:---|
| 半通径 | $p$ | $p = r_k \gamma_k \cos^2 \Theta_k$ |
| 偏心率 | $e$ | $e = \sqrt{1 - \gamma_k(2-\gamma_k)\cos^2\Theta_k}$ |
| 真近点角 | $f_k$ | $f_k = \cos^{-1}\left[\frac{1}{e}\left(\frac{p}{r_k}-1\right)\right]$ |

### 弹道形状条件

| 弹道类型 | 能量参数条件 | 速度条件 |
|:---|:---|:---|
| 圆弹道 | $\gamma_k = 1$ | $v_k = \sqrt{\mu_E/r_k}$ |
| 椭圆弹道 | $0 < \gamma_k < 2$ | $v_k < \sqrt{2\mu_E/r_k}$ |
| 抛物线弹道 | $\gamma_k = 2$ | $v_k = \sqrt{2\mu_E/r_k}$ |
| 双曲线弹道 | $\gamma_k > 2$ | $v_k > \sqrt{2\mu_E/r_k}$ |

### 成为卫星与导弹的条件

- **卫星条件**：$0 < \gamma_k < 2$，且近地距 $r_p > R_E + h_L$（$h_L$ 为生存高度）
- **导弹条件**：$0 < \gamma_k < 2$，且近地距 $r_p < R_E$

两者由临界速度倾角 $\Theta_{k,\lim}$ 区分：当 $\Theta_k \leq \Theta_{k,\lim}$ 时为卫星轨道，反之为导弹弹道。

## 应用价值

自由段弹道是弹道导弹飞行的主要阶段，占全弹道飞行时间的绝大部分。通过主动段终点参数可以完全确定自由段弹道特性，进而外推任意点的位置和速度。自由段弹道分析是射程计算、飞行时间估计和误差系数建模的基础。

## 相关概念

- [轨道根数（Orbital Elements）](/glossary/fundamentals/orbital-elements/)
- [二体问题（Two-Body Problem）](/glossary/fundamentals/two-body-problem/)
- [活力公式（Vis-Viva Equation）](/glossary/fundamentals/vis-viva-equation/)
- [能量参数（Energy Parameter）](/glossary/fundamentals/energy-parameter/)
- [命中方程（Hit Equation）](/glossary/fundamentals/hit-equation/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
