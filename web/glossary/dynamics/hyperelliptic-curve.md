---
title: 超椭圆曲线（Hyperelliptic Curve）
description: 亏格大于1的非奇异代数曲线，在小推力最优轨道控制与哈密顿系统平均化积分中用于精确表征共轭状态演化。
keywords: 超椭圆曲线, Hyperelliptic Curve, 动力学, 最优控制, 平均化方法
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 超椭圆曲线（Hyperelliptic Curve）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/dynamics/hyperelliptic-curve/
---

# 超椭圆曲线（Hyperelliptic Curve）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

超椭圆曲线（Hyperelliptic Curve）是代数几何中一类形式为 $y^2 = f(x)$ 的非奇异代数曲线，其中 $f(x)$ 为次数大于4且无重根的多项式。其亏格（Genus）满足 $g = \lfloor(n-1)/2\rfloor \ge 2$（$n$ 为多项式次数），是椭圆曲线向高维积分情形的严格推广。

## 物理机制与工程价值

在航天器小推力最优轨道转移的哈密顿动力学（Hamiltonian Dynamics）分析中，利用庞特里亚金极大值原理导出的协态方程与能量积分在经久平均化（Averaging Method）处理后，常常需要对快变量进行沿未摄动轨道的解析积分。

当目标轨道为圆轨道或特定非零倾角轨道时，极角方向的动量积分从经典的椭圆积分（Genus 1）退化或升阶为 Genus 2 的超椭圆曲线积分。超椭圆曲线的代数结构决定了最优控制共轭变量（Costates）沿轨周期振荡的多频特征与极值奇异点分布。

在工程应用中，解析识别超椭圆曲线的分支点与黎曼面结构，能为小推力地月转移轨迹优化、轨道摄动长期演化提供严格的解析展开基底，避免长积分历程中的数值发散与步长累积误差。

## 相关概念

- [平均化方法（Averaging Method）](/glossary/dynamics/averaging-method/)
- [哈密顿系统（Hamiltonian System）](/glossary/dynamics/conservative-system/)
- [最优控制（Optimal Control）](/glossary/fundamentals/mact/)
- [状态雅可比矩阵（State Jacobian Matrix）](/glossary/dynamics/state-jacobian-matrix/)

## 参考文献

- Caillau, J. B., & Daoud, B. Minimum time control of the planar circular restricted three-body problem: A geometric approach. SIAM Journal on Control and Optimization, 2012, 50(6): 3178-3202.
- Arnold, V. I. Mathematical Methods of Classical Mechanics. Springer-Verlag, 1989.
