---
title: 李雅普诺夫稳定性（Lyapunov Stability）
description: 刻画平衡点或闭轨在扰动下是否保持在邻域内的性质，并区分稳定、渐近稳定与指数稳定。给出四类稳定性的量词定义，李雅普诺夫函数与第二方法的正定性、导数符号与充分性，线性化判据的三种特征值情形与零实部失效反例，并说明哈密顿系统平衡点不可能渐近稳定，以及共线平动点、三角平动点、周期轨道 Floquet 稳定性、雅可比积分与受控系统中的用法。
keywords: 李雅普诺夫稳定性, Lyapunov stability, 李雅普诺夫函数, 李雅普诺夫第二方法, 李雅普诺夫第一方法, 渐近稳定, 指数稳定, 线性化判据, 平衡点稳定性, 哈密顿系统, 稳定性
author: 天疆说
date: 2026-10-26
lastUpdated: 2026-10-26
wechatShare:
  title: 李雅普诺夫稳定性（Lyapunov Stability）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 李雅普诺夫稳定性详解 | 术语定义
  description: 平衡点与闭轨在扰动下是否保持在邻域内以及是否收敛的判据，含第二方法、线性化判据、哈密顿系统的边界与地月空间用法。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 李雅普诺夫稳定性详解 | 术语定义
  description: 平衡点与闭轨在扰动下是否保持在邻域内以及是否收敛的判据，含第二方法、线性化判据、哈密顿系统的边界与地月空间用法。
  image: /logo.png
permalink: /glossary/dynamics/lyapunov-stability/
aliases:
  - Lyapunov stability
  - Lyapunov Stability
  - Liapunov stability
  - 李雅普诺夫稳定
  - Lyapunov 稳定性
related:
  - ref: dynamics/lyapunov-exponent
    relation: related
  - ref: dynamics/lagrange-stability
    relation: related
  - ref: dynamics/kam-theory
    relation: related
  - ref: dynamics/stability-index
    relation: related
  - ref: dynamics/monodromy-matrix
    relation: related
  - ref: dynamics/center-manifold
    relation: related
  - ref: dynamics/jacobi-integral
    relation: related
  - ref: orbits/lyapunov-orbit
    relation: related
---

# 李雅普诺夫稳定性（Lyapunov Stability）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

李雅普诺夫稳定性（Lyapunov stability）是常微分方程定性理论中关于平衡点或闭轨在扰动下是否保持在邻域内的性质。考虑自治系统

$$
\dot{\mathbf x}=\mathbf f(\mathbf x),
$$

其中 $\mathbf f$ 在原点邻域内连续可微。设 $\mathbf x_e$ 为平衡点，即 $\mathbf f(\mathbf x_e)=\mathbf 0$，经平移 $\mathbf x-\mathbf x_e$ 可不妨取 $\mathbf x_e=\mathbf 0$。稳定性总是相对于某个解或不变集而言，因而是局部性质，定义只涉及平衡点邻域内的行为，不涉及解在全局相空间中的分布\cite{LuTongXingFeiXianXingWuLiGaiLunDi2Ban2010,seydelPracticalBifurcationStability2010}。

稳定（Lyapunov stable）：对任意 $\varepsilon>0$，存在 $\delta=\delta(\varepsilon,t_0)>0$，使 $\|\mathbf x(t_0)\|<\delta$ 时，对一切 $t\ge t_0$ 都有 $\|\mathbf x(t)\|<\varepsilon$。容许的初始偏差只与 $\varepsilon$ 和初始时刻有关，这一定义把扰动后的整条轨迹限制在平衡点的 $\varepsilon$ 邻域内。自治系统的向量场不显含时间，$\delta$ 可以取得与 $t_0$ 无关，此时称一致稳定。

渐近稳定（asymptotically stable）：平衡点稳定，并且存在 $\delta>0$，使 $\|\mathbf x(t_0)\|<\delta$ 时，$\mathbf x(t)$ 随 $t$ 趋于无穷收敛到原点。稳定只要求轨迹不离开邻域，渐近稳定进一步要求轨迹最终回到平衡点。收敛速度对 $t_0$ 一致时称一致渐近稳定。

指数稳定（exponentially stable）：存在常数 $\alpha>0$、$\lambda>0$ 与 $\delta>0$，使 $\|\mathbf x(t_0)\|<\delta$ 时，对一切 $t\ge t_0$ 有

$$
\|\mathbf x(t)\|\le \alpha\|\mathbf x(t_0)\|e^{-\lambda(t-t_0)}.
$$

指数稳定给出明确的衰减率 $\lambda$ 与放大系数 $\alpha$，它蕴含渐近稳定，因而也蕴含稳定。

不稳定（unstable）：不满足上述稳定定义，即存在 $\varepsilon>0$，使对任意 $\delta>0$ 都能找到满足 $\|\mathbf x(t_0)\|<\delta$ 的初值，其轨迹在某一时刻 $t\ge t_0$ 越出 $\varepsilon$ 邻域。

闭轨的稳定性可经庞加莱映射归约为该映射不动点的稳定性，也可用扰动轨道与闭轨之间的距离是否有界并在时间趋于无穷时趋于零来定义。两种口径在双曲闭轨上一致，详细处理见 [单值矩阵与Floquet稳定性分析](/glossary/dynamics/monodromy-matrix/)\cite{seydelPracticalBifurcationStability2010,meyerIntroductionHamiltonianDynamical2017}。

稳定、渐近稳定与指数稳定是三个不同层次的结论，写作时要指明用的是哪一个。渐近稳定与指数稳定都要求收敛，稳定只要求轨迹不越出邻域，三者不能互相替代。稳定是局部结论，不蕴含系统的全部解在全部时间上有界\cite{LuTongXingFeiXianXingWuLiGaiLunDi2Ban2010}。

## 李雅普诺夫函数与第二方法

李雅普诺夫第二方法（second method of Lyapunov）也称直接法，不经求解运动方程，而用一个标量函数沿轨道的导数符号判断稳定性。设 $D$ 为原点的一个邻域，函数 $V:D\to\mathbb R$ 连续可微，$V(\mathbf 0)=0$，且当 $\mathbf x\ne\mathbf 0$ 时 $V(\mathbf x)>0$，则称 $V$ 在 $D$ 上正定。正定性说明 $V$ 在平衡点取严格极小值，可以把它读成一种广义能量或到平衡点的距离度量\cite{LuTongXingFeiXianXingWuLiGaiLunDi2Ban2010}。

$V$ 沿系统轨迹的时间导数由链式法则给出

$$
\dot V(\mathbf x)=\nabla V(\mathbf x)\cdot\mathbf f(\mathbf x),
$$

它只用到向量场，不需要轨迹的解析表达式。判据分三层\cite{LuTongXingFeiXianXingWuLiGaiLunDi2Ban2010,seydelPracticalBifurcationStability2010}。

- 若 $\dot V\le 0$ 在 $D$ 上成立，则原点是稳定的。$V$ 沿轨迹不增，轨迹被限制在 $V$ 的等值面内，不能越出任意小的邻域。
- 若 $\dot V$ 在 $D\setminus\{\mathbf 0\}$ 上负定，即 $\dot V<0$，则原点是渐近稳定的。$V$ 严格下降，轨迹除原点外不能停在任一等值面上。
- 若还存在 $c_1,c_2,c_3>0$，使 $c_1\|\mathbf x\|^2\le V(\mathbf x)\le c_2\|\mathbf x\|^2$ 且 $\dot V\le -c_3\|\mathbf x\|^2$，则原点指数稳定，衰减率可由 $c_3/(2c_2)$ 估计。

当 $\dot V\le 0$ 但 $\dot V$ 只在部分方向为零时，可以用 LaSalle 不变性原理加强结论。若集合 $\{\dot V=0\}$ 内除原点外不含任何整条轨迹，则原点渐近稳定。这一原理把导数不增与轨迹不能停在零导数集分开处理，适用于导数负半定而非负定的情形\cite{LuTongXingFeiXianXingWuLiGaiLunDi2Ban2010}。

第二方法是充分条件，不是必要条件。构造不出李雅普诺夫函数，不能推出系统不稳定。反过来，逆定理保证渐近稳定的平衡点一定存在李雅普诺夫函数，但逆定理通常只给出存在性，具体构造仍然依赖问题结构\cite{LuTongXingFeiXianXingWuLiGaiLunDi2Ban2010,seydelPracticalBifurcationStability2010}。

机械系统中的能量或有效势常可直接充当李雅普诺夫函数。保守系统的总能量沿轨道守恒，$\dot V=0$，只能给出稳定，给不出渐近稳定。这一条与下一节哈密顿系统的结论一致\cite{meyerIntroductionHamiltonianDynamical2017}。

## 线性化判据与第一方法

李雅普诺夫第一方法（first method of Lyapunov）也称间接法，通过平衡点处线性化系统的谱判断非线性系统的局部稳定性。设

$$
A=\left.\frac{\partial\mathbf f}{\partial\mathbf x}\right|_{\mathbf x=\mathbf 0},
$$

线性化系统为 $\dot{\boldsymbol\xi}=A\boldsymbol\xi$。按 $A$ 的特征值实部，判据分三种情形\cite{LuTongXingFeiXianXingWuLiGaiLunDi2Ban2010,seydelPracticalBifurcationStability2010}。

- 全部特征值的实部为负：原点是线性化系统的渐近稳定平衡点，非线性系统同样指数稳定，因而渐近稳定。
- 至少一个特征值的实部为正：线性化系统存在增长模态，原点是非线性系统的不稳定平衡点。
- 全部特征值的实部均非正，且至少一个实部为零：判据失效。线性化既不能证明稳定，也不能证明不稳定，必须回到非线性分析。

第三种情形不是技术细节，而是判据的真实边界。一维例子足以说明。系统 $\dot x=-x^3$ 的线性化在原点为零，线性化判据给不出任何结论，但方程可直接积分，解 $x(t)=x_0/\sqrt{1+2x_0^2t}$ 对任意初值都收敛到零，原点渐近稳定。系统 $\dot x=x^3$ 的线性化同样为零，而初值 $x_0>0$ 的解在有限时间内发散，原点不稳定。两个系统的线性化完全相同，稳定性却相反，零实部时不能依据线性化下结论\cite{seydelPracticalBifurcationStability2010}。

判据失效时需要借助中心流形约化、正规形、李雅普诺夫函数或数值延拓。中心方向上的动力学由 [中心流形与法向双曲不变流形](/glossary/dynamics/center-manifold/) 描述，高阶项决定稳定性\cite{seydelPracticalBifurcationStability2010}。

第一方法与第二方法互补。第一方法只做一次线性代数，适用于双曲平衡点，对零实部失效。第二方法不要求双曲性，但需要构造全局或局部的李雅普诺夫函数。两者都不要求求解完整的非线性运动方程\cite{LuTongXingFeiXianXingWuLiGaiLunDi2Ban2010}。

## 哈密顿系统与地月空间

### 哈密顿系统平衡点不可能渐近稳定

哈密顿系统的相流保持相空间体积，这一性质即刘维尔定理。若平衡点渐近稳定，则其某邻域内的初值最终都被吸入更小的邻域，该邻域的相体积随时间趋于零，与体积保持矛盾。因此哈密顿系统的平衡点不可能渐近稳定，更不可能指数稳定，若稳定，只能是李雅普诺夫意义下的稳定\cite{meyerIntroductionHamiltonianDynamical2017,cellettiStabilityChaosCelestial2010}。

这条结论划定了概念的使用范围。渐近稳定与指数稳定只出现在耗散系统或受控系统中，在保守的哈密顿模型里找不到。讨论地月空间的自然动力学时，稳定性通常指李雅普诺夫稳定或线性稳定，而不是收敛到平衡点\cite{meyerIntroductionHamiltonianDynamical2017}。

### 共线平动点与三角平动点

圆型限制性三体问题的共线平动点 $L_1$、$L_2$、$L_3$ 在会合系中的线性化谱含一对符号相反的实特征值，对应一个不稳定方向，线性化判据直接判定它们不稳定。这一结论对 $0<\mu<1$ 的全部质量参数成立\cite{szebehelyTheoryOrbitRestricted1967}。

三角平动点 $L_4$、$L_5$ 的线性稳定性依赖质量参数。当 $\mu$ 小于 Routh 临界值 $\mu_R\approx 0.03852$ 时，线性化特征值全部为纯虚数，线性化系统稳定。地月系的 $\mu\approx 0.01215$ 低于临界值，因此 $L_4$、$L_5$ 线性稳定\cite{szebehelyTheoryOrbitRestricted1967}。

线性稳定不等于非线性稳定。纯虚谱只说明线性近似下的中性振荡，高阶项可能把中性方向变成不稳定方向，在共振附近尤其如此。非线性稳定性要靠高阶正规形、KAM 理论或直接的李雅普诺夫函数证明，不能由线性化判据推出\cite{meyerIntroductionHamiltonianDynamical2017,cellettiStabilityChaosCelestial2010}。

### 周期轨道与 Floquet 稳定性

周期轨道的线性稳定性由单值矩阵 $M=\Phi(T,0)$ 的谱决定，其特征值称 Floquet 乘子。对一般的周期系数线性系统，全部乘子的模不大于 1，且位于单位圆上的乘子对应单重特征值时，周期轨道线性稳定。哈密顿系统的辛结构使乘子按互反与共轭成组出现，线性稳定等价于全部乘子落在单位圆上且单重\cite{brouckeStabilityPeriodicOrbits1969,henonVerticalStabilityPeriodic1973,meyerIntroductionHamiltonianDynamical2017}。

乘子给出每个模态在一圈内的放大或衰减倍数，工程上把它们压缩成 [稳定性指数（Stability Index）](/glossary/dynamics/stability-index/)，用于比较族成员与判别分岔。稳定性指数是线性化判据在庞加莱映射上的标量化，不涉及李雅普诺夫函数\cite{brouckeStabilityPeriodicOrbits1969}。

在航天器轨道保持中，先由单值矩阵识别不稳定 Floquet 模态，再针对该模态设计反馈或选择控制时刻，这一流程把线性稳定性分析直接接到控制设计上。地月晕轨道的轨道与姿态耦合周期解就是按 Floquet 模态分解来评估与稳定化的\cite{colombiFloquetModesStability2021}。

### 雅可比积分给出的有界运动区域

圆型限制性三体问题存在雅可比积分

$$
C=2\Omega(\mathbf r)-v^2,
$$

其中 $\Omega$ 为会合系中的有效势，$v$ 为相对会合系的速度大小。$C$ 沿轨道守恒，给定 $C$ 与位置，速度平方 $v^2=2\Omega-C$ 必须非负，由此得到 [零速度曲面（Zero-Velocity Surface）](/glossary/dynamics/zero-velocity-surface/) 与允许运动的 Hill 区域\cite{szebehelyTheoryOrbitRestricted1967}。

雅可比积分可以作为 $\dot V=0$ 型的李雅普诺夫式函数使用，它给出运动的有界性，但不给出渐近稳定，也不判定某条具体周期轨道的稳定性。当 Hill 区域有界时，轨迹被限制在有限区域内，这只能说明轨迹有界，但不能据此判定某个平衡点或周期轨道的李雅普诺夫稳定性。给定 $C$ 的能量面内可以有多条周期轨道，稳定性各不相同，因此 $C$ 本身不能判定某条轨道的稳定性\cite{szebehelyTheoryOrbitRestricted1967}。

### 受控系统中的李雅普诺夫函数

在受控轨道设计中，第二方法从分析工具变成设计工具。给定误差动力学，选一个正定的 $V$，再设计控制律使闭环的 $\dot V$ 负定或负半定，闭环稳定性即由构造保证。这一思路不要求系统本身耗散，控制项提供了李雅普诺夫函数所需的下降方向\cite{stepanyantsDirectLyapunovMethod2023,perezLyapunovbasedAdaptiveFeedback2014}。

Stepanyants 2023 在限制性三体问题的线性模型中，用光压力作为控制手段，使航天器在共线平动点 $L_2$ 附近的周期运动达到渐近稳定，且不消耗工质。控制面面积按航天器质量估算，稳定性由直接李雅普诺夫方法保证\cite{stepanyantsDirectLyapunovMethod2023}。Pérez 与 Bevilacqua 2014 用李雅普诺夫方法设计平面相对机动的自适应反馈，以差分阻力为执行手段，控制律由误差函数的下降条件导出\cite{perezLyapunovbasedAdaptiveFeedback2014}。

Holt 等 2024 把李雅普诺夫控制器用于低推力地月转移，从地球静止转移轨道飞向月球极轨道。该文的重点是轨迹设计与制导，李雅普诺夫控制律用于生成次优转移，并用强化学习调节控制器，不是李雅普诺夫稳定性的证明。引用时应把它当作控制律构造与轨迹设计的实例\cite{holtReinforcedLyapunovControllers2024}。

## 概念辨析

### 与李雅普诺夫指数

[李雅普诺夫指数（Lyapunov Exponent）](/glossary/dynamics/lyapunov-exponent/)是相邻轨迹分离或收敛的定量速率，按时间平均定义，最大指数为正提示敏感依赖与混沌。它回答分离多快，不回答扰动是否有界。指数为零不能推出稳定，指数为负也不等于满足李雅普诺夫稳定定义，因为指数是平均增长率，有限时段内仍可能出现增长，而非线性系统的稳定性要求对全部初值与全部时间成立\cite{guzzoTheoryApplicationsFast2023}。稳定性的判据是李雅普诺夫函数或线性化谱，判据里不出现指数增长率\cite{seydelPracticalBifurcationStability2010}。

### 与拉格朗日稳定性

[拉格朗日稳定性（Lagrange Stability）](/glossary/dynamics/lagrange-stability/)问的是解在全部时间上是否有界，是全局性质。李雅普诺夫稳定性问的是平衡点或闭轨的邻域是否在扰动下保持，是局部性质。两者独立，一个系统可以局部渐近稳定而不是拉格朗日稳定。例子是 $\dot x=-x+x^2$，原点是渐近稳定的，但初值 $x_0>1$ 的解在有限时间内发散，系统不是拉格朗日稳定\cite{marchalThreebodyProblem1990,seydelPracticalBifurcationStability2010}。反过来，有界的混沌运动可以拉格朗日稳定，却不满足李雅普诺夫稳定定义\cite{cellettiStabilityChaosCelestial2010}。

### 与 KAM 理论与长期稳定性

[KAM 理论与长期稳定性](/glossary/dynamics/kam-theory/)处理近可积哈密顿系统，KAM 定理给出非共振不变环面在小扰动下的存续，Nekhoroshev 定理给出作用量在指数长时间内的有界估计。两者都是哈密顿系统的长期或全局结论。李雅普诺夫稳定性是局部定性判据，针对单个平衡点或闭轨，要求扰动在全部时间上保持有界。两者层次不同，可以互补，KAM 环面为稳定区提供结构解释，李雅普诺夫函数与线性化谱给出局部判据\cite{meyerIntroductionHamiltonianDynamical2017,cellettiStabilityChaosCelestial2010}。

### 与稳定性指数

[稳定性指数（Stability Index）](/glossary/dynamics/stability-index/)是周期轨道线性稳定性的标量化，把单值矩阵的每对非平凡 Floquet 乘子压成一个实数。它属于线性化判据在庞加莱映射上的应用，只回答周期轨道的线性稳定性，不覆盖平衡点的李雅普诺夫函数判据，也不给出非线性稳定性\cite{brouckeStabilityPeriodicOrbits1969,henonVerticalStabilityPeriodic1973}。

### 与 Lyapunov 轨道族

[Lyapunov 轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)的名字来自李雅普诺夫中心定理，该定理保证共线平动点邻域存在平面与垂直两族周期解。轨道族与稳定性理论同名不同义，Lyapunov 轨道本身通常不稳定，不能因为名字里有 Lyapunov 就把它当作稳定轨道\cite{alessiLeavingMoonMeans2009}。

## 相关概念

- [李雅普诺夫指数（Lyapunov Exponent）](/glossary/dynamics/lyapunov-exponent/)
- [拉格朗日稳定性（Lagrange Stability）](/glossary/dynamics/lagrange-stability/)
- [KAM 理论与长期稳定性（KAM Theory and Long-Term Stability）](/glossary/dynamics/kam-theory/)
- [稳定性指数（Stability Index）](/glossary/dynamics/stability-index/)
- [单值矩阵与Floquet稳定性分析（Monodromy Matrix）](/glossary/dynamics/monodromy-matrix/)
- [中心流形与法向双曲不变流形（Center Manifold & NHIM）](/glossary/dynamics/center-manifold/)
- [雅可比积分（Jacobi Integral / Jacobi Constant）](/glossary/dynamics/jacobi-integral/)
- [Lyapunov 轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
