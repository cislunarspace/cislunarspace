---
title: CW方程（Clohessy-Wiltshire方程）
description: CW方程（Clohessy-Wiltshire方程）是描述两个航天器之间相对轨道运动的线性化方程组，广泛应用于交会对接、编队飞行和近距离操作等领域。
keywords: CW方程, Clohessy-Wiltshire, 相对轨道运动, 交会对接, Hill方程, LVLH坐标系
author: 天疆说
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: CW方程（Clohessy-Wiltshire方程）| 相对轨道动力学
  description: 描述航天器间相对轨道运动的线性化方程组，广泛用于交会对接与编队飞行
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: CW方程（Clohessy-Wiltshire方程）| 相对轨道动力学
  description: 描述航天器间相对轨道运动的线性化方程组，广泛用于交会对接与编队飞行
  image: /logo.png
permalink: /glossary/dynamics/clohessy-wiltshire/
---

# CW方程（Clohessy-Wiltshire方程）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

> 校对记录：
> 1. 2026年4月29日：纠正了参考文献引用错误

## 定义

CW方程（Clohessy-Wiltshire方程），又称Hill-Clohessy-Wiltshire（HCW）方程，是一组描述两个航天器在近圆参考轨道附近相对运动的线性化动力学方程。该方程组以目标航天器的轨道坐标系（LVLH，Local Vertical Local Horizontal）为参考，将追踪航天器相对于目标航天器的运动分解为轨道面内（径向和沿迹方向）和轨道面外（法向）三个分量。

CW方程最早由Hill（1878年）提出地球-月球相对运动方程，后由Clohessy和Wiltshire（1960年）将其应用于航天器交会对接问题，成为相对轨道动力学的基石。

## 数学形式

在LVLH坐标系下，设追踪航天器相对于目标航天器的位置为 $(x, y, z)$，速度为 $(\dot{x}, \dot{y}, \dot{z})$，参考轨道角速度为 $n = \sqrt{\mu / a^3}$，CW方程的矩阵形式为：

$$
\begin{pmatrix} \ddot{x} \\ \ddot{y} \\ \ddot{z} \end{pmatrix} = \begin{pmatrix} 3n^2 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & -n^2 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} + \begin{pmatrix} 0 & 2n & 0 \\ -2n & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} \begin{pmatrix} \dot{x} \\ \dot{y} \\ \dot{z} \end{pmatrix}
$$

展开为标量形式：

- **径向（x）：** $\ddot{x} - 3n^2 x - 2n\dot{y} = 0$
- **沿迹方向（y）：** $\ddot{y} + 2n\dot{x} = 0$
- **法向（z）：** $\ddot{z} + n^2 z = 0$

## 基本假设

CW方程的推导基于以下假设：

- **近圆参考轨道**：目标航天器运行在圆形或近圆形轨道上（偏心率 $e \approx 0$）
- **小相对距离**：追踪航天器与目标航天器之间的距离远小于参考轨道半径（$\rho \ll a$）
- **二体引力场**：仅考虑中心天体的引力，忽略大气阻力、太阳辐射压、第三体引力等摄动
- **线性化**：对非线性相对运动方程进行一阶Taylor展开，忽略高阶项

由于线性化假设，CW方程仅在相对距离较近（通常认为 $\rho / a < 0.01$）时具有较高精度。对于地月空间中的大范围相对运动，需要使用更精确的非线性模型。

## 解析解

CW方程具有封闭形式的解析解，初始状态为 $(x_0, y_0, z_0, \dot{x}_0, \dot{y}_0, \dot{z}_0)$ 时，解可表示为三角函数和时间的线性函数的组合：

$$
x(t) = \frac{\dot{x}_0}{n}\sin(nt) - \left(\frac{2\dot{y}_0}{n} + 3x_0\right)\cos(nt) + \left(\frac{2\dot{y}_0}{n} + 4x_0\right)
$$

$$
y(t) = \left(\frac{2\dot{x}_0}{n}\right)\cos(nt) + 2\left(\frac{2\dot{y}_0}{n} + 3x_0\right)\sin(nt) - \left(3\dot{y}_0 + 6nx_0\right)t + \left(y_0 - \frac{2\dot{x}_0}{n}\right)
$$

$$
z(t) = \frac{\dot{z}_0}{n}\sin(nt) + z_0\cos(nt)
$$

轨道面外运动（z方向）为独立的简谐振荡，与面内运动解耦。面内运动（x-y平面）包含周期项和长期漂移项（与 $t$ 成正比的项），漂移项的存在意味着无控的相对运动一般是不稳定的。

## 典型应用

CW方程在航天工程中有广泛应用：

- **交会对接**：设计从远距离接近到最终对接的转移轨道，是空间站补给任务的理论基础
- **编队飞行**：设计卫星编队的相对轨道构型，维持队形的控制策略
- **近距离操作**：空间碎片清除、在轨服务等任务中的相对运动规划
- **航天器意图识别**：将观测到的相对运动数据与CW方程预测的典型轨迹模式进行比对，辅助判断非合作目标的运动意图（如逼近、飞越、交会等）
- **碰撞风险评估**：结合协方差传播，计算碰撞概率

## 与CR3BP的关系

CW方程与圆形限制性三体问题（CR3BP）都涉及相对运动的描述，但适用场景不同：

| 特征 | CW方程 | CR3BP |
|------|--------|-------|
| 引力体数量 | 二体（中心天体 + 参考轨道航天器） | 三体（两个主天体 + 质量可忽略的小天体） |
| 轨道类型 | 近圆轨道附近的相对运动 | 平动点附近的周期/拟周期轨道 |
| 线性化 | 是 | 非线性（可在线性化点附近线性化） |
| 典型应用 | 交会对接、编队飞行 | DRO、NRHO、Halo轨道设计 |

在地月空间任务中，CW方程常用于空间站附近的相对运动分析（如天舟飞船与空间站的交会），而CR3BP用于更大尺度的轨道设计（如DRO编队、NRHO任务）。

## 核心要素

### 数学定义
CW 方程在 LVLH 坐标系下描述追踪航天器相对于目标航天器的运动，包含径向 $\ddot{x} - 3n^2 x - 2n\dot{y} = 0$、沿迹方向 $\ddot{y} + 2n\dot{x} = 0$ 和法向 $\ddot{z} + n^2 z = 0$ 三个分量。

### 关键性质
轨道面外运动为独立简谐振荡，面内运动包含周期项和长期漂移项。无控相对运动一般不稳定。CW 方程仅在 $\rho / a < 0.01$ 时具有较高精度。

### 数值方法
CW 方程具有封闭形式的解析解，由三角函数和时间线性函数组合而成，可直接用于相对运动预测和交会轨道设计。

## 应用价值

CW 方程是交会对接、编队飞行和近距离操作的理论基础，广泛应用于空间站补给任务的转移轨道设计、卫星编队构型维持以及空间碎片清除等任务的相对运动规划。


## 相关概念

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [航天器意图识别](/glossary/other/spacecraft-intention-recognition/)
- [非合作目标](/glossary/other/noncooperative-target/)

## 参考文献

[1] Jing H, Sun Q, Dang Z, et al. Intention recognition of space noncooperative targets using large language models[J]. Space: Science & Technology, 2025, 5: 0271.

[2] 张进, 朱阅訸. 空间多目标交会轨道设计与优化方法[M]. 1 版. 化学工业出版社, 2024.

[3] Curtis H D. Orbital mechanics for engineering students[M]. 1. ed., reprinted. Amsterdam Heidelberg: Elsevier Butterworth Heinemann, 2008.

[4] Clohessy W, Wiltshire R. Terminal guidance system for satellite rendezvous[J]. Journal of the Aerospace Sciences, 1960, 27(9): 653-658.

[5] Hill G W. Researches in the lunar theory[J]. American Journal of Mathematics, 1878, 1(3): 245-263.
