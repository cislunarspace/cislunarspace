---
title: 多重打靶法（Multiple Shooting Method）
description: 将整条轨迹拆分为若干小段并在节点上同时设置状态与时间变量的边值问题求解方法，通过段间状态连续条件与微分修正把对初值高度敏感的长弧计算化为条件数可控的分段问题，广泛用于平动点轨道延拓、拼接与高保真轨迹优化。
keywords: 多重打靶法, Multiple Shooting, 打靶法, 微分修正, 边值问题, 近直线晕轨道, 轨道设计
author: 天疆说
date: 2026-10-01
lastUpdated: 2026-10-01
wechatShare:
  title: 多重打靶法（Multiple Shooting Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 多重打靶法详解 | 术语定义
  description: 将整条轨迹拆分为若干小段并在节点上同时设置状态与时间变量的边值问题求解方法，通过段间状态连续条件与微分修正把对初值高度敏感的长弧计算化为条件数可控的分段问题，广泛用于平动点轨道延拓、拼接与高保真轨迹优化。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 多重打靶法详解 | 术语定义
  description: 将整条轨迹拆分为若干小段并在节点上同时设置状态与时间变量的边值问题求解方法，通过段间状态连续条件与微分修正把对初值高度敏感的长弧计算化为条件数可控的分段问题，广泛用于平动点轨道延拓、拼接与高保真轨迹优化。
  image: /logo.png
permalink: /glossary/orbits/multiple-shooting/
aliases:
  - Multiple Shooting
  - 多重打靶
  - 多段打靶
related:
  - ref: orbits/ssdc
    relation: related
  - ref: orbits/nrho
    relation: related
  - ref: orbits/halo-orbit
    relation: related
---

# 多重打靶法（Multiple Shooting Method）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

多重打靶法是求解轨道边值问题的一类数值方法：把整条轨迹拆分为若干小段，在每个节点上同时设置状态与时间变量，先独立积分各段，再以段间状态连续条件与边界条件构造修正方程，用微分修正或优化迭代同时调整全部变量。与只在起点设置初值的单次打靶相比，多重打靶缩短了每段的敏感积累时间，使状态转移矩阵的条件数保持可控，从而显著改善长弧问题的收敛性。打靶段的选取与拼接点布置本身是方法成败的关键 \cite{liuNoteComputationMultirevolution2025}。

## 谱系与在地月轨道设计中的应用

- 多圈近直线晕轨道计算：星历模型下多圈近直线晕轨道直接修正难以收敛，尤其对近月点很低的成员。从多重打靶的视角出发，先以条件数分析状态转移矩阵的影响，再选取合适的轨迹段与拼接点，可明显改善星历模型下的收敛与计算 \cite{liuNoteComputationMultirevolution2025}。
- 长期近直线晕轨道设计：将近直线晕轨道拆分为若干可转换的小段，先用多重打靶逐段转换到星历模型，再用多重打靶逐步拼接成覆盖航天器寿命的完整长期星历参考轨道，并结合靶点法评估低能耗保持代价 \cite{ZhuYanWeiXingLiMoXingXiaJiYuDuoChongDaBaPinJieDeChangQiJinZhiXianYunGuiDaoSheJiFangFa2026}。
- 近直线晕轨道目标定位：面向载人探索的地月近直线晕轨道转移设计以目标定位框架构造，其中多重打靶用于把多段逼近弧与入轨条件纳入统一的修正问题 \cite{williams2017targeting}。
- 多飞掠高保真优化：含多次行星飞掠的高保真轨迹优化以多重打靶组织全部飞掠段与机动点，在高保真星历模型下同时满足交会与约束条件 \cite{ellisonHighfidelityMultipleflybyTrajectory2020}。

## 相关概念

- [单次打靶微分修正器](/glossary/orbits/ssdc/)
- [近直线晕轨道](/glossary/orbits/nrho/)
- [晕轨道](/glossary/orbits/halo-orbit/)
