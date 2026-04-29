---
title: Signal-to-Noise Ratio (SNR)
description: SNR is the most fundamental measurement in astronomical observation, determining whether celestial targets can be effectively detected above background noise
keywords: Signal-to-Noise Ratio, SNR, Image Stacking, Astronomical Observation, Detection Threshold, Cislunar Space, Image Processing
author: Tianjiang Says
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Signal-to-Noise Ratio (SNR)
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Signal-to-Noise Ratio (SNR) Details | Fundamental Measurement in Astronomical Observation
  description: SNR is the most fundamental measurement in astronomical observation, determining whether celestial targets can be effectively detected above background noise
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Signal-to-Noise Ratio (SNR) Details | Fundamental Measurement in Astronomical Observation
  description: SNR is the most fundamental measurement in astronomical observation, determining whether celestial targets can be effectively detected above background noise
  image: /logo.png
permalink: /en/glossary/observation/signal-to-noise-ratio/
---

# Signal-to-Noise Ratio (SNR)

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Signal-to-Noise Ratio (SNR) is a dimensionless metric that measures the strength of an observed signal relative to the level of background noise. It is the most fundamental and critical quality indicator in astronomical observation. A higher SNR indicates that the target signal is stronger relative to background noise, yielding more reliable detection results.

In astronomical images, SNR is typically defined as the ratio of the target source signal intensity (flux) to the standard deviation of the background noise:

$$\text{SNR} = \frac{S}{\sigma_{\text{bg}}}$$

where $S$ is the target signal and $\sigma_{\text{bg}}$ is the standard deviation of the background noise.

## Key Principles

### Single-Frame SNR

The SNR of a single image frame is denoted as $\text{SNR}_O$ and is limited by atmospheric conditions, exposure time, telescope aperture, and detector noise. For faint moving objects in cislunar space, the single-frame SNR is often too low for reliable detection.

### SNR Improvement Through Multi-Frame Stacking

Image stacking is the core technique for improving SNR. Assuming that frames are independently and identically distributed, when $N$ frames are stacked, the signal adds linearly while noise grows as $\sqrt{N}$, giving:

$$\text{SNR}_S = \text{SNR}_O \cdot \sqrt{N}$$

That is, the SNR improvement factor is $\sqrt{N}$. Sun et al. (2026) verified this relationship with actual observational data:

| Stacked Frames $N$ | Theoretical Improvement ($\sqrt{N}$) | Measured Improvement |
|:---:|:---:|:---:|
| 4 | 2.00× | 1.90× |
| 6 | 2.45× | 2.29× |
| 9 | 3.00× | 2.73× |

Measured values are slightly lower than theoretical predictions, primarily due to correlated noise between frames (such as systematic errors from atmospheric turbulence) and limitations in image registration accuracy.

### Detection Threshold

SNR is the critical parameter determining whether a target can be detected. When a target's SNR falls below a certain threshold, the target becomes indistinguishable from noise. During source extraction, detection thresholds are typically set at a multiple of the background noise standard deviation (e.g., $1.5\sigma$ for background star detection, $3\sigma$ for candidate detection after stacking).

## Application in Cislunar Space Observation

Moving objects in cislunar space (such as spacecraft and debris) are faint and fast-moving, resulting in very low single-frame SNR. Sun et al. (2026) systematically leveraged the SNR improvement from image stacking in their optical survey of the Chang'e-6 orbiter:

1. **Progressive stacking validation**: By stacking from 2 to 9 frames incrementally, they confirmed the theoretical $\sqrt{N}$ SNR improvement pattern
2. **Stacking frame optimization**: The study found that 9-frame stacking improves SNR by more than 2.7×, significantly enhancing the detection rate of faint objects
3. **Foundation for residual analysis**: SNR directly affects astrometric accuracy — high-SNR images achieve measurement precision better than 0.1 pixels, providing reliable input for subsequent ephemeris correlation

This approach provides a practical technical pathway for detecting faint objects in cislunar space situational awareness.

## Related Concepts

- [Image Stacking](/en/glossary/observation/image-stacking/)
- [Source Extraction](/en/glossary/observation/source-extraction/)
- [Astrometry](/en/glossary/observation/astrometry/)
- [Ephemeris Correlation](/en/glossary/observation/ephemeris-correlation/)

## References

- Sun, R., Zhang, Q., Yu, S., et al. Optical Survey for Cislunar Moving Objects Using Image Stacking. AJ, 2026.
