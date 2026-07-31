---
title: Linear Time-Periodic System
description: A linear system whose coefficient matrices vary periodically with time, satisfying A(t+T)=A(t), B(t+T)=B(t). It is the simplest and most important class of time
keywords: Linear Time-Periodic System, LTP, fundamentals
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Linear Time-Periodic System
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Linear Time-Periodic System Explained | Term Definition
  description: A linear system whose coefficient matrices vary periodically with time, satisfying A(t+T)=A(t), B(t+T)=B(t). It is the simplest and most important class of time
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Linear Time-Periodic System Explained | Term Definition
  description: A linear system whose coefficient matrices vary periodically with time, satisfying A(t+T)=A(t), B(t+T)=B(t). It is the simplest and most important class of time
  image: /logo.png
permalink: /en/glossary/fundamentals/ltp/
---

# Linear Time-Periodic System

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A linear system whose coefficient matrices vary periodically with time, satisfying A(t+T)=A(t), B(t+T)=B(t). It is the simplest and most important class of time-varying systems; many aerospace time-varying systems can be approximated as LTP (e.g., dynamics on elliptic orbits, attitude motion of spinning rigid bodies). The error dynamics of Halo orbit tracking, after first-order linearization, naturally has this structure: the state matrix A(t) obtained by linearizing the CR3BP equations along the nominal orbit is a periodic function.

## Application Value

Linear time-periodic system theory applies to elliptical orbit dynamics and periodic orbit tracking control, forming the theoretical basis for Halo orbit maintenance strategies.

## Related Concepts

- [Variable Structure Sliding Mode Control](/en/glossary/fundamentals/vssmc/)
- [Pontryagin Minimum Principle](/en/glossary/fundamentals/pmp/)
- [Error Function](/en/glossary/fundamentals/erf/)

## References

- 徐明和徐世杰 - 2008 - Halo轨道维持的线性周期控制策略
