---
title: Minimum Energy Trajectory
description: Detailed explanation of the minimum energy trajectory definition, solution methods (extremum method and graphical method), and relationship with the optimal velocity inclination angle
keywords: Minimum Energy Trajectory, Optimal Velocity Inclination, Maximum Range, Virtual Focus, Semi-Major Axis
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Minimum Energy Trajectory
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "Minimum Energy Trajectory | Terminology Definition"
  description: Detailed explanation of the minimum energy trajectory definition and solution methods
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Minimum Energy Trajectory | Terminology Definition"
  description: Detailed explanation of the minimum energy trajectory definition and solution methods
  image: /logo.png
permalink: /en/glossary/fundamentals/minimum-energy-trajectory/
---

# Minimum Energy Trajectory

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The minimum energy trajectory is the elliptical trajectory that minimizes the required energy parameter $\gamma_k$ (or velocity magnitude $v_k$, specific mechanical energy $\varepsilon$) for a given powered-phase endpoint geocentric distance $r_k$ and passive-phase range angle $\beta_{kc}$. The minimum energy trajectory is also the maximum range trajectory for the same energy parameter, and the two are equivalent.

## Core Elements

### Extremum Method

When $r_k$ and $\beta_{kc}$ are given, $\gamma_k$ is a function of $\Theta_k$ only. The condition for $\gamma_k$ to reach its minimum is $\partial\gamma_k/\partial\Theta_k = 0$, yielding the relationship between the minimum energy parameter and the optimal velocity inclination angle:

$$\gamma_{k,\min} = 2\tan\Theta_{kc,\mathrm{opt}}\tan\frac{\beta_{kc}}{2}$$

This equation is identical to the maximum range trajectory condition, proving their equivalence.

### Graphical Method

The minimum semi-major axis $a_{\min}$ is obtained through the geometric properties of the ellipse:

$$a_{\min} = \frac{1}{4}(KC + r_k + R_E)$$

where $KC$ is the straight-line distance between cutoff point K and impact point C, calculated using the law of cosines. When $a = a_{\min}$, the virtual focus O' of the elliptical trajectory lies on segment KC (i.e., at point $O'_E$), at which point the specific mechanical energy $\varepsilon_{\min}$ reaches its minimum value.

### Geometric Derivation of Optimal Velocity Inclination Angle

On the minimum energy ellipse, the normal at point K bisects $\angle CKO_E$, from which:

$$\Theta_{kc,\mathrm{opt}} = \frac{1}{2}\tan^{-1}\frac{R_E\sin\beta_{kc}}{r_k - R_E\cos\beta_{kc}}$$

For the free-flight phase ($r_e = r_k$), $\Delta CKO_E$ is an isosceles triangle and the formula simplifies further.

### Flight Time of the Minimum Energy Trajectory

The flight time of the free-flight minimum energy trajectory:

$$T_{ke} = 2\sqrt{\frac{a^3}{\mu_E}}\left[\cos^{-1}\sqrt{1-\gamma_{k,\min}} + \sqrt{\gamma_{k,\min}(1-\gamma_{k,\min})}\right]$$

## Application Value

The minimum energy trajectory is a core concept in ballistic missile design. For a given range requirement, the minimum energy trajectory requires the lowest cutoff velocity, thereby reducing demands on the propulsion system. Additionally, the minimum energy trajectory corresponds to the optimal velocity inclination angle, at which the velocity inclination angle error coefficient is zero, which is favorable for improving accuracy. During the preliminary design phase of missiles, the minimum energy trajectory is typically used as the baseline for parameter estimation.

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
