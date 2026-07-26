---
title: Optimal Velocity Inclination
description: A detailed analysis of the optimal velocity inclination definition, derivation, and its relationship with maximum range trajectories and minimum energy trajectories
keywords: Optimal Velocity Inclination, Maximum Range, Minimum Energy Trajectory, Velocity Inclination Angle
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Optimal Velocity Inclination
  desc: "One-stop learning for cislunar space research frontiers, terminology, and tool resources."
  image: /logo.png
og:
  title: "Optimal Velocity Inclination | Terminology Definition"
  description: A detailed analysis of the optimal velocity inclination definition and its relationship with maximum range trajectories
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Optimal Velocity Inclination | Terminology Definition"
  description: A detailed analysis of the optimal velocity inclination definition and its relationship with maximum range trajectories
  image: /logo.png
permalink: /en/glossary/fundamentals/optimal-velocity-inclination/
---

# Optimal Velocity Inclination

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The optimal velocity inclination $\Theta_{k,\mathrm{opt}}$ is the local velocity inclination angle that maximizes the trajectory range, given the geocentric distance $r_k$ and energy parameter $\gamma_k$ at the end of the powered phase. It satisfies the extremum condition $\partial\beta_{kc}/\partial\Theta_k = 0$ and serves as the common characteristic parameter of both maximum range trajectories and minimum energy trajectories.

## Core Elements

### Passive Phase Optimal Velocity Inclination

The relationship between the maximum angular range of the passive phase $\beta_{kc,\max}$ and its optimal velocity inclination $\Theta_{kc,\mathrm{opt}}$:

$$\tan\Theta_{kc,\mathrm{opt}} = \sqrt{\frac{\gamma_k[2R_E - \gamma_k(R_E + r_k)]}{2R_E\gamma_k - 4(R_E - r_k)}}$$

$$\tan\frac{\beta_{kc,\max}}{2} = \sqrt{\frac{\gamma_k[R_E\gamma_k - 2(R_E - r_k)]}{2[2R_E - \gamma_k(R_E + r_k)]}}$$

### Free-Flight Phase Optimal Velocity Inclination

For the free-flight phase ($r_e = r_k$), the formulas simplify to:

$$\tan\Theta_{ke,\mathrm{opt}} = \sqrt{1 - \gamma_k}$$

$$\tan\frac{\beta_{ke,\max}}{2} = \frac{1}{2}\frac{\gamma_k}{\sqrt{1 - \gamma_k}}$$

Combining the two yields a concise relationship:

$$\Theta_{ke,\mathrm{opt}} = \frac{1}{4}(\pi - \beta_{ke,\max})$$

### Physical Significance

| Property | Description |
| :--- | :--- |
| Maximum range | At equal energy, $\Theta_{k,\mathrm{opt}}$ maximizes the range |
| Minimum energy | At equal range, $\Theta_{k,\mathrm{opt}}$ minimizes the required energy |
| Error sensitivity | At $\Theta_k = \Theta_{k,\mathrm{opt}}$, $\partial L/\partial\Theta_k = 0$, so velocity inclination deviations do not cause range deviations |
| Small range limit | When $\beta_{kc,\max} \to 0$, $\Theta_{k,\mathrm{opt}} \to 45°$, consistent with artillery weapons |

### Equivalence with Minimum Energy Trajectory

The maximum range trajectory is identical to the minimum energy trajectory for that range. When $\beta_{kc}$ and $h_k$ are given, the required $\gamma_k$, $v_k$, and $\varepsilon$ are minimized only when $\Theta_{k,\mathrm{opt}}$ is selected.

## Application Value

The optimal velocity inclination is a key parameter in ballistic missile design. In practice, the velocity inclination at the end of the powered phase is typically set to a value near $\Theta_{k,\mathrm{opt}}$. Selecting the optimal velocity inclination not only maximizes range but also reduces the impact of velocity inclination deviations on firing accuracy, thereby improving missile hit precision.

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
