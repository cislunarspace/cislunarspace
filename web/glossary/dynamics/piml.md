---
title: 物理信息机器学习（Physics-Informed Machine Learning）
description: 把控制方程、守恒律等物理知识嵌入机器学习训练与推断的一类方法总称。给出软约束与硬约束两种落法，物理信息神经网络（PINN）的残差损失形式与正问题、反问题两类任务，辨析 PIML 与代理模型、纯数据驱动学习、数值积分的边界，并综述短弧段仅测角初轨确定、不确定性传播与最优轨道转移三类地月空间应用。
keywords: 物理信息机器学习, PIML, 物理信息神经网络, PINN, 科学机器学习, 物理约束, 残差损失, 软约束, 硬约束, 代理模型, 初轨确定, 不确定性传播
author: 天疆说
date: 2026-10-27
lastUpdated: 2026-10-27
wechatShare:
  title: 物理信息机器学习（Physics-Informed Machine Learning）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 物理信息机器学习详解 | 术语定义
  description: 把物理知识嵌入机器学习的范式，含 PINN 的残差损失形式、与代理模型的辨析及地月空间应用。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 物理信息机器学习详解 | 术语定义
  description: 把物理知识嵌入机器学习的范式，含 PINN 的残差损失形式、与代理模型的辨析及地月空间应用。
  image: /logo.png
permalink: /glossary/dynamics/piml/
aliases:
  - PIML
  - Physics-Informed Machine Learning
  - physics-informed machine learning
  - 物理信息学习
related:
  - ref: dynamics/hddp
    relation: related
  - ref: dynamics/goodings-method
    relation: related
---

# 物理信息机器学习（Physics-Informed Machine Learning）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

物理信息机器学习（physics-informed machine learning，PIML）是把物理知识嵌入机器学习模型的训练与推断，使学习结果满足已知物理规律的一类方法总称。嵌入的物理知识可以是控制方程、守恒律、对称性、边界条件或问题特有的先验约束。与纯数据驱动学习相比，PIML 在观测数据稀疏、噪声强或需要外推的场合，用物理约束补充数据信息，得到不违反基本规律的学习器。更宽的伞词是科学机器学习（scientific machine learning），PIML 是其核心组成部分\cite{karniadakisPhysicsinformedMachineLearning2021}。

PIML 覆盖两类任务。正问题是加快或替代昂贵的物理模型求解，例如用学习器近似高保真数值积分。反问题是从观测辨识模型的未知参数或未知状态，方程残差在训练中起正则化的作用。同一框架通常两类任务都能承担，这是 PIML 相对纯代理建模的一个特点\cite{karniadakisPhysicsinformedMachineLearning2021}。

按物理约束进入学习器的方式，常见两种落法。软约束把方程残差作为罚项加入损失函数，约束只在优化意义下近似满足。硬约束在学习器解空间的构造上精确满足约束，例如把边界条件嵌入近似解的表达式，优化只在满足约束的集合上进行。两者的取舍是约束满足精度与优化难度的取舍\cite{raissiPhysicsinformedNeuralNetworks2019,schiassiPhysicsinformedExtremeTheory2021}。

## 代表实现：物理信息神经网络

物理信息神经网络（physics-informed neural network，PINN）是 PIML 最著名的实现\cite{raissiPhysicsinformedNeuralNetworks2019}。设待求的未知函数为 $u(t)$，用神经网络 $u_\theta(t)$ 近似它，配点 $t_i$ 上的方程残差定义为

$$
r_\theta(t_i)=\left.\frac{\mathrm d u_\theta}{\mathrm dt}\right|_{t_i}-f\big(u_\theta(t_i),t_i\big),
$$

其中 $f$ 是已知的动力学右端函数。损失函数由数据项与物理项组成

$$
\mathcal L(\theta)=\frac{1}{N_d}\sum_{j}\big\|u_\theta(t_j)-\tilde u_j\big\|^2+\lambda\,\frac{1}{N_c}\sum_{i}\big\|r_\theta(t_i)\big\|^2,
$$

其中 $\tilde u_j$ 是少量观测，$t_j$ 为观测时刻，$t_i$ 为采样的配点，$\lambda$ 是权重。导数由自动微分计算，不需要预先构造离散化格式。训练不要求密集的状态标签，少量观测点加上残差约束即可确定网络参数。把动力学中的未知量（如推力、光压系数或机动时刻）设为可训练变量，同一框架就直接给出反问题的解\cite{raissiPhysicsinformedNeuralNetworks2019}。

术语层级要分清。PIML 是范式名，泛指一切把物理知识嵌入学习的方法，实现不限于神经网络，也不限于残差损失这一种形式。PINN 是其中神经网络加残差损失这一个具体分支。文献中两个词常混用，读文献时应看物理以何种方式进入学习器，而不是只看标题用词。

## 概念辨析

### 与代理模型

代理模型（surrogate model）用低计算代价的近似替换昂贵的物理模型，训练目标是拟合模型的输入输出关系，物理规律只通过训练数据间接进入学习器。PIML 显式利用物理结构，残差、守恒律或约束构造直接出现在训练目标或解空间里。地月空间文献中两类方法常被统称为机器学习应用，辨别的办法是问一句：物理是只提供了训练数据，还是进入了损失函数或解空间。作为优化工具的代理模型（PCE、APCE 等）见 [差分动态规划与灵敏度矩阵方法](/glossary/dynamics/hddp/)。

### 与纯数据驱动学习

数据充足且分布覆盖使用范围时，纯数据驱动学习可以达到精度，物理约束的收益有限。地月空间的问题条件常相反：观测弧段短、测量类型单一、动力学强非线性，数据稀缺而物理模型相对清楚，这是 PIML 在轨道确定类问题中受关注的直接原因\cite{karniadakisPhysicsinformedMachineLearning2021}。

### 与数值积分

PIML 不替代数值积分器。长时间、高精度的轨迹预测仍由数值方法保证，PIML 的位置是快速近似、参数辨识与把物理量作为学习任务的几何先验。把两者写成替代关系是对方法的误读\cite{karniadakisPhysicsinformedMachineLearning2021}。

## 地月空间中的应用

### 短弧段仅测角初轨确定

地月空间目标的光学观测往往只有短弧段与纯角度信息，初轨确定（initial orbit determination，IOD）是病态问题。容许区域（admissible region）把候选初始状态限制在观测几何与动力学允许的区域内，为病态问题提供物理先验。Badura 等 2026 提出的多假设 IOD 流水线把机器学习与图像处理用于增强容许区域分析、依导出轮廓判别解唯一性与按解唯一性调度既有 IOD 算法等环节\cite{baduraMultihypothesisApproachAnglesonly2026}。该文以机器学习行文，摘要与标题并未使用 PIML 一词，摘要也未交代物理是否进入学习器的损失函数或解空间，方法学归类不超出摘要可证的范围。经典确定性数值路线的对照见 [Gooding 方法与轨道边值问题数值求解器](/glossary/dynamics/goodings-method/)。

### 不确定性传播

n 体动力学下的轨道不确定度传播需要自适应方法平衡精度与计算量。Jones 2024 提出物理信息域分割（physics-informed domain splitting），用局部动力学灵敏度重新定义多项式混沌展开的随机输入空间，减少自适应分割所需的单元数，在近直线晕轨道与月球飞越算例上验证\cite{jonesPhysicsinformedDomainSplitting2024}。物理信息在此的作用是用动力学结构指导计算资源的分配，而不是直接学习轨迹。

### 最优轨道转移

Schiassi 等 2021 把物理信息极值函数连接理论（physics-informed extreme theory of functional connections，X-TFC）用于最优轨道转移问题。近似解的表达式用函数连接理论构造为精确满足边界条件与初始条件的形式，这是把约束嵌入解空间构造的硬约束路线；动力学方程残差在配点上以回归最小化，自由参数由此确定\cite{schiassiPhysicsinformedExtremeTheory2021}。

## 相关概念

- [差分动态规划与灵敏度矩阵方法](/glossary/dynamics/hddp/)
- [Gooding 方法与轨道边值问题数值求解器](/glossary/dynamics/goodings-method/)
