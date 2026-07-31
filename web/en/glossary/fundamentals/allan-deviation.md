---
title: Allan Deviation (ADEV)
description: Detailed analysis of Allan Deviation definition, calculation methods, differences from standard deviation, and applications in atomic clock frequency stability evaluation
keywords: Allan Deviation, ADEV, Allan Deviation, Frequency Stability, Atomic Clock, Time-Frequency, Oscillator, Phase Noise, MDEV
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Allan Deviation (ADEV)
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: "Allan Deviation (ADEV) | Terminology Definition"
  description: Detailed analysis of Allan Deviation definition, calculation methods, and applications in atomic clock frequency stability evaluation
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Allan Deviation (ADEV) | Terminology Definition"
  description: Detailed analysis of Allan Deviation definition, calculation methods, and applications in atomic clock frequency stability evaluation
  image: /logo.png
permalink: /en/glossary/fundamentals/allan-deviation/
---

# Allan Deviation (ADEV)

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Reference: Li Y et al. 2026 Chin. Phys. Lett. 43 031101
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Allan Deviation (ADEV) is a statistical measure for evaluating frequency source stability, proposed by David W. Allan in 1966. Unlike traditional standard deviation, ADEV can distinguish different types of noise processes (such as white noise, flicker noise, random walk noise, etc.) and avoids divergence issues when noise is non-stationary.

ADEV is the core metric for evaluating atomic clock and oscillator performance in time-frequency metrology.

## Mathematical Definition

For adjacent frequency measurements $\bar{y}_i$ at sampling interval $\tau$, ADEV is defined as:

$$\sigma_y^2(\tau) = \frac{1}{2(N-1)} \sum_{i=1}^{N-1} (\bar{y}_{i+1} - \bar{y}_i)^2$$

Where $N$ is the number of samples and $\bar{y}_i$ is the average relative frequency offset during the $i$-th averaging time $\tau$.

The corresponding Allan deviation is:
$$\text{ADEV} = \sigma_y(\tau) = \sqrt{\sigma_y^2(\tau)}$$

## Difference from Standard Deviation

Traditional standard deviation (StdDev) has limitations when evaluating frequency stability: when noise type is flicker frequency noise, standard deviation diverges with increasing sample size—meaning infinite samples still cannot achieve convergence.

ADEV advantages:

- Converges for multiple noise types
- Can identify noise power law types
- Has clear correspondence with physical processes

| Noise Type | StdDev Behavior | ADEV Behavior |
| :--- | :--- | :--- |
| White phase noise | Diverges | Converges $\propto \tau^{-1}$ |
| Flicker phase noise | Diverges | Converges $\propto \tau^{0}$ |
| White frequency noise | Converges | Converges $\propto \tau^{-1/2}$ |
| Flicker frequency noise | Diverges | Converges $\propto \tau^{0}$ |
| Random walk frequency noise | Converges | Converges $\propto \tau^{1/2}$ |

## Modified Allan Deviation (MDEV)

The Modified Allan Deviation (MDEV) used in DRO-A gravitational redshift experiments:

$$\text{MDEV} = \sqrt{\frac{1}{2(N-2\tau_0)} \sum_{i=1}^{N-2} \left( \frac{1}{\tau^2} \int_{\tau_0}^{\tau_0+\tau} \int_{\tau_0}^{\tau_0+\tau} \dot{x}(t_2) - \dot{x}(t_1) \, dt_1 \, dt_2 \right)^2}$$

MDEV advantages over ADEV:

- Better confidence for the same noise type
- Can distinguish white frequency noise from flicker frequency noise

## Typical Performance Specifications

Typical ADEV values for different atomic clock types:

| Oscillator Type | $\tau = 1$ s | $\tau = 1000$ s | $\tau = 10000$ s |
| :--- | :--- | :--- | :--- |
| Passive Hydrogen Maser (PHM) | $10^{-12}$ | $10^{-14}$ | $10^{-14}$ |
| Cesium Beam Tube | $10^{-11}$ | $10^{-13}$ | $10^{-13}$ |
| Rubidium | $10^{-11}$ | $10^{-12}$ | $10^{-12}$ |
| Strontium Optical Lattice Clock | $10^{-16}$ | $10^{-18}$ | $10^{-18}$ |

## Application in DRO-A Experiment

The DRO-A satellite gravitational redshift experiment measured satellite-ground time-frequency comparison stability:

| Averaging Time | April 28 MDEV | April 29 MDEV |
| :--- | :--- | :--- |
| 10 s | $6.14 \times 10^{-13}$ | $7.01 \times 10^{-13}$ |
| 100 s | $8.03 \times 10^{-13}$ | $8.03 \times 10^{-13}$ |
| 1000 s | $4.58 \times 10^{-14}$ | $6.98 \times 10^{-14}$ |
| 2000 s | $1.27 \times 10^{-14}$ | $2.10 \times 10^{-14}$ |

Key findings:

- Stability at 1000s averaging exceeds $7 \times 10^{-14}$
- Stability at 2000s averaging exceeds $2 \times 10^{-14}$
- Stability outperforms accuracy by two orders of magnitude, meaning stability is the primary limiting factor for gravitational redshift measurements

## Related Concepts

- [Passive Hydrogen Maser (PHM)](/en/glossary/fundamentals/passive-hydrogen-maser/)
- [Gravitational Redshift](/en/glossary/fundamentals/gravitational-redshift/)
- [Dual One-Way Ranging (DOWR)](/en/glossary/fundamentals/dual-one-way-ranging/)
- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/dro/)

## References

- Allan D W 1966 Proc. IEEE 54 221
- Li Y, Liu T et al. 2026 Chin. Phys. Lett. 43 031101
