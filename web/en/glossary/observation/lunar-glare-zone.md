---
title: Lunar Glare Zone
description: Detailed explanation of the lunar glare zone (cone of shame) including definition, cause, extent, and impact on cislunar optical observation
keywords: Lunar Glare Zone, Cone of Shame, Moon glare, optical observation, signal-to-noise ratio, cislunar space
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Lunar Glare Zone
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Lunar Glare Zone Explained | Cone of Shame
  description: Detailed explanation of the lunar glare zone (cone of shame) including definition, cause, extent, and impact on cislunar optical observation
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Lunar Glare Zone Explained | Cone of Shame
  description: Detailed explanation of the lunar glare zone (cone of shame) including definition, cause, extent, and impact on cislunar optical observation
  image: /logo.png
permalink: /en/glossary/observation/lunar-glare-zone/
---

# Lunar Glare Zone

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The lunar glare zone, also known as the "cone of shame," is the region surrounding the Moon where strong scattered light from the lunar surface reflection of sunlight significantly limits the observation capability of both ground-based optical sensors and Earth-orbiting space-based optical sensors. Within this zone, the signal-to-noise ratio (SNR) of space objects drops dramatically.

## Core Principles

The Moon does not emit its own light; its visible brightness comes from reflecting sunlight. The lunar surface reflectance (albedo) is approximately 0.12, but due to the Moon's proximity to Earth and its large apparent area, it appears extremely bright in the sky. When a telescope points near the Moon, scattered lunar light produces stray light within the optical system, overwhelming signals from faint space objects.

The extent of the lunar glare zone is typically defined as:

- **Within ~15° of the Moon's center**: SNR severely degraded, optical observation extremely difficult
- **2°–15° from the Moon's center**: observation significantly affected, but special image processing techniques may enable partial target extraction
- **<2° from the Moon's center**: traditionally considered completely unobservable, though recent research has demonstrated breakthrough feasibility

## Influencing Factors

The actual extent of the lunar glare zone depends on several factors:

1. **Lunar phase**: glare is strongest during full Moon with the largest affected area; weakest during new Moon
2. **Telescope optical design**: baffle length and internal baffling directly affect stray light levels
3. **Atmospheric conditions**: atmospheric scattering can exacerbate the effects of lunar glare
4. **Detector sensitivity**: highly sensitive sensors retain some detection capability even at low SNR
5. **Image processing algorithms**: advanced background subtraction and source extraction algorithms can partially mitigate glare effects

## Comparison with Other Observation Constraints

The lunar glare zone is one of several major constraints on cislunar optical observation, compared with other limiting factors:

| Constraint | Affected Region | Primary Effect |
| :--- | :--- | :--- |
| Lunar glare zone | ~15° from Moon's center | SNR drops dramatically |
| Solar avoidance zone | Solar elongation <30° | High sky background brightness |
| Atmospheric extinction | Elevation <20° | Throughput loss, refraction distortion |
| Galactic background | Near galactic plane | Dense stars, source detection difficulty |

## Applications in Cislunar Observation

Sun et al. (2026) note that "when looking near the Moon, the use of both Earth-based optical sensors and Earth-orbiting space-based optical sensors is challenging, due to the reflection of sunlight from the lunar surface." Within the lunar glare zone, space objects are "imaged with a low signal-to-noise ratio."

However, the study also demonstrated the feasibility of obtaining optical measurements down to 2° from the Moon's center. This means that by optimizing observation strategies and image processing pipelines, the effective observation boundary of the lunar glare zone can be significantly compressed inward from the traditional 15° limit, substantially expanding the observable region for cislunar optical surveys.

This breakthrough has important implications for cislunar space situational awareness: many important cislunar orbits (such as the lunar-proximal arc of near-rectilinear halo orbits, NRHO) pass through the lunar glare zone, and the ability to effectively observe within this zone would greatly enhance the completeness of space situational awareness.

## Related Concepts

- [Cislunar Moving Objects](/en/glossary/observation/cislunar-moving-objects/)
- [Image Registration](/en/glossary/observation/image-registration/)
- [Background Star Elimination](/en/glossary/observation/background-star-elimination/)
- [Near-Rectilinear Halo Orbit (NRHO)](/en/glossary/orbits/nrho/)

## References

- Sun, R., Zhang, Q., Yu, S., et al. Optical Survey for Cislunar Moving Objects Using Image Stacking. AJ, 2026.
