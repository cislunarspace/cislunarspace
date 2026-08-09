---
title: 数值延拓（Numerical Continuation）
description: 含参数非线性方程组 F(x,λ)=0 解曲线的跟踪方法——从已知解出发逐步改变参数，以前一步解为初值求解相邻解，从而扫出整条解分支。地月空间动力学中是周期轨道族（Halo、Lyapunov、DRO、NRHO 等）系统化计算的标准工具，可在转向点处绕行、捕捉分岔分支。
keywords: 数值延拓, numerical continuation, 弧长延拓, pseudo-arclength, 预测校正, 自然参数延拓, 牛顿延拓, 轨道族, CR3BP, 分岔
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 数值延拓（Numerical Continuation）
  desc: 跟踪 F(x,λ)=0 解曲线的标准方法；周期轨道族系统化计算的核心工具。
  image: /logo.png
og:
  title: 数值延拓（Numerical Continuation）详解 | 术语定义
  description: 含参数非线性方程组 F(x,λ)=0 解曲线的跟踪方法——从已知解出发逐步改变参数，以前一步解为初值求解相邻解，从而扫出整条解分支。地月空间动力学中是周期轨道族系统化计算的标准工具。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 数值延拓（Numerical Continuation）详解 | 术语定义
  description: 含参数非线性方程组 F(x,λ)=0 解曲线的跟踪方法——从已知解出发逐步改变参数，以前一步解为初值求解相邻解，从而扫出整条解分支。地月空间动力学中是周期轨道族系统化计算的标准工具。
  image: /logo.png
permalink: /glossary/dynamics/continuation/
---

# 数值延拓（Numerical Continuation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

数值延拓（numerical continuation）是跟踪含参数非线性方程组

$$\mathbf{F}(\mathbf{x},\lambda)=\mathbf{0},\qquad \mathbf{x}\in\mathbb{R}^n,\ \lambda\in\mathbb{R}$$

解曲线的一类数值方法。其基本思想是：在已知一个解 $(\mathbf{x}_0,\lambda_0)$ 的前提下，以它为起点，沿解曲线逐步推进到参数 $\lambda$ 的相邻取值，每一步以上一步的解作为下一步的初值猜测，从而扫出整条解分支（Seydel 2010；Allgower & Georg 1990）。

在 [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/) 中，$\mathbf{F}$ 通常是周期性条件（状态向量返回初值的打靶方程）加上一个约束，$\mathbf{x}$ 是初始状态与周期等自由变量，$\lambda$ 是沿族推进的参数（雅可比常数 $C$、振幅 $A_z$、近月点高度等）。延拓是 [周期轨道族](/glossary/orbits/periodic-orbit-family/)（Halo、Lyapunov、[DRO](/glossary/orbits/distant-retrograde-orbit-dro/)、[NRHO](/glossary/orbits/nrho/)、butterfly 等）系统化计算与分岔分析的标准工具，由庞加莱首次提出并在 20 世纪 60—70 年代随数字计算普及而成熟（Gómez et al. 2001；Zhang 2019）。

## 一般形式

设系统有 $n$ 个方程、$n+1$ 个未知量（$\mathbf{x}$ 含 $n$ 个分量，外加参数 $\lambda$），则解集在 $(\mathbf{x},\lambda)\in\mathbb{R}^{n+1}$ 空间中通常是**一维曲线**（分支）。延拓就是沿这条曲线作参数化为弧长 $s$ 的追踪：

$$\mathbf{F}(\mathbf{x}(s),\lambda(s))=\mathbf{0}.$$

对上式关于 $s$ 求导，得切向 $(\dot{\mathbf{x}},\dot{\lambda})$ 满足

$$\mathbf{F}_\mathbf{x}\,\dot{\mathbf{x}}+\mathbf{F}_\lambda\,\dot{\lambda}=\mathbf{0},$$

即雅可比 $\mathbf{F}_\mathbf{x}$ 在非退化点（满秩）处唯一确定切线方向（差一个归一化）。各类延拓算法的差异主要在"如何选步进方向、如何校正、如何处理转向点"。

## 主要变体

### 1. 自然参数延拓（Natural Parameter Continuation）

最简单的形式：直接以参数 $\lambda$ 为推进变量，取序列 $\lambda_0<\lambda_1<\cdots$，对每个 $\lambda_k$ 用 [微分修正](/glossary/dynamics/differential-correction/) / 打靶法求 $\mathbf{x}_k$，初值取 $\mathbf{x}_{k-1}$。

$$\mathbf{F}(\mathbf{x}_k,\lambda_k)=\mathbf{0},\quad \text{初值}\ \mathbf{x}_k^{(0)}=\mathbf{x}_{k-1}.$$

实现简单、对光滑且单调的分支有效。**致命局限**：当解曲线对 $\lambda$ 出现转向点（fold / turning point，即 $d\lambda/ds=0$）时，$\lambda$ 不再单调，方法失效。CR3BP 中周期—能量关系普遍存在转折，因此自然参数延拓只用于快速预扫，正式计算需用伪弧长。

### 2. 牛顿延拓（Newton Continuation）

自然参数延拓的初值迭代版本：每步用牛顿法解 $\mathbf{F}(\mathbf{x}_k,\lambda_k)=\mathbf{0}$，雅可比 $\mathbf{F}_\mathbf{x}$ 在 $\mathbf{x}_{k-1}$ 处因子化后迭代

$$\mathbf{x}_k^{(j+1)}=\mathbf{x}_k^{(j)}-\mathbf{F}_\mathbf{x}^{-1}\mathbf{F}(\mathbf{x}_k^{(j)},\lambda_k).$$

所谓"牛顿"指的是校正环节采用牛顿迭代，本质仍是自然参数延拓；同样无法穿越转向点。文献中有时把它与下文的牛顿同伦（构造同伦函数的特定方式，见 [同伦方法](/glossary/dynamics/homotopy-method/)）相混，两者并非一回事。

### 3. 伪弧长延拓（Pseudo-arclength Continuation）

为绕过转向点而设计，由 Keller（1977）系统化，是当前主流算法（AUTO、MATCONT 等持续软件的核心）。思路是把 $\lambda$ 也当成未知量，引入**弧长约束**补回欠定的一维自由度：

$$\begin{cases}\mathbf{F}(\mathbf{x},\lambda)=\mathbf{0},\\[2pt] \dot{\mathbf{x}}_{k-1}^{\,T}(\mathbf{x}-\mathbf{x}_{k-1})+\dot{\lambda}_{k-1}(\lambda-\lambda_{k-1})=\Delta s.\end{cases}$$

第二式是上一步切向 $(\dot{\mathbf{x}}_{k-1},\dot{\lambda}_{k-1})$ 与位移向量的内积等于给定弧长步长 $\Delta s$。这给雅可比增加一行，新雅可比

$$\begin{bmatrix}\mathbf{F}_\mathbf{x} & \mathbf{F}_\lambda \\ \dot{\mathbf{x}}_{k-1}^{\,T} & \dot{\lambda}_{k-1}\end{bmatrix}$$

在标准雅可比 $\mathbf{F}_\mathbf{x}$ 奇异的转向点处仍非奇异，使方法可以平滑地"绕过"折叠（Allgower & Georg 1990；Seydel 2010）。

**预测-校正（predictor-corrector）实现**：每步先沿切向作预测 $\tilde{\mathbf{x}}=\mathbf{x}_{k-1}+\Delta s\,\dot{\mathbf{x}}_{k-1}$，$\tilde{\lambda}=\lambda_{k-1}+\Delta s\,\dot{\lambda}_{k-1}$，再用牛顿法联立上述两式校正回解曲线。在 CR3BP 周期轨道族的计算中，这是 Halo、Lyapunov、DRO 等族全分支扫描与分岔跟踪的标准做法（Doedel et al. 2007 AUTO；Galan-Vioque et al. 2014；Zhang 2019）。

### 4. 分段线性（Piecewise-Linear / Simplicial）延拓

不依赖导数、对 $\mathbf{F}$ 仅要求连续的"鲁棒"实现：在 $(\mathbf{x},\lambda)$ 空间布单纯形剖分，跟踪完全标号单纯形来近似解曲线。优点是无需雅可比、对不可微问题也能工作，缺点是步进精度低、计算量大，远慢于预测-校正法（Allgower & Georg 1990；Haberkorn et al. 2004）。在轨道力学中很少使用，只在雅可比不可计算或同伦曲线高度不规则时作为后备。

## 转向点与分岔

延拓过程中真正有价值的发现通常发生在解曲线的**奇点**上：

- **转向点（fold / saddle-node）**：$\lambda$ 沿曲线方向局部极值，意味着同一 $\lambda$ 值对应多个解或解消失。CR3BP 周期—能量关系图上频繁出现，是族存在性边界的标志。

- **分岔点（branching / bifurcation）**：两条或多条解分支相交。Halo 轨道族即从平面 Lyapunov 族经过 pitchfork 分岔产生（后者关于 $z\to -z$ 对称性破缺）；DRO、NRHO、butterfly 等族之间的连接点也都通过延拓过程中检测雅可比零空间或 Floquet 乘子穿越 $+1$ 来识别（Galan-Vioque et al. 2014；Zhang 2019）。

延拓扫描出整张分岔图后，再在各分支点处切换到新分支继续延拓，即可得完整的族系图谱。

## CR3BP 中的延拓参数

地月空间周期轨道族延拓常用的参数包括：

| 参数 | 典型族 | 说明 |
| :--- | :--- | :--- |
| 雅可比常数 $C$ | 所有族 | CR3BP 守恒量；沿 $C$ 延拓直接对应能量层面的扫描 |
| $z$ 向振幅 $A_z$ | Halo 族 | 经典 Halo 族参数（Richardson 三阶近似亦以 $A_z$ 为参） |
| $x$ 向振幅 $A_x$ | Lyapunov 族 | 平面振幅，自然推广至 Lissajous |
| 周期 $T$ | DRO 族 | DRO 族在很大周期范围内存在 |
| 近月点高度 $h_p$ | 月球轨道族 | 工程上直观，但族存在性区间窄 |
| 初始 $\dot{y}_0$ | 单值族 | 通过固定一个分量降低自由度 |

固定步长 $\Delta\lambda$（或 $\Delta s$）选得过大会导致预测点偏离真实解曲线、[微分修正](/glossary/dynamics/differential-correction/) 不收敛；过小则计算量大。常用自适应策略：根据上一步牛顿迭代次数（少→放大步长，多→缩小）或解曲线曲率（曲率大处减小步长）调整。

## 应用要点

1. **族的系统化扫描**。给定一条种子周期轨道（通常由 [微分修正](/glossary/dynamics/differential-correction/) 求得），延拓可一次生成整族数千条轨道，避免逐个孤立的初值猜测；这是 Halo/Lyapunov/DRO/NRHO 族图谱的工业级生成方式（Zhang 2019）。
2. **模型间的过渡（model continuation）**。把"参数"取为模型保真度（如 CR3BP→双圆四体→星历 N 体），每步对当前模型求解平动点或周期轨道，得到保真度递增的解序列。这一思路由 Ren et al.（2012）、Dei Tos & Topputo（2017）系统化，是把 CR3BP 设计的轨道移植到真实星历环境的标配流程。
3. **准周期不变环面族的延拓**。在参考周期轨道的中心流形附近建立状态网格，施加频闪映射固定、沿环面无漂移、周期匹配等约束修正后，沿族的切向扰动延拓；这是 CR3BP 中准周期 Lissajous / quasi-Halo 族生成的标准方法（Capannolo et al. 2023；Gómez et al. 2001）。
4. **发射窗口与鲁棒性分析**。把出发时刻、月面停留时长等工程参数作为延拓变量，从最优解出发扫描可行区间，评估窗口宽度与备份能力（丁百慧等 2023）。

## 相关概念

- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [周期轨道族（Periodic Orbit Family）](/glossary/orbits/periodic-orbit-family/)

- [微分修正（Differential Correction）](/glossary/dynamics/differential-correction/)

- [庞加莱截面（Poincaré Section）](/glossary/dynamics/poincare-section/)

- [雅可比积分（Jacobi Integral）](/glossary/dynamics/jacobi-integral/)

- [同伦方法（Homotopy Method）](/glossary/dynamics/homotopy-method/)

- [会合坐标系（Synodic Frame）](/glossary/fundamentals/synodic-frame/)

## 参考文献

- Allgower E L, Georg K. 1990. *Numerical Continuation Methods: An Introduction*. Springer.（延拓算法经典教材，自然参数 / 弧长 / 单纯形方法的系统讲述）

- Seydel R. 2010. *Practical Bifurcation and Stability Analysis*. 3rd ed. Springer.（含转向点、分岔点处理的工程化讲法）

- Keller H B. 1977. Numerical solution of bifurcation and nonlinear eigenvalue problems. In *Applications of Bifurcation Theory*, Academic Press: 359–384.（伪弧长延拓的提出性文献）

- Doedel E J, et al. 2007. AUTO-07p: Continuation and bifurcation software for ordinary differential equations.（主流延拓软件的实现与文档）

- Galan-Vioque J, Almendral J A, McGrath M. 2014. Continuation of periodic orbits in symmetric Hamiltonian and conservative systems. *Discrete Contin. Dyn. Syst. Ser. S*.（保守系统周期轨道延拓的理论与 AUTO 实践）

- Gómez G, Mondelo J M. 2001. *Dynamics and Mission Design near Libration Points — vol. II*. World Scientific.（CR3BP 周期轨道族延拓的标准做法）

- Zhang C. 2019. Numerical continuation of families of periodic orbits in the circular restricted three-body problem.（地月系周期轨道族延拓综述性算例）

- Dei Tos D A, Topputo F. 2017. Trajectory refinement of three-body orbits in the real solar system model. *JGCD*.（模型延拓 CR3BP→星历的标配流程）

- 丁百慧 等. 2023. 载人月球探测任务转移轨道及月面着陆区评估分析.（延拓用于发射窗口鲁棒性分析的实例）
