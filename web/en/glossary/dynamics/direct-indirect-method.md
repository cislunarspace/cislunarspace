---
title: Direct/Indirect Method
description: "A hybrid trajectory optimization method combining indirect calculus of variations (costate equations from Pontryagin's minimum principle) with direct transcription, using direct methods to generate initial guesses and indirect methods for refinement."
keywords: "Direct/Indirect Method, trajectory optimization, calculus of variations, Pontryagin's minimum principle, indirect method, direct method"
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Direct/Indirect Method
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Direct/Indirect Method Explained | Term Definition
  description: "A hybrid trajectory optimization method combining indirect calculus of variations (costate equations from Pontryagin's minimum principle) with direct transcription."
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Direct/Indirect Method Explained | Term Definition
  description: "A hybrid trajectory optimization method combining indirect calculus of variations (costate equations from Pontryagin's minimum principle) with direct transcription."
  image: /logo.png
permalink: /en/glossary/dynamics/direct-indirect-method/
---

# Direct/Indirect Method

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A hybrid trajectory optimization method combining indirect calculus of variations (costate equations from Pontryagin's minimum principle) with direct transcription, using direct methods to generate initial guesses and indirect methods for refinement.

## Application Value

The direct/indirect method leverages the computational efficiency of direct transcription for initial guess generation while using indirect methods based on Pontryagin's minimum principle for high-accuracy refinement. This hybrid approach avoids the sensitivity issues of pure indirect methods (which require good initial guesses for costates) while achieving higher accuracy than pure direct methods. It is widely used in low-thrust cislunar trajectory optimization where accurate convergence to fuel-optimal or time-optimal solutions is critical.

## Related Concepts

- [Pontryagin's Minimum Principle](/en/glossary/dynamics/pontryagin-minimum-principle/)
- [Direct Transcription](/en/glossary/dynamics/direct-transcription/)
- [Collocation Method](/en/glossary/dynamics/collocation-method/)
- [Hamiltonian](/en/glossary/dynamics/hamiltonian/)

## References

- Yang - 2007 - Earth-moon trajectory optimization using solar electric propulsion
