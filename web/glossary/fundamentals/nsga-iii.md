---
title: 非支配排序遗传算法 III（NSGA-III）
description: 面向三个及以上目标的多目标进化算法。在 NSGA-II 的非支配排序框架上，用一组在归一化目标空间里均匀分布的参考点替代拥挤度距离，通过解与参考点关联和小生境保留维持帕累托前沿的分布性。地月空间星座设计用它处理轨道族选择、卫星分配与载荷等级等混合变量的协同优化。
keywords: 非支配排序遗传算法 III, NSGA-III, 非支配排序遗传算法, 多目标优化, 超多目标优化, 参考点, 遗传算法, 帕累托前沿, 混合变量编码, 星座优化
author: 天疆说
date: 2026-10-23
lastUpdated: 2026-10-23
wechatShare:
  title: 非支配排序遗传算法 III（NSGA-III）
  desc: 用参考点机制替代拥挤度距离，在三个以上目标的空间里维持帕累托前沿的分布性。
  image: /logo.png
og:
  title: 非支配排序遗传算法 III（NSGA-III）详解 | 术语定义
  description: 面向三个及以上目标的多目标进化算法。在 NSGA-II 的非支配排序框架上，用一组在归一化目标空间里均匀分布的参考点替代拥挤度距离，通过解与参考点关联和小生境保留维持帕累托前沿的分布性。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 非支配排序遗传算法 III（NSGA-III）详解 | 术语定义
  description: 面向三个及以上目标的多目标进化算法。用参考点机制替代拥挤度距离，在归一化目标空间中维持帕累托前沿的分布性。
  image: /logo.png
permalink: /glossary/fundamentals/nsga-iii/
aliases:
  - NSGA-III
  - NSGA III
  - 参考点非支配排序遗传算法
  - 基于参考点的非支配排序遗传算法
related:
  - ref: fundamentals/nsga-ii
    relation: related
  - ref: dynamics/v-tof-pareto-front
    relation: related
  - ref: fundamentals/hidden-genes-genetic-algorithm
    relation: related
---

# 非支配排序遗传算法 III（NSGA-III）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

非支配排序遗传算法 III 是 Deb 与 Jain 于 2014 年提出的多目标进化算法，面向三个及以上目标的优化问题。它沿用 NSGA-II 的非支配排序框架，换掉维持多样性的拥挤度距离，改用一组在归一化目标空间里均匀分布的参考点 \cite{debEvolutionaryManyObjectiveOptimization2014}。每个解关联到一条参考线，选择时优先填充尚未被代表的参考点区域，种群的分布由参考点覆盖决定，不再依赖解在目标空间里的局部密度。

## 与 NSGA-II 的差别

NSGA-II 用拥挤度距离保持前沿均匀。目标数增多时，种群中互不支配的解占比迅速上升，非支配层级失去筛选作用，拥挤度距离也难以刻画高维空间中的邻居关系，前沿覆盖随之退化。NSGA-III 把这一环节换成参考点加小生境：参考点按目标数在单位超平面上系统生成，选择时按每个参考点已关联的个体数补位，目标数上升时仍能保证前沿被均匀采样 \cite{debEvolutionaryManyObjectiveOptimization2014}。

## 算法流程

每一代在父子合并后的种群上依次完成下列步骤。

### 非支配排序

按帕累托支配关系把合并种群分层，得到 $\mathcal{F}_1, \mathcal{F}_2, \dots$。整层接纳直到填满种群规模，剩余名额从临界层中按小生境规则挑选。

### 目标归一化

对每个目标取种群当前最小值作为理想点 $z^{\min}$，用成就标量化函数（achievement scalarizing function）在给定权重向量下求出各目标方向的极端点，由极端点确定超平面的截距 $a_i$，再按

$$
f'_i(\mathbf{x}) = \frac{f_i(\mathbf{x}) - z_i^{\min}}{a_i - z_i^{\min}}
$$

把目标值映射到归一化空间。归一化把量纲不同的目标（例如成本与定轨误差）放到同一尺度上比较，也是后一步关联的前提。

### 参考点生成与个体关联

参考点用 Das 与 Dennis 的系统化方法在单位超平面上生成，目标数 $M$ 与每维分割数 $p$ 决定参考点总数 $H = \binom{M+p-1}{p}$ \cite{debEvolutionaryManyObjectiveOptimization2014}。归一化后计算每个解到各参考线的垂直距离，把解关联到距离最近的参考点，并统计每个参考点已关联的个体数。

### 小生境保留

从临界层挑选个体时，优先选择已关联个体数最少的参考点所对应的解，同一参考点下有多个候选时取垂直距离最小者。这一步把选择压力从单一密度度量改为参考点覆盖，是 NSGA-III 在高维目标空间保持分布性的关键。

### 遗传算子

交叉与变异沿用 NSGA-II 的模拟二进制交叉与多项式变异。算法本体不限定变量类型，遇到整数或分类变量时需要在编码与算子上另行处理。

## 混合变量编码

工程问题常同时含连续、整数与分类变量。Chen 等 2026 在地月空间星座设计中的做法可以作为一个范例。决策变量写成五元混合向量，卫星总数、轨道族集合、各族卫星分配数、族内相位与载荷等级。种群用混合编码初始化，连续相位用模拟二进制交叉与多项式变异，整数分配用离散变异加总数约束修复，分类的轨道族用类别重采样加可行性过滤 \cite{chen2026constellationOptimization}。这些算子属于应用层的扩展，NSGA-III 的原始文献只讨论实数编码。

## 在地月空间的应用

Chen 等 2026 用 NSGA-III 求解地月空间态势感知星座的多目标优化问题。目标为系统代理成本与 95 分位鲁棒定轨误差，约束包括定轨误差上限、成本上限与连续覆盖时间下限，决策变量覆盖卫星总数、轨道族、各族分配、相位与载荷等级，种群规模 96，迭代 40 代 \cite{chen2026constellationOptimization}。

该文只有两个目标，作者在正文中写明支配排序方法在双目标下同样够用，采用 NSGA-III 是为后续把任务连续性与载荷负担显式化为目标预留扩展空间，并未声称双目标下优于更简单的方法。引用这个案例时应把它当作方法在地月空间的一次应用，不作为超多目标场景下的性能证据。

## 适用条件与限制

- 优势体现在目标数为三及以上的问题。双目标问题用 NSGA-II 或支配排序配合拥挤度距离即可，引入参考点只增加实现与参数成本。
- 参考点总数随目标数组合增长。目标数很高时参考点数量增长快，关联与选择的计算开销随之上升。
- 归一化依赖极端点。目标之间尺度差异大或极端点估计不稳定时，归一化结果会影响小生境判断，实践中常配合固定的目标上下界使用。

## 相关概念

- [非劣排序遗传算法II（Non-Dominated Sorting Genetic Algorithm II）](/glossary/fundamentals/nsga-ii/)
- [ΔV-TOF帕累托前沿（ΔV-TOF Pareto Front）](/glossary/dynamics/v-tof-pareto-front/)
- [隐藏基因遗传算法（Hidden-Genes Genetic Algorithm）](/glossary/fundamentals/hidden-genes-genetic-algorithm/)
