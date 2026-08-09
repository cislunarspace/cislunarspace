---
title: 雅可比积分（Jacobi Integral / Jacobi Constant）
description: 圆型限制性三体问题（CR3BP）在会合坐标系下迄今已知的唯一解析积分，C = 2Ω − v²，由运动方程与速度点积一次积分得到。等价地称为雅可比常数、雅可比能量、C_J 或 J。C 越大代表能量越低，其临界值 C₁…C₅ 给出五条能量阈值，决定航天器在零速度曲面内的可达区域。
keywords: 雅可比积分, 雅可比常数, Jacobi Integral, Jacobi Constant, Jacobi Energy, C_J, 伪势能, 等效势能, CR3BP, 零速度曲面, 蒂塞朗参数, 地月空间
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 雅可比积分（Jacobi Integral / Jacobi Constant）
  desc: CR3BP 中唯一守恒量，C = 2Ω − v²。C 越大能量越低，决定航天器在地月空间的可达区域。
  image: /logo.png
og:
  title: 雅可比积分（Jacobi Integral）详解 | CR3BP 唯一守恒量
  description: 圆型限制性三体问题（CR3BP）在会合坐标系下迄今已知的唯一解析积分，C = 2Ω − v²，由运动方程与速度点积一次积分得到。等价地称为雅可比常数、雅可比能量、C_J 或 J。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 雅可比积分（Jacobi Integral）详解 | CR3BP 唯一守恒量
  description: 圆型限制性三体问题（CR3BP）在会合坐标系下迄今已知的唯一解析积分，C = 2Ω − v²，由运动方程与速度点积一次积分得到。
  image: /logo.png
permalink: /glossary/dynamics/jacobi-integral/
---

# 雅可比积分（Jacobi Integral / Jacobi Constant）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

雅可比积分（Jacobi integral）是圆型限制性三体问题（CR3BP）在会合坐标系下迄今已知的唯一解析积分，1836 年由 Jacobi 给出。其积分常数 $C$ 又称雅可比常数（Jacobi constant），记作 $C$、$C_J$，少数文献用 $J$（差一符号约定，见下节）。无量纲化（[会合坐标系](/glossary/fundamentals/synodic-frame/)下距离单位为主天体间距、$\omega=1$）后，其表达式为

$$C \;=\; 2\Omega(x,y,z) - v^2 \;=\; (x^2+y^2) + \frac{2(1-\mu)}{r_1} + \frac{2\mu}{r_2} - (\dot x^2+\dot y^2+\dot z^2),$$

其中 $\mu=m_2/(m_1+m_2)$ 为质量参数，$r_1$、$r_2$ 为到两主天体的距离，$v$ 为航天器在会合系中的速度大小（Vallado 2022, Eq. 12-15；Szebehely 1967, §1.6）。Vallado 称其为"伪积分"——并非因为推导可疑，而是因为它只存在于会合系这个特殊参考系下、且仅对限制性三体问题成立。

C 与"能量"方向相反：C 越大表示总能量越低、航天器越受限；C 越小能量越高、可达区域越大。

## 推导：科氏力做功为零

CR3BP 运动方程（无量纲形式）为
$$\ddot{\mathbf r} + 2\,\hat{\mathbf z}\times\dot{\mathbf r} = \nabla\Omega,$$
其中 $\nabla\Omega$ 同时含引力与离心项，科氏项 $2\hat{\mathbf z}\times\dot{\mathbf r}$ 单独列出。两边点乘 $\dot{\mathbf r}$：

$$\dot{\mathbf r}\cdot\ddot{\mathbf r} + \underbrace{\dot{\mathbf r}\cdot(2\hat{\mathbf z}\times\dot{\mathbf r})}_{=0} = \dot{\mathbf r}\cdot\nabla\Omega = \frac{d\Omega}{dt}.$$

科氏力恒与速度垂直、瞬时功率为零，故直接消失。剩下 $\tfrac{d}{dt}(\tfrac12 v^2) = \tfrac{d\Omega}{dt}$，积分即得 $v^2 = 2\Omega - C$（Vallado 2022, §12.7.1；Szebehely 1967, §1.6）。这一推导也说明：守恒量之所以存在，关键不在引力，而在会合系中运动方程不显含时间——换到惯性系，该积分立刻失效。

## 有效势 $\Omega$ 及其众多别名

$\Omega$ 由两部分组成：离心势 $\tfrac12(x^2+y^2)$ 加上两主天体的引力势 $(1-\mu)/r_1 + \mu/r_2$。它在本族各模板壳里至少出现过五个名字，全部指向同一个 $\Omega$：

- **有效势 / 等效势**（effective potential）——最通用叫法，强调把离心项并入"势"后方程可写成 $\ddot{\mathbf r}+2\hat{\mathbf z}\times\dot{\mathbf r}=\nabla\Omega$ 的紧凑形式；

- **伪势 / 赝势 / 拟势 / 伪势函数**（pseudo-potential, pseudopotential）——历史叫法，因为离心势不是真正的引力势；

- **有效赝势**（effective pseudo-potential）——以上两个名字的合体。

一个常见口误是把科氏力也算进 $\Omega$。**不对**：科氏力做功为零，不出现在 $\Omega$ 中；它只以速度耦合项留在运动方程里。$\Omega$ 的等值面 $\Omega=C/2$ 即 [零速度曲面](/glossary/dynamics/zero-velocity-surface/)；$\Omega$ 的梯度为零处给出五个 [平动点](/glossary/dynamics/libration-point/)。

## 符号与符号方向约定

文献中至少有三种符号同时流通，读公式比读符号保险：

| 记号 | 定义 | 数值方向 | 典型范围（地月系） | 出处 |
|---|---|---|---|---|
| $C$ 或 $C_J$ | $C=2\Omega-v^2$ | 大 = 低能 | $[2.988,+\infty)$ | Szebehely 1967；Vallado 2022；Parker & Anderson 2014 |
| $J$ | $J=\Omega-\tfrac12 v^2=-C/2$ | 大 = 高能 | $(-\infty,1.494]$ | Mingotti et al. 2011；Sánchez & Yárnoz 2016 |
| $E_{\text{rot}}$ | $E_{\text{rot}}=\tfrac12 v^2-\Omega=J$ | 大 = 高能 | 同 $J$ | Scott 2010（文中称 C，实为 $J$） |

"雅可比能量"（Jacobi energy）只是 $C$ 或 $J$ 的口语化称呼，不指向新概念；本词典把它并入本词条。

## 临界值 $C_i$ 与可达区域

把五个 [平动点](/glossary/dynamics/libration-point/) 处的速度取为零，得到五个临界雅可比常数 $C_i = 2\Omega(L_i)$。地月系（$\mu=0.01215$）与日地系（$\mu=3.04\times10^{-6}$）的典型值如下（Parker & Anderson 2014, Table 2-2）：

| 平动点 | 地月系 $C_i$ | 日地系 $C_i$ |
|---|---|---|
| $L_1$ | 3.188341 | 3.000898 |
| $L_2$ | 3.172161 | 3.000894 |
| $L_3$ | 3.012147 | 3.000003 |
| $L_4=L_5$ | 2.987997 = $3-\mu(1-\mu)$ | 2.999997 |

满足 $C_1>C_2>C_3>C_4=C_5$。这些阈值把航天器按能量分层：$C>C_1$ 时被锁在地球附近、月球附近或外部三个互不连通的区域之一；$C_2<C<C_1$ 时 $L_1$ 颈口打开、可地月转移；$C<C_2$ 时 $L_2$ 颈口打开、可去深空；$C\le C_4$ 时全空间可达。拓扑变化详见 [零速度曲面](/glossary/dynamics/zero-velocity-surface/)。

## 工程应用

### 转移可行性的硬约束

C 是航天器单凭动力学（无 $\Delta v$）能到达哪片区域的第一判据：从地球附近出发要"够得着"月球，必须把 C 降到 $C_1$ 以下；要去 $L_2$ 以外的深空，必须降到 $C_2$ 以下。低能地月转移的设计本质就是在合适的时机、以最小的 $\Delta v$ 把 C 从近地停泊轨道的值（约 $3.44$，地球引力主导）降到 $C_1\approx 3.188$ 以下。

### $\Delta C$ 与 $\Delta v$ 的解析关系

固定位置施加脉冲，$\Omega$ 不变，由 $C=2\Omega-v^2$ 立得
$$\Delta C = -2\,\mathbf v\cdot\Delta\mathbf v.$$
推论（与二体机械能 $\Delta E=\mathbf v\cdot\Delta\mathbf v$ 同向）：

1. $\Delta C$ 与 $\mathbf v\cdot\Delta\mathbf v$ 反号——降 C（升能量）需要顺速度方向的 $\Delta v$；
2. 速度越大的位置，同样的 $\Delta v$ 改变 C 越多——所以应在近心点而非远心点机动才高效；
3. $\Delta\mathbf v$ 与 $\mathbf v$ 共线时 $|\Delta C|$ 最大。

这一条是四脉冲、双脉冲地月转移中机动点选取的理论基础（乔琛远、杨乐平 2024）。连续小推力下对应的微分关系为 $\dot C = -2\,\mathbf a_T\cdot\mathbf v$（Scott 2010, Eq. 5.9，按其符号约定），同样在速度大处效率高。

### 蒂塞朗参数：用轨道根数估 $J$

彗星或小行星在行星遭遇前后，其日心轨道根数 $(a,e,i)$ 通过蒂塞朗参数（Tisserand parameter）近似对应同一个 J：
$$J \;\approx\; \frac{a_p}{a} + 2\cos i\,\sqrt{\frac{a}{a_p}(1-e^2)},$$
$a_p$ 为扰动行星的半长轴。该式源出于限制性三体问题的雅可比积分在远距离处的近似（Murray & Dermott 1999, §3.4；Sánchez & Yárnoz 2016, Eq. 2），用于在不掌握遭遇细节时识别同一颗彗星、或快速筛选可能被捕获的小行星。

### 数值积分精度检验

CR3BP 数值积分中，C 应严格守恒。其在积分过程中的实际漂移 $|C(t)-C_0|$ 是积分误差最硬的指标之一，常作为微分改正的终止判据（即所谓雅可比常数误差约束）。地月低能转移的精细化（Dei Tos & Topputo 2017）和站位保持（target point method）均以 C 的漂移量级评估方案质量。

### 周期轨道族延拓参数

在用数值延拓追踪 [Halo](/glossary/orbits/halo-orbit/)、[Lyapunov](/glossary/orbits/lyapunov-orbit/)、[Lissajous](/glossary/orbits/lissajous-orbit/)、[NRHO](/glossary/orbits/nrho/) 等周期轨道族时，C 是最自然的单参数延拓变量——固定 C 求周期解，或固定振幅看 C 的变化曲线，由此得到族的整体分岔图。

## 相关概念

- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [会合坐标系（Synodic Frame）](/glossary/fundamentals/synodic-frame/)

- [零速度曲面（Zero-Velocity Surface）](/glossary/dynamics/zero-velocity-surface/)

- [平动点（Libration Point）](/glossary/dynamics/libration-point/)

- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)

- [Halo 轨道](/glossary/orbits/halo-orbit/)

- [庞加莱截面](/glossary/dynamics/poincare-section/)

## 参考文献

- Szebehely V. *Theory of Orbits: The Restricted Problem of Three Bodies.* Academic Press, 1967, §1.6, Ch. 4.

- Vallado D. A. *Fundamentals of Astrodynamics and Applications.* 5th ed., 2022, §12.7.

- Parker J. S., Anderson R. L. *Low-Energy Lunar Trajectory Design.* JPL, 2014, Ch. 2, Table 2-2.

- Murray C. D., Dermott S. F. *Solar System Dynamics.* Cambridge Univ. Press, 1999, §3.4 (Tisserand criterion).

- Sánchez J. P., García Yárnoz D. "Asteroid retrieval missions enabled by invariant manifold dynamics." *Acta Astronautica*, 2016.

- Scott C. J. *Transfer and Capture into Distant Retrograde Orbits.* Ph.D. thesis, Purdue, 2010, §5.3.

- Mingotti G., Topputo F., Bernelli-Zazzera F. "Optimal low-thrust invariant manifold trajectories via attainable sets." *JGCD*, 2011.

- 乔琛远, 杨乐平. 地月 $L_1$ 点低能转移轨道设计与优化. 2024.
