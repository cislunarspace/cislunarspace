---
title: Shooting Method
description: A numerical iterative method for solving two-point boundary value problems, also known as the boundary value shooting method. The approach guesses missing in...
keywords: Shooting Method, spacecraft dynamics, orbital mechanics, coordinate system
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Shooting Method
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Shooting Method Explained | Term Definition
  description: A numerical iterative method for solving two-point boundary value problems, also known as the boundary value shooting method. The approach guesses missing in...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Shooting Method Explained | Term Definition
  description: A numerical iterative method for solving two-point boundary value problems, also known as the boundary value shooting method. The approach guesses missing in...
  image: /logo.png
permalink: /en/glossary/fundamentals/shooting-method/
---

# Shooting Method

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A numerical iterative method for solving two-point boundary value problems, also known as the boundary value shooting method. The approach guesses missing initial conditions (conjugate variable initial values in this paper), integrates the state and adjoint equations from initial to terminal time, checks whether terminal conditions are satisfied, adjusts the guess, and repeats until the terminal performance index is minimized. The paper uses the shooting method with six conjugate variable initial values as parameters and terminal landing state as the objective, obtaining initial values that satisfy both velocity and position constraints through parameter optimization.

## Application Value

The shooting method solves two-point boundary value problems through iterative adjustment, commonly used in trajectory optimization and optimal control.

## Related Concepts

- [Multiple Shooting Method](/en/glossary/fundamentals/multiple-shooting-method/)
- [Continuous Low Thrust](/en/glossary/fundamentals/continuous-low-thrust/)
- [Two-Way Link](/en/glossary/fundamentals/two-way-link/)
- [Inertial Coordinate System](/en/glossary/fundamentals/inertial-coordinate-system/)

## References

- 周净扬和周荻 - 2007 - 月球探测器软着陆精确建模及最优轨道设计
