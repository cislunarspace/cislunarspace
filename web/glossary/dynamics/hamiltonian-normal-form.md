---
title: 辛结构与哈密顿正规形（Symplectic Structure and Hamiltonian Normal Form）
description: 哈密顿力学的辛结构框架，及其在平衡点与周期轨道邻域化简动力学中的应用。覆盖辛矩阵与辛变换、泊松括号、生成函数、Birkhoff 与 Birkhoff-Gustavson 正规形、同调方程与小除数、李级数方法（Hori/Deprit/Meyer）、Moser 定理，以及共线平动点处常用的偏正规形。
keywords: 辛矩阵, 辛变换, 辛几何, 泊松括号, 生成函数, Birkhoff 正规形, Birkhoff-Gustavson 正规形, Hamilton 正规形, 同调方程, 小除数, Hori 方法, Moser 定理, 偏正规形
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 辛结构与哈密顿正规形
  desc: 哈密顿力学的辛结构框架及平动点邻域的正规形化简。
  image: /logo.png
og:
  title: 辛结构与哈密顿正规形详解 | 哈密顿力学
  description: 哈密顿力学的辛结构框架。覆盖辛矩阵与辛变换、泊松括号、生成函数、Birkhoff 与 Birkhoff-Gustavson 正规形、同调方程与小除数、李级数方法（Hori/Deprit/Meyer）、Moser 定理、偏正规形。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 辛结构与哈密顿正规形详解 | 哈密顿力学
  description: 哈密顿力学的辛结构框架。覆盖辛矩阵与辛变换、泊松括号、生成函数、Birkhoff 与 Birkhoff-Gustavson 正规形、同调方程与小除数、李级数方法（Hori/Deprit/Meyer）、Moser 定理、偏正规形。
  image: /logo.png
permalink: /glossary/dynamics/hamiltonian-normal-form/
---

# 辛结构与哈密顿正规形（Symplectic Structure and Hamiltonian Normal Form）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 辛矩阵与辛变换

在标准相空间 $\mathbb{R}^{2n}$，坐标 $\mathbf{z}=(\mathbf{q},\mathbf{p})$，定义块矩阵 $J=\begin{pmatrix}0&I\\-I&0\end{pmatrix}$。实方阵 $M$ 满足 $M^{\!\top}JM=J$ 则为**辛矩阵**，所有这样的矩阵构成辛群 $Sp(2n,\mathbb{R})$。辛矩阵行列式为 1，特征值在 $\lambda\mapsto\bar\lambda$、$\lambda\mapsto 1/\lambda$ 下对称（Meyer & Offin 2017, §2.4）。光滑变量替换 $\mathbf{z}=\mathbf{Z}(\boldsymbol{\zeta})$ 若其 Jacobi 处处辛，则为**辛变换（正则变换）**；它保持 Hamilton 方程的形式不变。

任何 Hamilton 流的状态转移矩阵都是辛矩阵，这是平动点轨道单值矩阵具有 saddle×center×center 特征值结构的根源，也是 [庞加莱截面](/glossary/dynamics/poincare-section/) 保持相体积的原因。**辛几何**是其微分几何抽象：辛流形携带闭的、非退化的 2-形式 $\omega$；Darboux 定理保证所有辛流形局部都形如 $(\mathbb{R}^{2n},\omega_0)$。

## 泊松括号

相空间上光滑函数 $F,G$ 的**泊松括号**定义为

$$\{F,G\}=\nabla F^{\!\top}J\,\nabla G=\frac{\partial F}{\partial\mathbf{q}^{\!\top}}\frac{\partial G}{\partial\mathbf{p}}-\frac{\partial F}{\partial\mathbf{p}^{\!\top}}\frac{\partial G}{\partial\mathbf{q}}.$$

它是双线性、反对称且满足 Jacobi 恒等式的，使光滑函数构成 Lie 代数。Hamilton 方程写作 $\dot F=\{F,H\}$；$F$ 守恒当且仅当 $\{F,H\}=0$；$n$ 个相互对合的独立积分使系统可积。泊松括号在辛变量替换下不变，这是 Meyer & Offin (2017) 定理 2.6.3 的代数内容，也是正则变换成为哈密顿力学自然变量的原因。

## 生成函数与李变换

正则变换可由**生成函数**编码。在李级数方法中（Hori 1966；Deprit 1969；Meyer），自治 Hamilton 量 $G$ 生成一个单参数正则变换族 $\boldsymbol{\zeta}\mapsto\mathbf{Z}_t(\boldsymbol{\zeta})$，对任意函数 $F$ 的作用为 $F\mapsto F+\{G,F\}+\tfrac12\{G,\{G,F\}\}+\cdots$，即*李变换*。逐阶选择 $G$ 消去 $H$ 中不需要的项即得正规形。**Hori/Deprit 方法**给出了一个递归的、便于计算机代数实现的形式，在天体力学中广泛使用。

## 正规形流程与同调方程

考虑平衡点（如共线平动点）附近的 Hamilton 量 $H=H_2+\sum_{k\geq 3}H_k$，$H_k$ 为 $k$ 次齐次多项式。正规形寻找一个由生成 Hamilton 量 $G=\sum_{k\geq 3}G_k$ 的时间一映射给出的正则变换 $\boldsymbol{\zeta}\mapsto\mathbf{Z}(\boldsymbol{\zeta})$，使新变量下不需要的项逐阶消失（Gómez et al. 2001, vol. III）。第 $k$ 阶的决定方程为**同调方程**

$$\widetilde H_k = H_k + \{G_k,H_2\} + (\text{低阶已知项}),$$

未知量为 $G_k$ 与新的系数多项式 $\widetilde H_k$。$H_k$ 的每个单项式求解 $G_k$ 时产生形如 $\mathbf{k}\cdot\boldsymbol{\omega}$（频率点积）的分母。若 $\mathbf{k}\cdot\boldsymbol{\omega}$ 很小但不为零，$G_k$ 的系数极大（即**小除数问题**），形式级数可能发散。共线平动点处的双曲频率 $\lambda$ 为非共振项分母提供下界，故有限阶化简是良定义的。

## Birkhoff 与 Birkhoff-Gustavson 正规形

**Birkhoff 正规形**（BNF）消去所有非共振单项式，仅保留与 $H_2$ 对合的项；非共振情形下化简后的 Hamilton 量只依赖作用量，使截断系统可积（Birkhoff 1927；Meyer & Offin 2017, Ch.10）。**Birkhoff-Gustavson 正规形**处理共振情形，保留共振单项式，适用于空间 CR3BP（两中心频率接近 1:1 共振，产生 halo 轨道；Hill 情形下更高阶共振在 57 阶附近出现，Gómez et al. 2001, vol. III）。

## 偏正规形、约化与 Moser 定理

**偏正规形**（PNF）只消去不稳定（双曲）项，保留中心流形动力学。配合中心流形 $W^c$ 约化，得到 4 维（或平面 2 维）保守 Hamilton 系统，捕捉 $L_{1,2}$ 邻域的 Lissajous、halo、拟 halo 轨道族而不必处理双曲方向（Gómez et al. 2001；Jorba & Masdemont 1999）。**正规形约化**对庞加莱映射做同样的事：化简辛映射以读出稳定性与分岔结构。

**Moser 定理**（Moser 1958）给出 Birkhoff 正规形在椭圆平衡点附近收敛的充分条件，形式级数此时描述真实的不变曲线，为平动点邻域的稳定性论断与不变流形参数化提供依据。

## 应用要点

- $L_1/L_2$ 处的正规形计算到 15–35 阶，可给出 halo 与 Lissajous 轨道的准确半解析近似，作为微分修正的初值。
- 小除数决定实际可达阶数；低阶共振附近需改用共振正规形。
- Hori/Deprit 方案的计算机代数实现（符号处理器）是主力工具；只需中心动力学时使用偏正规形。

## 相关概念

- [哈密顿函数（Hamiltonian）](/glossary/dynamics/hamiltonian/)
- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [庞加莱截面（Poincaré Section）](/glossary/dynamics/poincare-section/)
- [单值矩阵（Monodromy Matrix）](/glossary/dynamics/monodromy-matrix/)
- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)
- [中心流形（Center Manifold）](/glossary/dynamics/center-manifold/)
- [KAM 定理](/glossary/dynamics/kam-theory/)
- [正则变量（Canonical Variables）](/glossary/dynamics/canonical-variables/)

## 参考文献

- Meyer, K. R., & Offin, D. C. (2017). *Introduction to Hamiltonian Dynamical Systems and the N-Body Problem*, 3rd ed., Ch. 2, 7, 10.
- Gómez, G., Llibre, J., & Martínez, R. (2001). *Dynamics and Mission Design near Libration Points*, vol. III: Advanced Methods for Collinear Points.
- Moser, J. (1958). New aspects in the theory of stability of Hamiltonian systems. *Comm. Pure Appl. Math.*, 11, 81–114.
- Hori, G.-I. (1966). Theory of general perturbations. *PASJ*, 18, 287–296.
- Deprit, A. (1969). Canonical transformations depending on a small parameter. *CeMec*, 1, 12–30.
- Birkhoff, G. D. (1927). *Dynamical Systems*.
- Celletti, A., et al. (2024). The dynamics around the collinear points of the elliptic three-body problem: a normal form approach.
