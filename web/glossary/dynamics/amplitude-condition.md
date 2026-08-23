---
title: 振幅条件与有效相位（Amplitude Condition & Effective Phase）
description: CR3BP 平动点附近 Lissajous/Halo 轨道的振幅-相位参数化体系：面内振幅 $A_x$ 与面外振幅 $A_z$ 经 Richardson 三阶非线性振幅约束 $l_1 A_x^2 + l_2 A_z^2 + \Delta = 0$ 耦合为 Halo 周期解；有效相位 $(\Phi, \Psi)$ 将四维 Lissajous 环面映射到二维有效相位平面 (EPP)，化简轨道机动设计与凌日回避分析。
keywords: 振幅条件, Amplitude Condition, 有效相位, Effective Phase, EPP, 有效相位平面, Richardson 三阶解, Halo 轨道, Lissajous 轨道, 面内振幅, 面外振幅, 振幅修正机动
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 振幅条件与有效相位
  desc: CR3BP Lissajous/Halo 轨道的振幅-相位参数化体系：从 Richardson 约束到 EPP 平面。
  image: /logo.png
og:
  title: 振幅条件与有效相位（Amplitude Condition & Effective Phase）详解 | 术语定义
  description: CR3BP 平动点附近 Lissajous/Halo 轨道的振幅-相位参数化体系：面内振幅与面外振幅经 Richardson 三阶非线性约束耦合为 Halo 周期解；有效相位将四维环面映射到二维 EPP 平面，化简轨道机动与凌日回避。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 振幅条件与有效相位详解 | 术语定义
  description: CR3BP 平动点附近 Lissajous/Halo 轨道的振幅-相位参数化体系：Richardson 约束与 EPP 平面。
  image: /logo.png
permalink: /glossary/dynamics/amplitude-condition/
---

# 振幅条件与有效相位（Amplitude Condition & Effective Phase）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 什么是振幅条件？

CR3BP 平动点线性化运动可分解为 xy 面内和 z 面外两个近似独立的简谐振动。面内振动频率为 $\omega$，面外为 $\nu$，二者一般不可公度，此即 Lissajous 轨道的线性近似（Richardson 1980）。

Halo 型周期轨道要求面内与面外频率在经过非线性修正后相等。Richardson (1980) 用 Lindstedt-Poincaré 方法构造三阶解析近似时发现：在三阶 z 方程中出现了无法通过频率展开消除的长期项。为完成不含长期项的三阶展开，必须施加一个面内振幅 $A_x$ 与面外振幅 $A_z$ 的非线性代数约束，即**振幅条件**（amplitude condition）（Richardson 1980）：

$$
l_1 A_x^2 + l_2 A_z^2 + \Delta = 0 \tag{18}
$$

其中 $l_1$、$l_2$、$\Delta$ 是由平动点位置和质量参数 $\mu$ 确定的常系数（具体值见 Richardson 1980 附录 I，日地系各平动点数值见该文的表格）。该条件表明：**$A_x$ 与 $A_z$ 不是独立参数**，选定一个后另一个即被约束。当不满足振幅条件时，轨道退化为面内面外频率不可公度的非闭合 Lissajous 轨迹，而非周期性的 Halo 轨道。

振幅条件亦存在两个分支（n=1 与 n=3），由相位约束关系 $\psi = \phi + n\pi/2$ 中的开关函数 $\delta_n = 2-n$ 区分，这对应于 Halo 轨道的北族（Northern）与南族（Southern）分叉（Richardson 1980）。改变 $A_z$ 的符号即实现由北族到南族的切换。

振幅条件规定了 Halo 轨道 $A_x$ 的下限（$A_z=0$ 时对应的 $A_{x,\min}=\sqrt{-\Delta/l_1}$）。以日地系 $L_1$ 为例，$A_{x,\min}$ 约为归一化距离的 14%，相当于约 200,000 km（Richardson 1980）。

## 面内振幅与面外振幅

统称为平动点轨道的两个振幅参数：

- **面内振幅** $A_x$：Lissajous/Halo 轨道在 xy 面（会合坐标系的轨道面）内的最大偏离量，直接关联轨道在 x 方向和 y 方向（$y_{\max} = \bar{k} A_x$，$\bar{k}$ 为线性系统常数）的尺度。

- **面外振幅** $A_z$：Lissajous/Halo 轨道沿 z 方向的最大振荡高度，决定轨道相对于平动点轨道面的抬升程度。

在日地系统中，Canalias and Masdemont (2008) 研究表明面内振幅大（约 $10^5$ km 以上）且面外振幅小（约 $1.5\times 10^5$ km 以下）的 Lissajous 轨道最适合作为跨系统（日地-地月）转移的目标轨道，因为这类轨道的流形更容易以低速度增量实现跨系统拼接。

## 有效相位与有效相位平面 (EPP)

Belló 等 (2010) 注意到 Lissajous 轨道（以及 Halo 的线性近似）的解具有如下形式：

$$
\begin{aligned}
x(t) &= A_x \cos(\omega t + \phi), \\
y(t) &= \bar{k} A_x \sin(\omega t + \phi), \\
z(t) &= A_z \cos(\nu t + \psi).
\end{aligned}
$$

CR3BP 是自治系统，时间原点可任意平移。这引出核心观察：在振幅 $A_x$、$A_z$ 不变时，时间重置 $t \to t - t_0$ 等价于相位偏移 $\phi \to \phi + \omega t_0$、$\psi \to \psi + \nu t_0$。因此可以定义：

- **面内有效相位** $\Phi = \omega t + \phi \pmod{2\pi}$，

- **面外有效相位** $\Psi = \nu t + \psi \pmod{2\pi}$，

它们把时间和原始相位压缩为两个角度变量。在振幅给定的 Lissajous 轨道上，状态 $(\vec{r}, \vec{v})$ 与有效相位对 $(\Phi, \Psi)$ 之间是一一对应的。从动力系统视角看，Lissajous 轨道是一个二维环面（2-torus），$\Phi$ 和 $\Psi$ 正是其作用-角度变量（Belló et al. 2010）。

**有效相位平面（Effective Phases Plane, EPP）** 就是以 $(\Phi, \Psi)$ 为坐标的二维平面。在 EPP 中：

- 一条 Lissajous 轨迹是斜率为 $\nu/\omega$（约 0.966–0.965，日地 $L_1$/$L_2$）、匀速移动的直线段（在 $[0,2\pi] \times [0,2\pi]$ 紧凑表示范围内为周期性穿越边界的折线）。

- 凌日排除区（exclusion zone，如日地 $L_1$ 的太阳盘面 3° 锥、$L_2$ 的地球半影盘）在 EPP 中表现为准椭圆曲线。**凌日时间即为轨迹直线与排除区边界的交点距离**，使凌日预告和规避成为几何计算，而非高维积分（Belló et al. 2010）。

### 基于 EPP 的轨道机动设计

在 EPP 框架下，面内机动（xy 面冲量）改变面内有效相位 $\Phi$，面外机动（z 方向冲量）改变面外有效相位 $\Psi$，而不改变振幅（$A_x$、$A_z$ 不变）：

$$
\phi_f - \phi_i = -2(\omega t_m - \beta + \phi_i) \pmod{2\pi}, \quad
\psi_f - \psi_i = -2(\nu t_m + \psi_i) \pmod{2\pi}
$$

其中，$\beta$ 是由线性系统常数 $c$ 和 $\bar{k}$ 确定的方向角。这便是 Belló 等提出的 **LOEWE**（Lissajous Orbit Ever Without Eclipse）策略的数学基础：在 yz 投影的 Lissajous 图形拐角（速度最小处）执行单次冲量机动，即可跳过排除区而不改变轨道振幅。对于日地 Herschel/Planck 任务轨道规模的 Lissajous，该策略仅需约 15 m/s 每 6 年（Belló et al. 2010）。

### 振幅修正机动

当零代价转移（利用流形自然进入）所到达的 Lissajous 轨道与目标振幅偏差较大时，需要施加**振幅修正机动**（amplitude correction maneuver）。在 EPP 框架下，面外振幅从 $A_z^{(i)}$ 修正到 $A_z^{(f)}$ 的 z 冲量由以下公式给出（Belló et al. 2010）：

$$
\frac{\Delta \dot{z}}{\nu} = A_z^{(i)} \sin(\nu t_m + \psi_i) \pm \sqrt{A_z^{(f)2} - A_z^{(i)2} \cos^2(\nu t_m + \psi_i)}
$$

增大振幅（$A_z^{(f)} \ge A_z^{(i)}$）可在任意时刻执行；减小振幅仅在当前位置的 z 分量不超过目标振幅时可行。最优机动时机满足 $\nu t_m + \psi_i = \pi/2 + k\pi$，此时最小燃料消耗为 $|A_z^{(f)} - A_z^{(i)}|$。面内振幅修正的规律类似，但需额外考虑不稳定模态（$A_1$ 分量）的归零约束（Canalias and Masdemont 2008；Belló et al. 2010）。

## 相关概念

- [Halo 轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)

- [Lissajous 轨道（Lissajous Orbit）](/glossary/orbits/lissajous-orbit/)

- [Lindstedt-Poincaré 方法](/glossary/fundamentals/lindstedt-poincare-method/)

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)

- [作用-角度变量（Action-Angle Variables）](/glossary/dynamics/canonical-variables/)

## 参考文献

- Richardson, 1980, Analytic construction of periodic orbits about the collinear points（振幅条件 $l_1 A_x^2 + l_2 A_z^2 + \Delta = 0$ 的推导、三阶解析解表达式、日地系各平动点的常系数值）

- Belló et al., 2010, Invariant manifolds, Lagrangian trajectories and space mission design, Ch. 5（有效相位与 EPP 的定义、凌日回避 LOEWE 策略、振幅修正机动公式）

- Canalias and Masdemont, 2008, Computing natural transfers between Sun–Earth and Earth–Moon Lissajous libration point orbits, Acta Astronautica（面内/面外振幅对跨系统转移适宜性的影响）
