---
title: 非支配排序遗传算法 II（NSGA-II）
description: 由 Deb 等 2002 年提出的多目标进化算法。用快速非支配排序把种群分层，用拥挤度距离保持同层解的疏密，父子代合并后按层级与拥挤度择优，一次运行给出较均匀的非支配解集。地月空间态势感知架构设计用它求解观测架构配置。
keywords: 非支配排序遗传算法 II, NSGA-II, NSGA II, 非劣排序遗传算法II, 非劣排序遗传算法, Non-Dominated Sorting Genetic Algorithm II, 多目标优化, 遗传算法, 进化算法, 帕累托前沿, 拥挤度距离, 非支配排序, 精英保留, 地月空间, 态势感知
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-10-23
wechatShare:
  title: 非支配排序遗传算法 II（NSGA-II）
  desc: 用非支配排序与拥挤度距离维持多目标优化的前沿分布性。
  image: /logo.png
og:
  title: 非支配排序遗传算法 II（NSGA-II）详解 | 术语定义
  description: 由 Deb 等 2002 年提出的多目标进化算法。用快速非支配排序把种群分层，用拥挤度距离保持同层解的疏密，父子代合并后按层级与拥挤度择优。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 非支配排序遗传算法 II（NSGA-II）详解 | 术语定义
  description: 用快速非支配排序与拥挤度距离维持多目标前沿的收敛性与分布性。
  image: /logo.png
permalink: /glossary/fundamentals/nsga-ii/
aliases:
  - NSGA-II
  - NSGA II
  - NSGA2
  - 非劣排序遗传算法II
  - 非劣排序遗传算法
  - 非支配排序遗传算法II
  - Non-Dominated Sorting Genetic Algorithm II
related:
  - ref: fundamentals/nsga-iii
    relation: related
  - ref: dynamics/v-tof-pareto-front
    relation: related
  - ref: fundamentals/hidden-genes-genetic-algorithm
    relation: related
---

# 非支配排序遗传算法 II（NSGA-II）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

非支配排序遗传算法 II（Non-dominated Sorting Genetic Algorithm II，NSGA-II）是 Deb 等 2002 年提出的多目标进化算法。它用快速非支配排序把种群按支配关系分层，用拥挤度距离衡量同一层内解的疏密，再把父代与子代合并后按层级与拥挤度择优，一次运行给出一组分布较均匀的非支配解 \cite{debFastElitistMultiobjective2002}。相对逐个比较的朴素排序，分层复杂度由 $O(MN^3)$ 降到 $O(MN^2)$，拥挤度距离也取代了需要人工指定尺度的共享函数 \cite{debFastElitistMultiobjective2002}。中文文献也把非支配解称作非劣解，早期译名非劣排序遗传算法指的正是本算法。

## 算法原理

### 非支配排序

对规模为 $N$ 的种群，按帕累托支配关系逐层剥离非支配解。

1. 找出不被种群中任何其他解支配的解，构成第一层 $\mathcal{F}_1$
2. 从种群中移除第一层，在剩余解中重复上一步得到第二层
3. 重复直到所有解都被分层

层号越小越优。同一层内的解互不支配，彼此之间再由拥挤度距离区分。快速非支配排序对每个解记录它支配的解集与被它支配的解数，一遍扫描完成分层，复杂度为 $O(MN^2)$，其中 $M$ 为目标数 \cite{debFastElitistMultiobjective2002}。

### 拥挤度距离

为让同层解沿前沿散开，NSGA-II 为每个解计算拥挤度距离。把同层解按第 $m$ 个目标排序，取与该解相邻的两解的目标值之差，除以该目标在层内的取值范围做归一化，再对各目标求和：

$$
d_i = \sum_{m=1}^{M} \frac{f_m^{i+1} - f_m^{i-1}}{f_m^{\max} - f_m^{\min}}
$$

其中 $f_m^{i+1}$ 与 $f_m^{i-1}$ 是按目标 $m$ 排序后与该解相邻的两个解的目标值。每个目标上取值最小与最大的两个边界解，拥挤度距离取无穷大，避免前沿端点被淘汰。距离越大，解与邻居越疏远。

### 选择机制

父代与子代各 $N$ 个，合并成 $2N$ 个候选后按下列规则选出下一代。

1. 按层号从小到大整层接纳，直到某一层放不下，这一层称为临界层
2. 临界层内按拥挤度距离从大到小取，填满剩余名额

层号提供收敛压力，拥挤度距离提供分布压力，两者构成一套不需要额外参数的偏序。父代再由二元锦标赛在这套偏序上选出，父代参与合并也保证了精英不丢失。

### 遗传算子

原文献采用实数编码，交叉用模拟二进制交叉，变异用多项式变异。约束处理用约束支配原则，可行解优于不可行解，两个不可行解比较时违反约束总量较小者优先，因此不需要罚函数参数。决策变量含整数或分类变量时，编码与算子需要在应用层另行设计。

## 与 NSGA-III 的关系

NSGA-III 沿用本文的快速非支配排序与父子合并框架，把拥挤度距离换成一组在归一化目标空间里均匀分布的参考点，临界层的取舍由参考点覆盖决定 \cite{debEvolutionaryManyObjectiveOptimization2014}。目标数为二或三时 NSGA-II 已经够用。目标数继续上升时，种群中互不支配的解占比迅速变大，非支配层级失去筛选作用，拥挤度距离也难以刻画高维空间里的邻居关系，这时才需要 NSGA-III 的参考点机制。

## 适用条件与限制

- 目标数为二或三时表现最好，也是它最常用的场景。
- 一次运行给出整个前沿的近似，适合在方案初期看清权衡范围。前沿上的最终选点仍要结合工程约束人工判断。
- 原文献只讨论实数编码。混合变量问题需要自定义编码与算子，可参考隐藏基因遗传算法一类扩展。
- 种群规模决定前沿覆盖密度，目标数上升后维持同等覆盖所需的种群规模增长很快。

## 在地月空间态势感知架构设计中的应用

Klonowski 等用多目标进化算法搜索地月空间态势感知的观测架构。2023 年的会议论文以 NSGA-II 求解协同智能体条件下的架构设计问题 \cite{klonowski2023robust}。2024 年的期刊论文以合作智能体为对象，目标取架构对该智能体的可探测性与智能体所需总速度增量，并用聚类把优化过程中探索到的架构分组，便于看清观测器之间怎样协同 \cite{klonowskiCislunarSpaceDomain2024}。

## 相关概念

- [非支配排序遗传算法 III（NSGA-III）](/glossary/fundamentals/nsga-iii/)
- [ΔV-TOF帕累托前沿（ΔV-TOF Pareto Front）](/glossary/dynamics/v-tof-pareto-front/)
- [隐藏基因遗传算法（Hidden-Genes Genetic Algorithm）](/glossary/fundamentals/hidden-genes-genetic-algorithm/)
