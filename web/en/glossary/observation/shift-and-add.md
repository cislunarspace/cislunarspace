---
title: Shift-and-Add (SAA)
description: Shift-and-Add is an image processing technique that detects moving celestial objects by assuming target motion trajectories, shifting images accordingly, and then stacking them.
keywords: Shift-and-Add, SAA, Image Stacking, Moving Object Detection, Cislunar Survey, Near-Earth Asteroids
author: Tianjiang Says
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Shift-and-Add (SAA)
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Shift-and-Add (SAA) Explained | Moving Object Detection Technique
  description: Shift-and-Add is an image processing technique that detects moving celestial objects by assuming target motion trajectories, shifting images accordingly, and then stacking them.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Shift-and-Add (SAA) Explained | Moving Object Detection Technique
  description: Shift-and-Add is an image processing technique that detects moving celestial objects by assuming target motion trajectories, shifting images accordingly, and then stacking them.
  image: /logo.png
permalink: /en/glossary/observation/shift-and-add/
---

# Shift-and-Add (SAA)

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Shift-and-Add (SAA) is a moving object detection technique developed on the basis of image stacking. It works by assuming multiple possible motion trajectories of the observed target, shifting the image frames according to the assumed displacements, and then stacking them to extract candidate celestial sources. SAA effectively solves the problem that conventional image stacking cannot detect moving targets.

## Core Principles

### Fundamental Concept

Standard image stacking assumes that the target remains at a fixed position across all frames. For moving objects, direct stacking causes the signal to be "smeared" or "blurred." The core idea of SAA is to shift each frame according to the target's assumed direction and speed of motion before stacking, so that under the given motion hypothesis, the target positions align across frames and the signal is properly recovered.

### Processing Pipeline

The complete SAA processing pipeline consists of three main stages:

#### 1. Image Preprocessing

Standard calibration is applied to each raw image frame:

- **Bias Subtraction**: Removes fixed-pattern noise from the readout electronics
- **Flat-field Correction**: Corrects for non-uniform response of the optical system and detector
- **Hot Pixel Elimination**: Removes anomalously bright pixels caused by detector defects

#### 2. Image Alignment

Before applying SAA, basic alignment of images is required:

- **Background Star Removal**: Identifies and removes background star signals to prevent interference with target detection
- **Inter-frame Offset Estimation**: Calculates pointing offsets between frames to establish a baseline for subsequent shifting operations

#### 3. SAA Detection

The core shift-and-add process proceeds as follows:

- **Assume Displacement**: Set a displacement parameter pair $(dx, dy)$ representing the pixel movement of the target between frames
- **Image Shifting**: Shift each frame by $(dx, dy)$ at the pixel level
- **Stacking**: Combine the shifted images
- **Candidate Source Extraction**: Detect candidate celestial sources in the stacked frame
- **Multiple Iterations**: Repeat the process with different $(dx, dy)$ values to generate multiple stacked frames, covering the possible range of target motion

### Computational Efficiency Optimization

To improve computational efficiency, SAA typically employs integer-pixel shifts rather than sub-pixel interpolation. While sub-pixel alignment offers greater precision, integer-pixel shifts are significantly more efficient computationally, which is especially advantageous when a large number of $(dx, dy)$ combinations need to be tested.

## Application in Cislunar Observation

SAA plays a critical role in detecting moving objects in cislunar space. The dynamic characteristics of cislunar objects render traditional fixed-target detection methods inadequate:

- **Non-Keplerian Motion**: Cislunar objects follow the dynamics of the three-body problem rather than simple two-body conic trajectories
- **Non-planar Trajectories**: The motion paths of these objects are generally not confined to a single plane
- **Apparent Motion Characteristics**: Under sidereal tracking observation mode, the apparent motion of cislunar objects relative to background stars is not significant, making SAA application more feasible

Sun et al. (2026) note that SAA techniques can effectively cover the possible range of motion of cislunar objects by assuming multiple motion patterns and performing shifted stacking, thereby enabling detection of faint moving targets. SAA serves as the foundation for Synthetic Tracking, which further enhances computational efficiency and real-time processing capabilities.

## Related Concepts

- [Image Stacking](/en/glossary/observation/image-stacking/)
- [Synthetic Tracking](/en/glossary/observation/synthetic-tracking/)
- [Sidereal Tracking](/en/glossary/observation/sidereal-tracking/)

## References

- Sun, R., Zhang, Q., Yu, S., et al. Optical Survey for Cislunar Moving Objects Using Image Stacking. AJ, 2026.
