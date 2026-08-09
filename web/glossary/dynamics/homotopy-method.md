---
title: 同伦方法（Homotopy Method）
description: 通过构造连接"易解问题"与"目标问题"的同伦函数 H(y,κ)=κF(y)+(1-κ)G(y)，沿 κ 从 0 到 1 跟踪零路径以求解难解的两点边值问题。在小推力轨迹优化中是把光滑的能量最优解逐步变形为 bang-bang 燃料最优解、或把高推力解降到目标低推力的核心数值手段。
keywords: 同伦方法, homotopy method, 同伦延拓, homotopy continuation, 平滑技术, 推力同伦, L2-L1 同伦, 能量-燃料最优, 间接法, 两点边值问题
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 同伦方法（Homotopy Method）
  desc: 小推力轨迹优化中把能量最优解逐步变形为燃料最优解的核心数值方法。
  image: /logo.png
og:
  title: 同伦方法（Homotopy Method）详解 | 术语定义
  description: 通过构造连接"易解问题"与"目标问题"的同伦函数 H(y,κ)=κF(y)+(1-κ)G(y)，沿 κ 从 0 到 1 跟踪零路径以求解难解的两点边值问题。在小推力轨迹优化中是把光滑的能量最优解逐步变形为 bang-bang 燃料最优解的核心数值手段。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 同伦方法（Homotopy Method）详解 | 术语定义
  description: 通过构造连接"易解问题"与"目标问题"的同伦函数 H(y,κ)=κF(y)+(1-κ)G(y)，沿 κ 从 0 到 1 跟踪零路径以求解难解的两点边值问题。在小推力轨迹优化中是把光滑的能量最优解逐步变形为 bang-bang 燃料最优解的核心数值手段。
  image: /logo.png
permalink: /glossary/dynamics/homotopy-method/
---

# 同伦方法（Homotopy Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

同伦方法（homotopy method，又称同伦延拓 homotopy continuation）是求解非线性方程组 $\mathbf{F}(\mathbf{y})=\mathbf{0}$ 的一类数值方法。其思路是：构造一个含参数 $\kappa\in[0,1]$ 的**同伦函数** $\mathbf{H}(\mathbf{y},\kappa)$，使

$$\mathbf{H}(\mathbf{y},0)=\mathbf{G}(\mathbf{y})\ \text{（易解的"初始问题"）},\qquad \mathbf{H}(\mathbf{y},1)=\mathbf{F}(\mathbf{y})\ \text{（目标问题）},$$

然后从 $\kappa=0$ 的已知解出发，沿 $\mathbf{H}(\mathbf{y},\kappa)=\mathbf{0}$ 的零曲线跟踪到 $\kappa=1$，得到 $\mathbf{F}(\mathbf{y})=\mathbf{0}$ 的解（Watson 1986；Allgower & Georg 1990）。

**与 [数值延拓](/glossary/dynamics/continuation/) 的关系**：同伦方法是延拓方法的子类——它把"参数 $\lambda$"具体化为同伦参数 $\kappa$，把"含参数方程"具体化为人为构造的同伦函数 $\mathbf{H}$。延拓是几何地跟踪已有方程的解曲线；同伦是先人为地嵌入一族方程再跟踪。两者共享同一套路径跟踪算法（预测-校正、伪弧长），但出发点不同：延拓从已知的单一解推进到该解所属的族；同伦从人为构造的、有已知解的"简单问题"出发去攻一个原本没有可用初值的难问题。

在轨道力学中，"难问题"通常是 [间接法](/glossary/dynamics/indirect-methods/) 推导出的两点边值问题（TPBVP）——协态初值收敛域极小、燃料最优控制呈 bang-bang 不连续结构，直接打靶几乎不可能收敛。同伦方法通过把一个光滑、易收敛的"姊妹问题"（如能量最优问题）逐步变形为目标问题，把单次大跳跃换成数百次小步推进，是间接法从"理论最优"走向"工程可解"的关键桥梁（Bertrand & Epenoy 2002；Haberkorn et al. 2004；Taheri et al. 2016）。

## 同伦函数的构造

### 一般形式

最常用的凸组合形式（Haberkorn et al. 2004；潘迅和泮斌峰 2019）：

$$\mathbf{H}(\mathbf{y},\kappa)=\kappa\,\mathbf{F}(\mathbf{y})+(1-\kappa)\,\mathbf{G}(\mathbf{y}),$$

其中 $\mathbf{G}$ 是初始问题（$\kappa=0$ 时），$\mathbf{F}$ 是目标问题（$\kappa=1$ 时）。$\mathbf{G}$ 的选择决定同伦的命名：

| 构造方式 | $\mathbf{G}(\mathbf{y})$ | $\kappa=0$ 的解 | 适用性 |
| :--- | :--- | :--- | :--- |
| **牛顿同伦**（Newton homotopy） | $\mathbf{F}(\mathbf{y})-\mathbf{F}(\mathbf{y}_0)$ | 已知猜测 $\mathbf{y}_0$ 附近 | 构造最简单，但要求 $\mathbf{y}_0$ 已经接近真解 |
| **定点同伦**（Fixed-point homotopy） | $\mathbf{y}-\mathbf{y}_0$ | $\mathbf{y}=\mathbf{y}_0$ | 不依赖 $\mathbf{F}$ 的具体形式，普适；对 $\mathbf{y}_0$ 要求较松 |
| **尺度不变仿射同伦**（Scale-invariant affine） | 仿射组合，对 $\mathbf{y}$ 的尺度不敏感 | — | 变量量纲差异大时更稳健 |
| **代价函数同伦**（cost homotopy） | 性能指标的凸组合 | 能量最优解 | 小推力燃料最优问题主流做法（见下） |

牛顿与定点同伦用于"已经有了一个粗糙猜测、想找精确解"的情形；代价函数同伦与下面的推力同伦用于"想从一种物理上容易的解跳到另一种物理上困难的解"，是轨道优化中最重要的两类。

### 能量最优 → 燃料最优（代价函数同伦）

航天器小推力最优控制中，能量最优（$L^2$ 范数）性能指标

$$J_E=\int_{t_0}^{t_f}\|\mathbf{u}(t)\|^2\,dt$$

对应的控制律连续光滑、收敛域宽；而燃料最优（$L^1$ 范数）

$$J_F=\int_{t_0}^{t_f}\|\mathbf{u}(t)\|\,dt$$

对应不连续的 bang-bang / bang-off-bang 控制，[打靶法](/glossary/dynamics/differential-correction/) 直接求解几乎不收敛。Bertrand & Epenoy（2002）引入光滑化性能指标

$$J_\varepsilon=\int_{t_0}^{t_f}\bigl[\|\mathbf{u}\|-\varepsilon\,F(\|\mathbf{u}\|)\bigr]\,dt,$$

其中 $F$ 是连续扰动函数（如 $F(w)=w(1-w)$、对数障碍项、sigmoid 形式等），$\varepsilon\in[0,1]$ 即同伦参数。$\varepsilon=1$ 时 $J_\varepsilon$ 退化为能量最优（光滑），$\varepsilon\to 0$ 时逼近燃料最优（bang-bang）。求解策略：取递减序列 $\varepsilon_1>\varepsilon_2>\cdots>\varepsilon_n\to 0$，每一步以前一步的协态为初值，依次求解子问题。

### 平滑函数的选择

扰动项 $F$ 的具体形式决定同伦路径的光滑性与收敛速度：

- **多项式平滑**（Bertrand & Epenoy 2002 原型）：$F(w)=w(1-w)$。最简单，但低推力下控制切换次数剧增时精度恶化、二阶最优性条件难以验证。

- **L2-L1 同伦**（Caillau et al. 2012）：取 $L^2$ 与 $L^1$ 的凸组合作为代价，等价于上述凸组合形式的特例，与多项式平滑在 CR3BP 平面最小燃料问题中是经典实现。

- **对数障碍同伦**（Caillau et al. 2012）：在代价中加 $-\varepsilon\ln(\|\mathbf{u}\|(1-\|\mathbf{u}\|))$，强制 $0<\|\mathbf{u}\|<1$，使哈密顿最大化处处可微，克服 L2-L1 同伦在低推力下精度恶化的困难。

- **扩展对数平滑**（Taheri et al. 2016）：把对数平滑改写为对切换函数（switching function）的平滑，并与状态转移矩阵法结合以获得高精度雅可比，使 $\varepsilon$ 可大幅跳跃（如 1→0.01→$10^{-5}$）仅需 3 个子问题而非 6 个。

- **sigmoid 平滑**（Zhang et al. 2025）：用 $\tanh$、代数函数、误差函数 erf 等参数化 sigmoid 逼近符号函数 $\mathrm{sign}(S)$，其中 $S$ 为切换函数。误差函数在 L1→L2 halo 转移算例中比 $\tanh$ 与代数形式收敛快一倍、终端误差低一个量级。

工程上的实证判据是：**给定 $\varepsilon$，最优控制接近 bang-bang 的程度**——经验上 $\varepsilon\sim 10^{-5}$ 时推力剖面与真正 bang-bang 已几乎不可分辨（Taheri et al. 2016；Zhang et al. 2025）。

### 推力幅值同伦（thrust continuation / thrust homotopy）

另一类同伦把推力上限 $T_{\max}$ 当作同伦参数：从较大的、容易收敛的 $T_L$ 出发，逐步降到目标 $T_{\max}$（Caillau & Daoud 2012；潘迅和泮斌峰 2019）。动力学方程中实际推力幅值写为

$$T(\kappa)=T_{\max}+\kappa\,(T_L-T_{\max}),\qquad \kappa\in[0,1],$$

$\kappa=0$ 对应目标低推力（难），$\kappa=1$ 对应高推力（易）。该思路亦用于受摄 Lambert 问题的"目标点拉回"——把目标点从两体 Lambert 解的位置逐步拉回到多体真实位置，每步按比例调整偏差（同伦迭代法）。

### LP → $T_{\min}$ → CEV 延拓链

电推进任务中常用一条三阶段同伦链以避免指定任何"用户猜测"（Petukhov & Yoon 2023；Yoon & Petukhov 2023）：

1. **限功率问题（LP）**：假设功率恒定、推力可任意小（无切换），用零初值即可解。
2. **最小推力问题（$T_{\min}$）**：从 LP 解出发，延拓求出给定角距离下可行的最小推力值，用于验证 CEV 问题解的存在性。
3. **恒定排气速度有限推力问题（CEV）**：从 $T_{\min}$ 解出发，延拓到给定的 $T_{\mathrm{cev}}\geq T_{\min}$，得到带开关的真实 bang-off-bang 燃料最优解。

每一阶段都用牛顿同伦把边值问题浸入一参数族，逐步推进。这套流程是 Petukhov 学派地月低推力轨道优化的标志。

### 端点同伦

通过调整转移出发点在停泊轨道上的相位来降低所需推力：沿轨道运动反方向拖动出发点，增加转移圈数，从而摊薄所需速度增量。这是电推进地球–月球转移设计中逐步降低推力的经典手段，与小推力幅值同伦等价地增加转移时长。

## 路径跟踪算法

构造完同伦函数后，还要沿 $\mathbf{H}(\mathbf{y},\kappa)=\mathbf{0}$ 的零路径跟踪。两类做法（潘迅和泮斌峰 2019；Haberkorn et al. 2004）：

### 离散同伦（discrete homotopy）

把 $\kappa$ 从 0 到 1 划分为离散节点 $0=\kappa_1<\kappa_2<\cdots<\kappa_m=1$，依次求解每个子问题，以前一步解为下一步初值。**优点**：实现简单。**缺点**：相邻节点距离过远时不收敛；当同伦曲线存在拐点（$d\kappa/ds=0$）时直接失效。

### 连续同伦（continuous homotopy）

沿同伦曲线的切线方向，以伪弧长 $\Delta s$ 为步长跟踪（即 [数值延拓](/glossary/dynamics/continuation/) 中的伪弧长法）：在当前节点 $(\kappa_i,\mathbf{y}_i)$ 计算雅可比，按切向预测下一步，再以牛顿法校正。由于步进方向由曲线切线决定，$\kappa$ 在跟踪中**可增可减**，因此可绕过拐点；推力幅值同伦曲线在 $\kappa\approx 0.85$ 附近多次出现拐点并产生多个局部最优解，离散同伦完全无法处理，必须用连续同伦（潘迅和泮斌峰 2019）。

预测-校正（predictor-corrector）是连续同伦的标准实现：先以切向欧拉一步预测，再以牛顿迭代校正至零路径。

## 在小推力轨道优化中的作用

间接法解小推力最优控制问题时，状态–协态联立方程两端边值问题的打靶函数对协态初值极度敏感，收敛半径小到几乎不可能给出可用初值——尤其当推力小（圈数多、切换次数多）、或控制呈 bang-bang 时（Haberkorn et al. 2004；Taheri et al. 2016）。同伦方法通过两层机制破解这一困难：

1. **扩大收敛域**：每步子问题与前一步仅差 $\Delta\kappa$，前一步的解自然落在当前子问题牛顿收敛域内，逐步推进等效于把收敛半径放大数个量级。
2. **处理不连续控制**：代价函数同伦让 $\varepsilon>0$ 时控制连续可微，状态转移矩阵法可正常用于雅可比计算；$\varepsilon$ 足够小时控制已逼近 bang-bang，再以离散事件检测精修切换时刻。

实证上，Haberkorn et al.（2004）用代价函数同伦 + 单次打靶求解了 LEO–GEO 0.1 N 级别（数百圈、数百次切换）的最小燃料转移；潘迅和泮斌峰（2019）用推力幅值同伦 + 伪弧长跟踪求解了 GEO→$L_2$ 的 1 N 时间最优转移，并在拐点附近发现 13 个局部最优解；Zhang et al.（2025）用 erf 平滑同伦求解了 $L_1$ Halo→$L_2$ Halo 的最小燃料转移，消耗仅 0.34% 航天器质量。

## 与数值延拓的辨析

文献中"continuation""homotopy""homotopy continuation"常被混用，但工程含义不同：

| 维度 | 数值延拓 | 同伦方法 |
| :--- | :--- | :--- |
| 起点 | 一族解中已知的一个 | 人为构造的"简单问题"的解 |
| 参数 | 物理参数（$C$、振幅、模型保真度） | 人为嵌入的同伦参数 $\kappa$ / $\varepsilon$ |
| 目标 | 扫出该参数下的解分支 | 把简单问题的解变形为原问题的解 |
| 典型应用 | 周期轨道族扫描、模型过渡 | 燃料最优 bang-bang 控制、低推力收敛 |

两者共享路径跟踪算法（自然参数、伪弧长、预测-校正），但**目的与构造**不同：延拓是描述性的（"这条曲线长什么样"），同伦是求解工具性的（"我构造一条曲线来达到目标解"）。

## 相关概念

- [数值延拓（Numerical Continuation）](/glossary/dynamics/continuation/)

- [间接法（Indirect Methods）](/glossary/dynamics/indirect-methods/)

- [打靶法（Shooting Method）](/glossary/dynamics/differential-correction/)

- [微分修正（Differential Correction）](/glossary/dynamics/differential-correction/)

- [协态归一化（Co-state Normalization）](/glossary/dynamics/costate-normalization/)

- [Bang-bang 控制（Bang-bang Control）](/glossary/dynamics/bang-bang-control/)

- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

## 参考文献

- Allgower E L, Georg K. 1990. *Numerical Continuation Methods: An Introduction*. Springer.（同伦与延拓算法的统一教材）

- Watson L T. 1986. Numerical linear algebra aspects of globally convergent homotopy methods. *SIAM Rev.* 28(4): 575–606.（同伦路径跟踪的数值线性代数）

- Bertrand R, Epenoy R. 2002. New smoothing techniques for solving bang–bang optimal control problems—numerical results and statistical interpretation. *Optim. Control Appl. Methods* 23(4): 171–197.（$\varepsilon$-平滑化性能指标的开创性文献）

- Haberkorn T, Martinon P, Gergaud J. 2004. Low thrust minimum-fuel orbital transfer: a homotopic approach. *JGCD* 27(6): 1046–1060.（能量→燃料同伦 + 单次打靶求解 LEO–GEO 0.1 N 转移；对比 PL / PC 三类跟踪算法）

- Gergaud J, Haberkorn T. 2006. Homotopy method for minimum consumption orbit transfer problem. *ESAIM Control Optim. Calc. Var.* 12(2): 294–313.（同伦方法的轨道转移应用综述）

- Caillau J B, Daoud B. 2012. Minimum time control of the restricted three-body problem. *SIAM J. Control Optim.* 50(6).（推力幅值同伦、最小时间问题）

- Caillau J B, Cerf M, Dujols A, et al. 2012. Minimum fuel control of the planar circular restricted three-body problem. *CEP*（L2-L1 与对数障碍同伦在 CR3BP 平面最小燃料的对比）

- Taheri E, Kolmanovsky I, Atkins E. 2016. Enhanced smoothing technique for indirect optimization of minimum-fuel low-thrust trajectories. *JGDD* 39(11): 2500–2511.（扩展对数平滑 + 状态转移矩阵法，减少子问题数）

- Pan X, Pan B F. 2019. 基于同伦方法的地月系 $L_2$ 点小推力转移轨道优化.（推力幅值同伦 + 伪弧长跟踪的中文学源；牛顿 / 定点 / 尺度不变仿射同伦的中文学界术语出处）

- Yoon S, Petukhov V. 2023. Minimum-fuel low-thrust trajectories to the Moon. *Acta Astronaut.*（LP→$T_{\min}$→CEV 三阶段同伦链在地月转移的实现）

- Zhang et al. 2025. Smoothing technique for indirect low-thrust trajectory optimization in cislunar space.（$\tanh$ / 代数 / erf 三类 sigmoid 平滑在 $L_1$–$L_2$ Halo 转移的对比）

- 关宇同, 高长生, 胡玉东, 赵海涵. 2026. 面向航天器远距离协同交会的超参数自主调优-同伦方法. *航天器环境工程*.（RLEPSO 提供初始协态、同伦法精修的工程实践）
