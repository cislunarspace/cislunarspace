---
title: Adams-Cowell积分器（Adams-Cowell Integrator）
description: 一种线性多步数值积分方法，由Adams预测-校正公式与Cowell公式组合而成。Cowell公式专门用于求解二阶常微分方程（即运动方程），无需引入速度作为中间变量，适合卫星轨道的长时间精密积分。
keywords: Adams-Cowell积分器, Adams-Cowell Integrator, 轨道力学, 动力学建模, 数值积分
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Adams-Cowell积分器（Adams-Cowell Integrator）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: Adams-Cowell积分器详解 | 术语定义
  description: 一种线性多步数值积分方法，由Adams预测-校正公式与Cowell公式组合而成。Cowell公式专门用于求解二阶常微分方程（即运动方程），无需引入速度作为中间变量，适合卫星轨道的长时间精密积分。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Adams-Cowell积分器详解 | 术语定义
  description: 一种线性多步数值积分方法，由Adams预测-校正公式与Cowell公式组合而成。Cowell公式专门用于求解二阶常微分方程（即运动方程），无需引入速度作为中间变量，适合卫星轨道的长时间精密积分。
  image: /logo.png
permalink: /glossary/dynamics/adams-cowell-integrator/
---

# Adams-Cowell积分器（Adams-Cowell Integrator）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种线性多步数值积分方法，由Adams预测-校正公式与Cowell公式组合而成。Cowell公式专门用于求解二阶常微分方程（即运动方程），无需引入速度作为中间变量，适合卫星轨道的长时间精密积分。

## 应用价值

在长时间轨道预报中，Adams-Cowell积分器能够高效计算高精度的轨道演化，特别适用于地月转移轨道和深空轨道的设计与验证。

## 相关概念

- [李雅普诺夫稳定性（Lyapunov Stability）](/glossary/dynamics/lyapunov-stability/)
- [汉森系数（Hansen Coefficients）](/glossary/dynamics/hansen-coefficients/)
- [控制曲线（Control Curve, U_i）](/glossary/dynamics/control-curve-ui/)
- [拼接圆锥曲线法（Patched Conics Method）](/glossary/dynamics/patched-conics-method/)

## 参考文献

- https://doi.org/10.1016/j.asr.2024.04.016
