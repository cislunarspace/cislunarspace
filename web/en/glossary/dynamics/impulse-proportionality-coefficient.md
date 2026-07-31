---
title: Impulse Proportionality Coefficient
description: Gain coefficients characterizing the near-linear relationship between velocity deviation at mid-course correction time and the required correction impulse. For...
keywords: Impulse Proportionality Coefficient
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Impulse Proportionality Coefficient
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Impulse Proportionality Coefficient Explained | Term Definition
  description: Gain coefficients characterizing the near-linear relationship between velocity deviation at mid-course correction time and the required correction impulse. For...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Impulse Proportionality Coefficient Explained | Term Definition
  description: Gain coefficients characterizing the near-linear relationship between velocity deviation at mid-course correction time and the required correction impulse. For...
  image: /logo.png
permalink: /en/glossary/dynamics/impulse-proportionality-coefficient/
---

# Impulse Proportionality Coefficient

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)

> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Gain coefficients characterizing the near-linear relationship between velocity deviation at mid-course correction time and the required correction impulse. For a given nominal orbit and correction epoch, three directional coefficients form a 3x3 diagonal gain matrix K with diagonal elements [k_xx, k_yy, k_zz] and near-zero off-diagonal terms. Extracted from Monte Carlo shooting data via least-squares fitting, these coefficients serve as the output features of the neural network surrogate model.

## Application Value

This concept is essential for understanding motion characteristics in orbital design and control, and plays a vital role in mission success.

## Related Concepts

- [Minimum Norm Solution](/en/glossary/dynamics/minimum-norm-solution/)
- [Rigid Body Dynamics](/en/glossary/dynamics/rigid-body-dynamics/)
- [Variable-Size Design Space, VSDS](/en/glossary/dynamics/variable-size-design-space-vsds/)
- [Analytical Gradient](/en/glossary/dynamics/analytical-gradient/)

## References

- 常笑宽 等 - 2026 - 基于神经网络的地月转移中途修正脉冲快速估计方法