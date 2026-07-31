---
title: Full State Feedback
description: A feedback scheme where the control law uses all system state variables as inputs. In the paper, the Halo orbit error dynamics state is 6-dimensional (3...
keywords: Full State Feedback
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Full State Feedback
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Full State Feedback Explained | Term Definition
  description: A feedback scheme where the control law uses all system state variables as inputs. In the paper, the Halo orbit error dynamics state is 6-dimensional (3...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Full State Feedback Explained | Term Definition
  description: A feedback scheme where the control law uses all system state variables as inputs. In the paper, the Halo orbit error dynamics state is 6-dimensional (3...
  image: /logo.png
permalink: /en/glossary/fundamentals/full-state-feedback/
---

# Full State Feedback

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A feedback scheme where the control law uses all system state variables as inputs. In the paper, the Halo orbit error dynamics state is 6-dimensional (3 position + 3 velocity components), so full state feedback means using both position and velocity information to design the control law. The paper notes that when velocity is unmeasurable, it can be estimated via filtering algorithms, but this paper only studies full state feedback stabilization; filter design based on periodic control is deferred to future work.

## Application Value

全状态反馈利用所有状态变量构成反馈增益，是线性控制系统设计的经典方法，姿态控制设计师用它实现姿态稳定。
## Related Concepts

- [Differential Correction Method](/en/glossary/fundamentals/differential-correction-method/)
- [Laval Nozzle](/en/glossary/fundamentals/laval-nozzle/)
- [Lagrange Point](/en/glossary/fundamentals/lagrange-point/)
- [Orbital Elements](/en/glossary/fundamentals/orbital-elements/)
## References

- 徐明和徐世杰 - 2008 - Halo轨道维持的线性周期控制策略
