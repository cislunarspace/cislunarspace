---
title: Guidance and Control (G&C)
description: Guidance is the process of real-time state trajectory planning for spacecraft translation and rotation; control is responsible for following these trajectories based on real-time state updates in the presence of disturbances, measurement noise, and model uncertainties.
keywords: Guidance and Control, G&C, GNC, trajectory planning, attitude control, spacecraft autonomy
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Guidance and Control (G&C)
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Guidance and Control Explained | Term Definition
  description: Guidance is the process of real-time state trajectory planning for spacecraft translation and rotation; control is responsible for following these trajectories based on real-time state updates in the presence of disturbances, measurement noise, and model uncertainties.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Guidance and Control Explained | Term Definition
  description: Guidance is the process of real-time state trajectory planning for spacecraft translation and rotation; control is responsible for following these trajectories based on real-time state updates in the presence of disturbances, measurement noise, and model uncertainties.
  image: /logo.png
permalink: /en/glossary/dynamics/g-and-c/
---

# Guidance and Control (G&C)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Guidance is the process of real-time state trajectory planning for spacecraft translation and rotation; control is responsible for following these trajectories based on real-time state updates in the presence of disturbances, measurement noise, and model uncertainties.

## Application Value

Guidance and control constitutes the core of spacecraft autonomous operations. Guidance algorithms generate reference trajectories based on current state and objectives, while control algorithms drive actuators to move the spacecraft along these trajectories. In cislunar missions, G&C systems face challenges such as long communication delays, strong perturbations, and multiple constraints, requiring robust control law design to handle measurement noise, model uncertainties, and external disturbances. Typical cislunar transfer guidance strategies include Lambert guidance, multi-impulse maneuver guidance, and model predictive guidance.

## Related Concepts

- [Model Predictive Control (MPC)](/en/glossary/dynamics/model-predictive-control/)
- [Fault Detection, Isolation and Recovery (FDIR)](/en/glossary/dynamics/fault-detection-isolation-and-recovery/)
- [Powered Descent Guidance (PDG)](/en/glossary/dynamics/powered-descent-guidance/)
- [State Transition Matrix](/en/glossary/dynamics/state-transition-matrix/)

## References

- Starek et al. - 2016 - Spacecraft autonomy challenges for next-generation space missions
