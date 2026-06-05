---
title: Hohmann Transfer
description: A detailed analysis of Hohmann transfer — its principle, velocity impulse computation, and Hohmann rendezvous
keywords: Hohmann transfer, orbital transfer, velocity impulse, Hohmann rendezvous
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Hohmann Transfer
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "Hohmann Transfer | Terminology Definition"
  description: A detailed analysis of Hohmann transfer — its principle and velocity impulse computation
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Hohmann Transfer | Terminology Definition"
  description: A detailed analysis of Hohmann transfer — its principle and velocity impulse computation
  image: /logo.png
permalink: /en/glossary/fundamentals/hohmann-transfer/
---

# Hohmann Transfer

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Hohmann transfer is a two-impulse, minimum-energy, coplanar circular orbit transfer scheme proposed by the German engineer Hohmann. The transfer orbit is an ellipse tangent to the initial orbit at perigee and tangent to the final orbit at apogee. The spacecraft applies two velocity impulses along the direction of motion at the tangent points to complete the transfer.

## Core Elements

### Transfer Process

At perigee $A$ of the initial orbit, the spacecraft applies a prograde impulse $\Delta v_1$ to enter the transfer ellipse. At apogee $B$, a second impulse $\Delta v_2$ is applied to enter the final circular orbit.

### Velocity Impulse Computation

The semi-major axis of the transfer orbit:

$$a_E = \frac{r_1 + r_2}{2}$$

The two velocity impulses:

$$\begin{cases} \Delta v_1 = v_{c1}\left(\sqrt{\frac{2r_2}{r_1 + r_2}} - 1\right) \\ \Delta v_2 = v_{c2}\left(1 - \sqrt{\frac{2r_1}{r_1 + r_2}}\right) \end{cases}$$

where $v_{c1} = \sqrt{\mu/r_1}$ and $v_{c2} = \sqrt{\mu/r_2}$.

### Transfer Time

$$T = \frac{\pi}{\sqrt{\mu}} \left(\frac{r_1 + r_2}{2}\right)^{3/2}$$

### Hohmann Rendezvous

When the chaser spacecraft rendezvous with the target at apogee, the angular lead of the target over the chaser is:

$$\theta_H = \pi\left[1 - \left(\frac{r_1 + r_2}{2r_2}\right)^{3/2}\right]$$

If the initial phase angle does not satisfy this condition, the chaser must wait in the initial orbit to eliminate the discrepancy.

## Application Value

The Hohmann transfer is the most classical orbital transfer scheme. For coplanar circular transfers, it is the most energy-efficient option when $r_2/r_1 < 11.94$. It is widely used in geostationary satellite insertion, space station orbit transfers, preliminary interplanetary trajectory design, and other missions.

## Related Concepts

<!-- EN mirrors for bi-elliptic transfer, characteristic velocity, phasing orbit, and orbital maneuver do not exist yet -->

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
