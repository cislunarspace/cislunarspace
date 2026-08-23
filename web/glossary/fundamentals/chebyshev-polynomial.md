---
permalink: /glossary/fundamentals/chebyshev-polynomial/
title: 切比雪夫多项式（Chebyshev Polynomial）
description: 由递推 $T_{n+1}(x) = 2xT_n(x) - T_{n-1}(x)$ 在 $[-1,1]$ 上定义的正交多项式族；因几乎达到 minimax 最优逼近而在航天动力学中深受倚重。JPL 以切比雪夫系数分块存储行星历表（如月球 4 天一组的系数块），轨迹设计中则用于将周期轨道的位置和速度分量表示为光滑可微的边界约束。
keywords: 切比雪夫多项式, Chebyshev polynomial, 正交多项式, JPL星历, DE405, 轨道逼近, 行星历表, minimax逼近, Clenshaw递推, 航天动力学
---

# 切比雪夫多项式（Chebyshev Polynomial）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

第一类切比雪夫多项式 $T_n(x)$ 在 $x \in [-1, 1]$ 上由递推定义（Abramowitz and Stegun 1964, Ch. 22）：

$$
T_0(x) = 1, \qquad T_1(x) = x, \qquad T_{n+1}(x) = 2x\,T_n(x) - T_{n-1}(x), \quad n \ge 1
$$

等价定义为 $T_n(x) = \cos(n \arccos x)$。关于权函数 $w(x) = 1/\sqrt{1-x^2}$ 正交：

$$
\int_{-1}^{1} \frac{T_m(x) T_n(x)}{\sqrt{1-x^2}} \, dx = \begin{cases} 0, & m \neq n \\ \pi, & m = n = 0 \\ \pi/2, & m = n \neq 0 \end{cases}
$$

第二类 $U_n(x)$ 满足 $U_n(\cos\theta) = \sin((n+1)\theta)/\sin\theta$，但航天动力学应用中几乎只用第一类。

核心性质：在 $[-1, 1]$ 上所有 $n$ 次首一多项式中，缩放后的 $2^{1-n}T_n(x)$ 具有最小的最大绝对值，即 **minimax 性质**。这使得切比雪夫逼近几乎达到理论最优并远易于计算。

## 求值

导数的递推借助第二类：$T_n'(x) = n U_{n-1}(x)$。数值求值采用 **Clenshaw 递推**：$O(N)$ 计算 $\sum a_n T_n(x)$，数值稳定性极佳，无需显式求每个 $T_n$（Press et al. 1992, Sec. 5.8）。

## JPL 星历存储

切比雪夫多项式在航天动力学中的实际重要性来自 JPL 的行星和月球历表（DE/LE 系列）。JPL 在数值积分太阳系运动方程（变步长 Adams 型积分器）后，将行星位置和速度数据分时间段用切比雪夫多项式拟合，仅存储系数（Standish 1990; Vallado 2022, Sec. 5.4）。

对 DE-245 和 DE-405，跨度安排为：

- 月球：4 天

- 水星和地月天平动：8 天

- 金星、地球、太阳：16 天

- 其他行星：32 天

用户需要行星在时刻 $t$ 的位置，只需定位正确系数组、将 $t$ 映射到 $\tau \in [-1,1]$、求切比雪夫和。这种表示紧凑（每段每体数百量级的系数，远少于原始离散位置表）、可微（速度和加速度通过 $T_n'$ 和 $T_n''$ 递推）、高精度（月球亚米级，太阳亚 $200$ 米级）。

## 轨道逼近与边界约束

在轨迹设计中，切比雪夫多项式用于将参考轨道（如停泊在 LEO 或 DRO 上的轨道）的位置和速度分量表示为以时间为变量的光滑可微函数。这样，转移弧的边界条件成为有限个切比雪夫系数的代数约束，相比逐点约束强制，优化问题规模大为缩小（Gomez et al. 2001, Vol. III, Sec. 4.3）。

同样的方法用于拟合拟周期不变环面：环面是由角度参数化的光滑曲面，将嵌入函数的切比雪夫展开随着项数指数收敛，使高维动力学结构可以有效存储和求值。

## 第一类与第二类对比

| 性质 | $T_n$（第一类） | $U_n$（第二类） |
|---|---|---|
| 定义 | $T_n(\cos\theta) = \cos(n\theta)$ | $U_n(\cos\theta) = \frac{\sin((n+1)\theta)}{\sin\theta}$ |
| 权函数 | $1/\sqrt{1-x^2}$ | $\sqrt{1-x^2}$ |
| 导数关系 | $T_n' = n U_{n-1}$ | — |
| 主要用途 | 逼近论、星历存储 | 数值分析（Gauss-Chebyshev 求积） |

## 相关概念

- [状态转移矩阵（STM）](/glossary/fundamentals/stm/)

- [直接配点法与最优控制数值方法](/glossary/dynamics/hermite-simpson-method/)

- [形状基法（Shape-Based Method）](/glossary/dynamics/shape-based-method/)

## 参考文献

- Abramowitz and Stegun, 1964, *Handbook of Mathematical Functions*, Ch. 22（切比雪夫多项式：递推、正交性、minimax 性质）

- Vallado, 2022, *Fundamentals of Astrodynamics and Applications*, Sec. 5.4（JPL 星历的切比雪夫表示；DE-245/DE-405 各天体跨度长度；月球与太阳精度）

- Standish, 1990, *The Observational Basis for JPL's DE 200, the Planetary Ephemerides of the Astronomical Almanac*, Astron. Astrophys. 233:252–271（JPL 星历的切比雪夫系数拟合流程）

- Gomez et al., 2001, *Dynamics and Mission Design near Libration Points*, Vol. III, Sec. 4.3（CR3BP 数值模拟中对 JPL 星历的切比雪夫表示使用）

- Press et al., 1992, *Numerical Recipes in C*, Sec. 5.8（切比雪夫求值的 Clenshaw 递推）
