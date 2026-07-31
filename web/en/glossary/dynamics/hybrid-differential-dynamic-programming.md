---
title: Hybrid Differential Dynamic Programming
description: A nonlinear optimal control algorithm that extends Differential Dynamic Programming (DDP) with a trust region method and a range-space active set method for constraint handling. It iterates between ba...
keywords: Hybrid Differential Dynamic Programming, HDDP
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Hybrid Differential Dynamic Programming
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Hybrid Differential Dynamic Programming Explained | Term Definition"
  description: A nonlinear optimal control algorithm that extends Differential Dynamic Programming (DDP) with a trust region method and a range-space active set method for constraint handling. It iterates between ba...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Hybrid Differential Dynamic Programming Explained | Term Definition"
  description: A nonlinear optimal control algorithm that extends Differential Dynamic Programming (DDP) with a trust region method and a range-space active set method for constraint handling. It iterates between ba...
  image: /logo.png
permalink: /en/glossary/dynamics/hybrid-differential-dynamic-programming/
---
# Hybrid Differential Dynamic Programming

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A nonlinear optimal control algorithm that extends Differential Dynamic Programming (DDP) with a trust region method and a range-space active set method for constraint handling. It iterates between backward sweeps (computing optimal control policies along a reference trajectory) and forward sweeps (updating the reference trajectory), converging to a locally optimal solution when constraints are satisfied and cost function variations become sufficiently small. This paper embeds dynamics continuation within HDDP to gradually transition from two-body to three-body dynamics, obtaining 50.5-revolution low-thrust transfers from poor initial guesses.


## Application Value

In a linear quadratic optimal control framework, selecting appropriate weight matrices Q and R achieves a balance between tracking accuracy and control energy consumption, making it suitable for real-time control in cislunar orbit keeping.


## References

- Oue等 - 2025 - Low-Thrust Many-Revolution Transfer between Near Rectilinear Halo Orbit and Low Lunar Orbit Using Hybrid Differential Dynamic Programming

