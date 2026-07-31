---
title: Measurement Systematic Bias
description: The deterministic bias component in measurements caused by equipment hardware, signal propagation, and clock errors, distinguished from random measurement noise. In cislunar dual-one-way measurement,
keywords: Measurement Systematic Bias, cislunar space, orbital mechanics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Measurement Systematic Bias
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Measurement Systematic Bias Explained | Term Definition
  description: The deterministic bias component in measurements caused by equipment hardware, signal propagation, and clock errors, distinguished from random measurement noise. In cislunar dual-one-way measurement,
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Measurement Systematic Bias Explained | Term Definition
  description: The deterministic bias component in measurements caused by equipment hardware, signal propagation, and clock errors, distinguished from random measurement noise. In cislunar dual-one-way measurement,
  image: /logo.png
permalink: /en/glossary/navigation/measurement-systematic-bias/
---

# Measurement Systematic Bias

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The deterministic bias component in measurements caused by equipment hardware, signal propagation, and clock errors, distinguished from random measurement noise. In cislunar dual-one-way measurement, systematic biases include device transmit and receive delays, clock errors, and ionospheric delays. Sum combination cancels most clock errors, but residual systematic biases such as equipment delays must still be estimated as parameters during orbit determination. Research shows that estimating versus not estimating systematic biases causes orbit determination accuracy to differ by more than an order of magnitude, making it a key factor constraining convergence.

## Application Value

measuresystem差include设备delay、钟差、电离层delay等determine性偏差, In 定轨中need作for 待估parameter解算. 解算 and 不解算system差可导致定轨accuracy相差超过一个量级.

## Related Concepts

- [Single-Difference Observation](/en/glossary/navigation/singledifference-observation/)
- [Chip Scale Atomic Clock](/en/glossary/navigation/chip-scale-atomic-clock/)
- [Particle Filter](/en/glossary/navigation/particle-filter/)
- [Orbit Determination Error](/en/glossary/navigation/orbit-determination-error/)

## References

- 曹建峰 等, 2025, 地月空间探测器星间链路定轨能力分析