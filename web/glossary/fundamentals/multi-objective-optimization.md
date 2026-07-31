---
title: 多目标优化（Multi-Objective Optimization）
description: 同时优化多个相互冲突目标的数学方法。在地月导航星座设计中，需在覆盖范围、定位精度、燃料消耗、故障容限和经济性等多个矛盾指标间寻求平衡解。常用算法包括NSGA-II和MOEA/D，通过生成帕累托前沿呈现多维权衡关系。相较于单目标优化，多目标方法能为决策者提供完整的非劣解集，适配不同任务侧重点的星座方案。
keywords: 多目标优化, Multi-Objective Optimization, 基础概念, 运动方程, 参考系, 参数
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 多目标优化（Multi-Objective Optimization）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 多目标优化详解 | 术语定义
  description: 同时优化多个相互冲突目标的数学方法。在地月导航星座设计中，需在覆盖范围、定位精度、燃料消耗、故障容限和经济性等多个矛盾指标间寻求平衡解。常用算法包括NSGA-II和MOEA/D，通过生成帕累托前沿呈现多维权衡关系。相较于单目标优化，多目标方法能为决策者提供完整的非劣解集，适配不同任务侧重点的星座方案。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 多目标优化详解 | 术语定义
  description: 同时优化多个相互冲突目标的数学方法。在地月导航星座设计中，需在覆盖范围、定位精度、燃料消耗、故障容限和经济性等多个矛盾指标间寻求平衡解。常用算法包括NSGA-II和MOEA/D，通过生成帕累托前沿呈现多维权衡关系。相较于单目标优化，多目标方法能为决策者提供完整的非劣解集，适配不同任务侧重点的星座方案。
  image: /logo.png
permalink: /glossary/fundamentals/multi-objective-optimization/
---

# 多目标优化（Multi-Objective Optimization）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

同时优化多个相互冲突目标的数学方法。在地月导航星座设计中，需在覆盖范围、定位精度、燃料消耗、故障容限和经济性等多个矛盾指标间寻求平衡解。常用算法包括NSGA-II和MOEA/D，通过生成帕累托前沿呈现多维权衡关系。相较于单目标优化，多目标方法能为决策者提供完整的非劣解集，适配不同任务侧重点的星座方案。

## 应用价值

多目标优化同时考虑多个相互冲突的设计目标（如燃料消耗和飞行时间），找出Pareto最优解集。在地月转移轨道设计中，需要权衡速度增量、飞行时间、发射窗口等多个目标，多目标优化为决策者提供全面的方案比较信息。

## 相关概念

- [质心旋转坐标系（Center-of-Mass Rotating Frame）](/glossary/fundamentals/center-of-mass-rotating-frame/)
- [质量参数（Mass Parameter）](/glossary/fundamentals/mass-parameter/)
- [雅可比常数（Jacobi Constant, JC）](/glossary/dynamics/jacobi-constant-jc/)
- [归一化单位（Normalized Units）](/glossary/fundamentals/normalized-units/)
## 参考文献

- 地月空间导航星座设计：架构特征、指标构建与技术演进
