---
title: 总攻角（Total Angle of Attack）
description: 详细解析总攻角的定义、与攻角和侧滑角的关系及在再入气动力分析中的应用
keywords: 总攻角, Total Angle of Attack, 攻角, 侧滑角, 总升力, 总法向力
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 总攻角（Total Angle of Attack）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 总攻角详解 | 术语定义
  description: 详细解析总攻角的定义及与攻角、侧滑角的关系
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 总攻角详解 | 术语定义
  description: 详细解析总攻角的定义及与攻角、侧滑角的关系
  image: /logo.png
permalink: /glossary/fundamentals/total-angle-of-attack/
---

# 总攻角（Total Angle of Attack）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

总攻角 $\eta$ 是速度轴 $o_1x_v$ 与飞行器纵轴 $o_1x_1$ 之间的夹角。在总攻角平面（$x_1o_1x_v$ 平面）内，气动力 $\boldsymbol{R}$ 可沿飞行器纵轴方向分解为轴向力 $X_1$ 和总法向力 $N$，也可沿速度轴方向分解为阻力 $X$ 和总升力 $L$。

## 核心要素

### 与攻角、侧滑角的关系

总攻角与攻角 $\alpha$、侧滑角 $\beta$ 的精确关系：

$$\cos\eta = \cos\alpha \cdot \cos\beta$$

或等价地：

$$\sin^2\eta = \sin^2\alpha + \sin^2\beta - \sin^2\alpha \cdot \sin^2\beta$$

当 $\alpha$、$\beta$ 为小角度时，近似关系为：

$$\eta = \sqrt{\alpha^2 + \beta^2}$$

### 力的分解关系

在总攻角平面内，轴向力 $X_1$、总法向力 $N$ 与阻力 $X$、总升力 $L$ 的关系：

$$\left\{\begin{array}{l} X = N\sin\eta + X_1\cos\eta \\ L = N\cos\eta - X_1\sin\eta \end{array}\right.$$

对应的系数关系：

$$\left\{\begin{array}{l} C_x = C_N\sin\eta + C_{x1}\cos\eta \\ C_L = C_N\cos\eta - C_{x1}\sin\eta \end{array}\right.$$

### 总法向力与分力的关系

总法向力 $N$ 与法向力 $Y_1$、横向力 $Z_1$ 的关系：

$$N = \sqrt{Y_1^2 + Z_1^2}$$

总升力 $L$ 与升力 $Y$、侧力 $Z$ 的关系：

$$L = \sqrt{Y^2 + Z^2}$$

### 物理意义

总攻角综合反映了飞行器速度矢量与机体轴之间的空间方位关系。当侧滑角 $\beta = 0$ 时，总攻角等于攻角的绝对值。总攻角的概念简化了气动力的表达，使得再入段运动方程可以用总攻角、总升力等统一表示，适用于各种再入飞行器。

## 应用价值

总攻角是再入飞行器气动力分析的核心参数。通过总攻角可以将三维气动力问题转化为总攻角平面内的二维问题，简化了再入段运动方程的推导。在配平攻角设计、再入走廊确定和升力控制中，总攻角都是关键变量。

## 相关概念

- [配平攻角（Trim Angle of Attack）](/glossary/fundamentals/trim-angle-of-attack/)
- [升阻比（Lift-to-Drag Ratio）](/glossary/fundamentals/lift-to-drag-ratio/)
- [再入走廊（Reentry Corridor）](/glossary/fundamentals/reentry-corridor/)
- [再入段（Reentry Phase）](/glossary/fundamentals/reentry-phase/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
