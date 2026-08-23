---
title: Lagrange 系数（Lagrange Coefficients / f and g Functions）
description: 二体问题中将两时刻位置与速度线性关联的系数对 $(f,g,\dot f,\dot g)$——$\vec r=f\vec r_0+g\vec v_0$、$\vec v=\dot f\vec r_0+\dot g\vec v_0$。本文覆盖恒等式 $f\dot g-\dot f g\equiv 1$、按真近点角差/偏近点角差/抛物/双曲/通用变量等不同自变量的封闭形式、按 Taylor 级数的展开式（用于初轨确定）、以及在二体传播、兰伯特问题、初轨确定中的角色。
keywords: Lagrange 系数, Lagrange Coefficients, f and g 函数, f 和 g 函数, 二体传播, 通用变量, 初轨确定, 兰伯特问题
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Lagrange 系数（Lagrange Coefficients）
  desc: 二体问题中两时刻状态之间的线性映射 $(f,g,\dot f,\dot g)$——满足恒等式 $f\dot g-\dot f g\equiv 1$。
  image: /logo.png
og:
  title: Lagrange 系数详解 | 二体问题中的 f, g 函数
  description: 二体问题中将两时刻位置与速度线性关联的系数对 $(f,g,\dot f,\dot g)$。覆盖恒等式 $f\dot g-\dot f g\equiv 1$、按真/偏近点角差/抛物/双曲/通用变量的封闭形式、Taylor 展开式，以及在二体传播、兰伯特问题、初轨确定中的应用。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Lagrange 系数详解 | 二体问题中的 f, g 函数
  description: 二体问题中将两时刻位置与速度线性关联的系数对 $(f,g,\dot f,\dot g)$。覆盖恒等式 $f\dot g-\dot f g\equiv 1$、按真/偏近点角差/抛物/双曲/通用变量的封闭形式、Taylor 展开式，以及在二体传播、兰伯特问题、初轨确定中的应用。
  image: /logo.png
permalink: /glossary/dynamics/lagrange-coefficients/
---

# Lagrange 系数（Lagrange Coefficients / f and g Functions）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

二体问题中，任意时刻 $t$ 的位置与速度可写成初始时刻 $t_0$ 位置 $\vec r_0$ 与速度 $\vec v_0$ 的**线性组合**（Vallado 2022, §2.5；Battin 1999）：

$$
\vec r(t) = f\,\vec r_0 + g\,\vec v_0,\qquad \vec v(t) = \dot f\,\vec r_0 + \dot g\,\vec v_0.
$$

四个系数 $f, g, \dot f, \dot g$ 称为 **Lagrange 系数**（Lagrange coefficients）或 **f, g 函数**（f and g functions）。Lagrange 在 18 世纪为月球运动研究提出此形式；它把在中心引力场中如何由一段状态推算另一段状态（开普勒问题）线性化地表达出来，是二体传播、初轨确定与 [兰伯特问题](/glossary/fundamentals/lamberts-problem/) 求解的基础构件。

## 基本恒等式

由于二体运动角动量 $\vec h=\vec r\times\vec v$ 守恒，把 $\vec r=f\vec r_0+g\vec v_0$、$\vec v=\dot f\vec r_0+\dot g\vec v_0$ 代入 $\vec r\times\vec v=\vec r_0\times\vec v_0$ 并展开，得

$$
f\dot g - \dot f\,g \equiv 1.\quad(\text{Vallado 2022, Eq. 2-63})
$$

这个恒等式在数值实现中是免费的精度检查：任何 $f,g,\dot f,\dot g$ 的封闭或近似表达都必须满足它，否则违反了角动量守恒。

## 按不同自变量的封闭形式

Lagrange 系数的具体表达式取决于知道什么量，通常以某个轨道异常量之差作为自变量（Vallado 2022, §2.5）。

### 由真近点角差 $\Delta\nu$

当已知 $\Delta\nu=\nu-\nu_0$ 时，

$$
f = 1-\frac{r}{p}(1-\cos\Delta\nu),\quad
g = \frac{r r_0}{\sqrt{\mu p}}\sin\Delta\nu,
$$

$$
\dot f = \sqrt{\frac{\mu}{p}}\tan\!\frac{\Delta\nu}{2}\!\left(\frac{1-\cos\Delta\nu}{p}-\frac{1}{r}-\frac{1}{r_0}\right),\quad
\dot g = 1-\frac{r_0}{p}(1-\cos\Delta\nu),
$$

其中 $p=h^2/\mu=a(1-e^2)$ 是半通径。

### 由偏近点角差 $\Delta E$（椭圆）

$$
f = 1-\frac{a}{r_0}(1-\cos\Delta E),\quad
g = (t-t_0)-\sqrt{\frac{a^3}{\mu}}(\Delta E-\sin\Delta E),
$$

$$
\dot f = -\frac{\sqrt{\mu a}}{r_0 r}\sin\Delta E,\quad
\dot g = 1-\frac{a}{r}(1-\cos\Delta E).
$$

$\Delta E$ 由开普勒方程 $M-M_0=\Delta E-e(\sin E-\sin E_0)$ 隐式确定。这是椭圆轨道数值传播最常用的形式。

### 由抛物线异常 $B$（抛物线）

$$
f = \frac{1-B^2+2BB_0}{1+B_0^2},\quad
g = \frac{p^2\Delta B(1+BB_0)}{2h},\quad
\dot f = \frac{4h\,\Delta B}{p^2(1+B^2)(1+B_0^2)},\quad
\dot g = \frac{1-B_0^2+2BB_0}{1+B^2}.
$$

### 由双曲线异常 $\Delta H$（双曲线）

$$
f = 1-\frac{a}{r_0}(1-\cosh\Delta H),\quad
g = (t-t_0)-\sqrt{\frac{(-a)^3}{\mu}}(\sinh\Delta H-\Delta H),
$$

$$
\dot f = -\frac{\sqrt{-\mu a}}{r_0 r}\sinh\Delta H,\quad
\dot g = 1-\frac{a}{r}(1-\cosh\Delta H).
$$

### 由通用变量 $\chi$（统一形式，Battin 1987；Vallado 2022 Eq. 2-68）

通用变量法把椭圆、抛物、双曲统一起来，避免轨道类型分支：

$$
f = 1-\frac{\chi^2}{r_0}c_2,\quad
g = (t-t_0)-\frac{\chi^3}{\sqrt{\mu}}c_3,
$$

$$
\dot f = \frac{\sqrt{\mu}}{r_0 r}\chi(\psi c_3-1),\quad
\dot g = 1-\frac{\chi^2}{r}c_2,
$$

其中 $\psi=\chi^2/a$（带符号），$c_2, c_3$ 是 Stumpff 函数。这一形式是 [通用变量法](/glossary/dynamics/universal-variable-method/) 的核心。

## 级数形式（初轨确定专用）

只知道 $t_0$ 时刻的位置矢量大小 $r_0$、无法直接得到轨道根数时（典型于初轨确定的 Gauss 方法），用 $u\triangleq\mu/r_0^3$ 把 $\vec r(t)$ 在 $t_0$ 附近作 Taylor 展开，得到 $f$ 与 $g$ 的级数形式（Escobal 1965；Vallado 2022, Eq. 2-69）：

$$
f = 1-\frac{u}{2}\tau^2-\frac{\dot u}{6}\tau^3-\frac{\ddot u-u^2}{24}\tau^4-\cdots,
$$

$$
g = \tau-\frac{u}{6}\tau^3-\frac{\dot u}{12}\tau^4-\frac{3\ddot u-u^2}{120}\tau^5-\cdots,
$$

其中 $\tau=t-t_0$，各阶 $u$ 的导数在 $t_0$ 处取值。级数在 $\tau$ 较短（典型为观测弧段的一小段）时收敛快，是只使用位置观测信息便可实现的传播工具。

## 应用要点

- **二体传播**：给定 $\vec r_0, \vec v_0$ 与飞行时间，用开普勒方程解出 $\Delta E$（或 $\Delta H$），代入相应封闭式得 $\vec r(t),\vec v(t)$。
- **兰伯特问题**：[兰伯特问题](/glossary/fundamentals/lamberts-problem/) 用 $f$ 把 $\vec r_0\to\vec r$ 的位置关系化为关于半长轴 $a$ 的一个超越方程；多圈解、通用变量算法（Battin-Vaughan、Gooding）都建立在 $f,g$ 表达之上。
- **初轨确定**：Gauss 方法用 $f,g$ 的级数形式，把三个观测时刻的位置-速度耦合为关于 $\vec r_2$ 的迭代，是只用角度观测（或角度+少量距离）确定轨道的经典方法。
- **精度检查**：在数值实现里，每步传播后用 $f\dot g-\dot f g-1$ 的偏差评估积分误差。

## 易混点

- **Lagrange 系数 vs. Lagrange 行星运动方程**：前者是二体状态的线性传递关系，后者是轨道根数随时间的变分方程（用摄动加速度的 R/S/W 分量表达）。同名 Lagrange，截然不同的对象。
- **f, g 函数 vs. 通用变量**：通用变量 $\chi$ 是自变量；f, g 是用它表达的系数对。所谓用通用变量法传播，实际指用 $\chi$ 表达的 f, g 函数传播。
- **f, g 在兰伯特问题里**：兰伯特问题里 $\vec r_0, \vec r$ 已知，$\vec v_0, \vec v$ 待求；由 $\vec r=f\vec r_0+g\vec v_0$ 反解 $\vec v_0=(\vec r-f\vec r_0)/g$，再由 $\vec v=\dot f\vec r_0+\dot g\vec v_0$ 得 $\vec v$。这是 $f,g$ 在边值问题中的角色。

## 相关概念

- [兰伯特问题（Lambert's Problem）](/glossary/fundamentals/lamberts-problem/)
- [通用变量法（Universal Variable Method）](/glossary/dynamics/universal-variable-method/)
- [两点边值问题（Two-Point Boundary Value Problem）](/glossary/dynamics/tpbvp/)
- [二体问题 / 开普勒问题]

## 参考文献

- Vallado, D. A. (2022). *Fundamentals of Astrodynamics and Applications*, 5th ed., §2.5 (Classical Formulas Using f and g Functions) and §2.6 (Series Forms of f and g). Microcosm Press.
- Battin, R. H. (1999). *An Introduction to the Mathematics and Methods of Astrodynamics*, Revised Edition. AIAA.
- Bate, R. R., Mueller, D. D., & White, J. E. (1971). *Fundamentals of Astrodynamics*. Dover.
- Escobal, P. R. (1965, reprinted 1985). *Methods of Orbit Determination*, 2nd ed. Krieger.
- Herrick, S. (1971). *Astrodynamics*, Vol. 1. Van Nostrand Reinhold.
