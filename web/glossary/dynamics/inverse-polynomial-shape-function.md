---
permalink: /glossary/dynamics/inverse-polynomial-shape-function/
title: 形状基法（Shape-Based Method）
description: 用解析函数族（逆多项式、指数正弦、傅里叶级数等）参数化小推力轨道几何形状、由运动方程反解推力剖面的一类轨迹设计方法。所得近似轨迹用作后续数值优化（直接配点或间接法）的初值，大幅缩窄搜索空间。
keywords: 形状基法, shape-based method, 逆多项式形状函数, 指数正弦, 小推力轨道设计, 轨迹初值生成, 低推力转移, 轨道优化, 航天动力学
---

# 形状基法（Shape-Based Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

形状基法预先指定小推力轨道的几何形状——通常以极径 $r(t)$ 或极角 $\theta(t)$ 作为时间的参数化解析函数——再从运动方程反解出实现该形状所需的推力加速度剖面 $\mathbf{a}_T(t)$。这绕过了完整的最优控制求解，给出快速的近似轨迹，作为后续高保真数值优化（直接配点或间接打靶法）的初值（Petropoulos and Longuski 2004）。

在小推力任务的**初始设计阶段**尤其有用：设计空间巨大、NLP 解算器难以无初值收敛。

## 逆多项式形状函数

**逆多项式形状函数**以如下形式指定轨道极径：

$$
r(\theta) = \frac{1}{a_0 + a_1\theta + a_2\theta^2 + \dots + a_n\theta^n}
$$

其中 $\theta$ 为极角（通常是真近点角或广义角坐标）。系数 $a_i$ 是设计变量，需满足初末位置和速度边界条件并保持推力大小在容许范围内。

"逆"的含义在于表示形式 $r = 1/P(\theta)$ 而非 $r = P(\theta)$，这对大径向变化轨迹（$r$ 从 LEO 高度约 300 km 到月球距离约 384,000 km 跨越三个数量级）有天然优势——$r \to \infty$ 对应 $P(\theta) \to 0$，是良态极限。

推力剖面的推导方式：将形状代入极坐标运动方程：

$$
\ddot{r} - r\dot{\theta}^2 = -\frac{\mu}{r^2} + a_{T,r}, \qquad r\ddot{\theta} + 2\dot{r}\dot{\theta} = a_{T,\theta}
$$

移项求解 $a_{T,r}(\theta)$ 和 $a_{T,\theta}(\theta)$。

## 其他形状函数

| 形状类型 | 函数形式 | 典型用途 |
|---|---|---|
| 逆多项式 | $r = 1 / \sum a_i \theta^i$ | 大径向跨度，地球逃逸螺旋 |
| 指数正弦 | $r = k_0 \exp[k_1 \sin(k_2\theta + \phi)]$ | 低推力螺旋转移（Petropoulos and Longuski） |
| 傅里叶级数 | $r(\theta) = a_0 + \sum(a_n\cos n\theta + b_n\sin n\theta)$ | 周期轨道、共振转移 |
| 多项式（直接） | $r(\theta) = \sum a_i \theta^i$ | 短弧段、径向变化小 |
| 速度成形 | 直接预设 $v_r(\theta)$、$v_\theta(\theta)$ | 有限制推力方向或需顾及星食的设计 |

## 为什么用形状基

1. **速度快**：推力解析求解，形状确定阶段无需 NLP。
2. **可行性筛查**：超出推力大小限制或产生逆行的设计方案可极早排除，不耗 NLP 成本。
3. **自动满足边界**：形状在设计上即满足端点位置和速度约束。
4. **初值在收敛域内**：形状基轨迹通常位于高保真优化器的收敛盆地内，大幅缩短总求解时间。

局限性：形状基法强制预设函数形式，可能不包含真正的最优轨迹。它只是起点，不能替代严格优化。

## 在地月空间轨迹中的应用

对地月低推力转移，逆多项式和指数正弦形状已被用于为直接配点解算器（Gauss 伪谱法、Hermite-Simpson）生成初值。从 LEO 高度（~300 km）到月球距离（~384,000 km）的大径向变化天然适配逆多项式形式。

对 CR3BP 中周期轨道间的转移（如 halo→DRO），形状通常指定在旋转坐标系中，在会合系中求解所需推力，再变换到惯性系传播。

## 相关概念

- [直接配点法与最优控制数值方法](/glossary/dynamics/hermite-simpson-method/)

- [高斯伪谱法（GPM）](/glossary/dynamics/pseudospectral-method/)

- [间接法（Indirect Methods）](/glossary/dynamics/indirect-methods/)

- [低推力推进（Low-Thrust Propulsion）](/glossary/fundamentals/ep/)

- [切比雪夫多项式（Chebyshev Polynomial）](/glossary/fundamentals/chebyshev-polynomial/)

## 参考文献

- Petropoulos and Longuski, 2004, *Shape-Based Algorithm for Automated Design of Low-Thrust, Gravity-Assist Trajectories*, J. Spacecraft and Rockets 41(5):787–796（指数正弦形状；自动化借力序列）

- Wall and Conway, 2009, *Shape-Based Approach to Low-Thrust Rendezvous Trajectory Design*, J. Guidance 32(1):95–101（交会问题的多项式与傅里叶形状函数）

- Taheri and Abdelkhalik, 2012, *Shape-Based Approximation of Constrained Low-Thrust Space Trajectories Using Fourier Series*, J. Spacecraft and Rockets 49(3):535–546

- De Pascale and Vasile, 2006, *Preliminary Design of Low-Thrust Multiple Gravity-Assist Trajectories*, J. Spacecraft and Rockets 43(5):1065–1076（逆多项式与其他形状参数化）

- Gondelach and Noomen, 2015, *Hodographic-Shaping Method for Low-Thrust Interplanetary Trajectory Design*, J. Spacecraft and Rockets 52(3):728–738
