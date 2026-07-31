---
title: 燃耗最优（Minimum-Fuel / Fuel-Optimal）
description: 以软着陆后探测器剩余质量最大为目标的最优控制策略。论文取终端性能指标J=m(tf)，即最大化终端时刻质量，等价于最小化全程燃料消耗。与零燃料最优不同，燃耗最优强调的是在满足终端速度和位置约束前提下，使燃料消耗最少。根据极大值原理，燃耗最优控制律表现为发动机开关控制：开关函数S(t)大于零时以最大推力工作，小于零时关闭发
keywords: 燃耗最优, Minimum-Fuel / Fuel-Optimal, 轨道动力学, 多体问题, 摄动
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 燃耗最优（Minimum-Fuel / Fuel-Optimal）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 燃耗最优详解 | 术语定义
  description: 以软着陆后探测器剩余质量最大为目标的最优控制策略。论文取终端性能指标J=m(tf)，即最大化终端时刻质量，等价于最小化全程燃料消耗。与零燃料最优不同，燃耗最优强调的是在满足终端速度和位置约束前提下，使燃料消耗最少。根据极大值原理，燃耗最优控制律表现为发动机开关控制：开关函数S(t)大于零时以最大推力工作，小于零时关闭发
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 燃耗最优详解 | 术语定义
  description: 以软着陆后探测器剩余质量最大为目标的最优控制策略。论文取终端性能指标J=m(tf)，即最大化终端时刻质量，等价于最小化全程燃料消耗。与零燃料最优不同，燃耗最优强调的是在满足终端速度和位置约束前提下，使燃料消耗最少。根据极大值原理，燃耗最优控制律表现为发动机开关控制：开关函数S(t)大于零时以最大推力工作，小于零时关闭发
  image: /logo.png
permalink: /glossary/dynamics/minimum-fuel-fuel-optimal/
---

# 燃耗最优（Minimum-Fuel / Fuel-Optimal）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

以软着陆后探测器剩余质量最大为目标的最优控制策略。论文取终端性能指标J=m(tf)，即最大化终端时刻质量，等价于最小化全程燃料消耗。与零燃料最优不同，燃耗最优强调的是在满足终端速度和位置约束前提下，使燃料消耗最少。根据极大值原理，燃耗最优控制律表现为发动机开关控制：开关函数S(t)大于零时以最大推力工作，小于零时关闭发动机，由此形成始终制动的最优下降轨迹。

## 应用价值

在低推力轨道优化中，该推进方式可通过长时间持续加速实现低能量转移，比高推力系统更具燃料经济性。

## 相关概念

- [月球飞越法（Lunar Fly-by Method）](/glossary/dynamics/lunar-fly-by-method/)
- [可达集（Reachability Set）](/glossary/dynamics/reachability-set/)
- [最大能量逃逸轨迹（Maximum-Energy Escape Trajectory）](/glossary/dynamics/maximum-energy-escape-trajectory/)
- [拉普拉斯方法（Laplace Method）](/glossary/dynamics/laplace-method/)

## 参考文献

- 周净扬和周荻 - 2007 - 月球探测器软着陆精确建模及最优轨道设计
