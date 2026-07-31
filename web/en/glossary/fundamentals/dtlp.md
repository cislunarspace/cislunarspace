---
title: Discrete-Time Linear Periodic System
description: The discretized form of a linear periodic system, with state equation x(k+1)=A(k)x+B(k)u and coefficient matrices satisfying A(k+T_L)=A(k), B(k+T_L)=B(k). The p
keywords: Discrete-Time Linear Periodic System, DTLP, fundamentals
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Discrete-Time Linear Periodic System
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Discrete-Time Linear Periodic System Explained | Term Definition
  description: The discretized form of a linear periodic system, with state equation x(k+1)=A(k)x+B(k)u and coefficient matrices satisfying A(k+T_L)=A(k), B(k+T_L)=B(k). The p
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Discrete-Time Linear Periodic System Explained | Term Definition
  description: The discretized form of a linear periodic system, with state equation x(k+1)=A(k)x+B(k)u and coefficient matrices satisfying A(k+T_L)=A(k), B(k+T_L)=B(k). The p
  image: /logo.png
permalink: /en/glossary/fundamentals/dtlp/
---

# Discrete-Time Linear Periodic System

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The discretized form of a linear periodic system, with state equation x(k+1)=A(k)x+B(k)u and coefficient matrices satisfying A(k+T_L)=A(k), B(k+T_L)=B(k). The paper discretizes the continuous error dynamics at the maneuver interval Delta tau, then applies a time-invariant transformation (augmenting all states and control inputs within one period into a single vector) to convert it to a discrete-time LTI system, enabling direct application of classical pole placement theorems.

## Application Value

This system can apply classical control theorems through discretization, suitable for discrete control law design of libration point orbits.

## Related Concepts

- [Variable Structure Sliding Mode Control](/en/glossary/fundamentals/vssmc/)
- [Pontryagin Minimum Principle](/en/glossary/fundamentals/pmp/)
- [Error Function](/en/glossary/fundamentals/erf/)

## References

- 徐明和徐世杰 - 2008 - Halo轨道维持的线性周期控制策略
