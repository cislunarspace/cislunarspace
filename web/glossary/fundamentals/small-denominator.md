---
title: 小分母（Small Denominator）
description: 摄动动力学级数展开与正则变换中，基本频率整数组合逼近零导致分母趋近于零、级数收敛受损的数学奇异项。
keywords: 小分母, Small Denominator, 轨道根数, 奇异性, 摄动理论
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-10-13
wechatShare:
  title: 小分母（Small Denominator）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/fundamentals/small-denominator/
---

# 小分母（Small Denominator）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

小分母（Small Denominator）是指在天体力学摄动展开级数与哈密顿系统正则变换中，因基本频率的整数线性组合逼近零而导致分母趋近于零的数学代数项\cite{farquharQuasiperiodicOrbitsTranslunar1973,richardsonAnalyticConstructionPeriodic1980a}。

## 物理机制与工程价值

在平动点附近周期与拟周期轨道的解析建模中，摄动级数与正则变换的收敛性直接受小分母制约。当地月系统两个基本频率的整数组合逼近零时，相应级数项的分母急剧变小，展开收敛变慢甚至失效，需要在截断阶数与精度之间权衡\cite{richardsonAnalyticConstructionPeriodic1980a}。

共振与久期摄动分析中，小分母项对应 KAM 环面破裂与混沌扩散，是研判长期轨道稳定性的基础\cite{farquharQuasiperiodicOrbitsTranslunar1973}。工程上通过 Lindstedt-Poincaré 方法等消久期项技巧规避小分母导致的发散，保障地月空间航天器长期定轨与轨道预报的效率。

## 相关概念

- [全摄动模型（Full Force Model）](/glossary/dynamics/full-force-model/)
- [平均化方法（Averaging Method）](/glossary/dynamics/averaging-method/)
- [状态雅可比矩阵（State Jacobian Matrix）](/glossary/dynamics/state-jacobian-matrix/)
