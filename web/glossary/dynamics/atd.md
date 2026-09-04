---
title: 自适应轨迹设计目录（Adaptive Trajectory Design Catalog, ATD）
description: 收录地月三体系统周期与拟周期轨道族及其流形特征的标准化参数数据库。
keywords: 自适应轨迹设计目录, ATD, 轨道库, 周期轨道族, 轨迹设计
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 自适应轨迹设计目录
  desc: 地月空间标准化轨道族与流形参数检索库。
  image: /logo.png
permalink: /glossary/dynamics/atd/
---

# 自适应轨迹设计目录（Adaptive Trajectory Design Catalog, ATD）

## 定义

由学术界与工程机构联合建立的标准化数值数据库，分类收录了圆型限制性三体问题与真实星历模型下的周期轨道、拟周期环面、共振轨道及其稳定与不稳定流形分支数据。

## 物理机制与工程价值

地月空间复杂多体动力学是非线性的，难以通过初等解析公式直接获得全局轨道解。自适应轨迹设计目录通过离线精密计算，存储各轨道族的初始状态矢量、雅可比常数、周期及单值矩阵特征值。在实际任务设计中，工程师无需从零遍历相空间，可直接从目录中调取种子轨道与流形节点作为初值，大幅提高多段打靶算法的收敛速度与轨迹搜索效率。

## 相关概念

- [打靶法](/glossary/navigation/differential-correction/)
- [轨道延续法](/glossary/dynamics/continuation/)
- [共振轨道](/glossary/orbits/resonant-orbit-family/)

## 参考文献

- Zimovan-Spreen et al., 2022, Adaptive Trajectory Design Catalog for Cislunar Space Missions.
