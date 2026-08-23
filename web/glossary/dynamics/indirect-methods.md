---
title: 间接法（Indirect Methods）
description: 轨迹优化间接法的统一框架：从庞特里亚金极值原理推导状态-协态 Hamilton 正则方程与横截条件，构造两点边值问题，再用打靶/配点/启发式/混合策略求解。涵盖协态归一化、自由变量-约束法、切换点检测、跳跃条件、奇异弧与多阶段构型，并与直接法对照辨析。
keywords: 间接法, Indirect Methods, 庞特里亚金极值原理, 两点边值问题, 打靶法, 间接配点, 间接启发式, 混合直接间接, 多阶段构型, IMF, 自由变量约束法, 协态归一化, 切换点检测, 跳跃条件
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 间接法（Indirect Methods）
  desc: 从 PMP 到 TPBVP 再到打靶求解——轨迹优化间接法的完整框架与变体。
  image: /logo.png
og:
  title: 间接法（Indirect Methods）详解 | 轨迹优化
  description: 轨迹优化间接法的统一框架：庞特里亚金极值原理导出状态-协态 Hamilton 正则方程，构造两点边值问题，再用打靶/配点/启发式/混合策略求解。涵盖协态归一化、自由变量约束法、切换点检测、跳跃条件与多阶段构型。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 间接法（Indirect Methods）详解 | 轨迹优化
  description: 轨迹优化间接法的统一框架：庞特里亚金极值原理导出状态-协态 Hamilton 正则方程，构造两点边值问题，再用打靶/配点/启发式/混合策略求解。
  image: /logo.png
permalink: /glossary/dynamics/indirect-methods/
---

# 间接法（Indirect Methods）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

**间接法**（indirect method）是轨迹优化的一类方法：先用 [庞特里亚金极值原理](/glossary/dynamics/pontryagins-maximum-principle/) 把最优控制问题化为一组含必要条件的方程，状态-协态 Hamilton 正则方程加横截条件，得到 **两点边值问题**（TPBVP），再用打靶、配点或其它数值方法求解该 BVP（Betts 1998；Conway 2010；Bryson & Ho 1975）。

与 **直接法**（把状态-控制时间序列直接离散化为 NLP 参数）相对，间接法的核心特征是先把最优性条件解出来再求数值解。它的优点是解严格满足一阶必要条件、参数维度低、精度高（数值上可达机器精度）；缺点是收敛域窄、对协态初值极度敏感、不连续控制（Bang-bang）处雅可比难算。

## 数学框架

### 最优控制问题

一般 Bolza 形式：

$$
\min_{u}\;J=\Phi(\mathbf{x}(t_f),t_f)+\int_{t_0}^{t_f}L(\mathbf{x},\mathbf{u},t)\,dt,
$$

受动力学约束 $\dot{\mathbf{x}}=\mathbf{f}(\mathbf{x},\mathbf{u},t)$、端点约束与路径约束。

### Hamilton 正则方程

引入协态 $\boldsymbol{\lambda}(t)$ 构造哈密顿 $H=L+\boldsymbol{\lambda}^{\mathrm{T}}\mathbf{f}$。[庞特里亚金极值原理](/glossary/dynamics/pontryagins-maximum-principle/) 给出：

$$
\dot{\mathbf{x}}=\frac{\partial H}{\partial\boldsymbol{\lambda}},\qquad
\dot{\boldsymbol{\lambda}}=-\frac{\partial H}{\partial\mathbf{x}},\qquad
\mathbf{u}^{*}=\arg\min_{\mathbf{u}\in\mathcal{U}}H.
$$

第一式是状态方程，第二式是 [协态方程](/glossary/dynamics/co-state-variables/)，第三式是极值条件（解析消去 $\mathbf{u}$ 后，控制成为状态与协态的函数）。加上端点处的 **横截条件**：

$$
\boldsymbol{\lambda}(t_f)=\frac{\partial\Phi}{\partial\mathbf{x}}\bigg|_{t_f}+\boldsymbol{\nu}^{\mathrm{T}}\frac{\partial\boldsymbol{\psi}}{\partial\mathbf{x}}\bigg|_{t_f},
$$

其中 $\boldsymbol{\psi}(\mathbf{x}(t_f),t_f)=\mathbf{0}$ 为终端等式约束，$\boldsymbol{\nu}$ 为对应乘子。若终端时间自由，还需 $H(t_f)+\partial\Phi/\partial t+\boldsymbol{\nu}^{\mathrm{T}}\partial\boldsymbol{\psi}/\partial t=0$。

### TPBVP 与打靶函数

合并状态-协态方程为 $\dot{\mathbf{y}}=\mathbf{F}(\mathbf{y})$，$\mathbf{y}=[\mathbf{x};\boldsymbol{\lambda}]$。初始状态 $\mathbf{x}(t_0)$ 已知、初始协态 $\boldsymbol{\lambda}(t_0)=\mathbf{z}$ 未知，数值积分到 $t_f$，得到残差 $\mathbf{s}(\mathbf{z})=\boldsymbol{\psi}(\mathbf{x}(t_f;\mathbf{z}))$。**打靶函数** $\mathbf{s}(\mathbf{z})=\mathbf{0}$ 即要解的非线性方程组。

## 数值求解策略

### 单次打靶 vs. 多重打靶

- **单次打靶**（single shooting）：把整段轨迹当作一次初值问题，对 $\mathbf{z}$ 用牛顿法。实现简单但雅可比条件数大，对长转移不稳健。
- **多重打靶**（multiple shooting）：把 $[t_0,t_f]$ 分段，每段独立积分，段间用匹配条件连接。**自由变量-约束法**（free-variable and constraint method）就是多重打靶的工程化形式，把所有节点的状态、协态、参数堆叠为自由变量向量 $\mathbf{V}$，把段间连续性、端点条件堆叠为约束向量 $\mathbf{C}(\mathbf{V})=\mathbf{0}$，用牛顿法解线性方程组（Spreen 2021；[微分修正](/glossary/dynamics/differential-correction/)）。

### 间接配点法

**间接配点法**（indirect collocation）把状态-协态方程同时用配点离散化（典型如 Dickmanns 与 Wells 的 Hermite-Simpson 配点）把 TPBVP 转为一组代数方程求解（Dickmanns & Wells；Conway 2010）。它消除了打靶法前向积分放大误差的病态，对长转移与多切换问题更稳健；代价是参数维度大幅增加。

注：Hargraves 与 Paris（1987）观察到把协态消去、直接对状态-控制做配点（即 **直接配点法**）反而更鲁棒，这是直接法兴起的起点。现代间接配点法多用于必须严格满足 PMP 的场合（如可微 NLP 求解器内部）。

### 间接启发式方法

**间接启发式方法**（indirect heuristic method）把 PMP 与元启发式算法结合：用遗传算法、粒子群或差分进化搜索协态初值 $\mathbf{z}$（可能同时搜索脉冲数、阶段结构等离散变量），每次评估候选时按 PMP 解析给出控制律并积分轨迹（Pontani 与 Conway 2009；Conway 2010）。它绕开了牛顿法对初值的敏感性，代价是评估次数多、精度不如纯打靶。适合存在离散决策或大量局部最优的问题。

### 混合直接-间接法

**混合直接-间接法**（hybrid direct/indirect）用间接法的极值条件减少控制参数维度，再用直接法的 NLP 求解器处理剩余参数（Kluever 与 Pierson 1997）。例如：对每段推力方向用 $\boldsymbol{\alpha}^{*}=\mathbf{p}/\|\mathbf{p}\|$ 闭式给出，只把脉冲时刻、节流开关、阶段端点时间作为 NLP 变量。该思路兼顾间接法的控制降维和直接法的对协态不敏感，是工程上常用折衷。

### 间接多阶段构型（IMF）

**间接多阶段构型**（Indirect Multi-Stage Formulation, IMF）把完整轨迹划分为若干阶段，每阶段独立列状态-协态方程与控制律，阶段之间用等式约束（位置、速度、质量、协态的连续性）连接（Bowerfind 与 Taheri 2024）。该形式特别适合含模式切换的任务（如推力段-空气动力段-滑行段组合、多脉冲点间巡航）。阶段数既可固定也可作为整数变量。

## 关键数值工具

### 协态归一化

由于哈密顿系统在协态整体放缩下不变（$H$ 与 $\boldsymbol{\lambda}$ 同时乘正常数仍满足必要条件），可固定 $\|\boldsymbol{\lambda}(t_0)\|=1$，把搜索空间从 $\mathbb{R}^n$ 缩到单位球面 $S^{n-1}$，维度减一且数值条件数改善（Taheri 等 2016；[协态变量](/glossary/dynamics/co-state-variables/)）。

### 切换点检测

Bang-bang 控制的切换时刻是 $\rho(t)=0$ 的根，需精确定位以避免雅可比不连续。**牛顿-二分混合切换检测**先用牛顿法快速定位（通常 4–5 次迭代达机器精度），失败或越界时退回二分法保底（Zhang et al. 2015；Martinon 与 Gergaud 2010）。这是间接法求解 [Bang-bang 控制](/glossary/dynamics/bang-bang-control/) 问题的标准组件。

### 跳跃条件

当最优控制问题含 **状态约束**（如最大过载、最短离月高度）时，协态与哈密顿在约束激活区间的进入/退出时刻可能发生跳跃，跳跃幅度由约束梯度与非负乘子 $\eta$ 决定：

$$
\boldsymbol{\lambda}(t_c^{+})=\boldsymbol{\lambda}(t_c^{-})-\eta\,\nabla_{\mathbf{x}}g(\mathbf{x}(t_c),t_c).
$$

约束不显含时间时 $H$ 在跳跃点保持连续。**切换面**（switching surface）是协态-状态空间中 $\rho=0$ 的余维一子流形，最优轨迹在该面处可能切换控制或进入奇异弧（Hartl 等 1995；Caillau 与 Daoud 2012）。

### 平滑技术与同伦

为绕开 Bang-bang 不连续与协态初值敏感，主流做法是用 **同伦方法** 把光滑的易解姊妹问题（如能量最优）逐步变形为目标问题（如燃料最优 Bang-off-Bang）。代价函数同伦、推力幅值同伦、平滑 sigmoid 三类技术在文献中已标准化（Bertrand & Epenoy 2002；Taheri 等 2016；Zhang et al. 2025），详见 [同伦方法](/glossary/dynamics/homotopy-method/)。

### 内层-外层循环

参数化最优控制（如基于 Theory of Functional Connections 的形函数近似）常用 **内层-外层循环结构**：内层最小化残差获得状态与代价向量，外层优化切换时间与终端时间（Johnston et al. 2020）。该结构与多重打靶在思路上同源，把快变量与慢变量分层求解。

## 与直接法的辨析

| 维度 | 间接法 | 直接法 |
| :--- | :--- | :--- |
| 决策变量 | 协态初值 $\boldsymbol{\lambda}(t_0)$、参数 | 离散状态、控制时间序列 |
| 必要条件 | 严格满足 PMP | 数值近似，事后检验 |
| 收敛初值 | 协态猜测难找，收敛半径小 | 任意可行猜测，收敛半径大 |
| 解精度 | 高（可达 $10^{-12}$） | 受网格限制 |
| 控制结构 | 自然产生 Bang-bang | 需事后检验脉冲数 |
| 参数维度 | 小（数十量级） | 大（数百至数千） |

工程上常见的做法是用直接法或启发式方法找到粗解，再用间接法精修至机器精度，并利用 primer vector 与切换函数做事后最优性检验（Conway 2010；Betts 1998）。

## 应用要点

- **地月低推力转移**：$L_1$/$L_2$ Halo 间、LEO 到 NRHO 的燃料最优转移是间接法 + 同伦的主战场。
- **多脉冲转移优化**：用 primer vector 梯度法判定脉冲数与时刻，再用间接法把脉冲模型升级为有限推力精修。
- **轨道保持与避碰**：固定时长的小型 TPBVP 可实时求解，用于 NRHO 等轨道的连续推力保持与碰撞规避。
- **相对运动最优控制**：在三体动力学下控制伴随卫星相对于参考卫星的相对状态，通过变分方程与预计算的状态转移矩阵，可在 $O(mn^3)$ 内近似求解任意边界条件（Kulik 等 2023）。

## 相关概念

- [庞特里亚金最小值原理（PMP）](/glossary/dynamics/pontryagins-maximum-principle/)：间接法的数学出发点
- [协态变量（Co-state Variables）](/glossary/dynamics/co-state-variables/)：TPBVP 的核心未知量
- [先驱向量（Primer Vector）](/glossary/dynamics/primer-vector/)：速度协态的物理化身，决定最优推力方向
- [同伦方法（Homotopy Method）](/glossary/dynamics/homotopy-method/)：间接法求解 Bang-bang 控制的主流数值手段
- [Bang-bang 控制（Bang-bang Control）](/glossary/dynamics/bang-bang-control/)：间接法导出的典型控制结构
- [燃料最优控制（Fuel-optimal Control）](/glossary/dynamics/fuel-optimal/)：间接法应用的主要问题类型
- [对偶控制变换（Adjoint-Control Transformation）](/glossary/dynamics/adjoint-control-transformation/)：用 primer vector 替代协态降低打靶维度
- [微分修正（Differential Correction）](/glossary/dynamics/differential-correction/)：自由变量-约束法背后的牛顿迭代
- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)：地月间接法优化的动力学背景

## 参考文献

- Bryson, A. E., and Ho, Y.-C. 1975. *Applied Optimal Control*. Hemisphere.（最优控制与间接法的系统教材）
- Betts, J. T. 1998. Survey of Numerical Methods for Trajectory Optimization. *JGCD* 21(2): 193–207.（间接法 vs. 直接法的经典对比综述）
- Conway, B. A. (ed.) 2010. *Spacecraft Trajectory Optimization*. Cambridge Univ. Press. Ch. 1, 2, 3, 7.（间接法、直接配点、 primer vector 与脉冲方法的统一教材）
- Dickmanns, E. D., and Wells, K. H. 1974. Approximate Solution of Optimal Control Problems Using Hermite-Simpson Collocation.（间接配点法的早期工作）
- Hargraves, C. R., and Paris, S. W. 1987. Direct Trajectory Optimization Using Nonlinear Programming and Collocation. *JGCD* 10(4): 338–342.（直接配点法的起点，消去协态的关键观察）
- Pontani, M., and Conway, B. A. 2009. Numerical Solution of the Three-Dimensional Orbital Pursuit-Evasion Game. *JGCD*.（间接启发式方法的典型实现）
- Kluever, C. A., and Pierson, B. L. 1997. Optimal Earth-Moon Trajectories Using Nuclear Electric Propulsion. *JGCD*.（混合直接-间接法在地月转移中的应用）
- Bowerfind, W. M., and Taheri, E. 2024. Rapid Approximation of Low-Thrust Spacecraft Reachable Sets.（间接多阶段构型 IMF 的近期工作）
- Spreen, J. S. 2021. *Robust Spacecraft Trajectory Optimization via Convex and Least-Squares Approaches*. PhD Thesis, Univ. of Colorado.（自由变量-约束法在多重打靶中的实现）
- Zhang, B., et al. 2015. Switching Detection for Bang-Bang Control in Low-Thrust Trajectory Optimization. *JGCD*, doi:10.2514/1.G001080.
- Martinon, P., and Gergaud, J. 2010. Switching Time Detection for Optimal Control Problems. INRIA TR-7380.
- Hartl, R. F., Sethi, S. P., and Vickson, R. G. 1995. A Survey of the Maximum Principles for Optimal Control Problems with State Constraints. *SIAM Review* 37(2): 181–218.（状态约束下的跳跃条件综述）
- Caillau, J.-B., and Daoud, B. 2012. Minimum Time Control of the Restricted Three-Body Problem. *SIAM J. Control Optim.* 50(6).（切换面与最小时间问题）
- Taheri, E., Kolmanovsky, I., and Atkins, E. 2016. Enhanced Smoothing Technique for Indirect Optimization of Minimum-Fuel Low-Thrust Trajectories. *JGCD* 39(11): 2500–2511.（协态归一化 + STM 雅可比）
- Kulik, S., et al. 2023. Relative Motion Optimal Control via Variational Equations. *JGCD*, doi:10.2514/1.G007311.
- Johnston, B., et al. 2020. *Theory of Functional Connections Applied to Optimal Control*.（内层-外层循环结构的 TFC 实现）
