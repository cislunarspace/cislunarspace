---
title: 间接优化方法（Indirect Optimization）
description: 基于庞特里亚金极值原理将轨迹优化问题转化为两点边值问题的求解方法。与直接优化法对状态和控制变量离散化不同，间接法通过引入协态变量，由解析的最优性条件（一阶必要条件）导出控制律，再用打靶法等数值方法求解边值问题。优点是解满足最优性条件、精度高；缺点是收敛域窄、对初值敏感。
keywords: 间接优化方法, Indirect Optimization, 动力学, 轨道力学, 控制理论, 优化
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 间接优化方法（Indirect Optimization）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 间接优化方法详解 | 术语定义
  description: 基于庞特里亚金极值原理将轨迹优化问题转化为两点边值问题的求解方法。与直接优化法对状态和控制变量离散化不同，间接法通过引入协态变量，由解析的最优性条件（一阶必要条件）导出控制律，再用打靶法等数值方法求解边值问题。优点是解满足最优性条件、精度高；缺点是收敛域窄、对初值敏感。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 间接优化方法详解 | 术语定义
  description: 基于庞特里亚金极值原理将轨迹优化问题转化为两点边值问题的求解方法。与直接优化法对状态和控制变量离散化不同，间接法通过引入协态变量，由解析的最优性条件（一阶必要条件）导出控制律，再用打靶法等数值方法求解边值问题。优点是解满足最优性条件、精度高；缺点是收敛域窄、对初值敏感。
  image: /logo.png
permalink: /glossary/dynamics/indirect-optimization/
---

# 间接优化方法（Indirect Optimization）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

基于庞特里亚金极值原理将轨迹优化问题转化为两点边值问题的求解方法。与直接优化法对状态和控制变量离散化不同，间接法通过引入协态变量，由解析的最优性条件（一阶必要条件）导出控制律，再用打靶法等数值方法求解边值问题。优点是解满足最优性条件、精度高；缺点是收敛域窄、对初值敏感。

## 应用价值

在姿态控制和轨道控制系统中，用于设计反馈律，实现对航天器运动的精确调节。
在轨迹优化问题中，用于寻找燃料消耗最少或时间最短的最优飞行方案。

## 相关概念

- [动力显式制导（Powered Explicit Guidance, PEG）](/glossary/navigation/powered-explicit-guidance-peg/)
- [非线性姿态控制（Nonlinear Attitude Control）](/glossary/dynamics/nonlinear-attitude-control/)
- [末制导（Terminal Guidance）](/glossary/navigation/terminal-guidance/)

## 参考文献

- Singh et al., 2021
