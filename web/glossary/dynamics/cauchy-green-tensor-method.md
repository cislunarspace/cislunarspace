---
title: 柯西-格林张量方法（Cauchy-Green Tensor Method）
description: 用状态转移矩阵构造有限时间柯西-格林应变张量，由其最大奇异值定义有限时间李雅普诺夫指数（FTLE），FTLE 场的脊线揭示拉格朗日相干结构（LCS）。本文覆盖定义、与单值矩阵/庞加莱截面方法的区别、计算流程，以及在 CR3BP 相空间分隔、地月/木卫系流分析中的应用。
keywords: 柯西-格林张量方法, Cauchy-Green Tensor Method, CGT, FTLE, 有限时间李雅普诺夫指数, Lagrangian Coherent Structures, LCS, 拉格朗日相干结构, 状态转移矩阵, 流形
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 柯西-格林张量方法（Cauchy-Green Tensor Method）
  desc: 用 STM 构造柯西-格林张量并取 FTLE，脊线即拉格朗日相干结构：揭示有限时间尺度上的输运屏障。
  image: /logo.png
og:
  title: 柯西-格林张量方法详解 | FTLE 与拉格朗日相干结构
  description: 用状态转移矩阵构造有限时间柯西-格林应变张量，由其最大奇异值定义 FTLE；FTLE 场的脊线揭示拉格朗日相干结构。覆盖定义、与单值矩阵/庞加莱截面方法的区别、计算流程，以及地月/木卫系流分析中的应用。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 柯西-格林张量方法详解 | FTLE 与拉格朗日相干结构
  description: 用状态转移矩阵构造有限时间柯西-格林应变张量，由其最大奇异值定义 FTLE；FTLE 场的脊线揭示拉格朗日相干结构。覆盖定义、与单值矩阵/庞加莱截面方法的区别、计算流程，以及地月/木卫系流分析中的应用。
  image: /logo.png
permalink: /glossary/dynamics/cauchy-green-tensor-method/
---

# 柯西-格林张量方法（Cauchy-Green Tensor Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

**柯西-格林张量方法**通过动力系统流映射的变形梯度，即 [状态转移矩阵](/glossary/fundamentals/stm/)（STM）$\Phi(t_f,t_0)$，构造有限时间柯西-格林应变张量（Cauchy-Green strain tensor, CGST）

$$
C(t_0,t_f) = \Phi(t_f,t_0)^{\!\top}\Phi(t_f,t_0),
$$

$C$ 是对称正定矩阵；其最大特征值 $\lambda_1$ 给出在积分时间 $\Delta t=t_f-t_0$ 内初始小扰动沿最拉伸方向被放大的平方倍数。**有限时间李雅普诺夫指数**（finite-time Lyapunov exponent, FTLE）定义为

$$
\sigma(t_0,t_f) = \frac{1}{\Delta t}\ln\!\sqrt{\lambda_1(C)}.
$$

在初始条件网格上计算 $\sigma$ 得到 FTLE 场；场中的高值脊线（ridges）即**拉格朗日相干结构**（Lagrangian Coherent Structures, LCS）。LCS 标识有限时间内最显著地分隔不同流动区域的屏障，穿越轨道、捕获轨道与逃逸轨道在相空间里被 LCS 隔开（Haller 2001；Shadden et al. 2005）。

## 与单值矩阵、庞加莱截面的区别

柯西-格林/FTLE/LCS 与传统 CR3BP 几何工具的边界需要划清：

- **单值矩阵**（[monodromy matrix](/glossary/dynamics/monodromy-matrix/)）：沿周期轨道积分一个周期所得的 STM，其特征值用于**周期轨道局部稳定性分析**。CGST 是沿**任意**轨迹在**有限**时间内的 STM 构造的，不要求周期性。
- **稳定/不稳定不变流形**（[invariant manifold](/glossary/dynamics/invariant-manifold/)）：由周期轨道单值矩阵的实特征向量张成，是严格自治的几何对象。LCS 是有限时间近似的输运屏障，当 LCS 由沿周期轨道充分长时间的积分产生时，它会重合到不变流形的稳定/不稳定方向上；在非自治或瞬态流场中，LCS 提供流形概念的可用近似。
- **庞加莱截面**（[Poincaré section](/glossary/dynamics/poincare-section/)）：是降维可视化工具；FTLE 场常在二维庞加莱截面上构造（截面 + 积分时间 $\Delta t$），把 4 维流的拉伸特性投影到 2 维图上。

简言之：单值矩阵给轨道稳定不稳，不变流形给周期轨道附近的几何通道，CGST/FTLE 给任意流场中有限时间内的输运屏障。三者互补。

## 计算流程

在 CR3BP 截面 $\Sigma$ 上构造 FTLE 图的标准步骤（Canales & Howell 2024）：

1. 在 $\Sigma$（例如过 $L_1$ 或 $L_2$ 的 $y\dot y$ 截面）上铺初始条件网格 $\{\vec q_i\}$；
2. 对每个 $\vec q_i$ 在选定能量 $C_J$ 下补齐为完整状态，沿时间 $\Delta t$ 正向（或反向）积分，同步传播 STM；
3. 在末端 $t_f$ 取 $\Phi(t_f,t_0)$，构造 $C=\Phi^\top\Phi$，求最大特征值 $\lambda_1$；
4. 计算 $\sigma_i=(1/\Delta t)\ln\sqrt{\lambda_1}$；
5. 把 $\sigma_i$ 在网格上以色场或等高线显示，脊线即为 LCS。

反向时间积分得到的是回收型 LCS（repelling LCS，未来时刻的稳定流形近似），正向时间得到的是排斥型（attracting LCS，未来时刻的不稳定流形近似）。两者交叉点常与 [天平动点](/glossary/fundamentals/libration-point/) $L_1/L_2$ 邻域的颈口几何对应。

## 工程要点

- **$\Delta t$ 选择**：太短 LCS 不成形；太长则不同初始条件的轨迹大量进入混沌海，FTLE 趋同。Canales & Howell (2024) 在木卫三邻域使用约一个绕木轨道周期。
- **分辨率与计算量**：典型 FTLE 图需要 $10^5\sim 10^6$ 条轨迹积分；近期工作用 GPU 并行或 Jet Transport 等高阶方法加速（Pérez-Palau et al. 2015）。
- **能量阈值识别**：在 LCS 包围的区域内可分类捕获、撞击、穿越三类轨道，对应不同任务行为，为地月转移与捕获设计提供决策图。
- **对称性加速**：CR3BP 的时间反射对称性使得正向与反向 LCS 互为镜像，可减半计算量（Canales & Howell 2024）。

## 应用场景

- **地月空间运输分析**：在 $L_1/L_2$ 邻域用 LCS 识别低能穿越走廊，辅助 [不变流形](/glossary/dynamics/invariant-manifold/) 拼接策略；Short & Howell (2014) 把它用于 ARTEMIS 任务的 stationkeeping 评估。
- **木卫系、土卫系探测**：Canales & Howell (2024) 用 FTLE 图谱刻画木卫三、木卫二邻域的门几何，为 endgame 设计提供决策。
- **小行星邻域**：碎石堆引力场下 FTLE 图揭示稳定环、撞击区、逃逸区，配合姿态动力学评估。
- **碎片云演化**：长期碎片演化分析中，FTLE 图用于识别捕获带与再撞击带。

## 相关概念

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [状态转移矩阵（State Transition Matrix）](/glossary/fundamentals/stm/)
- [单值矩阵（Monodromy Matrix）](/glossary/dynamics/monodromy-matrix/)
- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)
- [庞加莱截面（Poincaré Section）](/glossary/dynamics/poincare-section/)
- [天平动点（Libration Point）](/glossary/fundamentals/libration-point/)

## 参考文献

- Haller, G. (2001). Distinguished material surfaces and coherent structures in three-dimensional fluid flows. *Physica D*, 149(4), 248–277.
- Shadden, S. C., Lekien, F., & Marsden, J. E. (2005). Definition and properties of Lagrangian coherent structures from finite-time Lyapunov exponents in two-dimensional aperiodic flows. *Physica D*, 212(3–4), 271–304.
- Gawlik, E. S., Marsden, J. E., Du Toit, P. C., & Campagnolo, S. (2009). Lagrangian coherent structures in the restricted three-body problem. *Celestial Mechanics and Dynamical Astronomy*, 103(3), 227–249.
- Short, C., & Howell, K. C. (2014). Lagrangian coherent structures in various maps for Earth–Moon systems. *Acta Astronautica*, 94(1), 592–607.
- Pérez-Palau, D., Barrabés, E., & Gomez, G. (2015). Dynamical indicators in the restricted three-body problem. *Celestial Mechanics and Dynamical Astronomy*, 122(4), 319–341.
- Canales, D., & Howell, K. C. (2024). Understanding flow around planetary moons via finite-time Lyapunov exponent maps. *Celestial Mechanics and Dynamical Astronomy*, 136(2), 11.
