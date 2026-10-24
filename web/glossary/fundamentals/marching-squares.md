---
title: 等值线提取（Marching Squares）
description: 在二维标量网格上按给定阈值提取等值线的数值几何算法。逐格判断四个角点是否超过阈值，按 16 种组合生成等值线段，沿网格边线性插值并拼接。地月空间短弧纯角度初轨确定用它提取可接受域等值线，按条数与覆盖面积诊断唯一全局极小、多个局部极小或无可用解。
keywords: marching squares, 等值线提取, 等值线追踪, 行进方格法, 可接受域, 纯角度定轨, 初轨确定, 图像处理, 标量场, 收敛诊断
author: 天疆说
date: 2026-10-24
lastUpdated: 2026-10-24
wechatShare:
  title: 等值线提取（Marching Squares）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 等值线提取（Marching Squares）详解 | 术语定义
  description: 在二维标量网格上按阈值提取等值线的数值几何算法，含 16 种角点组合、鞍点消歧与短弧初轨确定中的收敛诊断用法。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 等值线提取（Marching Squares）详解 | 术语定义
  description: 在二维标量网格上按阈值提取等值线的数值几何算法，含 16 种角点组合、鞍点消歧与短弧初轨确定中的收敛诊断用法。
  image: /logo.png
permalink: /glossary/fundamentals/marching-squares/
aliases:
  - Marching Squares
  - marching squares
  - 行进方格法
  - 移动方格法
  - 等值线追踪
related:
  - ref: navigation/angles-only-orbit-determination
    relation: related
  - ref: fundamentals/adaptive-grid-subdivision
    relation: related
  - ref: fundamentals/grid-search
    relation: related
  - ref: dynamics/poincare-section
    relation: related
---

# 等值线提取（Marching Squares）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

等值线提取（marching squares）是一种在二维标量网格上按给定阈值提取等值线的数值几何算法。输入是规则网格上采样的标量场 $f(x,y)$ 与阈值 $c$，输出是满足 $f(x,y)=c$ 的等值线线段集合。线段在相邻单元之间按边拼接，可形成折线或闭合环。

算法不改变标量场，也不求解微分方程。它只回答一个问题：在已有网格上，标量值等于阈值的边界在哪里。结果由网格分辨率与阈值共同决定，两者任一改变，等值线的位置与拓扑都可能改变。

marching squares 是 marching cubes 的二维对应算法。后者在三维网格上提取等值面，前者在二维网格上提取等值线。Badura 等 2026 把 marching squares 的出处指向 Lorensen 与 Cline 的 marching cubes 论文，引用的是 1998 年的 Seminal Graphics 重印本\cite{baduraMultihypothesisApproachAnglesonly2026}。该论文原始版本发表于 1987 年\cite{lorensenMarchingCubes1987}。

## 网格单元分类与线段连接

算法逐格扫描。对每个网格单元，比较四个角点的标量值与阈值，把每个角点标记为高于或低于阈值。四个角点各有两种状态，共 $2^4=16$ 种组合。按这 16 种组合查表，可以确定单元内等值线段的连接方式。16 种组合按互补与旋转对称可以归并为少数几种拓扑模式，查表实现通常只存这几种模式。

单元的四条边中，只有两端角点分居阈值两侧的边会被等值线穿过。设一条边的两个端点值为 $f_0$ 与 $f_1$，交点位置用线性插值给出

$$
\boldsymbol{p} = \boldsymbol{p}_0 + \frac{c - f_0}{f_1 - f_0}(\boldsymbol{p}_1 - \boldsymbol{p}_0).
$$

把单元内所有交点按查表结果连成线段，再按边编号把相邻单元的线段拼接，得到跨越多个单元的等值线。单元四角全部高于或全部低于阈值时没有等值线穿过，直接跳过。

实现上有两个容易出错的地方。第一是边的编号必须全局一致，否则相邻单元的线段接不上。第二是网格边界上的等值线是开口的，不能假定所有等值线都闭合。

## 鞍点歧义

16 种组合里有两种特殊情形：两个对角角点高于阈值，另外两个低于阈值。此时四条边都被等值线穿过，四个交点可以按两种方式两两相连。一种把两个高值角点围在同一侧，另一种把它们分开。两种连法都满足角点标记，单看四个角点无法区分。

消歧要用单元内部的标量信息。常用做法是取双线性插值在格心的值，与阈值比较后决定连接方式。更严格的渐近判别规则先求双线性插值曲面在单元内的鞍点，再用鞍点值与阈值的大小关系定拓扑。若省略这一步，同一份网格在不同实现里可能给出不同条数的等值线，后续按条数做的判断就会失真。

## 在多假设初轨确定中的用法

Badura 等 2026 把 marching squares 用在短弧纯角度初轨确定的多假设流程里\cite{baduraMultihypothesisApproachAnglesonly2026}。可接受域方法先在距离与距离率平面上给出一个标量度量，度量值越小，该假设与观测越相容。流程把这个度量在距离与距离率网格上算成一张标量图，再按度量的已知不确定度取阈值，用 marching squares 提取该阈值处的等值线。

提取到等值线后，流程统计两个量：等值线条数与每条等值线覆盖的面积。两者合起来区分三种情形。

- 等值线只有一条，且完全落在距离与距离率假设范围之内，说明存在唯一全局极小，梯度型初轨算法有较大把握收敛到全局最优。
- 等值线多于一条，说明存在多个局部极小，不同等值线对应不同的初始状态假设。
- 等值线只有一条，但越出假设范围的边界，说明可能不存在能解释这批观测的局部或全局极小，需要追加观测或调整假设范围。

这三种情形决定后续选用哪种初轨算法，以及是否需要追加观测消除歧义。这里的关键不是把等值线画出来看，而是用条数与面积做可重复的收敛诊断。

## 与相邻概念的区别

marching cubes。marching cubes 在三维网格上提取等值面，单元是立方体，八个角点给出 $2^8=256$ 种组合，输出是三角面片。marching squares 是它的二维版本，单元是四边形，四个角点给出 16 种组合，输出是线段。两者共享阈值分类与边插值的思路，维数与输出维度不同。

等值线绘图。绘图工具可以把标量场画成等值线图，内部也可能调用 marching squares。区别在用途。绘图关心线条是否美观、标注是否清楚，marching squares 在这里关心等值线的拓扑、条数与覆盖面积，输出要能参与后续判断。

水平集方法。水平集方法把界面表示为高维函数的零等值面，通过演化偏微分方程让界面运动，常用于界面追踪与形状优化。marching squares 不演化任何东西，只对一张已经算好的网格做一次几何提取。两者都可能出现“等值线”这个词，但一个是动态演化的隐式界面，一个是静态标量场的等值线。

网格搜索。网格搜索在参数空间上布点并逐点计算目标函数，产出是一张离散的目标函数表。marching squares 可以消费这张表，从中提取等值线。前者负责采样，后者负责从采样结果里提取边界，两者经常串联，但不是同一个步骤。

自适应网格细分。自适应网格细分通过反复二分网格来逼近一个集合，网格本身在计算过程中变化。marching squares 通常在固定网格上做一次扫描，网格不因等值线形状而加密。需要更高精度时，可以先用自适应细分把网格加密，再交给 marching squares 提取。

## 适用条件与代价

marching squares 适合已经有一张规则网格、需要快速拿到等值线几何的场合。计算量随网格单元数线性增长，每个单元只做常数次比较与插值。除输入网格外，额外内存占用取决于等值线穿过的单元数，不需要保存整张网格的拓扑。

代价主要有三处。第一，分辨率决定精度。网格太粗时，等值线位置偏差大，小的闭合等值线可能整条消失，条数判断随之出错。第二，阈值决定拓扑。阈值选取不当会让本应分开的等值线合并，或让小的闭合等值线消失。第三，鞍点消歧规则必须固定。不同实现采用不同规则时，同一张网格可能给出不同的连接方式。

在地月空间的应用里，这三处代价都直接对应诊断结论。网格分辨率不足会让本应分开的等值线合并或消失，阈值选取不当会让条数判断偏离实际，消歧规则不统一会让条数在不同实现之间不可比。因此用等值线条数做判断时，要把网格、阈值与消歧规则一起写进方法说明。

## 相关概念

- [纯角度定轨（Angles-Only Orbit Determination）](/glossary/navigation/angles-only-orbit-determination/)
- [自适应网格细分（Adaptive Grid Subdivision）](/glossary/fundamentals/adaptive-grid-subdivision/)
- [网格搜索（Grid Search）](/glossary/fundamentals/grid-search/)
- [庞加莱截面（Poincaré Section / Surface of Section）](/glossary/dynamics/poincare-section/)
