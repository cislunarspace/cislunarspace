---
title: 形状基方法与速度 Hodograph（Shape-Based Method and Velocity Hodograph）
description: 形状基方法（shape-based method）用预设的解析形状函数（指数正弦、逆多项式、Fourier 级数等）逼近小推力轨迹的几何形状，由形状反求推力剖面，把无限维最优控制问题降为有限维参数优化。本词条系统介绍 Petropoulos 指数正弦曲线及其多圈 Lambert 类比（Izzo 2006）、Wall-Conway 逆多项式、速度 hodograph 形状法、CR3BP 修正指数正弦（Vellutini & Avanzini 2014）、平动点周期轨道的振幅-相位形状函数，给出可行性条件 |k1·k2²|<1 的来源、切向推力假设的代价，以及在全局搜索和为直接/间接方法提供初值时的工程定位。
keywords: 形状基方法, 形状法, 指数正弦, 逆多项式, 速度hodograph, Petropoulos, Wall-Conway, Vellutini, 小推力轨迹设计, 低推力转移, 平动点轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 形状基方法与速度 Hodograph（Shape-Based Method）
  desc: 用指数正弦、逆多项式、Fourier 级数等解析形状函数逼近小推力轨迹，由形状反求推力剖面。
  image: /logo.png
og:
  title: 形状基方法与速度 Hodograph 详解 | 术语定义
  description: 形状基方法用解析形状函数逼近小推力轨迹，由形状反求推力剖面。本词条覆盖指数正弦曲线（Petropoulos、Izzo）、逆多项式（Wall-Conway）、速度 hodograph、CR3BP 修正指数正弦（Vellutini & Avanzini），可行性条件与切向推力假设。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 形状基方法与速度 Hodograph 详解 | 术语定义
  description: 形状基方法用解析形状函数逼近小推力轨迹，由形状反求推力剖面。本词条覆盖指数正弦曲线（Petropoulos、Izzo）、逆多项式（Wall-Conway）、速度 hodograph、CR3BP 修正指数正弦（Vellutini & Avanzini），可行性条件与切向推力假设。
  image: /logo.png
permalink: /glossary/dynamics/shape-based-method/
---

# 形状基方法与速度 Hodograph（Shape-Based Method and Velocity Hodograph）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

形状基方法（shape-based method）是一类小推力轨迹的**近似解析设计法**：用含少量待定参数的解析函数（"形状函数"）描述转移轨道的几何形状——通常是极径 $r(\theta)$ 或速度矢量 $\boldsymbol{v}(t)$——再由逆动力学（inverse dynamics）从形状反算出推力加速度 $\boldsymbol{u}(t)$ 和飞行时间。它**不求解完整的最优控制问题**，只把无限维的轨迹优化降为有限维参数优化，因此算得快、便于全局搜索，但形状受所选函数族限制，得到的解一般非真正最优（Petropoulos & Longuski 2004；Conway 2010；Vellutini & Avanzini 2014）。

工程上的定位：形状基方法**用于初值生成和全局剪枝**——在大量候选方案中快速找到近似可行的转移，再交给 [直接配点](/glossary/dynamics/differential-correction/)、[HDDP](/glossary/dynamics/hddp/) 或 [间接法](/glossary/dynamics/indirect-methods/) 做精确优化。

## Petropoulos 指数正弦曲线

在中心引力 + 切向推力假设下，Petropoulos（Petropoulos & Longuski 2004）发现如下指数正弦

$$
r(\theta) = k_0\,\exp\!\big[k_1\sin(k_2\theta+\phi)\big]
$$

在 $\alpha=\gamma$（推力沿速度方向）下解析地满足二维运动方程。代入后得到角速率与推力加速度的封闭表达式

$$
\dot\theta^2 = \frac{\mu/r^3}{\tan^2\gamma + k_1 k_2^2 s + 1},\qquad a = \frac{\tan\gamma}{2\cos\gamma}\!\left[\frac{1}{\tan^2\gamma + k_1 k_2^2 s + 1} - \frac{k_2^2(1-2k_1 s)}{(\tan^2\gamma + k_1 k_2^2 s + 1)^2}\right]
$$

其中 $\tan\gamma=k_1 k_2\cos(k_2\theta+\phi)$、$s=\sin(k_2\theta+\phi)$。

**可行性条件 $|k_1 k_2^2|<1$。** 当 $|k_1 k_2^2|\ge 1$ 时 $\dot\theta^2$ 在某些 $\theta$ 处变负（角速率虚化）、或 $a$ 发散，形状不可飞。这是形状基方法最重要的约束。

**Izzo（2006）的多圈 Lambert 类比。** 给定 $r_1, r_2, \Delta\theta$ 与转移时间 $t_f$，把多圈 Lambert 问题推广到指数正弦：$k_2$ 固定时一族以 $\gamma_1$（初始航迹角）为参数的曲线穿过两端点，可行性给出 $\tan\gamma_1$ 的二次不等式，从而解析界定 $\gamma_1$ 的可行区间。这是低推力全局优化的"低推力 Lambert 求解器"。

## 其他形状函数族

**逆多项式（Wall & Conway）。** Wall 与 Conway（2010）提出五阶、六阶逆多项式 $r(\theta)=1/\sum_{i} a_i\theta^i$，参数更多、能拟合更一般的轨迹（含非切向推力分量），适合交会、拦截等固定时间问题，但代价是"维度灾难"——参数空间的网格搜索成本随阶数增长。

**速度 Hodograph 法。** 把速度矢量 $\boldsymbol{v}(t)$（而非位置）表示为时间或真近点角的形状函数，由 $\dot{\boldsymbol{r}}=\boldsymbol{v}$ 反求位置、由运动方程反求推力。优点是速度边界条件直接、便于处理速度匹配的交会问题，被用于地球–火星、地球–水星、小行星/彗星任务。

**Forbes 螺线、Lawden 螺线、对数螺线。** 经典解析螺线族，参数更少但表达力有限，多用于教学与初筛。

## CR3BP 修正指数正弦（Vellutini & Avanzini 2014）

经典指数正弦只在单中心引力下成立，地月 $L_1$ 转移中月球引力不可忽略。Vellutini & Avanzini 在原指数正弦上加一项**沿主天体连线方向变形**

$$
r(\theta) = k_0\,\exp\!\big[k_1\sin(k_2\theta+\phi) + k_3\theta\cos(k_4\theta+\phi)\big]，
$$

其中 $k_3\theta\cos(k_4\theta+\phi)$ 的振幅随角向距离线性增长，使螺线在远离地球时朝月球方向变形。在 CR3BP 方程下重新推导推力剖面（仍取切向推力假设），与经典形式相比在相同边界条件下转移时间更短、$\Delta V$ 更小。该方法可推广到日地 $L_1$、$L_2$ 转移（把质量比 $\mu$ 换成 $1-\mu$）。

## 平动点周期轨道的振幅-相位形状函数

针对平动点周期轨道（Halo、Lissajous）之间的低推力转移，中文文献构造了振幅与相位按多项式变化的新形状函数，把共线平动点附近的动力学特性（如 [中心流形](/glossary/dynamics/invariant-manifold/)、[零速度面](/glossary/dynamics/zero-velocity-surface/) 结构）嵌入形状参数化，相比通用形状函数能用更少参数表达有动力学意义的转移。这类形状法产出的初始猜测再交给 [Gauss 伪谱法](/glossary/dynamics/direct-methods/) 或 HDDP 精修。

## 应用要点

- **切向推力假设是核心简化。** 形状基方法通常假设 $\alpha=\gamma$（推力沿速度方向），把推力方向约束掉以换取解析解。当真实最优解含显著径向分量时（如平面转换、降轨），形状法的解可能远离最优。
- **可行性检查必须先做。** $|k_1 k_2^2|<1$ 是必要条件，违反时形状不可飞；类似的可行性条件也存在于其他形状族。
- **作为初值生成器最有效。** 形状法在全局搜索后为直接/间接法提供可行初值，是它们最有用的角色；不要把形状法解当最终工程方案。
- **多圈问题选 $k_2$ 网格。** $k_2$ 控制绕中心天体的圈数，全局优化时常固定 $k_2$ 扫描其余参数，再换 $k_2$ 重做。
- **CR3BP 中要重新推导。** 直接把二体形状搬到 CR3BP 会失真，须像 Vellutini 那样加入双中心变形项并重推推力剖面。

## 相关概念

- [直接配点法（Direct Collocation）](/glossary/dynamics/differential-correction/)
- [差分动态规划（DDP/iLQR/HDDP）](/glossary/dynamics/hddp/)
- [控制参数化（Control Parametrization）](/glossary/dynamics/control-parametrization/)
- [Gooding 方法与 Lambert 求解器](/glossary/dynamics/goodings-method/)
- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)
- [零速度面（Zero-Velocity Surface）](/glossary/dynamics/zero-velocity-surface/)
- [流管（Flow Tube）](/glossary/dynamics/flow-tube/)

## 参考文献

- Petropoulos, A. E., Longuski, J. M., 2004, "Shape-based algorithm for the automated design of low-thrust, gravity-assist trajectories," *J. Spacecr. Rockets*（指数正弦曲线的奠基论文）。
- Izzo, D., 2006, "Lambert's problem for exponential sinusoids," *J. Guid. Control Dyn.*, DOI: 10.2514/1.21796（多圈低推力 Lambert 问题，$\tan\gamma_1$ 可行区间）。
- Wall, B. J., Conway, B. A., 2010, "Shape-based approach to low-thrust rendezvous trajectory design," *J. Guid. Control Dyn.*（逆多项式形状函数）。
- Vellutini, E., Avanzini, G., 2014, "Shape-Based Design of Low-Thrust Trajectories to Cislunar Lagrangian Point," *J. Guid. Control Dyn.*, DOI: 10.2514/1.G000165（CR3BP 修正指数正弦，地月 $L_1$ 转移）。
- Conway, B. A. (ed.), 2010, *Spacecraft Trajectory Optimization*（教材，形状基方法一章）。
- 平动点周期轨道间小推力转移的 Gauss 伪谱法相关研究（振幅-相位形状函数）。
