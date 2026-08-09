---
title: 先驱向量（Primer Vector）
description: Lawden 1963 提出的最优推力向量 p(t)=-λ_v(t)，是连续推力与脉冲推力两类最优转移一阶必要条件的统一表达：连续推力下决定最优推力方向与节流开关；脉冲转移下规定脉冲时刻、方向与是否需要追加脉冲。涵盖先驱向量方程、脉冲必要条件（Lion-Handelsman 1968）、协态-控制变换、推力幅值切换，以及地月空间的应用要点。
keywords: 先驱向量, Primer Vector, 引燃向量, Lawden, 协态速度, 切换函数, 最优推力方向, 脉冲转移最优性, Lion-Handelsman, Jezewski-Rozendaal, 间接法
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 先驱向量（Primer Vector）
  desc: Lawden 提出的最优推力判据——速度协态的负值，决定最优推力方向与脉冲时刻。
  image: /logo.png
og:
  title: 先驱向量（Primer Vector）详解 | 最优控制与脉冲转移
  description: Lawden 1963 提出的最优推力向量 p(t)=-λ_v(t)，是连续推力与脉冲推力两类最优转移一阶必要条件的统一表达。涵盖先驱向量方程、脉冲必要条件、Lion-Handelsman 梯度法与地月空间应用要点。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 先驱向量（Primer Vector）详解 | 最优控制与脉冲转移
  description: Lawden 1963 提出的最优推力向量 p(t)=-λ_v(t)，是连续推力与脉冲推力两类最优转移一阶必要条件的统一表达。涵盖先驱向量方程、脉冲必要条件、Lion-Handelsman 梯度法与地月空间应用要点。
  image: /logo.png
permalink: /glossary/dynamics/primer-vector/
---

# 先驱向量（Primer Vector）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

**先驱向量**（primer vector）是 Lawden（1963）在其奠基著作《Optimal Trajectories for Space Navigation》中引入的术语，定义为速度协态变量的负值：

$$
\mathbf{p}(t)\equiv-\boldsymbol{\lambda}_v(t).
$$

它是 [庞特里亚金最小值原理](/glossary/dynamics/pontryagins-maximum-principle/) 在带推力航天器最优控制问题中的核心伴随量：连续推力情形下决定最优推力方向与节流时刻，脉冲推力情形下决定脉冲施加时刻、方向及是否需要追加脉冲。术语本身源自 Lawden 二战服役于炮兵的经历——炮弹药筒的火药由底火（primer charge）引燃，"$p=1$" 即"点火"信号（Lawden 致 Prussing 的私人信件，1990；Prussing 2010）。

中译并不统一："先驱向量""引燃向量""初始向量"在文献中均出现，本文采用"先驱向量"，因其不含火器隐喻又保留了 $\mathbf{p}(t)$ 在最优控制律中的"先行指示"作用。

## 推导：从极小值原理到先驱向量

考虑中心引力场下变质量航天器，状态方程为

$$
\dot{\mathbf{r}}=\mathbf{v},\quad \dot{\mathbf{v}}=\mathbf{g}(\mathbf{r})+\frac{T_{\max}}{m}\,u\,\boldsymbol{\alpha},\quad \dot{m}=-\frac{T_{\max}}{c}\,u,
$$

其中 $\boldsymbol{\alpha}$ 为推力方向单位矢量（$\|\boldsymbol{\alpha}\|=1$），$u\in[0,1]$ 为节流比，$c=I_{sp}g_0$ 为排气速度。哈密顿函数为

$$
H=\boldsymbol{\lambda}_r^{\mathrm{T}}\mathbf{v}+\boldsymbol{\lambda}_v^{\mathrm{T}}\mathbf{g}(\mathbf{r})+u\,T_{\max}\!\left(\frac{\boldsymbol{\lambda}_v^{\mathrm{T}}\boldsymbol{\alpha}}{m}-\frac{\lambda_m}{c}\right).
$$

关于 $\boldsymbol{\alpha}$ 极小化 $H$（亦即关于 $-\boldsymbol{\alpha}$ 极大化 $\boldsymbol{\lambda}_v^{\mathrm{T}}\boldsymbol{\alpha}$ 的反向），得最优推力方向

$$
\boldsymbol{\alpha}^{*}=\frac{\mathbf{p}(t)}{\|\mathbf{p}(t)\|},\qquad \mathbf{p}(t)\equiv-\boldsymbol{\lambda}_v(t),
$$

即**最优推力方向与先驱向量同向**。代入哈密顿函数，控制相关项化为

$$
H_c=u\,T_{\max}\!\left(-\frac{\|\mathbf{p}\|}{m}-\frac{\lambda_m}{c}\right)=u\,\Phi(t),
$$

其中 $\Phi(t)$ 即**切换函数**（switching function）。由极小值原理得 $u^{*}=0$ 当 $\Phi>0$（关机），$u^{*}=1$ 当 $\Phi<0$（满推），这是 [Bang-bang 控制](/glossary/dynamics/bang-bang-control/) 的来源。

## 先驱向量方程

协态方程 $\dot{\boldsymbol{\lambda}}_v=-\partial H/\partial\mathbf{v}=-\boldsymbol{\lambda}_r$ 与 $\dot{\boldsymbol{\lambda}}_r=-\partial H/\partial\mathbf{r}=-G(\mathbf{r})\boldsymbol{\lambda}_v$（其中 $G(\mathbf{r})=\partial\mathbf{g}/\partial\mathbf{r}$ 为 $3\times 3$ 重力梯度矩阵）合并得

$$
\ddot{\mathbf{p}}=G(\mathbf{r})\,\mathbf{p}.
$$

这是先驱向量沿轨迹演化的二阶线性微分方程（Lawden 1963, Ch. 3；Prussing 2010, Eq. 2.19）。它与状态变分方程同构——其状态转移矩阵即为轨道变分方程的转移矩阵，因此可借助 [状态转移矩阵方法](/glossary/dynamics/co-state-variables/) 一并数值传播。在二体问题中 $G(\mathbf{r})=\mu(3\hat{\mathbf{r}}\hat{\mathbf{r}}^{\mathrm{T}}-I)/r^3$，先驱向量方程存在解析基础（Prussing 1993）。

## 连续推力情形的必要条件

定常比冲（CSI）最优控制问题中，先驱向量满足（Lawden 1963；Conway 2010, Ch. 2）：

1. $\mathbf{p}(t)$ 及 $\dot{\mathbf{p}}(t)$ 处处连续；
2. 最优推力方向 $\boldsymbol{\alpha}^{*}=\mathbf{p}/\|\mathbf{p}\|$；
3. 切换函数 $\Phi=-T_{\max}(\|\mathbf{p}\|/m+\lambda_m/c)$ 的符号决定节流开关；
4. 切换时刻处 $\Phi=0$，即 $\|\mathbf{p}\|=-m\lambda_m/c$。

Lawden 据此将轨迹分为三类弧：最大推力弧（MT）、无推力弧（NT）、中间推力弧（IT，即 [奇异弧](/glossary/dynamics/bang-bang-control/)）。详见 [Bang-bang 控制与 Lawden 弧定律](/glossary/dynamics/bang-bang-control/)。

## 脉冲推力情形：Lawden-Lion-Handelsman 必要条件

高推力近似下，MT 弧收缩为瞬时脉冲。Lawden（1963）首次写出脉冲最优性的一阶必要条件，Lion 与 Handelsman（1968）将其整理为工程可用形式：

1. $\mathbf{p}(t)$ 与 $\dot{\mathbf{p}}(t)$ 处处连续；
2. $\|\mathbf{p}(t)\|\le 1$ 在所有时刻成立，脉冲只能在 $\|\mathbf{p}\|=1$ 的时刻施加；
3. 在脉冲时刻，$\mathbf{p}$ 是单位向量，方向即最优脉冲方向；
4. 在中间脉冲（非初始/终端）处 $\dot{\mathbf{p}}=\dot{\mathbf{p}}^{\mathrm{T}}\mathbf{p}/\|\mathbf{p}\|=0$。

对线性系统上述条件同时是充分条件，且给出最优脉冲数的上界（Prussing 1993）。

### Lion-Handelsman 梯度法：从非最优解到最优解

实践中给定一组边界条件与转移时间，常先得到一个非最优的 $N$ 脉冲解（如双脉冲 Lambert 解）。Lion 与 Handelsman（1968）导出性能指标关于三种"修正操作"的梯度：

- **末端滑行**（terminal coast）：推迟或提前首/末脉冲施加时刻——梯度为 $\partial J/\partial t_i=\pm\|\dot{\mathbf{p}}(t_i)\|$；
- **追加中段脉冲**（midcourse impulse）：在 $\|\mathbf{p}\|>1$ 的子弧上加入新脉冲——梯度为 $\partial J/\partial\Delta\mathbf{v}=(\|\mathbf{p}\|-1)\,\hat{\mathbf{p}}$；
- **脉冲位置迭代**：通过 $\dot{\mathbf{p}}$ 在脉冲点不为零的量调整脉冲时刻。

Jezewski 与 Rozendaal（1968）将上述梯度嵌入 非线性规划（多重打靶，参见 [间接法](/glossary/dynamics/indirect-methods/)） 框架，得到自动判定何时追加脉冲、何时启用滑行的 $N$ 脉冲迭代算法，至今仍是脉冲转移最优性检验与改进的标准工具。

## 与协态-控制变换的关系

由 $\mathbf{p}=-\boldsymbol{\lambda}_v$ 与节流条件 $u^{*}=\mathrm{sign}(-\Phi)$ 可见，最优控制可完全由先驱向量与质量协态 $\lambda_m$ 表达。这一观察是 [协态-控制变换](/glossary/dynamics/adjoint-control-transformation/) 与协态归一化的出发点：将打靶变量从完整协态向量换成 $(\mathbf{p},\lambda_m)$ 或进一步约束在单位球面上，可显著缩减间接法搜索维度（Taheri 等 2016；详见 [协态变量](/glossary/dynamics/co-state-variables/)）。

## 应用要点

- **脉冲转移的最优性检验**：双脉冲 Lambert 解的 $\|\mathbf{p}(t)\|$ 时间 histories 若超过 1，说明需要追加脉冲或调整滑行段；这是地月三脉冲转移设计自动化的常用判据。
- **连续推力方向指令**：在固定方向的简化小推力制导律失效时，把推力方向取为 $\mathbf{p}/\|\mathbf{p}\|$ 即获得一阶最优方向；剩余的自由度只有节流时刻，使间接法参数维度大减。
- **多体环境扩展**：CR3BP 中 $G(\mathbf{r})$ 取会合系旋转雅可比，先驱向量方程仍成立，因此 primer vector 工具可直接用于地月 $L_1$/$L_2$ 转移的脉冲分析与连续推力方向初始化。
- **同伦法初值**：能量最优解（连续推力）可解析给出 $\mathbf{p}(t)$ 的近似，作为 [同伦法](/glossary/dynamics/homotopy-method/) 逐步过渡到燃料最优 bang-bang 解的起点。

## 相关概念

- [Bang-bang 控制（Bang-bang Control）](/glossary/dynamics/bang-bang-control/) — 先驱向量幅值通过切换函数导出的推力开关结构
- [协态变量（Co-state Variables）](/glossary/dynamics/co-state-variables/) — 先驱向量的协态来源
- [庞特里亚金最小值原理（PMP）](/glossary/dynamics/pontryagins-maximum-principle/) — 推导先驱向量的数学基础
- [同伦方法（Homotopy Method）](/glossary/dynamics/homotopy-method/) — 求解先驱向量方程边值问题的主流数值手段
- [燃料最优控制（Fuel-optimal Control）](/glossary/dynamics/fuel-optimal/) — 先驱向量应用的主要性能指标类型
- [对偶控制变换（Adjoint-Control Transformation）](/glossary/dynamics/adjoint-control-transformation/) — 用 $(\mathbf{p},\lambda_m)$ 替代协态的变量变换
- [间接法（Indirect Methods）](/glossary/dynamics/indirect-methods/) — Lion-Handelsman 梯度的 NLP 实现（多重打靶框架）
- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/) — 地月空间先驱向量应用的动力学背景

## 参考文献

- Lawden, D. F. 1963. *Optimal Trajectories for Space Navigation*. Butterworths, London.（先驱向量的原始定义、连续/脉冲情形必要条件与三类弧分类）
- Lion, P. M., and Handelsman, M. 1968. "Primer Vector on Fixed-Time Impulsive Trajectories." *AIAA Journal* 6(1): 127–132.（末端滑行与中段脉冲的代价梯度，非最优解改进方法）
- Jezewski, D. J., and Rozendaal, H. L. 1968. "An Efficient Method for Calculating Optimal Free-Space N-Impulse Trajectories." *AIAA Journal* 6(11): 2160–2165.（Lion-Handelsman 梯度的 NLP 实现，自动追加脉冲）
- Prussing, J. E. 1993. "Equation for Optimal Power-Limited Spacecraft Trajectories." *JGCD* 16(6).（功率受限问题中先驱向量方程的解析结果）
- Prussing, J. E. 2010. *Primer Vector Theory and Applications*. In Conway (ed.), *Spacecraft Trajectory Optimization*, Ch. 2, Cambridge Univ. Press.（先驱向量理论的现代系统综述，含脉冲必要条件表与算例）
- Conway, B. A. (ed.) 2010. *Spacecraft Trajectory Optimization*. Cambridge Univ. Press.（间接法、直接法与脉冲方法的统一教材）
- Bryson, A. E., and Ho, Y.-C. 1975. *Applied Optimal Control*. Hemisphere.（最优控制理论的标准教材，含协态方程与极值条件推导）
- Taheri, E., Kolmanovsky, I., and Atkins, E. 2016. "Enhanced Smoothing Technique for Indirect Optimization of Minimum-Fuel Low-Thrust Trajectories." *JGCD* 39(11): 2500–2511.（协态归一化与先驱向量同伦的结合）
