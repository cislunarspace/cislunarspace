---
title: Gauss求积公式（Gauss Quadrature Formula）
description: 一种高精度数值积分方法。取Legendre多项式的根为积分节点，配以对应的求积权重，对被积函数在区间上进行加权求和，达到2n-1阶代数精度。在Gauss伪谱法中，用于将动力学方程积分转为代数约束，以及离散目标函数中的积分项。
keywords: Gauss求积公式, Gauss Quadrature Formula, 轨道力学, 数值方法, 优化算法
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Gauss求积公式（Gauss Quadrature Formula）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: Gauss求积公式详解 | 术语定义
  description: 一种高精度数值积分方法。取Legendre多项式的根为积分节点，配以对应的求积权重，对被积函数在区间上进行加权求和，达到2n-1阶代数精度。在Gauss伪谱法中，用于将动力学方程积分转为代数约束，以及离散目标函数中的积分项。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Gauss求积公式详解 | 术语定义
  description: 一种高精度数值积分方法。取Legendre多项式的根为积分节点，配以对应的求积权重，对被积函数在区间上进行加权求和，达到2n-1阶代数精度。在Gauss伪谱法中，用于将动力学方程积分转为代数约束，以及离散目标函数中的积分项。
  image: /logo.png
permalink: /glossary/fundamentals/gauss-quadrature-formula/
---

# Gauss求积公式（Gauss Quadrature Formula）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种高精度数值积分方法。取Legendre多项式的根为积分节点，配以对应的求积权重，对被积函数在区间上进行加权求和，达到2n-1阶代数精度。在Gauss伪谱法中，用于将动力学方程积分转为代数约束，以及离散目标函数中的积分项。

## 应用价值

在轨道动力学数值仿真中，该方法用于提高计算精度和效率。通过合理的离散化策略，可以在保证数值稳定性的同时大幅减少计算量。

## 相关概念

- [同步旋转坐标系（Synodic Rotating Frame）](/glossary/fundamentals/synodic-rotating-frame/)
- [网格搜索（Grid Search）](/glossary/fundamentals/grid-search/)
- [星座构型向量（Constellation Pattern Vector）](/glossary/fundamentals/constellation-pattern-vector/)
- [着陆缓冲机构（Landing Impact Attenuation Mechanism）](/glossary/fundamentals/landing-impact-attenuation-mechanism/)
## 参考文献

- 平动点周期轨道间小推力转移的Gauss伪谱法
