---
title: Image Stacking
description: Image stacking is an image processing technique that combines multiple frames to enhance signal-to-noise ratio and improve detection capabilities for faint celestial objects.
keywords: Image Stacking, Signal-to-Noise Ratio, SNR, Astronomical Image Processing, Cislunar Observation, Faint Object Detection
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Image Stacking
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Image Stacking Explained | Core Astronomical Image Processing Technique
  description: Image stacking is an image processing technique that combines multiple frames to enhance signal-to-noise ratio and improve detection capabilities for faint celestial objects.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Image Stacking Explained | Core Astronomical Image Processing Technique
  description: Image stacking is an image processing technique that combines multiple frames to enhance signal-to-noise ratio and improve detection capabilities for faint celestial objects.
  image: /logo.png
permalink: /en/glossary/observation/image-stacking/
---

# Image Stacking

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Image stacking is a widely used technique in astronomical image processing. Its core principle involves combining multiple observed image frames to enhance the signal-to-noise ratio (SNR) and thereby improve the capability to detect faint celestial objects. The technique is grounded in statistical principles: when N frames are stacked, the signal strength increases by a factor of N, while the noise level increases by only a factor of √N, resulting in an overall SNR improvement of √N.

## Core Principles

### SNR Enhancement Formula

The SNR gain from image stacking follows this relationship:

$$SNR_S / SNR_O = \sqrt{N}$$

where $SNR_S$ is the stacked SNR, $SNR_O$ is the single-frame SNR, and $N$ is the number of stacked frames. This means:

- With 4 frames, the SNR improves by a factor of 2
- With 100 frames, the SNR improves by a factor of 10
- With 10,000 frames, the SNR improves by a factor of 100

### Statistical Properties of Signal and Noise

The effectiveness of image stacking fundamentally relies on the differing statistical properties of signal and noise:

- **Signal**: The target celestial object maintains a consistent position and brightness across frames. When stacked, the signal grows linearly (by a factor of N)
- **Noise**: Including readout noise, dark current noise, and sky background noise, these noise sources are randomly distributed across frames. When stacked, they grow according to statistical laws (by a factor of √N)

### Basic Workflow

The standard image stacking workflow includes the following steps:

1. **Image Preprocessing**: Perform bias subtraction and flat-field correction on each frame
2. **Image Alignment**: Align frames based on background star positions to eliminate pointing offsets
3. **Stacking**: Combine aligned images at the pixel level
4. **Source Extraction**: Detect celestial sources in the stacked image

## Application in Cislunar Observation

Image stacking is a foundational technique for observing faint objects in cislunar space. In optical survey observations, cislunar targets are typically extremely faint, and single-frame exposures alone are often insufficient to achieve the required SNR. Through image stacking, observers can effectively enhance detection sensitivity and discover dimmer objects.

As noted by Sun et al. (2026), image stacking is a popular method for enhancing detection capabilities in image processing. However, for moving objects in cislunar space, straightforward image stacking presents challenges: since the target moves between frames, direct stacking causes the target signal to become "blurred" or "smeared." To address this, researchers have developed more advanced techniques such as Shift-and-Add (SAA), which pre-assumes target motion trajectories and shifts images accordingly before stacking, thereby maintaining SNR gains while effectively detecting moving objects.

The SNR enhancement provided by image stacking is particularly critical for detecting faint targets such as near-Earth asteroids (NEAs). Using Synthetic Tracking techniques, researchers have successfully detected NEA images at approximately magnitude 25, which would be nearly impossible with single-frame observations.

## Related Concepts

- [Shift-and-Add (SAA)](/en/glossary/observation/shift-and-add/)
- [Synthetic Tracking](/en/glossary/observation/synthetic-tracking/)
- [Sidereal Tracking](/en/glossary/observation/sidereal-tracking/)

## References

- Sun, R., Zhang, Q., Yu, S., et al. Optical Survey for Cislunar Moving Objects Using Image Stacking. AJ, 2026.
