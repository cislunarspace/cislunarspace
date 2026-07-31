---
title: 间接最优控制（Indirect Optimal Control）
description: 通过求解 Hamilton 正则方程的两点边值问题来获得最优控制的方法。基于庞特里亚金极值原理，将最优控制问题转化为对协态变量初值的求解。本文将变分方程应用于间接方法，通过预计算 STM 和 STT 来避免反复数值积分打靶。
keywords: 间接最优控制, Indirect Optimal Control, 轨道力学, 数值方法, 优化算法
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 间接最优控制（Indirect Optimal Control）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 间接最优控制详解 | 术语定义
  description: 通过求解 Hamilton 正则方程的两点边值问题来获得最优控制的方法。基于庞特里亚金极值原理，将最优控制问题转化为对协态变量初值的求解。本文将变分方程应用于间接方法，通过预计算 STM 和 STT 来避免反复数值积分打靶。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 间接最优控制详解 | 术语定义
  description: 通过求解 Hamilton 正则方程的两点边值问题来获得最优控制的方法。基于庞特里亚金极值原理，将最优控制问题转化为对协态变量初值的求解。本文将变分方程应用于间接方法，通过预计算 STM 和 STT 来避免反复数值积分打靶。
  image: /logo.png
permalink: /glossary/fundamentals/indirect-optimal-control/
---

# 间接最优控制（Indirect Optimal Control）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

通过求解 Hamilton 正则方程的两点边值问题来获得最优控制的方法。基于庞特里亚金极值原理，将最优控制问题转化为对协态变量初值的求解。本文将变分方程应用于间接方法，通过预计算 STM 和 STT 来避免反复数值积分打靶。

## 应用价值

在航天器姿态和轨道控制中，该方法用于实现高精度跟踪和稳定保持。通过设计合适的控制律，可以有效抑制外部扰动的影响，保证航天器在复杂动力学环境中的可靠运行。

## 相关概念

- [同步旋转坐标系（Synodic Rotating Frame）](/glossary/fundamentals/synodic-rotating-frame/)
- [网格搜索（Grid Search）](/glossary/fundamentals/grid-search/)
- [Gauss求积公式（Gauss Quadrature Formula）](/glossary/fundamentals/gauss-quadrature-formula/)
- [星座构型向量（Constellation Pattern Vector）](/glossary/fundamentals/constellation-pattern-vector/)
## 参考文献

- Kulik et al., 2023, JGCD, doi:10.2514/1.G007311
