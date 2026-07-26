---
title: 伪弧长延拓法（Pseudo-Arclength Continuation）
description: 详细解析伪弧长延拓法的原理、与普通延拓法的区别、以及在大范围轨道族追踪中的应用
keywords: 伪弧长延拓法, Pseudo-Arclength, 延拓法, 弧长法, 轨道族追踪, 分岔分析
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 伪弧长延拓法
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 伪弧长延拓法详解 | 轨道族追踪方法
  description: 详细解析伪弧长延拓法的原理、与普通延拓法的区别、以及在大范围轨道族追踪中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 伪弧长延拓法详解 | 轨道族追踪方法
  description: 详细解析伪弧长延拓法的原理、与普通延拓法的区别、以及在大范围轨道族追踪中的应用
  image: /logo.png
permalink: /glossary/dynamics/pseudo-arclength-continuation/
---

# 伪弧长延拓法（Pseudo-Arclength Continuation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文参考：钱霙婧(2014)《地月空间拟周期轨道上航天器自主导航与轨道保持研究》
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

伪弧长延拓法（Pseudo-Arclength Continuation）是一种求解非线性方程族的数值延拓方法，通过引入弧长参数作为额外自由度，解决普通延拓法在**极限点**（fold/fold point）处无法跨越的问题。

伪弧长延拓法由 Keller（1977）系统提出，是追踪周期轨道族、分岔曲线和平衡解族的强力工具。在平动点轨道研究中，该方法用于追踪 Halo 轨道族、Lyapunov 轨道族，分析轨道的稳定性演化。

## 普通延拓法及其局限

### 普通延拓法

普通延拓法通过一个参数 $\lambda$ 连续变化来追踪解曲线：

$$F(x, \lambda) = 0$$

假设已知解 $(x_0, \lambda_0)$，沿切线方向预测下一个解点，再通过牛顿迭代修正。

### 极限点问题

当解曲线出现**极限点**（即切线垂直于参数轴）时，普通延拓法会失效：

- 预测方向与解曲线正交
- 牛顿迭代无法收敛到正确分支

这在周期轨道族追踪中经常发生——轨道幅值达到极值时，参数对状态变化的敏感性发生突变。

## 伪弧长延拓法原理

### 弧长参数引入

伪弧长延拓法引入弧长参数 $s$ 作为新的变量，用弧长代替原参数 $\lambda$：

$$\frac{ds}{d\lambda} = \frac{1}{\|\frac{\partial F}{\partial x}\|}$$

### 扩展方程组

将原方程与弧长约束方程组合：

$$\begin{cases}
F(x, \lambda) = 0 \\
N(x, \lambda, \dot{x}, \dot{\lambda}; s) = 0
\end{cases}$$

其中 $N$ 是伪弧长约束，要求解曲线在弧长参数 $s$ 下连续。

### 预测-校正步骤

1. **预测**：沿当前切线方向在弧长参数空间移动一小步
2. **校正**：在垂直于切线的超平面上求解扩展方程组
3. **收敛**：牛顿迭代收敛到新解点

## 在轨道族追踪中的应用

### Halo 轨道族追踪

地月 L1/L2 点的 Halo 轨道构成连续族，从小幅值到大幅值：

1. 从小幅值 Halo 轨道（近似 Lissajous）出发
2. 随幅值增大，轨道形态从"Lissajous"型过渡到"Halo"型
3. 达到最大幅值后，继续追踪另一分支

在最大幅值点处，普通延拓法会失效，伪弧长延拓法可顺利跨越。

### Lyapunov 轨道族追踪

平面 Lyapunov 轨道族同样存在极限点，伪弧长延拓法是追踪完整轨道的必要工具。

### 分岔分析

伪弧长延拓法可以检测以下分岔现象：

- **鞍结分岔（Saddle-Node Bifurcation）**：轨道族出现极值点
- **倍周期分岔（Period-Doubling Bifurcation）**：周期轨道失稳后分岔为新分支
- **Hopf 分岔**：平衡解失稳产生极限环

## 算法实现要点

### 切线计算

沿弧长方向的切向量 $(dx/ds, d\lambda/ds)$ 通过求解线性方程组获得：

$$\frac{\partial F}{\partial x} \frac{dx}{ds} + \frac{\partial F}{\partial \lambda} \frac{d\lambda}{ds} = 0$$

### 步长控制

步长 $ds$ 需要适当调整：
- 解曲线曲率大时：减小步长
- 解曲线平滑时：增大步长

### 收敛判断

收敛判断标准为：
$$\|F(x, \lambda)\| < \epsilon_{F}, \quad |N| < \epsilon_{N}$$

## 与其他方法的比较

| 方法 | 适用场景 | 优点 | 缺点 |
|:---|:---|:---|:---|
| 普通延拓法 | 无极限点的光滑曲线 | 简单高效 | 无法处理极限点 |
| **伪弧长延拓法** | 有极限点的曲线 | 鲁棒性强 | 计算量较大 |
| 弧长直接法 | 复杂分岔结构 | 适合复杂情况 | 实现复杂 |

## 相关概念

- [延拓法（Continuation Method）](/glossary/dynamics/continuation-method/)
- [多步打靶法（Multiple Shooting）](/glossary/dynamics/shooting-method/)
- [Halo轨道](/glossary/orbits/halo-orbit/)
- [Lyapunov轨道](/glossary/orbits/lyapunov-orbit/)
- [倍周期分岔（Period-Doubling Bifurcation）](/glossary/other/period-doubling-bifurcation/)

## 参考文献

- Keller H B. Numerical methods in boundary-layer theory[J]. Annual Review of Fluid Mechanics, 1978.
- 钱霙婧. 地月空间拟周期轨道上航天器自主导航与轨道保持研究[D]. 哈尔滨工业大学, 2014.
