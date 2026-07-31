---
title: Linear Feedback Control
description: An orbit control strategy that linearizes the dynamics near a target orbit, uses the state deviation (position and velocity errors) as feedback, and multiplies it by a control gain to generate thrust 
keywords: Linear Feedback Control, fundamentals
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Linear Feedback Control
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Linear Feedback Control Explained | Term Definition
  description: An orbit control strategy that linearizes the dynamics near a target orbit, uses the state deviation (position and velocity errors) as feedback, and multiplies it by a control gain to generate thrust 
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Linear Feedback Control Explained | Term Definition
  description: An orbit control strategy that linearizes the dynamics near a target orbit, uses the state deviation (position and velocity errors) as feedback, and multiplies it by a control gain to generate thrust 
  image: /logo.png
permalink: /en/glossary/fundamentals/linear-feedback-control/
---

# Linear Feedback Control

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An orbit control strategy that linearizes the dynamics near a target orbit, uses the state deviation (position and velocity errors) as feedback, and multiplies it by a control gain to generate thrust commands that drive the deviation toward zero. The paper formulates a weighted quadratic cost over position and velocity errors, solving for the optimal thrust at each control interval to balance position accuracy and energy consumption.

## Related Concepts

- [Center-of-Mass Rotating Frame](/en/glossary/fundamentals/center-of-mass-rotating-frame/)
- [Mass Parameter](/en/glossary/fundamentals/mass-parameter/)
- [Jacobi Constant, JC](/en/glossary/dynamics/jacobi-constant-jc/)
- [Normalized Units](/en/glossary/fundamentals/normalized-units/)
## References

- On the control problem of keeping a spacecraft near collinear libration points
