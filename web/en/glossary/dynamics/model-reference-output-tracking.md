---
title: Model Reference Output Tracking
description: A control design framework in which a reference model generates the desired output trajectory, and the controller is designed so that the plant output...
keywords: Model Reference Output Tracking
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Model Reference Output Tracking
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Model Reference Output Tracking Explained | Term Definition
  description: A control design framework in which a reference model generates the desired output trajectory, and the controller is designed so that the plant output...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Model Reference Output Tracking Explained | Term Definition
  description: A control design framework in which a reference model generates the desired output trajectory, and the controller is designed so that the plant output...
  image: /logo.png
permalink: /en/glossary/dynamics/model-reference-output-tracking/
---

# Model Reference Output Tracking

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A control design framework in which a reference model generates the desired output trajectory, and the controller is designed so that the plant output asymptotically tracks the reference output, i.e., lim(y - y_r) = 0. The core tool is solving a Sylvester-type matrix equation for feedforward gain matrices G(t), H(t), supplemented by a state-feedback gain K(t) to suppress initial errors. Distinguished from model reference adaptive control by using deterministic optimal gains rather than online parameter identification.

## Application Value

模型参考输出跟踪用参考模型生成期望输出，是姿态控制系统设计的经典方法。
## Related Concepts

- [Asymptotic Solution](/en/glossary/dynamics/asymptotic-solution/)
- [Perilune Database](/en/glossary/dynamics/perilune-database/)
- [Libration Point Orbit Cataloging](/en/glossary/orbits/libration-point-orbit-cataloging/)
- [Floquet Modal Method](/en/glossary/dynamics/floquet-modal-method/)
## References

- 地月空间航天器绕飞接近跟踪控制
