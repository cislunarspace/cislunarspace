---
title: 轨道根数（Orbital Elements）
description: 详细解析经典轨道根数的定义、物理意义、改进轨道根数及位置速度转换方法
keywords: 轨道根数, Orbital Elements, 半长轴, 偏心率, 轨道倾角, 升交点赤经, 近地点纬度幅角, 过近地点时刻
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 轨道根数（Orbital Elements）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 轨道根数详解 | 术语定义
  description: 详细解析经典轨道根数的定义、物理意义及位置速度转换方法
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 轨道根数详解 | 术语定义
  description: 详细解析经典轨道根数的定义、物理意义及位置速度转换方法
  image: /logo.png
permalink: /glossary/fundamentals/orbital-elements/
---

# 轨道根数（Orbital Elements）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

轨道根数（Orbital Elements）是求解二体运动微分方程所需的六个独立积分常数，描述轨道的大小、形状、方位、指向和位置/时间关系。六个经典轨道根数为 $(a, e, i, \Omega, \omega, \tau)$，又称为轨道要素。

## 核心要素

### 经典轨道根数

| 根数 | 符号 | 定义 | 描述的特性 |
| :--- | :--- | :--- | :--- |
| 半长轴 | $a$ | 圆锥曲线长轴的一半 | 轨道尺寸，决定能量、周期 |
| 偏心率 | $e$ | 圆锥曲线偏心率 | 轨道形状 |
| 轨道倾角 | $i$ | 轨道面与赤道面的二面角 | 轨道面倾斜程度 |
| 升交点赤经 | $\Omega$ | 春分点到升交点的角度 | 轨道面在赤道面内的方位 |
| 近地点纬度幅角 | $\omega$ | 升交点到近地点的角度 | 轨道在面内的指向 |
| 过近地点时刻 | $\tau$ | 经过近地点的时刻 | 飞行器在轨道上的位置 |

### 特殊轨道的根数替换

| 轨道类型 | 奇异根数 | 替换方案 |
| :--- | :--- | :--- |
| 非赤道圆轨道 ($e=0$) | $\omega, \tau$ 不确定 | 用纬度幅角 $u$ 描述位置 |
| 赤道椭圆轨道 ($i=0°$) | $\Omega, \omega$ 不确定 | 用近地点赤经 $\alpha_p$ 描述指向 |
| 赤道圆轨道 | $\Omega, \omega, \tau$ 不确定 | 用卫星赤经 $\alpha$ 描述位置 |

### 改进轨道根数

对于近圆轨道或近赤道轨道，可采用改进根数避免奇异：

$$\{a, i, \Omega, H=e\cos\omega, K=-e\sin\omega, L=M+\omega\}$$

其中 $H$ 和 $K$ 共同描述轨道的形状和指向。

### 位置速度互转

轨道根数与位置速度之间的转换是轨道力学的核心计算：

- **正向转换**：由 $(a,e,i,\Omega,\omega,f)$ 计算位置 $\boldsymbol{r}$ 和速度 $\boldsymbol{v}$，需经坐标旋转
- **反向转换**：由 $(\boldsymbol{r}, \boldsymbol{v})$ 计算轨道根数，需依次求解比动量矩、偏心率矢量等基本矢量

## 应用价值

轨道根数是描述和传递轨道信息的标准方式。与直角坐标相比，轨道根数具有明确的物理含义，便于理解轨道特性。在轨道预报中，二体假设下前五个根数为常数，仅需推进第六个根数（真近点角）。在轨道设计中，任务需求直接对应轨道根数的约束。在轨道确定中，观测数据通过轨道根数与预测值进行比对。

## 相关概念

- [二体问题（Two-Body Problem）](/glossary/fundamentals/two-body-problem/)
- [轨道方程（Orbital Equation）](/glossary/fundamentals/orbital-equation/)
- [真近点角（True Anomaly）](/glossary/fundamentals/true-anomaly/)
- [开普勒方程（Kepler's Equation）](/glossary/fundamentals/kepler-equation/)
- [比动量矩（Specific Angular Momentum）](/glossary/fundamentals/specific-angular-momentum/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
