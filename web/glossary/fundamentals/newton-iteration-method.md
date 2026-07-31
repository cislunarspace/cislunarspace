---
title: "牛顿迭代法（Newton's Iteration Method）"
description: 详细解析牛顿迭代法的基本原理、在弹道设计中的应用及偏导数计算方法
keywords: "牛顿迭代法, Newton's Iteration Method, 牛顿-拉夫逊法, 弹道设计, 非线性方程求解"
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: "牛顿迭代法（Newton's Iteration Method）"
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 牛顿迭代法详解 | 术语定义
  description: 详细解析牛顿迭代法的基本原理及在弹道设计中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 牛顿迭代法详解 | 术语定义
  description: 详细解析牛顿迭代法的基本原理及在弹道设计中的应用
  image: /logo.png
permalink: /glossary/fundamentals/newton-iteration-method/
---

# 牛顿迭代法（Newton's Iteration Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

牛顿迭代法（也称牛顿-拉夫逊法）是求解非线性方程 $f(x) = 0$ 的根的经典数值方法。其基本思想是将非线性方程在当前迭代点附近进行 Taylor 展开，取线性部分近似代替原方程，逐步逼近真实解。

## 核心要素

### 基本公式

设 $f(x)$ 在包含 $x_k$ 的区间上连续可微，则 Taylor 展开的线性近似给出迭代公式：

$$x_{k+1} = x_k - \frac{f(x_k)}{f'(x_k)}, \quad k = 0, 1, 2, \ldots$$

### 几何意义

牛顿迭代法的几何意义是：过点 $(x_k, f(x_k))$ 作 $f(x)$ 的切线，切线与 $x$ 轴的交点即为下一个迭代点 $x_{k+1}$。因此也称为切线法。

### 在弹道设计中的应用

轨迹设计问题可归结为求解非线性方程 $F(x) = 0$ 的根。对于弹道导弹，设计变量为发射方位角 $A_0$ 和俯仰程序角斜率 $\dot{\varphi}_{pr}$，终端约束为落点偏差为零：

$$\begin{bmatrix} \dot{\varphi}_{pr}^{(k+1)} \\ A_0^{(k+1)} \end{bmatrix} = \begin{bmatrix} \dot{\varphi}_{pr}^{(k)} \\ A_0^{(k)} \end{bmatrix} + \begin{bmatrix} \frac{\partial \Delta L}{\partial \dot{\varphi}_{pr}} & \frac{\partial \Delta L}{\partial A_0} \\ \frac{\partial \Delta H}{\partial \dot{\varphi}_{pr}} & \frac{\partial \Delta H}{\partial A_0} \end{bmatrix}^{-1} \begin{bmatrix} -\Delta L^{(k)} \\ -\Delta H^{(k)} \end{bmatrix}$$

### 偏导数计算

偏导数的计算精度对收敛性有显著影响。常用方法：

| 方法 | 特点 | 计算量 |
| :--- | :--- | :--- |
| 求差法 | 实现简单，对增量选取敏感 | 少（每参数 1 次额外弹道计算） |
| 理查德外推法 | 精度高，对增量不敏感 | 多（每参数 4 次额外弹道计算） |

求差法的偏导数计算：

$$\frac{\partial f}{\partial x_i} \approx \frac{f(x_i + \delta x_i) - f(x_i)}{\delta x_i}$$

### 收敛特性

| 特性 | 说明 |
| :--- | :--- |
| 收敛速度快 | 局部超线性收敛 |
| 对初值敏感 | 初值选择不当可能导致发散 |
| 求可行解 | 只能找到满足约束的解，不保证最优 |

## 应用价值

牛顿迭代法是弹道导弹和运载火箭主动段轨迹设计的核心数值方法。通过将轨迹设计问题转化为非线性方程求解问题，可以快速确定满足终端约束的飞行程序角和发射方位角。该方法实现简单、收敛速度快，在工程中广泛应用。

## 相关概念

- [发射方位角（Launch Azimuth）](/glossary/fundamentals/launch-azimuth/)
- [俯仰程序角（Pitch Program Angle）](/glossary/fundamentals/pitch-program/)
- [轨迹优化（Trajectory Optimization）](/glossary/fundamentals/trajectory-optimization/)
- [序列二次规划（Sequential Quadratic Programming）](/glossary/fundamentals/sequential-quadratic-programming/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
