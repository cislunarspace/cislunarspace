---
title: Range Measurement Noise
description: The standard deviation of zero-mean Gaussian measurement noise in ISL pseudorange measurements. The paper analyzes three noise levels (1 m, 10 m, 100 m) on orbit determination performance.
keywords: Range Measurement Noise, inter-satellite link, pseudorange measurement, autonomous orbit determination, Gaussian noise
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Range Measurement Noise
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Range Measurement Noise Explained | Term Definition
  description: The standard deviation of zero-mean Gaussian measurement noise in ISL pseudorange measurements, analyzing the impact of three noise levels on orbit determination performance.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Range Measurement Noise Explained | Term Definition
  description: The standard deviation of zero-mean Gaussian measurement noise in ISL pseudorange measurements, analyzing the impact of three noise levels on orbit determination performance.
  image: /logo.png
permalink: /en/glossary/navigation/range-measurement-noise/
---

# Range Measurement Noise

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The standard deviation of zero-mean Gaussian measurement noise in ISL pseudorange measurements. The paper analyzes the impact of three noise levels (1 m for high precision, 10 m for nominal, and 100 m for low precision or extreme conditions) on orbit determination performance, finding that system observability determines its sensitivity to range measurement noise.

## Application Value

Range measurement noise is one of the primary error sources in inter-satellite link orbit determination systems. Range noise level directly determines the precision ceiling of orbit determination — low-noise ranging enables decimeter-level or even centimeter-level precision orbit determination, while high-noise environments substantially degrade determination accuracy. Research shows that under good measurement geometry conditions, the system exhibits lower sensitivity to range measurement noise, maintaining good orbit determination performance even with some noise. Therefore, when designing cislunar space inter-satellite ranging systems, besides pursuing hardware ranging precision, constellation configuration should be optimized to enhance observability, enabling orbit determination algorithms to fully utilize measurement data to overcome noise effects. This parameter holds significant importance for precision orbit determination of lunar navigation satellite constellations.


## Related Concepts

- [Inter-Satellite Link](/en/glossary/navigation/inter-satellite-link/)
- [Pseudorange](/en/glossary/navigation/pseudorange/)
- [Orbit Determination](/en/glossary/navigation/orbit-determination/)
- [Observability](/en/glossary/navigation/observability/)


## References

- Li et al. - 2026 - A performance study on orbit determination using inter-satellite links between heterogeneous orbits
