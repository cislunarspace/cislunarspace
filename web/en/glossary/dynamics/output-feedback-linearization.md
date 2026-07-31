---
title: Output Feedback Linearization
description: A control method that applies feedback linearization only to the system output rather than all states, suitable when only the output needs to be controlled.
keywords: Output Feedback Linearization, OFL, feedback linearization, nonlinear control, output control
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Output Feedback Linearization
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Output Feedback Linearization Explained | Term Definition
  description: A control method that applies feedback linearization only to the system output rather than all states, suitable when only the output needs to be controlled.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Output Feedback Linearization Explained | Term Definition
  description: A control method that applies feedback linearization only to the system output rather than all states, suitable when only the output needs to be controlled.
  image: /logo.png
permalink: /en/glossary/dynamics/output-feedback-linearization/
---

# Output Feedback Linearization

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A control method that applies feedback linearization only to the system output rather than all states, suitable when only the output needs to be controlled.

## Application Value

In many aerospace control problems, what we truly care about are often only certain output quantities rather than all state variables. For example, in satellite Earth-pointing control, what needs to be controlled is the antenna pointing angle rather than all attitude parameters. Output feedback linearization substantially simplifies controller design complexity by only linearizing outputs, while avoiding noise amplification issues that full-state feedback might introduce. In cislunar space探测器 navigation and control systems, when sensors only provide partial state measurements, output feedback linearization is a practical control strategy. Combined with observer design, this method can achieve stable output tracking control even when states are not directly measurable.


## Related Concepts

- [Feedback Linearization](/en/glossary/dynamics/feedback-linearization/)
- [State Observer](/en/glossary/dynamics/state-observer/)
- [Attitude Control](/en/glossary/dynamics/attitude-control/)
- [Nonlinear Control](/en/glossary/dynamics/nonlinear-control/)


## References

- Marchand and Howell - 2005
