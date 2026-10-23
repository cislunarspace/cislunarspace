---
title: 李雅普诺夫指数（Lyapunov Exponent）
description: 衡量相邻轨迹分离或收敛速率的指标。给出渐近李雅普诺夫特征指数的定义，区分有限时间指数与局部指数两层实际在用的量，说明它与单值矩阵、Floquet 乘子的换算关系与三条数值计算路径，并落到地月空间的保持点选择、混沌输运识别与长期稳定域映射。
keywords: 李雅普诺夫指数, Lyapunov exponent, 李雅普诺夫特征指数, Lyapunov characteristic exponent, LCE, 特征指数, 最大李雅普诺夫指数, 有限时间李雅普诺夫指数, FTLE, 局部李雅普诺夫指数, LLE, 快速李雅普诺夫指标, FLI, 混沌, 轨道稳定性
author: 天疆说
date: 2026-10-23
lastUpdated: 2026-10-23
wechatShare:
  title: 李雅普诺夫指数（Lyapunov Exponent）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 李雅普诺夫指数详解 | 术语定义
  description: 衡量相邻轨迹分离或收敛速率的指标。给出渐近指数的定义，区分有限时间指数与局部指数，说明与 Floquet 乘子的换算关系，并落到地月空间的应用。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 李雅普诺夫指数详解 | 术语定义
  description: 衡量相邻轨迹分离或收敛速率的指标。给出渐近指数的定义，区分有限时间指数与局部指数，说明与 Floquet 乘子的换算关系，并落到地月空间的应用。
  image: /logo.png
permalink: /glossary/dynamics/lyapunov-exponent/
aliases:
  - Lyapunov exponent
  - Lyapunov 指数
  - 李雅普诺夫特征指数
  - Lyapunov characteristic exponent
  - LCE
  - 特征指数
related:
  - ref: fundamentals/variational-equation
    relation: related
  - ref: fundamentals/stm
    relation: related
  - ref: dynamics/monodromy-matrix
    relation: related
  - ref: dynamics/characteristic-multiplier
    relation: related
  - ref: dynamics/cauchy-green-tensor-method
    relation: related
  - ref: orbits/lyapunov-orbit
    relation: related
  - ref: orbits/stationkeeping
    relation: related
---

# 李雅普诺夫指数（Lyapunov Exponent）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

李雅普诺夫指数（Lyapunov exponent，亦称李雅普诺夫特征指数，Lyapunov characteristic exponent，常缩写为 LCE）衡量动力系统中相邻轨迹分离或收敛的指数速率。两条起始相距无穷小的轨迹，其间距随时间的对数每单位时间的平均增长量就是沿该方向的李雅普诺夫指数。它是长时间平均意义下的量，与某一时刻的瞬时拉伸率不同。这一定义与它的存在性条件见 Guzzo 与 Lega 2023 \cite{guzzoTheoryApplicationsFast2023}。该指数的量纲是时间倒数，工程文献常按每天或每圈给出数值。

符号约定：指数为正表示相邻轨迹沿该方向指数分离，数值越大分离越快。指数为负表示指数收敛。周期或拟周期运动沿轨道切向的指数为零。

## 定义式与存在性

对自治系统 $\dot{\mathbf{x}}=\mathbf{f}(\mathbf{x})$ 的参考解 $\mathbf{x}(t)$，沿其线性化的切向量 $\mathbf{v}(t)$ 满足变分方程

$$\dot{\mathbf{v}}=\mathbf{Df}(\mathbf{x}(t))\,\mathbf{v}$$

给定切向量初值 $\mathbf{v}_0$，对应的李雅普诺夫特征指数定义为

$$\lambda(\mathbf{x}_0,\mathbf{v}_0)=\lim_{t\to+\infty}\frac{1}{t}\ln\frac{\|\mathbf{v}(t)\|}{\|\mathbf{v}_0\|}$$

由 Oseledets 乘性遍历定理，该极限对几乎所有 $\mathbf{x}_0$ 存在，全部切方向合起来至多给出 $n$ 个不同的值，$n$ 为相空间维数，这些值构成李雅普诺夫谱 \cite{guzzoTheoryApplicationsFast2023}。

## 三层量：渐近谱、有限时间指数、局部指数

实际计算拿不到 $t$ 趋于无穷的极限，文献因此在三个层次上使用同一个名字，写作时要指明用的是哪一层。

- 渐近谱：上面定义的 $\lambda_1,\dots,\lambda_n$，其中最大者称最大李雅普诺夫指数。判断混沌的依据是最大指数为正。
- 有限时间李雅普诺夫指数（finite-time Lyapunov exponent，FTLE）：固定积分窗 $T$，对参考点 $\mathbf{x}$ 定义

$$\sigma_{t_0}^{T}(\mathbf{x})=\frac{1}{|T|}\ln\left\|\frac{\mathrm{d}\varphi_{t_0}^{t_0+T}(\mathbf{x})}{\mathrm{d}\mathbf{x}}\right\|$$

范数取 L2 诱导的矩阵范数，即最大奇异值。$T$ 取正对应前向时间，取负对应后向时间。该式在 $|T|\to\infty$ 时回到渐近指数，两者是同一个定义在不同时间窗上的取值 \cite{shaddenDefinitionPropertiesLagrangian2005}。

- 局部李雅普诺夫指数（local Lyapunov exponent，LLE）：把同一表达式用在单条轨迹上，算成只反映窗内最强膨胀方向的标量，用状态转移矩阵的 2-范数写成

$$\lambda_{\max}=\frac{1}{|T_h|}\ln\left\|\boldsymbol{\Phi}(t_0+T_h,t_0)\right\|_2$$

其中 $\left\|\mathbf{M}\right\|_2$ 是 $\mathbf{M}^{\top}\mathbf{M}$ 最大特征值的平方根 \cite{renFamiliesTransfersMoon2020}。

三层的关系是：LLE 与 FTLE 用同一个范数表达式，LLE 是单条轨迹上的标量，FTLE 是同一个量在初值空间上扫出的分布，渐近指数是窗长趋于无穷的极限。同一个动力系统在三层上的数值不同，跨文献比较之前先对齐层次与窗长。小行星附近的轨道与姿态耦合分析是有限时间指数的一个典型用例 \cite{kikuchiStabilityAnalysisCoupled2019}。

## 与单值矩阵、Floquet 乘子的关系

对周期为 $P$ 的参考轨道，单值矩阵 $\mathbf{M}=\boldsymbol{\Phi}(P,0)$ 是状态转移矩阵在一个周期上的取值，其特征值 $\mu_i$ 是 Floquet 乘子。Floquet 理论给出分解 $\boldsymbol{\Phi}(t,0)=\mathbf{S}(t)e^{t\mathbf{K}}$，$\mathbf{S}(t)$ 以 $P$ 为周期，$\mathbf{K}$ 为常矩阵，于是 $\mathbf{M}=e^{P\mathbf{K}}$。单值矩阵的幂与指数矩阵的关系见 Gómez 等 2001 年第 1 章与 Meyer 等 2017 年第 4.3 节 \cite{gomezDynamicsMissionDesign2001Vol1,meyerIntroductionHamiltonianDynamical2017}。沿第 $i$ 个特征方向的指数增长率是

$$\lambda_i=\frac{1}{P}\ln|\mu_i|$$

也就是 Floquet 指数。工程上更常直接引用主导实乘子 $\mu_u$ 给出的发散率 $\delta=\ln|\mu_u|/P$。邓辉等（2017）给出地月系共线平动点轨道的 $\delta\approx0.5\ \mathrm{day}^{-1}$，意味几十米的初始位置误差在约 10 天内放大到几十千米量级 \cite{DengHuiDiYueXiGongXianPingDongDianTanCeQiDeXingShangGuiDaoYuBaoWenTi2017}。

两处容易混淆的边界要写清。

- 单值矩阵的 2-范数是最大奇异值，与乘子模的最大值一般不等，只在矩阵正规时相等。用范数直接算出的有限时间指数因此与按乘子逐方向算出的值不能混用 \cite{renFamiliesTransfersMoon2020}。
- 稳定指数（stability factor）$\nu=(|\mu_u|+|\mu_s|)/2$ 是无量纲的乘子组合，判的是周期轨道的线性稳定性，不换算成时间倒数的增长率 \cite{mengyun-heOutlineDesignPerformance2014}。

## 数值计算

三条路径，按需要的量选用。

- 变分方程加状态转移矩阵：沿标称轨迹积分 $\dot{\boldsymbol{\Phi}}=\mathbf{Df}\,\boldsymbol{\Phi}$，再按需要的方向取增长率的对数平均 \cite{guzzoTheoryApplicationsFast2023}。地月空间的保持点分析与周期轨道稳定性评估多用这一条。
- 整谱重正化：同时跟踪 $n$ 个扰动向量，按固定间隔做 Gram-Schmidt 正交化并累加对数，得到全谱而不溢出。Benettin 等给出这一算法及其理论依据 \cite{benettinLyapunovCharacteristicExponents1980}。
- 有限幅值差分：从相邻的两个初值各传播一个时段，取终点位移与初始位移之比的对数再除以时段。实现简单，得到的是有限幅值、有限窗的量，依赖扰动大小与时间窗，不是无穷小极限 \cite{huangRobustIntelligentGuidance2026}。

只有观测序列、拿不到动力学模型时，还可以用相空间重构做时间序列估计，地月空间的轨道问题一般用不到这条路 \cite{wolfDeterminingLyapunovExponents1985}。

## 地月空间用法

保持点选择。Huang 等（2026）在椭圆限制性三体问题下研究 2:1 共振 DRO 的保持点，把初始位置误差与速度误差分开处理。位置项按一个共振周期 $\tilde{T}_{\mathrm{DRO}}$ 的终点位移比定义

$$\lambda_R=\frac{1}{\tilde{T}_{\mathrm{DRO}}}\ln\frac{\left\|\mathbf{R}_R-\mathbf{R}_N\right\|}{\left\|\delta\mathbf{R}\right\|}$$

其中 $\mathbf{R}_N$ 是标称终点，$\mathbf{R}_R$ 是受扰轨迹的终点，原文式(14)把标称终点记作 $\mathbf{R}_1$。速度项先由有限差商构造等效变换矩阵，把速度误差折算成等效位置误差，再按同一形式计算。判据是这些指数的符号全为负时受扰轨迹在一个共振周期后收敛到标称 DRO，该节点即鲁棒保持点。算例沿 2:1 共振 DRO 等分 10 000 个节点逐个计算，得到的保持点段时长 16 359.3055 s。初始误差取导航误差 10 km 与 10 mm/s、控制误差 1.7 mm/s，合成误差约 145.642 km，蒙特卡洛 10 000 次得到终值位置误差 0 到 120 km，小于初始合成误差 \cite{huangRobustIntelligentGuidance2026}。

该文的用词需要单独说明。它通篇写 Lyapunov exponent，从不写 finite-time，实际计算的却是有限幅值、单周期、逐分量的端点位移比，既不含无穷小极限，也不取最大方向，与标准 FTLE 和渐近指数都不同。原文没有报告 $\lambda$ 的数值与扰动幅值，引用时不宜把它当作有限时间指数的算例，也不要补出量级。

混沌输运与设计空间分区。FTLE 场的高值脊线即拉格朗日相干结构，把输运最快的边界显式画出来，用于识别低能通道与划分设计空间区域 \cite{canalesUnderstandingFlowPlanetary2024,canalesTransfersBetweenMoons2023,chenTransferDistantRetrograde2025,indacoStructureNRHOtoLLOAbort2024}。

长期稳定域映射。快速李雅普诺夫指标（fast Lyapunov indicator，FLI）用一次较短积分比较增长与参考值，判定混沌比长时间积分省算力，适合在参数空间上做大范围扫描，例如 DRO 的长期稳定域与处置轨道筛选 \cite{villacMappingLongtermStability2005,scottStabilityMappingDistant2008}。中文文献把这一族指标并列写作最大特征李雅普诺夫指数、快速李雅普诺夫特征指数与邻近轨道平均指数增长因子 \cite{DingYingRiDiGongGuiXiaoXingXingGuiDaoYunDongWenDingXingKuaiSuPanDingFangFaYanJiu2025}。

## 概念辨析

同名不同义。Lyapunov 轨道族的名字来自李雅普诺夫中心定理，中心定理保证共线平动点邻域存在平面与垂直两族周期解，与指数所依据的稳定性理论无关 \cite{alessiLeavingMoonMeans2009}。李雅普诺夫稳定性（Lyapunov stability）又是另一件事，指用李雅普诺夫函数判定平衡点或闭轨在扰动下的稳定性，判据里没有指数增长率。三种用法共用一个人名，讨论时要指明是哪一种。

与特征指数的关系。李雅普诺夫特征指数与特征指数是同一概念的两种叫法，中文文献里最大特征李雅普诺夫指数指谱中的最大者。

与乘子的关系。Floquet 乘子、特征乘子是单值矩阵的特征值，取对数再除以周期才得到按时间的增长率，二者是换算关系，不是同一个量，见上一节。

与稳定域指标的关系。FLI 取窗内增长对数的上确界，属判据型指标，与按时间平均得到的增长率不是同一个量 \cite{guzzoTheoryApplicationsFast2023,villacMappingLongtermStability2005}。

## 相关概念

- [变分方程（Variational Equation）](/glossary/fundamentals/variational-equation/)
- [状态转移矩阵（State Transition Matrix）](/glossary/fundamentals/stm/)
- [单值矩阵与Floquet稳定性分析（Monodromy Matrix）](/glossary/dynamics/monodromy-matrix/)
- [特征乘子（Characteristic Multiplier）](/glossary/dynamics/characteristic-multiplier/)
- [柯西-格林张量方法（Cauchy-Green Tensor Method）](/glossary/dynamics/cauchy-green-tensor-method/)
- [Lyapunov 轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
- [轨道保持（Stationkeeping）](/glossary/orbits/stationkeeping/)
