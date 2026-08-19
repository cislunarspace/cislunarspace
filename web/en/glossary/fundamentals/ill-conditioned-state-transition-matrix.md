---
title: Ill-Conditioned State Transition Matrix
description: A phenomenon in solving the three-body Lambert problem where the state transition matrix inverse has an excessively large condition number, causing numerical iteration to diverge. When long-term integ
keywords: Ill-Conditioned State Transition Matrix, fundamentals
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Ill-Conditioned State Transition Matrix
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Ill-Conditioned State Transition Matrix Explained | Term Definition"
  description: A phenomenon in solving the three-body Lambert problem where the state transition matrix inverse has an excessively large condition number, causing numerical iteration to diverge. When long-term integ
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Ill-Conditioned State Transition Matrix Explained | Term Definition"
  description: A phenomenon in solving the three-body Lambert problem where the state transition matrix inverse has an excessively large condition number, causing numerical iteration to diverge. When long-term integ
  image: /logo.png
permalink: /en/glossary/fundamentals/ill-conditioned-state-transition-matrix/
---

# Ill-Conditioned State Transition Matrix

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A phenomenon in solving the three-body Lambert problem where the state transition matrix inverse has an excessively large condition number, causing numerical iteration to diverge. When long-term integration or the reference trajectory approaches an unstable structure, matrix inversion amplifies errors and Newton-Raphson iteration diverges. The paper's improvement uses a genetic algorithm to pre-search for a reference trajectory closer to the target, then applies homotopy to bridge the gap smoothly.

## Related Concepts

- [Center-of-Mass Rotating Frame](/en/glossary/fundamentals/synodic-frame/)
- Mass Parameter
- [Jacobi Constant, JC](/en/glossary/dynamics/jacobi-integral/)
- [Normalized Units](/en/glossary/fundamentals/nondimensionalization/)

## References

- Three-body Lambert algorithm for libration point rendezvous orbit design
