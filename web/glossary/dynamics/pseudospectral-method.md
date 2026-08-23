---
title: 伪谱法（Pseudospectral Method / Spectral Collocation）
description: 直接法的重要分支：用单一高阶全局 Lagrange 多项式逼近状态与控制，配点取 Legendre-Gauss（LG）/Legendre-Gauss-Radau（LGR）/Legendre-Gauss-Lobatto（LGL）正交节点。具有谱收敛性，且配点处的 KKT 条件与连续 OCP 的极大值原理一一对应（covector mapping）。覆盖 GPM、RPM（flipped Radau）、LPM、Chebyshev 变体及 GPOPS-II 等工具。
keywords: 伪谱法, Pseudospectral Method, GPM, Gauss Pseudospectral Method, RPM, Radau Pseudospectral Method, LPM, Lobatto Pseudospectral Method, Chebyshev, Lagrange 插值, Legendre-Gauss, 谱收敛, hp 自适应, GPOPS-II, DIDO, covector mapping
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 伪谱法（Pseudospectral Method）
  desc: 全局 Lagrange 多项式 + Legendre 正交节点：谱收敛与协态映射定理。
  image: /logo.png
og:
  title: 伪谱法详解 | 最优控制
  description: 直接法的重要分支：用单一高阶全局 Lagrange 多项式逼近状态与控制，配点取 Legendre-Gauss/Radau/Lobatto 节点。谱收敛、covector mapping；覆盖 GPM、RPM、LPM、Chebyshev 变体及 GPOPS-II。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 伪谱法详解 | 最优控制
  description: 直接法的重要分支：用单一高阶全局 Lagrange 多项式逼近状态与控制，配点取 Legendre-Gauss/Radau/Lobatto 节点。谱收敛、covector mapping；覆盖 GPM、RPM、LPM、Chebyshev 变体及 GPOPS-II。
  image: /logo.png
permalink: /glossary/dynamics/pseudospectral-method/
---

# 伪谱法（Pseudospectral Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

伪谱法（pseudospectral method，又称谱配点法 spectral collocation）是 [直接法](/glossary/dynamics/direct-methods/) 中的一类：把整个时间区间映射到 $[-1,1]$，用单一高阶全局 Lagrange 多项式插值状态 $\mathbf{x}(\tau)$ 与控制 $\mathbf{u}(\tau)$，在正交节点处强制满足动力学。配点取 Legendre 多项式的根（或根 + 端点），节点数 $N$ 通常取 20~100 每相，可以远少于 [直接配点法](/glossary/dynamics/direct-collocation/) 的总节点数。对所有光滑函数都有谱（指数）收敛性（Canuto 等 1988；Fornberg 1998）。

## 数学形式

把连续时间 $t\in[t_0,t_f]$ 映射到 $\tau\in[-1,1]$：

$$t = \frac{t_f-t_0}{2}\tau + \frac{t_f+t_0}{2}.$$

取 $N+1$ 个正交节点 $\{-1=\tau_0<\tau_1<\dots<\tau_N=1\}$（具体分布见下节），状态在节点上的值 $\{\mathbf{x}_k\}_{k=0}^N$ 为 NLP 变量。状态近似为

$$\mathbf{x}(\tau)\approx\sum_{k=0}^{N} L_k(\tau)\,\mathbf{x}_k,\quad L_k(\tau)=\prod_{\substack{j=0\\j\neq k}}^{N}\frac{\tau-\tau_j}{\tau_k-\tau_j}$$

为 Lagrange 基函数。其导数在节点处的值由**微分矩阵** $\mathbf{D}$ 一次计算给出：

$$\dot{\mathbf{x}}(\tau_i)\approx\sum_{k=0}^{N} D_{ik}\,\mathbf{x}_k,\quad D_{ik}=\dot{L}_k(\tau_i).$$

伪谱缺陷约束（仍称 defect）为

$$\boldsymbol{\zeta}_i = \sum_{k=0}^{N} D_{ik}\,\mathbf{x}_k - \frac{t_f-t_0}{2}\,\mathbf{f}(\mathbf{x}_i,\mathbf{u}_i,\tau_i) = \mathbf{0},\quad i=0,\dots,N.$$

注意：与 [直接配点法](/glossary/dynamics/direct-collocation/) 不同，伪谱法的雅可比是稠密的：每个节点上的缺陷约束依赖于全部 $N+1$ 个状态变量。这是它全局多项式特性的代价。

## 节点选择与变体

按配点位置，主流伪谱法分三类，对应 Lagrange 多项式的不同正交族：

| 名称 | 节点 | 收敛性/特性 |
| :--- | :--- | :--- |
| **LPM**（Lobatto pseudospectral method） | LGL：Legendre 多项式 $P_N(\tau)$ 的根 + 两端 $\pm 1$ | 端点处协态有边界效应，需做边界加权修正 |
| **GPM**（Gauss pseudospectral method） | LG：$P_{N+1}(\tau)$ 的根（不含端点） | 协态映射最干净，端点状态作为额外变量（Benson 2005；Huntington 2007） |
| **RPM**（Radau pseudospectral method） | LGR：$P_N(\tau)+P_{N+1}(\tau)$ 的根（含一端） | 一端连续一端离散，积分格式更稳；flipped Radau（FRPM）在 SCP 中常用于提升稀疏性（Garg et al. 2011） |

三者的协态映射定理形式不同：**GPM 与 RPM 的 KKT 乘子可直接对应连续协态**，**LPM 需额外做端点加权**（Benson et al. 2006；Garg et al. 2010）。这是近年 GPOPS-II 等工具转向 RPM/FRPM 的主要原因。

Chebyshev 节点（Chebyshev-Gauss-Lobatto）的另一族：**Chebyshev 伪谱法（CPM）**，在节点与微分矩阵上有闭式表达，计算效率更高；通过共形映射 + 重心插值可显著缓解标准 CPM 微分矩阵的病态（Kosloff & Tal-Ezer 1993；Cai 等 2016）。

## 谱收敛性与 hp 自适应

谱收敛性指：对解析解，误差随节点数 $N$ 以 $O(\rho^{-N})$（$\rho>1$）下降，比任何多项式阶都快。但对非光滑解（如低推力燃料最优的 bang-bang 控制），全局多项式会出现 Gibbs 振荡，谱收敛性失效。

工程对策是 **hp 自适应**：

- **h 型**：在控制不连续处把整段切成多相，每相独立用伪谱离散，相间用状态/控制连续性约束连接（Darby et al. 2011）。
- **p 型**：在每段内根据误差估计加密节点数。

GPOPS-II、SPARTAN 等工具内置 hp 自适应。对强 bang-bang 问题，近年发展的 flipped Radau + switching-time 提取（Hofmann & Topputo 2021）能精确定位开关时刻，把控制离散为分段常数后再优化。

## 协态映射定理

伪谱法的核心理论结果是 **covector mapping theorem**（Benson 2005；Benson, Huntington, Rao 2006）：经过适当的线性变换，GPM/RPM 离散 NLP 的 KKT 乘子 $\tilde{\boldsymbol{\lambda}}_k$ 在节点上严格对应连续 OCP 的协态 $\boldsymbol{\lambda}(\tau_k)$。

工程意义：

- 用伪谱法可直接得到协态时间历程，无需解析推导庞特里亚金极大值原理；
- 计算 Hamiltonian $H(\mathbf{x},\mathbf{u},\boldsymbol{\lambda},t)$ 是否沿轨迹恒定，作为解的精度校核；
- 把伪谱协态作为 [间接法](/glossary/dynamics/indirect-methods/) 或 [同伦法](/glossary/dynamics/homotopy-method/) 的初值，实现伪谱-间接混合求解（Cai 等 2016）。

## 工具与软件

| 工具 | 算法 | 来源 |
| :--- | :--- | :--- |
| **GPOPS-II** | hp 自适应 LGR 配点 + Ipopt/SNOPT | Patterson & Rao 2014，MATLAB |
| **DIDO** | Legendre 伪谱 | Ross 等，MATLAB |
| **GPOPS**（原版） | Gauss 伪谱 | Rao et al. 2010 |
| **SPARTAN** | flipped Radau | Sagliano 2017 |
| **CasADi + 自写配点** | 任意 | CasADi 符号框架 |

## 应用要点

- **平动点轨道转移**：低推力 Halo↔NRHO 转移、Halo 族内转移，伪谱法因配点少、协态精度高而是首选之一（Liu 2025；Kayama 2022）。
- **多阶段问题**：发射/级间分离/入轨/再入等多阶段任务，GPOPS-II 的相间事件约束可自然处理（Jorris 等）。
- **作为 SCP 离散化后端**：在 [序列凸规划](/glossary/dynamics/scp/) 中，FRPM 因稀疏性优于 GPM 而被广泛采用（Hofmann & Topputo 2021）。
- **不适用场合**：强 bang-bang 燃料最优问题若不做 hp 加密，会有 Gibbs 振荡；高速率状态变化（如 6DOF 旋转-平移耦合）改用直接配点更稳。

## 相关概念

- [直接法（Direct Methods）](/glossary/dynamics/direct-methods/)
- [直接配点法（Direct Collocation）](/glossary/dynamics/direct-collocation/)
- [序列凸规划（SCP）](/glossary/dynamics/scp/)
- [协态变量（Costate Variable）](/glossary/dynamics/co-state-variables/)
- [庞特里亚金极大值原理（Pontryagin's Maximum Principle）](/glossary/dynamics/pontryagins-maximum-principle/)
- [同伦法（Homotopy Method）](/glossary/dynamics/homotopy-method/)
- [Legendre-Clebsch 条件（Legendre-Clebsch Condition）](/glossary/fundamentals/conjugate-point/)

## 参考文献

- Benson, D. A. (2005). A Gauss pseudospectral transcription for optimal control. PhD thesis, MIT.
- Benson, D. A., Huntington, G. T., Thorvaldsen, T. P., & Rao, A. V. (2006). Direct trajectory optimization and costate estimation via an orthogonal collocation method. *Journal of Guidance, Control, and Dynamics*, 29(6), 1435–1440.
- Garg, D., Patterson, M. A., Hager, W. W., Rao, A. V., Benson, D. A., & Huntington, G. T. (2010). A unified framework for the numerical solution of optimal control problems using pseudospectral methods. *Automatica*, 46(11), 1843–1851.
- Garg, D., Patterson, M. A., Darby, C. L., Francolin, C., Huntington, G. T., Hager, W. W., & Rao, A. V. (2011). Direct trajectory optimization and costate estimation via a Radau pseudospectral method. *Computational Optimization and Applications*, 49(2), 335–358.
- Huntington, G. T. (2007). Advancement and analysis of a Gauss pseudospectral transcription for optimal control. PhD thesis, MIT.
- Darby, C. L., Hager, W. W., & Rao, A. V. (2011). An hp-adaptive pseudospectral method for solving optimal control problems. *Optimal Control Applications and Methods*, 32(4), 476–502.
- Patterson, M. A., & Rao, A. V. (2014). GPOPS-II. *ACM Transactions on Mathematical Software*, 41(1), 1:1–1:37.
- Fornberg, B. (1998). *A Practical Guide to Pseudospectral Methods*. Cambridge University Press.
- Canuto, C., Hussaini, M. Y., Quarteroni, A., & Zang, T. A. (1988). *Spectral Methods in Fluid Dynamics*. Springer.
- Kosloff, D., & Tal-Ezer, H. (1993). A modified Chebyshev pseudospectral method with $O(N^{-1})$ time step restriction. *Journal of Computational Physics*, 104(2), 457–469.
- Cai, Z., 等. (2016). Bang-bang optimal control for differentially flat systems using mapped pseudospectral method and analytic homotopic approach. *Optimal Control Applications and Methods*.
- Hofmann, C., & Topputo, F. (2021). Rapid low-thrust trajectory optimization in deep space based on convex programming. *Journal of Guidance, Control, and Dynamics*.
- Sagliano, M. (2017). On the Radau pseudospectral method: theoretical and implementation advances. *CEAS Space Journal*, 9(3), 313–331.
