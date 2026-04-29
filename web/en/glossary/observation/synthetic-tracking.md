---
title: Synthetic Tracking
description: Synthetic Tracking is a computationally enhanced implementation of Shift-and-Add that enables near-real-time blind search discovery and tracking of faint, fast-moving near-Earth asteroids.
keywords: Synthetic Tracking, Near-Earth Asteroids, NEA, Blind Search, Real-time Detection, Shift-and-Add, Cislunar Survey
author: Tianjiang Says
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Synthetic Tracking
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Synthetic Tracking Explained | Real-time Near-Earth Asteroid Detection
  description: Synthetic Tracking is a computationally enhanced implementation of Shift-and-Add that enables near-real-time blind search discovery and tracking of faint, fast-moving near-Earth asteroids.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Synthetic Tracking Explained | Real-time Near-Earth Asteroid Detection
  description: Synthetic Tracking is a computationally enhanced implementation of Shift-and-Add that enables near-real-time blind search discovery and tracking of faint, fast-moving near-Earth asteroids.
  image: /logo.png
permalink: /en/glossary/observation/synthetic-tracking/
---

# Synthetic Tracking

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Synthetic Tracking is a computationally enhanced implementation of the Shift-and-Add (SAA) technique. Through algorithmic and processing optimizations, it achieves near-real-time blind search discovery and tracking of faint, fast-moving near-Earth asteroids (NEAs). Compared to conventional SAA, Synthetic Tracking maintains the SNR gain while dramatically improving processing speed, making simultaneous discovery and tracking possible.

## Core Principles

### Evolution from SAA to Synthetic Tracking

Synthetic Tracking builds upon the foundation of the SAA method. Conventional SAA requires testing a large number of possible $(dx, dy)$ displacement combinations individually, resulting in substantial computational cost. Synthetic Tracking achieves significant efficiency improvements through:

- **Algorithm Optimization**: Improved displacement stacking computation workflow, reducing redundant calculations
- **Parallel Processing**: Leveraging modern computing architectures to parallelize computation across multiple displacement hypotheses
- **Real-time Pipeline**: Constructing a near-real-time processing pipeline from image acquisition to target detection

### Simultaneous Find-and-Track Capability

The key breakthrough of Synthetic Tracking is its ability to simultaneously discover and track targets:

- **Traditional Limitation**: In conventional survey observations, discovery and tracking are typically two separate steps — first discovering candidate targets in single or simply stacked frames, then scheduling follow-up observations for tracking confirmation
- **Synthetic Tracking Advantage**: By rapidly scanning a large number of displacement hypotheses across a wide field of view, Synthetic Tracking can complete both discovery and preliminary tracking of a target in a single processing pass, greatly reducing the time window from discovery to confirmation

### Blind Search Mode

Synthetic Tracking supports wide-field blind search mode:

- **No Prior Information Required**: Does not require prior knowledge of the target's position or motion parameters
- **Large-area Scanning**: Systematically searches the field of view for various possible motion directions and speeds
- **High Sensitivity**: Leverages the SNR gain from image stacking to detect extremely faint celestial objects

## Application in Cislunar Observation

Synthetic Tracking has significant application value in survey observations of near-Earth asteroids and cislunar space objects. One of its landmark achievements is the successful detection of an NEA image at approximately magnitude 25, which would be nearly impossible with traditional single-frame observations.

Sun et al. (2026) note that Synthetic Tracking enables observers to discover and track faint, fast-moving near-Earth asteroids almost in real time. In the context of cislunar observation, the technique's advantages are particularly pronounced:

- **Faint Target Detection**: Objects in cislunar space, such as debris and small bodies, are typically extremely faint and require the high SNR gain of Synthetic Tracking to be detected
- **Fast-moving Targets**: Near-Earth objects move at considerable apparent speeds. Traditional long-exposure methods cause target trailing, while Synthetic Tracking avoids this through short-exposure, multi-frame stacking
- **Survey Efficiency**: Blind search mode eliminates the need to specify observation targets in advance, enabling efficient systematic scanning of sky regions

The successful application of this technique provides an important technical means for cislunar space situational awareness, helping to discover and catalog a greater number of moving objects in cislunar space.

## Related Concepts

- [Image Stacking](/en/glossary/observation/image-stacking/)
- [Shift-and-Add (SAA)](/en/glossary/observation/shift-and-add/)
- [Sidereal Tracking](/en/glossary/observation/sidereal-tracking/)

## References

- Sun, R., Zhang, Q., Yu, S., et al. Optical Survey for Cislunar Moving Objects Using Image Stacking. AJ, 2026.
