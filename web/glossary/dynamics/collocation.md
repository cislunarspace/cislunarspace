---
title: 配点法（Collocation）
description: 把微分方程与最优控制问题离散为代数方程的一类原则：在每个区间选取配点，用插值多项式逼近状态，要求插值解在配点上满足原方程，得到缺陷约束。覆盖缺陷约束的一般形式，梯形、Hermite-Simpson、Gauss-Lobatto 与 Gauss 配点的精度与稀疏结构，直接配点、间接配点、正交配点与伪谱法的分工，以及与打靶法的辨析和地月低推力转移中的用法。
keywords: 配点法, Collocation, collocation method, 配点, 配点节点, 缺陷约束, Defect Constraint, 正交配点, 谱配点, 直接配点, 间接配点, 梯形格式, Hermite-Simpson, Gauss-Lobatto, 非线性规划, NLP
author: 天疆说
date: 2026-10-28
lastUpdated: 2026-10-28
wechatShare:
  title: 配点法（Collocation）
  desc: 用配点与插值多项式把连续问题转成代数方程：格式、精度、稀疏结构与工程用法。
  image: /logo.png
og:
  title: 配点法详解 | 轨迹优化与数值方法
  description: 配点是离散化原则，不是单一算法：缺陷约束、梯形与 Hermite-Simpson、Gauss 与谱配点、直接与间接配点、与打靶法的辨析。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 配点法详解 | 轨迹优化与数值方法
  description: 配点是离散化原则，不是单一算法：缺陷约束、梯形与 Hermite-Simpson、Gauss 与谱配点、直接与间接配点、与打靶法的辨析。
  image: /logo.png
permalink: /glossary/dynamics/collocation/
aliases:
  - Collocation
  - collocation method
  - Collocation Method
  - 配点方法
related:
  - ref: dynamics/direct-methods
    relation: related
  - ref: dynamics/direct-collocation
    relation: related
  - ref: dynamics/pseudospectral-method
    relation: related
  - ref: fundamentals/gauss-legendre-collocation-method
    relation: related
  - ref: dynamics/indirect-methods
    relation: related
  - ref: dynamics/differential-correction
    relation: related
  - ref: dynamics/hermite-simpson-method
    relation: related
---

# 配点法（Collocation）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

配点法（collocation method）是一类数值离散方法，共同原则是把连续微分方程化为代数方程。在时间区间内选取若干配点，用插值多项式逼近解，要求插值多项式的导数在配点上等于右端函数在该点的值。对初值问题 $\dot{\mathbf{x}}=\mathbf{f}(\mathbf{x},t)$，配点条件为

$$\dot{\mathbf{p}}(t_i)=\mathbf{f}(\mathbf{p}(t_i),t_i),\quad i=1,\dots,N,$$

其中 $\mathbf{p}(t)$ 是插值多项式。连同初始条件，连续问题变成关于多项式系数或节点值的有限维代数方程组\cite{bettsSurveyNumericalMethods1998,conwaySpacecraftTrajectoryOptimization2010}。

配点法不是单一算法，而是一族离散策略。配点位置与多项式范围决定具体格式：分段低阶多项式配点用于直接配点与间接配点，全局高阶多项式配点就是伪谱法，Gauss 点上的正交配点用于高精度常微分方程与微分代数方程积分。[直接配点法](/glossary/dynamics/direct-collocation/)、[伪谱法](/glossary/dynamics/pseudospectral-method/) 与间接配点都是这条原则在不同问题结构上的实例\cite{hargravesDirectTrajectoryOptimization1987,bettsPracticalMethodsOptimal2010}。配点原则不专属于直接法，间接法同样用它离散状态-协态方程。

## 数学形式

把时间区间划分为 $M$ 段，节点 $t_0<t_1<\dots<t_M=t_f$，第 $j$ 段长度 $h_j=t_{j+1}-t_j$。在第 $j$ 段用 $m$ 次多项式 $P_j(t)$ 逼近状态，配点取 $t_{j,k}=t_j+h_j\tau_k$，$\tau_k\in[0,1]$。缺陷约束定义为

$$\boldsymbol{\zeta}_{j,k}=\dot{P}_j(t_{j,k})-\mathbf{f}\big(P_j(t_{j,k}),\mathbf{u}_{j,k},t_{j,k}\big)=\mathbf{0},\quad k=1,\dots,n_c.$$

用节点值 $\mathbf{x}_{j,l}$ 表示多项式时，导数由微分矩阵 $D^{(j)}$ 给出：

$$\dot{P}_j(t_{j,k})=\frac{1}{h_j}\sum_{l=0}^{m}D^{(j)}_{kl}\mathbf{x}_{j,l},$$

于是每个配点给出一个代数方程。相邻段共享节点状态时，缺陷约束只与本段变量耦合，雅可比呈块对角或块三对角结构。这是分段配点能处理上万变量非线性规划的原因\cite{enrightDiscreteApproximationsOptimal1992,bettsPracticalMethodsOptimal2010}。

最优控制问题还要在配点上施加路径约束，并用求积公式近似性能指标中的积分项：

$$\int_{t_j}^{t_{j+1}}L(\mathbf{x},\mathbf{u},t)\,\mathrm{d}t\approx h_j\sum_{k=1}^{n_c}w_k\,L(\mathbf{x}_{j,k},\mathbf{u}_{j,k},t_{j,k}),$$

其中 $w_k$ 是求积权重，取值与配点格式一致。把各段缺陷、边界条件、路径约束与性能指标拼起来，就得到非线性规划。直接法用它转录最优控制问题，间接法用它离散状态-协态两点边值问题。

## 常见格式

| 格式 | 段内多项式 | 配点位置 | 精度阶 | 典型用途 |
| :--- | :--- | :--- | :--- | :--- |
| 梯形 | 线性 | 两端 | 2 | 初判、变量最少 |
| Hermite-Simpson | 三次 Hermite | 两端与中点 | 3 | 直接配点默认格式 |
| 5 阶 Gauss-Lobatto | 五次 | 每段三个 LGL 点 | 5 | 快速变化动力学 |
| 正交配点（Gauss） | $m$ 次 | Gauss 点（不含端点） | $2m$ | 常微分方程与微分代数方程的高精度积分 |
| 全局谱配点 | 全局高阶 Lagrange | LG、LGR 或 LGL 点 | 谱收敛 | 光滑解、需要协态 |

### 梯形与 Hermite-Simpson

梯形格式在段内线性插值，缺陷约束为

$$\boldsymbol{\zeta}_j=\mathbf{x}_{j+1}-\mathbf{x}_j-\frac{h_j}{2}\big[\mathbf{f}_j+\mathbf{f}_{j+1}\big]=\mathbf{0},$$

其中 $\mathbf{f}_j=\mathbf{f}(\mathbf{x}_j,\mathbf{u}_j,t_j)$。精度 2 阶，变量最少，雅可比最稀疏，常用作初步求解与网格加密的起点。

Hermite-Simpson 格式在段内引入中点状态 $\mathbf{x}_{j+1/2}$，用三次 Hermite 多项式插值，中点处施加 Simpson 缺陷约束

$$\boldsymbol{\zeta}_j=\mathbf{x}_{j+1}-\mathbf{x}_j-\frac{h_j}{6}\big[\mathbf{f}_j+4\mathbf{f}_{j+1/2}+\mathbf{f}_{j+1}\big]=\mathbf{0},$$

其中 $\mathbf{f}_{j+1/2}=\mathbf{f}(\mathbf{x}_{j+1/2},\mathbf{u}_{j+1/2},t_{j+1/2})$。精度 3 阶，是 Hargraves 与 Paris 原文及 OTIS 等工具的默认格式\cite{hargravesDirectTrajectoryOptimization1987}。[Hermite-Simpson 词条](/glossary/dynamics/hermite-simpson-method/)给出中点状态与显式、隐式两种写法的细节。

### 5 阶 Gauss-Lobatto

Herman 与 Conway 的格式在每段取三个 Gauss-Lobatto 点，含两端与一个内点，用五次多项式插值，精度 5 阶。每段变量多于 Hermite-Simpson，但对旋转-平移耦合的六自由度动力学等快速变化状态更有效\cite{Herman1996}。

### 正交配点与谱配点

正交配点取 Gauss 点作为配点，不含区间端点。$m$ 点 Gauss 配点在节点上具有 $2m$ 阶精度，是隐式 Runge-Kutta 方法的一支，适合常微分方程与指标 1 的微分代数方程的高精度积分。分段使用时称有限元正交配点，在每段内取 Gauss 点，段间施加连续性条件。

把段数取为 1、多项式阶次提高到全局，就是谱配点，也就是[伪谱法](/glossary/dynamics/pseudospectral-method/)。配点取 Legendre-Gauss、Legendre-Gauss-Radau 或 Legendre-Gauss-Lobatto 点，误差对光滑解按指数收敛。代价是微分矩阵稠密，每个配点的缺陷约束依赖全部节点变量\cite{canutoSpectralMethodsFluid1988,fornbergPracticalGuidePseudospectral1996,bensonGaussPseudospectralTranscription2005}。

## 分支辨析

| 方法 | 离散对象 | 多项式范围 | 配点位置 | 雅可比结构 | 适用场合 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [直接配点法](/glossary/dynamics/direct-collocation/) | 状态与控制 | 分段低阶 | 梯形、Hermite-Simpson、LGL | 块三对角稀疏 | 一般转移、六自由度 |
| [伪谱法](/glossary/dynamics/pseudospectral-method/) | 状态与控制 | 全局高阶 | LG、LGR、LGL | 稠密 | 光滑解、需要协态 |
| [间接配点](/glossary/dynamics/indirect-methods/) | 状态与协态 | 分段低阶 | Hermite-Simpson 等 | 稀疏 | 必须严格满足极大值原理、长弧与多切换 |
| 正交配点 | 状态或状态-协态 | 分段或全局高阶 | Gauss 点 | 块结构或稠密 | 常微分方程与微分代数方程的高精度积分 |
| [打靶法](/glossary/dynamics/differential-correction/) | 初值与参数 | 不显式参数化 | 无 | 小规模稠密 | 已有良好初值、参数少 |

直接配点把状态与控制同时作为非线性规划变量，缺陷约束替代动力学方程。它的收敛域比间接法宽，路径约束直接进入非线性规划，代价是变量规模大\cite{bettsSurveyNumericalMethods1998}。

间接配点把状态-协态方程同时配点，未知量包含协态，边界条件含横截条件。它消除了单次打靶前向积分放大误差的问题，对长转移与多切换问题更稳健，代价是变量数与初值难度都上升。[间接法](/glossary/dynamics/indirect-methods/)词条的间接配点小节给出具体写法。

正交配点关注的是积分精度，可以用在直接法或间接法的内层。它与直接配点的区别不在问题类型，而在配点取 Gauss 点、按高阶隐式 Runge-Kutta 的阶条件构造。

打靶法不显式参数化状态，只把初值或少量参数作为未知量，每次评估都要积分整段轨迹。配点法把整段轨迹一次性离散，只在配点上满足方程，评估一次即可得到全部约束残差。多重打靶介于两者之间，分段积分并在段间施加连续性约束。

## 工程要点

### 配点阶次与网格

低阶配点配网格加密（h 精化）是工程主流，每段用固定的梯形或 Hermite-Simpson，按局部误差估计加密区间。高阶配点配阶次提升（p 精化）在光滑解上更省变量，但遇到控制切换会退化。两者结合就是 hp 自适应。状态不连续的位置，如影响球交界、引力辅助、级间分离，用零宽度段或 knot 切开，配点约束换成左右状态等式\cite{bettsPracticalMethodsOptimal2010}。

### 变量缩放

状态、控制与时间的量纲差异可达十几个数量级，地月距离以 $10^5$ km 计，推力加速度以 $10^{-4}$ m/s² 计。不缩放会让非线性规划的雅可比条件数恶化。常见做法是按标称量级归一化状态与控制，把时间映射到无量纲区间\cite{bettsPracticalMethodsOptimal2010}。

### 非光滑解

Bang-bang 控制的开关时刻使解只有有限阶光滑性，全局高阶多项式在开关附近出现 Gibbs 振荡，谱收敛失效。分段低阶配点对这类解更稳，但需要把开关时刻作为变量或阶段边界处理。工程上常用多相划分、切换时刻提取与 hp 自适应，[伪谱法](/glossary/dynamics/pseudospectral-method/)词条给出这方面的细节。

### 稀疏性与求解器

分段配点的雅可比是块三对角或块带状，稀疏非线性规划求解器可以直接利用。SNOPT 适合约束与梯度稀疏的问题，Ipopt 的原对偶内点法适合大规模非凸问题，CasADi 提供符号建模与自动微分，三者是当前轨迹优化的常见组合\cite{gillSNOPTSQPAlgorithm2002,wachterImplementationInteriorpointFilter2005,anderssonCasADiSoftwareFramework2019}。

### 地月空间低推力转移

Parrish 等用 Legendre 伪谱与 Hermite-Simpson 两种配点方法优化地月系统中 DRO 到 L2 Halo 的低推力转移，两种方法都属配点法，分别代表全局高阶与分段低阶两支。论文按会合坐标系中的绕飞圈数参数化转移族，并给出从较差初值可靠生成解族的方法\cite{parrishLowthrustTransfersDistant2016}。工程上还常用形状基方法或不变流形拼接生成初值，再交给配点法精化\cite{vellutiniShapebasedDesignLowthrust2014}。

## 相关概念

- [直接法（Direct Methods）](/glossary/dynamics/direct-methods/)
- [直接配点法（Direct Collocation）](/glossary/dynamics/direct-collocation/)
- [伪谱法（Pseudospectral Method）](/glossary/dynamics/pseudospectral-method/)
- [Gauss-Legendre配点法（Gauss-Legendre Collocation Method）](/glossary/fundamentals/gauss-legendre-collocation-method/)
- [间接法（Indirect Methods）](/glossary/dynamics/indirect-methods/)
- [打靶法与微分修正（Differential Correction）](/glossary/dynamics/differential-correction/)
- [Hermite-Simpson 配点格式](/glossary/dynamics/hermite-simpson-method/)
