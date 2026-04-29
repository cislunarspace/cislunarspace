---
title: Sidereal Tracking
description: Sidereal Tracking is a telescope observation mode that tracks background stars as reference, suited for long-duration observations of cislunar objects governed by three-body dynamics.
keywords: Sidereal Tracking, Three-body Problem, Telescope Tracking, Cislunar Observation, Long Exposure, Shift-and-Add
author: Tianjiang Says
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Sidereal Tracking
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Sidereal Tracking Explained | Cislunar Object Observation Mode
  description: Sidereal Tracking is a telescope observation mode that tracks background stars as reference, suited for long-duration observations of cislunar objects governed by three-body dynamics.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Sidereal Tracking Explained | Cislunar Object Observation Mode
  description: Sidereal Tracking is a telescope observation mode that tracks background stars as reference, suited for long-duration observations of cislunar objects governed by three-body dynamics.
  image: /logo.png
permalink: /en/glossary/observation/sidereal-tracking/
---

# Sidereal Tracking

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Sidereal Tracking is a telescope tracking observation mode in which the telescope follows the apparent motion of stars (i.e., Earth's rotational angular velocity), keeping background stars stationary in the image. In this mode, celestial objects that move relative to the stellar background — such as near-Earth asteroids, cislunar debris, and other orbiting bodies — appear as moving points of light or trailing streaks in the image.

## Core Principles

### Kinematic Basis of Sidereal Tracking

The core principle of sidereal tracking is compensating for the apparent motion of stars caused by Earth's rotation:

- **Tracking Reference**: The telescope rotates at the sidereal rate, synchronized with but opposite to Earth's rotation
- **Stationary Stars**: During tracking, background stars maintain fixed positions on the detector
- **Moving Target Visibility**: Objects with proper motion or orbital motion relative to the stellar background exhibit displacement in the image

### Comparison with Other Tracking Modes

| Tracking Mode | Tracking Target | Background Stars | Moving Objects |
|--------------|----------------|-----------------|----------------|
| Sidereal Tracking | Background stars | Stationary | Moving (trailing or displaced) |
| Target Tracking | Specific object | Moving (trailing) | Stationary |
| Fixed Pointing | No tracking | Trailing | Trailing (different rate) |

### Long-Duration Observation Requirements

For observing objects in cislunar space, sidereal tracking mode typically requires longer observation durations. This is because cislunar objects have relatively low apparent motion rates on the celestial sphere, and sufficient observation time is needed to accumulate enough displacement to distinguish the object's motion from noise and systematic errors.

## Application in Cislunar Observation

Sidereal tracking is the most commonly used observation mode for optical surveys of cislunar objects. Its suitability stems from the unique dynamic characteristics of cislunar targets.

### The Three-Body Motion Challenge

Sun et al. (2026) point out that the motion of cislunar objects typically follows the dynamics of the three-body problem rather than the two-body problem. This implies:

- **Non-Keplerian Orbits**: Object trajectories are not standard ellipses, parabolas, or hyperbolas
- **Non-planar Motion**: Trajectories are generally not confined to a single fixed plane
- **Complex Dynamics**: Objects are subject to gravitational influences from Earth, the Moon, and other bodies, resulting in complex and varied motion patterns

These characteristics make object-tracking based on two-body orbital prediction difficult, while sidereal tracking provides a robust observation approach that is independent of orbital models.

### Synergy with Shift-and-Add

Sidereal tracking has a natural synergy with Shift-and-Add (SAA) techniques:

- **Relatively Small Apparent Motion**: Under sidereal tracking, the apparent motion of cislunar objects relative to background stars is generally not significant (since the telescope has already compensated for Earth's rotation)
- **SAA Feasibility**: The smaller apparent motion means that the displacement parameters $(dx, dy)$ required for SAA are relatively small, keeping computational cost manageable
- **SNR Advantage**: Longer observation durations allow more frames to be stacked, resulting in greater SNR gains

### Observation Strategy

In practice, the typical strategy combining sidereal tracking with SAA for survey observations is:

1. The telescope continuously observes the target sky region at the sidereal tracking rate
2. A large number of short-exposure images are acquired in sequence
3. SAA techniques are applied to the image series, testing multiple motion hypotheses
4. Candidate moving objects are detected in the stacked frames
5. Follow-up confirmation observations are conducted for candidate targets

## Related Concepts

- [Image Stacking](/en/glossary/observation/image-stacking/)
- [Shift-and-Add (SAA)](/en/glossary/observation/shift-and-add/)
- [Synthetic Tracking](/en/glossary/observation/synthetic-tracking/)

## References

- Sun, R., Zhang, Q., Yu, S., et al. Optical Survey for Cislunar Moving Objects Using Image Stacking. AJ, 2026.
